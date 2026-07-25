//! NGG1 — zero-copy reader for the canonical binary graph-tier format.
//!
//! Canonical spec: `publishing-tools/WasmVOWL/FORMAT-NGG1.md`. This is the Rust
//! counterpart of `modern/src/lib/ngg1.ts`; the two MUST stay byte-compatible
//! (golden fixture `ngg1-3n2e.bin`, FORMAT-NGG1 §7).
//!
//! The reader borrows the input `&[u8]` and decodes fields on demand with
//! `from_le_bytes` — no `unsafe`, no alignment assumptions (the input slice from
//! JS is not guaranteed 4-aligned, so we never reinterpret it as `&[u32]`). The
//! only allocations are the owned working arrays the simulation asks for
//! (`seed_positions`, `edges`) and per-request string decodes. Node/CSR field
//! reads are allocation-free.
//!
//! The node record is **24 bytes** (stride, not 20 — see FORMAT-NGG1 §0: the
//! brief's "20-byte / u8 pad" arithmetic was self-inconsistent; the ADR §2 field
//! widths plus 4-byte alignment of `degree` force a 3-byte pad and stride 24).

/// LE `u32` of ASCII `NGG1` (bytes `4E 47 47 31`).
pub const NGG1_MAGIC: u32 = 0x3147_474E;
/// Format version this reader supports.
pub const NGG1_VERSION: u16 = 1;
/// Fixed header size in bytes (FORMAT-NGG1 §2).
pub const NGG1_HEADER_SIZE: usize = 32;
/// Node record stride in bytes (FORMAT-NGG1 §3). **24, not 20.**
pub const NGG1_NODE_STRIDE: usize = 24;

/// Byte offsets of fields within a 24-byte node record.
const N_ID: usize = 0;
const N_X: usize = 4;
const N_Y: usize = 8;
const N_DOMAIN: usize = 12;
const N_CATEGORY: usize = 14;
const N_FLAGS: usize = 16;
// bytes 17..20 = pad (aligns `degree`)
const N_DEGREE: usize = 20;

/// `edge_type` value: `subClassOf` backbone (render quiet charcoal).
pub const EDGE_SUBCLASS: u8 = 0;
/// `edge_type` value: `objectProperty` relation (render accented teal).
pub const EDGE_RELATION: u8 = 1;

/// Node flag bit: domain root (one of the 6 top-level nodes).
pub const FLAG_DOMAIN_ROOT: u8 = 0x01;
/// Node flag bit: category root (one of the 34 taxonomy nodes).
pub const FLAG_CATEGORY_ROOT: u8 = 0x02;
/// Node flag bit: has a resolvable page ("Read page" enabled).
pub const FLAG_HAS_PAGE: u8 = 0x04;
/// Node flag bit: bridge node (cross-domain `bridges_to`).
pub const FLAG_BRIDGE: u8 = 0x08;

/// Sentinel `category` id meaning "uncategorised" (ADR §9).
pub const CATEGORY_NONE: u16 = 0xFFFF;

/// A single decoded node record (FORMAT-NGG1 §3). All fields are copied out; the
/// record carries no borrow.
#[derive(Debug, Clone, Copy, PartialEq)]
pub struct NodeRecord {
    /// Stable external node id (page-API / stats identity). NOT necessarily the
    /// local index `i`.
    pub id: u32,
    /// Seed layout x (the worker warm-starts here).
    pub x: f32,
    /// Seed layout y.
    pub y: f32,
    /// Domain id — index into the canonical 6-domain list.
    pub domain: u16,
    /// Category id — index into the 34-category taxonomy; `CATEGORY_NONE` if
    /// uncategorised.
    pub category: u16,
    /// Flags bitfield (`FLAG_*`).
    pub flags: u8,
    /// Total incident degree in the **full** graph — ranking key for top-N
    /// labels and node scale, preserved across tiers even when edges are capped.
    pub degree: u32,
}

/// Parse error for an NGG1 buffer. `Display`s a stable, greppable reason.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Ngg1Error(pub String);

impl core::fmt::Display for Ngg1Error {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        write!(f, "NGG1: {}", self.0)
    }
}

impl std::error::Error for Ngg1Error {}

#[inline]
fn rd_u32(b: &[u8], off: usize) -> u32 {
    // Bounds are validated in `parse` before any accessor runs; this is a hot
    // decode. We still index safely (panics would indicate a parse-guard bug).
    u32::from_le_bytes([b[off], b[off + 1], b[off + 2], b[off + 3]])
}

#[inline]
fn rd_u16(b: &[u8], off: usize) -> u16 {
    u16::from_le_bytes([b[off], b[off + 1]])
}

#[inline]
fn rd_f32(b: &[u8], off: usize) -> f32 {
    f32::from_le_bytes([b[off], b[off + 1], b[off + 2], b[off + 3]])
}

/// A parsed, borrowed NGG1 tier. All accessors are O(1) and allocation-free
/// except the string decodes and the explicit `seed_positions`/`edges` builders.
/// Node accessors take a *local index* `i` in `[0, node_count)`.
pub struct Ngg1<'a> {
    bytes: &'a [u8],
    node_count: usize,
    edge_count: usize,
    off_nodes: usize,
    off_adjacency: usize,
    off_col_idx: usize,
    off_edge_types: usize,
    str_count: usize,
    blob_len: usize,
    off_str_offsets: usize,
    off_blob: usize,
}

impl<'a> Ngg1<'a> {
    /// Parse and fully bounds-check an NGG1 buffer. Mirrors the guards in
    /// `ngg1.ts::parseNgg1`: magic, version, alignment, and every section end
    /// against the buffer length. A truncated or malformed artifact fails loudly
    /// rather than reading garbage.
    pub fn parse(bytes: &'a [u8]) -> Result<Self, Ngg1Error> {
        if bytes.len() < NGG1_HEADER_SIZE {
            return Err(Ngg1Error(format!(
                "buffer too small ({} < {})",
                bytes.len(),
                NGG1_HEADER_SIZE
            )));
        }
        let magic = rd_u32(bytes, 0);
        if magic != NGG1_MAGIC {
            return Err(Ngg1Error(format!(
                "bad magic 0x{magic:08X} (expected 0x{NGG1_MAGIC:08X})"
            )));
        }
        let version = rd_u16(bytes, 4);
        if version != NGG1_VERSION {
            return Err(Ngg1Error(format!(
                "unsupported version {version} (reader supports {NGG1_VERSION})"
            )));
        }
        let node_count = rd_u32(bytes, 8) as usize;
        let edge_count = rd_u32(bytes, 12) as usize;
        let off_nodes = rd_u32(bytes, 16) as usize;
        let off_adjacency = rd_u32(bytes, 20) as usize;
        let off_edge_types = rd_u32(bytes, 24) as usize;
        let off_strings = rd_u32(bytes, 28) as usize;

        if (off_nodes | off_adjacency | off_edge_types | off_strings) & 3 != 0 {
            return Err(Ngg1Error("a section offset is not 4-byte aligned".into()));
        }

        let len = bytes.len();
        // Section 1: nodes.
        let nodes_end = off_nodes
            .checked_add(node_count.checked_mul(NGG1_NODE_STRIDE).ok_or_ov()?)
            .ok_or_ov()?;
        // Section 2: adjacency = row_ptr[node_count+1] then col_idx[edge_count].
        let row_ptr_len = node_count + 1;
        let off_col_idx = off_adjacency
            .checked_add(row_ptr_len.checked_mul(4).ok_or_ov()?)
            .ok_or_ov()?;
        let adj_end = off_col_idx
            .checked_add(edge_count.checked_mul(4).ok_or_ov()?)
            .ok_or_ov()?;
        // Section 3: edge types (pre-pad).
        let edge_types_end = off_edge_types.checked_add(edge_count).ok_or_ov()?;
        // Section 4: string table header.
        if off_strings.checked_add(8).ok_or_ov()? > len {
            return Err(Ngg1Error("string table header exceeds buffer".into()));
        }
        if nodes_end > len || adj_end > len || edge_types_end > len {
            return Err(Ngg1Error(
                "section bounds exceed buffer length (truncated artifact)".into(),
            ));
        }

        let str_count = rd_u32(bytes, off_strings) as usize;
        let blob_len = rd_u32(bytes, off_strings + 4) as usize;
        if str_count != node_count * 2 {
            return Err(Ngg1Error(format!(
                "string count {str_count} != 2 * node_count {}",
                node_count * 2
            )));
        }
        let off_str_offsets = off_strings + 8;
        let off_blob = off_str_offsets
            .checked_add(str_count.checked_mul(4).ok_or_ov()?)
            .ok_or_ov()?;
        if off_blob.checked_add(blob_len).ok_or_ov()? > len {
            return Err(Ngg1Error("string blob exceeds buffer length".into()));
        }

        Ok(Self {
            bytes,
            node_count,
            edge_count,
            off_nodes,
            off_adjacency,
            off_col_idx,
            off_edge_types,
            str_count,
            blob_len,
            off_str_offsets,
            off_blob,
        })
    }

    /// Number of node records.
    #[inline]
    pub fn node_count(&self) -> usize {
        self.node_count
    }

    /// Number of directed edges.
    #[inline]
    pub fn edge_count(&self) -> usize {
        self.edge_count
    }

    /// Decode node record `i`. Panics only on an out-of-range index.
    #[inline]
    pub fn node(&self, i: usize) -> NodeRecord {
        assert!(i < self.node_count, "NGG1: node index {i} out of range");
        let o = self.off_nodes + i * NGG1_NODE_STRIDE;
        NodeRecord {
            id: rd_u32(self.bytes, o + N_ID),
            x: rd_f32(self.bytes, o + N_X),
            y: rd_f32(self.bytes, o + N_Y),
            domain: rd_u16(self.bytes, o + N_DOMAIN),
            category: rd_u16(self.bytes, o + N_CATEGORY),
            flags: self.bytes[o + N_FLAGS],
            degree: rd_u32(self.bytes, o + N_DEGREE),
        }
    }

    /// `row_ptr[i]` — start of node `i`'s out-edge slot range. `i` in
    /// `[0, node_count]`.
    #[inline]
    pub fn row_ptr(&self, i: usize) -> u32 {
        debug_assert!(i <= self.node_count);
        rd_u32(self.bytes, self.off_adjacency + i * 4)
    }

    /// `col_idx[e]` — target local index of edge slot `e`.
    #[inline]
    pub fn col_idx(&self, e: usize) -> u32 {
        debug_assert!(e < self.edge_count);
        rd_u32(self.bytes, self.off_col_idx + e * 4)
    }

    /// `edge_type[e]` (`EDGE_SUBCLASS` / `EDGE_RELATION`).
    #[inline]
    pub fn edge_type(&self, e: usize) -> u8 {
        debug_assert!(e < self.edge_count);
        self.bytes[self.off_edge_types + e]
    }

    /// Raw string `s` in `[0, 2*node_count)`. UTF-8 decoded lossily (a corrupt
    /// blob degrades to replacement chars rather than panicking).
    pub fn string(&self, s: usize) -> String {
        assert!(s < self.str_count, "NGG1: string index {s} out of range");
        let start = rd_u32(self.bytes, self.off_str_offsets + s * 4) as usize;
        let end = if s + 1 < self.str_count {
            rd_u32(self.bytes, self.off_str_offsets + (s + 1) * 4) as usize
        } else {
            self.blob_len
        };
        let a = self.off_blob + start.min(self.blob_len);
        let b = self.off_blob + end.min(self.blob_len);
        String::from_utf8_lossy(&self.bytes[a..b.max(a)]).into_owned()
    }

    /// Label of node `i` (`string(i*2)`).
    #[inline]
    pub fn label(&self, i: usize) -> String {
        self.string(i * 2)
    }

    /// IRI of node `i` (`string(i*2 + 1)`).
    #[inline]
    pub fn iri(&self, i: usize) -> String {
        self.string(i * 2 + 1)
    }

    /// Packed seed positions `[x0,y0,x1,y1,…]`, length `node_count * 2`. This is
    /// the warm-start buffer the simulation seeds from (one copy).
    pub fn seed_positions(&self) -> Vec<f32> {
        let mut out = vec![0.0f32; self.node_count * 2];
        for i in 0..self.node_count {
            let o = self.off_nodes + i * NGG1_NODE_STRIDE;
            out[i * 2] = rd_f32(self.bytes, o + N_X);
            out[i * 2 + 1] = rd_f32(self.bytes, o + N_Y);
        }
        out
    }

    /// Materialise the directed edge list as parallel `(src, tgt, edge_type)`
    /// arrays by walking the CSR. Used once at scope load to build spring state.
    pub fn edges(&self) -> (Vec<u32>, Vec<u32>, Vec<u8>) {
        let e = self.edge_count;
        let mut src = Vec::with_capacity(e);
        let mut tgt = Vec::with_capacity(e);
        let mut ty = Vec::with_capacity(e);
        for i in 0..self.node_count {
            let lo = self.row_ptr(i) as usize;
            let hi = self.row_ptr(i + 1) as usize;
            for slot in lo..hi.min(e) {
                src.push(i as u32);
                tgt.push(self.col_idx(slot));
                ty.push(self.edge_type(slot));
            }
        }
        (src, tgt, ty)
    }

    /// Per-node full-graph degree vector (render scale / label ranking key).
    pub fn degrees(&self) -> Vec<u32> {
        (0..self.node_count).map(|i| self.node(i).degree).collect()
    }
}

/// Small helper: turn an arithmetic overflow into a typed parse error.
trait OkOrOv {
    fn ok_or_ov(self) -> Result<usize, Ngg1Error>;
}
impl OkOrOv for Option<usize> {
    #[inline]
    fn ok_or_ov(self) -> Result<usize, Ngg1Error> {
        self.ok_or_else(|| Ngg1Error("section arithmetic overflow".into()))
    }
}

/// The FORMAT-NGG1 §7 worked example, byte-exact (183 bytes). Rust-side twin of
/// the `ngg1-3n2e.bin` golden fixtures; shared by the `ngg1` and `csr_sim` unit
/// tests. Test builds only.
#[cfg(test)]
pub(crate) fn worked_example() -> Vec<u8> {
    let bytes: Vec<u8> = vec![
            // ── HEADER [0..32) ──
            0x4E, 0x47, 0x47, 0x31, // magic 'NGG1'
            0x01, 0x00, // version = 1
            0x00, 0x00, // pad
            0x03, 0x00, 0x00, 0x00, // node_count = 3
            0x02, 0x00, 0x00, 0x00, // edge_count = 2
            0x20, 0x00, 0x00, 0x00, // off_nodes      = 32
            0x68, 0x00, 0x00, 0x00, // off_adjacency  = 104
            0x80, 0x00, 0x00, 0x00, // off_edge_types = 128
            0x84, 0x00, 0x00, 0x00, // off_strings    = 132
            // ── SECTION 1 NODES [32..104) ──
            // n0
            0x00, 0x00, 0x00, 0x00, // id = 0
            0x00, 0x00, 0x00, 0x00, // x = 0.0
            0x00, 0x00, 0x00, 0x00, // y = 0.0
            0x00, 0x00, // domain = 0
            0x00, 0x00, // category = 0
            0x01, // flags = 0x01 (domain root)
            0x00, 0x00, 0x00, // pad
            0x01, 0x00, 0x00, 0x00, // degree = 1
            // n1
            0x01, 0x00, 0x00, 0x00, // id = 1
            0x00, 0x00, 0x80, 0x3F, // x = 1.0
            0x00, 0x00, 0x00, 0x00, // y = 0.0
            0x00, 0x00, // domain = 0
            0x01, 0x00, // category = 1
            0x00, // flags = 0x00
            0x00, 0x00, 0x00, // pad
            0x02, 0x00, 0x00, 0x00, // degree = 2
            // n2
            0x02, 0x00, 0x00, 0x00, // id = 2
            0x00, 0x00, 0x00, 0x00, // x = 0.0
            0x00, 0x00, 0x80, 0x3F, // y = 1.0
            0x00, 0x00, // domain = 0
            0x01, 0x00, // category = 1
            0x00, // flags = 0x00
            0x00, 0x00, 0x00, // pad
            0x01, 0x00, 0x00, 0x00, // degree = 1
            // ── SECTION 2 ADJACENCY [104..128) ──
            0x00, 0x00, 0x00, 0x00, // row_ptr[0] = 0
            0x00, 0x00, 0x00, 0x00, // row_ptr[1] = 0
            0x02, 0x00, 0x00, 0x00, // row_ptr[2] = 2
            0x02, 0x00, 0x00, 0x00, // row_ptr[3] = 2
            0x00, 0x00, 0x00, 0x00, // col_idx[0] = 0
            0x02, 0x00, 0x00, 0x00, // col_idx[1] = 2
            // ── SECTION 3 EDGE TYPES [128..132) ──
            0x00, // edge_type[0] = 0
            0x01, // edge_type[1] = 1
            0x00, 0x00, // pad → 4-byte boundary
            // ── SECTION 4 STRING TABLE [132..183) ──
            0x06, 0x00, 0x00, 0x00, // count = 6
            0x13, 0x00, 0x00, 0x00, // blob_len = 19
            0x00, 0x00, 0x00, 0x00, // offset[0] = 0
            0x02, 0x00, 0x00, 0x00, // offset[1] = 2
            0x06, 0x00, 0x00, 0x00, // offset[2] = 6
            0x08, 0x00, 0x00, 0x00, // offset[3] = 8
            0x0C, 0x00, 0x00, 0x00, // offset[4] = 12
            0x0F, 0x00, 0x00, 0x00, // offset[5] = 15
            // blob (19 bytes)
            0x41, 0x49, // "AI"
            0x6E, 0x67, 0x3A, 0x30, // "ng:0"
            0x4D, 0x4C, // "ML"
            0x6E, 0x67, 0x3A, 0x31, // "ng:1"
            0x4E, 0x4C, 0x50, // "NLP"
            0x6E, 0x67, 0x3A, 0x32, // "ng:2"
        ];
    assert_eq!(bytes.len(), 183, "worked example must be 183 bytes");
    bytes
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parses_worked_example_header() {
        let b = worked_example();
        let g = Ngg1::parse(&b).unwrap();
        assert_eq!(g.node_count(), 3);
        assert_eq!(g.edge_count(), 2);
    }

    #[test]
    fn node_stride_24_fields() {
        let b = worked_example();
        let g = Ngg1::parse(&b).unwrap();
        // n1.x == 1.0, n2.y == 1.0, n1.degree == 2 (the stride-24 assertions).
        assert_eq!(g.node(1).x, 1.0);
        assert_eq!(g.node(2).y, 1.0);
        assert_eq!(g.node(1).degree, 2);
        assert_eq!(g.node(0).flags, FLAG_DOMAIN_ROOT);
        assert_eq!(g.node(0).id, 0);
        assert_eq!(g.node(1).category, 1);
    }

    #[test]
    fn strings_pair_label_iri() {
        let b = worked_example();
        let g = Ngg1::parse(&b).unwrap();
        assert_eq!(g.label(0), "AI");
        assert_eq!(g.iri(0), "ng:0");
        assert_eq!(g.label(1), "ML");
        assert_eq!(g.iri(1), "ng:1");
        assert_eq!(g.label(2), "NLP");
        assert_eq!(g.iri(2), "ng:2");
    }

    #[test]
    fn csr_topology() {
        let b = worked_example();
        let g = Ngg1::parse(&b).unwrap();
        assert_eq!(g.row_ptr(0), 0);
        assert_eq!(g.row_ptr(1), 0);
        assert_eq!(g.row_ptr(2), 2);
        assert_eq!(g.row_ptr(3), 2); // == edge_count
        let (src, tgt, ty) = g.edges();
        assert_eq!(src, vec![1, 1]); // both out-edges belong to n1
        assert_eq!(tgt, vec![0, 2]); // n1→n0, n1→n2
        assert_eq!(ty, vec![EDGE_SUBCLASS, EDGE_RELATION]);
    }

    #[test]
    fn seed_positions_packed() {
        let b = worked_example();
        let g = Ngg1::parse(&b).unwrap();
        assert_eq!(g.seed_positions(), vec![0.0, 0.0, 1.0, 0.0, 0.0, 1.0]);
    }

    #[test]
    fn rejects_bad_magic() {
        let mut b = worked_example();
        b[0] = 0x00;
        assert!(Ngg1::parse(&b).is_err());
    }

    #[test]
    fn rejects_bad_version() {
        let mut b = worked_example();
        b[4] = 0x02;
        assert!(Ngg1::parse(&b).is_err());
    }

    #[test]
    fn rejects_truncated() {
        let b = worked_example();
        let short = &b[..100];
        assert!(Ngg1::parse(short).is_err());
    }

    #[test]
    fn rejects_too_small() {
        assert!(Ngg1::parse(&[0u8; 4]).is_err());
    }
}

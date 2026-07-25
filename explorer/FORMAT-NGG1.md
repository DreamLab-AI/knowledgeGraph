# FORMAT-NGG1 — the canonical binary graph-tier format

**Status:** Contract (frozen for the ng-overhaul sprint) · derives from [ADR-NG-001 §2](../../docs/adr/ADR-NG-001-explorer-architecture.md)
**Consumers:** `pipeline/emit_graph_tiers.py` (writer), `rust-wasm/` crate (`load_csr`), `modern/src/lib/ngg1.ts` (reader).
**Applies to:** `www/data/graph/domain-<slug>.bin` (×6) and `full.bin`. `overview.json` (T0) stays JSON — it is ~40 nodes with pre-baked positions and needs no binary tier.

NGG1 is the anti-corruption layer named in [DDD-NG-001 §4](../../docs/ddd/DDD-NG-001-publication-context.md): WebVOWL's mirror-array vocabulary stops at the compiler; everything downstream reads **only** this format. Parsed zero-copy in Rust and in `ngg1.ts`; JS never materialises edge arrays as objects.

---

## 0. Conventions (binding)

- **Endianness:** little-endian, everywhere. No exceptions.
- **Alignment:** every section starts on a 4-byte boundary. The writer inserts pad bytes (value `0x00`) to achieve this. Readers must use each section's declared offset, never assume back-to-back packing.
- **Reserved/pad bytes:** always written `0x00`; readers must ignore them (do not assert zero — forward-compat slack).
- **A note on the brief's arithmetic.** The sprint brief described the node record as `u32 id, f32 x, f32 y, u16 domain, u16 category, u8 flags, u8 pad, u32 degree — fixed 20 bytes`. Those field widths sum to **22**, and a `u32 degree` cannot be 4-byte-aligned inside a 20-byte record. This contract **honours the ADR §2 field types verbatim** (they are semantic) and satisfies the 4-byte-alignment rule (mechanical) by widening the pad from 1 byte to 3. The canonical node stride is therefore **24 bytes**, not 20. Every reader and writer MUST use stride 24. This is the one place the brief was internally inconsistent; it is resolved here, once, for all six builders.

---

## 1. File layout (four sections after the header)

```
┌───────────────────────────────────────────────┐
│ HEADER            32 bytes, fixed              │
├───────────────────────────────────────────────┤
│ SECTION 1  node table     node_count × 24      │  off_nodes
├───────────────────────────────────────────────┤
│ SECTION 2  adjacency      row_ptr + col_idx    │  off_adjacency
│            (node_count+1)·u32  +  edge_count·u32│
├───────────────────────────────────────────────┤
│ SECTION 3  edge types     edge_count × u8 (pad)│  off_edge_types
├───────────────────────────────────────────────┤
│ SECTION 4  string table   count/blob_len/offs/ │  off_strings
│            blob                                 │
└───────────────────────────────────────────────┘
```

The CSR adjacency of ADR §2 (`row_ptr`, `col_idx`, `edge_type`) is split across **two** sections — adjacency (the two `u32` arrays) and edge-types (the `u8` array) — so the `u8` array can be padded independently and the string table stays 4-aligned. Logically they are one CSR. This split is exactly why the header carries **four** section offsets.

---

## 2. Header — 32 bytes, offset 0

| Offset | Size | Field | Type | Value / meaning |
|--------|------|-------|------|-----------------|
| 0  | 4 | `magic` | `u8[4]` | ASCII `N G G 1` = bytes `4E 47 47 31`. Read as LE `u32` this is `0x3147474E`. |
| 4  | 2 | `version` | `u16` | Format version. This spec = **1**. |
| 6  | 2 | `pad` | `u16` | Reserved, `0x0000`. Keeps the following `u32` fields 4-aligned. |
| 8  | 4 | `node_count` | `u32` | Number of node records in Section 1. |
| 12 | 4 | `edge_count` | `u32` | Number of directed edges (entries in `col_idx` and `edge_type`). |
| 16 | 4 | `off_nodes` | `u32` | Byte offset of Section 1. Always `32`. |
| 20 | 4 | `off_adjacency` | `u32` | Byte offset of Section 2 (`row_ptr` then `col_idx`). |
| 24 | 4 | `off_edge_types` | `u32` | Byte offset of Section 3 (`edge_type[]`). |
| 28 | 4 | `off_strings` | `u32` | Byte offset of Section 4 (string table). |

Readers MUST validate `magic` and `version` before trusting any other field, and MUST bounds-check every offset against the buffer length.

---

## 3. Section 1 — node table (`node_count` records, 24 bytes each)

Record `i` lives at `off_nodes + i * 24`.

| Offset | Size | Field | Type | Meaning |
|--------|------|-------|------|---------|
| 0  | 4 | `id` | `u32` | Stable node id (matches page-API / stats references). Not necessarily equal to `i`. |
| 4  | 4 | `x` | `f32` | Seed layout position x (pre-baked; the worker warm-starts here). |
| 8  | 4 | `y` | `f32` | Seed layout position y. |
| 12 | 2 | `domain` | `u16` | Domain id — index into the canonical domain list (§6). |
| 14 | 2 | `category` | `u16` | Category id — index into the 34-category taxonomy (§6). `0xFFFF` = uncategorised (ADR §9). |
| 16 | 1 | `flags` | `u8` | Bitfield (§5). |
| 17 | 3 | `pad` | `u8[3]` | Reserved `0x00 0x00 0x00`. Aligns `degree`. |
| 20 | 4 | `degree` | `u32` | Total incident degree (in+out) in the **full** graph — the ranking key for top-N labels and node scale. Preserved across tiers even when edges are capped. |

The row index `i` (0-based) is the node's **local index** used everywhere else in the file (`col_idx` values, string-table pairing). `id` is the external identity. Keep the two distinct.

---

## 4. Section 2 — CSR adjacency

Starts at `off_adjacency` (4-aligned).

1. `row_ptr`: `u32[node_count + 1]`. `row_ptr[i]..row_ptr[i+1]` is the half-open range of edge slots belonging to source node `i`. Monotonic non-decreasing; `row_ptr[0] == 0`; `row_ptr[node_count] == edge_count`.
2. `col_idx`: `u32[edge_count]`. `col_idx[e]` is the **local index** of the target node of edge slot `e`.

Both arrays are contiguous `u32`, so `ngg1.ts` and Rust take them as zero-copy typed-array / slice views.

**Directionality.** Edges are stored directed source→target. `subClassOf` points child→parent. For undirected ego traversal the writer emits each object-property relation **once** (source→target); `computeEgoGraph` treats adjacency as undirected by also honouring reverse reachability where a reverse index is built by the reader (see `ngg1.ts`). Domain `.bin` tiers cap object-property edges per-node at top-k (k=8) by target degree (ADR §2); `degree` still reports the true full-graph degree.

---

## 5. Section 3 — edge types (`edge_count` × `u8`, padded)

Starts at `off_edge_types` (4-aligned). `edge_type[e]` classifies edge slot `e`, aligned 1:1 with `col_idx[e]`:

| Value | Name | Render |
|-------|------|--------|
| `0` | `subClassOf` **backbone** | structural skeleton — quiet charcoal (DDD "Backbone") |
| `1` | `objectProperty` **relation** | semantic content — accented teal (DDD "Relation") |

Values ≥ 2 are reserved. The section is padded with `0x00` up to the next 4-byte boundary so Section 4 stays aligned.

### Node `flags` bitfield (Section 1, offset 16)

| Bit | Mask | Meaning |
|-----|------|---------|
| 0 | `0x01` | domain root (one of the 6 top-level nodes) |
| 1 | `0x02` | category root (one of the 34 taxonomy nodes) |
| 2 | `0x04` | has resolvable page (a `Page` exists → "Read page" enabled) |
| 3 | `0x08` | bridge node (cross-domain `bridges_to`) |
| 4–7 | — | reserved, `0` |

---

## 6. Section 4 — string table

Starts at `off_strings` (4-aligned). Layout:

1. `count`: `u32` — total strings = `2 * node_count` (one label + one IRI per node).
2. `blob_len`: `u32` — byte length of the UTF-8 blob that follows the offset array. (Added to the ADR sketch so the **last** string's length is derivable and the section size is self-describing.)
3. `offset`: `u32[count]` — `offset[s]` is the byte offset of string `s` **within the blob**. Monotonic non-decreasing.
4. `blob`: `u8[blob_len]` — concatenated UTF-8 bytes, no separators.

String `s` spans `blob[offset[s] .. (s+1 < count ? offset[s+1] : blob_len)]`.

**Pairing (binding):** for node local-index `n`, `strings[n*2]` = **label**, `strings[n*2 + 1]` = **IRI**. (This is why `count == 2 * node_count`.)

### Canonical domain ids (§3 `domain`)

Index order is fixed by [DDD-NG-001 §2](../../docs/ddd/DDD-NG-001-publication-context.md) and matches `overview.json` domain order:

| id | slug | label |
|----|------|-------|
| 0 | `artificial-intelligence` | Artificial Intelligence |
| 1 | `blockchain` | Blockchain |
| 2 | `spatial-computing` | Spatial Computing |
| 3 | `robotics` | Robotics |
| 4 | `distributed-collaboration` | Distributed Collaboration |
| 5 | `infrastructure` | Infrastructure |

`category` ids index the 34-entry taxonomy array published in `overview.json` (position = id). `stats.json` is the source of truth for counts (PRD §7); NGG1 carries structure, not counts.

---

## 7. Worked example — 3 nodes, 2 edges (byte-exact)

A minimal AI-domain fragment:

- **n0** id=0, seed (0.0, 0.0), domain=0, category=0, flags=`0x01` (domain root), degree=1 · label `"AI"`, iri `"ng:0"`
- **n1** id=1, seed (1.0, 0.0), domain=0, category=1, flags=`0x00`, degree=2 · label `"ML"`, iri `"ng:1"`
- **n2** id=2, seed (0.0, 1.0), domain=0, category=1, flags=`0x00`, degree=1 · label `"NLP"`, iri `"ng:2"`

Edges (from n1):
- slot 0: n1 → n0, `edge_type=0` (ML subClassOf AI — backbone)
- slot 1: n1 → n2, `edge_type=1` (ML objectProperty NLP — relation)

CSR: `row_ptr = [0, 0, 2, 2]` (n0 has no out-edges; n1 owns slots 0–1; n2 none), `col_idx = [0, 2]`, `edge_type = [0, 1]`.

Section offsets: header 32 → nodes `off_nodes=32` (3×24=72, ends 104) → adjacency `off_adjacency=104` (row_ptr 16 + col_idx 8 = 24, ends 128) → edge-types `off_edge_types=128` (2 bytes + 2 pad = 4, ends 132) → strings `off_strings=132` (4+4+24+19 = 51, ends 183). **Total file: 183 bytes.**

### Full hex dump (offset : bytes : meaning)

```
── HEADER [0..32) ───────────────────────────────────────────────
0000  4E 47 47 31              magic  'NGG1'
0004  01 00                    version = 1
0006  00 00                    pad
0008  03 00 00 00              node_count = 3
000C  02 00 00 00              edge_count = 2
0010  20 00 00 00              off_nodes      = 32
0014  68 00 00 00              off_adjacency  = 104
0018  80 00 00 00              off_edge_types = 128
001C  84 00 00 00              off_strings    = 132

── SECTION 1  NODE TABLE [32..104) ──────────────────────────────
        n0 @ 0x20
0020  00 00 00 00              id = 0
0024  00 00 00 00              x  = 0.0
0028  00 00 00 00              y  = 0.0
002C  00 00                    domain   = 0
002E  00 00                    category = 0
0030  01                       flags = 0x01 (domain root)
0031  00 00 00                 pad
0034  01 00 00 00              degree = 1
        n1 @ 0x38
0038  01 00 00 00              id = 1
003C  00 00 80 3F              x  = 1.0
0040  00 00 00 00              y  = 0.0
0044  00 00                    domain   = 0
0046  01 00                    category = 1
0048  00                       flags = 0x00
0049  00 00 00                 pad
004C  02 00 00 00              degree = 2
        n2 @ 0x50
0050  02 00 00 00              id = 2
0054  00 00 00 00              x  = 0.0
0058  00 00 80 3F              y  = 1.0
005C  00 00                    domain   = 0
005E  01 00                    category = 1
0060  00                       flags = 0x00
0061  00 00 00                 pad
0064  01 00 00 00              degree = 1

── SECTION 2  ADJACENCY [104..128) ──────────────────────────────
0068  00 00 00 00              row_ptr[0] = 0
006C  00 00 00 00              row_ptr[1] = 0
0070  02 00 00 00              row_ptr[2] = 2
0074  02 00 00 00              row_ptr[3] = 2      (== edge_count)
0078  00 00 00 00              col_idx[0] = 0      (n1 → n0)
007C  02 00 00 00              col_idx[1] = 2      (n1 → n2)

── SECTION 3  EDGE TYPES [128..132) ─────────────────────────────
0080  00                       edge_type[0] = 0    (subClassOf backbone)
0081  01                       edge_type[1] = 1    (objectProperty relation)
0082  00 00                    pad → 4-byte boundary

── SECTION 4  STRING TABLE [132..183) ───────────────────────────
0084  06 00 00 00              count = 6           (= 2 × node_count)
0088  13 00 00 00              blob_len = 19
008C  00 00 00 00              offset[0] = 0    → "AI"   (n0 label)
0090  02 00 00 00              offset[1] = 2    → "ng:0" (n0 iri)
0094  06 00 00 00              offset[2] = 6    → "ML"   (n1 label)
0098  08 00 00 00              offset[3] = 8    → "ng:1" (n1 iri)
009C  0C 00 00 00              offset[4] = 12   → "NLP"  (n2 label)
00A0  0F 00 00 00              offset[5] = 15   → "ng:2" (n2 iri)
00A4  41 49                    "AI"
00A6  6E 67 3A 30              "ng:0"
00AA  4D 4C                    "ML"
00AC  6E 67 3A 31              "ng:1"
00B0  4E 4C 50                 "NLP"
00B3  6E 67 3A 32              "ng:2"
00B7                           EOF (183 = 0xB7)
```

### Round-trip assertions (use as a golden test)

- `magic == 0x3147474E`, `version == 1`, `node_count == 3`, `edge_count == 2`.
- `off_nodes==32 && off_adjacency==104 && off_edge_types==128 && off_strings==132`; each ≡ 0 (mod 4).
- `row_ptr[node_count] == edge_count == 2`; `row_ptr` non-decreasing.
- Node stride 24: `n1.x == 1.0f` (`00 00 80 3F`), `n2.y == 1.0f`, `n1.degree == 2`.
- `label(1) == "ML"`, `iri(1) == "ng:1"` via `strings[2]`, `strings[3]`.
- Ego graph of n1, radius 1: nodes `{1,0,2}`, edges `{0,1}` with types `{0,1}`.

Any writer whose output matches these 183 bytes for this input is conformant. Fixtures live at `pipeline/tests/fixtures/ngg1-3n2e.bin` (writer golden) and `modern/src/lib/__fixtures__/ngg1-3n2e.bin` (reader golden) — keep them byte-identical.

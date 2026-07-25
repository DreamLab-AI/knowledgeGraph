/**
 * ngg1.ts — zero-copy TypeScript reader for the NGG1 binary graph-tier format.
 * Canonical spec: publishing-tools/WasmVOWL/FORMAT-NGG1.md.
 *
 * Pure, dependency-free, unit-testable. Node fields are read via a DataView
 * (no per-node object allocation, DDD INV-3); CSR arrays and the string offset
 * array are zero-copy typed-array views over the same ArrayBuffer. The only
 * copy this module ever makes is `readSeedPositions()` (packed x,y — the
 * interleaved node record can't be viewed as a contiguous Float32Array) and
 * per-request `getString()` decodes.
 *
 * The parsed `Ngg1` MUST be constructed from a standalone ArrayBuffer whose
 * byteOffset is 0 (the LoadScope buffer, or a fresh slice) — the section
 * offsets are 4-aligned within the file, so whole-file typed-array views are
 * safe. See `parseNgg1`.
 */

/* ───────────────────────── format constants ─────────────────────────── */

/** LE u32 of ASCII 'NGG1' (bytes 4E 47 47 31). */
export const NGG1_MAGIC = 0x3147474e;
export const NGG1_VERSION = 1;
export const NGG1_HEADER_SIZE = 32;
export const NGG1_NODE_STRIDE = 24;

/** Byte offsets of fields within a 24-byte node record. */
const N_ID = 0;
const N_X = 4;
const N_Y = 8;
const N_DOMAIN = 12;
const N_CATEGORY = 14;
const N_FLAGS = 16;
// bytes 17..20 = pad
const N_DEGREE = 20;

/** edge_type values. */
export const EDGE_SUBCLASS = 0; // backbone
export const EDGE_RELATION = 1; // objectProperty

/** Node flag bits (FORMAT-NGG1 §5). */
export const FLAG_DOMAIN_ROOT = 0x01;
export const FLAG_CATEGORY_ROOT = 0x02;
export const FLAG_HAS_PAGE = 0x04;
export const FLAG_BRIDGE = 0x08;
/** Client-minted collapsed-category metanode (not a real class — ADR-NG-001 §9a #1). */
export const FLAG_META = 0x40;

/** Sentinel category id = uncategorised (ADR §9). */
export const CATEGORY_NONE = 0xffff;

/* ───────────────────────────── header ───────────────────────────────── */

export interface Ngg1Header {
  magic: number;
  version: number;
  nodeCount: number;
  edgeCount: number;
  offNodes: number;
  offAdjacency: number;
  offEdgeTypes: number;
  offStrings: number;
}

export function readHeader(buf: ArrayBuffer): Ngg1Header {
  if (buf.byteLength < NGG1_HEADER_SIZE) {
    throw new Error(`NGG1: buffer too small (${buf.byteLength} < ${NGG1_HEADER_SIZE})`);
  }
  const dv = new DataView(buf);
  const magic = dv.getUint32(0, true);
  if (magic !== NGG1_MAGIC) {
    throw new Error(`NGG1: bad magic 0x${magic.toString(16)} (expected 0x${NGG1_MAGIC.toString(16)})`);
  }
  const version = dv.getUint16(4, true);
  if (version !== NGG1_VERSION) {
    throw new Error(`NGG1: unsupported version ${version} (reader supports ${NGG1_VERSION})`);
  }
  return {
    magic,
    version,
    nodeCount: dv.getUint32(8, true),
    edgeCount: dv.getUint32(12, true),
    offNodes: dv.getUint32(16, true),
    offAdjacency: dv.getUint32(20, true),
    offEdgeTypes: dv.getUint32(24, true),
    offStrings: dv.getUint32(28, true),
  };
}

/* ───────────────────────────── reader ───────────────────────────────── */

/**
 * A parsed NGG1 tier. All accessors are O(1); no state beyond the views.
 * Node accessors take a *local index* i in [0, nodeCount).
 */
export interface Ngg1 {
  readonly header: Ngg1Header;
  readonly nodeCount: number;
  readonly edgeCount: number;

  /* Zero-copy CSR views (over the source buffer). */
  readonly rowPtr: Uint32Array; // length nodeCount + 1
  readonly colIdx: Uint32Array; // length edgeCount
  readonly edgeType: Uint8Array; // length edgeCount

  /* Node field accessors (DataView-backed, no allocation). */
  getId(i: number): number;
  getX(i: number): number;
  getY(i: number): number;
  getDomain(i: number): number;
  getCategory(i: number): number;
  getFlags(i: number): number;
  getDegree(i: number): number;
  hasFlag(i: number, mask: number): boolean;

  /* String table. */
  /** label of node i === string (i*2). */
  label(i: number): string;
  /** IRI of node i === string (i*2 + 1). */
  iri(i: number): string;
  /** raw string s in [0, 2*nodeCount). */
  getString(s: number): string;

  /* Positions. */
  /** Packed seed positions [x0,y0,x1,y1,…], length nodeCount*2 (one copy). */
  readSeedPositions(): Float32Array;

  /* Topology. */
  /** target local indices of out-edges of node i (subarray, zero-copy). */
  neighbours(i: number): Uint32Array;
  /** edge_type slice aligned with neighbours(i). */
  neighbourTypes(i: number): Uint8Array;
  computeEgoGraph(centerIdx: number, radius: number, cap: number): EgoGraph;
}

/**
 * Parse an NGG1 buffer into a reader. `buf` MUST be a standalone ArrayBuffer
 * (byteOffset 0). If you hold a view into a larger buffer, slice it first.
 */
export function parseNgg1(buf: ArrayBuffer): Ngg1 {
  const header = readHeader(buf);
  const { nodeCount, edgeCount, offNodes, offAdjacency, offEdgeTypes, offStrings } = header;

  // Bounds checks — a truncated artifact must fail loudly, not read garbage.
  const nodesEnd = offNodes + nodeCount * NGG1_NODE_STRIDE;
  const rowPtrLen = nodeCount + 1;
  const colIdxOff = offAdjacency + rowPtrLen * 4;
  const adjEnd = colIdxOff + edgeCount * 4;
  const edgeTypesEnd = offEdgeTypes + edgeCount; // pre-pad
  if (
    nodesEnd > buf.byteLength ||
    adjEnd > buf.byteLength ||
    edgeTypesEnd > buf.byteLength ||
    offStrings + 8 > buf.byteLength
  ) {
    throw new Error('NGG1: section bounds exceed buffer length (truncated artifact)');
  }
  if ((offNodes | offAdjacency | offEdgeTypes | offStrings) & 3) {
    throw new Error('NGG1: a section offset is not 4-byte aligned');
  }

  const dv = new DataView(buf);
  const rowPtr = new Uint32Array(buf, offAdjacency, rowPtrLen);
  const colIdx = new Uint32Array(buf, colIdxOff, edgeCount);
  const edgeType = new Uint8Array(buf, offEdgeTypes, edgeCount);

  // String table.
  const strCount = dv.getUint32(offStrings, true);
  const blobLen = dv.getUint32(offStrings + 4, true);
  const strOffOff = offStrings + 8;
  const blobOff = strOffOff + strCount * 4;
  if (blobOff + blobLen > buf.byteLength) {
    throw new Error('NGG1: string blob exceeds buffer length');
  }
  const strOffsets = new Uint32Array(buf, strOffOff, strCount);
  const blob = new Uint8Array(buf, blobOff, blobLen);
  const decoder = new TextDecoder('utf-8', { fatal: false });

  const nodeOff = (i: number): number => offNodes + i * NGG1_NODE_STRIDE;
  const checkNode = (i: number): void => {
    if (i < 0 || i >= nodeCount) throw new RangeError(`NGG1: node index ${i} out of range`);
  };

  const getString = (s: number): string => {
    if (s < 0 || s >= strCount) throw new RangeError(`NGG1: string index ${s} out of range`);
    const start = strOffsets[s];
    const end = s + 1 < strCount ? strOffsets[s + 1] : blobLen;
    return decoder.decode(blob.subarray(start, end));
  };

  const getDegree = (i: number): number => {
    checkNode(i);
    return dv.getUint32(nodeOff(i) + N_DEGREE, true);
  };

  const neighbours = (i: number): Uint32Array => {
    checkNode(i);
    return colIdx.subarray(rowPtr[i], rowPtr[i + 1]);
  };
  const neighbourTypes = (i: number): Uint8Array => {
    checkNode(i);
    return edgeType.subarray(rowPtr[i], rowPtr[i + 1]);
  };

  return {
    header,
    nodeCount,
    edgeCount,
    rowPtr,
    colIdx,
    edgeType,

    getId: (i) => (checkNode(i), dv.getUint32(nodeOff(i) + N_ID, true)),
    getX: (i) => (checkNode(i), dv.getFloat32(nodeOff(i) + N_X, true)),
    getY: (i) => (checkNode(i), dv.getFloat32(nodeOff(i) + N_Y, true)),
    getDomain: (i) => (checkNode(i), dv.getUint16(nodeOff(i) + N_DOMAIN, true)),
    getCategory: (i) => (checkNode(i), dv.getUint16(nodeOff(i) + N_CATEGORY, true)),
    getFlags: (i) => (checkNode(i), dv.getUint8(nodeOff(i) + N_FLAGS)),
    getDegree,
    hasFlag: (i, mask) => (checkNode(i), (dv.getUint8(nodeOff(i) + N_FLAGS) & mask) !== 0),

    label: (i) => (checkNode(i), getString(i * 2)),
    iri: (i) => (checkNode(i), getString(i * 2 + 1)),
    getString,

    readSeedPositions: (): Float32Array => {
      const out = new Float32Array(nodeCount * 2);
      for (let i = 0; i < nodeCount; i++) {
        const o = nodeOff(i);
        out[i * 2] = dv.getFloat32(o + N_X, true);
        out[i * 2 + 1] = dv.getFloat32(o + N_Y, true);
      }
      return out;
    },

    neighbours,
    neighbourTypes,

    computeEgoGraph: (centerIdx, radius, cap) =>
      computeEgoGraph({ rowPtr, colIdx, edgeType, nodeCount }, centerIdx, radius, cap),
  };
}

/* ─────────────────────────── ego graph ──────────────────────────────── */

/** Adjacency slice sufficient for BFS — decouples the algorithm from Ngg1. */
export interface CsrLike {
  rowPtr: Uint32Array;
  colIdx: Uint32Array;
  edgeType: Uint8Array;
  nodeCount: number;
}

/**
 * A T2 ego set (DDD FocusNeighbourhood). Index arrays are all in terms of the
 * source NGG1 local indices.
 */
export interface EgoGraph {
  /** node local indices in the ego set, center first. */
  nodes: Uint32Array;
  /** flat endpoint pairs [srcLocal, tgtLocal, …] within the ego set. */
  edgePairs: Uint32Array;
  /** edge_type per pair (aligned with edgePairs/2). */
  edgeTypes: Uint8Array;
  /** BFS depth actually reached (≤ requested radius). */
  radiusReached: number;
  /** true if the cap truncated the frontier (more neighbours existed). */
  truncated: boolean;
}

/**
 * Breadth-first ego graph over the CSR, treating edges as UNDIRECTED
 * (out-edges of a node plus in-edges via a lazily-built reverse index) so a
 * focused class shows both its superclasses and subclasses / relations. Breadth
 * is capped at `cap` nodes (DDD FocusNeighbourhood: 300) and depth at `radius`
 * (≤ 2). Deterministic: neighbours visited in adjacency order; nodes emitted in
 * BFS discovery order with the center first.
 *
 * Pure over CsrLike — unit-test with a hand-built fixture, no file needed.
 */
export function computeEgoGraph(
  csr: CsrLike,
  centerIdx: number,
  radius: number,
  cap: number,
): EgoGraph {
  const { rowPtr, colIdx, edgeType, nodeCount } = csr;
  if (centerIdx < 0 || centerIdx >= nodeCount) {
    throw new RangeError(`computeEgoGraph: centerIdx ${centerIdx} out of range`);
  }
  const maxNodes = Math.max(1, Math.min(cap, nodeCount));

  // Reverse index (in-edges), built once — keeps focus on subclasses too.
  // reverse[t] = list of (source, edgeType) with an edge source→t.
  const reverse = buildReverse(csr);

  const inSet = new Uint8Array(nodeCount); // membership bitmap
  const order: number[] = [centerIdx];
  inSet[centerIdx] = 1;

  let frontier: number[] = [centerIdx];
  let depth = 0;
  let truncated = false;

  while (frontier.length > 0 && depth < radius && order.length < maxNodes) {
    const next: number[] = [];
    for (const u of frontier) {
      // forward out-edges
      for (let e = rowPtr[u]; e < rowPtr[u + 1]; e++) {
        const v = colIdx[e];
        if (inSet[v]) continue;
        if (order.length >= maxNodes) { truncated = true; break; }
        inSet[v] = 1;
        order.push(v);
        next.push(v);
      }
      if (order.length >= maxNodes && next.length === 0) truncated = true;
      // reverse in-edges
      const rev = reverse[u];
      if (rev) {
        for (let k = 0; k < rev.length; k += 2) {
          const v = rev[k];
          if (inSet[v]) continue;
          if (order.length >= maxNodes) { truncated = true; break; }
          inSet[v] = 1;
          order.push(v);
          next.push(v);
        }
      }
    }
    frontier = next;
    if (next.length > 0) depth++;
  }
  if (frontier.length > 0 && depth >= radius) {
    // there was more graph beyond the radius — not a cap truncation, expected.
  }

  const nodes = Uint32Array.from(order);

  // Collect edges whose BOTH endpoints are in the ego set (induced subgraph).
  const pairs: number[] = [];
  const types: number[] = [];
  for (let u = 0; u < nodes.length; u++) {
    const src = nodes[u];
    for (let e = rowPtr[src]; e < rowPtr[src + 1]; e++) {
      const tgt = colIdx[e];
      if (inSet[tgt]) {
        pairs.push(src, tgt);
        types.push(edgeType[e]);
      }
    }
  }

  return {
    nodes,
    edgePairs: Uint32Array.from(pairs),
    edgeTypes: Uint8Array.from(types),
    radiusReached: depth,
    truncated,
  };
}

/* ─────────────────────────── ego serialiser ─────────────────────────── */

/** CSR adjacency of an ego sub-graph, in ego-local index space. */
export interface EgoCsr {
  /** length nodeCount + 1, row_ptr[i]..row_ptr[i+1] = out-edges of node i. */
  rowPtr: Uint32Array;
  /** length edgeCount, ego-local target indices. */
  colIdx: Uint32Array;
  /** length edgeCount, aligned edge types. */
  edgeType: Uint8Array;
}

/**
 * Serialise an ego sub-graph into a standalone NGG1 buffer (FORMAT-NGG1) so the
 * physics worker's `load_csr` can drive it exactly like a shipped domain tier
 * (ADR-NG-001 §2/§3). This is the writer half of the anti-corruption layer used
 * for T2 focus: the pipeline ships no focus artifact, so the client mints one
 * from the loaded domain reader.
 *
 * `nodes` are source-local indices in instance order; per-node metadata
 * (id/domain/category/flags/degree/label/iri) is copied from `src`, while seed
 * x,y come from `seed` (a warm-start layout, e.g. a radial spiral) — NOT the
 * scattered source positions — so the sim settles into a coherent ego layout.
 */
export function serializeEgoNgg1(
  src: Ngg1,
  nodes: Uint32Array,
  seed: Float32Array,
  csr: EgoCsr,
): ArrayBuffer {
  const n = nodes.length;
  const e = csr.colIdx.length;

  // String table: real label+iri per node (count = 2n) so the buffer is fully
  // spec-conformant for any parser, not just physics.
  const enc = new TextEncoder();
  const strCount = n * 2;
  const strBytes: Uint8Array[] = new Array(strCount);
  let blobLen = 0;
  for (let i = 0; i < n; i++) {
    const g = nodes[i];
    const lb = enc.encode(src.label(g));
    const ib = enc.encode(src.iri(g));
    strBytes[i * 2] = lb;
    strBytes[i * 2 + 1] = ib;
    blobLen += lb.length + ib.length;
  }

  const align4 = (x: number): number => (x + 3) & ~3;
  const offNodes = NGG1_HEADER_SIZE; // 32
  const offAdjacency = offNodes + n * NGG1_NODE_STRIDE; // 24 stride ⇒ already 4-aligned
  const rowPtrBytes = (n + 1) * 4;
  const colIdxBytes = e * 4;
  const offEdgeTypes = offAdjacency + rowPtrBytes + colIdxBytes;
  const offStrings = align4(offEdgeTypes + e); // pad the u8 edge-type array
  const strOffsetsBytes = strCount * 4;
  const total = offStrings + 8 + strOffsetsBytes + blobLen;

  const buf = new ArrayBuffer(total);
  const dv = new DataView(buf);

  // Header.
  dv.setUint32(0, NGG1_MAGIC, true);
  dv.setUint16(4, NGG1_VERSION, true);
  dv.setUint16(6, 0, true);
  dv.setUint32(8, n, true);
  dv.setUint32(12, e, true);
  dv.setUint32(16, offNodes, true);
  dv.setUint32(20, offAdjacency, true);
  dv.setUint32(24, offEdgeTypes, true);
  dv.setUint32(28, offStrings, true);

  // Section 1 — node table.
  for (let i = 0; i < n; i++) {
    const g = nodes[i];
    const o = offNodes + i * NGG1_NODE_STRIDE;
    dv.setUint32(o + N_ID, src.getId(g), true);
    dv.setFloat32(o + N_X, seed[i * 2], true);
    dv.setFloat32(o + N_Y, seed[i * 2 + 1], true);
    dv.setUint16(o + N_DOMAIN, src.getDomain(g), true);
    dv.setUint16(o + N_CATEGORY, src.getCategory(g), true);
    dv.setUint8(o + N_FLAGS, src.getFlags(g));
    dv.setUint32(o + N_DEGREE, src.getDegree(g), true);
  }

  // Section 2 — CSR adjacency.
  let p = offAdjacency;
  for (let i = 0; i <= n; i++, p += 4) dv.setUint32(p, csr.rowPtr[i], true);
  for (let k = 0; k < e; k++, p += 4) dv.setUint32(p, csr.colIdx[k], true);

  // Section 3 — edge types (padded to the next 4-byte boundary by offStrings).
  for (let k = 0; k < e; k++) dv.setUint8(offEdgeTypes + k, csr.edgeType[k]);

  // Section 4 — string table.
  dv.setUint32(offStrings, strCount, true);
  dv.setUint32(offStrings + 4, blobLen, true);
  const blobStart = offStrings + 8 + strOffsetsBytes;
  const blob = new Uint8Array(buf, blobStart, blobLen);
  let bo = 0;
  for (let s = 0; s < strCount; s++) {
    dv.setUint32(offStrings + 8 + s * 4, bo, true);
    blob.set(strBytes[s], bo);
    bo += strBytes[s].length;
  }

  return buf;
}

/** Explicit per-node fields for minting a synthetic NGG1 tier (no source reader). */
export interface Ngg1NodeFields {
  ids: Uint32Array;
  domains: Uint16Array;
  categories: Uint16Array;
  flags: Uint8Array;
  degrees: Uint32Array;
  labels: readonly string[];
  iris: readonly string[];
}

/**
 * Serialise an arbitrary node set (explicit fields, not read from a source
 * `Ngg1`) into a standalone NGG1 buffer so the physics worker can settle it like
 * any shipped tier. Used by the collapsed T1 domain view (ADR-NG-001 §9a #1),
 * whose nodes are a mix of real hub classes and synthetic category metanodes
 * that exist in no source tier. Same on-wire layout as `serializeEgoNgg1`.
 */
export function serializeNgg1(
  seed: Float32Array,
  fields: Ngg1NodeFields,
  csr: EgoCsr,
): ArrayBuffer {
  const n = fields.ids.length;
  const e = csr.colIdx.length;

  const enc = new TextEncoder();
  const strCount = n * 2;
  const strBytes: Uint8Array[] = new Array(strCount);
  let blobLen = 0;
  for (let i = 0; i < n; i++) {
    const lb = enc.encode(fields.labels[i] ?? '');
    const ib = enc.encode(fields.iris[i] ?? '');
    strBytes[i * 2] = lb;
    strBytes[i * 2 + 1] = ib;
    blobLen += lb.length + ib.length;
  }

  const align4 = (x: number): number => (x + 3) & ~3;
  const offNodes = NGG1_HEADER_SIZE;
  const offAdjacency = offNodes + n * NGG1_NODE_STRIDE;
  const rowPtrBytes = (n + 1) * 4;
  const colIdxBytes = e * 4;
  const offEdgeTypes = offAdjacency + rowPtrBytes + colIdxBytes;
  const offStrings = align4(offEdgeTypes + e);
  const strOffsetsBytes = strCount * 4;
  const total = offStrings + 8 + strOffsetsBytes + blobLen;

  const buf = new ArrayBuffer(total);
  const dv = new DataView(buf);

  dv.setUint32(0, NGG1_MAGIC, true);
  dv.setUint16(4, NGG1_VERSION, true);
  dv.setUint16(6, 0, true);
  dv.setUint32(8, n, true);
  dv.setUint32(12, e, true);
  dv.setUint32(16, offNodes, true);
  dv.setUint32(20, offAdjacency, true);
  dv.setUint32(24, offEdgeTypes, true);
  dv.setUint32(28, offStrings, true);

  for (let i = 0; i < n; i++) {
    const o = offNodes + i * NGG1_NODE_STRIDE;
    dv.setUint32(o + N_ID, fields.ids[i], true);
    dv.setFloat32(o + N_X, seed[i * 2], true);
    dv.setFloat32(o + N_Y, seed[i * 2 + 1], true);
    dv.setUint16(o + N_DOMAIN, fields.domains[i], true);
    dv.setUint16(o + N_CATEGORY, fields.categories[i], true);
    dv.setUint8(o + N_FLAGS, fields.flags[i]);
    dv.setUint32(o + N_DEGREE, fields.degrees[i], true);
  }

  let p = offAdjacency;
  for (let i = 0; i <= n; i++, p += 4) dv.setUint32(p, csr.rowPtr[i], true);
  for (let k = 0; k < e; k++, p += 4) dv.setUint32(p, csr.colIdx[k], true);
  for (let k = 0; k < e; k++) dv.setUint8(offEdgeTypes + k, csr.edgeType[k]);

  dv.setUint32(offStrings, strCount, true);
  dv.setUint32(offStrings + 4, blobLen, true);
  const blobStart = offStrings + 8 + strOffsetsBytes;
  const blob = new Uint8Array(buf, blobStart, blobLen);
  let bo = 0;
  for (let s = 0; s < strCount; s++) {
    dv.setUint32(offStrings + 8 + s * 4, bo, true);
    blob.set(strBytes[s], bo);
    bo += strBytes[s].length;
  }

  return buf;
}

/**
 * Build ego-local CSR from flat instance-space edge pairs. `edgePairs` is
 * [src0,tgt0,src1,tgt1,…] where each value is already an ego-local instance
 * index (0..nodeCount); `edgeTypes` is aligned per pair. Groups by source into
 * row_ptr/col_idx/edge_type. Deterministic (stable source order).
 */
export function pairsToEgoCsr(
  nodeCount: number,
  edgePairs: Uint32Array,
  edgeTypes: Uint8Array,
): EgoCsr {
  const m = edgeTypes.length;
  const counts = new Uint32Array(nodeCount);
  for (let k = 0; k < m; k++) counts[edgePairs[k * 2]]++;
  const rowPtr = new Uint32Array(nodeCount + 1);
  for (let i = 0; i < nodeCount; i++) rowPtr[i + 1] = rowPtr[i] + counts[i];
  const colIdx = new Uint32Array(m);
  const edgeType = new Uint8Array(m);
  const cursor = rowPtr.slice(0, nodeCount);
  for (let k = 0; k < m; k++) {
    const src = edgePairs[k * 2];
    const slot = cursor[src]++;
    colIdx[slot] = edgePairs[k * 2 + 1];
    edgeType[slot] = edgeTypes[k];
  }
  return { rowPtr, colIdx, edgeType };
}

/**
 * Deterministic warm-start seed for an ego graph: the focus node at the origin,
 * the rest on a golden-angle spiral so the force sim starts spread (not stacked)
 * and settles fast (< 1 s for ≤ 300 nodes). No RNG — reproducible per scope.
 */
export function radialEgoSeed(nodeCount: number, spread = 18): Float32Array {
  const out = new Float32Array(nodeCount * 2);
  const golden = Math.PI * (3 - Math.sqrt(5)); // ≈ 2.399963 rad
  for (let i = 1; i < nodeCount; i++) {
    const r = spread * Math.sqrt(i);
    const a = i * golden;
    out[i * 2] = r * Math.cos(a);
    out[i * 2 + 1] = r * Math.sin(a);
  }
  return out;
}

/** Build reverse adjacency as parallel [source, edgeType, …] arrays per target. */
function buildReverse(csr: CsrLike): Int32Array[] {
  const { rowPtr, colIdx, edgeType, nodeCount } = csr;
  const counts = new Uint32Array(nodeCount);
  for (let i = 0; i < colIdx.length; i++) counts[colIdx[i]]++;
  const reverse: Int32Array[] = new Array(nodeCount);
  for (let t = 0; t < nodeCount; t++) reverse[t] = new Int32Array(counts[t] * 2);
  const fill = new Uint32Array(nodeCount);
  for (let src = 0; src < nodeCount; src++) {
    for (let e = rowPtr[src]; e < rowPtr[src + 1]; e++) {
      const t = colIdx[e];
      const p = fill[t];
      reverse[t][p] = src;
      reverse[t][p + 1] = edgeType[e];
      fill[t] = p + 2;
    }
  }
  return reverse;
}

public:: true

# Reed-Solomon Codes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reed-solomon-codes",
  "@type": "Page",
  "vc:slug": "reed-solomon-codes",
  "title": "Reed-Solomon Codes",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reed-solomon-codes",
  "@type": "Class",
  "label": "Reed-Solomon Codes",
  "definition": "Reed-Solomon codes are a class of non-binary, cyclic, block error-correcting codes defined over finite fields (Galois fields), capable of correcting both erasures and symbol errors with provably optimal efficiency at the Singleton bound. Introduced by Irving Reed and Gustave Solomon in 1960, they treat data blocks as polynomials over a finite field and encode them by evaluating the polynomial at multiple distinct points, allowing the original polynomial to be reconstructed from any sufficient subset of evaluation points. Reed-Solomon codes underpin data reliability in storage media (CDs, DVDs, RAID), satellite communications, QR codes, and are foundational to erasure-coded distributed storage and modern polynomial commitment schemes used in zero-knowledge proofs.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:error-correction", "label": "Error Correction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:erasure-coding", "label": "Erasure Coding"},
      {"@id": "urn:ngm:class:data-availability", "label": "Data Availability"},
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"},
      {"@id": "urn:ngm:class:finite-field-arithmetic", "label": "Finite Field Arithmetic"},
      {"@id": "urn:ngm:class:galois-field", "label": "Galois Field"},
      {"@id": "urn:ngm:class:coding-theory", "label": "Coding Theory"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"},
      {"@id": "urn:ngm:class:data-availability-sampling", "label": "Data Availability Sampling"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:polynomial-commitment", "label": "Polynomial Commitment"},
      {"@id": "urn:ngm:class:stark-proof", "label": "STARK Proof"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:maximum-distance-separable-code", "label": "Maximum Distance Separable Code"},
      {"@id": "urn:ngm:class:singleton-bound", "label": "Singleton Bound"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:polynomial-interpolation", "label": "Polynomial Interpolation"},
      {"@id": "urn:ngm:class:berlekamp-massey-algorithm", "label": "Berlekamp-Massey Algorithm"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cyclic-redundancy-check", "label": "Cyclic Redundancy Check"},
      {"@id": "urn:ngm:class:block-code", "label": "Block Code"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:parity-check-symbol", "label": "Parity Check Symbol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:turbo-code", "label": "Turbo Code"},
      {"@id": "urn:ngm:class:low-density-parity-check-code", "label": "Low-Density Parity-Check Code"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:rs-codes", "label": "RS Codes"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Reed-Solomon Codes]] are polynomial-based error-correcting codes over finite fields that achieve the Singleton bound, enabling recovery of original data from any sufficiently large subset of encoded symbols; they underpin [[Erasure Coding]] for [[Distributed Storage]], storage media reliability, and polynomial commitment schemes in modern cryptography.

- ### Relationships
  - [[Reed-Solomon Codes]] are the canonical instance of [[Erasure Coding]], where data is expanded into redundant shards such that the original can be reconstructed from any k of n shards. This property directly enables [[Fault Tolerance]] in [[Distributed Storage]] systems and is exploited in [[Data Availability]] sampling schemes for blockchain scalability. They support [[Data Integrity]] verification because any corruption reduces the number of valid evaluation points below the reconstruction threshold. Modern blockchain systems use Reed-Solomon polynomials in [[Cryptographic Proof]] constructions: FRI (Fast Reed-Solomon IOP) is the inner protocol of STARKs, and Kate polynomial commitments leverage similar finite-field polynomial evaluation principles. [[Blockchain]] scaling solutions — Ethereum's danksharding in particular — rely on Reed-Solomon erasure coding for data availability guarantees.

- ### Content
  - Reed-Solomon codes were introduced in a landmark 1960 paper by Irving Reed and Gustave Solomon at MIT Lincoln Laboratory. The paper described a class of codes constructed by encoding messages as polynomial coefficients over a finite field and evaluating the polynomial at a set of distinct field elements. Because a polynomial of degree k-1 is uniquely determined by any k of its values, redundant evaluations allow recovery from symbol errors or erasures. The codes are maximum distance separable (MDS), meaning they achieve the theoretical maximum error-correction efficiency — correcting t errors using exactly 2t redundancy symbols — which proved them optimal.

  - Technically, a Reed-Solomon code RS(n, k) encodes k data symbols into n codeword symbols over a finite field GF(2^m). The encoder treats the k data symbols as coefficients of a polynomial f(x) of degree k-1, then evaluates f at n distinct field elements {α₁, ..., αₙ} to produce the codeword. Decoding recovers f from any k evaluations, even if up to (n-k)/2 are corrupted, using algorithms such as Berlekamp-Massey (error location) followed by Forney (error value computation). Systematic variants preserve the original k symbols explicitly as part of the codeword, simplifying implementation.

  - Reed-Solomon codes became ubiquitous in consumer electronics and storage. Compact discs (1982) used two interleaved RS codes (Cross-Interleaved Reed-Solomon Coding, CIRC) achieving remarkable scratch resistance — up to a 2.5 mm scratch is fully correctable. DVDs, Blu-Ray, QR codes, digital television (DVB), and deep-space telemetry from NASA missions all employ RS coding. In storage systems, RAID-6 and erasure-coded object stores (Ceph, HDFS) use RS codes to maintain data durability with configurable redundancy overhead, typically 1.4× rather than the 3× of triple replication.

  - In 2024–2025 Reed-Solomon codes have gained renewed attention as the polynomial machinery underpinning blockchain cryptography. The FRI protocol (Fast Reed-Solomon IOPP) enables STARKs — succinct zero-knowledge proofs without trusted setup — by providing an efficient interactive oracle proof of proximity to a Reed-Solomon codeword. Ethereum's EIP-4844 (proto-danksharding) introduced blob transactions backed by KZG polynomial commitments, and the planned full danksharding uses 2D Reed-Solomon encoding for data availability sampling, allowing light clients to probabilistically verify data availability without downloading all data. This application of a classical 1960s coding theory result to modern cryptographic systems illustrates the deep mathematical continuity of the field.
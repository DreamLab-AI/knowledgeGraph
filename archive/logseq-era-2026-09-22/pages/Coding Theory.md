public:: true

# Coding Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7af3ca334be5d42959745833e3f1fc5046c7be9b31428d01753509cab7c2780c",
  "@type": "Page",
  "vc:slug": "coding-theory",
  "title": "Coding Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-theory",
      "vc:label": "Information Theory"
    },
    {
      "@id": "urn:visionflow:linked:error-correction",
      "vc:label": "Error Correction"
    },
    {
      "@id": "urn:visionflow:linked:reed-solomon-codes",
      "vc:label": "Reed-Solomon Codes"
    },
    {
      "@id": "urn:visionflow:linked:erasure-coding",
      "vc:label": "Erasure Coding"
    },
    {
      "@id": "urn:visionflow:linked:computational-complexity-theory",
      "vc:label": "Computational Complexity Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:coding-theory",
  "@type": "Class",
  "label": "Coding Theory",
  "definition": "The mathematical study of codes — structured mappings from messages to symbol sequences — and of their properties for reliable, efficient representation and transmission of information. Spanning error-correcting codes that add redundancy to detect and repair corruption, source codes that compress data towards its entropy, and cryptographic and network codes, coding theory turns Shannon's existence theorems into constructive schemes such as Hamming, Reed-Solomon, LDPC, turbo, and polar codes that underpin storage, networking, and broadcasting.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:information-theory",
    "label": "Information Theory"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:error-correction",
        "label": "Error Correction"
      },
      {
        "@id": "urn:ngm:class:reed-solomon-codes",
        "label": "Reed-Solomon Codes"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      },
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computational-complexity-theory",
        "label": "Computational Complexity Theory"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The mathematical study of codes — structured mappings from messages to symbol sequences — and of their properties for reliable, efficient representation and transmission of information. Spanning error-correcting codes that add redundancy to detect and repair corruption, source codes that compress data towards its entropy, and cryptographic and network codes, coding theory turns Shannon's existence theorems into constructive schemes such as Hamming, Reed-Solomon, LDPC, turbo, and polar codes that underpin storage, networking, and broadcasting."

- ### Semantic Classification
  - owl-class:: data:CodingTheory
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Information Theory]]
  - has-part:: [[Error Correction]], [[Reed-Solomon Codes]]
  - enables:: [[Erasure Coding]], [[Data Compression]]

- ### Content

  ## Definition

  **Coding theory** studies how to represent information as sequences of symbols so that it survives its journey — through a noisy channel, onto a scratched disc, across a failing disk array — and so that it takes no more space than it must. Shannon's 1948 channel coding theorem proved that below channel capacity, arbitrarily reliable communication is possible; it did not say how. Coding theory is the constructive discipline that answers *how*: designing explicit codes, and encoding and decoding algorithms, whose performance approaches Shannon's limits at practical cost.

  The field's core object is the **error-correcting code**: a subset of possible symbol sequences chosen so that codewords are far apart under Hamming distance, letting a decoder recognise and repair corrupted transmissions — the general problem of [[Error Correction]]. Algebraic coding builds such codes from finite-field structure: Hamming codes (single-error correction), BCH codes, and [[Reed-Solomon Codes]], which achieve the Singleton bound and correct burst errors in CDs, DVDs, QR codes, and DSL. Modern iteratively decoded codes — LDPC (Gallager, 1962, rediscovered in the 1990s), turbo codes (1993), and polar codes (Arıkan, 2009, the first provably capacity-achieving construction with practical decoding) — come within fractions of a decibel of capacity and were adopted in Wi-Fi, 5G, and satellite standards.

  The companion branch, source coding, removes redundancy rather than adding it, giving the theoretical footing for [[Data Compression]] (Huffman, arithmetic, and dictionary coding against the entropy bound). Treating symbol losses rather than corruptions yields [[Erasure Coding]], the storage-efficient redundancy scheme of RAID and distributed object stores. Deep connections run to [[Computational Complexity Theory]] — decoding general linear codes is NP-hard, locally decodable and testable codes power probabilistically checkable proofs, and code-based cryptosystems such as McEliece are leading post-quantum candidates.

  ## Technical Details

  - **Key parameters**: a block code [n, k, d] maps k message symbols to n coded symbols with minimum distance d; rate R = k/n measures efficiency, and the code corrects up to floor((d-1)/2) symbol errors.
  - **Fundamental bounds**: Singleton (d ≤ n - k + 1, met by MDS codes such as Reed-Solomon), Hamming (sphere-packing), Gilbert-Varshamov (existence), and Plotkin bounds delimit the achievable trade-off between rate and distance.
  - **Code families**: linear block codes (Hamming, BCH, Reed-Solomon, Reed-Muller), convolutional codes with Viterbi decoding, and modern graph-based codes (LDPC, turbo, polar) decoded by belief propagation or successive cancellation.
  - **Deployments**: 5G NR uses LDPC for data and polar codes for control channels; NAND flash and hard drives use LDPC; deep-space links use concatenated and turbo codes; distributed storage (HDFS, Ceph, S3) uses Reed-Solomon and locally repairable codes.
  - **Research frontiers**: locally repairable and regenerating codes for storage bandwidth, quantum error-correcting codes (surface and LDPC-type qLDPC codes), DNA storage codes, and coded computation for straggler-tolerant distributed computing.

  ## Current Landscape

  - **Below-threshold quantum error correction demonstrated**: Google's Willow processor achieved the first below-threshold surface-code memories (announced December 2024, published in Nature vol. 638, 2025) — logical error suppressed by Λ = 2.14 per distance-2 increase, culminating in a 101-qubit distance-7 code at 0.143% error per cycle, with real-time decoding at 63 µs average latency.
  - **qLDPC codes are the current frontier**: high-rate quantum LDPC codes offer far better physical-to-logical qubit ratios than the surface code; QuEra encoded up to 96 logical qubits with a [[16,6,4]] high-rate code on neutral atoms (Nature, 2026), and IBM's Kookaburra module (2026) introduces qLDPC quantum memory on its roadmap to fault tolerance.
  - **Decoding hardware catches up**: a 2025 GPU-accelerated belief-propagation decoder for qLDPC codes (DLR, arXiv:2508.07879) achieved sub-63 µs latencies on commodity RTX-class GPUs — beating the real-time threshold set by Willow's surface-code decoder — for codes as large as [[784, 24, 24]].
  - **Classical deployments stable**: 5G NR continues to use LDPC for data and polar codes for control channels; both families, plus successors, are under study for 6G channel coding.
  - **Complexity connections remain live**: code-based cryptography (McEliece-family schemes) remains among the post-quantum candidate families, and qLDPC codes with constant encoding rate have been shown to reduce fault-tolerance overhead to constant factors.

  **Sources**:
  - https://research.google/blog/making-quantum-error-correction-work/
  - https://inspirehep.net/literature/2821840
  - https://errorcorrectionzoo.org/c/qldpc

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z

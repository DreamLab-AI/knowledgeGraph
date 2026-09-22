public:: true

# Multihash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multihash",
  "@type": "Page",
  "vc:slug": "multihash",
  "title": "Multihash",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multihash",
  "@type": "Class",
  "label": "Multihash",
  "definition": "Multihash is a self-describing hash format developed by Protocol Labs in which the hash digest is prefixed with a varint-encoded function code and digest length, enabling consumers to identify the hash algorithm without out-of-band knowledge. It is a foundational component of the IPFS content-addressing stack and the Multiformat suite, providing algorithm agility so that systems can upgrade from SHA-256 to SHA3 or BLAKE3 without breaking existing identifiers. Any hash function can be registered in the Multihash table and the format is codec-neutral.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-hash",
      "label": "Cryptographic Hash"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:multicodec",
        "label": "Multicodec"
      },
      {
        "@id": "urn:ngm:class:multiformats",
        "label": "Multiformats"
      },
      {
        "@id": "urn:ngm:class:content-identifier",
        "label": "Content Identifier"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-addressed-storage",
        "label": "Content-Addressed Storage"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:binary-encoding",
        "label": "Binary Encoding"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:multiformats",
        "label": "Multiformats"
      },
      {
        "@id": "urn:ngm:class:ipld",
        "label": "IPLD"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-describing-hash",
      "label": "Self-Describing Hash"
    }
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
  - [[Multihash]] is a self-describing binary format that prefixes a cryptographic digest with a varint function code and digest length, enabling [[Content Addressing]] systems like [[IPFS]] to decode and verify any [[Cryptographic Hash Function]] without external schema negotiation.

- ### Relationships
  - Multihash is a core primitive in the IPFS Multiformat suite, directly enabling [[Content-Addressed Storage]] by embedding algorithm identity into each [[Content Addressing]] identifier. It composes with [[Merkle Tree]] structures to form Content Identifiers (CIDs) and relies on [[Binary Encoding]] (varint prefixes) to remain compact. The format strengthens [[Cryptographic Verification]] by making hash algorithm upgrades backwards-compatible.

- ### Content
  - Multihash was designed by Juan Benet and the Protocol Labs team circa 2015 as part of the broader Multiformats initiative. The motivation was a concrete engineering problem: IPFS needed a content-addressing scheme that could outlive any single hash algorithm. Prior systems hard-coded SHA-256 into their identifier format, meaning a collision vulnerability or algorithm deprecation would require a breaking protocol change. By prepending a two-varint header (function code, digest length), Multihash decouples algorithm choice from identifier structure.

  - A Multihash value is constructed by taking a raw hash digest and prepending the varint-encoded function code from the Multihash table (e.g., 0x12 for SHA2-256, 0x1b for KECCAK-256, 0x1e for BLAKE3) followed by the varint-encoded byte length of the digest. The result is a self-contained binary blob that any compliant parser can decompose without a lookup table or configuration file. Multihash values are typically further encoded in Base58btc or Base32 to produce human-readable CIDs.

  - In the IPFS and libp2p ecosystems, Multihash is ubiquitous: every CIDv0 and CIDv1 contains a Multihash, peer IDs are derived from Multihashes of public keys, and Merkle DAG node links reference Multihash-based CIDs. The format has been adopted in IPLD (InterPlanetary Linked Data), Filecoin, and various blockchain projects that need content-addressed data. Its algorithm agility is especially relevant as the industry begins planning post-quantum transitions.

  - As of 2024-2025, the Multihash table registers over 100 functions and the format is stable at version 1. Work on CIDv2 proposes richer metadata in the identifier but retains the Multihash inner structure. The broader Multiformats project continues to expand, with Multicodec and Multiaddr following the same self-describing philosophy. Multihash's influence extends beyond IPFS: it informs content-addressing proposals in the W3C Verifiable Credentials ecosystem and in decentralised social protocols.
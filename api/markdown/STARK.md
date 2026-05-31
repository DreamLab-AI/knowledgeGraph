public:: true

# STARK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b91b0592750df57d277457dcd5b1e84845ce636bcb99c96b60ba2210af4f080f",
  "@type": "Page",
  "vc:slug": "stark",
  "title": "STARK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-computation",
      "vc:label": "Verifiable Computation"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:cryptography-domain",
      "vc:label": "Cryptography Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "STARK"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stark",
  "@type": "Class",
  "label": "STARK",
  "definition": "A STARK is a scalable transparent argument of knowledge, a cryptographic proof system that lets a verifier check a computation was performed correctly without a trusted setup and with proof verification far cheaper than re-execution.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography-domain",
      "label": "Cryptography Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:stark:7e7d8c699ee5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b91b0592750df57d277457dcd5b1e84845ce636bcb99c96b60ba2210af4f080f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Computation]]",
      "resolved": "urn:visionflow:linked:verifiable-computation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography Domain]]",
      "resolved": "urn:visionflow:linked:cryptography-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A STARK is a scalable transparent argument of knowledge, a cryptographic proof system that lets a verifier check a computation was performed correctly without a trusted setup and with proof verification far cheaper than re-execution.

- ### Semantic Classification
  - owl-class:: metaverse:STARK
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography Domain]]
  - bridges-to:: [[Cryptographic Hash Function]], [[Blockchain]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Verifiable Computation]]

- ### Content
  - STARKs build succinct proofs from hash-based commitments and polynomial constraints, avoiding the trusted ceremony required by some other proof systems and resisting quantum attacks on their underlying assumptions. Proof size and verification scale favourably with computation size.
  - They are applied to verifiable computation and blockchain scaling, where a single proof attests that a large batch of transactions was processed correctly. This connects them to zero-knowledge proof techniques and to cryptographic hash functions used as the commitment primitive.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

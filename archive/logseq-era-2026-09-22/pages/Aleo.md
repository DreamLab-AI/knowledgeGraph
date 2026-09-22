public:: true

# Aleo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:818121da38635e1a99346d58fb9bacb69fc3c32a10aed6842bcbd4f8e0a4866d",
  "@type": "Page",
  "vc:slug": "aleo",
  "title": "Aleo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:pseudonymity",
      "vc:label": "Pseudonymity"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aleo"
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
  "@id": "urn:ngm:class:aleo",
  "@type": "Class",
  "label": "Aleo",
  "definition": "Aleo is a blockchain platform designed for private applications using zero-knowledge proofs to keep transaction data confidential while remaining verifiable. Programs are written in its Leo language.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zero-knowledge-proof",
      "label": "Zero-Knowledge Proof"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aleo:85ad9f955c6b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:818121da38635e1a99346d58fb9bacb69fc3c32a10aed6842bcbd4f8e0a4866d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pseudonymity]]",
      "resolved": "urn:visionflow:linked:pseudonymity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - Aleo is a blockchain platform designed for private applications using zero-knowledge proofs to keep transaction data confidential while remaining verifiable. Programs are written in its Leo language.

- ### Semantic Classification
  - owl-class:: blockchain:Aleo
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Blockchain]]
  - requires:: [[Zero-Knowledge Proof]], [[Cryptography]]
  - enables:: [[Privacy]], [[Pseudonymity]]

- ### Content
  - Aleo is a layer-1 blockchain built around zero-knowledge cryptography so that applications can execute off chain and post succinct proofs of correct execution on chain. This keeps inputs and state private while still allowing the network to verify outcomes.
  - Developers write applications in Leo, a programming language that compiles to zero-knowledge circuits, and the network uses a proof-of-work style mechanism tied to proof generation. The design targets confidential decentralised applications where exposing all data publicly is undesirable.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

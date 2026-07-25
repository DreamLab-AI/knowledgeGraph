public:: true

# Noir
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2d89a84d3741132a5699b2c3be46295a54fa038dbca2276554cb8ec21516ca7",
  "@type": "Page",
  "vc:slug": "noir",
  "title": "Noir",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:zk-snark",
      "vc:label": "ZK-SNARK"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-protocol",
      "vc:label": "Cryptographic Protocol"
    },
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Noir"
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
  "@id": "urn:ngm:class:noir",
  "@type": "Class",
  "label": "Noir",
  "definition": "A domain-specific programming language for writing zero-knowledge proofs, developed by Aztec. It abstracts the underlying proving system so developers can express circuits without low-level cryptographic detail.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
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
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
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
  "@id": "urn:visionflow:annotation:link-resolutions:noir:c203c6bcb339",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2d89a84d3741132a5699b2c3be46295a54fa038dbca2276554cb8ec21516ca7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ZK-SNARK]]",
      "resolved": "urn:visionflow:linked:zk-snark",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocol]]",
      "resolved": "urn:visionflow:linked:cryptographic-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
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
  - A domain-specific programming language for writing zero-knowledge proofs, developed by Aztec. It abstracts the underlying proving system so developers can express circuits without low-level cryptographic detail.

- ### Semantic Classification
  - owl-class:: blockchain:Noir
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Cryptographic Protocol]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[ZK-SNARK]]

- ### Content
  - Noir is a language designed for writing programs that compile into zero-knowledge proof circuits. It uses a Rust-like syntax and aims to let developers create provable computations without expertise in the underlying cryptography.
  - Developed by Aztec, Noir targets multiple proving backends, separating the program logic from the specific proof system, which allows the same code to be used with different cryptographic backends.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

public:: true

# Aztec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1",
  "@type": "Page",
  "vc:slug": "aztec",
  "title": "Aztec",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:aztec-protocol",
      "vc:label": "Aztec Protocol"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec"
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
  "@id": "urn:ngm:class:aztec",
  "@type": "Class",
  "label": "Aztec",
  "definition": "A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-2-networks",
      "label": "Layer 2 Networks"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec:4fcd983f1118",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ec3d155457fd47ac1f199db85bcc7eaf319693f0b35963c087251ded1bcf3ce1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Aztec Protocol]]",
      "resolved": "urn:visionflow:linked:aztec-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
      "kind": "StubLink"
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
  - A privacy-focused Layer 2 network for Ethereum that uses zero-knowledge proofs to enable confidential transactions and private smart contract execution.

- ### Semantic Classification
  - owl-class:: blockchain:Aztec
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Aztec Protocol]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum]]
  - enables:: [[Privacy]]

- ### Content
  - Aztec applies zero-knowledge proofs so that transaction amounts and participants can remain hidden while still being verifiable. The network aims to bring confidential state and private contract logic to an Ethereum rollup.
  - Encrypted notes represent value, and proofs attest that state transitions are valid without revealing their contents. This combines the scaling benefits of a rollup with privacy at the application layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

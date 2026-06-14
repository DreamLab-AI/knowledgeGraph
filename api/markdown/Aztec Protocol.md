public:: true

# Aztec Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2bec496484a28b5f78e66e697e0cc4ff4825383796aee1e70852336cfa929d8a",
  "@type": "Page",
  "vc:slug": "aztec-protocol",
  "title": "Aztec Protocol",
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
      "@id": "urn:visionflow:linked:aztec-network",
      "vc:label": "Aztec Network"
    },
    {
      "@id": "urn:visionflow:linked:aztec",
      "vc:label": "Aztec"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec Protocol"
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
  "@id": "urn:ngm:class:aztec-protocol",
  "@type": "Class",
  "label": "Aztec Protocol",
  "definition": "The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private contracts on Ethereum.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:aztec",
      "label": "Aztec"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec-protocol:dd586b97f09c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2bec496484a28b5f78e66e697e0cc4ff4825383796aee1e70852336cfa929d8a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:linked:zero-knowledge-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Aztec Network]]",
      "resolved": "urn:visionflow:linked:aztec-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Aztec]]",
      "resolved": "urn:visionflow:linked:aztec",
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
  - The protocol underlying the Aztec network that combines zero-knowledge proofs with an encrypted note model to provide confidential transactions and private contracts on Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:AztecProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Aztec]]
  - bridges-to:: [[Aztec Network]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Privacy]]

- ### Content
  - The Aztec protocol represents value as encrypted notes and uses zero-knowledge proofs to show that spends and state updates are valid without exposing amounts or parties. Proofs are verified on Ethereum to anchor the rollup.
  - By keeping computation private while still provable, the protocol supports application logic that handles confidential data. It targets use cases where on-chain transparency would otherwise leak sensitive information.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

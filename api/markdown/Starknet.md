public:: true

# Starknet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b7812ac5c5825bb16efebbbba8241e0a4744575f54c3d0a83d1e6efb9d83406",
  "@type": "Page",
  "vc:slug": "starknet",
  "title": "Starknet",
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
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
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
      "vc:value": "Starknet"
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
  "@id": "urn:ngm:class:starknet",
  "@type": "Class",
  "label": "Starknet",
  "definition": "A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written for the Cairo virtual machine.",
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
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:starknet:fd187671a1d5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0b7812ac5c5825bb16efebbbba8241e0a4744575f54c3d0a83d1e6efb9d83406"
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
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
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
  - A Layer 2 validity rollup for Ethereum that uses STARK proofs to verify off-chain execution of transactions written for the Cairo virtual machine.

- ### Semantic Classification
  - owl-class:: blockchain:Starknet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Networks]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Zero-Knowledge Proof]], [[Ethereum Smart Contract Platform]]
  - enables:: [[Scalability]]

- ### Content
  - Starknet batches transactions off-chain and posts a succinct STARK proof to Ethereum attesting that the batch executed correctly. Validity proofs let the network inherit Ethereum settlement security without re-executing each transaction on the base layer.
  - Programs on Starknet are written in Cairo, a language designed for provable computation. The approach reduces per-transaction cost by amortising proof generation across many transactions while keeping data and proof verification on the main chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

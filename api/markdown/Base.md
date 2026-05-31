public:: true

# Base
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94986893bd166cb1e399755ddf7c3439f3986456df51f19cff0a2c233f2b9516",
  "@type": "Page",
  "vc:slug": "base",
  "title": "Base",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:optimism",
      "vc:label": "Optimism"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:coinbase",
      "vc:label": "Coinbase"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Base"
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
  "@id": "urn:ngm:class:base",
  "@type": "Class",
  "label": "Base",
  "definition": "An Ethereum Layer 2 network built by Coinbase using the Optimism OP Stack, providing low-cost transactions secured by the Ethereum mainnet.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-2-scaling",
      "label": "Layer 2 Scaling"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:optimism",
        "label": "Optimism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:base:cae662172fd4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94986893bd166cb1e399755ddf7c3439f3986456df51f19cff0a2c233f2b9516"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimism]]",
      "resolved": "urn:visionflow:linked:optimism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Coinbase]]",
      "resolved": "urn:visionflow:linked:coinbase",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
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
  - An Ethereum Layer 2 network built by Coinbase using the Optimism OP Stack, providing low-cost transactions secured by the Ethereum mainnet.

- ### Semantic Classification
  - owl-class:: blockchain:Base
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Layer 2 Scaling]]
  - bridges-to:: [[Coinbase]]
  - requires:: [[Ethereum]], [[Optimism]]
  - enables:: [[DeFi]]

- ### Content
  - Base is an Ethereum Layer 2 rollup developed by Coinbase and built on the Optimism OP Stack. It batches transactions off the Ethereum mainnet and posts compressed data and proofs back to it, reducing fees while inheriting the security of the underlying chain.
  - The network supports general smart contract execution compatible with the Ethereum Virtual Machine, enabling decentralised finance, payments and consumer applications at lower cost than transacting directly on mainnet.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

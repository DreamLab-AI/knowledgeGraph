public:: true

# Scroll
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c31b7db7f1fddbf3791860559e30aadc3b36a34aa15b7eae53a0987fc678c0e4",
  "@type": "Page",
  "vc:slug": "scroll",
  "title": "Scroll",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:plonk",
      "vc:label": "PLONK"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:https-scroll-io",
      "vc:label": "https://scroll.io"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-scroll-io",
      "vc:label": "https://docs.scroll.io"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Scroll"
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
  "@id": "urn:ngm:class:scroll",
  "@type": "Class",
  "label": "Scroll",
  "definition": "Scroll is an Ethereum layer-two network that uses zero-knowledge rollup technology to scale transactions while remaining compatible with the Ethereum Virtual Machine. It posts validity proofs to Ethereum.",
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
        "@id": "urn:ngm:class:plonk",
        "label": "PLONK"
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
  "@id": "urn:visionflow:annotation:link-resolutions:scroll:e16a9d4d1cf9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c31b7db7f1fddbf3791860559e30aadc3b36a34aa15b7eae53a0987fc678c0e4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PLONK]]",
      "resolved": "urn:visionflow:linked:plonk",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://scroll.io]]",
      "resolved": "urn:visionflow:linked:https-scroll-io",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.scroll.io]]",
      "resolved": "urn:visionflow:linked:https-docs-scroll-io",
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
  - Scroll is an Ethereum layer-two network that uses zero-knowledge rollup technology to scale transactions while remaining compatible with the Ethereum Virtual Machine. It posts validity proofs to Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:Scroll
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Layer 2 Scaling]]
  - bridges-to:: [[Rollup]]
  - requires:: [[Ethereum]], [[PLONK]]
  - enables:: [[DeFi]]

- ### Content
  - Scroll is a zero-knowledge rollup for Ethereum that executes transactions off the main chain and submits succinct proofs of their correctness to the base layer. It aims to be compatible with existing Ethereum smart contracts and tools.
  - By using validity proofs, Scroll allows the base chain to confirm the correctness of layer-two transactions without re-executing them. This supports lower fees and higher throughput while inheriting security from Ethereum.

- ### Provenance
  - sources:: [[https://scroll.io]], [[https://docs.scroll.io]]
  - migration-date:: 2026-05-29T00:00:00Z

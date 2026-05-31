public:: true

# Mantle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9d6e5b3a489bfb22adef802c5f99337673f4f25fc432fccadcfd70e272abf94c",
  "@type": "Page",
  "vc:slug": "mantle",
  "title": "Mantle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:optimistic-rollup",
      "vc:label": "Optimistic Rollup"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-scaling",
      "vc:label": "Layer 2 Scaling"
    },
    {
      "@id": "urn:visionflow:linked:https-www-mantle-xyz",
      "vc:label": "https://www.mantle.xyz"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-mantle-xyz",
      "vc:label": "https://docs.mantle.xyz"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mantle"
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
  "@id": "urn:ngm:class:mantle",
  "@type": "Class",
  "label": "Mantle",
  "definition": "Mantle is an Ethereum layer-two network that uses a rollup design to lower transaction costs and increase throughput. It separates data availability from execution.",
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
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mantle:c38e8334242f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9d6e5b3a489bfb22adef802c5f99337673f4f25fc432fccadcfd70e272abf94c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimistic Rollup]]",
      "resolved": "urn:visionflow:linked:optimistic-rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Scaling]]",
      "resolved": "urn:visionflow:linked:layer-2-scaling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.mantle.xyz]]",
      "resolved": "urn:visionflow:linked:https-www-mantle-xyz",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.mantle.xyz]]",
      "resolved": "urn:visionflow:linked:https-docs-mantle-xyz",
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
  - Mantle is an Ethereum layer-two network that uses a rollup design to lower transaction costs and increase throughput. It separates data availability from execution.

- ### Semantic Classification
  - owl-class:: blockchain:Mantle
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Layer 2 Scaling]]
  - bridges-to:: [[Optimistic Rollup]]
  - requires:: [[Ethereum]], [[Rollup]]
  - enables:: [[DeFi]]

- ### Content
  - Mantle is a layer-two network for Ethereum that processes transactions off the main chain and posts data so that the results can be verified. Its modular design uses a separate data availability layer to reduce costs.
  - The network supports decentralised applications that benefit from lower fees than the Ethereum base layer. It is associated with a token and an on-chain treasury that funds ecosystem development.

- ### Provenance
  - sources:: [[https://www.mantle.xyz]], [[https://docs.mantle.xyz]]
  - migration-date:: 2026-05-29T00:00:00Z

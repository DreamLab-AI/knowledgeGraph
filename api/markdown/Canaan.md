public:: true

# Canaan
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d5408aa1843d5a796fc3e5188ea126c2aa1dcc66c63fbe146dbc995ce2c49ef7",
  "@type": "Page",
  "vc:slug": "canaan",
  "title": "Canaan",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:https-www-canaan-io",
      "vc:label": "https://www.canaan.io"
    },
    {
      "@id": "urn:visionflow:linked:https-www-canaan-io-products",
      "vc:label": "https://www.canaan.io/products"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Canaan"
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
  "@id": "urn:ngm:class:canaan",
  "@type": "Class",
  "label": "Canaan",
  "definition": "Canaan is a Chinese company that designs and produces Bitcoin mining hardware under the Avalon brand. It is a publicly listed manufacturer of ASIC machines.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asic",
      "label": "ASIC"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:canaan:4cb37c619b60",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d5408aa1843d5a796fc3e5188ea126c2aa1dcc66c63fbe146dbc995ce2c49ef7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ASIC]]",
      "resolved": "urn:visionflow:linked:asic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.canaan.io]]",
      "resolved": "urn:visionflow:linked:https-www-canaan-io",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.canaan.io/products]]",
      "resolved": "urn:visionflow:linked:https-www-canaan-io-products",
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
  - Canaan is a Chinese company that designs and produces Bitcoin mining hardware under the Avalon brand. It is a publicly listed manufacturer of ASIC machines.

- ### Semantic Classification
  - owl-class:: blockchain:Canaan
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[ASIC]]
  - bridges-to:: [[Hardware]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Transaction Validation]]

- ### Content
  - Canaan develops ASIC chips and assembles them into Avalon mining machines used for SHA-256 proof of work. The company was an early producer of commercial ASIC miners.
  - Canaan is one of several manufacturers supplying the mining industry and reports its production and sales as a public company. Its products compete on efficiency and price within the mining hardware market.

- ### Provenance
  - sources:: [[https://www.canaan.io]], [[https://www.canaan.io/products]]
  - migration-date:: 2026-05-29T00:00:00Z

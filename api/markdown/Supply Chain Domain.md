public:: true

# Supply Chain Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ed5200cd5fee2c05e641670cde111fac1f691f42bd2635f8e04f04dbd380ab9",
  "@type": "Page",
  "vc:slug": "supply-chain-domain",
  "title": "Supply Chain Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:provenance",
      "vc:label": "Provenance"
    },
    {
      "@id": "urn:visionflow:linked:logistics",
      "vc:label": "Logistics"
    },
    {
      "@id": "urn:visionflow:linked:inventory-management",
      "vc:label": "Inventory Management"
    },
    {
      "@id": "urn:visionflow:linked:demand-forecasting",
      "vc:label": "Demand Forecasting"
    },
    {
      "@id": "urn:visionflow:linked:traceability",
      "vc:label": "Traceability"
    },
    {
      "@id": "urn:visionflow:linked:data-management-domain",
      "vc:label": "Data Management Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:provenance-verification",
      "vc:label": "Provenance Verification"
    },
    {
      "@id": "urn:visionflow:linked:inventory-optimisation",
      "vc:label": "Inventory Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-domain",
      "vc:label": "Sustainability Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:gs-1-standards",
      "vc:label": "GS1 Standards"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Supply Chain Domain"
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
  "@id": "urn:ngm:class:supply-chain-domain",
  "@type": "Class",
  "label": "Supply Chain Domain",
  "definition": "The Supply Chain Domain classifies concepts concerning the flow of goods, information and finance from source to end customer. It covers sourcing, logistics, inventory and the traceability and coordination of multi-party networks. As a top-level subject axis it frames how physical and informational flows are planned, executed and verified across organisations.",
  "domain": "supply-chain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:logistics",
        "label": "Logistics"
      },
      {
        "@id": "urn:ngm:class:inventory-management",
        "label": "Inventory Management"
      },
      {
        "@id": "urn:ngm:class:demand-forecasting",
        "label": "Demand Forecasting"
      },
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-management-domain",
        "label": "Data Management Domain"
      },
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:provenance-verification",
        "label": "Provenance Verification"
      },
      {
        "@id": "urn:ngm:class:inventory-optimisation",
        "label": "Inventory Optimisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:supply-chain-domain:f5525a266f6d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ed5200cd5fee2c05e641670cde111fac1f691f42bd2635f8e04f04dbd380ab9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Provenance]]",
      "resolved": "urn:visionflow:linked:provenance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Logistics]]",
      "resolved": "urn:visionflow:linked:logistics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inventory Management]]",
      "resolved": "urn:visionflow:linked:inventory-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Demand Forecasting]]",
      "resolved": "urn:visionflow:linked:demand-forecasting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Traceability]]",
      "resolved": "urn:visionflow:linked:traceability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Management Domain]]",
      "resolved": "urn:visionflow:linked:data-management-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance Verification]]",
      "resolved": "urn:visionflow:linked:provenance-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inventory Optimisation]]",
      "resolved": "urn:visionflow:linked:inventory-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability Domain]]",
      "resolved": "urn:visionflow:linked:sustainability-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GS1 Standards]]",
      "resolved": "urn:visionflow:linked:gs-1-standards",
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
  - The Supply Chain Domain classifies concepts concerning the flow of goods, information and finance from source to end customer. It covers sourcing, logistics, inventory and the traceability and coordination of multi-party networks. As a top-level subject axis it frames how physical and informational flows are planned, executed and verified across organisations.

- ### Semantic Classification
  - owl-class:: sc:SupplyChainDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Blockchain Domain]], [[Sustainability Domain]]
  - has-part:: [[Provenance]], [[Logistics]], [[Inventory Management]], [[Demand Forecasting]], [[Traceability]]
  - requires:: [[Data Management Domain]], [[Identity Domain]]
  - enables:: [[Provenance Verification]], [[Inventory Optimisation]]

- ### Content
  - Supply chain concerns the coordination of materials, information and payments across the network of suppliers, manufacturers, distributors and customers. It plans what to produce and procure, executes movement and storage, and reconciles the financial flows that accompany them. Visibility across parties is essential because no single organisation controls the whole.
  - The domain addresses traceability and provenance, recording where items originate and how they move so that authenticity and conditions can be verified. Demand forecasting and inventory management balance the cost of holding stock against the risk of shortage. Resilience considers how the network responds to disruption and the strategies that mitigate it.
  - Supply chain bridges to blockchain, which offers shared tamper-evident records for multi-party provenance, and to sustainability, which assesses the material and emissions footprint of these flows. It depends on data management and identity to attribute and trust the records that span organisations.

- ### Provenance
  - sources:: [[GS1 Standards]]
  - migration-date:: 2026-05-29T00:00:00Z

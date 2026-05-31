public:: true

# Climate Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0e3aa7b4cef7e30897367ad09af06e9bf14a993467ad5cd098965eb2c58918e6",
  "@type": "Page",
  "vc:slug": "climate-finance",
  "title": "Climate Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:green-finance",
      "vc:label": "Green Finance"
    },
    {
      "@id": "urn:visionflow:linked:https-unfccc-int-topics-introduction-to-climate-finance",
      "vc:label": "https://unfccc.int/topics/introduction-to-climate-finance"
    },
    {
      "@id": "urn:visionflow:linked:https-www-worldbank-org-en-topic-climatefinance",
      "vc:label": "https://www.worldbank.org/en/topic/climatefinance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Climate Finance"
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
  "@id": "urn:ngm:class:climate-finance",
  "@type": "Class",
  "label": "Climate Finance",
  "definition": "Climate finance refers to funding directed towards activities that reduce greenhouse gas emissions or help adaptation to climate change. It includes public and private investment.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:green-finance",
      "label": "Green Finance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-markets",
        "label": "Carbon Markets"
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
  "@id": "urn:visionflow:annotation:link-resolutions:climate-finance:ee52f14fe4a7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0e3aa7b4cef7e30897367ad09af06e9bf14a993467ad5cd098965eb2c58918e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Markets]]",
      "resolved": "urn:visionflow:linked:carbon-markets",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Green Finance]]",
      "resolved": "urn:visionflow:linked:green-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://unfccc.int/topics/introduction-to-climate-finance]]",
      "resolved": "urn:visionflow:linked:https-unfccc-int-topics-introduction-to-climate-finance",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.worldbank.org/en/topic/climatefinance]]",
      "resolved": "urn:visionflow:linked:https-www-worldbank-org-en-topic-climatefinance",
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
  - Climate finance refers to funding directed towards activities that reduce greenhouse gas emissions or help adaptation to climate change. It includes public and private investment.

- ### Semantic Classification
  - owl-class:: governance:ClimateFinance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Green Finance]]
  - bridges-to:: [[Sustainability]]
  - enables:: [[Carbon Markets]]

- ### Content
  - Climate finance covers the flow of funds towards mitigation, such as renewable energy, and adaptation, such as flood defences. It draws on government budgets, development banks, and private capital.
  - International agreements set goals for transferring climate finance to lower-income countries. Mechanisms include grants, loans, and market instruments such as carbon credits, with debate over how to measure and direct the funds effectively.

- ### Provenance
  - sources:: [[https://unfccc.int/topics/introduction-to-climate-finance]], [[https://www.worldbank.org/en/topic/climatefinance]]
  - migration-date:: 2026-05-29T00:00:00Z

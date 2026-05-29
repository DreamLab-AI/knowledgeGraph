public:: true

# Environmental Accounting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d166312d907e834e813de16b8cd276ef3cdd621fa30837c9a5b07401936670c6",
  "@type": "Page",
  "vc:slug": "environmental-accounting",
  "title": "Environmental Accounting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9600"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental Accounting"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:environmental-accounting",
  "@type": "Class",
  "label": "Environmental Accounting",
  "definition": "A systematic framework for measuring, tracking, and reporting the environmental costs and impacts associated with economic activities, extending traditional financial accounting to incorporate natural capital, carbon emissions, resource consumption, and waste generation. Environmental accounting supports sustainability reporting, regulatory compliance, and circular economy transitions.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:environmental-sustainability",
        "label": "Environmental Sustainability"
      },
      {
        "@id": "urn:ngm:class:sustainability-reporting",
        "label": "SustainabilityReporting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:environmental-impact-metric",
        "label": "Environmental Impact Metric"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:environmental-assessment",
        "label": "Environmental Assessment"
      },
      {
        "@id": "urn:ngm:class:waste-management",
        "label": "Waste Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:circular-economy",
        "label": "Circular Economy"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-accounting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d166312d907e834e813de16b8cd276ef3cdd621fa30837c9a5b07401936670c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A systematic framework for measuring, tracking, and reporting the environmental costs and impacts associated with economic activities, extending traditional financial accounting to incorporate natural capital, carbon emissions, resource consumption, and waste generation. Environmental accounting supports sustainability reporting, regulatory compliance, and circular economy transitions.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalAccounting
  - owl-role:: concept

- ### Relationships
  - Enables [[Environmental Sustainability]]
  - Enables [[SustainabilityReporting]]
  - Uses [[Environmental Impact Metric]]
  - Supports [[Circular Economy]]
  - Related To [[Environmental Assessment]]
  - Related To [[Waste Management]]

- ### Content

  ## Overview

  Environmental Accounting represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

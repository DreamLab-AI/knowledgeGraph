public:: true

# Environmental K P I
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3571ef3520d3dcea85f8b6e116945957ea6667b1dc87fe9b720043fc139c16dc",
  "@type": "Page",
  "vc:slug": "environmental-k-p-i",
  "title": "Environmental K P I",
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
      "vc:value": "MV-9603"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental K P I"
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
  "@id": "urn:ngm:class:environmental-k-p-i",
  "@type": "Class",
  "label": "Environmental K P I",
  "definition": "Quantitative metrics used to measure, monitor, and report the environmental impact of digital platforms, metaverse infrastructure, and spatial computing systems. Environmental KPIs encompass energy consumption per user session, carbon emissions per compute hour, water usage effectiveness, and percentage of renewable energy sourced, providing governance bodies with evidence for sustainability compliance.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:environmental-certificate", "label": "Environmental Certificate"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-credit-token", "label": "Carbon Credit Token"},
      {"@id": "urn:ngm:class:blockchain-sustainability", "label": "Blockchain Sustainability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:interoperability-framework", "label": "Interoperability Framework"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-k-p-i:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3571ef3520d3dcea85f8b6e116945957ea6667b1dc87fe9b720043fc139c16dc"
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
  - Quantitative metrics used to measure, monitor, and report the environmental impact of digital platforms, metaverse infrastructure, and spatial computing systems. Environmental KPIs encompass energy consumption per user session, carbon emissions per compute hour, water usage effectiveness, and percentage of renewable energy sourced, providing governance bodies with evidence for sustainability compliance.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalKPI
  - owl-role:: concept

- ### Relationships
  - **enables**: Environmental Certificate — measured KPIs provide the evidential basis for issuing environmental certificates
  - **relatedTo**: Carbon Credit Token, Blockchain Sustainability — KPI data feeds tokenised carbon accounting and broader sustainability reporting
  - **requires**: Data Governance — accurate KPI measurement depends on governed, auditable data collection pipelines
  - **standardizedBy**: Interoperability Framework — cross-platform KPI comparability requires common measurement schemas

- ### Content

  ## Overview

  Environmental K P I represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

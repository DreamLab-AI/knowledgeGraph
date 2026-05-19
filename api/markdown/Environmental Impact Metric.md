public:: true

# Environmental Impact Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfe52fea45f0cb8960dcf293cd58d4788607bbb5894b78282df6aec342c37ffb",
  "@type": "Page",
  "vc:slug": "environmental-impact-metric",
  "title": "Environmental Impact Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-collection-system",
      "vc:label": "Data Collection System"
    },
    {
      "@id": "urn:visionflow:linked:e-waste-measurement",
      "vc:label": "E-Waste Measurement"
    },
    {
      "@id": "urn:visionflow:linked:emissions-database",
      "vc:label": "Emissions Database"
    },
    {
      "@id": "urn:visionflow:linked:energy-consumption-metric",
      "vc:label": "Energy Consumption Metric"
    },
    {
      "@id": "urn:visionflow:linked:energy-metering",
      "vc:label": "Energy Metering"
    },
    {
      "@id": "urn:visionflow:linked:environmental-optimization",
      "vc:label": "Environmental Optimization"
    },
    {
      "@id": "urn:visionflow:linked:esg-reporting-system",
      "vc:label": "ESG Reporting System"
    },
    {
      "@id": "urn:visionflow:linked:eu-ecodesign-directive",
      "vc:label": "EU Ecodesign Directive"
    },
    {
      "@id": "urn:visionflow:linked:ghg-protocol",
      "vc:label": "GHG Protocol"
    },
    {
      "@id": "urn:visionflow:linked:green-computing-initiative",
      "vc:label": "Green Computing Initiative"
    },
    {
      "@id": "urn:visionflow:linked:green-it-compliance",
      "vc:label": "Green IT Compliance"
    },
    {
      "@id": "urn:visionflow:linked:iso-14040",
      "vc:label": "ISO 14040"
    },
    {
      "@id": "urn:visionflow:linked:lifecycle-assessment-tool",
      "vc:label": "Lifecycle Assessment Tool"
    },
    {
      "@id": "urn:visionflow:linked:monitoring-infrastructure",
      "vc:label": "Monitoring Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:resource-efficiency-score",
      "vc:label": "Resource Efficiency Score"
    },
    {
      "@id": "urn:visionflow:linked:resource-tracking",
      "vc:label": "Resource Tracking"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-framework",
      "vc:label": "Sustainability Framework"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-report",
      "vc:label": "Sustainability Report"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-reporting",
      "vc:label": "Sustainability Reporting"
    },
    {
      "@id": "urn:visionflow:owl:class:benchmark-standard",
      "vc:label": "Benchmark Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:carbon-calculator",
      "vc:label": "Carbon Calculator"
    },
    {
      "@id": "urn:visionflow:owl:class:carbon-footprint-indicator",
      "vc:label": "Carbon Footprint Indicator"
    },
    {
      "@id": "urn:visionflow:owl:class:carbon-neutrality-planning",
      "vc:label": "Carbon Neutrality Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20309"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental Impact Metric"
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
  "@id": "urn:ngm:class:environmental-impact-metric",
  "@type": "Class",
  "label": "Environmental Impact Metric",
  "definition": "A quantitative measurement framework for assessing the environmental sustainability of metaverse and digital systems, encompassing energy consumption, carbon emissions, resource efficiency, and ecological footprint across computational infrastructure and user interactions.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:e-waste-measurement",
        "label": "E-Waste Measurement"
      },
      {
        "@id": "urn:ngm:class:energy-consumption-metric",
        "label": "Energy Consumption Metric"
      },
      {
        "@id": "urn:ngm:class:resource-efficiency-score",
        "label": "Resource Efficiency Score"
      },
      {
        "@id": "urn:ngm:class:sustainability-report",
        "label": "Sustainability Report"
      },
      {
        "@id": "urn:ngm:class:carbon-footprint-indicator",
        "label": "Carbon Footprint Indicator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-collection-system",
        "label": "Data Collection System"
      },
      {
        "@id": "urn:ngm:class:lifecycle-assessment-tool",
        "label": "Lifecycle Assessment Tool"
      },
      {
        "@id": "urn:ngm:class:monitoring-infrastructure",
        "label": "Monitoring Infrastructure"
      },
      {
        "@id": "urn:ngm:class:carbon-calculator",
        "label": "Carbon Calculator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:environmental-optimization",
        "label": "Environmental Optimization"
      },
      {
        "@id": "urn:ngm:class:green-it-compliance",
        "label": "Green IT Compliance"
      },
      {
        "@id": "urn:ngm:class:sustainability-reporting",
        "label": "Sustainability Reporting"
      },
      {
        "@id": "urn:ngm:class:carbon-neutrality-planning",
        "label": "Carbon Neutrality Planning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:esg-reporting-system",
        "label": "ESG Reporting System"
      },
      {
        "@id": "urn:ngm:class:green-computing-initiative",
        "label": "Green Computing Initiative"
      },
      {
        "@id": "urn:ngm:class:sustainability-framework",
        "label": "Sustainability Framework"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-impact-metric:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfe52fea45f0cb8960dcf293cd58d4788607bbb5894b78282df6aec342c37ffb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Collection System]]",
      "resolved": "urn:visionflow:linked:data-collection-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[E-Waste Measurement]]",
      "resolved": "urn:visionflow:linked:e-waste-measurement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Database]]",
      "resolved": "urn:visionflow:linked:emissions-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[Energy Consumption Metric]]",
      "resolved": "urn:visionflow:linked:energy-consumption-metric",
      "kind": "StubLink"
    },
    {
      "raw": "[[Energy Metering]]",
      "resolved": "urn:visionflow:linked:energy-metering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Optimization]]",
      "resolved": "urn:visionflow:linked:environmental-optimization",
      "kind": "StubLink"
    },
    {
      "raw": "[[ESG Reporting System]]",
      "resolved": "urn:visionflow:linked:esg-reporting-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[EU Ecodesign Directive]]",
      "resolved": "urn:visionflow:linked:eu-ecodesign-directive",
      "kind": "StubLink"
    },
    {
      "raw": "[[GHG Protocol]]",
      "resolved": "urn:visionflow:linked:ghg-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Green Computing Initiative]]",
      "resolved": "urn:visionflow:linked:green-computing-initiative",
      "kind": "StubLink"
    },
    {
      "raw": "[[Green IT Compliance]]",
      "resolved": "urn:visionflow:linked:green-it-compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 14040]]",
      "resolved": "urn:visionflow:linked:iso-14040",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lifecycle Assessment Tool]]",
      "resolved": "urn:visionflow:linked:lifecycle-assessment-tool",
      "kind": "StubLink"
    },
    {
      "raw": "[[Monitoring Infrastructure]]",
      "resolved": "urn:visionflow:linked:monitoring-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Efficiency Score]]",
      "resolved": "urn:visionflow:linked:resource-efficiency-score",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Tracking]]",
      "resolved": "urn:visionflow:linked:resource-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sustainability Framework]]",
      "resolved": "urn:visionflow:linked:sustainability-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sustainability Report]]",
      "resolved": "urn:visionflow:linked:sustainability-report",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sustainability Reporting]]",
      "resolved": "urn:visionflow:linked:sustainability-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Benchmark Standard]]",
      "resolved": "urn:visionflow:owl:class:benchmark-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Calculator]]",
      "resolved": "urn:visionflow:owl:class:carbon-calculator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Footprint Indicator]]",
      "resolved": "urn:visionflow:owl:class:carbon-footprint-indicator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Neutrality Planning]]",
      "resolved": "urn:visionflow:owl:class:carbon-neutrality-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
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
  - A quantitative measurement framework for assessing the environmental sustainability of metaverse and digital systems, encompassing energy consumption, carbon emissions, resource efficiency, and ecological footprint across computational infrastructure and user interactions.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalImpactMetric
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Energy Consumption Metric]], [[Carbon Footprint Indicator]], [[E-Waste Measurement]], [[Resource Efficiency Score]], [[Sustainability Report]]
  - is-part-of:: [[Sustainability Framework]], [[ESG Reporting System]], [[Green Computing Initiative]]
  - requires:: [[Monitoring Infrastructure]], [[Data Collection System]], [[Carbon Calculator]], [[Lifecycle Assessment Tool]]
  - enables:: [[Sustainability Reporting]], [[Carbon Neutrality Planning]], [[Green IT Compliance]], [[Environmental Optimization]]
  - depends-on:: [[Energy Metering]], [[Emissions Database]], [[Resource Tracking]], [[Benchmark Standard]]

- ### Content
  Environmental Impact Metric — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 14040]], [[GHG Protocol]], [[EU Ecodesign Directive]]
  - migration-date:: 2026-04-26T00:00:00Z

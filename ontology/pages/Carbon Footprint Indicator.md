public:: true

# Carbon Footprint Indicator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66d4319c92e712ea34aad39b648edc4c287c52d75d9a132cf8d01c60aeeed83c",
  "@type": "Page",
  "vc:slug": "carbon-footprint-indicator",
  "title": "Carbon Footprint Indicator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:benchmarking",
      "vc:label": "Benchmarking"
    },
    {
      "@id": "urn:visionflow:linked:emissions-data",
      "vc:label": "Emissions Data"
    },
    {
      "@id": "urn:visionflow:linked:environmental-kpi",
      "vc:label": "Environmental KPI"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    },
    {
      "@id": "urn:visionflow:linked:measurement-methodology",
      "vc:label": "Measurement Methodology"
    },
    {
      "@id": "urn:visionflow:linked:performance-monitoring",
      "vc:label": "Performance Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:reporting-framework",
      "vc:label": "Reporting Framework"
    },
    {
      "@id": "urn:visionflow:linked:target-tracking",
      "vc:label": "Target Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9810"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Footprint Indicator"
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
  "@id": "urn:ngm:class:carbon-footprint-indicator",
  "@type": "Class",
  "label": "Carbon Footprint Indicator",
  "definition": "A quantitative environmental performance metric that measures and tracks an organization's greenhouse gas emissions in CO2 equivalent units, serving as a key sustainability KPI for monitoring progress toward emission reduction targets and enabling comparative analysis across operations.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:environmental-k-p-i",
      "label": "Environmental K P I"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:emissions-data",
        "label": "Emissions Data"
      },
      {
        "@id": "urn:ngm:class:measurement-methodology",
        "label": "Measurement Methodology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:benchmarking",
        "label": "Benchmarking"
      },
      {
        "@id": "urn:ngm:class:performance-monitoring",
        "label": "Performance Monitoring"
      },
      {
        "@id": "urn:ngm:class:target-tracking",
        "label": "Target Tracking"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-footprint-indicator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:66d4319c92e712ea34aad39b648edc4c287c52d75d9a132cf8d01c60aeeed83c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Benchmarking]]",
      "resolved": "urn:visionflow:linked:benchmarking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Data]]",
      "resolved": "urn:visionflow:linked:emissions-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental KPI]]",
      "resolved": "urn:visionflow:linked:environmental-kpi",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Methodology]]",
      "resolved": "urn:visionflow:linked:measurement-methodology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Performance Monitoring]]",
      "resolved": "urn:visionflow:linked:performance-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reporting Framework]]",
      "resolved": "urn:visionflow:linked:reporting-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Target Tracking]]",
      "resolved": "urn:visionflow:linked:target-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A quantitative environmental performance metric that measures and tracks an organization's greenhouse gas emissions in CO2 equivalent units, serving as a key sustainability KPI for monitoring progress toward emission reduction targets and enabling comparative analysis across operations.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonFootprintIndicator
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental KPI]]
  - requires:: [[Emissions Data]], [[Measurement Methodology]], [[Reporting Framework]]
  - enables:: [[Performance Monitoring]], [[Target Tracking]], [[Benchmarking]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Measurement Scope**:
		- **Scope 1**: Direct emissions from company facilities and vehicles
		- **Scope 2**: Indirect emissions from purchased electricity
		- **Scope 3**: Value chain emissions (typically 80%+ of total)
  - **Related KPIs**:
		- Carbon Intensity (emissions per unit output)
		- Energy Consumption (70%+ of typical carbon footprint)
		- Waste Reduction and Recycling Rates
		- Water Conservation Metrics
		- Supply Chain Emissions
  - **Reporting Standards**: GHG Protocol, ISO 14064, ISSB IFRS S2
  - **Unit of Measurement**: Tonnes of CO2 equivalent (tCO2e)
  - **Best Practices**: Align KPIs with business model and value chain; balance comprehensiveness with operational simplicity
  - ## Applications
  - Corporate sustainability dashboard reporting
  - ESG investor disclosures
  - Regulatory compliance tracking
  - Carbon reduction target monitoring
  - Supply chain performance management

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-04-26T00:00:00Z

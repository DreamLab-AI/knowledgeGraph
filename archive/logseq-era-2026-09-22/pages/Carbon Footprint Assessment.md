public:: true

# Carbon Footprint Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a7636ababbbe78acccdacc82501a1bd38e190c02898d0939a7ebddbb664b2a63",
  "@type": "Page",
  "vc:slug": "carbon-footprint-assessment",
  "title": "Carbon Footprint Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:boundary-definition",
      "vc:label": "Boundary Definition"
    },
    {
      "@id": "urn:visionflow:linked:emission-factors",
      "vc:label": "Emission Factors"
    },
    {
      "@id": "urn:visionflow:linked:hotspot-identification",
      "vc:label": "Hotspot Identification"
    },
    {
      "@id": "urn:visionflow:linked:impact-quantification",
      "vc:label": "Impact Quantification"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    },
    {
      "@id": "urn:visionflow:linked:lifecycle-data",
      "vc:label": "Lifecycle Data"
    },
    {
      "@id": "urn:visionflow:linked:reduction-strategy",
      "vc:label": "Reduction Strategy"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:environmental-assessment",
      "vc:label": "Environmental Assessment"
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
      "vc:value": "MV-9809"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Footprint Assessment"
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
  "@id": "urn:ngm:class:carbon-footprint-assessment",
  "@type": "Class",
  "label": "Carbon Footprint Assessment",
  "definition": "A comprehensive emodology that quantifies total greenhouse gas emissions associated with a product, service, or organization across its entire lifecycle using Life Cycle Assessment principles, expressed in CO2 equivalent units to identify emission hotspots and reduction opportunities.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:environmental-assessment",
      "label": "Environmental Assessment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:emission-factors",
        "label": "Emission Factors"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-footprint-assessment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a7636ababbbe78acccdacc82501a1bd38e190c02898d0939a7ebddbb664b2a63"
  },
  "vc:resolutions": [
    {
      "raw": "[[Boundary Definition]]",
      "resolved": "urn:visionflow:linked:boundary-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emission Factors]]",
      "resolved": "urn:visionflow:linked:emission-factors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hotspot Identification]]",
      "resolved": "urn:visionflow:linked:hotspot-identification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Impact Quantification]]",
      "resolved": "urn:visionflow:linked:impact-quantification",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lifecycle Data]]",
      "resolved": "urn:visionflow:linked:lifecycle-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reduction Strategy]]",
      "resolved": "urn:visionflow:linked:reduction-strategy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Assessment]]",
      "resolved": "urn:visionflow:owl:class:environmental-assessment",
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
  - A comprehensive evaluation methodology that quantifies total greenhouse gas emissions associated with a product, service, or organization across its entire lifecycle using Life Cycle Assessment principles, expressed in CO2 equivalent units to identify emission hotspots and reduction opportunities.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonFootprintAssessment
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental Assessment]]
  - requires:: [[Lifecycle Data]], [[Emission Factors]], [[Boundary Definition]]
  - enables:: [[Impact Quantification]], [[Hotspot Identification]], [[Reduction Strategy]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Governing Standards**:
		- **ISO 14040/14044**: LCA principles and framework
		- **ISO 14067**: Product carbon footprint quantification
		- **PAS 2050**: Product emissions specification
		- **GHG Protocol Product Standard**: Value chain emissions
  - **LCA Phases**:
		- Goal and Scope Definition
		- Life Cycle Inventory (LCI) - inputs and outputs
		- Impact Assessment (LCIA)
		- Interpretation
  - **Lifecycle Stages**:
		- Raw material extraction
		- Manufacturing/production
		- Transportation/distribution
		- Use phase
		- End-of-life disposal/recycling
  - **Key Findings**: Supply chain typically accounts for 80%+ of environmental impact; renewable technologies 400-1,000 g CO2eq/kWh lower than fossil fuels
  - ## Applications
  - Product carbon footprint labeling
  - Corporate sustainability reporting
  - Supply chain optimization
  - Comparative product analysis
  - Regulatory compliance documentation

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-04-26T00:00:00Z

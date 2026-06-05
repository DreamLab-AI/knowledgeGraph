public:: true

# Carbon Calculator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a68df46774c1a872c41e8dbb15680e6f64e548ff93037b4eeb70bc3d6f1d341e",
  "@type": "Page",
  "vc:slug": "carbon-calculator",
  "title": "Carbon Calculator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:activity-data",
      "vc:label": "Activity Data"
    },
    {
      "@id": "urn:visionflow:linked:calculation-methodology",
      "vc:label": "Calculation Methodology"
    },
    {
      "@id": "urn:visionflow:linked:emission-factors",
      "vc:label": "Emission Factors"
    },
    {
      "@id": "urn:visionflow:linked:emissions-estimation",
      "vc:label": "Emissions Estimation"
    },
    {
      "@id": "urn:visionflow:linked:footprint-awareness",
      "vc:label": "Footprint Awareness"
    },
    {
      "@id": "urn:visionflow:linked:reduction-planning",
      "vc:label": "Reduction Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:sustainability-tool",
      "vc:label": "Sustainability Tool"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9808"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Calculator"
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
  "@id": "urn:ngm:class:carbon-calculator",
  "@type": "Class",
  "label": "Carbon Calculator",
  "definition": "A digital tool or software application that estimates greenhouse gas emissions from activities such as energy consumption, transportation, and production by applying standardized emission factors to user-provided data, enabling individuals and organizations to quantify and understand their carbon...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:sustainability-tool",
        "label": "Sustainability Tool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:activity-data",
        "label": "Activity Data"
      },
      {
        "@id": "urn:ngm:class:calculation-methodology",
        "label": "Calculation Methodology"
      },
      {
        "@id": "urn:ngm:class:emission-factors",
        "label": "Emission Factors"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:emissions-estimation",
        "label": "Emissions Estimation"
      },
      {
        "@id": "urn:ngm:class:footprint-awareness",
        "label": "Footprint Awareness"
      },
      {
        "@id": "urn:ngm:class:reduction-planning",
        "label": "Reduction Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-calculator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a68df46774c1a872c41e8dbb15680e6f64e548ff93037b4eeb70bc3d6f1d341e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Activity Data]]",
      "resolved": "urn:visionflow:linked:activity-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calculation Methodology]]",
      "resolved": "urn:visionflow:linked:calculation-methodology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emission Factors]]",
      "resolved": "urn:visionflow:linked:emission-factors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Estimation]]",
      "resolved": "urn:visionflow:linked:emissions-estimation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Footprint Awareness]]",
      "resolved": "urn:visionflow:linked:footprint-awareness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reduction Planning]]",
      "resolved": "urn:visionflow:linked:reduction-planning",
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
    },
    {
      "raw": "[[Sustainability Tool]]",
      "resolved": "urn:visionflow:owl:class:sustainability-tool",
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
  - A digital tool or software application that estimates greenhouse gas emissions from activities such as energy consumption, transportation, and production by applying standardized emission factors to user-provided data, enabling individuals and organizations to quantify and understand their carbon footprint.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonCalculator
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Sustainability Tool]]
  - requires:: [[Emission Factors]], [[Activity Data]], [[Calculation Methodology]]
  - enables:: [[Emissions Estimation]], [[Footprint Awareness]], [[Reduction Planning]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Calculation Categories**:
		- Home energy (electricity, heating, cooling)
		- Transportation (vehicles, flights, public transit)
		- Waste and recycling
		- Product lifecycle emissions
		- Supply chain activities
  - **Data Sources**:
		- UK DESNZ emission factors (2024 factors)
		- EPA emission data
		- GHG Protocol databases
		- 80+ validated scientific sources
  - **Platform Types**:
		- **Individual Calculators**: EPA, CarbonFootprint.com, Conservation.org
		- **Enterprise APIs**: Climatiq (2024 "Cool Vendor"), Workiva Carbon
		- **Sector-Specific**: Cool Farm Tool (agriculture), CHSB (hospitality)
		- **Template-Based**: FIRA calculator with 2024 emission factors
  - **Output Standards**: All results expressed in CO2e, compliant with GHG Protocol
  - ## Applications
  - Personal carbon footprint awareness
  - Corporate Scope 1+2+3 calculations
  - Travel emissions estimation
  - Product carbon footprint assessment
  - Offset requirement determination

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

public:: true

# Power Usage Effectiveness

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:power-usage-effectiveness",
  "@type": "Page",
  "title": "Power Usage Effectiveness",
  "vc:slug": "power-usage-effectiveness",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-usage-effectiveness",
  "@type": "Class",
  "label": "Power Usage Effectiveness",
  "definition": "Power usage effectiveness (PUE) is a metric used to assess the energy efficiency of a data centre, defined as the ratio of total facility energy to the energy delivered to IT equipment. A PUE of 1.0 represents perfect efficiency where all energy reaches computing hardware, while higher values reflect overhead from cooling, power conversion and lighting. It is a widely used benchmark for sustainability and operational efficiency in data centres.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:energy-efficiency",
      "label": "Energy Efficiency"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:energy-consumption",
        "label": "Energy Consumption"
      },
      {
        "@id": "urn:ngm:class:electricity-consumption",
        "label": "Electricity Consumption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:immersion-cooling",
        "label": "Immersion Cooling"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:cooling-system",
        "label": "Cooling System"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:environmental-sustainability",
        "label": "Environmental Sustainability"
      },
      {
        "@id": "urn:ngm:class:sustainability-reporting",
        "label": "SustainabilityReporting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:power-distribution-unit",
        "label": "Power Distribution Unit"
      },
      {
        "@id": "urn:ngm:class:energy-management",
        "label": "Energy Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:carbon-footprint-measurement",
        "label": "Carbon Footprint Measurement"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operational-efficiency",
        "label": "Operational Efficiency"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Relates to [[Energy Efficiency]]
  - Relates to [[Data Centre]]
  - Relates to [[Cooling System]]
  - Relates to [[Energy Consumption]]
  - Relates to [[Carbon Footprint Measurement]]
- ### Overview
  - PUE divides total facility energy by the energy consumed by IT load.
  - Values approach 1.0 as cooling and conversion overheads are minimised.
  - It is reported by operators and used in sustainability disclosures and procurement.
  - Complementary metrics address water use and carbon intensity alongside power efficiency.
- ### Key aspects
  - **Definition** — Total facility energy divided by IT equipment energy yields a dimensionless ratio at or above 1.0.
  - **Overhead drivers** — Cooling, power distribution losses and lighting account for the gap between PUE and 1.0.
  - **Measurement** — Metering of facility and IT loads over representative periods produces credible figures.
  - **Limitations** — PUE ignores absolute consumption, workload utilisation and embodied energy, so it is read alongside other metrics.
- ### Applications
  - Benchmarking and reporting data-centre energy efficiency.
  - Justifying investment in advanced cooling such as liquid and immersion systems.
  - Informing site selection and design for hyperscale facilities.
  - Supporting corporate sustainability and carbon-reporting commitments.
- ### Relationships
  - subClassOf:: [[Energy Efficiency]]
  - uses:: [[Energy Consumption]]
  - uses:: [[Electricity Consumption]]
  - relatedTo:: [[Energy Efficiency]]
  - relatedTo:: [[Data Centre]]
  - relatedTo:: [[Immersion Cooling]]
  - hasPart:: [[Cooling System]]
  - hasPart:: [[Power Supply]]
  - partOf:: [[Environmental Sustainability]]
  - partOf:: [[SustainabilityReporting]]
  - dependsOn:: [[Power Distribution Unit]]
  - dependsOn:: [[Energy Management]]
  - supports:: [[Carbon Footprint Measurement]]
  - enables:: [[Operational Efficiency]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15

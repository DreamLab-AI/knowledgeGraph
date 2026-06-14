public:: true

# Emission Factors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:emission-factors",
  "@type": "Page",
  "vc:slug": "emission-factors",
  "title": "Emission Factors",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:emission-factors",
  "@type": "Class",
  "label": "Emission Factors",
  "definition": "Emission Factors are coefficients that quantify the average amount of a pollutant—typically greenhouse gases expressed in CO2-equivalent—released per unit of an activity, such as per kilowatt-hour of electricity consumed or per kilometre driven by a particular vehicle class. They are derived from empirical measurement campaigns and modelling studies, and published by bodies such as the IPCC, the IEA, and national environmental agencies. Emission factors are the fundamental input to carbon accounting frameworks such as the GHG Protocol, enabling organisations to calculate their Scope 1, 2, and 3 inventories from activity data. Regular revision of these factors reflects technological change and regional grid decarbonisation.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:scope-1-emissions", "label": "Scope 1 Emissions"},
      {"@id": "urn:ngm:class:scope-2-emissions", "label": "Scope 2 Emissions"},
      {"@id": "urn:ngm:class:scope-3-emissions", "label": "Scope 3 Emissions"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"},
      {"@id": "urn:ngm:class:environmental-accounting", "label": "Environmental Accounting"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ghg-protocol", "label": "GHG Protocol"},
      {"@id": "urn:ngm:class:life-cycle-assessment", "label": "Life Cycle Assessment"},
      {"@id": "urn:ngm:class:activity-data", "label": "Activity Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"},
      {"@id": "urn:ngm:class:environmental-impact-metric", "label": "Environmental Impact Metric"},
      {"@id": "urn:ngm:class:greenhouse-gas-inventory", "label": "Greenhouse Gas Inventory"},
      {"@id": "urn:ngm:class:carbon-disclosure", "label": "Carbon Disclosure"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:ipcc-guidelines", "label": "IPCC Guidelines"},
      {"@id": "urn:ngm:class:measurement-uncertainty", "label": "Measurement Uncertainty"},
      {"@id": "urn:ngm:class:national-energy-statistics", "label": "National Energy Statistics"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ipcc", "label": "IPCC"},
      {"@id": "urn:ngm:class:iso-14064", "label": "ISO 14064"},
      {"@id": "urn:ngm:class:iea-statistics", "label": "IEA Statistics"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:sustainability-reporting", "label": "SustainabilityReporting"},
      {"@id": "urn:ngm:class:carbon-credits", "label": "Carbon Credits"},
      {"@id": "urn:ngm:class:net-zero-target-setting", "label": "Net Zero Target Setting"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:direct-measurement", "label": "Direct Measurement"},
      {"@id": "urn:ngm:class:spend-based-accounting", "label": "Spend-Based Accounting"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:energy-grid-data", "label": "Energy Grid Data"},
      {"@id": "urn:ngm:class:supply-chain-transparency", "label": "Supply Chain Transparency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-footprint-assessment", "label": "Carbon Footprint Assessment"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ghg-emission-coefficients", "label": "GHG Emission Coefficients"},
    {"@id": "urn:ngm:class:carbon-intensity-factors", "label": "Carbon Intensity Factors"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - Emission Factors are standardised coefficients, anchored in the [[GHG Protocol]] and [[Life Cycle Assessment]] methodology, that convert activity data—energy use, transport distance, material consumption—into greenhouse gas quantities, enabling [[Carbon Footprint Measurement]] and [[Environmental Impact Metric]] reporting.

- ### Relationships
  - Emission Factors require the [[GHG Protocol]] to define the scope boundaries within which they are applied, and [[Life Cycle Assessment]] methodology to determine which upstream and downstream processes to include. They enable [[Carbon Footprint Measurement]] and the production of [[Environmental Impact Metric]] outputs. They are closely related to [[Carbon Footprint Assessment]] exercises, [[Sustainability Reporting]] obligations under frameworks such as GRI and TCFD, [[Environmental Accounting]] standards, and the verification of [[Carbon Credits]] that must be grounded in credible emission quantification.

- ### Content
  - Emission factors translate the physical world of energy flows, material processes, and transport activities into the accounting world of carbon inventories. Without them, organisations cannot calculate their greenhouse gas footprint from observable activity data. A data centre operator, for instance, multiplies electricity consumption (in kWh) by the grid emission factor (in kgCO2e/kWh) for their region to arrive at a Scope 2 emission figure. The quality, recency, and regional specificity of the factors used are therefore critical determinants of inventory accuracy.

  - National and international databases maintain regularly updated emission factor libraries. The UK Government's BEIS annually publishes conversion factors for electricity, heat, transport, and materials. The US EPA's AP-42 database covers stationary combustion sources. The IPCC's National Greenhouse Gas Inventories guidelines provide the global methodological backbone. Each database documents measurement methods, uncertainty ranges, and temporal coverage, allowing users to select the most appropriate factor for their context and to propagate uncertainty through their calculations.

  - The energy transition is continuously revising electricity grid emission factors. As renewable capacity displaces fossil generation, the average emission intensity of national grids declines year on year. This creates a need for time-stamped, granular emission factors—ideally at hourly or sub-hourly resolution—to support claims of 24/7 carbon-free energy procurement, where consumption must be matched temporally and geographically to zero-carbon generation. Static annual average factors can substantially overstate or understate the climate impact of electrification strategies.

  - For [[Carbon Credits]] markets to function with integrity, the emission reductions or removals they represent must be calculated using credible, independently verified emission factors. Project developers and carbon registries must apply factors that are conservative, transparent, and consistent with recognised methodologies. Divergence between different factor databases—or use of outdated factors—can create significant discrepancies in claimed reductions, undermining market credibility and investor confidence in voluntary carbon markets.

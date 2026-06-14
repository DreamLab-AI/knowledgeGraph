public:: true

# Scope 1 Emissions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scope-1-emissions",
  "@type": "Page",
  "vc:slug": "scope-1-emissions",
  "title": "Scope 1 Emissions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scope-1-emissions",
  "@type": "Class",
  "label": "Scope 1 Emissions",
  "definition": "Scope 1 emissions are direct greenhouse gas (GHG) emissions from sources that are owned or controlled by a reporting organisation, as defined by the GHG Protocol Corporate Standard. They include combustion of fuels in owned vehicles, boilers, and furnaces; process emissions from chemical or physical reactions in production; and fugitive emissions from refrigerant leaks, methane from waste operations, and similar inadvertent releases. Scope 1 emissions are denominated in CO2-equivalent (CO2e) tonnes and represent the most controllable category of an organisation's carbon footprint.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:scope-2-emissions", "label": "Scope 2 Emissions"},
      {"@id": "urn:ngm:class:scope-3-emissions", "label": "Scope 3 Emissions"},
      {"@id": "urn:ngm:class:ghg-protocol", "label": "GHG Protocol"},
      {"@id": "urn:ngm:class:emission-factors", "label": "Emission Factors"},
      {"@id": "urn:ngm:class:carbon-border-adjustment-mechanism", "label": "Carbon Border Adjustment Mechanism"},
      {"@id": "urn:ngm:class:kyoto-protocol", "label": "Kyoto Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"},
      {"@id": "urn:ngm:class:environmental-accounting", "label": "Environmental Accounting"},
      {"@id": "urn:ngm:class:mass-balance-method", "label": "Mass Balance Method"},
      {"@id": "urn:ngm:class:activity-data", "label": "Activity Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:sustainability-reporting", "label": "Sustainability Reporting"},
      {"@id": "urn:ngm:class:carbon-neutrality-planning", "label": "Carbon Neutrality Planning"},
      {"@id": "urn:ngm:class:net-zero-target-setting", "label": "Net Zero Target Setting"},
      {"@id": "urn:ngm:class:carbon-trading", "label": "Carbon Trading"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:corporate-carbon-footprint", "label": "Corporate Carbon Footprint"},
      {"@id": "urn:ngm:class:ghg-inventory", "label": "GHG Inventory"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:stationary-combustion-emissions", "label": "Stationary Combustion Emissions"},
      {"@id": "urn:ngm:class:mobile-combustion-emissions", "label": "Mobile Combustion Emissions"},
      {"@id": "urn:ngm:class:process-emissions", "label": "Process Emissions"},
      {"@id": "urn:ngm:class:fugitive-emissions", "label": "Fugitive Emissions"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ifrs-s2", "label": "IFRS S2"},
      {"@id": "urn:ngm:class:corporate-sustainability-reporting-directive", "label": "Corporate Sustainability Reporting Directive"},
      {"@id": "urn:ngm:class:iso-14064", "label": "ISO 14064"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:scope-2-emissions", "label": "Scope 2 Emissions"},
      {"@id": "urn:ngm:class:scope-3-emissions", "label": "Scope 3 Emissions"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:third-party-assurance", "label": "Third-Party Assurance"},
      {"@id": "urn:ngm:class:operational-control-boundary", "label": "Operational Control Boundary"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:carbon-capture-utilisation-and-storage", "label": "Carbon Capture Utilisation and Storage"},
      {"@id": "urn:ngm:class:supply-chain-decarbonisation", "label": "Supply Chain Decarbonisation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:direct-ghg-emissions", "label": "Direct GHG Emissions"},
    {"@id": "urn:ngm:class:direct-emissions", "label": "Direct Emissions"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Scope 1 Emissions]] are direct greenhouse gas emissions from sources owned or controlled by an organisation — including combustion, industrial processes, and fugitive releases — quantified in CO2-equivalent using [[Emission Factors]] from the [[GHG Protocol]] and forming the primary controllable component of [[Carbon Accounting]] and [[ESG Reporting]] disclosures.

- ### Relationships
  - [[Scope 1 Emissions]] are defined in relation to [[Scope 2 Emissions]] (purchased electricity) and [[Scope 3 Emissions]] (value chain) under the [[GHG Protocol]] framework, together constituting the three-scope boundary for [[Carbon Footprint Measurement]]. [[Environmental Accounting]] methodologies map organisational activities to [[Emission Factors]] to calculate CO2e totals. The resulting data feeds [[ESG Reporting]] frameworks (GRI, TCFD, CSRD) and [[Sustainability Reporting]] disclosures, and is the starting point for [[Carbon Neutrality Planning]] initiatives involving fuel switching and efficiency improvements.

- ### Content
  - The three-scope classification was formalised by the World Resources Institute (WRI) and World Business Council for Sustainable Development (WBCSD) through the GHG Protocol Corporate Accounting and Reporting Standard, first published in 2001 and revised in 2004. The framework drew on earlier precedents from voluntary corporate reporting and the Kyoto Protocol's national inventory rules. Scope 1 specifically captures emissions where the organisation has direct operational control, making them the most straightforward to measure and reduce through operational changes without dependency on suppliers or energy grid decarbonisation.

  - Scope 1 emission sources are categorised into stationary combustion (gas boilers, diesel generators, industrial furnaces burning fuels on-site), mobile combustion (fleet vehicles — company cars, lorries, aircraft owned or operated by the organisation), process emissions (CO2 from cement calcination, N2O from nitric acid production, F-gases from semiconductor manufacturing), and fugitive emissions (methane leakage from natural gas distribution, refrigerant leaks from HVAC systems). Measurement follows one of three methods: direct fuel consumption metering, engineering calculations from activity data multiplied by [[Emission Factors]] published by national environmental agencies (DEFRA in the UK, EPA in the US), or mass balance methods for process emissions.

  - Scope 1 reduction strategies include fuel switching from fossil fuels to low-carbon alternatives (electrification of vehicle fleets, replacement of gas boilers with heat pumps), energy efficiency improvements (combustion optimisation, process intensification), refrigerant management programmes to reduce fugitive emissions, and, as a last resort, carbon capture utilisation and storage (CCUS) for process emissions that cannot be eliminated through alternative chemistry. These strategies are directly under the organisation's control, distinguishing Scope 1 from Scope 3 where indirect influence and supplier engagement are required.

  - By 2024-2025, mandatory Scope 1 disclosure requirements have proliferated: the EU's Corporate Sustainability Reporting Directive (CSRD) mandates large company disclosure from 2024, with SME requirements phasing in through 2026. The SEC's climate disclosure rule in the US (subject to legal challenges) would require material Scope 1 disclosures for public companies. The International Sustainability Standards Board (ISSB) IFRS S2 standard harmonises disclosure requirements globally. Growing scrutiny of greenwashing has elevated the importance of third-party assurance for Scope 1 data, and the introduction of the EU Carbon Border Adjustment Mechanism (CBAM) makes Scope 1 accuracy commercially material for imports into the EU.


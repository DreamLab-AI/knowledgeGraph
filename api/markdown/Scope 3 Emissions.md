public:: true

# Scope 3 Emissions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scope-3-emissions",
  "@type": "Page",
  "vc:slug": "scope-3-emissions",
  "title": "Scope 3 Emissions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scope-3-emissions",
  "@type": "Class",
  "label": "Scope 3 Emissions",
  "definition": "Scope 3 emissions are the indirect greenhouse gas (GHG) emissions that occur across an organisation's value chain as a consequence of its activities but outside its operational boundary, encompassing both upstream sources such as purchased goods and services, capital goods, and business travel, and downstream sources such as the use and end-of-life treatment of sold products. Defined under Category 3 of the GHG Protocol Corporate Standard, Scope 3 emissions typically constitute the largest share of a company's total carbon footprint — often exceeding 70 percent — making their measurement, reporting, and reduction critical to credible corporate climate strategies. Accurate Scope 3 accounting requires collaboration across supply chains and the use of spend-based, activity-based, or supplier-specific emission factors.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:scope-1-emissions", "label": "Scope 1 Emissions"},
      {"@id": "urn:ngm:class:scope-2-emissions", "label": "Scope 2 Emissions"},
      {"@id": "urn:ngm:class:ghg-protocol", "label": "GHG Protocol"},
      {"@id": "urn:ngm:class:supply-chain", "label": "Supply Chain"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:sustainability-reporting", "label": "SustainabilityReporting"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:emission-factors", "label": "Emission Factors"},
      {"@id": "urn:ngm:class:environmental-accounting", "label": "Environmental Accounting"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Scope 3 Emissions]] are the indirect GHG emissions across an organisation's [[Supply Chain]] value chain, defined under the [[GHG Protocol]] as the largest and most complex category of corporate carbon footprint encompassing purchased goods, logistics, product use, and end-of-life disposal.

- ### Relationships
  - Scope 3 emissions are defined relative to [[Scope 1 Emissions]] (direct) and [[Scope 2 Emissions]] (purchased energy) under the [[GHG Protocol]] framework. They are quantified using [[Emission Factors]] and methods from [[Environmental Accounting]], then reported through [[ESG Reporting]] and [[Sustainability Reporting]] frameworks. Because they span the [[Supply Chain]], their reduction requires collaborative decarbonisation across multiple tiers of suppliers and customers rather than unilateral operational changes.

- ### Content
  - The GHG Protocol Corporate Standard, first published in 2001 by the World Resources Institute and the World Business Council for Sustainable Development, introduced the three-scope accounting framework to provide organisations with a consistent methodology for measuring and managing their greenhouse gas emissions. Scope 3 was recognised as distinct from direct and purchased-energy emissions to capture the full systemic impact of corporate activity, acknowledging that most emissions attributable to a company occur outside its owned or controlled facilities. The fifteen Scope 3 categories were formalised in the GHG Protocol Corporate Value Chain (Scope 3) Standard released in 2011.

  - Measuring Scope 3 emissions is methodologically challenging because it requires gathering activity data from suppliers, logistics partners, customers, and waste processors that may lack the capacity or willingness to share precise figures. Three primary approaches exist: spend-based methods use industry-average emission intensity factors applied to procurement spend; activity-based methods use physical quantities of goods and services multiplied by process-specific factors; and supplier-specific methods use primary data reported directly by individual suppliers. The last approach is most accurate but requires extensive data collection infrastructure, often via supplier questionnaires, environmental product declarations, or blockchain-based provenance tracking.

  - Scope 3 emissions are strategically significant because they constitute the dominant share of most organisations' carbon footprints — particularly for companies in retail, financial services, and technology, whose own operations are relatively clean but whose supply chains and financed activities are carbon-intensive. Reducing Scope 3 requires a fundamentally different set of interventions than Scope 1 and 2 reductions: supplier engagement programmes, product design changes to reduce embodied carbon, modal shifts in logistics, and customer behaviour change. For financial institutions, Scope 3 Category 15 (financed emissions) represents the climate impact of investment portfolios and loan books, making it central to financial sector climate commitments under the Net-Zero Banking Alliance.

  - By 2024–2025, Scope 3 disclosure is rapidly becoming mandatory rather than voluntary. The EU Corporate Sustainability Reporting Directive (CSRD) and the SEC climate disclosure rules both require material Scope 3 reporting from large companies, and the International Sustainability Standards Board (ISSB) IFRS S2 standard provides a global baseline. AI and supply-chain analytics tools are emerging to automate Scope 3 data collection from purchase order systems, logistics APIs, and supplier portals, reducing the manual burden of annual carbon inventories. Digital product passports — standardised data carriers attached to physical goods — are being piloted as a mechanism for propagating emission data down supply chains automatically.


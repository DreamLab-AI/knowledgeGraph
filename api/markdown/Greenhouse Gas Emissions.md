public:: true

# Greenhouse Gas Emissions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:651e88031ed071ed51cdc6567bdf078d5516684e300d7ed833dbf6b32b5e2ad8",
  "@type": "Page",
  "vc:slug": "greenhouse-gas-emissions",
  "title": "Greenhouse Gas Emissions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:environment",
      "vc:label": "Environment"
    },
    {
      "@id": "urn:visionflow:linked:climate-change",
      "vc:label": "Climate Change"
    },
    {
      "@id": "urn:visionflow:linked:ghg-protocol",
      "vc:label": "GHG Protocol"
    },
    {
      "@id": "urn:visionflow:linked:energy-consumption",
      "vc:label": "Energy Consumption"
    },
    {
      "@id": "urn:visionflow:linked:net-zero-targets",
      "vc:label": "Net Zero Targets"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:greenhouse-gas-emissions",
  "@type": "Class",
  "label": "Greenhouse Gas Emissions",
  "definition": "Releases into the atmosphere of gases that trap outgoing infrared radiation — principally carbon dioxide, methane, nitrous oxide, and fluorinated gases — from fossil-fuel combustion, industrial processes, agriculture, and land-use change. They are the dominant anthropogenic driver of climate change, are quantified in tonnes of CO2-equivalent using global warming potentials, and are the object of measurement, reporting, and reduction regimes ranging from the GHG Protocol's scope 1–3 accounting to national inventories under the Paris Agreement.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:environment",
    "label": "Environment"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:energy-consumption",
        "label": "Energy Consumption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:climate-change",
        "label": "Climate Change"
      },
      {
        "@id": "urn:ngm:class:ghg-protocol",
        "label": "GHG Protocol"
      },
      {
        "@id": "urn:ngm:class:net-zero-targets",
        "label": "Net Zero Targets"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Releases into the atmosphere of gases that trap outgoing infrared radiation — principally carbon dioxide, methane, nitrous oxide, and fluorinated gases — from fossil-fuel combustion, industrial processes, agriculture, and land-use change. They are the dominant anthropogenic driver of climate change, are quantified in tonnes of CO2-equivalent using global warming potentials, and are the object of measurement, reporting, and reduction regimes ranging from the GHG Protocol's scope 1–3 accounting to national inventories under the Paris Agreement."

- ### Semantic Classification
  - owl-class:: governance:GreenhouseGasEmissions
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Environment]]
  - depends-on:: [[Energy Consumption]]
  - related-to:: [[Climate Change]]
  - related-to:: [[GHG Protocol]]

- ### Content

  ## Definition

  **Greenhouse gas (GHG) emissions** are anthropogenic releases of radiatively active gases into the atmosphere. Carbon dioxide from fossil-fuel combustion and land-use change accounts for roughly three quarters of the warming effect; methane (from agriculture, waste, and fossil-fuel extraction), nitrous oxide (largely from fertilised soils), and fluorinated gases make up the remainder. Because the gases differ in atmospheric lifetime and radiative efficiency, emissions are normalised into tonnes of CO2-equivalent (tCO2e) using global warming potentials, conventionally over a 100-year horizon (GWP100), under which methane counts roughly 28–30 times CO2 per tonne.

  Rising GHG concentrations strengthen the greenhouse effect and are the principal driver of observed [[Climate Change]]; the IPCC's assessment reports attribute essentially all warming since the late nineteenth century to human influence, with the *Indicators of Global Climate Change 2024* update putting human-induced warming at about 1.36°C in 2024. Global emissions run at around 55–57 GtCO2e per year (total GHG of 55.4±5.1 GtCO2e in 2023 on the IGCC synthesis, ~57.1 GtCO2e in 2023 on the UNEP Emissions Gap Report using AR6 GWP100), and the remaining carbon budget consistent with limiting warming to 1.5°C is being consumed within this decade — the arithmetic behind [[Net Zero Targets]], which require gross emissions to fall to a level fully balanced by removals.

  Measurement and disclosure form the governance layer. Corporate accounting follows the [[GHG Protocol]], which partitions an organisation's footprint into scope 1 (direct), scope 2 (purchased energy), and scope 3 (value chain) emissions; national inventories follow IPCC guidelines and are reported under the UNFCCC and Paris Agreement. Climate-related financial disclosure frameworks (TCFD, and its successors in ISSB standards and UK/EU regulation) make emissions data a mainstream financial reporting concern, whilst carbon pricing — emissions trading schemes and carbon taxes — attaches a direct cost to each tonne emitted.

  ## Current Landscape

  Emissions accounting is professionalising rapidly. Scope 3 measurement remains the hardest problem: value-chain emissions typically dwarf scopes 1 and 2 but rely on supplier data and spend-based estimation. Digital MRV (measurement, reporting, verification) — satellite methane detection (e.g. MethaneSAT), continuous emissions monitoring, and automated carbon-accounting platforms — is displacing purely factor-based estimation. In technology sectors, the energy footprint of data centres, AI training, and proof-of-work blockchains has made [[Energy Consumption]] transparency a reporting issue in its own right, with indices such as the Cambridge Bitcoin Electricity Consumption Index feeding regulatory debate.

  Policy instruments are tightening: the EU's Carbon Border Adjustment Mechanism extends carbon pricing to imports, the UK and EU emissions trading schemes cap power and industrial emissions, and mandatory transition-plan disclosure is spreading across major jurisdictions. The credibility frontier has shifted from whether organisations report emissions to whether their reductions are real, additional, and aligned with science-based trajectories.

  - **Latest figures (2024/2025 assessments)**: the Global Carbon Budget 2024 projects record fossil-fuel CO2 of ~37.4 GtCO2 and total anthropogenic CO2 of ~41.6 GtCO2 for 2024; atmospheric CO2 averaged ~422.8 ppm in 2024 (~52% above pre-industrial). The 1.5°C remaining carbon budget (50% likelihood) was cut to about 130 GtCO2 from the start of 2025 — roughly three years at current CO2 emission levels.
  - **UNEP Emissions Gap Report 2024**: global GHG emissions hit a record 57.1 GtCO2e in 2023 (+1.3% on 2022); to stay on a least-cost 1.5°C path, emissions must fall 42% by 2030 versus 2019.
  - **Methane GWP**: methane counts roughly 28-30x CO2 over a 100-year horizon (GWP100, IPCC AR6), the basis for the tCO2e normalisation used across inventories.

  **Sources**:
  - https://essd.copernicus.org/articles/17/965/2025/
  - https://essd.copernicus.org/articles/17/2641/2025/
  - https://www.unep.org/interactives/emissions-gap-report/2024/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z

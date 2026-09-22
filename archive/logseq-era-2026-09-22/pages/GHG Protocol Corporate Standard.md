public:: true

# GHG Protocol Corporate Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ghg-protocol-corporate-standard",
  "@type": "Page",
  "vc:slug": "ghg-protocol-corporate-standard",
  "title": "GHG Protocol Corporate Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ghg-protocol-corporate-standard",
  "@type": "Class",
  "label": "GHG Protocol Corporate Standard",
  "definition": "The GHG Protocol Corporate Accounting and Reporting Standard is the most widely used international framework for measuring and reporting an organisation's greenhouse-gas emissions. Developed by the World Resources Institute and the World Business Council for Sustainable Development, it organises emissions into Scope 1 (direct), Scope 2 (purchased energy), and Scope 3 (value-chain) categories, establishing consistent boundaries, accounting principles, and disclosure rules. It underpins corporate climate reporting, science-based targets, and most national and regional emissions-disclosure regulations.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:carbon-accounting", "label": "Carbon Accounting"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-offset", "label": "Carbon Offset"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The GHG Protocol Corporate Standard is the dominant international framework for measuring and reporting organisational greenhouse-gas emissions, defining the Scope 1, 2, and 3 accounting categories.

- ### Relationships
  - GHG Protocol Corporate Standard is a subclass of [[Technical Standard]] and supports rigorous [[Carbon Accounting]] by fixing emission boundaries and methodologies. It enables [[Regulatory Compliance]] with mandatory disclosure regimes and relates to [[Carbon Offset]] accounting, which it constrains through strict rules on what may be deducted from reported emissions.

- ### Content
  - The GHG Protocol Corporate Standard, first published in 2001 and revised since, solved a foundational measurement problem: without a common method, corporate emissions figures were incomparable and easily gamed. By codifying accounting principles — relevance, completeness, consistency, transparency, and accuracy — and defining organisational and operational boundaries, it made it possible to aggregate, compare, and audit emissions across companies and over time.

  - Its enduring contribution is the three-scope taxonomy. Scope 1 covers direct emissions from sources a company owns or controls, such as on-site combustion and company vehicles. Scope 2 covers indirect emissions from purchased electricity, steam, heat, and cooling. Scope 3, the broadest and usually largest, covers all other value-chain emissions — purchased goods and services, business travel, product use, and end-of-life — which for many firms dwarf their direct footprint.

  - Scope 3 is simultaneously the most important and most contested category. It captures the bulk of many organisations' climate impact and is essential for understanding genuine responsibility, yet it relies heavily on estimation, supplier data of variable quality, and methodological choices that materially affect the reported total. Improving Scope 3 data quality — through supplier engagement, primary measurement, and increasingly automated data pipelines — is a central focus of corporate climate practice.

  - The standard is the backbone of the wider climate-disclosure ecosystem. Science-based targets are set relative to GHG Protocol inventories; frameworks such as CDP and the ISSB and CSRD reporting regimes build on its definitions; and investors use its outputs to assess transition risk. Because so much regulation and voluntary commitment references it, the GHG Protocol effectively functions as the accounting language of corporate decarbonisation, making its boundary rules and treatment of offsets consequential well beyond technical bookkeeping.

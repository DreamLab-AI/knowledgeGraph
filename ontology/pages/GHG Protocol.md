public:: true

# ghg protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ad3dda6cae7c9c31012287e41c2e35042e1b3f6bfd3ec55d6c7eb1f48acae03",
  "@type": "Page",
  "vc:slug": "ghg-protocol",
  "title": "ghg protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ghg-protocol",
  "@type": "Class",
  "label": "GHG Protocol",
  "definition": "The GHG Protocol is the globally dominant greenhouse gas accounting and reporting framework, co-developed by the World Resources Institute (WRI) and the World Business Council for Sustainable Development (WBCSD) and first published as the Corporate Standard in 2001. It establishes methodologies for measuring and categorising greenhouse gas emissions across three scopes: Scope 1 (direct emissions from owned or controlled sources), Scope 2 (indirect emissions from purchased energy), and Scope 3 (all other upstream and downstream value-chain emissions). The framework underpins virtually all major corporate carbon reporting mandates, voluntary disclosure programmes, and science-based target-setting initiatives worldwide, making it the de facto lingua franca of corporate climate accounting.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:environmental-standards",
      "label": "Environmental Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:scope-1-emissions",
        "label": "Scope 1 Emissions"
      },
      {
        "@id": "urn:ngm:class:scope-2-emissions",
        "label": "Scope 2 Emissions"
      },
      {
        "@id": "urn:ngm:class:scope-3-emissions",
        "label": "Scope 3 Emissions"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:greenhouse-gas-inventory",
        "label": "Greenhouse Gas Inventory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      },
      {
        "@id": "urn:ngm:class:science-based-targets",
        "label": "Science Based Targets"
      },
      {
        "@id": "urn:ngm:class:carbon-offsetting",
        "label": "Carbon Offsetting"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting",
        "label": "Corporate Sustainability Reporting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:life-cycle-assessment",
        "label": "Life Cycle Assessment"
      },
      {
        "@id": "urn:ngm:class:carbon-footprint-measurement",
        "label": "Carbon Footprint Measurement"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-14064",
        "label": "ISO 14064"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:iso-14067",
        "label": "ISO 14067"
      },
      {
        "@id": "urn:ngm:class:pas-2060",
        "label": "PAS 2060"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      },
      {
        "@id": "urn:ngm:class:digital-product-passport",
        "label": "Digital Product Passport"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tcfd",
        "label": "TCFD"
      },
      {
        "@id": "urn:ngm:class:net-zero-transition",
        "label": "Net Zero Transition"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:greenhouse-gas-protocol",
      "label": "Greenhouse Gas Protocol"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **GHG Protocol** is the internationally recognised [[greenhouse gas]] accounting and reporting framework co-developed by the [[World Resources Institute]] (WRI) and the [[World Business Council for Sustainable Development]] (WBCSD). First published in 2001 as the Corporate Standard, it establishes the methodological foundations by which organisations measure, categorise, and disclose emissions across three scopes, making it the primary reference for [[Carbon Accounting]], [[ESG Reporting]], and [[Science Based Targets]] globally. Its three-scope structure — distinguishing direct organisational emissions from purchased-energy emissions and full value-chain emissions — has become embedded in virtually all major voluntary and mandatory corporate climate disclosure regimes, from [[CDP Reporting]] to the [[EU CSRD]].

- ### Overview
  - The GHG Protocol emerged from a multi-stakeholder collaboration begun in 1998, driven by the need for a common language for corporate greenhouse gas accounting. Prior to its publication, companies used inconsistent methodologies that made inter-firm and inter-sector comparisons impossible.
  - Its core Corporate Accounting and Reporting Standard (the "Corporate Standard") defines accounting principles — relevance, completeness, consistency, transparency, and accuracy — and operationalises them through the three-scope framework.
  - Since 2001, the Protocol has expanded into a family of standards addressing specific accounting challenges:
    - The **Scope 2 Guidance** (2015) introduced the market-based and location-based methods for accounting electricity-related emissions, responding to the growth of renewable energy procurement.
    - The **Corporate Value Chain (Scope 3) Standard** provides fifteen upstream and downstream categories for mapping indirect emissions.
    - The **Product Standard** supports [[Life Cycle Assessment]]-style product-level [[Carbon Footprint Measurement]].
    - The **Project Protocol** supports quantification of emission reductions from specific mitigation projects, relevant to [[Carbon Offsetting]].
  - The GHG Protocol is not a regulation in itself; it is a voluntary standard that has been adopted by reference into mandatory regimes worldwide, making it the de facto backbone of global [[Corporate Sustainability Reporting]].

- ### Key Components
  - #### Scope Framework
    - **[[Scope 1 Emissions]]** — Direct emissions from sources owned or controlled by the reporting organisation: stationary combustion, mobile combustion, process emissions, and fugitive releases (e.g., refrigerant leakage).
    - **[[Scope 2 Emissions]]** — Indirect emissions from the generation of purchased electricity, steam, heat, or cooling consumed by the reporting organisation. Two methods apply:
      - *Location-based*: uses average national or regional grid [[Emissions Factor|emission factors]].
      - *Market-based*: uses contractual instruments such as renewable energy certificates or supplier-specific emission rates.
    - **[[Scope 3 Emissions]]** — All other indirect emissions across the upstream and downstream value chain, divided into 15 categories including purchased goods and services, capital goods, business travel, employee commuting, use of sold products, and end-of-life treatment. Scope 3 typically constitutes the largest portion of a company's total [[greenhouse gas]] footprint.
  - #### Accounting Principles
    - Relevance, completeness, consistency, transparency, and accuracy — the five principles guide boundary-setting and data collection.
  - #### Organisational Boundaries
    - Companies choose between equity-share or control approaches (operational or financial control) to define which entities' emissions are included in their [[Greenhouse Gas Inventory]].
  - #### Greenhouse Gases Covered
    - CO₂, CH₄, N₂O, HFCs, PFCs, SF₆, and NF₃ — the basket of gases defined under the [[Kyoto Protocol]], each weighted by its global-warming potential (GWP) to produce CO₂-equivalent totals.
  - #### Data Quality and Verification
    - The Protocol distinguishes primary data (activity data gathered directly) from secondary data (industry averages, [[Emissions Factor|emission factor]] databases). Third-party assurance against standards such as [[ISO 14064]] is widely expected by reporting frameworks.

- ### Applications and Use Cases
  - **Corporate Carbon Reporting** — Organisations of all sizes use GHG Protocol methods to construct annual [[Greenhouse Gas Inventory|GHG inventories]] disclosed to stakeholders and rating agencies.
  - **Science-Based Target Setting** — The [[Science Based Targets]] initiative (SBTi) mandates GHG Protocol-aligned inventories as the baseline for setting emission-reduction targets consistent with limiting global warming to 1.5 °C.
  - **CDP Disclosure** — [[CDP Reporting]] questionnaires (covering climate, water, forests) are built entirely around GHG Protocol scope categories, making Protocol-aligned inventories a prerequisite for participation.
  - **Regulatory Compliance**
    - The [[EU CSRD]] and its European Sustainability Reporting Standards (ESRS) directly incorporate GHG Protocol methodology for scope delineation and disclosure.
    - The US SEC climate disclosure rule (2024) requires Scope 1 and 2 disclosure and, for many registrants, Scope 3 disclosure in line with GHG Protocol definitions.
    - UK Streamlined Energy and Carbon Reporting (SECR) references the Protocol for methodology.
  - **Renewable Energy Procurement** — The market-based Scope 2 method shapes corporate demand for renewable energy certificates (RECs/GOs) and power purchase agreements (PPAs), directly linking [[ESG Reporting]] to energy procurement strategy.
  - **Supply Chain Engagement** — Scope 3 Category 1 (purchased goods and services) drives supplier engagement programmes, requiring suppliers to share primary emissions data, advancing [[Supply Chain Transparency]].
  - **Net Zero Strategy** — [[Net Zero Transition]] planning depends on GHG Protocol baselines to track absolute emission reductions against science-based trajectories.
  - **Digital and Blockchain Applications** — [[Blockchain Carbon Credits]] platforms (e.g., Toucan, Gold Standard digital MRV) use GHG Protocol definitions to encode carbon credit issuance methodologies on-chain, bridging traditional accounting to distributed ledgers. [[Digital Product Passport]] schemes embed product-level GHG Protocol data to enable circular-economy traceability.

- ### Relationships
  - hasPart:: [[Scope 1 Emissions]]
  - hasPart:: [[Scope 2 Emissions]]
  - hasPart:: [[Scope 3 Emissions]]
  - partOf:: [[Carbon Accounting]]
  - requires:: [[Greenhouse Gas Inventory]]
  - requires:: [[Emissions Factor]]
  - enables:: [[ESG Reporting]]
  - enables:: [[Science Based Targets]]
  - enables:: [[Carbon Offsetting]]
  - enables:: [[Carbon Neutral Certification]]
  - implements:: [[Corporate Sustainability Reporting]]
  - uses:: [[Life Cycle Assessment]]
  - uses:: [[Carbon Footprint Measurement]]
  - standardizedBy:: [[ISO 14064]]
  - standardizedBy:: [[World Resources Institute]]
  - contrastsWith:: [[ISO 14067]]
  - contrastsWith:: [[PAS 2060]]
  - bridges-to:: [[Blockchain Carbon Credits]]
  - bridges-to:: [[Supply Chain Transparency]]
  - bridges-to:: [[Digital Product Passport]]
  - relatedTo:: [[TCFD]]
  - relatedTo:: [[EU CSRD]]
  - relatedTo:: [[CDP Reporting]]
  - relatedTo:: [[Net Zero Transition]]

- ### Standards and Context
  - **[[ISO 14064]]** (parts 1–3) is the complementary international standard for GHG inventories, quantification, and verification. ISO 14064-1 is broadly harmonised with the GHG Protocol Corporate Standard, and assurance engagements typically cite both frameworks simultaneously.
  - **[[ISO 14067]]** addresses carbon footprint of products (CFP), complementing the GHG Protocol Product Standard.
  - **[[PAS 2060]]** (BSI) defines carbon neutrality claims, referencing GHG Protocol-compliant inventories as a prerequisite.
  - The **[[TCFD]]** (Task Force on Climate-related Financial Disclosures) framework adopted by the G20 and embedded in national regulators' rules requires GHG Protocol-aligned Scope 1, 2, and 3 disclosures as part of the metrics-and-targets pillar.
  - The **Science Based Targets initiative ([[Science Based Targets]])** specifies GHG Protocol-aligned baselines and requires Scope 3 engagement for companies in high-impact sectors.
  - **[[EU CSRD]]** and the attendant ESRS E1 standard mandate the same scope delineation, with third-party limited assurance required, tying GHG Protocol compliance directly to EU financial-reporting obligations.
  - **World Resources Institute** and **WBCSD** jointly govern Protocol updates through a multi-stakeholder review process, ensuring the standard evolves alongside accounting challenges such as market-based Scope 2 instruments and emerging supply-chain data infrastructure.
  - The Protocol is technology-neutral but increasingly intersects with emerging data infrastructure — [[Supply Chain Transparency]] platforms, [[Digital Product Passport]] schemes, and [[Blockchain Carbon Credits]] — that seek to automate primary-data collection at scale.

- ### Provenance
  - sources:: World Resources Institute GHG Protocol Corporate Standard; WBCSD GHG Protocol documentation; ISO 14064 series; EU CSRD ESRS E1
  - updated:: 2026-06-13

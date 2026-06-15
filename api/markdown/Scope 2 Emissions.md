public:: true

# Scope 2 Emissions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scope-2-emissions",
  "@type": "Page",
  "vc:slug": "scope-2-emissions",
  "title": "Scope 2 Emissions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scope-2-emissions",
  "@type": "Class",
  "label": "Scope 2 Emissions",
  "definition": "Scope 2 Emissions are the indirect greenhouse gas emissions attributable to an organisation arising from the generation of purchased or acquired electricity, steam, heat, or cooling consumed in its operations, as defined by the GHG Protocol Corporate Standard. Although the physical emissions occur at the power plant or thermal facility, they are accounted for by the purchasing organisation because its demand drives that generation, making Scope 2 the primary decarbonisation lever for energy-intensive organisations such as data centres and manufacturers.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:environmental-sustainability",
    "label": "Environmental Sustainability"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:scope-1-emissions",
        "label": "Scope 1 Emissions"
      },
      {
        "@id": "urn:ngm:class:scope-3-emissions",
        "label": "Scope 3 Emissions"
      },
      {
        "@id": "urn:ngm:class:ghg-protocol",
        "label": "GHG Protocol"
      },
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      },
      {
        "@id": "urn:ngm:class:grid-electricity",
        "label": "Grid Electricity"
      },
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Corporate Carbon Footprint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-neutrality-planning",
        "label": "Carbon Neutrality Planning"
      },
      {
        "@id": "urn:ngm:class:carbon-neutrality-verification",
        "label": "Carbon Neutrality Verification"
      },
      {
        "@id": "urn:ngm:class:decarbonisation",
        "label": "Decarbonisation Strategy"
      },
      {
        "@id": "urn:ngm:class:carbon-aware-computing",
        "label": "Carbon-Aware Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:renewable-energy-certificates",
        "label": "Renewable Energy Certificates"
      },
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      },
      {
        "@id": "urn:ngm:class:sustainability-reporting",
        "label": "SustainabilityReporting"
      },
      {
        "@id": "urn:ngm:class:power-purchase-agreement",
        "label": "Power Purchase Agreement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting-directive",
        "label": "Corporate Sustainability Reporting Directive"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ghg-protocol-corporate-standard",
        "label": "GHG Protocol Corporate Standard"
      },
      {
        "@id": "urn:ngm:class:iso-14064",
        "label": "ISO 14064"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:location-based-accounting",
        "label": "Location-Based Accounting"
      },
      {
        "@id": "urn:ngm:class:market-based-accounting",
        "label": "Market-Based Accounting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:24-7-carbon-free-energy",
        "label": "24/7 Carbon-Free Energy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:indirect-energy-emissions",
      "label": "Indirect Energy Emissions"
    },
    {
      "@id": "urn:ngm:class:purchased-electricity-emissions",
      "label": "Purchased Electricity Emissions"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Scope 2 Emissions are the indirect greenhouse gas emissions an organisation is accountable for due to its consumption of purchased electricity and heat, measured according to the [[GHG Protocol]] and reported as part of the full emissions inventory alongside [[Scope 1 Emissions]] and [[Scope 3 Emissions]].

- ### Relationships
  - Scope 2 Emissions sit within the three-scope framework established by the [[GHG Protocol]] Corporate Standard, complementing directly owned [[Scope 1 Emissions]] and value-chain [[Scope 3 Emissions]]. They are the primary focus of corporate electricity decarbonisation strategies and are reduced primarily by procuring [[Renewable Energy]] through power purchase agreements or [[Renewable Energy Certificates]]. [[ESG Reporting]] frameworks including GRI, CDP, and the TCFD recommendations require Scope 2 disclosure, driving standardisation of accounting methods. [[Carbon Neutrality Planning]] sets targets to reduce or offset Scope 2 to zero, and [[Carbon Neutrality Verification]] confirms that claimed reductions are genuine. [[Sustainability Reporting]] to investors and regulators depends on accurate Scope 2 calculation using either the location-based method (grid average emission factor) or the market-based method (contractual instruments such as RECs and PPAs).

- ### Content
  - The concept of attributing indirect emissions from electricity consumption to the consuming organisation was formalised in the World Resources Institute and WBCSD GHG Protocol Corporate Accounting and Reporting Standard, first published in 2001. The 2015 Scope 2 Guidance addendum introduced two accounting methods: location-based (using average grid emission factors) and market-based (using supplier-specific or contractual factors from RECs or PPAs), recognising that corporate renewable procurement choices should be distinguishable in emissions inventories.

  - Scope 2 measurement requires organisations to identify all sites where they consume purchased energy, multiply consumption volumes by the appropriate emission factor (kgCO2e per kWh), and aggregate across all energy types. The emission factor varies significantly by geography and grid mix: the UK grid factor is around 0.22 kgCO2e/kWh, France (dominated by nuclear) is below 0.06, while coal-heavy grids can exceed 0.8. For technology companies, Scope 2 frequently dominates the corporate carbon footprint because data centre electricity consumption can represent 50-90% of total operational energy use.

  - For AI and cloud computing organisations, Scope 2 emissions are a central sustainability challenge and a material financial risk. Regulatory pressure from the EU Corporate Sustainability Reporting Directive (CSRD) and the US SEC climate disclosure rules has made verified Scope 2 accounting mandatory for large companies. Hyperscalers address Scope 2 through large-scale renewable PPAs, direct investment in wind and solar projects, and real-time carbon-aware workload scheduling that shifts compute to data centres with lower marginal grid carbon intensity.

  - In 2024-2025, the rapid growth of AI training and inference workloads has increased Scope 2 exposure for technology companies at the same time as investor and regulatory scrutiny has intensified. The market-based method's reliance on annual RECs is increasingly criticised as inadequate because it allows companies to claim renewable electricity even while drawing heavily from coal-heavy grids in real time. This has driven adoption of 24/7 carbon-free energy (CFE) matching, pioneered by Google and the Energy Compact, which requires renewable energy delivery to be matched hourly in the same grid region as consumption — a significantly more demanding standard with profound implications for data centre location strategy.
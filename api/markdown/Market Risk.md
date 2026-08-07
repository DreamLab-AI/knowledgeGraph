public:: true

# Market Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d396fa0caebca1334bf08d69ee7bbd8412e3c4c7987644a5c19bece1d7109ca6",
  "@type": "Page",
  "vc:slug": "market-risk",
  "title": "Market Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:basel-iii",
      "vc:label": "Basel III"
    },
    {
      "@id": "urn:visionflow:linked:operational-risk",
      "vc:label": "Operational Risk"
    },
    {
      "@id": "urn:visionflow:linked:stress-testing",
      "vc:label": "Stress Testing"
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
  "@id": "urn:ngm:class:market-risk",
  "@type": "Class",
  "label": "Market Risk",
  "definition": "The risk of losses in on- and off-balance-sheet positions arising from adverse movements in market prices — interest rates, foreign exchange rates, equity prices, credit spreads, and commodity prices — measured with tools such as value-at-risk, expected shortfall, and sensitivity analysis, and capitalised under banking regulation alongside credit and operational risk.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:risk-management",
    "label": "Risk Management"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      },
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The risk of losses in on- and off-balance-sheet positions arising from adverse movements in market prices — interest rates, foreign exchange rates, equity prices, credit spreads, and commodity prices — measured with tools such as value-at-risk, expected shortfall, and sensitivity analysis, and capitalised under banking regulation alongside credit and operational risk."

- ### Semantic Classification
  - owl-class:: finance:MarketRisk
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Risk Management]]
  - uses:: [[Stress Testing]]
  - related-to:: [[Operational Risk]]
  - related-to:: [[Basel III]]

- ### Content

  ## Definition

  **Market risk** is the risk that the value of a portfolio falls because market prices move against it. The Basel Committee's canonical decomposition identifies four broad risk factor classes — interest rate risk (including credit spread risk in the trading book), foreign exchange risk, equity risk, and commodity risk — with volatility and correlation exposures layered on top for portfolios containing options. It is one of the three pillars of bank capital alongside credit risk and [[Operational Risk]], and the discipline of measuring, limiting, and capitalising it sits at the core of trading-book [[Risk Management]].

  Measurement rests on a small set of standard tools. Sensitivities (the "Greeks": delta, vega, curvature; DV01 and CS01 for rates and spreads) describe first-order exposure to each factor. Value-at-risk (VaR) summarises the loss not exceeded at a given confidence level over a horizon — famously popularised by J.P. Morgan's RiskMetrics in 1994 — computed by parametric, historical-simulation, or Monte Carlo methods. Its shortcomings (silence about tail severity, lack of subadditivity) led regulators to adopt **expected shortfall** (ES), the average loss beyond the quantile, at 97.5% confidence. [[Stress Testing]] and scenario analysis complement statistical measures by revaluing portfolios under severe historical or hypothetical shocks, capturing what smooth distributions miss.

  Regulatory treatment has evolved sharply. The 1996 Market Risk Amendment first allowed internal VaR models; the post-crisis Basel 2.5 package added stressed VaR and the incremental risk charge after trading-book losses in 2008 dwarfed model predictions; and the **Fundamental Review of the Trading Book** (FRTB), finalised under [[Basel III]], rebuilt the framework around ES, liquidity horizons per risk factor, a stricter trading/banking book boundary, desk-level model approval with P&L attribution tests, and capital add-ons for non-modellable risk factors. Market risk capital thereby feeds directly into a bank's [[Capital Adequacy]] ratios.

  ## Current Landscape

  - **Implementation timelines**: FRTB go-live has staggered across jurisdictions through the mid-2020s — the EU via CRR3, the UK via the PRA's Basel 3.1 rules, and the US within the delayed "Basel endgame" package — with many banks opting for the standardised approach over internal models given the cost of desk-level approval.
  - **Risk infrastructure**: intraday risk aggregation, full-revaluation Monte Carlo on GPU grids, and machine-learning approximations of pricing functions are standard modernisation themes; BCBS 239 governs the data-aggregation quality expected of the numbers.
  - **Interaction with other risks**: the 2023 US regional-bank failures were driven by unhedged interest-rate risk in the *banking* book (IRRBB), underlining that market-price sensitivity outside the trading book — and its interaction with liquidity risk — can be just as lethal as trading losses.
  - **Non-bank exposure**: margin spirals, LDI fund stress in the UK gilt market (2022), and crypto-asset volatility have extended market-risk supervision debates well beyond the regulated banking perimeter.

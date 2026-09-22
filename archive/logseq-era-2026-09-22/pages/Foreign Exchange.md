public:: true

# Foreign Exchange
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7d2382fa2b9710b9a128450dc59cec961d81728685bff0923ebdcce7f459759",
  "@type": "Page",
  "vc:slug": "foreign-exchange",
  "title": "Foreign Exchange",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-instruments",
      "vc:label": "Financial Instruments"
    },
    {
      "@id": "urn:visionflow:linked:exchange-rate",
      "vc:label": "Exchange Rate"
    },
    {
      "@id": "urn:visionflow:linked:correspondent-banking",
      "vc:label": "Correspondent Banking"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
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
  "@id": "urn:ngm:class:foreign-exchange",
  "@type": "Class",
  "label": "Foreign Exchange",
  "definition": "The global, decentralised market and settlement activity in which one currency is exchanged for another at agreed exchange rates, spanning spot transactions, forwards, swaps, and options. Trading around nine and a half trillion US dollars daily (BIS 2025 Triennial Survey), it is the largest financial market in the world, providing the currency conversion that underlies international trade, investment, and cross-border payments, with settlement risk managed through mechanisms such as CLS payment-versus-payment and liquidity intermediated by dealer banks and correspondent networks.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:financial-instruments",
    "label": "Financial Instruments"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payments"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:exchange-rate",
        "label": "Exchange Rate"
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
  - "The global, decentralised market and settlement activity in which one currency is exchanged for another at agreed exchange rates, spanning spot transactions, forwards, swaps, and options. Trading around nine and a half trillion US dollars daily (BIS 2025 Triennial Survey), it is the largest financial market in the world, providing the currency conversion that underlies international trade, investment, and cross-border payments, with settlement risk managed through mechanisms such as CLS payment-versus-payment and liquidity intermediated by dealer banks and correspondent networks."

- ### Semantic Classification
  - owl-class:: finance:ForeignExchange
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Financial Instruments]]
  - enables:: [[Cross-Border Payments]]
  - uses:: [[Correspondent Banking]]
  - related-to:: [[Exchange Rate]]

- ### Content

  ## Definition

  **Foreign exchange (FX)** is the conversion of one currency into another and the market in which those conversions are priced and traded. It is the world's largest financial market — the BIS Triennial Survey put average daily turnover at roughly US$9.6 trillion in April 2025, up 28% from US$7.5 trillion in 2022 — and it operates as a decentralised, over-the-counter dealer network running twenty-four hours across the Sydney, Tokyo, London and New York sessions, with London the single largest trading centre. Every price is an [[Exchange Rate]]: the number of units of a quote currency per unit of base currency, quoted as a bid-offer pair for currency pairs such as EUR/USD or GBP/JPY.

  The instrument set extends well beyond immediate conversion. *Spot* trades settle (conventionally) in two business days; *outright forwards* fix a rate for a future date; *FX swaps* — the highest-turnover instrument — pair a spot exchange with an offsetting forward and function as collateralised money-market funding; *currency swaps* exchange principal and interest streams over years; and *options* confer conversion rights without obligation. Corporates use these [[Financial Instruments]] to hedge trade receivables and translation exposure, investors to hedge or express macro views, and dealers to warehouse and lay off inventory risk.

  Structurally, the market is tiered: an interbank core of major dealers trading on venues such as EBS and LSEG (Refinitiv) Matching, surrounded by banks, funds, corporates and retail platforms served through single-dealer and multi-dealer channels. Settlement is where FX meets the payments system: delivering two currencies in different countries creates Herstatt (settlement) risk, mitigated for major currencies by CLS's payment-versus-payment mechanism, while flows in non-CLS currencies settle across [[Correspondent Banking]] accounts. FX is thus the conversion layer that [[Cross-Border Payments]] ride on — and the layer that fintech remitters, stablecoin rails and the G20 payments roadmap all aim to make cheaper and faster.

  ## Current Landscape

  - **Scale and composition** (BIS 2025 Triennial Survey, April 2025): ~US$9.6tn daily turnover, up 28% from 2022, surveyed across 52 jurisdictions and 1,100+ dealers amid elevated volatility following early-April trade-policy announcements — FX swaps remained the largest instrument at ~US$4tn (up 5%), spot ~US$3tn (31% of turnover), outright forwards ~US$1.8tn (19%).
  - **Dollar dominance and UK weight**: the US dollar remains on one side of the large majority of trades (~88% historically), and the UK continues to host the single largest share of global FX turnover; final settlement data followed in the BIS Quarterly Review of June 2026.
  - **Market plumbing**: electronic trading dominates, with algorithmic execution, internalisation by large dealers, and non-bank liquidity providers (XTX, Citadel Securities, Jump) central to price formation; the FX Global Code (updated 2021) sets conduct standards.
  - **Settlement risk agenda**: a third or more of deliverable turnover still settles outside PvP protection; regulators push wider CLS coverage, CLSNet netting for emerging-market currencies, and exploratory wholesale CBDC/tokenised-deposit PvP designs (BIS Project mBridge and successors).
  - **Technology frontier**: T+1 securities settlement in the US has compressed FX funding windows; meanwhile stablecoins and tokenised money offer near-instant conversion legs, positioning on-chain FX as a live challenger for remittance corridors even as the institutional core remains dealer-intermediated.

  **Sources**:
  - https://www.bis.org/press/p250930.htm
  - https://www.bis.org/statistics/rpfx25_fx.htm

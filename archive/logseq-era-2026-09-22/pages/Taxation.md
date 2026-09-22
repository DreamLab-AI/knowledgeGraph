public:: true

# Taxation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8806ee41898c3007efd6d1a15caa3d08964b7a0ae500c7715fc750f511843a9",
  "@type": "Page",
  "vc:slug": "taxation",
  "title": "Taxation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:fiscal-policy", "vc:label": "Fiscal Policy"},
    {"@id": "urn:visionflow:linked:hm-treasury", "vc:label": "HM Treasury"},
    {"@id": "urn:visionflow:linked:financial-reporting", "vc:label": "Financial Reporting"},
    {"@id": "urn:visionflow:linked:crypto-regulation", "vc:label": "Crypto Regulation"},
    {"@id": "urn:visionflow:linked:compliance", "vc:label": "Compliance"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:taxation",
  "@type": "Class",
  "label": "Taxation",
  "definition": "The compulsory levying of financial charges by a state on individuals, businesses, and transactions to fund public expenditure and steer economic behaviour. Taxation spans income, corporation, consumption, capital gains, and property taxes, and its administration depends on financial reporting, valuation rules, and compliance infrastructure — questions made newly complex by digital assets, cross-border platforms, and decentralised finance.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:fiscal-policy",
    "label": "Fiscal Policy"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:financial-reporting", "label": "Financial Reporting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:crypto-regulation", "label": "Crypto Regulation"},
      {"@id": "urn:ngm:class:hm-treasury", "label": "HM Treasury"}
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
  - "The compulsory levying of financial charges by a state on individuals, businesses, and transactions to fund public expenditure and steer economic behaviour. Taxation spans income, corporation, consumption, capital gains, and property taxes, and its administration depends on financial reporting, valuation rules, and compliance infrastructure — questions made newly complex by digital assets, cross-border platforms, and decentralised finance."

- ### Semantic Classification
  - owl-class:: finance:Taxation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Fiscal Policy]]
  - requires:: [[Compliance]]
  - depends-on:: [[Financial Reporting]]
  - related-to:: [[Crypto Regulation]]

- ### Content

  ## Definition

  **Taxation** is the mechanism by which states convert private economic activity into public revenue. As an instrument of [[Fiscal Policy]] it serves three functions: raising the money that funds public services, redistributing income and wealth, and pricing behaviour the state wishes to discourage or encourage (carbon levies, R&D credits, pension reliefs). The principal bases are income and payroll, corporate profit, consumption (VAT and duties), capital gains, and property; most modern systems combine all five.

  Administration rests on information. Tax authorities depend on [[Financial Reporting]] by companies, third-party reporting by employers and banks, and self-assessment by individuals, backed by audit and penalty regimes to secure [[Compliance]]. In the United Kingdom, [[HM Treasury]] sets tax policy while HM Revenue & Customs administers collection; the Making Tax Digital programme is progressively mandating digital record-keeping and API-based filing.

  Digital assets sit at the frontier of this graph's interest in taxation. Most jurisdictions, including the UK, treat cryptoassets as property rather than currency, so disposals — including token-to-token swaps and spending — trigger capital gains computations, while staking and mining rewards are typically taxed as income on receipt. The OECD's Crypto-Asset Reporting Framework (CARF), taking effect in stages from 2026, extends automatic exchange of information to crypto intermediaries, converging tax enforcement with the broader [[Crypto Regulation]] agenda. Similar pressure applies to platform economies and cross-border digital services, addressed through the OECD's Pillar One and Pillar Two agreements on reallocating taxing rights and a 15% global minimum corporate rate.

  ## Current Landscape

  - **Making Tax Digital for Income Tax** becomes mandatory in phases: from **6 April 2026** for sole traders and landlords with qualifying income over **£50,000**, from April 2027 for those over £30,000, and from April 2028 for those over £20,000 — requiring digital records and quarterly updates via compatible software, with a final declaration replacing the annual Self Assessment return. Partnerships have no confirmed start date.
  - **UK adoption of the OECD Crypto-Asset Reporting Framework (CARF)**: from **1 January 2026** UK reporting cryptoasset service providers must collect user and transaction data; the first report (covering calendar year 2026) is due to HMRC between 1 January and 31 May 2027, with penalties up to £300 per user for non-compliance.
  - **Self Assessment crypto reporting**: the 2024/25 return introduced dedicated boxes for cryptoasset gains and losses; the Capital Gains Tax annual exempt amount now sits at **£3,000** (down from £6,000 in 2023/24).
  - **International reform**: Pillar Two's 15% global minimum-tax rules entered into force in the UK and EU from 2024, reshaping profit-shifting incentives.
  - **Open issues**: valuation of illiquid tokens, DeFi transactions with no intermediary to report, NFT classification, and the near-real-time compliance burden on small holders remain contested.

  **Sources**:
  - https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax
  - https://www.gov.uk/guidance/reporting-cryptoasset-user-and-transaction-data
  - https://www.icaew.com/insights/tax-news/2025/may-2025/new-hmrc-guidance-on-cryptoasset-reporting

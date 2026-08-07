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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
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

  - **Digitalised administration**: real-time or near-real-time reporting (e-invoicing mandates, split-payment VAT) is spreading across the EU, Latin America, and Asia; the UK's Making Tax Digital extends to income tax self-assessment from 2026.
  - **Cryptoasset rules**: HMRC's Cryptoassets Manual sets out UK treatment (CGT on disposals, income tax on rewards); CARF and updated CRS bring exchange-level reporting from 2026-27.
  - **International reform**: Pillar Two minimum tax rules entered into force in the UK and EU in 2024-25, reshaping incentives for profit shifting.
  - **Open issues**: valuation of illiquid tokens, DeFi transactions with no intermediary to report, NFT classification, and the compliance burden on small holders remain contested.

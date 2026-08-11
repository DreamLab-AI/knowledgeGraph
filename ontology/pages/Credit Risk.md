public:: true

# Credit Risk
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7dd772ab7dad191cc7af65c2bc60a5cc6d57e8f723a952efd129cfe7f1b004a7",
  "@type": "Page",
  "vc:slug": "credit-risk",
  "title": "Credit Risk",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk",
      "vc:label": "Risk"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:operational-risk",
      "vc:label": "Operational Risk"
    },
    {
      "@id": "urn:visionflow:linked:lending-protocol",
      "vc:label": "Lending Protocol"
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
  "@id": "urn:ngm:class:credit-risk",
  "@type": "Class",
  "label": "Credit Risk",
  "definition": "The risk of financial loss arising from a borrower or counterparty failing to meet contractual obligations, quantified through probability of default, loss given default and exposure at default, and managed through credit scoring, collateralisation, diversification, provisioning and regulatory capital requirements; the dominant risk category on most bank balance sheets and the core determinant of loan pricing in both traditional and decentralised lending.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:risk",
    "label": "Risk"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      },
      {
        "@id": "urn:ngm:class:interest-rate",
        "label": "Interest Rate"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
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
  - "The risk of financial loss arising from a borrower or counterparty failing to meet contractual obligations, quantified through probability of default, loss given default and exposure at default, and managed through credit scoring, collateralisation, diversification, provisioning and regulatory capital requirements; the dominant risk category on most bank balance sheets and the core determinant of loan pricing in both traditional and decentralised lending."

- ### Semantic Classification
  - owl-class:: finance:CreditRisk
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Risk]]
  - part-of:: [[Risk Management]]
  - related-to:: [[Operational Risk]]
  - bridges-to:: [[Lending Protocol]]

- ### Content

  ## Definition

  **Credit risk** is the possibility that a lender does not receive the principal and interest it is owed because a borrower defaults, restructures or delays payment. It is the oldest and, for most deposit-taking institutions, the largest source of financial risk: loan books, bond holdings, trade receivables, derivatives counterparty exposure and interbank placements all carry it. The standard quantitative decomposition expresses expected loss as the product of three components — probability of default (PD), loss given default (LGD, one minus the recovery rate) and exposure at default (EAD) — with unexpected loss capturing the tail of the loss distribution that capital must absorb.

  Credit risk is priced into the [[Interest Rate]] charged on a loan as a spread over the risk-free rate, which is why identical maturities carry very different yields across rating grades. It is managed ex ante through underwriting standards, credit scoring and ratings, covenants, collateral and guarantees, and ex post through diversification limits, securitisation, credit derivatives and loan-loss provisioning under accounting regimes such as IFRS 9's expected-credit-loss model. The Basel framework makes credit risk the principal driver of regulatory capital: risk-weighted assets are dominated by credit exposures, computed either through standardised risk weights or internal ratings-based (IRB) models, and capital adequacy ratios under [[Basel III]] exist chiefly to ensure banks can absorb credit losses without failing.

  The concept carries directly into decentralised finance, where lending protocols substitute over-collateralisation and automated liquidation for credit assessment — effectively engineering credit risk down to smart-contract and collateral-volatility risk — while newer under-collateralised protocols reintroduce classical counterparty analysis on-chain.

  ## Current Landscape

  - **Basel 3.1 in the UK**: after a one-year delay announced by the PRA in January 2025 (citing US implementation uncertainty and competitiveness), the final rules in policy statement PS1/26 (published 20 January 2026) take effect on 1 January 2027, with the internal-model approach for market risk deferred to 1 January 2028 and full implementation — including the output floor transition — still targeted for 1 January 2030. PS1/26 also replaces CRR definitions of probability of default, loss given default and conversion factor with new PRA Rulebook glossary definitions.
  - **Capital impact**: the PRA estimates Tier 1 capital requirements for major UK firms will be virtually unchanged in aggregate (increase below 1% at end of transition).
  - **EU divergence**: most CRR3 credit-risk provisions have applied in the EU since 1 January 2025, while the market-risk (FRTB) start was postponed by delegated act to 1 January 2027 — leaving credit-risk rules ahead of trading-book rules on both sides of the Channel; a September 2025 European Parliament analysis noted only 8 of 20 Basel Committee members had implemented the full final Basel III framework.
  - **Modelling practice**: machine learning has reshaped credit assessment — gradient-boosted models and, increasingly, explainable neural approaches are used for retail scoring — while regulators require adverse decisions to remain interpretable and free of proscribed bias, and IFRS 9 expected-credit-loss provisioning keeps forward-looking macro scenarios inside the credit models. Post-2023 banking stress episodes renewed supervisory focus on concentration risk and on the interaction between credit deterioration and interest-rate cycles.

  **Sources**:
  - https://www.bankofengland.co.uk/prudential-regulation/publication/2026/january/implementation-of-the-basel-3-1-final-rules-policy-statement
  - https://www.bankofengland.co.uk/news/2025/january/the-pra-announces-a-delay-to-the-implementation-of-basel-3-1

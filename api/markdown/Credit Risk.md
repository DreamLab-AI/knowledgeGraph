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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
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

  Machine learning has reshaped credit assessment: gradient-boosted models and, increasingly, explainable neural approaches are used for retail scoring, while regulators require that adverse decisions remain interpretable and free of proscribed bias. Credit risk modelling also intersects fraud detection, since default and fraud losses share data pipelines and early-warning systems. Post-2023 banking stress episodes renewed supervisory focus on concentration risk and on the interaction between credit deterioration and interest-rate cycles, reinforcing credit risk's position at the centre of prudential regulation.

public:: true

# Basel II
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:133ce64ab409624af02d579cc39ed900d2b0eeacc24f5190d1ea60aa3ece822a",
  "@type": "Page",
  "vc:slug": "basel-ii",
  "title": "Basel II",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:basel-accords",
      "vc:label": "Basel Accords"
    },
    {
      "@id": "urn:visionflow:linked:basel-iii",
      "vc:label": "Basel III"
    },
    {
      "@id": "urn:visionflow:linked:basel-committee",
      "vc:label": "Basel Committee"
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
  "@id": "urn:ngm:class:basel-ii",
  "@type": "Class",
  "label": "Basel II",
  "definition": "Basel II is the second of the Basel Accords, issued by the Basel Committee on Banking Supervision in 2004 to refine the international framework for bank capital adequacy. It organised prudential regulation around three pillars: minimum capital requirements made more risk-sensitive through standardised and internal-ratings-based approaches to credit risk plus explicit treatment of operational risk; supervisory review of institutions' own capital adequacy assessments; and market discipline through enhanced disclosure. Distinct from both its predecessor Basel I and its successor Basel III, Basel II is a specific accord version; the 2007-2009 financial crisis exposed its underweighting of liquidity and leverage, prompting the tighter Basel III reforms that superseded and contrast with it.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:basel-accords",
    "label": "Basel Accords"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:basel-committee",
        "label": "Basel Committee"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:banking-regulation",
        "label": "Banking Regulation"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
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
  - "Basel II is the second of the Basel Accords, issued by the Basel Committee on Banking Supervision in 2004 to refine the international framework for bank capital adequacy. It organised prudential regulation around three pillars: minimum capital requirements made more risk-sensitive through standardised and internal-ratings-based approaches to credit risk plus explicit treatment of operational risk; supervisory review of institutions' own capital adequacy assessments; and market discipline through enhanced disclosure. Distinct from both its predecessor Basel I and its successor Basel III, Basel II is a specific accord version; the 2007-2009 financial crisis exposed its underweighting of liquidity and leverage, prompting the tighter Basel III reforms that superseded and contrast with it."

- ### Semantic Classification
  - owl-class:: finance:BaselII
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Basel Accords]]
  - part-of:: [[Basel Committee]]
  - contrasts-with:: [[Basel III]]
  - related-to:: [[Banking Regulation]]

- ### Content

  ## Definition

  **Basel II** is the second international banking accord agreed by the Basel Committee on Banking Supervision, published in 2004. It reworked the relatively blunt capital rules of Basel I into a more risk-sensitive framework, seeking to align the capital a bank must hold more closely with the actual riskiness of its assets and activities.

  Its architecture is the well-known three pillars. Pillar 1 sets minimum capital requirements, allowing banks to measure credit risk through either standardised weights or, subject to supervisory approval, their own internal-ratings-based models, and adding an explicit charge for operational risk. Pillar 2 introduces supervisory review, under which regulators assess whether a bank's own internal capital adequacy assessment is sound. Pillar 3 promotes market discipline by requiring disclosures that let counterparties and investors judge a bank's risk profile.

  Basel II is a distinct accord version, not interchangeable with Basel III. The financial crisis of 2007-2009 revealed that its framework paid too little attention to liquidity, leverage, and the pro-cyclical behaviour of internal models, and Basel III was written specifically to remedy those gaps — which is why Basel III is defined in explicit contrast to it.

  ## Technical Details

  Under Pillar 1, credit-risk capital could be computed via the standardised approach, using external ratings and fixed risk weights, or via foundation and advanced internal-ratings-based approaches in which banks estimate probability of default, loss given default, and exposure at default. Operational risk introduced the basic-indicator, standardised, and advanced-measurement approaches. The framework retained the 8% minimum ratio of capital to risk-weighted assets from Basel I but changed how those risk-weighted assets were computed. Its reliance on banks' internal models and on external credit ratings became a central criticism after the crisis, as both were shown to understate tail risk. Basel III responded with higher and better-quality capital, a leverage ratio backstop independent of risk weights, capital conservation and counter-cyclical buffers, and new liquidity standards — the liquidity coverage ratio and net stable funding ratio — that Basel II had lacked entirely.

  ## Current Landscape

  The Basel II framework is fully superseded in principle, but the final ("endgame") Basel III reforms that replace its internal-model-heavy approach are still being phased in across jurisdictions, with repeated delays.

  - **UK Basel 3.1**: On 17 January 2025 the PRA, with HM Treasury, delayed UK implementation by a further year to 1 January 2027 (its third slippage), citing US timing uncertainty and competitiveness; the PRA published its final rules in policy statement PS1/26 (January 2026).
  - **UK phasing detail**: The market-risk internal-model approach (FRTB-IMA) is deferred to 1 January 2028, while the output floor — which caps the benefit banks derive from internal models — is phased in to 2030 (earlier than the EU's 2032).
  - **EU (CRR3/CRD6)**: Most CRR3 provisions applied from 1 January 2025; in June 2025 the European Commission used a delegated act to postpone the FRTB market-risk chapter to 1 January 2027 to preserve a level playing field with the UK and US.
  - **Global divergence**: A September 2025 European Parliament analysis found that as of that date only 8 of 20 Basel Committee members had implemented the whole final framework, with the US, UK, India, South Africa and Turkey among those yet to implement any of the endgame standards — the very divergence driving the successive delays.

  **Sources**:
  - https://www.bankofengland.co.uk/news/2025/january/the-pra-announces-a-delay-to-the-implementation-of-basel-3-1
  - https://www.bankofengland.co.uk/prudential-regulation/publication/2026/january/implementation-of-the-basel-3-1-final-rules-policy-statement

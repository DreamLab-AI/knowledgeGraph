public:: true

# Basel Committee on Banking Supervision
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:basel-committee-on-banking-supervision",
  "@type": "Page",
  "vc:slug": "basel-committee-on-banking-supervision",
  "title": "Basel Committee on Banking Supervision",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
  "@type": "Class",
  "label": "Basel Committee on Banking Supervision",
  "definition": "The Basel Committee on Banking Supervision (BCBS) is the primary global standard-setter for the prudential regulation of banks, operating under the auspices of the Bank for International Settlements in Basel, Switzerland. It develops minimum capital, liquidity, and leverage requirements — collectively the Basel Accords (Basel I, II, III, and the finalised Basel III framework completed in 2017) — that are adopted into national law by its 45-member jurisdictions. The Committee does not possess formal supranational authority; compliance is achieved through voluntary adoption by member central banks and supervisory agencies.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-authority",
      "label": "Regulatory Authority"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:basel-accords",
        "label": "Basel Accords"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy Framework"
      },
      {
        "@id": "urn:ngm:class:liquidity-coverage-ratio",
        "label": "Liquidity Coverage Ratio"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bank-for-international-settlements",
        "label": "Bank for International Settlements"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-weighted-assets",
        "label": "Risk-Weighted Assets"
      },
      {
        "@id": "urn:ngm:class:common-equity-tier-1",
        "label": "Common Equity Tier 1"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      },
      {
        "@id": "urn:ngm:class:prudential-supervision",
        "label": "Prudential Supervision"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:national-competent-authority",
        "label": "National Supervisory Authority"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptoasset-regulation",
        "label": "Cryptoasset Regulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:regulatory-standards",
        "label": "Regulatory Standards"
      },
      {
        "@id": "urn:ngm:class:regulatory-technology",
        "label": "Regulatory Technology"
      },
      {
        "@id": "urn:ngm:class:capital-requirements-regulation",
        "label": "Capital Requirements Regulation"
      },
      {
        "@id": "urn:ngm:class:financial-stability-board",
        "label": "Financial Stability Board"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bcbs",
      "label": "BCBS"
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
  - The [[Basel Committee on Banking Supervision]] is the Bank for International Settlements-hosted intergovernmental body that drafts the Basel Accords — binding [[Regulatory Framework]] standards for bank capital adequacy, liquidity, and leverage — which its 45 member jurisdictions voluntarily incorporate into national [[Financial Regulation]].

- ### Relationships
  - By setting minimum capital ratios and stress-testing methodologies, the Committee directly shapes [[Risk Management]] practices at systemically important banks, addressing [[Systemic Risk]] exposures that no single national [[Central Bank]] could coordinate alone. Its standards cascade into national [[Regulatory Compliance]] regimes through bodies such as the EU's Capital Requirements Regulation and the US Federal Reserve's rule-making, while [[Regulatory Technology]] firms build compliance tooling aligned to BCBS disclosure and reporting requirements.

- ### Content
  - The Committee was founded in 1974 by the G10 central bank governors following the failure of Bankhaus Herstatt and the Franklin National Bank, which exposed dangerous cross-border settlement gaps in the absence of coordinated supervisory standards. The first Basel Accord (Basel I, 1988) introduced a simple 8% minimum capital ratio against risk-weighted assets, providing a common language for bank solvency assessment across jurisdictions. Basel II (2004) added three pillars — minimum capital, supervisory review, and market discipline — along with more granular credit-risk and operational-risk frameworks.

  - The 2008 global financial crisis revealed critical weaknesses in Basel II: pro-cyclical capital requirements, inadequate coverage of trading-book and securitisation risks, and absence of liquidity standards. Basel III (finalised in phases 2010-2017) responded with dramatically higher common equity tier 1 (CET1) requirements, capital conservation and countercyclical buffers, global liquidity coverage and net stable funding ratios, and a non-risk-based leverage ratio as a backstop. The 2017 finalisation — sometimes called "Basel IV" — overhauled internal-model floors and output floors to limit banks' ability to use proprietary models to minimise reported risk-weighted assets.

  - The Committee's significance extends beyond its formal membership. Its pronouncements set global norms that affect banks in non-member jurisdictions through correspondent banking relationships and market-access pressures. BCBS consultation papers on topics such as cryptoasset prudential treatment (2021-2022) and AI/ML model risk attracted extensive industry response, demonstrating the body's reach into emerging technology regulation.

  - In 2024-2025, attention focuses on the Basel III endgame implementation timeline — delayed in the US amid legislative and industry pressure — and on BCBS work on the prudential treatment of tokenised assets, climate-related financial risks, and the use of artificial intelligence in credit risk models. The Committee's 2025 work programme includes guidance on third-party dependency risk, reflecting the systemic importance of cloud providers and fintech infrastructure to the banking sector.


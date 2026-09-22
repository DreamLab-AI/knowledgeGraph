public:: true

# Capital Adequacy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:capital-adequacy",
  "@type": "Page",
  "vc:slug": "capital-adequacy",
  "title": "Capital Adequacy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capital-adequacy",
  "@type": "Class",
  "label": "Capital Adequacy",
  "definition": "Capital adequacy is the regulatory and risk management requirement that financial institutions maintain a minimum level of capital relative to their risk-weighted assets, ensuring they can absorb losses without becoming insolvent and thereby protecting depositors, counterparties, and the broader financial system. The Basel Committee on Banking Supervision (BCBS) has codified capital adequacy requirements through successive accords — Basel I (1988), Basel II (2004), Basel III (2010, phased through 2028) — specifying the composition of qualifying capital (Common Equity Tier 1, Additional Tier 1, Tier 2) and the risk-weighting methodologies for credit, market, and operational risk exposures.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:compliance-framework",
    "label": "Compliance Framework"
  },
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:basel-committee-on-banking-supervision",
        "label": "Basel Committee on Banking Supervision"
      },
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:common-equity-tier-1",
        "label": "Common Equity Tier 1"
      },
      {
        "@id": "urn:ngm:class:capital-conservation-buffer",
        "label": "Capital Conservation Buffer"
      },
      {
        "@id": "urn:ngm:class:countercyclical-capital-buffer",
        "label": "Countercyclical Capital Buffer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-weighted-assets",
        "label": "Risk-Weighted Assets"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance-monitoring",
        "label": "Compliance Monitoring"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk Mitigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:credit-risk",
        "label": "Credit Risk"
      },
      {
        "@id": "urn:ngm:class:market-risk",
        "label": "Market Risk"
      },
      {
        "@id": "urn:ngm:class:operational-risk",
        "label": "Operational Risk"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk Oversight"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:climate-financial-risk",
        "label": "Climate Financial Risk"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:liquidity-coverage-ratio",
        "label": "Liquidity Coverage Ratio"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:capital-to-risk-weighted-assets-ratio",
      "label": "Capital-to-Risk-Weighted-Assets Ratio"
    },
    {
      "@id": "urn:ngm:class:regulatory-capital-requirement",
      "label": "Regulatory Capital Requirement"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Capital Adequacy]] is the principle and associated regulatory regime requiring that banks and other financial institutions hold capital reserves sufficient to cover their risk exposures, protecting against insolvency during periods of financial stress. It is measured primarily through the Capital Adequacy Ratio (CAR), also known as the Capital-to-Risk-Weighted Assets Ratio (CRAR), which divides qualifying regulatory capital by risk-weighted assets. The [[Basel Committee on Banking Supervision]] sets the international minimum standards that national regulators — the Prudential Regulation Authority in the UK, the Federal Reserve in the US, and the European Central Bank in the euro area — implement and enforce through their domestic frameworks.

- ### Relationships
  - [[Capital Adequacy]] operates as a foundational [[Compliance Framework]] within banking regulation, standardised by the [[Basel Committee on Banking Supervision]]. It is inseparable from [[Risk Management]] practice because risk-weighting models determine the denominator of the capital ratio. Institutions conduct continuous [[Risk Assessment]] of their loan books, trading positions, and operational exposures to compute their regulatory capital requirements. [[Compliance Monitoring]] processes track capital ratios against both regulatory minimums and internal buffers, with triggers for remediation when thresholds are breached.

- ### Content
  - The concept of minimum capital requirements formalised after the Latin American debt crisis of the early 1980s exposed the inadequacy of domestic capital rules when major international banks faced simultaneous losses. The Basel Committee, established in 1974 following the Herstatt Bank failure, published the Basel Capital Accord in 1988 (Basel I), setting a flat 8% minimum ratio of capital to risk-weighted assets across credit risk categories. This simple regime, while internationally adopted, was criticised for its blunt risk classification (all corporate loans received the same weight regardless of creditworthiness) and its failure to account for market and operational risks.

  - Basel II (2004) introduced three pillars: Pillar 1 (minimum capital requirements, with internal-ratings-based approaches allowing banks to use their own risk models), Pillar 2 (supervisory review of individual bank risk profiles and capital adequacy), and Pillar 3 (market discipline through public disclosure requirements). Internal models gave sophisticated banks greater capital efficiency but also introduced procyclicality and model risk. The 2007-2009 global financial crisis demonstrated that Basel II capital levels were insufficient; several major institutions failed or required government rescue despite appearing adequately capitalised on a Basel II basis.

  - Basel III, agreed in 2010 and implemented in phases, substantially strengthened capital requirements: CET1 (Common Equity Tier 1, the highest-quality loss-absorbing capital) must be at least 4.5% of risk-weighted assets, supplemented by a 2.5% capital conservation buffer, a countercyclical buffer of up to 2.5% (activated by national regulators in periods of credit excess), and a 1-3.5% surcharge for global systemically important banks (G-SIBs). The Basel IV package (finalised 2017, fully effective 2028) introduces output floors limiting the divergence between internal models and standardised approaches.

  - As of 2024-2025, capital adequacy frameworks are being extended to encompass new risk categories relevant to digital assets and climate change. The BCBS has issued standards for the prudential treatment of cryptoasset exposures (effective January 2025), applying a 1,250% risk weight (effectively 100% capital deduction) to unbacked cryptoassets and a more lenient treatment to tokenised traditional assets meeting specific conditions. Climate-related financial risk is being incorporated into Pillar 2 supervisory review processes, with stress-testing scenarios that include transition and physical climate risk impacts on bank loan portfolios.
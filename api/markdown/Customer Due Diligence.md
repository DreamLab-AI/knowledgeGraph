public:: true

# Customer Due Diligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:customer-due-diligence",
  "@type": "Page",
  "title": "Customer Due Diligence",
  "vc:slug": "customer-due-diligence",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:customer-due-diligence",
  "@type": "Class",
  "label": "Customer Due Diligence",
  "definition": "Customer due diligence (CDD) is the set of regulated procedures by which a financial institution or obliged entity identifies and verifies a customer, understands the nature and purpose of the business relationship, and assesses the money-laundering and terrorist-financing risk it poses. It encompasses identity verification, beneficial-ownership identification, screening against sanctions and politically exposed person lists, and ongoing monitoring of transactions and risk profile. CDD is a core obligation of anti-money-laundering regimes, calibrated through a risk-based approach that escalates to enhanced due diligence for higher-risk customers and permits simplified measures for lower-risk ones.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:know-your-customer",
      "label": "Know Your Customer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:beneficial-ownership",
        "label": "Beneficial Ownership"
      },
      {
        "@id": "urn:ngm:class:enhanced-due-diligence",
        "label": "Enhanced Due Diligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:risk-based-approach",
        "label": "Risk-Based Approach"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:politically-exposed-person",
        "label": "Politically Exposed Person"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:enhanced-due-diligence",
        "label": "Enhanced Due Diligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cdd",
      "label": "CDD"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Customer due diligence is the regulated process of identifying and verifying a customer, understanding the purpose of the relationship, and assessing its financial-crime risk. It combines [[Identity Verification]], [[Beneficial Ownership]] identification, [[Sanctions Screening]], and ongoing [[Transaction Monitoring]] under a [[Risk-Based Approach]]. CDD is a foundational obligation within [[Anti-Money Laundering]] regimes and a more specific instance of [[Know Your Customer]] practice, standardised internationally by the [[FATF]].

- ### Overview
  - CDD requirements derive from the FATF Recommendations, transposed into national law such as the EU Anti-Money Laundering Directives and the US Bank Secrecy Act regime.
  - It applies not only to banks but to a broad set of obliged entities including payment firms, virtual-asset service providers, accountants, lawyers, and high-value dealers.
  - The depth of due diligence scales with assessed risk: simplified for low-risk relationships, standard for ordinary customers, and [[Enhanced Due Diligence]] for high-risk customers, jurisdictions, or products.
  - CDD is a lifecycle obligation, not a one-off check, requiring periodic review and event-driven re-verification throughout the relationship.

- ### Key aspects
  - #### Identification and verification
    - Collecting and independently verifying customer identity using reliable documents, data, or electronic [[Identity Verification]] sources.
    - For legal entities, identifying the [[Beneficial Ownership]] structure to the natural persons who ultimately control the customer.
  - #### Risk assessment
    - Applying a [[Risk-Based Approach]] that weighs customer type, geography, product, channel, and transaction patterns.
    - Identifying [[Politically Exposed Person]] status and applying senior-management approval and source-of-wealth checks.
  - #### Screening
    - [[Sanctions Screening]] against consolidated lists and adverse-media checks at onboarding and on an ongoing basis.

- ### Mechanisms
  - #### Onboarding
    - At account opening the institution gathers KYC information, verifies identity, and assigns an initial risk rating before activating the relationship.
  - #### Ongoing monitoring
    - [[Transaction Monitoring]] systems flag activity inconsistent with the expected profile, triggering review and potential suspicious-activity reporting.
  - #### Periodic and trigger-based review
    - Risk ratings and customer information are refreshed on a schedule and whenever material changes (ownership, behaviour, sanctions designation) occur.

- ### Applications
  - **Account onboarding** — banks and fintechs run CDD before granting access to payment and credit services, supporting [[Regulatory Compliance]].
  - **Correspondent banking** — enhanced CDD governs cross-border relationships with respondent banks.
  - **Virtual-asset onboarding** — exchanges apply CDD and the FATF travel rule to crypto customers, often bridging to [[Digital Identity]] solutions.
  - **Trade and corporate finance** — beneficial-ownership verification underpins lending to complex corporate structures.
  - **Periodic reviews** — institutions re-run due diligence to keep risk ratings and customer data current across the portfolio.

- ### Relationships
  - hasPart:: [[Identity Verification]]
  - hasPart:: [[Beneficial Ownership]]
  - hasPart:: [[Enhanced Due Diligence]]
  - requires:: [[Identity Verification]]
  - requires:: [[Risk-Based Approach]]
  - requires:: [[Sanctions Screening]]
  - partOf:: [[Anti-Money Laundering]]
  - enables:: [[Transaction Monitoring]]
  - supports:: [[Regulatory Compliance]]
  - standardizedBy:: [[FATF]]
  - uses:: [[Politically Exposed Person]]
  - relatedTo:: [[Transaction Monitoring]]
  - relatedTo:: [[Anti-Money Laundering]]
  - contrastsWith:: [[Enhanced Due Diligence]]
  - bridgesTo:: [[Digital Identity]]

- ### Provenance
  - sources:: FATF Recommendations 10 and 22 (customer due diligence); EU 5th and 6th Anti-Money Laundering Directives; US FinCEN Customer Due Diligence Rule (2018)
  - updated:: 2026-06-15

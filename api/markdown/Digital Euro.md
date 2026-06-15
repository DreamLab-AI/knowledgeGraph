public:: true

# Digital Euro
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:digital-euro",
  "@type": "Page",
  "vc:slug": "digital-euro",
  "title": "Digital Euro",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-euro",
  "@type": "Class",
  "label": "Digital Euro",
  "definition": "The digital euro is a prospective retail central bank digital currency (CBDC) to be issued by the European Central Bank, providing eurozone households and businesses with a risk-free digital form of public money usable for everyday payments alongside cash, without requiring a bank account at a commercial institution.",
  "domain": "finance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:central-bank-digital-currency",
    "label": "Central Bank Digital Currency"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Eurozone Monetary System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Payments"
      },
      {
        "@id": "urn:ngm:class:financial-inclusion",
        "label": "Financial Inclusion"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:european-central-bank",
        "label": "European Central Bank"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:monetary-sovereignty",
        "label": "Monetary Sovereignty"
      },
      {
        "@id": "urn:ngm:class:ecb-digital-euro-regulation-proposal",
        "label": "ECB Digital Euro Regulation Proposal"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Tokenised Settlement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monetary-policy-transmission",
        "label": "Monetary Policy Transmission"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:european-parliament",
        "label": "European Parliament"
      },
      {
        "@id": "urn:ngm:class:ecb-digital-euro-regulation",
        "label": "ECB Digital Euro Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:e-cny",
        "label": "e-CNY"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:commercial-bank-deposit",
        "label": "Commercial Bank Deposit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Payment Data Privacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cbdc-frameworks",
        "label": "CBDC Frameworks"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:euro-cbdc",
      "label": "Euro CBDC"
    },
    {
      "@id": "urn:ngm:class:ecb-digital-currency",
      "label": "ECB Digital Currency"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The [[Digital Euro]] is the European Central Bank's proposed retail [[Central Bank Digital Currency]] for the eurozone, designed to provide citizens and businesses with a sovereign digital payment instrument that carries no credit risk, complements physical cash, and preserves financial inclusion without mandating commercial bank intermediation.

- ### Relationships
  - The [[Digital Euro]] is a specific instance of a [[Central Bank Digital Currency]] and is governed by the [[ECB Digital Euro Regulation Proposal]] moving through the [[European Parliament]]. Its design principles are situated within the broader [[CBDC Frameworks]] established by international bodies. It [[contrastsWith]] other [[CBDCs]] in its privacy architecture, holding limits, and legal tender status design choices.

- ### Content
  - The European Central Bank formally launched an investigation phase into the digital euro in October 2021, following a 2020 consultation that attracted over 8,000 public responses. The impetus was multifactorial: declining cash usage across northern Europe, the disruption threat of Facebook's Libra/Diem stablecoin proposal, and geopolitical concerns about dependence on US-owned card networks (Visa, Mastercard) and the potential dominance of Chinese CBDC infrastructure. The investigation phase concluded in October 2023 with the ECB's Governing Council deciding to proceed to a preparation phase.

  - The digital euro's design rests on several architectural choices balancing usability with financial stability and privacy. A holding limit per user—provisionally discussed in the range of €3,000–€4,000—prevents mass migration of deposits out of commercial banks, preserving banks' funding role. The ECB would issue digital euros to supervised intermediaries (banks, payment institutions) who distribute to end users, maintaining the two-tier banking system. Privacy is addressed through an "offline" digital euro variant that would enable peer-to-peer payments without transaction data reaching the ECB, analogous to cash. Online payments would be pseudonymous with access controls similar to existing payment systems.

  - The policy significance of the digital euro extends beyond payment efficiency. It would provide a risk-free digital settlement asset denominated in euros, reducing systemic exposure to commercial bank failure for retail users. It could serve as a monetary policy transmission instrument in extremis. Geopolitically, it represents the EU asserting monetary sovereignty in the digital payments layer. The ECB has also emphasised programmability—conditional payments, smart-contract integration—as a potential feature, though with caution about the implications for monetary neutrality.

  - By 2024–2025, the digital euro preparation phase involves technical testing, legislative progress, and stakeholder engagement. The European Commission's legislative proposal for the digital euro regulation—published in June 2023—is working through the Parliament and Council co-decision process. Key unresolved issues include the final holding limit, legal tender status obligations for merchants, and the offline privacy architecture's implementation. The ECB has indicated a possible issuance decision in the 2026–2027 timeframe if the legislative framework is in place. Global peers—China's e-CNY, Sweden's e-krona pilot, and the Bahamas' Sand Dollar—provide comparative evidence on design trade-offs and adoption challenges.


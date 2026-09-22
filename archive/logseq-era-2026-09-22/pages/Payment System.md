public:: true

# Payment System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:10904df068a7054ba36dca1de9f4a7181acf0ce9d522222773a165a7242f4afb",
  "@type": "Page",
  "vc:slug": "payment-system",
  "title": "Payment System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9123"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Payment System"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-system",
  "@type": "Class",
  "label": "Payment System",
  "definition": "A Payment System is an organised set of instruments, procedures, rules, and interbank funds-transfer networks that enables the exchange of monetary value between buyers and sellers, encompassing both traditional fiat rails (card networks, bank transfers, ACH) and digital-native mechanisms such as blockchain token transfers, smart-contract escrow, and central bank digital currencies. Payment systems define how obligations are cleared and settled — gross or net, in real time or deferred — while satisfying requirements for security, finality, liquidity efficiency, AML/KYC compliance, and cross-border interoperability. Modern payment infrastructure increasingly operates across layers: a base settlement layer (central bank reserves or a public blockchain), a clearing and messaging layer (SWIFT, ISO 20022, or a decentralised protocol), and an application layer (wallets, point-of-sale terminals, or embedded payment APIs) that exposes value exchange to end users and automated agents.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure",
      "label": "Financial Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-gateway",
        "label": "Payment Gateway"
      },
      {
        "@id": "urn:ngm:class:clearing-and-settlement",
        "label": "Clearing and Settlement"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-security",
        "label": "Cryptographic Security"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:e-commerce",
        "label": "E-Commerce"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-20022",
        "label": "ISO 20022"
      },
      {
        "@id": "urn:ngm:class:pci-dss",
        "label": "PCI DSS"
      },
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:barter-system",
        "label": "Barter System"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:payments-infrastructure",
      "label": "Payments Infrastructure"
    },
    {
      "@id": "urn:ngm:class:value-transfer-network",
      "label": "Value Transfer Network"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9123"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:payment-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:10904df068a7054ba36dca1de9f4a7181acf0ce9d522222773a165a7242f4afb"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A Payment System is an organised set of instruments, procedures, interbank funds-transfer networks, and settlement rules that enables the exchange of monetary value between participants. It spans traditional fiat rails such as card networks, [[ACH]], and [[SWIFT Network]], as well as digital-native mechanisms including [[Blockchain Transaction]] records, [[Smart Contract]] escrow, and [[Central Bank Digital Currency]] issuance. A payment system specifies how obligations are cleared (netting, gross) and settled (deferred net, real-time gross settlement) while satisfying requirements for [[Cryptographic Security]], finality, liquidity management, [[Financial Regulation]], and cross-border interoperability.

- ### Overview
  - Payment systems are foundational to any economy — virtual, digital, or physical — because they convert promises of payment into actual transfers of value with legal finality.
  - Three-layer architecture is the dominant conceptual model:
    - **Settlement layer** — the ultimate store of value (central bank reserves, a [[Blockchain]] ledger, or a [[Central Bank Digital Currency]] system).
    - **Clearing and messaging layer** — systems such as [[SWIFT Network]], ISO 20022 messaging, [[ACH]], or decentralised [[Decentralised Finance]] protocols that communicate and net obligations before settlement.
    - **Application layer** — consumer-facing [[Digital Wallet]] apps, point-of-sale terminals, [[Payment Gateway]] APIs, and embedded payment SDKs.
  - Key design properties of any payment system include:
    - **Finality** — irrevocability of a settled transaction.
    - **Liquidity efficiency** — minimising collateral and float requirements.
    - **Security** — resistance to fraud, double-spending, and counterfeiting via [[Cryptographic Security]] and [[Fraud Detection]].
    - **Accessibility** — reach across geographies, currencies, and device types.
    - **Compliance** — adherence to AML, [[Know Your Customer]], and sanctions screening.
  - Payment systems range from highly centralised (a single card network) to fully decentralised (a proof-of-work blockchain with no governing body).

- ### Key Components
  - **[[Payment Gateway]]** — the entry point that authorises transactions, routes them to the appropriate network, and returns a status code to the merchant or application.
  - **[[Clearing and Settlement]]** — the process of reconciling orders between transacting parties and transferring funds between their financial institutions. Real-Time Gross Settlement (RTGS) settles each transaction individually and immediately; Deferred Net Settlement (DNS) batches and nets positions at end of day.
  - **[[Digital Wallet]]** — a software or hardware container that stores payment credentials, keys, or token balances, enabling one-click or contactless payments.
  - **[[Smart Contract]]** — self-executing code on a blockchain that can enforce conditional payment logic (escrow, time-locks, multi-sig release) without a trusted intermediary.
  - **[[Lightning Network]]** — a second-layer protocol on Bitcoin that enables high-frequency, low-fee [[Microtransaction]] settlement by routing payments through off-chain channels and only settling net positions on-chain.
  - **[[Identity Verification]]** — KYC and AML processes that bind a payment credential to a verified legal identity, satisfying regulatory mandates.
  - **[[Fraud Detection]]** — machine-learning and rule-based systems that score transactions in real time for anomaly signals; increasingly integrated with [[AI-Driven Finance]] pipelines.
  - **[[Tokenomics]]** — in blockchain payment systems, the design of token supply, incentives, and burn mechanisms that maintain purchasing-power stability and network security.
  - **[[Central Bank Digital Currency]]** — a sovereign digital currency issued directly on a ledger controlled by or audited by a central bank, blending the finality of reserve money with programmability.

- ### Mechanisms
  - **Card network four-party model** — cardholder, issuing bank, card network (Visa/Mastercard), and acquiring bank form a closed loop with interchange fees and chargeback rights.
  - **ACH (Automated Clearing House)** — batch electronic fund transfer between bank accounts; standard for payroll and bill payment in the United States.
  - **RTGS** — Real-Time Gross Settlement used by central banks (e.g. Fedwire, TARGET2) for high-value interbank transfers with immediate finality.
  - **[[Blockchain Transaction]]** — a cryptographically signed record propagated to a distributed ledger; provides settlement finality without a central counterparty, at the cost of probabilistic confirmation and on-chain throughput limits.
  - **Layer-2 channels** — [[Lightning Network]] and similar state-channel protocols batch micro-payments off-chain, broadcasting only opening and closing channel transactions to the base layer.
  - **Open Banking APIs** — regulated account-to-account transfer initiated by a licensed third-party payment initiation service provider, bypassing card rails entirely.

- ### Applications and Use Cases
  - **[[E-Commerce]]** — online checkout flows integrating card networks, PayPal, buy-now-pay-later, and one-click wallet payments.
  - **Cross-border remittance** — migrant workers sending funds home; blockchain rails and stablecoins reduce cost from the global average of ~6 % to sub-1 % in some corridors.
  - **[[Decentralised Finance]]** — lending, borrowing, and yield generation governed by [[Smart Contract]] pools with no custodial intermediary.
  - **Virtual economy and [[Metaverse]]** — purchasing avatar assets, in-game items, virtual real estate parcels, and subscriptions in persistent digital worlds; requires [[Microtransaction]] efficiency and cross-chain interoperability.
  - **B2B supply-chain settlement** — ISO 20022-compliant [[SWIFT Network]] messages triggering automatic reconciliation and payment upon goods receipt, increasingly linked to [[Supply Chain]] ERP systems.
  - **Machine-to-machine payments** — [[Autonomous Agent]] and IoT devices transacting autonomously using [[Smart Contract]] logic and [[Lightning Network]] streaming sats per unit of compute, bandwidth, or energy.
  - **Central bank monetary policy** — [[Central Bank Digital Currency]] payment systems allow programmable monetary policy (expiry dates, geographic restrictions, conditional transfers).

- ### Relationships
  - hasPart:: [[Payment Gateway]]
  - hasPart:: [[Clearing and Settlement]]
  - hasPart:: [[Digital Wallet]]
  - requires:: [[Cryptographic Security]]
  - requires:: [[Identity Verification]]
  - requires:: [[Network Protocol]]
  - enables:: [[E-Commerce]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Microtransaction]]
  - uses:: [[Smart Contract]]
  - uses:: [[Lightning Network]]
  - uses:: [[Blockchain Transaction]]
  - standardizedBy:: [[ISO 20022]]
  - standardizedBy:: [[PCI DSS]]
  - standardizedBy:: [[SWIFT Network]]
  - contrastsWith:: [[Barter System]]
  - contrastsWith:: [[Central Bank Digital Currency]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Fraud Detection]]
  - bridges-to:: [[Autonomous Agent]]
  - bridges-to:: [[AI-Driven Finance]]

- ### Standards and Context
  - **ISO 20022** — the international standard for financial messaging that is progressively replacing SWIFT MT messages; enables rich, structured data for compliance screening and straight-through processing.
  - **[[PCI DSS]]** (Payment Card Industry Data Security Standard) — mandatory for any entity storing, processing, or transmitting cardholder data; defines twelve control families covering network security, encryption, and access management.
  - **PSD2 / Open Banking** — the EU Payment Services Directive 2 mandating that banks expose APIs to licensed third parties, enabling account-to-account payments and reducing dependence on card rails.
  - **[[Financial Regulation]]** — AML (Anti-Money Laundering), sanctions screening (OFAC, EU lists), and [[Know Your Customer]] identity binding imposed by regulators including FinCEN (US), FCA (UK), and ECB (EU).
  - **BIS CPMI** — the Committee on Payments and Market Infrastructures publishes principles for financial market infrastructure (PFMIs) that define resilience and interoperability expectations for systemically important payment systems.
  - **CBDC projects** — FedNow (US), mBridge (multi-CBDC), and digital euro initiatives are reshaping the settlement layer, potentially disintermediating correspondent banking for cross-border payments.
  - **[[Distributed Ledger Technology]]** — permissioned variants (Hyperledger Fabric, R3 Corda) are used by consortia of banks and clearinghouses to share a single settlement ledger without full public-chain exposure.

- ### Provenance
  - sources:: BIS CPMI Principles for Financial Market Infrastructures; ISO 20022 specification; PCI Security Standards Council; Ethereum ERC-20/ERC-4626 specifications; Lightning Network whitepaper (Poon & Dryja); ECB digital euro reports; Federal Reserve FedNow documentation.
  - updated:: 2026-06-13

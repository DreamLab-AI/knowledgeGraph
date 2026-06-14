public:: true

# SWIFT Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c94b378e886cce913123e2ca6b02faca2c74b148f95c3c59f54642e3fe7ec037",
  "@type": "Page",
  "vc:slug": "swift-messaging",
  "title": "SWIFT Messaging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:swift",
      "vc:label": "SWIFT"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "vc:label": "CPMI-IOSCO PFMI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SWIFT Messaging"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:swift-messaging",
  "@type": "Class",
  "label": "SWIFT Messaging",
  "definition": "SWIFT Messaging is the standardised, structured financial message exchange system operated over the Society for Worldwide Interbank Financial Telecommunication (SWIFT) network, enabling banks, brokers, custodians, and other financial institutions to communicate payment instructions, securities transactions, treasury operations, and trade finance data. Messages are governed by two principal format families: the legacy MT (Message Type) standards encoded in SWIFT's own syntax, and the modern ISO 20022 MX messages encoded in XML, which carry richer, more granular data and support global harmonisation. SWIFT itself functions as a secure messaging infrastructure rather than a settlement system; actual fund movement occurs via correspondent banking relationships, real-time gross settlement (RTGS) systems, and central bank facilities. The network is subject to multi-jurisdictional regulatory oversight and is a critical node in the global financial stability architecture.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:mt-message-types",
        "label": "MT Message Types"
      },
      {
        "@id": "urn:ngm:class:iso-20022",
        "label": "ISO 20022"
      },
      {
        "@id": "urn:ngm:class:swiftnet",
        "label": "SWIFTNet"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      },
      {
        "@id": "urn:ngm:class:global-financial-infrastructure",
        "label": "Global Financial Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      },
      {
        "@id": "urn:ngm:class:business-identifier-code",
        "label": "Business Identifier Code"
      },
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-payment",
        "label": "Cross-Border Payment"
      },
      {
        "@id": "urn:ngm:class:securities-settlement",
        "label": "Securities Settlement"
      },
      {
        "@id": "urn:ngm:class:trade-finance",
        "label": "Trade Finance"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:real-time-gross-settlement",
        "label": "Real-Time Gross Settlement"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-20022",
        "label": "ISO 20022"
      },
      {
        "@id": "urn:ngm:class:cpmi-iosco-pfmi",
        "label": "CPMI-IOSCO PFMI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:financial-cryptography",
        "label": "Financial Cryptography"
      },
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      },
      {
        "@id": "urn:ngm:class:iso-tc68",
        "label": "ISO TC68"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ripple-network",
        "label": "Ripple Network"
      },
      {
        "@id": "urn:ngm:class:blockchain-payment",
        "label": "Blockchain Payment"
      },
      {
        "@id": "urn:ngm:class:fedwire",
        "label": "Fedwire"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:financial-market-infrastructure",
        "label": "Financial Market Infrastructure"
      },
      {
        "@id": "urn:ngm:class:nostro-vostro-account",
        "label": "Nostro/Vostro Account"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:swift-financial-messaging",
      "label": "SWIFT Financial Messaging"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:swift-messaging:48da57dfec41",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c94b378e886cce913123e2ca6b02faca2c74b148f95c3c59f54642e3fe7ec037"
  },
  "vc:resolutions": [
    {
      "raw": "[[SWIFT]]",
      "resolved": "urn:visionflow:linked:swift",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CPMI-IOSCO PFMI]]",
      "resolved": "urn:visionflow:linked:cpmi-iosco-pfmi",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - SWIFT Messaging is the standardised, structured financial message exchange system operated over the [[SWIFT]] cooperative network, enabling banks, custodians, brokers, and other financial institutions to communicate instructions for [[Cross-Border Payment]], [[Securities Settlement]], [[Trade Finance]], and [[Treasury Management]]. Messages are governed by two principal format families — the legacy MT (Message Type) standards and the modern [[ISO 20022]] MX messages encoded in XML — with the network relying on [[Financial Cryptography]] and [[Public Key Infrastructure]] to ensure integrity and authenticity across every transmission.

- ### Overview
  - SWIFT (Society for Worldwide Interbank Financial Telecommunication) was founded in 1973 and began live operations in 1977, replacing the telex-based communication that had governed international finance for decades.
  - The network connects thousands of financial institutions across more than 200 countries and territories, providing a shared secure messaging platform.
  - SWIFT does **not** move money itself; it moves *instructions*. Actual settlement occurs via [[Correspondent Banking]] relationships, [[Real-Time Gross Settlement]] systems (such as TARGET2 in the eurozone or Fedwire in the US), and central bank facilities.
  - Each institution on the network is identified by a [[Business Identifier Code]] (BIC), an ISO 9362 identifier that encodes country, city, bank, and branch.
  - The network operates on [[SWIFTNet]], a proprietary IP-based network providing the transport layer for all SWIFT services — messaging, file transfer, and browsing.
  - SWIFT is a cooperative owned by its member institutions, governed under Belgian law, and subject to oversight by the G10 central banks, coordinated by the National Bank of Belgium.

- ### Key Components
  - #### MT Message Types (Legacy Format)
    - The original SWIFT message format, structured as free-text fields with rigid field codes and character-count constraints.
    - Organised into message categories by financial function:
      - **MT 1xx** — Customer Payments and Cheques (e.g. MT 103 for single customer credit transfers)
      - **MT 2xx** — Financial Institution Transfers (e.g. MT 202 for bank-to-bank transfers)
      - **MT 3xx** — Treasury Markets: Foreign Exchange, Money Markets, Derivatives
      - **MT 4xx** — Collections and Cash Letters
      - **MT 5xx** — Securities (e.g. MT 515 settlement confirmation, MT 540–543 instruction messages)
      - **MT 6xx** — Precious Metals and Syndications
      - **MT 7xx** — Documentary Credits and Guarantees (e.g. MT 700 issue of documentary credit)
      - **MT 9xx** — Cash Management and Customer Status
    - MT messages are being phased out as part of the migration to [[ISO 20022]], with full coexistence planned through 2025 and mandatory cutover for cross-border and correspondent banking messages targeted thereafter.
  - #### ISO 20022 MX Messages
    - [[ISO 20022]] is a global financial messaging standard developed under [[ISO TC68]] that uses XML schemas and a rich data dictionary.
    - MX messages carry significantly more structured data than MT equivalents: richer remittance information, LEI identifiers, structured addresses, and purpose codes that support [[Anti-Money Laundering]] and [[Sanctions Screening]] systems.
    - Key MX message families include pacs (Payment Clearing and Settlement), camt (Cash Management), pain (Payment Initiation), and sese (Securities Settlement).
    - The migration to ISO 20022 is the largest transformation in SWIFT's history, enabling straight-through processing, richer data analytics, and harmonisation with domestic payment rails such as CHAPS, SEPA, and TARGET2-Securities.
  - #### SWIFTNet
    - The proprietary [[SWIFTNet]] network is built on IP/MPLS and provides three core communication services: FIN (store-and-forward messaging for MT), InterAct (real-time messaging for MX and other formats), and FileAct (bulk file transfer).
    - SWIFTNet uses X.509 certificates and [[Public Key Infrastructure]] administered through the SWIFT PKI for member authentication and message non-repudiation.
    - [[Message Authentication Code]] algorithms (LAK — authentication key) sign each MT message, binding sender identity to content.
  - #### Business Identifier Code (BIC)
    - The [[Business Identifier Code]] (ISO 9362) is the addressing scheme of the SWIFT network. An 8- or 11-character code identifies the institution (4 chars), country (2 chars), location (2 chars), and optionally branch (3 chars).
    - BICs are also used outside SWIFT for IBAN validation and are referenced in SEPA transactions.
  - #### SWIFT gpi (Global Payments Innovation)
    - Launched in 2017, SWIFT gpi introduced end-to-end tracking, speed commitments, and fee transparency for cross-border payments.
    - A unique end-to-end transaction reference (UETR) tag accompanies every gpi payment, providing a globally traceable identifier throughout the correspondent chain.
    - SWIFT gpi significantly reduced average settlement times for many corridors from days to hours or minutes.

- ### Applications and Use Cases
  - #### Cross-Border Payments
    - The primary use case: a sending bank instructs via MT 103 or the equivalent pacs.008 MX message, routing through one or more [[Correspondent Banking]] intermediaries to credit the beneficiary.
    - SWIFT gpi's UETR tracking provides the payer and payee visibility that was previously unavailable in the correspondent chain.
  - #### Securities Settlement and Custody
    - Central securities depositories (CSDs), custodians, and broker-dealers exchange MT 5xx / sese.xxx messages to confirm trades, instruct settlement, and report positions.
    - Linked to [[Securities Settlement]] infrastructure such as Euroclear, Clearstream, and DTC.
  - #### Treasury and Foreign Exchange
    - Banks confirm FX deals, money-market transactions, and derivatives via MT 3xx or trea.xxx messages, providing the post-trade confirmation that underpins [[Treasury Management]] workflows.
  - #### Trade Finance
    - Documentary letters of credit, guarantees, and collections are communicated via MT 7xx messages, supporting [[Trade Finance]] supply chains that link importers, exporters, and their banks globally.
  - #### Cash Management and Reporting
    - MT 9xx / camt.xxx messages deliver account statements (MT 940/942, camt.053/054) and balance reports to corporate clients and treasury systems, feeding [[Treasury Management]] and reconciliation workflows.
  - #### Compliance and Financial Crime
    - Structured message fields and the rich data in ISO 20022 MX messages support [[Anti-Money Laundering]] transaction monitoring, [[Sanctions Screening]] against OFAC, EU, and UN lists, and [[Know Your Customer]] data exchange.
    - SWIFT's Compliance Analytics services provide pattern detection and correspondent due-diligence tools across the network.

- ### Relationships
  - partOf:: [[SWIFT]]
  - partOf:: [[Global Financial Infrastructure]]
  - hasPart:: [[MT Message Types]]
  - hasPart:: [[ISO 20022]]
  - hasPart:: [[SWIFTNet]]
  - requires:: [[Business Identifier Code]]
  - requires:: [[Correspondent Banking]]
  - enables:: [[Cross-Border Payment]]
  - enables:: [[Securities Settlement]]
  - enables:: [[Trade Finance]]
  - enables:: [[Treasury Management]]
  - dependsOn:: [[Real-Time Gross Settlement]]
  - dependsOn:: [[Public Key Infrastructure]]
  - implements:: [[ISO 20022]]
  - implements:: [[CPMI-IOSCO PFMI]]
  - uses:: [[Financial Cryptography]]
  - uses:: [[Message Authentication Code]]
  - supports:: [[Anti-Money Laundering]]
  - supports:: [[Sanctions Screening]]
  - supports:: [[Know Your Customer]]
  - standardizedBy:: [[ISO TC68]]
  - contrastsWith:: [[Ripple Network]]
  - contrastsWith:: [[Blockchain Payment]]
  - contrastsWith:: [[Fedwire]]
  - bridges-to:: [[Central Bank Digital Currency]]
  - bridges-to:: [[Distributed Ledger Technology]]
  - relatedTo:: [[Payment System]]
  - relatedTo:: [[Financial Market Infrastructure]]
  - relatedTo:: [[Nostro/Vostro Account]]

- ### Standards and Governance Context
  - [[CPMI-IOSCO PFMI]] — The Principles for Financial Market Infrastructures (2012) apply to systemically important payment systems. SWIFT messaging underlies many such systems and must comply with data-quality and resilience principles derived from the PFMIs.
  - [[ISO 20022]] — The universal financial industry message scheme, governed by [[ISO TC68]]. All new SWIFT message development and major migration programmes target this standard.
  - ISO 9362 — Defines the Business Identifier Code (BIC) structure used for institution addressing on the network.
  - ISO 15022 — The predecessor standard underlying many MT securities messages; being superseded by ISO 20022 in the securities domain.
  - Oversight: The G10 central banks (led by the National Bank of Belgium) conduct cooperative oversight of SWIFT under a framework agreed in 1998 and updated periodically. The Financial Stability Board (FSB) monitors SWIFT as part of global [[Financial Market Infrastructure]] resilience.
  - Sanctions and geopolitical risk: SWIFT has disconnected institutions from specific countries under international sanction regimes (Iran in 2012, certain Russian banks following the 2022 invasion of Ukraine), highlighting its role as a geopolitical instrument alongside its technical function.
  - The SWIFT Customer Security Programme (CSP) mandates baseline cybersecurity controls for all member institutions, following the 2016 Bangladesh Bank heist in which attackers exploited SWIFT messaging to issue fraudulent MT 103 instructions.

- ### Competitive and Complementary Landscape
  - [[Ripple Network]] (RippleNet / XRPL) and other [[Blockchain Payment]] rails have been positioned as potential successors or complements for cross-border settlement, offering near-instant finality without correspondent chains.
  - [[Fedwire]] (US Federal Reserve) and CHAPS (Bank of England) are domestic RTGS systems that settle the US-dollar and sterling legs of SWIFT-initiated correspondent payments.
  - [[Central Bank Digital Currency]] pilots (e.g. Project mBridge, Project Jura) are exploring whether central bank money on distributed ledgers could bypass SWIFT-dependent correspondent chains for certain cross-border corridors, with SWIFT itself conducting interoperability experiments with CBDC networks.
  - [[Distributed Ledger Technology]] experiments by the Monetary Authority of Singapore (Project Ubin), Banque de France, and others have tested settlement netting that could reduce reliance on SWIFT-based correspondent messaging.

- ### Provenance
  - sources:: SWIFT official documentation; ISO 20022 standard; CPMI-IOSCO PFMIs (2012); FSB reports on cross-border payments; BIS CPMI studies on correspondent banking
  - updated:: 2026-06-13

public:: true

# Elliptic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:746da9604d61bb0533e3015cd38db7551c5577e9b582532fd3f06a47093adc92",
  "@type": "Page",
  "vc:slug": "elliptic",
  "title": "Elliptic",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-analytics",
      "vc:label": "Blockchain Analytics"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:transaction-monitoring",
      "vc:label": "Transaction Monitoring"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Elliptic"
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
  "@id": "urn:ngm:class:elliptic",
  "@type": "Class",
  "label": "Elliptic",
  "definition": "Elliptic is a blockchain analytics and financial crime compliance company that provides software tools to trace, analyse, and risk-score cryptocurrency transactions across multiple blockchain networks. Its technology maps on-chain flows to real-world entities — exchanges, darknet markets, ransomware wallets, and sanctioned addresses — enabling financial institutions, crypto businesses, and law enforcement to detect and prevent money laundering, terrorist financing, and sanctions evasion. Elliptic's transaction monitoring and wallet screening solutions are used by regulated virtual-asset service providers globally to satisfy AML/CFT obligations under frameworks such as the FATF Travel Rule and MiCA.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-analytics",
      "label": "Blockchain Analytics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-analytics",
        "label": "Blockchain Analytics"
      },
      {
        "@id": "urn:ngm:class:graph-analysis",
        "label": "Graph Analysis"
      },
      {
        "@id": "urn:ngm:class:on-chain-data",
        "label": "On-Chain Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:heuristic-clustering",
        "label": "Heuristic Clustering"
      },
      {
        "@id": "urn:ngm:class:risk-scoring",
        "label": "Risk Scoring"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fatf-travel-rule",
        "label": "FATF Travel Rule"
      },
      {
        "@id": "urn:ngm:class:bc-0456-virtual-asset-service-providers",
        "label": "Virtual Asset Service Provider"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:chainalysis",
        "label": "Chainalysis"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:dark-web-monitoring",
        "label": "Dark Web Monitoring"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-crime-compliance",
        "label": "Financial Crime Compliance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:elliptic-enterprises",
      "label": "Elliptic Enterprises"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:elliptic:8198cf44658b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:746da9604d61bb0533e3015cd38db7551c5577e9b582532fd3f06a47093adc92"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Analytics]]",
      "resolved": "urn:visionflow:linked:blockchain-analytics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Monitoring]]",
      "resolved": "urn:visionflow:linked:transaction-monitoring",
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
  - Elliptic is a blockchain analytics and financial crime compliance company, founded in London in 2013, that provides software tools to trace cryptocurrency transactions across multiple blockchains, attribute them to real-world entities, and assign risk scores to wallets and transactions. Its platform is used by [[Virtual Asset Service Provider]]s, banks, and law enforcement agencies to satisfy [[Anti-Money Laundering]] obligations and detect [[Sanctions Screening]] violations. By combining [[Graph Analysis]], [[Heuristic Clustering]], and [[Machine Learning]], Elliptic enables regulated entities to monitor [[Cryptocurrency]] flows at scale, bridging the technical world of [[Blockchain Analytics]] with the compliance demands of [[Financial Crime Compliance]] frameworks.

- ### Overview
  - Elliptic was among the first dedicated cryptocurrency compliance companies, emerging from the recognition that the pseudonymous nature of [[Bitcoin]] and other cryptocurrencies created both risk and investigative opportunity.
  - Rather than viewing blockchain transparency as a privacy threat, Elliptic treats it as a compliance asset: every transaction is permanently recorded on a public ledger, making historical tracing possible in ways unavailable with traditional cash.
  - The company operates primarily as a B2B software and data provider, serving [[Cryptocurrency Exchange]]s, [[Financial Institution]]s, custodians, payment processors, and government agencies.
  - Its core product lines cover:
    - **Wallet screening** — real-time risk assessment of counterparty wallets before a transaction is accepted or executed.
    - **Transaction monitoring** — post-trade surveillance of flows to detect patterns consistent with [[Money Laundering]], ransomware payments, or [[Terrorist Financing]].
    - **Investigations** — case management and visualisation tools used by compliance officers and law enforcement for forensic tracing.
  - Elliptic is headquartered in London, with offices in New York, Singapore, and Tokyo, reflecting the global spread of [[Cryptocurrency]] regulation.

- ### Key Components
  - #### Data Layer
    - **On-Chain Data Ingestion** — Elliptic ingests full [[Blockchain]] history for [[Bitcoin]], [[Ethereum]], and many other networks, maintaining a continuously updated ledger database.
    - **Entity Attribution Database** — a proprietary intelligence dataset mapping clusters of addresses to named entities (exchanges, darknet markets, mixing services, sanctioned persons). This is built from open-source intelligence, court records, industry feeds, and internal research.
    - **Cross-Chain Coverage** — the platform extends beyond Bitcoin to cover [[Ethereum]], [[Stablecoins]] (USDT, USDC), [[DeFi]] protocols, and NFT markets, reflecting the breadth of modern [[Digital Asset]] activity.
  - #### Analytics Engine
    - **[[Heuristic Clustering]]** — the co-spend (common-input ownership) heuristic groups addresses that appear together as inputs in a transaction, inferring they share a private key holder. This is the foundational technique for de-anonymising [[Bitcoin]] UTXO graphs.
    - **[[Graph Analysis]]** — transaction flows are modelled as directed graphs; Elliptic applies graph traversal and [[Network Analysis]] algorithms to follow funds across multiple hops, identifying indirect exposure to illicit sources.
    - **Subgraph-level [[Machine Learning]]** — recent capabilities apply graph neural networks to classify subgraphs of transaction activity, improving detection of novel laundering typologies not captured by rule-based heuristics.
    - **[[Risk Scoring]]** — each wallet and transaction receives a composite risk score derived from direct and indirect exposure to flagged entities, weighted by proximity in the transaction graph.
  - #### Compliance Workflows
    - **API Integration** — RESTful APIs allow crypto businesses to embed real-time screening into their onboarding and transaction processing pipelines.
    - **Case Management** — an investigator dashboard provides visualisation of transaction flows, evidence collection, and audit trails for regulatory reporting.
    - **[[Suspicious Activity Report]] (SAR) Assistance** — tools help compliance teams draft and file SARs with financial intelligence units such as the UK's [[National Crime Agency]] or the US [[FinCEN]].

- ### Applications and Use Cases
  - #### Virtual Asset Service Provider Compliance
    - Crypto exchanges, brokers, and custodians use Elliptic's wallet screening API to check deposit and withdrawal addresses against its entity database at onboarding and in real time, fulfilling obligations under the [[FATF Travel Rule]] and local [[AML]] directives.
  - #### Bank Correspondent Compliance
    - Banks offering crypto-friendly correspondent services or acquiring merchant payment processors use Elliptic to assess the risk profile of counterparty VASPs, satisfying de-risking and [[Know Your Customer]] requirements without blanket exclusion of crypto businesses.
  - #### Law Enforcement Investigations
    - National cybercrime units and financial intelligence units use Elliptic's investigation tools to trace ransomware payments, darknet market proceeds, and fraud funds, producing evidence-grade reports for prosecution. Notable investigations have used blockchain tracing to recover seized crypto assets.
  - #### DeFi and NFT Risk
    - As illicit actors shift to [[Decentralised Finance]] protocols and NFT markets to launder funds, Elliptic has extended coverage to smart-contract-based flows, detecting wash trading, mixer usage, and cross-protocol layering.
  - #### Sanctions Compliance
    - Following OFAC designations of cryptocurrency addresses (e.g. Tornado Cash in 2022), Elliptic provides real-time screening against OFAC, EU, UN, and FATF sanctions lists, enabling clients to block transactions with designated wallets.
  - #### Stablecoin Monitoring
    - With the growth of [[Stablecoins]] as settlement assets, Elliptic tracks USDT and USDC flows, including freeze-list lookups tied to issuer blacklists maintained by Tether and Circle.

- ### Relationships
  - subClassOf:: [[Blockchain Analytics]]
  - requires:: [[On-Chain Data]]
  - requires:: [[Graph Analysis]]
  - requires:: [[Heuristic Clustering]]
  - enables:: [[Anti-Money Laundering]]
  - enables:: [[Transaction Monitoring]]
  - enables:: [[Sanctions Screening]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Cryptocurrency Forensics]]
  - uses:: [[Entity Attribution]]
  - uses:: [[Risk Scoring]]
  - uses:: [[Machine Learning]]
  - supports:: [[FATF Travel Rule]]
  - supports:: [[Virtual Asset Service Provider]]
  - supports:: [[Financial Institution]]
  - contrastsWith:: [[Chainalysis]]
  - contrastsWith:: [[CipherTrace]]
  - contrastsWith:: [[TRM Labs]]
  - relatedTo:: [[Know Your Customer]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Dark Web Monitoring]]
  - bridges-to:: [[Financial Crime Compliance]]
  - bridges-to:: [[Law Enforcement Intelligence]]

- ### Standards and Regulatory Context
  - **[[FATF Travel Rule]]** (Recommendation 16) — requires VASPs to share originator and beneficiary information on transfers above a threshold. Elliptic provides data to support Travel Rule compliance by enriching counterparty VASP profiles.
  - **[[EU Fifth Anti-Money Laundering Directive]]** (5AMLD) and **[[MiCA]]** — European frameworks bringing crypto assets under AML supervision. Elliptic's European clients use its tools to satisfy obliged-entity requirements under these regulations.
  - **[[Bank Secrecy Act]]** and FinCEN guidance — in the United States, money services businesses and exchanges must file SARs and maintain transaction monitoring programmes; Elliptic supports both.
  - **[[OFAC]]** Sanctions Programme — Elliptic's sanctions screening covers OFAC's SDN list and designations of specific cryptocurrency addresses, enabling clients to block prohibited transactions.
  - **[[ISO 20022]]** — as blockchain-based payment systems converge with traditional payment messaging standards, Elliptic's data enrichment feeds into compliance workflows that must align with richer ISO 20022 structured data fields.
  - Elliptic is a member of the **[[Global Digital Finance]]** (GDF) industry body and contributes to typology guidance developed by the [[Egmont Group]] and [[FATF]].

- ### Competitive Landscape
  - The blockchain analytics market includes several specialist firms:
    - **[[Chainalysis]]** — the largest by market share, US-headquartered, with strong law enforcement partnerships and government contract revenue.
    - **[[CipherTrace]]** — acquired by Mastercard in 2021, integrating blockchain intelligence into traditional card network compliance workflows.
    - **[[TRM Labs]]** — focuses heavily on DeFi and cross-chain risk, with rapid growth in the US government sector.
    - **[[Merkle Science]]** — Asia-Pacific focused, with localised entity coverage for exchanges in that region.
  - Elliptic differentiates through its London base (EMEA regulatory expertise), depth of DeFi coverage, and academic research partnerships with institutions such as MIT.

- ### Provenance
  - sources:: Elliptic company documentation; FATF guidance on virtual assets; OFAC cryptocurrency designations; academic literature on blockchain heuristics
  - updated:: 2026-06-13

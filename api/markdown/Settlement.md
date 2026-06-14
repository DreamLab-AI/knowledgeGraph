public:: true

# Settlement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c8e21698f4fcf6ca2e243b4ca512a65c4409cc99ff64abed0e192028ac7ee212",
  "@type": "Page",
  "vc:slug": "settlement",
  "title": "Settlement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:atomic-settlement",
      "vc:label": "Atomic Settlement"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-settlement",
      "vc:label": "Cross-Border Settlement"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure-domain",
      "vc:label": "Financial Infrastructure Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Settlement"
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
  "@id": "urn:ngm:class:settlement",
  "@type": "Class",
  "label": "Settlement",
  "definition": "Settlement is the final, legally binding transfer of an asset or funds from one party to another that extinguishes the obligation arising from a trade, payment, or contract. In traditional financial markets, settlement follows trade execution after a defined delay (e.g. T+2) during which counterparty risk persists; in distributed ledger systems, settlement occurs when a transaction achieves irreversible confirmation according to the network's consensus rules. Achieving settlement finality is the core objective of payment and securities clearing infrastructure, as it determines when legal title definitively passes and operational risk is eliminated. The shift towards real-time gross settlement (RTGS), delivery-versus-payment (DvP), and atomic settlement on distributed ledgers represents a decades-long effort to compress settlement latency and reduce systemic risk.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure-domain",
      "label": "Financial Infrastructure Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:settlement-finality",
        "label": "Settlement Finality"
      },
      {
        "@id": "urn:ngm:class:delivery-versus-payment",
        "label": "Delivery Versus Payment"
      },
      {
        "@id": "urn:ngm:class:netting",
        "label": "Netting"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-infrastructure-domain",
        "label": "Financial Infrastructure Domain"
      },
      {
        "@id": "urn:ngm:class:post-trade-processing",
        "label": "Post-Trade Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:clearing",
        "label": "Clearing"
      },
      {
        "@id": "urn:ngm:class:counterparty-risk-management",
        "label": "Counterparty Risk Management"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      },
      {
        "@id": "urn:ngm:class:cross-border-settlement",
        "label": "Cross-Border Settlement"
      },
      {
        "@id": "urn:ngm:class:securities-transfer",
        "label": "Securities Transfer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:central-securities-depository",
        "label": "Central Securities Depository"
      },
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:real-time-gross-settlement",
        "label": "Real-Time Gross Settlement"
      },
      {
        "@id": "urn:ngm:class:deferred-net-settlement",
        "label": "Deferred Net Settlement"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:clearing",
        "label": "Clearing"
      },
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:trade-settlement",
      "label": "Trade Settlement"
    },
    {
      "@id": "urn:ngm:class:payment-settlement",
      "label": "Payment Settlement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:settlement:a75c433ab2ae",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c8e21698f4fcf6ca2e243b4ca512a65c4409cc99ff64abed0e192028ac7ee212"
  },
  "vc:resolutions": [
    {
      "raw": "[[Atomic Settlement]]",
      "resolved": "urn:visionflow:linked:atomic-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Settlement]]",
      "resolved": "urn:visionflow:linked:cross-border-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure-domain",
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
  - Settlement is the final, legally binding discharge of an obligation arising from a trade, payment, or financial contract, achieved through the definitive transfer of assets or funds between counterparties. It is the culminating step in [[Post-Trade Processing]], converting a contractual claim into actual legal ownership, and is closely related to concepts of [[Settlement Finality]], [[Clearing]], and [[Delivery Versus Payment]]. The mechanics of settlement underpin every [[Payment System]] and securities market, determining how [[Counterparty Risk Management]] is achieved and how [[Systemic Risk]] is contained across the financial system.

- ### Overview
  - Settlement is not merely a technical step but a legal event: the moment at which legal title irrevocably passes and the originating obligation is extinguished. Prior to settlement, both parties carry exposure to the risk that the other will default before completion — a risk known as settlement risk or Herstatt risk (named after a 1974 German bank failure caused by cross-time-zone FX settlement gaps).
  - In securities markets, the gap between trade execution and settlement (historically T+5, compressed to T+2 in most major markets, and increasingly to T+1 or T+0) creates a window of counterparty exposure. The [[Central Securities Depository]] (CSD) and the [[Central Bank]] together provide the infrastructure that makes final settlement possible, with central bank money providing the ultimate settlement asset.
  - On [[Distributed Ledger Technology]] platforms, settlement occurs when a transaction achieves irreversible confirmation under the network's [[Consensus Mechanism]], collapsing clearing and settlement into a single atomic step and eliminating the interstitial risk window entirely.
  - Why it matters:
    - Determines when legal title passes and risk is transferred
    - Drives capital requirements: unsettled trades consume counterparty credit limits
    - Settlement failures propagate through the system, creating [[Systemic Risk]]
    - The cost and latency of settlement influences market liquidity and access
    - Cross-border settlement inefficiencies are a major source of friction in [[Correspondent Banking]] and international trade finance

- ### Key Mechanisms
  - **Real-Time Gross Settlement (RTGS)**: Each payment settles individually and immediately in central bank money. Used by [[Real-Time Gross Settlement]] systems such as CHAPS (UK), Fedwire (US), and TARGET2 (EU). Eliminates credit risk between banks but demands high intraday liquidity.
  - **Deferred Net Settlement (DNS)**: Obligations across multiple counterparties are netted over a cycle (e.g. end of day) before settlement. Reduces liquidity needs but introduces systemic risk if a participant fails before settlement.
  - **Delivery Versus Payment (DvP)**: The simultaneous exchange of securities and funds such that delivery of one leg occurs if and only if the other also occurs. Core principle of [[Delivery Versus Payment]] frameworks enforced by CSDs. Eliminates principal risk.
  - **Netting**: [[Netting]] compresses gross bilateral or multilateral obligations into a single net position, dramatically reducing the value of funds that must move at settlement.
  - **Atomic Settlement**: [[Atomic Settlement]] on distributed ledgers uses cryptographic guarantees to ensure that both legs of an exchange complete atomically — either both succeed or both are rolled back — without requiring a central counterparty. Often implemented via [[Smart Contract]] logic or [[Hash Time-Locked Contract]] (HTLC) protocols.
  - **Settlement Finality**: [[Settlement Finality]] refers to the point at which a settlement becomes unconditional and irrevocable — a legally protected status in most jurisdictions, governed by the EU Settlement Finality Directive and equivalent national laws.
  - **Central Counterparty (CCP)**: A [[Central Counterparty Clearing House]] interposes itself between buyer and seller, becoming the buyer to every seller and the seller to every buyer. This concentrates and mutualises credit risk, simplifying settlement while creating a systemically important node.

- ### Applications and Use Cases
  - **Equity Markets**: National CSDs (e.g. DTCC in the US, Euroclear, Clearstream) settle equity trades in central bank or commercial bank money, with custody held in book-entry form. The US market moved to T+1 settlement in 2024.
  - **Fixed Income and Repo**: Government bond markets use DvP settlement via CSDs. Repo settlement is critical to overnight money market functioning and [[Liquidity]] management by banks.
  - **Foreign Exchange Settlement**: FX settlement is historically vulnerable to Herstatt risk due to time-zone differences. CLS Bank (Continuous Linked Settlement) operates a payment-versus-payment (PvP) mechanism covering major currency pairs, netting and settling net positions in central bank accounts.
  - **Blockchain and Tokenised Assets**: [[Distributed Ledger Technology]] platforms such as Ethereum, Solana, and permissioned networks (e.g. R3 Corda, Hyperledger Fabric) enable on-chain settlement of [[Tokenisation|tokenised]] assets. [[Smart Contract]] logic enforces DvP without a CSD intermediary.
  - **Central Bank Digital Currencies**: [[Central Bank Digital Currency]] (CBDC) projects target wholesale interbank settlement, with central banks exploring direct on-ledger settlement to eliminate commercial bank intermediation risk.
  - **Cross-Border Payments**: [[Cross-Border Settlement]] via [[Correspondent Banking]] is slow (T+3 to T+5), opaque, and costly. Projects such as mBridge (multi-CBDC platform), RippleNet, and ISO 20022-enabled messaging aim to reduce settlement latency and cost.
  - **Securities Tokenisation**: Tokenising traditional securities on distributed ledgers enables T+0 or near-instant settlement, potentially unlocking significant capital currently tied up in the settlement window.
  - **Trade Finance**: Documentary credits and supply-chain finance rely on settlement of payment obligations triggered by presentation of shipping documents, increasingly automated via [[Smart Contract]] platforms.

- ### Settlement Risk and Failure Modes
  - **Counterparty Default Risk**: The risk that a counterparty defaults between trade execution and settlement, leaving the surviving party exposed to replacement cost.
  - **Operational Failure**: Systems outages, reconciliation errors, or insufficient liquidity can cause settlement failure, triggering fail-buy-in mechanisms.
  - **Cross-Border Time-Zone Risk (Herstatt Risk)**: A bank settles one leg of an FX transaction in one jurisdiction before the other leg settles in a different time zone, leaving an intraday exposure.
  - **Liquidity Risk**: Deferred settlement systems require participants to fund positions that may be larger than their net obligations, straining [[Liquidity]].
  - **Contagion**: Settlement failures are contagious — a failed settlement may prevent the receiving party from settling its own downstream obligations, creating a cascade.

- ### Relationships
  - hasPart:: [[Settlement Finality]], [[Delivery Versus Payment]], [[Netting]]
  - partOf:: [[Financial Infrastructure Domain]], [[Post-Trade Processing]]
  - requires:: [[Clearing]], [[Counterparty Risk Management]], [[Liquidity]]
  - enables:: [[Atomic Settlement]], [[Cross-Border Settlement]], [[Securities Transfer]]
  - dependsOn:: [[Payment System]], [[Central Securities Depository]], [[Central Bank]]
  - implements:: [[Real-Time Gross Settlement]], [[Deferred Net Settlement]]
  - contrastsWith:: [[Clearing]], [[Trade Execution]]
  - bridgesTo:: [[Smart Contract]], [[Distributed Ledger Technology]], [[Central Bank Digital Currency]]
  - relatedTo:: [[Systemic Risk]], [[Correspondent Banking]], [[Tokenisation]]
  - sameAs:: [[Trade Settlement]], [[Payment Settlement]]

- ### Standards and Governance Context
  - **BIS CPMI Principles for Financial Market Infrastructures (PFMIs)**: The primary international standards framework for settlement systems, issued by the Bank for International Settlements Committee on Payments and Market Infrastructures and IOSCO. Covers governance, credit risk, liquidity risk, settlement finality, and default management for systemically important financial market infrastructures (SIFIs).
  - **EU Settlement Finality Directive (SFD, 98/26/EC)**: Establishes legal certainty for settlement orders entered into designated payment and securities settlement systems in EU member states, protecting them from insolvency proceedings.
  - **EU Central Securities Depositories Regulation (CSDR)**: Harmonises CSD rules in the EU, introduces mandatory buy-ins for settlement failures, and sets standards for settlement discipline.
  - **ISO 20022**: The global financial messaging standard for payment and securities settlement instructions, replacing legacy SWIFT MT formats. Adoption is required for RTGS and cross-border payment systems under central bank mandates.
  - **ISO 15022 / FIX Protocol**: Legacy securities messaging standards used in settlement instructions, being progressively replaced by ISO 20022.
  - **T+1 Compression**: The US SEC mandated T+1 settlement for equity securities from May 2024. The EU and UK are evaluating similar moves, with industry bodies coordinating via the T+1 Taskforce.
  - **CLS Bank / PvP Settlement**: CLS (Continuous Linked Settlement) is the global payment-versus-payment system for FX settlement, overseen by the Federal Reserve and a college of central banks, operating under the PFMIs.
  - **mBridge / Project Dunbar**: Central bank multi-CBDC projects targeting wholesale cross-border settlement in central bank money, coordinated through BIS Innovation Hub.

- ### Blockchain and Distributed Ledger Settlement
  - On public blockchains, "settlement" is synonymous with on-chain transaction finality. [[Consensus Mechanism]] design determines finality characteristics:
    - **Proof of Work**: Probabilistic finality — settlement risk diminishes with each additional block confirmation (Bitcoin convention: 6 blocks ≈ 60 minutes).
    - **Proof of Stake with BFT finality**: Deterministic finality within 1–2 epochs (e.g. Ethereum post-Merge, Tendermint-based chains). Settlement is final once the supermajority threshold is reached.
    - **DAG-based systems**: Some networks (e.g. Hedera Hashgraph) provide fast finality in seconds using asynchronous Byzantine fault tolerance.
  - [[Hash Time-Locked Contract]] (HTLC) and [[Payment Channel]] networks (e.g. Bitcoin Lightning Network) enable off-chain settlement with on-chain enforcement, trading latency for throughput.
  - [[Central Counterparty Clearing House]] functions may be partially replaced by [[Smart Contract]] escrow on DLT platforms, though systemic risk concentrations shift rather than disappear.

- ### Provenance
  - sources:: BIS CPMI Principles for Financial Market Infrastructures (2012, updated 2016); EU Settlement Finality Directive 98/26/EC; EU CSDR (909/2014); CLS Bank operational documentation; ISO 20022 standard (ISO TC68); DTCC T+1 transition documentation; Herstatt Risk literature (BIS Working Papers)
  - updated:: 2026-06-13

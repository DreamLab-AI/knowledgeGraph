public:: true

# Timelock
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:timelock",
  "@type": "Page",
  "vc:slug": "timelock",
  "title": "Timelock",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:timelock",
  "@type": "Class",
  "label": "Timelock",
  "definition": "A timelock is a cryptographic or smart-contract mechanism that prevents a transaction, function call, or asset transfer from executing until a specified block height or Unix timestamp has been reached. Timelocks enforce temporal constraints on blockchain operations, separating the proposal of an action from its execution to allow inspection, challenge, or cancellation during a mandatory delay window.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:smart-contract",
    "label": "Smart Contract"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:operation-queue",
        "label": "Operation Queue"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:dao-treasury",
        "label": "DAO Treasury"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:block-timestamp",
        "label": "Block Timestamp"
      },
      {
        "@id": "urn:ngm:class:access-control-module",
        "label": "Access Control Module"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-governance",
        "label": "Decentralized Governance"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:optimistic-governance",
        "label": "Optimistic Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "EVM Smart Contract"
      },
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Layer-2 Rollup"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:htlc",
        "label": "HTLC"
      },
      {
        "@id": "urn:ngm:class:vesting-schedule",
        "label": "Vesting Schedule"
      },
      {
        "@id": "urn:ngm:class:escrow-system",
        "label": "Escrow System"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:time-locked-contract",
      "label": "Time-Locked Contract"
    },
    {
      "@id": "urn:ngm:class:nlocktime",
      "label": "nLockTime"
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
  - A [[Smart Contract]] mechanism that enforces a mandatory time delay between an action being queued and its execution, enabling inspection periods, dispute windows, and time-sensitive cryptographic constructs such as [[HTLC]]s.

- ### Relationships
  - Timelocks are foundational to [[Decentralized Governance]] and [[On-Chain Governance]], where protocol upgrades must sit in a queue before taking effect. They interact with [[Vesting Schedule]]s to release tokens progressively, with [[Escrow System]]s to hold funds until conditions mature, and with [[HTLC]]s for atomic cross-chain swaps. [[Access Control Module]]s govern who may queue or cancel timelocked operations.

- ### Content
  - The timelock concept predates blockchain, appearing in cryptography literature as time-release encryption and in traditional finance as lock-up periods. Bitcoin's `nLockTime` field (enabled from genesis, 2009) and `OP_CHECKLOCKTIMEVERIFY` opcode (BIP 65, 2015) formalised block-height and timestamp-based locking at the protocol level. Ethereum's smart contract model allowed arbitrary timelock logic, and OpenZeppelin's `TimelockController` contract (introduced circa 2020) became a widely audited reference implementation used by dozens of DeFi protocols.
  - A timelock operates by maintaining a queue of pending operations, each identified by a hash of its target, calldata, value, and scheduled execution timestamp. The `schedule` function places an operation in the queue with a `minDelay` added to the current block timestamp. The `execute` function only succeeds once `block.timestamp >= operation.timestamp`. An `cancel` function allows authorised roles to remove operations before execution. The delay window is the period during which token holders, security researchers, or governance participants can scrutinise an impending change and, if necessary, exit the system or coordinate a veto.
  - Timelocks matter because on-chain protocols are immutable once deployed; an unreviewed upgrade could introduce exploits or rug mechanisms. By mandating a delay — often 24 hours to 14 days for major DeFi protocols — timelocks transform governance from a single-block surprise into a transparent, auditable process. They are used in DAO treasuries, protocol upgrade pipelines, token vesting contracts, and cross-chain atomic swaps. The 2022 Tornado Cash sanctions debate highlighted how timelocks also interact with legal and regulatory timelines.
  - As of 2024–2025, timelocks are considered mandatory security hygiene for any protocol managing significant value. EIP-6372 standardised clock modes for timelocks in governance tokens. Optimistic governance designs now layer timelocks with veto mechanisms so that a supermajority can accelerate or cancel delays. Multi-party timelocks with threshold signatures are emerging to distribute cancellation authority and reduce single-admin risk, while layer-2 rollups adopt timelocks for fraud-proof windows (the 7-day Arbitrum and Optimism challenge periods are a canonical example).

public:: true

# UTXO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0088f03f87629715253ec839e6d0257f7ce06e52cd2c2a1e777517843c70b7e3",
  "@type": "Page",
  "vc:slug": "utxo",
  "title": "UTXO",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:cardano",
      "vc:label": "Cardano"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "UTXO"
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
  "@id": "urn:ngm:class:utxo",
  "@type": "Class",
  "label": "UTXO",
  "definition": "UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:locking-script",
        "label": "Locking Script"
      },
      {
        "@id": "urn:ngm:class:transaction-input",
        "label": "Transaction Input"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-output",
        "label": "Transaction Output"
      },
      {
        "@id": "urn:ngm:class:unlocking-script",
        "label": "Unlocking Script"
      },
      {
        "@id": "urn:ngm:class:change-output",
        "label": "Change Output"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-ledger",
        "label": "Blockchain Ledger"
      },
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Parallel Transaction Validation"
      },
      {
        "@id": "urn:ngm:class:coin-selection",
        "label": "Coin Selection"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Accounting Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:script",
        "label": "Script Language"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy Technique"
      },
      {
        "@id": "urn:ngm:class:light-client-verification",
        "label": "Light Client Verification"
      },
      {
        "@id": "urn:ngm:class:stateless-validation",
        "label": "Stateless Validation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:account-model",
        "label": "Account Model"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum State Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "Extended UTXO Model"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cardano",
        "label": "Cardano"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:unspent-transaction-output",
      "label": "Unspent Transaction Output"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:utxo:17f95e3b95d2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0088f03f87629715253ec839e6d0257f7ce06e52cd2c2a1e777517843c70b7e3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cardano]]",
      "resolved": "urn:visionflow:linked:cardano",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.

- ### Semantic Classification
  - owl-class:: bc:UTXO
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Cardano]]
  - requires:: [[Cryptographic Hash Function]], [[Digital Signature]]
  - enables:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - In the UTXO model the global state is the set of all outputs that have been created but not yet spent. A wallet's balance is not stored directly; it is the sum of the unspent outputs that the wallet can unlock. Spending consumes whole outputs as inputs and produces new outputs, with any difference returned as change to the spender.
  - Each output carries a locking condition, often a script requiring a signature from a particular key, and an input must supply data that satisfies it. Because outputs are independent, transactions that touch disjoint sets of outputs can be validated in parallel, and the model avoids certain ordering issues present in account-based systems.
  - The UTXO approach originates with Bitcoin and is also used, in extended forms, by chains such as Cardano, whose EUTXO model attaches arbitrary data and scripts to outputs. It contrasts with the account and balance model of Ethereum, and the two designs imply different trade-offs in programmability, concurrency and privacy.

- ### Current Landscape (2026)
  - Bitcoin's UTXO set ballooned from ~80-90 million entries pre-2023 to roughly 173 million (peaking near 187 million in January 2025), occupying ~11 GB of chainstate on disk; Mempool Research found ~49% of UTXOs now hold under 1,000 sats and ~30% (over 51 million) are inscription-related dust worth only ~415 BTC in aggregate, turning UTXO-set bloat into a live decentralisation concern.
  - The Runes protocol (launched at the April 2024 halving) was deliberately engineered to be more UTXO-friendly than 2023-era BRC-20/Ordinals by encoding data in OP_RETURN outputs rather than minting millions of unspendable dust UTXOs; Bitcoin Core 29.0 (April 2025) added an "ephemeral dust" TRUC/CPFP policy, and the v30 branch merged an increased OP_RETURN data limit (~100 KB) in June 2025.
  - Node-scaling responses to set growth matured: Utreexo (Tadge Dryja's hash-based accumulator that compresses the whole set to under a kilobyte) reached draft BIPs and a beta utreexod implementation in 2025, complementing AssumeUTXO snapshot bootstrapping now shipping in Bitcoin Core.
  - Cardano's extended UTXO (eUTXO) programme advanced with the Ouroboros Leios roadmap (published June 2026), which adds UTXO sharding to distribute state maintenance, plus SNARK-based sublinear verification and Data Availability Sampling, aiming at horizontal scalability on consumer hardware; IOG's January 2025 "Six reasons why EUTXO wins" reasserted determinism and locality as the model's core advantages.
  - Fuel brought UTXO to Ethereum L2 scaling: the FuelVM-powered Ignition rollup went live on mainnet in October 2024 (benchmarking ~21,000 TPS per core via strict-access-list parallel execution), migrated to EigenDA in May 2025, and positioned itself as a sub-100ms "real-time" rollup with 6-51ms soft pre-confirmations.
  - Hybrid and privacy-oriented designs proliferated: Midnight adopted a dual architecture using shielded/unshielded UTXOs with a nullifier set at the ledger layer plus an account model for contracts (docs updated 2026), while 2024 academic work formalised "hybrid UTXO" (hUTXO), separating distributed contract state in UTXOs from an account-style contract balance to cut transaction size and enable parallel validation.
  - Open frontier as of 2026: no consensus-level cap on UTXO-set growth means dust-mitigation proposals (e.g. consensus-enforced pruning of sub-dust "non-monetary" outputs at halvings) remain contested; making smart-contract state on UTXO chains scale without contention, and reconciling the model's parallelism with account-model developer ergonomics, are still active research and engineering battlegrounds.

- ### References
  - 1. Mempool Research (2025). UTXO Set Report. https://research.mempool.space/utxo-set-report/
  - 2. Spark (2026). UTXO Set — Glossary. https://www.spark.money/glossary/utxo-set
  - 3. Cardano / IOG (2026). The Leios roadmap to solving the blockchain trilemma. https://cardano.org/news/2026-06-04-leios-roadmap-solving-blockchain-trilemma/
  - 4. IOHK (2025). Six reasons why EUTXO wins. https://iohk.io/en/blog/posts/2025/01/08/six-reasons-why-eutxo-wins/
  - 5. The Block (2024). Fuel Labs debuts 'Ignition' rollup network with focus on parallelisation, UTXO-based model. https://www.theblock.co/post/321365/fuel-labs-debuts-ignition-rollup-network-with-focus-on-parallellization-utxo-based-model
  - 6. Midnight Network (2026). UTXO model — Midnight Docs. https://docs.midnight.network/concepts/utxo

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

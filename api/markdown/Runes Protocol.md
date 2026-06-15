public:: true

# Runes Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:725ebe8351b2e6392117fe2e7d38acf90e0f2ea23893c6359f80efe71a602754",
  "@type": "Page",
  "vc:slug": "runes-protocol",
  "title": "Runes Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:fungible-token",
      "vc:label": "Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:token-standard",
      "vc:label": "Token Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Runes Protocol"
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
  "@id": "urn:ngm:class:runes-protocol",
  "@type": "Class",
  "label": "Runes Protocol",
  "definition": "Runes Protocol is a fungible token standard for the Bitcoin blockchain, introduced by Casey Rodarmor in 2024, that encodes token creation and transfer instructions directly into transaction outputs using the UTXO model. Unlike account-based token systems, Runes attaches a OP_RETURN-stored protocol message (a Runestone) to each transaction, assigning token balances to specific outputs so that ownership is tracked through spendable transaction outputs rather than a separate ledger. The protocol is designed to be more on-chain efficient than earlier Bitcoin-native token conventions such as BRC-20 and Ordinals-based token schemes, minimising UTXO proliferation while remaining fully compatible with the base-layer Bitcoin settlement mechanism. It reached significant ecosystem traction following its mainnet launch at the Bitcoin halving block in April 2024.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token-standard",
      "label": "Token Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:bitcoin-transaction",
        "label": "Bitcoin Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:minting",
        "label": "Token Minting"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:brc-20",
        "label": "BRC-20"
      },
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals Protocol"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:runes",
      "label": "Runes"
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
  "@id": "urn:visionflow:annotation:link-resolutions:runes-protocol:0410f8c75f98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:725ebe8351b2e6392117fe2e7d38acf90e0f2ea23893c6359f80efe71a602754"
  },
  "vc:resolutions": [
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:linked:fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:linked:token-standard",
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
  - Runes Protocol is a [[Token Standard]] for [[Bitcoin Proof-of-Work Protocol]] that enables [[Fungible Token]] issuance and transfer natively on the Bitcoin base layer. It encodes protocol messages called Runestones inside [[OP_RETURN]] outputs of [[Bitcoin Transaction]]s, assigning token balances to [[UTXO]] outputs so that ownership tracks through the existing unspent output model rather than a separate account ledger. Designed by Casey Rodarmor (creator of [[Ordinals Protocol]]), it launched at the Bitcoin halving block in April 2024 as a more UTXO-efficient alternative to the [[BRC-20]] fungible token convention. The protocol preserves Bitcoin's base-layer settlement security while enabling [[Tokenisation]] of arbitrary fungible assets.

- ### Overview
  - Runes Protocol addresses a long-standing gap in the Bitcoin ecosystem: a well-designed, native [[Fungible Token]] standard that does not require a separate chain, wrapped assets, or a state model foreign to Bitcoin's architecture.
  - **Motivation**: Earlier approaches such as [[Colored Coins]], [[Counterparty]], and [[BRC-20]] suffered from UTXO bloat, reliance on third-party indexers, or opaque off-chain state machines. Runes aimed to fix these issues with a clean, minimal on-chain encoding.
  - **Launch**: Mainnet activation occurred at block 840,000 (the fourth Bitcoin halving, April 2024), giving the protocol a clear, unambiguous genesis point that is verifiable by any [[Bitcoin Script]] evaluator.
  - **Adoption**: Within weeks of launch, Runes accounted for a substantial share of Bitcoin transaction volume as speculators etched (created) thousands of tokens. This validated the protocol's on-chain mechanics while also highlighting fee-market pressures on the base layer.
  - **Relationship to Ordinals**: The same team and community that developed [[Ordinals Protocol]] (for non-fungible inscriptions) built Runes. Both share the [[Bitcoin Proof-of-Work Protocol]] security model and UTXO-centric design philosophy, but serve different asset classes ([[Non-Fungible Token]] vs [[Fungible Token]]).

- ### Key Mechanisms
  - #### Runestone
    - The core data structure is the **Runestone**, a protocol message encoded in an [[OP_RETURN]] output of a [[Bitcoin Transaction]].
    - A Runestone can carry one or more of the following operations: Etch (create a new rune), Mint (claim open-edition tokens), Transfer (move balances between outputs), and Burn (destroy tokens).
    - Nodes that do not understand the Runes protocol simply ignore the [[OP_RETURN]] data — it is consensus-safe and does not alter [[Bitcoin Script]] validation.
  - #### UTXO Balance Model
    - Token balances are assigned to [[UTXO]] outputs. When a transaction spends a UTXO carrying a Rune balance, the Runestone in that transaction specifies how the balance is redistributed to the new outputs.
    - This aligns with [[Blockchain Transaction]] atomicity: balances can only move if the spending transaction is valid and confirmed on the [[Bitcoin Proof-of-Work Protocol]] chain.
    - Unallocated balances (not explicitly assigned by the Runestone) default to the first non-[[OP_RETURN]] output, preventing accidental loss.
  - #### Etching (Token Creation)
    - Creating a new Rune (called **etching**) requires embedding a Runestone that specifies: the rune's unique name (a sequence of capital letters), divisibility (decimal places), supply cap, minting terms (open or closed), and optional metadata such as a symbol character.
    - Names are globally unique and encoded as integers in the protocol to save space. Shorter names were initially reserved for a 4-year unlock schedule to reward early adopters who wait.
  - #### Minting
    - Runes can be **open-mint** (anyone can mint up to a cap) or **pre-minted** (fixed supply at etch). Open-mint allows permissionless [[Token Minting]] within the parameters set by the etcher.
    - Each mint operation is a [[Bitcoin Transaction]] carrying a Runestone that references the rune by ID (block:tx index).
  - #### Indexer Architecture
    - Because Bitcoin nodes do not natively interpret Runes, wallets and explorers rely on **Runes indexers** — software that replays the blockchain, interpreting every Runestone to maintain a current balance state.
    - The reference implementation is `ord` (the same binary used for [[Ordinals Protocol]]), which implements the canonical indexing rules.
    - Indexers are off-chain but their output is deterministic: any conforming indexer reading the same blockchain data produces identical balances, making [[Tokenisation]] trust-minimised.

- ### Applications and Use Cases
  - **Speculative token issuance**: Community and project tokens etched on Bitcoin, leveraging Bitcoin's security and global liquidity for fungible asset issuance.
  - **Protocol governance tokens**: Projects can issue governance tokens that are secured by [[Proof of Work]] settlement rather than delegated [[Smart Contract]] platforms, reducing counterparty risk.
  - **Bridging to DeFi**: Rune-backed assets can be wrapped and bridged into [[Decentralised Finance]] ecosystems (e.g., wrapped via custodians or trust-minimised bridges), giving Bitcoin-native tokens access to [[Decentralised Exchange]] liquidity.
  - **Reward and loyalty tokens**: Applications issuing utility or reward tokens benefit from using a [[Bitcoin Proof-of-Work Protocol]]-anchored standard rather than a permissioned chain.
  - **Digital collectible ecosystems**: Projects that already issue non-fungible inscriptions via [[Ordinals Protocol]] can pair them with Runes-based fungible companion tokens to create richer [[Digital Asset]] ecosystems.
  - **Fee market signal**: High Runes minting activity creates significant transaction fee revenue for Bitcoin miners, contributing to the long-term fee-market sustainability after block reward reductions.

- ### Relationships
  - implements:: [[Token Standard]]
  - requires:: [[UTXO]]
  - requires:: [[OP_RETURN]]
  - requires:: [[Bitcoin Transaction]]
  - enables:: [[Fungible Token]]
  - enables:: [[Token Minting]]
  - enables:: [[Decentralised Exchange]]
  - uses:: [[Bitcoin Proof-of-Work Protocol]]
  - uses:: [[Blockchain Transaction]]
  - contrastsWith:: [[BRC-20]]
  - contrastsWith:: [[Ordinals Protocol]]
  - contrastsWith:: [[ERC-20]]
  - contrastsWith:: [[Colored Coins]]
  - relatedTo:: [[Bitcoin Script]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Non-Fungible Token]]
  - relatedTo:: [[Tokenisation]]
  - relatedTo:: [[Proof of Work]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Smart Contract]]
  - sameAs:: [[Runes]]

- ### Standards and Context
  - Runes Protocol is not governed by a formal standards body. The canonical specification is maintained by Casey Rodarmor and the `ord` project on GitHub, with protocol changes released via the `ord` binary versioning.
  - The protocol is self-enforcing through indexer consensus: any indexer that deviates from the canonical rules will compute different balances and become incompatible with the rest of the ecosystem. This creates informal but strong protocol stability incentives.
  - Comparison with [[ERC-20]] on [[Ethereum]]: ERC-20 relies on [[Smart Contract]] execution within the EVM; Runes rely on [[Bitcoin Script]]'s UTXO model and off-chain indexers. Runes are simpler (no Turing-complete execution) but less programmable.
  - Comparison with [[BRC-20]]: BRC-20 (also a Bitcoin fungible token convention) uses Ordinals inscriptions to store JSON state transitions, requiring more on-chain data per operation and more complex indexing. Runes are designed to be lighter and more UTXO-compatible.
  - The broader regulatory context of [[Digital Asset]] classification (e.g., as securities or commodities) applies to Runes-issued tokens in the same way as other [[Blockchain Transaction]]-native tokens, with jurisdiction-specific outcomes.

- ### Provenance
  - sources:: Casey Rodarmor, Runes specification in `ord` repository; Bitcoin Optech coverage of Runes launch (April 2024)
  - updated:: 2026-06-13

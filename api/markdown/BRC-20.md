public:: true

# BRC-20
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dfa17370644ba07de370f8094354a44b73313895fb65d919d4bb35079d0232ad",
  "@type": "Page",
  "vc:slug": "brc-20",
  "title": "BRC-20",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ordinals",
      "vc:label": "Ordinals"
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
      "vc:value": "BRC-20"
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
  "@id": "urn:ngm:class:brc-20",
  "@type": "Class",
  "label": "BRC-20",
  "definition": "BRC-20 is an experimental fungible token standard on the Bitcoin blockchain that encodes deploy, mint, and transfer operations as JSON-formatted Ordinals inscriptions written onto individual satoshis. Token balances are not enforced by Bitcoin consensus rules but are instead computed off-chain by indexers that parse inscription data in sequential ordinal order. Proposed by the pseudonymous developer @domo in March 2023, BRC-20 was the first widely adopted approach to creating transferable fungible tokens natively on Bitcoin without requiring a sidechain or layer-2 network. Its simplicity and permissionless nature drove rapid experimentation but also exposed limitations around scalability, indexer consensus, and on-chain fee pressure.",
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
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:segwit",
        "label": "SegWit"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
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
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON"
      },
      {
        "@id": "urn:ngm:class:satoshi",
        "label": "Satoshi"
      },
      {
        "@id": "urn:ngm:class:inscription",
        "label": "Inscription"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ordinals-indexer",
        "label": "Ordinals Indexer"
      },
      {
        "@id": "urn:ngm:class:bitcoin-node",
        "label": "Bitcoin Node"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:spl-token",
        "label": "SPL Token"
      },
      {
        "@id": "urn:ngm:class:runes-protocol",
        "label": "Runes Protocol"
      },
      {
        "@id": "urn:ngm:class:src-20",
        "label": "SRC-20"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer-2 Protocol"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenisation",
        "label": "Tokenisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-ecosystem",
        "label": "Bitcoin Ecosystem"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-request-for-comment-20",
      "label": "Bitcoin Request for Comment 20"
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
  "@id": "urn:visionflow:annotation:link-resolutions:brc-20:6c6fd692e3cf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dfa17370644ba07de370f8094354a44b73313895fb65d919d4bb35079d0232ad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ordinals]]",
      "resolved": "urn:visionflow:linked:ordinals",
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
  - BRC-20 is an experimental [[Token Standard]] on the [[Bitcoin Proof-of-Work Protocol]] that encodes [[Fungible Token]] operations — deploy, mint, and transfer — as small JSON payloads inscribed onto individual [[Satoshi]] units via the [[Ordinals]] protocol. Unlike [[ERC-20]] tokens on [[Ethereum]], BRC-20 tokens carry no on-chain enforcement logic; their state is computed entirely by off-chain [[Ordinals Indexer]] software that reads inscriptions in ordinal sequence. The standard was proposed pseudonymously by @domo in March 2023 and quickly became a proving ground for [[Tokenisation]] on Bitcoin, demonstrating both the creative potential and the technical constraints of treating the base layer as a data availability layer for [[Digital Asset]] issuance.

- ### Overview
  - BRC-20 emerged from the same conceptual movement as [[Ordinals]], which itself exploited the enlarged witness-data capacity enabled by [[Taproot]] (and earlier [[SegWit]]) to inscribe arbitrary binary data onto satoshis without modifying Bitcoin's consensus rules.
  - The core insight is that Bitcoin's [[UTXO Model]] can track satoshi ownership precisely enough that JSON text inscribed at inscription-time can serve as an immutable record of token intent. An indexer reconstructs the ledger of each ticker by replaying all valid inscriptions in order.
  - BRC-20 defines three JSON operation types:
    - **Deploy** — establishes a ticker symbol, a maximum supply cap, and an optional per-mint limit.
    - **Mint** — claims a quantity of tokens up to the per-mint limit, valid only while total supply remains under the cap.
    - **Transfer** — two-step: first inscribe a transfer payload claiming a balance, then send the inscription UTXO to the recipient.
  - The two-step transfer is a notable design constraint: unlike [[ERC-20]]'s atomic `transfer()` call, a BRC-20 transfer requires two separate Bitcoin transactions, increasing fee costs and complexity.
  - The absence of native smart-contract execution means there is no composability with on-chain logic; all balance computation happens in [[Ordinals Indexer]] software, creating a dependency on indexer consensus for token validity.

- ### Key Mechanisms
  - **Inscription encoding** — JSON payloads are embedded in the witness field of [[Taproot]] spending transactions. The [[Ordinals]] numbering scheme assigns a globally unique ordinal number to each [[Satoshi]], allowing inscriptions to be tied to specific satoshis and transferred with them.
  - **Ticker namespace** — each BRC-20 token is identified by a 4-character (later relaxed) ticker string. The first valid deploy inscription for a ticker claims it; subsequent deploys for the same ticker are ignored by compliant indexers.
  - **Indexer role** — all balance accounting is off-chain. Operators run indexers (e.g., ord, hiro, unisat) that scan the [[Bitcoin Node]] chain data and maintain a ticker-to-address balance map. Divergent indexer implementations can produce different balance states, raising questions about canonical truth.
  - **Fee market impact** — the BRC-20 mint frenzy in 2023 introduced a new class of low-value transactions competing for block space, significantly elevating [[Mempool]] congestion and transaction fees on the [[Bitcoin Proof-of-Work Protocol]] base layer.
  - **[[Bitcoin Script]] neutrality** — BRC-20 exploits existing script primitives without introducing new opcodes, preserving Bitcoin's conservative upgrade philosophy. This is both a strength (no consensus change required) and a weakness (no on-chain enforcement).
  - **Supply enforcement gap** — because Bitcoin nodes do not validate JSON content, a miner could theoretically include an over-cap mint inscription; enforcement is purely social and reliant on indexers rejecting invalid state transitions.

- ### Applications and Use Cases
  - **Speculative token launches** — the permissionless deploy mechanism allowed anyone to create and distribute tokens at low technical cost, driving thousands of ticker launches in 2023, many with high speculative trading volumes.
  - **Community and meme tokens** — tokens like ORDI and SATS became the first significant BRC-20 assets, accumulating listings on centralised exchanges and driving a wave of [[Digital Asset]] experimentation on Bitcoin.
  - **Proof-of-concept for Bitcoin DeFi** — BRC-20 activity stimulated broader interest in [[Decentralised Finance]] on Bitcoin, motivating development of [[Layer-2 Protocol]] solutions (e.g., [[Lightning Network]] extensions, BitVM) that could offer more expressive programmability.
  - **Cross-chain bridges** — wrapped BRC-20 tokens were subsequently bridged to EVM-compatible chains, enabling [[Decentralised Exchange]] trading and liquidity provisioning via [[ERC-20]] wrappers.
  - **Indexer and tooling ecosystem** — the standard catalysed development of wallets, block explorers, and marketplace platforms (e.g., UniSat, OKX Ordinals) specifically designed to handle inscription-based assets.
  - **Research into Bitcoin extensibility** — BRC-20's limitations — notably the two-step transfer and indexer dependence — motivated design of successor standards such as [[Runes Protocol]] (by Ordinals creator Casey Rodarmor) intended to be more efficient and unambiguous.

- ### Relationships
  - subClassOf:: [[Token Standard]]
  - requires:: [[Ordinals]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Taproot]]
  - requires:: [[SegWit]]
  - enables:: [[Fungible Token]]
  - enables:: [[Token Minting]]
  - enables:: [[Decentralised Exchange]]
  - uses:: [[JSON]]
  - uses:: [[Satoshi]]
  - uses:: [[Inscription]]
  - uses:: [[UTXO Model]]
  - dependsOn:: [[Ordinals Indexer]]
  - dependsOn:: [[Bitcoin Node]]
  - contrastsWith:: [[ERC-20]]
  - contrastsWith:: [[SPL Token]]
  - contrastsWith:: [[Runes Protocol]]
  - contrastsWith:: [[SRC-20]]
  - relatedTo:: [[Non-Fungible Token]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Layer-2 Protocol]]
  - relatedTo:: [[Mempool]]
  - relatedTo:: [[Bitcoin Script]]
  - bridges-to:: [[Decentralised Finance]]
  - bridges-to:: [[Tokenisation]]
  - partOf:: [[Bitcoin Ecosystem]]

- ### Technical Constraints and Criticisms
  - **No on-chain enforcement** — supply caps and balance rules exist only in indexer software, not in [[Bitcoin Script]] or consensus logic, making BRC-20 token validity a social rather than cryptographic guarantee.
  - **Two-step transfer cost** — transferring tokens requires one inscription transaction and one send transaction, doubling the minimum fee overhead compared to a simple Bitcoin payment.
  - **Indexer fragmentation** — multiple competing indexer implementations with subtle differences in how they handle edge cases (out-of-order inscriptions, double-spend attempts, invalid JSON) lead to balance discrepancies across platforms.
  - **Scalability** — the mint mechanism encourages many small transactions, which competes with ordinary Bitcoin payments for block space and raises fees disproportionately during popular token launches.
  - **Successor standards** — [[Runes Protocol]] (activated at the April 2024 Bitcoin halving) was designed by Casey Rodarmor to supersede BRC-20 with a cleaner UTXO-native approach that avoids ordinal theory entirely, reducing indexer complexity and on-chain footprint.
  - **Ecosystem fragmentation** — the existence of competing inscription-based token standards (BRC-20, [[SRC-20]], Runes, Atomicals) creates tooling silos and dilutes developer attention.

- ### Standards and Context
  - BRC-20 is an informal community standard; it has no formal specification body or governance structure analogous to the [[Ethereum]] Improvement Proposal process.
  - The original specification was a blog post by @domo; subsequent iterations were managed collaboratively by community members via repositories and Discord coordination.
  - Bitcoin's conservative upgrade philosophy means BRC-20 could only exist because it required no changes to Bitcoin's consensus rules — it is entirely parasitic on existing data-availability mechanisms.
  - The [[Taproot]] upgrade (BIP 340–342, activated November 2021) was the prerequisite that made large witness-data inscriptions economically feasible by discounting witness bytes in fee calculation.
  - Industry participants debated whether inscription-based tokens represent legitimate use of Bitcoin's block space or unnecessary pollution of the [[UTXO Model]] set — a debate that remains unresolved as of 2026.
  - From a regulatory standpoint, BRC-20 tokens have been considered [[Digital Asset]] securities questions in several jurisdictions, though no definitive regulatory ruling specific to BRC-20 had emerged by early 2026.

- ### Provenance
  - sources:: @domo original BRC-20 specification (March 2023); community documentation at GitHub; Ordinals documentation; Casey Rodarmor's Runes design rationale
  - updated:: 2026-06-13

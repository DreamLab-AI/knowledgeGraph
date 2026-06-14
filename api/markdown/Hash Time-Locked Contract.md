public:: true
alias:: Hash Time Locked Contract

# Hash Time-Locked Contract
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hash-time-locked-contract",
  "@type": "Page",
  "vc:slug": "hash-time-locked-contract",
  "title": "Hash Time-Locked Contract",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hash-time-locked-contract",
  "@type": "Class",
  "label": "Hash Time-Locked Contract",
  "definition": "A Hash Time-Locked Contract (HTLC) is a type of smart contract that conditionally releases funds to a recipient only if they present a valid cryptographic preimage satisfying a specified hash condition within a defined time window; if the condition remains unmet before the timeout expires, the funds automatically revert to the sender. HTLCs combine two complementary mechanisms—a hashlock, which binds settlement to knowledge of a secret, and a timelock, which enforces a bounded settlement window—to achieve trustless atomicity across one or more blockchain ledgers. They are foundational to payment channel networks such as the Lightning Network and to cross-chain atomic swap protocols, enabling conditional payment routing without custodial intermediaries or mutual trust. As a composable on-chain primitive, HTLCs underpin a wide range of decentralised finance and interoperability constructs.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "sameAs": [
    {"@id": "urn:ngm:class:htlc", "label": "HTLC"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:timelock", "label": "Timelock"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"},
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"},
      {"@id": "urn:ngm:class:micropayments", "label": "Micropayments"},
      {"@id": "urn:ngm:class:payment-channel", "label": "Payment Channel"},
      {"@id": "urn:ngm:class:trustless-transaction", "label": "Trustless Transaction"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"},
      {"@id": "urn:ngm:class:conditional-payment", "label": "Conditional Payment"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:script", "label": "Script"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:point-time-locked-contract", "label": "Point Time-Locked Contract"},
      {"@id": "urn:ngm:class:custodial-exchange", "label": "Custodial Exchange"},
      {"@id": "urn:ngm:class:trusted-third-party", "label": "Trusted Third Party"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:adaptor-signature", "label": "Adaptor Signature"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A Hash Time-Locked Contract (HTLC) is a [[Smart Contract]] primitive that binds the release of funds to two simultaneous conditions: a [[Cryptographic Hash Function]] hashlock (the recipient must reveal a secret preimage whose hash matches a committed value) and a [[Timelock]] (the transaction must complete within a bounded window). First deployed on the [[Bitcoin]] network and subsequently generalised across [[Ethereum]] and other programmable ledgers, HTLCs are the core mechanism enabling trustless [[Atomic Swap]] transactions between counterparties who do not trust each other. They form the routing backbone of the [[Lightning Network]] and are a foundational primitive in [[DeFi]] protocol design and [[Cross-Chain Interoperability]] architectures.

- ### Overview
  - HTLCs solve a classical coordination problem in distributed ledger systems: how to exchange value between two parties—potentially on independent blockchains—without requiring either party to trust the other or to use a custodial intermediary. The solution combines two independently well-understood mechanisms into a single programmable condition.
  - **Why HTLCs matter**
    - They enable atomicity: either all legs of a multi-party or multi-chain transfer complete, or none do, eliminating partial-settlement risk.
    - They are permissionless: any two parties with compatible scripting capabilities can establish an HTLC without seeking approval from a central authority.
    - They are non-custodial: at no point during the protocol does either party surrender unilateral control of their funds to the other or to an intermediary.
    - They are composable: HTLCs can be chained across multiple hops to route payments through networks of participants who may be unknown to each other.
  - The protocol was described informally as early as 2012–2013 in Bitcoin developer forums and was formally implemented in the Bitcoin scripting system using `OP_HASH160`, `OP_CHECKLOCKTIMEVERIFY`, and `OP_CHECKSEQUENCEVERIFY` opcodes. The [[Lightning Network]] white paper (Poon & Dryja, 2016) codified HTLCs as the central routing mechanism for bidirectional payment channels.

- ### Key Components
  - **Hashlock**
    - The sender commits to a hash value H = Hash(R), where R is a secret preimage known initially only to the initiating party.
    - Funds are locked such that the recipient can only claim them by presenting R in a spending transaction, which is then verifiable on-chain.
    - Any [[Cryptographic Hash Function]] with preimage resistance may serve this role; [[SHA-256]] is standard on Bitcoin and the Lightning Network.
  - **Timelock**
    - A deadline encoded in the contract after which the sender may reclaim the locked funds if the preimage has not been presented.
    - Two timelock variants are used in practice:
      - *Absolute timelocks* (`OP_CHECKLOCKTIMEVERIFY` / `CLTV` in Bitcoin; block height or Unix timestamp) — funds cannot be claimed before a fixed point in time.
      - *Relative timelocks* (`OP_CHECKSEQUENCEVERIFY` / `CSV`) — funds cannot be claimed until a specified number of blocks after the funding transaction is confirmed.
    - Timelocks in chained HTLCs must be set with decreasing durations along the routing path to ensure intermediate nodes can safely reclaim funds if downstream hops fail.
  - **Preimage revelation**
    - The secret R (the preimage) acts as proof of payment; its appearance on-chain confirms successful settlement.
    - In the [[Lightning Network]], R is typically generated by the ultimate payee (Carol) and its hash H is included in the payment invoice ([[BOLT-11]] invoice format).
  - **Scripting layer**
    - On [[Bitcoin]], HTLCs are implemented in Bitcoin Script as a branching redeem script with two spending paths: (1) hashlock path, claimable by the recipient with R within the timelock window; (2) refund path, claimable by the sender after the timelock expires.
    - On [[Ethereum]], HTLCs are implemented as [[Solidity]] contracts with equivalent logic in EVM bytecode, often using the `keccak256` hash function.

- ### Mechanisms
  - #### Two-Party Atomic Swap (cross-chain)
    - Party A wishes to exchange Asset X (on Chain 1) for Asset Y (on Chain 2) with Party B.
    - A generates a random secret R, computes H = SHA-256(R), and locks Asset X on Chain 1 in an HTLC requiring H and a timelock T1.
    - B, observing H on Chain 1, locks Asset Y on Chain 2 in an HTLC requiring the same H and a strictly shorter timelock T2 < T1.
    - A reveals R on Chain 2 to claim Asset Y. B observes R on Chain 2 and uses it to claim Asset X on Chain 1 before T1.
    - If either party abandons the protocol, both timelocks expire and each party reclaims their original funds — no loss for the honest party.
  - #### Payment Routing (Lightning Network)
    - Alice wants to pay Carol via routing node Bob.
    - Carol generates R and sends invoice hash H to Alice.
    - Alice creates an HTLC to Bob (funds locked to H, timelock T).
    - Bob creates a corresponding HTLC to Carol (same H, timelock T − Δ).
    - Carol reveals R to Bob to claim her payment; Bob uses R to claim from Alice.
    - Routing is extended across arbitrarily many hops; no intermediate node can steal funds because they receive R only after forwarding it downstream.
  - #### Griefing and capital lock-up
    - A known limitation is that an adversarial or unresponsive node can lock up capital in HTLCs without completing the payment (a "griefing attack"), incurring opportunity cost on honest participants without financial loss to the attacker.
    - Solutions such as upfront fees and reputation-based routing partially mitigate this.

- ### Applications
  - **Lightning Network payment routing** — HTLCs are the primary mechanism by which [[Bitcoin]] payments are routed across multi-hop payment channels in the Lightning Network, enabling near-instant [[Micropayments]] with minimal on-chain footprint.
  - **Cross-chain atomic swaps** — Trustless, non-custodial exchange of assets between independent blockchains (e.g. Bitcoin↔Litecoin, Bitcoin↔Ethereum) without requiring a centralised exchange. Demonstrated in practice as early as 2017 between Bitcoin and Litecoin.
  - **Decentralised exchanges (DEX)** — HTLCs underpin order-matching protocols that allow trustless peer-to-peer trading of cryptocurrencies, contributing to the [[DeFi]] ecosystem.
  - **Submarine swaps** — A technique using HTLCs to move funds between on-chain Bitcoin and Lightning Network balances without custodial intermediaries, enabling channel rebalancing and on-chain-to-Lightning conversions.
  - **Watchtower services** — Third-party services that monitor the blockchain on behalf of offline Lightning Network participants to ensure HTLC timelocks are enforced correctly, compensating for the monitoring requirement.
  - **Payment channel networks beyond Bitcoin** — The HTLC pattern has been adapted for [[Ethereum]], [[Stellar]], [[Ripple]] (ILP), and other programmable ledgers, enabling multi-hop routing across heterogeneous networks.
  - **Interledger Protocol (ILP)** — The [[Interledger Protocol]] uses a connector-based routing architecture that closely mirrors the HTLC payment-routing model, generalising it to arbitrary asset types across any ledger.

- ### Relationships
  - requires:: [[Cryptographic Hash Function]]
  - requires:: [[Timelock]]
  - requires:: [[Digital Signature]]
  - requires:: [[Blockchain]]
  - enables:: [[Lightning Network]]
  - enables:: [[Atomic Swap]]
  - enables:: [[Cross-Chain Interoperability]]
  - enables:: [[Micropayments]]
  - enables:: [[Payment Channel]]
  - enables:: [[Trustless Transaction]]
  - implements:: [[Atomic Swap]]
  - implements:: [[Conditional Payment]]
  - uses:: [[SHA-256]]
  - uses:: [[Script]]
  - uses:: [[Public-Key Cryptography]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Blockchain Transaction]]
  - contrastsWith:: [[Point Time-Locked Contract]]
  - contrastsWith:: [[Custodial Exchange]]
  - contrastsWith:: [[Trusted Third Party]]
  - relatedTo:: [[Cross-Chain Bridge]]
  - relatedTo:: [[Payment System]]
  - relatedTo:: [[DeFi]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Adaptor Signature]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Cryptography]]

- ### Privacy Limitations and PTLCs
  - A significant privacy weakness of HTLCs is the shared hash value H across all hops in a routed payment. Because H is identical at every intermediate node, any two colluding nodes can confirm they are part of the same payment path, correlating sender and receiver.
  - **Point Time-Locked Contracts (PTLCs)** address this by replacing the hash preimage with an elliptic-curve adaptor signature: each hop uses a distinct "point" derived from a shared scalar, making cross-hop correlation computationally infeasible without knowledge of the payment secret.
  - PTLCs require [[Schnorr Signature]] support (available on Bitcoin after Taproot activation in 2021) and are under active development for the Lightning Network as a privacy upgrade.
  - [[Zero-Knowledge Proof]] techniques and [[Adaptor Signature]] constructions are complementary research directions aimed at further improving HTLC privacy and reducing on-chain footprint.

- ### Standards and Context
  - **BOLT specifications** — The [[Lightning Network]] Basis of Lightning Technology (BOLT) specifications, particularly BOLT-02 (Channel Establishment), BOLT-03 (Bitcoin Transaction and Script Formats), and BOLT-11 (Invoice Protocol), codify the precise HTLC construction used in production Lightning implementations.
  - **BIP-65** (`OP_CHECKLOCKTIMEVERIFY`) and **BIP-112** (`OP_CHECKSEQUENCEVERIFY`) — [[Bitcoin Improvement Proposal]]s that introduced the absolute and relative timelock opcodes that make HTLCs safe and practical on Bitcoin.
  - **ERC proposals** — Various Ethereum community proposals have standardised HTLC interfaces at the smart contract level to enable interoperability between DeFi protocols.
  - **Interledger Protocol (ILP)** — W3C community group specification that generalises HTLC-style conditional transfers across arbitrary ledger types, abstracting over the specific hash and timeout mechanisms.
  - The HTLC pattern is now considered an established primitive in blockchain protocol design, referenced in academic literature on payment channel networks, cross-chain protocols, and cryptographic protocol design.

- ### Provenance
  - sources:: Lightning Network white paper (Poon & Dryja, 2016); Bitcoin BIP-65 and BIP-112; BOLT-02, BOLT-03, BOLT-11 specifications; academic literature on payment channel networks and atomic swaps
  - updated:: 2026-06-13

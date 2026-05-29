public:: true

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
  "definition": "A Hash Time-Locked Contract (HTLC) is a type of smart contract that conditionally transfers funds to a recipient only if they can present a cryptographic preimage satisfying a specified hash condition within a defined time window; if the condition is unmet before the timeout, the funds revert to the sender. HTLCs are foundational to trustless cross-chain atomic swaps and payment channel networks such as the Lightning Network, enabling conditional payment routing without requiring both parties to trust each other or a custodial intermediary. The hashlock ensures atomicity—either both legs of a swap complete or neither does—whilst the timelock enforces a bounded settlement window. HTLCs are a primitive from which more complex decentralised finance protocols are constructed.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"},
      {"@id": "urn:ngm:class:micropayments", "label": "Micropayments"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Hash Time-Locked Contract is a [[Smart Contract]] primitive that combines a [[Cryptographic Hash Function]] hashlock with a time-bound unlock condition, enabling trustless [[Atomic Swap]] transactions and forming the backbone of [[Lightning Network]] payment routing.

- ### Relationships
  - HTLCs require a [[Cryptographic Hash Function]] to generate the hashlock and are closely coupled with [[Atomic Swap]] semantics that guarantee all-or-nothing settlement. They enable the [[Lightning Network]]'s off-chain payment routing, support [[Cross-Chain Interoperability]] by coordinating swaps across independent ledgers, and make [[Micropayments]] economically viable by reducing on-chain fees. They relate to [[Cross-Chain Bridge]] infrastructure, are part of the [[Payment System]] design space, and are a foundational primitive in [[DeFi]] protocol construction.

- ### Content
  - The Hash Time-Locked Contract solves a fundamental coordination problem in distributed ledger systems: how to exchange value between two parties—potentially on different blockchains—without requiring either party to trust the other or to reveal a secret prematurely. The protocol works in two phases. First, Party A locks funds on Chain 1 using a hash H of a secret preimage R that only A knows. Party B, seeing H, locks corresponding funds on Chain 2 under the same hash condition. When A claims the funds on Chain 2 by revealing R, B learns R from the public transaction and uses it to claim the funds on Chain 1. The time-lock ensures that if either party abandons the exchange, the other can reclaim their funds after the timeout.

  - The Lightning Network uses HTLCs as its routing primitive. When Alice wants to pay Carol via an intermediate node Bob, the payment is structured as a sequence of HTLCs: Alice locks funds to Bob on the condition that Bob can present the preimage R; Bob simultaneously locks funds to Carol on the same condition. Carol reveals R to claim from Bob; Bob uses R to claim from Alice. This chain of conditional payments allows value to flow across multiple hops without any intermediate node being able to steal funds—they can only claim their routing fee once they successfully pass the secret along.

  - Cross-chain atomic swaps extend this principle across different blockchains. A user wishing to exchange Bitcoin for Ether without a centralised exchange can construct an HTLC on both the Bitcoin and Ethereum networks with a shared hashlock. The protocol guarantees that either both legs complete or both time out, eliminating the risk of one party receiving assets whilst the other does not. This trustless interoperability is a key building block for decentralised exchange and [[Cross-Chain Bridge]] architectures.

  - Limitations of the HTLC design include the need for compatible scripting capabilities on both blockchains, the requirement for participants to monitor the chain during the time-lock window to detect and respond to a breach, and the exposure of payment routing information through the shared hash value. Research into point time-locked contracts (PTLCs) using adaptor signatures addresses the privacy limitation by replacing the shared hash with a shared elliptic-curve point, preventing correlation of payments across hops.

public:: true
alias:: payment-channel

# Payment Channel
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-channel",
  "@type": "Page",
  "vc:slug": "payment-channel",
  "title": "Payment Channel",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-channel",
  "@type": "Class",
  "label": "Payment Channel",
  "definition": "A payment channel is a cryptographic construct that allows two or more parties to conduct multiple off-chain transactions by exchanging signed commitment messages, with only the opening and closing states recorded on a base-layer blockchain, thereby enabling high-throughput, low-fee payments without sacrificing on-chain settlement guarantees. Channels are typically secured by time-locked contracts and mutual revocation mechanisms.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:off-chain-scaling", "label": "Off-Chain Scaling"},
    {"@id": "urn:ngm:class:layer-2-solutions", "label": "Layer-2 Solutions"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:hash-time-locked-contract", "label": "Hash Time-Locked Contract"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:settlement", "label": "Settlement"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-protocol", "label": "Bitcoin Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Payment Channel]] is an off-chain mechanism enabling parties to transact repeatedly at negligible cost by exchanging cryptographically signed state updates, with only the channel open and close transactions touching the [[Bitcoin Protocol]] or other base-layer blockchain for final [[Settlement]].

- ### Relationships
  - Payment Channels use [[Hash Time-Locked Contract]] and [[Smart Contract]] logic for conditional fund releases, form the building blocks of the [[Lightning Network]], sit within the broader [[Off-Chain Scaling]] and [[Layer-2 Solutions]] taxonomy, and ultimately settle to on-chain state.

- ### Content
  - The payment channel concept dates to Satoshi Nakamoto's original Bitcoin codebase, which included an unused nSequence field intended for channel-like constructs. The first practical bidirectional channel design was formalised by Joseph Poon and Thaddeus Dryja in the 2015 Lightning Network white paper. Earlier unidirectional channels had been proposed by Hearn and others in 2013. Generalised state channels (supporting arbitrary contract state, not just payments) were theorised by Jeff Coleman and elaborated by the Counterfactual and Perun teams around 2017–2018.
  - A basic payment channel works by both parties locking funds into a 2-of-2 multisignature on-chain contract, then exchanging signed balance updates off-chain. Each new state supersedes the previous one via a revocation mechanism: if a party broadcasts an old state, the counterparty can claim all funds as a penalty. Hash Time-Locked Contracts (HTLCs) extend channels across routing hops, enabling multi-hop payments across a channel network. Channel closure can be cooperative (immediate) or unilateral (subject to a timelock dispute period).
  - Payment channels solve the throughput bottleneck of base-layer blockchains by pushing transaction volume off-chain while preserving trustlessness. The Lightning Network, built atop Bitcoin payment channels, can theoretically process millions of transactions per second with sub-second confirmation and sub-satoshi fees, enabling micropayments impractical on-chain. Channels also underpin Ethereum state channel applications (e.g. gaming, streaming payments) and are a key building block for payment streaming protocols.
  - As of 2024–2025, the Lightning Network has approximately 60,000 public channels with over 4,500 BTC in public capacity, though real capacity including private channels is estimated significantly higher. Developments include splicing (adding/removing funds without closing channels), zero-confirmation channels for trusted parties, and BOLT 12 offers for reusable payment codes. Taproot adoption has improved channel privacy and reduced on-chain footprint. Research into channel factories (multi-party channel constructs) and ark-style protocols aims to reduce the liquidity requirements and on-chain footprint of channel management.


public:: true

elevatedFrom:: [[Bitcoin]]
# Bitcoin Proof-of-Work Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin",
  "@type": "Page",
  "vc:slug": "bitcoin-proof-of-work-protocol",
  "title": "Bitcoin Proof-of-Work Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
  "@type": "Class",
  "label": "Bitcoin Proof-of-Work Protocol",
  "definition": "Bitcoin is the first decentralised peer-to-peer electronic cash system, introduced by the pseudonymous Satoshi Nakamoto in a 2008 white paper and launched in January 2009. It operates on a public, permissionless blockchain secured by proof-of-work consensus, with a fixed supply cap of 21 million BTC enforced by its protocol. Bitcoin is simultaneously a payment network, a monetary asset, and the foundational reference implementation for the broader cryptocurrency and blockchain industry.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview", "label": "Bitcoin Technical Overview"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition", "label": "Bitcoin Value Proposition"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"},
      {"@id": "urn:ngm:class:blockchain-energy-consumption", "label": "Blockchain Energy Consumption"},
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-etf", "label": "Bitcoin ETF"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-centralisation-risks", "label": "Bitcoin Centralisation Risks"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-as-money", "label": "Bitcoin As Money"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-standard", "label": "Bitcoin Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Bitcoin is a decentralised, fixed-supply digital currency and peer-to-peer payment network secured by proof-of-work consensus, operating since January 2009 without central authority and capped at 21 million units.
- ### Relationships
  - Bitcoin is an instance of [[Cryptocurrency]] and relies on a [[Consensus Mechanism]] (specifically SHA-256 proof-of-work), [[Cryptography]], and a [[Blockchain Network]]. It encompasses [[Bitcoin Mining]], [[Bitcoin Technical Overview]], and [[Bitcoin Value Proposition]] as component concepts. It relates to the broader [[Blockchain]] ecosystem, [[Blockchain Economics]], [[Blockchain Energy Consumption]], [[Decentralized Finance (DeFi)]], and [[Distributed Ledger Technology]]. The [[Bitcoin ETF]] approval in 2024 expanded institutional access. Risks include [[51% Attack]] and [[Bitcoin Centralisation Risks]]. It enables the conception of [[Bitcoin As Money]] and the [[Bitcoin Standard]] monetary thesis.
- ### Content
  - Bitcoin was conceived by Satoshi Nakamoto, whose October 2008 white paper "Bitcoin: A Peer-to-Peer Electronic Cash System" described a system allowing online payments to be sent directly between parties without a financial institution. The genesis block was mined on 3 January 2009, embedding the headline "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" — a timestamp and ideological statement. Nakamoto disappeared from public correspondence by 2010–2011, leaving the protocol to be maintained by an open-source developer community.

  - The Bitcoin protocol enforces scarcity through a hard-coded issuance schedule: block rewards halve approximately every four years (every 210,000 blocks). The April 2024 halving reduced the block reward from 6.25 BTC to 3.125 BTC. By 2140, all 21 million BTC will have been issued, after which miners will be compensated solely by transaction fees. The proof-of-work algorithm (SHA-256 double hash) requires miners to expend computational energy to produce valid blocks, making rewriting history computationally prohibitive and aligning miner incentives with network integrity.

  - Bitcoin's market capitalisation reached approximately $1.3 trillion at its January 2024 peak, making it the largest crypto asset by far. The January 2024 approval by the US SEC of spot Bitcoin ETFs (including products from BlackRock, Fidelity, and Invesco) was a watershed moment, channelling hundreds of billions of dollars of institutional capital and signalling mainstream financial legitimacy. El Salvador adopted Bitcoin as legal tender in 2021, and several other jurisdictions have explored or enacted similar legislation, though the IMF has expressed concerns about macroeconomic risks.

  - Bitcoin's energy consumption remains a significant controversy. The Cambridge Centre for Alternative Finance estimated Bitcoin's annualised electricity consumption at roughly 100–150 TWh in 2024 — comparable to medium-sized nations — the majority from proof-of-work mining. Proponents argue an increasing share comes from renewable or stranded energy, and that the security budget justifies the cost; critics highlight carbon intensity and opportunity cost. This debate directly informs ESG considerations and regulatory scrutiny in jurisdictions such as the EU and China.

  - From a technical standpoint, Bitcoin's scripting language is intentionally limited (not Turing-complete), prioritising security and predictability over programmability. The Lightning Network, a second-layer payment channel protocol, addresses throughput constraints by enabling near-instant, low-fee micropayments off-chain, with periodic on-chain settlement. The Taproot upgrade (activated November 2021) introduced Schnorr signatures and MAST, improving privacy and enabling more complex smart contract patterns. As of 2024–2025, Bitcoin remains the foundational reference asset against which all other cryptocurrencies are benchmarked.

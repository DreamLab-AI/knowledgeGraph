public:: true
alias:: RGB-Protocol

# RGB Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rgb-protocol",
  "@type": "Page",
  "vc:slug": "rgb-protocol",
  "title": "RGB Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rgb-protocol",
  "@type": "Class",
  "label": "RGB Protocol",
  "definition": "RGB Protocol is a client-side validation protocol built on top of Bitcoin and the Lightning Network that enables the issuance and transfer of smart contracts and tokenised assets (fungible and non-fungible) without placing contract state on the blockchain. Instead, RGB stores contract state in off-chain client-side data structures and uses Bitcoin UTXOs as single-use seals, with only cryptographic commitments anchored to Bitcoin transactions. This design inherits Bitcoin's security and censorship resistance while providing scalability, privacy, and programmability not available on-chain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:bitcoin-network", "label": "Bitcoin Network"},
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:asset-tokenization", "label": "Asset Tokenization"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"},
      {"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"},
      {"@id": "urn:ngm:class:client-side-dco", "label": "Client side DCO"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - RGB Protocol is a client-side validation smart-contract system that anchors cryptographic commitments to [[Bitcoin Network]] [[UTXO Model]] outputs and routes asset transfers through the [[Lightning Network]], enabling private, scalable [[Asset Tokenization]] and [[Smart Contract]] execution without storing contract state on-chain.

- ### Relationships
  - RGB Protocol is a specialisation of [[Blockchain Protocol]] that leverages the [[Bitcoin Network]] as a timestamping and anchoring layer rather than as a computation host. It stores contract state in client-held directed acyclic graphs (DAGs) validated locally, using [[Cryptographic Commitment]] schemes (Tapret, Opret) to anchor state transitions into Bitcoin transactions via the [[UTXO Model]]. The [[Lightning Network]] is used for real-time RGB asset transfers at scale, making it a genuine [[Layer 2 Scaling]] solution. It is closely related to [[RGB and Client Side Validation]] research and contrasts with [[Taproot Assets]], a competing implementation by Lightning Labs using similar single-use seal principles.

- ### Content
  - RGB Protocol originated from research by Peter Todd on client-side validation and single-use seals, subsequently developed by Giacomo Zucco and the LNP/BP Association from 2018 onward. The name "RGB" originally referred to the project's intent to issue coloured coins on Bitcoin (red, green, blue as metaphor for asset diversity), though the scope expanded well beyond coloured coins to a full smart-contract system. Unlike Ethereum, which puts all state transitions in public on-chain transactions, RGB moves all contract logic and state to the client; the blockchain sees only opaque commitment hashes.

  - The technical architecture of RGB involves: schema definitions (describing contract types, state shapes, and business logic); genesis transactions (anchoring the initial asset issuance to a Bitcoin UTXO); state transitions (signed operations that move ownership from one UTXO seal to another, committed via Tapret or Opret to Bitcoin transactions); and the RGB state history, which the asset recipient must obtain and verify client-side. The AluVM virtual machine executes contract validation logic deterministically without any on-chain footprint. RGB20 is the standard schema for fungible tokens; RGB21 covers non-fungible tokens and collectibles.

  - The significance of RGB lies in delivering Ethereum-like programmability on Bitcoin's security model without the scalability and privacy trade-offs of on-chain computation. Because state is held off-chain, RGB contracts are private by default — counterparties learn only the portions of history required to validate their specific assets. Because anchoring is via tiny Bitcoin transactions, thousands of asset state transitions can be batched into a single on-chain transaction. Integration with Lightning enables instant, low-fee token transfers at channel capacity.

  - In 2024-2025, RGB Protocol reached its v0.10/v0.11 releases, stabilising the protocol and enabling production deployments. Bitfinex and the LNP/BP Association have shipped the Iris Wallet (mobile RGB wallet) and the RGB command-line tools. Competing client-side validation protocols (Taproot Assets by Lightning Labs, Ordinals/Runes for simpler token use cases) have increased developer interest in the design pattern. The main challenge for RGB adoption remains the complexity of the client-side validation model for application developers accustomed to on-chain programming paradigms.


public:: true

# EigenLayer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eigen-layer",
  "@type": "Page",
  "vc:slug": "eigen-layer",
  "title": "EigenLayer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eigen-layer",
  "@type": "Class",
  "label": "EigenLayer",
  "definition": "EigenLayer is an Ethereum-based restaking protocol that allows ETH stakers to extend their cryptoeconomic security — the stake already deposited to validate the Ethereum consensus layer — to additional decentralised services called Actively Validated Services (AVS). By opting into EigenLayer smart contracts, stakers grant the protocol the right to apply slashing conditions from multiple AVS operators simultaneously, enabling new protocols such as data availability layers, bridges, oracles, and sequencers to bootstrap economic security without deploying their own native token staking systems. EigenLayer fundamentally reuses and resells Ethereum's security budget.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:de-fi-protocol", "label": "De Fi Protocol"},
      {"@id": "urn:ngm:class:decentralized-application", "label": "Decentralized Application"},
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum"},
      {"@id": "urn:ngm:class:validator-economics", "label": "Validator Economics"},
      {"@id": "urn:ngm:class:liquid-proof-of-stake", "label": "Liquid Proof of Stake"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[EigenLayer]] is an [[individual:ethereum|Ethereum]] restaking protocol that allows [[Proof of Stake]] validators to extend their staked ETH as cryptoeconomic collateral to Actively Validated Services (AVS), enabling new decentralised protocols to inherit Ethereum's security without issuing their own staking tokens.

- ### Relationships
  - EigenLayer sits atop the [[Proof of Stake]] consensus layer, leveraging [[Validator Node]] infrastructure already securing Ethereum's base layer. It extends [[Validator Economics]] by offering additional yield in exchange for accepting AVS slashing conditions, while [[Liquid Proof of Stake]] tokens (liquid restaking tokens, LRTs) allow delegated participation without direct node operation. By providing shared security to AVS operators, EigenLayer enables new [[De Fi Protocol]] primitives and [[Layer 2 Scaling]] infrastructure — such as fast-finality bridges and decentralised sequencer networks — to launch without bootstrapping independent validator sets.

- ### Content
  - EigenLayer was conceived by Sreeram Kannan and his team at the University of Washington, with the whitepaper published in 2023. The core insight addressed a structural inefficiency in the Ethereum ecosystem: each new protocol seeking decentralised security — oracle networks, data availability layers, threshold signature schemes — had to bootstrap a separate validator community and issue a native token, fragmenting security across dozens of smaller pools. EigenLayer proposed aggregating this security demand against Ethereum's established validator set, whose ~$50B staked ETH represented the largest cryptoeconomic security budget in the ecosystem.

  - The technical mechanism operates through smart contracts that allow stakers to opt-in to additional slashing conditions beyond Ethereum's base-layer slashable offences. Operators — node operators who run AVS software — register with EigenLayer and advertise their available capacity to AVS developers. Stakers delegate to operators, who then sign attestations for AVS-specific tasks. If an operator misbehaves within an AVS (e.g., double-signing a data availability attestation), EigenLayer's contracts can slash a portion of the operator's restaked ETH. This shared-stake model creates correlated risk: an operator handling many AVS simultaneously concentrates slashing exposure.

  - EigenLayer's strategic significance lies in radically lowering the trust bootstrapping cost for new cryptoeconomic protocols. Before EigenLayer, launching a novel decentralised service required either accepting significant trust assumptions (committee-based with small stake) or years of token distribution to build a credible validator set. EigenLayer compresses this to days: an AVS operator can integrate EigenLayer contracts and immediately access operators already securing billions in restaked ETH. This accelerated the launch of EigenDA (data availability), AltLayer (restaking-based rollup sequencers), and Lagrange (ZK coprocessors) as AVS in 2024.

  - In 2024-2025, EigenLayer mainnet launched its restaking contracts, accumulating over $15B in restaked ETH at peak, making it one of the largest DeFi protocols by total value locked. However, the period also surfaced structural concerns: concentration of restaking among a small number of operators, correlated slashing risk across AVS, and the as-yet-untested nature of AVS slashing enforcement. The EIGEN token launched in 2024 to provide a universal slashing and forking mechanism for AVS that cannot be secured by ETH slashing alone. Academic and industry debate continues on whether restaking creates hidden systemic risk to Ethereum's base-layer finality guarantees.


- ### Definition
  - Parametric insurance is a form of coverage that pays a predetermined amount when a measurable trigger event crosses a defined threshold, rather than indemnifying assessed losses. Because payouts depend on objective parameters such as rainfall, wind speed, earthquake magnitude, or flight delay, claims can be settled automatically without loss adjustment. On blockchains, parametric insurance is implemented through smart contracts that consume oracle data to verify triggers and disburse funds, enabling fast, transparent, and trust-minimised settlement.
  - Core related concepts: [[Decentralized Finance]], [[Blockchain Oracle]], [[Smart Contract]], [[Insurance]], [[Oracle]].

- ### Overview
  - Parametric insurance separates the payout decision from loss verification by tying it to an objective, externally measurable index. This makes it well suited to perils that are hard or slow to assess individually, and to on-chain automation where smart contracts cannot themselves observe the physical world. The model trades basis risk, the gap between actual loss and the parameter-driven payout, for speed, transparency, and low administrative cost.

- ### Mechanisms
  - Trigger definition: a measurable index and threshold are agreed in advance, removing ambiguity and the need for post-event loss adjustment.
  - Oracle integration: smart contracts rely on blockchain oracles to deliver trustworthy external data such as weather, seismic, or flight feeds.
  - Automated settlement: when the oracle reports a trigger breach, the contract disburses the agreed payout immediately and verifiably.
  - Basis risk: payouts may diverge from real losses because they track a proxy index rather than individual circumstances.

- ### Applications
  - Crop and weather cover that pays farmers when rainfall or temperature crosses agreed bounds.
  - Natural-catastrophe protection triggered by earthquake magnitude or hurricane category.
  - Travel and flight-delay products that pay automatically on confirmed delays.
  - On-chain DeFi protocols offering pooled, smart-contract-driven parametric cover.

- ### Relationships
  - subClassOf:: [[Decentralized Finance]]
  - partOf:: [[Decentralized Finance]]
  - partOf:: [[Insurance]]
  - uses:: [[Blockchain Oracle]]
  - uses:: [[Smart Contract]]
  - dependsOn:: [[Blockchain Oracle]]
  - dependsOn:: [[Oracle]]
  - enables:: [[Arbitrage]]
  - requires:: [[Smart Contract]]
  - supports:: [[DeFi]]
  - contrastsWith:: [[Insurance]]
  - relatedTo:: [[Token Economics]]
  - relatedTo:: [[Liquidity Pool]]
  - relatedTo:: [[DeFi]]
  - bridgesTo:: [[Supply Chain]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
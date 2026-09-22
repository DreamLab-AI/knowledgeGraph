public:: true
alias:: Across-Protocol

# Across Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:across-protocol",
  "@type": "Page",
  "vc:slug": "across-protocol",
  "title": "Across Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:across-protocol",
  "@type": "Class",
  "label": "Across Protocol",
  "definition": "Across Protocol is a decentralised cross-chain bridging protocol that uses an optimistic verification model and a network of liquidity providers—called relayers—to enable fast, capital-efficient transfers of ERC-20 tokens between Ethereum mainnet and Layer 2 networks such as Optimism, Arbitrum, and Polygon. Relayers front user funds immediately on the destination chain and are reimbursed from a liquidity pool on Ethereum after an optimistic challenge period, creating a bridge architecture that prioritises speed and low fees over trustless finality.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:liquidity-provider", "label": "Liquidity Provider"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cross-chain-asset-transfer", "label": "Cross Chain Asset Transfer"},
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum Smart Contract Platform"},
      {"@id": "urn:ngm:class:layer-2-solutions", "label": "Layer 2 Solutions"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:interoperability-protocol", "label": "Interoperability Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Across Protocol is a [[Cross-Chain Bridge]] designed for the Ethereum ecosystem that exploits optimistic settlement to achieve near-instant token transfers from [[Layer 2 Solutions]] back to [[Ethereum Smart Contract Platform]] mainnet and across rollup networks. Relayers—participants who hold funds in a [[Liquidity Pool]]—instantly credit the destination chain whilst awaiting reimbursement after an optimistic verification window, making the protocol significantly faster than trust-minimised alternatives that wait for full fraud proof resolution.

- ### Relationships
  - Across Protocol is a specialisation of the [[Cross-Chain Bridge]] class and depends on [[Ethereum Smart Contract Platform]] as its settlement layer and [[Layer 2 Solutions]] as its primary connected networks. It uses a [[Liquidity Pool]] and [[Liquidity Provider]] relayer network to achieve fast bridging. It enables [[Cross Chain Asset Transfer]] and broader [[Cross-Chain Interoperability]] within the Ethereum ecosystem. It is related to [[Interoperability Protocol]] as a concrete implementation within that broader category.

- ### Content
  - Across Protocol was launched in late 2021 by Risk Labs, the same organisation behind the UMA (Universal Market Access) protocol. The initial design was motivated by a recognised shortcoming in the nascent Layer 2 ecosystem: canonical bridges built into rollup protocols required users to wait seven days during the fraud proof window to withdraw assets from optimistic rollups back to Ethereum mainnet. Across solved this by introducing an intermediary relayer layer, allowing immediate settlement funded by relayers who absorbed the wait risk in exchange for fees.

  - The technical architecture separates the user-facing settlement from the back-end reimbursement. When a user initiates a bridge, a relayer on the destination chain monitors the deposit event on the origin chain and immediately sends funds to the recipient, charging a fee that compensates for opportunity cost and risk. The deposit is then verified by UMA's optimistic oracle, which uses a dispute window and bond mechanism rather than fraud proofs, before the relayer is reimbursed from the hub pool on Ethereum mainnet. This design means the protocol's security is tied to UMA's optimistic verification rather than the security of individual rollup fraud proofs.

  - The Across protocol introduced a competitive relayer market where relayers bid for bridge fills through a Dutch auction fee model, ensuring that transfer fees approach the minimum sustainable level. The ACX governance token, distributed via an airdrop in late 2022, enables community governance over protocol parameters including fee structures, supported chains, and liquidity incentives. By 2023, Across had established itself as one of the most capital-efficient bridges in the ecosystem, frequently cited in bridge comparison analyses for its low fees on USDC and ETH transfers.

  - In 2024–2025, Across Protocol has extended support to additional networks including Base and zkSync, and has introduced intent-based bridging mechanisms that abstract chain selection from users. The protocol's relayer competition model has been adopted conceptually by other bridge designs, influencing the broader bridging ecosystem. Regulatory scrutiny of cross-chain bridges following high-profile exploits on competing protocols has increased focus on Across's optimistic security model, with the community governance actively adjusting challenge periods and bond requirements in response to evolving threat models.
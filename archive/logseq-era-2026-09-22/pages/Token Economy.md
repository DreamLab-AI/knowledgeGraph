public:: true

# Token Economy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:token-economy",
  "@type": "Page",
  "vc:slug": "token-economy",
  "title": "Token Economy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-economy",
  "@type": "Class",
  "label": "Token Economy",
  "definition": "A token economy is an economic system in which digital tokens — cryptographic representations of value, rights, or access — serve as the primary medium of exchange, incentive, and governance within a defined platform or protocol. Token economies leverage blockchain infrastructure to create programmable, permissionless economic systems where tokens encode ownership (utility tokens, security tokens, governance tokens, NFTs), align participant incentives through staking and reward mechanisms, and enable decentralised governance. The concept spans DeFi protocols, Web3 platforms, creator economies, and emerging AI agent economies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:crypto-token", "label": "Crypto Token"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:utility-token", "label": "Utility Token"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:incentive-alignment", "label": "Incentive Alignment"},
      {"@id": "urn:ngm:class:reward-distribution", "label": "Reward Distribution"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:creator-economy", "label": "Creator Economy"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:smart-contracts", "label": "Smart Contracts"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:social-token-economy", "label": "Social Token Economy"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Token Economy is a programmable economic system built on blockchain infrastructure where digital tokens represent value, rights, or governance power, aligning participant incentives through [[Tokenomics]] design and [[Smart Contracts]].

- ### Relationships
  - Token economies depend on [[Smart Contracts]] and [[Blockchain Protocol]] for their execution layer. They incorporate [[Mechanism Design]] and [[Incentive Alignment]] to shape participant behaviour. The key token types — [[Governance Token]], [[Utility Token]], [[Crypto Token]] — each serve different economic roles. Token economies enable [[DAO Governance]], [[Decentralized Finance (DeFi)]], and [[Creator Economy]] applications, and support [[NFT]] markets and [[Social Token Economy]] experiments. [[Tokenomics]] provides the design science for constructing sustainable token economies.

- ### Content
  - The token economy as a concept draws on two distinct traditions: behavioural psychology (where "token economies" describe reinforcement systems in therapeutic and educational settings) and cryptoeconomics (where tokens on a blockchain encode economic rights). In the blockchain context, the term crystallised around 2016–2018 as Ethereum smart contracts enabled the programmatic issuance and management of tokens beyond simple currency, creating the conditions for complex protocol economies.

  - The fundamental components of a blockchain-based token economy include: a token issuance mechanism (initial distribution, inflation schedule, or bonding curves); a set of rights or claims the token represents (ownership, governance votes, access, fee discounts, or yield); incentive structures that direct token holders toward desired behaviours (staking for network security, liquidity provision, voting participation); and burn or sink mechanisms that manage token supply to maintain value stability. These components are specified in a project's tokenomics documentation and implemented in immutable or upgradeable smart contracts.

  - Token types serve different economic functions. Utility tokens provide access to platform services (e.g., FIL for Filecoin storage, ETH for Ethereum computation). Security tokens represent fractional ownership of real-world assets, regulated under securities law in most jurisdictions. Governance tokens confer voting rights in decentralised protocol decisions (e.g., UNI for Uniswap, MKR for MakerDAO). Non-fungible tokens (NFTs) encode unique ownership of digital or physical assets. A mature token economy often combines multiple token types in a layered system, with stablecoins providing a unit of account alongside volatile native tokens for governance and incentive.

  - DeFi (Decentralised Finance) represents the most complex instantiation of token economies to date. Protocols such as Uniswap, Aave, Compound, and Curve have designed intricate token economies where liquidity providers earn fees and governance tokens, token holders vote on protocol parameters, and treasuries funded by protocol fees sustain development. The aggregate value locked in DeFi protocols peaked above $180 billion in 2021, fell sharply in the 2022 bear market, and recovered to approximately $100 billion by late 2024. Lessons from the collapse of algorithmic stablecoins (UST/LUNA) and over-leveraged lending protocols have driven more conservative token economy design emphasising revenue-backed value rather than circular yield.

  - In 2024–2025, token economy design has expanded into AI agent economics. Projects including Bittensor, Fetch.ai, and emerging agent frameworks are experimenting with token-incentivised AI service networks where nodes are rewarded for providing validated computation, data, or model inference. Creator economy platforms such as Sound.xyz, Mirror, and Friend.tech have applied token economies to content monetisation, with mixed results. The theoretical foundations of token economy design are increasingly formalised through the discipline of mechanism design, drawing on game theory to model strategic interactions among rational token holders and predict equilibrium outcomes.

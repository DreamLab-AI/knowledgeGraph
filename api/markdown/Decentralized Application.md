public:: true

# Decentralized Application
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralized-application",
  "@type": "Page",
  "vc:slug": "decentralized-application",
  "title": "Decentralized Application",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-application",
  "@type": "Class",
  "label": "Decentralized Application",
  "definition": "A decentralized application (dApp) is a software application whose backend logic runs on a blockchain or peer-to-peer network rather than on centralised servers controlled by a single entity, ensuring that no single party can unilaterally modify, censor, or shut down the application. The on-chain components — typically smart contracts — enforce business logic and state transitions transparently, while user-facing frontends may remain conventional web or mobile interfaces that communicate with the blockchain via wallet connectors. dApps inherit the censorship resistance and trustlessness of their underlying blockchain while exposing usability challenges related to transaction costs, latency, and key management.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-application", "label": "Blockchain Application"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:wallet-connector", "label": "Wallet Connector"},
      {"@id": "urn:ngm:class:oracle", "label": "Oracle"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:cryptographic-wallet", "label": "Cryptographic Wallet"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:smart-contract-platform", "label": "Smart Contract Platform"},
      {"@id": "urn:ngm:class:evm", "label": "EVM"},
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:trustless-execution", "label": "Trustless Execution"},
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:account-abstraction", "label": "Account Abstraction"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:non-fungible-token", "label": "Non-Fungible Token"},
      {"@id": "urn:ngm:class:tokenized-asset", "label": "Tokenized Asset"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:centralized-application", "label": "Centralized Application"},
      {"@id": "urn:ngm:class:traditional-web-application", "label": "Traditional Web Application"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:web3", "label": "Web3"},
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"},
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:dapp", "label": "DApp"},
    {"@id": "urn:ngm:class:decentralised-application", "label": "Decentralised Application"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.75
}
```

- ### Definition
  - A [[Decentralized Application]] (dApp) is a software application whose core backend logic executes on a [[Blockchain]] via [[Smart Contract]] code rather than on centralised servers, combining the trustlessness and censorship resistance of the underlying [[Smart Contract Platform]] with user-facing interfaces that interact through wallet-based authentication.

- ### Relationships
  - [[Decentralized Application]] is a specialisation of [[Blockchain Application]] that explicitly prioritises decentralisation of control. Its logic is encoded in [[Smart Contract]] bytecode executed by the [[EVM]] or equivalent runtime. The [[Web3]] paradigm provides the conceptual framing and tooling ecosystem. dApps enable [[DAO]] governance structures, power [[Decentralized Finance (DeFi)]] protocols, and express [[Blockchain Governance]] mechanisms. [[DeFi]] represents the most economically significant category of dApps by total value locked.

- ### Content
  - The concept of decentralised applications predates Ethereum but became practically realisable with Ethereum's Turing-complete smart contract environment in 2015. Earlier Bitcoin-based protocols (Mastercoin, Counterparty) offered limited programmability; Ethereum's EVM enabled arbitrary application logic on-chain for the first time. The term "dApp" was popularised by the Ethereum community's "The General Theory of Decentralized Applications" document in 2014, which proposed criteria including open-source code, cryptographic tokens, and decentralised consensus.

  - A dApp architecture typically separates concerns between on-chain and off-chain layers. Smart contracts hold canonical state and enforce rules without the possibility of unilateral modification by developers. Frontends are often static web applications served from decentralised storage (IPFS) to avoid central hosting as a point of censorship. Oracles bridge the on-chain execution environment to real-world data feeds. Layer-2 scaling solutions reduce the transaction cost and latency that would otherwise make frequent user interactions prohibitively expensive.

  - dApps have demonstrated that financial services — lending, exchange, derivatives — can operate without custodians or intermediaries, reaching users in jurisdictions excluded from traditional finance. NFT marketplaces enabled new models of digital ownership and creator royalty enforcement. Decentralised autonomous organisations expressed in dApp form govern billion-dollar treasuries through token-weighted voting, experimenting with novel collective decision-making at scale.

  - Between 2024 and 2025 the dApp landscape has matured from speculation toward utility: account abstraction (ERC-4337) is addressing the key-management usability barrier by enabling smart contract wallets with social recovery; Layer-2 rollups have reduced fees to fractions of a cent on leading EVM chains; and cross-chain interoperability protocols are enabling dApps that span multiple blockchains, broadening their addressable user base significantly.
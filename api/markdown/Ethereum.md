public:: true

# Ethereum

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ethereum",
  "@type": "Page",
  "title": "Ethereum",
  "vc:slug": "ethereum",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum",
  "@type": "Class",
  "label": "Ethereum",
  "definition": "Ethereum is an open-source, decentralised layer-1 blockchain platform conceived by Vitalik Buterin and launched in 2015, distinguished from Bitcoin by its general-purpose programmability via the Ethereum Virtual Machine (EVM), which executes Turing-complete smart contracts deployed on a shared global state. It transitioned from Proof of Work to Proof of Stake in September 2022 (the Merge), dramatically reducing energy consumption while preserving consensus security through a validator set staking Ether (ETH). Ethereum serves as the foundational settlement layer for the majority of decentralised finance (DeFi) protocols, NFT standards, DAOs, and Layer-2 rollup networks, with its fee market governed by EIP-1559's base-fee-burn mechanism.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract-platform", "label": "Smart Contract Platform"}],
  "sameAs": [
    {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum Smart Contract Platform"},
    {"@id": "urn:ngm:class:ethereum-network", "label": "Ethereum Network"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:ethereum-virtual-machine", "label": "Ethereum Virtual Machine"},
      {"@id": "urn:ngm:class:evm", "label": "EVM"},
      {"@id": "urn:ngm:class:solidity", "label": "Solidity"},
      {"@id": "urn:ngm:class:gas", "label": "Gas"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:merkle-patricia-trie", "label": "Merkle Patricia Trie"},
      {"@id": "urn:ngm:class:ethereum-node", "label": "Ethereum Node"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:decentralised-application", "label": "Decentralised Application"},
      {"@id": "urn:ngm:class:account-abstraction", "label": "Account Abstraction"},
      {"@id": "urn:ngm:class:restaking", "label": "Restaking"},
      {"@id": "urn:ngm:class:rollup", "label": "Rollup"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:eip-1559", "label": "EIP-1559"},
      {"@id": "urn:ngm:class:eip-4844", "label": "EIP-4844"},
      {"@id": "urn:ngm:class:eip", "label": "EIP"},
      {"@id": "urn:ngm:class:erc20", "label": "ERC-20"},
      {"@id": "urn:ngm:class:erc721", "label": "ERC-721"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"},
      {"@id": "urn:ngm:class:solana", "label": "Solana"},
      {"@id": "urn:ngm:class:polkadot", "label": "Polkadot"},
      {"@id": "urn:ngm:class:avalanche", "label": "Avalanche"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:digital-sovereignty", "label": "Digital Sovereignty"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - [[Ethereum]] is an open-source, decentralised [[Smart Contract Platform]] and [[Blockchain]] protocol that provides a shared global execution environment — the [[Ethereum Virtual Machine]] — on which [[Smart Contract]] code runs deterministically across all participating nodes.
  - Conceived by [[Vitalik Buterin]] in 2013 and launched in July 2015, Ethereum introduced Turing-complete programmability to blockchain networks, extending the model pioneered by [[Bitcoin]] beyond simple value transfer to arbitrary on-chain logic.
  - The platform's native asset, Ether (ETH), functions as both the monetary unit securing the network under [[Proof of Stake]] consensus and as the fuel (gas) metering computational cost within the [[EVM]].
  - Its governance proceeds through the [[EIP]] (Ethereum Improvement Proposal) process, coordinating protocol upgrades across a global developer community and a distributed validator set.

- ### Overview
  - Ethereum operates as a permissionless, globally replicated state machine. Every full node maintains an identical copy of the world state — a mapping from account addresses to balances, nonces, and contract storage — updated with every confirmed block.
  - The platform transitioned from [[Proof of Work]] to [[Proof of Stake]] in September 2022 in an upgrade known as the Merge, replacing energy-intensive mining with a system in which validators lock (stake) ETH as collateral, earning rewards for attesting to and proposing blocks.
  - The Merge was followed by a phased roadmap: the Surge (scaling via [[Rollup]] and [[EIP-4844]] blob transactions), the Scourge (MEV mitigation), the Verge (Verkle trees), the Purge (history expiry), and the Splurge (miscellaneous improvements).
  - [[EIP-1559]], activated in August 2021, restructured the fee market so that a protocol-determined base fee is burned each block, making ETH supply deflationary during periods of high network demand.

- ### Key Components
  - #### Ethereum Virtual Machine (EVM)
    - The [[Ethereum Virtual Machine]] is a stack-based, 256-bit virtual machine that executes [[Bytecode]] compiled from [[Solidity]] or other high-level languages.
    - It enforces a deterministic, sandboxed execution model; each instruction consumes [[Gas]], capping computation and preventing denial-of-service via infinite loops.
    - The EVM specification has become a cross-chain standard: [[Solana]], [[Polkadot]], [[Avalanche]], and many other networks offer EVM-compatible environments or bridges.
  - #### Consensus Layer
    - Since the Merge, Ethereum's consensus is managed by a separate Beacon Chain running Casper FFG (Friendly Finality Gadget) combined with the LMD-GHOST fork-choice rule.
    - Validators stake a minimum of 32 ETH, are randomly selected to propose blocks, and attest to the canonical chain in committees; [[Validator Node]] misbehaviour (equivocation or inactivity) triggers slashing or leak penalties.
    - [[EigenLayer]] extends Ethereum's cryptoeconomic security to external protocols through [[Restaking]], allowing validators to opt into additional slashing conditions in exchange for additional rewards.
  - #### Account Model & State
    - Ethereum maintains two account types: externally owned accounts (EOAs) controlled by private keys, and contract accounts holding [[Smart Contract]] code and storage.
    - The global state is encoded as a [[Merkle Patricia Trie]], enabling lightweight state proofs and efficient state transition verification.
    - [[EIP-4337]] and [[Account Abstraction]] decouple transaction validation logic from EOA keys, enabling programmable wallets with features such as social recovery, batch transactions, and sponsored gas.
  - #### Token Standards
    - [[ERC-20]] defines the fungible token interface, underpinning thousands of [[Cryptocurrency]] and governance tokens deployed on Ethereum.
    - [[ERC-721]] defines non-fungible tokens ([[NFT]]), enabling unique on-chain asset representation used in digital art, gaming items, and identity credentials.
    - Further standards — ERC-1155, ERC-4626 (vault), ERC-3525 (semi-fungible) — extend the primitives for DeFi and enterprise applications.
  - #### Gas & Fee Market
    - Every EVM operation has an associated [[Gas]] cost denominated in gwei (10⁻⁹ ETH).
    - [[EIP-1559]] introduced a base fee (burned) plus optional priority fee (to validators), replacing the prior first-price auction and reducing fee volatility.
    - [[EIP-4844]] (Proto-Danksharding, March 2024) introduced blob-carrying transactions at much lower cost, providing dedicated data availability bandwidth for [[Layer 2 Scaling]] rollups.

- ### Mechanisms
  - #### Proof of Stake Consensus
    - Validators are organised into committees that attest to blocks in each slot (12 seconds). Epochs (32 slots) mark checkpoints at which Casper FFG finalises the chain.
    - The protocol enforces economic finality: reversing a finalised checkpoint requires an attacker to burn at least one-third of total staked ETH.
    - Liquid staking derivatives (e.g. via protocols built on Ethereum) allow holders to stake without running infrastructure, though they introduce concentration and governance risks.
  - #### Layer 2 Rollups
    - [[Rollup]] networks (Optimistic and ZK variants) execute transactions off-chain and post compressed state data or validity proofs to Ethereum as the settlement and data-availability layer.
    - [[Optimistic Rollup]] chains (Optimism, Arbitrum) use [[Fraud Proof]] challenges during a dispute window; ZK rollups (zkSync, StarkNet) use cryptographic [[Formal Verification]] via succinct proofs for instant finality.
    - [[EIP-4844]] blob transactions reduce the cost of posting rollup data to Ethereum by an order of magnitude, enabling lower user fees across the L2 ecosystem.
  - #### EIP Governance Process
    - Protocol changes proceed through the [[EIP]] process: draft → review → last call → final. Core EIPs affecting consensus require coordination among client teams and are activated at a specific block or epoch.
    - The [[Ethereum Foundation]] funds core research and client development but does not unilaterally control protocol changes; governance is informal, relying on rough consensus among client maintainers, researchers, and the broader community.

- ### Applications & Use Cases
  - #### Decentralised Finance (DeFi)
    - Ethereum hosts the majority of [[Decentralised Finance]] activity: decentralised exchanges ([[Uniswap]], [[Curve Finance]]), lending protocols ([[Aave]]), stablecoins, and yield aggregators.
    - [[Liquidity Pool]] models pioneered by [[Automated Market Maker]] protocols replaced traditional order books, enabling permissionless token swaps and lending against on-chain collateral.
  - #### NFTs & Digital Ownership
    - Ethereum's [[ERC-721 Standard]] and [[ERC-20]] standards established the dominant framework for provably scarce digital assets, including art, collectibles, music rights, and in-game items.
    - [[Digital Ownership]] of on-chain assets is enforced by the network's consensus without relying on any centralised custodian.
  - #### DAOs & On-Chain Governance
    - [[DAO]] organisations encode membership rules, voting mechanisms, and treasury management in [[Smart Contract]] code deployed on Ethereum, enabling trustless collective decision-making.
    - [[On-Chain Governance]] frameworks (Governor, Compound Bravo, OpenZeppelin Governor) provide composable primitives adopted across DeFi protocols and public goods funding platforms such as [[Gitcoin]].
  - #### Identity & Credentialing
    - [[Ethereum Name Service]] (ENS) provides human-readable identifiers (".eth" names) mapped to Ethereum addresses, used in wallet displays, IPFS content addressing, and social profiles.
    - [[Decentralised Identity]] standards leverage Ethereum addresses and signed attestations for self-sovereign identity, verified via [[EIP-712]] typed structured data signatures.
    - [[Gitcoin Passport]] and similar systems aggregate on-chain and off-chain credentials to score Sybil resistance for quadratic funding rounds.
  - #### Cross-Chain Interoperability
    - Bridge protocols ([[Connext]], [[Chainlink CCIP]], [[Optimism]]'s canonical bridge) enable asset and message transfer between Ethereum mainnet and Layer 2 networks or other chains.
    - [[Cross-Chain Interoperability]] architectures increasingly treat Ethereum as the canonical settlement and security root for multi-chain ecosystems.
  - #### Enterprise & Institutional Use
    - The [[Enterprise Ethereum Alliance]] coordinates enterprise adoption, defining profiles and standards for private/permissioned EVM deployments.
    - Institutional DeFi, tokenised securities, and central bank digital currency research frequently reference or pilot Ethereum-compatible infrastructure.

- ### Relationships
  - hasPart:: [[Ethereum Virtual Machine]]
  - hasPart:: [[EVM]]
  - hasPart:: [[Solidity]]
  - hasPart:: [[Gas]]
  - hasPart:: [[Mempool]]
  - hasPart:: [[Merkle Patricia Trie]]
  - hasPart:: [[Ethereum Node]]
  - requires:: [[Proof of Stake]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Peer-to-Peer Network]]
  - requires:: [[Validator Node]]
  - requires:: [[Public Key Cryptography]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[DAO]]
  - enables:: [[NFT]]
  - enables:: [[Decentralised Application]]
  - enables:: [[Account Abstraction]]
  - enables:: [[Restaking]]
  - enables:: [[Rollup]]
  - implements:: [[EIP-1559]]
  - implements:: [[EIP-4844]]
  - implements:: [[EIP]]
  - implements:: [[ERC-20]]
  - implements:: [[ERC-721]]
  - uses:: [[Smart Contract]]
  - uses:: [[Token Standard]]
  - uses:: [[Cryptographic Hash Function]]
  - uses:: [[Elliptic Curve Cryptography]]
  - contrastsWith:: [[Bitcoin]]
  - contrastsWith:: [[Solana]]
  - contrastsWith:: [[Polkadot]]
  - contrastsWith:: [[Avalanche]]
  - bridgesTo:: [[Decentralised Identity]]
  - bridgesTo:: [[Digital Sovereignty]]
  - bridgesTo:: [[Distributed Ledger Technology]]

- ### Standards & Context
  - The [[EIP]] process (Ethereum Improvement Proposals) governs all protocol changes; EIPs include standards for the core protocol (core EIPs), networking (networking EIPs), interfaces (ERCs), and meta-process (meta EIPs).
  - [[EIP-1559]] (fee market reform, 2021), [[EIP-4337]] (account abstraction, 2023), and [[EIP-4844]] (Proto-Danksharding, 2024) are landmark standards that define modern Ethereum behaviour.
  - The [[Ethereum Yellow Paper]] by Gavin Wood formally specifies the EVM and state transition function, serving as the authoritative technical reference for client implementations.
  - [[Enterprise Ethereum Alliance]] publishes specifications for EVM compatibility in enterprise settings, referenced by [[Central Bank Digital Currency]] pilot programmes and regulated financial infrastructure.
  - Ethereum interacts with off-chain data through [[Chainlink]] oracle networks, providing [[Smart Contract]] access to real-world price feeds, randomness, and cross-chain messaging.
  - [[ERC-721 Standard]], [[ERC-20]], and related standards are referenced by the W3C and other bodies in work on verifiable credentials, tokenised assets, and digital identity.
  - [[Safe]] (formerly Gnosis Safe) provides the dominant multi-signature [[Crypto Wallet]] standard on Ethereum, acting as treasury infrastructure for DAOs and institutional holders.
  - [[OpenZeppelin]] provides audited, reusable [[Smart Contract]] libraries implementing ERC standards, used across the majority of deployed Ethereum contracts.
  - [[IPFS]] and [[Filecoin]] are frequently paired with Ethereum for decentralised content storage, with [[Content Addressed Storage]] references embedded in NFT metadata and DAO documents.
  - [[MetaMask]] is the most widely used browser-extension [[Crypto Wallet]] for Ethereum interaction, injecting a Web3 provider into browser contexts for [[Decentralised Application]] access.

- ### Provenance
  - sources:: Ethereum Yellow Paper (Gavin Wood); Ethereum.org documentation; EIP repository (github.com/ethereum/EIPs); Buterin, V. (2014) "A Next Generation Smart Contract and Decentralised Application Platform" (Ethereum Whitepaper)
  - updated:: 2026-06-13

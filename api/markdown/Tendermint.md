public:: true

# tendermint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6c3848fc2ab9188dd2c563828019be7cee4e269f5438c19f5173f79898e9ee6",
  "@type": "Page",
  "vc:slug": "tendermint",
  "title": "tendermint",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tendermint",
  "@type": "Class",
  "label": "Tendermint",
  "definition": "Tendermint is a Byzantine fault-tolerant (BFT) consensus engine that implements a partially synchronous, round-based, leader-elected protocol providing deterministic finality on each block. It separates the consensus layer from the application layer via the Application BlockChain Interface (ABCI), allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the Cosmos SDK and underpins a large family of interoperable application-specific blockchains, offering safety guarantees so long as fewer than one-third of validator voting power is Byzantine. Its design derives from Practical Byzantine Fault Tolerance (PBFT) but introduces pragmatic modifications — rotating proposers, weighted voting, and a three-phase commit protocol — optimised for open, permissionless validator sets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:state-machine-replication", "label": "State Machine Replication"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"},
      {"@id": "urn:ngm:class:partial-synchrony", "label": "Partial Synchrony"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"},
      {"@id": "urn:ngm:class:application-specific-blockchain", "label": "Application-Specific Blockchain"},
      {"@id": "urn:ngm:class:cross-chain-communication", "label": "Cross-Chain Communication"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:abci", "label": "ABCI"},
      {"@id": "urn:ngm:class:cosmos-sdk", "label": "Cosmos SDK"},
      {"@id": "urn:ngm:class:p2p-gossip-protocol", "label": "P2P Gossip Protocol"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cosmos-network", "label": "Cosmos Network"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:practical-byzantine-fault-tolerance", "label": "Practical Byzantine Fault Tolerance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:hotstuff", "label": "HotStuff"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cap-theorem", "label": "CAP Theorem"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:smart-contract-platform", "label": "Smart Contract Platform"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:decentralised-ai", "label": "Decentralised AI"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:tendermint-core", "label": "Tendermint Core"},
    {"@id": "urn:ngm:class:cometbft", "label": "CometBFT"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Tendermint is a [[Byzantine Fault Tolerance|Byzantine fault-tolerant]] (BFT) [[State Machine Replication]] engine that implements a partially synchronous, round-based, leader-elected protocol providing [[Deterministic Finality]] on each block. It separates the consensus layer from the application layer via the [[ABCI|Application BlockChain Interface]], allowing any deterministic state machine to be driven by its consensus guarantees. Tendermint is the consensus core of the [[Cosmos SDK]] and has influenced subsequent BFT designs including [[HotStuff]] and [[CometBFT]], offering safety guarantees so long as fewer than one-third of [[Validator Set|validator voting power]] is Byzantine.

- ### Overview
  - Tendermint was designed by Jae Kwon and released as open-source software in 2014, with a formal white paper published in 2016. Its core motivation was to bring the strong safety properties of classical [[Practical Byzantine Fault Tolerance]] (PBFT) into a blockchain context, replacing Nakamoto consensus's probabilistic finality with immediate, deterministic finality that enables trust-minimised [[Cross-Chain Communication]].
  - The engine operates in **rounds** within each block height, each round comprising three phases — **Propose**, **Prevote**, and **Precommit** — driven by a designated proposer chosen through a weighted round-robin among the [[Validator Set]]. A block achieves finality once more than two-thirds of total validator voting power submits valid precommit signatures; this quorum is collected into a **commit certificate** appended to the next block.
  - Under the [[CAP Theorem]], Tendermint explicitly prioritises **Consistency** over **Availability**: under a network partition, honest validators halt rather than producing conflicting forks. This is the opposite trade-off to [[Nakamoto Consensus]] but is precisely what enables [[Cosmos IBC]] to verify cross-chain transfers with a single block confirmation rather than many probabilistic confirmations.
  - In 2023, the Tendermint Core codebase was formally rebranded as **[[CometBFT]]**, maintained by the Informal Systems team, while remaining fully backward-compatible with existing [[Cosmos Network]] chains.

- ### Key Components
  - #### Protocol Phases
    - **Propose** — the round proposer broadcasts a new block proposal to peers over the [[P2P Gossip Protocol]].
    - **Prevote** — validators broadcast a prevote for the proposal or a nil-vote if the proposal is invalid or timed out.
    - **Precommit** — upon collecting a prevote quorum (> 2/3 voting power), validators broadcast a precommit; upon collecting a precommit quorum, the block is committed.
    - **Round change (timeout)** — if no quorum is achieved within a timeout, the round increments and a new proposer is selected; this mechanism ensures liveness under [[Partial Synchrony]].
  - #### Validator Economics
    - Validators must bond (stake) [[Proof of Stake|stake tokens]] and can be **slashed** for equivocation (signing two conflicting blocks at the same height and round), providing economic security atop cryptographic safety.
    - Voting power is **weighted** by staked amount, allowing delegated staking to aggregate economic security from many token holders into a smaller validator set for efficiency.
    - [[Digital Signature|Digital signatures]] (Ed25519 by default) authenticate each vote and are aggregated in the commit certificate, making the safety proof verifiable by light clients.
  - #### ABCI Interface
    - The [[ABCI]] (Application BlockChain Interface) is a socket/gRPC interface that separates Tendermint's consensus and networking from the application state machine, allowing the application to be written in any language.
    - Core ABCI methods include `InitChain`, `BeginBlock`, `DeliverTx`, `EndBlock`, and `Commit`, giving the application full control over transaction processing, validator updates, and state commitment.
    - This decoupling allows the [[Cosmos SDK]] to implement modular application logic (governance, staking, IBC) in Go, while remaining consensus-agnostic; other state machines (e.g., EVM-compatible chains) can also plug in via ABCI.
  - #### Light Client Protocol
    - Tendermint's deterministic finality enables efficient [[Light Client]] verification: a light client need only obtain consecutive commit certificates and verify the two-thirds quorum signatures to confirm the canonical chain without downloading full blocks.
    - This property is foundational to [[Cosmos IBC]], which uses on-chain light client state to verify cross-chain packet commitments.

- ### Applications and Use Cases
  - #### Cosmos Ecosystem (AppChains)
    - The [[Cosmos Network]] is built entirely on Tendermint / [[CometBFT]], with each application-specific blockchain (AppChain) running its own validator set and consensus instance, connected via [[Cosmos IBC]].
    - Prominent AppChains include the Cosmos Hub (ATOM), Osmosis (a DEX), Celestia (data availability layer), and Binance Chain (BNB) — all historically powered by Tendermint Core.
  - #### Enterprise and Permissioned Ledgers
    - Tendermint's BFT guarantees and configurability make it attractive for permissioned [[Distributed Ledger Technology]] deployments where a known validator set can be agreed upon, e.g., private consortium chains and supply-chain platforms.
    - Hyperledger Burrow used Tendermint as its consensus engine, and several enterprise pilots have used Cosmos SDK / Tendermint stacks.
  - #### Cross-Chain and Interoperability Infrastructure
    - [[Cosmos IBC]] (Inter-Blockchain Communication Protocol) uses Tendermint's instant finality to allow secure asset and data transfers between heterogeneous chains without centralised bridges, reducing bridge risk compared to [[Proof of Work]] chains.
    - Chains using [[Ethereum Virtual Machine|EVM]]-compatible execution layers (e.g., Evmos, Injective) combine Tendermint consensus with Solidity smart contracts, demonstrating bridging to the [[Smart Contract Platform]] domain.
  - #### Decentralised AI and Coordination
    - Tendermint's deterministic consensus has been explored as a coordination substrate for [[Decentralised AI]] model update aggregation and [[Federated Learning]] gradient-commit pipelines, where Byzantine-resilient agreement among distributed compute nodes is required.

- ### Mechanisms and Protocol Details
  - #### Safety and Liveness
    - **Safety** (no two correct nodes commit different blocks) is guaranteed if fewer than 1/3 of voting power is Byzantine, regardless of network timing — an unconditional safety property from the BFT literature.
    - **Liveness** (eventually a block is committed) requires [[Partial Synchrony]]: there must eventually exist a period during which all messages are delivered within some bounded delay, even if that bound is unknown in advance (the GST model).
  - #### Lock Mechanism (Polka)
    - When a validator receives 2/3+ prevotes for a block (a **polka**), it locks onto that block for subsequent rounds. This lock-step prevents safety violations when rounds change — a key divergence from naive PBFT.
    - A validator may only unlock and vote for a different block in a later round if it receives a new polka for that block, ensuring no two values can simultaneously achieve a 2/3 quorum in the same height.
  - #### Proposer Selection
    - Proposers rotate deterministically using a weighted round-robin algorithm based on validator voting power and accumulated priority, ensuring fairness and predictability without randomness that could complicate [[Deterministic Finality]].
  - #### Evidence and Slashing
    - The protocol includes an evidence system: if a validator equivocates (double-signs), any observer can submit the conflicting signed messages as on-chain evidence, triggering automatic slashing of the validator's stake via the application layer.

- ### Relationships
  - implements:: [[Byzantine Fault Tolerance]]
  - implements:: [[Deterministic Finality]]
  - implements:: [[Proof of Stake]]
  - implements:: [[State Machine Replication]]
  - requires:: [[Validator Set]]
  - requires:: [[Partial Synchrony]]
  - requires:: [[Digital Signature]]
  - enables:: [[Cosmos IBC]]
  - enables:: [[Application-Specific Blockchain]]
  - enables:: [[Cross-Chain Communication]]
  - uses:: [[ABCI]]
  - uses:: [[Cosmos SDK]]
  - uses:: [[P2P Gossip Protocol]]
  - partOf:: [[Cosmos Network]]
  - dependsOn:: [[Practical Byzantine Fault Tolerance]]
  - contrastsWith:: [[Proof Of Work]]
  - contrastsWith:: [[Nakamoto Consensus]]
  - contrastsWith:: [[HotStuff]]
  - relatedTo:: [[CAP Theorem]]
  - relatedTo:: [[Distributed Ledger Technology]]
  - relatedTo:: [[Smart Contract Platform]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Decentralised AI]]

- ### Standards and Context
  - Tendermint's security model is grounded in formal BFT literature; its safety proof is structurally related to the **DLS** (Dwork-Lynch-Stockmeyer) impossibility result and the PBFT protocol by Castro and Liskov (1999).
  - The [[Cosmos IBC]] specification (ICS standards) formally depends on Tendermint's finality model for its packet commitment proofs, making Tendermint a foundational dependency of the [[Inter-Blockchain Communication Protocol]].
  - The transition from Tendermint Core to [[CometBFT]] in 2023 introduced ABCI++ (extended ABCI), adding `PrepareProposal` and `ProcessProposal` hooks that give applications greater control over block construction (enabling features like MEV mitigation and transaction ordering policies).
  - Cosmos SDK v0.47+ standardises on [[CometBFT]] as the canonical consensus engine, with Tendermint Core reaching end-of-life as an actively maintained standalone project.
  - Tendermint's influence is visible in [[HotStuff]] (used by LibraBFT / Diem), Aptos, and Sui consensus engines, all of which adopt the rotating-leader and certificate-chaining ideas from Tendermint's design.

- ### Provenance
  - sources:: Kwon (2014) Tendermint white paper; Buchman (2016) Tendermint MSc thesis; Cosmos IBC specification; CometBFT GitHub repository; Castro & Liskov PBFT (1999)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

- ### Definition
  - [[Ai Agent Identity]] is a verifiable, persistent credential set enabling [[Autonomous Agent]] systems to authenticate and transact within [[Decentralized Identifier]] and [[Blockchain]] infrastructures.
  - It extends [[Self-Sovereign Identity]] principles to non-human actors, allowing agents to hold [[Verifiable Credential]] objects and sign operations with [[Digital Signature]] mechanisms.

- ### Overview
  - As AI agents increasingly act on behalf of humans in financial, legal, and operational domains, the question of how such agents are identified and held accountable has become critical.
  - AI agent identity frameworks typically anchor an agent's public key to an on-chain DID document, enabling third parties to verify the agent's authority.
  - Delegation chains allow human principals to grant scoped, time-limited powers to agents without exposing root credentials.

- ### Key Aspects
  - **Credential anchoring** — agent public keys registered on a [[Distributed Ledger]] for tamper-evident provenance.
  - **Delegation scoping** — authority constraints limiting what an agent may sign or authorise.
  - **Lifecycle management** — key rotation, revocation, and expiry policies for agent credentials.
  - **Auditability** — blockchain-backed logs enabling post-hoc verification of agent actions.

- ### Applications
  - Autonomous trading agents holding on-chain identities for DeFi participation.
  - AI assistants signing documents or commitments on behalf of users with explicit delegation.
  - Multi-agent orchestration systems where sub-agents authenticate to orchestrators.
  - Regulatory compliance proofs demonstrating that an agent operated within sanctioned boundaries.

- ### Relationships
  - bridgesTo:: [[Self-Sovereign Identity]]
  - bridgesTo:: [[Decentralized Identifier]]
  - requires:: [[Cryptographic Key Management]]
  - requires:: [[Public Key Infrastructure]]
  - uses:: [[Digital Signature]]
  - uses:: [[Verifiable Credential]]
  - enables:: [[Autonomous Agent]]
  - enables:: [[Multi-Agent System]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Trust Framework]]
  - relatedTo:: [[Smart Contract]]
  - contrastsWith:: [[Human Identity]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Distributed Ledger]]
  - supports:: [[Accountability]]

- ### Provenance
  - updated:: 2026-06-15
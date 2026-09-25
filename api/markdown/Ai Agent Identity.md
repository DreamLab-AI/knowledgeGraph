A persistent, verifiable digital identity assigned to an autonomous AI agent, enabling it to authenticate, sign transactions, and participate in decentralised systems on behalf of itself or a principal. AI agent identity encompasses credential issuance, key management, and delegation of authority scoped to the agent's operational context. Such identities may be anchored on a blockchain ledger to ensure auditability and prevent impersonation. They bridge self-sovereign identity (SSI) principles with agentic software systems.

### Overview

- As AI agents increasingly act on behalf of humans in financial, legal, and operational domains, the question of how such agents are identified and held accountable has become critical.
- AI agent identity frameworks typically anchor an agent's public key to an on-chain DID document, enabling third parties to verify the agent's authority.
- Delegation chains allow human principals to grant scoped, time-limited powers to agents without exposing root credentials.

### Key Aspects

- **Credential anchoring** — agent public keys registered on a [[Distributed Ledger]] for tamper-evident provenance.
- **Delegation scoping** — authority constraints limiting what an agent may sign or authorise.
- **Lifecycle management** — key rotation, revocation, and expiry policies for agent credentials.
- **Auditability** — blockchain-backed logs enabling post-hoc verification of agent actions.

### Applications

- Autonomous trading agents holding on-chain identities for DeFi participation.
- AI assistants signing documents or commitments on behalf of users with explicit delegation.
- Multi-agent orchestration systems where sub-agents authenticate to orchestrators.
- Regulatory compliance proofs demonstrating that an agent operated within sanctioned boundaries.

### Provenance


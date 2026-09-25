A governance attack is an exploit in which an adversary acquires or temporarily controls sufficient voting power within a decentralised governance system to pass malicious proposals against the interests of the wider community. Such attacks often combine economic mechanisms, such as borrowing governance tokens via flash loans, with the on-chain execution semantics of decentralised autonomous organisations. The aim is typically to drain a treasury, alter protocol parameters, or seize privileged contract roles.

### Overview

- Decentralised protocols delegate decision-making to token holders who vote on proposals that, when passed, are executed automatically by [[Smart Contract]] logic.
- A [[Governance Attack]] subverts this model by concentrating voting weight rather than by breaking cryptography, making it an economic and political exploit rather than a purely technical one.
- Because outcomes are enforced trustlessly, a single successful malicious proposal can be irreversible without an emergency social intervention or hard fork.

### Mechanisms

- Token accumulation: buying or borrowing enough [[Governance Token]] to cross a quorum or proposal threshold.
- Flash-loan voting: using a [[Flash Loan]] to momentarily hold voting power for a single block when snapshots are taken at vote time.
- Vote delegation capture: aggregating delegated votes from passive holders.
- Proposal timing: submitting and executing proposals during periods of low voter turnout.
- Privilege escalation: passing a proposal that reassigns admin keys or upgrades a malicious implementation contract.

### Applications

- Threat modelling for [[DAO]] treasuries and protocol upgrade processes.
- Designing time-locks, quorum floors, and vote-snapshot strategies that resist flash-loan voting.
- Security audits of [[Voting Mechanism]] and delegation contracts.
- Post-mortem analysis and remediation after exploited proposals.

### Provenance


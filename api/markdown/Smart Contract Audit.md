A smart contract audit is a structured security review of on-chain contract code that seeks to identify vulnerabilities, logic errors and economic flaws before deployment to an immutable ledger. Auditors combine manual code review with static analysis, automated scanners and, where warranted, formal verification to assess correctness against the intended specification. Because deployed contracts often custody substantial value and cannot easily be patched, auditing is a critical control in the blockchain and decentralised finance lifecycle.

- A smart contract audit is a structured security review of on-chain [[Smart Contract]] code, combining [[Code Review]], [[Static Analysis]] and sometimes [[Formal Verification]] to find vulnerabilities before immutable deployment. It is a core control within [[Blockchain Security]].

### Overview

- Deployed contracts typically custody real value and are difficult or impossible to patch, so a flaw discovered after launch can be catastrophic and irreversible.
- Audits assess code against its intended specification, looking for both classic software defects and blockchain-specific hazards such as the [[Reentrancy Attack]], integer overflow and unchecked external calls.
- A rigorous audit blends human expertise with tooling, escalating to mathematical [[Formal Verification]] for high-value or safety-critical components.

### Mechanisms

- Manual line-by-line review against a threat model and specification.
- Automated [[Static Analysis]] and pattern scanners for known [[Vulnerability]] classes.
- Property-based testing and fuzzing of contract invariants.
- Formal verification of critical safety and liveness properties.
- Severity-ranked findings, remediation guidance and a follow-up review.

### Applications

- Pre-launch review of [[Decentralised Finance]] protocols and token contracts.
- Verifying [[EVM]] bytecode behaviour and gas-sensitive logic.
- Ongoing assurance for upgradeable proxy contract systems.
- Due diligence supporting [[Blockchain Security]] across an ecosystem.

### Provenance


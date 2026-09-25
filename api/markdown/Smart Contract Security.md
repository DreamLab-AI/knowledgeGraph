Smart contract security is the discipline of designing, reviewing, and verifying on-chain programs so they behave correctly and resist exploitation despite handling irreversible value transfers. Because deployed contracts are typically immutable and publicly visible, vulnerabilities such as reentrancy, access-control flaws, and arithmetic errors can lead to permanent loss of funds. The field combines secure coding patterns, automated analysis, formal verification, audits, and economic safeguards.

- Smart contract security is the discipline of designing, reviewing, and verifying on-chain [[Smart Contract]]s so they resist exploitation while handling irreversible value.
- It is a specialisation of [[Security Audit]] applied to blockchain programs, drawing on broader [[Security]] practice.
- Because deployed code is usually immutable and public, flaws can cause permanent loss of funds.

### Overview

- Smart contracts encode financial logic that anyone can call, so the attack surface is exposed and the stakes are high.
- The immutability that gives contracts their trust guarantees also means bugs cannot simply be patched after deployment.
- Security therefore shifts left into design, coding standards, and verification before launch, supplemented by monitoring afterwards.
- The discipline spans [[Ethereum]] and other EVM ecosystems and underpins the safety of [[Decentralized Finance]].

### Mechanisms

- Secure design patterns: checks-effects-interactions ordering, pull-over-push payments, and minimal trust assumptions.
- Static and dynamic analysis: automated scanners detect known vulnerability classes such as reentrancy and integer overflow.
- Formal verification: mathematically proving contract behaviour against a specification.
- Manual audits: expert review of business logic, access control, and economic incentives.
- Defence in depth: timelocks, pausability, upgrade governance, and bug bounties to limit blast radius.

### Applications

- Protecting DeFi protocols managing pooled liquidity and lending.
- Securing token standards, bridges, and governance contracts.
- Pre-deployment review pipelines for protocol launches and upgrades.
- Continuous monitoring and incident response for live contracts.

### Provenance


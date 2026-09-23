
Proof of reserve is a verification practice in which a custodian or exchange demonstrates that it holds assets sufficient to cover its customer liabilities. It typically combines an on-chain attestation of owned assets with a Merkle-tree commitment to the liability set, allowing users to verify inclusion of their balance without revealing others. Robust schemes also prove liabilities to establish solvency, often with auditor or zero-knowledge support.

- ### Overview
  - The asset side proves control of on-chain holdings via signatures or address attestations at a snapshot.
  - The liability side commits all user balances into a Merkle root, so each user can verify their own inclusion without seeing others.
  - Comparing total verified assets against committed liabilities establishes whether reserves cover obligations.
- ### Key aspects
  - On-chain asset attestation through controlled-address proofs.
  - Merkle commitment to the full liability set.
  - Per-user inclusion verification preserving privacy.
  - Solvency claims strengthened by auditors or [[Zero-Knowledge Proof]] techniques.
- ### Mechanisms
  - Address-ownership signatures or message attestations.
  - Merkle-tree construction over salted user balances.
  - Publication of the Merkle root and per-user inclusion paths.
  - Optional zero-knowledge proofs of non-negative liabilities.
- ### Applications
  - Solvency assurance for a [[Centralised Exchange]] after market stress.
  - Custodial transparency for institutional asset holders.
  - Regulatory and counterparty due-diligence support.
  - Continuous, verifiable alternatives to point-in-time [[Audit]].
- ### Provenance


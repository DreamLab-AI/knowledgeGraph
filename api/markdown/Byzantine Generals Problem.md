The Byzantine Generals Problem is a foundational thought experiment in distributed computing describing how loyal participants can reach agreement when some participants are traitorous and may send arbitrary or conflicting messages. It formalises the difficulty of achieving consensus in the presence of arbitrary (Byzantine) faults, where faulty nodes behave maliciously rather than merely crashing. The problem establishes that agreement is solvable only when fewer than one-third of participants are faulty.

### Overview

- Posed by Lamport, Shostak, and Pease as the canonical model of arbitrary faults.
- Agreement requires at least 3f+1 participants to tolerate f Byzantine faults.
- Cryptographic signatures relax the bound by making forged messages detectable.

### Key aspects

- Interactive consistency: all loyal generals decide the same plan.
- Oral messages versus signed messages variants.
- The 3f+1 lower bound for unauthenticated Byzantine agreement.
- Direct lineage to modern BFT and blockchain consensus.

### Applications

- Blockchain and permissioned ledger consensus design.
- Fault-tolerant aerospace and avionics control systems.
- Replicated services that must tolerate compromised nodes.
- Reasoning about trust in adversarial distributed networks.

### Provenance


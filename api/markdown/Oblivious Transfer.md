Oblivious transfer is a foundational cryptographic protocol in which a sender transmits one of several pieces of information to a receiver, but remains oblivious to which piece was received, while the receiver learns nothing about the other pieces. The canonical 1-out-of-2 variant lets a receiver choose one of two sender messages without revealing the choice and without learning the unchosen message. Oblivious transfer is complete for secure two-party computation and underpins protocols such as garbled circuits and private set intersection.

- Oblivious transfer lets a sender deliver one selected item to a receiver while staying oblivious to the selection, and prevents the receiver from learning the items it did not choose. It is a building block of [[Secure Multi-Party Computation]] that relies on [[Public-Key Cryptography]] and [[Key Exchange]].
- The protocol balances two privacy guarantees simultaneously: sender privacy over unchosen messages and receiver privacy over the choice index.

### Overview

- Oblivious transfer is a deceptively simple primitive that turns out to be cryptographically complete: given oblivious transfer, any two-party computation can be carried out securely. This makes it a cornerstone of practical secure computation.
- The most common form is 1-out-of-2 oblivious transfer, generalised to 1-out-of-n and k-out-of-n variants. Modern constructions use OT extension to derive many cheap transfers from a small number of expensive base transfers.
- Because each base transfer relies on public-key operations, efficiency comes from amortising those operations across thousands of transfers using symmetric primitives.

### Mechanisms

- Base oblivious transfer: a small number of transfers built directly on public-key assumptions.
- OT extension: symmetric-key techniques that expand base transfers into many transfers cheaply.
- Correlated and random OT: optimised variants that feed garbled-circuit and arithmetic MPC pipelines.
- Choice bit hiding: the receiver's selection is masked so the sender cannot infer it.

### Applications

- Garbled-circuit protocols for two-party computation use oblivious transfer to deliver input wire labels.
- Private set intersection and contact discovery.
- Secure aggregation in federated learning, where participants combine updates without revealing individuals.
- Privacy-preserving machine learning inference.

### Provenance


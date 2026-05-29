- ### Definition
  - Formal verification is the use of mathematical proof techniques — including model checking, theorem proving, and abstract interpretation — to rigorously establish that a system, algorithm, or smart contract satisfies a specified set of correctness or safety properties under all possible inputs and executions. In software and hardware, formal verification provides guarantees beyond testing by exhaustively exploring the state space or constructing machine-checkable proofs. In the context of AI governance and smart contracts, formal verification is increasingly applied to verify safety invariants, access controls, and protocol correctness in blockchain systems and, experimentally, in neural network components.

- ### Semantic Classification
  - owl-class:: formal-verification:Formal Verification
  - owl-role:: Concept

- ### Relationships
  - supports [[AI Safety]]
  - supports [[Smart Contract]]
  - enables [[Transparency]]
  - relatedTo [[Audit Trail]]
  - relatedTo [[AI Risk Management]]
  - relatedTo [[Interpretability]]

- ### Content
  - Formal verification is a mathematically rigorous discipline that provides correctness guarantees not achievable through testing alone. Testing can demonstrate the presence of bugs but not their absence; formal verification, by contrast, reasons exhaustively over all possible system states or constructs logical proofs of correctness.
  - The principal techniques are: model checking, which systematically explores a finite abstraction of the system state space to check whether temporal logic properties hold; theorem proving (interactive or automated), which constructs machine-checkable mathematical proofs using tools such as Coq, Isabelle, or Lean; and static analysis via abstract interpretation, which over-approximates program behaviour to detect classes of errors such as null-pointer dereferences or arithmetic overflow. In the blockchain domain, formal verification of Smart Contracts has become prominent due to the economic consequences of contract bugs. Tools such as Certora Prover, Echidna (property-based fuzzer), and the K Framework have been applied to DeFi protocols to verify that invariants such as solvency, access control, and arithmetic correctness are maintained.
  - In AI and AI governance contexts, formal verification is being explored for verifying properties of neural networks — particularly robustness to adversarial perturbations (certified robustness), fairness constraints, and output range bounds. Tools such as Marabou, alpha-beta CROWN, and dReal apply SMT solving and branch-and-bound methods to neural network verification. These techniques remain computationally intensive at scale but provide guarantees relevant to safety-critical AI deployment in medical devices, autonomous systems, and regulated industries where AI Risk Management frameworks demand evidence of correct behaviour.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
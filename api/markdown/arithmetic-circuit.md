- ### Definition
  - An [[Arithmetic Circuit]] is a DAG of addition and multiplication gates over a finite field, providing the foundational intermediate representation for [[Zero-Knowledge Proof]] and [[Verifiable Computation]] systems.
  - It bridges abstract computation descriptions to cryptographic constraint systems, enabling compilers to transform high-level programs into provable [[Constraint System]] representations used by [[zk-SNARK]] and [[zk-STARK]] backends.

- ### Overview
  - Arithmetic circuits occupy a central position in modern cryptographic engineering: nearly every practical zero-knowledge proof system compiles a target computation to an arithmetic circuit before generating proof constraints.
  - The circuit is defined over a large prime field; inputs and outputs are field elements; intermediate values at each gate are constrained to satisfy the circuit's wiring.
  - Circuit complexity determines prover time and proof size — minimising gate count and depth is an active area of compiler research for zkEVMs and similar systems.
  - Domain-specific languages (DSLs) such as Circom, Noir, and Cairo compile human-readable constraint descriptions to arithmetic circuits automatically.

- ### Key Aspects
  - **Field selection** — the prime modulus of the underlying field must be chosen to match the elliptic curve or hash function used in the proving system.
  - **R1CS encoding** — rank-1 constraint systems encode each multiplication gate as a linear-algebraic constraint triplet.
  - **Plonkish variants** — custom gate types (plookup, range checks) extend vanilla arithmetic circuits for efficiency.
  - **Depth vs width** — shallow wide circuits parallelise better; deep narrow circuits minimise gates but impede parallelism.

- ### Applications
  - zk-rollup transaction validity proofs in [[Blockchain]] layer-2 scaling.
  - Privacy-preserving credential verification without revealing underlying attributes.
  - Verifiable machine learning inference proofs over neural network weights.
  - [[Homomorphic Encryption]] circuit compilation for outsourced computation.

- ### Relationships
  - requires:: [[Finite Field Arithmetic]]
  - requires:: [[Polynomial Commitment]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Constraint System]]
  - enables:: [[zk-SNARK]]
  - enables:: [[zk-STARK]]
  - enables:: [[Verifiable Computation]]
  - hasPart:: [[Logic Gate]]
  - relatedTo:: [[Boolean Circuit]]
  - relatedTo:: [[Homomorphic Encryption]]
  - relatedTo:: [[Secure Multi-Party Computation]]
  - contrastsWith:: [[Boolean Circuit]]
  - dependsOn:: [[Elliptic Curve Cryptography]]
  - supports:: [[Privacy-Preserving Computation]]
  - implements:: [[Cryptographic Protocol]]
  - bridgesTo:: [[Blockchain]]

- ### Provenance
  - updated:: 2026-06-15
A trusted setup is a one-time procedure that generates the public parameters (a common reference string) required by certain cryptographic protocols, notably succinct zero-knowledge proof systems. The procedure produces secret randomness, often called toxic waste, that must be irrecoverably destroyed; if it leaks, an adversary can forge proofs. Multi-party ceremonies distribute trust so that the setup remains sound as long as a single participant behaves honestly.

### Overview

- The setup samples secret randomness to build a structured reference string consumed by the prover and verifier.
- Security hinges on destroying the secret; a multi-party ceremony makes the parameters trustworthy as long as one contributor is honest.
- Universal and updatable setups, as in PLONK, reduce the need to re-run the ceremony for each circuit.

### Mechanisms

- Generation of a common reference string from secret randomness.
- Toxic-waste destruction so the trapdoor cannot be reconstructed.
- Powers-of-tau multi-party ceremonies for distributed trust.
- Universal and updatable variants that decouple setup from circuit.

### Applications

- Bootstrapping zk-SNARK proving systems in privacy-preserving blockchains.
- Establishing parameters for verifiable computation and rollups.
- Securing confidential transactions and identity proofs.

### Risks

- Compromise of toxic waste permits undetectable proof forgery.
- Ceremony coordination and verifiability are critical to soundness.
- Transparent proof systems avoid setup at higher proof cost.

### Provenance


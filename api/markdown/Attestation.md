Attestation is the act of producing verifiable, signed evidence that a claim, state, or property is true, allowing a relying party to trust it without re-deriving it. In blockchain proof-of-stake consensus, validators broadcast attestations voting on the head of the chain and on checkpoints, and the aggregate of these signed votes drives finalisation. More broadly, remote attestation lets a trusted execution environment cryptographically prove its identity and integrity to a remote verifier. Attestations are typically cryptographic signatures over structured claims, and they underpin trust, accountability, and slashing-based security.

- Attestation produces verifiable, signed evidence that a claim or state is true, so a relying party can trust it without re-deriving it. A specialisation of [[Cryptographic Proof]], it drives [[Consensus]] when [[Validator]] nodes vote, and underpins [[Remote Attestation]] of execution integrity.

### Overview

- An attestation binds a structured claim to a cryptographic signature, converting a subjective assertion into objectively checkable evidence.
- In proof-of-stake consensus, validators attest to the chain head and checkpoints; aggregating these votes yields finalisation and exposes equivocation to slashing.
- In trusted hardware, remote attestation lets an enclave prove its measured identity to a remote verifier.

### Mechanisms

- Validators sign a vote over a target block and checkpoint.
- Signatures are aggregated and counted against finalisation thresholds.
- Conflicting attestations are penalised via [[Slashing]].

### Applications

- Block finalisation in [[Proof of Stake]] networks.
- Integrity proofs from a [[Trusted Execution Environment]].
- Verifiable claims and credentials in identity systems.

### Provenance


- ### Definition
  - The cryptographic key material ([[BIP-340 Schnorr Keypair|BIP-340 Schnorr keypair]]) held securely by each [[VisionClaw Agentic Container|VisionClaw agent]], used to prove identity via [[DID Nostr Identity|did:nostr]] DIDs, sign [[Verifiable Credential Surface|verifiable credentials]], authenticate [[Nostr Relay|Nostr relay]] messages, and establish [[Trustless Peer Communication|trustless peer-to-peer trust]] without delegating key management to a central authority.

- ### Semantic Classification
  - owl-class:: blockchain:SovereignKeyset
  - owl-role:: Object
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[CryptographyDomain]], [[IdentityDomain]]
  - implemented-in-layer:: [[SecurityLayer]], [[InfrastructureLayer]]

- ### Relationships
  - has-part:: [[BIP-340 Schnorr Keypair]], [[Private Key]], [[Public Key]], [[Key Rotation Policy]]
  - requires:: [[secp256k1 Elliptic Curve]], [[Secure Random Number Generator]], [[Hardware Security Module (optional)]], [[Key Storage]]
  - enables:: [[Message Signing]], [[Credential Issuance]], [[Peer Authentication]], [[Self-Sovereign Identity]], [[Decentralised Trust]]
  - implements:: [[BIP-340]], [[secp256k1]], [[W3C DID Core]]
  - bridges-to:: [[Blockchain Keypair]] (domain: blockchain), [[Schnorr Signature]] (domain: cryptography)

- ### Content

  Every [[VisionClaw Agentic Container|VisionClaw agent]] is born with a unique **Sovereign Keyset**: a [[BIP-340 Schnorr Keypair|Schnorr keypair]] that the agent controls exclusively and never delegates. This keyset is the cryptographic root of the agent's identity and all its assertions.

  #### Key Derivation

  The keyset is generated at agent instantiation:

  1. **Entropy Source**: A cryptographically secure random number generator produces 256 bits of entropy.
  2. **Scalar Derivation**: The 256-bit entropy becomes the private key (also called the secret scalar) in the secp256k1 field.
  3. **Public Key Computation**: The private key is used to compute the corresponding point on the secp256k1 curve. The x-coordinate of this point (32 bytes) is the BIP-340 x-only public key.
  4. **Encoding**: The public key is encoded as 64 lowercase hexadecimal characters.
  5. **DID Formation**: The public key is prefixed with `did:nostr:` to form the agent's [[DID Nostr Identity|canonical DID]].

  Once derived, the private key is **stored securely** and the public key is **published freely**.

  #### Key Storage

  [[VisionClaw Agentic Container|VisionClaw agents]] may store their private keys in different ways depending on deployment context:

  - **In-Memory (Development)**: Private key kept in agent memory. Suitable for ephemeral test agents.
  - **Encrypted at Rest**: Private key encrypted with a passphrase and stored on disk. The agent decrypts the key on startup.
  - **Hardware Security Module (HSM)**: Private key never leaves the HSM. The agent communicates with the HSM via a secure interface to request signatures.
  - **Solid Pod**: Private key stored in a personal [[Solid Pod Storage|Solid pod]] with strict access controls.
  - **Multi-Signature Custody**: Private key material is split using Shamir's secret sharing; multiple parties hold key shards.

  The choice depends on the agent's security posture and operational environment. High-stakes agents (financial, critical infrastructure) use HSMs; ephemeral research agents may use in-memory keys.

  #### Signing Operations

  When an agent signs a message (e.g., a credential, a Nostr event):

  1. **Hash the Message**: Compute SHA-256 of the message.
  2. **Schnorr Sign**: Apply the Schnorr signing algorithm (BIP-340) using the private key and message hash.
  3. **Produce Signature**: A 64-byte Schnorr signature is output.

  The signature is deterministic: the same message always produces the same signature (given the same private key and the same nonce derivation). This enables reproducibility and consistency.

  Verification is performed by any party with the public key:

  1. **Hash the Message** (same as above).
  2. **Schnorr Verify**: Apply the Schnorr verification algorithm using the public key, message hash, and signature.
  3. **Result**: True if signature is valid, False otherwise.

  #### Key Rotation and Revocation

  If an agent's private key is compromised or lost:

  1. **Generate a New Keyset**: The agent creates a new Schnorr keypair.
  2. **Publish a Revocation Credential**: The agent (using the old key) issues a signed credential stating "old DID X is revoked, new DID Y is authoritative".
  3. **Update Manifest**: The agent's manifest is updated to reference the new DID.
  4. **Notify Peers**: The agent broadcasts the revocation to known [[Nostr Relay|Nostr relays]].

  Peers can honour revocations by checking relay history. However, because there's no central registry, revocation requires trust in the relay (it might not have the revocation message if the relay operator silences it). Advanced deployments use [[Smart Contract|smart contracts]] or blockchain-backed DID registries to anchor revocations permanently.

  #### Multi-Agent Trust Groups

  An advanced pattern uses **multi-signature credentials**:

  - Three agents (A, B, C) agree to jointly issue credentials on a shared topic.
  - A credential is valid only if signed by at least 2-of-3 agents.
  - Each agent uses its own Sovereign Keyset to sign; the credential aggregates all signatures.
  - Verifiers check that the credential carries valid signatures from enough agents.

  This pattern requires no shared key material; each agent keeps its own keyset, but the semantics of the credential enforce multi-party consensus.

  #### Threat Model and Mitigations

  **Threat: Private Key Theft**
  - *Mitigation*: Store key in HSM or encrypted with a strong passphrase. Implement rate limiting on signing operations to detect brute-force attacks.

  **Threat: Compromise of Agent Runtime**
  - *Mitigation*: Even if an attacker gains code execution in the agent, the HSM-stored key is inaccessible. Signing requests can be logged and audited.

  **Threat: Key Reuse Across Agents**
  - *Mitigation*: Each agent is allocated a unique keyset at instantiation. Sharing a key between agents is architecturally forbidden.

  **Threat: Weak Random Number Generation**
  - *Mitigation*: Use operating system RNG (e.g., /dev/urandom on Unix) or a hardware RNG. Never use deterministic RNGs.

  #### Integration with Broader Systems

  Other systems can integrate with a VisionClaw agent's keyset:

  - **External Verifiers**: Obtain the agent's public key (from the [[DID Nostr Identity|did:nostr]]) and verify credentials offline.
  - **Blockchain Oracles**: The oracle queries the agent's [[Federation Surface|federation surfaces]], retrieves a credential, verifies the signature, and if valid, reports the credential to the smart contract.
  - **Compliance Audits**: The auditor collects all credentials issued by the agent, verifies each signature, and generates a report.

  Because Schnorr signatures are a standard cryptographic primitive, no special VisionClaw knowledge is required for external verification.

- ### Provenance
  - sources:: [[ADR-013]], [[BIP-340]], [[secp256k1]], [[W3C DID Core]], [[Schnorr Signature Scheme]]
  - migration-date:: 2026-04-26T00:00:00Z
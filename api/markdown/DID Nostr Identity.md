iri:: http://narrativegoldmine.com/ontology#DIDNostrIdentity
uri:: urn:visionclaw:concept:blockchain:did-nostr-identity
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:did-nostr-identity
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: DID Nostr Identity
content-hash:: sha256-12-e5f6a7b8c9da
status:: complete
maturity:: established
quality-score:: 0.88
authority-score:: 0.92
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A [[W3C DID Core|W3C Decentralised Identifier]] (did:nostr:<pubkey>) binding a [[VisionClaw Agentic Container|VisionClaw agent]] to its [[BIP-340 Schnorr Keypair|BIP-340 x-only public key]], enabling cryptographic proof of identity, self-sovereign key management, and inter-agent trust without a central identity provider or certificate authority.

- ### Semantic Classification
  - owl-class:: blockchain:DIDNostrIdentity
  - owl-role:: Object
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[IdentityDomain]], [[CryptographyDomain]]
  - implemented-in-layer:: [[InfrastructureLayer]]

- ### Relationships
  - has-part:: [[BIP-340 Schnorr Keypair]], [[Public Key]], [[Private Key]], [[DID Resolution]]
  - requires:: [[BIP-340 Cryptography]], [[Nostr Protocol]], [[W3C DID Method]]
  - enables:: [[Cryptographic Identity]], [[Self-Sovereign Key Management]], [[Message Signing]], [[Credential Issuance]], [[Decentralised Trust]]
  - implements:: [[W3C DID Core]], [[BIP-340]], [[Nostr NIP-01]], [[Schnorr Signatures]]
  - bridges-to:: [[Blockchain Identity]] (domain: blockchain), [[Smart Contract Verification]] (domain: blockchain)

- ### Content

  Every [[VisionClaw Agentic Container|VisionClaw agent]] has a unique identity expressed as a `did:nostr:<pubkey>`. This DID is the agent's permanent, cryptographic identity and the foundation for all inter-agent trust and credential verification.

  #### DID Structure

  A `did:nostr` DID has the form:

  ```
  did:nostr:0123456789abcdef...  (64 lowercase hex characters)
  ```

  The 64-character string is the agent's [[BIP-340 Schnorr Keypair|BIP-340 x-only public key]]:

  - **64 hex characters** = 32 bytes = a compressed point on the secp256k1 elliptic curve
  - **Lowercase hex only** — no uppercase, no bech32 encoding
  - **Immutable** — the DID never changes, even if the agent's attributes (capabilities, status) change

  This is distinct from Nostr's internal representation, which uses **bech32-encoded npub keys** for human readability. The DID layer uses raw hex for compatibility with broader W3C tooling (DID resolvers, verifiable credential verifiers) that may not understand Nostr's bech32 convention.

  #### Key Derivation and Management

  An agent's DID is derived from its private key:

  1. Generate a **256-bit random secret** (private key).
  2. Derive the **x-only public key** (32 bytes) using secp256k1. This is the Schnorr public key per BIP-340.
  3. Encode as **64 lowercase hex characters**.
  4. Prefix with `did:nostr:` to form the DID.

  The agent **stores the private key securely** (e.g., in a protected keyring or hardware security module). The private key is used to:

  - **Sign messages** — all Nostr events published by the agent are signed with this key
  - **Sign credentials** — verifiable credentials issued by the agent carry a Schnorr signature
  - **Prove ownership** — when claiming a pod or resource, the agent signs a challenge with its private key

  The public key (DID) is published freely; anyone can verify a message or credential's signature using the public key.

  #### DID Resolution

  A DID resolver converts a `did:nostr` URI to resolution metadata and a DID document:

  ```
  Resolver Input:  did:nostr:0123...ef
  Resolver Output:
  {
    "@context": "https://w3id.org/did/v1",
    "id": "did:nostr:0123...ef",
    "publicKey": [
      {
        "id": "did:nostr:0123...ef#key-0",
        "type": "SchnorrVerificationKey2025",
        "controller": "did:nostr:0123...ef",
        "publicKeyHex": "0123...ef"
      }
    ],
    "authentication": [
      "did:nostr:0123...ef#key-0"
    ]
  }
  ```

  A resolver can be local (an embedded service in the VisionClaw runtime) or remote (a REST endpoint queried at verification time). Key point: no centralised registry is required. Because the DID is derived purely from the public key, any system can independently confirm that a DID belongs to the holder of the corresponding private key.

  #### Credential Issuance and Verification

  When an agent issues a [[Verifiable Credential Surface|verifiable credential]], it:

  1. **Constructs the credential** (issuer, subject, claims, timestamp).
  2. **Canonicalises the credential** to deterministic JSON.
  3. **Computes the content hash** using SHA-256.
  4. **Signs the hash** with its private key, producing a Schnorr signature.
  5. **Includes the signature** and issuer DID in the credential.

  A verifier (another agent, a smart contract, a compliance system) can:

  1. **Retrieve the credential** and its signature.
  2. **Recompute the content hash** from the canonical JSON.
  3. **Look up the issuer's public key** from the issuer DID.
  4. **Verify the Schnorr signature** against the hash and public key.

  If the signature is valid, the credential is genuine and unmodified. If the signature fails, the credential is either forged or tampered with.

  #### Differences from Blockchain DIDs

  VisionClaw's `did:nostr` approach differs from blockchain-registered DIDs (did:ethr, did:ens):

  - **No Registration Cost**: did:nostr DIDs are free; no blockchain transaction is required to create one.
  - **No Central Ledger**: There's no blockchain registry that must be queried to resolve a DID. Verification is purely cryptographic.
  - **Instant Availability**: An agent can begin using its DID immediately upon creation. No waiting for a transaction to finalize.
  - **Privacy by Default**: An agent's DID is not linked to a wallet address or on-chain identity (unless the agent explicitly chooses to link them).

  However, agents can optionally register their DIDs on a blockchain-backed registry (e.g., using [[Smart Contract|smart contracts]] or decentralised registries like [[Ethereum Name Service]]) to gain the additional trust guarantee of on-chain commitment.

  #### Multi-Signature and Revocation

  Advanced scenarios:

  - **Multi-Agent Trust Groups**: A group of agents can jointly issue credentials, requiring M-of-N signatures for a credential to be valid.
  - **Key Rotation**: If an agent's private key is compromised, it can publish a signed revocation message (e.g., "public key X is no longer valid, use public key Y instead"). Relays and resolvers can honour this revocation.
  - **Delegation**: An agent can issue a delegation credential ("Alice permits Bob to act on her behalf"), signed by Alice's DID.

  These patterns are built on top of the core `did:nostr` infrastructure without modifying it.

  #### Integration with External Systems

  Third-party systems (dashboards, compliance audits, blockchain oracles) can integrate VisionClaw agents by:

  1. Obtaining an agent's DID (from a beacon, a manifest, or out-of-band).
  2. Querying the agent's [[Federation Surface|federation surfaces]] to retrieve credentials.
  3. Verifying credentials using the DID's public key.
  4. Acting on verified claims without needing special VisionClaw knowledge.

  This makes agent identities universally verifiable and portable.

- ### Provenance
  - sources:: [[ADR-013]], [[W3C DID Core]], [[BIP-340]], [[Nostr NIP-01]], [[RFC 8610]]
  - migration-date:: 2026-04-26T00:00:00Z

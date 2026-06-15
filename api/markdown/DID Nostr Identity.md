public:: true

# DID Nostr Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:957135bea9c4cb2bcf1fe9809e9792ed2361fe3db21c4a9c0671d19d003b1038",
  "@type": "Page",
  "vc:slug": "did-nostr-identity",
  "title": "DID Nostr Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adr-013",
      "vc:label": "ADR-013"
    },
    {
      "@id": "urn:visionflow:linked:ai-application",
      "vc:label": "AgenticSystemsDomain"
    },
    {
      "@id": "urn:visionflow:linked:bip-340",
      "vc:label": "BIP-340"
    },
    {
      "@id": "urn:visionflow:linked:bip-340-cryptography",
      "vc:label": "BIP-340 Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:bip-340-schnorr-keypair",
      "vc:label": "BIP-340 Schnorr Keypair"
    },
    {
      "@id": "urn:visionflow:linked:bip-340-schnorr-keypair",
      "vc:label": "BIP-340 Schnorr Keypair"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-identity",
      "vc:label": "Blockchain Identity"
    },
    {
      "@id": "urn:visionflow:linked:credential-issuance",
      "vc:label": "Credential Issuance"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-identity",
      "vc:label": "Cryptographic Identity"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "CryptographyDomain"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-trust",
      "vc:label": "Decentralised Trust"
    },
    {
      "@id": "urn:visionflow:linked:did-resolution",
      "vc:label": "DID Resolution"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-name-service",
      "vc:label": "Ethereum Name Service"
    },
    {
      "@id": "urn:visionflow:linked:identity",
      "vc:label": "IdentityDomain"
    },
    {
      "@id": "urn:visionflow:linked:message-signing",
      "vc:label": "Message Signing"
    },
    {
      "@id": "urn:visionflow:linked:nostr-nip-01",
      "vc:label": "Nostr NIP-01"
    },
    {
      "@id": "urn:visionflow:linked:rfc-8610",
      "vc:label": "RFC 8610"
    },
    {
      "@id": "urn:visionflow:linked:schnorr-signatures",
      "vc:label": "Schnorr Signatures"
    },
    {
      "@id": "urn:visionflow:linked:self-sovereign-key-management",
      "vc:label": "Self-Sovereign Key Management"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract-verification",
      "vc:label": "Smart Contract Verification"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-core",
      "vc:label": "W3C DID Core"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-core",
      "vc:label": "W3C DID Core"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-method",
      "vc:label": "W3C DID Method"
    },
    {
      "@id": "urn:visionflow:owl:class:federation-surface",
      "vc:label": "Federation Surface"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-layer",
      "vc:label": "InfrastructureLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:nostr-protocol",
      "vc:label": "Nostr Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key",
      "vc:label": "Public Key"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credential-surface",
      "vc:label": "Verifiable Credential Surface"
    },
    {
      "@id": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "vc:label": "VisionClaw Agentic Container"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DID Nostr Identity"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-nostr-identity",
  "@type": "Class",
  "label": "DID Nostr Identity",
  "definition": "A W3C DID Core|W3C Decentralised Identifier (did:nostr:<pubkey>) binding a VisionClaw Agentic Container|VisionClaw agent to its BIP-340 Schnorr Keypair|BIP-340 x-only public key, enabling cryptographic proof of identity, self-sovereign key management, and inter-agent trust without a c...",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    },
    {
      "@id": "urn:ngm:class:distributed-identity",
      "label": "Distributed Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bip-340-schnorr-keypair",
        "label": "BIP-340 Schnorr Keypair"
      },
      {
        "@id": "urn:ngm:class:did-resolution",
        "label": "DID Resolution"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key",
        "label": "Public Key"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bip-340",
        "label": "BIP-340 Cryptography"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "W3C DID Method"
      },
      {
        "@id": "urn:ngm:class:nostr-protocol",
        "label": "Nostr Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-issuance",
        "label": "Credential Issuance"
      },
      {
        "@id": "urn:ngm:class:cryptographic-identity",
        "label": "Cryptographic Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-trust",
        "label": "Decentralised Trust"
      },
      {
        "@id": "urn:ngm:class:message-signing",
        "label": "Message Signing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip-340",
        "label": "BIP-340"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      }
    ]
  },
  "quality": 0.88,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:did-nostr-identity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:957135bea9c4cb2bcf1fe9809e9792ed2361fe3db21c4a9c0671d19d003b1038"
  },
  "vc:resolutions": [
    {
      "raw": "[[ADR-013]]",
      "resolved": "urn:visionflow:linked:adr-013",
      "kind": "StubLink"
    },
    {
      "raw": "[[AgenticSystemsDomain]]",
      "resolved": "urn:visionflow:linked:ai-application",
      "kind": "StubLink"
    },
    {
      "raw": "[[BIP-340]]",
      "resolved": "urn:visionflow:linked:bip-340",
      "kind": "StubLink"
    },
    {
      "raw": "[[BIP-340 Cryptography]]",
      "resolved": "urn:visionflow:linked:bip-340-cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[BIP-340 Schnorr Keypair]]",
      "resolved": "urn:visionflow:linked:bip-340-schnorr-keypair",
      "kind": "StubLink"
    },
    {
      "raw": "[[BIP-340 Schnorr Keypair|BIP-340 x-only public key]]",
      "resolved": "urn:visionflow:linked:bip-340-schnorr-keypair",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Identity]]",
      "resolved": "urn:visionflow:linked:blockchain-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Credential Issuance]]",
      "resolved": "urn:visionflow:linked:credential-issuance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Identity]]",
      "resolved": "urn:visionflow:linked:cryptographic-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[CryptographyDomain]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Trust]]",
      "resolved": "urn:visionflow:linked:decentralised-trust",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Resolution]]",
      "resolved": "urn:visionflow:linked:did-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ethereum Name Service]]",
      "resolved": "urn:visionflow:linked:ethereum-name-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[IdentityDomain]]",
      "resolved": "urn:visionflow:linked:identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Message Signing]]",
      "resolved": "urn:visionflow:linked:message-signing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nostr NIP-01]]",
      "resolved": "urn:visionflow:linked:nostr-nip-01",
      "kind": "StubLink"
    },
    {
      "raw": "[[RFC 8610]]",
      "resolved": "urn:visionflow:linked:rfc-8610",
      "kind": "StubLink"
    },
    {
      "raw": "[[Schnorr Signatures]]",
      "resolved": "urn:visionflow:linked:schnorr-signatures",
      "kind": "StubLink"
    },
    {
      "raw": "[[Self-Sovereign Key Management]]",
      "resolved": "urn:visionflow:linked:self-sovereign-key-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract Verification]]",
      "resolved": "urn:visionflow:linked:smart-contract-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Core]]",
      "resolved": "urn:visionflow:linked:w3-c-did-core",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Core|W3C Decentralised Identifier]]",
      "resolved": "urn:visionflow:linked:w3-c-did-core",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Method]]",
      "resolved": "urn:visionflow:linked:w3-c-did-method",
      "kind": "StubLink"
    },
    {
      "raw": "[[Federation Surface|federation surfaces]]",
      "resolved": "urn:visionflow:owl:class:federation-surface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureLayer]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Nostr Protocol]]",
      "resolved": "urn:visionflow:owl:class:nostr-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:owl:class:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key]]",
      "resolved": "urn:visionflow:owl:class:public-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract|smart contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credential Surface|verifiable credential]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credential-surface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VisionClaw Agentic Container|VisionClaw agent]]",
      "resolved": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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

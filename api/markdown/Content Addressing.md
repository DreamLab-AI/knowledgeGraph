iri:: http://narrativegoldmine.com/ontology#ContentAddressing
uri:: urn:visionclaw:concept:blockchain:content-addressing
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:content-addressing
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Content Addressing
content-hash:: sha256-12-a2b3c4d5e6f7
status:: complete
maturity:: established
quality-score:: 0.92
authority-score:: 0.96
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - The fundamental principle (R1 in ADR-013) that derives a resource's URI deterministically from its [[Content Hash|cryptographic content hash]] (SHA-256), ensuring immutability, tamper-detection, and deduplication, enabling [[VisionClaw Agentic Container|VisionClaw]] artefacts (credentials, receipts, events, pods, activities) to be referenced by their content rather than by location or opaque identifiers.

- ### Semantic Classification
  - owl-class:: blockchain:ContentAddressing
  - owl-role:: Concept
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[DistributedSystemsDomain]], [[DataIntegritydomain]]
  - implemented-in-layer:: [[IdentifierLayer]], [[DataLayer]]

- ### Relationships
  - has-part:: [[SHA-256 Hashing]], [[Content Hash]], [[Deterministic Serialisation]], [[Hash Minting]]
  - requires:: [[Cryptographic Hash Function]], [[Canonical JSON]], [[Deterministic Encoding]]
  - enables:: [[Immutability]], [[Tamper Detection]], [[Deduplication]], [[Permanent Referenceability]], [[Decentralised Storage]]
  - implements:: [[IPFS Content Addressing]], [[Git Object Addressing]], [[Content-Addressed Storage Principles]]
  - bridges-to:: [[Blockchain Hash Functions]] (domain: blockchain), [[Merkle Tree]] (domain: cryptography), [[Distributed Hash Table]] (domain: networking)

- ### Content

  Content addressing is the cryptographic foundation of the [[URI Canonicaliser|VisionClaw URI grammar]]. Instead of assigning opaque identifiers (UUID, sequential IDs), every resource is identified by its **content hash**. This radical simplification has profound implications for trust, integrity, and decentralisation.

  #### The R1 Rule: Content-Addressed URIs

  For any agent-emitted artefact (credential, receipt, activity, pod state snapshot), the URI is derived as:

  ```
  <local> = sha256-12-<first 12 hex chars of SHA-256(stableStringify(payload))>
  <urn> = urn:visionclaw:<kind>:<scope>:<local>
  ```

  For example, an agent issues a credential. The credential is serialised to canonical JSON, hashed with SHA-256, and the first 12 hex characters become the URI's local segment:

  ```
  Credential (canonical JSON): {"issuer":"did:nostr:0abc...ef","subject":"task-99",...}
  SHA-256 hash: d3adb33ff1e9a1c2b3d4e5f6a7b8c9da...
  First 12 chars: d3adb33ff1e9
  Full URI: urn:visionclaw:credential:0abc...ef:sha256-12-d3adb33ff1e9
  ```

  #### Why Content Addressing?

  **1. Immutability**
  If the credential is later modified, its hash changes, and so does its URI. This breaks any downstream reference to the old URI, making tampering immediately obvious. The URI is a fingerprint of the exact content.

  **2. Deduplication**
  Two agents that issue identical credentials will produce the same URI. External systems can detect duplicates without comparing full payloads.

  **3. Decentralised Referenceability**
  Because the URI is derived from content, not assigned by a central registry, anyone can independently verify the URI is correct. No authority needed.

  **4. Permanent URIs**
  Content hashes are permanent. Even if an agent is deleted, its artefacts' URIs remain stable and referenceability is preserved—the content doesn't move, so the reference doesn't break.

  **5. Offline Verification**
  Given an artefact and its URI, anyone can verify that the URI is correct by recomputing the hash offline. No authority query needed.

  #### Canonical JSON and Determinism

  Content addressing depends absolutely on **deterministic serialisation**. The same content must always produce the same JSON string, and thus the same hash.

  VisionClaw uses [[RFC 8785 Canonical JSON]]:

  ```javascript
  function canonicalJSON(obj) {
    // 1. Recursively sort all keys alphabetically
    // 2. Emit numbers without unnecessary decimal points or exponents
    // 3. Emit strings using UTF-8 with minimal escaping
    // 4. No whitespace, no trailing commas
  }
  ```

  Example:

  ```
  Input (unsorted, whitespace):
  {
    "issuer": "did:nostr:0abc...ef",
    "timestamp": 1735286096000,
    "subject": "task-99"
  }

  Canonical JSON (sorted, no whitespace):
  {"issuer":"did:nostr:0abc...ef","subject":"task-99","timestamp":1735286096000}

  SHA-256:
  d3adb33ff1e9a1c2b3d4e5f6a7b8c9da...
  ```

  If any field changes or is reordered, the hash changes. This is the guarantee that enables content addressing.

  #### 12-Hex Truncation

  Why truncate the SHA-256 (256 bits = 64 hex chars) to just 12 hex characters (48 bits)?

  **Tradeoff: Readability vs. Security**

  - **Full hash (64 hex chars)**: Cryptographically secure, but URIs are unwieldy.
    - `urn:visionclaw:credential:0abc...ef:sha256-d3adb33ff1e9a1c2b3d4e5f6a7b8c9da1234567890abcdef...`

  - **Truncated hash (12 hex chars)**: Much shorter, practical for URLs and human inspection.
    - `urn:visionclaw:credential:0abc...ef:sha256-12-d3adb33ff1e9`

  **Collision probability**: With 12 hex chars (2^48 possible values), the birthday paradox says collision probability becomes significant at ~16 million items. For practical VisionClaw deployments (millions, not trillions of artefacts), 12 chars provide sufficient collision resistance.

  **Mitigation**: If a collision occurs (two different credentials hash to the same 12-char prefix), the system detects it and the URI becomes ambiguous. In that case, the full 64-char hash is used as a tiebreaker. This is rare enough to not affect performance.

  #### Content-Addressed Storage

  Once an artefact has a content-addressed URI, it can be stored and retrieved efficiently:

  1. **Store by URI**: The artefact is stored under its URI key (e.g., in a key-value store, database, or [[Solid Pod Storage|Solid pod]]).
  2. **Retrieve by URI**: External systems fetch the artefact using the URI directly.
  3. **Verify on Retrieval**: The consumer recomputes the hash and verifies it matches the URI. If not, the artefact was corrupted or tampered with.

  This is the foundation of distributed storage systems like IPFS (InterPlanetary File System), where files are addressed by their content hash and can be retrieved from any node that has them.

  #### Content-Addressed Credentialling

  A practical example: a smart contract wants to verify that an agent completed a task.

  1. **Agent completes task and issues credential**.
     - Credential (canonical JSON): `{"issuer":"did:nostr:0abc...ef","task":"task-99","result":"success",...}`
     - Hash and URI: `urn:visionclaw:credential:0abc...ef:sha256-12-deadbeef`
     - Credential is signed by the agent.

  2. **Agent publishes credential to [[Nostr Relay|Nostr relay]]**.
     - Other agents and smart contracts can fetch it.

  3. **Smart contract queries the credential**.
     - Contract fetches the credential by URI.
     - Contract recomputes the hash and verifies it matches the URI.
     - Contract verifies the agent's Schnorr signature using the agent's public key.
     - If both checks pass, the credential is authentic and unmodified.

  4. **Contract proceeds with payment**.
     - The contract pays the agent, secure in the knowledge that the credential is genuine.

  This entire flow requires no centralised authority; the content hash itself is the assurance mechanism.

  #### Comparison to Traditional Identifiers

  | Aspect | Traditional UUID | Content Hash |
  |--------|-----------------|--------------|
  | Derivation | Random, centrally assigned | Deterministic from content |
  | Immutability | Can be reassigned to new content | Breaks if content changes |
  | Deduplication | Requires cross-system queries | Automatic (same content = same hash) |
  | Offline Verification | Impossible (requires central registry) | Possible (recompute hash) |
  | Permanence | Depends on registry | Intrinsic; hash never expires |
  | Collision Risk | Negligible (2^128 space) | Negligible (2^48 for practical use) |

  #### Limitations and Considerations

  - **Content Immutability Constraint**: Because the URI is derived from content, you cannot update a resource in-place. You must create a new version (new content, new hash, new URI). This is often desirable (audit trail, immutability), but requires disciplined versioning.
  - **Privacy Leakage**: The content hash can be queried to see if a specific payload exists. In sensitive domains, this leaks information (e.g., "I can prove this credential exists by knowing its hash"). Mitigation: use [[Privacy Filter|privacy-preserving hashing]] or asymmetric encryption.
  - **Storage Overhead**: Multiple versions of similar objects create storage duplication. Deduplication at the storage layer (copy-on-write filesystems) mitigates this.

  #### Evolution of Credentials

  If an agent needs to issue an updated credential (e.g., correcting an error):

  1. **Old credential remains immutable** at its original URI.
  2. **New credential issued** with new content and new URI.
  3. **Old credential includes a link** to the new credential ("superseded by...").
  4. **Verifiers check the link** and can choose to accept the new version.

  This audit trail is intrinsic to content addressing.

- ### Provenance
  - sources:: [[ADR-013]], [[RFC 8785]], [[IPFS Content Addressing]], [[Git Objects]], [[Merkle DAGs]], [[SHA-256 Standard]]
  - migration-date:: 2026-04-26T00:00:00Z

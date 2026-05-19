- ### Definition
  - A standardised [[JSON-LD 1.1]] surface (S3) for issuing and storing [[W3C Verifiable Credentials 2.0|W3C VC 2.0]] credentials signed by agents' [[DID Nostr Identity|did:nostr]] DIDs using [[Schnorr Signature|Schnorr signatures]] over [[JCS Canonicalisation|JCS-canonicalised]] payloads, enabling verifiable attestations of agent capabilities, work completions, and claims that are independently auditable without central authorities.

- ### Semantic Classification
  - owl-class:: blockchain:VerifiableCredentialSurface
  - owl-role:: Object
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[CredentialsDomain]], [[TrustDomain]]
  - implemented-in-layer:: [[DataLayer]], [[CredentialsLayer]]

- ### Relationships
  - has-part:: [[Credential Issuance]], [[Credential Verification]], [[Schnorr Proof]], [[JCS Canonicalisation]], [[Credential Indexing]]
  - requires:: [[W3C VC 2.0 Standard]], [[JSON-LD 1.1]], [[SHA-256 Hashing]], [[Schnorr Signatures]], [[DID Resolution]]
  - enables:: [[Verifiable Claims]], [[Capability Attestation]], [[Work Completion Proof]], [[Decentralised Trust]], [[Blockchain Verification]]
  - implements:: [[W3C Verifiable Credentials 2.0]], [[W3C Proof Types]], [[RFC 8785 Canonical JSON]]
  - bridges-to:: [[Smart Contract Verification]] (domain: blockchain), [[Blockchain Oracle]] (domain: blockchain), [[Compliance Audit]] (domain: governance)

- ### Content

  The Verifiable Credential Surface (S3) is where agents issue cryptographically signed claims about work completed, capabilities possessed, or attestations received from other agents. These credentials are designed to be independently verifiable without requiring trust in the issuing agent or centralised authorities.

  #### Credential Structure

  A VisionClaw agent credential follows [[W3C Verifiable Credentials 2.0]]:

  ```json
  {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://visionclaw.dreamlab-ai.systems/ns/v1"
    ],
    "type": [
      "VerifiableCredential",
      "vcw:AgentWorkCredential"
    ],
    "id": "urn:visionclaw:credential:0123...ab:sha256-12-deadbeef",
    "issuer": "did:nostr:0123...ab",
    "issuanceDate": "2026-04-26T12:34:56Z",
    "credentialSubject": {
      "id": "did:nostr:9876...xy",
      "taskId": "urn:visionclaw:bead:9876...xy:task-42",
      "taskDescription": "Classify 1000 documents",
      "completionTime": "2026-04-26T12:34:45Z",
      "accuracy": 0.94,
      "proof": "Verified by visual inspection and unit tests"
    },
    "proof": {
      "type": "SchnorrSignature2025",
      "created": "2026-04-26T12:34:56Z",
      "verificationMethod": "did:nostr:0123...ab#key-0",
      "proofPurpose": "assertionMethod",
      "signatureValue": "abcd...ef"
    }
  }
  ```

  **Key Elements**:

  - **id**: A [[URI Canonicaliser|urn:visionclaw: URI]] uniquely identifying this credential.
  - **issuer**: The agent's [[DID Nostr Identity|did:nostr]] DID that issued the credential.
  - **credentialSubject**: The claim being made (who did what, with what outcome).
  - **proof**: A Schnorr signature over a canonicalised hash of the credential's core fields.

  #### Proof Types: Schnorr Signatures

  Unlike traditional [[X.509 Certificate|X.509 certificates]] that rely on centralised certificate authorities, VisionClaw credentials use **Schnorr signatures** (BIP-340):

  1. **Canonical JSON Serialisation**: The credential's core fields (issuer, subject, claim, timestamp) are serialised to [[JCS Canonicalisation|canonical JSON]] (RFC 8785).
  2. **SHA-256 Hashing**: The canonical JSON is hashed to produce a 256-bit digest.
  3. **Schnorr Signing**: The agent signs the digest using its private key, producing a 64-byte signature.
  4. **Proof Embedding**: The signature is included in the credential's `proof` field alongside the `verificationMethod` (pointing to the agent's public key).

  #### Verification

  Any third party (another agent, a compliance auditor, a smart contract) can verify a credential:

  1. **Retrieve the credential** (from the [[Federation Surface|federation surface]], a [[Solid Pod Storage|Solid pod]], or elsewhere).
  2. **Extract the proof** (signature, verification method).
  3. **Recompute the canonical JSON hash** (same deterministic algorithm as issuance).
  4. **Resolve the issuer's DID** to obtain the public key.
  5. **Verify the Schnorr signature** using the hash and public key.

  If verification succeeds, the credential is authentic and unmodified. If it fails, either the credential is forged or tampered with.

  #### Credential Types

  VisionClaw agents issue several credential types:

  **1. Agent Capability Credential**
  - **Issued by**: Operator or certification authority.
  - **Claim**: "Agent X is capable of LLM inference, supporting up to 100 concurrent requests."
  - **Use**: Allows peer agents to decide whether to assign tasks.

  **2. Work Completion Credential**
  - **Issued by**: Completing agent.
  - **Claim**: "I completed task Y in time Z with result R."
  - **Use**: Proof of work for payment, compliance, auditing.

  **3. Attestation Credential**
  - **Issued by**: Verifying agent or human.
  - **Claim**: "I verified that agent X's claim about task Y is accurate."
  - **Use**: Multi-signature validation, consensus building.

  **4. Delegation Credential**
  - **Issued by**: Agent A.
  - **Claim**: "Agent B is authorised to act on my behalf for tasks matching pattern Z."
  - **Use**: Hierarchical task distribution, agent-to-agent proxy.

  #### Content Addressing of Credentials

  Each credential's `id` is a [[URI Canonicaliser|urn:visionclaw: URI]] computed deterministically:

  ```
  Credential payload (issuer, subject, claim, timestamp, proof) → canonicalise to JSON
  SHA-256 hash the JSON → take first 12 hex chars
  id = urn:visionclaw:credential:0123...ab:sha256-12-<hash>
  ```

  Same credential always gets the same URI. Different credentials (even from the same issuer, on the same task) get different URIs. This enables precise referencing and tamper detection.

  #### Integration with Smart Contracts

  A smart contract on Ethereum or Bitcoin can verify agent credentials:

  ```solidity
  // Pseudo-code
  function verifyAgentCompletion(credential) {
    // Extract proof and compute hash
    bytes32 hash = keccak256(abi.encodePacked(credential.core));
    
    // Recover signer's public key from Schnorr signature
    // (requires Schnorr verification in solidity or via precompile)
    address signer = recoverSchnorr(credential.proof);
    
    // Check that signer matches the issuer DID
    require(signer == credential.issuer);
    
    // Credential is valid; proceed with payment
    payable(credential.issuer).transfer(reward);
  }
  ```

  This enables **trustless, decentralised task markets** where smart contracts hire agents, agents complete work, agents issue credentials, and contracts verify and pay—all without intermediaries.

  #### Revocation and Expiration

  Credentials can include:

  - **Expiration Date**: Automatically invalid after a certain time.
  - **Revocation URI**: A URL where the issuer can publish a revocation if the credential is found to be false.

  Because there's no centralised revocation authority, revocation relies on relays or smart contracts to anchor the revocation permanently.

  #### Compliance and Auditability

  Credentials enable comprehensive audits:

  1. A compliance system queries an agent's credentials surface.
  2. For each credential, it verifies the signature and checks the issuer's reputation.
  3. It links credentials to beads to understand the full work chain.
  4. It generates a compliance report certifying that work was completed as claimed.

  This is far more transparent than centralised systems where auditors must trust the platform operator.

- ### Provenance
  - sources:: [[W3C VC 2.0 Spec]], [[RFC 8785]], [[BIP-340]], [[Schnorr Signature Scheme]], [[PRD-006]]
  - migration-date:: 2026-04-26T00:00:00Z
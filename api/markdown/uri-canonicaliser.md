- ### Definition
  - The canonical URI minting and resolution engine implementing the [[VisionClaw Agentic Container|VisionClaw]] urn:visionclaw: grammar (ADR-013, R1–R3 rules) for stable, content-addressed, and scope-bearing identifiers, enabling deterministic roundtrip serialisation and cryptographic verification of agent-emitted artefacts.

- ### Semantic Classification
  - owl-class:: infrastructure:URICanonicaliser
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[SemanticWebDomain]], [[DataGovernanceDomain]]
  - implemented-in-layer:: [[InfrastructureLayer]], [[DataLayer]]

- ### Relationships
  - has-part:: [[Content Addressing]], [[Scope Bearer]], [[Slug Derivation]], [[Hash Computation]]
  - requires:: [[SHA-256 Hash Function]], [[JSON Stringification]], [[BIP-340 Pubkey]], [[URI RFC 8141]]
  - enables:: [[Content Addressing]], [[Deterministic Serialisation]], [[Tamper Detection]], [[Decentralised Resolution]]
  - implements:: [[RFC 8141 URN Syntax]], [[IETF Content-Addressable Architecture]], [[W3C DID Core]]
  - bridges-to:: [[Blockchain Hash Function]] (domain: blockchain), [[Content-Addressed Storage]] (domain: ngm)

- ### Content

  The URI Canonicaliser is a name service that generates and resolves all identifiers issued by [[VisionClaw Agentic Container|VisionClaw]]. It is the critical link between agent-emitted objects (credentials, receipts, events) and the global semantic web.

  #### The urn:visionclaw: Grammar

  All canonical URIs follow the pattern:

  ```
  urn:visionclaw:<kind>:[<scope>:]<local>
  ```

  **Kind**: The resource type (concept, relation, credential, mandate, receipt, activity, event, pod, envelope, bead, dataset, skill, mcp, adr, prd, ddd, thing, agent, meta).

  **Scope**: For owner-bearing kinds (credential, mandate, receipt, activity, event, pod, envelope, bead, dataset), the scope is the agent's [[BIP-340 Schnorr Keypair|BIP-340 x-only pubkey]] in lowercase hex (64 chars). For static kinds (skill, adr, mcp, thing), there is no scope.

  **Local**: The final segment, derived by one of three rules:

  - **R1 (Content-Addressed)**: For objects determined entirely by their payload (credentials, receipts, events), `<local> = sha256-12-<first 12 hex chars of SHA-256(stableStringify(payload))>`. Same input always yields the same URI.
  - **R2 (Scope-Bearing with Slug)**: For datasets and beads owned by an agent, `<local>` is a human-readable slug (e.g., `task-123`, `training-set-a`). The URI is stable on identity, but unique within the agent's scope.
  - **R3 (Stable-on-Identity)**: For static artefacts (skills, ADRs, MCPs), `<local>` is the preferred term converted to kebab-case, e.g., `urn:visionclaw:skill:console-buddy`.

  #### Minting in Practice

  When an agent issues a [[Verifiable Credential Surface|verifiable credential]], the Canonicaliser mints a URI as follows:

  1. **Serialise the credential subject** (who, what claim, proof) to JSON using a deterministic order (canonical JSON).
  2. **Compute SHA-256** of the canonical JSON.
  3. **Take the first 12 hex chars** of the hash.
  4. **Prepend the agent's pubkey** (scope).
  5. **Mint the URI**: `urn:visionclaw:credential:0abc...ef:sha256-12-deadbeef`.

  The URI is written into the credential's `@id` field. Later, if the credential is re-serialised (e.g., exported to another system), the URI can be recomputed deterministically. If the payload changes even slightly (a timestamp shift, a name typo), the hash changes, so the URI changes. This makes URI collision extremely unlikely and enables tamper detection.

  #### Resolution

  Resolution is the inverse operation. Given a URI, the Canonicaliser:

  1. **Parses the URN** using RFC 8141 syntax.
  2. **Looks up the kind** in its registry (pod, credential, activity, etc.).
  3. **If R1 (content-addressed)**, queries the agent's [[Federation Surface]] to find an object with a matching hash.
  4. **If R2 or R3**, constructs an HTTPS IRI (the operator-supplied management-api base + a path) and returns it.

  For example:

  - `urn:visionclaw:credential:0abc...ef:sha256-12-deadbeef` → `https://agentbox.local/v1/agent/0abc...ef/credential/deadbeef`
  - `urn:visionclaw:skill:console-buddy` → `https://agentbox.local/v1/skills/console-buddy`

  #### Content-Hash Computation

  The content hash is computed over a **canonical payload** consisting of:

  ```json
  {
    "definition": "<definition text>",
    "owlClass": "<owl-class string>",
    "relationships": {
      "subclassOf": [<subclass URIs>],
      "hasPart": [<component URIs>],
      "requires": [<dependency URIs>],
      "enables": [<capability URIs>],
      "implements": [<implementation URIs>],
      "bridgesTo": [<cross-domain URIs>]
    }
  }
  ```

  The payload is stringified using **stable JSON** (keys in alphabetical order, no whitespace), then hashed with SHA-256. The first 12 hex chars become the content hash. This ensures:

  1. **Determinism**: Same payload always produces the same hash.
  2. **Stability Across Serialisations**: Whether the credential is stored as JSON, YAML, or RDF, the content hash remains constant.
  3. **Short, Readable Hashes**: 12 hex chars (48 bits) are short enough for URLs whilst providing collision resistance for practical use cases.

  #### Ontology Integration

  The Canonicaliser is also used to mint ontology concept URIs. Given a concept's preferred term (e.g., "AI Agent System") and domain (ai), the Canonicaliser derives a slug:

  ```
  preferred-term = "AI Agent System"
  domain = "ai"
  slug = kebab-case("AI Agent System") = "ai-agent-system"
  URI = urn:visionclaw:concept:ai:ai-agent-system
  IRI = http://narrativegoldmine.com/artificial-intelligence#AIAgentSystem
  ```

  This ensures that the same concept always has the same URI, across rebuilds and federated systems.

  #### Verifiability and Signing

  When an agent signs a credential, the signature is computed over the credential's **content-hash**. Because the content hash is deterministic, anyone can:

  1. Retrieve the credential.
  2. Recompute the content hash.
  3. Look up the agent's public key (from its [[DID Nostr Identity|did:nostr]]).
  4. Verify the Schnorr signature using the hash and public key.

  This enables **offline verification**: no central authority is needed to confirm whether a credential is genuine.

- ### Provenance
  - sources:: [[ADR-013]], [[RFC 8141]], [[W3C DID Core]], [[SHA-256]], [[BIP-340]]
  - migration-date:: 2026-04-26T00:00:00Z
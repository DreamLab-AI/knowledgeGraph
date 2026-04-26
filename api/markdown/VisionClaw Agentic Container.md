iri:: https://visionclaw.dreamlab-ai.systems/ns/v2/artificial-intelligence#VisionclawAgenticContainer
uri:: urn:visionclaw:concept:artificial-intelligence:visionclaw-agentic-container
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:visionclaw-agentic-container
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: VisionClaw Agentic Container
content-hash:: sha256-12-a1b2c3d4e5f6
status:: complete
maturity:: established
quality-score:: 0.88
authority-score:: 0.92
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A [[Sovereign Mesh|sovereign, manifest-driven]] agentic runtime container that orchestrates [[DID Nostr Identity|DID Nostr]] agents across a decentralised [[Peer-to-Peer Network|peer-to-peer network]], enabling autonomous agents to operate with verifiable credentials, pluggable adapters, and content-addressed state through a unified [[URI Canonicaliser|URI grammar]] and [[Linked Data Encoder|JSON-LD federation surfaces]].

- ### Semantic Classification
  - owl-class:: artificial-intelligence:VisionClawAgenticContainer
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[SovereignDataDomain]], [[BlockchainIntegrationDomain]]
  - implemented-in-layer:: [[RuntimeLayer]], [[InfrastructureLayer]], [[CoordinationLayer]]

- ### Relationships
  - has-part:: [[Sovereign Mesh]], [[URI Canonicaliser]], [[DID Nostr Identity]], [[Linked Data Encoder]], [[Adapter Slot]], [[Agent Event Stream]], [[Verifiable Credential Surface]], [[Privacy Filter]]
  - requires:: [[Manifest File]], [[BIP-340 Schnorr Keypair]], [[Nostr Relay]], [[Solid Pod Storage]], [[JSON-LD Context]]
  - enables:: [[Autonomous Agent Operation]], [[Decentralised Coordination]], [[Verifiable Assertion]], [[Content Addressing]], [[Cross-Agent Federation]]
  - implements:: [[W3C DID Core]], [[W3C Verifiable Credentials 2.0]], [[JSON-LD 1.1]], [[SPARC Architecture]]
  - bridges-to:: [[AI Agent System]] (domain: ai), [[Smart Contract]] (domain: blockchain), [[Distributed System]] (domain: ngm)

- ### Content

  VisionClaw is a sovereign agentic runtime designed for autonomous agent orchestration at the infrastructure layer. Unlike centralised AI agent platforms that depend on a single provider's API, VisionClaw operates as a decentralised mesh where agents are peers, each with cryptographic identity and the ability to issue, verify, and exchange credentials independently.

  #### Architectural Vision

  The container is structured around four core principles:

  1. **Sovereignty**: Each agent holds its own [[BIP-340 Schnorr Keypair|Schnorr keypair]] and operates under a [[DID Nostr Identity|did:nostr]] identity. No central authority controls keys or mediates communication.

  2. **Manifest-Driven**: Agent behaviour is specified by a machine-readable manifest file—akin to a Kubernetes deployment or NixOS system declaration—allowing agents to be reproducible, auditable, and introspectable.

  3. **Federation Through Standards**: State is emitted as [[JSON-LD 1.1]] against pinned contexts. This enables [[Linked Data Encoder|semantic federation]] across heterogeneous agent systems, even when they don't share code or trust anchors.

  4. **Content-Addressed Provenance**: Every artefact produced by an agent (credentials, events, state snapshots) is given a [[URI Canonicaliser|canonical urn:visionclaw: URI]] computed from its content hash, enabling tamper detection and permanent referenceability.

  #### Runtime Bootstrap and Lifecycle

  VisionClaw agents start from an **immutable bootstrap** (ADR-006). A manifest declares the agent's initial configuration: which adapters to load, which MCPs to trust, memory constraints, and security policies. On start, the runtime:

  1. Loads the manifest from a content-addressed source
  2. Verifies the manifest's signature (if required)
  3. Initialises pluggable adapters for storage, memory, events, beads, and orchestration
  4. Contacts configured [[Nostr Relay|Nostr relays]] to discover peers
  5. Begins accepting work through the [[Agent Event Stream]]

  The runtime is **containerised**: it runs in a sandbox with constrained resource access, mediated by the [[Adapter Slot]] architecture. This isolation boundary is non-negotiable, enforcing the principle that no agent can directly access the host filesystem or network without explicit adapter permission.

  #### Operational Surfaces

  VisionClaw exposes five standardised JSON-LD surfaces (see [[Federation Surface]]):

  - **S1: Pod Index** — listing available [[Solid Pod Storage|Solid pods]] and their permissions
  - **S3: Verifiable Credentials** — [[Verifiable Credential Surface|W3C VC 2.0 credentials]] with [[JCS Canonicalisation|JCS canonicalisation]] for signature verification
  - **S6: Agent Events** — telemetry stream (birth, activity, termination) via WebSocket
  - **S9: Memory Snapshots** — periodic agent memory state encoded as [[Linked Data Encoder|JSON-LD]]
  - **S11: Bead Catalogue** — catalogue of work units ([[Agent Bead|beads]]) and their completion status

  Each surface is queryable, linkable, and introspectable. An external system can follow URIs to discover agent state, credentials, and work history without requiring direct access to the container.

  #### Integration with Broader Ecosystems

  VisionClaw is designed to interoperate with:

  - **[[Blockchain]]**: Agents can issue [[Verifiable Credential Surface|verifiable credentials]] that anchor to blockchain-backed [[DID Registry|DID registries]], enabling on-chain verification of off-chain agent claims.
  - **[[SPARC Methodology]]**: The manifest and lifecycle integrate cleanly with SPARC task planning, mode switching, and adaptive orchestration.
  - **[[Model Context Protocol]]**: MCPs are declared as trusted [[Consultation MCP|consultation MCPs]] in the manifest, allowing agents to delegate reasoning to external LLM endpoints.
  - **[[Solid Pod Storage]]**: Agent state can be stored in [[Solid Pod|Solid pods]], respecting [[Linked Data Platform|LDP]] conventions and enabling third-party tooling to query agent-emitted data.

  #### Security and Privacy Model

  All inter-agent communication is authenticated via [[DID Nostr Identity|did:nostr]] DIDs. Sensitive outputs are filtered through the [[Privacy Filter|PII redaction sidecar]] before emission. Credentials are signed using [[BIP-340 Schnorr Keypair|Schnorr signatures]] over [[JCS Canonicalisation|JCS-canonicalised]] payloads, making attestation tamper-evident.

  The [[Adapter Slot|adapter isolation boundary]] means that even if a malicious agent gains execution, its ability to exfiltrate data or modify state is constrained by the adapter's permission model. An agent cannot change its own keypair, cannot forge credentials under another agent's DID, and cannot bypass the [[Privacy Filter]] on outputs.

- ### Provenance
  - sources:: [[ADR-006]], [[ADR-013]], [[ADR-005]], [[ADR-007]], [[ADR-008]], [[ADR-009]], [[ADR-010]], [[ADR-012]], [[PRD-006]], [[DDD-004]]
  - migration-date:: 2026-04-26T00:00:00Z

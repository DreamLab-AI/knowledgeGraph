iri:: http://narrativegoldmine.com/ontology#SovereignMesh
uri:: urn:visionclaw:concept:blockchain:sovereign-mesh
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:sovereign-mesh
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Sovereign Mesh
content-hash:: sha256-12-b2c3d4e5f6a7
status:: complete
maturity:: established
quality-score:: 0.87
authority-score:: 0.90
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A peer-to-peer agent network where each node is identified by a [[DID Nostr Identity|did:nostr:<pubkey>]] DIDs and communicates via [[Nostr Relay|Nostr relays]], enabling decentralised agent discovery, gossip, and work distribution without a centralised broker or coordinator, whilst respecting each agent's sovereignty over its own keys and credentials.

- ### Semantic Classification
  - owl-class:: blockchain:SovereignMesh
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[P2PNetworkDomain]], [[SovereignDataDomain]]
  - implemented-in-layer:: [[NetworkLayer]], [[CoordinationLayer]]

- ### Relationships
  - has-part:: [[DID Nostr Identity]], [[Nostr Relay]], [[Peer Discovery]], [[Gossip Protocol]], [[Agent Beacon]]
  - requires:: [[BIP-340 Schnorr Keypair]], [[Nostr Protocol]], [[Message Signing]], [[Network Connectivity]]
  - enables:: [[Decentralised Agent Coordination]], [[Trustless Peer Communication]], [[Work Distribution]], [[Federation]]
  - implements:: [[W3C DID Core]], [[Nostr Protocol (NIP-01)]], [[Gossip Consensus]]
  - bridges-to:: [[Blockchain Network]] (domain: blockchain), [[Distributed System]] (domain: ngm), [[Decentralised Autonomous Organisation]] (domain: blockchain)

- ### Content

  The Sovereign Mesh is the networking layer of [[VisionClaw Agentic Container|VisionClaw]]. It replaces centralised brokers (e.g., RabbitMQ, Kafka) with a Nostr-based [[Peer-to-Peer Network|peer-to-peer network]] where agents discover and communicate with each other without intermediary dependency.

  #### Mesh Architecture

  Each agent in the mesh:

  1. **Holds a [[DID Nostr Identity|did:nostr:<pubkey>]]** — a public identity derived from its BIP-340 Schnorr public key. This identity is globally unique and cryptographically verifiable.
  2. **Connects to one or more [[Nostr Relay|Nostr relays]]** — distributed relay servers that broadcast and store events (work assignments, availability announcements, task completions).
  3. **Publishes an [[Agent Beacon|agent beacon]]** — a periodic message announcing availability, current load, capabilities, and a verifiable proof-of-stake (or proof-of-work) token.
  4. **Receives work through Nostr events** — incoming [[Agent Bead|beads]] (work units) are published as Nostr events and tagged with the agent's DID. The agent filters events matching its DID, retrieves the bead payload, and begins work.
  5. **Emits completion events** — upon finishing work, the agent publishes a completion event with a signed receipt and status, referencing the original bead URI.

  #### Peer Discovery and Load Balancing

  Agents discover peers by querying relays for recent beacons. A high-level discovery process:

  1. Agent A publishes a beacon announcing "I can handle LLM inference tasks, capacity 10 concurrent, uptime 99.5%"
  2. Agent B sees the beacon, evaluates A's capabilities against pending work
  3. If a match, B publishes a bead (work unit) tagged with A's DID
  4. A receives the bead event, processes it, and emits a completion receipt

  Load balancing is emergent and reputational: agents that complete work faster and with fewer failures attract more beads. Poorly performing agents naturally receive fewer assignments as other agents route work elsewhere. There is no central load balancer.

  #### Trust and Verification

  All mesh communication is **cryptographically signed**. An agent cannot forge a message on behalf of another agent because doing so would require the other agent's private key. Relays can verify message authenticity before storing or forwarding events.

  However, relays themselves are not trusted with agent data. If an agent has sensitive state, it uses the [[Privacy Filter|PII redaction sidecar]] before publishing to a public relay. Alternatively, agents can maintain private relays (running locally or in a trusted datacenter) and only connect to public relays for discovery and work assignment.

  #### Relay Selection and Topology

  An agent can connect to multiple relays simultaneously, improving resilience:

  - **Public relays** (e.g., nostr.pub, relay.damus.io) for global discovery
  - **Private relays** (e.g., operator-controlled or organisation-internal) for sensitive work
  - **Geo-local relays** for low-latency communication within a region

  The relay topology is declarable in the agent's manifest. On startup, the agent connects to all declared relays and subscribes to events matching its DID. If a relay goes offline, the agent continues operating against other relays; work distribution is not interrupted.

  #### Consensus and Dispute Resolution

  Because the mesh is [[Decentralised Coordination|decentralised]], there is no single authoritative ledger of "who did what and when". To resolve disputes (e.g., "Agent A claims I didn't receive the bead" vs. "I published it to three relays"), [[VisionClaw Agentic Container|VisionClaw]] agents rely on:

  1. **Immutable bead URIs** — each bead has a content-addressed [[URI Canonicaliser|urn:visionclaw:bead:...]] that pinpoints exactly what was assigned
  2. **Signed receipts** — the completing agent issues a [[Verifiable Credential Surface|verifiable credential]] that references the bead URI and includes their Schnorr signature
  3. **Relay attestations** — the relays that witnessed the event can be queried to confirm timestamp and visibility

  This model trades strong consistency for resilience: agents can work even if some relays are temporarily unreachable, at the cost of occasional re-submission of beads.

  #### Integration with Smart Contracts and Blockchain

  The Sovereign Mesh can interoperate with [[Smart Contract|smart contracts]]:

  - A smart contract on [[Ethereum]] or [[Bitcoin]] can publish work as a Nostr event to a relay, tagged with a contract address
  - [[AI Agent System|VisionClaw agents]] subscribe to that tag and retrieve work
  - Agents complete the work and publish signed completions to the same relay
  - The contract's oracle monitors the relay, aggregates agent completions, and settles payment on-chain

  This pattern enables **decentralised [[Robotic Process Automation|RPA]]** where smart contracts hire agents without intermediaries.

- ### Provenance
  - sources:: [[ADR-009]], [[NIP-01 Nostr Protocol]], [[W3C DID Core]], [[PRD-006]]
  - migration-date:: 2026-04-26T00:00:00Z

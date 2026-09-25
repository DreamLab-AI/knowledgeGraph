A framework for interconnected metaverse instances operating as a decentralised, AI-driven ecosystem, in which specialised software agents mediate interoperability, value exchange, identity, and adaptable governance across otherwise-sovereign virtual worlds. Each instance exposes a machine- and human-readable ontology (Linked-JSON) that agents at the edges translate and arbitrate between.

### In Plain Terms

- A living network that lets separate virtual worlds talk to each other. Small AI agents sit at the edges — some run a world, some ferry people and value between worlds, some help you set your preferences, some watch the law — and every world publishes a machine-readable map of itself so the agents can translate.

### Semantic Classification

### Content

- The Agentic Mycelia organises a decentralised metaverse around an **agent taxonomy** operating at the interstices between worlds:
  - **[[Scene Agent]]** — holds a global view of one space instance; manages access, in-group cryptography, reputation, real-time translation, enforcement, and keeps an up-to-date scene ontology available in Linked-JSON.
  - **[[Transfer Agent]]** — occupies the interstices between worlds; handles machine-to-machine and protocol translation, ingress/egress routing, reputation and value transfer, and digital-object variation.
  - **[[Onboarding Agent]]** — edge agent that helps a human set preferences, tolerances, and safeguarding limits, forming a [[Living Contract]] between user and network.
  - **[[Jurisdictional Agent]]** — provides the interface to external legal systems: monitoring, transparency reporting, and enforcement handshakes.
- Identity and ownership rest on a unified PKI (BIP39/BIP32 derivation, Nostr keys, RGB for client-side-validated transfer), so proof of ownership is deterministic yet private by default.
- **Three-layer framing (2026 best practice).** Recent research formalises ontology-grounded agent systems as three layers — *Role*, *Domain*, and *Interaction* ontologies. The Mycelia's agent taxonomy is the **Role** layer; each instance's Linked-JSON ontology is the **Domain** layer; and a governed coordination protocol (in the DreamLab estate, the ACSP agent-governance surface) supplies the **Interaction** layer that the framework calls for but does not itself standardise.

### Current Landscape (2026)

- Ontology-grounded retrieval is now the dominant pattern for keeping agents factual: ontology-grounded RAG reports large recall gains on relational, multi-hop questions, and governed knowledge-graph enrichment (e.g. multi-agent pipelines with a dedicated conflict-resolution stage and a human-in-the-loop gate) is the accepted way for agents to *write* to a shared ontology.
- A key nuance — "context interference" — shows that injecting *all* ontology context can displace a model's parametric knowledge, so **selective, budget-bounded, confidence-aware** grounding outperforms blanket injection. The Agentic Mycelia's per-instance, edge-translated ontology windows are an architectural expression of exactly this: agents exchange the *minimal sufficient* ontological slice at each boundary rather than the whole graph.
- See [[docs/USING-ONTOLOGY-DATA-AGENTICALLY]] for the full cited briefing.

### Provenance


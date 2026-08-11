public:: true
alias:: Agentic Mycelium, AgenticMycelia

# Agentic Mycelia
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9a155f3d44e7e7234589f34243312d8c3b2bca2a79d4d4bf7ee62b0ee6e0aeb3",
  "@type": "Page",
  "vc:slug": "agentic-mycelia",
  "title": "Agentic Mycelia",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:scene-agent", "vc:label": "Scene Agent" },
    { "@id": "urn:visionflow:linked:transfer-agent", "vc:label": "Transfer Agent" },
    { "@id": "urn:visionflow:linked:onboarding-agent", "vc:label": "Onboarding Agent" },
    { "@id": "urn:visionflow:linked:jurisdictional-agent", "vc:label": "Jurisdictional Agent" },
    { "@id": "urn:visionflow:linked:living-contract", "vc:label": "Living Contract" },
    { "@id": "urn:visionflow:owl:class:metaverse-architecture", "vc:label": "Metaverse Architecture" },
    { "@id": "urn:visionflow:owl:class:interoperability", "vc:label": "Interoperability" },
    { "@id": "urn:visionflow:owl:class:self-sovereign-identity", "vc:label": "Self-Sovereign Identity" },
    { "@id": "urn:visionflow:linked:adaptable-governance", "vc:label": "Adaptable Governance" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-11T18:33:41Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agentic-mycelia",
  "@type": "Class",
  "label": "Agentic Mycelia",
  "definition": "A framework for interconnected metaverse instances operating as a decentralised, AI-driven ecosystem, in which specialised software agents mediate interoperability, value exchange, identity, and adaptable governance across otherwise-sovereign virtual worlds. Each instance exposes a machine- and human-readable ontology (Linked-JSON) that agents at the edges translate and arbitrate between.",
  "vc:plainGloss": "A living network that lets separate virtual worlds talk to each other. Small AI agents sit at the edges — some run a world, some ferry people and value between worlds, some help you set your preferences, some watch the law — and every world publishes a machine-readable map of itself so the agents can translate.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse-architecture",
      "label": "Metaverse Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:scene-agent", "label": "Scene Agent" },
      { "@id": "urn:ngm:class:transfer-agent", "label": "Transfer Agent" },
      { "@id": "urn:ngm:class:onboarding-agent", "label": "Onboarding Agent" },
      { "@id": "urn:ngm:class:jurisdictional-agent", "label": "Jurisdictional Agent" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:interoperability", "label": "Interoperability" },
      { "@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity" },
      { "@id": "urn:ngm:class:adaptable-governance", "label": "Adaptable Governance" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:living-contract", "label": "Living Contract" }
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:visionclaw-server",
    "generatedAt": "2026-08-11T18:33:41Z",
    "method": "workinggraph-elevation",
    "source": "workingGraph/pages/Agentic Mycelia.md",
    "governanceCase": "acsp:31402:knowledge-enrichment:agentic-mycelia"
  }
}
```

- ### Definition
  - A framework for interconnected metaverse instances operating as a decentralised, AI-driven ecosystem, in which specialised software agents mediate interoperability, value exchange, identity, and adaptable governance across otherwise-sovereign virtual worlds.

- ### In Plain Terms
  - A living network that lets separate virtual worlds talk to each other. Small AI agents sit at the edges — some run a world, some ferry people and value between worlds, some help you set your preferences, some watch the law — and every world publishes a machine-readable map of itself so the agents can translate.

- ### Semantic Classification
  - owl-class:: spatial-computing:AgenticMycelia
  - owl-role:: Framework
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]]
  - subclass-of:: [[Metaverse Architecture]]

- ### Relationships
  - has-part:: [[Scene Agent]], [[Transfer Agent]], [[Onboarding Agent]], [[Jurisdictional Agent]]
  - enables:: [[Interoperability]], [[Self-Sovereign Identity]], [[Adaptable Governance]]
  - requires:: [[Living Contract]]
  - is-part-of:: [[Metaverse Architecture]]

- ### Content
  - The Agentic Mycelia organises a decentralised metaverse around an **agent taxonomy** operating at the interstices between worlds:
    - **[[Scene Agent]]** — holds a global view of one space instance; manages access, in-group cryptography, reputation, real-time translation, enforcement, and keeps an up-to-date scene ontology available in Linked-JSON.
    - **[[Transfer Agent]]** — occupies the interstices between worlds; handles machine-to-machine and protocol translation, ingress/egress routing, reputation and value transfer, and digital-object variation.
    - **[[Onboarding Agent]]** — edge agent that helps a human set preferences, tolerances, and safeguarding limits, forming a [[Living Contract]] between user and network.
    - **[[Jurisdictional Agent]]** — provides the interface to external legal systems: monitoring, transparency reporting, and enforcement handshakes.
  - Identity and ownership rest on a unified PKI (BIP39/BIP32 derivation, Nostr keys, RGB for client-side-validated transfer), so proof of ownership is deterministic yet private by default.
  - **Three-layer framing (2026 best practice).** Recent research formalises ontology-grounded agent systems as three layers — *Role*, *Domain*, and *Interaction* ontologies. The Mycelia's agent taxonomy is the **Role** layer; each instance's Linked-JSON ontology is the **Domain** layer; and a governed coordination protocol (in the DreamLab estate, the ACSP agent-governance surface) supplies the **Interaction** layer that the framework calls for but does not itself standardise.

- ### Current Landscape (2026)
  - Ontology-grounded retrieval is now the dominant pattern for keeping agents factual: ontology-grounded RAG reports large recall gains on relational, multi-hop questions, and governed knowledge-graph enrichment (e.g. multi-agent pipelines with a dedicated conflict-resolution stage and a human-in-the-loop gate) is the accepted way for agents to *write* to a shared ontology.
  - A key nuance — "context interference" — shows that injecting *all* ontology context can displace a model's parametric knowledge, so **selective, budget-bounded, confidence-aware** grounding outperforms blanket injection. The Agentic Mycelia's per-instance, edge-translated ontology windows are an architectural expression of exactly this: agents exchange the *minimal sufficient* ontological slice at each boundary rather than the whole graph.
  - See [[docs/USING-ONTOLOGY-DATA-AGENTICALLY]] for the full cited briefing.

- ### Provenance
  - sources:: [[Agentic Mycelia (workingGraph)]], [[Metaverse Ontology]]
  - elevated-from:: workingGraph/pages/Agentic Mycelia.md
  - elevation-method:: governed decision-broker enrichment (ACSP kind 31402 → admin 31403)
  - migration-date:: 2026-08-11T00:00:00Z

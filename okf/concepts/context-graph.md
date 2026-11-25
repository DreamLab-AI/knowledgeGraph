---
okf_version: "0.2"
type: Class
title: Context Graph
resource: urn:ngm:class:context-graph
domain: artificial-intelligence
description: The assembly layer at the top of the knowledge stack. A context graph consumes the layers beneath it — a formal ontology, a populated knowledge graph, and operational sources such as documents, chat history and tool outputs — to assemble the working set of information an AI agent needs for its next response. It does not compete with the ontology or the knowledge graph; it selects from them under a
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:ontology-loom
requires:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:ontology
enables:
  - urn:ngm:class:retrieval-augmented-generation
relatedTo:
  - urn:ngm:class:agent-memory
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Context Graph

The assembly layer at the top of the knowledge stack. A context graph consumes the layers beneath it — a formal ontology, a populated knowledge graph, and operational sources such as documents, chat history and tool outputs — to assemble the working set of information an AI agent needs for its next response. It does not compete with the ontology or the knowledge graph; it selects from them under a token budget. In the DreamLab mesh this layer is implemented by the Ontology Loom, which retrieves a budget-clamped structured scaffold from the reasoned ontology and injects it into model context at query time.

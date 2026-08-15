public:: true

# Context Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6ac1df3adfd7e62f5c150589d7ca6d3346d38829c991189fa4808ded838e7977",
  "@type": "Page",
  "vc:slug": "context-graph",
  "title": "Context Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    },
    {
      "@id": "urn:visionflow:linked:ontology-loom",
      "vc:label": "Ontology Loom"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:taxonomy",
      "vc:label": "Taxonomy"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-15T09:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:context-graph",
  "@type": "Class",
  "label": "Context Graph",
  "definition": "The assembly layer at the top of the knowledge stack. A context graph consumes the layers beneath it — a formal ontology, a populated knowledge graph, and operational sources such as documents, chat history and tool outputs — to assemble the working set of information an AI agent needs for its next response. It does not compete with the ontology or the knowledge graph; it selects from them under a token budget. In the DreamLab mesh this layer is implemented by the Ontology Loom, which retrieves a budget-clamped structured scaffold from the reasoned knowledge graph and injects it into model context at query time.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ontology-loom",
        "label": "Ontology Loom"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent-memory",
        "label": "Agent Memory"
      }
    ]
  },
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-15T09:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ## Where it sits in the stack
	- Reading the knowledge stack bottom-up: a [[Taxonomy]] gives clean is-a categories; an [[Ontology]] extends that into a full formal vocabulary of classes, typed properties and logical rules; a [[Knowledge Graph]] populates that vocabulary with instance data at scale so facts can be traversed and queried; and the context graph sits above all of them, assembling the right working set for an agent's next response.
	- The term gained traction in industry writing during 2024–2026 as agent frameworks converged on the same problem: an agent's bottleneck is not model capability but the selection of which facts, documents and history belong in its context window right now. It has not yet settled — competing vendor framings use it for decision-trace audit records and for temporal agent memory; this graph uses the assembly sense only.
- ## The DreamLab implementation
	- The [[Ontology Loom]] is this layer in the DreamLab mesh. It serves `POST /loom/scaffold` — a retrieval that returns the taxonomy slice, typed relations and definitions relevant to a query with no model involved at all — and an OpenAI-compatible chat endpoint that injects the same scaffold before delegating to whichever model is deployed behind the façade.
	- The scaffold is budget-clamped: the context graph's job is selection under constraint, not accumulation.
- ## What it is not
	- Not a competitor to the [[Knowledge Graph]] — it holds no facts of its own; it selects from graphs that do.
	- Not a semantic layer in the business-intelligence sense (governed metric definitions over warehouse data); that is a parallel concept from a different tradition, and the DreamLab mesh does not ship one.

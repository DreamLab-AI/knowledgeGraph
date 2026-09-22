public:: true

# Agent Communication Language

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:agent-communication-language",
  "@type": "Page",
  "title": "Agent Communication Language",
  "vc:slug": "agent-communication-language",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-communication-language",
  "@type": "Class",
  "label": "Agent Communication Language",
  "definition": "An Agent Communication Language (ACL) is a formal, standardised message format and semantics that lets autonomous software agents exchange information, requests and commitments independently of their internal implementation. ACLs define performatives (speech acts such as inform, request and propose), a content language and an ontology reference so that interacting agents share a common interpretation of messages. Established examples include FIPA-ACL and KQML.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-agent-system",
      "label": "Multi-Agent System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:interoperability-protocol",
        "label": "Interoperability Protocol"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fipa",
        "label": "FIPA"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fipa",
        "label": "FIPA"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An Agent Communication Language (ACL) is a formal, standardised message format and semantics that lets autonomous software agents exchange information, requests and commitments independently of their internal implementation. ACLs define performatives (speech acts such as inform, request and propose), a content language and an ontology reference so that interacting agents share a common interpretation of messages. Established examples include FIPA-ACL and KQML.
  - Related core concepts: [[Multi-Agent System]] [[Message Passing]] [[Ontology]] [[FIPA]] [[Interoperability Protocol]]
- ### Overview
  - ACLs grew out of distributed artificial intelligence research, where heterogeneous agents built by different parties needed a shared communication standard. By separating the performative (the communicative intent) from the content (the proposition being communicated) and the ontology (the shared vocabulary), an ACL allows loose coupling: an agent can reason about what another agent intends without depending on how it is built. This underpins open multi-agent systems, negotiation protocols and service marketplaces.
- ### Key aspects
  - Performatives express speech acts such as inform, request, query, propose and refuse.
  - A content language (for example FIPA-SL or KIF) carries the propositional payload.
  - An ontology reference fixes the meaning of terms used in the content.
  - Conversation protocols sequence messages into coherent interaction patterns.
  - Transport is decoupled, so the same ACL can run over different message-passing layers.
- ### Applications
  - Automated negotiation and auction systems between buyer and seller agents.
  - Service discovery and brokering in open agent marketplaces.
  - Coordination of distributed sensors and robotic agents.
  - Workflow orchestration across organisational boundaries.
- ### Relationships
  - subClassOf:: [[Multi-Agent System]]
  - partOf:: [[Multi-Agent System]]
  - hasPart:: [[Message Passing]]
  - requires:: [[Ontology]]
  - requires:: [[Semantic Interoperability]]
  - uses:: [[API]]
  - enables:: [[Interoperability]]
  - bridgesTo:: [[Interoperability Protocol]]
  - implements:: [[FIPA]]
  - supports:: [[Decision Making]]
  - standardizedBy:: [[FIPA]]
  - relatedTo:: [[Network Protocol]]
  - relatedTo:: [[Data Integration]]
  - relatedTo:: [[Linked Data]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

public:: true

# FIPA ACL

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fipa-acl",
  "@type": "Page",
  "title": "FIPA ACL",
  "vc:slug": "fipa-acl",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fipa-acl",
  "@type": "Class",
  "label": "FIPA ACL",
  "definition": "FIPA ACL is the Agent Communication Language standardised by the Foundation for Intelligent Physical Agents, defining a message format and a library of communicative acts that autonomous software agents use to exchange information and coordinate behaviour. Each message carries a performative such as inform, request, or propose, drawn from speech-act theory, together with parameters identifying sender, receiver, content language, and ontology. It provides the interoperability layer that lets heterogeneous agents in a multi-agent system understand one another's intentions.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agent-communication-language",
      "label": "Agent Communication Language"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:inter-agent-communication",
        "label": "Inter-Agent Communication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:agent-to-agent-protocol",
        "label": "Agent-to-Agent Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
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
	- [[FIPA ACL]] is the standard [[Agent Communication Language]] for [[Inter-Agent Communication]], defining message structure and a set of communicative acts.
	- It lets agents in a [[Multi-Agent System]] exchange [[Ontology]]-grounded content with explicit intent.
- ### Overview
	- Defined by the Foundation for Intelligent Physical Agents (now an IEEE standards committee), FIPA ACL standardises how agents talk to each other regardless of their internal architecture.
	- A message is a structured object whose outer layer carries a performative (the communicative act) and whose inner content is expressed in a chosen content language interpreted against a shared ontology.
	- It is rooted in speech-act theory: every message is an action that aims to change the receiver's mental state or trigger a response.
- ### Key aspects
	- Performatives include inform, request, query-if, propose, accept-proposal, reject-proposal, cfp (call for proposals), and failure.
	- Standard parameters: sender, receiver, reply-to, content, language, encoding, ontology, protocol, conversation-id.
	- Interaction protocols (e.g. Contract Net, request-response) compose individual messages into structured conversations.
- ### Applications
	- Negotiation and task allocation among autonomous agents.
	- Coordination in distributed problem-solving and marketplace agents.
	- Interoperability between agent platforms such as JADE.
- ### Relationships
	- implements:: [[Communication Protocol]]
	- implements:: [[Inter-Agent Communication]]
	- uses:: [[Ontology]]
	- uses:: [[Agent-to-Agent Protocol]]
	- partOf:: [[Multi-Agent System]]
	- enables:: [[Multi-Agent Coordination]]
	- enables:: [[Interoperability]]
	- supports:: [[Autonomous Agent]]
	- supports:: [[Agent]]
	- standardizedBy:: [[Standards]]
	- relatedTo:: [[Agent Communication Language]]
	- relatedTo:: [[Communication Protocol]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation

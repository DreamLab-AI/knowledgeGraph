public:: true

# Kqml

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:kqml",
  "@type": "Page",
  "title": "Kqml",
  "vc:slug": "kqml",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kqml",
  "@type": "Class",
  "label": "Kqml",
  "definition": "KQML, the Knowledge Query and Manipulation Language, is an early agent communication language and protocol for exchanging information and knowledge among software agents. It defines a set of performatives, message types grounded in speech-act theory, that express the intent of a communication such as ask, tell, subscribe or achieve. KQML influenced later standards including the FIPA Agent Communication Language.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agent-communication-language",
      "label": "Agent Communication Language"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fipa-acl",
        "label": "FIPA ACL"
      },
      {
        "@id": "urn:ngm:class:inter-agent-communication",
        "label": "Inter-Agent Communication"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inter-agent-communication",
        "label": "Inter-Agent Communication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fipa-acl",
        "label": "FIPA ACL"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
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
  - KQML, the Knowledge Query and Manipulation Language, is an early agent communication language and protocol for exchanging information and knowledge among software agents. It defines a set of performatives, message types grounded in speech-act theory, that express the intent of a communication such as ask, tell, subscribe or achieve. KQML influenced later standards including the FIPA Agent Communication Language.
  - Related concepts: [[Agent Communication Language]] [[FIPA ACL]] [[Inter-Agent Communication]] [[Ontology]]
- ### Overview
  - KQML emerged from the United States DARPA Knowledge Sharing Effort as a language and protocol for knowledge-level communication between agents. A KQML message wraps content in a performative that names the communicative act, together with parameters specifying sender, receiver, content language and ontology. By separating the intent layer from the content language, KQML let heterogeneous agents interoperate, and its design directly shaped the later FIPA Agent Communication Language.
- ### Key aspects
  - Performatives grounded in speech-act theory
  - Separation of communicative intent from content language
  - Parameters for sender, receiver, ontology and language
  - Facilitator agents for matchmaking and brokering
  - Direct ancestor of the FIPA ACL standard
- ### Mechanisms
  - Performatives grounded in speech-act theory
  - Separation of communicative intent from content language
  - Parameters for sender, receiver, ontology and language
- ### Applications
  - Knowledge sharing between heterogeneous agents
  - Distributed artificial intelligence research systems
  - Brokering and matchmaking via facilitator agents
  - Foundations for later agent communication standards
  - Interoperable multi-agent system prototypes
- ### Relationships
  - subClassOf:: [[Agent Communication Language]]
  - subClassOf:: [[Agent Communication Language]]
  - implements:: [[Agent Communication Language]]
  - relatedTo:: [[FIPA ACL]]
  - relatedTo:: [[Inter-Agent Communication]]
  - relatedTo:: [[Ontology]]
  - enables:: [[Inter-Agent Communication]]
  - uses:: [[Ontology]]
  - supports:: [[Multi-Agent System]]
  - contrastsWith:: [[FIPA ACL]]
  - bridgesTo:: [[Multi-Agent System]]
  - dependsOn:: [[Ontology]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

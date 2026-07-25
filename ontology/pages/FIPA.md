public:: true

# FIPA

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:fipa", "@type": "Page", "title": "FIPA", "vc:slug": "fipa", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fipa",
  "@type": "Class",
  "label": "FIPA",
  "definition": "FIPA, the Foundation for Intelligent Physical Agents, is a standards body — now an IEEE Computer Society standards committee — that produced specifications for interoperable software agents and multi-agent systems. Its best-known output is FIPA-ACL, an agent communication language with formally defined performatives and interaction protocols. FIPA standards enable heterogeneous agents from different developers to discover, communicate, and coordinate with one another.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:fipa-acl",
        "label": "FIPA ACL"
      },
      {
        "@id": "urn:ngm:class:interaction-protocol",
        "label": "Interaction Protocol"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      },
      {
        "@id": "urn:ngm:class:coordination-protocol",
        "label": "Coordination Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kqml",
        "label": "KQML"
      },
      {
        "@id": "urn:ngm:class:software-agent",
        "label": "Software Agent"
      },
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
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
  - FIPA, the Foundation for Intelligent Physical Agents, is a standards body — now an IEEE Computer Society standards committee — that produced specifications for interoperable software agents and multi-agent systems. Its best-known output is FIPA-ACL, an agent communication language with formally defined performatives and interaction protocols. FIPA standards enable heterogeneous agents from different developers to discover, communicate, and coordinate with one another.
  - Related concepts: [[Standards]] [[Agent Communication Language]] [[Multi-Agent Systems]] [[IEEE]] [[FIPA ACL]]
- ### Overview
  - FIPA was founded in 1996 to promote agent-based technology through open specifications and transferred its work to the IEEE in 2005. Its specification suite covers agent management, the FIPA-ACL communication language, content languages, ontology services, and a library of standard interaction protocols such as Contract Net and request-response. FIPA-ACL builds on speech-act theory, framing messages as performatives — inform, request, propose, agree — with a defined semantics, so that agents share a common pragmatics for negotiation, delegation, and information exchange across platform boundaries.
- ### Key aspects
  - Agent communication language: FIPA-ACL performatives grounded in speech-act theory.
  - Interaction protocols: reusable conversation patterns such as Contract Net for task allocation.
  - Agent management: directory facilitator and agent management system services for discovery and lifecycle.
  - Content and ontology layers: separating message envelope, content language, and shared domain ontology.
  - Interoperability: platform-neutral specifications allowing agents from different vendors to interact.
- ### Applications
  - Interoperable multi-agent platforms such as JADE built on FIPA specifications.
  - Automated negotiation and task allocation between distributed agents.
  - Service-discovery and brokering among heterogeneous software agents.
  - Coordination of distributed simulations and industrial automation agents.
- ### Relationships
  - partOf:: [[Standards]]
  - partOf:: [[Multi-Agent Systems]]
  - hasPart:: [[FIPA ACL]]
  - hasPart:: [[Interaction Protocol]]
  - standardizedBy:: [[IEEE]]
  - implements:: [[Agent Communication Language]]
  - implements:: [[Coordination Protocol]]
  - supports:: [[Multi-Agent Systems]]
  - uses:: [[Ontology]]
  - enables:: [[Multi-Agent Systems]]
  - relatedTo:: [[KQML]]
  - relatedTo:: [[Software Agent]]
  - relatedTo:: [[Agent Communication Language]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15

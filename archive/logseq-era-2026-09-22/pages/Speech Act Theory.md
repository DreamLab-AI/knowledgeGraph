public:: true

# Speech Act Theory

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:speech-act-theory",
  "@type": "Page",
  "title": "Speech Act Theory",
  "vc:slug": "speech-act-theory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:speech-act-theory",
  "@type": "Class",
  "label": "Speech Act Theory",
  "definition": "Speech Act Theory is a framework from the philosophy of language holding that utterances perform actions rather than merely describing states of affairs. In distributed and multi-agent systems it underpins agent communication languages by classifying messages as performatives such as inform, request, commit, and declare, each carrying defined intent and felicity conditions. It distinguishes the locutionary content, illocutionary force, and perlocutionary effect of a communicative act, giving coordinating agents a shared semantics for interaction.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:contract-net-protocol",
        "label": "Contract Net Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      },
      {
        "@id": "urn:ngm:class:dialogue-management",
        "label": "Dialogue Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:coordination-protocol",
        "label": "Coordination Protocol"
      },
      {
        "@id": "urn:ngm:class:negotiation",
        "label": "Negotiation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
      },
      {
        "@id": "urn:ngm:class:intent-recognition",
        "label": "Intent Recognition"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dialogue-system",
        "label": "Dialogue System"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
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
  - Speech Act Theory is a framework from the philosophy of language holding that utterances perform actions rather than merely describing states of affairs. In distributed and multi-agent systems it underpins agent communication languages by classifying messages as performatives such as inform, request, commit, and declare, each carrying defined intent and felicity conditions. It distinguishes the locutionary content, illocutionary force, and perlocutionary effect of a communicative act, giving coordinating agents a shared semantics for interaction.
  - Core concepts: [[Contract Net Protocol]], [[Dialogue Management]], [[Coordination Protocol]], [[Natural Language Understanding]]
- ### Overview
  - **Speech Act Theory** sits within the [[Distributed Systems]] area of the distributed systems domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for speech act theory usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever distributed systems systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Distributed Systems]]
  - implements:: [[Contract Net Protocol]]
  - uses:: [[Natural Language Understanding]]
  - uses:: [[Dialogue Management]]
  - enables:: [[Coordination Protocol]]
  - enables:: [[Negotiation]]
  - supports:: [[Conversational AI]]
  - supports:: [[Intent Recognition]]
  - relatedTo:: [[Dialogue System]]
  - relatedTo:: [[Semantic Web]]
  - relatedTo:: [[Knowledge Representation]]
  - partOf:: [[Distributed Systems]]
  - bridgesTo:: [[Natural Language Understanding]]
  - contrastsWith:: [[Inference Engine]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

public:: true

# Cellular Automata

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cellular-automata", "@type":"Page", "title":"Cellular Automata", "vc:slug":"cellular-automata", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cellular-automata",
  "@type": "Class",
  "label": "Cellular Automata",
  "definition": "A cellular automaton is a discrete computational model consisting of a regular grid of cells, each holding one of a finite set of states, that evolve over discrete time steps according to a fixed local update rule applied uniformly across the grid. The next state of a cell depends only on its current state and the states of a defined neighbourhood, yet iterated application of simple local rules can produce complex, emergent global behaviour. Cellular automata are used to study self-organisation and computational universality, and serve as lightweight simulation substrates for physical, biological and social systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computational-model",
      "label": "Computational Model"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:computational-model",
        "label": "Computational Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:complex-adaptive-systems",
        "label": "Complex Adaptive Systems"
      },
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A cellular automaton is a discrete computational model consisting of a regular grid of cells, each holding one of a finite set of states, that evolve over discrete time steps according to a fixed local update rule applied uniformly across the grid. The next state of a cell depends only on its current state and the states of a defined neighbourhood, yet iterated application of simple local rules can produce complex, emergent global behaviour. Cellular automata are used to study self-organisation and computational universality, and serve as lightweight simulation substrates for physical, biological and social systems.
- ### Relationships
	- partOf:: [[Computational Model]]
	- relatedTo:: [[Complex Adaptive Systems]]
	- relatedTo:: [[Agent-Based Modelling]]

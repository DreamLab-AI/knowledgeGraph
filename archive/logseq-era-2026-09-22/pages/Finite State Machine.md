public:: true

# Finite State Machine

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:finite-state-machine",
  "@type": "Page",
  "title": "Finite State Machine",
  "vc:slug": "finite-state-machine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:finite-state-machine",
  "@type": "Class",
  "label": "Finite State Machine",
  "definition": "A finite state machine (FSM) is an abstract computational model consisting of a finite set of states, a set of input events, and a transition function that maps a current state and input to a next state. At any moment the machine occupies exactly one state, and its behaviour is fully determined by its current state and the inputs it receives. FSMs are widely used to specify control logic, protocol behaviour, and reactive systems.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:state-machine",
      "label": "State Machine"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-machine",
        "label": "State Machine"
      },
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:automata-theory",
        "label": "Automata Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:game-ai",
        "label": "Game AI"
      },
      {
        "@id": "urn:ngm:class:behaviour-tree",
        "label": "Behaviour Tree"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:turing-machine",
        "label": "Turing Machine"
      },
      {
        "@id": "urn:ngm:class:behaviour-tree",
        "label": "Behaviour Tree"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:protocol-design",
        "label": "Protocol Design"
      },
      {
        "@id": "urn:ngm:class:workflow-engine",
        "label": "Workflow Engine"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:automata-theory",
        "label": "Automata Theory"
      },
      {
        "@id": "urn:ngm:class:game-ai",
        "label": "Game AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:protocol-design",
        "label": "Protocol Design"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:automata-theory",
        "label": "Automata Theory"
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
  - A finite state machine (FSM) is an abstract computational model consisting of a finite set of states, a set of input events, and a transition function that maps a current state and input to a next state. At any moment the machine occupies exactly one state, and its behaviour is fully determined by its current state and the inputs it receives. FSMs are widely used to specify control logic, protocol behaviour, and reactive systems.
  - Related: [[State Machine]] [[Automata Theory]] [[Regular Expression]] [[Turing Machine]]
- ### Overview
  - FSMs come in two principal flavours: deterministic, where each state-input pair has exactly one successor, and non-deterministic, where multiple successors are permitted. Acceptor variants (recognisers) decide whether an input string belongs to a language, while transducer variants (Mealy and Moore machines) emit outputs during operation. Because the model is simple and verifiable, FSMs underpin lexical analysers, communication protocols, embedded controllers, and game agent logic.
- ### Key aspects
  - States, transitions, and an initial state form the core structure.
  - Deterministic versus non-deterministic transition functions.
  - Mealy machines emit output on transitions; Moore machines emit output per state.
  - Equivalent in expressive power to regular languages and regular expressions.
  - Strictly less powerful than pushdown automata or Turing machines, which add memory.
- ### Applications
  - Lexical analysis and tokenisation in compilers.
  - Network and communication protocol specification.
  - Non-player character behaviour in games.
  - Embedded and reactive control systems.
  - User-interface and dialogue flow modelling.
- ### Relationships
  - hasPart:: [[State Machine]]
  - hasPart:: [[Regular Expression]]
  - partOf:: [[Automata Theory]]
  - implements:: [[Game AI]]
  - implements:: [[Behaviour Tree]]
  - contrastsWith:: [[Turing Machine]]
  - contrastsWith:: [[Behaviour Tree]]
  - uses:: [[Regular Expression]]
  - enables:: [[Protocol Design]]
  - enables:: [[Workflow Engine]]
  - relatedTo:: [[Automata Theory]]
  - relatedTo:: [[Game AI]]
  - supports:: [[Protocol Design]]
  - dependsOn:: [[Automata Theory]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

public:: true

# Dialogue Management
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:dialogue-management", "@type":"Page", "title":"Dialogue Management", "vc:slug":"dialogue-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:dialogue-management",
  "@type":"Class",
  "label":"Dialogue Management",
  "definition":"Dialogue management is the component of a conversational system that tracks the evolving state of an interaction and decides the system's next action at each turn. It maintains context across utterances, integrates recognised user intents and slots, and selects responses or operations that move the conversation toward the user's goal. It is the control layer that connects language understanding to language generation in a dialogue agent.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:conversational-ai","label":"Conversational AI"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:state-tracking","label":"State Tracking"},
      {"@id":"urn:ngm:class:context-management","label":"Context Management"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:natural-language-understanding","label":"Natural Language Understanding"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:intent-recognition","label":"Intent Recognition"},
      {"@id":"urn:ngm:class:slot-filling","label":"Slot Filling"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:chatbot","label":"Chatbot"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:conversational-ai","label":"Conversational AI"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:context-management","label":"Context Management"},
      {"@id":"urn:ngm:class:chatbot","label":"Chatbot"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:natural-language-understanding","label":"Natural Language Understanding"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Dialogue management is the control layer of [[Conversational AI]] that tracks interaction state and selects the next system action each turn.
  - It consumes outputs of [[Natural Language Understanding]] including [[Intent Recognition]] and [[Slot Filling]].
  - It maintains [[Context Management]] so the conversation coheres across multiple turns.
- ### Overview
  - A dialogue manager sits between language understanding and language generation, deciding what the agent should do or say given the conversation so far.
  - Dialogue state tracking maintains a belief over the user's goals, filled slots, and history, updating it as new utterances arrive.
  - Policy approaches range from hand-authored finite-state and frame-based rules to learned policies optimised with reinforcement learning, and increasingly to large-language-model-driven planning.
  - The manager handles clarification, confirmation, error recovery, and topic switching to keep interactions on track.
- ### Mechanisms
  - State tracking: estimating and updating the current dialogue state from observations.
  - Policy: mapping the tracked state to the next action, whether an API call or a response intent.
  - Context management: retaining and resolving references across turns.
  - Evaluation: task success, turn count, and user satisfaction guide policy improvement.
- ### Applications
  - Task-oriented assistants for booking, support, and transactions.
  - Multi-turn [[Chatbot]] experiences that remember prior turns.
  - Voice assistants coordinating understanding, action, and spoken responses.
- ### Relationships
  - hasPart:: [[State Tracking]]
  - hasPart:: [[Context Management]]
  - dependsOn:: [[Natural Language Understanding]]
  - requires:: [[Intent Recognition]]
  - requires:: [[Slot Filling]]
  - enables:: [[Chatbot]]
  - implements:: [[Conversational AI]]
  - uses:: [[Reinforcement Learning]]
  - supports:: [[Natural Language Processing]]
  - relatedTo:: [[Context Management]]
  - relatedTo:: [[Chatbot]]
  - bridgesTo:: [[Natural Language Understanding]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation

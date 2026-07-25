public:: true

# Working Memory

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:working-memory", "@type":"Page", "title":"Working Memory", "vc:slug":"working-memory", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:working-memory",
  "@type":"Class",
  "label":"Working Memory",
  "definition":"Working memory is the short-lived, actively maintained store an agent uses to hold and manipulate the information relevant to its current task. In large-language-model agents it is realised through the context window, intermediate reasoning traces, and scratchpads, augmented by external stores when the active context is insufficient. It is distinguished from long-term memory by its limited capacity, volatility, and tight coupling to ongoing reasoning.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cognitive-architecture","label":"Cognitive Architecture"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cognitive-architecture","label":"Cognitive Architecture"},{"@id":"urn:ngm:class:ai-agent","label":"AI Agent"}],
    "hasPart":[{"@id":"urn:ngm:class:context-window","label":"Context Window"},{"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}],
    "requires":[{"@id":"urn:ngm:class:context-window","label":"Context Window"},{"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}],
    "uses":[{"@id":"urn:ngm:class:context-window","label":"Context Window"},{"@id":"urn:ngm:class:vector-database","label":"Vector Database"},{"@id":"urn:ngm:class:retrieval-augmented-generation","label":"Retrieval-Augmented Generation"}],
    "enables":[{"@id":"urn:ngm:class:reasoning","label":"Reasoning"},{"@id":"urn:ngm:class:planning","label":"Planning"},{"@id":"urn:ngm:class:tool-use","label":"Tool Use"}],
    "supports":[{"@id":"urn:ngm:class:chain-of-thought","label":"Chain of Thought"},{"@id":"urn:ngm:class:autonomous-agent","label":"Autonomous Agent"}],
    "relatedTo":[{"@id":"urn:ngm:class:transformer","label":"Transformer"},{"@id":"urn:ngm:class:recurrent-neural-network","label":"Recurrent Neural Network"},{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}],
    "dependsOn":[{"@id":"urn:ngm:class:context-window","label":"Context Window"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Working Memory]] is the actively maintained, short-lived store an agent uses to hold the information needed for its current task, a component of any [[Cognitive Architecture]].
- In [[Large Language Model]] systems it is realised through the [[Context Window]], reasoning traces, and the [[Attention Mechanism]] that selects relevant content.
- When the active context is insufficient it is augmented by external memory via [[Retrieval-Augmented Generation]] over a [[Vector Database]].
- ### Overview
- Working memory holds the transient state of reasoning: the task description, intermediate conclusions, retrieved facts, and tool outputs currently in play.
- In transformer-based agents the context window functions as a capacity-limited working memory, with attention dynamically weighting which tokens influence the next step.
- Because the window is finite and volatile, agents offload less-relevant material to external stores and retrieve it on demand, blurring the line with long-term memory.
- ### Mechanisms
- Context window: the bounded sequence of tokens the model can attend to in a single forward pass.
- Attention weighting: the mechanism that focuses computation on task-relevant items held in context.
- Scratchpads and reasoning traces: explicit intermediate text that externalises working state.
- Memory augmentation: retrieval pipelines that load relevant items into the active context as needed.
- ### Applications
- Multi-step reasoning and chain-of-thought problem solving.
- Planning and tool use in autonomous agents that track sub-goals and results.
- Maintaining conversational and task state across turns.
- Combining retrieved knowledge with in-context computation.
- ### Relationships
- partOf:: [[Cognitive Architecture]]
- partOf:: [[AI Agent]]
- hasPart:: [[Context Window]]
- hasPart:: [[Attention Mechanism]]
- requires:: [[Context Window]]
- requires:: [[Attention Mechanism]]
- uses:: [[Context Window]]
- uses:: [[Vector Database]]
- uses:: [[Retrieval-Augmented Generation]]
- enables:: [[Reasoning]]
- enables:: [[Planning]]
- enables:: [[Tool Use]]
- supports:: [[Chain of Thought]]
- supports:: [[Autonomous Agent]]
- relatedTo:: [[Transformer]]
- relatedTo:: [[Recurrent Neural Network]]
- relatedTo:: [[Large Language Model]]
- dependsOn:: [[Context Window]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

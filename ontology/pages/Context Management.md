public:: true

# Context Management
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:context-management", "@type":"Page", "title":"Context Management", "vc:slug":"context-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:context-management",
  "@type":"Class",
  "label":"Context Management",
  "definition":"Context management is the set of techniques for assembling, prioritising, compressing, and maintaining the information supplied to a language model within its bounded context window across a task or conversation. It governs what prompts, retrieved documents, prior turns, tool outputs, and state are placed in context, in what order, and at what fidelity, so that the model has the most relevant evidence without exceeding token limits. Effective context management is central to retrieval-augmented generation, long-running agents, and conversational systems, where it directly shapes coherence, accuracy, and cost.",
  "domain":"ai",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:context-window","label":"Context Window"},
      {"@id":"urn:ngm:class:memory-management","label":"Memory Management"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:context-window","label":"Context Window"},
      {"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:retrieval-augmented-generation","label":"Retrieval-Augmented Generation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"},
      {"@id":"urn:ngm:class:knowledge-retrieval","label":"Knowledge Retrieval"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:token","label":"Token"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:autonomous-agent","label":"Autonomous Agent"},
      {"@id":"urn:ngm:class:conversational-ai","label":"Conversational AI"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:dialogue-system","label":"Dialogue System"},
      {"@id":"urn:ngm:class:session-management","label":"Session Management"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:state-management","label":"State Management"},
      {"@id":"urn:ngm:class:memory-management","label":"Memory Management"},
      {"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Context management curates what information a [[Large Language Model]] holds in its [[Context Window]] for a task.
	- It assembles prompts, retrieved evidence, prior turns, and tool outputs within token limits.
	- It implements [[Retrieval-Augmented Generation]] and underpins long-running [[Autonomous Agent]] workflows.
	- It draws on [[Prompt Engineering]] and [[Knowledge Retrieval]] to maximise relevance per token.
- ### Overview
	- Because context windows are finite, management decides what to include, summarise, drop, or fetch on demand.
	- It balances recency, relevance, and salience so the model reasons over the right evidence.
	- Strategies include retrieval, summarisation, hierarchical memory, and selective truncation.
	- It is a primary determinant of an AI system's coherence, factual grounding, and inference cost.
- ### Key aspects
	- Window budgeting allocates limited tokens across instructions, history, and retrieved content.
	- Compression and summarisation preserve meaning while reducing token footprint.
	- External memory persists state beyond a single window for continuity across sessions.
	- Ordering and formatting influence how the [[Attention Mechanism]] weights supplied content.
- ### Applications
	- Conversational assistants maintaining coherent multi-turn dialogue.
	- RAG pipelines injecting retrieved documents into prompts.
	- Agentic systems carrying task state across many steps.
	- Long-document analysis exceeding the native window.
- ### Relationships
	- subClassOf:: [[Large Language Model]]
	- hasPart:: [[Context Window]]
	- hasPart:: [[Memory Management]]
	- dependsOn:: [[Context Window]]
	- dependsOn:: [[Attention Mechanism]]
	- implements:: [[Retrieval-Augmented Generation]]
	- uses:: [[Prompt Engineering]]
	- uses:: [[Knowledge Retrieval]]
	- requires:: [[Token]]
	- enables:: [[Autonomous Agent]]
	- enables:: [[Conversational AI]]
	- supports:: [[Dialogue System]]
	- supports:: [[Session Management]]
	- relatedTo:: [[State Management]]
	- relatedTo:: [[Memory Management]]
	- relatedTo:: [[Prompt Engineering]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation

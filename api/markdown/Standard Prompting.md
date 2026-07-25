public:: true

# Standard Prompting

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:standard-prompting", "@type":"Page", "title":"Standard Prompting", "vc:slug":"standard-prompting", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:standard-prompting",
  "@type":"Class",
  "label":"Standard Prompting",
  "definition":"Standard prompting is the baseline method of querying a large language model by providing an instruction or question, optionally with input-output examples, and expecting an answer without an elicited reasoning process. It establishes the reference behaviour against which more elaborate strategies such as chain-of-thought, self-consistency and tool-augmented prompting are compared. Standard prompting subsumes zero-shot and few-shot formulations that map directly from prompt to answer.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:chain-of-thought-reasoning","label":"Chain-of-Thought Reasoning"},{"@id":"urn:ngm:class:direct-answer-prompting","label":"Direct Answer Prompting"}],
    "partOf":[{"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}],
    "hasPart":[{"@id":"urn:ngm:class:zero-shot-prompting","label":"Zero-Shot Prompting"},{"@id":"urn:ngm:class:few-shot-prompting","label":"Few-Shot Prompting"}],
    "uses":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:prompt-template","label":"Prompt Template"}],
    "requires":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}],
    "enables":[{"@id":"urn:ngm:class:in-context-learning","label":"In-Context Learning"}],
    "supports":[{"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}],
    "relatedTo":[{"@id":"urn:ngm:class:prompt-template","label":"Prompt Template"},{"@id":"urn:ngm:class:in-context-learning","label":"In-Context Learning"}],
    "bridgesTo":[{"@id":"urn:ngm:class:in-context-learning","label":"In-Context Learning"}],
    "dependsOn":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Standard Prompting]] is the baseline way of interacting with a [[Large Language Model]]: supply an instruction or question, optionally with examples, and read the answer. It is the reference point within [[Prompt Engineering]] for evaluating more advanced techniques.
- It encompasses both [[Zero-Shot Prompting]] and [[Few-Shot Prompting]] and relies on the model's [[In-Context Learning]] ability.
- ### Overview
- Standard prompting maps a prompt directly to an output without explicitly eliciting a reasoning trace. The phrase is most useful as a contrast class: research that demonstrates chain-of-thought gains reports them relative to standard prompting.
- Because it does not request intermediate steps, standard prompting is simple, fast and inexpensive, and works well when the task is shallow or the answer is directly recoverable from context.
- It remains the dominant interaction pattern for everyday queries and forms the substrate on which structured, tool-using and agentic patterns are layered.
- ### Mechanisms
- Instruction-only prompts state the task in natural language and expect an answer.
- Few-shot prompts prepend input-output exemplars to steer format and behaviour.
- Demonstrations shape style without parameter updates via in-context learning.
- Output parsing extracts the answer from free-form generation.
- ### Applications
- Quick question answering and information lookup.
- Text classification, summarisation and rewriting baselines.
- Evaluation harnesses that benchmark advanced strategies against a plain baseline.
- Lightweight assistants where reasoning overhead is unnecessary.
- ### Relationships
- contrastsWith:: [[Chain-of-Thought Reasoning]]
- contrastsWith:: [[Direct Answer Prompting]]
- partOf:: [[Prompt Engineering]]
- hasPart:: [[Zero-Shot Prompting]]
- hasPart:: [[Few-Shot Prompting]]
- uses:: [[Large Language Model]]
- uses:: [[Prompt Template]]
- requires:: [[Large Language Model]]
- enables:: [[In-Context Learning]]
- supports:: [[Natural Language Processing]]
- relatedTo:: [[Prompt Template]]
- relatedTo:: [[In-Context Learning]]
- bridgesTo:: [[In-Context Learning]]
- dependsOn:: [[Large Language Model]]
- ### Provenance
- updated:: 2026-06-15

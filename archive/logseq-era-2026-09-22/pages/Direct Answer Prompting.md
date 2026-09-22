public:: true

# Direct Answer Prompting

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:direct-answer-prompting", "@type":"Page", "title":"Direct Answer Prompting", "vc:slug":"direct-answer-prompting", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:direct-answer-prompting",
  "@type":"Class",
  "label":"Direct Answer Prompting",
  "definition":"Direct answer prompting is a prompting strategy in which a large language model is instructed to produce a final answer immediately, without showing intermediate reasoning steps. It contrasts with chain-of-thought approaches by optimising for brevity, latency and cost on tasks where extended reasoning offers little benefit. The technique is used when an answer is expected to be retrievable or shallow, trading interpretability and complex-reasoning accuracy for efficiency.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:chain-of-thought-reasoning","label":"Chain-of-Thought Reasoning"},{"@id":"urn:ngm:class:standard-prompting","label":"Standard Prompting"}],
    "partOf":[{"@id":"urn:ngm:class:prompt-engineering","label":"Prompt Engineering"}],
    "uses":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:prompt-template","label":"Prompt Template"}],
    "requires":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}],
    "enables":[{"@id":"urn:ngm:class:in-context-learning","label":"In-Context Learning"}],
    "supports":[{"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}],
    "relatedTo":[{"@id":"urn:ngm:class:zero-shot-prompting","label":"Zero-Shot Prompting"},{"@id":"urn:ngm:class:few-shot-prompting","label":"Few-Shot Prompting"},{"@id":"urn:ngm:class:prompt-template","label":"Prompt Template"}],
    "bridgesTo":[{"@id":"urn:ngm:class:in-context-learning","label":"In-Context Learning"}],
    "dependsOn":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Direct Answer Prompting]] instructs a [[Large Language Model]] to return its conclusion straight away, skipping the visible reasoning trace produced by [[Chain-of-Thought Reasoning]]. It is a lightweight technique within [[Prompt Engineering]] suited to factual lookups and shallow tasks.
- It draws on [[In-Context Learning]] and is often combined with [[Zero-Shot Prompting]] or [[Few-Shot Prompting]] depending on how much demonstration the task needs.
- ### Overview
- Direct answer prompting is the default behaviour for many simple queries: ask a question, get an answer. The strategy becomes a deliberate design choice when it is contrasted against reasoning-heavy methods that materialise intermediate steps.
- By suppressing the reasoning trace, direct prompting reduces token usage and latency, which matters for high-throughput or cost-sensitive deployments.
- The trade-off is that on multi-step arithmetic, logic, or planning tasks, models that answer directly tend to be less accurate than those that reason step by step.
- ### Mechanisms
- Instruction framing: the prompt explicitly requests only the final answer, sometimes with format constraints.
- Output constraint: response length or structure is bounded to discourage elaboration.
- Task routing: a system may choose direct answering for shallow questions and reserve reasoning chains for hard ones.
- Decoding: lower-temperature, short-output decoding reinforces concise responses.
- ### Applications
- Classification and extraction tasks where the answer is a label or span.
- Retrieval-augmented question answering where the answer is grounded in supplied context.
- Latency-critical assistants and high-volume batch processing.
- A baseline against which chain-of-thought gains are measured in evaluation.
- ### Relationships
- contrastsWith:: [[Chain-of-Thought Reasoning]]
- contrastsWith:: [[Standard Prompting]]
- partOf:: [[Prompt Engineering]]
- uses:: [[Large Language Model]]
- uses:: [[Prompt Template]]
- requires:: [[Large Language Model]]
- enables:: [[In-Context Learning]]
- supports:: [[Natural Language Processing]]
- relatedTo:: [[Zero-Shot Prompting]]
- relatedTo:: [[Few-Shot Prompting]]
- relatedTo:: [[Prompt Template]]
- bridgesTo:: [[In-Context Learning]]
- dependsOn:: [[Large Language Model]]
- ### Provenance
- updated:: 2026-06-15

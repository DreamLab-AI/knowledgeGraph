public:: true

# Multi-Step Reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-step-reasoning",
  "@type": "Page",
  "vc:slug": "multi-step-reasoning",
  "title": "Multi-Step Reasoning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-step-reasoning",
  "@type": "Class",
  "label": "Multi-Step Reasoning",
  "definition": "Multi-step reasoning is the capacity of an AI system to solve problems that require chaining several intermediate inferences, rather than mapping an input directly to an answer in a single step. It encompasses decomposing a problem into sub-problems, maintaining and updating intermediate state, and composing partial results into a final solution. In large language models it is elicited through chain-of-thought prompting, tool use, and search over reasoning paths, and it is a primary differentiator between shallow pattern completion and genuine problem-solving competence.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:chain-of-thought-prompting", "label": "Chain-of-Thought Prompting"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:reasoning-engine", "label": "Reasoning Engine"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:llm-agents", "label": "LLM Agents"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Multi-step reasoning is the ability to solve problems by chaining several intermediate inferences — decomposing, maintaining intermediate state, and composing partial results — rather than producing an answer in one step.

- ### Relationships
  - Multi-Step Reasoning is a subclass of [[Reasoning]] and uses [[Chain of Thought]] and [[Chain-of-Thought Prompting]] to externalise intermediate steps. It enables the construction of a capable [[Reasoning Engine]] and relates closely to [[LLM Agents]], whose autonomy depends on reliably sequencing many reasoning steps.

- ### Content
  - Many tasks cannot be solved by a single associative leap: a multi-hop question, a multi-stage arithmetic word problem, or a plan with dependencies requires deriving and combining intermediate conclusions. Multi-step reasoning names this capability and distinguishes it from the shallow pattern completion that suffices for simpler tasks. The key difficulty is that errors compound — a mistake in an early step propagates, so accuracy on a ten-step problem can collapse even when each individual step is usually correct.

  - In large language models, the breakthrough observation was that explicitly generating intermediate steps — "thinking out loud" — dramatically improves accuracy on reasoning tasks. By producing a chain of thought before the final answer, the model allocates more computation to the problem and conditions each step on the previous ones, turning a single forward pass into a structured derivation. This simple prompting change unlocked capabilities that the same models could not exhibit when asked to answer directly.

  - Robust multi-step reasoning increasingly relies on more than free-form generation. Self-consistency samples many reasoning paths and takes a majority vote; tree- and graph-of-thought methods explore and prune alternative paths; and tool use offloads steps that language models do poorly — exact arithmetic, code execution, retrieval — to reliable external systems. Verification, where a separate process checks intermediate steps, counters the compounding-error problem by catching mistakes before they propagate.

  - The reliability of multi-step reasoning is the linchpin of agentic AI. An autonomous agent must decompose a goal, sequence actions, observe results, and revise — a long chain in which any broken link can derail the whole task. Progress on this capability, through better training, reasoning-specialised models, and structured scaffolds, is what is gradually extending AI systems from answering questions to completing complex, open-ended work.

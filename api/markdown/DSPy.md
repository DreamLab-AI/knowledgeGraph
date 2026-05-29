public:: true

# DSPy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dspy",
  "@type": "Page",
  "vc:slug": "dspy",
  "title": "DSPy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dspy",
  "@type": "Class",
  "label": "DSPy",
  "definition": "DSPy is an open-source framework for programming language models in which developers declare the structure of a task using typed signatures and composable modules, and an optimiser automatically generates and tunes the prompts and few-shot examples needed to maximise a defined metric. By treating prompts as learnable parameters rather than hand-written strings, DSPy shifts language-model application development from manual prompt engineering toward systematic, metric-driven compilation of pipelines. It targets reliable, portable multi-stage LLM programs such as retrieval-augmented and agentic systems.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:llm-application-framework", "label": "LLM Application Framework"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:llm-orchestration", "label": "LLM Orchestration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:llm-agents", "label": "LLM Agents"},
      {"@id": "urn:ngm:class:chain-of-thought-prompting", "label": "Chain-of-Thought Prompting"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - DSPy is a framework for programming language models with typed signatures and composable modules, where an optimiser automatically generates and tunes prompts and examples to maximise a defined metric.

- ### Relationships
  - DSPy is a subclass of [[LLM Application Framework]] and reframes [[Prompt Engineering]] as an automatic, optimisable compilation step rather than manual authoring. It enables structured [[LLM Orchestration]] of multi-stage pipelines and relates to [[LLM Agents]] and reasoning techniques such as [[Chain-of-Thought Prompting]] that it can compile and optimise.

- ### Content
  - DSPy addresses a brittleness at the heart of language-model applications: behaviour is governed by hand-written prompts that are fragile, hard to maintain, and tied to a specific model. Change the model, and carefully tuned prompts often degrade. DSPy proposes a different abstraction — describe what each step should do via a typed signature (inputs and outputs), compose those steps into a program, and let the framework figure out the actual prompts.

  - The central idea is that prompts and few-shot demonstrations are parameters to be optimised, not text to be written. A DSPy program declares modules — predictors, chain-of-thought reasoners, retrievers — and a metric measuring success. An optimiser ("teleprompter") then bootstraps demonstrations, searches over prompt formulations, and selects the combinations that maximise the metric on training examples, effectively compiling the high-level program into concrete, high-performing prompts for the target model.

  - This separation of program logic from prompt strings yields portability and systematic improvement. Because the optimisation is metric-driven, the same declarative pipeline can be recompiled for a new model or a new dataset by rerunning the optimiser rather than rewriting prompts by hand. It also makes pipelines composable and testable: each module has a clear contract, and the optimiser handles the empirical work of coaxing reliable behaviour out of the underlying model.

  - DSPy is particularly suited to multi-stage systems — retrieval-augmented generation, multi-hop question answering, and agentic workflows — where several model calls must cooperate and where manual prompt tuning across stages becomes intractable. By bringing a compilation-and-optimisation mindset, familiar from traditional machine learning, to the construction of language-model programs, DSPy represents a move toward treating LLM application development as a disciplined engineering practice rather than an artisanal one.

public:: true

# Prompt Template
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:prompt-template",
  "@type": "Page",
  "vc:slug": "prompt-template",
  "title": "Prompt Template",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prompt-template",
  "@type": "Class",
  "label": "Prompt Template",
  "definition": "A Prompt Template is a reusable, parameterised text structure that combines static instructional scaffolding with dynamic variable slots to produce consistent, well-formed inputs for large language models. Templates encode best-practice prompt engineering patterns — role declarations, task specifications, output format constraints, and chain-of-thought scaffolding — in a form that can be instantiated with runtime values such as user queries, document snippets, or API responses. They are the primary unit of composition in LLM orchestration frameworks such as LangChain, LlamaIndex, and DSPy, and they serve as version-controlled artefacts that enable systematic A/B testing of prompt variations. Effective prompt templates balance specificity (providing enough context to constrain model behaviour) with generality (accommodating the full range of valid inputs).",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:system-prompt", "label": "System Prompt"},
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:instruction-following", "label": "Instruction Following"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:soft-prompt-embedding", "label": "Soft Prompt Embedding"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Prompt Template is a parameterised instructional scaffold for [[Large Language Models]] that separates static [[Prompt Engineering]] patterns from dynamic runtime variables, enabling reusable, version-controlled, and systematically testable LLM inputs across [[Agentic Workflow]] pipelines.

- ### Relationships
  - Prompt templates are composed of multiple prompt engineering sub-patterns: a [[System Prompt]] that establishes the model's role and behavioural constraints, a user-turn template that inserts the variable input, and optional [[Chain of Thought]] scaffolding that elicits step-by-step reasoning. [[Retrieval-Augmented Generation]] systems use templates to inject retrieved document chunks into a fixed query structure so the model always receives context in a predictable format. [[Instruction Following]] capabilities of the underlying model determine how reliably a template's constraints are respected. [[Soft Prompt Embedding]] is the continuous counterpart to discrete prompt templates: rather than text tokens, it uses learned embedding vectors that achieve similar steering effects but cannot be human-inspected. The [[Context Window]] size constrains how much static scaffolding a template can include alongside variable content.

- ### Content
  - Prompt templates evolved from the early practice of few-shot prompting, where practitioners discovered that prepending example input-output pairs before a query reliably steered model behaviour. As practitioners accumulated successful patterns — persona assignment, output format specification, step-by-step reasoning elicitation — they began factoring these patterns into reusable text fragments that could be shared and versioned like code.

  - The LangChain framework, introduced in late 2022, formalised prompt templates as first-class software objects with named variables, type checking, and composition operators. A `PromptTemplate` object in LangChain takes a string with curly-brace placeholders and a dict of variable names; the `.format()` method produces the final string. `ChatPromptTemplate` extends this to multi-turn conversations by templating each role's contribution. These abstractions allowed prompt authors to separate the engineering of the scaffold from the runtime logic that supplies variable values.

  - Template design requires careful attention to the structure of the [[Context Window]]. Empirical studies of "lost-in-the-middle" effects found that models attend more reliably to information at the beginning and end of long contexts than in the middle, motivating templates that place critical instructions at both extremes. Similarly, templates for classification tasks benefit from placing the target categories immediately before the input text rather than at the top of the system prompt.

  - Versioning and testing of prompt templates has become a software engineering discipline in its own right. Production systems use template registries where each version is tagged, deployed to a shadow traffic percentage, and evaluated against golden test sets before promotion. Evaluation metrics include task-specific accuracy, toxicity, format compliance, and latency. Tools like PromptLayer, Langfuse, and Weights & Biases Prompts provide template-centric observability.

  - The relationship between prompt templates and [[Instruction Tuning]] is complementary: instruction-tuned models are specifically trained to follow structured instructions, which makes them more responsive to template constraints. However, templates must be adapted across model families because different models have been trained with different instruction formats — GPT-4 uses a ChatML format, Claude uses a Human/Assistant turn structure, and Llama models use varying instruction tokens. Template libraries increasingly maintain model-specific variants of the same logical template to handle this fragmentation.

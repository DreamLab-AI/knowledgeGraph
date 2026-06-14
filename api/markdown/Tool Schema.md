public:: true

# tool schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:150a087a4ea7179627b7ada6c1c6a39ebe41f10c4b7a4895c03a9b4a762f4dee",
  "@type": "Page",
  "vc:slug": "tool-schema",
  "title": "tool schema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tool-schema",
  "@type": "Class",
  "label": "Tool Schema",
  "definition": "A tool schema is a structured, machine-readable specification — typically expressed in JSON Schema format — that formally defines a function or external capability that an AI agent may invoke at inference time, encoding its name, natural-language description, parameter names and types, constraints, and required versus optional fields. Tool schemas are injected into an AI model's context window as part of the system prompt or capability manifest, enabling the model to reason about available operations and emit syntactically correct, structured function-call outputs that an orchestration layer can dispatch. They constitute the primary interface contract between large language models and the external systems, services, or data sources they interact with, determining both tool-selection accuracy and invocation correctness. The tool schema construct is foundational to agentic AI architectures and underpins modern function-calling APIs, the Model Context Protocol, and multi-agent orchestration frameworks.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:function-definition", "label": "Function Definition"},
    {"@id": "urn:ngm:class:tool-definition", "label": "Tool Definition"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:json-schema", "label": "JSON Schema"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:structured-output", "label": "Structured Output"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:tool-selection", "label": "Tool Selection"},
      {"@id": "urn:ngm:class:ai-agent", "label": "AI Agent"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:openapi-specification", "label": "OpenAPI Specification"},
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:natural-language-description", "label": "Natural Language Description"},
      {"@id": "urn:ngm:class:type-system", "label": "Type System"},
      {"@id": "urn:ngm:class:parameter-validation", "label": "Parameter Validation"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:agent-orchestration", "label": "Agent Orchestration"},
      {"@id": "urn:ngm:class:capability-manifest", "label": "Capability Manifest"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"},
      {"@id": "urn:ngm:class:inference-time-compute", "label": "Inference-Time Compute"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:restful-api", "label": "RESTful API"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **tool schema** is a structured, machine-readable specification — typically expressed in [[JSON Schema]] format — that formally defines a function or external capability an [[AI Agent]] may invoke during inference. It encodes the tool's name, a natural-language description that guides [[Tool Selection]], input parameter names, types, constraints, and optionality flags. Tool schemas are the primary interface contract between [[Large Language Model]]s and the external systems they interact with, bridging the gap between [[Natural Language Processing]] and programmatic execution via mechanisms such as [[Function Calling]] and the [[Model Context Protocol]].

- ### Overview
  - Tool schemas emerged alongside the expansion of LLM capabilities from pure text generation into action-taking. They solve a fundamental challenge: a language model trained on text has no innate knowledge of what external functions are available at deployment time, nor how to call them correctly. Tool schemas inject this knowledge into the [[Context Window]] at inference time.
  - A well-formed schema enables a model to:
    - Identify the correct tool for a given user intent (tool selection)
    - Emit structurally valid invocation arguments (structured output)
    - Avoid hallucinating non-existent parameters
    - Understand the semantic purpose of each parameter through natural-language descriptions
  - The concept is closely related to but distinct from [[API Specification]] in the traditional software sense. Where an OpenAPI spec targets human developers and HTTP clients, a tool schema targets an LLM's reasoning process. The description field is critical: it is read by the model, not a machine parser.
  - Maturity: tool schemas have reached **established** status, with stable de facto standards adopted across major AI providers (OpenAI, Anthropic, Google DeepMind) and formalised in the [[Model Context Protocol]].

- ### Key Components
  - **name** — A short, unique identifier used as the function call target. Must be unambiguous within the active tool set. Typically snake_case or camelCase.
  - **description** — A natural-language string that explains when and why to use the tool. This is the primary signal used by the LLM during [[Tool Selection]] reasoning. Ambiguous descriptions lead to incorrect selection.
  - **parameters** — A [[JSON Schema]] object defining each input parameter:
    - `type` — Primitive or complex type (string, number, boolean, object, array)
    - `description` — Per-parameter natural-language guidance read by the model
    - `enum` — Constrained value sets; strongly preferred over open strings where applicable
    - `required` — Array listing mandatory parameter names
    - `default` — Optional fallback values
    - `format` — Semantic format hints (date-time, uri, email)
  - **output schema** (emerging) — Some frameworks extend the schema to describe the structure of the tool's return value, enabling the model to reason about downstream data handling.
  - **annotations** (MCP extension) — Metadata indicating whether a tool is read-only, idempotent, or destructive, enabling safer autonomous agent behaviour.

- ### Mechanisms
  - **Schema injection** — Tool schemas are serialised (typically as JSON) and inserted into the model's context at inference time, either in the system prompt or via a dedicated `tools` parameter in the API request.
  - **Tool selection reasoning** — The LLM reads available schemas and, based on user intent, selects the appropriate tool. [[Chain-of-Thought Prompting]] and [[Reinforcement Learning from Human Feedback]] training both contribute to reliable selection.
  - **Structured output generation** — The model generates a JSON object matching the schema's parameter specification. Modern LLMs use constrained decoding or logit biasing to enforce [[Structured Output]] conformance.
  - **Orchestration dispatch** — The [[Agent Orchestration]] layer deserialises the model's output, validates it against the schema, executes the underlying function, and returns results for further reasoning.
  - **Parallel tool calls** — Many frameworks allow the model to emit multiple tool invocations in a single turn, enabling concurrent execution and reducing total latency in complex tasks.
  - **Schema versioning** — Production systems maintain tool schemas in a [[Schema Registry]], enabling version control, capability discovery, and backward compatibility management.

- ### Applications & Use Cases
  - **Code execution** — Schemas exposing interpreter sandboxes allow models to write and run code snippets, supporting mathematical reasoning, data analysis, and software generation workflows.
  - **Web search integration** — Search tool schemas (e.g., `web_search(query: string)`) enable [[Retrieval Augmented Generation]] patterns where models retrieve current information on demand.
  - **Database queries** — Schemas wrapping SQL or NoSQL interfaces allow LLMs to query structured data, enabling natural-language database interaction without exposing raw query strings.
  - **API orchestration** — Schemas over [[RESTful API]] endpoints allow agents to interact with third-party services (calendars, CRMs, ticketing systems) via natural-language instructions.
  - **File system operations** — Read/write/list tool schemas enable autonomous coding agents (e.g., Claude Code, Devin) to navigate and modify codebases.
  - **Multi-agent communication** — In [[Multi-Agent System]] architectures, agent-to-agent communication can be formalised through tool schemas, where one agent exposes a schema-defined interface to peer agents.
  - **Robotic control** — Tool schemas bridging to [[Microservices Architecture]] in robotics stacks allow LLM-based planners to invoke low-level actuator commands with type-safe argument passing.
  - **IoT and home automation** — Schemas over device APIs enable conversational control of smart-home systems, with type constraints preventing invalid command states.

- ### Schema Design Best Practices
  - Use **enum constraints** instead of open-ended strings wherever the value space is finite — this dramatically reduces hallucinated parameter values.
  - Write **description fields for the model, not the developer** — assume the reader is an LLM reasoning about when to call the tool.
  - Keep **parameter counts low** (ideally ≤5) — each additional parameter increases structured output error probability; decompose complex tools into simpler atomic operations.
  - Avoid **redundant tools** in the active set — tool selection accuracy degrades when semantically similar schemas compete; prune or merge overlapping capabilities.
  - Provide **examples in descriptions** using JSON-like snippets where the expected value format is non-obvious.
  - Mark **destructive operations explicitly** in descriptions (e.g., "permanently deletes the file") to enable the model and orchestration layer to apply appropriate caution gates.
  - Use **output schemas** (where supported) to allow the model to plan downstream reasoning steps before execution.

- ### Relationships
  - requires:: [[JSON Schema]]
  - requires:: [[Large Language Model]]
  - requires:: [[Structured Output]]
  - enables:: [[Tool Use]]
  - enables:: [[Function Calling]]
  - enables:: [[Agentic AI]]
  - enables:: [[Tool Selection]]
  - enables:: [[AI Agent]]
  - implements:: [[OpenAPI Specification]]
  - implements:: [[Model Context Protocol]]
  - uses:: [[Natural Language Description]]
  - uses:: [[Type System]]
  - uses:: [[Parameter Validation]]
  - partOf:: [[Agent Orchestration]]
  - partOf:: [[Capability Manifest]]
  - dependsOn:: [[Schema Registry]]
  - dependsOn:: [[Inference-Time Compute]]
  - supports:: [[Multi-Agent System]]
  - supports:: [[Retrieval Augmented Generation]]
  - contrastsWith:: [[Fine-Tuning]]
  - contrastsWith:: [[Prompt Engineering]]
  - bridges-to:: [[RESTful API]]
  - bridges-to:: [[Microservices Architecture]]
  - relatedTo:: [[Context Window]]
  - relatedTo:: [[Reinforcement Learning from Human Feedback]]

- ### Standards & Context
  - **OpenAI function calling format** — Introduced in 2023, this JSON-based schema format became the de facto standard. Describes tools as objects with `name`, `description`, and `parameters` (a JSON Schema object). Adopted with minor variations across the industry.
  - **Anthropic tools API** — Anthropic's equivalent, using `input_schema` instead of `parameters` as the key for the JSON Schema object. Semantically equivalent; tooling often supports both formats.
  - **Google Gemini function calling** — Google DeepMind's implementation uses `function_declarations` with a schema subset, broadly compatible with the OpenAI convention.
  - **Model Context Protocol (MCP)** — An open protocol standardising tool schema exchange between AI models and external capability providers. MCP extends tool schemas with resource definitions, prompt templates, and capability annotations (readOnly, idempotent, destructive). Developed by Anthropic, now multi-vendor.
  - **OpenAPI 3.x** — The industry-standard HTTP API specification format. Tool schemas often derive from or map to OpenAPI operation objects, enabling automated schema generation from existing API definitions.
  - **JSON Schema (draft-07 / 2020-12)** — The underlying schema language used by all major tool schema formats. Supports types, enums, patterns, format annotations, and composition keywords (anyOf, oneOf, allOf).
  - **W3C SHACL / OWL** — In knowledge-graph-integrated agentic systems, SHACL shapes and OWL axioms can complement or replace JSON Schema for parameter constraint description, enabling richer semantic validation.

- ### Comparison with Related Concepts
  - **vs [[Fine-Tuning]]** — Fine-tuning bakes capability into model weights at training time; tool schemas extend capability at inference time without modifying weights. Schemas are far more economical for adding new capabilities but require orchestration infrastructure.
  - **vs [[Prompt Engineering]]** — Prompt engineering shapes model behaviour through natural language; tool schemas provide formal, machine-parseable capability declarations. They are complementary: descriptions within schemas are a form of micro-prompt engineering.
  - **vs [[API Specification]]** — Traditional API specs target HTTP clients and developers; tool schemas target LLM reasoning. The description field is semantic, not just documentary.
  - **vs [[Retrieval Augmented Generation]]** — RAG retrieves knowledge; tool schemas enable action. They are often combined: a RAG pipeline may itself be exposed as a tool via a schema.

- ### Provenance
  - sources:: OpenAI function calling documentation; Anthropic tools API documentation; Model Context Protocol specification; JSON Schema drafts; industry best-practice guides for agentic AI design
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

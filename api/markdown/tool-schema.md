- ### Definition
  - A tool schema is a structured, machine-readable specification — typically expressed in JSON Schema format — that formally describes a function or external capability callable by an AI agent: its name, natural-language description, parameter names and types, constraints, and which parameters are required. Tool schemas are provided to large language models at inference time as part of the system or user context, enabling the model to reason about which tools are available and to emit syntactically correct structured function-call outputs that an orchestration layer can execute. They are the core interface contract between AI models and the external systems they interact with.

- ### Semantic Classification
  - owl-class:: tool-schema:Tool Schema
  - owl-role:: Concept

- ### Relationships
  - requires [[JSON Schema]]
  - enables [[Tool Use]]
  - enables [[Function Calling]]
  - relatedTo [[Model Context Protocol]]
  - relatedTo [[Agentic AI]]
  - relatedTo [[Schema Registry]]

- ### Content
  Tool schemas define the interface contract that allows a language model to understand and correctly invoke external capabilities without prior training on those specific functions. A well-formed tool schema consists of a short unique name used as the function identifier, a natural-language description that guides the model's tool selection reasoning, and a JSON Schema object defining input parameters with their types, descriptions, and optionality constraints.

  The OpenAI function calling format established a de facto standard for tool schema structure, subsequently adopted with minor variations by Anthropic's tools API, Google's Gemini function calling, and the Model Context Protocol (MCP). MCP extends the schema to include resource definitions and prompt templates alongside tools, creating a richer capability discovery mechanism for AI agents connecting to external servers.

  Schema quality significantly affects model performance: ambiguous descriptions lead to incorrect tool selection; loose parameter typing leads to malformed invocations; excessive parameter complexity strains the model's structured output generation. Best practices recommend tight typing (enums over strings where possible), examples in descriptions, and decomposing complex tools into simpler atomic operations. Schema registries enable version management and discovery of available tools across distributed agent ecosystems, analogous to API gateways in service-oriented architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
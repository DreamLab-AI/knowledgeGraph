- ### Definition
  - Tool Use is the capability of large language models and AI agent systems to invoke external functions, APIs, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools (a tool schema), reasons about which tool to call and with what arguments, and incorporates the returned result into its response. This capability is foundational to agentic AI systems that must take real-world actions such as code execution, web search, database queries, or actuator control.

- ### Semantic Classification
  - owl-class:: tool-use:Tool Use
  - owl-role:: Concept

- ### Relationships
  - requires [[Tool Schema]]
  - requires [[Function Calling]]
  - enables [[Agentic AI]]
  - enables [[Retrieval-Augmented Generation]]
  - relatedTo [[Model Context Protocol]]
  - relatedTo [[Large Language Models]]

- ### Content
  Tool use transforms a language model from a closed-world text predictor into an open-world agent capable of interacting with live information and external systems. The canonical implementation exposes a set of tool definitions — each comprising a name, description, and JSON Schema for input parameters — in the model's context window. The model generates structured function-call outputs that a surrounding orchestration layer intercepts, executes against the real tool, and feeds back as observation messages.

  OpenAI's function calling API standardised this pattern and prompted broad adoption. Anthropic's tool use API, Gemini's function calling, and the open Model Context Protocol (MCP) are further instantiations, each with varying conventions for multi-turn tool dialogue and parallel tool invocation. Retrieval-Augmented Generation can be viewed as a specialised tool-use pattern where the retrieval operation is a first-class tool call returning document excerpts.

  Multi-step agentic workflows chain multiple tool calls, requiring models to plan action sequences, handle partial failures, and maintain task state across turns. This introduces safety challenges around unintended side-effects and authorisation: a model calling a file-deletion API or executing arbitrary code requires explicit permission gating and audit logging. Research on tool-use evaluation focuses on benchmarks testing planning accuracy, argument correctness, and graceful failure handling when tools return errors or unexpected outputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
public:: true

# Tool Definition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tool-definition",
  "@type": "Page",
  "vc:slug": "tool-definition",
  "title": "Tool Definition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tool-definition",
  "@type": "Class",
  "label": "Tool Definition",
  "definition": "A Tool Definition is a structured specification that describes a capability that an AI language model or agent can invoke at runtime, including the tool's name, a natural language description of its purpose, and a formal schema defining its input parameters and expected output format. Tool definitions are the primary mechanism through which AI systems access external functionality, enabling them to call APIs, query databases, execute code, retrieve documents, or perform actions in the world beyond text generation. The format of tool definitions is standardised by providers such as Anthropic, OpenAI, and Google, typically using JSON Schema to describe parameters, and the quality of a tool definition's description and schema directly determines how reliably an AI model selects and invokes it.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:tool-schema", "label": "Tool Schema"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"},
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:json-data-interchange-format-schema", "label": "JSON Schema"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:schema-definition", "label": "Schema Definition"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Tool Definition is a structured [[Tool Schema]] specification consisting of a name, natural language description, and [[JSON Schema]] parameter schema that an AI model uses to select and correctly invoke external capabilities within [[Agentic Workflow]] and [[Tool Use]] contexts.

- ### Relationships
  - Tool Definition is a sub-class of [[Tool Schema]] and is the concrete artifact consumed during [[Function Calling]] inference. The [[JSON Schema]] standard provides the parameter specification format, allowing models to validate their generated arguments against the declared schema. Well-crafted tool definitions are foundational to reliable [[Tool Use]] by language models, and collections of tool definitions are composed into tool catalogues that enable [[Autonomous Agent]] systems to select appropriate tools for subtasks. [[Agentic Workflow]] orchestration depends on tool definitions as the interface contract between the orchestration layer and external services. As tool libraries grow, tool retrieval systems dynamically select relevant [[Tool Definition]] entries from large catalogues, making description quality critical. [[Multi-Agent Systems]] expose tool definitions across agent boundaries, allowing specialist agents to advertise capabilities to orchestrators.

- ### Content
  - Tool definitions emerged as a practical necessity when large language models demonstrated the ability to generate not just text but structured outputs specifying which function to call and with what arguments. OpenAI introduced function calling in the GPT API in June 2023, standardising a format in which each function was described by a JSON object with name, description, and parameters fields, the latter using JSON Schema syntax. Anthropic introduced a similar tool use API for Claude, and Google followed with function calling in the Gemini API, establishing a de facto standard structure across the major model providers.

  - The description field of a tool definition is arguably its most important element for model behaviour. Language models select tools based on semantic matching between the user's intent and the tool descriptions; vague, overlapping, or misleading descriptions cause incorrect tool selection, which is one of the most common failure modes in agent systems. Best practices call for descriptions that clearly state what the tool does, when to use it (and equally, when not to), what units or formats inputs should take, and what the output represents.

  - The parameters schema uses [[JSON Schema]] to define the name, type, description, and constraints on each input parameter. Required parameters must be listed explicitly; the model will refuse to call a tool if required parameters cannot be inferred from context. Enum values, minimum and maximum constraints, pattern validation, and nested object schemas all help the model generate valid arguments and help downstream code validate the model's output before execution.

  - The Model Context Protocol (MCP), introduced by Anthropic in late 2024, provides a standardised transport and discovery mechanism for tool definitions, allowing AI applications to dynamically discover available tools from MCP servers. Each MCP server advertises a list of tool definitions using a standardised schema; the client AI application retrieves these definitions at session start and makes them available to the language model. This architecture decouples tool implementation from model provider, enabling a marketplace of interoperable tool servers.

  - As tool libraries scale to hundreds or thousands of tools, naive injection of all tool definitions into the model context becomes impractical due to context window constraints and increased decision complexity. Tool retrieval systems, using embedding-based semantic search or structured categorisation, dynamically select the most relevant subset of tool definitions for each user request, maintaining manageable context size whilst preserving access to large capability catalogues. This is an active area of engineering in large-scale [[Agentic Workflow]] platforms.

public:: true

# tool use
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e99ae237aa1a711089cb8ed8e69c5e50fa22683eb28d8599054fe110f240f184",
  "@type": "Page",
  "vc:slug": "tool-use",
  "title": "tool use",
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
  "@id": "urn:ngm:class:tool-use",
  "@type": "Class",
  "label": "Tool Use",
  "definition": "Tool Use is the capability of large language models and AI agent systems to invoke external functions, APIs, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools — a tool schema encoding names, descriptions, and JSON Schema parameter specifications — reasons about which tool to call and with what arguments, executes that call via a surrounding orchestration layer, and incorporates the returned observation into its subsequent reasoning. This capability is foundational to agentic AI systems that must take real-world actions such as code execution, web search, database queries, file manipulation, or actuator control, bridging the boundary between language generation and executable computation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:tool-schema",
        "label": "Tool Schema"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:orchestration-layer",
        "label": "Orchestration Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:multi-step-reasoning",
        "label": "Multi-Step Reasoning"
      },
      {
        "@id": "urn:ngm:class:code-execution",
        "label": "Code Execution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:structured-output",
        "label": "Structured Output"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:model-context-protocol",
        "label": "Model Context Protocol"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "OpenAI Function Calling API"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:inference-time-computation",
        "label": "Inference-Time Computation"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human in the Loop"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:react-prompting",
        "label": "ReAct Prompting"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain of Thought"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:function-calling",
      "label": "Function Calling"
    },
    {
      "@id": "urn:ngm:class:external-tool-invocation",
      "label": "External Tool Invocation"
    }
  ],
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Tool Use is the capability of [[Large Language Models]] and AI agent systems to invoke external functions, [[API]]s, databases, or services at inference time, extending the model's effective knowledge and action repertoire beyond pure text generation. The model receives a structured description of available tools — a [[Tool Schema]] encoding names, descriptions, and [[JSON Schema]] parameter specifications — reasons about which tool to call and with what arguments, and incorporates the returned result into its response. This capability is foundational to [[Agentic AI]] systems that must take real-world actions such as [[Code Execution]], web search, database queries, or actuator control, directly bridging the gap between language generation and executable computation.

- ### Overview
  - Tool Use transforms a [[Large Language Models|language model]] from a closed-world text predictor into an open-world agent capable of interacting with live information and external systems.
  - Prior to tool use, LLMs were confined to knowledge encoded in their training weights and the contents of a single context window; any information beyond the training cut-off or requiring live computation was inaccessible.
  - By exposing a set of [[Tool Schema|tool definitions]] within the context, the orchestration layer delegates execution authority to the model while retaining control over which tools are available and when results are returned.
  - The core interaction loop:
    - The user or system provides a prompt alongside one or more tool definitions.
    - The model reasons over the available tools and emits a structured function-call output (typically JSON) specifying the tool name and arguments.
    - The surrounding [[Orchestration Layer]] intercepts the call, executes it against the real tool, and returns an observation message.
    - The model incorporates the observation into its continued reasoning, potentially issuing further tool calls, before producing a final answer.
  - This pattern decouples knowledge retrieval and action execution from model weights, enabling models to stay accurate and current without frequent retraining.
  - Commercial adoption is now broad: OpenAI, Anthropic, Google, Mistral, Cohere, and others expose tool use natively through their inference APIs.

- ### Key Mechanisms
  - **Tool Schema Definition**
    - Each tool is described by a name, a natural-language description, and a [[JSON Schema]] specifying the input parameters.
    - The quality of tool descriptions heavily influences whether the model selects the correct tool and supplies valid arguments — [[Prompt Engineering]] for tool descriptions is itself a sub-discipline.
    - Parallel tool invocation allows models to emit multiple simultaneous calls, reducing round-trip latency in pipelines that benefit from concurrent execution.
  - **Function Calling**
    - [[Function Calling]] is the mechanism through which the model emits a structured, parseable tool invocation rather than free-form text.
    - Implementations typically constrain model output to a JSON object that schema-validates against the chosen tool's parameter definition.
    - Constrained decoding (e.g. via grammar-based sampling) can enforce structural validity at the token level, eliminating parse errors.
  - **Observation Integration**
    - The result returned by the executed tool is appended to the conversation as an observation or tool-result message.
    - The model conditions its next generation step on this observation, enabling iterative refinement.
    - Multi-turn observations support long-horizon tasks where many sequential tool calls are needed before a final response is warranted.
  - **Orchestration and Safety**
    - The [[Orchestration Layer]] is responsible for routing tool calls, enforcing permission policies, handling errors, and maintaining conversation state.
    - [[Access Control]] mechanisms gate which tools a given user or task context may invoke — crucial for preventing privilege escalation.
    - [[Audit Logging]] records every tool invocation and its result, supporting post-hoc accountability and debugging.
    - [[Human-in-the-Loop]] checkpoints can require explicit human approval before high-risk or irreversible tool calls are executed.

- ### Tool Use Frameworks and Standards
  - **OpenAI Function Calling API** — the first widely-adopted API standardisation of the tool-use pattern (2023), establishing JSON-based tool definitions and structured output conventions.
  - **Anthropic Tool Use API** — parallel implementation with Claude models, supporting parallel tool invocation and native XML-structured tool results.
  - **[[Model Context Protocol]]** (MCP) — open protocol from Anthropic standardising how LLM clients discover and invoke external tools and resources, enabling interoperable tool ecosystems.
  - **Google Gemini Function Calling** — Google's implementation supporting multi-turn function-calling with structured responses and native grounding tools.
  - **LangChain / LlamaIndex Tool Abstractions** — open-source framework layers that normalise tool-use patterns across multiple LLM backends and provide pre-built tool libraries.
  - **ReAct (Reason + Act)** — prompting strategy that interleaves explicit chain-of-thought reasoning traces with tool action emissions, improving reliability of multi-step tool use.
  - **Toolformer** — research model that learned which APIs to call and when by self-supervising on API call insertions, demonstrating that tool use can be learned end-to-end.

- ### Applications and Use Cases
  - **Web Search and Information Retrieval**
    - Models invoke search APIs (e.g. Bing Search, Brave Search, Tavily) to fetch current information beyond the training cut-off.
    - [[Retrieval-Augmented Generation]] can be modelled as a specialised tool-use pattern where the retrieval operation is a first-class tool call returning document excerpts.
  - **Code Execution and Data Analysis**
    - [[Code Execution]] sandboxes (e.g. Python REPL, Jupyter kernels) are among the most powerful tool-use targets, allowing models to write and run code to perform calculations, data analysis, and visualisation.
    - Used extensively in data science assistants (e.g. OpenAI Code Interpreter / Advanced Data Analysis).
  - **Database and Knowledge Graph Queries**
    - Models generate SQL, SPARQL, or graph query language statements as tool arguments, retrieving structured data from production databases or [[Knowledge Graph]]s.
  - **File and Document Manipulation**
    - Tools for reading, writing, searching, and editing files enable models to function as software engineering assistants within project codebases.
  - **API Integration and Workflow Automation**
    - Models call third-party APIs (calendar, CRM, ERP, communication platforms) to complete tasks autonomously.
    - Bridges to [[Robotic Process Automation]] for legacy system integration via screen-scraping and form-filling tools.
  - **Multi-Agent Coordination**
    - In [[Multi-Agent System]]s, tool calls can invoke subordinate agents, enabling hierarchical decomposition of complex tasks.
    - [[Autonomous Agent]] frameworks such as AutoGPT, BabyAGI, and Claude's Projects feature rely on tool use as the primary action primitive.
  - **Robotics and Embodied AI**
    - Language models serving as high-level planners issue tool calls to robotic control APIs, translating natural-language instructions into sequences of low-level actuator commands.
    - Connects tool use to [[Robotic Process Automation]] and embodied agent research.
  - **Scientific and Research Assistance**
    - Tools for literature search, simulation invocation, statistical computation, and experimental logging augment LLM-based research assistants.

- ### Challenges and Limitations
  - **Hallucinated Tool Calls** — models may emit calls to non-existent tools or with syntactically invalid arguments; constrained decoding and schema validation mitigate this.
  - **Error Recovery** — graceful handling of tool failures (network errors, permission denials, unexpected return types) requires explicit error-handling logic in both the model's prompting and the orchestration layer.
  - **Context Window Pressure** — long tool-call histories with verbose observations can consume large portions of the [[Context Window]], degrading performance on the primary task.
  - **Security and Prompt Injection** — tool outputs may contain adversarial content attempting to hijack the model's subsequent actions (indirect prompt injection); sandboxing and output sanitisation are active research areas.
  - **Latency** — sequential tool-call round trips introduce wall-clock latency; parallelism, caching, and speculative execution are mitigation strategies.
  - **Planning Depth** — reliable multi-step tool use requires models to maintain a coherent plan across many turns, which remains challenging without explicit [[Planning]] scaffolds such as [[ReAct Prompting]] or tree-of-thought approaches.

- ### Relationships
  - requires:: [[Tool Schema]]
  - requires:: [[Function Calling]]
  - requires:: [[JSON Schema]]
  - requires:: [[Orchestration Layer]]
  - enables:: [[Agentic AI]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Autonomous Agent]]
  - enables:: [[Multi-Step Reasoning]]
  - enables:: [[Code Execution]]
  - uses:: [[Large Language Models]]
  - uses:: [[Context Window]]
  - uses:: [[Structured Output]]
  - implements:: [[Model Context Protocol]]
  - dependsOn:: [[Inference-Time Computation]]
  - dependsOn:: [[Prompt Engineering]]
  - supports:: [[Human-in-the-Loop]]
  - supports:: [[Audit Logging]]
  - supports:: [[Access Control]]
  - contrastsWith:: [[Fine-Tuning]]
  - relatedTo:: [[ReAct Prompting]]
  - relatedTo:: [[Chain of Thought]]
  - relatedTo:: [[Multi-Agent System]]
  - relatedTo:: [[Planning]]
  - bridges-to:: [[Robotic Process Automation]]
  - bridges-to:: [[API Gateway]]

- ### Standards and Context
  - The [[Model Context Protocol]] (MCP) is the primary open standard for tool discovery and invocation interoperability, developed by Anthropic and gaining multi-vendor adoption.
  - OpenAI's function-calling specification, first released in 2023, established a de facto standard for JSON-based tool schemas that subsequent providers largely followed.
  - [[JSON Schema]] (IETF draft standard) underpins parameter validation in virtually all current tool-use implementations.
  - Safety considerations are addressed in emerging AI governance frameworks such as the EU AI Act and NIST AI Risk Management Framework, which flag autonomous tool invocation as a high-risk AI capability requiring transparency and human oversight.
  - Benchmark suites such as ToolBench, BFCL (Berkeley Function-Calling Leaderboard), and APIBench evaluate tool-use accuracy across diverse API collections.

- ### Provenance
  - sources:: OpenAI Function Calling documentation; Anthropic Tool Use documentation; Model Context Protocol specification; ReAct (Yao et al. 2022); Toolformer (Schick et al. 2023); Berkeley Function-Calling Leaderboard
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

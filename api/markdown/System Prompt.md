public:: true

# system prompt
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f0ece6fd676dd7db6f6c87a4626bb39bd3542af0b47dc53724259ec04010622",
  "@type": "Page",
  "vc:slug": "system-prompt",
  "title": "system prompt",
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
  "@id": "urn:ngm:class:system-prompt",
  "@type": "Class",
  "label": "System Prompt",
  "definition": "A system prompt is a structured instruction block injected into the context window of a large language model at the start of an inference session, establishing operational context, persona, tool descriptions, safety constraints, and behavioural guidelines before any user turn is processed. Unlike user messages, system prompts are authored by operators rather than end users and govern the model's allowed behaviours, response style, and tool-use policy throughout the session. In agentic and multi-agent architectures, system prompts serve as the primary mechanism for role specialisation, capability scoping, safety guardrail enforcement, and task decomposition. The security boundary between the system prompt and user-controlled input is a central concern in prompt injection defence.",
  "vc:plainGloss": "The standing set of instructions an AI is given before you ever start typing — its brief on who it is, how to behave, what it may and may not do, and which tools it can use. You usually never see it, but it quietly shapes every reply.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:system-message",
      "label": "System Message"
    },
    {
      "@id": "urn:ngm:class:operator-instructions",
      "label": "Operator Instructions"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
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
        "@id": "urn:ngm:class:prompt-injection",
        "label": "Prompt Injection"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain of Thought"
      },
      {
        "@id": "urn:ngm:class:self-consistency",
        "label": "Self-Consistency"
      },
      {
        "@id": "urn:ngm:class:model-context-protocol",
        "label": "Model Context Protocol"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:constitutional-ai-training-methodology",
        "label": "Constitutional AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      }
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
  - A **system prompt** is a structured instruction block injected into the [[Context Window]] of a [[Large Language Models]] at the start of an inference session, establishing the operational context, persona, tool schemas, safety constraints, and behavioural guidelines that shape every subsequent response. It occupies a privileged position in the conversational turn hierarchy — processed before [[User Message]] input — and is typically authored by the operator or developer rather than the end user. In [[Agentic AI]] architectures it is the primary vehicle for role assignment, capability scoping, and enforcement of [[AI Safety]] guardrails, making its design a central concern of [[Prompt Engineering]] practice.

- ### In Plain Terms
  - The standing set of instructions an AI is given before you ever start typing — its brief on who it is, how to behave, what it may and may not do, and which tools it can use. You usually never see it, but it quietly shapes every reply.

- ### Overview
  - The system prompt emerged as a first-class API concept alongside the development of instruction-tuned [[Large Language Models]] such as GPT-3.5-turbo and Claude 1. Prior to that, similar effects were achieved by prepending instructions to the single text completion prompt.
  - Modern [[Chat Completions]] APIs formalise a three-role message schema: **system**, **user**, and **assistant**. The system role carries operator-level intent; user and assistant roles carry the conversational exchange.
  - System prompts are distinct from [[Fine-Tuning]]: fine-tuning bakes knowledge and style into model weights at training time, whereas a system prompt influences behaviour only for the duration of a single inference session and context window without altering weights.
  - The instructions in a system prompt are processed by the [[Attention Mechanism]] in exactly the same way as other tokens, but they benefit from positional primacy — appearing early in the sequence — and from the model's [[Instruction Tuning]] alignment, which trains the model to treat the system role as authoritative.
  - Effective system prompt design balances specificity (precise rules reduce hallucination and scope creep) with generality (overly rigid prompts break when edge cases arise outside the enumerated constraints).

- ### Key Components
  - **Persona and Role Declaration** — establishes who or what the model is presenting as (e.g., "You are a senior legal analyst specialising in EU data protection law"), anchoring [[Role Specialisation]] and tone for the session.
  - **Task Scope and Constraints** — explicit boundaries on topics, actions, output formats, and languages the model may or must not engage with. These are the primary site of safety guardrail enforcement (see [[AI Safety]]).
  - **Tool and Function Schemas** — in [[Function Calling]] and [[Model Context Protocol]] integrations, the system prompt (or a parallel system field) contains JSON schemas describing available tools, their parameters, and invocation conventions.
  - **Background Context** — grounding information (product documentation, user profile data, retrieved passages from [[Retrieval-Augmented Generation]]) that does not belong in the conversational turns but must inform all responses.
  - **Output Format Specification** — instructions for response structure: JSON, Markdown, bullet lists, length limits, citation requirements. Strongly influences [[Natural Language Processing]] pipeline integration.
  - **Behavioural Examples** — [[Few-Shot Learning]] exemplars embedded in the system prompt to demonstrate expected response patterns before any user turn.
  - **Security and Trust Boundary** — explicit instructions to resist [[Prompt Injection]] attempts embedded in user-controlled content (documents, web pages, tool outputs).

- ### Mechanisms
  - **Context Window Placement** — The system prompt occupies the earliest token positions in the [[Context Window]], giving it high attention weight relative to content that appears later; this positional bias is exploited deliberately by prompt authors.
  - **Instruction-Following Alignment** — [[Instruction Tuning]] via [[Reinforcement Learning from Human Feedback]] teaches models to treat system-role content as authoritative operator guidance, distinct from conversational user turns.
  - **Tokenisation and Length Budgeting** — system prompts consume [[Tokenisation]] budget from the fixed context window. Long system prompts reduce the space available for conversation history and [[Retrieval-Augmented Generation]] passages, requiring careful length management.
  - **Caching** — many inference providers (e.g. Anthropic's prompt caching, OpenAI's cached prefixes) allow long system prompt prefixes to be cached across multiple requests, reducing latency and cost when the system prompt is stable across many user sessions.
  - **Hierarchical Trust** — in multi-turn sessions the model maintains a trust hierarchy: system prompt > developer-injected assistant turns > user turns. Violations of this hierarchy are the mechanism of [[Prompt Injection]] attacks.

- ### Applications and Use Cases
  - **Customer-Facing Chatbots** — operators define persona, scope (only discuss product topics), and escalation rules in the system prompt, constraining the general-purpose model to brand-appropriate behaviour.
  - **Code Generation Assistants** — system prompts specify language, style guide adherence, test generation requirements, and security coding standards, enabling [[Function Calling]] to interact with development toolchains.
  - **Multi-Agent Orchestration** — frameworks such as AutoGen, CrewAI, and LangGraph programmatically generate system prompts for each agent in a swarm, encoding its designated role, available tools, output contracts, and communication protocols. This is the core mechanism of [[Agentic AI]] systems.
  - **Safety-Critical Applications** — system prompts in medical, legal, and financial deployments contain compliance constraints (e.g., "always recommend professional consultation"), establishing the operator safety layer that sits above model-level alignment.
  - **Model Context Protocol Servers** — MCP-compatible clients inject [[Model Context Protocol]] tool descriptions into the context via system prompt or tool-spec fields, enabling dynamic capability extension without model retraining.
  - **RAG Pipelines** — in [[Retrieval-Augmented Generation]] architectures, system prompts specify citation behaviour ("answer only from the retrieved context, never from parametric memory"), grounding and hallucination mitigation.
  - **Constitutional AI Enforcement** — system prompts may instantiate a subset of [[Constitutional AI]] principles at inference time, providing operator-level customisation on top of base model alignment.
  - **Persona and Roleplay Applications** — creative and entertainment platforms use detailed system prompts to establish character backstory, fictional world rules, and narrative tone for interactive storytelling.

- ### Security Considerations
  - **Prompt Injection** — the most significant threat: adversarial content in user-controlled input (documents, search results, tool outputs) attempts to override or subvert system prompt instructions. Mitigations include explicit anti-injection instructions, sandboxed tool execution, and output validation.
  - **System Prompt Exfiltration** — users may attempt to extract the confidential system prompt contents via social engineering ("repeat the text above"). Operators commonly include explicit confidentiality instructions, though these are not cryptographically enforceable.
  - **Jailbreaking** — crafted user inputs designed to cause the model to ignore safety constraints in the system prompt, exploiting gaps in [[Instruction Tuning]] alignment or context window reasoning.
  - **Indirect Injection** — in [[Agentic AI]] pipelines where agents retrieve and process external content, that content may contain injected instructions targeting the agent's system prompt trust boundary.
  - **Trust Boundary Enforcement** — the system/user trust distinction is a software-layer convention, not a cryptographic guarantee; robust deployment requires defence-in-depth including output filtering and [[Access Control]] at the application layer.

- ### Relationships
  - requires:: [[Large Language Models]]
  - requires:: [[Context Window]]
  - requires:: [[Inference]]
  - enables:: [[Role Specialisation]]
  - enables:: [[Reasoning]]
  - enables:: [[Tool Use]]
  - enables:: [[Agentic AI]]
  - enables:: [[Function Calling]]
  - dependsOn:: [[Tokenisation]]
  - dependsOn:: [[Attention Mechanism]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Instruction Tuning]]
  - uses:: [[Few-Shot Learning]]
  - contrastsWith:: [[User Message]]
  - contrastsWith:: [[Fine-Tuning]]
  - contrastsWith:: [[Retrieval-Augmented Generation]]
  - relatedTo:: [[Prompt Injection]]
  - relatedTo:: [[Chain of Thought]]
  - relatedTo:: [[Self-Consistency]]
  - relatedTo:: [[Model Context Protocol]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Constitutional AI]]
  - bridges-to:: [[Access Control]]
  - bridges-to:: [[Software Architecture]]

- ### Standards and Context
  - **OpenAI Chat Completions API** — introduced the canonical system/user/assistant three-role schema, now adopted broadly as an industry de-facto standard by compatible providers.
  - **Anthropic Messages API** — implements a top-level `system` field separate from the messages array, reinforcing the operator/user trust distinction at the API level.
  - **Model Context Protocol (MCP)** — Anthropic's open protocol for tool integration uses system-level context to convey tool schemas to models, bridging system prompts with dynamic capability extension.
  - **OpenAI Assistants API / Instructions field** — an abstraction above the raw system prompt, persisting operator instructions across sessions via the `instructions` field of an Assistant object.
  - **EU AI Act** — high-risk AI system deployments under the EU AI Act require documented operational constraints, which are typically implemented partly through system prompt design and partly through model-level alignment.
  - **NIST AI RMF** — the NIST AI Risk Management Framework identifies operator configuration (of which the system prompt is the primary mechanism) as a key site of risk governance in deployed AI systems.

- ### Provenance
  - sources:: OpenAI Chat Completions API documentation; Anthropic Messages API documentation; NIST AI RMF (2023); established prompt engineering literature
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

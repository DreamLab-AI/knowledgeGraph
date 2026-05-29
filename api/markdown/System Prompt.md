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
  "definition": "A system prompt is a structured instruction block injected into the context window of a large language model at the start of an inference session to establish operational context, persona, tool descriptions, safety constraints, and behavioural guidelines before any user turn is processed. Unlike user messages, system prompts are typically authored by operators rather than end users and govern the model's allowed behaviours, response style, and tool-use policy throughout the session. In multi-agent and agentic AI systems, system prompts serve as the primary mechanism for role specialisation, safety guardrail enforcement, and task decomposition.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:prompt-injection", "label": "Prompt Injection"},
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:self-consistency", "label": "Self-Consistency"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A system prompt is a structured instruction block injected into the context window of a large language model at the start of an inference session to establish operational context, persona, tool descriptions, safety constraints, and behavioural guidelines before any user turn is processed. Unlike user messages, system prompts are typically authored by operators rather than end users and govern the model's allowed behaviours, response style, and tool-use policy throughout the session. In multi-agent and agentic AI systems, system prompts serve as the primary mechanism for role specialisation, safety guardrail enforcement, and task decomposition.

- ### Semantic Classification
  - owl-class:: system-prompt:System Prompt
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - enables [[Prompt Engineering]]
  - enables [[Reasoning]]
  - relatedTo [[Prompt Injection]]
  - relatedTo [[Chain of Thought]]
  - relatedTo [[Self-Consistency]]

- ### Content
  The system prompt occupies a privileged position in the LLM context window, typically processed before any user or assistant turns and often hidden from the user by the application layer. Its content can include persona definitions ("You are a senior data analyst…"), tool schemas and invocation instructions (for function-calling and Model Context Protocol integrations), safety rules ("Do not produce code that…"), output format specifications, and contextual background information that grounds all subsequent responses.

  In the OpenAI Chat Completions API and compatible interfaces, the system role message is the canonical vehicle for operator-level instructions, with user role messages representing end-user input. Anthropic's Claude models support a system field at the top level of the Messages API, separate from the conversational turns. The distinction between system and user messages has security implications: prompt injection attacks attempt to embed adversarial instructions in user-controlled content that override or subvert the operator's system prompt.

  In agentic architectures, system prompts define agent specialisation: a coordinator agent's system prompt assigns it orchestration responsibilities, whilst sub-agent system prompts define their domain expertise, available tools, and output contracts. Multi-agent frameworks such as AutoGen and CrewAI construct system prompts programmatically based on role configurations, allowing rapid reconfiguration of agent capabilities without model fine-tuning. The effective design of system prompts—including instruction clarity, constraint specificity, and example provision—is a core concern of prompt engineering practice.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

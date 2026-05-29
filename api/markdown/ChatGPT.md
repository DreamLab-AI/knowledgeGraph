public:: true

# ChatGPT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chat-gpt",
  "@type": "Page",
  "vc:slug": "chat-gpt",
  "title": "ChatGPT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:individual:chat-gpt",
  "@type": "Individual",
  "label": "ChatGPT",
  "definition": "ChatGPT is a large language model-based conversational AI assistant developed by OpenAI, publicly released in November 2022 and built on successive GPT model families. It demonstrated that general-purpose instruction-following dialogue could be deployed at consumer scale, triggering rapid adoption across education, coding, and knowledge-work domains. Its interface popularised prompt-based interaction as the dominant paradigm for human–AI collaboration.",
  "domain": "ai",
  "maturity": "established",
  "instanceOf": [{"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:individual:gemini", "label": "Gemini"},
      {"@id": "urn:ngm:individual:anthropic-claude", "label": "Anthropic Claude"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:pre-training", "label": "Pre Training"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:gpt", "label": "GPT"},
      {"@id": "urn:ngm:class:open-ai", "label": "OpenAI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:individual:gemini", "label": "Gemini"},
      {"@id": "urn:ngm:individual:anthropic-claude", "label": "Anthropic Claude"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ChatGPT is OpenAI's publicly deployed conversational AI assistant built on GPT-family large language models, released in November 2022 and widely credited with mainstream adoption of generative AI.
- ### Relationships
  - ChatGPT is an instance of [[Conversational AI]] and uses the [[Transformer]] architecture with [[Pre Training]] and [[Fine Tuning]] via reinforcement learning from human feedback (RLHF). It is produced by [[OpenAI]] and competes directly with [[Gemini]] and [[Anthropic Claude]]. It relies on [[GPT]] model families and enables downstream [[Agentic Workflow]] and [[AI Agents]] applications via its API and plugin ecosystem.
- ### Content
  - ChatGPT was launched on 30 November 2022 as a web-based interface wrapping the GPT-3.5 model fine-tuned through reinforcement learning from human feedback (RLHF). Within two months it reached 100 million monthly active users, the fastest consumer technology adoption in history at that time, and forced incumbent technology companies to accelerate their own generative AI programmes.

  - The system's core capability is contextual, multi-turn dialogue. Unlike earlier chatbots constrained to scripted flows, ChatGPT can synthesise information, write code, draft documents, debug logic, and refuse harmful requests within the same conversation window. This flexibility emerged from pretraining on large internet corpora followed by supervised fine-tuning on human-written demonstrations and preference-based ranking of model outputs.

  - GPT-4, released March 2023, substantially extended ChatGPT's capabilities with multimodal image input, longer context windows, and improved reasoning benchmarks. The subsequent GPT-4o and GPT-4o mini models introduced real-time audio and vision interaction, positioning ChatGPT as a general-purpose assistant rather than a text-only tool. OpenAI has progressively exposed these capabilities through a tiered subscription model (Free, Plus, Team, Enterprise) and an API that developers embed in third-party applications.

  - From an AI governance perspective, ChatGPT's deployment highlighted systemic questions around model evaluation, copyright of training data, hallucination at scale, and the boundary between operator and user responsibilities under frameworks such as the [[EU AI Act]]. Regulators in multiple jurisdictions opened investigations and required OpenAI to implement additional safeguards including data-subject access mechanisms under [[GDPR]].

  - The ChatGPT ecosystem includes GPTs (custom assistants built without code), a code interpreter environment (Advanced Data Analysis), DALL-E image generation integration, and a memory feature enabling personalised context across sessions. These layers have established ChatGPT as the canonical reference point against which competing models such as [[Gemini]] and [[Anthropic Claude]] are benchmarked in public evaluation suites.

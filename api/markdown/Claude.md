public:: true

# Claude
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:claude",
  "@type": "Page",
  "vc:slug": "claude",
  "title": "Claude",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:claude",
  "@type": "Class",
  "label": "Claude",
  "definition": "Claude is a family of large language model AI assistants developed by Anthropic, designed with safety and harmlessness as first-order design objectives alongside capability. Claude models are trained using Constitutional AI and reinforcement learning from human feedback to be helpful, harmless, and honest, embodying Anthropic's research programme on aligning advanced AI systems with human values. The Claude model family spans Haiku, Sonnet, and Opus tiers offering cost-performance trade-offs, and supports extended context windows, tool use, agentic workflows, and multimodal inputs. Claude has been widely adopted in enterprise API integrations, developer tooling, and consumer applications.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:proprietary-large-language-models", "label": "Proprietary Large Language Models"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:anthropic", "label": "Anthropic"},
      {"@id": "urn:ngm:class:constitutional-ai-training-methodology-language-model-family", "label": "Anthropic Claude"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:constitutional-ai-training-methodology", "label": "Constitutional AI"},
      {"@id": "urn:ngm:class:rlhf", "label": "RLHF"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Claude is [[Anthropic]]'s family of [[Large Language Models]] built with [[Constitutional AI Training Methodology]] and [[RLHF]] training to achieve alignment between capability and human values, widely deployed via API for [[Conversational AI]], [[Agentic Workflow]], and [[Tool Use]] applications.
- ### Relationships
  - Claude is the primary commercial product through which [[Anthropic]] advances its mission of responsible AI development. Its [[Constitutional AI Training Methodology]] training methodology distinguishes it from models trained purely on human preference labels, building a set of principles into the fine-tuning process to improve harmlessness without sacrificing helpfulness. [[RLHF]] shapes the conversational style and refusal behaviour. The [[Agentic Workflow]] capabilities—including [[Tool Use]] and [[Function Calling]]—have made Claude a widely used backbone for autonomous AI agent systems. Claude models are evaluated against [[AI Safety]] benchmarks and published with [[AI Model Card]] documentation.
- ### Content
  - Claude was first publicly released by Anthropic in March 2023, following the company's 2021 founding by former OpenAI researchers including Dario Amodei and Daniela Amodei. The name 'Claude' is a deliberate humanisation of the assistant, in contrast to more acronym-based or technical naming conventions. Anthropic positioned Claude explicitly as a safety-focused alternative to GPT-4, with the claim that Constitutional AI—a training technique that uses a set of written principles and AI self-critique to shape model behaviour—produced a model less likely to assist with harmful requests whilst remaining substantively helpful.

  - The Claude model family has evolved through multiple generations: Claude 1, Claude 2 (with 100K token context), Claude 3 (Haiku/Sonnet/Opus with multimodal capability), and subsequent versions with extended context and enhanced tool use. The tiered naming convention reflects a deliberate positioning strategy: Haiku for low-latency, cost-sensitive applications; Sonnet for balanced performance; and Opus for maximum capability on complex reasoning tasks. This architecture mirrors the market segmentation strategy adopted by competing labs, signalling the maturation of the commercial LLM market.

  - Constitutional AI, the training approach developed by Anthropic and applied to Claude, represents a significant departure from pure human feedback-based alignment. Rather than relying entirely on human raters to label good versus bad responses, Constitutional AI has the model itself critique and revise its outputs against a set of written principles, reducing reliance on human annotation for harmlessness whilst improving consistency. This approach has been published in academic papers and represents Anthropic's most significant public contribution to alignment methodology.

  - Claude's agentic capabilities—the ability to use tools, execute code, browse the web, and orchestrate multi-step tasks—place it at the frontier of the transition from chat assistant to autonomous agent. Anthropic's Model Context Protocol (MCP) standardises the interface between Claude and external tools, enabling third-party developers to build integrations that Claude can discover and use at inference time. This positions Claude as a programmable AI layer in enterprise software stacks, with significant implications for workflow automation, software development, and knowledge work across industries.

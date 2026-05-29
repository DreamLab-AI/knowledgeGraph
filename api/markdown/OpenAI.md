public:: true

# OpenAI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-ai",
  "@type": "Page",
  "vc:slug": "open-ai",
  "title": "OpenAI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-ai",
  "@type": "Class",
  "label": "OpenAI",
  "definition": "OpenAI is an American AI research and deployment company founded in December 2015 with the stated mission of ensuring that artificial general intelligence benefits all of humanity. Originally established as a non-profit, OpenAI restructured as a 'capped-profit' entity in 2019 to attract large-scale investment while retaining its mission-oriented governance. OpenAI is responsible for some of the most influential AI systems and research artefacts of the current era, including the GPT series of large language models, the DALL-E image generation models, the Codex code generation model, and the ChatGPT conversational interface.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:foundation-models", "label": "Foundation Models"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:ai-safety-research", "label": "AI Safety Research"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open Source AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:gpt", "label": "GPT"},
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:training-hardware", "label": "Training Hardware"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"},
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"},
      {"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and Alignment"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - OpenAI is a leading AI research and deployment organisation responsible for the GPT series of large language models and ChatGPT, occupying a central position in the contemporary AI landscape through its research output, commercial products, and governance debates.
- ### Relationships
  - OpenAI is a principal developer of [[Foundation Models]] including the GPT series of [[Large Language Models]] and the DALL-E image generation system. It advances [[AI Safety Research]] and [[AI Alignment]] through its safety team and publishes evaluations via [[Model Evaluation Results]]. OpenAI's models are built on [[Transformer]] architectures trained with [[Deep Learning]] on large-scale [[Training Hardware]]. The organisation has shaped [[AI Governance]] debates globally and developed the [[Model Context Protocol]] (MCP) standard for tool-augmented AI systems. Its relationship with [[Open Source AI]] has evolved over time, moving from an open research model toward proprietary API-based access.
- ### Content
  - OpenAI was founded in December 2015 by a group including Sam Altman, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, John Schulman, and Elon Musk (who later departed the board). Initial backers committed $1 billion in funding. The founding mission centred on developing AI safely and ensuring its benefits were broadly distributed—a mission that would prove increasingly contested as the organisation scaled and commercialised.

  - The GPT (Generative Pre-trained Transformer) series represents OpenAI's most consequential technical contribution. GPT-1 (2018) demonstrated that large-scale unsupervised pre-training followed by task-specific fine-tuning could achieve strong NLP performance. GPT-2 (2019) introduced staged release due to concerns about misuse potential. GPT-3 (2020) with 175 billion parameters demonstrated emergent few-shot learning capabilities and sparked widespread interest in large language models. GPT-4 (2023) introduced multimodal capabilities and achieved human-level performance on numerous professional benchmarks.

  - ChatGPT, launched in November 2022, became the fastest consumer application to reach 100 million users, fundamentally shifting public awareness and adoption of AI. By providing a natural conversational interface to GPT-3.5 and later GPT-4, ChatGPT democratised access to powerful language model capabilities and triggered competitive responses from Google, Meta, Anthropic, and others, dramatically accelerating the AI industry.

  - OpenAI's governance structure has been subject to significant scrutiny. The "capped-profit" structure—where investors can receive up to 100× returns before excess profits flow to the non-profit—attempts to balance mission alignment with capital requirements. A high-profile boardroom crisis in November 2023, when CEO Sam Altman was briefly removed then reinstated, highlighted tensions between commercial ambitions and safety-focused governance, and prompted broader debates about AI company governance structures.

  - OpenAI's research on Reinforcement Learning from Human Feedback (RLHF) for aligning language model outputs with human preferences has been widely adopted across the AI industry. Its safety team conducts red-teaming, model evaluations, and preparedness assessments. The organisation has articulated a "superalignment" research agenda aimed at developing scalable oversight techniques for systems that may eventually exceed human expert capabilities in specific domains.

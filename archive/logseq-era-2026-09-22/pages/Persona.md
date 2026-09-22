public:: true

# Persona
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:persona",
  "@type": "Page",
  "vc:slug": "persona",
  "title": "Persona",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:persona",
  "@type": "Class",
  "label": "Persona",
  "definition": "A persona is a defined personality, role, and behavioural profile assigned to a conversational AI to shape its tone, knowledge framing, and interaction style. It encodes traits such as voice, expertise, boundaries, and goals, often via system prompts, so that responses stay consistent and aligned with a product's intent. Personas make chatbots feel coherent and purposeful rather than generic.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:chatbots", "label": "Chatbots"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A persona is the configured personality and role that governs how [[Chatbots]] speak, frame knowledge, and stay consistent across a conversation.
- ### Content
  - Personas are typically specified through system prompts and behavioural guardrails that fix tone, allowed topics, and decision style, sometimes reinforced by fine-tuning or retrieval of role-specific knowledge. A well-designed persona improves trust and task fit, while a poorly bounded one can drift, leak instructions, or produce off-brand responses.

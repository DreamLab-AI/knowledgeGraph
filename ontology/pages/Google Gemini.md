public:: true

# Google Gemini
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:google-gemini",
  "@type": "Page",
  "vc:slug": "google-gemini",
  "title": "Google Gemini",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:google-ai-technology-corporation-gemini",
  "@type": "Class",
  "label": "Google Gemini",
  "definition": "Google Gemini is a family of natively multimodal large language models developed by Google DeepMind, capable of reasoning across text, images, audio, video, and code. Released in tiers (such as Ultra, Pro, Flash, and Nano) it spans data-centre to on-device deployment and powers Google's assistant and developer APIs. It is a leading frontier model used for chat assistants, agents, and integrated productivity tools.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:gpts-and-custom-assistants", "label": "GPTs and Custom Assistants"}, {"@id": "urn:ngm:class:agentic-internet", "label": "Agentic Internet"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Google Gemini is Google DeepMind's family of multimodal LLMs; it relates to [[GPTs and Custom Assistants]] as a competing assistant platform and is a building block used by the emerging [[Agentic Internet]].
- ### Content
  - Gemini models are trained from the ground up to process multiple modalities, enabling tasks that mix vision, audio, and language with long context windows. Tiered variants trade capability for latency and cost, from on-device Nano to high-capability Ultra/Pro, served through the Gemini API and Vertex AI. The models support tool use and function calling, making them a backbone for agentic applications and search integration.

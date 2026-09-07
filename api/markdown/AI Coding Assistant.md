```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-coding-assistant",
  "@type": "Page",
  "vc:slug": "ai-coding-assistant",
  "title": "AI Coding Assistant",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "Developer Productivity",
    "Internal Adoption Metrics"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-coding-assistant",
  "@type": "Class",
  "label": "AI Coding Assistant",
  "definition": "A class of AI tools designed to augment software development workflows by generating, refactoring, and debugging code, thereby enhancing developer productivity.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpt",
      "label": "GPT"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "provenance": {
    "source": "podcast-knowledge-ingest",
    "created": "2026-08-24",
    "episode": "more-new-ai-models-openai-drops-51-pro-and-codex-pro.md"
  }
}
```

- ### Overview
  - OpenAI reports that 95% of its internal engineers use Codex weekly, and those engineers ship roughly 70% more pull requests since adopting the tool. *(Source: OpenAI, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance

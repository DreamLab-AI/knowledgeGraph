```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:agent-capability-scaling",
  "@type": "Page",
  "vc:slug": "agent-capability-scaling",
  "title": "Agent Capability Scaling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    "AI Capability Trajectory",
    "Agent Capability",
    "GPT-5.1 Codex Max",
    "Long-Horizon Task Benchmark",
    "Time Horizon"
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-capability-scaling",
  "@type": "Class",
  "label": "Agent Capability Scaling",
  "definition": "The empirical trend and theoretical analysis of how the complexity and duration of tasks that AI agents can autonomously complete increase over time with model improvements.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "quality": 0.35,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agent",
      "label": "Agent"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      },
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:autonomous-decision-making",
        "label": "Autonomous Decision Making"
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
  - On the Meters benchmark for long-horizon tasks, GPT-5.1 Codex Max achieved a 50% success rate on tasks taking a human programmer 2 hours and 42 minutes, which is 25 minutes longer than the previous state-of-the-art GPT-5. *(Source: Meters Benchmark, via AI Daily Brief, 2026-08-24)*
  - **[Industry analysis]** The time horizon for agent capabilities is doubling roughly every 7 months, with the state-of-the-art capability horizon tripling since the release of Claude 3 Sonnet in February due to an inflection point around the release of GPT-4o. *(Source: AI Daily Brief Host, via AI Daily Brief, 2026-08-24)*
- ### Relationships
- ### Provenance

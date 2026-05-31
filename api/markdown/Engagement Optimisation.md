public:: true

# Engagement Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:engagement-optimisation",
  "@type": "Page",
  "vc:slug": "engagement-optimisation",
  "title": "Engagement Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:engagement-optimisation",
  "@type": "Class",
  "label": "Engagement Optimisation",
  "definition": "Engagement optimisation is the use of machine-learning models and feedback loops to maximise a user's interaction with a system, measured by signals such as session length, return frequency, and response rate. It typically learns from behavioural data to personalise content, timing, and prompts. While it can improve usefulness, it raises ethical concerns when optimisation targets attention or dependency rather than user benefit.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}, {"@id": "urn:ngm:class:ai-companions", "label": "AI Companions"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Engagement optimisation applies ML and [[Feedback Loop]] signals to maximise user interaction, a technique implemented by systems such as [[AI Companions]].
- ### Content
  - Models ingest behavioural telemetry and adjust content, cadence, and prompts to increase measured engagement. The approach delivers personalisation but demands ethical guardrails to avoid optimising for compulsive use over genuine value.

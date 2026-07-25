public:: true

# Frontier Model Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:frontier-model-evaluation",
  "@type": "Page",
  "vc:slug": "frontier-model-evaluation",
  "title": "Frontier Model Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:frontier-model-evaluation",
  "@type": "Class",
  "label": "Frontier Model Evaluation",
  "definition": "Frontier model evaluation is the systematic assessment of the capabilities, limitations, and risks of the most advanced AI systems, including dangerous-capability and safety testing. It uses benchmarks, red-teaming, and threat-model-driven evaluations to inform deployment decisions and regulation. Such evaluation is increasingly required by AI governance regimes before high-capability models are released.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:frontier-models", "label": "Frontier Models"}, {"@id": "urn:ngm:class:asia-pacific-regulation", "label": "Asia Pacific Regulation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Frontier model evaluation rigorously tests the capabilities and risks of [[Frontier Models]], supplying the evidence that informs deployment policy and emerging regimes such as [[Asia-Pacific Regulation]].
- ### Content
  - Evaluations span standard capability benchmarks, adversarial red-teaming, and assessments of dangerous capabilities such as cyber-offence, biological uplift, and autonomous replication. Results feed safety cases and responsible-scaling policies that set thresholds for additional safeguards. Independent third-party evaluation and pre-deployment testing are central to frontier AI safety frameworks.

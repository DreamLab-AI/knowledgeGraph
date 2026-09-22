public:: true

# Scientific Research
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scientific-research",
  "@type": "Page",
  "vc:slug": "scientific-research",
  "title": "Scientific Research",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scientific-research",
  "@type": "Class",
  "label": "Scientific Research",
  "definition": "Scientific research is the systematic investigation of phenomena through observation, hypothesis, experiment, and analysis to produce reproducible knowledge. As an application domain for AI, it spans literature review, data analysis, modelling, and experiment automation. Modern AI systems and autonomous agents increasingly support researchers across the discovery, verification, and dissemination stages.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-companies", "label": "AI Companies"},
      {"@id": "urn:ngm:class:agents", "label": "Agents"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Scientific research is a knowledge-producing application area increasingly supported by [[AI Companies]] and autonomous [[Agents]] across data analysis, modelling, and experiment design.
- ### Content
  - AI assistance ranges from retrieval and summarisation of literature to statistical analysis, code generation, and tool-using agents that orchestrate computational experiments. These capabilities raise throughput but require rigorous validation, provenance tracking, and reproducibility safeguards to preserve scientific integrity.

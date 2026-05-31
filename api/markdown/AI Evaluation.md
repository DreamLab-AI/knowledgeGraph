public:: true

# AI Evaluation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-evaluation",
  "@type": "Page",
  "vc:slug": "ai-evaluation",
  "title": "AI Evaluation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-evaluation",
  "@type": "Class",
  "label": "AI Evaluation",
  "definition": "AI Evaluation is the systematic measurement of model capabilities, reliability, safety, and alignment using benchmarks, held-out tasks, human preference judgments, and automated graders. It produces quantitative metrics and qualitative findings that guide model selection, release decisions, and risk assessment. Robust evaluation must guard against benchmark contamination, distribution shift, and over-optimization toward narrow scores.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation Benchmarks and Leaderboards"},
      {"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - AI Evaluation measures how well models perform, behave, and stay safe across tasks. It is operationalized through [[Evaluation Benchmarks and Leaderboards]] and reported via standardized [[Evaluation Metric]] families.
- ### Content
  - Methods span static benchmarks, dynamic and adversarial probes, LLM-as-judge scoring, and human preference studies. Credible evaluation controls for data contamination and prompt sensitivity, reports uncertainty, and pairs aggregate leaderboard numbers with targeted capability and safety tests to avoid Goodhart-style gaming.

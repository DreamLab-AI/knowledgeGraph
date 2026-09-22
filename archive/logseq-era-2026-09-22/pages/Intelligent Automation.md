public:: true

# Intelligent Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:intelligent-automation",
  "@type": "Page",
  "vc:slug": "intelligent-automation",
  "title": "Intelligent Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intelligent-automation",
  "@type": "Class",
  "label": "Intelligent Automation",
  "definition": "Intelligent automation is the combination of process automation with artificial intelligence so that workflows can handle unstructured inputs, make context-dependent decisions, and adapt over time. It extends rule-based robotic process automation with machine learning, natural language processing, and computer vision to automate tasks that previously required human judgement. It is widely applied to back-office operations, customer service, and document-intensive processes.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robotic-process-automation", "label": "Robotic Process Automation"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Intelligent automation fuses [[Robotic Process Automation]] with [[Artificial Intelligence]] so workflows can interpret unstructured data and make adaptive decisions. It moves beyond deterministic scripting toward judgement-bearing tasks.
- ### Content
  - A typical stack layers document understanding, NLP, and ML models on top of RPA bots and orchestration. The result automates end-to-end processes such as claims handling or invoice processing where inputs are variable and exceptions are common.

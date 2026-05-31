public:: true

# Enterprise Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:enterprise-automation",
  "@type": "Page",
  "vc:slug": "enterprise-automation",
  "title": "Enterprise Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:enterprise-automation",
  "@type": "Class",
  "label": "Enterprise Automation",
  "definition": "Enterprise automation is the application of software and AI to execute repeatable business processes with minimal human intervention across an organisation. It combines techniques such as robotic process automation, workflow orchestration, business rules engines, and increasingly AI agents that handle unstructured tasks. The goal is to reduce cost, error rates, and cycle time while freeing human workers for higher-value activity.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robotic-process-automation", "label": "Robotic Process Automation"}, {"@id": "urn:ngm:class:ai-companies", "label": "AI Companies"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Enterprise automation executes repeatable business processes with minimal human input, enabled by [[Robotic Process Automation]] and increasingly supported by AI agents offered through [[AI Companies]].
- ### Content
  - It layers rule-based RPA, workflow orchestration, and ML-driven handling of unstructured work. Returns come from lower error rates and faster cycle times, with newer agentic approaches extending automation into judgement-heavy tasks.

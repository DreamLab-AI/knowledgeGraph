public:: true

# Product Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:product-management",
  "@type": "Page",
  "vc:slug": "product-management",
  "title": "Product Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:product-management",
  "@type": "Class",
  "label": "Product Management",
  "definition": "Product management is the organisational function responsible for guiding a product through its lifecycle by defining vision, strategy, and roadmap based on user needs, business goals, and market conditions. It coordinates design, engineering, and go-to-market work and prioritises features against constraints. AI tools increasingly assist with research synthesis, prioritisation, and roadmap visualisation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:ai-diagram-tools", "label": "AI Diagram Tools"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Product management guides a product's vision, strategy, and roadmap by balancing user needs against business and technical constraints. It is supported by [[Product Design]] practices and by [[AI Diagram Tools]] for roadmapping and communication.
- ### Content
  - The discipline spans discovery (user research, problem validation), prioritisation (frameworks weighing impact against effort), delivery coordination across cross-functional teams, and measurement against product metrics. Practitioners translate strategy into prioritised backlogs and align stakeholders, increasingly leaning on AI assistants to synthesise feedback, draft specifications, and generate diagrams and roadmaps.

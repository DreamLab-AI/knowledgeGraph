public:: true

# Dynamic Pricing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dynamic-pricing",
  "@type": "Page",
  "vc:slug": "dynamic-pricing",
  "title": "Dynamic Pricing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dynamic-pricing",
  "@type": "Class",
  "label": "Dynamic Pricing",
  "definition": "Dynamic Pricing is a strategy in which the price of a good or service is adjusted in real time based on demand, supply, competitor prices, inventory, and customer signals. It is typically driven by machine-learning models that forecast willingness to pay and optimise revenue or other objectives. Common in e-commerce, ride-hailing, travel, and logistics, it relies on continuous data feeds and automated decisioning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"}, {"@id": "urn:ngm:class:hyper-personalisation", "label": "Hyper-Personalisation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Dynamic Pricing adjusts prices in real time using demand, supply, and behavioural signals, usually via machine-learning optimisation. It enables [[Logistics Optimization]] and is a lever of [[Hyper-Personalisation]] in commerce.
- ### Content
  - Models forecast demand elasticity and optimise prices against revenue, margin, or capacity-utilisation objectives, often within guardrails set by business rules. Effective dynamic pricing depends on timely data, experimentation, and controls to avoid fairness, perception, and regulatory pitfalls.

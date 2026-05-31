public:: true

# Catastrophic Risk Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:catastrophic-risk-assessment",
  "@type": "Page",
  "vc:slug": "catastrophic-risk-assessment",
  "title": "Catastrophic Risk Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:catastrophic-risk-assessment",
  "@type": "Class",
  "label": "Catastrophic Risk Assessment",
  "definition": "Catastrophic risk assessment is the systematic evaluation of low-probability, high-severity hazards that could cause widespread harm, including the danger that advanced AI systems may enable mass casualties or societal-scale disruption. In AI governance it involves measuring a model's potential to contribute to chemical, biological, cyber, or autonomous-weapon threats before deployment. It matters because frontier-AI regulation, such as proposed state safety bills, conditions release on credible assessment and mitigation of these tail risks.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:california-ai-bill", "label": "California AI Bill"},
      {"@id": "urn:ngm:class:existential-risk", "label": "Existential Risk"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Catastrophic Risk Assessment evaluates whether frontier AI systems could enable mass-harm events, a requirement embedded in regulation such as the [[California AI Bill]] and a methodology relevant to analyses of [[Existential Risk]].
- ### Content
  - Assessment combines dangerous-capability evaluations, red-teaming, and threat modelling across CBRN and cyber domains, often paired with scaling thresholds that trigger heightened scrutiny. Findings inform deployment decisions, safety mitigations, and disclosure obligations to regulators.

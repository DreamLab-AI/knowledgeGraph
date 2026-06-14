public:: true

# Catastrophic Risk Reduction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:catastrophic-risk-reduction",
  "@type": "Page",
  "vc:slug": "catastrophic-risk-reduction",
  "title": "Catastrophic Risk Reduction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:catastrophic-risk-reduction",
  "@type": "Class",
  "label": "Catastrophic Risk Reduction",
  "definition": "Catastrophic risk reduction is the set of interventions, controls, and governance measures aimed at lowering the probability or severity of large-scale harms, particularly those posed by advanced AI systems. It spans technical safeguards such as alignment and capability control, organisational measures such as staged deployment and incident response, and policy measures such as compute governance. It is a core goal of AI safety and alignment work because it targets the tail risks that could threaten societal stability or human survival.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:existential-risk", "label": "Existential Risk"},
      {"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and alignment"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Catastrophic Risk Reduction comprises the technical and policy measures that lower the likelihood or impact of large-scale harms, directly targeting [[Existential Risk]] and operationalised through [[Safety and Alignment]] research.
- ### Content
  - Reduction strategies layer defence in depth: alignment techniques to keep systems controllable, evaluations and tripwires to detect dangerous capabilities, and governance such as responsible scaling policies and compute oversight. The aim is to keep residual catastrophic risk within tolerable bounds even as capability advances.

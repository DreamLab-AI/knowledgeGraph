public:: true

# Sociotechnical Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sociotechnical-analysis",
  "@type": "Page",
  "vc:slug": "sociotechnical-analysis",
  "title": "Sociotechnical Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sociotechnical-analysis",
  "@type": "Class",
  "label": "Sociotechnical Analysis",
  "definition": "Sociotechnical analysis is a methodology that evaluates a technology by examining the interaction between its technical components and the human, organisational, and societal contexts in which it operates, rather than the artefact in isolation. Applied to AI, it traces how models, data, deployment settings, and affected communities jointly produce outcomes and harms. It is central to anticipating systemic risks that purely technical evaluation overlooks.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sociotechnical-system", "label": "Sociotechnical System"},
      {"@id": "urn:ngm:class:ai-risks", "label": "AI Risks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sociotechnical analysis is an [[AI Governance and Ethics]] methodology that assesses technology through the entwined behaviour of its technical parts and the human and organisational contexts surrounding it, instead of treating the artefact alone.
- ### Content
  - For AI, it traces how a [[Sociotechnical System]] of models, data pipelines, operators, and affected communities jointly generates outcomes, surfacing emergent failure modes invisible to component-level testing. It is a primary lens for identifying [[AI Risks]] such as feedback-driven bias amplification, misuse, and structural harms that arise only when a system is embedded in real social settings.

public:: true

# FMEA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fmea",
  "@type": "Page",
  "vc:slug": "fmea",
  "title": "FMEA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fmea",
  "@type": "Class",
  "label": "FMEA",
  "definition": "Failure Mode and Effects Analysis (FMEA) is a structured, proactive engineering methodology for identifying potential failure modes in a product, process, or system, assessing their causes and effects, and prioritising them for mitigation. Each failure mode is rated by severity, occurrence, and detectability, often combined into a Risk Priority Number that ranks risks for corrective action. FMEA is widely used in reliability engineering, safety-critical design, and quality management.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reliability-engineering", "label": "Reliability Engineering"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - FMEA is a systematic technique for enumerating and ranking potential failure modes by severity, occurrence, and detectability, used by [[Reliability Engineering]] and as a form of [[Risk Assessment]]. It is a method within safety and standards practice.
- ### Content
  - An FMEA proceeds by decomposing a system into items or process steps, listing each item's possible failure modes, tracing their causes and downstream effects, and scoring them to compute Risk Priority Numbers that direct mitigation effort. Variants such as Design FMEA and Process FMEA target different lifecycle stages, and the analysis is most effective when conducted early, revisited iteratively, and tied to verifiable corrective actions.

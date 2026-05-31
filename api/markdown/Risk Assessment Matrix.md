public:: true

# Risk Assessment Matrix
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:risk-assessment-matrix",
  "@type": "Page",
  "vc:slug": "risk-assessment-matrix",
  "title": "Risk Assessment Matrix",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-assessment-matrix",
  "@type": "Class",
  "label": "Risk Assessment Matrix",
  "definition": "A risk assessment matrix is a structured grid that ranks risks by cross-tabulating the likelihood of an event against the severity of its impact. Each cell maps to a qualitative or quantitative risk level, allowing teams to prioritise mitigation and allocate resources to the highest-rated risks. It is a standard visual tool in security and safety risk management.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"}, {"@id": "urn:ngm:class:risk-assessment-methodology", "label": "Risk Assessment Methodology"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A risk assessment matrix ranks risks by likelihood against impact, used alongside a [[Threat Surface Map]] and implementing a [[Risk Assessment Methodology]].
- ### Content
  - Plotting each identified risk on the likelihood-severity grid produces a priority ordering that guides where mitigation effort and budget should go. The matrix makes trade-offs explicit and communicable to stakeholders across technical and management audiences.

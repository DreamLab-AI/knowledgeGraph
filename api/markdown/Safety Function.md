public:: true

# Safety Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-function",
  "@type": "Page",
  "vc:slug": "safety-function",
  "title": "Safety Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-function",
  "@type": "Class",
  "label": "Safety Function",
  "definition": "A safety function is a function implemented by a control system or safeguard whose failure results in an immediate increase of risk to people, equipment, or the environment. In robotics and machine safety, examples include emergency stop, speed and separation monitoring, and safe torque off. Safety functions are specified, designed, and validated to meet a required performance level so that residual risk remains tolerable.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Robotics Safety and Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"},
      {"@id": "urn:ngm:class:safety-integrity-level", "label": "Safety Integrity Level"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A safety function is a control-system function whose correct operation reduces or limits risk, as required by a [[Robot Standard]]. Its dependability is quantified through metrics such as the [[Safety Integrity Level]].
- ### Content
  - Safety functions are decomposed into sensing, logic, and actuation elements, each assigned to safety-rated hardware and software. Standards like ISO 13849 and IEC 62061 define how a required performance level or integrity level constrains architecture, diagnostic coverage, and mean time to dangerous failure for each function.

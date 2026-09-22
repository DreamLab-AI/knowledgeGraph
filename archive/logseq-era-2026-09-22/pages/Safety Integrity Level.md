public:: true

# Safety Integrity Level
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-integrity-level",
  "@type": "Page",
  "vc:slug": "safety-integrity-level",
  "title": "Safety Integrity Level",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-integrity-level",
  "@type": "Class",
  "label": "Safety Integrity Level",
  "definition": "Safety Integrity Level (SIL) is a discrete measure of the risk-reduction provided by a safety function, defined by the IEC 61508 family of standards on four levels (SIL 1 to SIL 4). Each level corresponds to a target probability of dangerous failure on demand or per hour. SIL is used to specify, design, and verify that safety-related control systems achieve a tolerable level of risk.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-standard", "label": "Robot Standard"},
      {"@id": "urn:ngm:class:safety-function", "label": "Safety Function"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Safety Integrity Level quantifies the dependability target for a [[Safety Function]], as referenced by the relevant [[Robot Standard]]. Higher levels demand lower probabilities of dangerous failure.
- ### Content
  - SIL classification drives architectural constraints, diagnostic coverage, and proof-test intervals. Determining a target SIL involves risk graphs or layer-of-protection analysis, and verification combines hardware fault-tolerance metrics with systematic-capability evidence across the safety lifecycle.

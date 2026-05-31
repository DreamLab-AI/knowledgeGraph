public:: true

# Safety Certification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safety-certification",
  "@type": "Page",
  "vc:slug": "safety-certification",
  "title": "Safety Certification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safety-certification",
  "@type": "Class",
  "label": "Safety Certification",
  "definition": "Safety certification is the formal attestation by an accredited body that a product, system, or process conforms to applicable safety standards and regulations. It involves assessment, testing, and audit against criteria such as functional-safety integrity levels, after which a mark or certificate authorises deployment. For robots it verifies that protective measures like collision detection meet required safety levels.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Robotics Safety and Standards"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"}, {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Safety certification is accredited attestation of conformance to safety standards, enabled by [[Collision Detection]] and required to meet [[Cobot Safety Levels]].
- ### Content
  - Certification bodies assess design, test protective functions, and audit processes against standards before issuing a mark. The resulting certificate gives operators and regulators documented assurance that the system's safety measures perform to specified integrity levels.

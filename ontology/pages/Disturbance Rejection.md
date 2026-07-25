public:: true

# Disturbance Rejection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:disturbance-rejection",
  "@type": "Page",
  "vc:slug": "disturbance-rejection",
  "title": "Disturbance Rejection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:disturbance-rejection",
  "@type": "Class",
  "label": "Disturbance Rejection",
  "definition": "Disturbance rejection is the capacity of a control system to maintain desired output behaviour despite unmeasured external disturbances or model uncertainties acting on the plant. It is typically achieved through feedback control, integral action, or disturbance observers that estimate and cancel the disturbance's effect. In robotics it is essential for maintaining stable setpoints and trajectories when a robot is subject to external forces, friction, or sensor noise.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:feedback-control",
      "label": "Feedback Control"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Disturbance rejection is the capacity of a control system to maintain desired output behaviour despite unmeasured external disturbances or model uncertainties acting on the plant. It is typically achieved through feedback control, integral action, or disturbance observers that estimate and cancel the disturbance's effect. In robotics it is essential for maintaining stable setpoints and trajectories when a robot is subject to external forces, friction, or sensor noise.

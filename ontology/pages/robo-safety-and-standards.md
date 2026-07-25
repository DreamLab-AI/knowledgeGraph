public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:59a2652785e955ed5868bb42f470fd1c0b5f3d276fa58114c6afa4a8ba44f8b4",
  "@type": "Page",
  "vc:slug": "robo-safety-and-standards",
  "title": "Safety and Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:robo-safety-and-standards",
  "label": "Safety and Standards",
  "definition": "Taxonomy hub for robotics safety requirements, certification standards, collision avoidance, force-limiting mechanisms, and regulatory compliance frameworks governing safe robot operation alongside humans in industrial and service environments.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"},
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"},
      {"@id": "urn:ngm:class:robo-human-robot-interaction", "label": "Human-Robot Interaction"},
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:regulatory-framework", "label": "Regulatory Framework"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ]
  },
  "qualityScore": 0.8,
  "quality": 0.8,
  "maturity": "established"
}
```

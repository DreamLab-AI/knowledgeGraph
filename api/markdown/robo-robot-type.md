public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:11b2e8b64c3c4ad5e475e8e437bad7a260f218a4b6f27d179def05f5f07ef9cb",
  "@type": "Page",
  "vc:slug": "robo-robot-type",
  "title": "Robot Type",
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
  "@id": "urn:ngm:class:robo-robot-type",
  "label": "Robot Type",
  "definition": "Taxonomy hub classifying robots by physical configuration, kinematics, and operational domain, including industrial manipulators, mobile platforms, humanoids, collaborative robots, aerial and marine systems, surgical robots, and service robots.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:humanoid-robot", "label": "Humanoid Robot"},
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"},
      {"@id": "urn:ngm:class:service-robot", "label": "Service Robot"},
      {"@id": "urn:ngm:class:aerial-robot", "label": "Aerial Robot"},
      {"@id": "urn:ngm:class:surgical-robot", "label": "Surgical Robot"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"},
      {"@id": "urn:ngm:class:soft-robotics", "label": "Soft Robotics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"},
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"},
      {"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"},
      {"@id": "urn:ngm:class:robo-human-robot-interaction", "label": "Human-Robot Interaction"}
    ]
  },
  "qualityScore": 0.8,
  "quality": 0.8,
  "maturity": "established"
}
```

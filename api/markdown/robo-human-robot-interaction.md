public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f30aa3a7509729169599f8e2497c2cfe404b2d2cea4a6a0b5b204c10aa2756d",
  "@type": "Page",
  "vc:slug": "robo-human-robot-interaction",
  "title": "Human-Robot Interaction",
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
  "@id": "urn:ngm:class:robo-human-robot-interaction",
  "label": "Human-Robot Interaction",
  "definition": "Taxonomy hub covering the methods, interfaces, and social dynamics through which humans and robots communicate, cooperate, and coordinate. This category spans teleoperation, haptic feedback, social robotics, speech and gesture interfaces, and safety considerations for shared human-robot workspaces.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:teleoperation", "label": "Teleoperation"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:social-robotics", "label": "Social Robotics"},
      {"@id": "urn:ngm:class:collaborative-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"},
      {"@id": "urn:ngm:class:robo-safety-and-standards", "label": "Safety and Standards"},
      {"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"}
    ]
  },
  "qualityScore": 0.8,
  "maturity": "established"
}
```

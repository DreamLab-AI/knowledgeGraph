public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:76c6a96fb6cc02031568ee8e2c7556c5c10397febffdaad4c44e1bfb49cffc0d",
  "@type": "Page",
  "vc:slug": "robo-navigation-and-planning",
  "title": "Navigation and Planning",
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
  "@id": "urn:ngm:class:robo-navigation-and-planning",
  "label": "Navigation and Planning",
  "definition": "Taxonomy hub for methods that enable a robot to determine its position, build a map of its environment, and compute collision-free paths to goals. It encompasses simultaneous localisation and mapping, path planning, motion planning, obstacle avoidance, sensor fusion, and autonomous navigation, forming the core competency for mobile robot autonomy.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:localisation", "label": "Localization"},
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:trajectory-planning", "label": "Trajectory Planning"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"},
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:navigation", "label": "Navigation"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```

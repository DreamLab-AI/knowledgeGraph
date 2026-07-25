public:: true

# rb 0017 rescue robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e48d45aca5bfba3d7e0cf0a973c4984eb9c9716cd90b9c3d796aafda0153990f",
  "@type": "Page",
  "vc:slug": "rb-0017-rescue-robot",
  "title": "rb 0017 rescue robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0017 rescue robot"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rb-0017-rescue-robot",
  "@type": "Class",
  "label": "rb 0017 rescue robot",
  "definition": "A rescue robot is a mobile robotic system specifically designed or adapted for deployment in disaster, emergency, or hazardous environments where direct human access is dangerous or impossible. Rescue robots perform tasks such as victim search-and-detection, structural reconnaissance, rubble traversal, gas sensing, and teleoperated manipulation of debris. They typically integrate rugged locomotion systems (tracked, legged, or serpentine), multiple sensor modalities (thermal, depth camera, LIDAR, gas detectors), and semi-autonomous navigation with human-on-the-loop teleoperation.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:mobile-robot",
      "label": "Mobile Robot"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:rb-0077-depth-camera", "label": "rb 0077 depth camera"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0008-autonomous-robot", "label": "rb 0008 autonomous robot"},
      {"@id": "urn:ngm:class:rb-0018-inspection-robot", "label": "rb 0018 inspection robot"},
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rescue-robot", "label": "Rescue Robot"},
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0017-rescue-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e48d45aca5bfba3d7e0cf0a973c4984eb9c9716cd90b9c3d796aafda0153990f"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A rescue robot is a specialised mobile robot deployed in emergency scenarios—collapsed structures, fires, chemical spills, and nuclear incidents—where sending human responders entails unacceptable risk. These systems must combine robust locomotion on unstructured terrain, reliable communications over intermittent links, multi-modal sensing for victim detection (thermal imaging, audio, CO2), and sufficient autonomy to navigate when teleoperation bandwidth is constrained.

- ### Semantic Classification
  - owl-class:: robotics:rb0017rescuerobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Rescue robots are a subclass of mobile robots and share significant technology with inspection robots (RB-0018). Their perception stack typically includes SLAM for mapping unknown environments, depth cameras (RB-0077), and LiDAR (RB-0069) for 3D situational awareness. Obstacle avoidance is safety-critical in debris-filled environments. Swarm approaches are increasingly applied: multiple smaller rescue robots cooperate to cover larger search areas more quickly than a single large platform.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

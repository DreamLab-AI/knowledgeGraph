public:: true

# rb 0105 speed and separation monitoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:065e5621bb21004baca2e890d66286f4c02708762c44f5ae95e888cbb9defd2a",
  "@type": "Page",
  "vc:slug": "rb-0105-speed-and-separation-monitoring",
  "title": "rb 0105 speed and separation monitoring",
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
      "vc:value": "RB-0105"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0105 speed and separation monitoring"
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
  "@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring",
  "@type": "Class",
  "label": "rb 0105 speed and separation monitoring",
  "definition": "Speed and Separation Monitoring (SSM) is a collaborative robot safety function in which the speed of the robot is continuously regulated based on the measured distance between the robot and any human operator in the shared workspace. When the separation distance decreases below defined thresholds the robot slows or stops, and it resumes normal speed once sufficient separation is restored. SSM is standardised under ISO/TS 15066 as one of the four permitted collaborative operation modes.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:light-curtain",
      "label": "Light Curtain"
    }
  ],
  "quality": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"},
      {"@id": "urn:ngm:class:rb-0095-safety-zone", "label": "rb 0095 safety zone"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0105-speed-and-separation-monitoring:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:065e5621bb21004baca2e890d66286f4c02708762c44f5ae95e888cbb9defd2a"
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
  - ### Primary Definition
  Speed and Separation Monitoring (SSM) is a collaborative robot safety function that continuously adapts robot speed in inverse proportion to the measured proximity of any human operator in the shared workspace. As the operator moves closer to the robot, the robot slows; if the minimum protective separation distance is breached the robot stops. Once separation is restored to a safe threshold, the robot resumes operation automatically. SSM is one of the four collaborative operation modes defined by ISO/TS 15066 (alongside safety-rated monitored stop, hand guiding, and power/force limiting).

  SSM requires at minimum a certified area-scanning sensor — typically a safety-rated LiDAR or camera system — capable of resolving the operator's position within the robot's protective separation distance in real time. The protective separation distance itself is calculated from the sum of the robot's stopping distance, the operator's approach speed, and a sensor reaction-time margin. Higher resolution sensors and faster control loops allow smaller minimum separation distances and therefore greater productivity in human-robot collaborative cells.

- ### Semantic Classification
  - owl-class:: robotics:rb0105speedandseparationmonitoring
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: rb 0066 robot sensor, rb 0095 safety zone
  - Enables: rb 0103 collaborative operation
  - Depends on: rb 0093 speed limitation, rb 0069 lidar
  - Related to: rb 0092 protective stop, rb 0094 power and force limiting, rb 0089 risk assessment
  - Standardised by: rb 0087 safety standard

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

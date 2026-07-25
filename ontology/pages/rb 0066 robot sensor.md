public:: true

# rb 0066 robot sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:863d972f169a0229677acf8c72e176802f95610bdea2bbb3857317fe337c529b",
  "@type": "Page",
  "vc:slug": "rb-0066-robot-sensor",
  "title": "rb 0066 robot sensor",
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
      "vc:value": "RB-0066"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0066 robot sensor"
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
  "@id": "urn:ngm:class:rb-0066-robot-sensor",
  "@type": "Class",
  "label": "rb 0066 robot sensor",
  "definition": "A robot sensor is a transducer or measurement device integrated into or used by a robot system to acquire information about the robot's own state or its surrounding environment. Robot sensors span proprioceptive types — such as encoders, IMUs, and force-torque sensors — and exteroceptive types such as vision systems, LiDAR, radar, and proximity sensors. The data they provide forms the perceptual basis for control, motion planning, and safety functions.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.7,
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:rb-0068-vision-system", "label": "rb 0068 vision system"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"},
      {"@id": "urn:ngm:class:rb-0073-imu", "label": "rb 0073 imu"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0052-collision-avoidance", "label": "rb 0052 collision avoidance"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R4SpecificSpecialization"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0066-robot-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:863d972f169a0229677acf8c72e176802f95610bdea2bbb3857317fe337c529b"
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
  - A robot sensor is any transducer or measurement device that provides a robot system with information about its own internal state or the state of the external environment. Proprioceptive sensors (encoders, IMUs, force/torque sensors) measure the robot's own configuration and dynamics; exteroceptive sensors (vision systems, LiDAR, radar, proximity sensors, depth cameras) measure the surrounding environment. Together they feed the perception pipeline that underpins safe autonomous behaviour, closed-loop control, and human-robot interaction.
  - The performance of a robot sensor — characterised by accuracy, resolution, range, update rate, and environmental robustness — directly constrains what safety and control functions can be implemented. Safety-rated sensors must meet additional requirements around fault detection, dual-channel redundancy, and certified response times, as mandated when used within protective safety functions such as speed and separation monitoring.

- ### Semantic Classification
  - owl-class:: robotics:rb0066robotsensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - has-part:: rb 0067 force torque sensor, rb 0068 vision system, rb 0069 lidar, rb 0072 encoder, rb 0073 imu
  - enables:: rb 0052 collision avoidance, rb 0105 speed and separation monitoring
  - relatedTo:: Sensor Fusion

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

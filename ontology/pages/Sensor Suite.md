public:: true

# Sensor Suite
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensor-suite",
  "@type": "Page",
  "vc:slug": "sensor-suite",
  "title": "Sensor Suite",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-suite",
  "@type": "Class",
  "label": "Sensor Suite",
  "definition": "A sensor suite is the integrated collection of complementary sensors mounted on a robotic platform, such as cameras, LiDAR, radar, IMUs, and encoders, chosen to provide redundant and complementary perception. The combination supports sensor fusion that compensates for the failure modes and blind spots of any single modality. It is a defining hardware subsystem of autonomous mobile robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robot-hardware", "label": "Robot Hardware"}, {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sensor suite is the integrated set of complementary sensors on a robot, combined for redundant, fusable perception. It is a structural part of [[Robot Hardware]] and of a [[Mobile Robot Platform]].
- ### Content
  - Suite composition trades cost, weight, and power against coverage and reliability, pairing modalities such as cameras for semantics with LiDAR for range and IMUs for motion. Fusion algorithms exploit this diversity to maintain robust state estimation under occlusion, glare, or individual sensor dropout.

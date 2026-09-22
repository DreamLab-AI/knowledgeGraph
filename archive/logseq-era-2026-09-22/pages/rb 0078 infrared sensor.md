public:: true

# rb 0078 infrared sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:51c1f8b64ccc68f62709791fa9a22a14b0cdee5a741c6851f24bb4662a3e7cc7",
  "@type": "Page",
  "vc:slug": "rb-0078-infrared-sensor",
  "title": "rb 0078 infrared sensor",
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
      "vc:value": "RB-0078"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0078 infrared sensor"
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
  "@id": "urn:ngm:class:rb-0078-infrared-sensor",
  "@type": "Class",
  "label": "rb 0078 infrared sensor",
  "definition": "An infrared (IR) sensor is an exteroceptive sensor that detects and measures infrared radiation emitted or reflected by objects in the environment, enabling proximity detection, thermal profiling, and obstacle identification in robotic systems. IR sensors operate across near-infrared (NIR), short-wave, mid-wave, and long-wave bands; common robotics applications include proximity switches, line-following, and thermal imaging for human detection. They complement other ranging sensors such as LiDAR and ultrasonic devices, and are frequently fused in multi-modal perception pipelines.",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:rb-0075-range-finder", "label": "rb 0075 range finder"},
      {"@id": "urn:ngm:class:proximity-sensor", "label": "Proximity Sensor"},
      {"@id": "urn:ngm:class:infrared-sensor", "label": "InfraredSensor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:exteroceptive-sensor", "label": "Exteroceptive Sensor"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0052-collision-avoidance", "label": "rb 0052 collision avoidance"},
      {"@id": "urn:ngm:class:rb-0095-safety-zone", "label": "rb 0095 safety zone"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0078-infrared-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:51c1f8b64ccc68f62709791fa9a22a14b0cdee5a741c6851f24bb4662a3e7cc7"
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
  - An **infrared (IR) sensor** detects electromagnetic radiation in the infrared spectrum (wavelengths roughly 700 nm to 1 mm) to infer proximity, temperature, or surface characteristics without physical contact. In robotics, passive IR sensors detect heat emitted by humans or machinery for presence detection and safety zone monitoring, while active IR sensors emit a beam and measure reflected intensity or time-of-flight for precise distance measurement. IR sensors are cost-effective and operate in low-light conditions, making them popular for safety curtains, short-range proximity switches on collaborative robots, and thermal cameras that detect human body heat for speed-and-separation monitoring. Their limitation is susceptibility to interference from ambient IR sources (e.g., sunlight) and reflective surfaces.

- ### Semantic Classification
  - owl-class:: robotics:Infrared
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Classified as an exteroceptive sensor and complements LiDAR (RB-0069), range finders (RB-0075), and depth cameras (RB-0077) in robot perception pipelines.
  - Feeds into sensor fusion and supports collision avoidance (RB-0052) and safety zone enforcement (RB-0095).

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

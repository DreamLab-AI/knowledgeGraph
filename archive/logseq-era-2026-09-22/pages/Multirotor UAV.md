public:: true

# Multirotor UAV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7827c6af2fcc320fd0d219254e899b64b284c8b45976995b7ba88c3c1ee6837d",
  "@type": "Page",
  "vc:slug": "multirotor-uav",
  "title": "Multirotor UAV",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:aerial-robot",
      "vc:label": "Aerial Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0121"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multirotor UAV"
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
  "@id": "urn:ngm:class:multirotor-uav",
  "@type": "Class",
  "label": "Multirotor UAV",
  "definition": "A Multirotor UAV is an unmanned aerial vehicle that achieves lift and attitude control through three or more independently driven rotors. Differential rotor speed adjustment enables hover, translation, yaw, and agile manoeuvring without mechanical pitch or collective mechanisms, making multirotors highly manoeuvrable platforms suited to inspection, aerial photography, payload delivery, and search-and-rescue operations.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:aerial-robot",
      "label": "Aerial Robot"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:state-space-control", "label": "State Space Control"},
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:3-d-li-dar", "label": "3D LiDAR"},
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"},
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:multirotor-uav:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7827c6af2fcc320fd0d219254e899b64b284c8b45976995b7ba88c3c1ee6837d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Aerial Robot]]",
      "resolved": "urn:visionflow:owl:class:aerial-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
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
  - Multirotor UAV achieves lift through multiple propellers driven by motors.

- ### Semantic Classification
  - owl-class:: robotics:Multirotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Aerial Robot]]

- ### Content
  Multirotor UAV — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

public:: true

# SCARA Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9968599a1163b1e5344046261008633d619e3724cf9761304bfb98c73826cdd3",
  "@type": "Page",
  "vc:slug": "scara-robot",
  "title": "SCARA Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:industrial-robot",
      "vc:label": "Industrial Robot"
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
      "vc:value": "RB-0131"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "SCARA Robot"
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
  "@id": "urn:ngm:class:scara-robot",
  "@type": "Class",
  "label": "SCARA Robot",
  "definition": "Selective Compliance Articulated Robot Arm — a four-axis industrial robot with two rotary joints in the horizontal plane that give high compliance laterally whilst providing rigid vertical stiffness along the Z-axis. SCARA robots excel at high-speed pick-and-place, assembly, and packaging tasks that require precise horizontal positioning but resist vertical forces.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:industrial-robot",
      "label": "Industrial Robot"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:delta-robot", "label": "Delta Robot"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:trajectory-planning", "label": "Trajectory Planning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:scara-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9968599a1163b1e5344046261008633d619e3724cf9761304bfb98c73826cdd3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Industrial Robot]]",
      "resolved": "urn:visionflow:owl:class:industrial-robot",
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
  - SCARA robot has selective compliance in X-Y plane and rigidity in Z-axis for fast assembly operations.

- ### Semantic Classification
  - owl-class:: robotics:ScaraRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Industrial Robot]]

- ### Content
  SCARA Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

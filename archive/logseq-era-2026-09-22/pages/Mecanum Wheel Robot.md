public:: true

# Mecanum Wheel Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6",
  "@type": "Page",
  "vc:slug": "mecanum-wheel-robot",
  "title": "Mecanum Wheel Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:omnidirectional-robot",
      "vc:label": "Omnidirectional Robot"
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
      "vc:value": "RB-0117"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mecanum Wheel Robot"
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
  "@id": "urn:ngm:class:mecanum-wheel-robot",
  "@type": "Class",
  "label": "Mecanum Wheel Robot",
  "definition": "A Mecanum Wheel Robot is a wheeled mobile robot platform that achieves true omnidirectional movement by mounting four independently driven mecanum wheels—each fitted with a ring of passive rollers oriented at 45 degrees to the wheel's rotation axis. By differentially controlling the speeds and directions of the four wheels, the platform can translate in any horizontal direction, rotate in place, or combine translation and rotation simultaneously without requiring steering joints or changing wheel orientation. Invented by Bengt Ilon at Mecanum AB in 1972, the design is widely used in warehousing, logistics, and research platforms where unrestricted planar mobility is required in confined spaces.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:omnidirectional-robot",
      "label": "Omnidirectional Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:robot-component", "label": "Robot Component"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:robotics-control", "label": "Robotics Control"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:differential-drive-robot", "label": "Differential Drive Robot"},
      {"@id": "urn:ngm:class:wheeled-robot", "label": "Wheeled Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:wheeled-mobile-robot", "label": "Wheeled Mobile Robot"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:mecanum-wheel-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:629787a82bc138a8f2ab16e5cc04694f0e986197ab338626e92db1e0e07beab6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Omnidirectional Robot]]",
      "resolved": "urn:visionflow:owl:class:omnidirectional-robot",
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
  - Mecanum robot uses four mecanum wheels with angled rollers enabling true omnidirectional movement.

- ### Semantic Classification
  - owl-class:: robotics:MecanumRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Omnidirectional Robot]]

- ### Content
  Mecanum Wheel Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

public:: true

# rb 0034 repeatability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:30c6ffd9b5e7a46aff9c2207efc9763998678677269df0b4ec789ea25f692ccb",
  "@type": "Page",
  "vc:slug": "rb-0034-repeatability",
  "title": "rb 0034 repeatability",
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
      "vc:value": "RB-0034"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0034 repeatability"
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
  "@id": "urn:ngm:class:rb-0034-repeatability",
  "@type": "Class",
  "label": "rb 0034 repeatability",
  "definition": "Repeatability is a key performance metric of robot manipulators that quantifies the closeness of agreement between successive commanded returns to the same target position or pose, measured under identical conditions. It is formally defined in ISO 9283 as the radius of a sphere enclosing a specified percentage of attained positions from repeated attempts. Repeatability is distinct from accuracy — a robot may be highly repeatable but systematically offset from the commanded target — and is critical for applications such as assembly, welding, and precision manufacturing.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0035-accuracy", "label": "rb 0035 accuracy"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:precision", "label": "Precision"},
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"},
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metrics"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0047-feedback-control", "label": "rb 0047 feedback control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rb-0036-resolution", "label": "rb 0036 resolution"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0034-repeatability:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:30c6ffd9b5e7a46aff9c2207efc9763998678677269df0b4ec789ea25f692ccb"
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
  - Repeatability (RB-0034) is the ISO 9283-defined metric expressing how closely a robot returns to the same commanded position or orientation on repeated attempts under identical conditions. Measured as the radius RP of the sphere that contains 95% of attained positions, it is a direct function of mechanical compliance, backlash, controller resolution, and thermal effects. Repeatability is typically in the range 0.01–0.1 mm for precision industrial arms and is the dominant specification criterion for assembly and welding tasks.

- ### Semantic Classification
  - owl-class:: robotics:Repeatability
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Contrasts with: [[rb 0035 accuracy]]
  - Related to: [[Precision]], [[Calibration]], [[Performance Metrics]]
  - Depends on: [[rb 0021 robot kinematics]], [[rb 0047 feedback control]]
  - Part of: [[rb 0036 resolution]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

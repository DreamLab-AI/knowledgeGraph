public:: true

# rb 0094 power and force limiting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:71da7af2cb5490646fcab9e5df266884af4308c157f2fbbcd9d463f75cc2e4f0",
  "@type": "Page",
  "vc:slug": "rb-0094-power-and-force-limiting",
  "title": "rb 0094 power and force limiting",
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
      "vc:value": "RB-0094"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0094 power and force limiting"
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
  "@id": "urn:ngm:class:rb-0094-power-and-force-limiting",
  "@type": "Class",
  "label": "rb 0094 power and force limiting",
  "definition": "Power and Force Limiting (PFL) is a collaborative robot safety mode defined in ISO/TS 15066 in which the robot's mechanical power, force, and momentum are continuously constrained so that any contact with a human remains below biomechanical injury thresholds. Unlike speed-and-separation monitoring, PFL allows direct physical contact by ensuring that contact forces can never exceed prescribed quasi-static and transient limits.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:robot-safety",
      "label": "Robot Safety"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"},
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0094-power-and-force-limiting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:71da7af2cb5490646fcab9e5df266884af4308c157f2fbbcd9d463f75cc2e4f0"
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
  - **Power and Force Limiting** (PFL) is a collaborative application safety mode in which the robot's mechanical power, force, and momentum are continuously constrained so that any contact with a human remains below biomechanical injury thresholds. It is now defined in ISO 10218-2:2025, which superseded and consolidated ISO/TS 15066:2016. Unlike speed-and-separation monitoring, PFL allows direct physical contact by ensuring that contact forces can never exceed prescribed quasi-static and transient limits.

- ### Semantic Classification
  - owl-class:: robotics:rb0094powerandforcelimiting
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - standardizedBy:: ISO 10218-1:2025, ISO 10218-2:2025
  - relatedTo:: [[rb 0091 safety rated monitored stop]], [[rb 0092 protective stop]], [[rb 0093 speed limitation]], [[rb 0089 risk assessment]]
  - requires:: [[rb 0067 force torque sensor]]
  - supports:: [[rb 0057 admittance control]]

- ### Content
  - **Power and Force Limiting** (RB-0094) enables a cobot to operate in direct contact with humans by ensuring all contact forces remain within the biomechanical limits now tabulated in ISO 10218-2:2025 (formerly ISO/TS 15066:2016 Annex A). The limits distinguish between quasi-static contact (sustained pressing) and transient contact (brief impact), with different thresholds for different body regions. Typical limit values are in the range of 65–160 N for transient contact depending on body part.

  PFL is implemented via a combination of torque-sensing (often integrated into each joint), real-time force estimation from motor currents, and compliant mechanical design. Robots certified for PFL operation include the Universal Robots UR series, KUKA LBR iiwa, and FANUC CR series, all of which carry ISO 10218-1 conformance declarations. Force-torque sensors at the wrist provide redundant verification. PFL cobots are widely deployed in automotive assembly, electronics manufacturing, and laboratory automation where direct human collaboration is required.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

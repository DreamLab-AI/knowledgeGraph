public:: true

# rb 0087 safety standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f5616b6bf9eefab3b7bd006c5f3771c4d122ea9f04c883fccac8ecc84ecb4f5b",
  "@type": "Page",
  "vc:slug": "rb-0087-safety-standard",
  "title": "rb 0087 safety standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:nvidia-omniverse",
      "vc:label": "NVIDIA Omniverse"
    },
    {
      "@id": "urn:visionflow:owl:class:people",
      "vc:label": "PEOPLE"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0087"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0087 safety standard"
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
  "@id": "urn:ngm:class:rb-0087-safety-standard",
  "@type": "Class",
  "label": "rb 0087 safety standard",
  "definition": "A safety standard in robotics is a normative document, published by a recognised standards body, that specifies requirements and guidelines to achieve acceptable levels of safety for robot systems, their components, and their operating environments. Key robotics safety standards include ISO 10218-1/2 for industrial robots, ISO/TS 15066 for collaborative operation, and ISO 13482 for personal care robots. Such standards define hazard categories, risk assessment methodology, required safety functions, performance levels, and verification procedures that manufacturers and system integrators must satisfy before deployment.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:robot-standard",
      "label": "Robot Standard"
    }
  ],
  "quality": 0.7,
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0088-iso-13482-compliance", "label": "rb 0088 iso 13482 compliance"},
      {"@id": "urn:ngm:class:rb-0100-safety-integrity-level", "label": "rb 0100 safety integrity level"},
      {"@id": "urn:ngm:class:rb-0101-performance-level", "label": "rb 0101 performance level"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticMatch"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0087-safety-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f5616b6bf9eefab3b7bd006c5f3771c4d122ea9f04c883fccac8ecc84ecb4f5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[NVIDIA Omniverse Platform]]",
      "resolved": "urn:visionflow:owl:class:nvidia-omniverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Domain Expert Contact Index]]",
      "resolved": "urn:visionflow:owl:class:people",
      "kind": "ResolvedLink"
    },
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
  - A safety standard (RB-0087) is a normative document specifying requirements, test methods, and performance criteria that a robot system must satisfy to operate safely. The robotics safety standards hierarchy spans type-A (basic principles, e.g. ISO 12100), type-B (generic safety aspects), and type-C (machine-specific) standards. For robots, the principal type-C standards are ISO 10218-1/2 (industrial robots) and ISO/TS 15066 (collaborative operation); for service robots, ISO 13482 applies.

- ### Semantic Classification
  - owl-class:: robotics:SafetyStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Has part: [[rb 0088 iso 13482 compliance]], [[rb 0100 safety integrity level]], [[rb 0101 performance level]]
  - Requires: [[rb 0089 risk assessment]]
  - Related to: [[ISO 10218]], [[ISO TS 15066]], [[IEC 61508]]
  - Supports: [[Functional Safety]], [[Robot Safety]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

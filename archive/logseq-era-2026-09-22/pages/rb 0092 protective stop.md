public:: true

# rb 0092 protective stop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:92484044f37f0553fb731b4611301193e56a0e5531db09a6f03b3e00ffd45f37",
  "@type": "Page",
  "vc:slug": "rb-0092-protective-stop",
  "title": "rb 0092 protective stop",
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
      "vc:value": "RB-0092"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0092 protective stop"
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
  "@id": "urn:ngm:class:rb-0092-protective-stop",
  "@type": "Class",
  "label": "rb 0092 protective stop",
  "definition": "A protective stop is a safety-initiated cessation of robot motion that halts all hazardous movement when a safety function is triggered, without necessarily cutting power to the drive system. Unlike an emergency stop, a protective stop permits automatic restart once the triggering condition is resolved, making it a standard mechanism in collaborative robot cells operating under ISO 10218 and ISO/TS 15066. It is fundamental to speed-and-separation monitoring and power-and-force-limiting safety strategies.",
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
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-operation", "label": "Collaborative Operation"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0092-protective-stop:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:92484044f37f0553fb731b4611301193e56a0e5531db09a6f03b3e00ffd45f37"
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
  A **Protective Stop** is a safety-initiated cessation of robot motion triggered when a monitored safety condition is violated — for example, when a person enters a restricted zone or a force threshold is exceeded. Unlike an emergency stop (which de-energises drives), a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard is cleared. It is the core enforcement mechanism for collaborative robotic cells operating under ISO 10218-1/2 and ISO/TS 15066.

- ### Semantic Classification
  - owl-class:: robotics:ProtectiveStop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Standardised by ISO 10218-1:2025 and ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016).
  - Requires a functional safety architecture and prior risk assessment.
  - Enables safe collaborative operation and human-robot interaction by providing a deterministic halt pathway.
  - Distinct from an emergency stop: protective stops allow programmatic restart without full system reset.

- ### Content
  - **Protective Stop** (RB-0092) is the enforcement mechanism by which a robot's motion is halted when a monitored safety condition is violated — for example when a person enters a restricted zone detected by a laser scanner, or when a force threshold is exceeded. Unlike an emergency stop, a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard clears.

  Protective stops are fundamental to the collaborative application modes consolidated in ISO 10218-2:2025 (the 2025 revision absorbed ISO/TS 15066:2016). In speed-and-separation monitoring applications, the protective stop is the terminal response when a person crosses the minimum protective distance. In power-and-force-limiting applications, it acts as a backup if the force-limiting mechanism fails to constrain contact forces within acceptable biomechanical limits. The stop function itself must meet a functional safety integrity level (PLd/SIL 2 minimum) per ISO 10218-1:2025 and ISO 13849-1.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

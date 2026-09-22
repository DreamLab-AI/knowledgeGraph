public:: true

# rb 0091 safety rated monitored stop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c59537a427d6cfe60f677f0c977750bce7f5576d2e24292093852d39aff014e",
  "@type": "Page",
  "vc:slug": "rb-0091-safety-rated-monitored-stop",
  "title": "rb 0091 safety rated monitored stop",
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
      "vc:value": "RB-0091"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0091 safety rated monitored stop"
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
  "@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop",
  "@type": "Class",
  "label": "rb 0091 safety rated monitored stop",
  "definition": "A safety-rated monitored stop (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is central to collaborative robot (cobot) safety architectures defined in ISO 10218 and ISO/TS 15066.",
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
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0091-safety-rated-monitored-stop:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c59537a427d6cfe60f677f0c977750bce7f5576d2e24292093852d39aff014e"
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
  - A **Safety-Rated Monitored Stop** (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is a core collaborative application mode defined in ISO 10218-1:2025 and ISO 10218-2:2025 (which superseded the earlier ISO/TS 15066:2016).

- ### Semantic Classification
  - owl-class:: robotics:rb0091safetyratedmonitoredstop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: [[rb 0090 emergency stop]], [[rb 0092 protective stop]], [[rb 0093 speed limitation]]
  - requires:: [[rb 0089 risk assessment]], [[rb 0054 position control]]
  - standardizedBy:: ISO 10218-1:2025, ISO 10218-2:2025
  - supports:: [[rb 0096 safeguarding]]

- ### Content
  - **Safety-Rated Monitored Stop** (RB-0091) is one of the four collaborative application modes now consolidated in ISO 10218-2:2025 (alongside hand guiding, speed limitation, and speed-and-separation monitoring). The 2025 revision of ISO 10218 absorbed the content formerly published as ISO/TS 15066:2016, so all collaborative robot safety requirements are now expressed in a single standard family. SRMS allows a robot to pause in a standby state — drives energised, position held — while a human performs a task within the collaborative workspace. Once the human exits the zone, full-speed operation can resume without a full system reset.

  SRMS is distinct from an emergency stop (Category 0 or 1 per IEC 60204-1) because it does not de-energise the drive system. This enables faster cycle resumption and is therefore preferred in collaborative cell designs where intermittent human access is required. The monitoring function must achieve a suitable safety integrity level (SIL 2 or PLd per ISO 13849-1) to be compliant with ISO 10218-1:2025.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

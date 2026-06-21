public:: true

# rb 0093 speed limitation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8eafca0c47e3cfbab79d054c1ff4fad5d00b73c92e4c63bc15fda6a71a3b998c",
  "@type": "Page",
  "vc:slug": "rb-0093-speed-limitation",
  "title": "rb 0093 speed limitation",
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
      "vc:value": "RB-0093"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0093 speed limitation"
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
  "@id": "urn:ngm:class:rb-0093-speed-limitation",
  "@type": "Class",
  "label": "rb 0093 speed limitation",
  "definition": "Speed limitation is a collaborative robotics safety function that restricts the maximum velocity of robot joints or the tool centre point to a defined safe threshold, as specified by ISO/TS 15066 and ISO 10218. It is a key mechanism for enabling safe human-robot collaboration in shared workspaces by ensuring robot motion cannot exceed speeds that would cause unacceptable injury risk upon contact. Speed limitation operates continuously or is activated when a human is detected within a monitored zone.",
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
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"},
      {"@id": "urn:ngm:class:rb-0055-velocity-control", "label": "rb 0055 velocity control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0093-speed-limitation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8eafca0c47e3cfbab79d054c1ff4fad5d00b73c92e4c63bc15fda6a71a3b998c"
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
  - **Speed Limitation** (RB-0093) is a safety function that caps robot velocity to a safe threshold for collaborative applications, as defined in ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016). It enables human-robot collaboration without physical barriers and works in conjunction with speed-and-separation monitoring and power-and-force limiting to provide layered protective behaviour.

- ### Semantic Classification
  - owl-class:: robotics:SpeedLimitation
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0105 speed and separation monitoring, rb 0094 power and force limiting, rb 0092 protective stop
  - requires:: rb 0072 encoder, rb 0055 velocity control
  - standardizedBy:: ISO 10218-2:2025

- ### Content
  - ### Primary Definition
  **Speed Limitation** (RB-0093) restricts the maximum operational speed of a robot's joints or tool centre point to a predefined safe value. The velocity threshold is derived from biomechanical injury data and the minimum protective distance between robot and human at the moment of detection, as specified in ISO 10218-2:2025 (which absorbed the biomechanical limit tables formerly in ISO/TS 15066:2016 Annex A).

  Speed limitation is one of the four collaborative application modes consolidated in ISO 10218-2:2025, alongside safety-rated monitored stop, hand guiding, and speed-and-separation monitoring. It is frequently combined with power-and-force limiting to provide defence-in-depth: even if contact occurs at the limited speed, the resulting force is bounded within acceptable injury thresholds.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

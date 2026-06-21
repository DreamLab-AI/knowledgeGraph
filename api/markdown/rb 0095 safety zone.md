public:: true

# rb 0095 safety zone
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:081891aca2e94f0fc5868808bc80360d220587a98d2749c87ef4e8375192edd3",
  "@type": "Page",
  "vc:slug": "rb-0095-safety-zone",
  "title": "rb 0095 safety zone",
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
      "vc:value": "RB-0095"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0095 safety zone"
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
  "@id": "urn:ngm:class:rb-0095-safety-zone",
  "@type": "Class",
  "label": "rb 0095 safety zone",
  "definition": "A safety zone is a defined spatial region around a robot or autonomous system within which human presence or other objects trigger protective actions such as speed reduction, monitored stops, or full emergency stops. Safety zones are configured and monitored via safeguarding devices and are a central mechanism for achieving collaborative and safe robot operation in accordance with ISO 10218 and ISO/TS 15066.",
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
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"},
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0075-range-finder", "label": "rb 0075 range finder"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0095-safety-zone:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:081891aca2e94f0fc5868808bc80360d220587a98d2749c87ef4e8375192edd3"
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
  - A **safety zone** is a spatially delimited region around a robot or autonomous system where the presence of humans or objects triggers protective behaviour. Zones are typically tiered: an outer warning zone reduces robot speed (see rb 0093 speed limitation), while an inner protective zone triggers a monitored or protective stop (rb 0091, rb 0092). Detection relies on safeguarding devices such as laser scanners and range finders (rb 0075).

- ### Semantic Classification
  - owl-class:: robotics:SafetyZone
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires risk assessment (rb 0089) to define zone extents and response thresholds.
  - Depends on range finders and LiDAR sensors for real-time occupancy monitoring.
  - Enabled by safeguarding infrastructure (rb 0096) and validated under safety standards (rb 0087, ISO 10218-2, ISO/TS 15066).

- ### Content
  - **Safety Zone** (RB-0095) is a defined spatial region around a robot or autonomous system within which human presence or object intrusion triggers protective actions. Zones are typically configured as concentric tiers using configurable safety laser scanners (e.g., SICK S300, Pilz PSENscan): an outer warning zone activates speed reduction (see [[rb 0093 speed limitation]]), while an inner protective zone triggers a monitored stop ([[rb 0091 safety rated monitored stop]]) or protective stop ([[rb 0092 protective stop]]).

  Zone extents are derived from risk assessment per ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016), incorporating factors such as robot maximum speed, detection device response time, robot stopping time, and human walking speed. The minimum protective distance formula (formerly ISO/TS 15066 Clause 5.4, now integrated into ISO 10218-2:2025) governs the inner zone boundary. Safety zones must be validated by a competent person and re-validated whenever the robot programme, speed, or cell layout changes. Reconfigurable safety zones (software-configurable via safety-rated IO) are increasingly standard in flexible manufacturing cells, enabling different zone profiles for different operating modes.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

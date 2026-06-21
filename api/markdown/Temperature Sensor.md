public:: true

# Temperature Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2010acfb51c63731d7c4bb9cd82b841522a883601db9d7fcfc708c81934331e",
  "@type": "Page",
  "vc:slug": "temperature-sensor",
  "title": "Temperature Sensor",
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
      "vc:value": "RB-0084"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Temperature Sensor"
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
  "@id": "urn:ngm:class:temperature-sensor",
  "@type": "Class",
  "label": "Temperature Sensor",
  "definition": "A temperature sensor is a transducer that converts thermal energy into an electrical signal, enabling robotic and autonomous systems to monitor ambient, surface, or internal temperatures. Common types include thermocouples, RTDs, and infrared sensors, each suited to different accuracy, range, and response-time requirements in industrial, healthcare, and field robotics.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"},
      {"@id": "urn:ngm:class:robotic-system", "label": "Robotic System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:sensor-data", "label": "Sensor Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sensor-technology", "label": "Sensor Technology"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:temperature-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2010acfb51c63731d7c4bb9cd82b841522a883601db9d7fcfc708c81934331e"
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
  - A temperature sensor is a transducer that converts thermal energy into an electrical signal, enabling robotic and autonomous systems to monitor ambient, surface, or internal temperatures. Common types include thermocouples, RTDs, and infrared sensors, each suited to different accuracy, range, and response-time requirements in industrial, healthcare, and field robotics.

- ### Semantic Classification
  - owl-class:: robotics:rb0084temperaturesensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - partOf:: Perception and Sensing, Robotic System
  - relatedTo:: Sensor, Sensor Fusion, Sensor Data
  - uses:: Sensor Technology

- ### Content
  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

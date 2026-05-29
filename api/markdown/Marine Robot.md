public:: true

# Marine Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c265cc2a873c0a46ea7ce3c138f69fc35e3a32b3b138d1b11c04bfe3007eac3a",
  "@type": "Page",
  "vc:slug": "marine-robot",
  "title": "Marine Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:mobile-robot",
      "vc:label": "Mobile Robot"
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
      "vc:value": "RB-0111"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Marine Robot"
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
  "@id": "urn:ngm:class:marine-robot",
  "@type": "Class",
  "label": "Marine Robot",
  "definition": "A robot designed to operate on or under water surfaces, encompassing unmanned surface vehicles (USVs), autonomous underwater vehicles (AUVs), and remotely operated vehicles (ROVs). Marine robots address unique challenges including buoyancy control, pressure resistance, underwater acoustic communication, and GPS-denied navigation using sonar and pressure sensors.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:mobile-robot",
      "label": "Mobile Robot"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:underwater-robot", "label": "Underwater Robot"},
      {"@id": "urn:ngm:class:remotely-operated-vehicle-rov", "label": "Remotely Operated Vehicle (ROV)"},
      {"@id": "urn:ngm:class:aerial-robot", "label": "Aerial Robot"},
      {"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"},
      {"@id": "urn:ngm:class:inspection-robot", "label": "Inspection Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:pressure-sensor", "label": "Pressure Sensor"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-system", "label": "Autonomous System"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:marine-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c265cc2a873c0a46ea7ce3c138f69fc35e3a32b3b138d1b11c04bfe3007eac3a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Mobile Robot]]",
      "resolved": "urn:visionflow:owl:class:mobile-robot",
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
  - Marine robot is a robot capable of operating on or under water surfaces.

- ### Semantic Classification
  - owl-class:: robotics:MarineRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Mobile Robot]]

- ### Content
  Marine Robot — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

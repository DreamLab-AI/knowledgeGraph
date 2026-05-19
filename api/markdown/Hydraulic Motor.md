public:: true

# Hydraulic Motor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db90f6da2987994e72123ff664ed945725a9ad93cd50d946b8d28d0a3c8d81f1",
  "@type": "Page",
  "vc:slug": "hydraulic-motor",
  "title": "Hydraulic Motor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:hydraulic-actuator",
      "vc:label": "Hydraulic Actuator"
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
      "vc:value": "RB-0180"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hydraulic Motor"
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
  "@id": "urn:ngm:class:hydraulic-motor",
  "@type": "Class",
  "label": "Hydraulic Motor",
  "definition": "Hydraulic motor converts hydraulic pressure to rotational torque.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:hydraulic-actuator",
      "label": "Hydraulic Actuator"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:hydraulic-motor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:db90f6da2987994e72123ff664ed945725a9ad93cd50d946b8d28d0a3c8d81f1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hydraulic Actuator]]",
      "resolved": "urn:visionflow:owl:class:hydraulic-actuator",
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
  - Hydraulic motor converts hydraulic pressure to rotational torque.

- ### Semantic Classification
  - owl-class:: robotics:HydraulicMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Hydraulic Actuator]]

- ### Content
  Hydraulic Motor — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

public:: true

# Pneumatic Cylinder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0ca028d73f57e6fbb7ffad83e48998e24d3ab5ae345d31812d60384262d2fdd4",
  "@type": "Page",
  "vc:slug": "pneumatic-cylinder",
  "title": "Pneumatic Cylinder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:pneumatic-actuator",
      "vc:label": "Pneumatic Actuator"
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
      "vc:value": "RB-0181"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Pneumatic Cylinder"
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
  "@id": "urn:ngm:class:pneumatic-cylinder",
  "@type": "Class",
  "label": "Pneumatic Cylinder",
  "definition": "Pneumatic cylinder uses compressed air to produce linear motion.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:pneumatic-actuator",
      "label": "Pneumatic Actuator"
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
  "@id": "urn:visionflow:annotation:link-resolutions:pneumatic-cylinder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0ca028d73f57e6fbb7ffad83e48998e24d3ab5ae345d31812d60384262d2fdd4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Pneumatic Actuator]]",
      "resolved": "urn:visionflow:owl:class:pneumatic-actuator",
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
  - Pneumatic cylinder uses compressed air to produce linear motion.

- ### Semantic Classification
  - owl-class:: robotics:PneumaticCylinder
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Pneumatic Actuator]]

- ### Content
  Pneumatic Cylinder — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

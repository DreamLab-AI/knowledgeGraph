public:: true

# Shape Memory Alloy Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08e0ad201e95f918d025fc55091de1f197b7ae82237fbeec49dbc39ade422836",
  "@type": "Page",
  "vc:slug": "shape-memory-alloy-actuator",
  "title": "Shape Memory Alloy Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:materials-science",
      "vc:label": "Materials Science"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:soft-robotics",
      "vc:label": "Soft Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shape Memory Alloy Actuator"
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
  "@id": "urn:ngm:class:shape-memory-alloy-actuator",
  "@type": "Class",
  "label": "Shape Memory Alloy Actuator",
  "definition": "Soft robotics actuator using shape memory alloys that change shape when heated, enabling lightweight and compact actuation for compliant robots.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
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
  "@id": "urn:visionflow:annotation:link-resolutions:shape-memory-alloy-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:08e0ad201e95f918d025fc55091de1f197b7ae82237fbeec49dbc39ade422836"
  },
  "vc:resolutions": [
    {
      "raw": "[[Materials Science]]",
      "resolved": "urn:visionflow:linked:materials-science",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Soft Robotics]]",
      "resolved": "urn:visionflow:owl:class:soft-robotics",
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
  - Soft robotics actuator using shape memory alloys that change shape when heated, enabling lightweight and compact actuation for compliant robots.

- ### Semantic Classification
  - owl-class:: robotics:ShapeMemoryAlloyActuator
  - owl-role:: Object
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Shape Memory Alloy Actuator — content pending enrichment.

- ### Provenance
  - sources:: [[Soft Robotics]], [[Materials Science]]
  - migration-date:: 2026-04-26T00:00:00Z

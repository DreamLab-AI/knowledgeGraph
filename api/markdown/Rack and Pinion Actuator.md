public:: true

# Rack and Pinion Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:35b20d8b445b6f405d1a8e3440b78a271dd3978587a730a921bf02c7922779e6",
  "@type": "Page",
  "vc:slug": "rack-and-pinion-actuator",
  "title": "Rack and Pinion Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-linear-actuator",
      "vc:label": "Electric Linear Actuator"
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
      "vc:value": "RB-0178"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Rack and Pinion Actuator"
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
  "@id": "urn:ngm:class:rack-and-pinion-actuator",
  "@type": "Class",
  "label": "Rack and Pinion Actuator",
  "definition": "Rack and pinion actuator converts rotary motion to linear via gear mechanism.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:electric-linear-actuator",
      "label": "Electric Linear Actuator"
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
  "@id": "urn:visionflow:annotation:link-resolutions:rack-and-pinion-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:35b20d8b445b6f405d1a8e3440b78a271dd3978587a730a921bf02c7922779e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Linear Actuator]]",
      "resolved": "urn:visionflow:owl:class:electric-linear-actuator",
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
  - Rack and pinion actuator converts rotary motion to linear via gear mechanism.

- ### Semantic Classification
  - owl-class:: robotics:RackPinionActuator
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Linear Actuator]]

- ### Content
  Rack and Pinion Actuator — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z

public:: true

# Power Electronics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b",
  "@type": "Page",
  "vc:slug": "power-electronics",
  "title": "Power Electronics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:motor-driver",
      "vc:label": "Motor Driver"
    },
    {
      "@id": "urn:visionflow:linked:electric-motor",
      "vc:label": "Electric Motor"
    },
    {
      "@id": "urn:visionflow:linked:battery-management-system",
      "vc:label": "Battery Management System"
    },
    {
      "@id": "urn:visionflow:linked:servo-motor",
      "vc:label": "Servo Motor"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems-domain",
      "vc:label": "Embedded Systems Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Power Electronics"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-electronics",
  "@type": "Class",
  "label": "Power Electronics",
  "definition": "Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices, central to motor drives, power supplies and energy systems.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:embedded-systems-domain",
      "label": "Embedded Systems Domain"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:electric-motor",
        "label": "Electric Motor"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:power-electronics:0882f0601c67",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motor Driver]]",
      "resolved": "urn:visionflow:linked:motor-driver",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Electric Motor]]",
      "resolved": "urn:visionflow:linked:electric-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Battery Management System]]",
      "resolved": "urn:visionflow:linked:battery-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Servo Motor]]",
      "resolved": "urn:visionflow:linked:servo-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems Domain]]",
      "resolved": "urn:visionflow:linked:embedded-systems-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices, central to motor drives, power supplies and energy systems.

- ### Semantic Classification
  - owl-class:: robotics:PowerElectronics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Embedded Systems Domain]]
  - bridges-to:: [[Battery Management System]], [[Servo Motor]]
  - enables:: [[Motor Driver]], [[Electric Motor]]

- ### Content
  - Power electronics uses switching converters such as inverters, rectifiers and DC-DC stages to transform voltage, current and frequency efficiently, controlling the flow of electrical energy with minimal loss. Switching devices are modulated to shape output waveforms for the load.
  - In robotics it underpins motor drives, battery management and power supply regulation, directly affecting actuator performance, efficiency and thermal behaviour. Reliable power conversion is a prerequisite for electric actuation in mobile and articulated robots.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

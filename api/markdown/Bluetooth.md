public:: true

# Bluetooth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9f14a080eecdaac838e7b7b0d77fe703c8bac1753bc68ca316b16a23825c154b",
  "@type": "Page",
  "vc:slug": "bluetooth",
  "title": "Bluetooth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bluetooth-low-energy",
      "vc:label": "Bluetooth Low Energy"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bluetooth"
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
  "@id": "urn:ngm:class:bluetooth",
  "@type": "Class",
  "label": "Bluetooth",
  "definition": "A short-range wireless communication standard for exchanging data between devices over radio frequencies in the 2.4 gigahertz band. It is widely used for peripherals, audio, and low-power sensors.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:bluetooth-low-energy",
        "label": "Bluetooth Low Energy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bluetooth:a828d1db82af",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9f14a080eecdaac838e7b7b0d77fe703c8bac1753bc68ca316b16a23825c154b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bluetooth Low Energy]]",
      "resolved": "urn:visionflow:linked:bluetooth-low-energy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - A short-range wireless communication standard for exchanging data between devices over radio frequencies in the 2.4 gigahertz band. It is widely used for peripherals, audio, and low-power sensors.

- ### Semantic Classification
  - owl-class:: networking:Bluetooth
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Internet of Things]]
  - enables:: [[Bluetooth Low Energy]]

- ### Content
  - Bluetooth is a wireless standard for short-range communication operating in the 2.4 gigahertz industrial, scientific, and medical band. It connects devices such as headphones, keyboards, and sensors over distances typically up to about ten metres.
  - The standard, maintained by the Bluetooth Special Interest Group, includes the low-energy variant introduced with version 4.0 that is widely used for battery-powered devices and the Internet of Things.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

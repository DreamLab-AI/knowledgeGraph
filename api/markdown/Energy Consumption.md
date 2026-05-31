public:: true

# Energy Consumption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0092e7c9c96b36a05a567163fe02ee5765af741c80a15c051dee650af7a28946",
  "@type": "Page",
  "vc:slug": "energy-consumption",
  "title": "Energy Consumption",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Energy Consumption"
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
  "@id": "urn:ngm:class:energy-consumption",
  "@type": "Class",
  "label": "Energy Consumption",
  "definition": "Energy consumption is the amount of energy used by a system or activity over a period, a metric relevant to computing hardware, blockchains, and manufacturing.",
  "domain": "sustainability",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainability",
      "label": "Sustainability"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:energy-consumption:5ee6f4ddf8e9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0092e7c9c96b36a05a567163fe02ee5765af741c80a15c051dee650af7a28946"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
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
  - Energy consumption is the amount of energy used by a system or activity over a period, a metric relevant to computing hardware, blockchains, and manufacturing.

- ### Semantic Classification
  - owl-class:: sustainability:EnergyConsumption
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sustainability]]
  - bridges-to:: [[Proof of Stake]]

- ### Content
  - Energy consumption is measured in units such as kilowatt-hours and is a factor in the operating cost and environmental footprint of data centres, cryptocurrency networks, and industrial processes.
  - In blockchains, proof-of-work consensus consumes substantial electricity, which motivated the shift of some networks to proof of stake, a mechanism that reduces energy use by removing competitive hashing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

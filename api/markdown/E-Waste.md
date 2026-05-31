public:: true

# E-Waste
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7f4f2df7d86904893501174b06a5c949d4e110eca34847952da26c8d7d4487e3",
  "@type": "Page",
  "vc:slug": "e-waste",
  "title": "E-Waste",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:circular-economy",
      "vc:label": "Circular Economy"
    },
    {
      "@id": "urn:visionflow:linked:https-www-unep-org-topics-chemicals-and-pollution-action-pollution-and-health-e-waste",
      "vc:label": "https://www.unep.org/topics/chemicals-and-pollution-action/pollution-and-health/e-waste"
    },
    {
      "@id": "urn:visionflow:linked:https-globalewaste-org",
      "vc:label": "https://globalewaste.org"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "E-Waste"
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
  "@id": "urn:ngm:class:e-waste",
  "@type": "Class",
  "label": "E-Waste",
  "definition": "E-waste is discarded electrical and electronic equipment, including devices that have reached the end of their useful life. Managing it involves recycling, recovery, and safe disposal.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:circular-economy",
      "label": "Circular Economy"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:e-waste:f2d09f6b0434",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7f4f2df7d86904893501174b06a5c949d4e110eca34847952da26c8d7d4487e3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Circular Economy]]",
      "resolved": "urn:visionflow:linked:circular-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.unep.org/topics/chemicals-and-pollution-action/pollution-and-health/e-waste]]",
      "resolved": "urn:visionflow:linked:https-www-unep-org-topics-chemicals-and-pollution-action-pollution-and-health-e-waste",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://globalewaste.org]]",
      "resolved": "urn:visionflow:linked:https-globalewaste-org",
      "kind": "StubLink"
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
  - E-waste is discarded electrical and electronic equipment, including devices that have reached the end of their useful life. Managing it involves recycling, recovery, and safe disposal.

- ### Semantic Classification
  - owl-class:: governance:EWaste
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Circular Economy]]
  - bridges-to:: [[Hardware]]
  - enables:: [[Sustainability]]

- ### Content
  - E-waste consists of discarded electronics such as computers, phones, and appliances. It contains valuable materials that can be recovered as well as hazardous substances that require careful handling.
  - Recycling e-waste reduces the need for new raw materials and prevents toxic components from reaching the environment. Mining hardware and other short-lived electronics contribute to e-waste streams, which has prompted attention to reuse and proper disposal.

- ### Provenance
  - sources:: [[https://www.unep.org/topics/chemicals-and-pollution-action/pollution-and-health/e-waste]], [[https://globalewaste.org]]
  - migration-date:: 2026-05-29T00:00:00Z

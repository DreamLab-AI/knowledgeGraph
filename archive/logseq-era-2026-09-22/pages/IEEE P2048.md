public:: true

# IEEE P2048
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80d591ef523a8bc20a463e9aaeac8572793e9751dd794f3cbc9a7d0adf7e7e49",
  "@type": "Page",
  "vc:slug": "ieee-p-2048",
  "title": "IEEE P2048",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee",
      "vc:label": "IEEE"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IEEE P2048"
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
  "@id": "urn:ngm:class:ieee-p-2048",
  "@type": "Class",
  "label": "IEEE P2048",
  "definition": "IEEE P2048 is the draft project covering the IEEE 2048 series of standards on virtual reality and augmented reality.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ieee-p-2048:c052ffbfe069",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80d591ef523a8bc20a463e9aaeac8572793e9751dd794f3cbc9a7d0adf7e7e49"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE]]",
      "resolved": "urn:visionflow:linked:ieee",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - IEEE P2048 is the draft project covering the IEEE 2048 series of standards on virtual reality and augmented reality.

- ### Semantic Classification
  - owl-class:: standards:IEEEP2048
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[IEEE]]

- ### Content
  - IEEE P2048 is the draft project covering the IEEE 2048 series of standards on virtual reality and augmented reality.
  - Topic area: virtual reality and augmented reality.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

public:: true

# NIST SP 800-53
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac93efbf932f24082a25ec0526ff5ea2306f180c324998b7f8b00d712497ac95",
  "@type": "Page",
  "vc:slug": "nist-sp-800-53",
  "title": "NIST SP 800-53",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
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
      "vc:value": "NIST SP 800-53"
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
  "@id": "urn:ngm:class:nist-sp-800-53",
  "@type": "Class",
  "label": "NIST SP 800-53",
  "definition": "NIST SP 800-53 provides a catalogue of security and privacy controls for information systems and organisations.",
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
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-sp-800-53:3bc75ea6ba54",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ac93efbf932f24082a25ec0526ff5ea2306f180c324998b7f8b00d712497ac95"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
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
  - NIST SP 800-53 provides a catalogue of security and privacy controls for information systems and organisations.

- ### Semantic Classification
  - owl-class:: standards:NISTSP80053
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - NIST SP 800-53 provides a catalogue of security and privacy controls for information systems and organisations.
  - Topic area: security and privacy controls.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

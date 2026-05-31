public:: true

# IEEE 1588 PTP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bfe56dfe0e3edd023df7f94fcecbf6bf870a59189192a24fd0744ccfa349f269",
  "@type": "Page",
  "vc:slug": "ieee-1588-ptp",
  "title": "IEEE 1588 PTP",
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
      "vc:value": "IEEE 1588 PTP"
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
  "@id": "urn:ngm:class:ieee-1588-ptp",
  "@type": "Class",
  "label": "IEEE 1588 PTP",
  "definition": "An IEEE standard defining the Precision Time Protocol (PTP) for synchronising clocks across a packet network. It enables sub-microsecond clock synchronisation in measurement and control systems.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:ieee-1588-ptp:d32abfa6732b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bfe56dfe0e3edd023df7f94fcecbf6bf870a59189192a24fd0744ccfa349f269"
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
  - An IEEE standard defining the Precision Time Protocol (PTP) for synchronising clocks across a packet network. It enables sub-microsecond clock synchronisation in measurement and control systems.

- ### Semantic Classification
  - owl-class:: standards:IEEE1588PTP
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[IEEE]]

- ### Content
  - An IEEE standard defining the Precision Time Protocol (PTP) for synchronising clocks across a packet network. It enables sub-microsecond clock synchronisation in measurement and control systems.
  - Topic area: precision time synchronisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

public:: true

# IEEE 802.3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c8cb5c97cce43887662937f1f0c8a146d073d1fa1aedff95f36a71da50cc0e2",
  "@type": "Page",
  "vc:slug": "ieee-802-3",
  "title": "IEEE 802.3",
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
      "vc:value": "IEEE 802.3"
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
  "@id": "urn:ngm:class:ieee-802-3",
  "@type": "Class",
  "label": "IEEE 802.3",
  "definition": "An IEEE standard defining Ethernet, including the physical layer and media access control for wired local area networks. It covers a range of speeds and media types.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:ieee-802-3:d86d80915fb5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c8cb5c97cce43887662937f1f0c8a146d073d1fa1aedff95f36a71da50cc0e2"
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
  - An IEEE standard defining Ethernet, including the physical layer and media access control for wired local area networks. It covers a range of speeds and media types.

- ### Semantic Classification
  - owl-class:: standards:IEEE8023
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[IEEE]]

- ### Content
  - An IEEE standard defining Ethernet, including the physical layer and media access control for wired local area networks. It covers a range of speeds and media types.
  - Topic area: Ethernet.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

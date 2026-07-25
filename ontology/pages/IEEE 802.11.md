public:: true

# IEEE 802.11
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:838c5a2b3b3dd1d704f7cb58fe17f78eef6787e0ac634e76a5c6a83a9f2df0e6",
  "@type": "Page",
  "vc:slug": "ieee-802-11",
  "title": "IEEE 802.11",
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
      "vc:value": "IEEE 802.11"
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
  "@id": "urn:ngm:class:ieee-802-11",
  "@type": "Class",
  "label": "IEEE 802.11",
  "definition": "IEEE 802.11 specifies the medium access control and physical layer protocols for wireless local area networks, commonly known as Wi-Fi.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:ieee-802-11:931ade04f72e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:838c5a2b3b3dd1d704f7cb58fe17f78eef6787e0ac634e76a5c6a83a9f2df0e6"
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
  - IEEE 802.11 specifies the medium access control and physical layer protocols for wireless local area networks, commonly known as Wi-Fi.

- ### Semantic Classification
  - owl-class:: standards:IEEE80211
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[IEEE]]

- ### Content
  - IEEE 802.11 specifies the medium access control and physical layer protocols for wireless local area networks, commonly known as Wi-Fi.
  - Topic area: wireless LAN.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

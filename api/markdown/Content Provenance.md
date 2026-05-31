public:: true

# Content Provenance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e040cb14bcd781f60159146ba96930904aed1c14656178ef608a01aecbbf7779",
  "@type": "Page",
  "vc:slug": "content-provenance",
  "title": "Content Provenance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:provenance",
      "vc:label": "Provenance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Content Provenance"
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
  "@id": "urn:ngm:class:content-provenance",
  "@type": "Class",
  "label": "Content Provenance",
  "definition": "Content provenance is the recorded history of the origin, authorship, and edits of a piece of digital media, used to establish whether content is authentic or has been altered.",
  "domain": "digital-media",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:provenance",
      "label": "Provenance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
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
  "@id": "urn:visionflow:annotation:link-resolutions:content-provenance:2b6c499661bc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e040cb14bcd781f60159146ba96930904aed1c14656178ef608a01aecbbf7779"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance]]",
      "resolved": "urn:visionflow:linked:provenance",
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
  - Content provenance is the recorded history of the origin, authorship, and edits of a piece of digital media, used to establish whether content is authentic or has been altered.

- ### Semantic Classification
  - owl-class:: digital-media:ContentProvenance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Provenance]]
  - bridges-to:: [[AI Governance]]
  - requires:: [[Cryptography]]

- ### Content
  - Content provenance attaches signed metadata to images, audio, and video describing how the asset was created and modified. Standards in this area include the C2PA specification developed by a coalition of media and technology organisations.
  - Interest in content provenance has grown alongside generative AI, because provenance records can help audiences distinguish synthetic media from camera-captured material.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

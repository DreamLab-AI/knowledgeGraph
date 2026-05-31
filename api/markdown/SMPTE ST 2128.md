public:: true

# SMPTE ST 2128
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:593aa1a4187aa5298cb31299b67ab14c6c4ea181d2605bd0763b4ca55844328a",
  "@type": "Page",
  "vc:slug": "smpte-st-2128",
  "title": "SMPTE ST 2128",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:content-delivery",
      "vc:label": "Content Delivery"
    },
    {
      "@id": "urn:visionflow:linked:video-compression",
      "vc:label": "Video Compression"
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
      "vc:value": "SMPTE ST 2128"
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
  "@id": "urn:ngm:class:smpte-st-2128",
  "@type": "Class",
  "label": "SMPTE ST 2128",
  "definition": "SMPTE ST 2128 is a standard from the Society of Motion Picture and Television Engineers in the area of professional media and video signalling. It forms part of the SMPTE family of broadcast and production standards.",
  "domain": "media",
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
        "@id": "urn:ngm:class:content-delivery",
        "label": "Content Delivery"
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
  "@id": "urn:visionflow:annotation:link-resolutions:smpte-st-2128:827654fe0472",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:593aa1a4187aa5298cb31299b67ab14c6c4ea181d2605bd0763b4ca55844328a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Content Delivery]]",
      "resolved": "urn:visionflow:linked:content-delivery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Video Compression]]",
      "resolved": "urn:visionflow:linked:video-compression",
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
  - SMPTE ST 2128 is a standard from the Society of Motion Picture and Television Engineers in the area of professional media and video signalling. It forms part of the SMPTE family of broadcast and production standards.

- ### Semantic Classification
  - owl-class:: media:SMPTEST2128
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Video Compression]]
  - enables:: [[Content Delivery]]

- ### Content
  - SMPTE ST 2128 is one of the numbered engineering standards published by the Society of Motion Picture and Television Engineers, which defines specifications for professional motion-picture and television production and distribution. SMPTE standards cover areas such as signal formats, timing, metadata and interfaces used across the media supply chain.
  - Adherence to such standards lets equipment and software from different vendors interoperate in broadcast and production workflows. The ST series sits within SMPTE's broader catalogue governing professional media technology.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

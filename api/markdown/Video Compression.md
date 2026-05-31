public:: true

# Video Compression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dde028094952107488483f46274eee9ab056ef32b3bb76ce5e6423877d43395c",
  "@type": "Page",
  "vc:slug": "video-compression",
  "title": "Video Compression",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:content-delivery",
      "vc:label": "Content Delivery"
    },
    {
      "@id": "urn:visionflow:linked:real-time-communication",
      "vc:label": "Real-Time Communication"
    },
    {
      "@id": "urn:visionflow:linked:content-delivery-network",
      "vc:label": "Content Delivery Network"
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
      "vc:value": "Video Compression"
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
  "@id": "urn:ngm:class:video-compression",
  "@type": "Class",
  "label": "Video Compression",
  "definition": "Video compression is the encoding of video data to reduce its size for storage and transmission while preserving acceptable quality. It exploits spatial, temporal and perceptual redundancy through codecs.",
  "domain": "computing",
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
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
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
  "@id": "urn:visionflow:annotation:link-resolutions:video-compression:e4c35e43cfc4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dde028094952107488483f46274eee9ab056ef32b3bb76ce5e6423877d43395c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Content Delivery]]",
      "resolved": "urn:visionflow:linked:content-delivery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-Time Communication]]",
      "resolved": "urn:visionflow:linked:real-time-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Delivery Network]]",
      "resolved": "urn:visionflow:linked:content-delivery-network",
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
  - Video compression is the encoding of video data to reduce its size for storage and transmission while preserving acceptable quality. It exploits spatial, temporal and perceptual redundancy through codecs.

- ### Semantic Classification
  - owl-class:: computing:VideoCompression
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Content Delivery Network]]
  - enables:: [[Content Delivery]], [[Real-Time Communication]]

- ### Content
  - Video compression reduces the bit rate of video by removing redundancy within frames, between successive frames and in perceptual detail that viewers are unlikely to notice. Codecs such as H.264, H.265 and AV1 implement these techniques through block-based prediction, transforms and entropy coding.
  - Effective compression is essential for streaming, broadcasting and real-time communication, where bandwidth and storage are limited. Encoders trade off compression ratio, quality and computational cost depending on the application.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

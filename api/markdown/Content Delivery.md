public:: true

# Content Delivery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7bc2705f55abeff825cc3d7e6a617e8de7f71e22ff30704f8d8a28b1cb84c553",
  "@type": "Page",
  "vc:slug": "content-delivery",
  "title": "Content Delivery",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:video-compression",
      "vc:label": "Video Compression"
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
      "vc:value": "Content Delivery"
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
  "@id": "urn:ngm:class:content-delivery",
  "@type": "Class",
  "label": "Content Delivery",
  "definition": "Content delivery is the distribution of digital media such as web pages, video and software to end users, typically optimised for speed and reliability. It is commonly accelerated by content delivery networks.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
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
  "@id": "urn:visionflow:annotation:link-resolutions:content-delivery:16db478f6006",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7bc2705f55abeff825cc3d7e6a617e8de7f71e22ff30704f8d8a28b1cb84c553"
  },
  "vc:resolutions": [
    {
      "raw": "[[Video Compression]]",
      "resolved": "urn:visionflow:linked:video-compression",
      "kind": "ResolvedLink"
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
  - Content delivery is the distribution of digital media such as web pages, video and software to end users, typically optimised for speed and reliability. It is commonly accelerated by content delivery networks.

- ### Semantic Classification
  - owl-class:: networking:ContentDelivery
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Content Delivery Network]]
  - requires:: [[Video Compression]]

- ### Content
  - Content delivery is the process of getting digital content from origin servers to users efficiently, addressing latency, throughput and availability across geographic distances. Techniques include caching, replication, compression and adaptive streaming that adjusts quality to network conditions.
  - Content delivery networks place cached copies of content on servers close to users, reducing load on origin servers and improving responsiveness. Efficient delivery depends on compression and protocols suited to the media being served, especially for high-bandwidth video.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

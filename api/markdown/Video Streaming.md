public:: true

# Video Streaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:34eda57112444c916299c6f324bf57eb93100f6bdd250cb81ee85ab9ed831781",
  "@type": "Page",
  "vc:slug": "video-streaming",
  "title": "Video Streaming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9160"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Video Streaming"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:video-streaming",
  "@type": "Class",
  "label": "Video Streaming",
  "definition": "Video Streaming is the continuous, real-time transmission of encoded video data over a network to a client that decodes and renders the content progressively, without requiring the full file to be downloaded first. In metaverse and virtual production contexts it encompasses live streaming, adaptive bitrate (ABR) delivery, 360-degree video, and volumetric video streaming, each with distinct latency, bandwidth, and codec requirements.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    },
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-production", "label": "Virtual Production"},
      {"@id": "urn:ngm:class:metaverse-platform", "label": "Metaverse Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:video-streaming:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:34eda57112444c916299c6f324bf57eb93100f6bdd250cb81ee85ab9ed831781"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - **Video Streaming** is the continuous, real-time transmission of encoded video data over a network to a client that decodes and renders content progressively, without requiring a full download. In metaverse and virtual production contexts it encompasses live streaming, adaptive bitrate (ABR) delivery, 360-degree video, and volumetric video streaming, each with distinct latency, bandwidth, and codec requirements.

- ### Semantic Classification
  - owl-class:: infrastructure:VideoStreaming
  - owl-role:: Concept

- ### Relationships
  - **requires**: [[Network Infrastructure]], [[Edge Computing]] — low-latency streaming depends on high-bandwidth networks and edge nodes close to viewers
  - **enables**: [[Virtual Production]], [[Metaverse Platform]] — streaming is the delivery mechanism for virtual production output and metaverse live events
  - **uses**: [[Real-Time Rendering]] — cloud-rendered or in-engine frames are encoded and streamed to clients
  - **relatedTo**: [[Bandwidth Adaptation]] — adaptive bitrate algorithms dynamically adjust quality to available bandwidth

- ### Content
  # VideoStreaming
  VideoStreaming represents a key component in Metaverse infrastructure and technology. Research: VideoStreaming in virtual worlds - live streaming, 360 video, volumetric video streaming
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

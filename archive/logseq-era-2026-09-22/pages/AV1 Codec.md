public:: true

# AV1 Codec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:av1-codec",
  "@type": "Page",
  "vc:slug": "av1-codec",
  "title": "AV1 Codec",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:av1-codec",
  "@type": "Class",
  "label": "AV1 Codec",
  "definition": "AV1 is a royalty-free video coding format developed by the Alliance for Open Media to deliver high compression efficiency for streaming and real-time video. It typically achieves around 30 percent better compression than HEVC/VP9 at equivalent quality, making it well suited to bandwidth-constrained applications such as screen sharing and live video. Being open and licence-free, it is widely adopted across browsers, hardware decoders, and conferencing platforms.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The AV1 codec is an open, royalty-free video compression standard used to encode high-quality video efficiently, including for low-latency [[Screen Sharing]].
- ### Content
  - AV1 uses advanced tools such as larger block partitioning, improved motion compensation, and a constrained directional enhancement filter to outperform earlier codecs. Encoding is computationally expensive, so real-time use depends on hardware acceleration or tuned software encoders.

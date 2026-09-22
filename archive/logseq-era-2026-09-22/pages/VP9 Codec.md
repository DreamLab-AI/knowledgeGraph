public:: true

# VP9 Codec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vp9-codec",
  "@type": "Page",
  "vc:slug": "vp9-codec",
  "title": "VP9 Codec",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vp9-codec",
  "@type": "Class",
  "label": "VP9 Codec",
  "definition": "VP9 is an open, royalty-free video compression codec developed by Google as the successor to VP8, achieving roughly half the bitrate of H.264 at comparable quality. It supports resolutions up to 8K, 10/12-bit colour depth, and is widely deployed for streaming on YouTube and within WebRTC real-time communication. VP9's open licensing made it a key building block for browser-native video before AV1 succeeded it.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"}, {"@id": "urn:ngm:class:av1-codec", "label": "AV1 Codec"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - VP9 is an open, royalty-free video codec used to encode real-time streams such as [[Screen Sharing]], and a direct predecessor to the [[AV1 Codec]].
- ### Content
  - VP9 employs larger superblocks, more flexible partitioning, and improved entropy coding over VP8, with hardware decode support across modern GPUs and mobile SoCs. In low-latency contexts it competes with H.264 by offering better compression at the cost of higher encode complexity, a trade-off mitigated by real-time-tuned encoder presets.

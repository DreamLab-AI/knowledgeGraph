public:: true

# HEVC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hevc",
  "@type": "Page",
  "vc:slug": "hevc",
  "title": "HEVC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hevc",
  "@type": "Class",
  "label": "HEVC",
  "definition": "HEVC (High Efficiency Video Coding), also known as H.265, is a video compression standard that roughly doubles the data compression ratio of its predecessor H.264 at the same visual quality. It introduces larger, flexible coding tree units and improved prediction and entropy coding to support 4K and 8K video. As a proprietary, patent-encumbered codec it carries licensing obligations that motivate royalty-free alternatives.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:proprietary-video", "label": "Proprietary Video"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - HEVC (H.265) is a high-efficiency video compression standard; it is a core component of [[Proprietary Video]] delivery and is used to encode high-resolution streams.
- ### Content
  - HEVC uses coding tree units up to 64x64, advanced motion prediction, and CABAC entropy coding to cut bitrate for a given quality. Its patent-pool licensing model created cost and clearance friction, which spurred the development of royalty-free codecs while HEVC remains widely supported in hardware and broadcast.

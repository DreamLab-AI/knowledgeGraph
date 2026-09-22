public:: true

# H.264
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:h-264",
  "@type": "Page",
  "vc:slug": "h-264",
  "title": "H.264",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:h-264",
  "@type": "Class",
  "label": "H.264",
  "definition": "H.264, also known as AVC (Advanced Video Coding) or MPEG-4 Part 10, is a block-oriented, motion-compensated video compression standard jointly developed by the ITU-T and ISO/IEC and finalised in 2003. It achieves substantially better compression efficiency than its predecessors through advanced intra and inter prediction, variable block-size motion compensation, an in-loop deblocking filter, and context-adaptive entropy coding. For two decades it has been the most widely deployed video codec, used in streaming, broadcast, Blu-ray, video conferencing, and surveillance, with broad hardware acceleration.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:video-codec", "label": "Video Codec"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:video-compression", "label": "Video Compression"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:video-encoding", "label": "Video Encoding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - H.264 (AVC) is a block-oriented, motion-compensated video compression standard from the ITU-T and ISO/IEC, achieving high efficiency through advanced prediction and entropy coding, and the most widely deployed video codec for two decades.

- ### Relationships
  - H.264 is a subclass of [[Video Codec]] and uses [[Video Compression]] techniques such as motion compensation and transform coding. It enables practical [[Video Encoding]] across an enormous range of devices, and relates to the [[Technical Standard]] process through which the ITU-T and ISO/IEC jointly specified it.

- ### Content
  - H.264 marked a generational leap in video compression when it arrived in 2003, roughly halving the bitrate needed for a given quality compared to earlier MPEG-2 and MPEG-4 Part 2. This efficiency, achieved without prohibitive decoding cost, arrived just as broadband internet and mobile video were taking off, and it became the codec that made streaming video, video calling, and high-definition optical media practical at mass scale.

  - Its gains come from a refined version of the hybrid block-based coding scheme. Frames are predicted from neighbouring blocks within the same frame (intra prediction) or from previously decoded frames using motion compensation with variable block sizes and quarter-pixel precision (inter prediction). The residual error is transformed, quantised, and compressed with context-adaptive entropy coders — CAVLC or the more efficient CABAC — while an in-loop deblocking filter suppresses the blocking artefacts that plagued earlier codecs.

  - A key to H.264's longevity is its organisation into profiles and levels that tailor the standard's many tools to different applications and device capabilities. A low-power mobile decoder can implement a baseline profile, while broadcast and Blu-ray use high profiles with the full toolset. This scalability, combined with pervasive dedicated hardware encoders and decoders in virtually every smartphone, camera, and GPU, made H.264 the safe, universally compatible default for delivering video.

  - Successor standards offer better compression — HEVC (H.265), VP9, AV1, and VVC each push efficiency further — yet H.264 remains stubbornly dominant because of its unmatched device compatibility, mature tooling, and the patent-licensing clarity that newer codecs have struggled to match. As a result it endures as the baseline interoperable format: even systems that prefer newer codecs typically fall back to H.264 to guarantee playback, illustrating how deployed standards persist long after technically superior alternatives appear.

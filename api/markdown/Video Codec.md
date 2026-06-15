public:: true

# Video Codec
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:video-codec",
  "@type": "Page",
  "vc:slug": "video-codec",
  "title": "Video Codec",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:video-codec",
  "@type": "Class",
  "label": "Video Codec",
  "definition": "A video codec (coder-decoder) is an algorithm or hardware implementation that compresses and decompresses digital video by exploiting spatial redundancy within frames (intra-prediction), temporal redundancy across frames (inter-prediction with motion compensation), and transform coding of residuals, enabling practical storage and transmission of video at bitrates orders of magnitude lower than uncompressed formats whilst maintaining perceptual quality.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:encoder-decoder-architecture",
      "label": "Encoder Decoder Architecture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:decoder",
        "label": "Decoder"
      },
      {
        "@id": "urn:ngm:class:motion-estimation",
        "label": "Motion Estimation"
      },
      {
        "@id": "urn:ngm:class:entropy-coding",
        "label": "Entropy Coding"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:discrete-cosine-transform",
        "label": "Discrete Cosine Transform"
      },
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:video-encoding",
        "label": "Video Encoding"
      },
      {
        "@id": "urn:ngm:class:adaptive-bitrate-streaming",
        "label": "Adaptive Bitrate Streaming"
      },
      {
        "@id": "urn:ngm:class:bandwidth-optimization",
        "label": "Bandwidth Optimization"
      },
      {
        "@id": "urn:ngm:class:computer-vision-video-analysis",
        "label": "Computer Vision Video Analysis"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quantization",
        "label": "Quantization"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      },
      {
        "@id": "urn:ngm:class:video-conferencing",
        "label": "Video Conferencing"
      },
      {
        "@id": "urn:ngm:class:cdn",
        "label": "CDN"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:compliance-standards",
        "label": "Compliance Standards"
      },
      {
        "@id": "urn:ngm:class:open-media-alliance",
        "label": "Open Media Alliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bandwidth-adaptation",
        "label": "Bandwidth Adaptation"
      },
      {
        "@id": "urn:ngm:class:digital-rights-management",
        "label": "Digital Rights Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:video-compression-codec",
      "label": "Video Compression Codec"
    },
    {
      "@id": "urn:ngm:class:video-coder-decoder",
      "label": "Video Coder Decoder"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - A video codec implements a hybrid coding architecture combining intra-frame compression (DCT or integer transform on 4×4 to 64×64 block units, followed by quantisation and entropy coding) with inter-frame prediction (motion vector signalling, fractional-pixel interpolation filters, and residual coding). Modern codecs — H.264/AVC, H.265/HEVC, VP9, AV1, and H.266/VVC — differ primarily in the size and shapes of coding units, the sophistication of motion model (translational, affine, overlapping block), the transform choices (DCT, ADST, WHT), and the entropy coding engine (CABAC, ANS). The [[Encoder]] performs rate-distortion optimisation to select the coding decisions; the [[Decoder]] reconstructs video from the bitstream without the encoder's search complexity.

- ### Relationships
  - Video codecs are the foundation of [[Video Encoding]] pipelines, enabling efficient delivery through [[CDN]] infrastructure and adaptive [[Bandwidth Adaptation]] schemes such as MPEG-DASH and HLS. They rely on [[Encoder]] and [[Decoder]] implementations and mathematical operations including [[Convolution]] for reference frame interpolation filters. [[Computer Vision Video Analysis]] pipelines invoke codec hardware blocks for transcoding, thumbnail extraction, and pre/post processing.

- ### Content
  - The history of video coding standards traces from CCITT H.120 (1984) through MPEG-1 (1993) and MPEG-2/H.262 (1995, enabling DVD and digital television) to H.263 for video conferencing, and H.264/AVC (2003), which became the dominant internet video format. The ITU-T and ISO/IEC JTC1 standards bodies collaborate through the Joint Collaborative Team on Video Coding (JCT-VC) and Joint Video Expert Team (JVET) to develop successive generations roughly doubling compression efficiency every five to seven years.

  - H.265/HEVC (2013) doubled coding efficiency over H.264 but attracted patent licensing disputes that fractured the ecosystem. Google, Mozilla, Cisco, Amazon, Intel, and others formed the Alliance for Open Media (AOM) in 2015 to develop AV1 as a royalty-free alternative, ratified in 2018. AV1 achieves 30–40% bitrate savings over HEVC at the cost of substantially higher encoder complexity. H.266/VVC (2020) offers similar efficiency to AV1 with potentially simpler encoder implementations but carries HEVC-like licensing risk. EVC (MPEG-5 Part 1) provides a royalty-free baseline profile.

  - Hardware codec support is critical for deployment: Apple A-series, Qualcomm Snapdragon, Google Tensor, and AMD/Nvidia GPUs include dedicated AV1 decode and, increasingly, encode engines. Intel Arc GPUs added AV1 hardware encoding in 2022. YouTube, Netflix, and Meta have deployed AV1 for the majority of their streaming traffic by 2024, using open-source encoders (SVT-AV1, libaom) at cloud scale with GPU- and ASIC-accelerated decode on client devices.

  - Neural video coding has emerged as a research frontier: end-to-end learned codecs (e.g., Scale-Space Flow, DCVC) use convolutional and transformer networks for all coding stages, and hybrid learned/traditional approaches (neural in-loop filters, ML motion estimation) are being standardised in MPEG's LCEVC and Neural Enhancement extensions. By 2025, learned video coding has closed the gap to AV1 on perceptual metrics at low bitrates, with deployment beginning in video conferencing and surveillance applications where encoder latency constraints are relaxed.


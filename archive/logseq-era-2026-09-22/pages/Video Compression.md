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
  "definition": "Video compression is the process of encoding digital video data to reduce file size and bit rate for efficient storage and transmission, while maintaining perceptually acceptable quality. It exploits three principal forms of redundancy: spatial redundancy within individual frames, temporal redundancy across consecutive frames, and perceptual redundancy based on limitations of human visual perception. Modern video codecs such as H.264/AVC, H.265/HEVC, VP9, and AV1 implement intra-frame prediction, inter-frame motion compensation, discrete cosine or wavelet transforms, quantisation, and entropy coding to achieve compression ratios that make streaming, broadcast, and real-time communication practical over bandwidth-limited networks.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-compression",
      "label": "Data Compression"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:entropy-coding",
        "label": "Entropy Coding"
      },
      {
        "@id": "urn:ngm:class:motion-estimation",
        "label": "Motion Estimation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:video-codec",
        "label": "Video Codec"
      },
      {
        "@id": "urn:ngm:class:multimedia-processing",
        "label": "Multimedia Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:discrete-cosine-transform",
        "label": "Discrete Cosine Transform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-delivery",
        "label": "Content Delivery"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      },
      {
        "@id": "urn:ngm:class:broadcast-television",
        "label": "Broadcast Television"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:av1-codec",
        "label": "AV1"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:itu-t",
        "label": "ITU-T"
      },
      {
        "@id": "urn:ngm:class:alliance-for-open-media",
        "label": "Alliance for Open Media"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:adaptive-bitrate-streaming",
        "label": "Adaptive Bitrate Streaming"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:video-coding",
      "label": "Video Coding"
    }
  ],
  "quality": 0.74,
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
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
  - Video compression is the process of encoding [[Digital Video]] to reduce its bit rate and storage footprint while preserving perceptually acceptable quality. It eliminates spatial redundancy within frames using transform-based methods such as the [[Discrete Cosine Transform]], temporal redundancy across frames via [[Motion Estimation]] and [[Inter-Frame Coding]], and perceptual redundancy through [[Psychovisual Model]]s that discard information the human visual system is insensitive to. The encoded output is a bitstream governed by a [[Video Codec]] specification, which defines syntax, semantics, and the [[Entropy Coding]] method used for final lossless symbol compression.

- ### Overview
  - Video compression is foundational to modern digital media. Without it, raw uncompressed video at broadcast resolutions would be impractical to store or transmit over any existing network or consumer storage medium.
  - The central trade-off is the rate-distortion curve: lower bit rates produce more visible distortion (artefacts), while higher bit rates approach the quality of the original. Encoder designers tune this balance for different applications — high-quality archival, real-time videoconferencing, or adaptive streaming all require different operating points.
  - Compression operates on the assumption that natural video content has high statistical redundancy. A typical video frame shares most of its content with the previous frame; within a frame, neighbouring pixel blocks are strongly correlated. Exploiting these patterns with [[Signal Processing]] and information-theoretic techniques yields compression ratios of 50:1 to 200:1 without subjectively unacceptable quality loss.
  - The discipline sits at the intersection of [[Signal Processing]], [[Information Theory]], and [[Perceptual Coding]], and increasingly draws on [[Machine Learning]] for neural-based approaches.

- ### Key Mechanisms
  - #### Intra-Frame Coding (Spatial Compression)
    - Operates on a single frame in isolation, making it a self-contained reference point (I-frame).
    - Divides the frame into blocks (e.g. 16×16 macroblocks in [[H.264/AVC]], flexible coding units up to 64×64 in [[H.265/HEVC]]).
    - Applies [[Discrete Cosine Transform]] (or integer approximation) to transform pixel values into frequency coefficients.
    - [[Quantisation]] reduces coefficient precision, discarding high-frequency detail according to a quantisation parameter that governs the quality–bit-rate trade-off.
    - [[Entropy Coding]] (CABAC, CAVLC, Huffman, or arithmetic coding) encodes the quantised coefficients into a compact bitstream.
  - #### Inter-Frame Coding (Temporal Compression)
    - Exploits similarity between consecutive frames by coding only the differences.
    - [[Motion Estimation]] finds the best matching block in a reference frame (or multiple reference frames) for each block in the current frame.
    - [[Inter-Frame Coding]] stores motion vectors plus residual error, rather than full pixel data.
    - P-frames reference one past frame; B-frames reference both past and future frames, allowing bidirectional prediction.
    - Long-term reference frames and reference frame management allow codecs to skip predictable repeated content.
  - #### Rate Control
    - [[Rate Control]] algorithms govern how bits are allocated across frames and sequences to meet a target bit rate while maximising quality.
    - Constant bit rate (CBR) suits broadcast channels; variable bit rate (VBR) and constrained VBR suit adaptive streaming.
  - #### Colour Subsampling
    - Human vision is more sensitive to luminance than chrominance, so [[Colour Subsampling]] (4:2:0, 4:2:2, 4:4:4) reduces chrominance resolution with minimal perceived quality loss.
    - 4:2:0 — the most common — halves chroma resolution in both dimensions, yielding roughly 50% data reduction on colour channels.
  - #### Perceptual Coding
    - [[Psychovisual Model]]s identify spatial and temporal masking effects: the eye is less sensitive to distortion in high-activity or textured regions than in flat areas.
    - Encoders exploit this by allocating fewer bits to perceptually tolerant regions.

- ### Codec Landscape
  - #### Legacy and Widely Deployed
    - [[H.264/AVC]] (ITU-T H.264 / ISO/IEC 14496-10): the dominant codec for web streaming, Blu-ray, broadcast, and videoconferencing. Released 2003; extremely broad hardware support.
    - [[H.265/HEVC]] (ITU-T H.265 / ISO/IEC 23008-2): successor to H.264; similar quality at roughly half the bit rate. Widely used in 4K streaming and broadcast; patent licensing complexity hampered open deployment.
    - [[VP9]]: royalty-free codec from Google, used extensively on YouTube; competitive with H.265 at reduced licensing burden.
  - #### Next-Generation
    - [[AV1]]: royalty-free codec from the [[Alliance for Open Media]] (Apple, Google, Microsoft, Netflix, et al.). Released 2018; outperforms VP9 and HEVC at comparable quality. Increasingly hardware-accelerated.
    - [[H.266/VVC]] (Versatile Video Coding): ITU-T / MPEG successor to HEVC; further bit-rate reduction especially for 8K and immersive content; high encoding complexity.
    - [[EVC]] (Essential Video Coding, ISO/IEC 23094-1): designed with a tiered patent profile to enable royalty-free baseline deployment.
  - #### Professional and Mezzanine
    - [[ProRes]] (Apple), [[DNxHD/DNxHR]] (Avid): high-quality intermediate codecs used in post-production where quality preservation outweighs storage cost.
    - [[JPEG 2000]]: used in digital cinema (DCP) for visually lossless compression of master prints.
  - #### Neural / Learned
    - [[Neural Video Compression]]: emerging class of codecs based on deep neural networks (variational autoencoders, hyperpriors, optical-flow-based temporal prediction). Research codecs (HEVC-competitive) exist; hardware deployment is nascent.

- ### Applications and Use Cases
  - #### Video Streaming
    - [[Video Streaming]] platforms (Netflix, YouTube, Disney+) encode titles in multiple quality levels and resolutions for [[Adaptive Bitrate Streaming]] (DASH, HLS), selecting the appropriate rendition based on the viewer's available bandwidth.
    - Per-title encoding optimises the codec parameters for each content type rather than using a fixed ladder.
  - #### Real-Time Communication
    - [[Real-Time Communication]] (WebRTC, Zoom, Teams) imposes strict latency requirements: codecs must encode and decode within tens of milliseconds, limiting the use of B-frames and complex rate control.
    - [[VP9]], H.264, and increasingly AV1 are used in RTC contexts with hardware acceleration.
  - #### Broadcast Television
    - [[Broadcast Television]] uses H.264 and H.265 in contribution feeds and distribution; satellite and cable delivery favour MPEG-2 (legacy) and H.264/H.265.
    - ATSC 3.0 (US next-gen broadcast) mandates H.265/HEVC.
  - #### Surveillance and Security
    - IP cameras and NVRs rely on H.264 and H.265 to store continuous streams compactly while enabling remote access; smart compression profiles (scene-based bit-rate reduction) extend storage retention.
  - #### Immersive and Spatial Media
    - [[360-Degree Video]] and [[Volumetric Video]] require specialised projection and tiling schemes on top of standard codecs; [[Spatial Computing]] headsets (Apple Vision Pro, Meta Quest) use AV1 and H.265 for high-resolution stereoscopic delivery.
    - Point cloud and mesh compression (V-PCC, G-PCC from MPEG) extend video-coding principles to 3D spatial content.
  - #### Post-Production and Archival
    - Mezzanine codecs (ProRes, DNxHR) preserve intermediate quality through editing pipelines before final delivery compression.
    - Long-term archival favours visually lossless codecs or [[Lossless Compression]] to avoid generational quality loss.

- ### Relationships
  - hasPart:: [[Intra-Frame Coding]], [[Inter-Frame Coding]], [[Entropy Coding]], [[Motion Estimation]], [[Quantisation]]
  - partOf:: [[Video Codec]], [[Multimedia Processing]]
  - requires:: [[Discrete Cosine Transform]], [[Rate Control]]
  - enables:: [[Content Delivery]], [[Real-Time Communication]], [[Video Streaming]], [[Broadcast Television]]
  - dependsOn:: [[Signal Processing]], [[Perceptual Coding]]
  - implements:: [[H.264/AVC]], [[H.265/HEVC]], [[AV1]], [[VP9]]
  - uses:: [[Psychovisual Model]], [[Colour Subsampling]]
  - standardizedBy:: [[ITU-T]], [[ISO/IEC MPEG]], [[Alliance for Open Media]]
  - contrastsWith:: [[Lossless Compression]]
  - bridges-to:: [[Neural Video Compression]], [[Content Delivery Network]]
  - relatedTo:: [[Adaptive Bitrate Streaming]], [[Latency]]

- ### Standards and Context
  - #### Standards Bodies
    - [[ITU-T]] Study Group 16 (Video Coding Experts Group, VCEG) develops the H.26x series of codecs in joint collaboration with [[ISO/IEC MPEG]] (Moving Picture Experts Group, JCT-VC / JVET joint teams).
    - [[Alliance for Open Media]] (AOM) produces royalty-free codecs (AV1, AV2 in development) with backing from major platform and device vendors.
    - SMPTE defines professional container formats and interoperability specifications for video production workflows.
  - #### Key Standards
    - ITU-T H.262 / ISO/IEC 13818-2 — MPEG-2 Video (broadcast legacy)
    - ITU-T H.264 / ISO/IEC 14496-10 — AVC (dominant web and mobile codec)
    - ITU-T H.265 / ISO/IEC 23008-2 — HEVC (4K streaming, broadcast)
    - IETF RFC 7741 — RTP payload format for VP8 (WebRTC)
    - AOM AV1 Bitstream Specification (2018, open)
    - ITU-T H.266 / ISO/IEC 23090-3 — VVC (2020)
  - #### Container Formats
    - Compressed bitstreams are wrapped in container formats: MP4/ISOBMFF, Matroska (MKV), WebM, MPEG-TS, and FLV define how audio, video, subtitles, and metadata are multiplexed for storage and streaming.
  - #### Quality Metrics
    - PSNR (Peak Signal-to-Noise Ratio): classic fidelity metric; computationally simple but poorly correlated with perceived quality at high compression.
    - SSIM (Structural Similarity Index): perceptually motivated, widely used in codec benchmarks.
    - VMAF (Video Multi-method Assessment Fusion): Netflix-developed machine-learning-based metric; strong correlation with human judgement; now an industry standard for streaming quality assessment.

- ### Provenance
  - sources:: ITU-T H.264/H.265/H.266 specifications; AOM AV1 bitstream specification; Richardson, I.E.G., "The H.264 Advanced Video Compression Standard" (Wiley, 2010); Ohm, J.-R., "Multimedia Signal Coding and Transmission" (Springer, 2015); VMAF documentation (Netflix open-source)
  - updated:: 2026-06-13

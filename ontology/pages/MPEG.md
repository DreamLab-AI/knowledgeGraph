public:: true

# MPEG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2771538831a99ab9e6ebed98cb79051d304921abfcb01af5a56f177c8356cf6f",
  "@type": "Page",
  "vc:slug": "mpeg",
  "title": "MPEG",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    },
    {
      "@id": "urn:visionflow:linked:iso",
      "vc:label": "ISO"
    },
    {
      "@id": "urn:visionflow:linked:video-compression",
      "vc:label": "Video Compression"
    },
    {
      "@id": "urn:visionflow:linked:spatial-audio",
      "vc:label": "Spatial Audio"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mpeg",
  "@type": "Class",
  "label": "MPEG",
  "definition": "The Moving Picture Experts Group, the ISO/IEC standardisation body (formally ISO/IEC JTC 1/SC 29 working groups) that since 1988 has defined the dominant international standards for compressed digital audio and video — MPEG-1 and MP3, MPEG-2 for broadcast television and DVD, MPEG-4 AVC/H.264, HEVC, and VVC for streaming, plus systems standards such as MP4, MPEG-DASH, and MPEG-H spatial audio — underpinning virtually all modern media distribution.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:standards-body",
    "label": "Standards Body"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      },
      {
        "@id": "urn:ngm:class:adaptive-bitrate-streaming",
        "label": "Adaptive Bitrate Streaming"
      },
      {
        "@id": "urn:ngm:class:video-streaming",
        "label": "Video Streaming"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:video-codec",
        "label": "Video Codec"
      },
      {
        "@id": "urn:ngm:class:codec",
        "label": "Codec"
      },
      {
        "@id": "urn:ngm:class:proprietary-video",
        "label": "Proprietary Video"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The Moving Picture Experts Group, the ISO/IEC standardisation body (formally ISO/IEC JTC 1/SC 29 working groups) that since 1988 has defined the dominant international standards for compressed digital audio and video — MPEG-1 and MP3, MPEG-2 for broadcast television and DVD, MPEG-4 AVC/H.264, HEVC, and VVC for streaming, plus systems standards such as MP4, MPEG-DASH, and MPEG-H spatial audio — underpinning virtually all modern media distribution."

- ### Semantic Classification
  - owl-class:: standards:MPEG
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - part-of:: [[ISO]]
  - enables:: [[Video Compression]]
  - related-to:: [[Video Codec]]

- ### Content

  ## Definition

  **MPEG** (Moving Picture Experts Group) is the standardisation body for compressed digital audio and video, founded in 1988 under [[ISO]]/IEC and convened for over three decades by Leonardo Chiariglione. Following a 2020 reorganisation, its work continues as a set of working groups under ISO/IEC JTC 1/SC 29, but "MPEG" remains the umbrella brand on the standards themselves. Its output defines how virtually all recorded and transmitted media is encoded: an unbroken line from Video CD and MP3 through digital television and DVD to today's streaming services.

  The major generations track the history of media distribution. **MPEG-1** (1993) brought Video CD and, via its Audio Layer III, the MP3 format that reshaped the music industry. **MPEG-2** (1995) became the backbone of digital broadcast television and DVD. **MPEG-4** introduced object-based media and, jointly with ITU-T's VCEG under the JVT/JCT collaborations, produced **AVC/H.264** (2003) — still the most widely deployed video codec — followed by **HEVC/H.265** (2013) and **VVC/H.266** (2020), each roughly halving bitrate at equivalent quality. Systems-layer standards are equally consequential: the MP4 file format (ISO Base Media File Format), MPEG-TS transport streams, and **MPEG-DASH**, the ISO standard for [[Adaptive Bitrate Streaming]] that, alongside HLS, carries most internet video.

  MPEG standards are developed through competitive call-for-proposals cycles, verified against reference software and conformance suites, and licensed through patent pools — the last being its chief controversy. HEVC's fragmented royalty landscape (three pools plus independent licensors) is widely credited with accelerating the royalty-free alternative AV1 from the Alliance for Open Media, the central rivalry in codec standardisation today. Beyond video, MPEG-H 3D Audio provides object-based [[Spatial Audio]] for broadcast and VR, and newer work — point-cloud compression (V-PCC/G-PCC), MPEG Immersive Video, and AI-based coding studies — targets immersive and machine-oriented media.

  ## Current Landscape

  - **Deployment**: H.264 remains near-universal in hardware; HEVC dominates 4K broadcast and Apple ecosystems; AV1 is the principal royalty-free competitor at YouTube and Netflix. VVC adoption accelerated through 2025: Brazil regulated its VVC-based "TV 3.0"/DTV+ system via Decree No. 12,595/2025 (27 August 2025), ATSC approved VVC as an (optional) full ATSC 3.0 standard in July 2025, and Google's Android 17 adds native VVC/H.266 support on devices with compatible hardware decoders.
  - **Next generation**: on 14 July 2025 JVET published requirements for the successor to VVC (working label H.267), targeting at least 40% bitrate reduction over VVC Main 10, with standardisation expected around 2028-2029. The competing royalty-free AV2 from AOMedia was finalised in late May 2026 (announced 9 June 2026), renewing the AV1-versus-MPEG rivalry a generation on.
  - **Licensing**: patent economics remain the fault line — Access Advance launched a Video Distribution Patent pool covering HEVC, VVC, AV1 and VP9 distribution on 16 January 2025, with rates published in July 2025.
  - **Streaming stack**: MPEG-DASH + CMAF (a joint MPEG effort) remains the common packaging layer for large-scale adaptive streaming.
  - **Immersive and machine media**: V-PCC and G-PCC compress point clouds for volumetric video; MPEG-I targets six-degrees-of-freedom experiences; and MPEG-AI work on Video Coding for Machines (VCM) and neural-network-based coding signals a shift toward codecs optimised for computer-vision consumers rather than human viewers.

  **Sources**:
  - https://www.streamingmedia.com/Articles/Editorial/Featured-Articles/The-State-of-Streaming-Codecs-2026-173838.aspx
  - http://aomedia.org/press%20releases/Alliance-for-Open-Media-Releases-AV2-Codec/
  - https://www.streamingmedia.com/Articles/News/Online-Video-News/AI-Helps-InterDigital-Reach-Beyond-VVC-in-Race-to-Develop-Next-Gen-Codec-171971.aspx
  - https://en.wikipedia.org/wiki/AV2

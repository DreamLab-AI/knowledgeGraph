public:: true

# Real-Time Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:82fd72376ee7577dedef8f39d2770f137ae2d54601c4ce5fd1df00d4d455d720",
  "@type": "Page",
  "vc:slug": "real-time-communication",
  "title": "Real-Time Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:web-rtc",
      "vc:label": "WebRTC"
    },
    {
      "@id": "urn:visionflow:linked:video-compression",
      "vc:label": "Video Compression"
    },
    {
      "@id": "urn:visionflow:linked:wireless-connectivity",
      "vc:label": "Wireless Connectivity"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Real-Time Communication"
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
  "@id": "urn:ngm:class:real-time-communication",
  "@type": "Class",
  "label": "Real-Time Communication",
  "definition": "Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to dynamic network conditions. Modern RTC systems span peer-to-peer browser sessions via WebRTC, carrier-grade VoIP infrastructure built on SIP and RTP, and real-time data channels used in collaborative applications, gaming, and distributed control systems. Quality of experience is governed by congestion control algorithms, forward error correction, jitter buffering, and adaptive bitrate strategies.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      },
      {
        "@id": "urn:ngm:class:session-initiation-protocol",
        "label": "Session Initiation Protocol"
      },
      {
        "@id": "urn:ngm:class:transport-protocol",
        "label": "Real-Time Transport Protocol"
      },
      {
        "@id": "urn:ngm:class:signalling",
        "label": "Signalling"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      },
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:nat-traversal",
        "label": "NAT Traversal"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:video-conferencing",
        "label": "Video Conferencing"
      },
      {
        "@id": "urn:ngm:class:voice-over-ip",
        "label": "Voice over IP"
      },
      {
        "@id": "urn:ngm:class:live-streaming",
        "label": "Live Streaming"
      },
      {
        "@id": "urn:ngm:class:collaborative-editing",
        "label": "Collaborative Editing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Connectivity"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:ice-protocol",
        "label": "ICE Framework"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transport-protocol",
        "label": "Secure Real-Time Transport Protocol"
      },
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:asynchronous-messaging",
        "label": "Asynchronous Messaging"
      },
      {
        "@id": "urn:ngm:class:batch-processing",
        "label": "Batch Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:websocket",
        "label": "WebSocket"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:media-server",
        "label": "Media Server"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rtc",
      "label": "RTC"
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
  "@id": "urn:visionflow:annotation:link-resolutions:real-time-communication:2c2eed253ca8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:82fd72376ee7577dedef8f39d2770f137ae2d54601c4ce5fd1df00d4d455d720"
  },
  "vc:resolutions": [
    {
      "raw": "[[WebRTC]]",
      "resolved": "urn:visionflow:linked:web-rtc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Video Compression]]",
      "resolved": "urn:visionflow:linked:video-compression",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wireless Connectivity]]",
      "resolved": "urn:visionflow:linked:wireless-connectivity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
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
  - Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between endpoints with latency low enough to support interactive, synchronous engagement. Unlike [[Asynchronous Messaging]], RTC requires continuous, bidirectional media flows where perceptible delay — typically any end-to-end path above 150 ms — degrades the conversational experience. Modern RTC encompasses browser-native peer-to-peer sessions via [[WebRTC]], carrier-grade telephony built on [[Session Initiation Protocol]] and [[Real-Time Transport Protocol]], and low-latency data channels used in collaborative tools, cloud gaming, and distributed control systems. Quality of service is governed by [[Congestion Control]], [[Forward Error Correction]], jitter buffering, and adaptive bitrate strategies that respond to fluctuating [[Network Latency]] and packet loss.

- ### Overview
  - RTC is a foundational pillar of the modern internet, underpinning everything from one-to-one voice calls to global live events with millions of concurrent viewers. Its distinguishing constraint is time: a message delayed by seconds is still a message, but a voice sample delayed by 300 ms becomes an unintelligible conversation.
  - The technical challenge is that the internet is a best-effort, variable-delay network, whereas RTC demands bounded, predictable delivery. This tension drives a large body of protocol engineering — from UDP-based transport (to avoid TCP's head-of-line blocking) to sophisticated playout buffers that absorb jitter while minimising perceived latency.
  - The domain has matured considerably. [[WebRTC]] standardised browser-to-browser RTC without plugins; selective forwarding units and [[Media Server]] architectures scaled it to large group sessions; cloud [[Edge Computing]] nodes reduced geographic round-trip times; and hardware-accelerated codecs made high-definition video viable on mobile devices.

- ### Key Components
  - #### Transport & Network Layer
    - [[Real-Time Transport Protocol]] (RTP) — the primary bearer for audio and video samples over UDP, carrying sequence numbers and timestamps for jitter reconstruction.
    - [[Secure Real-Time Transport Protocol]] (SRTP) — encrypted variant of RTP, mandatory in modern deployments.
    - [[RTCP]] (RTP Control Protocol) — companion protocol carrying sender/receiver reports, enabling adaptive bitrate and loss detection.
    - [[Data Channel]] — SCTP-over-DTLS tunnels used in WebRTC for arbitrary binary or text data alongside media.
    - [[ICE Framework]] (Interactive Connectivity Establishment) — combines STUN and TURN to traverse [[NAT Traversal]] and firewall boundaries.
  - #### Signalling
    - [[Signalling]] negotiates session parameters (codecs, network addresses) before media can flow; the actual mechanism is deliberately left out of [[WebRTC]] to allow flexibility.
    - Common signalling transports: [[WebSocket]], HTTP long-polling, SIP over TLS, or proprietary APIs.
    - [[Session Description Protocol]] (SDP) is the standard format for encoding codec capabilities, network candidates, and media directions exchanged during signalling.
    - [[Session Initiation Protocol]] (SIP) remains dominant in enterprise telephony and carrier VoIP as both a signalling and presence protocol.
  - #### Codecs
    - [[Video Compression]] codecs: VP8, VP9, H.264, H.265/HEVC, and AV1 — balancing compression efficiency against encode/decode latency.
    - [[Audio Codec]]: Opus is the mandatory-to-implement codec for WebRTC, offering variable-bitrate speech and music at 6–510 kbps; G.711 and G.722 are ubiquitous in legacy telephony.
    - Codec selection involves trade-offs between bandwidth, computational cost, and patent licensing.
  - #### Quality & Adaptation
    - [[Congestion Control]] algorithms (REMB, Transport-CC, SCReAM, GoogCC) estimate available bandwidth and instruct encoders to adjust bitrate accordingly.
    - Jitter buffers absorb packet arrival variability, trading a small fixed delay for smooth playout.
    - Packet loss concealment (PLC) and forward error correction (FEC) recover or mask missing frames.
    - Simulcast and Scalable Video Coding (SVC) allow [[Media Server]] nodes to forward appropriate quality layers to each receiver without transcoding.

- ### Applications / Use Cases
  - #### Voice and Video Calling
    - Consumer apps (WhatsApp, FaceTime, Zoom, Google Meet, Microsoft Teams) rely on RTC stacks — many now built on [[WebRTC]] internally.
    - Enterprise unified communications integrate SIP trunks, PSTN gateways, and cloud PBX systems.
  - #### Video Conferencing & Webinars
    - Multi-party sessions route through Selective Forwarding Units (SFUs) or Multipoint Control Units (MCUs) implemented as [[Media Server]] infrastructure.
    - [[Content Delivery Network]] providers (Cloudflare, Fastly) now offer integrated SFU products to reduce latency for large audiences.
  - #### Live Streaming
    - WebRTC-based ingest replaces RTMP for sub-second latency [[Live Streaming]] pipelines.
    - HTTP Low-Latency HLS (LL-HLS) and DASH push latency down to 2–4 s for broadcast-scale distribution.
  - #### Collaborative Applications
    - [[Collaborative Editing]] tools (Figma, Miro, VS Code Live Share) use RTC data channels alongside CRDTs for real-time cursor sharing and document sync.
    - Remote desktop and cloud gaming stream encoded video frames with input events returning sub-frame.
  - #### Spatial & XR Environments
    - [[Extended Reality]] applications require RTC for avatar voice, spatial presence cues, and shared world-state synchronisation.
    - [[Spatial Audio]] rendered from real-time positional data demands low-latency audio pipelines tightly coupled to head-tracking data.
  - #### IoT and Distributed Control
    - Industrial and robotics control loops use RTC-style protocols (MQTT with QoS 0, DDS, or WebRTC data channels) where millisecond-level feedback loops are critical.
    - [[Wireless Connectivity]] technologies (5G, Wi-Fi 6E) provide the radio-access throughput and latency budgets RTC requires in mobile contexts.

- ### Relationships
  - hasPart:: [[WebRTC]], [[Session Initiation Protocol]], [[Real-Time Transport Protocol]], [[Signalling]]
  - requires:: [[Video Compression]], [[Audio Codec]], [[Network Latency]], [[NAT Traversal]]
  - enables:: [[Video Conferencing]], [[Voice over IP]], [[Live Streaming]], [[Collaborative Editing]]
  - dependsOn:: [[Wireless Connectivity]], [[Content Delivery Network]], [[ICE Framework]]
  - uses:: [[Secure Real-Time Transport Protocol]], [[Data Channel]], [[Congestion Control]]
  - standardizedBy:: [[IETF]], [[W3C]]
  - contrastsWith:: [[Asynchronous Messaging]], [[Batch Processing]]
  - bridgesTo:: [[Spatial Audio]], [[Extended Reality]]
  - relatedTo:: [[WebSocket]], [[Edge Computing]], [[Media Server]]
  - is-subclass-of:: [[Communication Protocol]]

- ### Standards & Context
  - **W3C WebRTC 1.0** — the browser API standard (W3C Recommendation, 2021) defining `RTCPeerConnection`, `MediaStream`, and `RTCDataChannel`.
  - **IETF RTCWEB Working Group** — produced the companion protocol-layer RFCs (RFC 8825–8836 series) specifying transport, security (DTLS-SRTP), and data channels.
  - **RFC 3550** — defines RTP and RTCP, the foundational media transport protocols.
  - **RFC 3261** — defines [[Session Initiation Protocol]], the dominant VoIP signalling protocol.
  - **RFC 8445** — defines [[ICE Framework]] for NAT traversal.
  - **ITU-T G series** — telephony codec standards (G.711, G.722, G.729) widely deployed in PSTN interoperability.
  - **IETF QUIC** — emerging candidate transport for next-generation RTC; Media over QUIC (MoQ) working group is developing scalable live media delivery over QUIC.
  - Regulatory context: telecommunications RTC services are subject to lawful intercept obligations (CALEA in the US, similar frameworks in the EU under ETSI standards), end-to-end encryption choices, and emergency call routing requirements.

- ### Semantic Classification
  - owl-class:: infrastructure:RealTimeCommunication
  - owl-role:: Class

- ### Provenance
  - sources:: W3C WebRTC 1.0 Recommendation; IETF RFC 3550 (RTP); IETF RFC 3261 (SIP); IETF RFC 8445 (ICE); IETF RFC 8825 (WebRTC Overview)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z

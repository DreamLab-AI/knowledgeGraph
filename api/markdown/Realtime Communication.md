public:: true

# Realtime Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80de40cc7920d626a33acc85c8bae6bc3a4e15d9ff01b12869a36bc2c177e44a",
  "@type": "Page",
  "vc:slug": "realtime-communication",
  "title": "Realtime Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9215"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Realtime Communication"
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
  "@id": "urn:ngm:class:realtime-communication",
  "@type": "Class",
  "label": "Realtime Communication",
  "definition": "Realtime communication denotes the class of systems, protocols, and architectures that deliver synchronous, low-latency exchange of audio, video, text, and arbitrary data between two or more participants such that end-to-end delay remains below perceptual thresholds — typically under 150 ms one-way for voice and under 50 ms for interactive haptics or gaming. It encompasses technologies such as WebRTC, VoIP, SIP, XMPP, and WebSocket-based signalling, unified under the common requirement that transport, codec, and signalling planes cooperate to minimise jitter and packet loss. Realtime communication differs from asynchronous messaging in that session state must be continuously negotiated and media flows must be sustained for the interaction to remain coherent. It constitutes foundational infrastructure for distributed collaboration, virtual presence, telemedicine, and immersive social environments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:signalling-protocol", "label": "Signalling Protocol"},
      {"@id": "urn:ngm:class:media-codec", "label": "Media Codec"},
      {"@id": "urn:ngm:class:transport-layer", "label": "Transport Layer"},
      {"@id": "urn:ngm:class:presence-system", "label": "Presence System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:network-synchronization", "label": "Network Synchronization"},
      {"@id": "urn:ngm:class:nat-traversal", "label": "NAT Traversal"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:realtime-collaboration", "label": "Realtime Collaboration"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"},
      {"@id": "urn:ngm:class:telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:telemedicine", "label": "Telemedicine"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:webrtc", "label": "WebRTC"},
      {"@id": "urn:ngm:class:session-initiation-protocol", "label": "Session Initiation Protocol"},
      {"@id": "urn:ngm:class:websocket", "label": "WebSocket"},
      {"@id": "urn:ngm:class:opus-codec", "label": "Opus Codec"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:metaverse-and-telecollaboration", "label": "Metaverse and Telecollaboration"},
      {"@id": "urn:ngm:class:virtual-worlds", "label": "Virtual Worlds"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ietf", "label": "IETF"},
      {"@id": "urn:ngm:class:w3c", "label": "W3C"},
      {"@id": "urn:ngm:class:3gpp", "label": "3GPP"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:asynchronous-messaging", "label": "Asynchronous Messaging"},
      {"@id": "urn:ngm:class:store-and-forward", "label": "Store and Forward"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"},
      {"@id": "urn:ngm:class:ai-voice-synthesis", "label": "AI Voice Synthesis"},
      {"@id": "urn:ngm:class:avatar-streaming", "label": "Avatar Streaming"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quality-of-service", "label": "Quality Of Service"},
      {"@id": "urn:ngm:class:end-to-end-encryption", "label": "End-to-End Encryption"},
      {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"},
    {"@id": "urn:ngm:class:synchronous-communication", "label": "Synchronous Communication"}
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:realtime-communication:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80de40cc7920d626a33acc85c8bae6bc3a4e15d9ff01b12869a36bc2c177e44a"
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
  - Realtime communication denotes the class of systems, protocols, and architectures that deliver synchronous, low-latency exchange of audio, video, text, and arbitrary data between participants such that end-to-end delay remains below perceptual thresholds. It is distinguished from [[Asynchronous Messaging]] by the continuous, session-bound nature of media flows, and from batch data transfer by its strict latency constraints. The field encompasses foundational technologies including [[WebRTC]], [[Session Initiation Protocol]], [[WebSocket]], and [[XMPP]], as well as higher-order constructs such as [[Telepresence]] and [[Immersive Communication]]. Its infrastructure underpins everything from consumer video calls to surgical telerobotics and social [[Virtual Worlds]].

- ### Overview
  - Realtime communication is among the oldest and most deeply engineered areas of networked computing, tracing its lineage from circuit-switched telephony through packet-switched [[VoIP]] and into browser-native peer-to-peer media exchange via [[WebRTC]].
  - The defining requirement is that combined encode, transmit, decode, and render latency remain low enough for participants to perceive the interaction as simultaneous — roughly under 150 ms one-way for voice conversations, under 400 ms for acceptable video conferencing, and under 50 ms for haptic or gaming scenarios.
  - Modern realtime communication systems are built on three cooperating planes:
    - **Signalling plane** — negotiates session parameters, participant addresses, and codec capabilities. Technologies: [[Session Initiation Protocol]], [[XMPP]], [[WebRTC]] offer channel, proprietary APIs.
    - **Media plane** — carries the actual audio/video/data payload using [[RTP]] (Real-time Transport Protocol) or [[QUIC]]-based transports with jitter buffers and loss concealment.
    - **Control plane** — manages [[Quality of Service]], bandwidth estimation (e.g. REMB, TWCC), [[Network Synchronization]], and adaptive bitrate.
  - Why it matters: the shift from physical to digital workplaces, the rise of [[Distributed Collaboration]], and the emergence of the [[Metaverse and Telecollaboration]] layer all depend entirely on realtime communication remaining reliable, secure, and scalable.

- ### Key Components
  - **[[WebRTC]]** — the W3C/IETF-standardised browser API and protocol suite that enables peer-to-peer audio, video, and data channels without plugins. Encompasses ICE/STUN/TURN for [[NAT Traversal]], DTLS-SRTP for encryption, and congestion control.
  - **[[Session Initiation Protocol]] (SIP)** — the dominant signalling protocol for VoIP and video telephony in enterprise and carrier networks. Manages session setup, modification, and teardown.
  - **[[WebSocket]]** — a full-duplex TCP-based channel over HTTP upgrade, widely used for low-latency text/data messaging and as a [[Signalling Protocol]] substrate for WebRTC.
  - **[[XMPP]]** — Extensible Messaging and Presence Protocol; an XML-based open standard for instant messaging, [[Presence System]], and federation. Forms the basis of many enterprise chat systems.
  - **[[Media Codec]]** — audio codecs (Opus, G.711, G.722) and video codecs (VP8, VP9, H.264, AV1, H.265) determine bandwidth/quality trade-offs. [[Opus Codec]] is the IETF-mandated baseline for WebRTC audio.
  - **[[Transport Layer]]** — UDP preferred for media (tolerates loss better than retransmit delay); TCP/TLS via [[WebSocket]] for signalling; QUIC emerging as a unified transport combining reliability and speed.
  - **[[NAT Traversal]]** — STUN (Session Traversal Utilities for NAT) and TURN (Traversal Using Relays around NAT) servers resolve the address discovery problem in consumer networks. ICE (Interactive Connectivity Establishment) orchestrates candidate gathering.
  - **[[Jitter Buffer]]** — adaptive playout buffers absorb packet arrival variance, trading a small fixed delay for smooth playback.
  - **[[Presence System]]** — tracks and distributes availability state of participants (online, busy, away), enabling awareness before session initiation.
  - **[[Network Synchronization]]** — RTCP (RTP Control Protocol) carries NTP timestamps and receiver reports enabling sender-side bitrate adaptation and clock drift correction.
  - **[[Quality of Service]]** — DSCP markings, traffic shaping, and priority queuing in network infrastructure protect realtime flows from competing bulk traffic.
  - **[[End-to-End Encryption]]** — DTLS-SRTP in WebRTC, ZRTP in SIP, Signal Protocol in messaging systems. Increasingly mandated by regulation and user expectation.

- ### Applications / Use Cases
  - **Consumer voice and video calling** — Apple FaceTime, Zoom, Google Meet, Microsoft Teams, WhatsApp calls all rely on [[WebRTC]] or proprietary derivatives of SIP/RTP stacks.
  - **Enterprise unified communications** — SIP trunking, PBX integration, contact centre platforms, and presence-aware collaboration suites such as Cisco Webex and Microsoft Teams.
  - **[[Telemedicine]]** — remote patient consultation, telestroke diagnosis, and surgical guidance rely on sub-second video with high fidelity audio; regulatory requirements (HIPAA, GDPR) drive [[End-to-End Encryption]] adoption.
  - **Online gaming** — voice chat (Discord, in-game VOIP) and game state synchronisation require extremely low latency. Dedicated [[UDP]] transport and custom congestion control (e.g. KCP) are common.
  - **[[Metaverse and Telecollaboration]]** — spatial voice, avatar lip-sync, and shared object manipulation in environments such as Mozilla Hubs, VRChat, and enterprise XR platforms require tightly coupled realtime communication and [[Spatial Audio]].
  - **Live streaming with interaction** — platforms enabling audience participation (Twitch, Clubhouse, Twitter Spaces) layer pub-sub distribution over [[WebRTC]]-based ingestion.
  - **IoT and industrial control** — MQTT and CoAP provide lightweight publish-subscribe channels for sensor telemetry; PROFINET and EtherCAT extend realtime guarantees to deterministic industrial control loops requiring microsecond precision.
  - **[[AI Voice Synthesis]] and conversational AI** — voice assistants and AI agents require streaming audio I/O with round-trip latency low enough to feel conversational, driving integration of [[WebRTC]] with LLM inference pipelines.
  - **Emergency services** — NG911 and TETRA networks use SIP and dedicated ISSI/CSSI gateways to provide interoperable voice, video, and data for first responders.
  - **Financial trading** — ultra-low-latency messaging via FPGA-accelerated UDP multicast and FIX/FAST protocols is a specialised subdomain where microsecond-level guarantees matter more than media fidelity.

- ### Relationships
  - hasPart:: [[Signalling Protocol]]
  - hasPart:: [[Media Codec]]
  - hasPart:: [[Transport Layer]]
  - hasPart:: [[Presence System]]
  - requires:: [[Network Protocol]]
  - requires:: [[Latency]]
  - requires:: [[Network Synchronization]]
  - requires:: [[NAT Traversal]]
  - enables:: [[Realtime Collaboration]]
  - enables:: [[Immersive Communication]]
  - enables:: [[Telepresence]]
  - enables:: [[Telemedicine]]
  - uses:: [[WebRTC]]
  - uses:: [[Session Initiation Protocol]]
  - uses:: [[WebSocket]]
  - uses:: [[Opus Codec]]
  - supports:: [[Metaverse and Telecollaboration]]
  - supports:: [[Virtual Worlds]]
  - supports:: [[Distributed Collaboration]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[3GPP]]
  - contrastsWith:: [[Asynchronous Messaging]]
  - contrastsWith:: [[Store and Forward]]
  - bridges-to:: [[Spatial Audio]]
  - bridges-to:: [[AI Voice Synthesis]]
  - bridges-to:: [[Avatar Streaming]]
  - relatedTo:: [[Quality of Service]]
  - relatedTo:: [[End-to-End Encryption]]
  - relatedTo:: [[Content Delivery Network]]

- ### Standards & Context
  - **IETF** — defines core protocols: RFC 3261 (SIP), RFC 3550 (RTP/RTCP), RFC 7742/7874 (WebRTC video/audio), RFC 8825–8835 (WebRTC suite), RFC 9000/9001 (QUIC/TLS). The RTCWeb working group produced the WebRTC standard suite.
  - **W3C** — publishes the JavaScript API layer: WebRTC 1.0 (W3C Recommendation), Media Capture and Streams, Web Audio API. The WebTransport specification introduces QUIC-backed streams as a complement to WebSocket.
  - **3GPP** — defines IMS (IP Multimedia Subsystem) for carrier-grade voice/video over LTE and 5G; VoLTE (Voice over LTE) and VoNR (Voice over New Radio) are 3GPP-standardised realtime services.
  - **ETSI** — European standards for TETRA, NG112 emergency services, and lawful interception interfaces for realtime communication systems.
  - **IEEE 802.1** — Time-Sensitive Networking (TSN) profiles extend Ethernet to support deterministic, low-latency delivery for industrial realtime communication.
  - **ITU-T** — H.323 (legacy video conferencing), H.264/H.265 video codec standards, and G.711/G.722/G.729 audio codec standards used in telephony.
  - **Signal Protocol** — open cryptographic ratchet protocol (developed by Open Whisper Systems) underpinning end-to-end encryption in WhatsApp, Signal, and many enterprise messaging platforms. Adopted as a de facto standard for [[End-to-End Encryption]] in messaging.
  - **Regulatory context** — GDPR Article 5 mandates data minimisation for metadata; HIPAA Security Rule covers e-PHI in telemedicine; CALEA and national equivalents impose lawful-intercept requirements on communications providers, creating tension with [[End-to-End Encryption]].

- ### Semantic Classification
  - owl-class:: infrastructure:RealtimeCommunication
  - owl-role:: Concept

- ### Provenance
  - sources:: IETF RFC 3261, RFC 3550, RFC 8825 series; W3C WebRTC 1.0 Recommendation; 3GPP IMS specifications; MDN Web Docs (WebRTC); Mozilla Hacks; ITU-T H-series and G-series standards
  - updated:: 2026-06-13

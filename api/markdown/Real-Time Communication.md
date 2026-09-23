
Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to dynamic network conditions. Modern RTC systems span peer-to-peer browser sessions via WebRTC, carrier-grade VoIP infrastructure built on SIP and RTP, and real-time data channels used in collaborative applications, gaming, and distributed control systems. Quality of experience is governed by congestion control algorithms, forward error correction, jitter buffering, and adaptive bitrate strategies.

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

- ### Current Landscape (2026)
  - Media over QUIC (MoQ) matured rapidly: the IETF moq working group's core transport draft reached draft-ietf-moq-transport-19 (July 2026, editors from Cisco, Google and Meta) with an IESG publication target of December 2026 and a likely RFC in 2027, aiming to unify sub-second interactive latency with CDN-scale fan-out over QUIC/WebTransport.
  - Cloudflare launched the first production MoQ relay network in August 2025 across 330+ cities; nanocosmos, WINK Streaming and CDN77 also run production MoQ, and NAB Show 2026 saw eleven vendors (Ant Media, AWS, Bitmovin, Cloudflare, Oracle, Red5 and others) demonstrate cross-implementation interop, delivering roughly 200–300 ms glass-to-glass.
  - WebTransport reached cross-browser Baseline in March 2026 when Safari 26.4 shipped it out of the box, joining Chrome, Edge and Firefox — finally making a browser-native MoQ client a normal web app rather than a Chromium-only experiment.
  - WHIP became an IETF standard (RFC 9725) in March 2025, making WebRTC ingest portable between encoders and media servers without vendor glue; paired with WHEP for egress, it is now the default for pulling non-browser sources into WebRTC pipelines.
  - AI voice agents drove a WebRTC resurgence: OpenAI made its Realtime API generally available on 28 August 2025 with gpt-realtime (later gpt-realtime-2 in May 2026 and gpt-realtime-2.1), offering WebRTC, WebSocket and now-GA SIP transports, remote MCP tools and roughly 800 ms voice-to-voice latency at about $0.06–$0.10 per conversational minute.
  - AV1 crossed from research codec to practical use: Netflix reports roughly 30% of streaming hours are now AV1 and YouTube serves 90%+ of desktop 4K in AV1, with hardware-accelerated encoding on Apple M-series, Intel 12th-gen+ and AMD RDNA3+ — though for interactive WebRTC, VP8 and H.264 remain the workhorses because AV1 software encoding is still 5–10× slower.
  - Open challenges as of 2026: MoQ is still a draft with no named at-scale independent benchmark, lacks a DRM/SCTE-35 framework for regulated broadcast, and does not replace WebRTC for one-to-one voice; OpenAI's Realtime audio path remains non-HIPAA-eligible, leaving healthcare voice agents to route through separate speech-to-text/text-to-speech.

- ### References
  - 1. IETF Media Over QUIC Working Group (2026). draft-ietf-moq-transport-19: Media over QUIC Transport. https://datatracker.ietf.org/group/moq/documents/
  - 2. Cloudflare (2025). MoQ: Refactoring the Internet's real-time media stack (first production MoQ relay network across 330+ cities). https://blog.cloudflare.com/moq/
  - 3. Digital Samba (2026). Media over QUIC (MoQ) Explained — Streaming Guide 2026. https://www.digitalsamba.com/blog/media-over-quic-explained
  - 4. Fora Soft (2026). Media over QUIC: 2026 Architecture & Migration Guide (WebTransport Baseline, draft-18, production deployments). https://www.forasoft.com/blog/article/moq-application-development-architecture
  - 5. OpenAI (2025). Introducing gpt-realtime and Realtime API updates — general availability with SIP and WebRTC. https://openai.com/index/introducing-gpt-realtime/
  - 6. Fora Soft (2026). Best Technologies for Video Streaming Apps 2026 — WHIP (RFC 9725), AV1 adoption, MoQ production pilots. https://www.forasoft.com/blog/article/best-technologies-video-streaming-app-2024

- ### Provenance


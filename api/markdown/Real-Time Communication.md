Real-time communication (RTC) is the exchange of audio, video, and arbitrary data between two or more endpoints with latency low enough to support interactive, synchronous engagement — typically under 150 ms end-to-end for voice and video. It encompasses the protocols, codecs, signalling mechanisms, and network transport layers that jointly minimise delay, jitter, and packet loss while adapting to dynamic network conditions. Modern RTC systems span peer-to-peer browser sessions via WebRTC, carrier-grade VoIP infrastructure built on SIP and RTP, and real-time data channels used in collaborative applications, gaming, and distributed control systems. Quality of experience is governed by congestion control algorithms, forward error correction, jitter buffering, and adaptive bitrate strategies.

### Overview

- RTC is a foundational pillar of the modern internet, underpinning everything from one-to-one voice calls to global live events with millions of concurrent viewers. Its distinguishing constraint is time: a message delayed by seconds is still a message, but a voice sample delayed by 300 ms becomes an unintelligible conversation.
- The technical challenge is that the internet is a best-effort, variable-delay network, whereas RTC demands bounded, predictable delivery. This tension drives a large body of protocol engineering — from UDP-based transport (to avoid TCP's head-of-line blocking) to sophisticated playout buffers that absorb jitter while minimising perceived latency.
- The domain has matured considerably. [[WebRTC]] standardised browser-to-browser RTC without plugins; selective forwarding units and [[Media Server]] architectures scaled it to large group sessions; cloud [[Edge Computing]] nodes reduced geographic round-trip times; and hardware-accelerated codecs made high-definition video viable on mobile devices.

### Key Components

#### Transport & Network Layer

- [[Real-Time Transport Protocol]] (RTP) — the primary bearer for audio and video samples over UDP, carrying sequence numbers and timestamps for jitter reconstruction.
- [[Secure Real-Time Transport Protocol]] (SRTP) — encrypted variant of RTP, mandatory in modern deployments.
- [[RTCP]] (RTP Control Protocol) — companion protocol carrying sender/receiver reports, enabling adaptive bitrate and loss detection.
- [[Data Channel]] — SCTP-over-DTLS tunnels used in WebRTC for arbitrary binary or text data alongside media.
- [[ICE Framework]] (Interactive Connectivity Establishment) — combines STUN and TURN to traverse [[NAT Traversal]] and firewall boundaries.

#### Signalling

- [[Signalling]] negotiates session parameters (codecs, network addresses) before media can flow; the actual mechanism is deliberately left out of [[WebRTC]] to allow flexibility.
- Common signalling transports: [[WebSocket]], HTTP long-polling, SIP over TLS, or proprietary APIs.
- [[Session Description Protocol]] (SDP) is the standard format for encoding codec capabilities, network candidates, and media directions exchanged during signalling.
- [[Session Initiation Protocol]] (SIP) remains dominant in enterprise telephony and carrier VoIP as both a signalling and presence protocol.

#### Codecs

- [[Video Compression]] codecs: VP8, VP9, H.264, H.265/HEVC, and AV1 — balancing compression efficiency against encode/decode latency.
- [[Audio Codec]]: Opus is the mandatory-to-implement codec for WebRTC, offering variable-bitrate speech and music at 6–510 kbps; G.711 and G.722 are ubiquitous in legacy telephony.
- Codec selection involves trade-offs between bandwidth, computational cost, and patent licensing.

#### Quality & Adaptation

- [[Congestion Control]] algorithms (REMB, Transport-CC, SCReAM, GoogCC) estimate available bandwidth and instruct encoders to adjust bitrate accordingly.
- Jitter buffers absorb packet arrival variability, trading a small fixed delay for smooth playout.
- Packet loss concealment (PLC) and forward error correction (FEC) recover or mask missing frames.
- Simulcast and Scalable Video Coding (SVC) allow [[Media Server]] nodes to forward appropriate quality layers to each receiver without transcoding.

### Applications / Use Cases

#### Voice and Video Calling

- Consumer apps (WhatsApp, FaceTime, Zoom, Google Meet, Microsoft Teams) rely on RTC stacks — many now built on [[WebRTC]] internally.
- Enterprise unified communications integrate SIP trunks, PSTN gateways, and cloud PBX systems.

#### Video Conferencing & Webinars

- Multi-party sessions route through Selective Forwarding Units (SFUs) or Multipoint Control Units (MCUs) implemented as [[Media Server]] infrastructure.
- [[Content Delivery Network]] providers (Cloudflare, Fastly) now offer integrated SFU products to reduce latency for large audiences.

#### Live Streaming

- WebRTC-based ingest replaces RTMP for sub-second latency [[Live Streaming]] pipelines.
- HTTP Low-Latency HLS (LL-HLS) and DASH push latency down to 2–4 s for broadcast-scale distribution.

#### Collaborative Applications

- [[Collaborative Editing]] tools (Figma, Miro, VS Code Live Share) use RTC data channels alongside CRDTs for real-time cursor sharing and document sync.
- Remote desktop and cloud gaming stream encoded video frames with input events returning sub-frame.

#### Spatial & XR Environments

- [[Extended Reality]] applications require RTC for avatar voice, spatial presence cues, and shared world-state synchronisation.
- [[Spatial Audio]] rendered from real-time positional data demands low-latency audio pipelines tightly coupled to head-tracking data.

#### IoT and Distributed Control

- Industrial and robotics control loops use RTC-style protocols (MQTT with QoS 0, DDS, or WebRTC data channels) where millisecond-level feedback loops are critical.
- [[Wireless Connectivity]] technologies (5G, Wi-Fi 6E) provide the radio-access throughput and latency budgets RTC requires in mobile contexts.

### Standards & Context

- **W3C WebRTC 1.0** — the browser API standard (W3C Recommendation, 2021) defining `RTCPeerConnection`, `MediaStream`, and `RTCDataChannel`.
- **IETF RTCWEB Working Group** — produced the companion protocol-layer RFCs (RFC 8825–8836 series) specifying transport, security (DTLS-SRTP), and data channels.
- **RFC 3550** — defines RTP and RTCP, the foundational media transport protocols.
- **RFC 3261** — defines [[Session Initiation Protocol]], the dominant VoIP signalling protocol.
- **RFC 8445** — defines [[ICE Framework]] for NAT traversal.
- **ITU-T G series** — telephony codec standards (G.711, G.722, G.729) widely deployed in PSTN interoperability.
- **IETF QUIC** — emerging candidate transport for next-generation RTC; Media over QUIC (MoQ) working group is developing scalable live media delivery over QUIC.
- Regulatory context: telecommunications RTC services are subject to lawful intercept obligations (CALEA in the US, similar frameworks in the EU under ETSI standards), end-to-end encryption choices, and emergency call routing requirements.

### Semantic Classification

### Current Landscape (2026)

- Media over QUIC (MoQ) matured rapidly: the IETF moq working group's core transport draft reached draft-ietf-moq-transport-19 (July 2026, editors from Cisco, Google and Meta) with an IESG publication target of December 2026 and a likely RFC in 2027, aiming to unify sub-second interactive latency with CDN-scale fan-out over QUIC/WebTransport.
- Cloudflare launched the first production MoQ relay network in August 2025 across 330+ cities; nanocosmos, WINK Streaming and CDN77 also run production MoQ, and NAB Show 2026 saw eleven vendors (Ant Media, AWS, Bitmovin, Cloudflare, Oracle, Red5 and others) demonstrate cross-implementation interop, delivering roughly 200–300 ms glass-to-glass.
- WebTransport reached cross-browser Baseline in March 2026 when Safari 26.4 shipped it out of the box, joining Chrome, Edge and Firefox — finally making a browser-native MoQ client a normal web app rather than a Chromium-only experiment.
- WHIP became an IETF standard (RFC 9725) in March 2025, making WebRTC ingest portable between encoders and media servers without vendor glue; paired with WHEP for egress, it is now the default for pulling non-browser sources into WebRTC pipelines.
- AI voice agents drove a WebRTC resurgence: OpenAI made its Realtime API generally available on 28 August 2025 with gpt-realtime (later gpt-realtime-2 in May 2026 and gpt-realtime-2.1), offering WebRTC, WebSocket and now-GA SIP transports, remote MCP tools and roughly 800 ms voice-to-voice latency at about $0.06–$0.10 per conversational minute.
- AV1 crossed from research codec to practical use: Netflix reports roughly 30% of streaming hours are now AV1 and YouTube serves 90%+ of desktop 4K in AV1, with hardware-accelerated encoding on Apple M-series, Intel 12th-gen+ and AMD RDNA3+ — though for interactive WebRTC, VP8 and H.264 remain the workhorses because AV1 software encoding is still 5–10× slower.
- Open challenges as of 2026: MoQ is still a draft with no named at-scale independent benchmark, lacks a DRM/SCTE-35 framework for regulated broadcast, and does not replace WebRTC for one-to-one voice; OpenAI's Realtime audio path remains non-HIPAA-eligible, leaving healthcare voice agents to route through separate speech-to-text/text-to-speech.

### References

- 1. IETF Media Over QUIC Working Group (2026). draft-ietf-moq-transport-19: Media over QUIC Transport. https://datatracker.ietf.org/group/moq/documents/
- 2. Cloudflare (2025). MoQ: Refactoring the Internet's real-time media stack (first production MoQ relay network across 330+ cities). https://blog.cloudflare.com/moq/
- 3. Digital Samba (2026). Media over QUIC (MoQ) Explained — Streaming Guide 2026. https://www.digitalsamba.com/blog/media-over-quic-explained
- 4. Fora Soft (2026). Media over QUIC: 2026 Architecture & Migration Guide (WebTransport Baseline, draft-18, production deployments). https://www.forasoft.com/blog/article/moq-application-development-architecture
- 5. OpenAI (2025). Introducing gpt-realtime and Realtime API updates — general availability with SIP and WebRTC. https://openai.com/index/introducing-gpt-realtime/
- 6. Fora Soft (2026). Best Technologies for Video Streaming Apps 2026 — WHIP (RFC 9725), AV1 adoption, MoQ production pilots. https://www.forasoft.com/blog/article/best-technologies-video-streaming-app-2024

### Provenance

## Merged from Realtime Communication (needs reconciliation)
Realtime communication denotes the class of systems, protocols, and architectures that deliver synchronous, low-latency exchange of audio, video, text, and arbitrary data between two or more participants such that end-to-end delay remains below perceptual thresholds — typically under 150 ms one-way for voice and under 50 ms for interactive haptics or gaming. It encompasses technologies such as WebRTC, VoIP, SIP, XMPP, and WebSocket-based signalling, unified under the common requirement that transport, codec, and signalling planes cooperate to minimise jitter and packet loss. Realtime communication differs from asynchronous messaging in that session state must be continuously negotiated and media flows must be sustained for the interaction to remain coherent. It constitutes foundational infrastructure for distributed collaboration, virtual presence, telemedicine, and immersive social environments.

### Overview

- Realtime communication is among the oldest and most deeply engineered areas of networked computing, tracing its lineage from circuit-switched telephony through packet-switched [[VoIP]] and into browser-native peer-to-peer media exchange via [[WebRTC]].
- The defining requirement is that combined encode, transmit, decode, and render latency remain low enough for participants to perceive the interaction as simultaneous — roughly under 150 ms one-way for voice conversations, under 400 ms for acceptable video conferencing, and under 50 ms for haptic or gaming scenarios.
- Modern realtime communication systems are built on three cooperating planes:
  - **Signalling plane** — negotiates session parameters, participant addresses, and codec capabilities. Technologies: [[Session Initiation Protocol]], [[XMPP]], [[WebRTC]] offer channel, proprietary APIs.
  - **Media plane** — carries the actual audio/video/data payload using [[RTP]] (Real-time Transport Protocol) or [[QUIC]]-based transports with jitter buffers and loss concealment.
  - **Control plane** — manages [[Quality of Service]], bandwidth estimation (e.g. REMB, TWCC), [[Network Synchronization]], and adaptive bitrate.
- Why it matters: the shift from physical to digital workplaces, the rise of [[Distributed Collaboration]], and the emergence of the [[Metaverse and Telecollaboration]] layer all depend entirely on realtime communication remaining reliable, secure, and scalable.

### Key Components

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

### Applications / Use Cases

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

### Standards & Context

- **IETF** — defines core protocols: RFC 3261 (SIP), RFC 3550 (RTP/RTCP), RFC 7742/7874 (WebRTC video/audio), RFC 8825–8835 (WebRTC suite), RFC 9000/9001 (QUIC/TLS). The RTCWeb working group produced the WebRTC standard suite.
- **W3C** — publishes the JavaScript API layer: WebRTC 1.0 (W3C Recommendation), Media Capture and Streams, Web Audio API. The WebTransport specification introduces QUIC-backed streams as a complement to WebSocket.
- **3GPP** — defines IMS (IP Multimedia Subsystem) for carrier-grade voice/video over LTE and 5G; VoLTE (Voice over LTE) and VoNR (Voice over New Radio) are 3GPP-standardised realtime services.
- **ETSI** — European standards for TETRA, NG112 emergency services, and lawful interception interfaces for realtime communication systems.
- **IEEE 802.1** — Time-Sensitive Networking (TSN) profiles extend Ethernet to support deterministic, low-latency delivery for industrial realtime communication.
- **ITU-T** — H.323 (legacy video conferencing), H.264/H.265 video codec standards, and G.711/G.722/G.729 audio codec standards used in telephony.
- **Signal Protocol** — open cryptographic ratchet protocol (developed by Open Whisper Systems) underpinning end-to-end encryption in WhatsApp, Signal, and many enterprise messaging platforms. Adopted as a de facto standard for [[End-to-End Encryption]] in messaging.
- **Regulatory context** — GDPR Article 5 mandates data minimisation for metadata; HIPAA Security Rule covers e-PHI in telemedicine; CALEA and national equivalents impose lawful-intercept requirements on communications providers, creating tension with [[End-to-End Encryption]].

### Semantic Classification

### Current Landscape (2026)

- Media over QUIC (MoQ) has emerged as the most serious attempt to unify interactive real-time and scalable streaming: the IETF moq working group's core draft-ietf-moq-transport reached draft-18 (12 May 2026), a publish/subscribe relay protocol over QUIC/WebTransport targeting 200-300 ms glass-to-glass at CDN-style fan-out, though it remains an internet-draft with a formal RFC not expected before 2027.
- Cloudflare launched the first MoQ relay network in August 2025, running open-source moq-rs relays on servers in 330+ cities, joining Meta, Google and Cisco; the OpenMOQ Software Consortium (Red5, Akamai, CDN77, Cisco, Synamedia, YouTube, with Bitmovin and Qualabs) formed to push interoperable implementations.
- WebTransport over HTTP/3 reached Web Platform "Baseline" in March 2026 when Safari 26.4 shipped it unflagged alongside Chrome, Edge and Firefox, finally closing the browser-support gap that had held back QUIC-based media transport.
- Speech-to-speech voice AI became a mainstream real-time workload: OpenAI's Realtime API went generally available on 28 August 2025 with the gpt-realtime model, adding native SIP telephony and remote MCP tool calls; the reasoning-grade 2.x line followed (gpt-realtime-2 in May 2026, 2.1 in July 2026) alongside gpt-realtime-mini, gpt-realtime-translate (70+ input languages) and streaming transcription, with WebRTC as the recommended browser transport at roughly 800 ms voice-to-voice.
- RCS gained interoperable end-to-end encryption: the GSMA published Universal Profile 3.0 in March 2025 defining E2EE via the IETF's Messaging Layer Security (MLS) protocol, making RCS the first large-scale messaging service with cross-provider E2EE; Apple began the iPhone-to-Android beta rollout with iOS 26.5 on 11 May 2026, with Google matching on the Android side.
- The consensus positioning in 2026 is that MoQ complements rather than replaces WebRTC, which remains the right answer for sub-250 ms two-way conversation (calls, telehealth, AI voice agents), while researchers (Meetecho/Janus) demonstrated the first practical WebRTC-to-MoQ gateway interoperability.
- Open challenges as of 2026 include MoQ's lack of a DRM framework, SCTE-35 conformance and any named at-scale production deployment beyond vendor betas and NAB/IBC demos; undefined congestion-response and rate-adaptation policies; RCS E2EE not extending to business (A2P) messaging and depending on gradual carrier activation of Universal Profile 3.0; and the OpenAI Realtime audio path still not being HIPAA-eligible under any BAA.

### References

- 1. Cloudflare (2025). MoQ: Refactoring the Internet's real-time media stack. https://blog.cloudflare.com/moq/
- 2. IETF moq Working Group / Nandakumar, Vasiliev, Swett, Frindell (2025). Media over QUIC Transport (draft-ietf-moq-transport-13). https://datatracker.ietf.org/doc/draft-ietf-moq-transport/13/
- 3. Fora Soft (2026). Media over QUIC (MoQ) In Depth: The 2026 Turning Point. https://www.forasoft.com/learn/video-streaming/articles-streaming/media-over-quic-moq
- 4. OpenAI (2025). Introducing gpt-realtime and Realtime API updates for production voice agents. https://openai.com/index/introducing-gpt-realtime/
- 5. GSMA (2025). RCS Encryption: A Leap Towards Secure and Interoperable Messaging. https://www.gsma.com/newsroom/article/rcs-encryption-a-leap-towards-secure-and-interoperable-messaging/
- 6. Infosecurity Magazine (2026). Apple Rolls Out E2EE for RCS Across iPhone and Android. https://www.infosecurity-magazine.com/news/apple-google-rcs-end-to-end/

### Provenance



Voice over IP (VoIP) is a family of technologies that digitise, compress, and transmit voice communications as packetised data over Internet Protocol networks rather than through dedicated circuit-switched telephony infrastructure. Audio is sampled, encoded using codecs such as G.711, G.729, or Opus, packetised, and transported using the Real-time Transport Protocol (RTP) over UDP, with session management handled by signalling protocols such as SIP or H.323. VoIP enables cost reduction, feature richness, and integration with unified communications platforms, but introduces quality-of-service sensitivities to packet loss, jitter, and latency. Encryption via SRTP and TLS/DTLS provides confidentiality and integrity for enterprise and consumer deployments.

- ### Overview
  - VoIP adoption accelerated in the 2000s as broadband penetration made packet networks viable for voice and video.
  - Unified communications platforms (Microsoft Teams, Cisco Webex, Zoom) embed VoIP within broader collaboration suites.
  - Quality-of-service mechanisms (DSCP marking, traffic shaping) prioritise voice packets to meet sub-150 ms one-way latency targets.

- ### Key aspects
  - **Codecs**: narrowband (G.711, G.729), wideband (G.722), and full-band (Opus) supporting various bandwidth/quality trade-offs.
  - **Signalling**: Session Initiation Protocol (SIP) is the dominant standard; H.323 remains in legacy deployments.
  - **Transport**: RTP over UDP provides timestamped, sequenced delivery; jitter buffers smooth inter-packet arrival variation.
  - **Security**: SRTP encrypts media; TLS/DTLS encrypts signalling; ZRTP adds end-to-end key agreement without PKI.
  - **NAT traversal**: STUN, TURN, and ICE protocols resolve address translation issues common in consumer deployments.

- ### Mechanisms
  - Analogue voice is sampled at 8 kHz (narrowband) or 16–48 kHz (wideband), quantised, and compressed by the codec.
  - Packets traverse the IP network; the receiver reassembles and decodes the audio stream with jitter-buffer smoothing.
  - [[Automatic Speech Recognition]] services increasingly attach to VoIP streams for real-time transcription.

- ### Applications
  - Enterprise unified communications replacing PBX infrastructure.
  - Consumer calling applications (WhatsApp, FaceTime, Signal) routing calls over mobile data or Wi-Fi.
  - Contact centre telephony integrating with CRM and AI-driven call analytics.
  - Emergency services next-generation 911/112 IP-based emergency call systems.

- ### Provenance


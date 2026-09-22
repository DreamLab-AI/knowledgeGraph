public:: true

# Voice Over Ip

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:voice-over-ip",
  "@type": "Page",
  "title": "Voice Over Ip",
  "vc:slug": "voice-over-ip",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voice-over-ip",
  "@type": "Class",
  "label": "Voice Over Ip",
  "definition": "Voice over IP (VoIP) is a family of technologies that digitise, compress, and transmit voice communications as packetised data over Internet Protocol networks rather than through dedicated circuit-switched telephony infrastructure. Audio is sampled, encoded using codecs such as G.711, G.729, or Opus, packetised, and transported using the Real-time Transport Protocol (RTP) over UDP, with session management handled by signalling protocols such as SIP or H.323. VoIP enables cost reduction, feature richness, and integration with unified communications platforms, but introduces quality-of-service sensitivities to packet loss, jitter, and latency. Encryption via SRTP and TLS/DTLS provides confidentiality and integrity for enterprise and consumer deployments.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"},
      {"@id": "urn:ngm:class:real-time-collaboration", "label": "Real Time Collaboration"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-messaging", "label": "Real Time Messaging"},
      {"@id": "urn:ngm:class:real-time-systems", "label": "Real Time Systems"},
      {"@id": "urn:ngm:class:communication-protocols", "label": "Communication Protocols"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"},
      {"@id": "urn:ngm:class:io-t-infrastructure", "label": "IoT Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time", "label": "Real Time"},
      {"@id": "urn:ngm:class:real-time-computing", "label": "Real-Time Computing"},
      {"@id": "urn:ngm:class:secure-channel", "label": "Secure Channel"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:secure-communication", "label": "Secure Communication"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:real-time-collaborative-editing", "label": "Real-Time Collaborative Editing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:automatic-speech-recognition", "label": "Automatic Speech Recognition"}
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Voice Over Ip]] is the [[Infrastructure]] technology family enabling telephone-quality or better voice calls over IP packet networks, replacing or supplementing the public switched telephone network (PSTN).
  - It relies on [[Network Protocol]] stacks combining SIP/H.323 for signalling, RTP/UDP for media transport, and codecs for audio compression.
  - Integration with [[Real-Time Communication]] platforms has made VoIP the dominant enterprise and consumer voice delivery mechanism.

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

- ### Relationships
  - supports:: [[Real-Time Communication]], [[Real Time Collaboration]], [[Communication Protocol]]
  - enables:: [[Real Time Messaging]], [[Real Time Systems]], [[Communication Protocols]]
  - uses:: [[Network Protocol]], [[Cryptographic Protocol]]
  - requires:: [[Infrastructure]], [[Network Protocol]]
  - dependsOn:: [[Infrastructure]], [[IoT Infrastructure]]
  - relatedTo:: [[Real Time]], [[Real-Time Computing]], [[Secure Channel]]
  - hasPart:: [[Secure Communication]]
  - contrastsWith:: [[Real-Time Collaborative Editing]]
  - bridgesTo:: [[Automatic Speech Recognition]]

- ### Provenance
  - updated:: 2026-06-15

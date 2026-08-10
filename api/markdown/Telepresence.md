public:: true

# Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5f2b28ae5084661d6fef595db065d91bb1a83915023743fe6a3df82f3128b7a2",
  "@type": "Page",
  "vc:slug": "telepresence",
  "title": "Telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9024"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Telepresence"
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
  "@id": "urn:ngm:class:telepresence",
  "@type": "Class",
  "label": "Telepresence",
  "definition": "Telepresence is a suite of technologies and interaction paradigms that create a compelling perceptual sense of physical presence in a remote or virtual location, enabling natural communication, social interaction, and physical manipulation across geographic distance. Systems span high-definition video conferencing with matched room geometries and spatial audio, robotic telepresence platforms that provide mobile embodied presence, and fully immersive extended-reality environments that deliver volumetric representations and haptic feedback. The defining characteristic is the degree of presence — the subjective feeling of 'being there' — which depends on sensory fidelity, low latency, spatial coherence, and natural interaction affordances. Convergent advances in spatial computing, network infrastructure, and AI-driven media processing are progressively closing the gap between telepresent and co-located experience.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    },
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence (Distributed Collaboration)"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:remote-presence",
      "label": "Remote Presence"
    },
    {
      "@id": "urn:ngm:class:virtual-presence",
      "label": "Virtual Presence"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:volumetric-capture",
        "label": "Volumetric Capture"
      },
      {
        "@id": "urn:ngm:class:video-conferencing",
        "label": "Video Conferencing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:low-latency-networking",
        "label": "Low-Latency Networking"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-work",
        "label": "Remote Work"
      },
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:remote-surgery",
        "label": "Remote Surgery"
      },
      {
        "@id": "urn:ngm:class:virtual-collaboration",
        "label": "Virtual Collaboration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:5-g-network",
        "label": "5G Networks"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hybrid-work",
        "label": "Hybrid Work"
      },
      {
        "@id": "urn:ngm:class:telemedicine",
        "label": "Telemedicine"
      },
      {
        "@id": "urn:ngm:class:remote-education",
        "label": "Remote Education"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:itu-t",
        "label": "ITU-T"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:co-location",
        "label": "Co-location"
      },
      {
        "@id": "urn:ngm:class:asynchronous-communication",
        "label": "Asynchronous Communication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic Systems"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:presence-technology",
        "label": "Presence Technology"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:holographic-display",
        "label": "Holographic Display"
      }
    ]
  },
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:telepresence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5f2b28ae5084661d6fef595db065d91bb1a83915023743fe6a3df82f3128b7a2"
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
  - Telepresence is a suite of technologies and interaction paradigms designed to create a compelling perceptual sense of physical presence in a remote or virtual location. Drawing on [[Spatial Audio]], [[Haptic Feedback]], [[Volumetric Capture]], and high-fidelity video, telepresence systems enable participants to communicate, collaborate, and manipulate objects at a distance as though co-located. The concept sits at the intersection of [[Spatial Computing]], [[Distributed Collaboration]], and [[Extended Reality]], with the primary quality metric being the subjective sense of "being there" — known as the sense of presence or telepresence fidelity.

- ### Overview
  - Telepresence emerged from early videoconferencing research in the 1970s and 1980s, pioneered at organisations such as Bell Labs and MIT, before maturing into dedicated room systems in the 2000s (Cisco TelePresence, Polycom RealPresence). The field has since expanded dramatically along two axes:
    - **Fidelity axis** — from SD video to 4K/8K, from mono audio to [[Spatial Audio]], from flat screens to [[Light Field Display]] and [[Holographic Display]] systems.
    - **Embodiment axis** — from passive viewing to [[Teleoperation]] of robotic avatars capable of physical interaction with the remote environment.
  - The practical significance of telepresence is substantial: it reduces the carbon footprint of business travel, enables [[Remote Work]] and [[Hybrid Work]] at scale, supports [[Telemedicine]] in under-served regions, and allows experts to apply skills where they are physically absent.
  - The perceptual core of presence rests on three pillars: sensory immersion (fidelity of audio-visual and tactile stimuli), interactivity (low-latency bidirectional control), and social presence (the sense that other participants are real and attentive).

- ### Key Components
  - **Video pipeline**
    - Ultra-high-definition cameras (4K–8K) with wide dynamic range
    - Codec stacks: H.265/HEVC, AV1, [[Video Compression]] for bandwidth efficiency
    - AI-powered background segmentation and virtual environment compositing
    - Automatic speaker framing via [[Computer Vision]] and face-tracking
  - **Audio pipeline**
    - [[Spatial Audio]] encoding (Ambisonics, object-based audio) for directional cue preservation
    - Acoustic echo cancellation and noise suppression (AI-driven in modern systems)
    - Sub-20 ms mouth-to-ear latency to maintain conversational naturalness
  - **Display and rendering**
    - Matched-geometry room designs that align sightlines between remote sites
    - [[Holographic Display]] and light-field screens for glasses-free 3D
    - [[Virtual Reality]] headsets providing full-immersion environments
    - [[Augmented Reality]] overlays anchoring remote participants in the physical space
  - **Haptics and touch**
    - [[Haptic Feedback]] gloves and exoskeletons enabling tactile interaction with remote objects
    - Force-feedback devices for teleoperated manipulation
  - **Capture and reconstruction**
    - [[Volumetric Capture]] rigs (multi-camera arrays) producing 3D body representations
    - [[Point Cloud]] streaming or mesh reconstruction for real-time 3D transmission
    - [[Neural Rendering]] (NeRF, 3D Gaussian Splatting) for photorealistic avatar generation from sparse cameras
  - **Networking**
    - [[WebRTC]] for browser-native low-latency signalling and media transport
    - [[5G Networks]] and [[Edge Computing]] to push sub-100 ms round-trip latency to mobile scenarios
    - [[Real-Time Communication]] protocols (RTP, SRTP, QUIC) for jitter-controlled delivery
  - **Robotics integration**
    - [[Teleoperation]] platforms (e.g., Suitable Technologies Beam, Double Robotics) combining mobility with video/audio
    - Surgical telepresence systems with haptic force feedback for [[Remote Surgery]]
    - Industrial robotic arms operated by remote human operators with millimetre precision

- ### Applications and Use Cases
  - **Enterprise collaboration**
    - Boardroom-grade telepresence suites (Cisco Webex Hologram, Logitech Sight) replacing executive travel
    - [[Hybrid Work]] meeting equity — ensuring remote participants feel as present as those in-room
    - Global design reviews using shared [[Spatial Computing]] environments
  - **Healthcare and telemedicine**
    - [[Telemedicine]] consultations with spatially accurate patient representation
    - [[Remote Surgery]] using robotic systems (da Vinci Surgical System extensions, RAVEN-II) over high-reliability networks
    - Mental health therapy via immersive [[Virtual Reality]] environments that support therapeutic presence
  - **Education and training**
    - [[Remote Education]] labs where students manipulate real instruments through robotic proxies
    - Skills training in hazardous environments (nuclear, aerospace) using telepresence simulators
    - Virtual field trips combining [[Augmented Reality]] with live remote camera feeds
  - **Industrial and field operations**
    - Remote inspection of infrastructure (oil rigs, nuclear plants) via telepresent robots
    - Space operations — astronaut-controlled ground robots providing real-time geological survey
    - Construction site monitoring and coordination through persistent robotic telepresence nodes
  - **Social and entertainment**
    - Live event telepresence — remote attendees represented as volumetric avatars in the physical venue
    - [[Metaverse]] social platforms providing persistent shared spaces with embodied avatars
    - Family connection applications for geographically separated households

- ### Relationships
  - hasPart:: [[Spatial Audio]]
  - hasPart:: [[Haptic Feedback]]
  - hasPart:: [[Volumetric Capture]]
  - hasPart:: [[Video Conferencing]]
  - partOf:: [[Distributed Collaboration]]
  - partOf:: [[Extended Reality]]
  - requires:: [[Low-Latency Networking]]
  - requires:: [[Real-Time Communication]]
  - requires:: [[Display Technology]]
  - enables:: [[Remote Work]]
  - enables:: [[Immersive Experience]]
  - enables:: [[Remote Surgery]]
  - enables:: [[Virtual Collaboration]]
  - dependsOn:: [[5G Networks]]
  - dependsOn:: [[Edge Computing]]
  - dependsOn:: [[WebRTC]]
  - uses:: [[Virtual Reality]]
  - uses:: [[Augmented Reality]]
  - uses:: [[Teleoperation]]
  - uses:: [[Point Cloud]]
  - uses:: [[Neural Rendering]]
  - supports:: [[Hybrid Work]]
  - supports:: [[Telemedicine]]
  - supports:: [[Remote Education]]
  - standardizedBy:: [[ITU-T]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[Co-location]]
  - contrastsWith:: [[Asynchronous Communication]]
  - bridgesTo:: [[Robotic Systems]]
  - bridgesTo:: [[Metaverse]]
  - relatedTo:: [[Presence Technology]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[Holographic Display]]

- ### Standards and Context
  - **ITU-T F.730** — Framework and requirements for telepresence systems, specifying performance targets for display geometry, audio quality, and end-to-end latency.
  - **ITU-T H.700 series** — Visual telephony and videoconferencing system standards underpinning modern telepresence video codecs.
  - **IETF RFC 7478** — Web Real-Time Communications (WebRTC) use cases and requirements, a foundational protocol layer for browser-native telepresence.
  - **ISO/IEC 23090 series** — Immersive video coding standards (including [[Point Cloud]] compression, omnidirectional media) directly applicable to volumetric telepresence.
  - **IEEE 1918.1** — Tactile Internet standard addressing haptic communication latency requirements (sub-1 ms round-trip for closed-loop haptic control), critical for surgical and industrial telepresence.
  - **W3C WebXR Device API** — Browser interface for [[Extended Reality]] experiences enabling web-based telepresence applications.
  - **3GPP Release 17+** — 5G specifications including XR-optimised transport profiles reducing latency and packet loss for mobile telepresence.
  - Key industry bodies: [[ITU-T]], [[IETF]], [[IEEE]], [[ISO]], [[3GPP]], [[W3C]].

- ### Semantic Classification
  - owl-class:: spatial-computing:Telepresence
  - owl-role:: Concept
  - domain:: spatial-computing
  - maturity:: established

- ### Current Landscape (2026)
  - At Google I/O in May 2025, Google rebranded Project Starline as Google Beam, an AI-first 3D video-communication platform that uses a state-of-the-art volumetric video model, a six-camera array and a custom light field display to render a life-sized, glasses-free 3D participant with millimetre-level head tracking at 60fps.
  - HP Dimension with Google Beam, the first commercial Beam device, was announced at InfoComm in June 2025 and began shipping to early enterprise customers (Deloitte, Salesforce, Citadel, NEC and Duolingo) later that year, integrating with Google Meet and Zoom and adding an AI real-time speech-translation mode that preserves the speaker's voice and expressions.
  - Headset-based telepresence advanced sharply with Apple's visionOS 26 (previewed June 2025), which rebuilt Vision Pro Personas on Gaussian-splatting volumetric rendering for far higher fidelity (accurate hair, lashes and a full side profile) and shared spatial experiences for up to five co-located or remote FaceTime participants; academic measurement (ACM, 2024) found FaceTime spatial personas run under 0.7 Mbps via semantic, visibility-aware streaming.
  - Meta's long-promised photorealistic Codec Avatars remained unshipped as of 2026, and with the Quest 4 reportedly cancelled, its next consumer headset ("Puffin"/Loma) slipped to late 2026, leaving Apple and Google ahead on realistic virtual presence.
  - The mobile telepresence-robot segment kept growing, valued at roughly USD 498 million in 2025 and around USD 581 million in 2026 (CAGR near 15%), with 2024-2025 product refreshes including OhmniLabs' 4K AI auto-framing Ohmni Supercam (March 2025), Double Robotics' Double 4 (November 2024) and Ava Robotics' AI environmental-sensing integration with Cisco (January 2025).
  - Consolidation and capital continued to reshape the field: 3C Groups took a majority stake in Blue Ocean Robotics (maker of the GoBe telepresence robot) in March 2025 to scale global commercialisation, while Logitech's simpler 2D "Project Ghost" booth was pitched at roughly USD 15,000-20,000, underscoring the price gap with true 3D systems.
  - Open challenges as of 2026 centre on cost and accessibility (enterprise Beam and Vision Pro remain premium, non-consumer priced), the persistent gap between avatar-based and truly photorealistic capture, standardisation and interoperability across Meet/Zoom/FaceTime/Teams, and bandwidth and latency demands of real-time volumetric streaming.

- ### References
  - 1. Google (2025). Google Beam: Our AI-first 3D video communication platform. https://blog.google/innovation-and-ai/technology/research/project-starline-google-beam-update/
  - 2. TechCrunch (2025). Google's 3D teleconferencing platform, now called Beam, will ship later in 2025. https://techcrunch.com/2025/05/20/googles-3d-teleconferencing-platform-now-called-beam-will-ship-later-in-2025/
  - 3. Apple (2025). visionOS 26 introduces powerful new spatial experiences for Apple Vision Pro. https://www.apple.com/newsroom/2025/06/visionos-26-introduces-powerful-new-spatial-experiences-for-apple-vision-pro/
  - 4. ACM (2024). A First Look at Immersive Telepresence on Apple Vision Pro. https://dl.acm.org/doi/pdf/10.1145/3646547.3689006
  - 5. Data Bridge Market Research (2025). Global Telepresence Robot Market — Recent Developments. https://www.databridgemarketresearch.com/reports/global-telepresence-robot-market/recent-developments

- ### Provenance
  - sources:: ITU-T F.730; IEEE 1918.1 Tactile Internet Standard; IETF RFC 7478 (WebRTC); ISO/IEC 23090 series; established computer science literature
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z

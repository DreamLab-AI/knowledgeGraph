public:: true

# XR Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f9cc0599e86774f097dabb0b2f3332faddbdcf49793b4b44b904fdf0a01bfb7d",
  "@type": "Page",
  "vc:slug": "xr-hardware",
  "title": "XR Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9730"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Hardware"
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
  "@id": "urn:ngm:class:xr-hardware",
  "@type": "Class",
  "label": "XR Hardware",
  "definition": "XR Hardware comprises the physical computing and sensing devices — including head-mounted displays, spatial computing headsets, hand-tracking controllers, haptic peripherals, and body-worn sensors — that enable augmented, mixed, and virtual reality experiences across the extended reality spectrum. These devices integrate high-resolution micro-display optics, inertial measurement units, inside-out positional tracking cameras, and wireless connectivity stacks to deliver low-latency immersive spatial content. Modern XR hardware increasingly embeds dedicated neural processing units for on-device spatial AI inference, eye-tracking modules for foveated rendering, and environmental depth sensors for real-time world reconstruction. The category spans standalone untethered headsets, tethered PC-class systems, and lightweight optical see-through spectacles optimised for always-on wearability.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:xr-devices", "label": "XR Devices"},
    {"@id": "urn:ngm:class:extended-reality-hardware", "label": "Extended Reality Hardware"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:spatial-presence", "label": "Spatial Presence"},
      {"@id": "urn:ngm:class:foveated-rendering", "label": "Foveated Rendering"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:head-mounted-display", "label": "Head-Mounted Display"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"},
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:wireless-connectivity", "label": "Wireless Connectivity"},
      {"@id": "urn:ngm:class:xr-software-platform", "label": "XR Software Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing Paradigm"},
      {"@id": "urn:ngm:class:inside-out-tracking", "label": "Inside-Out Tracking"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:neural-processing-unit", "label": "Neural Processing Unit"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"},
      {"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"},
      {"@id": "urn:ngm:class:passthrough-video", "label": "Passthrough Video"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:openxr", "label": "OpenXR"},
      {"@id": "urn:ngm:class:khronos-group", "label": "Khronos Group"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:flat-panel-display", "label": "Flat Panel Display"},
      {"@id": "urn:ngm:class:desktop-computing", "label": "Desktop Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:edge-ai-inference", "label": "Edge AI Inference"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:display-and-rendering", "label": "Display and Rendering"},
      {"@id": "urn:ngm:class:wearable-computing", "label": "Wearable Computing"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:xr-hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f9cc0599e86774f097dabb0b2f3332faddbdcf49793b4b44b904fdf0a01bfb7d"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
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
  - XR Hardware comprises the physical devices and sensing subsystems — spanning [[Head-Mounted Display]]s, standalone spatial computing headsets, [[Hand Tracking]] controllers, [[Haptic Feedback]] peripherals, and body-worn sensors — that deliver the full spectrum of [[Extended Reality]] experiences including [[Augmented Reality]], [[Mixed Reality]], and [[Virtual Reality]]. These systems fuse micro-display optics, [[Inertial Measurement Unit]]s, inside-out positional cameras, and real-time compute to render immersive spatial content with perceptually acceptable latency, forming the physical substrate of [[Spatial Computing]].

- ### Overview
  - XR Hardware is the physical tier of the spatial computing stack, providing the optics, sensors, compute, and wireless communication that translate virtual or hybrid digital content into perceptually convincing spatial experiences.
  - Unlike conventional flat screens, XR headsets render separate images per eye to produce stereoscopic depth, while continuously tracking the wearer's head position and orientation at sub-millisecond latency to maintain world-lock — the illusion that virtual objects are anchored in physical space.
  - The category spans a wide form-factor range:
    - **Standalone headsets** (e.g. Meta Quest series) integrate SoC-class processors, batteries, and inside-out cameras into a self-contained wearable unit, trading raw compute for mobility and accessibility.
    - **Tethered VR systems** (e.g. Valve Index, PlayStation VR2) offload rendering to a connected PC or console, enabling higher graphical fidelity at the cost of a physical tether.
    - **Optical see-through (OST) glasses** (e.g. Microsoft HoloLens 2, Magic Leap 2) use waveguide optics to superimpose holographic content onto the real world without blocking ambient vision, suited to industrial and enterprise AR workflows.
    - **Video passthrough (VST) headsets** (e.g. Apple Vision Pro, Meta Quest 3) capture the physical environment via cameras and composite it with rendered content in near-real-time, enabling high-fidelity mixed-reality blending.
  - The strategic importance of XR hardware lies in its role as the primary interface paradigm for spatial computing platforms, the [[Metaverse]], industrial digital twins, and next-generation human-computer interaction.

- ### Key Components
  - **Optics and displays**
    - Micro-OLED, LCD, and micro-LED panels deliver per-eye resolutions at high refresh rates (90–120 Hz typical, up to 144 Hz in gaming-class headsets).
    - Pancake lenses, Fresnel lenses, and waveguide combiners trade off compactness, field-of-view, and optical efficiency; pancake designs enable thinner form factors while maintaining acceptable clarity.
    - [[Foveated Rendering]] relies on gaze-contingent display pipelines fed by [[Eye Tracking]] to render the foveal region at full resolution while reducing peripheral resolution, cutting GPU workload substantially.
  - **Tracking and sensing**
    - [[Inside-Out Tracking]] uses onboard cameras and [[Simultaneous Localisation and Mapping]] algorithms to compute six-degrees-of-freedom (6DoF) head pose without external beacons.
    - [[Eye Tracking]] sensors (typically IR-LED + image sensor pairs) measure gaze direction at high frequency, enabling both [[Foveated Rendering]] and social eye-contact cues in avatars.
    - [[Depth Sensing]] via time-of-flight or structured-light sensors supports environment reconstruction for physics-based object interaction and spatial occlusion.
    - [[Inertial Measurement Unit]]s (accelerometers + gyroscopes) provide high-frequency motion data fused with camera-based tracking via sensor fusion filters (e.g. EKF) to minimise motion-to-photon latency.
    - [[Hand Tracking]] through visible-light cameras allows controller-free interaction, detecting finger joint positions for pinch and gesture recognition.
  - **Processing and compute**
    - Standalone headsets rely on mobile SoCs (e.g. Snapdragon XR series) augmented with dedicated [[Neural Processing Unit]]s for real-time AI tasks — hand tracking, scene understanding, and gaze prediction.
    - Tethered systems delegate rendering to discrete GPUs, while the headset handles only sensor fusion, display driving, and audio.
    - Edge-AI offload architectures are emerging, routing compute-heavy spatial-AI inference to nearby edge servers over [[Wireless Connectivity]] with latency below perceptual thresholds.
  - **Audio**
    - [[Spatial Audio]] via head-related transfer functions (HRTFs) synthesises 3D sound fields that reinforce spatial presence; integrated speaker arrays or on-ear headphones deliver positional audio cues.
  - **Connectivity**
    - Wi-Fi 6/6E and sub-6 GHz 5G enable cloud rendering streams (PC-streaming apps such as Air Link, Virtual Desktop), reducing compute requirements on the headset.
    - USB-C and proprietary fibre-optic tethers support lossless video at multi-Gbit/s for zero-compression PC-VR pipelines.
  - **Ergonomics and form factor**
    - Weight distribution, interpupillary distance (IPD) adjustment, and thermal management are primary engineering constraints; heat dissipation limits sustained compute headroom in self-contained devices.
    - Prescription lens inserts and accessibility adaptations are increasingly standard for consumer headsets.

- ### Applications
  - **Consumer entertainment and gaming** — VR gaming titles (Beat Saber, Half-Life: Alyx) exploit 6DoF tracking for physical gameplay; social VR platforms (VRChat, Meta Horizon Worlds) leverage avatar presence.
  - **Enterprise training and simulation** — aviation, surgical, and military training using high-fidelity simulation environments reduce cost and risk versus physical training rigs.
  - **Industrial AR** — HoloLens and Magic Leap deployments in manufacturing, field service, and remote expert guidance overlay step-by-step instructions on physical equipment, reducing error rates.
  - **Architectural and product visualisation** — 1:1 scale walkthroughs of unbuilt structures; design review meetings in shared virtual spaces with [[Digital Twin]] overlays.
  - **Healthcare and rehabilitation** — pain management distraction therapy, phobia exposure therapy, motor-skill rehabilitation, and surgical planning using volumetric patient data.
  - **Spatial collaboration** — remote teams using shared virtual workspaces (e.g. Immersed, Horizon Workrooms) to replicate co-location benefits, tightly linked to [[Distributed Collaboration]] platforms.
  - **Education** — immersive science, history, and anatomy experiences; language learning through situated dialogue scenarios.
  - **Location-based entertainment (LBE)** — arcade-class tethered VR installations where power and form-factor constraints are relaxed.

- ### Relationships
  - enables:: [[Augmented Reality]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Mixed Reality]]
  - enables:: [[Spatial Presence]]
  - enables:: [[Foveated Rendering]]
  - hasPart:: [[Head-Mounted Display]]
  - hasPart:: [[Eye Tracking]]
  - hasPart:: [[Haptic Feedback]]
  - hasPart:: [[Inertial Measurement Unit]]
  - hasPart:: [[Depth Sensing]]
  - requires:: [[Real-Time Rendering]]
  - requires:: [[Wireless Connectivity]]
  - requires:: [[XR Software Platform]]
  - uses:: [[Spatial Computing Paradigm]]
  - uses:: [[Inside-Out Tracking]]
  - uses:: [[Simultaneous Localisation and Mapping]]
  - uses:: [[Neural Processing Unit]]
  - supports:: [[Spatial Audio]]
  - supports:: [[Hand Tracking]]
  - supports:: [[Passthrough Video]]
  - standardizedBy:: [[OpenXR]]
  - standardizedBy:: [[Khronos Group]]
  - contrastsWith:: [[Flat Panel Display]]
  - contrastsWith:: [[Desktop Computing]]
  - bridges-to:: [[Edge AI Inference]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Display and Rendering]]
  - relatedTo:: [[Wearable Computing]]
  - relatedTo:: [[Human-Computer Interaction]]

- ### Standards and Context
  - **[[OpenXR]]** — Khronos Group open cross-vendor API standardising application access to XR hardware tracking, rendering, and input across headset platforms (supported by Meta, Valve, Microsoft, Sony, and others). Replaces proprietary SDKs (OpenVR, Oculus SDK).
  - **[[WebXR]]** — W3C Device API exposing XR sessions to browser-based applications, enabling cross-platform immersive web experiences without native app installation.
  - **IEEE P2048** — standards working group addressing ergonomic, safety, and interoperability aspects of VR/AR devices.
  - **USB-IF DisplayPort Alt Mode / USB4** — connectivity standards enabling high-bandwidth tethered headset links from host PCs.
  - **Wi-Fi Alliance Wi-Fi 6E** — 6 GHz band allocation reduces wireless streaming latency for PC-streaming XR applications.
  - **ETSI / 3GPP 5G NR** — cellular standards targeting the low-latency, high-bandwidth requirements of untethered XR streaming from network edge servers.
  - Regulatory considerations include electromagnetic emissions compliance (FCC, CE marking), optical safety standards for display luminance and retinal exposure (IEC 62471), and health and safety guidelines for extended wear and motion sickness mitigation.
  - The [[Khronos Group]] ecosystem also includes [[VULKAN]] (low-overhead graphics API leveraged for XR rendering pipelines) and [[OpenCL]] for heterogeneous compute on XR SoCs.

- ### Provenance
  - sources:: Khronos OpenXR specification; IEEE VR conference proceedings; Meta Quest developer documentation; Microsoft HoloLens 2 technical documentation; industry analysis (IDC, Counterpoint Research)
  - updated:: 2026-06-13

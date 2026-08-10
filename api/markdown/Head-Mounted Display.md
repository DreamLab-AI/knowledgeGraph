public:: true

# Head-Mounted Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:head-mounted-display",
  "@type": "Page",
  "vc:slug": "head-mounted-display",
  "title": "Head-Mounted Display",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:head-mounted-display",
  "@type": "Class",
  "label": "Head-Mounted Display",
  "definition": "A head-mounted display (HMD) is a wearable optoelectronic device worn on the head that positions one or more display panels or optical projectors in front of the user's eyes, delivering immersive visual content for virtual reality, augmented reality, or mixed reality applications. HMDs incorporate dedicated optics — ranging from Fresnel lenses and pancake optics to diffractive waveguides — to focus near-focal-plane displays at a perceptually comfortable vergence distance, alongside inertial and visual tracking systems that measure head orientation and six-degrees-of-freedom position in real time. The design space spans sealed VR systems that fully occlude the real world, optical see-through AR waveguide systems that superimpose digital graphics onto the physical environment, and video-passthrough mixed reality headsets that combine high-fidelity camera streams with real-time scene reconstruction. HMDs serve as the primary platform through which users perceive and interact with spatial computing environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:xr-headset",
      "label": "XR Headset"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:head-mounted-device",
      "label": "Head-Mounted Device"
    },
    {
      "@id": "urn:ngm:class:headset-display",
      "label": "Headset Display"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:optical-systems",
        "label": "Optical System"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:passthrough-camera",
        "label": "Passthrough Camera"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:extended-reality-xr",
        "label": "Extended Reality (XR)"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:immersive-collaboration",
        "label": "Immersive Collaboration"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:inside-out-tracking",
        "label": "Inside-Out Tracking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Connectivity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Cave Automatic Virtual Environment"
      },
      {
        "@id": "urn:ngm:class:flat-panel-display",
        "label": "Flat Panel Display"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:ai-inference",
        "label": "AI Inference"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A [[Head-Mounted Display]] (HMD) is a wearable optoelectronic device that positions display panels or projectors directly in front of the user's eyes to deliver immersive visual environments spanning [[Virtual Reality]], [[Augmented Reality]], and [[Mixed Reality]]. The device couples a near-focal-plane display with a dedicated [[Optical System]] — Fresnel lenses, pancake optics, or diffractive [[Waveguide]] elements — and integrates [[Inertial Measurement Unit]] sensors with visual inside-out tracking cameras to compute head pose in real time, enabling the rendered scene to remain perceptually stable relative to the physical world. HMDs constitute the primary perceptual interface for [[Spatial Computing]] and are the foundational hardware form factor for the [[Extended Reality (XR)]] ecosystem.

- ### Overview
  - Head-mounted displays occupy a unique position in the human–computer interaction landscape: they replace or augment the user's entire visual field, creating a sense of presence unavailable on conventional flat screens. Where a monitor presents a window into a 3D scene, an HMD wraps the scene around the observer, aligning rendered perspective with tracked head movement at low enough latency — typically below 20 ms motion-to-photon — that the visual system accepts the synthetic image as spatially coherent.
  - The device category encompasses a broad spectrum of form factors. At one extreme, fully sealed [[Virtual Reality]] headsets (e.g., Meta Quest series) occlude all ambient light and deliver binocular stereoscopic rendering to create wholly synthetic environments for gaming, training, and socialisation. At the other, optical see-through [[Augmented Reality]] glasses (e.g., Microsoft HoloLens, Magic Leap) superimpose holographic imagery onto the direct view of the real world via photonic waveguides, keeping the user grounded in physical space. Between these poles, video-passthrough [[Mixed Reality]] devices (e.g., Apple Vision Pro) use high-resolution outward-facing cameras to reconstruct the environment digitally, then composite virtual content with the camera feed at frame rate — achieving AR quality with a sealed enclosure compatible with high-quality optics.
  - Why HMDs matter: they collapse the distance between the user and information by placing it in the same perceptual space as the physical world, enabling embodied interaction patterns (gaze, gesture, spatial reach) that are fundamentally more expressive than mouse-and-keyboard interfaces. This has catalysed adoption across industrial training, remote expert assistance, medical simulation, architectural review, and consumer entertainment.

- ### Key Components
  - **Display subsystem** — micro-OLED, LCD, or micro-LED panels delivering high pixel density (>30 pixels-per-degree), high refresh rate (90–120 Hz+), and low persistence to reduce motion artefacts. [[Display Technology]] choices directly affect weight, power draw, and image quality.
  - **Optical train** — lenses or [[Waveguide]] elements that project the display into the user's eye with minimal geometric distortion, chromatic aberration, and god-ray artefacts. Pancake lens stacks have enabled significantly thinner and lighter headsets compared with older Fresnel designs. Diffractive [[Waveguide]] optics are preferred in optical see-through AR for their ability to redirect light while remaining transparent.
  - **Tracking subsystem** — [[Inside-Out Tracking]] uses outward-facing cameras and an [[Inertial Measurement Unit]] to run [[Simultaneous Localisation and Mapping]] algorithms, building a persistent spatial map of the environment and localising the headset within it. Six-degrees-of-freedom (6DoF) pose estimation enables positional tracking as well as rotational, allowing room-scale movement.
  - **[[Eye Tracking]]** — infrared emitter and camera arrays inside the optical enclosure capture corneal reflection patterns to infer gaze direction at sub-degree accuracy. Gaze data feeds [[Foveated Rendering]] pipelines that concentrate GPU resources at the fixation point, and supports social presence via avatar eye animation and implicit intent detection.
  - **[[Passthrough Camera]]** — outward-facing stereo cameras supporting environment reconstruction for [[Mixed Reality]], plane and mesh detection, QR/marker recognition, and real-time occupancy mapping. In video-passthrough headsets these cameras must deliver sufficient resolution and colour fidelity to substitute for direct vision without inducing discomfort.
  - **Compute and connectivity** — standalone HMDs integrate a system-on-chip (e.g., Qualcomm Snapdragon XR series) handling tracking, rendering, and OS workloads. Tethered headsets offload rendering to a desktop [[GPU]]. [[Wireless Connectivity]] (Wi-Fi 6E, 5G mmWave) enables PC-class rendering via air-link streaming at low latency.
  - **Audio** — integrated speakers and microphones, often delivering [[Spatial Audio]] via head-related transfer function (HRTF) processing to simulate directional sound that reinforces the sense of presence.
  - **Input modalities** — 6DoF tracked controllers for hand-held interaction, [[Hand Tracking]] via cameras for gesture-based input, voice commands, and emerging neural interface research for sub-muscular intent detection.

- ### Applications and Use Cases
  - **Consumer gaming and entertainment** — the dominant revenue segment. Games built natively for 6DoF HMDs provide embodied gameplay unavailable on flat displays: physical dodging, precise physical reach, and full-body locomotion metaphors.
  - **Professional training and simulation** — HMDs replicate high-risk or costly real-world scenarios for military, aviation, firefighting, surgical, and emergency-response training. Repetitions in VR are cheap and safe; trainees can practice edge-case scenarios that rarely occur in the field. [[Digital Twin]] environments synchronised with real facilities further close the sim-to-real gap.
  - **Remote expert assistance** — AR headsets (e.g., RealWear, HoloLens) allow a remote specialist to see through a field worker's eyes and annotate the physical environment with digital overlays, reducing travel costs and error rates in maintenance and inspection workflows.
  - **Medical imaging and surgical planning** — volumetric DICOM data viewed in 3D on an HMD allows surgeons to navigate patient anatomy in full scale before entering the operating theatre. Intraoperative AR overlays patient imaging onto the surgical field.
  - **Architectural and design review** — 1:1 scale walkthroughs of unbuilt structures enable stakeholder feedback earlier in the design lifecycle, identifying spatial and ergonomic issues that are invisible in 2D drawings.
  - **Education and science** — immersive simulations of molecular structures, historical sites, and dangerous chemical reactions deliver experiential learning not replicable in a classroom.
  - **[[Immersive Collaboration]] and the [[Metaverse]]** — social VR platforms (VRChat, Horizon Worlds, Meta Horizon) instantiate persistent shared virtual spaces accessible via HMD, forming the experiential layer of the emerging [[Metaverse]].
  - **Industrial AR and [[Digital Twin]]** — factory-floor AR headsets overlay CAD models, work instructions, and live sensor data from [[Digital Twin]] platforms onto physical machinery, supporting assembly, quality inspection, and predictive maintenance.
  - **[[AI Inference]] at the edge** — HMDs increasingly run on-device [[AI Inference]] for scene understanding, object recognition, hand and body pose estimation, and natural language interaction, enabling context-aware experiences without cloud round-trips.

- ### Relationships
  - partOf:: [[Extended Reality (XR)]]
  - partOf:: [[Spatial Computing]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Mixed Reality]]
  - enables:: [[Immersive Collaboration]]
  - enables:: [[Spatial Audio]]
  - uses:: [[Foveated Rendering]]
  - uses:: [[Eye Tracking]]
  - uses:: [[Haptic Feedback]]
  - uses:: [[Hand Tracking]]
  - uses:: [[Inside-Out Tracking]]
  - hasPart:: [[Optical System]]
  - hasPart:: [[Inertial Measurement Unit]]
  - hasPart:: [[Passthrough Camera]]
  - requires:: [[Display Technology]]
  - requires:: [[Simultaneous Localisation and Mapping]]
  - requires:: [[Rendering Pipeline]]
  - dependsOn:: [[GPU]]
  - dependsOn:: [[Wireless Connectivity]]
  - standardizedBy:: [[OpenXR]]
  - standardizedBy:: [[WebXR]]
  - contrastsWith:: [[Cave Automatic Virtual Environment]]
  - contrastsWith:: [[Flat Panel Display]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[AI Inference]]
  - bridges-to:: [[Metaverse]]

- ### Standards and Context
  - **[[OpenXR]]** — Khronos Group open standard (ratified 1.0 in 2019) providing a portable API for HMD runtimes and rendering engines. Abstracts hardware differences across Meta, Valve, Microsoft, Varjo, and other vendors so applications target a single API surface. Widely adopted in Unreal Engine, Unity, and native applications.
  - **[[WebXR]]** — W3C specification enabling browser-based XR experiences via JavaScript, allowing HMD access through the web platform without native application installation. Implemented in Chrome and Firefox with varying device support tiers.
  - **ITU-T SG16** and **IEEE XR standards** cover HMD ergonomics, latency requirements, and field-of-view definitions for interoperability assessments.
  - **Display Measurement** — the Video Electronics Standards Association (VESA) DisplayHDR and related specs are being adapted to characterise micro-OLED HMD displays; peak luminance, contrast ratio, and colour gamut metrics matter differently in a near-eye context than in desktop displays.
  - **Safety and ergonomics** — CE and FCC certification requirements govern electromagnetic emissions; ergonomic guidance from ISO and ANSI covers recommended session durations, inter-pupillary distance (IPD) adjustment ranges, and discomfort thresholds.
  - **Platform ecosystems** — Meta (Quest / Horizon OS), Apple (visionOS), Microsoft (Windows Mixed Reality / HoloLens), Valve (SteamVR), ByteDance (PICO), and Sony (PlayStation VR2) each maintain proprietary SDKs layered atop [[OpenXR]], creating a competitive but interoperable landscape.

- ### Historical Context
  - The concept originates with Ivan Sutherland's "Sword of Damocles" (1968), the first HMD connected to a computer-generated graphics system. Military flight simulators at Evans & Sutherland and NASA's VIEW system refined tracking and optics through the 1970s–80s. Consumer attempts in the 1990s — Nintendo Virtual Boy, VPL Research, Virtuality Group arcades — were undermined by inadequate display resolution, high latency, and prohibitive cost. The modern era began with the Oculus Rift DK1 (2012), which leveraged commodity mobile OLED panels and MEMS gyroscopes to achieve viable latency at consumer price points. Subsequent generations introduced positional 6DoF tracking (Rift CV1, 2016), standalone compute (Oculus Go, 2018; Quest, 2019), eye tracking for [[Foveated Rendering]] (Varjo, PlayStation VR2), and fully integrated spatial computing platforms (Apple Vision Pro, 2024).

- ### Current Landscape (2026)
  - The Android XR platform (co-developed by Google, Samsung and Qualcomm on OpenXR) shipped its first head-mounted display in the Samsung Galaxy XR ("Project Moohan") on 21 October 2025 at $1,799, pairing Snapdragon XR2+ Gen 2 with dual 4K micro-OLED panels (~29 million pixels, 90Hz) and Gemini-powered spatial AI.
  - Apple refreshed Vision Pro in October 2025 with the M5 chip (10% more rendered pixels, up-to-120Hz, ~3 hours video), later raising the price to $3,699; Apple has since deprioritised headsets, pausing and then cancelling the cheaper "Vision Air" and winding down Samsung Display's low-cost glass-substrate "G-VR" micro-OLED panel by September 2026 to chase Meta-style smart glasses.
  - 2025 marked a structural inflection: IDC reported XR device shipments grew ~44% to 14.5 million units, but display-less AI smart glasses (Ray-Ban Meta, Oakley Meta) reached ~7.25 million units, roughly half of all XR volume and outselling standalone VR/MR headsets for the first time, with headset shipments themselves contracting sharply.
  - Meta dominates the combined XR market (~72-75% share through 2025-2026 on the strength of its EssilorLuxottica Ray-Ban partnership), while Samsung/Google's headset-plus-glasses strategy is now the most credible challenge since Quest; Meta's own Quest 4 has slipped to 2027 or later.
  - Enthusiast and PC-VR hardware advanced on the display and weight frontier: the Bigscreen Beyond 2 arrived at just 107 grams, and Valve confirmed the Steam Frame (dual 2160x2160 panels, Snapdragon 8 Gen 3, bundled 6GHz wireless streaming dongle) for summer 2026.
  - OpenXR has consolidated as the cross-vendor standard (backed by ~13 major vendors and underpinning Android XR, WebXR and Unity workflows), reducing lock-in as the market fragments across headsets and glasses form factors.
  - The XR market was valued at roughly $20 billion in 2025 with analysts projecting $85 billion-plus by 2030; head-mounted displays held ~42% of XR device revenue in 2025 but growth is shifting toward spatial/holographic displays and optical see-through glasses (the fastest-growing segment at ~42% CAGR).
  - Open challenges as of 2026 remain display cost and manufacturability (micro-OLED yields), headset weight and 2-3 hour battery limits, and a strategic pivot of R&D and capital away from immersive HMDs toward lightweight all-day AI glasses.

- ### References
  - 1. MacRumors (2026). Report: Cheaper Apple Vision Pro Display Work Winds Down. https://www.macrumors.com/2026/07/08/cheaper-apple-vision-pro-display-work-ended/
  - 2. TechCrunch (2025). Samsung takes on Apple's Vision Pro with new Galaxy XR headset. https://techcrunch.com/2025/10/22/samsung-takes-on-apples-vision-pro-with-new-galaxy-xr-headset/
  - 3. Apple Newsroom (2025). Apple Vision Pro upgraded with the M5 chip and Dual Knit Band. https://www.apple.com/newsroom/2025/10/apple-vision-pro-upgraded-with-the-m5-chip-and-dual-knit-band/
  - 4. IDC (2026). XR Market Grew 44.4% in 2025 as Smart Glasses Redefine the Category. https://www.idc.com/resource-center/press-releases/xr-market-grew-44-4-in-2025-as-smart-glasses-redefine-the-category/
  - 5. Mordor Intelligence (2026). Extended Reality (XR) Market Size, Trends & Share Analysis, 2026-2031. https://www.mordorintelligence.com/industry-reports/extended-reality-xr-market

- ### Provenance
  - sources:: Established knowledge of HMD hardware, optics, tracking systems, and XR ecosystem as of training cutoff; Khronos OpenXR 1.0 specification; W3C WebXR Device API specification; IEEE and ITU-T XR standards literature.
  - updated:: 2026-06-13

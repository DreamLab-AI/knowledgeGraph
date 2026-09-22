```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:extended-reality",
  "title": "Extended Reality",
  "vc:slug": "extended-reality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
alias:: ExtendedReality

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:extended-reality",
  "@type": "Class",
  "label": "Extended Reality",
  "definition": "Extended Reality (XR) is an umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) — technologies that collectively span the full Reality-Virtuality Continuum first formalised by Milgram and Kishino (1994). XR systems alter or extend a user's perception of the physical environment through head-mounted displays, inside-out spatial tracking, real-time 3D rendering, and multi-modal input (gaze, gesture, voice, haptics). As the primary experiential layer of the spatial computing stack, XR bridges physical and digital environments across enterprise training, healthcare simulation, collaborative design, and consumer entertainment. Standardisation through Khronos OpenXR and W3C WebXR enables cross-vendor application portability and browser-based delivery.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "quality": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    },
    {
      "@id": "urn:ngm:class:extended-reality-xr",
      "label": "Extended Reality (XR)"
    }
  ],
  "relations": {
    "hasPart": [
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
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:xr-hardware",
        "label": "XR Hardware"
      },
      {
        "@id": "urn:ngm:class:spatial-tracking",
        "label": "Spatial Tracking"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptics",
        "label": "Haptics"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:w-3-c-web-xr-device-api",
        "label": "WebXR Device API"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      },
      {
        "@id": "urn:ngm:class:embodied-cognition",
        "label": "Embodied Cognition"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:xr",
      "label": "XR"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Extended Reality (XR) is the umbrella term for the full spectrum of immersive and mixed-reality technologies spanning [[Virtual Reality]], [[Augmented Reality]], and [[Mixed Reality]]. First systematised through Milgram and Kishino's Reality-Virtuality Continuum (1994), XR describes any system that digitally augments, replaces, or blends the user's perception of the physical environment. As the experiential layer of [[Spatial Computing]], XR relies on [[Head-Mounted Display]] hardware, [[Spatial Tracking]], and [[Real-Time Rendering]] to produce coherent, interactive three-dimensional environments that respond to user position, gaze, and gesture in real time.

- ### Overview
  - XR technologies occupy a continuum running from fully synthetic [[Virtual Reality]] environments — in which all sensory input is computer-generated — through [[Augmented Reality]] overlays that annotate the physical world with digital information, to [[Mixed Reality]] that anchors digital objects to physical surfaces with full environmental awareness.
  - The XR stack operates across three tiers: perception (sensors, [[Spatial Tracking]], [[Eye Tracking]], [[Hand Tracking]]), processing ([[Real-Time Rendering]], scene understanding, AI inference), and presentation (optics, [[Spatial Audio]], [[Haptics]]).
  - Why it matters: XR collapses spatial distance for [[Remote Collaboration]], enables risk-free rehearsal of dangerous tasks (surgical, industrial, military), and opens new modes of human-computer interaction beyond the [[Two-Dimensional Interface]] paradigm that has dominated computing since the desktop era.
  - The transition from tethered, high-end headsets to standalone, lightweight devices has significantly lowered the deployment barrier, enabling enterprise adoption at scale.

- ### Key Components
  - #### Hardware Platform
    - [[Head-Mounted Display]] (HMD) — the primary visual output device, ranging from opaque VR enclosures to optical see-through AR waveguides.
    - [[XR Hardware]] ecosystem: controllers, trackers, depth cameras, and inertial measurement units (IMUs).
    - [[Haptics]] — tactile feedback gloves, vests, and controllers providing kinaesthetic presence.
    - [[Hand Tracking]] — markerless optical hand pose estimation replacing physical controllers.
    - [[Eye Tracking]] — enables foveated rendering (reducing GPU load), social gaze interaction, and attention analytics.
  - #### Sensing and Localisation
    - [[Spatial Tracking]] — inside-out tracking uses on-device cameras to estimate 6-DoF headset pose without external infrastructure.
    - [[Simultaneous Localisation and Mapping]] (SLAM) — builds and updates a map of the environment while tracking device position within it; foundational to [[Augmented Reality]] and [[Mixed Reality]].
    - Depth sensing (structured light, time-of-flight, stereo) enables mesh reconstruction of physical environments.
  - #### Rendering and Compute
    - [[Real-Time Rendering]] at high frame rates (72–120 Hz) is essential to prevent motion sickness (vestibulo-ocular conflict).
    - Foveated rendering — rendering high resolution only in the gaze direction detected via [[Eye Tracking]] — reduces GPU cost.
    - [[Edge Computing]] and cloud render-streaming offload heavy compute from constrained headset hardware.
  - #### Software and Standards
    - [[OpenXR]] (Khronos Group) — a royalty-free, cross-vendor API enabling a single codebase to run across headsets from multiple manufacturers.
    - [[WebXR Device API]] (W3C) — exposes XR device capabilities to web browsers, enabling zero-install XR experiences.
    - Game engines ([[Unity]], [[Unreal Engine]]) serve as primary development environments for XR content.
  - #### Modality
    - [[Virtual Reality]] — fully immersive; physical environment replaced entirely.
    - [[Augmented Reality]] — digital overlays composited on live camera feed or optical see-through view.
    - [[Mixed Reality]] — digital content spatially anchored to and occluded by real-world geometry.
    - [[WebXR]] — browser-based XR delivery without native installation.

- ### Applications and Use Cases
  - #### Enterprise and Industrial
    - Maintenance and repair training: technicians rehearse complex procedures on [[Digital Twin]] representations of equipment, reducing errors and downtime.
    - Remote expert assistance: field workers stream their field of view to remote specialists who overlay annotations via [[Augmented Reality]].
    - Architectural and design review: spatial walkthroughs of building information models (BIM) before construction.
    - Manufacturing assembly guidance: step-by-step AR instructions projected onto physical workpieces.
  - #### Healthcare
    - Surgical simulation and planning using patient-specific [[Digital Twin]] anatomy.
    - Phobia and PTSD treatment through controlled exposure in [[Virtual Reality]].
    - Pain management — VR distraction therapy during wound care and chemotherapy.
    - Medical education: anatomy training in immersive 3D rather than cadaveric dissection alone.
  - #### Education and Training
    - Vocational training for hazardous environments (mining, aviation, nuclear) without physical risk.
    - Language immersion through contextual [[Virtual Reality]] environments.
    - Collaborative virtual classrooms enabling [[Remote Collaboration]] across geographies.
  - #### Consumer and Entertainment
    - Immersive gaming and interactive narrative experiences in [[Virtual Reality]].
    - Live events (concerts, sports) with spatial presence.
    - Social platforms building towards the [[Metaverse]] vision of persistent, shared XR spaces.
  - #### Defence and Public Safety
    - Mission rehearsal and combined-arms simulation.
    - Situational awareness overlays for first responders via [[Augmented Reality]] headsets.

- ### Relationships
  - hasPart:: [[Virtual Reality]]
  - hasPart:: [[Augmented Reality]]
  - hasPart:: [[Mixed Reality]]
  - hasPart:: [[WebXR]]
  - requires:: [[XR Hardware]]
  - requires:: [[Spatial Tracking]]
  - requires:: [[Real-Time Rendering]]
  - uses:: [[Haptics]]
  - uses:: [[Hand Tracking]]
  - uses:: [[Eye Tracking]]
  - uses:: [[Simultaneous Localisation and Mapping]]
  - enables:: [[Immersive Experience]]
  - enables:: [[Digital Twin]]
  - enables:: [[Remote Collaboration]]
  - enables:: [[Spatial Audio]]
  - standardizedBy:: [[OpenXR]]
  - standardizedBy:: [[WebXR Device API]]
  - contrastsWith:: [[Two-Dimensional Interface]]
  - bridgesTo:: [[Metaverse]]
  - bridgesTo:: [[Computer Vision]]
  - bridgesTo:: [[Machine Learning]]
  - relatedTo:: [[Human-Computer Interaction]]
  - relatedTo:: [[Presence]]
  - relatedTo:: [[Embodied Cognition]]
  - relatedTo:: [[Edge Computing]]
  - relatedTo:: [[Spatial Computing]]

- ### Standards and Governance
  - **Khronos Group [[OpenXR]]** — the primary cross-vendor API standard. Ratified 2019; adopted by Meta, Microsoft, Valve, Sony, HTC, and others. Separates application code from vendor-specific runtimes, ending the era of per-headset SDK fragmentation.
  - **W3C [[WebXR Device API]]** — standardises access to XR hardware from web browsers (Chrome, Firefox Reality, Samsung Internet). Covers session lifecycle, reference spaces, input sources, and hit-testing for AR.
  - **IEEE 2048 (Virtual Reality and Augmented Reality)** — a working group addressing terminology, latency, tracking accuracy, and interoperability testing methodologies.
  - **ISO/IEC JTC1 SC24** — computer graphics, image processing, and environmental data representation; underpins geometry and scene graph standards relevant to XR.
  - **GSMA XR Traffic** — mobile network operator guidelines for streaming XR traffic (latency budgets, uplink throughput requirements for cloud render-streaming).
  - Platform governance: Meta (Quest platform), Apple (visionOS), Microsoft (HoloLens / Windows Mixed Reality), and Google (ARCore) each maintain proprietary layers above the [[OpenXR]] baseline, creating partial fragmentation at the feature layer.

- ### Challenges and Limitations
  - **Latency** — motion-to-photon latency must remain below ~20 ms to prevent motion sickness; this constrains wireless streaming fidelity.
  - **Field of view** — current HMDs offer 90°–120° FoV vs. human binocular ~200°, breaking peripheral immersion.
  - **Form factor** — headset weight and thermal dissipation limit comfortable wear to sub-hour sessions for many users.
  - **Content fragmentation** — despite [[OpenXR]], feature-layer extensions remain vendor-specific; [[Spatial Audio]], eye-tracked foveated rendering, and hand-tracking APIs diverge across platforms.
  - **Privacy** — inside-out tracking cameras and [[Eye Tracking]] generate dense behavioural biometric data; regulatory frameworks (GDPR, CCPA) are still adapting.
  - **Accessibility** — vestibulo-ocular conflicts, inter-pupillary distance ranges, and controller affordances exclude users with certain disabilities or conditions.

- ### Provenance
  - sources:: Milgram & Kishino (1994) Reality-Virtuality Continuum; Khronos OpenXR 1.x specification; W3C WebXR Device API W3C Recommendation; IEEE 2048 Working Group; industry analyst reports (IDC, Gartner) on XR adoption
  - updated:: 2026-06-13

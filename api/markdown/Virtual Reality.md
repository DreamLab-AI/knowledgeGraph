public:: true
alias:: VirtualReality

# Virtual Reality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09aecfe5ea55867f769fb47aaa241d677cf3cc381430ea68253ebe79afff401d",
  "@type": "Page",
  "vc:slug": "virtual-reality",
  "title": "Virtual Reality",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9027"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Reality"
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
  "@id": "urn:ngm:class:virtual-reality",
  "@type": "Class",
  "label": "Virtual Reality",
  "definition": "Virtual Reality (VR) is a fully immersive, computer-generated simulation technology that replaces the user's physical environment with an interactive three-dimensional world, experienced through head-mounted displays that deliver stereoscopic rendering, spatial audio, and six-degrees-of-freedom motion tracking. VR systems generate a sense of presence by maintaining sub-20 ms motion-to-photon latency, high-refresh-rate displays, and positional tracking of the user's head and hands. As a foundational modality within Extended Reality (XR), VR is architecturally distinguished from Augmented Reality by occluding the real world entirely rather than overlaying digital content upon it. Applications span entertainment, professional training, tele-presence collaboration, clinical therapy, and spatial computing platforms.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:extended-reality-xr",
      "label": "Extended Reality (XR)"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:immersive-virtual-environment",
      "label": "Immersive Virtual Environment"
    },
    {
      "@id": "urn:ngm:class:vr",
      "label": "VR"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      },
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:extended-reality-xr",
        "label": "Extended Reality (XR)"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      },
      {
        "@id": "urn:ngm:class:six-degrees-of-freedom",
        "label": "Six Degrees of Freedom"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:3-d-model",
        "label": "3D Model"
      },
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-collaboration",
        "label": "Immersive Collaboration"
      },
      {
        "@id": "urn:ngm:class:virtual-training",
        "label": "Virtual Training Simulation"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Presence and Telepresence"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:ieee-vr",
        "label": "IEEE VR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-reality:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09aecfe5ea55867f769fb47aaa241d677cf3cc381430ea68253ebe79afff401d"
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
  - Virtual Reality (VR) is a fully immersive, computer-generated simulation technology that replaces the user's physical environment with an interactive three-dimensional world. It is the most complete form of [[Extended Reality (XR)]], distinguished from [[Augmented Reality]] and [[Mixed Reality]] by occluding the physical world entirely. Experienced through a [[Head-Mounted Display]] delivering stereoscopic imagery, [[Spatial Audio]], and tracked hand and body input, VR generates a sense of *presence* — the perceptual conviction of actually being inside the simulated environment. The technology underpins applications ranging from interactive entertainment and [[Virtual Training Simulation]] to immersive [[Immersive Collaboration]] and clinical therapy.

- ### Overview
  - VR emerged from military flight simulators and Ivan Sutherland's 1968 "Sword of Damocles" prototype, reaching commercial viability in the 2010s with the Oculus Rift and maturing into stand-alone, inside-out-tracked headsets by the early 2020s.
  - The defining perceptual criterion is **presence**: the user's brain accepts the simulated world as real, which requires low-latency rendering, accurate tracking, and coherent multisensory feedback.
  - Modern consumer platforms (Meta Quest series, PlayStation VR2, Apple Vision Pro) embed all compute inside the headset, removing the requirement for an attached PC.
  - Enterprise adoption accelerated for training, design review, and remote collaboration, where VR reduces physical risk and travel costs.
  - The technology sits at the intersection of [[Computer Graphics]], [[Human-Computer Interaction]], cognitive psychology, and [[Spatial Computing]].

- ### Key Components
  - **Head-Mounted Display (HMD)**
    - Delivers two offset images (one per eye) to create stereoscopic [[3D Model]] depth cues via micro-OLED, LCD, or pancake-lens optics.
    - Refresh rates of 90–120 Hz and sub-20 ms motion-to-photon latency are minimum thresholds for comfortable use. See [[Real-Time Rendering]].
  - **[[Motion Tracking]]**
    - Inside-out tracking uses onboard cameras to compute headset pose via SLAM without external beacons.
    - [[Six Degrees of Freedom]] (6DoF) — three translational axes and three rotational — is required for natural locomotion and presence.
    - Hand tracking and controller tracking extend the input surface to natural gestures.
  - **[[Spatial Audio]]**
    - Head-related transfer functions (HRTFs) spatialise sound to match visual geometry, reinforcing the sense of environment.
    - Acoustic room modelling and occlusion simulation contribute to realism.
  - **[[Foveated Rendering]]**
    - [[Eye Tracking]] identifies the user's gaze point; full resolution is rendered only in that foveal region, reducing GPU load by up to 50%.
    - Enables photorealistic peripheral rendering without proportional compute cost.
  - **[[Haptic Feedback]]**
    - Vibrotactile controllers, gloves, and full-body suits deliver tactile sensations aligned with virtual collisions and textures.
    - Haptics significantly increase training transfer and emotional engagement.
  - **[[Physics Simulation]]**
    - Rigid-body, soft-body, and fluid dynamics engines provide physical plausibility for object interactions, collisions, and environmental effects.
    - Real-time physics must stay within per-frame budgets without disrupting rendering cadence.
  - **Rendering Engines and Runtime**
    - [[Game Engine]] platforms (Unreal Engine, Unity) provide scene management, shader pipelines, and plugin ecosystems for VR content creation.
    - [[OpenXR]] is the cross-vendor API standard that abstracts hardware differences for developers.

- ### Applications and Use Cases
  - **Entertainment and Gaming**
    - Room-scale and full-locomotion games exploit embodiment and agency in ways impossible on flat screens.
    - Social VR platforms create persistent shared spaces for avatar-mediated interaction.
  - **Professional Training and Simulation**
    - [[Virtual Training Simulation]] for surgery, aviation, military, and emergency response delivers repeated high-fidelity rehearsal without physical risk.
    - Skills transfer measurably to real-world performance; failure modes can be practised safely.
  - **[[Immersive Collaboration]]**
    - Distributed teams meet as avatars in shared virtual workspaces, manipulating 3D assets and spatial whiteboards.
    - VR collaboration platforms address the absence of spatial and gestural cues in video conferencing.
  - **Architecture and Design**
    - Architects and product designers walk through 1:1 scale models before construction or manufacture, enabling ergonomic and aesthetic decisions impossible in CAD viewports.
    - Integration with [[Digital Twin]] streams allows live building data to be reviewed in context.
  - **Clinical Therapy**
    - Exposure therapy for phobias, PTSD, and anxiety disorders uses VR to present controlled stimuli in a safe context.
    - Chronic pain management and motor rehabilitation are active clinical research areas.
  - **Education**
    - Embodied learning in historical environments, molecular biology, and astronomy increases engagement and retention compared to video.
  - **Remote Presence and Telepresence**
    - [[Presence and Telepresence]] research shows that high-quality VR links can convey social cues more effectively than video for complex collaborative tasks.

- ### Relationships
  - partOf:: [[Extended Reality (XR)]]
  - partOf:: [[Metaverse]]
  - hasPart:: [[Head-Mounted Display]]
  - hasPart:: [[Motion Tracking]]
  - hasPart:: [[Spatial Audio]]
  - hasPart:: [[Haptic Feedback]]
  - hasPart:: [[Foveated Rendering]]
  - requires:: [[Real-Time Rendering]]
  - requires:: [[Physics Simulation]]
  - requires:: [[Six Degrees of Freedom]]
  - uses:: [[Game Engine]]
  - uses:: [[3D Model]]
  - uses:: [[OpenXR]]
  - uses:: [[Eye Tracking]]
  - enables:: [[Immersive Collaboration]]
  - enables:: [[Virtual Training Simulation]]
  - enables:: [[Spatial Computing]]
  - contrastsWith:: [[Augmented Reality]]
  - contrastsWith:: [[Mixed Reality]]
  - relatedTo:: [[Human-Computer Interaction]]
  - relatedTo:: [[Computer Graphics]]
  - relatedTo:: [[Presence and Telepresence]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[IEEE VR]]
  - bridges-to:: [[Neural Rendering]]
  - bridges-to:: [[Digital Twin]]

- ### Standards and Context
  - **[[OpenXR]]** (Khronos Group, ratified 2019; v1.1 active) — cross-platform API unifying device abstraction for VR and AR runtimes. Adopted by Meta, Microsoft, Valve, and Sony.
  - **WebXR Device API** (W3C) — browser-native access to XR hardware, enabling zero-install immersive web experiences without app-store distribution.
  - **MPEG-I (ISO/IEC 23090)** — immersive video coding standards including 360-video (Part 2) and volumetric video (Part 5) for VR content delivery over networks.
  - **IEEE VR** — flagship academic conference and standards forum for VR research, benchmarking, and best-practice dissemination.
  - **ISO/IEC JTC 1/SC 24** — standardises computer graphics, image processing, and VR environment representations.
  - **VESA DisplayHDR** — display certification relevant to HMD visual quality benchmarks.
  - Regulatory considerations include health and safety guidelines for extended use, cybersickness mitigation, privacy rules for biometric gaze data, and age-gating for social VR platforms.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualReality
  - owl-role:: Concept

- ### Provenance
  - sources:: Khronos Group OpenXR Specification; W3C WebXR Device API; IEEE VR Conference proceedings; ISO/IEC JTC 1/SC 24 documentation; SIGGRAPH research corpus
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z

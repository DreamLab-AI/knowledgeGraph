public:: true
elevatedFrom:: [[Spatial Computing]]
alias:: SpatialComputing

# Spatial Computing Paradigm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:692be20334215e671bdeed4f1c746b0689204f09de9082ba5d5e180ed74eb4cb",
  "@type": "Page",
  "vc:slug": "spatial-computing-paradigm",
  "title": "Spatial Computing Paradigm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9146"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Computing"
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
  "@id": "urn:ngm:class:spatial-computing-paradigm-paradigm",
  "@type": "Class",
  "label": "Spatial Computing Paradigm",
  "definition": "The Spatial Computing Paradigm is a computing model in which digital information is spatially anchored to, overlaid upon, or blended with the physical world through continuous environmental sensing, three-dimensional scene understanding, and multimodal human-computer interaction. It unifies augmented reality, virtual reality, and mixed reality under a shared architectural concern: maintaining persistent, geometrically consistent digital layers that track real-world coordinates across sessions, devices, and users. Core enabling technologies include simultaneous localisation and mapping (SLAM), depth sensing, object recognition, and spatial anchoring. The paradigm underpins transformative applications across manufacturing, healthcare, education, retail, and collaborative design by dissolving the boundary between physical and digital information spaces.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "quality": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    },
    {
      "@id": "urn:ngm:class:immersive-computing",
      "label": "Immersive Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:spatial-anchoring", "label": "Spatial Anchoring"},
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:openxr", "label": "OpenXR"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:scene-graph", "label": "Scene Graph"},
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:khronos-group", "label": "Khronos Group"},
      {"@id": "urn:ngm:class:ieee", "label": "IEEE"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:desktop-computing-paradigm", "label": "Desktop Computing Paradigm"},
      {"@id": "urn:ngm:class:mobile-computing", "label": "Mobile Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computing-paradigm", "label": "Computing Paradigm"},
      {"@id": "urn:ngm:class:ar-cloud", "label": "AR Cloud"},
      {"@id": "urn:ngm:class:spatial-web", "label": "Spatial Web"},
      {"@id": "urn:ngm:class:holographic-display", "label": "Holographic Display"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-computing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:692be20334215e671bdeed4f1c746b0689204f09de9082ba5d5e180ed74eb4cb"
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
  - The Spatial Computing Paradigm is a computing model in which digital information is spatially anchored to, overlaid upon, or blended with the physical world through continuous environmental sensing, three-dimensional scene understanding, and multimodal interaction. It unifies [[Augmented Reality]], [[Virtual Reality]], and [[Mixed Reality]] under a shared concern: maintaining persistent, geometrically consistent digital layers that track real-world coordinates across sessions, devices, and users. Core enabling technologies include [[SLAM]] (simultaneous localisation and mapping), [[Depth Sensing]], [[Computer Vision]], and [[Spatial Anchoring]]. The paradigm connects the physical and digital realms in a way that fundamentally differs from both [[Desktop Computing Paradigm]] and [[Mobile Computing]], positioning spatial context as the primary organising principle of interaction.

- ### Overview
  - Spatial computing treats physical space as the primary interface. Rather than requiring users to attend to a flat screen, it embeds responsive digital information within the three-dimensional environment a person already inhabits.
  - The term was popularised by Simon Greenwold (2003) but the underlying aspiration — Weiser's "calm technology" and Sutherland's "ultimate display" — is decades older.
  - The paradigm is distinguished from prior immersive technologies by its insistence on *persistent world-locked content*: digital objects remain in place when a device is removed, re-opened, or shared with another user.
  - Hardware evolution has been a gating factor. Early headsets (Google Glass, HoloLens 1) demonstrated the concept but suffered from limited field of view, thermal constraints, and processing bottlenecks. Apple Vision Pro, Meta Quest 3, and Microsoft HoloLens 2 represent a maturing hardware generation.
  - The maturity rating of *emerging* reflects widespread commercial piloting against limited at-scale consumer deployment as of 2026.
  - Architecturally, spatial computing systems consist of three interacting layers:
    - **Perception layer** — sensors (RGB cameras, [[Depth Sensing]] LiDAR/time-of-flight, IMU, [[Inertial Measurement Unit]]) acquire raw environmental data.
    - **Understanding layer** — [[SLAM]], [[Computer Vision]], and [[Scene Graph]] algorithms build and maintain a geometric and semantic model of the environment.
    - **Presentation layer** — rendering engines display spatially registered content (holographic, video see-through, or fully immersive) via [[Holographic Display]], LCD passthrough, or projection.

- ### Key Components
  - **[[SLAM]] (Simultaneous Localisation and Mapping)**
    - Tracks the device's six-degree-of-freedom pose while building a [[Point Cloud]] or mesh of the environment.
    - Visual-inertial odometry fuses camera frames with [[Inertial Measurement Unit]] data for low-latency tracking.
    - Variants: monocular, stereo, RGB-D, and LiDAR-based SLAM pipelines.
  - **[[Depth Sensing]]**
    - Time-of-flight (ToF) and structured-light sensors generate per-pixel depth maps.
    - Enables occlusion handling (virtual objects hidden behind real surfaces) and physical collision simulation.
  - **[[Spatial Anchoring]]**
    - Coordinate frames persisted across sessions and devices, often via cloud services (Azure Spatial Anchors, ARCore Cloud Anchors).
    - Enables multi-user shared experiences and long-lived digital installations.
  - **[[Sensor Fusion]]**
    - Kalman filtering and deep-learning fusion architectures combine camera, IMU, GPS, and ultrasound to reduce positional drift.
  - **[[Computer Vision]]**
    - Object detection, plane detection, hand-tracking, and eye-tracking feed both interaction and content-placement pipelines.
  - **[[Scene Graph]]**
    - Hierarchical, node-based data structure representing the spatial relationships between real and virtual objects; updated in real time.
  - **[[Spatial Audio]]**
    - Head-related transfer function (HRTF) rendering places sound sources at world-locked positions, reinforcing spatial presence.
  - **[[OpenXR]]**
    - Khronos Group open standard defining a cross-vendor API for spatial computing runtimes; decouples application code from device-specific SDKs.
  - **[[AR Cloud]]**
    - Shared, persistent cloud-hosted spatial map enabling cross-device, cross-session world-locked content; sometimes called the "spatial internet."
  - **[[Edge Computing]]**
    - Offloads heavy SLAM and AI inference to nearby edge nodes, reducing device thermal load and latency for untethered headsets.

- ### Applications and Use Cases
  - **Manufacturing and Industry 4.0**
    - Heads-up assembly guidance overlays step-by-step instructions on physical components, reducing error rates and training time.
    - Remote expert telepresence with spatial annotation enables field engineers to receive real-time holographic guidance.
    - Integration with [[Digital Twin]] systems allows real-time comparison of physical assembly state against virtual design intent.
  - **Healthcare**
    - Anatomical overlay during surgical planning and intraoperative navigation anchors imaging data to patient anatomy.
    - Rehabilitation applications use tracked spatial interaction as measurable therapy for motor recovery.
    - Medical training on spatial phantom models reduces reliance on cadavers.
  - **Education**
    - Interactive 3D molecular models, historical site reconstructions, and procedural training simulations replace static diagrams.
    - Shared spatial classrooms enable geographically distributed students to manipulate the same virtual objects.
  - **Retail and Commerce**
    - Virtual try-on for eyewear, furniture placement preview (IKEA Place), and spatially located product information.
    - In-store navigation overlays guide shoppers to specific shelf locations.
  - **Architecture and Construction**
    - Building information model (BIM) overlays on construction sites allow contractors to verify structural placement against design.
    - Client walkthroughs in partially built spaces using spatial models reduce change-order frequency.
  - **Navigation and Wayfinding**
    - Urban AR navigation overlays turn-by-turn arrows on real streets (Google Live View, Apple Maps AR).
    - Indoor positioning using [[Spatial Anchoring]] and [[Sensor Fusion]] where GPS is unavailable.
  - **Collaborative Design**
    - Co-located and remote teams manipulate shared 3D models in spatial environments; annotations persist as world-locked notes.
    - Bridges to [[Metaverse]] platforms for persistent, identity-linked collaborative workspaces.
  - **Defence and Public Safety**
    - Tactical overlays provide soldiers and first responders with situational-awareness data anchored to physical terrain.
  - **Consumer Entertainment**
    - Location-based AR games (Pokémon GO, Niantic Lightship ecosystem) blend game state with real-world geography.
    - Fully immersive spatial experiences via [[Virtual Reality]] headsets for entertainment and social presence.

- ### Relationships
  - hasPart:: [[SLAM]]
  - hasPart:: [[Augmented Reality]]
  - hasPart:: [[Virtual Reality]]
  - hasPart:: [[Mixed Reality]]
  - hasPart:: [[Spatial Anchoring]]
  - hasPart:: [[Depth Sensing]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Computer Vision]]
  - requires:: [[Inertial Measurement Unit]]
  - requires:: [[Edge Computing]]
  - enables:: [[Autonomous Navigation]]
  - enables:: [[Digital Twin]]
  - enables:: [[Extended Reality]]
  - enables:: [[Human-Computer Interaction]]
  - uses:: [[OpenXR]]
  - uses:: [[Point Cloud]]
  - uses:: [[Scene Graph]]
  - uses:: [[Spatial Audio]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[IEEE]]
  - contrastsWith:: [[Desktop Computing Paradigm]]
  - contrastsWith:: [[Mobile Computing]]
  - bridges-to:: [[Artificial Intelligence]]
  - bridges-to:: [[Internet of Things]]
  - bridges-to:: [[Metaverse]]
  - relatedTo:: [[AR Cloud]]
  - relatedTo:: [[Spatial Web]]
  - relatedTo:: [[Holographic Display]]

- ### Standards and Context
  - **[[OpenXR]]** (Khronos Group) — cross-vendor runtime API covering session management, input, rendering, and extension mechanisms for spatial computing applications. Adopted by Meta, Microsoft, Valve, and others.
  - **IEEE P2048** — standards working group addressing terminology and safety for VR/AR technologies.
  - **WebXR Device API** (W3C) — browser-level API bringing spatial computing experiences to the web without native app installation; builds on OpenXR concepts.
  - **IETF Spatial Web Working Group** — emerging standardisation effort for the [[Spatial Web]] addressing coordinate systems, identity, and content addressing for world-locked digital content.
  - **ARKit** (Apple), **ARCore** (Google), **OpenVINO** (Intel), and **ONNX Runtime** are platform-specific or model-serving runtimes that sit below [[OpenXR]] and above hardware drivers.
  - Privacy regulation increasingly scrutinises spatial computing: GDPR and emerging frameworks govern spatial scan data, biometric gaze tracking, and persistent location histories — raising governance questions closely related to [[Internet of Things]] data stewardship.
  - The relationship between spatial computing and [[Artificial Intelligence]] deepens as neural radiance fields (NeRF), Gaussian splatting, and foundation models for scene understanding are integrated into real-time SLAM pipelines.

- ### Challenges and Open Problems
  - **Positional accuracy** — achieving sub-centimetre world-locked accuracy in dynamic environments without persistent infrastructure remains unsolved at scale.
  - **Privacy** — continuous environmental scanning produces detailed maps of private spaces; consent frameworks and data minimisation are architecturally required, not optional.
  - **Interoperability** — coordinate system proliferation across ARKit, ARCore, HoloLens, and OpenXR creates fragmentation; the [[AR Cloud]] vision requires universal spatial addressing.
  - **Compute and thermal constraints** — real-time SLAM plus rendering plus AI inference approaches the thermal limits of wearable form factors; [[Edge Computing]] offload is a mitigation but introduces latency.
  - **Accessibility** — spatial interfaces based on hand-tracking, gaze, and voice may exclude users with motor or visual impairments; universal design principles are nascent in this space.
  - **Content authoring** — creating world-locked spatial content requires 3D expertise beyond the reach of most web and mobile developers; tooling is immature.
  - **Network dependency** — persistent shared spatial anchors and [[AR Cloud]] features require reliable low-latency connectivity, limiting use in bandwidth-constrained environments.

- ### Provenance
  - sources:: OpenXR Specification (Khronos Group); Simon Greenwold, "Spatial Computing" (MIT Media Lab, 2003); Microsoft HoloLens documentation; Apple Vision Pro developer documentation; W3C WebXR Device API specification
  - updated:: 2026-06-13

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
  "definition": "A head-mounted display (HMD) is a wearable visual output device worn on the head that positions one or more display panels or optical projectors in front of the user's eyes, delivering immersive visual content for virtual reality, augmented reality, or mixed reality experiences. HMDs incorporate optics to focus near-focal-plane displays at a comfortable viewing distance, tracking systems to measure head orientation and position, and increasingly passthrough cameras for environment sensing. The design space spans sealed VR devices that occlude the real world, optical see-through AR waveguide systems, and video passthrough mixed reality headsets.",
  "domain": "hardware",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:display-hardware", "label": "Display Hardware"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:xr-headset", "label": "XR Headset"},
      {"@id": "urn:ngm:class:extended-reality-xr", "label": "Extended Reality (XR)"},
      {"@id": "urn:ngm:class:display-technology", "label": "Display Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"},
      {"@id": "urn:ngm:class:foveated-rendering", "label": "Foveated Rendering"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Head-Mounted Display]] (HMD) is a wearable device that positions display panels in front of the user's eyes to deliver [[Virtual Reality]], [[Augmented Reality]], or [[Mixed Reality]] experiences, incorporating head-orientation tracking, optical systems, and increasingly [[Eye Tracking]] for [[Foveated Rendering]] to optimise the compute budget by rendering only the gaze region at full resolution.

- ### Relationships
  - [[Head-Mounted Display]] is a specialisation of [[Display Hardware]] worn on the body. It is the primary hardware platform for [[Extended Reality (XR)]] and the physical instantiation referred to by the broader [[XR Headset]] category. HMDs enable [[Virtual Reality]] by occluding the real world, [[Augmented Reality]] via optical see-through waveguides, and [[Mixed Reality]] through high-quality video passthrough with scene understanding. [[Eye Tracking]] sensors feed into [[Foveated Rendering]] pipelines that concentrate GPU resources where the user is actually looking. [[Haptic Feedback]] peripherals (controllers, gloves) complement the visual output.

- ### Content
  - The head-mounted display concept was first realised by Ivan Sutherland's "Sword of Damocles" in 1968 — a room-sized computer suspension system that rendered simple wireframe graphics — and was refined through military flight simulators and research laboratories during the 1970s–80s. Consumer interest peaked briefly in the early 1990s with products like the Nintendo Virtual Boy and Virtuality arcade systems, but poor resolution, high latency, and prohibitive cost suppressed the market for two decades. The modern HMD era began with the Oculus Rift DK1 crowdfunding campaign in 2012, which demonstrated that consumer-grade HMDs were achievable with mobile display and MEMS gyroscope components.

  - HMD design requires careful engineering across optical, mechanical, and computational domains simultaneously. The optical system must create a wide field of view — typically 90-120 degrees horizontal — from a near-focal-plane display, requiring pancake lenses or diffractive waveguides that introduce geometric distortion and chromatic aberration that must be corrected in software. Inside-out tracking systems use cameras to build a map of the environment and track the headset's position and orientation within it (SLAM), eliminating the need for external base stations. Displays demand high pixel density (>30 PPD), high refresh rates (>90 Hz), and low persistence (the fraction of time each pixel is illuminated) to minimise motion sickness.

  - The significance of HMDs extends across gaming, professional training simulation, remote collaboration, medical imaging, architectural visualisation, and manufacturing assistance. Industrial AR applications where workers overlay digital information on physical equipment have demonstrated productivity gains of 25-40% in assembly and maintenance tasks. Medical training in VR provides safe, repeatable practice for surgical and emergency procedures without risk to patients.

  - Between 2024 and 2025 the market has been defined by the Meta Quest 3 and Apple Vision Pro, which represent the mass-market standalone and premium spatial computing form factors respectively. Micro-OLED displays enable thinner optical stacks for waveguide-based AR glasses; passthrough video quality has improved sufficiently that dedicated VR displays are becoming optional. Neuromorphic event cameras for ultra-low-latency tracking, and AI-generated foveated content that adapts to gaze in real time, represent the active research frontiers for the next generation of devices.
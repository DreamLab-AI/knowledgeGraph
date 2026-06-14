public:: true

# Spatial Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:spatial-computing",
  "@type": "Page",
  "title": "Spatial Computing",
  "vc:slug": "spatial-computing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spatial-computing",
  "@type": "Class",
  "label": "Spatial Computing",
  "definition": "Spatial computing is a computing paradigm in which digital information, computation, and interaction are anchored to and organised within three-dimensional physical or virtual space, enabling humans and machines to engage with data as if it inhabits the real world. It integrates continuous spatial sensing — through depth cameras, LiDAR, inertial measurement units, and computer vision — with real-time 3D rendering and multi-modal input (gaze, gesture, voice, touch) to create systems that perceive, reason about, and respond to the user's physical environment. The paradigm subsumes augmented reality, mixed reality, virtual reality, and autonomous spatial agents, unifying them under a common architectural requirement: the continuous, low-latency alignment of digital representations with physical geometry.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [],
  "sameAs": [
    {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing Paradigm"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:6-do-f-tracking", "label": "6DoF Tracking"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:low-latency", "label": "Low Latency"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-computing", "label": "Immersive Computing"},
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:scene-understanding", "label": "Scene Understanding"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"},
      {"@id": "urn:ngm:class:head-mounted-display", "label": "Head-Mounted Display"},
      {"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:geospatial-technology", "label": "Geospatial Technology"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:open-xr", "label": "OpenXR"},
      {"@id": "urn:ngm:class:web-xr", "label": "WebXR"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:pervasive-computing", "label": "Pervasive Computing"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:extended-reality-xr", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:gesture-recognition", "label": "Gesture Recognition"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computing-paradigm", "label": "Computing Paradigm"}
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - [[Spatial Computing]] is a [[Computing Paradigm]] in which digital information and computation are anchored to [[Three-Dimensional Space]], enabling humans and machines to interact with data as though it inhabits and responds to the real world.
  - The paradigm integrates continuous spatial sensing — [[Depth Sensing]], [[LiDAR]], [[Sensor Fusion]], and [[Simultaneous Localisation and Mapping]] — with [[Real-Time Rendering]] and multi-modal input modalities including [[Hand Tracking]], [[Eye Tracking]], voice, and gesture to create systems that perceive and respond to physical geometry.
  - Simon Greenwold's 2003 MIT thesis defined spatial computing as "the set of techniques that allow humans and machines to interact in space," establishing the academic framing that prefigured modern [[Extended Reality]] and [[Augmented Reality]] platforms.
  - As a superset, spatial computing encompasses [[Augmented Reality]], [[Mixed Reality]], and [[Virtual Reality]], unifying them under the architectural requirement of continuous, low-latency alignment between digital representations and physical or virtual geometry.

- ### Overview
  - Spatial computing marks a transition from the two-dimensional, screen-and-pointer paradigm of classical desktop computing to an interaction model where the user's body, gaze, and physical surroundings serve as the primary interface.
  - Where [[Ambient Computing]] embeds computation invisibly into the environment and [[Pervasive Computing]] distributes computation across networked devices, spatial computing adds the layer of explicit three-dimensional geometry: the system must build and maintain a model of space and position digital content within it.
  - The paradigm places heavy demands on the entire hardware stack: [[GPU Computing]] for per-frame rendering at high frame rates, silicon with dedicated neural processing for on-device [[Computer Vision]], display optics that achieve accurate vergence and focus cues, and IMU-based tracking pipelines that must keep motion-to-photon latency below approximately 20 milliseconds to prevent perceptual discomfort.
  - The term gained mainstream currency following Apple's introduction of Apple Vision Pro (January 2024), which Apple explicitly described as "the first spatial computer," cementing the paradigm label across the industry.

- ### Key Components
  - #### Sensing and Tracking
    - [[Simultaneous Localisation and Mapping]] (SLAM) constructs a metric map of the environment from camera and IMU data while simultaneously localising the device within that map — the foundational perception primitive for all spatial computing platforms.
    - [[Depth Sensing]] — via structured light, time-of-flight, or stereo cameras — provides dense per-pixel distance measurements that enable surface reconstruction, occlusion handling, and safe physics simulation.
    - [[Sensor Fusion]] combines data from inertial measurement units, optical cameras, depth sensors, and (where available) GPS or ultrawideband beacons to produce stable, drift-corrected pose estimates at the rates required for comfortable interaction.
    - [[6DoF Tracking]] (six degrees of freedom) captures full translational and rotational motion of the head and hands, enabling users to move freely through space without motion sickness artefacts introduced by positional drift.
  - #### Rendering and Display
    - [[Real-Time Rendering]] at 60–120 frames per second is required for comfortable use; [[Head-Mounted Display]] devices with high pixel density, wide field of view, and low persistence reduce motion blur and improve visual fidelity.
    - Techniques such as foveated rendering — exploiting [[Eye Tracking]] data to render the gaze centre at full resolution while reducing resolution in the periphery — reduce [[GPU Computing]] load without perceptible quality loss.
    - Correct occlusion of virtual objects by real surfaces requires accurate depth meshes and per-pixel compositing, tasks handled by dedicated render passes in engines such as Unity and Unreal.
    - [[Display Technology]] advances — micro-OLED, microLED, and pancake lens optics — drive down device size and weight while expanding the field of view, directly shaping user adoption curves.
  - #### Interaction
    - [[Hand Tracking]] via neural network inference on fisheye camera streams eliminates the need for handheld controllers on fully featured spatial devices, enabling natural dexterous manipulation of virtual objects.
    - [[Eye Tracking]] enables gaze-directed selection, foveated rendering, and social cue communication in collaborative experiences.
    - [[Gesture Recognition]] interprets hand shapes and motion trajectories as discrete commands, bridging the gap between dexterous manipulation and high-level UI actions.
    - [[Haptic Feedback]] devices — including controller rumble, gloves with pneumatic actuators, and ultrasound-based mid-air haptics — close the sensorimotor loop by providing tactile confirmation of virtual interactions.

- ### Applications and Use Cases
  - #### Industrial and Enterprise
    - [[Digital Twin]] overlays on physical assets allow maintenance technicians to visualise internal structure, historical sensor data, and step-by-step repair procedures in situ, reducing mean time to repair and error rates.
    - Manufacturing assembly guidance layers instruction cards onto physical work surfaces, eliminating the need to consult paper manuals and reducing training time for complex multi-step procedures.
    - Field service applications deliver remote expert guidance: an on-site technician's view is streamed to a remote expert who annotates the feed with AR arrows and labels visible in the technician's [[Head-Mounted Display]].
  - #### Healthcare and Life Sciences
    - Surgical navigation overlays pre-operative imaging (CT, MRI) onto the patient during procedures, improving spatial accuracy for tumour resection, orthopaedic implant placement, and vascular surgery.
    - Medical training platforms allow students to practise anatomy, clinical examination, and procedural skills in photorealistic [[Virtual Reality]] simulations with objective performance metrics.
    - Rehabilitation applications use spatial computing to guide movement therapy, gamifying exercise protocols and providing biofeedback aligned to physical gestures.
  - #### Architecture, Engineering, and Construction
    - [[Augmented Reality]] site overlays project building information model (BIM) data at 1:1 scale onto construction sites, enabling clash detection and progress verification against design intent.
    - Design review in [[Virtual Reality]] allows stakeholders to walk through a building at full scale before construction begins, catching spatial conflicts that are invisible in two-dimensional drawings.
  - #### Consumer and Creative
    - Gaming and interactive entertainment represent the highest-volume consumer use case, with platform ecosystems anchored to [[Virtual Reality]] and [[Mixed Reality]] headsets from Meta, Sony, and Apple.
    - Spatial audio systems combined with head-tracked visual rendering create convincing environmental presence; [[Geospatial Technology]] enables outdoor AR experiences anchored to real-world coordinates.
    - Education and museum installations use spatial computing to present historical reconstructions, scientific simulations, and cultural artefacts at scales and with interactivity impossible in physical displays.

- ### Relationships
  - hasPart:: [[Augmented Reality]]
  - hasPart:: [[Virtual Reality]]
  - hasPart:: [[Mixed Reality]]
  - hasPart:: [[6DoF Tracking]]
  - hasPart:: [[Simultaneous Localisation and Mapping]]
  - requires:: [[Depth Sensing]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Real-Time Rendering]]
  - requires:: [[Low Latency]]
  - enables:: [[Immersive Computing]]
  - enables:: [[Metaverse]]
  - enables:: [[Digital Twin]]
  - enables:: [[Scene Understanding]]
  - uses:: [[Computer Vision]]
  - uses:: [[GPU Computing]]
  - uses:: [[Head-Mounted Display]]
  - uses:: [[Hand Tracking]]
  - uses:: [[Eye Tracking]]
  - uses:: [[Haptic Feedback]]
  - uses:: [[Geospatial Technology]]
  - standardizedBy:: [[OpenXR]]
  - standardizedBy:: [[WebXR]]
  - contrastsWith:: [[Pervasive Computing]]
  - bridgesTo:: [[Extended Reality]]
  - bridgesTo:: [[3D Reconstruction]]
  - bridgesTo:: [[Gesture Recognition]]

- ### Standards and Ecosystem
  - [[OpenXR]] (Khronos Group, 1.0 released 2019; 1.1 in 2024) provides a cross-vendor, royalty-free API that abstracts over device-specific runtimes, enabling a single codebase to target headsets from Meta, Microsoft, Varjo, Sony, and others. It is the primary standardisation vector reducing fragmentation in the spatial computing software stack.
  - [[WebXR]] (W3C, candidate recommendation) extends the open web platform to immersive experiences, enabling spatial applications that run in-browser without native installation, expanding the addressable audience and lowering distribution friction.
  - [[Khronos Group]] also maintains glTF (GL Transmission Format), the de facto standard for real-time 3D asset interchange across spatial computing pipelines — addressing the content interoperability gap between authoring tools and runtime environments.
  - Platform interoperability for multi-user spatial experiences remains an open problem; the Metaverse Standards Forum and IETF/W3C working groups are developing shared anchoring, identity, and avatar interchange specifications.
  - Privacy regulation — particularly the collection of biometric data (gaze, hand geometry, face geometry) inherent to spatial sensing — is an active regulatory concern in the EU (AI Act, GDPR), UK, and US state-level frameworks.

- ### Architectural Stack
  - The canonical spatial computing stack layers hardware (optics, display, compute SoC, sensors) beneath a spatial OS (spatial scene graph, anchor management, session lifecycle) that exposes runtimes to developer APIs ([[OpenXR]], [[WebXR]], ARKit, ARCore), above which application frameworks (Unity, Unreal, web-based) host end-user experiences.
  - Edge and cloud offload architectures supplement on-device compute for workloads — particularly neural radiance field reconstruction, photogrammetry, and large-model inference — that exceed wearable power budgets. [[Edge Computing]] nodes co-located with 5G base stations target sub-20 ms round-trip latencies required for comfortable tethered rendering.
  - [[Simultaneous Localisation and Mapping]] pipelines on modern devices integrate visual-inertial odometry, plane detection, mesh reconstruction, and semantic labelling within a unified scene graph maintained across sessions, enabling persistent AR anchors tied to physical locations.

- ### Provenance
  - sources:: Simon Greenwold, "Spatial Computing" (MIT thesis, 2003); Khronos Group OpenXR specification; W3C WebXR Device API; Apple Vision Pro product documentation (2024); Meta Quest platform developer documentation; academic literature on SLAM, AR/VR systems, and HCI
  - updated:: 2026-06-13

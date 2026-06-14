public:: true

# Volumetric Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab480d7de6bcc5c0d2f2147ede7107227ee10b2723054876bc8e27984e924371",
  "@type": "Page",
  "vc:slug": "volumetric-capture",
  "title": "Volumetric Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9165"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Volumetric Capture"
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
  "@id": "urn:ngm:class:volumetric-capture",
  "@type": "Class",
  "label": "Volumetric Capture",
  "definition": "Volumetric Capture is the acquisition process that records a subject or environment in three spatial dimensions over time, using arrays of cameras, depth sensors, structured-light projectors, or LiDAR to produce a fully navigable 4D (space + time) representation. The captured data — typically as dense point-cloud sequences, multi-view video, or neural radiance fields — can be rendered from any arbitrary viewpoint and replayed freely in time, enabling photorealistic holographic telepresence, immersive sports and entertainment broadcasting, and real-time digital-twin creation. It sits at the convergence of photogrammetry, computer vision, and real-time graphics pipelines, demanding tightly calibrated hardware rigs and specialised compression and streaming infrastructure.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:photogrammetry",
      "label": "Photogrammetry"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:free-viewpoint-video", "label": "Free-Viewpoint Video"},
    {"@id": "urn:ngm:class:dynamic-3d-reconstruction", "label": "Dynamic 3D Reconstruction"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:structured-light", "label": "Structured Light"},
      {"@id": "urn:ngm:class:lidar", "label": "LiDAR"},
      {"@id": "urn:ngm:class:neural-radiance-field", "label": "Neural Radiance Field"},
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:holographic-telepresence", "label": "Holographic Telepresence"},
      {"@id": "urn:ngm:class:immersive-media", "label": "Immersive Media"},
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:multi-camera-rig", "label": "Multi-Camera Rig"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:video-compression", "label": "Video Compression"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:mesh-reconstruction", "label": "Mesh Reconstruction"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:virtual-production", "label": "Virtual Production"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:360-video", "label": "360-Degree Video"},
      {"@id": "urn:ngm:class:stereoscopic-3d", "label": "Stereoscopic 3D"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:gaussian-splatting", "label": "Gaussian Splatting"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:light-field-display", "label": "Light Field Display"},
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:volumetric-capture:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab480d7de6bcc5c0d2f2147ede7107227ee10b2723054876bc8e27984e924371"
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
  - Volumetric Capture is the acquisition process by which a person, object, or environment is recorded simultaneously in three spatial dimensions over time, producing a fully navigable 4D dataset. Unlike conventional video — which encodes a fixed camera perspective — volumetric capture preserves the geometry and appearance of a scene such that any viewpoint can be synthesised at playback. The output may take the form of textured [[Mesh Reconstruction]] sequences, [[Point Cloud]] streams, or implicit neural representations such as [[Neural Radiance Field]] or [[Gaussian Splatting]], and constitutes the foundational data layer for [[Holographic Telepresence]], [[Digital Twin]], and [[Immersive Media]] experiences.

- ### Overview
  - Volumetric capture sits at the intersection of [[Photogrammetry]], [[Computer Vision]], and real-time graphics, bridging physical-world performance with fully synthetic or hybrid rendering pipelines.
  - Traditional film and broadcast capture a single linear perspective; volumetric capture instead reconstructs the underlying 3D geometry and surface appearance so viewers — or AI agents — can navigate freely in space and time.
  - The technique is increasingly critical to [[Spatial Computing]] platforms (AR/MR headsets, holographic displays) because it is the only capture method that preserves the six-degrees-of-freedom (6DoF) parallax required for convincing immersion.
  - Early commercial deployments (e.g., Microsoft Mixed Reality Capture Studios, 8i, Arcturus) used warehouse-scale camera arrays of 50–200+ RGB and depth sensors. Newer approaches use sparse rigs supplemented by learned priors, dramatically lowering capture cost.
  - The pipeline is computationally intensive: reconstruction from raw multi-view imagery to distributable volumetric assets involves [[Camera Calibration]], background matting, multi-view stereo or depth-fusion, surface reconstruction, texturing, and format-specific encoding.

- ### Key Components
  - **Capture hardware**
    - [[Multi-Camera Rig]] — synchronised RGB cameras covering full sphere or hemisphere around subject; density determines reconstruction quality.
    - [[Depth Sensing]] — time-of-flight or [[Structured Light]] sensors (e.g., Azure Kinect, Intel RealSense) provide direct geometry, reducing reliance on purely passive stereo.
    - [[LiDAR]] — used for large-scale outdoor or architectural volumetric scanning; provides high-accuracy sparse geometry fused with camera imagery.
  - **Calibration & synchronisation**
    - [[Camera Calibration]] — intrinsic and extrinsic parameters for every camera must be solved (often via charuco boards or structure-from-motion seeding) before reconstruction.
    - Hardware sync triggers ensure all cameras fire within microseconds; any frame misalignment introduces ghosting or topology errors in moving subjects.
  - **Reconstruction pipeline**
    - [[Photogrammetry]] / multi-view stereo — classical pipeline matching feature correspondences across cameras to triangulate dense 3D point positions.
    - Depth fusion — integrates sensor depth maps (e.g., via TSDF volumetric integration) into a coherent surface.
    - [[Mesh Reconstruction]] — Poisson or marching-cubes surface extraction from fused data, followed by per-frame UV unwrapping and texture baking.
    - [[Neural Radiance Field]] / [[Gaussian Splatting]] — learned scene representations that skip explicit mesh extraction, instead training a neural model that directly synthesises novel views; offers higher visual fidelity for hair, transparency, and fine detail.
  - **Compression & streaming**
    - [[Video Compression]] — texture atlases are encoded as video streams (H.265/HEVC, AV1); geometry may use mesh-sequence compression (Draco, MPEG V-DMC).
    - Adaptive bitrate delivery mirrors [[Video Streaming]] patterns; Level-of-Detail (LoD) mesh selection is driven by viewer distance and device capability.
  - **Rendering & playback**
    - [[Real-Time Rendering]] engines (Unreal Engine, Unity, WebXR runtimes) decode and composite volumetric assets into mixed scenes.
    - [[Light Field Display]] and holographic projection systems optionally consume lightfield-formatted captures for glasses-free 3D.

- ### Applications / Use Cases
  - **Holographic telepresence** — remote participants appear as life-size, photorealistic 3D holograms in [[Mixed Reality]] headsets (Microsoft Mesh, Apple Vision Pro workflows), preserving social gaze and body language cues lost in flat video.
  - **Entertainment & sports** — broadcast productions use volumetric replays (e.g., NFL immersive replays, NBA in-arena XR) to let viewers inspect moments from any angle; music videos and live performance capture create distributable holographic concerts.
  - **[[Virtual Production]]** — on-set LED volume stages compositing actors captured volumetrically against real-time CG environments, replacing green-screen post-production.
  - **[[Digital Twin]] & training** — industrial assets (machinery, architectural spaces) are volumetrically scanned to build simulation-ready digital twins for maintenance training, safety rehearsal, and design review.
  - **Healthcare & rehabilitation** — high-fidelity body scans support surgical planning, prosthetics fitting, physiotherapy assessment, and medical education.
  - **Gaming & avatar creation** — photorealistic player avatars scanned volumetrically are used in sports games (EA Sports, 2K) and social [[Extended Reality]] platforms.
  - **Cultural heritage** — museums and preservation projects (e.g., CyArk) use volumetric capture alongside [[LiDAR]] to create navigable 3D records of artefacts and endangered sites.
  - **E-commerce & retail** — volumetric product capture allows customers to inspect items in true 3D or place them in AR scenes, reducing return rates.

- ### Relationships
  - uses:: [[Depth Sensing]]
  - uses:: [[Photogrammetry]]
  - uses:: [[Point Cloud]]
  - uses:: [[Structured Light]]
  - uses:: [[LiDAR]]
  - uses:: [[Neural Radiance Field]]
  - uses:: [[Camera Calibration]]
  - enables:: [[3D Reconstruction]]
  - enables:: [[Digital Twin]]
  - enables:: [[Holographic Telepresence]]
  - enables:: [[Immersive Media]]
  - enables:: [[Extended Reality]]
  - requires:: [[Multi-Camera Rig]]
  - requires:: [[Real-Time Rendering]]
  - requires:: [[Video Compression]]
  - dependsOn:: [[Computer Vision]]
  - dependsOn:: [[Mesh Reconstruction]]
  - supports:: [[Mixed Reality]]
  - supports:: [[Spatial Computing]]
  - supports:: [[Virtual Production]]
  - contrastsWith:: [[360-Degree Video]]
  - contrastsWith:: [[Stereoscopic 3D]]
  - bridges-to:: [[Gaussian Splatting]]
  - bridges-to:: [[Machine Learning]]
  - relatedTo:: [[Light Field Display]]
  - relatedTo:: [[Motion Capture]]

- ### Technical Depth
  - **4D data volume** — a single second of high-quality volumetric capture from a 106-camera studio can produce hundreds of gigabytes of raw data before compression; the entire pipeline is constrained by storage I/O, network throughput, and codec efficiency.
  - **Neural vs. explicit representations** — explicit meshes offer deterministic playback and engine compatibility; [[Neural Radiance Field]] and [[Gaussian Splatting]] methods trade off editability and runtime cost for superior visual quality, particularly for view-dependent effects (specular highlights, subsurface scattering).
  - **Dynamic scene challenges** — unlike static [[Photogrammetry]], volumetric capture of dynamic subjects requires per-frame reconstruction or temporally coherent tracking to avoid topology discontinuities (mesh flickering); recent approaches use learned deformation fields or canonical-space representations.
  - **Edge computing integration** — to support live [[Holographic Telepresence]], reconstruction must approach real-time latency (<100 ms); this drives interest in GPU-accelerated depth fusion on edge nodes co-located with capture hardware, rather than cloud-batch processing.
  - **Interoperability formats** — the [[Spatial Computing]] ecosystem lacks a single canonical volumetric format; current contenders include USD (Universal Scene Description), glTF with mesh compression extensions, MPEG's V-PCC (Video-based Point Cloud Compression), and G-PCC standards.

- ### Standards & Context
  - **MPEG standards** — ISO/IEC 23090 series covers point-cloud compression (G-PCC, V-PCC) and immersive video (MIV — MPEG Immersive Video), directly addressing volumetric capture delivery for broadcast.
  - **OpenXR** — the Khronos Group [[OpenXR]] standard for XR runtime APIs is the primary target runtime for volumetric playback in headsets, with vendor-specific extensions for volumetric layers.
  - **USD / OpenUSD** — Pixar's Universal Scene Description, maintained by the Alliance for OpenUSD (AOUSD), is emerging as the interchange format for volumetric assets in production pipelines (Apple, NVIDIA, Adobe, Autodesk backing).
  - **WebXR & WebCodecs** — browser-based delivery of volumetric experiences depends on [[WebXR]] APIs and WebCodecs for hardware-accelerated decoding of geometry and texture streams.
  - **Industry consortia** — the XR Association, SMPTE (ST 2110 for professional media transport), and the Metaverse Standards Forum all have working groups touching volumetric capture pipeline standardisation.
  - **Privacy & consent** — high-fidelity biometric reconstruction (face, body shape, gait) raises significant GDPR and CCPA implications; regulatory guidance on biometric data captured volumetrically is actively evolving.

- ### Provenance
  - sources:: Microsoft Mixed Reality documentation; MPEG ISO/IEC 23090 series; Khronos OpenXR specification; Arcturus and 8i technical whitepapers; CyArk heritage preservation project; established computer vision and graphics literature.
  - updated:: 2026-06-13

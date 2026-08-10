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
    {
      "@id": "urn:ngm:class:free-viewpoint-video",
      "label": "Free-Viewpoint Video"
    },
    {
      "@id": "urn:ngm:class:dynamic-3d-reconstruction",
      "label": "Dynamic 3D Reconstruction"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:structured-light",
        "label": "Structured Light"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:neural-radiance-field",
        "label": "Neural Radiance Field"
      },
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:holographic-telepresence",
        "label": "Holographic Telepresence"
      },
      {
        "@id": "urn:ngm:class:immersive-media",
        "label": "Immersive Media"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:multi-camera-rig",
        "label": "Multi-Camera Rig"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:mesh-reconstruction",
        "label": "Mesh Reconstruction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:virtual-production",
        "label": "Virtual Production"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:360-video",
        "label": "360-Degree Video"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:gaussian-splatting",
        "label": "Gaussian Splatting"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:light-field-display",
        "label": "Light Field Display"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
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

- ### Current Landscape (2026)
  - The field has decisively pivoted from mesh-and-texture and NeRF toward dynamic 4D Gaussian Splatting: 4Dviews shipped native Gaussian-splat export in HOLOSYS+ in July 2025 (demoed at SIGGRAPH 2025, Vancouver), the first system to offer both mesh-and-texture and splat output from one capture workflow.
  - Production-grade research matured through 2025: Eyeline Labs' Detail Enhanced Gaussian Splatting (SIGGRAPH Asia 2025) combines HDR-aware 4DGS with a diffusion-based detail-enhancement model for multi-performer free-viewpoint video up to 4K facial close-ups, and an open-source RGB-D/RGB pipeline from HSLU/EPFL (arXiv 2512.15719, December 2025) exports to PLY, MPEG V-PCC and SPLAT with Unity/Unreal and WebXR playback.
  - Capture is being democratised: GeniusXR reports cutting rigs from Microsoft-era 300-camera, ~$8M stages down to ~28-camera setups (with smartphone capture emerging), while Clear Angle Studios' Volumetric Capture Rig (VCR) - a 40-camera genlocked half-dome used with Union VFX for relightable splat crowds - targets feature-film pipelines.
  - Standards consolidated around MPEG-I: V3C (Visual Volumetric Video Coding) plus V-PCC/G-PCC saw growing integration (DVB BlueBook S101, Feb 2024), and in September 2025 Nokia introduced a standards-based real-time volumetric communication system using MPEG Immersive Video (MIV) and V3C without green-screen studios.
  - Compression and streaming remain the frontier: proprietary codecs such as Arcturus's Accelerated Volumetric Video (AVV) and Brown University's PackUV framework (May 2026), which packs volumetric data into conventional video formats, target the persistent bandwidth and storage problem (roughly 45GB down to ~2GB per minute in cited pipelines).
  - Live and broadcast deployment arrived: Milano Cortina 2026 partners demonstrated AI-powered volumetric sports replay (March 2026), with practical use also in government training simulations, medical education and retail planning.
  - The market is valued in the ~$3.4-4.7bn range for 2025-2026 across analyst estimates, with 23-31% CAGR forecasts; key players include 4Dviews, Depthkit (Scatter), Evercoast, 8i, Arcturus Studios, Canon, Microsoft, Google and Unity.
  - Open challenges as of 2026 centre on real-time low-latency streaming of splats, temporal stability and relightability of dynamic Gaussians in production lighting, standardised interchange for radiance-field formats (still in early JPEG/MPEG discussion), and headset-side demand softness (Vision Pro paused, Quest shipments down).

- ### References
  - 1. Charisoudis, A. et al. / HSLU & EPFL (2025). A Fast Volumetric Capture and Reconstruction Pipeline for Dynamic Point Clouds and Gaussian Splats (arXiv 2512.15719). https://arxiv.org/abs/2512.15719
  - 2. Philip, J., Ma, L., Debevec, P. et al. / Eyeline Labs (2025). Detail Enhanced Gaussian Splatting for Large-Scale Volumetric Capture (SIGGRAPH Asia 2025). https://eyeline-labs.github.io/DEGS/
  - 3. Digital Production (2025). Dual Export: 4Dviews Adds Gaussian Splatting to HOLOSYS+. https://digitalproduction.com/2025/07/30/dual-export-4dviews-adds-gaussian-splatting-to-holosys/
  - 4. fxguide / fxpodcast (2026). Union VFX on production-ready Gaussian splat crowds (Clear Angle VCR rig). https://www.youtube.com/watch?v=Ybln1zAQDVc
  - 5. openPR (2026). United States Volumetric Video Market - Nokia MIV/V3C, Milano Cortina 2026, PackUV milestones. https://www.openpr.com/news/4551652/united-states-volumetric-video-market-set-to-reach-us-25-784-46
  - 6. Streaming Learning Center (2026). Emerging Markets for Video and Video Codecs - V-PCC/G-PCC and Arcturus AVV. https://streaminglearningcenter.com/articles/emerging-markets-for-video-and-video-codecs.html

- ### Provenance
  - sources:: Microsoft Mixed Reality documentation; MPEG ISO/IEC 23090 series; Khronos OpenXR specification; Arcturus and 8i technical whitepapers; CyArk heritage preservation project; established computer vision and graphics literature.
  - updated:: 2026-06-13

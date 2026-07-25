public:: true

# foveated rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8004815d1480121c21d0d8f1961aa152129dd1e017c5700fd2f6f795ee0737a4",
  "@type": "Page",
  "vc:slug": "foveated-rendering",
  "title": "foveated rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:foveated-rendering",
  "@type": "Class",
  "label": "Foveated Rendering",
  "definition": "Foveated rendering is a real-time graphics technique that exploits the non-uniform spatial acuity of the human visual system by rendering the region around the viewer's gaze point at full resolution whilst progressively reducing shading quality, texture resolution, and geometric detail in the peripheral visual field. Eye-tracking hardware continuously locates the foveal fixation point so that the high-quality region follows the gaze with sub-frame latency, making quality degradation imperceptible. The technique produces substantial GPU workload reductions that are critical for achieving high frame rates and thermal sustainability on power-constrained XR head-mounted displays, and is increasingly extended by neural super-resolution to reconstruct peripheral detail at low cost.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:real-time-rendering",
      "label": "Real-Time Rendering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:gaze-contingent-rendering",
      "label": "Gaze-Contingent Rendering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:gaze-estimation",
        "label": "Gaze Estimation"
      },
      {
        "@id": "urn:ngm:class:variable-rate-shading",
        "label": "Variable Rate Shading"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:super-resolution",
        "label": "Super Resolution"
      },
      {
        "@id": "urn:ngm:class:mipmap",
        "label": "Mipmap"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:display-hardware",
        "label": "Display Hardware"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-network-inference",
        "label": "Neural Network Inference"
      }
    ]
  },
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Foveated rendering is a real-time graphics optimisation technique grounded in the physiology of the [[Human Visual System]]. It renders the region around the viewer's current gaze fixation point — the foveal zone — at full quality whilst progressively reducing shading complexity, texture resolution, and geometric detail in the peripheral visual field, where spatial acuity is inherently low. Tight integration with [[Eye Tracking]] hardware ensures the high-resolution zone tracks the viewer's gaze with sub-frame latency, keeping the quality gradient perceptually transparent. The resulting reduction in GPU workload is essential for sustained high frame rates on thermally constrained [[Extended Reality]] head-mounted displays.

- ### Overview
  - The retina is not a uniform sensor: the fovea centralis, subtending roughly 2–5° of the visual field, contains the highest density of cone photoreceptors and resolves fine spatial detail. Acuity falls sharply with increasing eccentricity, declining to a small fraction of peak by 30°. Conventional real-time rendering ignores this gradient, expending equal shading effort on every pixel. Foveated rendering reclaims that redundant work.
  - A foveated rendering system continuously queries the viewer's point of regard via a low-latency [[Gaze Estimation]] pipeline and partitions the render target into concentric quality zones. Inner zones are rendered at full or near-full quality; outer zones use coarser LODs, lower-resolution render targets, or reduced shading rates that are upsampled before display. Because the viewer is always looking at the high-quality zone, the degradation in the periphery is rarely noticed.
  - The technique is particularly important for XR (virtual and mixed reality) head-mounted displays, where high angular resolution panels demand enormous pixel fill rates yet the device operates on a mobile or tethered power budget. Foveated rendering can reduce GPU pixel shading work by 50–80% depending on implementation and foveal zone size, enabling higher quality central views or higher frame rates without increasing power draw.

- ### Key Mechanisms
  - **Quality zone partitioning** — the rendered image is divided into foveal, inner-peripheral, and outer-peripheral zones, each with a configurable quality level. Zone boundaries are typically elliptical or follow the gaze direction in head-relative space.
  - **[[Variable Rate Shading]] (VRS)** — modern GPU APIs (DirectX 12 Ultimate, Vulkan) expose per-tile shading rate control. VRS allows the shading rate to be reduced in peripheral tiles without rescaling geometry, reducing fragment shader invocations whilst preserving rasterised geometry quality.
  - **[[Level of Detail]] (LOD) hierarchies** — peripheral zones can select coarser mesh LODs and lower-resolution [[Mipmap]] levels, reducing both geometry and texture bandwidth. This integrates with existing LOD systems in game engines.
  - **[[Reprojection]] and warping** — because eye-tracking data has some latency, the rendered foveal zone may be slightly misaligned by the time the frame is displayed. Asynchronous Spacewarp or Asynchronous Reprojection techniques warp the composited frame to correct for both head and gaze prediction error.
  - **[[Super-Resolution]] upsampling** — peripheral regions rendered at reduced resolution are upsampled to full panel resolution. Classical bicubic upsampling suffices for far-peripheral content; [[Neural Rendering]] approaches (neural super-resolution) yield higher quality at modest additional compute cost.
  - **Perceptual quality models** — more advanced implementations use psychophysical models of just-noticeable difference (JND) across eccentricity to set non-uniform quality budgets, ensuring the largest possible savings without visible artefacts.
  - **Predictive gaze models** — because eye movements (saccades) are ballistic and very fast, some systems use predictive models trained on saccade kinematics to pre-position the foveal zone slightly ahead of the tracked gaze, reducing the latency window during which the viewer perceives misregistration.

- ### Applications and Use Cases
  - **Virtual reality headsets** — flagship VR headsets including the Meta Quest Pro use eye-tracked foveated rendering to run higher-fidelity content within their mobile GPU power envelopes.
  - **Mixed reality and passthrough displays** — [[Spatial Computing]] platforms such as Apple Vision Pro and Microsoft HoloLens benefit from foveated rendering for holographic overlay content, where compute savings extend battery life.
  - **Cloud streaming and remote rendering** — foveated rendering can be applied at the encoder: by transmitting only the foveal region at high bit-rate and the periphery at low bit-rate, [[Cloud Rendering]] systems reduce bandwidth by factors of 3–6x without perceptible quality loss.
  - **Cinematic VR and volumetric capture** — foveated decoding of volumetric video streams reduces decoding complexity in the same manner as rendering.
  - **Surgical simulation and medical training** — high-fidelity medical simulators running on workstations use foveated rendering to sustain photorealistic central content while maintaining real-time frame rates.
  - **Driving and flight simulation** — professional simulators with large-format projection systems benefit from foveated rendering to reduce the pixel fill of wide-field-of-view imagery.
  - **Accessibility devices** — foveated rendering research informs gaze-contingent magnification interfaces for users with peripheral vision impairments.

- ### Relationships
  - requires:: [[Eye Tracking]]
  - requires:: [[Gaze Estimation]]
  - requires:: [[Variable Rate Shading]]
  - uses:: [[Level of Detail]]
  - uses:: [[Rendering Pipeline]]
  - uses:: [[Reprojection]]
  - uses:: [[Super-Resolution]]
  - uses:: [[Mipmap]]
  - enables:: [[Extended Reality]]
  - enables:: [[High-Fidelity VR]]
  - dependsOn:: [[GPU Compute]]
  - dependsOn:: [[Display Hardware]]
  - dependsOn:: [[Human Visual System]]
  - hasPart:: Foveal Region
  - hasPart:: Peripheral Region
  - hasPart:: Quality Transition Zone
  - contrastsWith:: [[Uniform Shading]]
  - contrastsWith:: [[Temporal Anti-Aliasing]]
  - relatedTo:: [[Perceptual Rendering]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[Neural Rendering]]
  - bridges-to:: [[Neural Network Inference]]
  - bridges-to:: [[Perceptual Quality Metric]]

- ### Hardware and API Ecosystem
  - **GPU vendor extensions** — Nvidia exposes VRS and foveated-rendering extensions via NVAPI and the Vulkan `VK_NV_shading_rate_image` extension. AMD provides equivalent capability via `VK_AMD_variable_shading_rate`. Both vendors expose coarse shading rate maps that foveated rendering pipelines write to before each frame.
  - **OpenXR** — the [[OpenXR]] standard (Khronos Group) includes the `XR_FB_eye_tracking_social` and `XR_EXT_eye_gaze_interaction` extensions for accessing calibrated gaze data. Platform vendors layer device-specific foveated rendering hints on top.
  - **DirectX 12 Ultimate VRS Tier 2** — Microsoft's Tier 2 VRS supports per-pixel shading rate maps, enabling fully flexible foveation patterns rather than tile-granularity shading rate reduction.
  - **Meta Presence Platform** — the Meta SDK exposes `AppSpaceWarp` and eye-tracked foveated rendering APIs for Quest Pro and subsequent headsets, abstracting gaze capture, quality zone setting, and asynchronous reprojection into a unified pipeline.
  - **Unity and Unreal Engine** — both major real-time engines have integrated foveated rendering support, abstracting vendor-specific APIs and exposing quality-zone configuration through engine-level settings.
  - **WebXR** — the `webxr-layers` and `webxr-foveation` proposals extend [[WebXR]] to expose foveated rendering hints from browser-embedded XR experiences, though full eye-tracking support remains gated on privacy permissions.

- ### Standards and Context
  - [[OpenXR]] (Khronos Group) is the primary cross-platform XR API standardising eye-tracking and foveated rendering interfaces across HMD vendors.
  - [[Vulkan]] shading rate extensions (KHR_fragment_shading_rate) provide the portable GPU API layer underpinning portable foveated rendering implementations.
  - The IEEE VR and ACM SIGGRAPH venues are the primary research publication channels for perceptual foveation models and neural foveated rendering.
  - ETSI and ISO have early-stage work on perceptual video quality metrics that intersect with foveated rendering quality assessment, particularly for streaming scenarios.
  - [[WebXR]] standardisation at the W3C Immersive Web Working Group governs browser-level foveated rendering exposure.

- ### Research Directions
  - **Neural foveated rendering** — replacing peripheral upsampling with learned super-resolution networks (e.g. DLSS-style models conditioned on gaze position) to recover high-frequency detail in peripheral regions from low-resolution inputs.
  - **Saccade prediction** — machine-learning models of oculomotor behaviour predict saccade targets to pre-render the landing zone, eliminating the visible foveal zone lag during fast eye movements.
  - **Content-adaptive foveation** — rather than purely geometric zone boundaries, content saliency maps modulate the quality budget so that unexpected peripheral motion (a salient visual event) receives higher quality to reduce the chance of missed peripheral cues.
  - **Perceptual loss functions** — end-to-end training of neural renderers with perceptual quality metrics calibrated on eccentricity-dependent sensitivity functions, rather than pixel-level reconstruction losses.
  - **Multi-focal foveated rendering** — combining foveated rendering with varifocal display systems that also adjust optical focus depth to match the vergence-accommodation distance, addressing the full set of depth cue inconsistencies in VR.

- ### Provenance
  - sources:: Nvidia VRS documentation; Khronos OpenXR specification; Meta Quest SDK; ACM SIGGRAPH foveated rendering literature; IEEE VR proceedings
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

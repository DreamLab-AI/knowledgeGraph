public:: true
alias:: Post-Processing, Post-processing

# Post Processing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdb85a8afe786a2d6c57457d73ffbbc95f5e22ffc9a838bf6da825ea21b34532",
  "@type": "Page",
  "vc:slug": "post-processing",
  "title": "Post Processing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9193"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Post Processing"
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
  "@id": "urn:ngm:class:post-processing",
  "@type": "Class",
  "label": "Post Processing",
  "definition": "Post processing is the stage in a real-time or offline rendering pipeline where image-space operations are applied to the fully rasterised or ray-traced framebuffer before it is displayed or composited. Effects—such as bloom, depth of field, motion blur, tone mapping, colour grading, screen-space ambient occlusion (SSAO), temporal anti-aliasing (TAA), and chromatic aberration—are executed as one or more full-screen shader passes that read from and write back to render targets. By operating in screen space rather than on scene geometry, post processing achieves high visual fidelity at comparatively low computational cost, and has become an indispensable component of game engines, virtual production pipelines, and XR head-mounted display rendering stacks.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bloom",
        "label": "Bloom"
      },
      {
        "@id": "urn:ngm:class:depth-of-field",
        "label": "Depth of Field"
      },
      {
        "@id": "urn:ngm:class:motion-blur",
        "label": "Motion Blur"
      },
      {
        "@id": "urn:ngm:class:tone-mapping",
        "label": "Tone Mapping"
      },
      {
        "@id": "urn:ngm:class:colour-grading",
        "label": "Colour Grading"
      },
      {
        "@id": "urn:ngm:class:anti-aliasing",
        "label": "Anti-Aliasing"
      },
      {
        "@id": "urn:ngm:class:screen-space-ambient-occlusion",
        "label": "Screen Space Ambient Occlusion"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:render-target",
        "label": "Render Target"
      },
      {
        "@id": "urn:ngm:class:framebuffer",
        "label": "Framebuffer"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:visual-fidelity",
        "label": "Visual Fidelity"
      },
      {
        "@id": "urn:ngm:class:cinematic-rendering",
        "label": "Cinematic Rendering"
      },
      {
        "@id": "urn:ngm:class:photorealism",
        "label": "Photorealism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:texture-sampling",
        "label": "Texture Sampling"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:visual-effects",
        "label": "Visual Effects"
      },
      {
        "@id": "urn:ngm:class:xr-rendering",
        "label": "XR Rendering"
      },
      {
        "@id": "urn:ngm:class:virtual-production",
        "label": "Virtual Production"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rendering-technique",
        "label": "Rendering Technique"
      },
      {
        "@id": "urn:ngm:class:g-buffer",
        "label": "G-Buffer"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:forward-rendering",
        "label": "Forward Rendering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deferred-rendering",
        "label": "Deferred Rendering"
      },
      {
        "@id": "urn:ngm:class:high-dynamic-range",
        "label": "High Dynamic Range"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      },
      {
        "@id": "urn:ngm:class:machine-learning-supersampling",
        "label": "Machine Learning Supersampling"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:image-post-processing",
      "label": "Image Post Processing"
    },
    {
      "@id": "urn:ngm:class:screen-space-effects",
      "label": "Screen Space Effects"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:post-processing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cdb85a8afe786a2d6c57457d73ffbbc95f5e22ffc9a838bf6da825ea21b34532"
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
  - Post processing refers to the collection of image-space operations applied to a fully rasterised or ray-traced [[Framebuffer]] after the primary 3D rendering pass and before the final image is presented to the display. These operations are executed as one or more full-screen [[Shader]] passes—reading from [[Render Target]] textures and writing results into successor buffers—and encompass effects such as [[Bloom]], [[Depth of Field]], [[Motion Blur]], [[Tone Mapping]], [[Colour Grading]], [[Screen Space Ambient Occlusion]], and [[Anti-Aliasing]]. By confining work to screen space rather than world geometry, the post-processing stage can dramatically improve perceived [[Visual Fidelity]] at a fraction of the cost of in-scene geometry complexity, making it a cornerstone of modern [[Rendering Pipeline]] design.

- ### Overview
  - Post processing emerged as a formal pipeline stage alongside programmable [[Shader]] hardware in the early 2000s, when GPU vendors exposed full-screen blit operations that could apply arbitrary fragment programs to a completed scene image.
  - The stage typically sits between the main scene render pass (which writes a depth, colour, and optionally normal/material [[G-Buffer]]) and the final swapchain present call.
  - In [[Deferred Rendering]] architectures the G-Buffer data is already separated by function, making it straightforward to feed material properties into screen-space occlusion or reflections passes.
  - Modern engines—such as [[Unreal Engine]], [[Unity]], and [[Godot]]—ship configurable post-processing volumes that let artists blend between effect sets depending on camera location, without requiring programmer intervention.
  - On [[XR Rendering]] head-mounted displays, post processing must meet strict latency and performance budgets; techniques such as [[Foveated Rendering]] and per-eye asymmetric effect intensities are used to stay within frame budgets while preserving perceptual quality.
  - The rise of [[Neural Rendering]] has introduced learned super-resolution and denoising as drop-in replacements for certain classical post-processing stages (e.g., [[Machine Learning Supersampling]] replacing hand-crafted [[Anti-Aliasing]]).

- ### Key Components
  - **[[Bloom]]** — simulates light scatter within a camera lens by blurring and accumulating over-exposed pixels, then additively compositing back onto the scene.
  - **[[Depth of Field]]** — selectively blurs geometry outside the camera's focus plane, mimicking optical bokeh; implemented via circle-of-confusion computations and separable Gaussian or hexagonal blur kernels.
  - **[[Motion Blur]]** — reconstructs per-pixel velocity vectors from the current and previous frame matrices to apply directional blur proportional to object or camera movement, reducing temporal aliasing.
  - **[[Tone Mapping]]** — compresses a [[High Dynamic Range]] linear light buffer to an 8-bit or 10-bit display output using operators such as Reinhard, ACES filmic, or AgX.
  - **[[Colour Grading]]** — applies a 3D look-up table (LUT) or curve-based transform to remap the final image colours for artistic or technical intent; industry workflows use OpenColorIO-compliant transforms.
  - **[[Anti-Aliasing]]** — a family of techniques (MSAA, FXAA, TAA, DLSS, FSR) that reduce sub-pixel jagged edges; temporal approaches accumulate history across frames and require a per-pixel velocity buffer.
  - **[[Screen Space Ambient Occlusion]]** — approximates contact shadows and crevice darkening by sampling the depth buffer in a hemisphere around each pixel; variants include SSAO, HBAO, and GTAO.
  - **[[Chromatic Aberration]]** — splits the RGB colour channels by a small pixel offset to simulate lens dispersion; used sparingly for cinematic or stylised looks.
  - **Vignette** — darkens image corners to focus attention on the centre, mimicking natural lens fall-off.
  - **[[Compute Shader]] passes** — modern post-processing chains leverage compute shaders (rather than fragment shaders) for better occupancy and tiled memory access patterns, especially in RDNA and Xe GPU architectures.

- ### Mechanisms
  - **Render target chaining** — each effect reads from the previous pass's output texture and writes to a ping-pong render target; the final pass writes to the swapchain back-buffer.
  - **Half-resolution passes** — expensive blurs (bloom, DoF) are applied at ½ or ¼ resolution then upsampled, saving fill-rate while preserving perceptual quality.
  - **Temporal accumulation** — TAA and DLSS maintain a history buffer reprojected using a per-pixel velocity field; this amortises noise and aliasing over multiple frames rather than resolving it in a single pass.
  - **Post-processing volumes** — spatial zones in a scene that blend between parameter sets (e.g., increasing depth of field and colour temperature when the camera enters a fog zone), allowing parameter-driven transitions without bespoke shader variants.
  - **HDR pipeline** — post processing operates in linear light space; the [[Tone Mapping]] stage is the last pass before gamma encoding, ensuring all blending operations respect physical linearity.
  - **Stacking and ordering** — the order of passes matters; bloom should precede tone mapping if it targets the HDR signal, whereas colour grading typically follows tone mapping to operate on a display-referred image.

- ### Applications
  - **Game engines** — Unreal Engine's UE5 post-process stack, Unity's Universal Render Pipeline (URP) and High Definition Render Pipeline (HDRP), and Godot 4's Vulkan renderer all ship production-ready post-processing stacks configurable through editor UIs.
  - **[[Virtual Production]]** — LED volume stages use real-time post processing (colour grading, lens effects) on in-camera visual effects (ICVFX) content rendered by high-end GPUs to match the look of the physical lens placed in front of the LED wall.
  - **[[XR Rendering]]** — VR headsets apply distortion correction, chromatic aberration correction, and reprojection (ATW/ASW) as post-processing passes before compositing to the headset display.
  - **Automotive and architecture visualisation** — photorealistic walkthroughs rely on SSAO, screen-space reflections, and HDR tone mapping to achieve near-photographic output in real time.
  - **Film and broadcast offline rendering** — while not real-time, offline compositing pipelines (Nuke, DaVinci Resolve) apply equivalent operations; many have adopted real-time GPU-accelerated post-processing for interactive grading.
  - **Simulation and training** — synthetic data pipelines for autonomous vehicles and robotics perception add post-processing (motion blur, lens distortion, noise) to synthetic renders to close the sim-to-real domain gap.
  - **[[Metaverse]] platforms** — shared virtual worlds require consistent post-processing profiles to maintain visual coherence across heterogeneous client devices and rendering backends.

- ### Relationships
  - hasPart:: [[Bloom]]
  - hasPart:: [[Depth of Field]]
  - hasPart:: [[Motion Blur]]
  - hasPart:: [[Tone Mapping]]
  - hasPart:: [[Colour Grading]]
  - hasPart:: [[Anti-Aliasing]]
  - hasPart:: [[Screen Space Ambient Occlusion]]
  - partOf:: [[Rendering Pipeline]]
  - requires:: [[Shader]]
  - requires:: [[Render Target]]
  - requires:: [[Framebuffer]]
  - requires:: [[GPU]]
  - enables:: [[Visual Fidelity]]
  - enables:: [[Cinematic Rendering]]
  - enables:: [[Photorealism]]
  - uses:: [[Rasterization]]
  - uses:: [[Texture Sampling]]
  - uses:: [[Compute Shader]]
  - supports:: [[Visual Effects]]
  - supports:: [[XR Rendering]]
  - supports:: [[Virtual Production]]
  - dependsOn:: [[Rendering Technique]]
  - dependsOn:: [[G-Buffer]]
  - contrastsWith:: [[Ray Tracing]]
  - contrastsWith:: [[Forward Rendering]]
  - relatedTo:: [[Deferred Rendering]]
  - relatedTo:: [[High Dynamic Range]]
  - bridges-to:: [[Neural Rendering]]
  - bridges-to:: [[Machine Learning Supersampling]]

- ### Standards & Context
  - **Khronos OpenXR** — defines the composition layer submission model used by XR runtimes; post-processing distortion correction is specified as part of the runtime's compositor, not the application layer.
  - **OpenColorIO (ACIO)** — industry-standard colour management library underpinning colour grading LUT pipelines in game engines and VFX tools.
  - **ACES (Academy Color Encoding System)** — the Academy/ASC standardised HDR tone-mapping and colour pipeline widely adopted in film and high-end game production.
  - **DirectX 12 / Vulkan** — low-level graphics APIs that expose the synchronisation primitives (render passes, barriers, subpasses) required to correctly chain post-processing passes without read-write hazards.
  - **DLSS 4 / FSR 4** — vendor-specific ML-based upsampling technologies (NVIDIA and AMD respectively) that are deployed as post-processing passes; both integrate with standard render target pipelines.
  - **OpenXR Multi-View** — allows a single post-processing pass to address both eye render targets simultaneously, halving driver overhead in VR applications.

- ### Provenance
  - sources:: Khronos Group OpenXR specification; ACES documentation (Academy of Motion Picture Arts and Sciences); Unreal Engine 5 documentation (Post Process Effects); Unity HDRP documentation; AMD FidelityFX documentation; NVIDIA DLSS documentation; DirectX 12 and Vulkan programming guides.
  - updated:: 2026-06-13

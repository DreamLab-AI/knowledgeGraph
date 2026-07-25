```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:computer-graphics",
  "title": "Computer Graphics",
  "vc:slug": "computer-graphics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computer-graphics",
  "@type": "Class",
  "label": "Computer Graphics",
  "definition": "Computer Graphics is the computational discipline concerned with synthesising, manipulating, and displaying visual imagery using mathematical models and algorithms running on specialised hardware. It encompasses the full pipeline from scene representation—geometry, materials, lighting—through rasterisation or ray-tracing renderers, shading languages, and GPU-accelerated display systems. As the enabling layer for all visual digital experiences, it underpins spatial computing, interactive media, simulation, scientific visualisation, and metaverse infrastructure. The field spans real-time and offline rendering paradigms, blending applied mathematics, physics-based light transport, and hardware architecture.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "quality": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:global-illumination",
        "label": "Global Illumination"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-animation",
        "label": "3D Animation"
      },
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:scientific-visualisation",
        "label": "Scientific Visualisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:3-d-geometry",
        "label": "3D Geometry"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:open-gl",
        "label": "OpenGL"
      },
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:siggraph",
        "label": "SIGGRAPH"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cg",
      "label": "CG"
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
  - Computer Graphics is the computational discipline concerned with the synthesis, manipulation, and display of visual imagery through mathematical models and specialised hardware. It spans the complete pipeline from scene description—including [[3D Geometry]], materials, and lighting—through rendering algorithms such as [[Rasterization]] and [[Ray Tracing]], to real-time display on screens and headsets. The field relies on [[GPU]] architecture to parallelise pixel-level computation at interactive rates, and draws on [[Linear Algebra]], calculus, and physics-based light transport. Computer Graphics forms the enabling substrate for [[Spatial Computing]], [[Virtual Reality]], interactive media, and scientific visualisation.

- ### Overview
  - Computer Graphics emerged in the 1960s from Ivan Sutherland's Sketchpad work and has since evolved from vector line drawing to photorealistic, real-time 3D environments rendered at hundreds of frames per second.
  - The field is split into two broad paradigms:
    - **Real-time graphics** — prioritises throughput and latency, using [[Rasterization]] and forward/deferred shading for games, simulation, and XR applications.
    - **Offline rendering** — prioritises physical accuracy, using [[Ray Tracing]] and path tracing to compute global light transport for film, architecture, and product design.
  - Modern [[GPU]] hardware supports both paradigms and increasingly blurs the boundary via hardware-accelerated ray tracing (e.g. NVIDIA RTX, AMD RDNA).
  - The discipline is mathematically intensive, building on [[Linear Algebra]], projective geometry, differential equations (for fluid/cloth simulation), and numerical methods.
  - Why it matters:
    - Every digital visual interface—from operating systems to AR overlays—depends on computer graphics pipelines.
    - It is the primary technical interface between humans and computing systems in [[Spatial Computing]] and [[Metaverse]] environments.
    - [[Neural Rendering]] and AI-assisted synthesis are rapidly extending classical pipelines with machine-learning inference.

- ### Key Components
  - **[[Rendering Pipeline]]** — the ordered sequence of stages (vertex processing, primitive assembly, rasterisation, fragment shading, output merge) through which geometry becomes pixels on screen.
  - **[[Rasterization]]** — the dominant real-time technique converting vector geometry into a discrete pixel grid using scan-conversion and depth buffering (Z-buffer).
  - **[[Ray Tracing]]** — a physically accurate technique casting rays from a virtual camera through each pixel to compute visibility, reflections, and global illumination; now accelerated in hardware.
  - **[[Shader]]** — small programmable programs (vertex, geometry, fragment/pixel, compute) running on [[GPU]] cores that implement custom shading models, effects, and compute tasks.
  - **[[Texture Mapping]]** — the technique of projecting 2D images (diffuse, normal, roughness maps) onto 3D surfaces to add surface detail without increasing polygon count.
  - **[[Global Illumination]]** — algorithms (radiosity, path tracing, irradiance caching, DDGI) that simulate indirect light bouncing between surfaces for photorealistic results.
  - **[[Physically Based Rendering]] (PBR)** — a material and lighting model grounded in the physics of light–matter interaction, using the Cook-Torrance BRDF and energy-conservation constraints; now the industry default for games and film.
  - **[[Level of Detail]] (LOD)** — adaptive reduction of geometric and shader complexity for distant or less-visible objects to maintain frame rates.
  - **[[3D Geometry]]** — the mathematical representation of scene objects as meshes, NURBS surfaces, subdivision surfaces, signed distance fields, or [[Point Cloud]] data.
  - **Shadow Mapping & Ambient Occlusion** — techniques approximating self-shadowing and contact shadows in real-time pipelines.
  - **Post-Processing** — screen-space effects (HDR tone mapping, bloom, depth of field, anti-aliasing: TAA, DLSS, FSR) applied after the main render pass.
  - **[[3D Animation]]** — skeletal (rigged) and blend-shape animation systems that deform geometry over time, driven by keyframes or physics simulation.

- ### Applications / Use Cases
  - **Interactive Entertainment** — video games using engines such as [[Game Engine|Unreal Engine]] and Unity rely entirely on real-time computer graphics for visual output.
  - **[[Virtual Reality]] and [[Augmented Reality]]** — XR headsets demand stereo rendering at 72–120 Hz with minimal latency; foveated rendering and single-pass stereo are graphics techniques addressing the hardware constraints.
  - **Film and Visual Effects (VFX)** — offline path tracers (Pixar RenderMan, Chaos V-Ray, SideFX Karma) render cinematic imagery used in blockbuster films and commercials.
  - **[[Digital Twin]]** — real-time 3D replicas of physical assets or environments for simulation, monitoring, and training, built on spatial computing graphics stacks.
  - **[[Scientific Visualisation]]** — medical imaging (volume rendering of CT/MRI), molecular dynamics, computational fluid dynamics, and astrophysics use graphics pipelines to make data perceptible.
  - **Architecture, Engineering, Construction (AEC)** — BIM workflows use real-time graphics for design review, clash detection, and client presentation.
  - **Autonomous Vehicles** — [[Simulation]] environments for training [[Reinforcement Learning]] agents (e.g. NVIDIA Omniverse, Carla) are powered by computer graphics.
  - **[[Metaverse]]** — persistent shared virtual worlds require scalable, networked 3D rendering underpinned by computer graphics standards and toolchains.
  - **UI/UX Design** — GPU-composited 2D/3D interfaces in operating systems, mobile platforms, and web browsers rely on graphics subsystems (Metal, Vulkan, [[WebGPU]]).
  - **[[Neural Rendering]]** — AI-assisted techniques (NeRF, Gaussian Splatting, diffusion-based image synthesis) use graphics infrastructure and extend it with learned representations.

- ### Relationships
  - hasPart:: [[Rasterization]]
  - hasPart:: [[Shader]]
  - hasPart:: [[Rendering Pipeline]]
  - hasPart:: [[Ray Tracing]]
  - hasPart:: [[Texture Mapping]]
  - hasPart:: [[Global Illumination]]
  - enables:: [[3D Animation]]
  - enables:: [[Level of Detail]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Digital Twin]]
  - enables:: [[Scientific Visualisation]]
  - requires:: [[GPU]]
  - requires:: [[Linear Algebra]]
  - requires:: [[3D Geometry]]
  - uses:: [[Game Engine]]
  - uses:: [[OpenGL]]
  - uses:: [[Vulkan]]
  - uses:: [[WebGPU]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[SIGGRAPH]]
  - contrastsWith:: [[Image Processing]]
  - bridges-to:: [[Neural Rendering]]
  - bridges-to:: [[Computer Vision]]
  - relatedTo:: [[Physically Based Rendering]]
  - relatedTo:: [[Spatial Computing]]

- ### Standards & Context
  - **[[Khronos Group]]** — maintains the primary open graphics APIs: [[OpenGL]] (cross-platform raster graphics, established 1992), [[Vulkan]] (low-overhead modern API, released 2016), [[OpenXR]] (XR device abstraction), and [[WebGL]].
  - **[[WebGPU]]** — W3C standard (2023) providing a modern GPU API for the web, succeeding [[WebGL]] with explicit memory management and compute shader support.
  - **DirectX / Direct3D** — Microsoft's graphics API stack for Windows and Xbox; DirectX 12 (2015) and DirectX Raytracing (DXR, 2018) are key milestones.
  - **Metal** — Apple's graphics and compute API for macOS and iOS, optimised for Apple Silicon's unified memory architecture.
  - **[[SIGGRAPH]]** — the ACM Special Interest Group on Graphics and Interactive Techniques; the primary academic and industry conference where major rendering advances are published.
  - **OpenUSD (Universal Scene Description)** — Pixar/Apple standard for describing complex 3D scenes and assets; increasingly used as an interchange format between DCC tools, game engines, and [[Spatial Computing]] platforms.
  - **glTF** — Khronos Group's runtime 3D asset format designed for efficient delivery of 3D content to real-time renderers and web applications.
  - **SPIR-V** — Khronos intermediate shader representation, enabling portable shader compilation across Vulkan, OpenCL, and other runtimes.

- ### Provenance
  - sources:: ACM SIGGRAPH proceedings; Pharr, Jakob & Humphreys "Physically Based Rendering" (3rd ed.); Akenine-Möller et al. "Real-Time Rendering" (4th ed.); Khronos Group specifications
  - updated:: 2026-06-13

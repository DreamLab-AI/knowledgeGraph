public:: true

# 3D Rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3-d-rendering",
  "@type": "Page",
  "vc:slug": "3-d-rendering",
  "title": "3D Rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:3-d-rendering",
  "@type": "Class",
  "label": "3D Rendering",
  "definition": "3D rendering is the computational process of generating a two-dimensional image or animation from a three-dimensional scene description by simulating the interaction of light with surfaces, materials, and geometry. It encompasses techniques ranging from real-time rasterization used in interactive applications to physically-based ray tracing used for photorealistic offline production. The pipeline converts geometric primitives, shader programs, texture maps, and lighting data into final pixel colours via a GPU compute pipeline or software renderer.",
  "domain": "graphics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-graphics", "label": "Computer Graphics"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rasterization", "label": "Rasterization"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"},
      {"@id": "urn:ngm:class:pixel-shader", "label": "Pixel Shader"},
      {"@id": "urn:ngm:class:compute-shader", "label": "Compute Shader"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:3-d-model", "label": "3D Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"},
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"},
      {"@id": "urn:ngm:class:foveated-rendering", "label": "Foveated Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:3-d-rendering-engine", "label": "3D Rendering Engine"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[3D Rendering]] is the process of converting a [[3D Model]] scene description into a pixel-perfect image by simulating light transport through techniques such as [[Rasterization]] and [[Ray Tracing]], executed on dedicated [[GPU Compute]] hardware.

- ### Relationships
  - [[3D Rendering]] depends on [[Computer Graphics]] theory as its parent discipline, using [[GPU Compute]] resources to execute vertex and fragment stages that include [[Pixel Shader]] and [[Compute Shader]] programs. It enables [[Photorealistic Rendering]] and [[Physically Based Rendering]] workflows used in film and product visualisation, and underlies [[Foveated Rendering]] optimisation used in XR headsets. The [[3D Rendering Engine]] is the software system that orchestrates these stages, while [[Differentiable Rendering]] extends classical pipelines with gradient computation for machine-learning integration.

- ### Content
  - 3D rendering traces its origins to the 1970s with early wireframe displays and flat shading algorithms at the University of Utah. Gouraud and Phong shading introduced smooth interpolation of normals and specular highlights in the mid-1970s, and the discipline evolved through scanline rendering, radiosity, and eventually Monte Carlo path tracing through the 1980s and 1990s. The introduction of programmable shader pipelines in the early 2000s, standardised through OpenGL and DirectX, transformed real-time graphics by allowing developers to write custom per-vertex and per-pixel programs executing directly on the GPU.

  - A standard real-time rendering pipeline proceeds through several distinct stages. The application stage on the CPU assembles draw calls and uploads geometry to GPU memory. The geometry stage transforms vertex positions from model space through world, view, and clip space using matrix multiplication, and assembles primitives such as triangles. The rasterisation stage determines which screen pixels are covered by each primitive, interpolating attributes across fragments. The fragment stage evaluates shader programs to compute final pixel colours, incorporating texture sampling, lighting calculations using physically based BRDF models, and shadow map lookups. Post-processing passes apply effects such as ambient occlusion, bloom, depth of field, and temporal anti-aliasing before presenting to the display.

  - Ray tracing approaches the rendering problem differently, tracing light paths backward from the camera through each pixel into the scene, recursively evaluating intersections with geometry and sampling light sources stochastically. Path tracing is the unbiased form used in production rendering for film and animation because it correctly simulates global illumination, subsurface scattering, and caustics. Real-time hybrid rendering, enabled by dedicated RT cores in modern GPUs (NVIDIA Turing and later, AMD RDNA 2+), combines rasterisation for primary visibility with ray tracing for reflections and shadows, achieving near-photorealistic quality at interactive frame rates.

  - By 2024-2025 the rendering landscape is shaped by several forces: neural rendering techniques using NeRF and 3D Gaussian Splatting create photorealistic novel-view synthesis from captured imagery, AI-accelerated denoising (DLSS, FSR, XeSS) enables full-resolution output from quarter-resolution rasterisation, and differentiable rendering bridges computer graphics with deep learning by allowing gradient flow through the render pipeline for inverse rendering and generative 3D content applications. The challenge of real-time photorealism at 90+ fps for VR/XR head-mounted displays remains an active area, driving continued innovation in foveated rendering, tile-based architectures, and neural compression of radiance fields.


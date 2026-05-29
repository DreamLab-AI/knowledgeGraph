public:: true

# Dynamic Lighting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dynamic-lighting",
  "@type": "Page",
  "vc:slug": "dynamic-lighting",
  "title": "Dynamic Lighting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dynamic-lighting",
  "@type": "Class",
  "label": "Dynamic Lighting",
  "definition": "Dynamic lighting is a real-time rendering technique in which light sources, shadows, and indirect illumination are computed per-frame based on the current state of a scene, allowing lights to move, change intensity or colour, and interact with animated geometry without relying on pre-baked static lighting data. It is foundational to believable 3D environments in games, virtual production, and spatial computing applications.",
  "domain": "spatial",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:global-illumination", "label": "Global Illumination"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Dynamic Lighting]] describes the per-frame computation of lighting conditions in 3D rendered scenes, encompassing direct illumination from movable light sources, real-time shadow mapping or ray-traced shadows, and approximations of indirect illumination such as screen-space ambient occlusion and light probes. It relies on [[Shader]] programs executing on GPU hardware, adheres to [[Physically Based Rendering]] material models for physical plausibility, and is enabled by [[Ray Tracing]] in modern hardware-accelerated pipelines. Dynamic lighting contrasts with baked (pre-computed) lighting, trading storage efficiency for interactivity and responsive scene changes.

- ### Relationships
  - Dynamic lighting uses [[Shader]] pipelines for light evaluation, [[Physically Based Rendering]] to ensure energy-conserving material interaction, and hardware-accelerated [[Ray Tracing]] for accurate shadow and reflection computation. It enables [[Real-Time Rendering]] of believable interactive scenes and approximates [[Global Illumination]] through screen-space and probe-based techniques. Dynamic lighting operates within the broader [[Rendering Pipeline]] and is a key differentiator for visual quality in spatial computing and virtual production environments.

- ### Content
  - The history of real-time dynamic lighting traces from the fixed-function Gouraud and Phong shading models of the 1990s through the programmable shader revolution of the early 2000s (DirectX 8/9). Early dynamic shadows used shadow maps—depth renders from the light's perspective compared against scene depth—introduced in games circa 2001-2004. Deferred rendering architectures, popularised around 2007-2009, decoupled geometry processing from lighting, enabling scenes with hundreds of dynamic light sources without per-light geometry processing overhead.

  - Modern dynamic lighting employs a layered approach: forward+ or deferred rendering for many lights, cascaded shadow maps for directional sunlight, and screen-space techniques (SSAO, SSR) for approximate global illumination. Hardware ray tracing (introduced in NVIDIA RTX cards in 2018 and now standard on console hardware) provides accurate reflections, soft shadows, and global illumination via path tracing at reduced sample counts, combined with AI-based denoising (DLSS, FSR) to achieve real-time frame rates. Lumen (Unreal Engine 5) and its radiance cache provide a full dynamic global illumination solution using software and hardware ray tracing adaptively.

  - In virtual production, dynamic lighting synchronised between physical LED volumes and in-engine rendering enables cinematographers to work with physically coherent lighting environments that react in real-time to camera movement and story events. Spatial computing platforms (Apple Vision Pro, Meta Quest 3) use environment lighting estimation—extracting spherical harmonics or HDR environment maps from camera feeds—to integrate virtual objects dynamically into physical lighting conditions, making dynamic lighting a prerequisite for convincing augmented reality.

  - In 2024-2025, fully path-traced rendering is becoming viable for games and virtual production on high-end hardware, with titles such as Cyberpunk 2077's RT Overdrive mode and Portal RTX demonstrating the visual leap. Neural radiance caching and machine learning-based irradiance prediction are reducing the compute cost of global illumination. For spatial computing on mobile XR hardware, efficient dynamic lighting remains a critical optimisation challenge, driving innovations in lightmass-hybrid and screen-space approximation techniques optimised for tile-based GPU architectures.


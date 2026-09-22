public:: true

# Occlusion Rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:occlusion-rendering",
  "@type": "Page",
  "vc:slug": "occlusion-rendering",
  "title": "Occlusion Rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:occlusion-rendering",
  "@type": "Class",
  "label": "Occlusion Rendering",
  "definition": "Occlusion rendering is the set of techniques used in real-time and offline graphics pipelines to correctly determine and display which surfaces are hidden behind other geometry from a given camera viewpoint, as well as to compute the darkening of surfaces due to local geometric obstruction of ambient light. It encompasses hardware depth-buffer culling, ambient occlusion shading, screen-space occlusion methods, and — in augmented reality — the masking of virtual objects by real-world foreground geometry. Correct occlusion is essential for perceptual plausibility in both games and AR/VR applications.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:rasterization", "label": "Rasterization"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ar-occlusion", "label": "AR Occlusion"},
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ambient-occlusion", "label": "Ambient Occlusion"},
      {"@id": "urn:ngm:class:occlusion-culling", "label": "Occlusion Culling"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Occlusion rendering refers to the family of algorithms that determine visibility and surface shadowing in computer graphics. At its most basic, it relies on [[Rasterization]] and a depth buffer to discard fragments hidden by closer geometry. Extended techniques compute [[Ambient Occlusion]] — the soft darkening that occurs where surfaces are enclosed by surrounding geometry — and in augmented reality, [[AR Occlusion]] masks virtual objects behind real-world surfaces estimated via [[Depth Estimation]]. Together, these techniques underpin [[Photorealistic Rendering]] by correcting the lighting and visibility model of a rendered scene.

- ### Relationships
  - Occlusion rendering relies on [[Rasterization]] for real-time fragment culling, and on [[Ray Tracing]] for high-fidelity occlusion queries in offline or hardware-accelerated pipelines. [[Depth Estimation]] from cameras or sensors provides the real-world depth maps required for [[AR Occlusion]] in mixed reality headsets. The concept is closely related to [[Occlusion Culling]], which eliminates entire draw calls for fully hidden objects, and to [[Ambient Occlusion]], which approximates inter-object shadowing as a shading effect rather than a visibility determination.

- ### Content
  - The earliest form of occlusion rendering was the painter's algorithm, which sorted polygons by depth and rendered back-to-front to achieve approximate visibility. This was superseded by depth-buffer (Z-buffer) methods introduced by Catmull in 1974, which became universal in GPU hardware by the 1990s. Z-buffer occlusion enabled real-time 3D rendering by allowing arbitrary polygon submission order with correct per-pixel visibility resolution at the cost of GPU memory for the depth buffer.

  - Ambient occlusion as a shading technique emerged in VFX production in the early 2000s, providing artists with a cheap approximation of global illumination contact shadows without full radiosity computation. Screen-space ambient occlusion (SSAO), introduced in Crysis (2007), brought real-time ambient occlusion to games by computing occlusion from depth-buffer samples in screen space. Subsequent refinements — HBAO, GTAO, and ray-traced ambient occlusion on NVIDIA RTX hardware — have progressively improved quality and physical accuracy.

  - In augmented reality, occlusion rendering is a fundamental perceptual challenge: virtual objects must be masked wherever real foreground objects obstruct them, requiring real-time depth estimation of the physical scene. Early AR systems faked this with approximate geometry models; modern headsets such as the Apple Vision Pro and Meta Quest 3 use dedicated depth sensors or neural depth estimation to generate per-frame occlusion masks. This is categorised as [[AR Occlusion]] and is considered a prerequisite for convincing physical-virtual integration.

  - Between 2023 and 2025, hardware ray tracing on consumer GPUs has made fully ray-traced ambient and direct occlusion practical in real-time games and simulation. Neural rendering approaches are beginning to learn occlusion relationships directly from data, enabling plausible occlusion without explicit geometry in some scenarios. In spatial computing, depth sensor quality and neural depth completion algorithms have significantly improved AR occlusion fidelity, with Apple Vision Pro's depth integration representing the current industry benchmark for consumer headsets.


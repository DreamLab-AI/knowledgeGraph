public:: true

# Ambient Occlusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ambient-occlusion",
  "@type": "Page",
  "vc:slug": "ambient-occlusion",
  "title": "Ambient Occlusion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ambient-occlusion",
  "@type": "Class",
  "label": "Ambient Occlusion",
  "definition": "A shading and rendering technique that approximates the degree to which each point on a surface is occluded from ambient environmental light by surrounding geometry, producing soft shadows in crevices, corners, and contact areas that significantly enhance the perception of three-dimensional form and material grounding. Unlike direct illumination algorithms, ambient occlusion is view-independent and operates on the assumption that ambient light arrives uniformly from all directions, making it computationally tractable as either a pre-baked texture or a real-time screen-space approximation. It is a foundational element of physically plausible rendering pipelines.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"},
      {"@id": "urn:ngm:class:depth-buffer", "label": "Depth Buffer"},
      {"@id": "urn:ngm:class:hemisphere-sampling", "label": "Hemisphere Sampling"},
      {"@id": "urn:ngm:class:gpu-shader", "label": "GPU Shader"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:depth-perception", "label": "Depth Perception"},
      {"@id": "urn:ngm:class:contact-shadow", "label": "Contact Shadow"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:screen-space-ambient-occlusion", "label": "Screen Space Ambient Occlusion"},
      {"@id": "urn:ngm:class:ray-traced-ambient-occlusion", "label": "Ray-Traced Ambient Occlusion"},
      {"@id": "urn:ngm:class:baked-lightmap", "label": "Baked Lightmap"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:global-illumination", "label": "Global Illumination"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:scene-geometry", "label": "Scene Geometry"},
      {"@id": "urn:ngm:class:surface-normal", "label": "Surface Normal"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:direct-illumination", "label": "Direct Illumination"},
      {"@id": "urn:ngm:class:shadow-mapping", "label": "Shadow Mapping"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dynamic-lighting", "label": "Dynamic Lighting"},
      {"@id": "urn:ngm:class:ar-occlusion", "label": "AR Occlusion"},
      {"@id": "urn:ngm:class:occlusion-culling", "label": "Occlusion Culling"},
      {"@id": "urn:ngm:class:lightmap", "label": "Lightmap"},
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ao", "label": "AO"},
    {"@id": "urn:ngm:class:environment-occlusion", "label": "Environment Occlusion"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Ambient Occlusion]] (AO) is a [[Rendering Technique]] that quantifies how much ambient light reaches a surface point by testing the hemisphere of directions above that point for blocking geometry. Points with a high proportion of occluded directions—creases, cavities, and contact shadows—receive less ambient illumination and appear darker, reinforcing perceptual depth cues without requiring expensive full global illumination computation. AO integrates within [[Physically Based Rendering]] pipelines and is a constituent of both baked lightmap workflows and real-time screen-space approximations (SSAO, HBAO, GTAO).

- ### Relationships
  - Ambient Occlusion complements [[Physically Based Rendering]] by providing physically motivated contact shadows that give scenes material grounding. Offline renderers compute it accurately via [[Ray Tracing]] hemisphere sampling; real-time engines approximate it in screen space. Together, AO and [[Dynamic Lighting]] constitute the primary contributors to scene depth perception. In augmented reality contexts, [[AR Occlusion]] handling requires AO-compatible approaches to integrate virtual objects convincingly into captured environments. [[Occlusion Culling]] addresses the related but distinct problem of not rendering geometry hidden behind opaque surfaces.

- ### Content
  - Ambient occlusion was popularised in visual effects production following its introduction in industrial light-rendering pipelines in the early 2000s. The technique was formalised by Zhukov et al. in 1998 and subsequently adopted broadly after its inclusion in RenderMan and Mental Ray. Its visual contribution—the soft, contact-darkening that makes CGI feel grounded—was immediately recognisable and became a production standard within a few years of its introduction.

  - The computational challenge of AO lies in estimating the occlusion integral at each surface point. Offline renderers sample hundreds to thousands of rays per shading point, amortising cost across multi-hour render times. Real-time implementations, beginning with Crytek's Screen Space Ambient Occlusion (SSAO) in Crysis (2007), compute an approximation using only the depth buffer and a small set of random samples in screen space. Subsequent algorithms—HBAO+ (NVIDIA), GTAO, and ray-traced AO in DXR-enabled engines—have progressively improved quality and efficiency.

  - In the production pipeline, AO is baked into texture atlases for static geometry and applied as a multiplier on the albedo or diffuse channel. For dynamic scenes, screen-space methods run as post-process passes in the [[Real-Time Rendering Pipeline]]. [[Neural Rendering]] approaches have explored learned AO approximations that generalise better to novel viewpoints than screen-space methods, at additional per-frame inference cost.

  - By 2024–2025, ambient occlusion is a mature and ubiquitous technique present in virtually every commercial game engine and rendering framework. Hardware-accelerated ray-traced AO (via NVIDIA RTX and AMD RDNA ray-tracing pipelines) is increasingly available at real-time frame rates on mid-range to high-end GPUs, reducing the need for screen-space approximations. In spatial computing and XR contexts, per-frame AO computation for dynamically placed virtual objects against reconstructed environment geometry remains an active research and engineering challenge.


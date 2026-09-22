public:: true

# Shadow Mapping

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:shadow-mapping",
  "@type": "Page",
  "title": "Shadow Mapping",
  "vc:slug": "shadow-mapping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shadow-mapping",
  "@type": "Class",
  "label": "Shadow Mapping",
  "definition": "Shadow Mapping is a real-time computer graphics technique for rendering shadows by rendering the scene from the perspective of each light source into a depth texture (the shadow map), then comparing scene-point depth values against that map during the main render pass to determine visibility. It is the dominant method for dynamic shadows in games and real-time rendering engines due to its GPU efficiency and flexibility. Artefacts such as shadow acne and perspective aliasing are mitigated through techniques like bias adjustment, percentage-closer filtering, and cascaded shadow maps. The technique is fundamental to photorealistic rendering in spatial computing and XR applications.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    },
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:shadow-volumes",
        "label": "Shadow Volumes"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      },
      {
        "@id": "urn:ngm:class:depth-buffer",
        "label": "Depth Buffer"
      },
      {
        "@id": "urn:ngm:class:global-illumination",
        "label": "Global Illumination"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:depth-buffer",
        "label": "Depth Buffer"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "Gpu"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:photorealistic-rendering",
        "label": "Photorealistic Rendering"
      },
      {
        "@id": "urn:ngm:class:dynamic-lighting",
        "label": "Dynamic Lighting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Shadow Mapping]] is a real-time graphics technique that renders a scene's depth from each light's perspective into a [[Depth Buffer]] (the shadow map).
  - During the main [[Rasterisation]] pass, each fragment's depth is compared against the shadow map to determine whether it is in shadow.
  - It contrasts with [[Ray Tracing]] (physically correct but expensive) and [[Shadow Volumes]] (stencil-based, geometry-intensive).
  - Cascaded shadow maps extend the technique to handle the depth range of large outdoor scenes in [[Virtual Reality]] and game environments.

- ### Overview
  - Shadow mapping was introduced by Lance Williams in 1978 and became dominant in real-time rendering during the GPU era.
  - Modern implementations use percentage-closer filtering (PCF) to soften shadow edges without requiring true area-light sampling.
  - Cascaded Shadow Maps (CSM) partition the view frustum into depth slices, each with a separately rendered shadow map, preserving quality across near and far distances.
  - Variance Shadow Maps (VSM) store depth moments in the shadow map, enabling GPU-accelerated blur for soft shadows.

- ### Key Aspects
  - **Shadow acne**: self-shadowing artefacts caused by depth precision limits; mitigated by depth bias and slope-scale bias.
  - **Peter-panning**: over-biasing causes shadows to detach from casters; requires careful bias tuning.
  - **Perspective aliasing**: shadow map texels project unequally across the scene; CSM and perspective warping reduce this.
  - **PCF filtering**: samples neighbouring shadow map texels to produce soft shadow penumbrae.
  - **Performance**: single-light shadow mapping requires one additional render pass; multiple lights scale linearly.

- ### Mechanisms
  - The [[Graphics Pipeline]] renders the scene geometry from the light's view-projection matrix, writing depth to a shadow map texture.
  - In the main pass, fragment positions are transformed into light space; depth comparison determines shadowing.
  - [[Shader]] code implements the depth comparison, bias correction, and optional PCF kernel.
  - [[Texture Mapping]] hardware accelerates bilinear depth fetches on modern [[Gpu]] architectures.

- ### Applications
  - Real-time shadow rendering in [[Game Engine]] (Unreal Engine, Unity) and [[Virtual Reality]] applications.
  - [[Augmented Reality]] scene integration where virtual objects must cast shadows consistent with real-world lighting.
  - Architectural visualisation and product rendering requiring interactive shadow previews.
  - Simulation and training environments demanding plausible, low-latency lighting.

- ### Relationships
  - contrastsWith:: [[Ray Tracing]]
  - contrastsWith:: [[Shadow Volumes]]
  - relatedTo:: [[Rasterisation]]
  - relatedTo:: [[Depth Buffer]]
  - relatedTo:: [[Global Illumination]]
  - relatedTo:: [[Real-Time Rendering]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Game Engine]]
  - hasPart:: [[Depth Buffer]]
  - hasPart:: [[Shader]]
  - uses:: [[Gpu]]
  - uses:: [[Texture Mapping]]
  - enables:: [[Photorealistic Rendering]]
  - enables:: [[Dynamic Lighting]]
  - dependsOn:: [[Graphics Pipeline]]

- ### Provenance
  - updated:: 2026-06-15

public:: true

# Texture Map

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:texture-map",
  "@type": "Page",
  "title": "Texture Map",
  "vc:slug": "texture-map",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:texture-map",
  "@type": "Class",
  "label": "Texture Map",
  "definition": "A Texture Map is a 2D image applied to the surface of a 3D model to add visual detail such as colour, roughness, normals, or emissive properties without increasing polygon count. Texture maps are indexed via UV coordinates that establish a correspondence between surface points and image pixels. They are a foundational component of real-time and offline rendering pipelines.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    },
    {
      "@id": "urn:ngm:class:uv-mapping",
      "label": "Uv Mapping"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      },
      {
        "@id": "urn:ngm:class:mipmap",
        "label": "Mipmap"
      },
      {
        "@id": "urn:ngm:class:normal-map",
        "label": "Normal Map"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-asset",
        "label": "3D Asset"
      },
      {
        "@id": "urn:ngm:class:material",
        "label": "Material"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      },
      {
        "@id": "urn:ngm:class:3-d-model",
        "label": "3D Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gl-tf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:3-d-asset-standard",
        "label": "3D Asset Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:procedural-material",
        "label": "Procedural Material"
      },
      {
        "@id": "urn:ngm:class:implicit-neural-representation",
        "label": "Implicit Neural Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:3-d-content-creation",
        "label": "3D Content Creation"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:xr",
        "label": "XR"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Texture Map]] is a 2D image applied to a [[3D Model]] surface to encode visual or material properties without adding geometry.
  - Indexed via [[UV Mapping]], which establishes a bijective mapping between model surface and image pixels.
  - Types include diffuse/albedo, [[Normal Map]], roughness, metallic, ambient occlusion, and emissive maps.
  - Central to both [[Physically Based Rendering]] workflows and real-time [[Rasterisation]] pipelines.

- ### Overview
  - Texture maps allow artists to bake fine surface detail into images, keeping polygon counts manageable.
  - A [[Material]] typically bundles several texture maps into a coherent shading model (e.g., PBR metallic-roughness).
  - [[Mipmap]] pyramids provide level-of-detail filtering to reduce aliasing at distance.
  - Standards such as [[glTF]] define how texture maps are packaged within [[3D Asset]] containers.

- ### Key Aspects
  - **UV Unwrapping**: projecting 3D surface onto 2D plane, stored as per-vertex UV coordinates.
  - **Compression formats**: BC (DXT), ASTC, and ETC reduce GPU memory footprint.
  - **PBR channels**: albedo, normal, roughness, metallic, occlusion, emissive.
  - **Atlasing**: packing multiple objects' UVs into a single texture to reduce draw calls.

- ### Mechanisms
  - During rendering, the [[GPU]] samples the texture at interpolated UV coordinates per fragment.
  - Bilinear and trilinear filtering smooth transitions between texels and [[Mipmap]] levels.
  - Normal maps encode surface perturbations in tangent space, simulating lighting on micro-geometry.
  - Texture streaming systems load mipmaps on demand to manage VRAM budget in open worlds.

- ### Applications
  - [[3D Content Creation]] for games, film, and [[Metaverse]] platforms.
  - [[Augmented Reality]] overlays requiring realistic surface appearance on physical objects.
  - [[Virtual Reality]] environments demanding high visual fidelity at low latency.
  - [[Real-Time Rendering]] in web [[XR]] and mobile applications.
  - Digital twin visualisation and product configuration systems.

- ### Relationships
  - hasPart:: [[UV Mapping]]
  - hasPart:: [[Mipmap]]
  - hasPart:: [[Normal Map]]
  - partOf:: [[3D Asset]]
  - partOf:: [[Material]]
  - requires:: [[UV Mapping]]
  - requires:: [[3D Model]]
  - enables:: [[Physically Based Rendering]]
  - enables:: [[Real-Time Rendering]]
  - uses:: [[Rasterisation]]
  - uses:: [[GPU]]
  - standardizedBy:: [[glTF]]
  - standardizedBy:: [[3D Asset Standard]]
  - contrastsWith:: [[Procedural Material]]
  - contrastsWith:: [[Implicit Neural Representation]]
  - relatedTo:: [[3D Content Creation]]
  - relatedTo:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]

- ### Provenance
  - updated:: 2026-06-15

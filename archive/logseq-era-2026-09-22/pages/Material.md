public:: true

# Material
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:40b30b4e8f0d137056ac497e859ea198c1a00db4267d1ade9c458d04024e2981",
  "@type": "Page",
  "vc:slug": "material",
  "title": "Material",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:texture-map",
      "vc:label": "Texture Map"
    },
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:physically-based-rendering",
      "vc:label": "Physically Based Rendering"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:material",
  "@type": "Class",
  "label": "Material",
  "definition": "A material is the generic description of how a 3D surface responds to light, bundling the shading model and its parameters — base colour, roughness, metalness, normal detail, emission, transparency — into a reusable definition that a renderer evaluates for each visible point. Materials are the container into which texture maps are plugged and which a shader program consumes, mediating between geometry and the final rendered appearance. This is a general graphics concept, not to be confused with MaterialX, which is a specific open interchange standard from Lucasfilm/ILM for encoding and exchanging material graphs between applications.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:computer-graphics",
    "label": "Computer Graphics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:texture-map",
        "label": "Texture Map"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A material is the generic description of how a 3D surface responds to light, bundling the shading model and its parameters — base colour, roughness, metalness, normal detail, emission, transparency — into a reusable definition that a renderer evaluates for each visible point. Materials are the container into which texture maps are plugged and which a shader program consumes, mediating between geometry and the final rendered appearance. This is a general graphics concept, not to be confused with MaterialX, which is a specific open interchange standard from Lucasfilm/ILM for encoding and exchanging material graphs between applications."

- ### Semantic Classification
  - owl-class:: spatial-computing:Material
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - has-part:: [[Texture Map]]
  - uses:: [[Shader]]
  - part-of:: [[Rendering Pipeline]]

- ### Content

  ## Definition

  A **material** is the reusable description of a surface's optical behaviour that a renderer applies to geometry. It gathers together a shading model and the parameters that drive it — diffuse or base colour, specular response, roughness, metalness, normal and displacement detail, opacity, and emission — so that the same appearance can be assigned to many objects and edited in one place. When light reaches a surface point, the renderer evaluates the material to decide what colour that point contributes to the image.

  Materials sit at the junction of texture maps, shaders, and the wider rendering pipeline. Texture maps supply the spatially varying values a material needs; a shader is the executable program that computes the material's response; and the pipeline schedules that evaluation across every fragment. The concept is generic and long-established across real-time engines and offline renderers alike.

  It is important to keep the general notion of a material separate from **MaterialX**, a named open standard that defines a specific schema and node graph for describing and interchanging materials between tools. MaterialX is one way to serialise a material; a material as a concept exists independently of any particular encoding.

  ## Technical Details

  In physically based rendering, most materials are built on a small number of standardised models — commonly a metallic-roughness or specular-glossiness parameterisation of a microfacet BRDF — chosen so that surfaces behave plausibly under any lighting. Parameters may be constants or driven by texture maps sampled through UV coordinates, and modern authoring exposes them as node graphs where operations combine and layer inputs before feeding the shading model. At render time the pipeline binds the material's shader, uploads its parameters and textures, and evaluates the BRDF per fragment, optionally combining it with the scene's lighting and global-illumination solution to produce the final shaded result.

  ## Current Landscape

  - **OpenPBR 1.0 (June 2024)**: the Academy Software Foundation released OpenPBR Surface, a new open standard "über-shader" surface model developed by Autodesk and Adobe, as a subproject of MaterialX — intended as the single successor to both Autodesk Standard Surface and Adobe Standard Material.
  - **Convergence of standard materials**: because both Autodesk and Adobe committed to focus their efforts on OpenPBR going forward, the historically fragmented "standard surface" landscape is consolidating onto one physically-based parameterisation.
  - **Ships inside MaterialX**: OpenPBR's reference implementation is written in MaterialX, so any tool in the MaterialX and OpenUSD ecosystem automatically supports OpenPBR with no bespoke implementation work.
  - **Interchange, not the material itself**: this reinforces the conceptual point that a material is renderer-agnostic — MaterialX/OpenPBR are ways to serialise and exchange a material's node graph across tools and renderers, distinct from the general notion of a material.

  **Sources**:
  - https://www.aswf.io/blog/academy-software-foundation-releases-openpbr-1-0/
  - https://github.com/AcademySoftwareFoundation/OpenPBR

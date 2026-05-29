public:: true

# Material Definition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:material-definition",
  "@type": "Page",
  "vc:slug": "material-definition",
  "title": "Material Definition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:material-definition",
  "@type": "Class",
  "label": "Material Definition",
  "definition": "A material definition is a structured data specification that describes how a surface or volume should appear under lighting, encoding properties such as base colour, roughness, metalness, emissivity, and transparency in a renderer-agnostic format. It underpins physically based rendering (PBR) pipelines by separating the description of physical surface behaviour from the rendering algorithm that evaluates it. Material definitions may be authored in formats such as MaterialX, glTF materials, or OpenUSD surface shading networks, enabling interchange across tools and engines. They are fundamental to achieving photorealistic and stylised visuals in real-time and offline 3D workflows.",
  "domain": "graphics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"},
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:texture-mapping", "label": "Texture Mapping"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:render-pipeline", "label": "Render Pipeline"},
      {"@id": "urn:ngm:class:open-usd", "label": "OpenUSD"},
      {"@id": "urn:ngm:class:gltf-standard", "label": "Gltf Standard"},
      {"@id": "urn:ngm:class:3-d-rendering", "label": "3D Rendering"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:compute-shader", "label": "Compute Shader"},
      {"@id": "urn:ngm:class:vertex-shader", "label": "Vertex Shader"},
      {"@id": "urn:ngm:class:pixel-shader", "label": "Pixel Shader"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Material Definition]] is a renderer-agnostic structured specification encoding surface physical properties — such as base colour, roughness, metalness, and emissivity — consumed by a [[Render Pipeline]] to evaluate [[Physically Based Rendering]] appearance under lighting.

- ### Relationships
  - Material definitions sit at the intersection of authoring tools and rendering engines: they reference [[Shader]] programs to compute light interaction, rely on [[Texture Mapping]] to spatially vary surface properties, and are serialised in interchange formats such as [[Gltf Standard]] and [[OpenUSD]] so that assets can flow across the [[3D Rendering]] supply chain without re-authoring.

- ### Content
  - The concept emerged from the shift toward physically based rendering in the early 2010s, when game engines and film pipelines converged on a shared vocabulary of surface descriptors. Prior ad hoc per-engine material formats were incompatible, so industry working groups — notably the Khronos Group and Pixar — formalised interchange schemas.

  - A material definition aggregates scalar and texture-backed parameters into a coherent shading model. At runtime, a vertex shader transforms geometry into screen space, a pixel shader evaluates the BRDF (bidirectional reflectance distribution function) using the material parameters and incident light data, and optional compute shaders handle effects such as subsurface scattering or ambient occlusion.

  - Material definitions are critical to consistent visual output across diverse platforms. A single PBR material authored in MaterialX can be translated to Vulkan, Metal, WebGPU, and path-traced renderers, dramatically reducing content pipeline costs for XR, metaverse, and simulation applications.

  - In 2024-2025, neural material representations are emerging alongside traditional parametric models, allowing generative AI to synthesise material definitions from photographs or text prompts. Real-time path tracing in consumer hardware, driven by NVIDIA RTX and AMD RDNA, is raising baseline fidelity expectations and accelerating adoption of richer material parameter sets including participating media and spectral colour models.

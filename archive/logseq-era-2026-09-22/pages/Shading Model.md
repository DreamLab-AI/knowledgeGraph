public:: true

# Shading Model

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:shading-model", "@type":"Page", "title":"Shading Model", "vc:slug":"shading-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:shading-model",
  "@type":"Class",
  "label":"Shading Model",
  "definition":"A shading model is a mathematical description of how a surface reflects and emits light, determining the colour and intensity seen at each point given the lighting and viewing geometry. It encapsulates a bidirectional reflectance distribution function together with parameters such as albedo, roughness and metalness. Shading models range from simple empirical formulations to physically based formulations grounded in energy conservation.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:rendering","label":"Rendering"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:brdf","label":"BRDF"},
      {"@id":"urn:ngm:class:material-system","label":"Material System"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:shader","label":"Shader"},
      {"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:physically-based-rendering","label":"Physically Based Rendering"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"},
      {"@id":"urn:ngm:class:global-illumination","label":"Global Illumination"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:graphics-pipeline","label":"Graphics Pipeline"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:gpu-rendering","label":"GPU Rendering"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:brdf","label":"BRDF"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:rendering-technique","label":"Rendering Technique"},
      {"@id":"urn:ngm:class:material-system","label":"Material System"},
      {"@id":"urn:ngm:class:physically-based-rendering","label":"Physically Based Rendering"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A shading model describes how a surface responds to light, producing the final colour at each point. It is built on the [[BRDF]] and a [[Material System]], evaluated by a [[Shader]], and increasingly follows [[Physically Based Rendering]] principles within the [[Graphics Pipeline]].
- ### Overview
  - Shading models answer the central rendering question: given the lights, the surface and the camera, what colour reaches the eye? They formalise reflection, scattering and emission as functions of material parameters and geometry.
  - Classic empirical models such as Lambert and Phong are computationally cheap but only loosely physical. Physically based shading models instead enforce energy conservation and reciprocity, yielding more consistent, realistic results across lighting conditions.
  - The chosen model defines the meaning of material authoring parameters like base colour, roughness and metalness, which is why interchange formats standardise on a small number of well-defined shading models.
- ### Key aspects
  - Reflectance function: a BRDF maps incoming to outgoing radiance per direction.
  - Parameterisation: albedo, roughness, metalness and normals drive appearance.
  - Energy conservation: physically based models never reflect more light than received.
  - Specular and diffuse terms: surfaces combine sharp highlights with broad scattering.
  - Real-time vs offline: trade-offs in fidelity against per-pixel cost.
- ### Mechanisms
  - Microfacet BRDF evaluation in fragment or compute shaders.
  - Texture sampling to vary material parameters across a surface.
  - Image-based lighting and global illumination to supply incident radiance.
  - Tone mapping to fit high-dynamic-range shading output to displays.
- ### Applications
  - Real-time rendering in game and XR engines.
  - Offline rendering for film and product visualisation.
  - Material authoring and interchange across content pipelines.
- ### Relationships
  - hasPart:: [[BRDF]]
  - hasPart:: [[Material System]]
  - uses:: [[Shader]]
  - uses:: [[Texture Mapping]]
  - implements:: [[Physically Based Rendering]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[Global Illumination]]
  - partOf:: [[Graphics Pipeline]]
  - supports:: [[GPU Rendering]]
  - dependsOn:: [[BRDF]]
  - relatedTo:: [[Rendering Technique]]
  - relatedTo:: [[Material System]]
  - relatedTo:: [[Physically Based Rendering]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation

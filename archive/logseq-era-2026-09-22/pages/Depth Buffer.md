public:: true

# Depth Buffer

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:depth-buffer", "@type":"Page", "title":"Depth Buffer", "vc:slug":"depth-buffer", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:depth-buffer",
  "@type":"Class",
  "label":"Depth Buffer",
  "definition":"A depth buffer (also called a z-buffer) is a per-pixel array maintained during rasterised rendering that stores the depth of the nearest surface drawn at each screen position. As fragments are generated, their interpolated depth is compared against the stored value, and only fragments closer to the camera overwrite the colour and depth, resolving visibility automatically. The depth buffer is the standard hidden-surface-removal mechanism in real-time graphics pipelines.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"},{"@id":"urn:ngm:class:graphics-pipeline","label":"Graphics Pipeline"}],
    "hasPart":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}],
    "requires":[{"@id":"urn:ngm:class:rasterization","label":"Rasterization"},{"@id":"urn:ngm:class:gpu","label":"GPU"}],
    "uses":[{"@id":"urn:ngm:class:gpu-acceleration","label":"GPU Acceleration"}],
    "enables":[{"@id":"urn:ngm:class:occlusion-culling","label":"Occlusion Culling"}],
    "supports":[{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
    "contrastsWith":[{"@id":"urn:ngm:class:ray-tracing","label":"Ray Tracing"}],
    "relatedTo":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"},{"@id":"urn:ngm:class:gpu","label":"GPU"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Depth Buffer]] (z-buffer) stores per-pixel nearest-surface depth during rendering, a component of the [[Rendering Pipeline]].
  - It resolves visibility by comparing each fragment's depth against the stored value during [[Rasterization]].
  - It is the standard hidden-surface-removal technique in real-time [[Computer Graphics]].
  - It runs on the [[GPU]] alongside colour and stencil buffers.
- ### Overview
  - The depth buffer holds one depth value per screen pixel, initialised to the far plane.
  - As triangles are rasterised, each fragment's interpolated depth is tested against the stored depth.
  - Closer fragments pass the depth test and update both the colour and depth buffers; farther ones are discarded.
  - This per-pixel test automatically resolves arbitrary overlapping geometry without sorting.
- ### Mechanisms
  - Depth interpolation across each rasterised primitive.
  - The depth (z) test with configurable comparison functions (less, less-equal, etc.).
  - Depth writes gated by the test result and write mask.
  - Precision management via the projection matrix, depth ranges, and reversed-z to mitigate banding.
- ### Key aspects
  - Precision: non-linear distribution of depth values concentrated near the camera.
  - Z-fighting: artefacts when surfaces have nearly equal depth, mitigated by bias or reversed-z.
  - Early-z: hardware rejection of occluded fragments before shading for performance.
  - Memory: depth attachments consume framebuffer bandwidth alongside colour.
- ### Applications
  - Real-time 3D rendering in games, simulation, and AR/VR.
  - Drives [[Occlusion Culling]] and early fragment rejection.
  - Input to post-processing such as ambient occlusion and depth of field.
  - Shadow mapping stores scene depth from the light's viewpoint.
- ### Relationships
  - partOf:: [[Rendering Pipeline]]
  - partOf:: [[Graphics Pipeline]]
  - hasPart:: [[Texture Mapping]]
  - requires:: [[Rasterization]]
  - requires:: [[GPU]]
  - uses:: [[GPU Acceleration]]
  - enables:: [[Occlusion Culling]]
  - supports:: [[Computer Graphics]]
  - contrastsWith:: [[Ray Tracing]]
  - relatedTo:: [[Texture Mapping]]
  - relatedTo:: [[GPU]]
  - relatedTo:: [[Spatial Computing]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62

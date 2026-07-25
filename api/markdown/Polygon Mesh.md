public:: true

# Polygon Mesh

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:polygon-mesh", "@type":"Page", "title":"Polygon Mesh", "vc:slug":"polygon-mesh", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:polygon-mesh",
  "@type":"Class",
  "label":"Polygon Mesh",
  "definition":"A polygon mesh is a collection of vertices, edges, and faces that defines the shape of a polyhedral object in three-dimensional computer graphics. Faces are usually triangles or quadrilaterals whose connectivity describes a surface, and per-vertex attributes such as normals and texture coordinates support shading and texturing. Polygon meshes are the dominant representation for real-time rendering, modelling, and animation.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
    "hasPart":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"},{"@id":"urn:ngm:class:level-of-detail","label":"Level of Detail"}],
    "requires":[{"@id":"urn:ngm:class:rendering","label":"Rendering"}],
    "uses":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"},{"@id":"urn:ngm:class:rasterization","label":"Rasterization"}],
    "enables":[{"@id":"urn:ngm:class:rendering","label":"Rendering"},{"@id":"urn:ngm:class:animation","label":"Animation"}],
    "supports":[{"@id":"urn:ngm:class:gpu-rendering","label":"GPU Rendering"},{"@id":"urn:ngm:class:level-of-detail","label":"Level of Detail"}],
    "implements":[{"@id":"urn:ngm:class:usd","label":"USD"}],
    "bridgesTo":[{"@id":"urn:ngm:class:procedural-generation","label":"Procedural Generation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:procedural-generation","label":"Procedural Generation"}],
    "relatedTo":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"},{"@id":"urn:ngm:class:gpu-rendering","label":"GPU Rendering"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A polygon mesh represents a 3D surface as vertices, edges, and faces. It is the dominant data structure in [[Computer Graphics]], feeding [[Rendering]] pipelines and [[Animation]] via [[Texture Mapping]] and [[Rasterization]].
- Faces — typically triangles or quads — and their connectivity define the object's shape.
- ### Overview
- Vertices carry position plus attributes such as normals, colours, and texture coordinates used during shading.
- Edges connect vertices, and faces enclose regions to form the visible surface.
- Triangulated meshes are favoured for hardware rendering because triangles are always planar and convex.
- ### Key aspects
- Topology: how vertices, edges, and faces connect, governing surface continuity.
- Geometry: the spatial positions of vertices defining the shape.
- Attributes: normals, UV coordinates, and weights attached to vertices for shading and deformation.
- Resolution: face count trades visual fidelity against performance, managed through [[Level of Detail]].
- ### Mechanisms
- Rasterization projects mesh faces to the screen for [[GPU Rendering]].
- [[Texture Mapping]] applies images to faces via per-vertex UV coordinates.
- Subdivision and decimation adjust mesh density for quality or speed.
- Skinning binds mesh vertices to a skeleton for [[Skeletal Animation]].
- ### Applications
- Real-time rendering of objects and environments in games and XR.
- Asset interchange through formats such as [[USD]].
- Deformable characters animated with [[Skeletal Animation]].
- Surfaces produced or refined by [[Procedural Generation]].
- ### Relationships
- partOf:: [[Computer Graphics]]
- hasPart:: [[Texture Mapping]]
- hasPart:: [[Level of Detail]]
- requires:: [[Rendering]]
- uses:: [[Texture Mapping]]
- uses:: [[Rasterization]]
- enables:: [[Rendering]]
- enables:: [[Animation]]
- supports:: [[GPU Rendering]]
- supports:: [[Level of Detail]]
- implements:: [[USD]]
- bridgesTo:: [[Procedural Generation]]
- contrastsWith:: [[Procedural Generation]]
- relatedTo:: [[Skeletal Animation]]
- relatedTo:: [[GPU Rendering]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

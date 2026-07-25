public:: true

# Obj Format

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:obj-format", "@type":"Page", "title":"Obj Format", "vc:slug":"obj-format", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:obj-format",
  "@type":"Class",
  "label":"Obj Format",
  "definition":"The OBJ format (Wavefront .obj) is a simple, text-based 3D geometry interchange format that stores polygon mesh data as lists of vertices, texture coordinates, normals and faces. It is openly documented and almost universally supported, with material properties carried in a companion .mtl file. Valued for its readability and portability rather than efficiency, OBJ remains a common lowest-common-denominator format for exchanging static 3D models between modelling tools and pipelines.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:polygon-mesh","label":"Polygon Mesh"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:mesh-data","label":"Mesh Data"},{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"},{"@id":"urn:ngm:class:3-d-model","label":"3D Model"}],
    "supports":[{"@id":"urn:ngm:class:3-d-asset","label":"3D Asset"}],
    "requires":[{"@id":"urn:ngm:class:polygon-mesh","label":"Polygon Mesh"}],
    "implements":[{"@id":"urn:ngm:class:polygon-mesh","label":"Polygon Mesh"}],
    "partOf":[{"@id":"urn:ngm:class:3-d-asset","label":"3D Asset"}],
    "dependsOn":[{"@id":"urn:ngm:class:mesh-data","label":"Mesh Data"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards-organization","label":"Standards Organization"}],
    "contrastsWith":[{"@id":"urn:ngm:class:fbx","label":"FBX"},{"@id":"urn:ngm:class:gl-tf","label":"glTF"}],
    "bridgesTo":[{"@id":"urn:ngm:class:gl-tf","label":"glTF"}],
    "relatedTo":[{"@id":"urn:ngm:class:fbx","label":"FBX"},{"@id":"urn:ngm:class:3-d-model","label":"3D Model"},{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The OBJ format is a text-based interchange format for [[Polygon Mesh]] geometry, storing vertices, normals, texture coordinates and faces.
- It carries [[Mesh Data]] and references materials and [[Texture Mapping]] via a companion .mtl file.
- Its openness makes it a common portability choice for exchanging a static [[3D Model]] across tools.
- ### Overview
- Originating with the Wavefront Technologies animation package, OBJ became a de facto standard precisely because it is plain text and trivially parseable. Each line declares one element — a vertex, a texture coordinate, a normal or a face referencing those by index.
- The format deliberately omits animation, rigging and scene-graph data, focusing on static geometry. Material appearance lives in a separate Material Template Library (.mtl) file alongside the .obj.
- Its simplicity is also its limitation: large meshes produce verbose files, and richer pipelines prefer binary, feature-complete formats, so OBJ persists mainly as an exchange and archival format.
- ### Key aspects
- Plain-text, human-readable encoding of mesh primitives.
- Vertices, texture coordinates, normals and indexed faces.
- Companion .mtl file for material definitions.
- No support for animation, skeletons or scene hierarchy.
- Near-universal import and export support.
- ### Applications
- Exchanging static models between modelling and CAD tools.
- Importing scanned or generated geometry into engines and renderers.
- Simple archival of 3D asset geometry.
- ### Relationships
- uses:: [[Mesh Data]]
- uses:: [[Texture Mapping]]
- enables:: [[Interoperability]]
- enables:: [[3D Model]]
- supports:: [[3D Asset]]
- requires:: [[Polygon Mesh]]
- implements:: [[Polygon Mesh]]
- partOf:: [[3D Asset]]
- dependsOn:: [[Mesh Data]]
- standardizedBy:: [[Standards Organization]]
- contrastsWith:: [[FBX]]
- contrastsWith:: [[glTF]]
- bridgesTo:: [[glTF]]
- relatedTo:: [[FBX]]
- relatedTo:: [[3D Model]]
- relatedTo:: [[Texture Mapping]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

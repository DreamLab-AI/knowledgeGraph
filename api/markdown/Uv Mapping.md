public:: true

# Uv Mapping

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:uv-mapping", "@type":"Page", "title":"Uv Mapping", "vc:slug":"uv-mapping", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uv-mapping",
  "@type": "Class",
  "label": "Uv Mapping",
  "definition": "UV mapping is the process of projecting a 3D model's surface onto a two-dimensional coordinate space so that texture images can be applied accurately to its geometry. The letters U and V denote the axes of this 2D texture space, distinct from the X, Y, and Z axes of the model. By unwrapping the mesh into UV islands, artists control how textures, normal maps, and other surface data wrap around the object with minimal stretching or seams.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:3d-modelling",
      "label": "3D Modelling"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:3d-modelling",
        "label": "3D Modelling"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:vertex-attribute",
        "label": "Vertex Attribute"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:texture-atlas",
        "label": "Texture Atlas"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:normal-map",
        "label": "Normal Map"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:polygon-mesh",
        "label": "Polygon Mesh"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:3d-modelling",
        "label": "3D Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Ambient Occlusion"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:skeletal-rig",
        "label": "Skeletal Rig"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
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
- UV mapping unwraps a 3D surface into a flat coordinate space so that [[Texture Mapping]] can place image detail precisely onto [[Polygon Mesh]] geometry.
- It is a core step of [[3D Modelling]] that produces the per-vertex texture coordinates a [[Shader]] uses at render time.
- Quality UV layouts let a [[Texture Atlas]], [[Normal Map]], and other surface data wrap with minimal stretching or visible seams.
- ### Overview
- Every vertex of a textured model carries UV coordinates that map it to a position in the 2D texture image.
- Artists unwrap the mesh into UV islands, balancing the trade-off between fewer seams and lower distortion.
- Well-laid UVs maximise texel density on visible areas and pack islands efficiently to use texture memory well.
- The same UV layout can be reused for colour, roughness, normal, and ambient-occlusion maps, keeping all surface data registered.
- UV mapping is independent of rigging and animation, addressing surface appearance rather than deformation.
- ### Mechanisms
- Unwrapping — flattening 3D faces into 2D islands while preserving relative scale.
- Seam placement — choosing edges to cut so distortion is hidden in less visible regions.
- Texel density — keeping consistent texture resolution across the surface.
- Packing — arranging islands to fill the texture space efficiently.
- Baking — transferring high-detail surface data into maps aligned to the UV layout.
- ### Applications
- Texturing game and film assets with colour and material maps.
- Baking normal and ambient-occlusion detail from high-resolution sculpts.
- Real-time rendering where texture atlases reduce draw calls.
- Preparing assets for metaverse and AR/VR experiences.
- ### Relationships
- partOf:: [[3D Modelling]]
- hasPart:: [[Vertex Attribute]]
- uses:: [[Texture Mapping]]
- uses:: [[Texture Atlas]]
- enables:: [[Texture Mapping]]
- enables:: [[Normal Map]]
- requires:: [[Polygon Mesh]]
- dependsOn:: [[3D Modelling]]
- supports:: [[Rendering]]
- supports:: [[Ambient Occlusion]]
- relatedTo:: [[Shader]]
- relatedTo:: [[Digital Asset]]
- contrastsWith:: [[Skeletal Rig]]
- bridgesTo:: [[Real-Time Rendering]]
- implements:: [[Texture Mapping]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

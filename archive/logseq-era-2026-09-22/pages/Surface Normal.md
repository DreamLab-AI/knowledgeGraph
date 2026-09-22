public:: true

# Surface Normal

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:surface-normal",
  "@type": "Page",
  "title": "Surface Normal",
  "vc:slug": "surface-normal",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:surface-normal",
  "@type": "Class",
  "label": "Surface Normal",
  "definition": "A surface normal is a vector perpendicular to a surface at a given point, indicating the orientation of that surface in space. Normals are fundamental to lighting and shading calculations, because the angle between a normal and a light direction governs how much illumination a surface receives. In computer graphics and 3D reconstruction, surface normals drive realistic shading, normal mapping, and the recovery of fine geometric detail.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:scene-geometry",
      "label": "Scene Geometry"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:normal-mapping",
        "label": "Normal Mapping"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:scene-geometry",
        "label": "Scene Geometry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:scene-geometry",
        "label": "Scene Geometry"
      },
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Ambient Occlusion"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:normal-mapping",
        "label": "Normal Mapping"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:scene-geometry",
        "label": "Scene Geometry"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Ambient Occlusion"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:normal-mapping",
        "label": "Normal Mapping"
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
  - A surface normal is a property of [[Scene Geometry]] required for [[Rendering]] and [[Physically Based Rendering]].
  - It is encoded and perturbed through [[Normal Mapping]] and estimated from [[Point Cloud]] and [[Depth Estimation]] data.
  - It drives [[Ambient Occlusion]] and shading using [[Photogrammetry]]-derived geometry.
- ### Overview
  - A surface normal defines the local orientation of a surface and is the key input to most lighting models, which compute reflected intensity from the normal-light geometry.
  - Normals can be stored per-vertex, per-face, or per-texel, and interpolated across surfaces to produce smooth shading from coarse geometry.
  - Estimating accurate normals from depth maps or point clouds is essential for recovering and rendering fine surface detail.
- ### Mechanisms
  - Per-vertex normals interpolated across triangles for smooth Gouraud or Phong shading.
  - Normal maps that perturb the geometric normal per-texel to fake high-frequency detail cheaply.
  - Normal estimation from neighbourhood fitting on point clouds or gradients of depth maps.
  - Use of the normal in dot products with light and view vectors for diffuse and specular response.
- ### Applications
  - Realistic shading and physically based rendering in graphics pipelines.
  - Normal mapping to add perceived detail without increasing polygon count.
  - 3D reconstruction and photogrammetry where recovered normals refine surface geometry.
- ### Relationships
  - hasPart:: [[Normal Mapping]]
  - hasPart:: [[Point Cloud]]
  - partOf:: [[Scene Geometry]]
  - requires:: [[Scene Geometry]]
  - requires:: [[Depth Estimation]]
  - enables:: [[Rendering]]
  - enables:: [[Ambient Occlusion]]
  - enables:: [[Physically Based Rendering]]
  - uses:: [[Normal Mapping]]
  - uses:: [[Photogrammetry]]
  - supports:: [[Rendering]]
  - supports:: [[Physically Based Rendering]]
  - dependsOn:: [[Scene Geometry]]
  - relatedTo:: [[Depth Estimation]]
  - relatedTo:: [[Ambient Occlusion]]
  - relatedTo:: [[Point Cloud]]
  - bridgesTo:: [[Normal Mapping]]
  - subClassOf:: [[Scene Geometry]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15

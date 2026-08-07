public:: true

# Normal Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:118963547c211f67bf3006db1ba8993b1253bb2a44ea919a9af55cd73949009f",
  "@type": "Page",
  "vc:slug": "normal-mapping",
  "title": "Normal Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:texture-mapping",
      "vc:label": "Texture Mapping"
    },
    {
      "@id": "urn:visionflow:linked:surface-normal",
      "vc:label": "Surface Normal"
    },
    {
      "@id": "urn:visionflow:linked:pixel-shader",
      "vc:label": "Pixel Shader"
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
  "@id": "urn:ngm:class:normal-mapping",
  "@type": "Class",
  "label": "Normal Mapping",
  "definition": "A real-time rendering technique that fakes fine surface detail by storing perturbed surface normals in a texture and using them, rather than the interpolated geometric normals, during per-pixel lighting. Detail sculpted on a high-polygon model is baked into a tangent-space normal map applied to a low-polygon mesh, so bumps, scratches, and seams respond correctly to moving lights without adding geometry — a cornerstone of the game-asset pipeline and physically based rendering.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:texture-mapping",
    "label": "Texture Mapping"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:surface-normal",
        "label": "Surface Normal"
      },
      {
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:pixel-shader",
        "label": "Pixel Shader"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:polygon-mesh",
        "label": "Polygon Mesh"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A real-time rendering technique that fakes fine surface detail by storing perturbed surface normals in a texture and using them, rather than the interpolated geometric normals, during per-pixel lighting. Detail sculpted on a high-polygon model is baked into a tangent-space normal map applied to a low-polygon mesh, so bumps, scratches, and seams respond correctly to moving lights without adding geometry — a cornerstone of the game-asset pipeline and physically based rendering."

- ### Semantic Classification
  - owl-class:: spatial-computing:NormalMapping
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Texture Mapping]]
  - requires:: [[Surface Normal]]
  - uses:: [[Pixel Shader]]
  - related-to:: [[Rendering Pipeline]]

- ### Content

  ## Definition

  **Normal mapping** is the standard trick for making low-polygon surfaces look richly detailed under dynamic lighting. Lighting calculations depend on the [[Surface Normal]] at each shaded point; if the normal is perturbed per pixel, the lighting responds as though the geometry itself were bumpy. A normal map is a texture whose RGB channels encode the XYZ components of a unit normal (remapped from [−1, 1] to [0, 255], which produces the characteristic lavender-blue appearance, since the "flat" normal (0, 0, 1) encodes as (128, 128, 255)). During shading, the [[Pixel Shader]] samples this texture and substitutes the decoded normal into the lighting equation.

  The technique descends from Blinn's 1978 bump mapping, which perturbed normals from a height field; storing the normals directly (Cohen et al.'s appearance-preserving simplification and Cignoni et al.'s work, 1998) made the perturbation cheaper and more expressive. The dominant variant is **tangent-space** normal mapping: normals are stored relative to a per-vertex basis (tangent, bitangent, normal) aligned with the mesh's [[Uv Mapping]], so the map survives mesh deformation and can be reused across meshes. Object-space maps trade that flexibility for cheaper shading on rigid objects.

  In the production pipeline, artists sculpt a multi-million-polygon model in ZBrush or Blender, build a low-polygon game mesh, and **bake** the difference: rays cast from the low-poly surface sample the high-poly normals into the map. Correctness depends on consistent tangent-space conventions — MikkTSpace is the de facto standard — and on the Y-channel handedness (OpenGL-style +Y versus DirectX-style −Y), the source of the perennial "inverted bumps" bug. Normal mapping cannot change silhouettes or produce self-occlusion; parallax occlusion mapping, displacement with tessellation, and virtualised geometry (Nanite) address those limits, yet normal maps remain in every PBR material stack.

  ## Technical Details

  - **Encoding**: unit vector per texel; two-channel formats (BC5/EAC RG) store X and Y and reconstruct Z = √(1 − x² − y²), giving better quality per bit than compressing all three channels.
  - **Shading**: the TBN matrix transforms the sampled normal from tangent space to world space (or the light vector the other way); normalisation and careful mip-mapping matter because averaging normals shortens them, which specular models such as LEAN/Toksvig mapping compensate for.
  - **Baking tools**: Substance 3D Painter/Designer, Marmoset Toolbag, xNormal, and Blender's Cycles baker; cage meshes control ray projection to avoid skewed or missed details.
  - **PBR integration**: glTF 2.0, USD, and every major engine (Unreal, Unity, Godot) treat the tangent-space normal map as a core material input alongside base colour, roughness, and metallic maps.

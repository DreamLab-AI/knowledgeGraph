public:: true

# Vertex Shader
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ae1e4f2db3c2ad50ad5f27e3fcb9554c2404811375041a77a3bbd96935c2ca71",
  "@type": "Page",
  "vc:slug": "vertex-shader",
  "title": "Vertex Shader",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu-programming",
      "vc:label": "GPU Programming"
    },
    {
      "@id": "urn:visionflow:linked:graphics-pipeline",
      "vc:label": "Graphics Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-shader",
      "vc:label": "Compute Shader"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:pixel-shader",
      "vc:label": "Pixel Shader"
    },
    {
      "@id": "urn:visionflow:owl:class:rasterization",
      "vc:label": "Rasterization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Vertex Shader"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vertex-shader",
  "@type": "Class",
  "label": "Vertex Shader",
  "definition": "A mandatory, programmable GPU stage that processes individual vertices within the graphics pipeline, transforming 3D coordinates through model, view, and projection matrices into clip space whilst computing per-vertex attributes such as normals, texture coordinates, and lighting terms that are subsequently interpolated across primitives for the fragment shader.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:pixel-shader",
        "label": "Pixel Shader"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:visual-effects",
        "label": "Visual Effects"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:vertex-shader:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ae1e4f2db3c2ad50ad5f27e3fcb9554c2404811375041a77a3bbd96935c2ca71"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU Programming]]",
      "resolved": "urn:visionflow:linked:gpu-programming",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Pipeline]]",
      "resolved": "urn:visionflow:linked:graphics-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Shader]]",
      "resolved": "urn:visionflow:owl:class:compute-shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Pixel Shader]]",
      "resolved": "urn:visionflow:owl:class:pixel-shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rasterization]]",
      "resolved": "urn:visionflow:owl:class:rasterization",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A mandatory, programmable GPU stage that processes individual vertices within the graphics pipeline, transforming 3D coordinates through model, view, and projection matrices into clip space whilst computing per-vertex attributes such as normals, texture coordinates, and lighting terms that are subsequently interpolated across primitives for the fragment shader.

- ### Semantic Classification
  - owl-class:: spatial-computing:VertexShader
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Metaverse]]
  - Part Of: [[Shader]]
  - Uses: [[Rasterization]]
  - Enables: [[Pixel Shader]]
  - Related To: [[Compute Shader]], [[Visual Effects]]

- ### Content

  #### Key Characteristics
  - **Per-Vertex Execution**: Runs independently for each vertex
  - **Parallel Processing**: Thousands of vertices processed simultaneously
  - **Transformation Role**: Model-view-projection matrix operations
  - **Attribute Passing**: Outputs interpolated to pixel shader
  - **Mandatory Stage**: Cannot be bypassed in rendering pipeline

  ## Primary Responsibilities

  ### 1. Coordinate Transformation
  - **Model Space → World Space**: Apply model matrix
  - **World Space → View Space**: Apply view/camera matrix
  - **View Space → Clip Space**: Apply projection matrix
  - **Clip Space → NDC**: Perspective division (automatic)

  ### 2. Lighting Calculations
  - Per-vertex lighting (Gouraud shading)
  - Normal transformation for lighting
  - Light direction and intensity calculations
  - Pre-compute lighting terms for pixel shader

  ### 3. Texture Coordinate Processing
  - UV coordinate transformation
  - Texture scrolling/animation
  - Multi-texture coordinate generation
  - Procedural UV generation

  ### 4. Vertex Animation
  - Skeletal animation (bone transformations)
  - Morph target blending
  - Cloth/soft-body simulation
  - Procedural vertex displacement

  ## Typical Inputs

  - **Position**: 3D vertex coordinates
  - **Normal**: Surface orientation
  - **Texture Coordinates**: UV mapping
  - **Color**: Per-vertex color (optional)
  - **Tangent/Bitangent**: For normal mapping
  - **Bone Weights/Indices**: For skeletal animation

  ## Typical Outputs

  - **gl_Position**: Clip-space vertex position (mandatory)
  - **Interpolated Normals**: For per-pixel lighting
  - **Texture Coordinates**: Passed to pixel shader
  - **World Position**: For advanced lighting
  - **Vertex Color**: For color interpolation

  ## Example Shader Code (GLSL)

  ```glsl
  #version 450 core

  // Inputs
  layout(location = 0) in vec3 aPosition;
  layout(location = 1) in vec3 aNormal;
  layout(location = 2) in vec2 aTexCoord;

  // Outputs
  out vec3 FragWorldPos;
  out vec3 FragNormal;
  out vec2 FragTexCoord;

  // Uniforms
  uniform mat4 uModelMatrix;
  uniform mat4 uViewMatrix;
  uniform mat4 uProjectionMatrix;
  uniform mat3 uNormalMatrix;

  void main() {
    // Transform to world space
    vec4 worldPos = uModelMatrix * vec4(aPosition, 1.0);
    FragWorldPos = worldPos.xyz;

    // Transform normal
    FragNormal = normalize(uNormalMatrix * aNormal);

    // Pass texture coordinates
    FragTexCoord = aTexCoord;

    // Transform to clip space (mandatory output)
    gl_Position = uProjectionMatrix * uViewMatrix * worldPos;
  }
  ```

  ## Definition

  Programmable GPU stage in the graphics pipeline that processes individual vertices, performing coordinate transformations, lighting calculations, texture coordinate generation, and attribute passing to subsequent pipeline stages.

  #### Related Concepts
  - [[Pixel Shader]]
  - [[Compute Shader]]
  - [[Rasterization]]
  - [[Graphics Pipeline]]
  - [[GPU Programming]]

  ## Applications

  - Character skeletal animation
  - Terrain height displacement
  - Water wave simulation
  - Cloth and particle effects
  - Procedural geometry generation

  ## Optimization Techniques

  - Minimize branching (if statements)
  - Pre-compute matrices on CPU
  - Reduce per-vertex calculations
  - Use appropriate precision (mediump vs. highp)
  - Batch similar draw calls

  ## Performance Considerations

  - Vertex count directly impacts performance
  - Complex calculations better in pixel shader (fewer invocations)
  - Balance between vertex and pixel shader work
  - Use instancing for repeated geometry
  - LOD systems reduce vertex processing

  ## Common Techniques

  - **Skinning**: Skeletal animation via bone matrices
  - **Displacement Mapping**: Modify vertex positions based on texture
  - **Billboard Generation**: Generate camera-facing quads
  - **Shadow Volume Extrusion**: Silhouette edge processing
  - **Tessellation Control**: Adaptive geometry detail

  #### References
  - Sellers, G. et al. (2016). *Vulkan Programming Guide*
  - Luna, F. (2016). *Introduction to 3D Game Programming with DirectX 12*
  - Rost, R. et al. (2009). *OpenGL Shading Language*, 3rd ed.

  ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

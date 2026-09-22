public:: true

# Pixel Shader
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:71fe2594f02a175665cc9f2ff38b2d7d09c28f333ff0b53c7114984c94555f6e",
  "@type": "Page",
  "vc:slug": "pixel-shader",
  "title": "Pixel Shader",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:normal-mapping",
      "vc:label": "Normal Mapping"
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
      "@id": "urn:visionflow:owl:class:physically-based-rendering",
      "vc:label": "Physically-Based Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:texture-mapping",
      "vc:label": "Texture Mapping"
    },
    {
      "@id": "urn:visionflow:owl:class:vertex-shader",
      "vc:label": "Vertex Shader"
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
      "vc:value": "Pixel Shader"
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
  "@id": "urn:ngm:class:pixel-shader",
  "@type": "Class",
  "label": "Pixel Shader",
  "definition": "A programmable GPU stage that executes once per rasterised fragment, determining each pixel's final colour and depth by sampling textures, computing lighting models, and applying material properties. Pixel shaders operate in a massively parallel fashion and are the primary site for physically-based rendering calculations in real-time graphics pipelines.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:sc-display-and-rendering",
    "label": "Display and Rendering"
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:fragment-shader",
      "label": "Fragment Shader"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:phong-shading",
        "label": "Phong Shading"
      },
      {
        "@id": "urn:ngm:class:normal-mapping",
        "label": "Normal Mapping"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:glsl",
        "label": "GLSL"
      },
      {
        "@id": "urn:ngm:class:hlsl",
        "label": "HLSL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:deferred-rendering",
        "label": "Deferred Rendering"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Screen Space Ambient Occlusion"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:geometry-shader",
        "label": "Geometry Shader"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:framebuffer",
        "label": "Framebuffer"
      },
      {
        "@id": "urn:ngm:class:shadow-mapping",
        "label": "Shadow Mapping"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:xr-rendering",
        "label": "XR Rendering"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pixel-shader:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:71fe2594f02a175665cc9f2ff38b2d7d09c28f333ff0b53c7114984c94555f6e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Normal Mapping]]",
      "resolved": "urn:visionflow:linked:normal-mapping",
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
      "raw": "[[Physically-Based Rendering]]",
      "resolved": "urn:visionflow:owl:class:physically-based-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Texture Mapping]]",
      "resolved": "urn:visionflow:owl:class:texture-mapping",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vertex Shader]]",
      "resolved": "urn:visionflow:owl:class:vertex-shader",
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
  - A programmable GPU stage that executes once per rasterised fragment, determining each pixel's final colour and depth by sampling textures, computing lighting models, and applying material properties. Pixel shaders operate in a massively parallel fashion and are the primary site for physically-based rendering calculations in real-time graphics pipelines.

- ### Semantic Classification
  - owl-class:: spatial-computing:PixelShader
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Metaverse]]
  - Requires [[Vertex Shader]]
  - Requires [[Rendering Pipeline]]
  - Uses [[Texture Mapping]]
  - Uses [[GPU Compute]]
  - Implements [[Physically Based Rendering]]
  - Related To [[Compute Shader]]
  - Related To [[Shader]]

- ### Content

  #### Key Characteristics
  - **Per-Fragment Execution**: Runs for every visible pixel
  - **Massively Parallel**: Millions of fragments processed per frame
  - **Visual Detail**: Determines final appearance quality
  - **Texture Sampling**: Primary stage for texture lookup
  - **Lighting Computation**: Per-pixel lighting (Phong, PBR)

  ## Primary Responsibilities

  ### 1. Texture Sampling
  - Albedo/diffuse color textures
  - Normal maps for surface detail
  - Specular/metallic/roughness maps
  - Ambient occlusion textures
  - Emissive maps for glowing surfaces

  ### 2. Lighting Calculations
  - **Phong/Blinn-Phong**: Classic lighting model
  - **Physically-Based Rendering (PBR)**: Realistic material response
  - **Shadow Mapping**: Shadow determination
  - **Ambient Occlusion**: Soft shadowing in crevices
  - **Global Illumination**: Indirect lighting contribution

  ### 3. Material Properties
  - Surface albedo (base color)
  - Metallic vs. dielectric distinction
  - Roughness/glossiness
  - Anisotropy for materials like brushed metal
  - Subsurface scattering for skin, wax

  ### 4. Special Effects
  - **Normal Mapping**: Surface detail without geometry
  - **Parallax Mapping**: Depth illusion
  - **Fog and Atmospheric Effects**: Distance-based fading
  - **Post-Processing**: Screen-space effects
  - **Alpha Blending**: Transparency

  ## Typical Inputs (Interpolated)

  - **Position**: World or screen-space coordinates
  - **Normal**: Surface orientation
  - **Texture Coordinates**: UV for texture sampling
  - **Tangent/Bitangent**: For normal mapping (TBN matrix)
  - **Vertex Color**: For tinting or effects
  - **Light Space Position**: For shadow mapping

  ## Typical Outputs

  - **Color**: RGBA output to framebuffer (mandatory)
  - **Depth**: Modified depth value (optional)
  - **Multiple Render Targets (MRT)**: G-buffer for deferred rendering

  ## Example Shader Code (GLSL)

  ```glsl
  #version 450 core

  // Inputs (interpolated from vertex shader)
  in vec3 FragWorldPos;
  in vec3 FragNormal;
  in vec2 FragTexCoord;

  // Outputs
  out vec4 FragColor;

  // Uniforms
  uniform sampler2D uAlbedoMap;
  uniform sampler2D uNormalMap;
  uniform sampler2D uMetallicRoughnessMap;
  uniform vec3 uCameraPos;
  uniform vec3 uLightPos;
  uniform vec3 uLightColor;

  // Simplified PBR lighting
  void main() {
    // Sample textures
    vec3 albedo = texture(uAlbedoMap, FragTexCoord).rgb;
    vec3 normal = normalize(FragNormal); // Simplified, should use normal map
    vec2 metalRough = texture(uMetallicRoughnessMap, FragTexCoord).rg;
    float metallic = metalRough.r;
    float roughness = metalRough.g;

    // Lighting vectors
    vec3 N = normal;
    vec3 V = normalize(uCameraPos - FragWorldPos);
    vec3 L = normalize(uLightPos - FragWorldPos);
    vec3 H = normalize(V + L);

    // Simplified PBR (Lambertian diffuse + Blinn-Phong specular)
    float NdotL = max(dot(N, L), 0.0);
    vec3 diffuse = albedo * (1.0 - metallic) * NdotL;

    float NdotH = max(dot(N, H), 0.0);
    float shininess = (1.0 - roughness) * 128.0;
    vec3 specular = vec3(pow(NdotH, shininess)) * metallic;

    // Combine lighting
    vec3 ambient = albedo * 0.03;
    vec3 finalColor = (ambient + diffuse + specular) * uLightColor;

    FragColor = vec4(finalColor, 1.0);
  }
  ```

  #### Related Concepts
  - [[Vertex Shader]]
  - [[Compute Shader]]
  - [[Physically-Based Rendering]]
  - [[Normal Mapping]]
  - [[Texture Mapping]]

  ## Applications

  - Material rendering (PBR workflows)
  - Per-pixel lighting (Phong, PBR)
  - Normal and parallax mapping
  - Screen-space effects (SSAO, SSR)
  - Procedural textures and patterns

  ## Optimization Techniques

  - **Minimize Texture Samples**: Expensive memory access
  - **Reduce Branching**: Divergent execution hurts performance
  - **Use Appropriate Precision**: mediump vs. highp
  - **Defer Complex Calculations**: Move to vertex shader if possible
  - **Texture Atlasing**: Reduce texture bind changes

  ## Performance Considerations

  - Fragment count scales with screen resolution
  - Overdraw significantly impacts performance
  - Complex materials increase per-pixel cost
  - Transparent surfaces require sorting and blending
  - Depth pre-pass can reduce fragment processing

  ## Common Techniques

  ### Lighting Models
  - **Phong/Blinn-Phong**: Classic specular highlights
  - **Cook-Torrance**: Microfacet-based PBR
  - **Lambert**: Simple diffuse
  - **Oren-Nayar**: Rough diffuse surfaces

  ### Texture Techniques
  - **Normal Mapping**: Surface detail illusion
  - **Parallax Occlusion Mapping**: Depth parallax
  - **Triplanar Mapping**: Seamless terrain texturing
  - **Detail Mapping**: High-frequency surface detail

  ### Special Effects
  - **Fresnel Effect**: Edge highlighting
  - **Rim Lighting**: Silhouette enhancement
  - **Fog**: Distance-based atmospheric effects
  - **Dithering**: Transparency approximation

  #### References
  - Hoffman, N. & Barczak, J. (2016). "Rendering Techniques in Battlefield 1"
  - Karis, B. (2013). "Real Shading in Unreal Engine 4"
  - Rost, R. et al. (2009). *OpenGL Shading Language*, 3rd ed.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

- ### Definition
  - Pixel Shader is a concept within the mv domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:PixelShader
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Metaverse]]

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

  ## Definition

  Programmable GPU stage that determines the final color and depth of each pixel fragment by processing interpolated vertex data, sampling textures, executing lighting models, and applying material properties through complex mathematical operations.

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

  ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
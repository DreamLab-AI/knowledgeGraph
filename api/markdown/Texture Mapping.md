public:: true

# Texture Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:84964b88996be70a0991c0ec03813de65af89c4328001b6f251d7fe488934bbb",
  "@type": "Page",
  "vc:slug": "texture-mapping",
  "title": "Texture Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9155"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Texture Mapping"
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
  "@id": "urn:ngm:class:texture-mapping",
  "@type": "Class",
  "label": "Texture Mapping",
  "definition": "Texture mapping is the computer graphics technique of applying a 2D image (texture) to the surface of a 3D geometric model so as to simulate surface colour, roughness, reflectance, and fine structural detail without subdividing the underlying mesh. The process involves establishing a correspondence between 3D surface points and 2D texture coordinates (UV space), then sampling the texture through a pipeline that handles filtering, mipmapping, and perspective-correct interpolation. Modern pipelines extend the concept to multi-channel PBR texture sets (albedo, metalness, roughness, normal, ambient-occlusion, emissive) that together drive physically-based shading models, enabling photorealistic rendering in both real-time and offline contexts.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:surface-texturing",
      "label": "Surface Texturing"
    }
  ],
  "quality": 0.72,
  "qualityScore": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      },
      {
        "@id": "urn:ngm:class:normal-mapping",
        "label": "Normal Mapping"
      },
      {
        "@id": "urn:ngm:class:mipmap",
        "label": "Mipmap"
      },
      {
        "@id": "urn:ngm:class:texture-atlas",
        "label": "Texture Atlas"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:uv-unwrapping",
        "label": "UV Unwrapping"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      },
      {
        "@id": "urn:ngm:class:pixel-shader",
        "label": "Pixel Shader"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:photorealism",
        "label": "Photorealism"
      },
      {
        "@id": "urn:ngm:class:differentiable-rendering",
        "label": "Differentiable Rendering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:procedural-texture",
        "label": "Procedural Texture"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:texture-compression",
        "label": "Texture Compression"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:displacement-mapping",
        "label": "Displacement Mapping"
      },
      {
        "@id": "urn:ngm:class:procedural-texture",
        "label": "Procedural Material"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:open-gl",
        "label": "OpenGL"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-radiance-field",
        "label": "Neural Radiance Field"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:material-definition",
        "label": "Material Definition Language"
      },
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
  "@id": "urn:visionflow:annotation:link-resolutions:texture-mapping:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:84964b88996be70a0991c0ec03813de65af89c4328001b6f251d7fe488934bbb"
  },
  "vc:resolutions": [],
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
  - Texture mapping is the computer graphics technique of applying a 2D image (a **texture**) to the surface of a 3D geometric model to simulate surface colour, roughness, reflectance, and fine structural detail without subdividing the underlying [[Polygon Mesh]]. It relies on establishing a bijective correspondence between 3D surface points and 2D coordinates in [[UV Mapping]] space, then sampling the texture through a hardware-accelerated pipeline that handles filtering, [[Mipmap]] level-of-detail, and perspective-correct interpolation. Modern texture pipelines extend the concept to multi-channel [[Physically Based Rendering]] (PBR) texture sets whose channels together drive a [[Shader]] that models real-world light interaction with materials.

- ### Overview
  - Texture mapping was formalised by Ed Catmull in 1974 as a means to add surface richness to geometrically simple meshes. It remains the dominant technique for visual detail in [[Real-Time Rendering]] and offline [[Ray Tracing]] alike.
  - The core motivation is efficiency: modelling surface scratches, wood grain, or fabric weave geometrically requires millions of extra triangles; mapping an image costs only a texture fetch per fragment.
  - In the [[Rendering Pipeline]], textures are sampled inside a [[Pixel Shader]] (fragment shader) that determines each pixel's final colour and material properties.
  - [[GPU]] hardware exposes dedicated texture units — fixed-function silicon that performs bilinear or trilinear filtering and mip selection at full throughput.
  - The rise of [[Physically Based Rendering]] (PBR) consolidated many legacy texture tricks (specular maps, gloss maps, diffuse maps) into a small canonical set of PBR channels understood by physically grounded shading models such as GGX/Trowbridge-Reitz.

- ### Key Components
  - #### UV Unwrapping and UV Space
    - [[UV Unwrapping]] is the process of cutting and unfolding a 3D mesh into a flat 2D layout (the UV chart) so that texels map uniquely to surface points.
    - Good UV layouts minimise distortion, seam visibility, and wasted texel space.
    - UV atlasing ([[Texture Atlas]]) packs multiple mesh charts into a single texture to reduce draw calls and improve GPU cache efficiency.
  - #### Texture Types
    - **Albedo / Diffuse map** — base colour of the surface under uniform lighting.
    - **Normal map** — RGB image encoding per-texel surface normals in tangent space, used in [[Normal Mapping]] to fake geometric micro-detail without extra polygons.
    - **[[Bump Mapping]]** — precursor to normal mapping; stores scalar height offsets; lower fidelity but faster to author.
    - **[[Displacement Mapping]]** — actually perturbs vertex positions, requiring tessellation; provides true silhouette detail unlike normal mapping.
    - **Metalness / Roughness / AO maps** — PBR channels defining material reflectance, microsurface scattering, and ambient light occlusion.
    - **Emissive map** — marks self-luminous regions (screens, lava, LEDs).
    - **[[Procedural Texture]]** — synthesised analytically at runtime (Perlin noise, Worley noise) rather than stored as pixel data; infinite resolution and zero memory footprint.
  - #### Filtering and Mipmapping
    - **Bilinear filtering** blends the four nearest texels; eliminates nearest-neighbour aliasing at modest cost.
    - **Trilinear filtering** blends bilinearly across adjacent [[Mipmap]] levels, eliminating mip-transition banding.
    - **Anisotropic filtering** samples the texture along the surface gradient direction, preserving sharpness on oblique surfaces; standard in modern real-time applications.
    - [[Mipmap]] — a precomputed pyramid of progressively halved texture resolutions; selecting the appropriate level avoids Nyquist aliasing when the surface projects to a small screen area.
  - #### Texture Compression
    - [[Texture Compression]] formats (BCn/DXTn for DirectX, ETC/ASTC for mobile, BPTC for HDR) reduce VRAM usage and bandwidth, directly affecting scene complexity budgets.
    - Lossy block-compression operates on 4×4 texel blocks, introducing slight colour artefacts that are typically imperceptible.
  - #### Shader Integration
    - [[Pixel Shader]] programs sample one or more textures, combine their outputs with lighting calculations, and write the final colour to the render target.
    - [[Compute Shader]] programs are used for texture pre-processing: mipmap generation, procedural texture baking, and screen-space effects.

- ### Mechanisms and Algorithms
  - **Perspective-correct interpolation** — interpolates UV coordinates divided by depth (1/w) across a triangle to avoid the affine distortion visible in early fixed-function hardware.
  - **Triplanar mapping** — applies textures along the three world-axis planes and blends, avoiding UV seams on terrain and organic shapes.
  - **Parallax occlusion mapping (POM)** — ray-marches a height-field encoded in a texture to simulate self-shadowing micro-geometry at the fragment level, deeper than normal mapping but cheaper than [[Displacement Mapping]].
  - **Texture streaming** — progressively loads and unloads mip levels at runtime to keep VRAM within budget; central to open-world games and [[Metaverse]] environments.
  - **Virtual texturing (mega-textures)** — treats a vast virtual texture as a page table, caching only visible regions in physical VRAM, enabling continent-scale terrain detail.
  - **Baked lighting** — captures global illumination into lightmaps (a form of texture) so complex light transport is a cheap texture lookup at runtime; widely used in [[Virtual Reality]] to maintain frame-rate budgets.

- ### Applications and Use Cases
  - #### Game Development and Real-Time Graphics
    - Every modern game engine ([[Unreal Engine]], Unity, Godot) uses PBR texture pipelines; typical AAA assets carry six or more texture channels per material.
    - Character skin relies on subsurface scattering maps alongside albedo and normal maps to simulate translucency.
  - #### Virtual and Augmented Reality
    - [[Virtual Reality]] headsets require textures at sufficient resolution to avoid visible pixels in the near-eye display; foveated rendering tiles textures at variable quality across the field of view.
    - [[Augmented Reality]] overlays require texture transparency, alpha blending, and colour calibration to match synthetic surfaces to real-world lighting.
    - In [[Metaverse]] platforms, texture streaming is critical because users can inhabit densely detailed shared environments at variable network bandwidth.
  - #### Film and Visual Effects (VFX)
    - Offline renderers (Pixar RenderMan, Arnold, Cycles) support deep multi-layer texture formats (OpenEXR) and UDIM tiling, where each UV tile is a separate texture file for very-high-resolution assets.
    - UDIM indexing (1001–1099 convention) maps tile coordinates to filenames; standard in film asset pipelines.
  - #### Scientific and Medical Visualisation
    - Volume rendering pipelines map transfer functions as 1D or 2D textures to assign colour and opacity to scalar volumetric data.
    - 3D medical scans (CT, MRI) are uploaded to GPU texture memory and ray-cast in real time.
  - #### AI and Neural Rendering
    - [[Neural Radiance Field]] (NeRF) and subsequent neural scene representations learn implicit texture from multi-view images; they can be distilled into explicit texture maps for integration into conventional pipelines.
    - [[Generative Adversarial Network]] (GAN) and diffusion model-based texture synthesis generates plausible PBR texture sets from text prompts, dramatically accelerating asset creation.
    - [[Differentiable Rendering]] frameworks backpropagate gradients through the texture-sampling operation, enabling texture maps to be optimised directly from image losses — central to inverse graphics and 3D reconstruction.
  - #### Digital Twins and Simulation
    - Photogrammetry pipelines bake real-world surface appearance captured by drone or structured-light scan into texture maps, feeding [[Digital Twin]] environments and [[Spatial Computing]] platforms.

- ### Relationships
  - hasPart:: [[UV Mapping]]
  - hasPart:: [[Normal Mapping]]
  - hasPart:: [[Mipmap]]
  - hasPart:: [[Texture Atlas]]
  - hasPart:: [[Bump Mapping]]
  - partOf:: [[3D Rendering Engine]]
  - partOf:: [[Rendering Pipeline]]
  - requires:: [[UV Unwrapping]]
  - requires:: [[Rasterisation]]
  - requires:: [[Pixel Shader]]
  - requires:: [[GPU]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[Physically Based Rendering]]
  - enables:: [[Photorealism]]
  - enables:: [[Differentiable Rendering]]
  - uses:: [[Procedural Texture]]
  - uses:: [[Compute Shader]]
  - uses:: [[Texture Compression]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Metaverse]]
  - contrastsWith:: [[Displacement Mapping]]
  - contrastsWith:: [[Procedural Material]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[OpenGL]]
  - bridges-to:: [[Neural Radiance Field]]
  - bridges-to:: [[Generative Adversarial Network]]
  - relatedTo:: [[Shader]]
  - relatedTo:: [[Material Definition Language]]

- ### Standards and Context
  - **OpenGL** (Khronos Group) — pioneered the GL texture object API (glTexImage, glGenerateMipmap, GL_TEXTURE_2D); still the reference for texture parameter naming conventions.
  - **Vulkan** (Khronos Group) — exposes explicit texture (VkImage) and sampler objects; requires the developer to manage layout transitions and barriers, enabling finer GPU control.
  - **DirectX / HLSL** (Microsoft) — DX11 and DX12 texture resource views (SRV), UAVs for compute writes, and the BCn compression family (BC1–BC7) are de-facto standards in Windows game development.
  - **glTF 2.0** (Khronos Group) — the web and real-time interchange format for 3D assets; mandates a metallic-roughness PBR material model with defined texture channel semantics, making PBR texture sets interoperable across engines.
  - **OpenEXR** (Academy Software Foundation / ACES) — multi-channel HDR image format used in VFX for deep texture maps and light-map bakes; supports arbitrary custom channels.
  - **ASTC** (Adaptive Scalable Texture Compression, ARM / Khronos) — block-compression standard for mobile and console; variable-rate compression from 8bpp down to under 1bpp; part of OpenGL ES 3.2, Vulkan, and Metal.
  - **MaterialX** (Academy Software Foundation) — open standard for specifying material and texture graph networks portably across DCC tools and renderers.
  - **USD (Universal Scene Description)** (Pixar/Nvidia) — scene description format that includes material and texture binding; textures are referenced as asset paths and resolved by the runtime.

- ### Current Landscape (2026)
  - Neural texture compression (NTC) has moved from research to production: NVIDIA's RTX Neural Texture Compression SDK (v0.5 beta Feb 2025, reaching v0.10 beta by 2025-2026) compresses up to 16 correlated PBR channels per material into a shared latent representation plus a tiny per-material MLP decoder, reporting up to roughly 7x lower VRAM than block-compressed (BCn) textures at comparable quality (PSNR ~40-50 dB).
  - Hardware-accelerated decode arrived via Cooperative Vectors, which expose RTX Tensor Cores directly to shaders: Microsoft shipped a DirectX 12 Agility SDK preview (Shader Model 6.9) in 2025 alongside NVIDIA OptiX 9.0, Vulkan (VK_NV_cooperative_vector) and Slang paths, giving a 2-4x inference speed-up on Ada/Blackwell GPUs; early July 2025 RTX 5080 tests reported ~80% higher framerates and up to 90% VRAM reduction.
  - NTC shipped in a commercial title with Ubisoft's Assassin's Creed Mirage (documented Feb 2026), using latent textures exported as standard BC formats to keep mipmapping, anisotropic filtering and streaming intact, cutting material memory by about 30%.
  - AI text-to-texture and image-to-material generation matured into mainstream DCC tooling: Adobe Substance 3D Sampler added Firefly-powered Text-to-Texture, Text-to-Pattern and Image-to-Texture (beta, 2024 onward, iterated through v4.4 in 2026) producing tileable maps, while Meshy 6 generates full PBR-textured meshes (albedo, normal, metalness, roughness bound to UVs) in about a minute.
  - Research on decomposing generated images into physically-based svBRDF maps advanced with Ubisoft La Forge's CHORD "Chain of Rendering Decomposition" (open-weights, SIGGRAPH Asia 2025) and academic methods like TexPro that output relightable procedural materials rather than baked-lighting RGB.
  - Intel added its own path: cooperative-vector-accelerated neural block texture compression on Arc B-series GPUs reporting up to ~5x compression over traditional BC and ~10x faster decode, signalling multi-vendor rather than NVIDIA-only adoption.
  - Key open challenges as of 2026 remain the lack of shipping DXR 1.2 / Cooperative Vector drivers for AMD and (until recently) Intel, NVIDIA's own guidance not to ship DX12 Cooperative-Vector builds until Microsoft finalises the API, decode cost and quality loss at very low bitrates versus BCn blockiness, the requirement that all channels share resolution, and integrating neural decode cleanly with virtual texturing and stochastic texture filtering.

- ### References
  - 1. NVIDIA (2025). RTX Neural Texture Compression (NTC) SDK. https://github.com/NVIDIA-RTX/RTXNTC
  - 2. NVIDIA Developer Blog (2025). Neural Rendering in NVIDIA OptiX Using Cooperative Vectors. https://developer.nvidia.com/blog/neural-rendering-in-nvidia-optix-using-cooperative-vectors/
  - 3. Ubisoft (2026). Shipping Neural Texture Compression in Assassin's Creed Mirage. https://www.ubisoft.com/en-us/news/ignt.58488/shipping-neural-texture-compression-in-assassin-s-creed-mirage
  - 4. Microsoft DirectX Developer Blog (2025). D3D12 Cooperative Vector. https://devblogs.microsoft.com/directx/cooperative-vector/
  - 5. Ubisoft La Forge (2025). Generative Base Material and the CHORD model for PBR material estimation (SIGGRAPH Asia 2025). https://www.ubisoft.com/en-us/studio/laforge/news/1i3YOvQX2iArLlScBPqBZs/generative-base-material-an-opensource-prototype-for-pbr-material-estimation-debuting-at-siggraph-asia-2025
  - 6. Adobe (2026). Substance 3D Sampler Generative Workflows: Text-to-Texture, Image-to-Texture. https://experienceleague.adobe.com/en/docs/substance-3d-sampler/using/features-and-workflows/generative-workflows

- ### Provenance
  - sources:: Ed Catmull, "A Subdivision Algorithm for Computer Display of Curved Surfaces" (1974); Khronos OpenGL 4.6 specification; glTF 2.0 specification; ASTC Texture Compression specification (ARM); MaterialX specification (ASWF)
  - updated:: 2026-06-13

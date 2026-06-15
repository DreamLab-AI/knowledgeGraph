- ### Definition
  - A [[Texture Map]] is a 2D image applied to a [[3D Model]] surface to encode visual or material properties without adding geometry.
  - Indexed via [[UV Mapping]], which establishes a bijective mapping between model surface and image pixels.
  - Types include diffuse/albedo, [[Normal Map]], roughness, metallic, ambient occlusion, and emissive maps.
  - Central to both [[Physically Based Rendering]] workflows and real-time [[Rasterisation]] pipelines.

- ### Overview
  - Texture maps allow artists to bake fine surface detail into images, keeping polygon counts manageable.
  - A [[Material]] typically bundles several texture maps into a coherent shading model (e.g., PBR metallic-roughness).
  - [[Mipmap]] pyramids provide level-of-detail filtering to reduce aliasing at distance.
  - Standards such as [[glTF]] define how texture maps are packaged within [[3D Asset]] containers.

- ### Key Aspects
  - **UV Unwrapping**: projecting 3D surface onto 2D plane, stored as per-vertex UV coordinates.
  - **Compression formats**: BC (DXT), ASTC, and ETC reduce GPU memory footprint.
  - **PBR channels**: albedo, normal, roughness, metallic, occlusion, emissive.
  - **Atlasing**: packing multiple objects' UVs into a single texture to reduce draw calls.

- ### Mechanisms
  - During rendering, the [[GPU]] samples the texture at interpolated UV coordinates per fragment.
  - Bilinear and trilinear filtering smooth transitions between texels and [[Mipmap]] levels.
  - Normal maps encode surface perturbations in tangent space, simulating lighting on micro-geometry.
  - Texture streaming systems load mipmaps on demand to manage VRAM budget in open worlds.

- ### Applications
  - [[3D Content Creation]] for games, film, and [[Metaverse]] platforms.
  - [[Augmented Reality]] overlays requiring realistic surface appearance on physical objects.
  - [[Virtual Reality]] environments demanding high visual fidelity at low latency.
  - [[Real-Time Rendering]] in web [[XR]] and mobile applications.
  - Digital twin visualisation and product configuration systems.

- ### Relationships
  - hasPart:: [[UV Mapping]]
  - hasPart:: [[Mipmap]]
  - hasPart:: [[Normal Map]]
  - partOf:: [[3D Asset]]
  - partOf:: [[Material]]
  - requires:: [[UV Mapping]]
  - requires:: [[3D Model]]
  - enables:: [[Physically Based Rendering]]
  - enables:: [[Real-Time Rendering]]
  - uses:: [[Rasterisation]]
  - uses:: [[GPU]]
  - standardizedBy:: [[glTF]]
  - standardizedBy:: [[3D Asset Standard]]
  - contrastsWith:: [[Procedural Material]]
  - contrastsWith:: [[Implicit Neural Representation]]
  - relatedTo:: [[3D Content Creation]]
  - relatedTo:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]

- ### Provenance
  - updated:: 2026-06-15
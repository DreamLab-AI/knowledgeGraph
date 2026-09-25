A Texture Map is a 2D image applied to the surface of a 3D model to add visual detail such as colour, roughness, normals, or emissive properties without increasing polygon count. Texture maps are indexed via UV coordinates that establish a correspondence between surface points and image pixels. They are a foundational component of real-time and offline rendering pipelines.

### Overview

- Texture maps allow artists to bake fine surface detail into images, keeping polygon counts manageable.
- A [[Material]] typically bundles several texture maps into a coherent shading model (e.g., PBR metallic-roughness).
- [[Mipmap]] pyramids provide level-of-detail filtering to reduce aliasing at distance.
- Standards such as [[glTF]] define how texture maps are packaged within [[3D Asset]] containers.

### Key Aspects

- **UV Unwrapping**: projecting 3D surface onto 2D plane, stored as per-vertex UV coordinates.
- **Compression formats**: BC (DXT), ASTC, and ETC reduce GPU memory footprint.
- **PBR channels**: albedo, normal, roughness, metallic, occlusion, emissive.
- **Atlasing**: packing multiple objects' UVs into a single texture to reduce draw calls.

### Mechanisms

- During rendering, the [[GPU]] samples the texture at interpolated UV coordinates per fragment.
- Bilinear and trilinear filtering smooth transitions between texels and [[Mipmap]] levels.
- Normal maps encode surface perturbations in tangent space, simulating lighting on micro-geometry.
- Texture streaming systems load mipmaps on demand to manage VRAM budget in open worlds.

### Applications

- [[3D Content Creation]] for games, film, and [[Metaverse]] platforms.
- [[Augmented Reality]] overlays requiring realistic surface appearance on physical objects.
- [[Virtual Reality]] environments demanding high visual fidelity at low latency.
- [[Real-Time Rendering]] in web [[XR]] and mobile applications.
- Digital twin visualisation and product configuration systems.

### Provenance


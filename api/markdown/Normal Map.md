
A normal map is a texture that encodes per-texel surface normal directions, typically storing the X, Y, and Z components of a normal vector in the red, green, and blue channels. It allows a low-polygon mesh to react to lighting as if it had the fine geometric detail of a much denser surface, by perturbing the shading normal without changing the underlying geometry. Normal maps are a foundational technique in real-time and physically based rendering for adding visual detail efficiently.

- A normal map is a [[Texture Mapping|texture]] that stores per-texel surface normals to fake fine geometric detail under lighting. It is sampled by a [[Shader]] on the [[GPU]] and is a staple of [[Physically Based Rendering]] for adding detail without extra geometry.
- ### Overview
- Each texel of a normal map encodes a unit normal vector, with the vector components mapped into the colour channels of an image.
- During shading, the fragment shader reads the stored normal and uses it in place of the interpolated geometric normal when evaluating the lighting equation.
- The result is that a flat or coarse surface appears to have bumps, grooves, scratches, and other relief, even though the silhouette and triangle count are unchanged.
- ### Mechanisms
- Tangent-space normal maps store normals relative to the surface's local tangent frame, allowing the same map to be reused as the model deforms or animates.
- A bluish dominant tint is characteristic because an unperturbed normal points outward along the surface, mapping to a positive Z and a mid-range red and green.
- Normal maps are commonly baked from a high-resolution source mesh, projecting its detailed normals onto the texture coordinates of a simplified target mesh.
- They are frequently paired with other PBR maps such as roughness, metallic, and height to define complete material appearance.
- ### Applications
- Real-time game and interactive rendering, where polygon budgets are tight.
- Asset pipelines that bake sculpted detail down onto game-ready meshes.
- Augmented and virtual reality scenes requiring rich surface detail at high frame rates.
- Architectural and product visualisation where convincing material relief matters.
- ### Provenance


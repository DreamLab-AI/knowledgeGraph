A surface normal is a vector perpendicular to a surface at a given point, indicating the orientation of that surface in space. Normals are fundamental to lighting and shading calculations, because the angle between a normal and a light direction governs how much illumination a surface receives. In computer graphics and 3D reconstruction, surface normals drive realistic shading, normal mapping, and the recovery of fine geometric detail.

### Overview

- A surface normal defines the local orientation of a surface and is the key input to most lighting models, which compute reflected intensity from the normal-light geometry.
- Normals can be stored per-vertex, per-face, or per-texel, and interpolated across surfaces to produce smooth shading from coarse geometry.
- Estimating accurate normals from depth maps or point clouds is essential for recovering and rendering fine surface detail.

### Mechanisms

- Per-vertex normals interpolated across triangles for smooth Gouraud or Phong shading.
- Normal maps that perturb the geometric normal per-texel to fake high-frequency detail cheaply.
- Normal estimation from neighbourhood fitting on point clouds or gradients of depth maps.
- Use of the normal in dot products with light and view vectors for diffuse and specular response.

### Applications

- Realistic shading and physically based rendering in graphics pipelines.
- Normal mapping to add perceived detail without increasing polygon count.
- 3D reconstruction and photogrammetry where recovered normals refine surface geometry.

### Provenance


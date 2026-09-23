
A polygon mesh is a collection of vertices, edges, and faces that defines the shape of a polyhedral object in three-dimensional computer graphics. Faces are usually triangles or quadrilaterals whose connectivity describes a surface, and per-vertex attributes such as normals and texture coordinates support shading and texturing. Polygon meshes are the dominant representation for real-time rendering, modelling, and animation.

- A polygon mesh represents a 3D surface as vertices, edges, and faces. It is the dominant data structure in [[Computer Graphics]], feeding [[Rendering]] pipelines and [[Animation]] via [[Texture Mapping]] and [[Rasterization]].
- Faces — typically triangles or quads — and their connectivity define the object's shape.
- ### Overview
- Vertices carry position plus attributes such as normals, colours, and texture coordinates used during shading.
- Edges connect vertices, and faces enclose regions to form the visible surface.
- Triangulated meshes are favoured for hardware rendering because triangles are always planar and convex.
- ### Key aspects
- Topology: how vertices, edges, and faces connect, governing surface continuity.
- Geometry: the spatial positions of vertices defining the shape.
- Attributes: normals, UV coordinates, and weights attached to vertices for shading and deformation.
- Resolution: face count trades visual fidelity against performance, managed through [[Level of Detail]].
- ### Mechanisms
- Rasterization projects mesh faces to the screen for [[GPU Rendering]].
- [[Texture Mapping]] applies images to faces via per-vertex UV coordinates.
- Subdivision and decimation adjust mesh density for quality or speed.
- Skinning binds mesh vertices to a skeleton for [[Skeletal Animation]].
- ### Applications
- Real-time rendering of objects and environments in games and XR.
- Asset interchange through formats such as [[USD]].
- Deformable characters animated with [[Skeletal Animation]].
- Surfaces produced or refined by [[Procedural Generation]].
- ### Provenance


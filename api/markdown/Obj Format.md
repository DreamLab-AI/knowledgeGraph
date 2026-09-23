
The OBJ format (Wavefront .obj) is a simple, text-based 3D geometry interchange format that stores polygon mesh data as lists of vertices, texture coordinates, normals and faces. It is openly documented and almost universally supported, with material properties carried in a companion .mtl file. Valued for its readability and portability rather than efficiency, OBJ remains a common lowest-common-denominator format for exchanging static 3D models between modelling tools and pipelines.

- The OBJ format is a text-based interchange format for [[Polygon Mesh]] geometry, storing vertices, normals, texture coordinates and faces.
- It carries [[Mesh Data]] and references materials and [[Texture Mapping]] via a companion .mtl file.
- Its openness makes it a common portability choice for exchanging a static [[3D Model]] across tools.
- ### Overview
- Originating with the Wavefront Technologies animation package, OBJ became a de facto standard precisely because it is plain text and trivially parseable. Each line declares one element — a vertex, a texture coordinate, a normal or a face referencing those by index.
- The format deliberately omits animation, rigging and scene-graph data, focusing on static geometry. Material appearance lives in a separate Material Template Library (.mtl) file alongside the .obj.
- Its simplicity is also its limitation: large meshes produce verbose files, and richer pipelines prefer binary, feature-complete formats, so OBJ persists mainly as an exchange and archival format.
- ### Key aspects
- Plain-text, human-readable encoding of mesh primitives.
- Vertices, texture coordinates, normals and indexed faces.
- Companion .mtl file for material definitions.
- No support for animation, skeletons or scene hierarchy.
- Near-universal import and export support.
- ### Applications
- Exchanging static models between modelling and CAD tools.
- Importing scanned or generated geometry into engines and renderers.
- Simple archival of 3D asset geometry.
- ### Provenance


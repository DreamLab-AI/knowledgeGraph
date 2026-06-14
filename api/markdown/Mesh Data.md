public:: true

# Mesh Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mesh-data",
  "@type": "Page",
  "vc:slug": "mesh-data",
  "title": "Mesh Data",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mesh-data",
  "@type": "Class",
  "label": "Mesh Data",
  "definition": "Mesh data is a structured representation of a three-dimensional surface or volume as a collection of vertices, edges, and polygonal faces — most commonly triangles or quads — that together define the geometry of a shape. It encodes both topological connectivity (which vertices form which faces) and geometric attributes (positions, normals, UV coordinates, vertex colours) required for rendering, simulation, and analysis. Mesh data serves as the primary interchange format between 3D modelling software, real-time engines, and spatial computing pipelines. It is produced by processes such as photogrammetry, structured-light scanning, LiDAR capture, and procedural generation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:spatial-mesh", "label": "Spatial Mesh"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:three-dimensional-graphics", "label": "Three Dimensional Graphics"},
      {"@id": "urn:ngm:class:computer-graphics", "label": "Computer Graphics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"},
      {"@id": "urn:ngm:class:3-d-rendering", "label": "3D Rendering"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:vertex-shader", "label": "Vertex Shader"},
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Mesh Data]] is a polygon-based 3D data structure encoding vertices, edges, and faces that collectively describe the surface geometry of an object, enabling [[3D Rendering]], [[3D Reconstruction]], and spatial simulation workflows.

- ### Relationships
  - [[Mesh Data]] is a subclass of [[Spatial Mesh]] and is closely related to [[Point Cloud]] data, from which it is frequently reconstructed via algorithms such as Poisson surface reconstruction. It underpins [[3D Rendering]] and [[Differentiable Rendering]] pipelines and is processed by the [[Vertex Shader]] stage of modern graphics APIs. Tools such as [[Photogrammetry]] and structured-light scanning generate raw mesh data as their primary output, which is then used in [[3D Reconstruction]] workflows across [[Computer Graphics]] and spatial computing.

- ### Content
  - Mesh data has been fundamental to computer graphics since the late 1960s, when polygon-based models replaced analytical surface descriptions. The triangle mesh became the canonical primitive after the widespread adoption of GPU rasterisation pipelines in the 1990s, as the triangle is the simplest polygon guaranteed to be planar and therefore directly rasterisable. File formats such as OBJ, STL, PLY, FBX, and USD standardised the interchange of mesh data across tools.

  - A mesh is defined by at minimum a vertex buffer — an ordered list of 3D positions — and an index buffer specifying how vertices are grouped into faces. Additional vertex attributes such as surface normals, tangent vectors, texture coordinates (UVs), and per-vertex colour extend the base representation to support shading, texturing, and physics. The mesh topology — the connectivity graph of vertices and faces — governs smoothness, subdivision, and deformation behaviour. Level-of-detail (LOD) systems reduce polygon count at distance to maintain real-time performance.

  - Mesh data is central to virtually every 3D application domain: game engines consume meshes for real-time rendering; CAD and simulation tools use them for finite element analysis; medical imaging reconstructs anatomical meshes from CT/MRI voxel data; robotics uses environment meshes for collision detection and path planning; and spatial computing platforms stream meshes to XR headsets for mixed-reality scene understanding. The rise of neural 3D representations (NeRF, 3D Gaussian Splatting) has introduced hybrid pipelines where implicit neural fields are converted to explicit meshes for downstream use.

  - In 2024–2025, mesh data interchange has been advanced by the Kronos Group's Universal Scene Description (USD) becoming the de-facto standard for complex scene composition, and by real-time mesh capture from consumer-grade depth sensors and neural reconstruction systems. Differentiable rendering techniques allow mesh parameters to be optimised directly from image supervision, closing the loop between 2D observations and 3D mesh representations. Compression formats such as Draco and mesh quantisation schemes are enabling efficient streaming of high-fidelity meshes in web and cloud contexts.
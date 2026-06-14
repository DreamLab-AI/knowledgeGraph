public:: true

# Signed Distance Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:signed-distance-function",
  "@type": "Page",
  "vc:slug": "signed-distance-function",
  "title": "Signed Distance Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signed-distance-function",
  "@type": "Class",
  "label": "Signed Distance Function",
  "definition": "A signed distance function (SDF) is a scalar field that returns, for any point in space, the distance to the nearest surface of a shape, with the sign indicating whether the point is inside (negative) or outside (positive). The surface itself is the zero level set where the function equals zero. SDFs provide a compact implicit representation of geometry that supports efficient ray marching, smooth shape blending, and analytic normals, and they underpin procedural rendering, collision queries, and learned 3D reconstruction in neural networks.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-graphics", "label": "Computer Graphics"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:gpu", "label": "GPU"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A signed distance function returns the distance from any point to the nearest surface of a shape, signed by inside/outside, representing geometry implicitly as the function's zero level set.

- ### Relationships
  - Signed Distance Function is a subclass of [[Computer Graphics]] representation and supports [[Real-Time Rendering]] through ray marching and [[Neural Rendering]] through learned implicit surfaces. It relates to the [[Rendering Pipeline]] as an alternative to explicit meshes and to the [[GPU]] hardware that evaluates it in parallel.

- ### Content
  - The signed distance function represents shape not as a list of vertices and faces but as a continuous field over all of space: at every point it answers "how far is the nearest surface, and am I inside or outside?" The actual shape is implicit — it is exactly the set of points where the distance is zero. This implicit formulation is remarkably powerful because the distance value at nearby points tells a renderer not just whether it has hit the surface but how far it can safely step without overshooting.

  - That property enables sphere tracing, the standard way to render SDFs. A ray advances by steps equal to the current distance value, which guarantees it never passes through the surface, converging efficiently onto the nearest intersection. Surface normals come for free as the gradient of the field, and because the representation is analytic, effects like soft shadows, ambient occlusion, and exact silhouettes can be computed cheaply — which is why SDF ray marching is the technique behind much real-time procedural and demoscene graphics.

  - SDFs compose elegantly. The union of two shapes is the minimum of their distance functions, intersection is the maximum, and subtraction negates one; smooth-minimum variants blend shapes seamlessly, producing organic forms impossible to author easily with meshes. This algebra of combination, together with domain repetition and deformation, lets complex scenes be built from a few lines of mathematics rather than large geometry assets, giving SDFs an extraordinary expressiveness-to-data ratio.

  - In recent years the SDF has become a bridge between classical graphics and machine learning. Neural implicit representations such as DeepSDF and the surface formulations used in neural rendering train a network to output the signed distance for any queried point, learning a continuous 3D shape from images or point clouds. This learned-SDF approach reconstructs detailed geometry with smooth, watertight surfaces and analytic normals, making the signed distance function a unifying concept across procedural rendering, simulation, and learned 3D scene reconstruction.

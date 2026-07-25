public:: true

# Frustum Culling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:frustum-culling",
  "@type": "Page",
  "vc:slug": "frustum-culling",
  "title": "Frustum Culling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:frustum-culling",
  "@type": "Class",
  "label": "Frustum Culling",
  "definition": "Frustum culling is a real-time rendering visibility optimisation technique that discards scene objects whose bounding volumes lie entirely outside the camera's view frustum—the truncated pyramid defined by the near and far clipping planes and the four side planes corresponding to the viewport edges. By testing object bounding spheres or axis-aligned bounding boxes against the six frustum planes before submitting draw calls, the GPU receives only geometry that could potentially contribute to the final image, dramatically reducing vertex processing and rasterisation work. It is a foundational stage in all production scene management pipelines.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-technique",
      "label": "Rendering Technique"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:scene-optimization",
        "label": "Scene Optimization"
      },
      {
        "@id": "urn:ngm:class:performance-optimization",
        "label": "Performance Optimization"
      },
      {
        "@id": "urn:ngm:class:gpu-driven-rendering",
        "label": "GPU-Driven Rendering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bounding-volume",
        "label": "Bounding Volume"
      },
      {
        "@id": "urn:ngm:class:camera-model",
        "label": "Camera Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      },
      {
        "@id": "urn:ngm:class:bounding-volume-hierarchy",
        "label": "Bounding Volume Hierarchy"
      },
      {
        "@id": "urn:ngm:class:octree-spatial-index",
        "label": "Octree"
      },
      {
        "@id": "urn:ngm:class:bounding-volume",
        "label": "Axis-Aligned Bounding Box"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:occlusion-culling",
        "label": "Occlusion Culling"
      },
      {
        "@id": "urn:ngm:class:portal-culling",
        "label": "Portal Culling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:scene-management",
        "label": "Scene Management"
      },
      {
        "@id": "urn:ngm:class:spatial-index",
        "label": "Spatial Indexing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:view-frustum-culling",
      "label": "View Frustum Culling"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Frustum culling is a visibility-determination technique that rejects scene objects outside the camera's view frustum before [[Real-Time Rendering]], working alongside [[Occlusion Culling]] and [[Level of Detail]] as a foundational [[Scene Management]] optimisation.

- ### Relationships
  - Frustum culling is the first and cheapest visibility test in the rendering pipeline, enabling [[Real-Time Rendering]] of large scenes by eliminating unnecessary draw calls. It is a core component of [[Scene Optimization]] strategies and contributes directly to [[Performance Optimization]] of frame rates. It operates on data from the [[Scene Graph]] hierarchy, traversing spatial data structures (octrees, BVHs) to test entire subtrees against frustum planes, rejecting all children if the parent is fully outside. [[Occlusion Culling]] goes further, also rejecting objects obscured by other geometry, while [[Level of Detail]] substitutes lower-resolution meshes for distant objects—all three techniques work together in production [[Scene Management]] systems.

- ### Content
  - View frustum culling is one of the oldest optimisations in 3D graphics, present in early flight simulator software of the 1970s and formalized in Jim Blinn and Martin Newell's 1978 paper on clipping. The view frustum derives from the perspective projection transformation: a perspective camera maps a pyramid of world space (bounded by four side planes from the camera position through viewport corners, and near/far clipping planes) to the normalised device coordinate cube. Objects entirely outside this pyramid cannot appear in the rendered image, making them safe to discard.

  - The implementation extracts the six frustum planes from the combined view-projection matrix using the Gribb-Hartmann method (each plane is a row or combination of rows of the matrix). For each scene object, a bounding volume test determines whether the object's bounds are entirely outside any single plane (guaranteed outside the frustum) or may be partially or fully inside (must be submitted for rendering or further testing). Hierarchical acceleration structures—bounding volume hierarchies (BVH), k-d trees, octrees—allow entire subtrees to be rejected when the subtree's aggregate bounding volume is outside the frustum, dramatically reducing test count for complex scenes.

  - In practice, frustum culling is implemented both on the CPU (for coarse scene traversal and draw call submission) and increasingly on the GPU through compute shaders that perform fine-grained per-instance tests in parallel. GPU-driven rendering pipelines (used in Unreal Engine 5's Nanite, and direct3D 12/Vulkan indirect draw command buffers) move culling entirely to the GPU, eliminating the CPU-GPU readback bottleneck and enabling scenes with hundreds of thousands of individually testable objects.

  - By 2024–2025 frustum culling interacts with emerging rendering architectures: neural rendering pipelines (NeRF, 3D Gaussian Splatting) have different visibility representations that require adapted culling strategies based on Gaussian splat visibility rather than traditional mesh bounds. In XR applications, per-eye frustum culling must account for the binocular frustum, and foveated rendering integration means the effective culling region varies with gaze direction. Real-time path tracing also changes the culling problem, as secondary ray origins can be anywhere in the scene, requiring acceleration structures optimised for arbitrary ray directions rather than a fixed frustum.
public:: true

# COLMAP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:colmap",
  "@type": "Page",
  "vc:slug": "colmap",
  "title": "COLMAP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:colmap",
  "@type": "Class",
  "label": "COLMAP",
  "definition": "COLMAP is an open-source general-purpose Structure-from-Motion and multi-view stereo pipeline used to reconstruct three-dimensional scenes from unordered collections of photographs. It performs feature extraction, image matching, incremental camera pose estimation, triangulation, and dense point-cloud generation. COLMAP is widely used as a preprocessing step for neural radiance fields and 3D Gaussian Splatting pipelines. Its modular architecture supports both GPU-accelerated and CPU-only execution, making it accessible across a range of hardware configurations.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-gaussian-splatting", "label": "3D Gaussian Splatting"},
      {"@id": "urn:ngm:class:gaussian-splatting", "label": "Gaussian Splatting"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - COLMAP is a general-purpose [[Structure-from-Motion]] and multi-view stereo pipeline that reconstructs dense [[Point Cloud]] geometry from unordered image collections, serving as the canonical preprocessing step for [[Gaussian Splatting]] and related neural rendering workflows.
- ### Relationships
  - COLMAP sits at the intersection of [[Photogrammetry]] and [[Computer Vision]], consuming overlapping photographs and producing registered camera poses alongside sparse and dense geometry. Its output point clouds and camera parameters feed directly into [[3D Gaussian Splatting]] and other implicit neural representations. [[Depth Estimation]] and [[Spatial Mapping]] pipelines frequently use COLMAP-derived geometry as ground truth or initialisation, and its [[GPU Computing]] acceleration makes large-scale reconstructions tractable.
- ### Content
  - COLMAP implements incremental structure-from-motion, beginning with a seed image pair, estimating the fundamental matrix, triangulating an initial point cloud, and iteratively registering new images via perspective-n-point solving. Feature matching employs vocabulary-tree-based approximate nearest-neighbour search to scale to thousands of images without exhaustive pairwise comparisons. Bundle adjustment using sparse Levenberg-Marquardt optimisation refines camera intrinsics, extrinsics, and 3D point positions jointly.

  - The dense reconstruction stage uses patch match stereo applied to depth maps from multiple views, followed by depth fusion to produce a watertight mesh or dense point cloud. COLMAP supports both pinhole and fisheye camera models and can recover radial and tangential distortion parameters. Its ability to handle unordered internet photo collections without GPS or IMU data makes it uniquely powerful for heritage documentation, autonomous driving dataset creation, and visual effects.

  - In the context of neural rendering, COLMAP provides the camera pose estimates required to train NeRF and 3D Gaussian Splatting models. The quality of the reconstruction directly determines the fidelity of the synthesised novel views. Recent extensions integrate deep-learning-based feature matchers such as SuperGlue as drop-in replacements for traditional SIFT features, improving robustness in textureless or reflective scenes. The project is maintained at ETH Zürich and remains the de facto standard for academic and industrial 3D reconstruction benchmarks.

public:: true

# structure-from-motion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:724cff569636e6b8ecbbfb2001bfd28d224d7fc113f9cf8343efc141d822aa5e",
  "@type": "Page",
  "vc:slug": "structure-from-motion",
  "title": "structure-from-motion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:structure-from-motion",
  "@type": "Class",
  "label": "Structure-from-Motion",
  "definition": "Structure-from-Motion (SfM) is a photogrammetric pipeline that simultaneously estimates three-dimensional scene structure and camera motion parameters from an unordered set of overlapping two-dimensional images. Feature detection and matching across images (typically using descriptors such as SIFT or ORB) establishes correspondences, which are fed into bundle adjustment to jointly optimise point-cloud coordinates and camera extrinsics and intrinsics. SfM is foundational in photogrammetry, autonomous navigation, and AR/VR asset creation, producing dense or sparse 3D reconstructions from passive imagery alone.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Structure-from-Motion (SfM) is a photogrammetric pipeline that simultaneously estimates three-dimensional scene structure and camera motion parameters from an unordered set of overlapping two-dimensional images. Feature detection and matching across images (typically using descriptors such as SIFT or ORB) establishes correspondences, which are fed into bundle adjustment to jointly optimise point-cloud coordinates and camera extrinsics and intrinsics. SfM is foundational in photogrammetry, autonomous navigation, and AR/VR asset creation, producing dense or sparse 3D reconstructions from passive imagery alone.

- ### Semantic Classification
  - owl-class:: structure-from-motion:Structure-from-Motion
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Photogrammetry]]
  - relatedTo [[Visual Odometry]]
  - relatedTo [[SLAM]]
  - enables [[Point Cloud]]
  - enables [[Depth Estimation]]
  - uses [[Computer Vision]]

- ### Content
  Structure-from-Motion is the algorithmic backbone of passive 3D reconstruction from imagery. The classical pipeline proceeds in three stages: feature extraction and matching, incremental or global camera pose estimation, and bundle adjustment to minimise reprojection error across all camera-point pairs. Tools such as COLMAP and OpenMVG implement this pipeline for large-scale photogrammetric surveys.

  SfM differs from SLAM in that it typically operates offline on a collected image set rather than in real-time on a live sensor stream. However, the distinction is narrowing: incremental SfM variants approach real-time rates, and many SLAM systems incorporate SfM-style bundle adjustment for loop closure and map refinement. Visual odometry can be understood as a streamlined, temporally constrained subset of SfM applied to sequential video frames.

  In spatial computing and augmented reality, SfM pipelines generate the point clouds and mesh reconstructions that underpin environment understanding and occlusion handling. In robotics and autonomous vehicles, photogrammetrically derived maps provide dense semantic context complementary to sparse LiDAR representations. Ongoing research addresses multi-view stereo densification, deep-learning-based feature matching, and neural radiance field (NeRF) methods that jointly learn scene geometry and appearance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

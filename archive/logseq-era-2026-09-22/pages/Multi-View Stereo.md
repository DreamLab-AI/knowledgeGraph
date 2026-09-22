public:: true

# Multi-View Stereo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-view-stereo",
  "@type": "Page",
  "vc:slug": "multi-view-stereo",
  "title": "Multi-View Stereo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-view-stereo",
  "@type": "Class",
  "label": "Multi-View Stereo",
  "definition": "Multi-View Stereo (MVS) is a computer vision technique that reconstructs dense 3D geometry from a set of overlapping 2D images captured from multiple camera positions. It extends traditional stereo matching by leveraging consistency across many viewpoints to estimate depth and surface detail at high resolution. MVS is a foundational component of photogrammetry pipelines, producing point clouds and textured meshes from photograph collections.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:photogrammetry",
      "label": "Photogrammetry"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Map Estimation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:feature-matching",
        "label": "Feature Matching"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:point-cloud-generation",
        "label": "Point Cloud Generation"
      },
      {
        "@id": "urn:ngm:class:3-d-scanning",
        "label": "3D Scanning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:structure-from-motion",
        "label": "Structure-from-Motion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:stereo-vision",
        "label": "Stereo Vision"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reality-capture",
        "label": "Reality Capture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar-scanning",
        "label": "Lidar Scanning"
      },
      {
        "@id": "urn:ngm:class:neural-radiance-field",
        "label": "Neural Radiance Field"
      },
      {
        "@id": "urn:ngm:class:3-d-gaussian-splatting",
        "label": "3D Gaussian Splatting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:photorealistic-rendering",
        "label": "Photorealistic Rendering"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:point-cloud-processing",
        "label": "Point Cloud Processing"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Visual Simultaneous Localisation and Mapping"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mvs",
      "label": "MVS"
    },
    {
      "@id": "urn:ngm:class:dense-stereo-reconstruction",
      "label": "Dense Stereo Reconstruction"
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
  - Multi-View Stereo is a [[Photogrammetry]] technique that reconstructs dense 3D surfaces from overlapping photographs taken at multiple viewpoints. By matching corresponding pixels across images and enforcing photometric consistency, MVS algorithms recover detailed geometry beyond the sparse point clouds produced by [[Structure-from-Motion]]. The resulting output — typically a dense [[Point Cloud]] or mesh — is foundational to [[3D Scanning]], [[Reality Capture]], and digital twin workflows.

- ### Relationships
  - MVS builds directly upon [[Structure-from-Motion]] to convert sparse camera-pose estimates into dense reconstructions. It relies on [[Depth Estimation]] and [[Stereo Vision]] at its core, and its outputs feed into [[Point Cloud Generation]] and [[Point Cloud Processing]] pipelines. Results are frequently consumed by [[Lidar Scanning]] workflows for cross-validation, and by [[Photorealistic Rendering]] engines for material-accurate visualisation.

- ### Content
  - MVS emerged as a formal research area in the early 2000s, motivated by the need to densify the sparse results of structure-from-motion pipelines. Seminal work by Seitz et al. (2006) on the Middlebury benchmark established standardised evaluation metrics and catalysed a decade of algorithmic competition. Approaches ranged from voxel carving and patch-based methods (PMVS, 2010) to depth-map fusion strategies, steadily improving both density and geometric accuracy.

  - The typical MVS pipeline proceeds in three stages: feature matching and camera pose estimation (inherited from SfM), per-view depth-map estimation via photometric consistency across neighbouring views, and depth-map fusion to produce a consistent dense point cloud or mesh. Plane-sweep stereo and PatchMatch-based algorithms dominate practical implementations. Key challenges include textureless surfaces, specular reflections, and occlusion boundaries, each of which breaks the assumption of consistent appearance across views.

  - In production, MVS is embedded within platforms such as RealityCapture, Agisoft Metashape, and open-source tools like OpenMVS and COLMAP. It underpins cultural heritage digitisation, construction site monitoring, film visual-effects pipelines, and autonomous vehicle map generation. Integration with [[Lidar]] sensors has become standard: LiDAR provides sparse but metrically accurate geometry that guides and corrects MVS depth estimates.

  - Between 2023 and 2025, neural approaches — particularly those inspired by NeRF and [[3D Gaussian Splatting]] — have begun to supplant classical MVS for novel-view synthesis tasks, offering superior handling of view-dependent effects. However, classical MVS retains advantages in metric accuracy and interpretability for engineering and geospatial applications. Hybrid pipelines combining learned depth priors with classical geometric consistency checks represent the current frontier, narrowing the gap between photorealistic synthesis and metrically reliable reconstruction.


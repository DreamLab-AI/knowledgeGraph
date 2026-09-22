public:: true

# Triangulation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:triangulation", "@type":"Page", "title":"Triangulation", "vc:slug":"triangulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:triangulation",
  "@type":"Class",
  "label":"Triangulation",
  "definition":"Triangulation is the process of determining the 3D position of a point by intersecting lines of sight from two or more known viewpoints. Given calibrated cameras and corresponding image observations, it recovers depth and structure by solving for the point that best explains the rays. Triangulation is a core operation in stereo vision, photogrammetry, structure-from-motion, and positioning systems.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:computer-vision","label":"Computer Vision"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:epipolar-geometry","label":"Epipolar Geometry"},{"@id":"urn:ngm:class:feature-matching","label":"Feature Matching"}],
    "requires":[{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
    "implements":[{"@id":"urn:ngm:class:projective-geometry","label":"Projective Geometry"}],
    "hasPart":[{"@id":"urn:ngm:class:bundle-adjustment","label":"Bundle Adjustment"}],
    "enables":[{"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"},{"@id":"urn:ngm:class:3d-mapping","label":"3D Mapping"}],
    "supports":[{"@id":"urn:ngm:class:stereo-vision","label":"Stereo Vision"},{"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"},{"@id":"urn:ngm:class:slam","label":"SLAM"}],
    "dependsOn":[{"@id":"urn:ngm:class:depth-sensing","label":"Depth Sensing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:gps","label":"GPS"}],
    "relatedTo":[{"@id":"urn:ngm:class:structured-light","label":"Structured Light"},{"@id":"urn:ngm:class:lidar","label":"LiDAR"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Triangulation determines a 3D point by intersecting lines of sight from two or more calibrated viewpoints. As a [[Computer Vision]] operation it builds on [[Projective Geometry]] and [[Epipolar Geometry]], using [[Camera Calibration]] and matched observations to recover depth and structure.
- ### Overview
- Given corresponding points in multiple images and the cameras' projection matrices, triangulation solves for the world point whose projections best match the observations, typically minimising reprojection error.
- Because measurements are noisy, optimal triangulation accounts for image noise and is often refined jointly with camera parameters through [[Bundle Adjustment]].
- The same geometric principle generalises beyond cameras to positioning systems, where ranges or bearings from known references fix an unknown location.
- ### Mechanisms
- Ray intersection from multiple calibrated viewpoints.
- Linear (DLT) and optimal (reprojection-error-minimising) estimators.
- Correspondence establishment via feature matching.
- Joint refinement with camera pose through bundle adjustment.
- Outlier rejection using epipolar constraints.
- ### Applications
- Depth recovery in [[Stereo Vision]] and [[Depth Sensing]] systems.
- Dense and sparse reconstruction producing a [[Point Cloud]].
- Map building in [[SLAM]] and [[3D Mapping]].
- Positioning and surveying analogues bridging to [[GPS]].
- ### Relationships
- subClassOf:: [[Computer Vision]]
- uses:: [[Epipolar Geometry]]
- uses:: [[Feature Matching]]
- requires:: [[Camera Calibration]]
- implements:: [[Projective Geometry]]
- hasPart:: [[Bundle Adjustment]]
- enables:: [[Point Cloud]]
- enables:: [[3D Mapping]]
- supports:: [[Stereo Vision]]
- supports:: [[Photogrammetry]]
- supports:: [[SLAM]]
- dependsOn:: [[Depth Sensing]]
- bridgesTo:: [[GPS]]
- relatedTo:: [[Structured Light]]
- relatedTo:: [[LiDAR]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh

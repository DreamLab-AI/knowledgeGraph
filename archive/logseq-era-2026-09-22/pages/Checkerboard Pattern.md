public:: true

# Checkerboard Pattern

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:checkerboard-pattern", "@type":"Page", "title":"Checkerboard Pattern", "vc:slug":"checkerboard-pattern", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:checkerboard-pattern",
  "@type":"Class",
  "label":"Checkerboard Pattern",
  "definition":"A checkerboard pattern is a planar grid of alternating black and white squares used as a calibration target in computer vision. Its regularly spaced corners are easy to detect with sub-pixel accuracy and have precisely known relative positions, providing reliable correspondences for estimating camera parameters. The checkerboard is the most common target for intrinsic calibration, distortion correction, and stereo rig alignment.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:optical-calibration-target","label":"Optical Calibration Target"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:optical-calibration-target","label":"Optical Calibration Target"}],
    "hasPart":[
      {"@id":"urn:ngm:class:feature-detection","label":"Feature Detection"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:computer-vision","label":"Computer Vision"},
      {"@id":"urn:ngm:class:feature-detection","label":"Feature Detection"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"},
      {"@id":"urn:ngm:class:lens-distortion-correction","label":"Lens Distortion Correction"},
      {"@id":"urn:ngm:class:camera-intrinsics","label":"Camera Intrinsics"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"},
      {"@id":"urn:ngm:class:pose-estimation","label":"Pose Estimation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:homography","label":"Homography"},
      {"@id":"urn:ngm:class:fiducial-marker","label":"Fiducial Marker"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:fiducial-marker","label":"Fiducial Marker"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A checkerboard pattern is a planar grid of alternating black and white squares used as an [[Optical Calibration Target]]. Its corners detect cleanly via [[Feature Detection]] at sub-pixel accuracy, giving precise correspondences for [[Camera Calibration]].
- Because the corner spacing is known exactly, it constrains [[Camera Intrinsics]] and supports [[Lens Distortion Correction]].
- ### Overview
- The checkerboard is the workhorse calibration target in computer vision. Its high-contrast edges and saddle-point corners are robust to lighting variation and can be localised more precisely than blob or dot centres.
- A calibration session captures the board at several orientations and depths. Detected corners across views, combined with their known board coordinates, yield an over-determined system solved for the camera's intrinsic matrix and distortion coefficients.
- Variants include asymmetric circle grids and ChArUco boards, which embed fiducial markers to remain detectable under partial occlusion, but the plain checkerboard remains the default for its simplicity and accuracy.
- ### Mechanisms
- Corner detection: edge and saddle-point operators locate grid intersections.
- Sub-pixel refinement: local optimisation sharpens corner positions.
- Correspondence: detected corners are ordered and matched to known board coordinates.
- Parameter solving: multiple views constrain intrinsics and distortion via least squares.
- ### Applications
- Intrinsic calibration of single cameras.
- Stereo and multi-camera extrinsic calibration.
- Lens distortion estimation for wide-angle optics.
- Hand-eye calibration in robotics.
- ### Relationships
- partOf:: [[Optical Calibration Target]]
- hasPart:: [[Feature Detection]]
- uses:: [[Computer Vision]]
- uses:: [[Feature Detection]]
- enables:: [[Camera Calibration]]
- enables:: [[Lens Distortion Correction]]
- enables:: [[Camera Intrinsics]]
- supports:: [[Camera Calibration]]
- supports:: [[Pose Estimation]]
- relatedTo:: [[Homography]]
- relatedTo:: [[Fiducial Marker]]
- contrastsWith:: [[Fiducial Marker]]
- bridgesTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

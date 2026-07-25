public:: true

# Lens Distortion Correction

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lens-distortion-correction", "@type":"Page", "title":"Lens Distortion Correction", "vc:slug":"lens-distortion-correction", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:lens-distortion-correction",
  "@type":"Class",
  "label":"Lens Distortion Correction",
  "definition":"Lens distortion correction is the process of removing geometric aberrations introduced by camera optics so that straight lines in the world appear straight in the image. It estimates distortion coefficients, typically radial and tangential terms, from calibration data and remaps pixels to an undistorted, rectilinear projection. The correction is a prerequisite for accurate measurement, pose estimation, and image rectification in computer-vision pipelines.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
    "requires":[
      {"@id":"urn:ngm:class:camera-intrinsics","label":"Camera Intrinsics"},
      {"@id":"urn:ngm:class:optical-calibration-target","label":"Optical Calibration Target"},
      {"@id":"urn:ngm:class:checkerboard-pattern","label":"Checkerboard Pattern"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:computer-vision","label":"Computer Vision"},
      {"@id":"urn:ngm:class:feature-detection","label":"Feature Detection"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:pose-estimation","label":"Pose Estimation"},
      {"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"},
      {"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:homography","label":"Homography"},
      {"@id":"urn:ngm:class:fiducial-marker","label":"Fiducial Marker"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}
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
- Lens distortion correction removes geometric aberrations from camera optics so world-straight lines render straight. As a step within [[Camera Calibration]], it depends on estimated [[Camera Intrinsics]] and reference data captured from an [[Optical Calibration Target]] such as a [[Checkerboard Pattern]].
- The corrected, rectilinear imagery is a prerequisite for accurate [[Pose Estimation]] and [[Photogrammetry]].
- ### Overview
- Real lenses, especially wide-angle and inexpensive optics, bend light non-ideally. The dominant effect is radial distortion (barrel or pincushion), with smaller tangential components from imperfect lens-sensor alignment.
- Correction models these effects with a small set of coefficients fitted during calibration. A remapping function then warps each pixel to where it would appear under an ideal pinhole projection, producing an undistorted image.
- Because measurement and geometry algorithms assume a pinhole model, applying distortion correction first is essential for accuracy in metrology, AR registration, and 3D reconstruction.
- ### Mechanisms
- Coefficient estimation: radial and tangential parameters are fitted from observed control points.
- Distortion model: a polynomial maps ideal to distorted coordinates.
- Pixel remapping: an inverse map plus interpolation produces the undistorted image.
- Validation: residual reprojection error confirms the quality of the correction.
- ### Applications
- Preprocessing for stereo and multi-view 3D reconstruction.
- Accurate augmented-reality overlay registration.
- Photogrammetry and metrology where geometric fidelity matters.
- Wide-angle and fisheye camera rectification for robotics and automotive vision.
- ### Relationships
- partOf:: [[Camera Calibration]]
- requires:: [[Camera Intrinsics]]
- requires:: [[Optical Calibration Target]]
- requires:: [[Checkerboard Pattern]]
- uses:: [[Computer Vision]]
- uses:: [[Feature Detection]]
- enables:: [[Pose Estimation]]
- enables:: [[Photogrammetry]]
- enables:: [[Augmented Reality]]
- supports:: [[Camera Calibration]]
- relatedTo:: [[Homography]]
- relatedTo:: [[Fiducial Marker]]
- dependsOn:: [[Camera Calibration]]
- bridgesTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

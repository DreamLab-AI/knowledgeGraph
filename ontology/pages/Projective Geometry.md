public:: true

# Projective Geometry

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:projective-geometry", "@type":"Page", "title":"Projective Geometry", "vc:slug":"projective-geometry", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:projective-geometry",
  "@type":"Class",
  "label":"Projective Geometry",
  "definition":"Projective geometry is the branch of geometry concerned with properties of figures that are invariant under projective transformations, where points at infinity are treated on equal footing with ordinary points. Using homogeneous coordinates, it provides the mathematical foundation for modelling how three-dimensional scenes project onto image planes. It underpins camera models, multi-view geometry, and the reconstruction of structure from images in computer vision and spatial computing.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:computer-vision","label":"Computer Vision"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:homography","label":"Homography"}],
    "requires":[{"@id":"urn:ngm:class:camera-calibration","label":"Camera Calibration"}],
    "enables":[{"@id":"urn:ngm:class:epipolar-geometry","label":"Epipolar Geometry"},{"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"}],
    "supports":[{"@id":"urn:ngm:class:stereo-vision","label":"Stereo Vision"},{"@id":"urn:ngm:class:bundle-adjustment","label":"Bundle Adjustment"}],
    "implements":[{"@id":"urn:ngm:class:triangulation","label":"Triangulation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:3d-mapping","label":"3D Mapping"}],
    "relatedTo":[{"@id":"urn:ngm:class:feature-matching","label":"Feature Matching"},{"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"},{"@id":"urn:ngm:class:slam","label":"SLAM"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Projective geometry studies properties invariant under projective transformations and provides the mathematics of how 3D scenes form images. It is the geometric backbone of [[Computer Vision]], formalising [[Camera Calibration]], [[Homography]], and the projection that makes [[Epipolar Geometry]] and reconstruction tractable.
- ### Overview
- Working in homogeneous coordinates, projective geometry unifies points, lines, and planes and admits points and lines at infinity, which is what lets perspective projection be expressed as a linear operation.
- The pinhole camera model is a projective map from 3D space to the image plane; calibration recovers the intrinsic and extrinsic parameters of this map.
- Two-view and multi-view relationships — the fundamental and essential matrices, homographies, and the trifocal tensor — are all expressions of projective constraints between cameras.
- ### Mechanisms
- Homogeneous coordinates representing points and ideal points at infinity.
- Projective transformations (collineations) preserving incidence and cross-ratio.
- The pinhole projection model mapping 3D scene points to 2D images.
- Two-view geometry via fundamental and essential matrices.
- Cross-ratio and conics as projective invariants.
- ### Applications
- Camera modelling and [[Camera Calibration]] in vision pipelines.
- [[Stereo Vision]] and [[Photogrammetry]] for depth and structure recovery.
- [[Bundle Adjustment]] and [[SLAM]] for consistent multi-view reconstruction.
- Generating dense [[Point Cloud]] data and [[3D Mapping]] of environments.
- ### Relationships
- subClassOf:: [[Computer Vision]]
- uses:: [[Homography]]
- requires:: [[Camera Calibration]]
- enables:: [[Epipolar Geometry]]
- enables:: [[Photogrammetry]]
- supports:: [[Stereo Vision]]
- supports:: [[Bundle Adjustment]]
- implements:: [[Triangulation]]
- bridgesTo:: [[3D Mapping]]
- relatedTo:: [[Feature Matching]]
- relatedTo:: [[Point Cloud]]
- relatedTo:: [[SLAM]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh

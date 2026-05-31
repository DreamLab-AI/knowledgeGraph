public:: true

# DWPose
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dwpose",
  "@type": "Page",
  "vc:slug": "dwpose",
  "title": "DWPose",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dwpose",
  "@type": "Class",
  "label": "DWPose",
  "definition": "DWPose is a whole-body 2D human pose estimation model that detects body, hand, face, and foot keypoints with high accuracy using a two-stage distillation approach. It is widely used to generate skeletal conditioning maps for controllable image and video generation. In generative pipelines DWPose output drives spatial-conditioning systems such as ControlNet to constrain pose and gesture.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}, {"@id": "urn:ngm:class:control-net-and-similar-spatial-conditioning-systems", "label": "ControlNet and Similar Spatial Conditioning Systems"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - DWPose is a high-accuracy whole-body 2D [[Pose Estimation]] model covering body, hand, face, and foot keypoints. Its skeletal output is commonly fed to [[ControlNet and Similar Spatial Conditioning Systems]] for pose-controlled generation.
- ### Content
  - DWPose uses a teacher-student distillation scheme to produce dense, robust keypoints in real time. The resulting pose maps act as spatial conditioning signals, letting diffusion models reproduce specific human poses and gestures in synthesised images and video.

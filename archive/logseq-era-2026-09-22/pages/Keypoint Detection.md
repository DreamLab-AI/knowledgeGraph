public:: true

# Keypoint Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:keypoint-detection",
  "@type": "Page",
  "vc:slug": "keypoint-detection",
  "title": "Keypoint Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:keypoint-detection",
  "@type": "Class",
  "label": "Keypoint Detection",
  "definition": "Keypoint detection is a computer vision task that locates salient, semantically meaningful points in an image, such as body joints, facial landmarks or object corners. It outputs spatial coordinates, often with confidence scores, that can be tracked across frames or matched between views. Keypoint detection is a building block for pose estimation, image registration and structure-from-motion.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:image-segmentation", "label": "Image Segmentation"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Keypoint detection is a [[Computer Vision]] task that localises distinctive landmarks in images; it is closely related to [[Image Segmentation]] and forms a core component of [[Pose Estimation]] pipelines.
- ### Content
  - Classical detectors such as SIFT and ORB find repeatable, scale-invariant interest points for matching, while modern heatmap-based deep networks regress landmark locations for human and object pose. The detected keypoints serve downstream tasks including tracking, 3D reconstruction, augmented reality alignment and gesture recognition.

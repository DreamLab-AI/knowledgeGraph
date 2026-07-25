public:: true

# Heatmap Regression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:heatmap-regression",
  "@type": "Page",
  "vc:slug": "heatmap-regression",
  "title": "Heatmap Regression",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:risk-intensity-heatmap-regression",
  "@type": "Class",
  "label": "Heatmap Regression",
  "definition": "Heatmap regression is a computer-vision technique for keypoint localisation in which a network predicts a 2D probability map per landmark rather than directly regressing coordinates. The peak of each predicted heatmap indicates the most likely location, and Gaussian-blurred ground-truth targets make training spatially smooth and robust. It is the dominant approach for human pose estimation and facial landmark detection.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Heatmap regression predicts per-keypoint probability maps instead of raw coordinates; it is a core method used by [[Pose Estimation]] pipelines.
- ### Content
  - Encoding each landmark as a Gaussian peak preserves spatial structure and tolerates annotation noise better than direct coordinate regression. Decoding the sub-pixel argmax of each map yields the final keypoints, and the approach scales naturally to multiple landmarks and multi-person scenes via grouping post-processing.

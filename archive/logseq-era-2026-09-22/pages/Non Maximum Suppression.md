public:: true

# Non Maximum Suppression

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:non-maximum-suppression",
  "@type": "Page",
  "title": "Non Maximum Suppression",
  "vc:slug": "non-maximum-suppression",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:non-maximum-suppression",
  "@type": "Class",
  "label": "Non Maximum Suppression",
  "definition": "Non-Maximum Suppression (NMS) is a post-processing algorithm used in object detection to eliminate redundant overlapping bounding box proposals by retaining only the highest-confidence detection and discarding lower-confidence boxes that exceed a predefined intersection-over-union (IoU) threshold. The procedure iteratively selects the detection with the highest class score, suppresses all remaining boxes that sufficiently overlap with it, and repeats until no candidates remain. NMS is a critical component of single-stage and two-stage detectors including YOLO, SSD, and Faster R-CNN families. Soft-NMS and class-agnostic variants address edge cases where multiple legitimate objects are densely packed.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:bounding-box-regression", "label": "Bounding Box Regression"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:bounding-box-regression", "label": "Bounding Box Regression"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:computer-vision-task", "label": "Computer Vision Task"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:computer-vision-system", "label": "Computer Vision System"},
      {"@id": "urn:ngm:class:real-time-ai-inference", "label": "Real-Time AI Inference"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:heatmap-regression", "label": "Heatmap Regression"},
      {"@id": "urn:ngm:class:bounding-volume", "label": "Bounding Volume"},
      {"@id": "urn:ngm:class:bounding-volume-hierarchy", "label": "Bounding Volume Hierarchy"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:object-detection-and-tracking", "label": "Object Detection and Tracking"}
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Non Maximum Suppression]] is a greedy post-processing step integral to [[Object Detection]] pipelines that removes duplicate bounding-box proposals by comparing [[Bounding Box Regression]] outputs against an intersection-over-union threshold.
  - It iterates over proposals sorted by confidence, keeps the top candidate, and suppresses all remaining boxes whose IoU with the kept box exceeds the threshold.
  - Soft-NMS replaces hard suppression with a confidence decay function to handle dense object configurations.

- ### Overview
  - Most [[Computer Vision]] detection frameworks — YOLO, SSD, Faster R-CNN — rely on NMS as their final filtering stage.
  - The algorithm prevents the same physical object from being reported multiple times by different candidate anchors.
  - Computational cost is O(n²) in the number of proposals, making batched GPU implementations important for real-time inference.

- ### Key aspects
  - **IoU threshold**: the primary hyperparameter governing the aggressiveness of suppression; typical values range from 0.3 to 0.7.
  - **Class-agnostic NMS**: suppresses across all classes simultaneously, reducing false multi-class duplicates.
  - **Soft-NMS**: decays scores rather than zeroing them, improving recall in crowded scenes.
  - **DIoU-NMS**: incorporates distance and aspect ratio in the overlap measure for better localisation.

- ### Mechanisms
  - Proposals from [[Bounding Box Regression]] are ranked by confidence score.
  - The top-scoring box is selected; all remaining boxes with IoU above threshold are discarded.
  - Process repeats on the remaining candidate set until exhausted.

- ### Applications
  - Pedestrian detection in autonomous driving perception stacks.
  - Face detection for biometric identification pipelines.
  - Medical imaging analysis where multiple overlapping region proposals arise from dense anatomical structures.
  - [[Real-Time AI Inference]] serving for surveillance and retail analytics.

- ### Relationships
  - hasPart:: [[Bounding Box Regression]], [[Computer Vision]]
  - uses:: [[Convolutional Neural Network]], [[Machine Learning]]
  - requires:: [[Bounding Box Regression]]
  - enables:: [[Object Detection]], [[Computer Vision Task]]
  - dependsOn:: [[Object Detection]]
  - supports:: [[Computer Vision System]], [[Real-Time AI Inference]]
  - relatedTo:: [[Heatmap Regression]], [[Bounding Volume]], [[Bounding Volume Hierarchy]]
  - contrastsWith:: [[Object Detection and Tracking]]

- ### Provenance
  - updated:: 2026-06-15

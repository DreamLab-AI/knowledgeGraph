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
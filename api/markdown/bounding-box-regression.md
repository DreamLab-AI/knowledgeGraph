- ### Definition
  - [[Bounding Box Regression]] is the continuous coordinate prediction task at the heart of all anchor-based and anchor-free [[Object Detection]] systems.
  - Networks predict four offsets (or absolute coordinates) per candidate location, trained with smooth-L1 loss or generalised [[Regression]] variants.
  - [[Non Maximum Suppression]] post-processes the raw regression outputs to yield a clean final detection set.
  - It contrasts with [[Heatmap Regression]] approaches that encode spatial location as a probability heatmap rather than explicit coordinates.

- ### Overview
  - Introduced in R-CNN and refined through Fast R-CNN, Faster R-CNN, and ultimately single-stage detectors such as YOLO and SSD.
  - Regression targets are typically parameterised relative to anchor boxes to normalise the prediction scale.
  - IoU-based losses (GIoU, DIoU, CIoU) have largely superseded naive coordinate L2 losses for improved gradient quality.

- ### Key aspects
  - **Anchor parameterisation**: deltas (tx, ty, tw, th) relative to predefined anchor sizes and aspect ratios.
  - **Anchor-free variants**: FCOS, CenterPoint predict absolute distances from the object centre.
  - **Loss functions**: smooth-L1, GIoU, DIoU, CIoU, and Focal loss combinations.
  - **Multi-scale heads**: feature pyramid networks supply box predictions at multiple resolution levels.

- ### Mechanisms
  - A [[Convolutional Neural Network]] backbone extracts feature maps; regression heads attached at each scale output coordinate predictions.
  - Ground-truth boxes are matched to anchors via IoU assignment; unmatched anchors contribute only to classification loss.
  - Predicted boxes are decoded from anchor-relative offsets and then filtered through [[Non Maximum Suppression]].

- ### Applications
  - Autonomous vehicle perception — detecting vehicles, pedestrians, and cyclists.
  - Industrial quality inspection — locating defective regions on manufactured parts.
  - Medical imaging — tumour localisation in radiology scans.
  - Augmented reality — anchoring virtual overlays to physical object boundaries.

- ### Relationships
  - hasPart:: [[Non Maximum Suppression]], [[Heatmap Regression]]
  - dependsOn:: [[Convolutional Neural Network]], [[Machine Learning]]
  - requires:: [[Computer Vision]], [[Regression]]
  - enables:: [[Object Detection and Tracking]], [[Computer Vision System]]
  - uses:: [[Regression]], [[Computer Vision Task]]
  - supports:: [[Real-Time AI Inference]], [[Real-Time AI]]
  - relatedTo:: [[Bounding Volume]], [[Bounding Volume Hierarchy]], [[Gaussian Process Regression]]
  - contrastsWith:: [[Regression Testing]]

- ### Provenance
  - updated:: 2026-06-15
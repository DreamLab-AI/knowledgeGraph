---
okf_version: "0.2"
type: Class
title: COCO WholeBody
resource: urn:ngm:class:coco-wholebody
domain: artificial-intelligence
description: COCO WholeBody is an extension of the COCO dataset that adds dense whole-body keypoint annotations, covering the body, hands, feet, and face with 133 keypoints per person rather than the 17 body-only keypoints of the original COCO annotations. It is used to train and benchmark whole-body pose estimation models, including hand and facial landmark detectors used by tools such as DWPose. The extended
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:coco-dataset
enables:
  - urn:ngm:class:pose-estimation
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# COCO WholeBody

COCO WholeBody is an extension of the COCO dataset that adds dense whole-body keypoint annotations, covering the body, hands, feet, and face with 133 keypoints per person rather than the 17 body-only keypoints of the original COCO annotations. It is used to train and benchmark whole-body pose estimation models, including hand and facial landmark detectors used by tools such as DWPose. The extended annotation set enables downstream applications such as gesture recognition, sign-language interpretation, and fine-grained human motion capture from images.

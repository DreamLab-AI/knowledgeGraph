---
okf_version: "0.2"
type: Class
title: MMPose
resource: urn:ngm:class:mmpose
domain: artificial-intelligence
description: MMPose is an open-source pose estimation toolbox, part of the OpenMMLab project, providing reference implementations, pretrained models and training pipelines for 2D and 3D human and animal pose estimation. It supports a wide range of architectures, including top-down and bottom-up keypoint detectors, and is widely used as a backbone library by downstream research and production systems that requi
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:pose-estimation
partOf:
  - urn:ngm:class:pose-estimation
relatedTo:
  - urn:ngm:class:dwpose
---

# MMPose

MMPose is an open-source pose estimation toolbox, part of the OpenMMLab project, providing reference implementations, pretrained models and training pipelines for 2D and 3D human and animal pose estimation. It supports a wide range of architectures, including top-down and bottom-up keypoint detectors, and is widely used as a backbone library by downstream research and production systems that require whole-body or hand keypoint estimation, such as DWPose. Its modular configuration system allows researchers to swap backbones, datasets and training schedules without rewriting pipeline code.

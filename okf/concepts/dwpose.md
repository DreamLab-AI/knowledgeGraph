---
okf_version: "0.2"
type: Class
title: DWPose
resource: urn:ngm:class:dwpose
domain: artificial-intelligence
description: DWPose is a whole-body 2D human pose estimation model developed by IDEA-Research that detects 133 keypoints spanning body, hands, face, and feet using a two-stage teacher-student knowledge distillation scheme. Its skeletal conditioning maps are widely used to drive spatial-conditioning systems such as ControlNet in diffusion-based image and video generation pipelines.
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:keypoint-detection
hasPart:
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:skeleton-map
  - urn:ngm:class:human-body-model
  - urn:ngm:class:control-net-conditioning
requires:
  - urn:ngm:class:rtmpose
  - urn:ngm:class:mmpose
  - urn:ngm:class:coco-wholebody
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:control-net-and-similar-spatial-conditioning-systems
  - urn:ngm:class:image-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:character-animation
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:action-recognition
  - urn:ngm:class:motion-capture
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:mmpose
  - urn:ngm:class:coco-wholebody
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:onnx
implements:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:computer-vision
contrastsWith:
  - urn:ngm:class:open-pose
  - urn:ngm:class:mediapipe
  - urn:ngm:class:vitpose
  - urn:ngm:class:sdpose
uses:
  - urn:ngm:class:onnx
  - urn:ngm:class:mmpose
  - urn:ngm:class:coco-wholebody
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:diffusion-transformer
  - urn:ngm:class:hugging-face-hub
supports:
  - urn:ngm:class:stable-diffusion-image-model
  - urn:ngm:class:animatediff
  - urn:ngm:class:animateanyone
  - urn:ngm:class:digital-human-technology
  - urn:ngm:class:sports-analytics
  - urn:ngm:class:comfy-ui
  - urn:ngm:class:automatic1111
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:edge-detection
standardizedBy:
  - urn:ngm:class:mmpose
  - urn:ngm:class:idea-research
relatedTo:
  - urn:ngm:class:open-pose
  - urn:ngm:class:vitpose
  - urn:ngm:class:mediapipe
  - urn:ngm:class:sdpose
  - urn:ngm:class:rtmpose
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:digital-human-technology
  - urn:ngm:class:motion-capture
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:smpl-body-model
---

# DWPose

DWPose is a whole-body 2D human pose estimation model developed by IDEA-Research that detects 133 keypoints spanning body, hands, face, and feet using a two-stage teacher-student knowledge distillation scheme. Its skeletal conditioning maps are widely used to drive spatial-conditioning systems such as ControlNet in diffusion-based image and video generation pipelines.

---
okf_version: "0.2"
type: Class
title: Video Encoding
resource: urn:ngm:class:video-encoding
domain: metaverse
description: Video encoding is the process of compressing raw or lightly-compressed video frames into a deliverable bitstream using a video codec, encompassing decisions about encoding parameters (resolution, frame rate, bitrate mode, keyframe interval, codec profile and level), rate control algorithms, and hardware or software encoder selection to balance output quality, file size, and encoding speed for a gi
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:video-codec
enables:
  - urn:ngm:class:cdn
  - urn:ngm:class:bandwidth-adaptation
  - urn:ngm:class:bandwidth-optimization
dependsOn:
  - urn:ngm:class:compute-resources
uses:
  - urn:ngm:class:encoder
  - urn:ngm:class:computer-vision-video-analysis
relatedTo:
  - urn:ngm:class:decoder
  - urn:ngm:class:content-creation-pipeline
---

# Video Encoding

Video encoding is the process of compressing raw or lightly-compressed video frames into a deliverable bitstream using a video codec, encompassing decisions about encoding parameters (resolution, frame rate, bitrate mode, keyframe interval, codec profile and level), rate control algorithms, and hardware or software encoder selection to balance output quality, file size, and encoding speed for a given delivery target.

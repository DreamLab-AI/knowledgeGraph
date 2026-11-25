---
okf_version: "0.2"
type: Class
title: Computational Image Relighting Technique
resource: urn:ngm:class:computational-image-relighting-technique
domain: infrastructure
description: "Relighting is a computer graphics and generative AI technique that computationally alters the illumination of an existing image or video, repositioning or replacing light sources to produce a different lighting environment without re-capturing the scene. Modern approaches use neural rendering models trained on diverse lighting conditions, enabling portrait relighting, object relighting, and scene "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:node-based-diffusion-pipeline-interface-workflows
uses:
  - urn:ngm:class:neural-rendering
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:physically-based-rendering
relatedTo:
  - urn:ngm:class:ai-video
  - urn:ngm:class:inpainting
  - urn:ngm:class:control-net
  - urn:ngm:class:differentiable-rendering
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Computational Image Relighting Technique

Relighting is a computer graphics and generative AI technique that computationally alters the illumination of an existing image or video, repositioning or replacing light sources to produce a different lighting environment without re-capturing the scene. Modern approaches use neural rendering models trained on diverse lighting conditions, enabling portrait relighting, object relighting, and scene relighting from a single input image. Open-source workflows in tools such as ComfyUI implement IC-Light and similar diffusion-based pipelines that rival or exceed proprietary solutions.

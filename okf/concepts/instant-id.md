---
okf_version: "0.2"
type: Class
title: InstantID
resource: urn:ngm:class:instant-id
domain: ai
description: InstantID is a diffusion-model technique for identity-preserving image generation that synthesises new images of a specific person from a single reference photograph, without per-subject fine-tuning. It combines a face encoder with an IdentityNet adapter that injects facial identity and spatial landmarks into a text-to-image diffusion backbone. While powerful for personalised avatars and stylisati
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:diffusion-models
relatedTo:
  - urn:ngm:class:control-net-and-similar-spatial-conditioning-systems
  - urn:ngm:class:deepfakes-and-fraudulent-content
---

# InstantID

InstantID is a diffusion-model technique for identity-preserving image generation that synthesises new images of a specific person from a single reference photograph, without per-subject fine-tuning. It combines a face encoder with an IdentityNet adapter that injects facial identity and spatial landmarks into a text-to-image diffusion backbone. While powerful for personalised avatars and stylisation, its zero-shot fidelity also raises misuse concerns around impersonation and synthetic media.

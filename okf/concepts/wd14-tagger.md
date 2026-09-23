---
okf_version: "0.2"
type: Class
title: WD14 Tagger
resource: urn:ngm:class:wd14-tagger
domain: ai
description: WD14 Tagger is an automatic image-tagging model and tool that predicts Danbooru-style descriptive tags for images, widely used to caption training datasets for diffusion-model fine-tuning. Built on convolutional or transformer backbones trained on large tagged anime/illustration corpora, it outputs ranked tag confidences that captioning pipelines threshold and assemble into prompts. It is a standa
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:kohya-dreambooth-and-similar
  - urn:ngm:class:generative-ai
---

# WD14 Tagger

WD14 Tagger is an automatic image-tagging model and tool that predicts Danbooru-style descriptive tags for images, widely used to caption training datasets for diffusion-model fine-tuning. Built on convolutional or transformer backbones trained on large tagged anime/illustration corpora, it outputs ranked tag confidences that captioning pipelines threshold and assemble into prompts. It is a standard preprocessing step in DreamBooth and LoRA training workflows.

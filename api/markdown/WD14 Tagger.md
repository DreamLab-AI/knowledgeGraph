public:: true

# WD14 Tagger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wd14-tagger",
  "@type": "Page",
  "vc:slug": "wd14-tagger",
  "title": "WD14 Tagger",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wd14-tagger",
  "@type": "Class",
  "label": "WD14 Tagger",
  "definition": "WD14 Tagger is an automatic image-tagging model and tool that predicts Danbooru-style descriptive tags for images, widely used to caption training datasets for diffusion-model fine-tuning. Built on convolutional or transformer backbones trained on large tagged anime/illustration corpora, it outputs ranked tag confidences that captioning pipelines threshold and assemble into prompts. It is a standard preprocessing step in DreamBooth and LoRA training workflows.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:kohya-dreambooth-and-similar", "label": "Kohya DreamBooth and Similar"}, {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - WD14 Tagger auto-generates descriptive tags for images, a captioning step within [[Kohya DreamBooth and Similar]] pipelines that prepare datasets for [[Generative AI]] fine-tuning.
- ### Content
  - The tool runs a pretrained tagger (e.g. ViT or ConvNeXt variants) and applies a confidence threshold to emit comma-separated tags per image, often with options to exclude or weight categories. Caption quality directly shapes the controllability of the resulting fine-tuned model, so practitioners tune thresholds and manually curate tags to avoid baking in spurious or biased associations.

WD14 Tagger is an automatic image-tagging model and tool that predicts Danbooru-style descriptive tags for images, widely used to caption training datasets for diffusion-model fine-tuning. Built on convolutional or transformer backbones trained on large tagged anime/illustration corpora, it outputs ranked tag confidences that captioning pipelines threshold and assemble into prompts. It is a standard preprocessing step in DreamBooth and LoRA training workflows.

### Content

- The tool runs a pretrained tagger (e.g. ViT or ConvNeXt variants) and applies a confidence threshold to emit comma-separated tags per image, often with options to exclude or weight categories. Caption quality directly shapes the controllability of the resulting fine-tuned model, so practitioners tune thresholds and manually curate tags to avoid baking in spurious or biased associations.


public:: true

# SSIM Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ssim-metric",
  "@type": "Page",
  "vc:slug": "ssim-metric",
  "title": "SSIM Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ssim-metric",
  "@type": "Class",
  "label": "SSIM Metric",
  "definition": "The Structural Similarity Index (SSIM) is a perceptual image-quality metric that compares two images by modelling luminance, contrast, and structural correlation over local windows, rather than measuring pixel-wise error alone. It correlates better with human judgement of quality than mean squared error or PSNR, producing a score between -1 and 1 where 1 indicates identical structure. It is widely used to evaluate compression, restoration, and generative reconstruction.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}, {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"},
      {"@id": "urn:ngm:class:image-and-video-restoration", "label": "Image and Video Restoration"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The SSIM metric is a perceptual [[Evaluation Metric]] that scores image similarity by comparing luminance, contrast, and local structural correlation, aligning more closely with human perception than pixel-wise error measures.
- ### Content
  - Computed over sliding local windows and combined into a single index in the range -1 to 1, SSIM penalises structural distortion that PSNR overlooks. It is a standard quality signal for [[Image and Video Restoration]] and for [[Bandwidth Adaptation]] schemes that must trade bitrate against perceived fidelity, guiding rate-control and model-training objectives toward perceptually faithful output.

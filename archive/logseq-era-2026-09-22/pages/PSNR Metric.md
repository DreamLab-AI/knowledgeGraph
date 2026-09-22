public:: true

# PSNR Metric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:psnr-metric",
  "@type": "Page",
  "vc:slug": "psnr-metric",
  "title": "PSNR Metric",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:psnr-metric",
  "@type": "Class",
  "label": "PSNR Metric",
  "definition": "Peak Signal-to-Noise Ratio (PSNR) is an objective image- and video-quality metric expressing the ratio between the maximum possible signal power and the power of distorting noise, computed from the mean squared error between a reference and a degraded signal. Measured in decibels, higher PSNR values indicate closer fidelity to the original. It is widely used to benchmark lossy compression, restoration, and reconstruction algorithms despite its known weak correlation with perceived quality.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}, {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:image-and-video-restoration", "label": "Image and Video Restoration"},
      {"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The PSNR metric quantifies reconstruction fidelity in decibels via the mean squared error between a reference and a processed signal. It is a standard benchmark in [[Image and Video Restoration]] and informs codec decisions in [[Bandwidth Adaptation]].
- ### Content
  - PSNR is cheap to compute and monotonic with MSE, making it a default reporting figure for compression and denoising. However, it treats all pixel errors equally and ignores human visual sensitivity, so it is often reported alongside perceptual metrics such as SSIM or LPIPS for a more complete quality assessment.

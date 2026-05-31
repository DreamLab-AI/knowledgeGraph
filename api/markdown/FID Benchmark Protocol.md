public:: true

# FID Benchmark Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fid-benchmark-protocol",
  "@type": "Page",
  "vc:slug": "fid-benchmark-protocol",
  "title": "FID Benchmark Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fid-benchmark-protocol",
  "@type": "Class",
  "label": "FID Benchmark Protocol",
  "definition": "The FID benchmark protocol is the standardised methodology for evaluating generative image models using the Fréchet Inception Distance, which compares the distribution of generated images with that of real images in the feature space of a pretrained Inception network. The protocol fixes the feature extractor, the number of samples, and preprocessing so that scores are comparable across models; lower FID indicates greater similarity to real data. It is the de facto standard for benchmarking GANs and diffusion models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:diffusion-models", "label": "Diffusion Models"},
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The FID benchmark protocol standardises how Fréchet Inception Distance is computed so that [[Diffusion Models]] and [[Generative Adversarial Networks]] can be compared fairly. It is a widely used image-generation [[Evaluation Metric]] procedure.
- ### Content
  - The protocol mandates extracting features from a fixed Inception-v3 layer, modelling real and generated features as multivariate Gaussians, and computing the Fréchet distance between them over a prescribed sample count. Although FID correlates reasonably with perceived quality and diversity, it is sensitive to sample size, preprocessing, and the choice of feature extractor, so consistent protocol adherence is essential for valid cross-model comparison.

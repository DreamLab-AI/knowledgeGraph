public:: true

# Sampling Procedure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sampling-procedure",
  "@type": "Page",
  "vc:slug": "sampling-procedure",
  "title": "Sampling Procedure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sampling-procedure",
  "@type": "Class",
  "label": "Sampling Procedure",
  "definition": "A sampling procedure is the method by which a generative model draws output samples from its learned probability distribution. It governs how latent or noise variables are mapped to concrete outputs, including techniques such as ancestral sampling, temperature scaling, top-k and nucleus sampling, and iterative denoising in diffusion models. The choice of procedure controls the diversity, fidelity, and computational cost of generation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"},
      {"@id": "urn:ngm:class:inpainting", "label": "Inpainting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sampling procedure is the algorithm a [[Generative Adversarial Networks]] model or diffusion model uses to draw outputs from its distribution, and is a constituent step of generative tasks such as [[Inpainting]].
- ### Content
  - Sampling balances exploration against quality: stochastic schemes increase diversity while deterministic or low-temperature schemes increase coherence. In diffusion and score-based models, the procedure defines the reverse-time trajectory and the number of denoising steps, directly trading sample quality against inference latency.

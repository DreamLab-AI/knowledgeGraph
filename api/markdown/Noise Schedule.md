public:: true

# Noise Schedule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:noise-schedule",
  "@type": "Page",
  "vc:slug": "noise-schedule",
  "title": "Noise Schedule",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:noise-schedule",
  "@type": "Class",
  "label": "Noise Schedule",
  "definition": "A noise schedule is the function that determines how much Gaussian noise is added at each step of a diffusion model's forward process and, correspondingly, removed during sampling. It governs the variance trajectory from clean data to pure noise and strongly affects sample quality, training stability, and the number of steps required. Common forms include linear, cosine, and learned schedules.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:diffusion-models", "label": "Diffusion Models"},
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A noise schedule defines how noise is added and removed across the steps of a diffusion process. It is a component of [[Diffusion Models]] and is used during [[Sampling]].
- ### Content
  - The schedule sets the signal-to-noise ratio at each timestep; cosine schedules tend to spend more capacity on the perceptually important mid-noise region than linear ones. Choice of schedule interacts with the sampler and step count, so reduced-step samplers often re-parameterise or learn the schedule to preserve quality while accelerating generation.

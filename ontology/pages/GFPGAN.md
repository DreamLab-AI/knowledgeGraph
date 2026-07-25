public:: true

# GFPGAN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gfpgan",
  "@type": "Page",
  "vc:slug": "gfpgan",
  "title": "GFPGAN",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gfpgan",
  "@type": "Class",
  "label": "GFPGAN",
  "definition": "GFPGAN (Generative Facial Prior GAN) is a practical deep-learning model for blind face restoration that leverages the rich facial priors encoded in a pretrained StyleGAN to recover realistic detail from degraded portraits. It restores resolution, removes artefacts, and reconstructs plausible facial features in a single forward pass. It is widely used in photo restoration and as a face-enhancement component in image and video pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:face-swap", "label": "Face Swap"}, {"@id": "urn:ngm:class:image-and-video-restoration", "label": "Image and Video Restoration"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GFPGAN is a GAN-based face-restoration model that exploits a generative facial prior; it is used by [[Face Swap]] pipelines and implements high-quality [[Image and Video Restoration]] for faces.
- ### Content
  - The model injects features from a degraded input into a pretrained generator via spatial feature transforms, balancing fidelity to the original identity against perceptual realism. It handles compression artefacts, blur, and low resolution, and runs efficiently enough for batch and interactive use. As a restoration tool it is dual-use, since the same enhancement can improve synthetic or manipulated faces.

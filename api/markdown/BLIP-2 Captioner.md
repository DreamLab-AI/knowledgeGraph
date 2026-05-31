public:: true

# BLIP-2 Captioner
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:blip-2-captioner",
  "@type": "Page",
  "vc:slug": "blip-2-captioner",
  "title": "BLIP-2 Captioner",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blip-2-captioner",
  "@type": "Class",
  "label": "BLIP-2 Captioner",
  "definition": "BLIP-2 is a vision-language model that bridges a frozen image encoder and a frozen large language model with a lightweight Querying Transformer (Q-Former), and a BLIP-2 captioner uses this model to generate natural-language descriptions of images. It produces high-quality captions efficiently because only the Q-Former is trained, leaving the heavy backbones fixed. Such captioners are commonly used to auto-label image datasets for training diffusion models and fine-tuning pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:kohya-dreambooth-and-similar", "label": "Kohya DreamBooth and Similar"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A BLIP-2 captioner uses the BLIP-2 vision-language model to generate image captions, frequently to auto-label training data for fine-tuning workflows such as [[Kohya DreamBooth and Similar]].
- ### Content
  - BLIP-2's Q-Former extracts a compact set of visual query tokens that condition a frozen LLM, yielding strong captioning and visual question answering at low training cost. In image-generation pipelines, batch captioning with BLIP-2 produces the text-image pairs needed to fine-tune or personalise diffusion models.

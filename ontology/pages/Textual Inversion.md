public:: true

# Textual Inversion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:textual-inversion",
  "@type": "Page",
  "vc:slug": "textual-inversion",
  "title": "Textual Inversion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:textual-inversion",
  "@type": "Class",
  "label": "Textual Inversion",
  "definition": "Textual inversion is a fine-tuning technique for text-to-image diffusion models that learns a new embedding vector for a placeholder token from a handful of example images, capturing a specific subject or style without altering the model weights. The learned pseudo-word can then be composed into prompts like any ordinary token. It is lightweight and shareable because only a small embedding, not the full network, is trained.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:kohya-dreambooth-and-similar", "label": "KOHYA Dreambooth and similar"},
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Textual inversion learns a new embedding for a placeholder token from a few images, teaching a diffusion model a subject or style without changing its weights, and is offered by toolchains such as [[Kohya, DreamBooth and Similar]].
- ### Content
  - Rather than updating the model, textual inversion optimises a single embedding vector so that the placeholder pseudo-word reconstructs the example images when used in a prompt. The result is a tiny artefact, often a few kilobytes, that can be shared and combined with other prompts and even other learned concepts. Because the base model is frozen, it is far cheaper than full fine-tuning but generally captures concepts with less fidelity than weight-editing methods like DreamBooth or LoRA.

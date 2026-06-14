public:: true

# InstantID
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:instant-id",
  "@type": "Page",
  "vc:slug": "instant-id",
  "title": "InstantID",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:instant-id",
  "@type": "Class",
  "label": "InstantID",
  "definition": "InstantID is a diffusion-model technique for identity-preserving image generation that synthesises new images of a specific person from a single reference photograph, without per-subject fine-tuning. It combines a face encoder with an IdentityNet adapter that injects facial identity and spatial landmarks into a text-to-image diffusion backbone. While powerful for personalised avatars and stylisation, its zero-shot fidelity also raises misuse concerns around impersonation and synthetic media.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:control-net-and-similar-spatial-conditioning-systems", "label": "ControlNet and Similar Spatial Conditioning Systems"},
      {"@id": "urn:ngm:class:deepfakes-and-fraudulent-content", "label": "Deepfakes and fraudulent content"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - InstantID is a tuning-free, identity-preserving image generator that conditions diffusion models on a single face image. It is conceptually related to [[ControlNet and Similar Spatial Conditioning Systems]] and is implicated in [[Deepfakes and Fraudulent Content]].
- ### Content
  - The method extracts a face embedding and uses an IdentityNet to inject identity plus landmark guidance during denoising, achieving high likeness in a single pass. Its low barrier to producing realistic likenesses makes provenance and consent controls important.

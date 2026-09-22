public:: true

# Zero Convolution

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:zero-convolution", "@type":"Page", "title":"Zero Convolution", "vc:slug":"zero-convolution", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zero-convolution",
  "@type": "Class",
  "label": "Zero Convolution",
  "definition": "A zero convolution is a 1x1 convolutional layer whose weights and bias are initialised to zero before training. Used in ControlNet, it connects a trainable copy of a diffusion model's encoder blocks to the frozen base network so that, at the start of training, the added conditioning branch contributes nothing and the combined model reproduces the original pretrained behaviour exactly. As training proceeds, the zero convolution's weights grow away from zero, progressively and stably introducing the effect of the new conditioning signal.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-net",
      "label": "ControlNet"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:control-net",
        "label": "ControlNet"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A zero convolution is a 1x1 convolutional layer whose weights and bias are initialised to zero before training. Used in ControlNet, it connects a trainable copy of a diffusion model's encoder blocks to the frozen base network so that, at the start of training, the added conditioning branch contributes nothing and the combined model reproduces the original pretrained behaviour exactly. As training proceeds, the zero convolution's weights grow away from zero, progressively and stably introducing the effect of the new conditioning signal.

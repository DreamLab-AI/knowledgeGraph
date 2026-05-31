public:: true

# SwiGLU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:swi-glu",
  "@type": "Page",
  "vc:slug": "swi-glu",
  "title": "SwiGLU",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:swi-glu",
  "@type": "Class",
  "label": "SwiGLU",
  "definition": "SwiGLU is a gated activation function for neural networks that combines the Swish (SiLU) nonlinearity with a Gated Linear Unit, computing the element-wise product of a Swish-activated projection and a linear gate projection. It is widely used in the feed-forward sublayers of modern transformer models because it empirically improves quality over ReLU or GELU at comparable cost. Its gating mechanism gives the network a learnable, input-dependent pathway through each feed-forward block.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feed-forward-network", "label": "Feed-Forward Network"},
      {"@id": "urn:ngm:class:transformers", "label": "Transformers"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SwiGLU is a gated activation that multiplies a Swish-activated projection by a linear gate, used in the [[Feed-Forward Network]] sublayers of [[Transformers]] to improve model quality.
- ### Content
  - The function splits the feed-forward input into two projections, applies the Swish nonlinearity to one, and multiplies it element-wise by the other to form an input-dependent gate. Compared with a plain ReLU MLP, SwiGLU requires three weight matrices instead of two, so implementations shrink the hidden dimension to keep parameter count constant. It became a default choice in large language models such as the PaLM and LLaMA families after gated variants showed consistent perplexity gains.

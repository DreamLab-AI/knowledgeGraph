public:: true

# ReLU Activation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:re-lu-activation",
  "@type": "Page",
  "vc:slug": "re-lu-activation",
  "title": "ReLU Activation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:re-lu-activation",
  "@type": "Class",
  "label": "ReLU Activation",
  "definition": "The Rectified Linear Unit (ReLU) is a nonlinear activation function defined as f(x) = max(0, x), outputting the input directly when positive and zero otherwise. Its simplicity, sparse activation, and non-saturating gradient for positive inputs make it the default activation in most deep neural networks, mitigating the vanishing-gradient problem. Variants such as Leaky ReLU and GELU address its dead-neuron limitation.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"},
      {"@id": "urn:ngm:class:fast-ai", "label": "fast.ai"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - ReLU is the activation function f(x) = max(0, x), the default nonlinearity in deep [[Neural Network]] architectures. It is used in models such as [[Generative Adversarial Networks]] and taught throughout [[fast.ai]] curricula.
- ### Content
  - ReLU is computationally cheap and preserves a constant gradient of 1 for positive inputs, accelerating convergence relative to sigmoid/tanh. Its drawback is the dying-ReLU problem, where neurons stuck in the negative region stop learning; Leaky ReLU, PReLU, ELU, and GELU were introduced to maintain non-zero gradients.

public:: true

# Inception v3

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inception-v3", "@type":"Page", "title":"Inception v3", "vc:slug":"inception-v3", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:inception-v3",
  "@type":"Class",
  "label":"Inception v3",
  "definition":"Inception v3 is a convolutional neural network architecture from Google that refined the earlier Inception design with factorised convolutions, auxiliary classifiers, and label smoothing to improve accuracy and reduce computational cost on image classification tasks. It replaces large convolutional filters with sequences of smaller asymmetric convolutions, cutting parameter count while preserving representational capacity. Pretrained on ImageNet, its penultimate-layer activations are the standard feature extractor used to compute the Fréchet Inception Distance and Inception Score for evaluating generative image models. It remains a common baseline and building block in computer vision pipelines despite the emergence of newer architectures.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"}],
  "relations":{}
}
```

- ### Definition
	- Inception v3 is a convolutional neural network architecture from Google that refined the earlier Inception design with factorised convolutions, auxiliary classifiers, and label smoothing to improve accuracy and reduce computational cost on image classification tasks. It replaces large convolutional filters with sequences of smaller asymmetric convolutions, cutting parameter count while preserving representational capacity. Pretrained on ImageNet, its penultimate-layer activations are the standard feature extractor used to compute the Fréchet Inception Distance and Inception Score for evaluating generative image models. It remains a common baseline and building block in computer vision pipelines despite the emergence of newer architectures.
- ### Relationships
	- subClassOf:: [[Convolutional Neural Network]]

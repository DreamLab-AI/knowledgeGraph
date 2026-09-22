public:: true

# Conditioning Signal

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:conditioning-signal",
  "@type": "Page",
  "title": "Conditioning Signal",
  "vc:slug": "conditioning-signal",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:conditioning-signal",
  "@type": "Class",
  "label": "Conditioning Signal",
  "definition": "A conditioning signal is auxiliary input - such as a text prompt, class label, pose map, or edge map - supplied to a generative model to steer its output toward desired attributes without retraining the base model. Techniques such as classifier-free guidance and ControlNet-style spatial conditioning inject these signals at specific points in the generation process to control content, structure, or style. The strength and fidelity of a conditioning signal determine how closely generated output adheres to the intended constraint.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-signal",
      "label": "Control Signal"
    }
  ],
  "relations": {}
}
```

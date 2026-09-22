public:: true

# Inference Compute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:inference-compute",
  "@type": "Page",
  "vc:slug": "inference-compute",
  "title": "Inference Compute",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inference-compute",
  "@type": "Class",
  "label": "Inference Compute",
  "definition": "Inference compute is the computational capacity consumed when a trained machine-learning model generates outputs from inputs, as distinct from the compute used during training. For large language models it scales with model size, context length, and the number of generated tokens, and increasingly with test-time reasoning techniques that spend more compute per query to improve answers. It is a primary cost and latency driver for deployed AI systems and agents.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agents", "label": "Agents"},
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Inference compute is the runtime processing required to serve predictions from a trained model, contrasted with training compute. [[Agents]] and [[Computer Use and Browser Agents]] consume it heavily because they issue many sequential model calls per task.
- ### Content
  - Inference compute is provisioned via accelerators (GPUs, TPUs, custom ASICs) and optimised through batching, quantisation, and key-value caching. Test-time scaling, where models deliberate longer to improve accuracy, has made inference compute a strategic lever comparable to training scale.

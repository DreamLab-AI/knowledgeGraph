public:: true

# Verifiable Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:verifiable-inference",
  "@type": "Page",
  "vc:slug": "verifiable-inference",
  "title": "Verifiable Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:verifiable-inference",
  "@type": "Class",
  "label": "Verifiable Inference",
  "definition": "Verifiable inference is the capability to cryptographically prove that a specific machine-learning model produced a given output for a given input without requiring trust in the compute provider. Techniques include zero-knowledge proofs of model execution (zkML), trusted execution environments and optimistic verification, which let third parties audit results. It is essential for decentralised and trust-minimised AI compute markets where inference is outsourced.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:prime-intellect", "label": "Prime Intellect"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Verifiable inference cryptographically proves that a model produced a claimed output, a capability required by decentralised compute networks such as [[Prime Intellect]].
- ### Content
  - Approaches trade off cost and assurance: zkML generates succinct proofs at heavy proving overhead, TEEs offer hardware attestation with weaker cryptographic guarantees, and optimistic schemes assume honesty with fraud-proof fallback. The goal is trust-minimised verification of outsourced AI computation.

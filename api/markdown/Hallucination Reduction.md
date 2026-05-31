public:: true

# Hallucination Reduction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hallucination-reduction",
  "@type": "Page",
  "vc:slug": "hallucination-reduction",
  "title": "Hallucination Reduction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hallucination-reduction",
  "@type": "Class",
  "label": "Hallucination Reduction",
  "definition": "Hallucination reduction is the set of techniques used to decrease the rate at which large language models generate fluent but factually incorrect or unsupported output. Approaches include grounding generation in retrieved evidence, fact-checking against trusted sources, calibrated abstention, and fine-tuning for faithfulness. It is central to deploying generative AI in high-stakes domains where accuracy is critical.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation-rag", "label": "Retrieval-Augmented Generation (RAG)"},
      {"@id": "urn:ngm:class:ai-grounded-domain", "label": "AI Grounded Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Hallucination reduction comprises methods to make model output factually grounded, enabled by approaches such as [[Retrieval-Augmented Generation (RAG)]] and central to the [[AI Grounded Domain]].
- ### Content
  - Practical pipelines combine retrieval of authoritative context, citation enforcement, self-consistency checks, and uncertainty-aware decoding so the model can decline rather than fabricate. Evaluation relies on faithfulness and attribution metrics, and the techniques trade some generative freedom for verifiable reliability.

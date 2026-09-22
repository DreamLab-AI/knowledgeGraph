public:: true

# ULMFiT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ulmfi-t",
  "@type": "Page",
  "vc:slug": "ulmfi-t",
  "title": "ULMFiT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ulmfi-t",
  "@type": "Class",
  "label": "ULMFiT",
  "definition": "ULMFiT (Universal Language Model Fine-tuning) is a transfer-learning method introduced by Howard and Ruder in 2018 that adapts a language model pre-trained on a large general corpus to downstream NLP tasks such as text classification. It popularised techniques including discriminative learning rates, slanted triangular learning rates, and gradual unfreezing, demonstrating that language-model pre-training transfers effectively to many tasks.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:fast-ai", "label": "fast.ai"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A transfer-learning method that fine-tunes a pre-trained language model for downstream tasks using discriminative learning rates and gradual unfreezing. It was developed and popularised through [[fast.ai]] and helped establish the pre-train-then-fine-tune paradigm in NLP.
- ### Content
  - ULMFiT proceeds in three stages: general-domain language-model pre-training, target-task language-model fine-tuning, and target-task classifier fine-tuning. Its training tricks stabilise transfer to small datasets and presaged the transformer-based pre-training methods that now dominate natural language processing.

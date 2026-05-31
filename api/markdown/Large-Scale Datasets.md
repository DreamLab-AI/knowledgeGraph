public:: true

# Large-Scale Datasets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:large-scale-datasets",
  "@type": "Page",
  "vc:slug": "large-scale-datasets",
  "title": "Large-Scale Datasets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:large-scale-datasets",
  "@type": "Class",
  "label": "Large-Scale Datasets",
  "definition": "Large-scale datasets are very large collections of data, often spanning billions of examples and many terabytes, assembled to train modern machine learning models. They are typically aggregated from web crawls, public corpora and curated sources, then filtered, deduplicated and tokenised. Their scale, diversity and quality are primary determinants of the capabilities of large language and generative models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Large-scale datasets are the massive training corpora that constitute essential [[AI Infrastructure]], required to train [[Large Language Models]] and other [[Generative AI]] systems.
- ### Content
  - Building them involves large-scale crawling or licensing, aggressive deduplication, quality and safety filtering, and tokenisation, with provenance and licensing increasingly under scrutiny. Empirical scaling laws show model performance improving predictably with data volume and quality, making dataset construction a core engineering and governance challenge in frontier AI.

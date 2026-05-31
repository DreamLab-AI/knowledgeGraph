public:: true

# Data Augmentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-augmentation",
  "@type": "Page",
  "vc:slug": "data-augmentation",
  "title": "Data Augmentation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-augmentation",
  "@type": "Class",
  "label": "Data Augmentation",
  "definition": "Data augmentation is a machine learning technique that expands a training dataset by applying label-preserving transformations or synthesising new examples from existing data. Typical methods include geometric and photometric image transforms, noise injection, and generative model sampling such as GAN-produced samples. It improves model generalisation and robustness, mitigating overfitting when labelled data is scarce.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:synthetic-data-generator", "label": "Synthetic Data Generator"},
      {"@id": "urn:ngm:class:generative-adversarial-networks", "label": "Generative Adversarial Networks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data augmentation enlarges a training set with label-preserving transformations or generated samples, often using a [[Synthetic Data Generator]] or [[Generative Adversarial Networks]] to improve model generalisation.
- ### Content
  - Classic augmentation applies transforms such as rotation, cropping, colour jitter and noise that preserve semantic labels, while generative approaches synthesise entirely new plausible examples. By exposing models to greater variation, augmentation reduces overfitting and improves performance on limited or imbalanced datasets.

public:: true

# Model Generalisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:model-generalisation",
  "@type": "Page",
  "title": "Model Generalisation",
  "vc:slug": "model-generalisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-generalisation",
  "@type": "Class",
  "label": "Model Generalisation",
  "definition": "Model generalisation is the ability of a trained machine learning model to perform accurately on new, previously unseen data drawn from the same underlying distribution as its training set, rather than merely memorising the training examples. It is the central goal of the training process, balanced against overfitting, and is commonly assessed through held-out validation and test performance. Techniques such as data augmentation and hyperparameter tuning are used specifically to improve generalisation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generalisation",
      "label": "Generalisation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:generalisation",
        "label": "Generalisation"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Model generalisation is the ability of a trained machine learning model to perform accurately on new, previously unseen data drawn from the same underlying distribution as its training set, rather than merely memorising the training examples.
  - It is a subclass of [[Generalisation]].
- ### Content
  - Model generalisation is the ability of a trained machine learning model to perform accurately on new, previously unseen data drawn from the same underlying distribution as its training set, rather than merely memorising the training examples. It is the central goal of the training process, balanced against overfitting, and is commonly assessed through held-out validation and test performance. Techniques such as data augmentation and hyperparameter tuning are used specifically to improve generalisation.

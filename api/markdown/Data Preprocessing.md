public:: true

# Data Preprocessing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-preprocessing",
  "@type": "Page",
  "vc:slug": "data-preprocessing",
  "title": "Data Preprocessing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-preprocessing",
  "@type": "Class",
  "label": "Data Preprocessing",
  "definition": "Data preprocessing is the stage of a machine learning workflow that transforms raw data into a clean, consistent form suitable for modelling. It encompasses cleaning, normalisation, encoding, imputation and feature engineering to remove noise and align scales and types. The quality of preprocessing strongly determines downstream model accuracy and is a prerequisite for reliable training.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:data-cleaning", "label": "Data Cleaning"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data preprocessing transforms raw data into a clean, model-ready form, encompassing [[Data Cleaning]] and [[Feature Engineering]] as constituent steps of the machine learning pipeline.
- ### Content
  - Typical operations include handling missing values, removing outliers, scaling numeric features, encoding categoricals and constructing informative derived features. Because models learn only from what they are given, disciplined preprocessing is often the highest-leverage step in improving performance.

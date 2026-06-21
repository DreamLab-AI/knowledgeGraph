public:: true

# Dataset

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dataset",
  "@type": "Page",
  "vc:slug": "dataset",
  "title": "Dataset",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dataset",
  "@type": "Class",
  "label": "Dataset",
  "definition": "A Dataset is a structured collection of data records sharing a common schema, gathered for a specific purpose such as training machine learning models, conducting research, or supporting analytics. Datasets are characterised by their size, modality (text, image, tabular, etc.), provenance, and licensing terms, all of which affect their fitness for use. Data quality, curation methodology, and bias documentation are critical attributes that determine the reliability of downstream AI systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:cat-ai-infrastructure", "label": "AI Infrastructure"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:computational-modelling", "label": "Computational Modelling"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - A structured, purpose-gathered collection of data records with a shared schema, characterised by modality, provenance, licensing, and quality attributes that determine its fitness for AI and analytical use.

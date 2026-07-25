public:: true

# Annotated Training Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:annotated-training-data",
  "@type": "Page",
  "vc:slug": "annotated-training-data",
  "title": "Annotated Training Data",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:annotated-training-data",
  "@type": "Class",
  "label": "Annotated Training Data",
  "definition": "Annotated Training Data is a dataset whose examples have been augmented with ground-truth labels, bounding boxes, segmentation masks, or other targets that supervised models learn to predict. The annotations are produced by humans, programmatic rules, or model-assisted labeling and define the task the model is trained to solve. Its quality, coverage, and label consistency are primary determinants of supervised-model performance.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cross-validation",
        "label": "Cross-Validation"
      },
      {
        "@id": "urn:ngm:class:segmentation-and-identification",
        "label": "Segmentation and Identification"
      }
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Annotated Training Data is labeled data that supplies the ground truth supervised learning requires. It is partitioned and reused during [[Cross-Validation]], and is a hard requirement for tasks such as [[Segmentation and Identification]].
- ### Content
  - Labels may be class tags, boxes, pixel masks, keypoints, or text spans, created by human annotators, weak supervision, or model-in-the-loop pipelines. Because models inherit the biases and errors of their labels, annotation guidelines, inter-annotator agreement, and quality control are as important as raw volume, and labeled data is often the scarcest and most expensive resource in a project.

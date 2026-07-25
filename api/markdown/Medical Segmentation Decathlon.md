public:: true

# Medical Segmentation Decathlon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:medical-segmentation-decathlon",
  "@type": "Page",
  "vc:slug": "medical-segmentation-decathlon",
  "title": "Medical Segmentation Decathlon",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:medical-segmentation-decathlon",
  "@type": "Class",
  "label": "Medical Segmentation Decathlon",
  "definition": "The Medical Segmentation Decathlon is a benchmark challenge providing ten diverse medical imaging datasets to evaluate the generalisability of automated segmentation algorithms. Spanning organs and modalities such as brain MRI, liver CT, and cardiac imaging, it tests whether a single method can perform well across heterogeneous anatomical tasks without per-task tuning. It is a widely cited reference for assessing biomedical image-segmentation models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:evaluation-metric",
      "label": "Evaluation Metric"
    },
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:segmentation-and-identification",
        "label": "Segmentation and Identification"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Medical Segmentation Decathlon is a ten-task benchmark for evaluating how well segmentation algorithms generalise across diverse medical imaging datasets. It standardises evaluation for [[Segmentation and Identification]] within [[Computer Vision]].
- ### Content
  - By bundling varied modalities and anatomies under a unified protocol, the challenge rewards methods that adapt without hand-tuning, catalysing self-configuring frameworks such as nnU-Net. It remains a touchstone for measuring robustness and transferability in biomedical segmentation research.

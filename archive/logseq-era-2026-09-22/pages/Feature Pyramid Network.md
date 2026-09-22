public:: true

# Feature Pyramid Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feature-pyramid-network",
  "@type": "Page",
  "vc:slug": "feature-pyramid-network",
  "title": "Feature Pyramid Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-pyramid-network",
  "@type": "Class",
  "label": "Feature Pyramid Network",
  "definition": "A Feature Pyramid Network (FPN) is a convolutional neural-network architecture that builds a multi-scale feature hierarchy with strong semantics at all levels by combining a bottom-up pathway with a top-down pathway and lateral connections. This design lets detectors and segmenters recognise objects across a wide range of sizes using features that are simultaneously high-resolution and semantically rich. FPN is a standard backbone component in modern object-detection and instance-segmentation pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:segmentation-and-identification", "label": "Segmentation and Identification"},
      {"@id": "urn:ngm:class:image-segmentation", "label": "Image Segmentation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Feature Pyramid Network is a multi-scale [[Neural Network]] feature extractor that fuses coarse, semantically strong features with fine, high-resolution ones, enabling robust [[Segmentation and Identification]] and [[Image Segmentation]] across object scales. It does this via top-down and lateral connections.
- ### Content
  - FPN augments a standard CNN backbone with a top-down pathway that upsamples deep semantic features and merges them through lateral connections with shallower, spatially precise features, producing a pyramid of prediction-ready maps. This markedly improves small-object detection and segmentation while adding modest computational cost, which is why FPN underpins detectors such as RetinaNet and Mask R-CNN.

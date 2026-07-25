public:: true

# Anchor-Based Detection

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:anchor-based-detection",
  "@type": "Page",
  "title": "Anchor-Based Detection",
  "vc:slug": "anchor-based-detection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anchor-based-detection",
  "@type": "Class",
  "label": "Anchor-Based Detection",
  "definition": "Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improves recall for objects of varying size. Faster R-CNN, SSD and the early YOLO versions are canonical anchor-based detectors, later contrasted with anchor-free alternatives.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:object-detection",
      "label": "Object Detection"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improves recall for objects of varying size. Faster R-CNN, SSD and the early YOLO versions are canonical anchor-based detectors, later contrasted with anchor-free alternatives.
	- It is a [[Object Detection]] concept.
- ### Relationships
	- subClassOf:: [[Object Detection]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation

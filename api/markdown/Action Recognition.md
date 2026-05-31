public:: true

# Action Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:action-recognition",
  "@type": "Page",
  "vc:slug": "action-recognition",
  "title": "Action Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:action-recognition",
  "@type": "Class",
  "label": "Action Recognition",
  "definition": "Action Recognition is a computer-vision task that classifies the activity being performed by one or more agents from video or motion-sequence data. Models ingest spatiotemporal features, often built on detected body keypoints or 3D convolutions and transformers, to label actions such as walking, waving, or falling. It underpins applications in surveillance, sports analytics, human-robot interaction, and assistive monitoring.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Action Recognition classifies human or agent activity from video and motion sequences. It is closely coupled with [[Pose Estimation]], whose skeletal keypoints frequently serve as the input features that make recognition more robust to appearance variation.
- ### Content
  - Architectures range from two-stream and 3D CNNs to skeleton-based graph networks and video transformers that model temporal dynamics. Performance depends on labeled motion datasets and on disambiguating visually similar actions, and the task feeds downstream systems for behaviour analysis, safety monitoring, and interactive applications.

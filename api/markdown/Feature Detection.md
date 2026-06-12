public:: true

# Feature Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:feature-detection",
  "@type": "Page",
  "vc:slug": "feature-detection",
  "title": "Feature Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-detection",
  "@type": "Class",
  "label": "Feature Detection",
  "definition": "Feature detection is the programmatic technique of querying a runtime environment to determine whether a specific capability, API, or behaviour is available before invoking it, rather than inferring support from user-agent strings or version numbers. In computer vision, it also denotes the algorithmic identification of salient points, edges, or regions within images that carry discriminative information for downstream tasks.",
  "domain": "web",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:runtime-inspection", "label": "Runtime Inspection"}],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}, {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}],
    "uses": [{"@id": "urn:ngm:class:runtime-environment", "label": "Runtime Environment"}],
    "relatedTo": [{"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}, {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}],
    "supports": [{"@id": "urn:ngm:class:computer-vision-system", "label": "Computer Vision System"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Feature Detection]] encompasses two distinct but related practices. In web and software development it means testing at runtime whether a given API or browser capability exists before using it, enabling graceful degradation and progressive enhancement. In [[Computer Vision]] and [[Machine Learning Discipline]] it refers to algorithms that identify distinctive structures — corners, blobs, edges, or learned embeddings — within raw sensor data, forming the foundation for [[Object Detection]] and recognition pipelines.

- ### Relationships
  - Web-oriented feature detection relies on querying the [[Runtime Environment]] directly, producing boolean results that guide conditional code paths. Computer-vision feature detection feeds into [[Computer Vision System]]s and downstream [[Object Detection]] pipelines. Both interpretations inform [[Machine Learning Discipline]] workflows: web detection guides capability-aware model serving, whilst visual detection provides the salient regions on which [[Neural Network]]s are trained and evaluated.

- ### Content
  - The web development meaning of feature detection was popularised by the Modernizr library (circa 2009), which replaced brittle browser-sniffing patterns with direct API existence checks. The technique aligns with the principle of progressive enhancement: serve a baseline experience to all, then augment for capable environments. Standardised approaches such as CSS `@supports` and JavaScript `typeof` checks formalised the pattern.

  - In computer vision, feature detection has deep roots in signal processing. Algorithms such as Harris corner detection (1988), SIFT (2004), and ORB (2011) identify keypoints robust to scale, rotation, and illumination changes. Deep convolutional networks later replaced hand-crafted detectors with learned representations, integrating detection and description into unified architectures such as SuperPoint.

  - Across both domains, feature detection underpins interoperability and robustness. WebXR device capability detection, for instance, uses feature detection to decide whether to present immersive or flat UI, whilst visual feature matching drives augmented-reality tracking and simultaneous localisation and mapping. Libraries like Modernizr (web) and OpenCV (vision) package detection utilities for broad adoption.

  - In 2024–2025, the convergence of neural feature extractors with edge deployment has intensified interest in lightweight detectors suitable for mobile and embedded hardware. On the web side, the Baseline project from the Web DX Community Group formalises browser feature availability across engines, reducing dependence on bespoke detection scripts and moving the ecosystem toward declarative capability querying.


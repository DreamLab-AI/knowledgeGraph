public:: true

# Facial Action Coding System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:facial-action-coding-system",
  "@type": "Page",
  "vc:slug": "facial-action-coding-system",
  "title": "Facial Action Coding System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:facial-action-coding-system",
  "@type": "Class",
  "label": "Facial Action Coding System",
  "definition": "The Facial Action Coding System (FACS) is a comprehensive taxonomy for describing visible facial movements by decomposing expressions into discrete Action Units, each corresponding to the activation of one or more facial muscles. Developed by Ekman and Friesen, it provides an objective, anatomically grounded vocabulary that maps muscle activity to coded units independent of emotional interpretation. FACS is widely used in affective computing, animation, and behavioural research to detect and synthesise facial expressions.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:empathetic-ai", "label": "Empathetic AI"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Facial Action Coding System is an anatomically based scheme that encodes facial expression as combinations of Action Units, providing the measurement foundation for expression recognition in [[Empathetic AI]] and related [[Computer Vision]] systems. It separates objective muscle movement from subjective emotional labels.
- ### Content
  - FACS catalogues dozens of Action Units (e.g. inner-brow raiser, lip-corner puller) and their intensities, enabling reproducible coding of expressions by trained annotators or automated detectors. In machine learning it supplies labels and structure for emotion-recognition models, avatar facial rigging, and clinical assessment, though automated FACS coding must contend with occlusion, head pose, and individual anatomical variation.

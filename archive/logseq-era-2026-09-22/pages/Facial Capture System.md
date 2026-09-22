public:: true

# Facial Capture System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:facial-capture-system",
  "@type": "Page",
  "vc:slug": "facial-capture-system",
  "title": "Facial Capture System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:facial-capture-system",
  "@type": "Class",
  "label": "Facial Capture System",
  "definition": "A facial capture system is hardware and software that records the detailed movements of a performer's face and transfers them onto a digital character or model. Such systems use head-mounted cameras, structured light, marker-based tracking, or markerless computer-vision pipelines to reconstruct expressions, lip movement, and micro-deformations in real time or in post-production. They are central to high-fidelity digital characters in film, games, and virtual production.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:digital-performance-capture", "label": "Digital Performance Capture"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A facial capture system records a performer's facial expressions and retargets them to a digital model, forming the facial component of broader [[Motion Capture]] and [[Digital Performance Capture]] workflows. It produces high-fidelity expression data as part of digital content and asset pipelines.
- ### Content
  - Implementations range from marker-based head-mounted rigs to markerless deep-learning solvers that infer blendshape weights from monocular video. Output is typically expressed as animation curves or blendshape coefficients driving a rigged character, with quality depending on calibration, lighting, and the fidelity of the target facial rig.

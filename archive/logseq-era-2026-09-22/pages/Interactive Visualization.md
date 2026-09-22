public:: true

# Interactive Visualization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:interactive-visualization",
  "@type": "Page",
  "vc:slug": "interactive-visualization",
  "title": "Interactive Visualization",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interactive-visualization",
  "@type": "Class",
  "label": "Interactive Visualization",
  "definition": "Interactive visualization is the graphical presentation of data or models that users can manipulate in real time through navigation, filtering, selection, and parameter adjustment to explore and understand information. It couples rendering with responsive input handling so that views update immediately as the user probes the underlying data or 3D scene. It supports analysis, design review, and decision-making across scientific, engineering, and immersive contexts.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-graphics", "label": "Computer Graphics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:3-d-model", "label": "3D Model"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Interactive visualization presents data and scenes that users can manipulate live to explore and understand them. It draws on the [[3D Model]] as a subject and on [[Real-Time Rendering]] for responsiveness.
- ### Content
  - Effective interactive visualization balances rendering throughput with low-latency input handling, using techniques such as level-of-detail, GPU acceleration, and progressive refinement. Applications span scientific data exploration, BIM and CAD review, dashboards, and immersive analytics.

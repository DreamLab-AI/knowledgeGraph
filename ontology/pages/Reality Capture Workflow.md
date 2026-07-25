public:: true

# Reality Capture Workflow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reality-capture-workflow",
  "@type": "Page",
  "vc:slug": "reality-capture-workflow",
  "title": "Reality Capture Workflow",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reality-capture-workflow",
  "@type": "Class",
  "label": "Reality Capture Workflow",
  "definition": "A reality capture workflow is the end-to-end pipeline that converts real-world objects, people, or environments into digital 3D assets through sensing, alignment, reconstruction, and optimisation stages. It typically chains scanning techniques such as photogrammetry, LiDAR, or volumetric capture with mesh generation, texturing, and retopology steps. The workflow matters because asset fidelity and downstream usability depend on disciplined sequencing of capture, processing, and cleanup.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:digital-performance-capture", "label": "Digital Performance Capture"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A reality capture workflow is the staged pipeline that turns physical subjects into digital 3D assets, combining [[Photogrammetry]] and [[Digital Performance Capture]] with reconstruction and cleanup steps.
- ### Content
  - The workflow generally moves from data acquisition (multi-view imagery, depth scans, motion data) through registration and dense reconstruction to mesh decimation, UV unwrapping, and texture baking. Quality control at each stage determines whether the resulting asset is suitable for real-time rendering, simulation, or archival use.

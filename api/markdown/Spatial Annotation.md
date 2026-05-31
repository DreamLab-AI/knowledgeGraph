public:: true

# Spatial Annotation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:spatial-annotation",
  "@type": "Page",
  "vc:slug": "spatial-annotation",
  "title": "Spatial Annotation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spatial-annotation",
  "@type": "Class",
  "label": "Spatial Annotation",
  "definition": "Spatial annotation is the placement of digital notes, labels, or markers anchored to specific positions in a three-dimensional physical or virtual space, so that the content persists relative to real-world geometry as the viewer moves. It relies on spatial mapping and pose tracking to keep annotations registered to surfaces or objects. It is a foundational interaction for augmented reality collaboration, maintenance guidance, and shared spatial computing.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Supply-Chain Interaction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-content-overlay", "label": "Digital Content Overlay"},
      {"@id": "urn:ngm:class:ar-overlay", "label": "AR Overlay"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Spatial annotation is the anchoring of digital notes or markers to precise locations in a 3D physical or virtual scene so they stay registered to real geometry as the viewer moves, a core mechanism behind [[Digital Content Overlay]].
- ### Content
  - It depends on spatial mapping and continuous pose tracking to keep each annotation fixed to its target surface or object across sessions and viewpoints. The capability enables an [[AR Overlay]] to support persistent collaborative markup, remote-assist guidance, and shared spatial computing where multiple users see the same anchored content in situ.

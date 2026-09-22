public:: true

# Light Field Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-light-field-display",
  "@type": "Page",
  "vc:slug": "light-field-display",
  "title": "Light Field Display",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:light-field-display",
  "@type": "Class",
  "label": "Light Field Display",
  "definition": "A Light Field Display is an output device that reproduces the full four-dimensional light field of a scene, emitting rays of light in directions that recreate the optical properties of real objects without requiring the viewer to wear special glasses. Unlike conventional stereoscopic displays, light field displays support motion parallax, correct focus cues, and multiple simultaneous viewer perspectives. They are a key enabling technology for glasses-free holographic telepresence and high-fidelity volumetric visualisation in collaborative settings.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:holographic-telepresence", "label": "Holographic Telepresence"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:volumetric-video", "label": "Volumetric Video"},
      {"@id": "urn:ngm:class:photorealistic-telepresence", "label": "Photorealistic Telepresence"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - An output device that reproduces the full four-dimensional light field of a scene to deliver glasses-free, multi-viewer holographic imagery with correct depth and parallax cues.

public:: true

# Mixed Reality Meeting
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-mixed-reality-meeting",
  "@type": "Page",
  "vc:slug": "mixed-reality-meeting",
  "title": "Mixed Reality Meeting",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mixed-reality-meeting",
  "@type": "Class",
  "label": "Mixed Reality Meeting",
  "definition": "A Mixed Reality Meeting is a collaborative session in which remote and local participants interact within an environment that blends physical and virtual elements through mixed reality headsets or displays. Remote attendees may appear as holograms or avatars anchored in the local physical space, while shared digital artefacts are overlaid onto the real world for all participants. This format dissolves the boundary between in-room and remote presence, enabling richer spatial and contextual collaboration than traditional video conferencing.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:immersive-collaboration", "label": "Immersive Collaboration"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:holographic-telepresence", "label": "Holographic Telepresence"},
      {"@id": "urn:ngm:class:shared-virtual-space", "label": "Shared Virtual Space"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A collaborative session blending physical and virtual elements through mixed reality technology, allowing remote participants to appear as holograms or avatars co-located in the local environment.

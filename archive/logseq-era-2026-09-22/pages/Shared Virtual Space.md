public:: true

# Shared Virtual Space
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-shared-virtual-space",
  "@type": "Page",
  "vc:slug": "shared-virtual-space",
  "title": "Shared Virtual Space",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shared-virtual-space",
  "@type": "Class",
  "label": "Shared Virtual Space",
  "definition": "A Shared Virtual Space is a persistent, synchronised three-dimensional environment that multiple remote participants inhabit simultaneously through their avatars or representations. It provides a common spatial context for collaboration, enabling participants to co-locate, manipulate shared artefacts, and engage in spatial communication as if physically together. Such spaces underpin immersive remote collaboration by combining real-time synchronisation, access control, and spatial audio to create a convincing sense of co-presence.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:immersive-collaboration", "label": "Immersive Collaboration"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:avatar-embodiment", "label": "Avatar Embodiment"},
      {"@id": "urn:ngm:class:virtual-reality-telepresence", "label": "Virtual Reality Telepresence"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A persistent, synchronised three-dimensional environment inhabited simultaneously by multiple remote participants, providing a common spatial context for immersive co-located collaboration.

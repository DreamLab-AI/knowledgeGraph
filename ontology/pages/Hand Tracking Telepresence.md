public:: true

# Hand Tracking Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-hand-tracking-telepresence",
  "@type": "Page",
  "vc:slug": "hand-tracking-telepresence",
  "title": "Hand Tracking Telepresence",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hand-tracking-telepresence",
  "@type": "Class",
  "label": "Hand Tracking Telepresence",
  "definition": "Hand Tracking Telepresence is the real-time capture, transmission, and rendering of hand pose and gesture data from a remote participant into a local or shared virtual environment. It enables natural gestural communication — such as pointing, waving, or manipulating shared objects — between geographically distributed collaborators. By preserving expressive hand movements, this technology significantly enriches the non-verbal communication channel in remote collaboration systems.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:immersive-collaboration", "label": "Immersive Collaboration"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:avatar-embodiment", "label": "Avatar Embodiment"},
      {"@id": "urn:ngm:class:shared-virtual-space", "label": "Shared Virtual Space"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - The real-time capture and transmission of hand pose and gesture data from remote participants, enabling natural gestural communication in distributed collaboration environments.

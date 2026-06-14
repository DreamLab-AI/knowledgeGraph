public:: true

# Virtual Background
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-virtual-background",
  "@type": "Page",
  "vc:slug": "virtual-background",
  "title": "Virtual Background",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:virtual-background",
  "@type": "Class",
  "label": "Virtual Background",
  "definition": "A Virtual Background is a real-time image or video composited behind a video-call participant using chroma-key or AI-based background segmentation, replacing the physical environment visible to the camera. It allows remote workers to project a professional or branded appearance regardless of their physical location, protecting privacy and maintaining visual consistency across distributed teams. Virtual backgrounds are natively supported in Zoom, Microsoft Teams, and Google Meet.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:privacy-management", "label": "Privacy Management"},
      {"@id": "urn:ngm:class:professional-presence", "label": "Professional Presence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zoom-meetings", "label": "Zoom Meetings"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A composited image or video replacing the real camera background in video calls, enabling privacy and visual consistency for remote participants.

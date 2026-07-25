public:: true

# Eye Contact Correction
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-eye-contact-correction",
  "@type": "Page",
  "vc:slug": "eye-contact-correction",
  "title": "Eye Contact Correction",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eye-contact-correction",
  "@type": "Class",
  "label": "Eye Contact Correction",
  "definition": "Eye Contact Correction is a computational technique that synthetically redirects a participant's gaze in a video stream so that they appear to be looking directly into the camera even when their eyes are focused on a screen display. It uses machine learning models to detect and synthesise eye and facial regions, overcoming the geometric offset between camera and display positions. This technology is critical for preserving natural eye contact as a social signal in remote video communication.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:social-presence", "label": "Social Presence"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:gaze-awareness", "label": "Gaze Awareness"},
      {"@id": "urn:ngm:class:photorealistic-telepresence", "label": "Photorealistic Telepresence"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A computational technique that synthetically redirects gaze in video streams so remote participants appear to maintain direct eye contact regardless of display-camera geometry.

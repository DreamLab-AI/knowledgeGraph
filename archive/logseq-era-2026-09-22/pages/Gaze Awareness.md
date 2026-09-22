public:: true

# Gaze Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-gaze-awareness",
  "@type": "Page",
  "vc:slug": "gaze-awareness",
  "title": "Gaze Awareness",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaze-awareness",
  "@type": "Class",
  "label": "Gaze Awareness",
  "definition": "Gaze Awareness is the capability of a collaborative system to detect, track, and communicate where participants are directing their visual attention during a shared session. It enables collaborators to perceive mutual attention states — such as who is looking at whom, or what shared artefact is being observed — without explicit verbal indication. Gaze awareness is a foundational non-verbal cue that supports turn-taking, joint attention, and coordinated action in distributed teams.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:social-presence", "label": "Social Presence"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:eye-contact-correction", "label": "Eye Contact Correction"},
      {"@id": "urn:ngm:class:immersive-collaboration", "label": "Immersive Collaboration"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - The capability of a collaborative system to detect and communicate participants' visual attention direction, enabling joint attention and non-verbal coordination in distributed settings.

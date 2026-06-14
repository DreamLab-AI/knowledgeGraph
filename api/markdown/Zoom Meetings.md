public:: true

# Zoom Meetings
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-zoom-meetings",
  "@type": "Page",
  "vc:slug": "zoom-meetings",
  "title": "Zoom Meetings",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zoom-meetings",
  "@type": "Class",
  "label": "Zoom Meetings",
  "definition": "Zoom Meetings is a cloud-based video conferencing platform that enables synchronous audio, video, and screen-sharing sessions for distributed teams. It supports features such as breakout rooms, meeting recording, polling, and waiting-room controls, making it suitable for everything from one-on-ones to large-scale webinars. Its widespread adoption has made it a de-facto standard term for video calls in remote-work contexts.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:virtual-meeting", "label": "Virtual Meeting"},
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-background", "label": "Virtual Background"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A cloud video conferencing platform providing synchronous audio-video sessions, screen sharing, and breakout rooms for distributed teams.

public:: true

# Screen Capture API
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:screen-capture-api",
  "@type": "Page",
  "vc:slug": "screen-capture-api",
  "title": "Screen Capture API",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:screen-capture-api",
  "@type": "Class",
  "label": "Screen Capture API",
  "definition": "The Screen Capture API is a W3C web platform interface, centred on getDisplayMedia, that lets web applications obtain a live media stream of a user-selected screen, window, or browser tab. It exposes the captured display as a MediaStream usable for recording, sharing, or processing, gated by an explicit user-selection prompt. It is the standard browser foundation for screen sharing and recording features.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"},
      {"@id": "urn:ngm:class:screen-recording", "label": "Screen Recording"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Screen Capture API is the standardised browser interface used by [[Screen Sharing]] and [[Screen Recording]] to obtain a display media stream after user consent.
- ### Content
  - Through getDisplayMedia, applications request a MediaStream and the browser presents a chooser for the surface to capture. The resulting tracks can be piped into WebRTC for sharing or the MediaRecorder API for recording, with constraints controlling frame rate, resolution, and whether the cursor or system audio is included.

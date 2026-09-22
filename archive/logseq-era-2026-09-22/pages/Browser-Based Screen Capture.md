public:: true

# Browser-Based Screen Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:browser-based-screen-capture",
  "@type": "Page",
  "vc:slug": "browser-based-screen-capture",
  "title": "Browser-Based Screen Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:browser-based-screen-capture",
  "@type": "Class",
  "label": "Browser-Based Screen Capture",
  "definition": "Browser-based screen capture is the in-browser acquisition of screen, window, or tab video using web APIs such as the Screen Capture API (getDisplayMedia), without installing native software. The captured MediaStream can be recorded locally, encoded, or streamed in real time over WebRTC, making it the foundation for web conferencing, asynchronous video messaging, and screen recording tools. It runs under explicit user permission and within the browser's security sandbox.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:asynchronous-video", "label": "Asynchronous Video"},
      {"@id": "urn:ngm:class:screen-recording", "label": "Screen Recording"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Browser-based screen capture acquires screen video directly in the browser via the Screen Capture API, enabling [[Asynchronous Video]] messaging and web-native [[Screen Recording]].
- ### Content
  - The getDisplayMedia API returns a permissioned MediaStream of a chosen screen, window, or tab, which the MediaRecorder API can save or WebRTC can transmit live. Operating inside the browser sandbox, it removes the need for native clients while constraining capture to user-granted sources.

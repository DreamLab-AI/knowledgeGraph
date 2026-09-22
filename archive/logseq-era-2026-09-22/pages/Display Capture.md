public:: true

# Display Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:display-capture",
  "@type": "Page",
  "vc:slug": "display-capture",
  "title": "Display Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:display-capture",
  "@type": "Class",
  "label": "Display Capture",
  "definition": "Display capture is the acquisition of the live pixel contents of a screen, window, or application surface as a video stream for recording or transmission. On the web it is exposed through the Screen Capture API's getDisplayMedia method, which prompts the user to choose a surface and returns a media stream subject to permission. It is the foundational capability behind screen recording and real-time screen sharing.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:screen-recording", "label": "Screen Recording"},
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Display capture grabs the contents of a screen or window as a video stream, typically via getDisplayMedia with explicit user consent. It is the underlying capability for [[Screen Recording]] and a constituent part of [[Screen Sharing]].
- ### Content
  - The captured MediaStream can be saved locally (recording) or sent over WebRTC (sharing), with the OS and browser enforcing per-surface permission and privacy indicators. Implementations must handle frame-rate and resolution constraints, audio capture options, and the security risk of exposing sensitive on-screen content.

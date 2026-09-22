public:: true

# Live Captions
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-live-captions",
  "@type": "Page",
  "vc:slug": "live-captions",
  "title": "Live Captions",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:live-captions",
  "@type": "Class",
  "label": "Live Captions",
  "definition": "Live captions are automatically generated, real-time text transcriptions of spoken audio displayed synchronously during a video call or webinar. They enhance accessibility for participants with hearing impairments and support comprehension across language barriers and noisy environments. Powered by automatic speech recognition, they may be supplemented by human stenographers for high-accuracy requirements.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:webinar-broadcast", "label": "Webinar Broadcast"},
      {"@id": "urn:ngm:class:noise-suppression", "label": "Noise Suppression"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Automatically generated real-time text transcriptions of spoken audio displayed during video calls, improving accessibility and comprehension for distributed meeting participants.

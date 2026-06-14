public:: true

# Noise Suppression
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-noise-suppression",
  "@type": "Page",
  "vc:slug": "noise-suppression",
  "title": "Noise Suppression",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:noise-suppression",
  "@type": "Class",
  "label": "Noise Suppression",
  "definition": "Noise suppression is a signal-processing technique that filters ambient, background, and non-speech sounds from audio streams in real time during virtual communication sessions. Modern implementations use deep-learning models to distinguish voice from environmental noise such as keyboard clicks, fan hum, and room echo. It is a foundational audio quality feature for distributed teams working from heterogeneous home or office environments.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:audio-quality", "label": "Audio Quality"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:live-captions", "label": "Live Captions"},
      {"@id": "urn:ngm:class:webinar-broadcast", "label": "Webinar Broadcast"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A real-time signal-processing technique that removes background and ambient sounds from audio streams during virtual meetings, ensuring clear voice communication for distributed participants.

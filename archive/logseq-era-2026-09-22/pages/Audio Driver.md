public:: true

# Audio Driver
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:audio-driver",
  "@type": "Page",
  "title": "Audio Driver",
  "vc:slug": "audio-driver",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audio-driver",
  "@type": "Class",
  "label": "Audio Driver",
  "definition": "An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands. It manages buffering, sample-rate conversion, latency and device enumeration, and is a prerequisite for any higher-level audio pipeline to reach speakers, headphones or microphones. In spatial and immersive computing, driver latency and buffer size directly affect the achievable audio-visual synchronisation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audio-system",
      "label": "Audio System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands.
  - It is a subclass of [[Audio System]].
- ### Content
  - An audio driver is the low-level software component that mediates between an operating system's audio subsystem and physical sound hardware, translating generic playback and capture requests into device-specific commands. It manages buffering, sample-rate conversion, latency and device enumeration, and is a prerequisite for any higher-level audio pipeline to reach speakers, headphones or microphones. In spatial and immersive computing, driver latency and buffer size directly affect the achievable audio-visual synchronisation.

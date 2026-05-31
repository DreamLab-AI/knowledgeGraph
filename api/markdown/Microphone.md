public:: true

# Microphone
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:microphone",
  "@type": "Page",
  "vc:slug": "microphone",
  "title": "Microphone",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:microphone",
  "@type": "Class",
  "label": "Microphone",
  "definition": "A microphone is a transducer that converts acoustic sound waves into an electrical signal, serving as the primary audio sensor in interactive and telepresence systems. Common types include electret, MEMS, condenser, and dynamic, characterised by polar pattern, sensitivity, and signal-to-noise ratio. In robots and voice interfaces, microphone arrays additionally enable beamforming and source localisation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:tc-0003-telepresence-robot", "label": "Telepresence Robot"},
      {"@id": "urn:ngm:class:voice-interaction", "label": "Voice Interaction"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A microphone is a transducer converting sound into an electrical signal. It is a hardware part of a [[Telepresence Robot]] and a requirement for [[Voice Interaction]].
- ### Content
  - MEMS microphones dominate embedded and mobile applications due to their small size and digital output. Multi-element arrays support beamforming, far-field pickup, and acoustic echo cancellation, which are essential for hands-free voice control and clear two-way telepresence audio.

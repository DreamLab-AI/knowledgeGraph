public:: true

# Microphone Array

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:microphone-array", "@type": "Page", "title": "Microphone Array", "vc:slug": "microphone-array", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:microphone-array",
  "@type": "Class",
  "label": "Microphone Array",
  "definition": "A microphone array is an arrangement of multiple microphone elements at known spatial positions whose signals are combined to infer or shape the directional properties of captured sound. By exploiting the time and phase differences between elements, an array supports beamforming, source localisation and spatial noise suppression that a single microphone cannot achieve. Microphone arrays underpin far-field voice capture, conferencing systems and spatial-audio acquisition.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audio-system",
      "label": "Audio System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:microphone",
        "label": "Microphone"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signal-processor",
        "label": "Digital Signal Processor"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
      },
      {
        "@id": "urn:ngm:class:ambisonics",
        "label": "Ambisonics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:binaural-audio",
        "label": "Binaural Audio"
      },
      {
        "@id": "urn:ngm:class:head-related-transfer-function",
        "label": "Head Related Transfer Function"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A microphone array is an arrangement of multiple microphone elements at known spatial positions whose signals are combined to infer or shape the directional properties of captured sound. By exploiting the time and phase differences between elements, an array supports beamforming, source localisation and spatial noise suppression that a single microphone cannot achieve. Microphone arrays underpin far-field voice capture, conferencing systems and spatial-audio acquisition.
  - [[Audio System]] [[Microphone]] [[Spatial Audio]] [[Digital Signal Processor]]
- ### Overview
  - A microphone array places two or more transducers at precisely known geometry so that the differences in arrival time and phase across elements encode the direction of incoming sound. Digital signal processing then combines the channels: delay-and-sum or adaptive beamforming steers a sensitivity lobe toward a desired source while attenuating others, and the same spatial information enables source localisation and reverberation control. Linear, circular and spherical geometries trade resolution against form factor. Arrays are central to far-field voice interfaces, conferencing endpoints and the capture stage of spatial and ambisonic audio.
- ### Mechanisms
  - Known element geometry encodes direction via inter-channel time and phase differences.
  - Beamforming steers a sensitivity lobe toward a target source.
  - Adaptive filtering suppresses interference and reverberation.
  - Source localisation estimates the angle and position of a talker.
  - Requires synchronised capture and a digital signal processor for real-time operation.
- ### Applications
  - Far-field voice assistants and smart speakers.
  - Conferencing endpoints with talker tracking.
  - Hearing aids and assistive listening devices.
  - Spatial-audio and ambisonic field recording.
- ### Relationships
  - subClassOf:: [[Audio System]]
  - partOf:: [[Audio System]]
  - hasPart:: [[Microphone]]
  - hasPart:: [[Sensor]]
  - requires:: [[Digital Signal Processor]]
  - requires:: [[Signal Processing]]
  - uses:: [[Digital Signal Processing]]
  - uses:: [[Sensor Fusion]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Spatial Audio]]
  - supports:: [[Immersive Audio]]
  - supports:: [[Ambisonics]]
  - relatedTo:: [[Binaural Audio]]
  - relatedTo:: [[Head Related Transfer Function]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

public:: true

# Head Related Transfer Function

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:head-related-transfer-function", "@type": "Page", "title": "Head Related Transfer Function", "vc:slug": "head-related-transfer-function", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:head-related-transfer-function",
  "@type": "Class",
  "label": "Head Related Transfer Function",
  "definition": "A head-related transfer function (HRTF) describes how sound from a point in space is filtered by the listener's head, torso and outer ears before reaching each eardrum. It captures the frequency-dependent level, time and spectral cues that the auditory system uses to localise sound. Convolving a mono source with the appropriate left and right HRTFs synthesises a convincing three-dimensional position over headphones, making the HRTF the mathematical core of binaural and spatial audio rendering.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-audio",
      "label": "Spatial Audio"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:binaural-audio",
        "label": "Binaural Audio"
      },
      {
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signal-processor",
        "label": "Digital Signal Processor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:ambisonics",
        "label": "Ambisonics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      },
      {
        "@id": "urn:ngm:class:microphone-array",
        "label": "Microphone Array"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
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
  - A head-related transfer function (HRTF) describes how sound from a point in space is filtered by the listener's head, torso and outer ears before reaching each eardrum. It captures the frequency-dependent level, time and spectral cues that the auditory system uses to localise sound. Convolving a mono source with the appropriate left and right HRTFs synthesises a convincing three-dimensional position over headphones, making the HRTF the mathematical core of binaural and spatial audio rendering.
  - [[Spatial Audio]] [[Binaural Audio]] [[Digital Signal Processing]] [[Immersive Audio]]
- ### Overview
  - The head-related transfer function is the frequency-domain expression of how an individual's anatomy colours sound arriving from a given direction; its time-domain counterpart is the head-related impulse response. Differences between the left and right HRTFs supply interaural time and level cues, while peaks and notches imposed by the pinna give elevation and front-back cues. Rendering spatial audio over headphones convolves each source with the HRTF pair for its intended direction, optionally updated by head tracking. HRTFs may be measured individually in an anechoic chamber, drawn from generic datasets, or personalised from anthropometry, with personalisation improving localisation accuracy and externalisation.
- ### Mechanisms
  - Encodes interaural time and level differences for azimuth perception.
  - Pinna-induced spectral notches provide elevation and front-back cues.
  - Applied by convolving a source with direction-specific left and right filters.
  - Measured individually, generic, or personalised from anthropometry.
  - Combined with head tracking for stable, dynamic spatialisation.
- ### Applications
  - Binaural rendering for virtual and augmented reality.
  - Spatial audio in games and immersive media.
  - Headphone-based teleconferencing with positioned talkers.
  - Auditory display and accessibility tools.
- ### Relationships
  - subClassOf:: [[Spatial Audio]]
  - partOf:: [[Spatial Audio]]
  - enables:: [[Binaural Audio]]
  - enables:: [[Immersive Audio]]
  - uses:: [[Digital Signal Processing]]
  - uses:: [[Signal Processing]]
  - requires:: [[Digital Signal Processor]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Ambisonics]]
  - relatedTo:: [[Audio System]]
  - relatedTo:: [[Microphone Array]]
  - implements:: [[Spatial Audio]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

public:: true

# Binaural Audio

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:binaural-audio", "@type": "Page", "title": "Binaural Audio", "vc:slug": "binaural-audio", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:binaural-audio",
  "@type": "Class",
  "label": "Binaural Audio",
  "definition": "Binaural audio is two-channel sound designed to reproduce the directional and spatial cues a listener would experience naturally, delivering an immersive three-dimensional image over headphones. It can be captured with a dummy head or in-ear microphones, or synthesised by convolving sources with head-related transfer functions. By preserving interaural time and level differences and pinna spectral cues, binaural audio conveys not just left-right panning but full surrounding placement including elevation.",
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
    "hasPart": [
      {
        "@id": "urn:ngm:class:head-related-transfer-function",
        "label": "Head Related Transfer Function"
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
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ambisonics",
        "label": "Ambisonics"
      },
      {
        "@id": "urn:ngm:class:microphone-array",
        "label": "Microphone Array"
      },
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      },
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
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
  - Binaural audio is two-channel sound designed to reproduce the directional and spatial cues a listener would experience naturally, delivering an immersive three-dimensional image over headphones. It can be captured with a dummy head or in-ear microphones, or synthesised by convolving sources with head-related transfer functions. By preserving interaural time and level differences and pinna spectral cues, binaural audio conveys not just left-right panning but full surrounding placement including elevation.
  - [[Spatial Audio]] [[Head Related Transfer Function]] [[Immersive Audio]] [[Virtual Reality]]
- ### Overview
  - Binaural audio aims to recreate the exact pressure signals that would reach a listener's two eardrums from a real sound scene, so that ordinary headphones produce a convincing externalised, three-dimensional image. Two production routes exist: direct capture with a dummy-head or in-ear microphones that physically embed the listener's acoustic cues, and synthesis that convolves dry sources with head-related transfer functions for the desired directions. Either way the recording preserves interaural time and level differences plus the spectral shaping of the pinna. With head tracking the scene can be rotated to remain world-stable, which is essential for virtual and augmented reality where audio must agree with the visual viewpoint.
- ### Key aspects
  - Two-channel signal carrying full interaural and spectral localisation cues.
  - Captured with dummy-head microphones or synthesised via HRTFs.
  - Delivers externalised, headphone-based three-dimensional imaging.
  - Combined with head tracking for world-locked immersive scenes.
  - Distinct from loudspeaker surround such as ambisonics in its delivery model.
- ### Applications
  - Immersive audio for virtual and augmented reality.
  - Spatial podcasts, ASMR and narrative media.
  - Gaming positional audio over headphones.
  - Telepresence and remote collaboration with placed voices.
- ### Relationships
  - subClassOf:: [[Spatial Audio]]
  - partOf:: [[Spatial Audio]]
  - hasPart:: [[Head Related Transfer Function]]
  - uses:: [[Digital Signal Processing]]
  - uses:: [[Signal Processing]]
  - requires:: [[Digital Signal Processor]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Immersive Audio]]
  - relatedTo:: [[Ambisonics]]
  - relatedTo:: [[Microphone Array]]
  - relatedTo:: [[Audio System]]
  - relatedTo:: [[Audio Codec]]
  - implements:: [[Spatial Audio]]
  - enables:: [[Immersive Audio]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15

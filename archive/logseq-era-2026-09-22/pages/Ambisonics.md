public:: true

# Ambisonics

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ambisonics",
  "@type": "Page",
  "title": "Ambisonics",
  "vc:slug": "ambisonics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ambisonics",
  "@type": "Class",
  "label": "Ambisonics",
  "definition": "Ambisonics is a full-sphere surround sound technique that represents a sound field independently of any specific loudspeaker layout by encoding it into spherical harmonic components. A captured or synthesised scene is stored as B-format channels and later decoded to an arbitrary speaker array or to binaural headphones, allowing the same recording to be rendered for many playback configurations. It is widely used for immersive and head-tracked audio in virtual and augmented reality.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-audio",
      "label": "Spatial Audio"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:spherical-harmonics",
        "label": "Spherical Harmonics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
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
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:audio-spatialization",
        "label": "Audio Spatialization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      },
      {
        "@id": "urn:ngm:class:psychoacoustics",
        "label": "Psychoacoustics"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- Ambisonics encodes a complete sound field into [[Spherical Harmonics]] components, decoupling the recording from any loudspeaker layout and enabling decoding to arbitrary arrays or headphones, built on [[Signal Processing]].
- It is a core technique for [[Spatial Audio]] and [[Immersive Audio]].
- ### Overview
- Rather than storing per-speaker channels, ambisonics captures the directional structure of a sound field as a hierarchy of spherical-harmonic coefficients (B-format), where higher orders add angular resolution.
- A decoder maps these coefficients to the available reproduction system, whether a dome of loudspeakers or a binaural pair, and supports rotation of the whole field for head-tracking.
- This layout-independence makes ambisonics ideal for [[Virtual Reality]] and [[Augmented Reality]] where listener orientation changes continuously.
- ### Key aspects
- Spherical-harmonic encoding of directional sound-field information.
- Order-dependent angular resolution (first-order to higher-order).
- Layout-independent decoding to speakers or binaural output.
- Field rotation enabling efficient head-tracked rendering.
- Interoperability with [[Audio Codec]] formats for distribution.
- ### Mechanisms
- Microphone arrays or panning encode sources into B-format coefficients; a decoder reconstructs the pressure and velocity components appropriate to the playback geometry.
- ### Applications
- 360-degree and VR audio production and playback.
- Concert hall and acoustic field capture.
- Game engine spatial audio with dynamic listener orientation.
- Research in [[Psychoacoustics]] and sound-field reproduction.
- ### Relationships
- hasPart:: [[Spherical Harmonics]]
- uses:: [[Signal Processing]]
- uses:: [[Audio Codec]]
- enables:: [[Spatial Audio]]
- enables:: [[Immersive Audio]]
- supports:: [[Virtual Reality]]
- supports:: [[Augmented Reality]]
- implements:: [[Audio Spatialization]]
- relatedTo:: [[Audio System]]
- relatedTo:: [[Psychoacoustics]]
- dependsOn:: [[Signal Processing]]
- ### Provenance
- updated:: 2026-06-15

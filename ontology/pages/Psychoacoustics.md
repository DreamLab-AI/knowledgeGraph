public:: true

# Psychoacoustics

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:psychoacoustics",
  "@type": "Page",
  "title": "Psychoacoustics",
  "vc:slug": "psychoacoustics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:psychoacoustics",
  "@type": "Class",
  "label": "Psychoacoustics",
  "definition": "Psychoacoustics is the scientific study of how humans perceive sound, relating physical properties of acoustic signals such as frequency, intensity and timing to subjective sensations of pitch, loudness, timbre and spatial location. It characterises perceptual phenomena including auditory masking, critical bands and localisation cues, and explains the limits and biases of the human auditory system. Its findings underpin perceptual audio coding, spatial audio rendering and hearing-aid design.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:perception",
      "label": "Perception"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:immersive-audio",
        "label": "Immersive Audio"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:audio-spatialization",
        "label": "Audio Spatialization"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audio-system",
        "label": "Audio System"
      },
      {
        "@id": "urn:ngm:class:ambisonics",
        "label": "Ambisonics"
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
- Psychoacoustics studies how physical sound maps to subjective auditory [[Perception]], grounded in [[Cognitive Science]] and analysed with [[Signal Processing]].
- It explains masking, loudness, pitch and localisation and the limits of human hearing.
- ### Overview
- The discipline measures perceptual thresholds and effects to build models of what listeners actually hear, distinct from what a microphone records.
- Key results such as auditory masking and critical-band filtering reveal that much acoustic detail is imperceptible, a fact exploited heavily by audio compression.
- Spatial hearing models, including interaural time and level differences, drive binaural and [[Spatial Audio]] rendering.
- ### Key aspects
- Loudness perception and equal-loudness contours.
- Frequency and temporal masking phenomena.
- Critical-band filtering of the cochlea.
- Localisation cues for directional and distance perception.
- Pitch and timbre perception.
- ### Mechanisms
- Controlled listening experiments quantify thresholds and sensitivities, which are encoded into computational perceptual models used by audio systems.
- ### Applications
- Perceptual coding underpinning [[Audio Codec]] formats that discard inaudible detail.
- Spatial and [[Immersive Audio]] rendering, including [[Ambisonics]].
- Hearing-aid and cochlear-implant design.
- Sound-quality evaluation and product tuning.
- ### Relationships
- requires:: [[Signal Processing]]
- requires:: [[Perception]]
- dependsOn:: [[Perception]]
- dependsOn:: [[Cognitive Science]]
- enables:: [[Audio Codec]]
- enables:: [[Immersive Audio]]
- supports:: [[Audio Spatialization]]
- supports:: [[Spatial Audio]]
- uses:: [[Signal Processing]]
- relatedTo:: [[Audio System]]
- relatedTo:: [[Ambisonics]]
- ### Provenance
- updated:: 2026-06-15

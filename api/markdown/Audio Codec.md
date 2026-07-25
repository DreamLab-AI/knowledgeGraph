public:: true

# Audio Codec
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:audio-codec", "@type":"Page", "title":"Audio Codec", "vc:slug":"audio-codec", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audio-codec",
  "@type": "Class",
  "label": "Audio Codec",
  "definition": "An audio codec is a technology that encodes audio into a compressed digital representation and decodes it back for playback, reducing storage and bandwidth requirements. Lossy codecs discard perceptually less important information to achieve high compression, while lossless codecs preserve the original signal exactly. Codecs balance bitrate, audio quality, latency and computational cost, and define container-independent bitstream formats. They are essential to streaming, telephony, broadcasting and immersive spatial audio.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audio-processing",
      "label": "Audio Processing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:decoder",
        "label": "Decoder"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:psychoacoustics",
        "label": "Psychoacoustics"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lossless-compression",
        "label": "Lossless Compression"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audio-streaming",
        "label": "Audio Streaming"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:voice-over-ip",
        "label": "Voice over IP"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:video-codec",
        "label": "Video Codec"
      },
      {
        "@id": "urn:ngm:class:lossy-compression",
        "label": "Lossy Compression"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bitrate",
        "label": "Bitrate"
      },
      {
        "@id": "urn:ngm:class:sample-rate",
        "label": "Sample Rate"
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
  - An audio codec encodes and decodes digital audio to cut storage and bandwidth, a form of [[Audio Processing]] grounded in [[Digital Signal Processing]] and [[Data Compression]] that trades [[Bitrate]] against quality.

- ### Overview
  - A codec, short for coder-decoder, defines how a sound waveform is transformed into a compact bitstream and reconstructed for playback. Lossy codecs exploit psychoacoustic models to discard information the ear is unlikely to notice, achieving large reductions in size.
  - Lossless codecs instead compress without any loss, reconstructing the original samples exactly at the cost of larger files. The choice depends on the trade-off among bitrate, fidelity, latency and processing power for the target application.

- ### Mechanisms
  - Time-domain audio is transformed into a frequency representation suited to perceptual coding.
  - Psychoacoustic models identify components masked by louder neighbouring sounds and allocate bits accordingly.
  - Quantisation and entropy coding compress the representation into a compact bitstream.
  - The decoder reverses these steps, with low-latency modes tuned for real-time communication and spatial-audio renderers reconstructing positional cues.

- ### Applications
  - Music and podcast streaming services.
  - Voice over IP, conferencing and mobile telephony.
  - Broadcasting and media archiving.
  - Immersive and spatial audio for augmented and virtual reality.

- ### Relationships
  - subClassOf:: [[Audio Processing]]
  - hasPart:: [[Encoder]]
  - hasPart:: [[Decoder]]
  - requires:: [[Digital Signal Processing]]
  - requires:: [[Data Compression]]
  - dependsOn:: [[Psychoacoustics]]
  - dependsOn:: [[Quantization]]
  - uses:: [[Lossless Compression]]
  - uses:: [[Signal Processing]]
  - enables:: [[Audio Streaming]]
  - enables:: [[Spatial Audio]]
  - supports:: [[Voice over IP]]
  - contrastsWith:: [[Video Codec]]
  - contrastsWith:: [[Lossy Compression]]
  - relatedTo:: [[Bitrate]]
  - relatedTo:: [[Sample Rate]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation

public:: true

# Music Information Retrieval
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b7810d6aaa5510c684f7c4479b9a981e95bb404f37e127ef96608c51ae32706",
  "@type": "Page",
  "vc:slug": "music-information-retrieval",
  "title": "Music Information Retrieval",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    },
    {
      "@id": "urn:visionflow:linked:signal-processing",
      "vc:label": "Signal Processing"
    },
    {
      "@id": "urn:visionflow:linked:music-generation",
      "vc:label": "Music Generation"
    },
    {
      "@id": "urn:visionflow:linked:audio-processing",
      "vc:label": "Audio Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:music-information-retrieval",
  "@type": "Class",
  "label": "Music Information Retrieval",
  "definition": "Music Information Retrieval (MIR) is the interdisciplinary science of extracting, analysing and organising musically meaningful information from audio signals, symbolic scores and metadata. It spans tasks such as genre and mood classification, chord and key estimation, beat tracking, melody extraction, audio fingerprinting, cover-song detection and source separation, combining digital signal processing with machine learning to make large music collections searchable, navigable and analysable.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:information-retrieval",
    "label": "Information Retrieval"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:music-generation",
        "label": "Music Generation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:audio-processing",
        "label": "Audio Processing"
      },
      {
        "@id": "urn:ngm:class:audio-generation",
        "label": "Audio Generation"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Music Information Retrieval (MIR) is the interdisciplinary science of extracting, analysing and organising musically meaningful information from audio signals, symbolic scores and metadata. It spans tasks such as genre and mood classification, chord and key estimation, beat tracking, melody extraction, audio fingerprinting, cover-song detection and source separation, combining digital signal processing with machine learning to make large music collections searchable, navigable and analysable."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MusicInformationRetrieval
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]]
  - uses:: [[Signal Processing]]
  - contrasts-with:: [[Music Generation]]
  - related-to:: [[Audio Processing]]

- ### Content

  ## Definition

  **Music Information Retrieval** is the field concerned with computationally understanding music. Where general [[Information Retrieval]] indexes and ranks text documents, MIR must cope with the peculiarities of musical data: audio is a continuous, polyphonic signal in which pitch, timbre, rhythm and harmony are superimposed; the same work exists in many renditions; and the facets users care about — melody, mood, style, artist — are perceptual rather than lexical. MIR therefore builds representations at several levels, from low-level spectral features (mel spectrograms, chroma vectors, MFCCs) through mid-level descriptors (beats, chords, keys, structural segments) to high-level semantics (genre, emotion, similarity).

  Classic MIR tasks, standardised through the ISMIR conference and the MIREX evaluation campaigns, include onset detection and beat tracking, tempo estimation, chord and key recognition, melody extraction, automatic music transcription, query-by-humming, audio fingerprinting (the technology behind Shazam), cover-song identification, artist and genre classification, and music emotion recognition. Since the mid-2010s deep learning has displaced hand-crafted features across nearly all of these tasks, with convolutional and transformer models trained directly on spectrograms, and self-supervised audio encoders providing general-purpose musical representations.

  MIR is the analytical counterpart to [[Music Generation]]: retrieval systems interpret existing music, whilst generative systems synthesise new music, and modern pipelines increasingly couple the two — using MIR models to condition, evaluate or filter generated audio.

  ## Current Landscape

  Commercially, MIR underpins the streaming economy. Recommendation and playlist engines at Spotify, Apple Music and YouTube Music combine collaborative filtering with content-based MIR features; fingerprinting powers rights management and duplicate detection at catalogue scale; and source separation models such as Demucs enable stem extraction for remixing and karaoke. Open tooling — librosa, Essentia, madmom and the ISMIR community's shared datasets (MSD, FMA, MTG-Jamendo) — keeps the research field reproducible. Open challenges include full polyphonic transcription, cross-cultural generalisation beyond Western tonal music, and evaluation of musical similarity, which remains stubbornly subjective.

  - **ISMIR 2025 (26th conference, Daejeon, South Korea, 21–25 September 2025)**: the field's flagship venue, its proceedings marking the continued shift toward generative and foundation-model methods.
  - **Generative source separation**: 2025 work moved music source separation beyond fixed four-stem (vocals/bass/drums/other) setups toward diffusion-based, user-guided and instrument-agnostic separation — e.g. "GuideSep", conditioned on hummed melody and mel-spectrogram masks.
  - **Beyond Western tonal music**: ISMIR 2025 papers evaluated foundation models on world-music corpora and applied regression-guided latent diffusion to singing-voice separation for Carnatic music, tackling the cross-cultural generalisation gap directly.
  - **Immersive audio**: new evaluations show standard stereo separation models fail to preserve spatial cues in binaural audio, opening MIR work at the intersection with VR/AR and accessibility.

  **Sources**:
  - https://ismir.net/conferences/ismir-2025/
  - https://ismir2025program.ismir.net/poster_147.html
  - https://ismir2025program.ismir.net/poster_300.html

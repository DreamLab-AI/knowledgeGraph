public:: true

# Acoustic Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:acoustic-model",
  "@type": "Page",
  "title": "Acoustic Model",
  "vc:slug": "acoustic-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:acoustic-model",
  "@type": "Class",
  "label": "Acoustic Model",
  "definition": "An Acoustic Model is the component of a speech-recognition system that maps audio signal features to the probability of phonetic or sub-word units. It learns the statistical relationship between observed acoustic features and the linguistic sounds that produced them, traditionally using hidden Markov models with Gaussian mixtures and increasingly using deep neural networks. Combined with a language model, it converts spoken audio into the most likely sequence of words.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:speech-recognition",
      "label": "Speech Recognition"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automatic-speech-recognition",
        "label": "Automatic Speech Recognition"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:speech-processing",
        "label": "Speech Processing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:automatic-speech-recognition",
        "label": "Automatic Speech Recognition"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:audio-processing",
        "label": "Audio Processing"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
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
  - The component of a speech recogniser that maps audio features to probabilities over phonetic units, learned from transcribed audio and paired with a language model.
  - Related: [[Speech Recognition]] [[Feature Extraction]] [[Neural Network]] [[Language Model]]
- ### Overview
  - An acoustic model estimates how likely a stretch of audio corresponds to particular speech sounds.
  - It is trained on transcribed audio to learn the mapping from acoustic features to phonetic units.
  - Classical models used hidden Markov models with Gaussian mixtures; modern systems use deep neural networks.
  - It operates alongside a language model and decoder to produce the final word sequence.
- ### Mechanisms
  - Feature extraction such as mel-frequency cepstral coefficients or filterbank energies.
  - Modelling of sub-word units like phones, triphones or senones.
  - Sequence modelling via HMMs, recurrent networks or transformer encoders.
  - End-to-end architectures that jointly learn acoustic and linguistic structure.
  - Acoustic adaptation to speaker, channel and noise conditions.
- ### Applications
  - Voice assistants and dictation systems that transcribe speech.
  - Telephony and call-centre speech analytics.
  - Real-time captioning and accessibility tooling.
  - Voice control for embedded and automotive interfaces.
- ### Relationships
  - partOf:: [[Speech Recognition]]
  - requires:: [[Feature Extraction]]
  - hasPart:: [[Neural Network]]
  - uses:: [[Deep Learning]]
  - enables:: [[Automatic Speech Recognition]]
  - relatedTo:: [[Language Model]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation

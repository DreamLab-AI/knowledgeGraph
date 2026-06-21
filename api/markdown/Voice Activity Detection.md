public:: true

# Voice Activity Detection

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:voice-activity-detection",
  "@type": "Page",
  "title": "Voice Activity Detection",
  "vc:slug": "voice-activity-detection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voice-activity-detection",
  "@type": "Class",
  "label": "Voice Activity Detection",
  "definition": "The automated process of classifying audio frames as containing human speech or non-speech (silence, background noise, music) in order to segment an audio stream before downstream processing. Voice activity detection (VAD) reduces computational load on speech-sensitive systems by forwarding only speech-active segments to recognition, enhancement, or analysis modules. Modern VAD systems use neural classifiers trained on diverse acoustic conditions to achieve robust detection under noise, reverberation, and overlapping sounds. It is a foundational pre-processing stage in speech pipelines.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:speaker-recognition", "label": "Speaker Recognition"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"},
      {"@id": "urn:ngm:class:speaker-recognition", "label": "Speaker Recognition"},
      {"@id": "urn:ngm:class:speaker-diarisation", "label": "Speaker Diarisation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:audio-frame-classification", "label": "Audio Frame Classification"},
      {"@id": "urn:ngm:class:noise-suppression", "label": "Noise Suppression"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:audio-processing", "label": "Audio Processing"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:noise-robustness", "label": "Noise Robustness"},
      {"@id": "urn:ngm:class:voice-assistant", "label": "Voice Assistant"},
      {"@id": "urn:ngm:class:telephony", "label": "Telephony"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:speech-processing", "label": "Speech Processing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:efficiency", "label": "Efficiency"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
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
  - [[Voice Activity Detection]] (VAD) is the binary segmentation of an audio stream into speech-active and non-speech regions, providing a gating function that enables downstream [[Speech Recognition]] and [[Speaker Recognition]] systems to ignore irrelevant acoustic content.
  - As a foundational component of [[Speech Processing]] pipelines, VAD directly affects the latency, accuracy, and energy consumption of voice-enabled applications.

- ### Overview
  - Early VAD systems used hand-engineered energy and zero-crossing rate thresholds to separate speech from silence, performing well in clean conditions but degrading rapidly in noise.
  - Neural VAD (e.g. Silero VAD, WebRTC VAD, and bespoke RNN/CNN classifiers) operate on mel-spectrogram features and learn to separate speech from a wide variety of interfering signals through large-scale supervised training.
  - Real-time VAD implementations must operate with low latency (typically 10–30 ms frame windows) and low CPU overhead, as they run continuously in always-on voice systems.
  - Privacy implications arise from continuous audio monitoring: VAD is used as a privacy gate to avoid transmitting non-speech audio to cloud processing systems.

- ### Key Aspects
  - **Frame-level vs segment-level** — frame-level classifiers label each short window; segment-level post-processing smooths transitions and applies minimum duration constraints.
  - **Sensitivity–specificity trade-off** — high sensitivity captures speech onset at the cost of more false positives (noise classified as speech); tunable thresholds balance this trade-off.
  - **Overlapping speech** — detecting simultaneous speakers requires extensions beyond binary VAD, linking to [[Speaker Diarisation]].
  - **On-device deployment** — quantised neural VAD models enable always-on monitoring in microcontrollers and edge devices with milliwatt power budgets.

- ### Applications
  - Wake-word detection gating in [[Voice Assistant]] devices, activating cloud processing only after speech onset.
  - Bandwidth-efficient voice communication in VoIP and [[Telephony]] by transmitting only speech-active frames.
  - Pre-processing step for [[Speaker Recognition]] enrollment and verification to exclude non-speech content.
  - Automatic meeting transcription systems segmenting continuous recordings before [[Speech Recognition]].

- ### Relationships
  - contrastsWith:: [[Speaker Recognition]]
  - contrastsWith:: [[Speech Recognition]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Speaker Recognition]]
  - enables:: [[Speaker Diarisation]]
  - hasPart:: [[Audio Frame Classification]]
  - hasPart:: [[Noise Suppression]]
  - requires:: [[Audio Processing]]
  - requires:: [[Feature Extraction]]
  - uses:: [[Neural Network]]
  - uses:: [[Signal Processing]]
  - relatedTo:: [[Noise Robustness]]
  - relatedTo:: [[Voice Assistant]]
  - relatedTo:: [[Telephony]]
  - dependsOn:: [[Machine Learning]]
  - partOf:: [[Speech Processing]]
  - supports:: [[Efficiency]]
  - supports:: [[Privacy]]

- ### Provenance
  - updated:: 2026-06-15

public:: true

# automatic speech recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdbd065ada7bd47c40208437b5a33b7097670ca19de59a771df00f536746c69d",
  "@type": "Page",
  "vc:slug": "automatic-speech-recognition",
  "title": "automatic speech recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automatic-speech-recognition",
  "@type": "Class",
  "label": "Automatic Speech Recognition",
  "definition": "Automatic Speech Recognition (ASR) is the technology that converts spoken language into written text by jointly modelling acoustic signals — frame-level spectral features derived from raw audio waveforms — and linguistic context, using neural sequence-to-sequence architectures trained on large corpora of paired audio and transcripts. Modern ASR systems built on transformer and conformer encoder-decoder designs achieve near-human word error rates on clean speech benchmarks and have been extended to multilingual and low-resource settings through large-scale self-supervised pre-training on unlabelled audio. ASR serves as a foundational component for voice assistants, real-time transcription services, accessibility tooling, and spoken language understanding pipelines, and underpins multimodal AI systems that must bridge the speech and text modalities.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:speech-processing",
      "label": "Speech Processing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:acoustic-model", "label": "Acoustic Model"},
      {"@id": "urn:ngm:class:language-model", "label": "Language Model"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:audio-signal-processing", "label": "Audio Signal Processing"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:connectionist-temporal-classification", "label": "Connectionist Temporal Classification"},
      {"@id": "urn:ngm:class:self-supervised-learning", "label": "Self-Supervised Learning"},
      {"@id": "urn:ngm:class:recurrent-neural-network", "label": "Recurrent Neural Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:voice-interaction", "label": "Voice Interaction"},
      {"@id": "urn:ngm:class:spoken-language-understanding", "label": "Spoken Language Understanding"},
      {"@id": "urn:ngm:class:real-time-captioning", "label": "Real-Time Captioning"},
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:multimodal-ai", "label": "Multimodal AI"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:text-to-speech", "label": "Text-to-Speech"},
      {"@id": "urn:ngm:class:keyword-spotting", "label": "Keyword Spotting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:speaker-diarisation", "label": "Speaker Diarisation"},
      {"@id": "urn:ngm:class:speaker-recognition", "label": "Speaker Recognition"},
      {"@id": "urn:ngm:class:language-modeling", "label": "Language Modeling"},
      {"@id": "urn:ngm:class:word-error-rate", "label": "Word Error Rate"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:speech-to-text", "label": "Speech-to-Text"},
    {"@id": "urn:ngm:class:asr", "label": "ASR"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Automatic Speech Recognition (ASR) is the technology that converts spoken language into written text by jointly modelling the [[Acoustic Model]] — frame-level spectral features derived from raw audio waveforms — and linguistic context via a [[Language Model]], using [[Deep Learning]] sequence-to-sequence architectures trained on large corpora of paired audio and transcripts. Modern systems built on the [[Transformer Architecture]] and conformer encoder-decoder designs achieve near-human word error rates on clean speech benchmarks and have been extended to multilingual settings via large-scale [[Self-Supervised Learning]] on unlabelled audio. ASR is a foundational component for [[Voice Interaction]], real-time transcription, [[Accessibility]] tooling, and [[Spoken Language Understanding]] pipelines.

- ### Overview
  - ASR addresses the problem of mapping a continuous acoustic signal to a discrete sequence of words or sub-word tokens.
  - It is a mature field with commercial deployments dating from the 1990s, though deep-learning approaches since 2012 have dramatically reduced error rates and widened applicability.
  - The technology is central to voice assistants (Siri, Google Assistant, Alexa), meeting transcription, call-centre analytics, and accessibility services for deaf and hard-of-hearing users.
  - Streaming ASR adds strict latency constraints, requiring partial transcript emission in near-real-time for captions and live translation.
  - Multilingual ASR and low-resource language support are active research frontiers, enabled by cross-lingual transfer learning.

- ### Key Components
  - **[[Feature Extraction]]** — raw waveforms are converted to compact spectral representations (Mel-filterbank energies, Mel-frequency cepstral coefficients) that encode phonetically relevant frequency content over short frames (~25 ms).
  - **[[Acoustic Model]]** — maps frame-level features to phoneme or sub-word posteriors; historically Gaussian Mixture Models (GMMs), now deep convolutional and recurrent networks, and conformer blocks.
  - **[[Language Model]]** — assigns probabilities to word sequences, providing prior constraints over which token sequences are linguistically plausible; ranges from n-gram models to large neural language models.
  - **Decoder / Search** — combines acoustic and language model scores to find the highest-probability hypothesis, using beam search over a lattice or graph of possible word sequences.
  - **[[Connectionist Temporal Classification]] (CTC)** — a loss function enabling end-to-end training of sequence models without explicit phoneme alignment, by marginalising over all valid alignment paths.
  - **Attention-based Encoder-Decoder** — learns a soft alignment between audio frames and output tokens jointly, without a separate pronunciation lexicon; exemplified by Listen, Attend and Spell (LAS) and Whisper.
  - **Recurrent Transducer (RNN-T)** — unifies acoustic encoder and prediction network via a joiner, enabling streaming output with low latency; widely deployed on-device.

- ### Architectures
  - **Hybrid HMM-DNN** — Hidden Markov Models for temporal modelling combined with deep neural network acoustic models and n-gram language models; dominant ~2012–2018.
  - **CTC-based end-to-end** — single network trained with CTC loss; simpler pipeline but weaker implicit language model; often combined with an external language model at inference.
  - **Attention encoder-decoder** — powerful sequence-to-sequence models; best accuracy offline but high latency precludes direct streaming.
  - **[[Transformer Architecture]] / Conformer** — combines self-attention for long-range dependencies with convolution for local acoustic patterns; state-of-the-art on standard benchmarks.
  - **Self-supervised pre-training (wav2vec 2.0, HuBERT, Whisper)** — pre-train on large unlabelled audio corpora with masked prediction or contrastive objectives; fine-tune on labelled data; dramatically reduces supervised data requirements.
  - **Whisper (OpenAI)** — a large-scale weakly-supervised multilingual encoder-decoder trained on web-crawled audio; covers ~99 languages; robust to accents and noise; open-weights.

- ### Applications and Use Cases
  - **Voice assistants** — real-time transcription of user utterances for downstream [[Spoken Language Understanding]], intent detection, and [[Natural Language Processing]].
  - **Meeting and lecture transcription** — automated minutes generation, searchable archives; combined with [[Speaker Diarisation]] for multi-speaker attribution.
  - **Call-centre analytics** — real-time or post-hoc transcription of telephone audio for sentiment analysis, compliance monitoring, and agent coaching.
  - **[[Accessibility]]** — live captions for deaf and hard-of-hearing users in broadcast media, video calls, and educational settings.
  - **[[Machine Translation]] pipelines** — speech-to-speech and speech-to-text translation; cascade ASR → neural machine translation or direct end-to-end speech translation.
  - **Medical dictation** — physician voice-to-text for clinical notes; requires domain adaptation to medical vocabulary.
  - **Automotive and IoT** — hands-free in-vehicle commands; on-device RNN-T models satisfy privacy and latency constraints.
  - **[[Spatial Computing]] interfaces** — voice commands in mixed-reality headsets where hands-free interaction is essential; complements eye-tracking and gesture recognition.
  - **Conversational AI** — first-stage input capture for dialogue systems, chatbots, and virtual agents.

- ### Evaluation Metrics
  - **Word Error Rate (WER)** — primary metric; edit distance (substitutions + deletions + insertions) divided by total reference words; lower is better.
  - **Character Error Rate (CER)** — preferred for morphologically rich or character-based languages (Chinese, Japanese).
  - **Real-Time Factor (RTF)** — decode time divided by audio duration; must be < 1.0 for streaming viability.
  - **Latency** — time from end of utterance to first hypothesis emission; critical for conversational applications.
  - Domain-specific benchmarks: LibriSpeech (clean read speech), AISHELL (Mandarin), Common Voice (multilingual community), CHiME (noisy/overlapping speech).

- ### Challenges and Active Research
  - **Noise robustness** — background noise, reverberation, and channel distortion degrade accuracy; addressed through multi-condition training and noise augmentation.
  - **Overlapping speech** — multiple simultaneous speakers; handled by [[Speaker Diarisation]] and target-speaker ASR.
  - **Domain adaptation** — specialised vocabulary (medical, legal, technical); fine-tuning, vocabulary biasing, and contextual spelling correction.
  - **Hallucination** — models may generate plausible but incorrect text for unintelligible audio; a known failure mode of large encoder-decoder models.
  - **Low-resource languages** — limited paired data; addressed via multilingual pre-training and cross-lingual transfer.
  - **On-device inference** — model compression (quantisation, pruning, knowledge distillation) for embedded and mobile deployments.
  - **Code-switching** — mixing of languages within an utterance; challenging for monolingual models.

- ### Relationships
  - hasPart:: [[Acoustic Model]]
  - hasPart:: [[Language Model]]
  - hasPart:: [[Feature Extraction]]
  - requires:: [[Audio Signal Processing]]
  - requires:: [[Training Data]]
  - uses:: [[Deep Learning]]
  - uses:: [[Transformer Architecture]]
  - uses:: [[Connectionist Temporal Classification]]
  - uses:: [[Self-Supervised Learning]]
  - uses:: [[Recurrent Neural Network]]
  - enables:: [[Natural Language Processing]]
  - enables:: [[Voice Interaction]]
  - enables:: [[Spoken Language Understanding]]
  - enables:: [[Real-Time Captioning]]
  - enables:: [[Machine Translation]]
  - supports:: [[Accessibility]]
  - supports:: [[Multimodal AI]]
  - supports:: [[Human-Computer Interaction]]
  - contrastsWith:: [[Text-to-Speech]]
  - contrastsWith:: [[Keyword Spotting]]
  - relatedTo:: [[Speaker Diarisation]]
  - relatedTo:: [[Speaker Recognition]]
  - relatedTo:: [[Language Modeling]]
  - relatedTo:: [[Word Error Rate]]
  - bridges-to:: [[Distributed Collaboration]]
  - bridges-to:: [[Spatial Audio]]

- ### Standards and Context
  - W3C Web Speech API — browser-level interface for ASR in web applications, abstracting over platform-specific engines.
  - NIST evaluations — historical benchmark series (HUB, SwitchBoard, CALLHOME, OpenSAT) established community-wide performance benchmarks.
  - Common Voice (Mozilla) — open multilingual speech corpus covering 100+ languages under CC0 licence; enabling low-resource ASR research.
  - ETSI standards for voice quality and telephony ASR; ITU-T P.800 series for speech quality assessment.
  - GDPR and sector-specific regulations govern audio data collection, retention, and consent for ASR deployments processing personal speech.

- ### Provenance
  - sources:: LibriSpeech benchmark literature; Whisper (Radford et al., 2022); wav2vec 2.0 (Baevski et al., 2020); CTC (Graves et al., 2006); Conformer (Gulati et al., 2020)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z

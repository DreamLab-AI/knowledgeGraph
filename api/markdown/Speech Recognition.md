public:: true

# Speech Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d31733e87c8e85072a8734e8358b8cb2909a10790fbdaad5e1da2b09933bfcea",
  "@type": "Page",
  "vc:slug": "speech-recognition",
  "title": "Speech Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9522"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Speech Recognition"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:speech-recognition",
  "@type": "Class",
  "label": "Speech Recognition",
  "definition": "Speech Recognition (also called Automatic Speech Recognition, ASR) is the computational task of converting spoken acoustic signals into a textual representation, enabling machines to interpret and act on human voice input. Modern systems use end-to-end deep learning architectures — principally transformer-based encoder-decoder models such as Wav2Vec 2.0 and Whisper — trained on thousands of hours of labelled audio to achieve near-human word-error rates across diverse speakers, languages, and acoustic environments. Key technical challenges include robustness to background noise, speaker variability, dialectal and accent diversity, and code-switching; deployment challenges include latency constraints for real-time streaming, on-device inference under power and memory limits, and domain adaptation for specialised vocabularies such as clinical or legal terminology.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:automatic-speech-recognition", "label": "Automatic Speech Recognition"},
    {"@id": "urn:ngm:class:voice-recognition", "label": "Voice Recognition"},
    {"@id": "urn:ngm:class:asr", "label": "ASR"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:connectionist-temporal-classification", "label": "Connectionist Temporal Classification"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:language-translation", "label": "Language Translation"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:voice-user-interface", "label": "Voice User Interface"},
      {"@id": "urn:ngm:class:virtual-assistant", "label": "Virtual Assistant"},
      {"@id": "urn:ngm:class:real-time-captioning", "label": "Real-Time Captioning"},
      {"@id": "urn:ngm:class:clinical-documentation", "label": "Clinical Documentation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:acoustic-model", "label": "Acoustic Model"},
      {"@id": "urn:ngm:class:language-model", "label": "Language Model"},
      {"@id": "urn:ngm:class:audio-signal-processing", "label": "Audio Signal Processing"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:labelled-training-data", "label": "Labelled Training Data"},
      {"@id": "urn:ngm:class:model-compression", "label": "Model Compression"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sentiment-analysis", "label": "Sentiment Analysis"},
      {"@id": "urn:ngm:class:speaker-diarisation", "label": "Speaker Diarisation"},
      {"@id": "urn:ngm:class:text-to-speech", "label": "Text-to-Speech"},
      {"@id": "urn:ngm:class:speech-synthesis", "label": "Speech Synthesis"},
      {"@id": "urn:ngm:class:named-entity-recognition", "label": "Named Entity Recognition"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist", "label": "NIST"},
      {"@id": "urn:ngm:class:w3c-web-speech-api", "label": "W3C Web Speech API"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:speaker-recognition", "label": "Speaker Recognition"},
      {"@id": "urn:ngm:class:voice-activity-detection", "label": "Voice Activity Detection"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:voice-user-interface", "label": "Voice User Interface"},
      {"@id": "urn:ngm:class:multimodal-interaction", "label": "Multimodal Interaction"},
      {"@id": "urn:ngm:class:accessibility-technology", "label": "Accessibility Technology"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:speech-recognition:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d31733e87c8e85072a8734e8358b8cb2909a10790fbdaad5e1da2b09933bfcea"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Speech Recognition — also called [[Automatic Speech Recognition]] (ASR) — is the computational discipline concerned with converting continuous acoustic speech signals into a sequence of words or subword tokens. It is a foundational technology within [[Natural Language Processing]] and [[Artificial Intelligence]], sitting at the intersection of [[Audio Signal Processing]], statistical modelling, and [[Deep Learning]]. Mature end-to-end systems eliminate the historically separate acoustic, pronunciation, and [[Language Model]] pipeline stages, instead training a unified [[Transformer]]-based architecture directly on paired audio–transcript data to produce text with near-human word-error rates across many languages and speakers.

- ### Overview
  - Speech Recognition transforms the acoustic waveform of human speech into machine-readable text or structured data. It is one of the most commercially deployed AI capabilities, powering [[Virtual Assistant]] platforms (Siri, Alexa, Google Assistant), real-time [[Real-Time Captioning]] services for accessibility, call-centre analytics, and clinical dictation tools.
  - **Why it matters**
    - Removes the keyboard/touchscreen barrier to human–computer interaction
    - Central to [[Voice User Interface]] design and [[Multimodal Interaction]]
    - Enables [[Accessibility Technology]] for users with motor or visual impairments
    - Acts as the front-end for downstream NLP tasks: [[Named Entity Recognition]], [[Sentiment Analysis]], [[Language Translation]], [[Question Answering]]
  - **Evolution of the field**
    - Early systems (1950s–1990s) used Hidden Markov Models (HMMs) combined with Gaussian Mixture Models for the acoustic model and n-gram [[Language Model]] for decoding
    - Deep learning (2010s) replaced GMMs with [[Convolutional Neural Network]] and recurrent encoders, with [[Connectionist Temporal Classification]] (CTC) loss enabling alignment-free training
    - Attention-based encoder-decoder and self-supervised pre-training (Wav2Vec 2.0, HuBERT, Whisper) brought substantial WER reductions and strong multilingual generalisation
    - On-device compressed models now enable low-latency offline ASR on smartphones and edge hardware

- ### Key Components
  - **Acoustic Front-End**
    - Converts raw waveform to feature representations: Mel-frequency cepstral coefficients (MFCCs), log-Mel spectrograms, or learned filterbanks
    - [[Audio Signal Processing]] — windowing, fast Fourier transform, filterbank application
    - [[Feature Extraction]] — dimensionality reduction, delta and delta-delta features for temporal dynamics
  - **Acoustic Model**
    - Maps audio features to phoneme or subword posterior probabilities
    - [[Acoustic Model]] — historically GMM-HMM; now predominantly [[Transformer]] or CNN-Transformer hybrid
    - [[Attention Mechanism]] (self-attention) captures long-range temporal dependencies crucial for speech
    - [[Connectionist Temporal Classification]] loss function handles variable-length alignment between audio frames and text tokens
  - **Language Model**
    - Provides prior probabilities over word sequences to rescore hypotheses during beam search decoding
    - [[Language Model]] — n-gram, RNN-LM, or large pre-trained LLM used for shallow or deep fusion
    - Domain-adapted LMs crucial for specialised vocabularies (medical, legal, technical)
  - **Decoder / Search**
    - Combines acoustic scores and language model scores using Viterbi or beam search
    - Lattice or N-best output for downstream reranking or confidence estimation
  - **Speaker Adaptation**
    - [[Speaker Diarisation]] separates overlapping voices in multi-speaker settings
    - Speaker-normalisation techniques (speaker vectors, i-vectors, x-vectors) improve cross-speaker robustness
  - **End-to-End Models**
    - Wav2Vec 2.0 / HuBERT: self-supervised [[Neural Network]] pre-training on unlabelled audio, fine-tuned with CTC or sequence-to-sequence objectives
    - Whisper: large-scale weakly-supervised [[Transformer]] encoder-decoder, trained on 680,000 hours of multilingual audio
    - [[Model Compression]] — quantisation, pruning, knowledge distillation for on-device deployment

- ### Applications and Use Cases
  - **Virtual Assistants & Smart Devices**
    - Wake-word detection followed by cloud or on-device ASR for command interpretation
    - [[Virtual Assistant]] platforms (Alexa, Siri, Google Assistant, Cortana)
    - Smart speakers, automotive infotainment, IoT control
  - **Accessibility**
    - Real-time closed captioning and subtitling for deaf and hard-of-hearing users
    - [[Accessibility Technology]] — dictation for users with motor disabilities
    - [[Real-Time Captioning]] in live events, meetings, broadcasts
  - **Healthcare**
    - [[Clinical Documentation]] — physician dictation systems (Nuance Dragon Medical, Suki)
    - Ambient clinical intelligence: passive transcription of patient–doctor conversations
  - **Contact Centres & Enterprise**
    - Automated call routing, transcription, and agent-assist tools
    - Call quality monitoring and compliance via [[Sentiment Analysis]] of transcripts
  - **Media & Broadcast**
    - Automated subtitling, content search, podcast indexing
    - Broadcast monitoring for rights management
  - **Education**
    - Language learning pronunciation feedback
    - Automated assessment and tutoring systems
  - **Multilingual & Cross-Lingual**
    - [[Language Translation]] pipelines: ASR → [[Machine Translation]] → [[Text-to-Speech]]
    - Code-switching detection in multilingual communities
  - **Spatial & Immersive Computing**
    - [[Multimodal Interaction]] in AR/VR environments — voice commands without physical controllers
    - [[Voice User Interface]] for heads-up operation in mixed-reality workflows

- ### Relationships
  - uses:: [[Transformer]]
  - uses:: [[Neural Network]]
  - uses:: [[Convolutional Neural Network]]
  - uses:: [[Attention Mechanism]]
  - uses:: [[Connectionist Temporal Classification]]
  - enables:: [[Language Translation]]
  - enables:: [[Question Answering]]
  - enables:: [[Voice User Interface]]
  - enables:: [[Virtual Assistant]]
  - enables:: [[Real-Time Captioning]]
  - enables:: [[Clinical Documentation]]
  - requires:: [[Acoustic Model]]
  - requires:: [[Language Model]]
  - requires:: [[Audio Signal Processing]]
  - requires:: [[Feature Extraction]]
  - dependsOn:: [[Labelled Training Data]]
  - dependsOn:: [[Model Compression]]
  - relatedTo:: [[Sentiment Analysis]]
  - relatedTo:: [[Speaker Diarisation]]
  - relatedTo:: [[Text-to-Speech]]
  - relatedTo:: [[Speech Synthesis]]
  - relatedTo:: [[Named Entity Recognition]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[W3C Web Speech API]]
  - contrastsWith:: [[Speaker Recognition]]
  - contrastsWith:: [[Voice Activity Detection]]
  - bridges-to:: [[Multimodal Interaction]]
  - bridges-to:: [[Accessibility Technology]]

- ### Standards & Context
  - **NIST Benchmarks**
    - [[NIST]] has historically organised ASR evaluation campaigns (SWITCHBOARD, CallHome, LibriSpeech) that set standard word-error-rate (WER) benchmarks used industry-wide
    - The CHiME challenges benchmark noise-robust ASR in realistic conditions
  - **W3C Web Speech API**
    - [[W3C Web Speech API]] provides a browser-native JavaScript interface for both ASR and [[Text-to-Speech]], enabling web applications to access speech input without server-side round-trips
  - **Open Datasets**
    - LibriSpeech (1,000 h English read speech), CommonVoice (Mozilla, 100+ languages), VoxPopuli (multilingual EU Parliament), AISHELL (Mandarin)
    - Medical: MTSamples, N2C2 clinical NLP corpora
  - **Key Metrics**
    - Word Error Rate (WER): the standard evaluation metric — ratio of (substitutions + deletions + insertions) to total reference words
    - Character Error Rate (CER) used for agglutinative or character-based languages
    - Real-Time Factor (RTF) for latency profiling
  - **Regulatory Context**
    - Accessibility legislation (ADA, UK Equality Act, EU Web Accessibility Directive) mandates captioning and voice-input support in public-sector digital services
    - GDPR and HIPAA impose constraints on audio data storage for ASR model training in consumer and healthcare contexts
  - **Industry Frameworks**
    - OpenAI Whisper (open-weight multilingual)
    - Meta MMS (Massively Multilingual Speech) — extends to 1,100+ languages using self-supervised learning
    - NVIDIA NeMo, Hugging Face transformers — open toolkits for fine-tuning and deployment

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SpeechRecognition
  - owl-role:: concept

- ### Provenance
  - sources:: LibriSpeech benchmark documentation; Wav2Vec 2.0 (Baevski et al., 2020); Whisper (Radford et al., 2022); W3C Web Speech API specification; NIST Speech evaluation series
  - updated:: 2026-06-13

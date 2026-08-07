public:: true

# Audio Processing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:audio-processing",
  "@type": "Page",
  "vc:slug": "audio-processing",
  "title": "Audio Processing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:digital-signal-processing", "vc:label": "Digital Signal Processing"},
    {"@id": "urn:visionflow:linked:signal-processing", "vc:label": "Signal Processing"},
    {"@id": "urn:visionflow:linked:fourier-analysis", "vc:label": "Fourier Analysis"},
    {"@id": "urn:visionflow:linked:fast-fourier-transform", "vc:label": "Fast Fourier Transform"},
    {"@id": "urn:visionflow:linked:nyquist-shannon-sampling-theorem", "vc:label": "Nyquist-Shannon Sampling Theorem"},
    {"@id": "urn:visionflow:linked:audio-codec", "vc:label": "Audio Codec"},
    {"@id": "urn:visionflow:linked:noise-cancellation", "vc:label": "Noise Cancellation"},
    {"@id": "urn:visionflow:linked:audio-feature-extraction", "vc:label": "Audio Feature Extraction"},
    {"@id": "urn:visionflow:linked:analogue-to-digital-conversion", "vc:label": "Analogue-to-Digital Conversion"},
    {"@id": "urn:visionflow:linked:spectrogram", "vc:label": "Spectrogram"},
    {"@id": "urn:visionflow:linked:psychoacoustics", "vc:label": "Psychoacoustics"},
    {"@id": "urn:visionflow:linked:speech-recognition", "vc:label": "Speech Recognition"},
    {"@id": "urn:visionflow:linked:text-to-speech", "vc:label": "Text-to-Speech"},
    {"@id": "urn:visionflow:linked:music-generation", "vc:label": "Music Generation"},
    {"@id": "urn:visionflow:linked:voice-activity-detection", "vc:label": "Voice Activity Detection"},
    {"@id": "urn:visionflow:linked:spatial-audio-system", "vc:label": "Spatial Audio System"},
    {"@id": "urn:visionflow:linked:immersive-audio-system", "vc:label": "Immersive Audio System"},
    {"@id": "urn:visionflow:linked:audio-spatialisation", "vc:label": "Audio Spatialisation"},
    {"@id": "urn:visionflow:linked:spatial-audio", "vc:label": "Spatial Audio"},
    {"@id": "urn:visionflow:linked:extended-reality", "vc:label": "Extended Reality"},
    {"@id": "urn:visionflow:linked:music-information-retrieval", "vc:label": "Music Information Retrieval"},
    {"@id": "urn:visionflow:linked:multimedia-processing", "vc:label": "Multimedia Processing"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:human-computer-interaction", "vc:label": "Human-Computer Interaction"},
    {"@id": "urn:visionflow:linked:telecommunications", "vc:label": "Telecommunications"},
    {"@id": "urn:visionflow:linked:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:audio-parameters", "vc:label": "Audio Parameters"},
    {"@id": "urn:visionflow:linked:mpeg-h-audio", "vc:label": "MPEG-H Audio"},
    {"@id": "urn:visionflow:linked:opus-codec", "vc:label": "Opus Codec"},
    {"@id": "urn:visionflow:linked:image-processing", "vc:label": "Image Processing"},
    {"@id": "urn:visionflow:linked:analogue-signal-processing", "vc:label": "Analogue Signal Processing"},
    {"@id": "urn:visionflow:linked:audio-processing-system", "vc:label": "Audio Processing System"},
    {"@id": "urn:visionflow:linked:audio-generation", "vc:label": "Audio Generation"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:source-separation", "vc:label": "Source Separation"},
    {"@id": "urn:visionflow:linked:residual-vector-quantisation", "vc:label": "Residual Vector Quantisation"},
    {"@id": "urn:visionflow:linked:waveform", "vc:label": "Waveform"},
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:attention-mechanism", "vc:label": "Attention Mechanism"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audio-processing",
  "@type": "Class",
  "label": "Audio Processing",
  "definition": "Audio processing is the computational manipulation of digital audio signals to transform, analyse, enhance, or synthesise sound, encompassing operations such as filtering, compression, equalisation, spatialisation, and feature extraction. It operates on discrete-time representations of acoustic waveforms using algorithms drawn from digital signal processing theory, spanning both time-domain and frequency-domain approaches. Applications range from consumer media playback and telecommunications to professional studio production, speech recognition pipelines, neural audio codecs, and immersive spatial audio for extended reality environments. Machine learning has significantly expanded the discipline, enabling source separation, generative synthesis, and zero-shot audio enhancement that were previously intractable.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:signal-processing",
      "label": "Signal Processing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:noise-cancellation",
        "label": "Noise Cancellation"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Audio Feature Extraction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:multimedia-processing",
        "label": "Multimedia Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:analogue-to-digital-conversion",
        "label": "Analogue-to-Digital Conversion"
      },
      {
        "@id": "urn:ngm:class:fast-fourier-transform",
        "label": "Fast Fourier Transform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:spatial-audio-system",
        "label": "Spatial Audio System"
      },
      {
        "@id": "urn:ngm:class:immersive-audio-system",
        "label": "Immersive Audio System"
      },
      {
        "@id": "urn:ngm:class:text-to-speech",
        "label": "Text-to-Speech"
      },
      {
        "@id": "urn:ngm:class:music-generation",
        "label": "Music Generation"
      },
      {
        "@id": "urn:ngm:class:voice-activity-detection",
        "label": "Voice Activity Detection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:fourier-analysis",
        "label": "Fourier Analysis"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:audio-parameters",
        "label": "Audio Parameters"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:mpeg-h-audio",
        "label": "MPEG-H Audio"
      },
      {
        "@id": "urn:ngm:class:opus-codec",
        "label": "Opus Codec"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:audio-spatialization",
        "label": "Audio Spatialization"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:music-information-retrieval",
        "label": "Music Information Retrieval"
      },
      {
        "@id": "urn:ngm:class:psychoacoustics",
        "label": "Psychoacoustics"
      },
      {
        "@id": "urn:ngm:class:audio-processing-system",
        "label": "Audio Processing System"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-audio-processing",
      "label": "Digital Audio Processing"
    },
    {
      "@id": "urn:ngm:class:sound-processing",
      "label": "Sound Processing"
    }
  ],
  "quality": 0.92,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:audio-processing:link-resolutions",
  "@type": "LinkResolutionsAnnotation",
  "resolutions": [
    {"raw": "Digital Signal Processing", "@id": "urn:visionflow:linked:digital-signal-processing", "kind": "ResolvedLink"},
    {"raw": "Signal Processing", "@id": "urn:visionflow:linked:signal-processing", "kind": "ResolvedLink"},
    {"raw": "Fourier Analysis", "@id": "urn:visionflow:linked:fourier-analysis", "kind": "ResolvedLink"},
    {"raw": "Fast Fourier Transform", "@id": "urn:visionflow:linked:fast-fourier-transform", "kind": "ResolvedLink"},
    {"raw": "Nyquist-Shannon Sampling Theorem", "@id": "urn:visionflow:linked:nyquist-shannon-sampling-theorem", "kind": "StubLink"},
    {"raw": "Audio Codec", "@id": "urn:visionflow:linked:audio-codec", "kind": "ResolvedLink"},
    {"raw": "Noise Cancellation", "@id": "urn:visionflow:linked:noise-cancellation", "kind": "ResolvedLink"},
    {"raw": "Audio Feature Extraction", "@id": "urn:visionflow:linked:audio-feature-extraction", "kind": "ResolvedLink"},
    {"raw": "Analogue-to-Digital Conversion", "@id": "urn:visionflow:linked:analogue-to-digital-conversion", "kind": "StubLink"},
    {"raw": "Spectrogram", "@id": "urn:visionflow:linked:spectrogram", "kind": "ResolvedLink"},
    {"raw": "Psychoacoustics", "@id": "urn:visionflow:linked:psychoacoustics", "kind": "StubLink"},
    {"raw": "Speech Recognition", "@id": "urn:visionflow:linked:speech-recognition", "kind": "ResolvedLink"},
    {"raw": "Text-to-Speech", "@id": "urn:visionflow:linked:text-to-speech", "kind": "ResolvedLink"},
    {"raw": "Music Generation", "@id": "urn:visionflow:linked:music-generation", "kind": "ResolvedLink"},
    {"raw": "Voice Activity Detection", "@id": "urn:visionflow:linked:voice-activity-detection", "kind": "StubLink"},
    {"raw": "Spatial Audio System", "@id": "urn:visionflow:linked:spatial-audio-system", "kind": "StubLink"},
    {"raw": "Immersive Audio System", "@id": "urn:visionflow:linked:immersive-audio-system", "kind": "StubLink"},
    {"raw": "Audio Spatialisation", "@id": "urn:visionflow:linked:audio-spatialisation", "kind": "StubLink"},
    {"raw": "Spatial Audio", "@id": "urn:visionflow:linked:spatial-audio", "kind": "ResolvedLink"},
    {"raw": "Extended Reality", "@id": "urn:visionflow:linked:extended-reality", "kind": "ResolvedLink"},
    {"raw": "Music Information Retrieval", "@id": "urn:visionflow:linked:music-information-retrieval", "kind": "ResolvedLink"},
    {"raw": "Multimedia Processing", "@id": "urn:visionflow:linked:multimedia-processing", "kind": "StubLink"},
    {"raw": "Natural Language Processing", "@id": "urn:visionflow:linked:natural-language-processing", "kind": "ResolvedLink"},
    {"raw": "Human-Computer Interaction", "@id": "urn:visionflow:linked:human-computer-interaction", "kind": "ResolvedLink"},
    {"raw": "Telecommunications", "@id": "urn:visionflow:linked:telecommunications", "kind": "StubLink"},
    {"raw": "Convolutional Neural Network", "@id": "urn:visionflow:linked:convolutional-neural-network", "kind": "ResolvedLink"},
    {"raw": "Transformer Architecture", "@id": "urn:visionflow:linked:transformer-architecture", "kind": "ResolvedLink"},
    {"raw": "Audio Parameters", "@id": "urn:visionflow:linked:audio-parameters", "kind": "StubLink"},
    {"raw": "MPEG-H Audio", "@id": "urn:visionflow:linked:mpeg-h-audio", "kind": "StubLink"},
    {"raw": "Opus Codec", "@id": "urn:visionflow:linked:opus-codec", "kind": "ResolvedLink"},
    {"raw": "Image Processing", "@id": "urn:visionflow:linked:image-processing", "kind": "ResolvedLink"},
    {"raw": "Analogue Signal Processing", "@id": "urn:visionflow:linked:analogue-signal-processing", "kind": "StubLink"},
    {"raw": "Audio Processing System", "@id": "urn:visionflow:linked:audio-processing-system", "kind": "StubLink"},
    {"raw": "Audio Generation", "@id": "urn:visionflow:linked:audio-generation", "kind": "ResolvedLink"},
    {"raw": "Machine Learning", "@id": "urn:visionflow:linked:machine-learning", "kind": "ResolvedLink"},
    {"raw": "Deep Learning", "@id": "urn:visionflow:linked:deep-learning", "kind": "ResolvedLink"},
    {"raw": "Neural Network", "@id": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "Source Separation", "@id": "urn:visionflow:linked:source-separation", "kind": "StubLink"},
    {"raw": "Residual Vector Quantisation", "@id": "urn:visionflow:linked:residual-vector-quantisation", "kind": "StubLink"},
    {"raw": "Waveform", "@id": "urn:visionflow:linked:waveform", "kind": "StubLink"},
    {"raw": "Diffusion Model", "@id": "urn:visionflow:linked:diffusion-model", "kind": "ResolvedLink"},
    {"raw": "Attention Mechanism", "@id": "urn:visionflow:linked:attention-mechanism", "kind": "ResolvedLink"}
  ]
}
```

- ### Definition
  - [[Audio Processing]] is the computational manipulation of digital audio signals using [[Digital Signal Processing]] techniques to transform, analyse, enhance, or synthesise sound. It draws on the mathematical foundations of [[Fourier Analysis]], the [[Nyquist-Shannon Sampling Theorem]], and convolution theory to operate on discrete-time [[Waveform]] representations derived from acoustic pressure waves via [[Analogue-to-Digital Conversion]]. Core operations span the time domain — dynamic range compression, convolution reverb, delay-based effects — and the frequency domain via [[Fast Fourier Transform]] and Short-Time Fourier Transform: spectral equalisation, noise suppression, pitch correction, and [[Audio Feature Extraction]] of descriptors such as Mel-Frequency Cepstral Coefficients (MFCCs), chroma vectors, and zero-crossing rates. The discipline encompasses [[Audio Codec]] design exploiting [[Psychoacoustics]] models to achieve perceptually transparent compression, [[Noise Cancellation]] using adaptive filters, [[Audio Spatialisation]] using Head-Related Transfer Functions (HRTFs) for three-dimensional sound field rendering, and [[Source Separation]] of mixed signals into constituent streams. The integration of [[Machine Learning]] — particularly [[Convolutional Neural Network]] and [[Transformer Architecture]] models — has transformed the discipline from classical linear signal processing into a hybrid field encompassing neural [[Audio Codec]] design with [[Residual Vector Quantisation]], data-driven [[Source Separation]], zero-shot speech enhancement, and generative [[Audio Generation]] pipelines. As a subfield of [[Signal Processing]] and a component of [[Multimedia Processing]], audio processing underpins [[Speech Recognition]], [[Text-to-Speech]], [[Music Generation]], [[Telecommunications]], [[Spatial Audio]], [[Extended Reality]] presence systems, healthcare diagnostics, automotive noise control, and professional studio production.

- ### Semantic Classification
  - owl-class:: ai:AudioProcessing
  - owl-role:: Concept | SignalProcessingDomain | ExecutableProtocol
  - owl-inferred:: ai:DigitalSignalProcessing, ai:MultimediaProcessing, ai:MachineLearning
  - belongs-to-domain:: [[SignalProcessingDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Signal Processing]], [[Digital Signal Processing]]
  - part-of:: [[Multimedia Processing]], [[Signal Processing]]
  - has-part:: [[Digital Signal Processing]], [[Audio Codec]], [[Noise Cancellation]], [[Audio Feature Extraction]], [[Audio Spatialisation]], [[Source Separation]], [[Spectrogram]], [[Waveform]]
  - requires:: [[Analogue-to-Digital Conversion]], [[Fast Fourier Transform]], [[Spectrogram]], [[Psychoacoustics]], [[Nyquist-Shannon Sampling Theorem]]
  - depends-on:: [[Digital Signal Processing]], [[Fourier Analysis]], [[Psychoacoustics]], [[Nyquist-Shannon Sampling Theorem]], [[Machine Learning]]
  - enables:: [[Speech Recognition]], [[Spatial Audio System]], [[Immersive Audio System]], [[Text-to-Speech]], [[Music Generation]], [[Voice Activity Detection]], [[Audio Generation]], [[Music Information Retrieval]], [[Noise Cancellation]]
  - uses:: [[Convolutional Neural Network]], [[Transformer Architecture]], [[Diffusion Model]], [[Attention Mechanism]], [[Residual Vector Quantisation]], [[Audio Parameters]], [[Neural Network]], [[Deep Learning]]
  - supports:: [[Natural Language Processing]], [[Human-Computer Interaction]], [[Telecommunications]], [[Extended Reality]], [[Music Information Retrieval]], [[Speech Recognition]], [[Audio Generation]]
  - standardized-by:: [[MPEG-H Audio]], [[Opus Codec]]
  - contrasts-with:: [[Image Processing]], [[Analogue Signal Processing]]
  - related-to:: [[Music Information Retrieval]], [[Psychoacoustics]], [[Waveform]], [[Audio Processing System]], [[Audio Generation]], [[Machine Learning]], [[Deep Learning]], [[Natural Language Processing]]
  - bridges-to:: [[Audio Spatialisation]], [[Spatial Audio]], [[Extended Reality]], [[Audio Generation]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:DigitalSignalProcessing))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:AudioCodec))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:NoiseCancellation))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:AudioFeatureExtraction))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:AudioSpatialization))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:SourceSeparation))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:hasPart ai:Spectrogram))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:requires ai:AnalogueToDigitalConversion))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:requires ai:FastFourierTransform))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:dependsOn ai:DigitalSignalProcessing))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:dependsOn ai:FourierAnalysis))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:dependsOn ai:Psychoacoustics))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:dependsOn ai:NyquistShannonSamplingTheorem))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:SpeechRecognition))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:TextToSpeech))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:MusicGeneration))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:SpatialAudioSystem))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:VoiceActivityDetection))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:enables ai:AudioGeneration))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:supports ai:Telecommunications))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:supports ai:ExtendedReality))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:uses ai:ConvolutionalNeuralNetwork))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:uses ai:TransformerArchitecture))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:uses ai:DiffusionModel))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:uses ai:ResidualVectorQuantisation))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:standardizedBy ai:OpusCodec))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:standardizedBy ai:MPEGHAudio))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:reducesTo ai:WaveformAnalysis))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:reducesTo ai:SpectralAnalysis))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:reducesTo ai:FeatureExtraction))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:partOf ai:MultimediaProcessing))
    SubClassOf(ai:AudioProcessing
      ObjectSomeValuesFrom(ai:partOf ai:SignalProcessing))
    ```

  - ## About
    - Audio processing emerged as a formal discipline in the 1960s alongside digital computing, drawing on Claude Shannon's information theory (1948), the Nyquist-Shannon sampling theorem formalised by Nyquist (1928) and Shannon (1949), and the Cooley-Tukey [[Fast Fourier Transform]] algorithm (1965) that made discrete-frequency-domain analysis computationally tractable. Early implementations ran on specialised 8-bit digital signal processing chips in the 1970s (Texas Instruments TMS320 family, marketed from 1982); by the 1990s dedicated DSP co-processors (SHARC, Motorola 56000, Texas Instruments C6000 series) had enabled real-time synthesis, multi-band dynamics processing, and surround-sound decoding that previously required entire studio infrastructures. Consumer digital audio milestones included the Sony PCM-1600 digital audio processor (1979), the compact disc (Philips/Sony, 1982, 44.1 kHz 16-bit PCM), digital audio tape (DAT, 1987), the MP3 codec (Fraunhofer IIS/Thomson, 1994), and the Digidesign Pro Tools digital audio workstation (1991) which established the software DAW paradigm still dominant today. Today the compute workload spans CPUs, GPUs, FPGAs, and dedicated neural processing units (NPUs) in consumer devices, enabling real-time pipelines that were unthinkable a decade ago — including on-device [[Noise Cancellation]] in earbuds consuming under 10mW, 48 kHz spatial audio rendering in mobile XR headsets with sub-5ms latency, and real-time [[Speech Recognition]] in hearing aids achieving word error rates below 10% in quiet conditions.
    - A digital audio processing pipeline begins with [[Analogue-to-Digital Conversion]], transducing continuous acoustic pressure waves into discrete pulse-code-modulated (PCM) sample sequences at a chosen sampling rate (44.1 kHz, 48 kHz, 96 kHz) and bit depth (16-bit CD quality, 24-bit studio, 32-bit float for processing). Algorithms operate in either the time domain — convolution, dynamic range compression (compression, limiting, gating), delay effects, reverberation via convolution with impulse responses — or the frequency domain via [[Fast Fourier Transform]]: equalisation, pitch shifting, spectral noise suppression, and harmonic analysis via [[Spectrogram]] representations (Short-Time Fourier Transform, STFT; Mel-frequency filterbanks; constant-Q transforms). The output of these pipelines feeds downstream applications directly or provides features for [[Machine Learning]] classifiers and generative models.
    - The integration of [[Deep Learning]] into audio processing — beginning with raw-waveform convolutional networks (WaveNet, 2016), continuing through encoder-decoder models (Conv-TasNet, 2019; Demucs, 2020) for [[Source Separation]], and extending to [[Transformer Architecture]]-based models for universal enhancement — has fundamentally reshaped the discipline's capability profile. Tasks that required carefully hand-crafted filter banks and heuristic post-processing — such as separating a single speaker from a noisy cocktail party, dereverberation, bandwidth extension, and codec artefact removal — are now handled by data-driven neural networks that generalise across conditions previously intractable with classical DSP. The introduction of [[Residual Vector Quantisation]] neural [[Audio Codec]] systems (SoundStream 2021, EnCodec 2022, DAC 2023) further blurs the boundary between audio processing and [[Audio Generation]]: learned codecs both compress audio for transmission and provide the discrete token vocabulary over which generative models operate.

  - ## Components / Architecture
    - **[[Analogue-to-Digital Conversion]]**: Transduces continuous acoustic pressure waves into discrete PCM sample sequences at a sampling rate (e.g. 44.1 kHz for CD quality, 48 kHz for broadcast, 96 kHz for high-resolution audio) and bit depth (16-bit: 96 dB dynamic range; 24-bit: 144 dB; 32-bit float: processing headroom). Quantisation noise is shaped via dithering. Oversampling and sigma-delta modulation dominate modern ADC architectures.
    - **[[Fast Fourier Transform]] and Spectral Analysis**: The Cooley-Tukey FFT computes the Discrete Fourier Transform (DFT) of N samples in O(N log N) operations. The Short-Time Fourier Transform (STFT) applies overlapping windowed FFTs to produce time-frequency [[Spectrogram]] matrices. Mel-frequency filterbanks map linear frequency to the perceptual Mel scale; 80-128 Mel bins are standard in modern [[Speech Recognition]] front-ends (Whisper uses 80-bin log-Mel spectrograms). Constant-Q Transforms provide logarithmic frequency resolution suited to musical pitch analysis.
    - **Filtering**: Finite impulse response (FIR) filters provide linear phase at the cost of higher order; infinite impulse response (IIR) filters (Butterworth, Chebyshev, elliptic) achieve steeper roll-off with lower order but introduce non-linear phase. Parametric equalisation, crossover networks for multi-driver speaker design, and anti-aliasing filters prior to ADC are canonical applications. Linear convolution in the frequency domain via FFT (overlap-add, overlap-save methods) enables zero-latency convolution reverb using measured acoustic impulse responses.
    - **Dynamic Range Processing**: Compression detectors compute the RMS or peak signal level and apply gain reduction above a threshold with a specified ratio (e.g. 4:1 for vocal compression). Limiters (∞:1 ratio) prevent clipping. Expanders and noise gates attenuate signals below a threshold. Multi-band dynamic processing applies frequency-selective compression. Broadcast loudness normalisation targets Integrated Loudness values per ITU-R BS.1770-4 / EBU R128 (typically -23 LUFS for broadcast, -14 LUFS for streaming).
    - **[[Noise Cancellation]]**
      - Feed-forward ANC uses a reference microphone positioned near the noise source to predict and cancel noise arriving at the error microphone near the ear, with the digital filter adapting in real-time via LMS.
      - Feed-back ANC uses only the error microphone signal, more robust to physical variation but limited to lower frequencies (< 1 kHz) without reference microphone geometry advantages.
      - Consumer implementation: Apple AirPods Pro 2 achieves 25–30 dB ANC attenuation in the 50–1000 Hz range using adaptive hybrid feed-forward/feed-back topology with H2 custom chip running 48,000 measurements/second. Sony WH-1000XM5 uses 8 microphones and dual processors (QN1 + HD Noise Cancelling Processor QN1) targeting 10–1000 Hz noise.
      - Neural noise suppression: NVIDIA RTX Voice (2020), NVIDIA Broadcast, Krisp, and DeepFilterNet use causal CNNs or recurrent networks trained on mixed speech+noise datasets to compute a time-frequency mask M[t,f] applied to the STFT of the input. DeepFilterNet2 achieves DNSMOS-P.835 score of 4.03/5.0 on VoiceBank-DEMAND at 48 kHz, real-time on a single CPU core.
      - Directional beamforming: MVDR (Minimum Variance Distortionless Response) and superdirective beamformers use microphone array geometry to null spatially separated noise sources, providing 5–15 dB directional noise rejection without adaptive filter convergence delays.
    - **[[Audio Codec]]**: Perceptual coding standards exploit [[Psychoacoustics]] masking models (simultaneous and temporal masking) to allocate bits away from inaudible signal components. MP3 (ISO/IEC 11172-3, 1993) achieves 128 kbps stereo at transparent quality; AAC (ISO/IEC 13818-7) improves on MP3 at equivalent bitrates; [[Opus Codec]] (IETF RFC 6716, 2012; RFC 8251, 2017) supports 6–510 kbps with hybrid SILK/CELT coding, is royalty-free, and is the standard for WebRTC (Discord, Zoom, Google Meet). Neural codecs — SoundStream (Zeghidour et al., 2021), EnCodec (Défossez et al., 2022), Descript Audio Codec (Kumar et al., 2023), FlexiCodec (2025), U-Codec (2025) — use [[Residual Vector Quantisation]] to compress 44.1 kHz audio to 8–12 kbps with perceptually transparent quality across speech, music, and environmental sounds.
    - **[[Audio Feature Extraction]]**: Mel-Frequency Cepstral Coefficients (MFCCs: 13–40 coefficients + delta and delta-delta) remain the standard ASR front-end feature; log-Mel filterbank outputs are preferred for end-to-end deep learning systems (Whisper, wav2vec 2.0). Chroma features encode pitch class content independently of octave for chord recognition. Spectral centroid, rolloff, and zero-crossing rate describe timbral texture. Beat tracking and onset detection locate rhythmic events. These features feed [[Speech Recognition]] acoustic models, [[Music Information Retrieval]] classifiers, [[Voice Activity Detection]] systems, and general audio event detection pipelines.
    - **[[Audio Spatialisation]]**
      - Head-Related Transfer Functions (HRTFs) encode frequency-dependent amplitude and phase cues from the listener's pinnae, head, and torso. Binaural rendering convolves a mono signal with measured or generalised HRTFs to produce the perception of a spatially located source over headphones.
      - HRTF databases: ARI (Acoustics Research Institute, Vienna: 201 subjects, 1550 positions, SOFA format); CIPIC (UC Davis, 45 subjects, 1250 positions); SADIE-II (University of York, 20 subjects, high-resolution); 3D3A (Princeton, 50 subjects). Personalisation error with generic HRTFs causes front-back reversals and elevation errors; individualised HRTFs from ear photography are estimated to reduce these by 40–60%.
      - Room acoustics modelling: image-source method (ISM) computes early reflections by mirroring the sound source across room boundaries, exact for shoebox rooms. Feedback delay networks (FDN) model late reverberation as a tightly coupled delay network with random phase response. Convolution with measured impulse responses provides physically exact room acoustics at the cost of single-position validity.
      - Ambisonics: First-order B-format (W, X, Y, Z — 4 channels) captures sound field to zeroth and first order. Higher-order Ambisonics (HOA) of order N uses (N+1)² channels for spatial resolution improving with order. HOA-5 (36 channels) achieves perceptually acceptable spatial resolution for static binaural decoding. MPEG-H Audio supports HOA transport up to HOA-6.
      - [[Spatial Audio System]] and [[Immersive Audio System]] implementations in [[Extended Reality]] require sub-5ms latency HRTF convolution synchronised with head tracking, typically implemented as frequency-domain fast convolution on GPU or DSP hardware.
    - **[[Source Separation]]**
      - Blind source separation decomposes a mixed multi-channel or mono signal into constituent source streams without knowledge of the mixing process.
      - Classical approaches: Non-Negative Matrix Factorisation (NMF) factorises the magnitude spectrogram V ≈ WH into basis spectra W (templates) and time-varying activations H, separating sources by activating different templates at different times. Independent Component Analysis (ICA) applies to over-determined mixtures (at least as many microphones as sources) using statistical independence as the separation criterion. Both approaches are limited to stationary or quasi-stationary sources.
      - Neural approaches: Conv-TasNet (2019, SI-SDR 15.3 dB on WSJ0-2mix) uses a learned filterbank encoder, TCN separator, and decoder. SepFormer (2021, arXiv:2010.13154) uses a dual-path transformer achieving 22.3 dB SI-SDR. Hybrid Transformer Demucs (HTDemucs, ICASSP 2023) operates in both time domain (UNet convolutions) and time-frequency domain (cross-attention transformer), achieving 9.20 dB SDR on MUSDB18-HQ.
      - Deployed systems: Descript's Overdub and Studio Sound (HTDemucs-based stem extraction); Lalal.ai (SOTA music separation as of 2025); iZotope RX 11 (Music Rebalance, Dialogue Isolation — industry standard for post-production audio repair); Moises.ai (mobile stem separation for musicians).
      - Dialogue/speech separation in broadcast: INA (Institut National de l'Audiovisuel) speech segmentation tools; BBC R&D's voice separation for accessibility (audio description enhancement); pyannote.audio (open-source speaker diarisation + separation pipeline, widely deployed in academic and commercial ASR systems).
    - **Neural Audio Enhancement and Restoration**
      - Generative audio enhancement models recover speech intelligibility and naturalness from heavily corrupted inputs (SNR < 0 dB noise conditions, reverberant environments, codec compression artefacts).
      - Discriminative enhancement: DeepFilterNet2 (2023) uses a dual-path CNN with Erb-scaled filterbank input, achieving DNSMOS 4.03 at 48 kHz real-time on CPU. MP-SENet (Multi-scale Parallel SE-Net, 2023) uses multi-scale feature fusion achieving PESQ 3.17 on VoiceBank-DEMAND.
      - Generative enhancement: CDiffuSE (2022) and SGMSE+ (2022) formulate SE as reverse stochastic differential equations; PESQ 3.0+, ESTOI >0.85 on VoiceBank-DEMAND. Handle unseen noise types better than discriminative models.
      - Bandwidth extension: LPCNet-BWE extends 8 kHz telephony-quality speech to 16/32 kHz by predicting the high-frequency spectral envelope using the low-frequency LPC residual as input. Nu-Wave 2 (2022) uses a diffusion model for arbitrary bandwidth extension to 48 kHz from any input sampling rate.
      - Codec artefact removal: iZotope RX 11 De-click and De-crackle modules; Demucs post-processing for MP3 streaming quality restoration. Neural artefact removal models trained on paired clean/encoded audio achieve transparent quality improvement at MP3 128 kbps → apparent 320 kbps.
      - Resampling and dereverberation: Blind room impulse response estimation networks (BLind And Room-Impulse-Response-free dereverberation, BLSTM+CRN) estimate the room impulse response from a reverberant signal without reference microphone, enabling dereverberation in single-microphone conference and podcast audio.

  - ## Neural Architecture Integration
    - Classical audio processing pipelines have been progressively augmented and in some cases replaced by [[Deep Learning]] architectures. The integration follows three patterns: (1) neural front-ends replacing engineered feature extractors with learned representations (wav2vec 2.0 replaces MFCC computation with a convolutional feature encoder + transformer contextualiser trained on 60,000 hours of unlabelled speech); (2) neural processors replicating classical operations with learned parameters (neural EQ, neural reverb, neural dynamics processors as VST3 plugins); and (3) fully neural pipelines where input is raw audio and output is a processed version produced end-to-end (Demucs for source separation, DeepFilterNet for noise suppression, HiFi-GAN for vocoding).
    - **[[Convolutional Neural Network]] architectures** for audio adopt two paradigms: (a) 1D convolutions on [[Waveform]] samples at the audio sampling rate, capturing local time-domain structure (WaveNet, Conv-TasNet, HiFi-GAN); or (b) 2D convolutions on [[Spectrogram]] images treating frequency and time as spatial dimensions (audio classification, music tagging, sound event detection). The 2D approach benefits from pretrained image classification backbones (VGG, ResNet, EfficientNet) fine-tuned on spectrogram data; the 1D approach preserves phase information lost in magnitude spectrogram representations.
    - **[[Transformer Architecture]] models** use one of three audio representations: (a) mel-spectrogram patches (Audio Spectrogram Transformer, AST, Gong et al. 2021; PaSST); (b) raw waveform with 1D CNN front-end tokenisation (wav2vec 2.0, HuBERT, WavLM); or (c) neural codec discrete tokens (SoundStream, EnCodec tokens) for generative models. Self-supervised audio representation learning (wav2vec 2.0, HuBERT, WavLM) pre-trains transformer encoders by predicting masked representations, achieving strong downstream performance on [[Speech Recognition]], speaker verification, emotion recognition, and audio classification with minimal labelled fine-tuning data.
    - **Source Separation Neural Architectures**: Conv-TasNet (Luo & Mesgarani, 2019) uses a learned analysis filterbank (1D convolutional encoder), TCN separator with dilated depthwise-separable convolutions, and a decoder synthesising separated waveforms. SI-SDR improvement of 15.3 dB on WSJ0-2mix versus classical IRM masking. Hybrid Transformer Demucs (HTDemucs, 2022) combines 1D waveform convolutions with cross-[[Attention Mechanism]] transformer in the time-frequency domain, achieving SDR of 9.20 dB on MUSDB18-HQ across all four music stems (vocals, drums, bass, other) — the current MUSDB18 state-of-the-art as of mid-2026.
    - **Neural Enhancement**: Diffusion-model-based speech enhancement (CDiffuSE, SGMSE+, 2022-2023) formulates enhancement as reverse diffusion from a noisy observation, achieving PESQ scores above 3.0 on VoiceBank-DEMAND at 16 kHz. The generative approach handles novel noise types not seen in training. MetricGAN+ (Fu et al., 2022) uses a metric discriminator trained to predict PESQ/STOI scores, enabling direct optimisation toward human-correlated perceptual quality metrics.
    - **Self-Supervised Pre-training at Scale**: WavLM-Large (960h LibriSpeech pre-training + additional 60k hours) achieves state-of-the-art across SUPERB benchmark tasks (ASR WER 1.8%, speaker ID ACC 98.8%, emotion recognition 67.6%, sound event detection mAP 0.879) demonstrating the strong generalisation of large-scale self-supervised audio representations across diverse downstream audio processing tasks.

  - ## Use Cases / Major Families
    - **[[Speech Recognition]] (ASR)**: Log-Mel [[Spectrogram]] front-ends with 25ms windows and 10ms hop sizes feed encoder-decoder models. Whisper Large-v3 (OpenAI, 2023), trained on 5M+ hours of multilingual audio, achieves 2.7% WER on clean LibriSpeech and 5–6% on real-world mixed-condition audio, outperforming Microsoft Azure and Google STT on meeting benchmarks. Whisper was adopted as the MLPerf ASR benchmark model in 2025 (MLCommons MLPerf Inference v5.1), reducing WER by 72% versus the prior RNN-T benchmark. Codec-ASR (2024) extends ASR to discrete neural codec token representations, enabling language-model-based speech recognition without explicit acoustic models.
    - **[[Text-to-Speech]]**: Neural vocoders — HiFi-GAN (2020), UnivNet (2021), BigVGAN (2022) — synthesise 44.1 kHz waveforms from predicted mel-spectrograms in real-time on GPU. The Opus codec is used in streaming TTS pipelines at 32–64 kbps to maintain naturalness over bandwidth-constrained connections. ElevenLabs' Flash v2.5 achieves sub-75ms end-to-end latency, enabling real-time conversational synthesis. Neural [[Audio Codec]] tokens are the generation target for codec language model TTS systems (VALL-E, Voicebox, F5-TTS).
    - **[[Telecommunications]] and Conferencing**: Echo cancellation eliminates acoustic coupling between loudspeaker and microphone in full-duplex audio systems. Packet-loss concealment reconstructs missing audio frames (typically 20ms) using spectral repetition or parametric reconstruction. Jitter buffering manages variable network delay. The [[Opus Codec]] is the codec of choice for WebRTC (RFC 8825), deployed in Zoom, Google Meet, Discord, and Microsoft Teams, supporting 6–510 kbps adaptively. Beamforming microphone arrays (circular, linear, end-fire) provide spatial filtering for far-field voice capture in smart speakers and conferencing devices.
    - **Professional Audio Production**: Digital Audio Workstations (DAWs — Pro Tools, Logic Pro, Ableton Live) host chains of audio processing plugins (VST3, AU, AAX) implementing parametric EQ, multi-band compression, de-essing, convolution reverb, spectral editing, and harmonic saturation. Plugin formats implement real-time processing in the DAW host's audio callback thread at buffer sizes of 64–512 samples (1.3–10.7ms at 48 kHz). The AES67 standard enables audio-over-IP transport in professional broadcast environments. ITU-R BS.1770-4 integrated loudness meters are mandatory in broadcast mastering workflows under EBU R128.
    - **[[Spatial Audio System]] and [[Extended Reality]]**: Real-time binaural rendering at 48 kHz in VR/AR headsets (Meta Quest 3, Apple Vision Pro) localises virtual sound sources in 3D relative to the listener's tracked head orientation, using head-tracking data to continuously update the rendered HRTF convolution. MPEG-H Audio (ISO/IEC 23008-3) provides the standards framework for object-based and scene-based immersive audio in broadcast (NextGen TV in the US, UHD broadcast in Europe). Dolby Atmos and Sony 360 Reality Audio implement proprietary renderer toolchains for cinema and consumer formats.
    - **[[Music Information Retrieval]]**: Beat tracking, chord recognition, key estimation, onset detection, cover song identification, and automatic music transcription use [[Audio Feature Extraction]] pipelines feeding [[Convolutional Neural Network]] or [[Transformer Architecture]] classifiers. Spotify's recommendation engine and Apple Music's Automatic Track Analysis use MIR features extracted from audio previews. The MIREX (Music Information Retrieval Evaluation eXchange) benchmark maintains annual evaluations of core MIR tasks.
    - **Healthcare and Biometrics**: Audio biomarker analysis detects respiratory conditions (COVID-19 cough classifiers achieved AUC 0.80+ in 2021-2022 studies), Parkinson's disease tremor in speech (Dysarthria detection, F1 ~0.85), and vocal cord pathologies. Longitudinal monitoring of breathing patterns from non-contact ultrasonic microphones is used in NICU neonatal care. Automatic hearing test audiometry using calibrated audio stimuli and detection of auditory brainstem response thresholds are digital health applications.
    - **Automotive**: Active Noise Control (ANC) in vehicle cabins targets powertrain and road noise in the 50–400 Hz band, reducing perceived cabin noise by 10–15 dB. Beamforming microphone arrays integrated into headliner panels provide far-field wake word detection and voice command capture. BMW's "Shy Tech" audio personalisation system uses per-zone DSP to create individual sound environments for driver and passengers. BMW HiFi, Harman Kardon, Bose, and Meridian Audio provide premium in-car audio processing as OEM-integrated systems.

  - ## Academic Context
    - Audio processing rests on mathematical foundations established by Claude Shannon (1948, A Mathematical Theory of Communication), Harry Nyquist (1928, Certain Topics in Telegraph Transmission Theory), and the 1965 Cooley-Tukey Fast Fourier Transform paper. The textbook foundations are Oppenheim and Schafer, Discrete-Time Signal Processing (3rd ed., 2010), Gold and Morgan, Speech and Audio Signal Processing (2011), and Bregman's Auditory Scene Analysis (1990) for the perceptual underpinnings. The psychoacoustic model underpinning perceptual coding was developed by Johnston (1988) and Zwicker & Fastl (Psychoacoustics: Facts and Models, 3rd ed., 2007).
    - Deep learning for audio was catalysed by Hinton et al.'s context-dependent DNN-HMM ASR breakthrough (IEEE Signal Processing Magazine, 2012) and the application of convolutional networks to spectrogram inputs for music classification (Lee et al., ICML 2009). Key subsequent papers include WaveNet (van den Oord et al., 2016), Conv-TasNet (Luo & Mesgarani, 2019), Demucs (Défossez et al., 2019, 2021), SoundStream (Zeghidour et al., 2021), Whisper (Radford et al., 2022), EnCodec (Défossez et al., 2022), and Codec-SUPERB (the neural audio codec benchmark, SLT 2024).
    - Primary research venues are ICASSP (IEEE International Conference on Acoustics, Speech, and Signal Processing — the field's largest conference, ~8,000 papers annually), Interspeech, ISMIR (International Society for Music Information Retrieval), DCASE (Detection and Classification of Acoustic Scenes and Events), IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP), and the Journal of the Acoustical Society of America (JASA). The AES (Audio Engineering Society) publishes the Journal of the Audio Engineering Society and runs annual conventions.
    - Foundational software libraries that shaped the field: libsndfile (audio file I/O, Erik de Castro Lopo); librosa (Python audio analysis, McFee et al. 2015, SCIPY 2015) — the standard [[Audio Feature Extraction]] library for Python ML research; SciPy signal module; PyTorch torchaudio; TensorFlow Audio; Kaldi (ASR toolkit, Povey et al. 2011); ESPnet (end-to-end speech processing toolkit, Watanabe et al. 2018); Speechbrain (PyTorch speech toolkit, Ravanelli et al. 2021); Hugging Face transformers audio models (wav2vec 2.0, Whisper, HuBERT, WavLM, AudioSpectrogram Transformer). These toolkits collectively lower the barrier to audio ML research and ensure reproducibility through standardised preprocessing and evaluation pipelines.

  - ## Current Landscape (2026)
    - As of mid-2026, audio processing sits at the intersection of mature classical DSP infrastructure — which has not been displaced — and a rapidly evolving neural processing layer that handles the tasks classical DSP handled poorly. Neural [[Audio Codec]] systems have achieved perceptual transparency at 8–12 kbps for speech, music, and environmental sounds, making the classical MP3/AAC paradigm obsolete for new-build systems at equivalent bitrates. The Low-Resource Audio Codec (LRAC) challenge (2025) drives competition on codec quality at extreme compression for IoT and satellite communication use cases. Real-time neural noise suppression (DeepFilterNet, NVIDIA RTX Voice) is standard in all major videoconferencing platforms as of 2025. Whisper's open-source release catalysed widespread deployment of production-quality ASR in applications previously restricted to commercial cloud APIs.
    - The neural audio codec — specifically the [[Residual Vector Quantisation]] variant (EnCodec, DAC, U-Codec) — has become the foundational representation layer for [[Audio Generation]], bridging classical audio processing and generative AI. Speech language models (SpeechGPT, AudioPaLM, Gemini) demonstrate that joint audio-text processing in a single [[Transformer Architecture]] backbone is achievable, suggesting that the classical separation between audio processing (feature extraction) and language modelling (semantic understanding) will erode over the 2026–2028 period. Systems like Codec-ASR directly bypass the explicit feature extraction pipeline by operating on codec tokens, achieving competitive ASR results without mel-spectrogram front-ends.
    - The MPEG-H Audio standard has been adopted for NextGen TV (ATSC 3.0) rollout in South Korea, the US, and Germany, driving immersive audio to broadcast scale. The Web Audio API Level 2 (W3C) extends browser-native audio graph processing with AudioWorklet for custom DSP kernels, enabling professional-grade audio processing in browser-based applications. AES67 and the SMPTE ST 2110 family are the dominant audio-over-IP standards for live broadcast infrastructure.

  - ## UK Context
    - **Academic Institutions**
      - The Centre for Digital Music (C4DM) at Queen Mary University of London, directed by Professor Simon Dixon and including Professor Emmanouil Benetos (Machine Listening Lab lead), is one of the world's pre-eminent groups in [[Music Information Retrieval]], [[Audio Feature Extraction]], and source separation. The UKRI AI Centre for Doctoral Training in Artificial Intelligence and Music (AIM CDT), hosted at Queen Mary, trains 50+ PhD researchers in machine listening, generative audio, and music AI. Queen Mary began new industry research partnerships on AI in Music in 2024, extending its collaborative ecosystem to music streaming and broadcast partners.
      - The University of Edinburgh's Centre for Speech Technology Research (CSTR) — which produced the Festival speech synthesis system (Black & Taylor, 1997) and the Festvox and HTS/Merlin neural TTS toolkits — has published extensively on speech synthesis, vocal tract modelling, and expressive [[Text-to-Speech]]. The Edinburgh Futures Institute hosted the "AI and Digital Innovations for Voice and Vocal Music" event series in 2024-2025.
      - The University of Sheffield's Speech and Hearing Research Group and the University of Salford's Acoustics Research Centre contribute to room acoustics, [[Psychoacoustics]], and audio engineering research relevant to spatial audio processing. Salford's anechoic and reverberant test chambers are among the UK's premier facilities for acoustic measurement research.
      - Imperial College London's Electrical and Electronic Engineering department contributes to audio signal processing research in speech enhancement, source separation, and acoustic array processing.
    - **Northern England**
      - The University of Leeds' School of Electronic and Electrical Engineering conducts audio signal processing research. Newcastle University's Digital Institute has worked on acoustic scene classification and audio for healthcare applications.
      - Manchester Metropolitan University's Music Department researches creative applications of audio AI, and the University of Manchester's Alliance Manchester Business School has studied the economic impact of AI on the UK music industry.
      - The BBC Research and Development division (Salford, Greater Manchester and London W12) is the UK's largest applied research contributor to audio coding, immersive audio (BBC Spatial Audio Toolbox, "S3A" project), and object-based audio for broadcast. BBC R&D collaborated with Qualcomm and Fraunhofer on the development of [[MPEG-H Audio]] for NextGen TV delivery. BBC R&D's Next Generation Audio research (2016-2023) defined object-based audio production workflows for the UK broadcast industry.
      - The University of Huddersfield's Music Technology group is internationally recognised for research in electroacoustic composition and spatial audio spatialisation, with close links to Acousmonium loudspeaker orchestra practice.
    - **Industry**
      - Focusrite (publicly listed, Hertfordshire) produces professional audio interfaces, software, and the FAST (Flexible Audio Source Technology) research project funded by UKRI, working on AI-assisted audio production.
      - Solid State Logic (Begbroke, Oxfordshire) develops mixing consoles, audio plugins, and software incorporating AI-assisted mix assistance. SSL's Oxford research partnerships contribute to intelligent audio processing algorithms.
      - Meridian Audio (Huntingdon, Cambridgeshire) has pioneered high-resolution audio processing (MQA codec, now Fold-down) and hold patents in perceptual audio coding. The company works closely with Linn Records (UK) on high-resolution audio distribution.
      - Audioscenic (Bristol) and Envelop (distributed, UK-founded) develop spatial audio processing for headphones and consumer devices. Sonarworks (Latvian but UK-present) provides room acoustic correction DSP deployed in major UK studios.
      - The EPSRC has funded multiple collaborative grants on audio DSP, speech enhancement, and audio deepfake detection, including the FAST IMPACt (Intelligent Music Production and Creativity Tools) and S3A (Future Spatial Audio for an Immersive Listener Experience at Home) projects.

  - ## Future Directions (2026–2030)
    - **End-to-End Neural Audio Processing Pipelines**
      - Classical DSP front-ends (FFT, filterbanks) will progressively be replaced by end-to-end neural audio networks operating on raw waveforms or codec tokens, trained jointly with downstream tasks.
      - Codec-ASR (2024) demonstrated competitive [[Speech Recognition]] without mel-spectrogram features; the trend will extend to spatial audio rendering, noise cancellation, and music production effects.
      - Differentiable DSP (DDSP, Engel et al., 2020) integrates classical signal processing components (oscillators, filters, reverb) as differentiable modules within neural architectures, enabling hybrid systems that benefit from both DSP interpretability and neural adaptivity.
    - **On-Device Real-Time Neural DSP**
      - Mobile NPUs (Apple Neural Engine A18 Pro: 38 TOPS; Qualcomm Hexagon NPU: 75 TOPS; MediaTek APU) will enable full-chain neural audio processing — neural ANC, source separation, enhancement, and codec decoding — in real-time at under 10ms latency on consumer devices.
      - Apple's Core Audio framework advances and Android's Audio HAL enhancements will provide standardised NPU audio offload APIs by 2027, enabling third-party audio applications to delegate neural processing to dedicated silicon without CPU load.
      - Neural noise cancellation will migrate from cloud-dependent systems (current Krisp, Nvidia RTX Voice) to fully on-device inference, enabling privacy-preserving noise suppression that does not require audio to leave the user's device.
    - **Personalised [[Psychoacoustics]] and Spatial Audio**
      - Individualised HRTFs estimated from ear photographs or short headphone-based calibration sequences (3–5 minutes) will replace generic HRTF databases, enabling personalised [[Spatial Audio System]] rendering that does not require studio acoustic measurement sessions.
      - This is a key research challenge for [[Extended Reality]] audio realism, being pursued by Microsoft Research Audio, Meta Reality Labs Audio, Apple Vision Pro's audio team, and academic groups including Aalborg University (Denmark), the University of Surrey (UK), and the Technical University of Denmark (DTU).
      - HRTF personalisation networks trained on large acoustic measurement databases (SOFA format corpora) will achieve individualisation competitive with measured HRTFs using ear geometry features from standard phone cameras by 2027.
    - **Audio-Language Foundation Models**
      - Joint audio-language models (Gemini Audio, GPT-4o Audio, AudioPaLM, Whisper successors) will generalise across the full audio processing task graph — [[Speech Recognition]], [[Text-to-Speech]], enhancement, captioning, question answering, and generation — in a single model.
      - Zero-shot adaptation to new acoustic domains (accents, languages, noise environments, music genres) via in-context learning will reduce the need for domain-specific fine-tuning, lowering deployment barriers for specialised applications (medical transcription, legal dictation, under-resourced languages).
      - Audio scene understanding — real-time classification of acoustic environment type (indoor/outdoor, room size, noise level), [[Voice Activity Detection]], and speaker diarisation — will be integrated into the audio processing stack as a pervasive ambient intelligence capability in smart devices.
    - **Neural Audio Codec Standardisation**
      - ISO/IEC and IETF are expected to standardise neural audio codec profiles (building on the LRAC challenge and EnCodec/DAC research) for inclusion in MPEG-I and future WebRTC codec specifications.
      - IETF CELLAR working group (Codec Lossless and Efficient Lossless Audio and Related) is the venue for neural codec standardisation in the IETF. The timeline for RVQ-codec inclusion in a WebRTC successor protocol is estimated at 2027-2029.
      - Low-power codec implementations for IoT audio (sub-100 mW inference for smart microphones, hearing aids, industrial acoustic monitors) will drive a separate thread of neural codec miniaturisation distinct from the high-quality 44.1 kHz consumer codec trajectory.
    - **Immersive and Spatial Audio at Scale**
      - Object-based audio (MPEG-H Audio, Dolby Atmos) will extend from cinema and premium streaming to live sports broadcast, esports, and interactive media, driven by NextGen TV (ATSC 3.0) rollout in the US and Europe.
      - Real-time personalised binaural rendering on mobile for VR/AR requires audio processing pipelines that fuse head-tracking (IMU + optical), room acoustics estimation (from measured or inferred room impulse responses), and neural HRTF personalisation in a sub-10ms closed loop.
      - Audio scene semantic segmentation — identifying and labelling individual sound sources with spatial positions in a mixed acoustic environment — will enable reactive, context-aware soundscapes in [[Extended Reality]] environments where virtual and real sound sources are perceptually integrated.
    - **AI-Augmented Studio Production**
      - AI-assisted mixing and mastering tools — extending iZotope's Neutron/Ozone AI assistants, Accusonus's ERA suite, and iZotope RX — will move toward autonomous multi-track mix creation from raw recorded stems.
      - Perceptual quality models trained on human-rated recordings (MUSHRA evaluations, pairwise preference studies) will provide the objective function for AI mastering systems, replacing heuristic loudness-normalisation with listener-preference-optimised processing chains.
      - The FAST IMPACt (Intelligent Music Production and Creativity Tools) EPSRC-funded UK research project is investigating AI-assisted production tools for broadcast, live events, and recorded music, with partners including BBC R&D, Focusrite, and multiple UK universities.

  - ## Evaluation Metrics and Benchmarks
    - **Perceptual Speech Quality**: PESQ (Perceptual Evaluation of Speech Quality, ITU-T P.862) — a reference-based metric scoring 1-4.5 (wideband PESQ-WB / MOS-LQO); widely used as the objective proxy for speech enhancement quality. STOI (Short-Time Objective Intelligibility) — 0 to 1, predicts the fraction of correctly understood speech segments. DNSMOS (DNS MOS, Microsoft) — a non-intrusive neural network trained to predict MOS from single degraded observations; DNSMOS-P.835 targets three sub-scores (speech, background noise, overall). UTMOS (Automatic MOS Prediction, Saeki et al. 2022) — neural predictor trained on VoiceMOS Challenge data covering TTS and speech enhancement.
    - **Audio Quality (General)**: FAD (Fréchet Audio Distance) — computes Fréchet distance between embeddings of real and generated audio from a VGGish audio feature network; analogous to FID for images, lower = better. CLAP-score — cosine similarity between CLAP embeddings of generated audio and conditioning text; measures text-audio alignment. KL-divergence on AudioSet class posterior distributions — measures whether generated audio belongs to the same AudioSet classes as real audio. Subjective MUSHRA (Multiple Stimuli with Hidden Reference and Anchor) — the gold standard subjective test for audio quality over 0-100 scale per ITU-R BS.1534.
    - **Music Separation**: SDR (Signal-to-Distortion Ratio, Vincent et al. 2006 BSS-Eval) — measures separation quality in dB, accounts for signal, interference, artefact, and noise components. SI-SDR (Scale-Invariant SDR, Le Roux et al. 2019) — scale-invariant reformulation more robust to gain ambiguity, widely adopted in speech separation. MUSDB18-HQ (Rafii et al. 2017, extended Stoeter et al. 2019) — 150-track benchmark for music source separation; median SDR across vocals/drums/bass/other is the primary ranking metric.
    - **ASR**: WER (Word Error Rate) = (S + D + I) / N — counts substitutions, deletions, and insertions relative to total reference words. CER (Character Error Rate) — analogous at character level, used for languages with high morphological complexity (Chinese, Korean, Arabic). SUPERB (Speech processing Universal PERformance Benchmark, Yang et al. 2021) — a multi-task evaluation of speech model representations across ASR, speaker ID, emotion, keyword spotting, voice separation, and dereverberation.
    - **Room Acoustics**: MOS-based naturalness for reverberation (perceived room quality); eSTOI and iSEF (intrusive short-time objective intelligibility); SSIM on spectrograms for dereverberation; T60 estimation error (MAE in seconds) for blind reverberation time estimation systems.
    - **Codec Quality**: VISQOL (Virtual Speech Quality Objective Listener) — a perceptual quality model using spectrogram patch similarity, suitable for codec and enhancement evaluation. SI-SDR on decoded audio versus original (low-bitrate limit). Bitrate vs. quality curves: competitive position relative to other codecs on the same bitrate point. Codec-SUPERB (SLT 2024, arXiv:2409.14085) — first standardised benchmark evaluating neural audio codecs on 11 downstream tasks.

  - ## Key Standards and Technical Specifications
    - **Sampling Rates**: CD quality (44.1 kHz, chosen to capture the full audible range 20–20,000 Hz with a safety margin above the 40 kHz Nyquist limit); broadcast standard (48 kHz, required for professional video post-production per ITU-R BS.2088); high-resolution (96 kHz, 192 kHz for mastering and archival). Ultra-high sampling rates (352.8 kHz, 384 kHz) offer no perceptual benefit but support extreme anti-aliasing margins in oversampled processing chains.
    - **Bit Depth and Dynamic Range**: 16-bit PCM provides 96.3 dB theoretical dynamic range (20log₁₀(2¹⁶) ≈ 96 dB), sufficient for CD but limiting for studio work. 24-bit PCM provides 144 dB, exceeding the human auditory system's dynamic range (~120 dB) and providing processing headroom. 32-bit floating point (IEEE 754 single precision) provides ~1,528 dB theoretical dynamic range (inexact representation) and is standard in all DAW internal processing busses to prevent numeric overflow during gain operations.
    - **FFT Window Functions**: Rectangular windows maximise frequency resolution but introduce spectral leakage; Hanning (Hann), Hamming, Blackman, and Kaiser windows trade resolution for sidelobe attenuation. The Hann window (50% overlap-add) is the standard choice for STFT in [[Audio Feature Extraction]] due to its balance of resolution and leakage. Kaiser-Bessel windows with configurable β parameter allow programmable sidelobe attenuation for demanding spectral analysis applications.
    - **Mel Scale**: The Mel frequency scale maps linear frequency f to perceptual Mel value M = 2595 × log₁₀(1 + f/700), approximating the frequency discrimination of the human basilar membrane. The 40–128 Mel filterbank output (log-compressed) is the standard acoustic feature for [[Speech Recognition]] and audio classification. The MFCC (Mel-Frequency Cepstral Coefficients) applies a Discrete Cosine Transform (DCT) to the log-Mel spectrum, producing decorrelated coefficients where the first 13 (C0–C12) capture the most variance; delta and delta-delta coefficients add temporal dynamics.
    - **Loudness Standards**: ITU-R BS.1770-4 defines Integrated Loudness (LUFS — Loudness Units relative to Full Scale) using K-weighting (pre-filter + RLB weighting) and gating at -70 LUFS and -10 dB relative threshold. EBU R128 specifies -23 LUFS ± 1 LU for European broadcast. ATSC A/85 specifies -24 LKFS for US broadcast. Streaming services normalise to -14 LUFS (Spotify) or -16 LUFS (Apple Music, Tidal) per their loudness normalisation policies.
    - **[[Opus Codec]] Technical Details**: Hybrid SILK (SILK speech codec, based on interpolative coding of pitch parameters) / CELT (Constrained Energy Lapped Transform, a modified MDCT codec) codecs with 20ms default frame size. SILK for speech at 6-20 kbps; CELT for music at 20-500 kbps; hybrid mode 10-40 kbps. Variable bit-rate (VBR) and constrained VBR modes. Stereo up to 48 kHz, 6-channel surround. DTX (Discontinuous Transmission) reduces bandwidth during silence periods.
    - **Head-Related Transfer Functions**: HRTFs are measured at typically 1250 angular positions (2.5° azimuth step, 5° elevation step) per ear, each measurement being an impulse response of 256–2048 samples at 44.1 kHz. The SOFA (AES69-2022) standard stores HRTFs, BRIRs (binaural room impulse responses), and DRIRs (directional room impulse responses) in NetCDF4 format. The ARI, CIPIC, LISTEN, SADIE-II, and 3D3A databases are the principal open HRTF repositories used in [[Audio Spatialisation]] research.
    - **Room Acoustics Parameters**: Reverberation time T60 (time for sound to decay 60 dB), early decay time EDT, clarity C80 (speech) and C50 (music), definition D50, interaural cross-correlation IACC (spaciousness measure), and room gain coefficient are the primary descriptors used in architectural acoustics design and room correction algorithms.

  - ## Mathematical Foundations of Key Operations
    - **Convolution and Linear Filtering**: In discrete time, convolution y[n] = (x * h)[n] = Σₖ x[k]h[n-k] implements any linear time-invariant (LTI) filter. FIR filters have h[n] of finite length M; IIR filters have infinite-length impulse responses implemented via difference equations y[n] = Σᵢ bᵢx[n-i] - Σⱼ aⱼy[n-j]. Frequency-domain convolution (multiply spectra, IFFT) is O(N log N) versus O(N²) for time-domain convolution, making overlap-add FFT convolution essential for long reverb impulse responses (>256 samples).
    - **Short-Time Fourier Transform**: STFT(m, k) = Σₙ x[n] w[n - mH] e^{-j2πkn/N} for hop size H, window w, DFT size N, frame index m, frequency bin k. The modulus |STFT(m,k)| is the [[Spectrogram]] magnitude; arg(STFT(m,k)) is the instantaneous phase. Phase vocoder algorithms manipulate STFT magnitude and phase independently for pitch shifting and time-stretching without the artefacts of naive resampling.
    - **Adaptive Filtering (LMS)**: The Least Mean Squares adaptive filter minimises E[e²[n]] where e[n] = d[n] - yᵀ[n]w[n], updating weights w[n+1] = w[n] + 2μe[n]x[n] for reference signal x[n], desired signal d[n], and step-size μ. Convergence requires μ < 1/(λₘₐₓ × N) where λₘₐₓ is the maximum eigenvalue of the input covariance matrix. The Normalised LMS (NLMS) algorithm divides by ||x[n]||² to stabilise convergence across signal level variations.
    - **Non-Negative Matrix Factorisation**: NMF decomposes a non-negative spectrogram matrix V ≈ WH where W (basis spectra, F×K) and H (activation matrix, K×T) are constrained to be non-negative. The KL-divergence cost function (appropriate for Poisson-distributed spectrogram magnitudes) is minimised via multiplicative update rules. NMF is used in music source separation (each column of W represents an instrument's spectral template; rows of H encode when it plays), audio inpainting, and audio compression artefact reduction.

  - ## Research & Literature
    - 1. Shannon, C.E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal, 27(3), 379-423.
    - 2. Cooley, J.W., Tukey, J.W. (1965). An Algorithm for the Machine Computation of Complex Fourier Series. Mathematics of Computation, 19(90), 297-301.
    - 3. Oppenheim, A.V., Schafer, R.W. (2010). Discrete-Time Signal Processing (3rd ed.). Pearson.
    - 4. Bregman, A.S. (1990). Auditory Scene Analysis: The Perceptual Organization of Sound. MIT Press.
    - 5. Zwicker, E., Fastl, H. (2007). Psychoacoustics: Facts and Models (3rd ed.). Springer.
    - 6. Hinton, G., Deng, L., Yu, D., et al. (2012). Deep Neural Networks for Acoustic Modeling in Speech Recognition. IEEE Signal Processing Magazine, 29(6), 82-97.
    - 7. van den Oord, A., Dieleman, S., Zen, H., et al. (2016). WaveNet: A Generative Model for Raw Audio. arXiv:1609.03499. DeepMind.
    - 8. Luo, Y., Mesgarani, N. (2019). Conv-TasNet: Surpassing Ideal Time-Frequency Magnitude Masking for Speech Separation. IEEE/ACM TASLP, 27(8).
    - 9. Défossez, A., Usunier, N., Bottou, L., Bach, F. (2021). Music Source Separation in the Waveform Domain. arXiv:1911.13254. (Demucs, Meta)
    - 10. Zeghidour, N., Luebbering, A., Skerry-Ryan, R., Jansen, A., et al. (2021). SoundStream: An End-to-End Neural Audio Codec. IEEE/ACM TASLP, 2022.
    - 11. Défossez, A., Copet, J., Synnaeve, G., Adi, Y. (2022). High Fidelity Neural Audio Compression. arXiv:2210.13438. (EnCodec, Meta)
    - 12. Kumar, R., Kumar, P., de Boissiere, T., et al. (2023). High-Fidelity Audio Compression with Improved RVQGAN. NeurIPS 2023. (Descript Audio Codec)
    - 13. Radford, A., Kim, J.W., Xu, T., et al. (2022). Robust Speech Recognition via Large-Scale Weak Supervision. arXiv:2212.04356. (Whisper, OpenAI)
    - 14. Kong, J., Kim, J., Bae, J. (2020). HiFi-GAN: Generative Adversarial Networks for Efficient and High Fidelity Speech Synthesis. NeurIPS 2020.
    - 15. Siuzdak, H. (2023). Vocos: Closing the Gap between Time-domain and Fourier-based Neural Vocoders. arXiv:2306.00814.
    - 16. Rouard, S., Massa, F., Défossez, A. (2022). Hybrid Transformers for Music Source Separation. ICASSP 2023. (HTDemucs)
    - 17. Subakan, C., Ravanelli, M., Cornell, S., et al. (2021). Attention is All You Need in Speech Separation. ICASSP 2021. (SepFormer)
    - 18. Schröter, H., Rosenkranz, T., Escalante-B, A.N., et al. (2022). DeepFilterNet: Perceptually Motivated Real-Time Speech Enhancement. arXiv:2205.05474.
    - 19. Liu, H., Chen, Z., Yuan, Y., et al. (2023). AudioLDM: Text-to-Audio Generation with Latent Diffusion Models. ICML 2023.
    - 20. Liu, H., Yuan, Y., Liu, X., et al. (2024). AudioLDM 2: Learning Holistic Audio Generation with Self-Supervised Pretraining. IEEE/ACM TASLP, 2024.
    - 21. Benetos, E., Dixon, S., Duan, Z., Ewert, S. (2019). Automatic Music Transcription: An Overview. IEEE Signal Processing Magazine, 36(1).
    - 22. ISO/IEC 23008-3:2022. MPEG-H Audio (3rd ed.). International Organisation for Standardisation.
    - 23. Valin, J.-M., Vos, K., Terriberry, T. (2012). Definition of the Opus Audio Codec. IETF RFC 6716.
    - 24. W3C Web Audio Working Group (2021). Web Audio API Level 2. W3C Working Draft.
    - 25. ITU-R BS.1770-4 (2015). Algorithms to Measure Audio Programme Loudness and True-peak Audio Level. International Telecommunication Union.
    - 26. Majdak, P., Hollomey, C., Baumgartner, R. (2022). AMT: A Toolbox for Reproducible Research in Auditory Modeling. Acta Acustica, 6, 19.
    - 27. Codec-SUPERB Authors (2024). Codec-SUPERB @ SLT 2024: A Lightweight Benchmark for Neural Audio Codec Models. arXiv:2409.14085.
    - 28. FlexiCodec Authors (2025). FlexiCodec: A Dynamic Neural Audio Codec for Low Frame Rates. arXiv:2510.00981.

- ### Provenance
  - sources:: Shannon (1948) A Mathematical Theory of Communication Bell System Technical Journal; Cooley & Tukey (1965) Mathematics of Computation; Oppenheim & Schafer Discrete-Time Signal Processing 3rd ed.; Bregman Auditory Scene Analysis MIT Press; Zwicker & Fastl Psychoacoustics Springer; Hinton et al. (2012) IEEE Signal Processing Magazine; van den Oord et al. (2016) WaveNet arXiv:1609.03499; Luo & Mesgarani (2019) Conv-TasNet IEEE/ACM TASLP; Zeghidour et al. (2021) SoundStream IEEE/ACM TASLP; Défossez et al. (2022) EnCodec arXiv:2210.13438; Kumar et al. (2023) DAC NeurIPS; Radford et al. (2022) Whisper arXiv:2212.04356; Kong et al. (2020) HiFi-GAN NeurIPS; Codec-SUPERB (2024) arXiv:2409.14085; FlexiCodec (2025) arXiv:2510.00981; ISO/IEC 23008-3:2022 MPEG-H Audio; IETF RFC 6716 Opus; W3C Web Audio API; ITU-R BS.1770-4; Queen Mary AIM CDT website; BBC R&D spatial audio publications; MLCommons MLPerf Inference v5.1 (2025)
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

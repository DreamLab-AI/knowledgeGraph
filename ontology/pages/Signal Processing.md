public:: true
alias:: SignalProcessing

# Signal Processing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f6baf15ad0eb3353184b6468ebce269bed0f28d3eb15e697b434bcf6e210f87",
  "@type": "Page",
  "vc:slug": "signal-processing",
  "title": "Signal Processing",
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
      "vc:value": "MV-9684"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Signal Processing"
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
  "@id": "urn:ngm:class:signal-processing",
  "@type": "Class",
  "label": "Signal Processing",
  "definition": "Signal processing is the mathematical and engineering discipline concerned with the representation, analysis, transformation, synthesis, filtering, and compression of signals — time-varying or spatially varying quantities such as audio, video, sensor telemetry, radio-frequency waveforms, biomedical readings, and seismic data. It encompasses both continuous (analogue) and discrete (digital) domains, applying techniques from Fourier analysis, linear algebra, probability theory, and optimisation to extract information, remove noise, encode data, and control systems. Digital signal processing (DSP) executes these operations on sampled data using algorithms implemented in hardware or software, making it foundational to telecommunications, audio engineering, image processing, radar, and AI feature extraction pipelines. Modern signal processing increasingly fuses classical deterministic methods with statistical and machine-learning approaches, enabling adaptive filters, compressed sensing, and deep neural network-based feature representations.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:fourier-transform",
        "label": "Fourier Transform"
      },
      {
        "@id": "urn:ngm:class:sampling-theory",
        "label": "Sampling Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:image-processing",
        "label": "Image Processing"
      },
      {
        "@id": "urn:ngm:class:radar",
        "label": "Radar Sensing"
      },
      {
        "@id": "urn:ngm:class:depth-sensing",
        "label": "Depth Sensing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fast-fourier-transform",
        "label": "Fast Fourier Transform"
      },
      {
        "@id": "urn:ngm:class:wavelet-transform",
        "label": "Wavelet Transform"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:compressed-sensing",
        "label": "Compressed Sensing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:noise-reduction",
        "label": "Noise Reduction"
      },
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      },
      {
        "@id": "urn:ngm:class:render-pipeline",
        "label": "Render Pipeline"
      },
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-signal-processing",
      "label": "Digital Signal Processing"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:signal-processing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3f6baf15ad0eb3353184b6468ebce269bed0f28d3eb15e697b434bcf6e210f87"
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
  - Signal processing is the mathematical and engineering discipline concerned with representing, analysing, transforming, filtering, synthesising, and compressing signals — the continuous or discrete quantities (audio, video, sensor telemetry, radio waveforms, biomedical readings) that carry information through physical and digital systems. It draws on [[Fourier Transform]], [[Linear Algebra]], [[Probability Theory]], and [[Optimisation]] to extract information, suppress noise, encode data efficiently, and drive control systems. Both analogue and [[Digital Signal Processing]] branches exist; the latter operates on sampled, quantised data and is implemented in [[Embedded Systems]], [[Field-Programmable Gate Arrays]], and [[Graphics Processing Units]]. Signal processing is foundational to [[Machine Learning]] feature pipelines, [[Telecommunications]], [[Spatial Audio]], [[Image Processing]], and [[Radar Sensing]].

- ### Overview
  - Signal processing converts raw measurements into actionable representations. A signal may be a function of time (audio waveform), space (image pixels), frequency (RF spectrum), or multiple dimensions simultaneously (video, hyperspectral imagery).
  - The central challenge is extracting useful information from noisy, limited, or aliased observations. Classical approaches apply deterministic mathematical operations (convolution, spectral decomposition); modern approaches layer in [[Statistical Inference]] and [[Machine Learning]] to learn signal models from data.
  - Its maturity as a discipline is reflected in decades of IEEE standards, textbook curricula, and ubiquitous deployment — from mobile handsets to medical scanners to satellite systems.
  - Key duality: analogue signals are continuous in both time and amplitude; digital signals are discrete in both. The [[Nyquist-Shannon Sampling Theorem]] bridges the two, dictating that a bandlimited signal can be perfectly reconstructed if sampled at twice its highest frequency.

- ### Key Concepts and Mechanisms
  - **[[Fourier Transform]] and [[Fast Fourier Transform]]** — decompose signals into frequency components; FFT reduces O(N²) DFT to O(N log N), enabling real-time spectral analysis.
  - **[[Wavelet Transform]]** — multiresolution analysis that captures both time and frequency localisation, superior to Fourier methods for transient or non-stationary signals.
  - **[[Filter Design]]** — constructing low-pass, high-pass, band-pass, and notch filters to select or reject frequency bands; implemented as finite impulse response (FIR) or infinite impulse response (IIR) digital filters.
  - **[[Sampling Theory]]** and quantisation — converting continuous-time analogue signals to discrete-time digital representations; governed by the Nyquist criterion and anti-aliasing filters.
  - **[[Kalman Filter]]** — recursive Bayesian estimator for linear dynamic systems, widely used in navigation, tracking, and sensor fusion; extensions (EKF, UKF, particle filters) handle nonlinearity.
  - **[[Compressed Sensing]]** (compressive sensing) — exploits signal sparsity to reconstruct signals from far fewer samples than Nyquist requires, via L1-minimisation; underpins MRI acceleration and CS-based radar.
  - **[[Noise Reduction]]** techniques — Wiener filtering, spectral subtraction, non-local means, and deep neural denoising (e.g., DnCNN for images, RNNoise for audio).
  - **[[Adaptive Filtering]]** — filters whose coefficients update online to track non-stationary environments; used in echo cancellation, equalisers, and beamforming arrays.
  - **[[Modulation and Demodulation]]** — encoding information onto carrier signals (AM, FM, QAM, OFDM) and recovering it at the receiver; core to [[Telecommunications]].
  - **[[Beamforming]]** — spatial filtering across microphone or antenna arrays to directionally amplify signals; used in [[Spatial Audio]], phased-array radar, and 5G base stations.

- ### Applications and Use Cases
  - **Audio and speech** — [[Speech Recognition]] (acoustic feature extraction with MFCC, filterbank energies fed to neural networks), noise-cancelling headphones (active noise control via adaptive filters), audio compression (MP3, AAC use perceptual coding), [[Spatial Audio]] rendering (HRTFs, ambisonics).
  - **[[Image Processing]] and video** — JPEG/HEVC compression (DCT, wavelet coding), medical imaging reconstruction (CT/MRI back-projection, compressed sensing), [[Computer Vision]] preprocessing (edge detection, Gaussian pyramids), [[Depth Sensing]] (ToF and structured light de-noising).
  - **[[Telecommunications]]** — channel equalisation, OFDM modulation in LTE/5G, channel coding, synchronisation; every smartphone is a real-time DSP node.
  - **Radar and sonar** — matched filtering for range compression, Doppler processing for velocity estimation, [[Synthetic Aperture Radar]] image formation.
  - **Biomedical** — ECG/EEG artefact removal, [[Brain-Computer Interface]] feature extraction, ultrasound image formation, hearing aids (compression and directional microphones).
  - **[[Spatial Computing]] and XR** — motion capture noise reduction, IMU sensor fusion (Madgwick/Mahony filters), inside-out tracking, depth camera point-cloud filtering for AR/VR headsets.
  - **[[Machine Learning]] pipelines** — [[Feature Extraction]] from audio/images (spectrograms, mel-frequency cepstral coefficients), pre- and post-processing layers in deep learning inference, signal conditioning for time-series forecasting models.
  - **Finance and infrastructure** — anomaly detection in sensor streams, predictive maintenance via vibration spectral analysis, HFT order-flow filtering.

- ### Relationships
  - hasPart:: [[Digital Signal Processing]]
  - hasPart:: [[Fourier Transform]]
  - hasPart:: [[Filter Design]]
  - hasPart:: [[Sampling Theory]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Spatial Audio]]
  - enables:: [[Image Processing]]
  - enables:: [[Radar Sensing]]
  - enables:: [[Depth Sensing]]
  - requires:: [[Linear Algebra]]
  - requires:: [[Probability Theory]]
  - uses:: [[Fast Fourier Transform]]
  - uses:: [[Wavelet Transform]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Compressed Sensing]]
  - supports:: [[Machine Learning]]
  - supports:: [[Telecommunications]]
  - supports:: [[Motion Capture]]
  - contrastsWith:: [[Symbolic AI]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Neural Network]]
  - relatedTo:: [[Feature Extraction]]
  - relatedTo:: [[Noise Reduction]]
  - relatedTo:: [[Data Compression]]
  - relatedTo:: [[Render Pipeline]]

- ### Standards and Context
  - **IEEE Signal Processing Society** — the primary professional body; publishes IEEE Transactions on Signal Processing, IEEE Signal Processing Letters, and the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP).
  - **ISO/IEC standards** — MPEG audio/video coding standards (ISO/IEC 13818, 14496, 23008) codify signal processing algorithms into interoperable codecs.
  - **ITU-T** — standardises speech codecs (G.711, G.722, G.729, EVS) and video codecs (H.264, H.265, H.266/VVC) used in telecommunications.
  - **ETSI and 3GPP** — define signal processing requirements for cellular standards (LTE, NR/5G), including channel estimation, beamforming, and HARQ retransmission schemes.
  - **IEEE 1451** — smart transducer interface standard governing sensor signal conditioning and interoperability in IoT contexts.
  - The discipline's theoretical foundations were laid by Claude Shannon (information theory, 1948), Harry Nyquist (sampling theorem, 1928), and Norbert Wiener (optimal filtering, 1949). The Cooley-Tukey FFT algorithm (1965) made real-time digital processing practically tractable.

- ### Provenance
  - sources:: IEEE Signal Processing Society; Proakis & Manolakis "Digital Signal Processing" (4th ed.); Oppenheim & Schafer "Discrete-Time Signal Processing" (3rd ed.); Mallat "A Wavelet Tour of Signal Processing" (3rd ed.)
  - updated:: 2026-06-13
  - domain-remap-note:: Original domain was "spatial-computing" — remapped to "ai" as signal processing is a foundational cross-domain discipline whose primary modern role is enabling AI/ML feature extraction pipelines and data conditioning; bridgesTo relation added to preserve the spatial-computing connection.

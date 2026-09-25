Noise cancellation is the process of reducing or eliminating unwanted audio signals from a primary audio stream using signal processing techniques. Active noise cancellation generates an anti-phase signal to destructively interfere with the noise, while passive methods use physical barriers. The technique is applied in audio hardware, telecommunications, and AI-driven speech enhancement systems to improve clarity and intelligibility.

### Overview

- Noise cancellation divides into active (ANC), passive, and hybrid variants. ANC microphones sample ambient noise and produce an inverted waveform in real time. AI-driven noise suppression uses models such as RNNoise or Nvidia RTX Voice to separate speech from background noise in the frequency domain. Latency and compute constraints determine which approach is feasible per deployment.

### Key aspects

- **Anti-phase generation** — matched amplitude, inverted phase waveform destructively interferes with noise.
- **Deep-learning suppression** — spectral masking networks trained on labelled noise datasets.
- **Adaptive filtering** — LMS and RLS algorithms update filter coefficients in real time.
- **Multi-microphone beamforming** — spatial filtering selects desired sound direction.

### Mechanisms

- Signal is captured, transformed to frequency domain (FFT), noise profile is estimated, a suppression mask is applied, and the cleaned signal is reconstructed via inverse FFT. AI models replace or augment the mask-estimation step.

### Applications

- Headphones and hearables with ANC (consumer and professional).
- Video-conferencing clients (noise suppression plugins).
- Hearing aids and cochlear implant pre-processors.
- Automotive cabin audio systems.
- AR/VR headsets requiring clean voice input.

### Provenance


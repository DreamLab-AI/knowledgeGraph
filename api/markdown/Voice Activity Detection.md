The automated process of classifying audio frames as containing human speech or non-speech (silence, background noise, music) in order to segment an audio stream before downstream processing. Voice activity detection (VAD) reduces computational load on speech-sensitive systems by forwarding only speech-active segments to recognition, enhancement, or analysis modules. Modern VAD systems use neural classifiers trained on diverse acoustic conditions to achieve robust detection under noise, reverberation, and overlapping sounds. It is a foundational pre-processing stage in speech pipelines.

### Overview

- Early VAD systems used hand-engineered energy and zero-crossing rate thresholds to separate speech from silence, performing well in clean conditions but degrading rapidly in noise.
- Neural VAD (e.g. Silero VAD, WebRTC VAD, and bespoke RNN/CNN classifiers) operate on mel-spectrogram features and learn to separate speech from a wide variety of interfering signals through large-scale supervised training.
- Real-time VAD implementations must operate with low latency (typically 10–30 ms frame windows) and low CPU overhead, as they run continuously in always-on voice systems.
- Privacy implications arise from continuous audio monitoring: VAD is used as a privacy gate to avoid transmitting non-speech audio to cloud processing systems.

### Key Aspects

- **Frame-level vs segment-level** — frame-level classifiers label each short window; segment-level post-processing smooths transitions and applies minimum duration constraints.
- **Sensitivity–specificity trade-off** — high sensitivity captures speech onset at the cost of more false positives (noise classified as speech); tunable thresholds balance this trade-off.
- **Overlapping speech** — detecting simultaneous speakers requires extensions beyond binary VAD, linking to [[Speaker Diarisation]].
- **On-device deployment** — quantised neural VAD models enable always-on monitoring in microcontrollers and edge devices with milliwatt power budgets.

### Applications

- Wake-word detection gating in [[Voice Assistant]] devices, activating cloud processing only after speech onset.
- Bandwidth-efficient voice communication in VoIP and [[Telephony]] by transmitting only speech-active frames.
- Pre-processing step for [[Speaker Recognition]] enrollment and verification to exclude non-speech content.
- Automatic meeting transcription systems segmenting continuous recordings before [[Speech Recognition]].

### Provenance


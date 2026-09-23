
The automated identification or verification of a person's identity based on characteristics of their voice derived from acoustic speech signals. Speaker recognition encompasses two sub-tasks: speaker verification (confirming a claimed identity) and speaker identification (determining who among a set of known speakers produced a given utterance). Systems extract speaker-discriminative features such as MFCCs, i-vectors, or x-vectors from audio, then compare these against enrolled speaker models using distance metrics or neural classifiers. It is distinct from speech recognition, which transcribes words rather than identifies speakers.

- ### Overview
  - Human vocal tracts produce individuated acoustic signatures shaped by anatomy, physiology, and learned speaking habits. Speaker recognition systems encode these signatures as compact numerical embeddings and compare them against enrolled reference models.
  - Modern systems use deep neural networks (TDNN x-vectors, ECAPA-TDNN, ResNet-based architectures) trained on large speaker corpora to produce speaker embeddings that generalise across recording conditions.
  - [[Voice Activity Detection]] is a prerequisite preprocessing step: only speech-active frames are passed to the recognition system, discarding silence and background noise.
  - Adversarial attacks — voice cloning and spoofing — are active research challenges motivating anti-spoofing countermeasures in deployed systems.

- ### Key Aspects
  - **Verification vs identification** — verification is a 1:1 comparison against a claimed identity; identification is 1:N search over an enrolled set.
  - **Text-dependent vs text-independent** — text-dependent systems require a fixed passphrase; text-independent systems work on any utterance.
  - **Speaker embeddings** — d-vectors, i-vectors, and x-vectors are compact fixed-dimensional representations that capture speaker traits across variable-length utterances.
  - **Environmental robustness** — reverberation, noise, channel mismatch, and emotional state all degrade recognition accuracy.

- ### Applications
  - Voice-based [[Biometric Authentication]] for banking call centres and smart devices.
  - [[Speaker Diarisation]] in meeting transcription systems attributing utterances to individual participants.
  - Forensic voice analysis in legal and law enforcement contexts.
  - Personalised voice assistant experiences adapting to individual user profiles.

- ### Provenance


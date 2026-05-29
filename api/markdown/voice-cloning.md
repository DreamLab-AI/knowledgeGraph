- ### Definition
  - Voice cloning is a speech synthesis technique that uses a short reference audio recording of a target speaker to condition or fine-tune a neural text-to-speech (TTS) model such that it reproduces that speaker's vocal characteristics — including timbre, prosody, accent, and speaking rhythm — when given arbitrary text. Modern voice cloning systems rely on speaker encoder networks that extract a fixed-dimensional speaker embedding from the reference audio, which is then provided as conditioning input to a sequence-to-sequence acoustic model and vocoder. Zero-shot voice cloning extends this capability to entirely unseen speakers without any fine-tuning, using large pre-trained generative models.

- ### Semantic Classification
  - owl-class:: voice-cloning:Voice Cloning
  - owl-role:: Concept

- ### Relationships
  - uses [[Text-to-Speech]]
  - uses [[Neural Network]]
  - relatedTo [[Deepfakes]]
  - relatedTo [[Speech Recognition]]
  - enables [[Generative AI]]

- ### Content
  - Voice cloning pipelines typically consist of three components: a speaker encoder that maps reference audio to a speaker embedding vector; a sequence-to-sequence synthesiser (e.g., Tacotron-2, FastSpeech, or a diffusion-based model) that generates mel-spectrograms conditioned on both text and the speaker embedding; and a vocoder (e.g., WaveNet, HiFi-GAN) that converts the spectrogram to a waveform. Some end-to-end systems combine these stages, yielding lower latency suitable for real-time applications.
  - Few-shot and zero-shot cloning capabilities have advanced significantly with large-scale pre-training. Systems trained on diverse multi-speaker corpora can synthesise a new voice from as little as a few seconds of reference audio, enabling personalised assistants, audiobook narration, and accessibility tools for people who have lost their voices.
  - The same capabilities that enable legitimate uses also raise serious concerns about audio deepfakes — synthetic speech impersonating individuals for fraud, disinformation, or identity theft. Watermarking schemes (embedding imperceptible signals in generated audio) and deepfake detection models trained on spectral artefacts of synthetic speech are active research areas. Regulatory frameworks in multiple jurisdictions are beginning to require disclosure of AI-generated voice content.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
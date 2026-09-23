---
okf_version: "0.2"
type: Class
title: SpeechSynthesis
resource: urn:ngm:class:speech-synthesis
domain: ai
description: Speech synthesis, or text-to-speech (TTS), is the artificial generation of human speech from text or linguistic representations using computational models that map phonetic, prosodic, and acoustic features to waveform output. Modern neural TTS systems use end-to-end deep learning pipelines—typically a text front-end, an acoustic model (Tacotron, FastSpeech, or diffusion-based), and a neural vocode
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:text-to-speech
enables:
  - urn:ngm:class:voice-interaction
  - urn:ngm:class:speech-and-voice
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network-architecture
relatedTo:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:voice-cloning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:audio-processing
---

# SpeechSynthesis

Speech synthesis, or text-to-speech (TTS), is the artificial generation of human speech from text or linguistic representations using computational models that map phonetic, prosodic, and acoustic features to waveform output. Modern neural TTS systems use end-to-end deep learning pipelines—typically a text front-end, an acoustic model (Tacotron, FastSpeech, or diffusion-based), and a neural vocoder (WaveNet, HiFi-GAN, Vocos)—to produce speech that is perceptually natural, expressive, and stylistically controllable. Speech synthesis underpins screen readers, virtual assistants, navigation systems, voice cloning tools, and interactive conversational agents, and its quality is now at or approaching human parity on standard benchmarks for many languages.

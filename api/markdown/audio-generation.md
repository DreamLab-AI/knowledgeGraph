- ### Definition
  - Audio generation is the use of generative machine-learning models to synthesise sound — speech, music, effects, and ambience — from inputs such as text, scores, or latent codes. As a modality of [[Generative AI]], it implements a [[Generative Model]] over audio learnt with [[Deep Learning]].
  - It draws on [[Diffusion Model]], [[Generative Adversarial Network]], and [[Autoregressive Model]] architectures, and powers [[Text-to-Speech]] and [[Voice Cloning]].

- ### Overview
  - Audio is a continuous, high-rate signal: tens of thousands of samples per second, with structure spanning timescales from individual phonemes to musical phrases. Directly modelling raw waveforms is therefore computationally demanding, which has shaped the design of audio generation systems.
  - Two dominant representations exist. Waveform-domain models generate samples directly, capturing fine detail at high cost. Spectrogram-domain models generate a compact time-frequency representation, which a separate vocoder then converts back to a waveform; this two-stage approach is more efficient and widely used in speech.
  - Architecturally the field has moved through autoregressive models that predict audio sample by sample, adversarial models that learn a generator-discriminator game for fast high-fidelity synthesis, and diffusion models that iteratively denoise toward realistic audio. Recent systems condition on text to produce controllable speech and music.

- ### Mechanisms
  - **Waveform modelling** — Autoregressive [[Autoregressive Model]] approaches predict each audio sample conditioned on previous ones, yielding high fidelity at the cost of slow generation.
  - **Spectrogram synthesis and vocoding** — Many systems generate a spectrogram first, then use a neural vocoder to reconstruct the waveform, separating content from fine acoustic detail.
  - **Diffusion** — [[Diffusion Model]] and [[Latent Diffusion]] methods start from noise and iteratively denoise, producing diverse, high-quality audio with stable training.
  - **Adversarial synthesis** — [[Generative Adversarial Network]] vocoders and generators achieve fast, high-fidelity waveform synthesis by training a generator against a discriminator.
  - **Conditioning** — Text, speaker identity, prosody, and musical structure condition the model, giving control over what is produced, central to [[Text-to-Speech]].
  - **Neural backbone** — All approaches rest on [[Neural Network]] architectures trained with [[Deep Learning]] on large audio corpora.

- ### Applications
  - **Text-to-speech** — [[Text-to-Speech]] and [[Speech Synthesis]] produce natural-sounding voices for assistants, accessibility, and media.
  - **Voice cloning** — [[Voice Cloning]] reproduces a target speaker's voice from limited samples, raising both creative and ethical considerations.
  - **Music generation** — Models compose and render music from prompts or symbolic scores for production and prototyping.
  - **Sound design and effects** — Generative audio creates ambient soundscapes and effects for games, film, and virtual environments.
  - **Audio restoration and enhancement** — Generative priors fill in missing or degraded audio, improving recordings.

- ### Relationships
  - subClassOf:: [[Generative AI]]
  - implements:: [[Generative Model]]
  - uses:: [[Diffusion Model]]
  - uses:: [[Generative Adversarial Network]]
  - uses:: [[Autoregressive Model]]
  - dependsOn:: [[Neural Network]]
  - dependsOn:: [[Deep Learning]]
  - enables:: [[Text-to-Speech]]
  - enables:: [[Speech Synthesis]]
  - enables:: [[Voice Cloning]]
  - supports:: [[Speech Synthesis]]
  - relatedTo:: [[Latent Diffusion]]
  - bridgesTo:: [[Generative AI]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
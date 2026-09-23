
A neural vocoder is a deep generative model that synthesises a raw audio waveform from a compact intermediate representation, most commonly a mel-spectrogram produced by the acoustic model in a text-to-speech pipeline. Beginning with WaveNet in 2016 and evolving through flow-based, GAN-based designs such as HiFi-GAN, and diffusion-based approaches, neural vocoders replaced signal-processing methods such as Griffin-Lim and WORLD, delivering near-natural speech quality at real-time or faster generation speeds on commodity hardware.

- ### Semantic Classification

- ### Content

  ## Definition

  A **neural vocoder** is the final stage of a modern [[Text-to-Speech]] pipeline: the component that turns an intermediate acoustic representation into actual sound. Upstream, an [[Acoustic Model]] (Tacotron 2, FastSpeech 2, or a modern token-based model) converts text into a mel-spectrogram — a compact time-frequency description of the target speech that discards phase information. The vocoder's job is to invert that lossy representation into a raw waveform at 16-48 kHz, reconstructing plausible phase and fine spectral detail. Classical solutions (Griffin-Lim iteration, source-filter vocoders such as WORLD and STRAIGHT) produced intelligible but audibly robotic speech; neural vocoders learn the mapping from data and closed most of the gap to natural recordings.

  DeepMind's WaveNet (2016) established the paradigm, modelling audio sample-by-sample with dilated causal convolutions and reaching unprecedented naturalness — at the cost of painfully slow autoregressive generation. The field then optimised for speed without losing quality: WaveRNN shrank the autoregressive model; Parallel WaveNet and flow-based models (WaveGlow) generated all samples in parallel; and GAN-based vocoders — MelGAN, and especially HiFi-GAN (2020) with its multi-period and multi-scale discriminators — became the practical standard, synthesising speech hundreds of times faster than real time on a GPU and comfortably real-time on CPUs and mobile devices. Diffusion vocoders (WaveGrad, DiffWave) and neural audio codecs with learned discrete tokens (SoundStream, EnCodec, and Vocos-style decoders) represent the current frontier, the latter blurring the line between vocoding and codec language modelling in systems like VALL-E and AudioLM.

  Because the vocoder determines the final signal quality, its artefacts — buzzing in unvoiced segments, smeared transients, pitch glitches — cap the perceived quality of the whole system. Modern universal vocoders (BigVGAN and successors) are trained across many speakers, languages, and even music and sound effects, so a single model can serve [[Speech Synthesis]], voice conversion, singing synthesis, and general [[Audio Generation]].

  ## Technical Details

  - **Model families**: autoregressive (WaveNet, WaveRNN), normalising flows (WaveGlow), GAN-based (MelGAN, HiFi-GAN, BigVGAN), diffusion (WaveGrad, DiffWave), and inverse-STFT decoders (Vocos) that predict magnitude and phase rather than raw samples.
  - **Conditioning**: typically 80-band mel-spectrograms at ~12.5 ms hop; codec-style vocoders condition on residual-vector-quantised token streams instead.
  - **Training losses**: adversarial losses with multi-period/multi-scale discriminators, multi-resolution STFT loss, and feature-matching terms; mean opinion scores of leading vocoders approach those of ground-truth recordings.
  - **Deployment**: HiFi-GAN-class models run faster than real time on CPU, enabling on-device TTS; quality-speed-footprint trade-offs drive variant selection for embedded, server, and streaming (chunked, low-latency) use.

  ## Current Landscape

  - **BigVGAN v2** (NVIDIA, released July 2024, final 5M-step checkpoints September 2024) is the reference universal vocoder: trained on 100x more multi-domain audio than its predecessor, supporting sampling rates up to 44.1 kHz, with fused CUDA kernels delivering up to 240x-faster-than-real-time synthesis on a single A100.
  - **Vocos** (ICLR 2024) demonstrated that predicting STFT magnitude and phase rather than raw samples runs roughly 13x faster than HiFi-GAN and about 70x faster than BigVGAN at comparable quality, and serves as a drop-in decoder for EnCodec token streams in codec-language-model TTS.
  - Codec-token pipelines have overtaken mel-conditioned vocoding at the frontier: Microsoft's **VALL-E 2** (2024) reported the first human-parity zero-shot TTS results on LibriSpeech and VCTK, using EnCodec tokens with a Vocos decoder.
  - 2025 research pushes efficiency and artefact control: an IJCAI 2025 range-null-space decomposition vocoder matches BigVGAN-112M with under 3% of its parameters, and aliasing-free designs (e.g. the Pupu-Vocoder/Pupu-Codec line, December 2025) attack the tonal artefacts of transposed convolutions across speech, singing, and music.

  **Sources**:
  - https://developer.nvidia.com/blog/achieving-state-of-the-art-zero-shot-waveform-audio-generation-across-audio-types/
  - https://github.com/NVIDIA/BigVGAN
  - https://github.com/gemelo-ai/vocos
  - https://arxiv.org/html/2512.20211v1


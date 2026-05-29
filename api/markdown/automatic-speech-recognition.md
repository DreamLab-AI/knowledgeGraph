- ### Definition
  - Automatic Speech Recognition (ASR) is the technology that transcribes spoken language into text by jointly modelling the acoustic signal — frame-level spectral features derived from the raw audio waveform — and linguistic context, using neural sequence-to-sequence models trained on large corpora of paired audio and transcripts. Modern ASR systems based on transformer and conformer architectures achieve near-human word error rates on clean speech, and have expanded to multilingual and low-resource settings through large-scale self-supervised pre-training on unlabelled audio. ASR is a foundational component of voice assistants, transcription services, accessibility tools, and spoken language understanding pipelines.

- ### Semantic Classification
  - owl-class:: automatic-speech-recognition:Automatic Speech Recognition
  - owl-role:: Concept

- ### Relationships
  - enables [[Natural Language Processing]]
  - enables [[Voice Interaction]]
  - uses [[Language Modeling]]
  - uses [[Deep Learning]]
  - relatedTo [[Speaker Diarisation]]

- ### Content
  - ASR systems decompose the recognition problem into acoustic modelling — estimating the probability of acoustic frames given phone or sub-word units — and language modelling — estimating the prior probability of word sequences. Traditional hybrid systems combined Hidden Markov Models (HMMs) for acoustic modelling with n-gram language models and separate pronunciation lexicons. End-to-end deep learning systems, including Connectionist Temporal Classification (CTC) models and attention-based encoder-decoder architectures, eliminated hand-crafted components by learning the audio-to-text mapping directly.
  - OpenAI's Whisper model demonstrated that training a single multilingual encoder-decoder transformer on weakly supervised web-crawled audio at scale yields robust, general-purpose recognition across accents, noise conditions, and 99 languages, significantly lowering the barrier to deploying ASR in new languages. Streaming ASR systems, designed for real-time captioning and live translation, add constraints on look-ahead and latency, solved through techniques such as chunk-based attention and recurrent transducer (RNN-T) architectures that emit partial transcripts incrementally.
  - Word error rate (WER) is the standard evaluation metric, measuring the edit distance between hypothesis and reference transcripts. Practical deployment challenges include domain adaptation to specialised vocabularies (medical, legal), robustness to telephony channel noise and overlapping speech (handled by speaker diarisation to segment multi-speaker audio), and hallucination — where models generate plausible-sounding but incorrect text when audio is unintelligible. ASR is increasingly complemented by spoken language understanding modules that extract intent and entities directly from the acoustic signal, and by text-to-speech synthesis systems that complete voice interaction pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
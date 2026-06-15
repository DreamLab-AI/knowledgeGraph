- ### Definition
  - An audio codec encodes and decodes digital audio to cut storage and bandwidth, a form of [[Audio Processing]] grounded in [[Digital Signal Processing]] and [[Data Compression]] that trades [[Bitrate]] against quality.

- ### Overview
  - A codec, short for coder-decoder, defines how a sound waveform is transformed into a compact bitstream and reconstructed for playback. Lossy codecs exploit psychoacoustic models to discard information the ear is unlikely to notice, achieving large reductions in size.
  - Lossless codecs instead compress without any loss, reconstructing the original samples exactly at the cost of larger files. The choice depends on the trade-off among bitrate, fidelity, latency and processing power for the target application.

- ### Mechanisms
  - Time-domain audio is transformed into a frequency representation suited to perceptual coding.
  - Psychoacoustic models identify components masked by louder neighbouring sounds and allocate bits accordingly.
  - Quantisation and entropy coding compress the representation into a compact bitstream.
  - The decoder reverses these steps, with low-latency modes tuned for real-time communication and spatial-audio renderers reconstructing positional cues.

- ### Applications
  - Music and podcast streaming services.
  - Voice over IP, conferencing and mobile telephony.
  - Broadcasting and media archiving.
  - Immersive and spatial audio for augmented and virtual reality.

- ### Relationships
  - subClassOf:: [[Audio Processing]]
  - hasPart:: [[Encoder]]
  - hasPart:: [[Decoder]]
  - requires:: [[Digital Signal Processing]]
  - requires:: [[Data Compression]]
  - dependsOn:: [[Psychoacoustics]]
  - dependsOn:: [[Quantization]]
  - uses:: [[Lossless Compression]]
  - uses:: [[Signal Processing]]
  - enables:: [[Audio Streaming]]
  - enables:: [[Spatial Audio]]
  - supports:: [[Voice over IP]]
  - contrastsWith:: [[Video Codec]]
  - contrastsWith:: [[Lossy Compression]]
  - relatedTo:: [[Bitrate]]
  - relatedTo:: [[Sample Rate]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
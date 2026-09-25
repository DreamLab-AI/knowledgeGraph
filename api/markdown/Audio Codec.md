An audio codec is a technology that encodes audio into a compressed digital representation and decodes it back for playback, reducing storage and bandwidth requirements. Lossy codecs discard perceptually less important information to achieve high compression, while lossless codecs preserve the original signal exactly. Codecs balance bitrate, audio quality, latency and computational cost, and define container-independent bitstream formats. They are essential to streaming, telephony, broadcasting and immersive spatial audio.

### Overview

- A codec, short for coder-decoder, defines how a sound waveform is transformed into a compact bitstream and reconstructed for playback. Lossy codecs exploit psychoacoustic models to discard information the ear is unlikely to notice, achieving large reductions in size.
- Lossless codecs instead compress without any loss, reconstructing the original samples exactly at the cost of larger files. The choice depends on the trade-off among bitrate, fidelity, latency and processing power for the target application.

### Mechanisms

- Time-domain audio is transformed into a frequency representation suited to perceptual coding.
- Psychoacoustic models identify components masked by louder neighbouring sounds and allocate bits accordingly.
- Quantisation and entropy coding compress the representation into a compact bitstream.
- The decoder reverses these steps, with low-latency modes tuned for real-time communication and spatial-audio renderers reconstructing positional cues.

### Applications

- Music and podcast streaming services.
- Voice over IP, conferencing and mobile telephony.
- Broadcasting and media archiving.
- Immersive and spatial audio for augmented and virtual reality.

### Provenance



A neural audio codec is a learned compression model that encodes audio into a compact discrete or latent representation and decodes it back to a waveform using neural networks. Unlike hand-designed codecs, it is trained end-to-end with reconstruction and adversarial objectives to maximise perceptual quality at very low bitrates. The discrete tokens it produces also serve as a representation for generative audio and speech models.

- ### Content
  - Architectures such as residual vector-quantised autoencoders (for example SoundStream and EnCodec) achieve transparent quality at bitrates well below classical codecs. Their quantised token streams have become a standard interface for language-model-style audio generation, tying compression and synthesis together in a single learned representation.


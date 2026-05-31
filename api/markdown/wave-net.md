- ### Definition
  - A deep autoregressive neural network for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions.

- ### Semantic Classification
  - owl-class:: deep-learning:WaveNet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Convolutional Neural Network]]
  - bridges-to:: [[Speech Recognition]]
  - requires:: [[Convolution]], [[Autoregressive Model]]
  - enables:: [[Text-to-Speech]]

- ### Content
  - WaveNet models the conditional distribution of each audio sample given previous samples. It uses dilated causal convolutions so that the receptive field grows exponentially with depth, capturing long temporal structure while keeping the model trainable.
  - Introduced by DeepMind in 2016, WaveNet produced markedly more natural speech synthesis than earlier concatenative and parametric methods. Its original sample-by-sample generation was slow, which prompted later distilled and parallel variants for real-time text-to-speech.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
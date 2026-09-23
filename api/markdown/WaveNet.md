
A deep autoregressive neural network developed by DeepMind for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions to capture long-range temporal dependencies in audio.

- ### Semantic Classification

- ### Content
  - WaveNet models the conditional distribution of each audio sample given previous samples. It uses dilated causal convolutions so that the receptive field grows exponentially with depth, capturing long temporal structure while keeping the model trainable.
  - Introduced by DeepMind in 2016, WaveNet produced markedly more natural speech synthesis than earlier concatenative and parametric methods. Its original sample-by-sample generation was slow, which prompted later distilled and parallel variants for real-time text-to-speech.

- ### Provenance


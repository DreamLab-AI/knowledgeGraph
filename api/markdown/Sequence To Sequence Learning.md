
Sequence-to-sequence learning is a neural modelling framework that maps an input sequence to an output sequence of possibly different length, using an encoder to compress the input into a context representation and a decoder to generate the output token by token. Originally built on recurrent networks, it now predominantly uses the attention-based transformer architecture. It is the dominant paradigm for machine translation, summarisation and other transduction tasks.

- ### Overview
	- The framework addresses problems where input and output are both variable-length sequences, such as translating a sentence or summarising a document.
	- An encoder reads the input and produces a context representation; a decoder consumes that context and emits the output one token at a time, conditioning each step on previously generated tokens.
	- Early models used recurrent networks and LSTMs, which struggled with long dependencies because the entire input was compressed into a single fixed vector.
	- The attention mechanism removed this bottleneck by letting the decoder attend to all encoder states, and the transformer generalised attention into the dominant architecture for modern sequence models.
- ### Mechanisms
	- Encoding: transforming the input sequence into hidden representations.
	- Context formation: summarising or attending over encoder states.
	- Autoregressive decoding: generating output tokens conditioned on prior outputs.
	- Teacher forcing during training and beam search at inference.
	- Attention weighting to align output positions with relevant input.
- ### Applications
	- Machine translation between languages.
	- Abstractive text summarisation.
	- Speech recognition and text-to-speech.
	- Code generation and structured-output transduction.
- ### Provenance


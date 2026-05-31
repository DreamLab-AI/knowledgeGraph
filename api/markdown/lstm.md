- ### Definition
  - Long short-term memory: a recurrent neural network architecture that uses gating mechanisms and a memory cell to learn long-range dependencies and mitigate the vanishing gradient problem.

- ### Semantic Classification
  - owl-class:: deep-learning:LSTM
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Recurrent Neural Network]]
  - bridges-to:: [[Transformer]]
  - requires:: [[Backpropagation]]
  - enables:: [[Speech Recognition]]

- ### Content
  - An LSTM cell maintains a cell state that runs through time with minimal interference, regulated by input, forget and output gates. The gates control how much new information enters the state, how much old information is retained and how much of the state is exposed as output.
  - This design allows gradients to propagate over many time steps, which standard recurrent networks struggle to do. LSTMs were dominant for sequence tasks such as language modelling, speech recognition and machine translation before transformers became the prevailing architecture for long sequences.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
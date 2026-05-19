- ### Definition
  - Neural network architecture defines the structural organization of artificial neurons into layers and the connectivity patterns between them, determining how the network processes and transforms input data through weighted connections and activation functions. Core architecture types include feedforward networks (unidirectional flow), CNNs (convolutional layers with filters for spatial features), RNNs (recurrent connections for sequential dependencies with variants like LSTM and GRU), and transformers (self-attention mechanisms enabling parallel processing).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Neuralnetworkarchitecture
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[ModelArchitecture]]

- ### Content

  ### Architecture Types
  - **Feedforward Neural Networks (FFNs)**: Simplest architecture with fully connected layers, data flows input to output without loops
  - **Convolutional Neural Networks (CNNs)**: Use convolutional and pooling layers to detect spatial features in grid-like data
  - **Recurrent Neural Networks (RNNs)**: Retain state information through recurrent connections for sequential data
  - **LSTM**: Long Short-Term Memory networks address vanishing gradient problem with gating mechanisms
  - **GRU**: Gated Recurrent Units provide simplified gating for long-term dependencies
  - **BiLSTM**: Bidirectional processing for context from both directions
  - **Transformers**: Self-attention mechanisms process entire sequences in parallel, foundation for BERT, GPT, and vision transformers

  ### Key Considerations
  - **Vanishing/Exploding Gradients**: Challenge in deep networks addressed by LSTM, residual connections
  - **Computational Complexity**: Transformers enable parallel processing vs sequential RNN computation
  - **Inductive Biases**: CNNs assume spatial locality, RNNs assume temporal ordering

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
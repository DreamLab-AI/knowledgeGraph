Neural network architecture defines the structural organisation of artificial neurons into layers and the connectivity patterns between them, determining how a network processes and transforms input data through weighted connections and activation functions. Different architectural families — feedforward, convolutional, recurrent, and transformer — embody distinct inductive biases suited to different data modalities and task types. Architectural choices govern capacity, training stability, and generalisation.

### Semantic Classification

### Content

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

### Provenance


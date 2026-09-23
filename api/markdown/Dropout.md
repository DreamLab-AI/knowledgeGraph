
Dropout is a regularisation technique for neural network training in which a randomly selected fraction of neuron activations is set to zero during each forward pass, preventing neurons from co-adapting and forcing the network to learn redundant representations. By randomly deactivating 20–50% of units per training step, dropout acts as an ensemble method — each mini-batch trains a slightly different network architecture — significantly reducing overfitting on limited training datasets. At inference time, all neurons are active but their outputs are scaled by the retention probability.

- ### Semantic Classification

- ### Content
  - **Dropout** is a regularisation technique that randomly deactivates (drops) a fraction of neurons during each training iteration, preventing co-adaptation and reducing overfitting. Dropout rate (typically 0.2–0.5) controls the fraction of neurons dropped.

  ## Standards Alignment

  ### ISO/IEC Standards
  - **[[ISO/IEC 22989:2022]]**: Training and regularisation

  ### NIST AI RMF
  - **Function**: MAP (Training techniques)

  ## Related Terms
  - **Regularisation** (AI-0056): Parent category
  - **Overfitting** (AI-0054): Prevented by dropout
  - **Training** (AI-0041): Applies dropout
  - **Neural Network**: Uses dropout layers

  ## References
  1. Srivastava et al. - "Dropout: A Simple Way to Prevent Neural Networks from Overfitting" - JMLR, 2014
  2. [[ISO/IEC 22989:2022]] - Training techniques
  3. [[NIST AI RMF]] - MAP function mapping

- ### Provenance


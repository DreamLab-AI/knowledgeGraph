A Training Method is a systematic algorithm or procedure used to optimise the parameters of a machine learning model by minimising a loss function through iterative updates over labelled or unlabelled data. Training methods span the full spectrum from supervised and unsupervised learning to reinforcement learning and self-supervised pre-training, each with distinct update rules, convergence properties, and data requirements. Specific optimisers such as gradient descent, Adam, and RMSprop, together with regularisation strategies like dropout and batch normalisation, are key components within training methods.

### Semantic Classification

### Content

### Core Algorithms

- **Backpropagation**: Computes gradients of loss function with respect to weights using chain rule, propagating errors backward through network layers
- **Gradient Descent**: Optimization algorithm that iteratively updates weights by moving in the direction of steepest descent
- **Stochastic Gradient Descent (SGD)**: Updates weights using single samples or mini-batches
- **Adam**: Adaptive learning rates with momentum, combining RMSprop and momentum benefits
- **RMSprop**: Adapts learning rate based on running average of recent gradients
- **AdaGrad**: Adapts learning rate per-parameter based on historical gradients

  ### Key Challenges

- **Vanishing Gradients**: Gradients become very small in deep networks, especially with sigmoid/tanh activations
- **Exploding Gradients**: Gradients grow excessively large, causing divergence
- **Dying ReLU**: ReLU units stuck at zero output, solved by LeakyReLU variants

  ### Advanced Techniques

- Learning rate scheduling and warm-up
- Gradient clipping for stability
- Mixed-precision training for efficiency

### Provenance


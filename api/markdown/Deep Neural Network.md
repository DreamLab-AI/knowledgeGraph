
A deep neural network is an artificial neural network with multiple hidden layers between its input and output, enabling it to learn hierarchical representations of data. Each layer applies a learnable linear transformation followed by a non-linear activation, and the network is trained by gradient descent with backpropagation to minimise a loss function. Depth lets the model compose simple features into increasingly abstract ones, which underlies modern deep learning across vision, language, and audio.

- A deep neural network is a [[Neural Network]] with many stacked hidden layers that learns hierarchical features through [[Backpropagation]] and [[Gradient Descent]]. It is the workhorse of [[Deep Learning]], enabling [[Representation Learning]] from raw data.
- Depth — rather than width alone — is what distinguishes deep networks, letting them compose abstractions across layers.
- ### Overview
- Each layer transforms its input with a learnable weight matrix and bias, then applies a non-linear [[Activation Function]] so the network can model complex, non-linear relationships.
- Training adjusts weights to reduce a loss measured on [[Training Data]], with errors propagated backwards through the layers.
- Specialised architectures — convolutional, recurrent, and transformer — are deep networks tailored to spatial, sequential, and attention-based data respectively.
- ### Mechanisms
- Forward pass: input flows through successive layers to produce predictions.
- Loss computation: predictions are compared against targets to quantify error.
- Backpropagation: gradients of the loss with respect to each weight are computed via the chain rule.
- Optimisation: gradient descent (and variants) update weights to minimise the loss.
- Regularisation: techniques such as dropout and weight decay counter [[Overfitting]].
- ### Key aspects
- Hierarchical features: early layers capture low-level patterns, later layers capture abstract concepts.
- Non-linearity: activation functions give the network expressive power beyond linear models.
- Parameterisation: millions to billions of weights are learned end to end.
- Generalisation: held-out performance depends on data quantity, quality, and regularisation.
- ### Applications
- Computer vision via [[Convolutional Neural Network]] backbones.
- Sequence modelling via [[Recurrent Neural Network]] and [[Transformer]] architectures.
- Embedding generation and [[Representation Learning]] for downstream tasks.
- Speech, recommendation, and scientific modelling.
- ### Provenance


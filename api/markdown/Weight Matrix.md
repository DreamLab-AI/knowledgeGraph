A weight matrix is a two-dimensional array of learnable parameters that defines the linear transformation applied between two layers of a neural network. Each element encodes the strength of the connection between an input unit and an output unit, and the matrix is multiplied with the input activation vector to produce the pre-activation output. Weight matrices are initialised, then iteratively updated during training via gradient-based optimisation to minimise a loss function.

### Overview

- The weight matrix transforms an input activation vector into a higher- or lower-dimensional output space.
- Its dimensions are determined by the number of input and output units of the connected layers.
- Training adjusts the matrix entries so the network approximates the target mapping.

### Mechanisms

- Initialisation strategies (Xavier, He, random)
- Forward pass: output = W x + b
- Gradient computation via [[Backpropagation]]
- Parameter update through optimiser steps
- Regularisation (weight decay, sparsity)

### Applications

- Fully connected (dense) layers in deep networks
- Embedding lookup and projection layers
- Attention and transformer projection matrices
- Linear classifiers and regression heads

### Provenance


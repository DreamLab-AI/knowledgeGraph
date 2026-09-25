A hidden layer is an intermediate layer of neurons in a neural network situated between the input and output layers, whose activations are not directly observed. Each hidden layer applies a learned linear transformation followed by a non-linear activation, building increasingly abstract feature representations. Stacking multiple hidden layers is what gives deep networks their representational power.

### Content

- Each hidden unit computes a weighted sum of its inputs plus a bias, passed through a non-linearity such as ReLU, enabling the network to model non-linear functions. The number and width of hidden layers control capacity, with deeper stacks learning hierarchical features but requiring careful initialisation, normalisation, and regularisation to train stably.


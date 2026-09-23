
The vanishing gradient problem is a difficulty in training deep or recurrent neural networks in which error gradients shrink exponentially as they are propagated backwards through many layers or time steps, leaving early parameters with negligible updates. It arises because repeated multiplication by small derivative terms, characteristic of saturating activation functions, drives the gradient towards zero. The effect severely impedes learning of long-range dependencies and was a central obstacle to deep learning before mitigations emerged. Remedies include non-saturating activations, careful weight initialisation, normalisation, residual connections and gated recurrent architectures such as the LSTM.

- The [[Vanishing Gradient Problem]] occurs when error gradients shrink exponentially as they are propagated backwards through deep networks, starving early layers of useful updates.
- It is a property of [[Backpropagation]] through many layers or time steps, especially acute in the [[Recurrent Neural Network]] and saturating [[Activation Function]] regimes.
- It was a central obstacle to [[Deep Learning]] until gated and residual architectures emerged as remedies.
- ### Overview
- During backpropagation, gradients are products of many per-layer derivative terms; when those terms are consistently smaller than one, the product decays towards zero.
- Saturating activations such as the logistic sigmoid and hyperbolic tangent have small derivatives over wide input ranges, amplifying the decay.
- The result is that parameters far from the output learn extremely slowly or not at all, preventing the network from capturing long-range structure.
- Recognising and mitigating this problem was a turning point that enabled training of much deeper and more capable models.
- ### Mechanisms
- Repeated multiplication of small Jacobian terms across depth or time drives the backward signal exponentially toward zero.
- Non-saturating activations such as ReLU keep derivatives near one over positive inputs, slowing the decay.
- Careful weight initialisation preserves signal variance across layers at the start of training.
- Residual connections and gated recurrent cells provide additive paths that let gradients flow without repeated attenuation.
- ### Applications
- Diagnosing training failures in very deep feedforward and convolutional networks.
- Motivating the design of LSTM and gated recurrent units for sequence modelling.
- Justifying residual connections in modern deep architectures.
- Informing initialisation and normalisation choices during model design.
- ### Provenance


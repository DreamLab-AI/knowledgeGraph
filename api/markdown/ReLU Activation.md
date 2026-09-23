
The Rectified Linear Unit (ReLU) is a nonlinear activation function defined as f(x) = max(0, x), outputting the input directly when positive and zero otherwise. Its simplicity, sparse activation, and non-saturating gradient for positive inputs make it the default activation in most deep neural networks, mitigating the vanishing-gradient problem. Variants such as Leaky ReLU and GELU address its dead-neuron limitation.

- ### Content
  - ReLU is computationally cheap and preserves a constant gradient of 1 for positive inputs, accelerating convergence relative to sigmoid/tanh. Its drawback is the dying-ReLU problem, where neurons stuck in the negative region stop learning; Leaky ReLU, PReLU, ELU, and GELU were introduced to maintain non-zero gradients.


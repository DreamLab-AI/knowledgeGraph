
The forward pass is the computation that propagates input data through the layers of a neural network to produce an output, applying weighted sums, biases and activation functions in sequence. It evaluates the network's current function and, during training, produces the predictions against which the loss is measured. The intermediate activations it computes are retained so that the subsequent backward pass can calculate gradients.

- The forward pass propagates inputs through a [[Neural Network]] to produce an output, applying [[Matrix Multiplication]] and an [[Activation Function]] layer by layer. It produces predictions for the [[Loss Function]] and the activations later consumed by [[Backpropagation]].
- ### Overview
- A neural network is a parameterised function; the forward pass is the act of evaluating that function on a given input.
- During inference the forward pass alone produces the answer; during training it produces the prediction whose error drives learning.
- Because the backward pass reuses intermediate activations, the forward pass typically caches them, trading memory for the ability to compute exact gradients.
- ### Mechanisms
- Layer composition: weighted sums and biases followed by activations.
- Tensor operations: matrix multiplications mapped to accelerated hardware.
- Activation caching: storing intermediates for the backward pass.
- Batching: processing many examples together for throughput.
- ### Applications
- Producing predictions during model inference.
- Computing loss during training as a precursor to backpropagation.
- Serving deployed models at scale on GPU and accelerator hardware.
- ### Provenance


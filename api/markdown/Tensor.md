A tensor is a multidimensional array of numerical values characterised by a rank, a shape and a data type, generalising scalars, vectors and matrices to arbitrary dimensions. In machine learning it is the fundamental data structure that holds inputs, parameters, activations and gradients as they flow through a model. Tensor operations such as contraction, broadcasting and elementwise functions are the computational primitives executed on accelerators during training and inference.

### Overview

- A tensor is described by its rank (number of dimensions), its shape (size along each dimension) and its element data type.
- Frameworks represent computations as a [[Computation Graph]] of tensor operations, enabling [[Automatic Differentiation]].
- Operations like matrix multiplication, contraction, reshaping and broadcasting compose into the layers of modern models.

### Key aspects

- Rank, shape and dtype fully characterise a tensor.
- Broadcasting aligns shapes for elementwise operations without copying data.
- Contraction generalises matrix multiplication across arbitrary axes.
- Device placement determines whether operations run on CPU or accelerator.

### Applications

- Storing batches of training examples and model parameters.
- Driving forward and backward passes via [[Backpropagation]].
- Implementing models in [[TensorFlow]] and [[PyTorch]].
- Mapping dense linear algebra onto a [[Tensor Processing Unit]].

### Provenance


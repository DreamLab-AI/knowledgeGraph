- ### Definition
  - A tensor is a multidimensional array generalising scalars, vectors and matrices, rooted in [[Linear Algebra]].
  - It is the carrier of data through a [[Neural Network]], holding inputs, weights, activations and gradients.
  - Tensor operations are executed efficiently on a [[GPU]] or [[Tensor Processing Unit]] and form the core of [[Deep Learning]].

- ### Overview
  - A tensor is described by its rank (number of dimensions), its shape (size along each dimension) and its element data type.
  - Frameworks represent computations as a [[Computation Graph]] of tensor operations, enabling [[Automatic Differentiation]].
  - Operations like matrix multiplication, contraction, reshaping and broadcasting compose into the layers of modern models.

- ### Key aspects
  - Rank, shape and dtype fully characterise a tensor.
  - Broadcasting aligns shapes for elementwise operations without copying data.
  - Contraction generalises matrix multiplication across arbitrary axes.
  - Device placement determines whether operations run on CPU or accelerator.

- ### Applications
  - Storing batches of training examples and model parameters.
  - Driving forward and backward passes via [[Backpropagation]].
  - Implementing models in [[TensorFlow]] and [[PyTorch]].
  - Mapping dense linear algebra onto a [[Tensor Processing Unit]].

- ### Relationships
  - subClassOf:: [[Linear Algebra]]
  - hasPart:: [[Computation Graph]]
  - partOf:: [[Linear Algebra]]
  - partOf:: [[Neural Network]]
  - uses:: [[GPU]]
  - uses:: [[Tensor Processing Unit]]
  - dependsOn:: [[Linear Algebra]]
  - enables:: [[Deep Learning]]
  - enables:: [[Backpropagation]]
  - enables:: [[Automatic Differentiation]]
  - supports:: [[Neural Network]]
  - supports:: [[Computation Graph]]
  - implements:: [[TensorFlow]]
  - implements:: [[PyTorch]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Automatic Differentiation]]
  - relatedTo:: [[Tensor Processing Unit]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
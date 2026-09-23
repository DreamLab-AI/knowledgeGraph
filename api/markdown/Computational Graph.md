
A computational graph is a directed acyclic graph in which nodes represent mathematical operations or variables and edges represent the flow of data (tensors) between them. It provides the structural backbone for evaluating composite functions and for computing gradients through automatic differentiation. Deep learning frameworks construct such graphs either statically ahead of execution or dynamically during the forward pass, then traverse them in reverse to propagate derivatives.

- A [[Computational Graph]] is a directed acyclic graph whose nodes are operations or variables and whose edges carry [[Tensor]] data between them.
- It is the structural representation that [[Automatic Differentiation]] traverses to compute gradients for [[Backpropagation]].
- Modern [[Deep Learning Framework]] systems build a [[Neural Network]] as a computational graph and execute it both forward and backward.
- ### Overview
- The computational graph decomposes a complex composite function into a sequence of elementary operations, each with a known local derivative.
- During the forward pass, intermediate values are computed and (when needed) cached at each node.
- During the backward pass, the chain rule is applied node by node in reverse topological order to accumulate gradients with respect to every parameter.
- Frameworks differ in when the graph is materialised: static graphs are defined and compiled before any data flows, whereas dynamic (define-by-run) graphs are constructed on the fly as the forward computation proceeds.
- ### Key aspects
- Nodes encode operations such as matrix multiplication, addition, activation functions and reductions, while leaf nodes hold parameters and inputs.
- Edges represent data dependencies and dictate the valid execution order through topological sorting.
- The acyclic property guarantees a well-defined evaluation order and unambiguous gradient flow.
- Reverse-mode traversal makes gradient computation cost proportional to a single forward pass, which is the property that makes large-scale training feasible.
- Graph-level optimisations such as operator fusion, constant folding and memory planning are applied to improve throughput.
- ### Applications
- Training of every contemporary [[Neural Network]] relies on a computational graph to derive parameter updates.
- Symbolic and source-to-source differentiation tools emit graphs to generate efficient derivative code.
- Compiler stacks lower computational graphs to hardware-specific kernels for accelerators.
- Graph rewriting underpins inference optimisation, quantisation and deployment pipelines.
- ### Provenance


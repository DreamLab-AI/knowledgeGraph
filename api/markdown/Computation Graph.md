
A Computation Graph is a directed graph in which nodes represent operations or variables and edges represent the flow of data (typically tensors) between them. It is the central abstraction in modern machine learning frameworks, where a model's forward pass is expressed as a graph and gradients are computed by traversing it in reverse via automatic differentiation. Graphs may be built statically ahead of execution or dynamically as code runs, and they enable optimisation, scheduling and hardware acceleration.

- ### Overview
	- Expressing a model as a graph decouples the mathematical specification from how it is scheduled and executed on hardware.
	- In the forward pass, data flows from input nodes through operation nodes to outputs; each operation records what it needs to compute its local derivative.
	- In the backward pass, the framework walks the graph in reverse, applying the chain rule to accumulate gradients with respect to every parameter.
	- Static graphs are defined fully before execution, allowing whole-graph optimisation; dynamic (define-by-run) graphs are constructed as code executes, easing debugging and control flow.
	- Graph-level optimisations include operator fusion, constant folding, memory planning and device placement.
- ### Mechanisms
	- Nodes and edges: operation nodes consume input edges and emit output edges, while variable nodes hold parameters and activations.
	- Automatic differentiation: the framework attaches a gradient function to each operation so the reverse pass is mechanical and exact.
	- Execution engines: a scheduler topologically orders nodes and dispatches them to CPU or accelerator kernels, enabling [[GPU Acceleration]].
	- Serialisation: graphs can be exported to interchange formats such as [[ONNX]] for portability across runtimes.
	- Sub-graph reuse: shared sub-graphs avoid recomputation and reduce memory pressure.
- ### Applications
	- Training and inference in [[TensorFlow]] and [[PyTorch]] and other [[Machine Learning Framework]]s.
	- Compiling models for specialised accelerators via graph optimisation passes.
	- Cross-framework model exchange and deployment through [[ONNX]].
	- Implementing [[Gradient Descent]] based optimisation over arbitrary differentiable programs.
- ### Provenance


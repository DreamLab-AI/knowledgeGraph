
An Implicit Neural Representation (INR) is a method of encoding continuous signals—such as 3D shapes, scenes, or images—as the weights of a neural network rather than as discrete grids or meshes. The network acts as a function that maps spatial or temporal coordinates to signal values, enabling theoretically infinite resolution. INRs are widely used in novel-view synthesis, shape reconstruction, and physics simulation.

- ### Overview
  - Traditional 3D representations (meshes, voxels, point clouds) are discrete and resolution-bound.
  - INRs represent signals as continuous functions parameterised by neural network weights, removing grid constraints.
  - A [[Multilayer Perceptron]] typically serves as the backbone, trained via [[Gradient Descent]] on observed samples.
  - [[Positional Encoding]] (e.g., Fourier features) is critical for enabling networks to capture high-frequency detail.

- ### Key Aspects
  - **Coordinate mapping**: the network f(x,y,z) → value is queried at arbitrary positions.
  - **Compactness**: complex scenes can be stored as network weights rather than raw voxel buffers.
  - **Differentiability**: the implicit function is fully differentiable, enabling [[Differentiable Rendering]] pipelines.
  - **Scalability**: quality improves with network capacity without changing the representational paradigm.

- ### Mechanisms
  - Training minimises reconstruction loss between network outputs and ground-truth observations.
  - [[Positional Encoding]] lifts low-dimensional coordinates into higher-frequency Fourier bases.
  - Variants include occupancy networks, signed-distance networks, and density field networks.
  - Meta-learning approaches (e.g., MAML) allow fast adaptation to new scenes.

- ### Applications
  - [[Novel View Synthesis]] from sparse images (NeRF-family methods).
  - [[3D Reconstruction]] from multi-view or depth data.
  - Compression of audio, video, and scientific simulation outputs.
  - [[Spatial Computing]] asset streaming and level-of-detail generation.
  - Physics simulation surrogate models encoding solution fields implicitly.

- ### Provenance


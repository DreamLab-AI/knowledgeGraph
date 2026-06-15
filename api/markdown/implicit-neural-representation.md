- ### Definition
  - [[Implicit Neural Representation]] encodes continuous signals as neural network weights rather than discrete data structures.
  - The network maps [[Coordinate-Based Network]] inputs (coordinates) to output values such as colour, density, or signed distance.
  - Closely related to [[Neural Radiance Field]] (NeRF) and [[Signed Distance Function]] representations.
  - Enables resolution-independent reconstruction, contrasting with [[Voxel Grid]] and [[Point Cloud]] approaches.

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

- ### Relationships
  - relatedTo:: [[Neural Radiance Field]]
  - relatedTo:: [[3D Gaussian Splatting]]
  - relatedTo:: [[Signed Distance Function]]
  - dependsOn:: [[Neural Network]]
  - dependsOn:: [[Coordinate-Based Network]]
  - requires:: [[Differentiable Rendering]]
  - requires:: [[Positional Encoding]]
  - enables:: [[Novel View Synthesis]]
  - enables:: [[3D Reconstruction]]
  - uses:: [[Multilayer Perceptron]]
  - uses:: [[Gradient Descent]]
  - contrastsWith:: [[Voxel Grid]]
  - contrastsWith:: [[Point Cloud]]
  - supports:: [[Spatial Computing]]
  - supports:: [[3D Content Generation]]
  - relatedTo:: [[Generative AI]]

- ### Provenance
  - updated:: 2026-06-15
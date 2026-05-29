- ### Definition
  - Differentiable rendering is a class of rendering algorithms that formulate the image formation process in a manner that admits the computation of gradients of pixel values with respect to scene parameters — including geometry, materials, lighting, and camera pose. By backpropagating through the rendering pipeline, these methods enable gradient-based optimisation to reconstruct 3D scenes from 2D observations, train neural scene representations, and perform inverse rendering. Differentiable rendering forms a bridge between classical computer graphics and deep learning, enabling end-to-end training of 3D-aware generative and perception models.

- ### Semantic Classification
  - owl-class:: differentiable-rendering:Differentiable Rendering
  - owl-role:: Concept

- ### Relationships
  - enables [[3D Reconstruction]]
  - enables [[Neural Radiance Field]]
  - uses [[Gradient Descent]]
  - uses [[Ray Tracing]]
  - relatedTo [[Gaussian Splatting]]
  - relatedTo [[Computer Vision]]

- ### Content
  - Differentiable rendering addresses the fundamental challenge of making image synthesis compatible with gradient-based optimisation. Traditional rendering pipelines involve operations — such as rasterisation and visibility determination — that are discontinuous or stochastic, preventing straightforward differentiation. Differentiable rendering resolves this by reformulating discontinuous operations using soft approximations, stochastic estimates, or entirely alternative rendering paradigms.
  - A key application is inverse rendering: given a set of 2D images of a scene, recovering the underlying 3D geometry, surface materials (BRDFs), and illumination by minimising the discrepancy between rendered and observed images. This capability is central to Neural Radiance Fields (NeRF), in which a continuous volumetric scene function is optimised by differentiating through a volumetric rendering integral. Subsequent work such as 3D Gaussian Splatting replaces the implicit neural representation with explicit Gaussian primitives, achieving real-time rendering while retaining differentiability.
  - Differentiable rendering also enables novel training regimes for Computer Vision models, allowing perception systems to be trained with 3D-consistent supervision signals derived from rendering. Frameworks such as PyTorch3D, NVDiffRast, and Kaolin provide differentiable rendering primitives compatible with major deep learning libraries. The technique is foundational to generative 3D modelling, object pose estimation, and applications in spatial computing, autonomous driving, and augmented reality content creation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
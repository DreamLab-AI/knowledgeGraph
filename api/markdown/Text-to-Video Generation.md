
Text-to-video generation is a generative-AI task in which a model synthesises a coherent video clip directly from a natural-language description. It extends text-to-image diffusion and transformer methods with temporal modelling so that motion, object permanence, and scene consistency hold across frames. The field advanced rapidly with large latent-diffusion and spatiotemporal-transformer models capable of producing seconds of high-fidelity footage from a prompt.

- ### Content
  - These models add a temporal dimension to image generation, learning to produce frame sequences that are consistent in motion, lighting, and object identity over time, usually in a compressed latent space to keep computation tractable. Architectures combine diffusion or flow-matching objectives with spatiotemporal attention or 3D convolutions, and recent systems condition on additional signals such as reference images or camera trajectories. Open challenges include long-horizon coherence, controllability, and the substantial compute required for both training and sampling.



Stable Diffusion training is the process of fitting a latent text-to-image diffusion model by teaching a denoising network to reverse a gradual noising process in a compressed latent space, conditioned on text embeddings. Operating in latent rather than pixel space sharply reduces compute and memory, while techniques such as fine-tuning, LoRA, and DreamBooth adapt a base model to new styles or subjects. It underpins much of open-weight generative image and video tooling.

- ### Content
  - Working in latent space rather than pixels cuts compute and memory dramatically, making both full training and lightweight adaptation feasible on accessible hardware, a workflow popularised through educational efforts like [[Fast.ai]]. Fine-tuning methods such as LoRA and DreamBooth specialise base checkpoints to new subjects or styles, and the same diffusion training principles extend into [[Proprietary AI Video]] systems that generate temporally coherent frames.


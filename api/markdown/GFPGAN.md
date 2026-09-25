GFPGAN (Generative Facial Prior GAN) is a practical deep-learning model for blind face restoration that leverages the rich facial priors encoded in a pretrained StyleGAN to recover realistic detail from degraded portraits. It restores resolution, removes artefacts, and reconstructs plausible facial features in a single forward pass. It is widely used in photo restoration and as a face-enhancement component in image and video pipelines.

### Content

- The model injects features from a degraded input into a pretrained generator via spatial feature transforms, balancing fidelity to the original identity against perceptual realism. It handles compression artefacts, blur, and low resolution, and runs efficiently enough for batch and interactive use. As a restoration tool it is dual-use, since the same enhancement can improve synthetic or manipulated faces.


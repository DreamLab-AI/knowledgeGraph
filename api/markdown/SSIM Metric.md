
The Structural Similarity Index (SSIM) is a perceptual image-quality metric that compares two images by modelling luminance, contrast, and structural correlation over local windows, rather than measuring pixel-wise error alone. It correlates better with human judgement of quality than mean squared error or PSNR, producing a score between -1 and 1 where 1 indicates identical structure. It is widely used to evaluate compression, restoration, and generative reconstruction.

- ### Content
  - Computed over sliding local windows and combined into a single index in the range -1 to 1, SSIM penalises structural distortion that PSNR overlooks. It is a standard quality signal for [[Image and Video Restoration]] and for [[Bandwidth Adaptation]] schemes that must trade bitrate against perceived fidelity, guiding rate-control and model-training objectives toward perceptually faithful output.


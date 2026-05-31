- ### Definition
  - Image-to-image is a class of generative tasks where a model transforms an input image into an output image, conditioned on the input and often a text prompt. Examples include style transfer, editing and translation between domains.

- ### Semantic Classification
  - owl-class:: generative-ai:ImagetoImage
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Image Generation]]
  - bridges-to:: [[Stable Diffusion]]
  - requires:: [[Diffusion Model]]
  - enables:: [[Inpainting]]

- ### Content
  - Image-to-image generation conditions a model on an existing image to produce a modified version, ranging from changing artistic style to translating between domains such as sketches and photographs. Diffusion models perform the task by partially noising the input and denoising it under guidance from a prompt or reference.
  - Applications include editing, super-resolution, colourisation and inpainting, where part of an image is regenerated. Tools built on Stable Diffusion expose image-to-image workflows alongside text-to-image generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
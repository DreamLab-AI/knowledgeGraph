Textual inversion is a fine-tuning technique for text-to-image diffusion models that learns a new embedding vector for a placeholder token from a handful of example images, capturing a specific subject or style without altering the model weights. The learned pseudo-word can then be composed into prompts like any ordinary token. It is lightweight and shareable because only a small embedding, not the full network, is trained.

### Content

- Rather than updating the model, textual inversion optimises a single embedding vector so that the placeholder pseudo-word reconstructs the example images when used in a prompt. The result is a tiny artefact, often a few kilobytes, that can be shared and combined with other prompts and even other learned concepts. Because the base model is frozen, it is far cheaper than full fine-tuning but generally captures concepts with less fidelity than weight-editing methods like DreamBooth or LoRA.


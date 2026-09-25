InstantID is a diffusion-model technique for identity-preserving image generation that synthesises new images of a specific person from a single reference photograph, without per-subject fine-tuning. It combines a face encoder with an IdentityNet adapter that injects facial identity and spatial landmarks into a text-to-image diffusion backbone. While powerful for personalised avatars and stylisation, its zero-shot fidelity also raises misuse concerns around impersonation and synthetic media.

### Content

- The method extracts a face embedding and uses an IdentityNet to inject identity plus landmark guidance during denoising, achieving high likeness in a single pass. Its low barrier to producing realistic likenesses makes provenance and consent controls important.


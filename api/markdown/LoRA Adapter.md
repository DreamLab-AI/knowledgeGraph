A LoRA adapter is a small set of low-rank matrices trained via Low-Rank Adaptation and inserted alongside a frozen pretrained model's weight matrices to specialise its behaviour without updating the original parameters. Because the adapter contains only a small fraction of the base model's parameter count, it can be trained, stored, and swapped cheaply, allowing many task- or style-specific adapters to share a single base model. LoRA adapters are widely used to customise diffusion and language models for particular styles, subjects, or domains.

### Provenance


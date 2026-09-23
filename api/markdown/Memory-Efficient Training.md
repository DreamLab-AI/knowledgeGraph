
Memory-efficient training encompasses techniques that reduce the accelerator memory required to train large neural networks, allowing larger models or batch sizes to fit within fixed hardware budgets. Approaches include gradient checkpointing, which recomputes intermediate activations during the backward pass instead of storing them, and parameter-efficient methods such as LoRA and DoRA, which train small low-rank adapters instead of full weight matrices. These techniques trade additional compute or reduced expressivity for substantially lower peak memory use during model training.

- ### Provenance


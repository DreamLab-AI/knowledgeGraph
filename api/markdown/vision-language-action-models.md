- ### Definition
  - [[Vision-Language-Action Models]] are foundation models that map visual observations and language instructions to executable actions for embodied agents. They extend the [[Vision-Language Model]] architecture with an action-generation capability for robotic control.
- ### Relationships
  - VLAs build on [[Multimodal Learning]] to fuse perception and language and are commonly trained via [[Imitation Learning]] from demonstrations. They are a central method within [[Robot Learning]] and the broader pursuit of [[Embodied AI]], where the goal is generalist policies that follow open-ended commands.
- ### Content
  - Architecturally, a VLA couples a pretrained vision-language backbone with an action decoder that emits low-level control signals or discretised action tokens. Pretraining on internet-scale vision-language data is followed by fine-tuning on robot trajectories, transferring semantic and spatial priors into the control policy.

  - The central research challenge is generalisation across embodiments and environments from limited robot data. Approaches include cross-embodiment datasets that pool trajectories from many robot platforms, and action tokenisation schemes that let a single transformer policy span perception, language, and control within one autoregressive model.
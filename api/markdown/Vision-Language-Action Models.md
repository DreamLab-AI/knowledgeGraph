
Vision-language-action (VLA) models are foundation models that jointly process visual observations and natural-language instructions to produce executable action sequences for embodied agents such as robots. Extending vision-language models with an action-generation head, VLAs are trained on large datasets pairing perception and instructions with demonstrated behaviour, enabling generalisation across tasks, objects, and embodiments. They represent a convergence of multimodal learning and robotics, aiming for generalist policies that follow open-ended commands rather than executing narrowly scripted skills.

- ### Content
  - Architecturally, a VLA couples a pretrained vision-language backbone with an action decoder that emits low-level control signals or discretised action tokens. Pretraining on internet-scale vision-language data is followed by fine-tuning on robot trajectories, transferring semantic and spatial priors into the control policy.

  - The central research challenge is generalisation across embodiments and environments from limited robot data. Approaches include cross-embodiment datasets that pool trajectories from many robot platforms, and action tokenisation schemes that let a single transformer policy span perception, language, and control within one autoregressive model.


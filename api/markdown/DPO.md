- ### OntologyBlock
  id:: dpo-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8023
	- preferred-term:: DPO
	- status:: active
	- public-access:: true
	- definition:: Direct Preference Optimization (DPO) is a technique for aligning language models with human preferences that eliminates the need for explicit reward modeling and reinforcement learning used in traditional RLHF. DPO reparameterizes the reward function to directly optimize the model policy using a simple classification loss on preference pairs, achieving comparable or superior alignment results with significantly simpler implementation, greater stability, and improved computational efficiency.
	- maturity:: reviewed
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Dpo

### Key Resources
- [Preference Tuning LLMs with Direct Preference Optimization Methods](https://huggingface.co/blog/pref-tuning) - HuggingFace tutorial
- [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290) - Original paper

### Key Concepts
- **Preference Pairs**: Training data consisting of preferred vs rejected responses for the same prompt
- **KL-Divergence Constraint**: Prevents model from drifting too far from original behavior
- **Implicit Reward Model**: DPO treats the language model itself as an implicit reward function

### Comparison with RLHF
- RLHF: Two-stage process (train reward model, then RL fine-tuning with PPO)
- DPO: Single-stage optimization directly on preference data
- DPO advantages: Simpler implementation, more stable training, no reward hacking

### Best Practices
- Recommended pipeline: Supervised Fine-Tuning (SFT) first, then DPO refinement
- Robust variants (WDPO, KLDPO) address sensitivity to preference distribution shift

### Applications
- LLM alignment with human preferences
- Diffusion model alignment (Diffusion-DPO for image generation)
- Reducing harmful outputs while maintaining helpfulness

### Relationships
- is-subclass-of:: [[TrainingMethod]]
- related-to:: [[Large language models]]
- related-to:: [[Model Training]]
- related-to:: [[Artificial Intelligence]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub with technical definition
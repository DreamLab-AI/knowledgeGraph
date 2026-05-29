- ### Definition
  Human Preference refers to the explicit or implicit judgements made by human evaluators expressing which AI outputs are more aligned with human values, intentions, or quality criteria. These preference signals, collected through comparative annotation tasks, are used as training signal in reinforcement learning from human feedback (RLHF) and direct preference optimisation methods. Annotator diversity and agreement rates critically determine how faithfully the resulting reward model captures genuine human intent.

- ### Relationships
  - requires:: [[Human Feedback]], [[Preference Learning]]
  - enables:: [[Reinforcement Learning from Human Feedback]], [[Reward Model]], [[Value Alignment]]
  - uses:: [[Reinforcement Learning]], [[Fine Tuning]]
  - supports:: [[AI Alignment]], [[AI Safety]]
  - relatedTo:: [[RLHF]], [[Fairness]], [[Human Computer Interaction]]
  - is-subclass-of:: [[AI Governance and Ethics]], [[Neural Network Component]]

- ### Content
  Human preference data is the empirical foundation of the RLHF paradigm that has come to dominate instruction-following and alignment training for large language models. Collecting preferences typically involves presenting human annotators with two or more model outputs generated from the same prompt and asking them to select the preferred response along dimensions such as helpfulness, accuracy, safety, and tone. The resulting binary or ranked preference pairs are used to train a reward model—a neural network that learns to predict the scalar preference score for any model output—which then provides the reward signal for a policy gradient optimisation step fine-tuning the base language model.

  The quality of preference data depends on several factors that introduce systematic biases if unaddressed. Annotator pool composition shapes which cultural norms and values are encoded: annotators drawn from a narrow demographic produce preferences that may not generalise across languages, cultures, or use cases. Position bias—the tendency to prefer whichever response appears first in a comparison—and verbosity bias—preferring longer responses regardless of accuracy—are well-documented artefacts of the comparative annotation format. Annotator agreement is typically measured through inter-annotator agreement metrics such as Fleiss' kappa; low agreement signals ambiguous or genuinely contested preference criteria requiring clarification or additional annotation guidelines.

  Recent advances extend preference learning beyond binary comparison to constitutional AI approaches, where a model critiques and revises its own outputs according to explicitly stated principles, and to direct preference optimisation (DPO), which bypasses the reward model intermediary entirely by directly optimising the policy against preference pairs. These methods share the core assumption that human preferences, when aggregated across sufficiently diverse evaluators and prompt distributions, constitute a reliable proxy for the normative standards to which AI systems should be held.

  The relationship between human preferences and deeper human values remains contested. Preferences are revealed by choices within constrained comparison sets; they may reflect cognitive shortcuts, framing effects, and social desirability bias rather than considered ethical judgements. This gap motivates research into more deliberative preference elicitation methods, debate-based evaluation, and scalable oversight frameworks that can capture the preferences of users who are not domain experts in the tasks being evaluated.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
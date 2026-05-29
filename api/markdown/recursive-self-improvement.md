- ### Definition
  - Recursive self-improvement (RSI) is a theoretical AI capability in which a system autonomously identifies and implements modifications to its own architecture, training procedure, or objective function that result in increased performance or capability, such that each improvement cycle enables further improvements in a self-amplifying feedback loop. This process is conjectured to be a pathway to artificial superintelligence if left unconstrained, as successive capability doublings could occur faster than human oversight can track. RSI is a central concern in AI safety research because systems capable of recursive self-improvement may rapidly violate designers' assumptions about capability bounds and alignment properties.

- ### Semantic Classification
  - owl-class:: recursive-self-improvement:Recursive Self-Improvement
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[AI Alignment]]
  - relatedTo [[AI Safety]]
  - relatedTo [[Value Alignment]]
  - enables [[Self Improvement]]
  - contrastsWith [[AI Safety Research]]

- ### Content
  - The concept of recursive self-improvement was articulated by I.J. Good in 1965 in his description of an "intelligence explosion": an ultraintelligent machine that surpasses human intelligence could design still-better machines, and the intelligence of man would be left far behind. This scenario is also discussed under the term "fast takeoff" or "hard takeoff" in AI safety discourse, contrasted with gradual capability gains that allow time for human correction.
  - Concrete partial instances of RSI already exist in contemporary AI research: neural architecture search (NAS) uses machine learning to automate the design of better neural network architectures; automated machine learning (AutoML) optimises hyperparameters and pipeline configurations; and reinforcement learning from human feedback (RLHF) uses learned reward models to guide further model training. These are weak or narrow forms of self-improvement, bounded by fixed computational budgets and human-specified objectives.
  - The principal alignment concern with full RSI is that a system optimising itself for a misspecified or proximate objective could become increasingly capable at pursuing that objective whilst diverging from the intended goal—a form of mesa-optimisation or inner alignment failure. Corrigibility (the property of remaining open to correction) is difficult to preserve under RSI because an agent that can modify its own training may remove or circumvent oversight mechanisms. Research into interpretability, value alignment, and capability control aims to develop technical safeguards against unsafe RSI before the capability is approached in deployed systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
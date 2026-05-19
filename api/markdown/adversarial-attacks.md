- ### Definition
  - Adversarial Attacks are malicious techniques that exploit vulnerabilities in machine learning models by deliberately crafting deceptive input data to cause incorrect predictions, misclassifications, or unintended behaviors, often through subtle perturbations imperceptible to humans but significant to AI systems.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AdversarialAttacks
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[AI Security Threats]]
  - requires:: [[Knowledge of Target Model]], [[Crafted Perturbations]]
  - enables:: [[Model Evasion]], [[System Manipulation]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

  ### Technical Details
  Key components include:
  - **Adversarial Examples**: Inputs manipulated to cause incorrect outputs while appearing normal to humans
  - **Evasion Attacks**: Subtle modifications fooling trained models without triggering detection
  - **Poisoning Attacks**: Corruption of training data to embed exploitable vulnerabilities
  - **Prompt Injections**: Instructions hidden in data causing generative AI to bypass security protocols

  ### NIST Taxonomy (2024)
  NIST AI 100-2 establishes taxonomy of AML concepts including ML lifecycle attack stages, attacker goals, and mitigation approaches.

  ### Defense Strategies
  Adversarial training, ensemble methods, input validation, continuous model validation, and multi-layered defense approaches.

- ### Provenance
  - sources:: [[NIST AI 100-2]], [[NIST Taxonomy]]
  - migration-date:: 2026-04-26T00:00:00Z
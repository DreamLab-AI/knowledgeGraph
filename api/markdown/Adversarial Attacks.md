- ### OntologyBlock
  id:: adversarial-attacks-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9760
	- source-domain:: mv
	- preferred-term:: Adversarial Attacks
	- status:: active
	- definition:: Adversarial Attacks are malicious techniques that exploit vulnerabilities in machine learning models by deliberately crafting deceptive input data to cause incorrect predictions, misclassifications, or unintended behaviors, often through subtle perturbations imperceptible to humans but significant to AI systems.
	- owl:class:: mv:AdversarialAttacks
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[AI Security Threats]]
	- enables:: [[Model Evasion]], [[System Manipulation]]
	- requires:: [[Knowledge of Target Model]], [[Crafted Perturbations]]
	- #### Relationships
	  id:: adversarial-attacks-relationships
	  collapsed:: true

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


Reflexion is a framework for language-model agents that converts feedback from failed attempts into reflective verbal self-critiques stored in an episodic memory, which condition subsequent attempts. Rather than updating model weights, it reinforces behaviour through natural-language reflections, enabling rapid trial-and-error learning. It improves agent performance on decision-making, reasoning, and coding benchmarks across repeated episodes.

- ### Content
  - After each trial the agent generates a reflection explaining what went wrong, appends it to an episodic buffer, and uses the accumulated reflections to guide future actions. Because learning happens in language rather than parameters, Reflexion adapts quickly without fine-tuning and complements reasoning and self-correction techniques.


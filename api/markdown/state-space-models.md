- ### Definition
  - State space models are sequence models that maintain a hidden state evolving over time according to linear dynamics, used as an alternative to attention for long sequences. Recent deep learning variants make the dynamics input-dependent to capture context.

- ### Semantic Classification
  - owl-class:: deep-learning:StateSpaceModels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[State Space Model]]
  - bridges-to:: [[Recurrent Neural Network]], [[Attention Mechanisms]]
  - requires:: [[Neural Network]]
  - enables:: [[Generative Models]]

- ### Content
  - State space models describe a sequence through a continuous or discrete hidden state that updates with each input, offering an efficient way to model long-range dependencies. Deep learning variants such as the structured and selective designs scale linearly with sequence length, in contrast to the quadratic cost of full attention.
  - These models combine properties of recurrent networks with parallel training, and have been proposed as competitive backbones for language and other long-sequence tasks. They are an active alternative to transformer attention for handling very long inputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
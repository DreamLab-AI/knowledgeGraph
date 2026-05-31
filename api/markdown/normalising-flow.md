- ### Definition
  - A normalising flow is a generative model that transforms a simple base probability distribution into a complex one through a sequence of invertible mappings, allowing exact likelihood computation.

- ### Semantic Classification
  - owl-class:: machine-learning:NormalisingFlow
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Model]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Probabilistic Model]]

- ### Content
  - A normalising flow applies a chain of invertible and differentiable transformations to samples from a base distribution such as a standard normal. Because each transformation is invertible, the change of variables formula gives the exact density of generated samples.
  - This exact likelihood property distinguishes flows from generative adversarial networks and variational autoencoders. Architectures such as RealNVP and Glow design transformations whose Jacobian determinant is efficient to compute.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
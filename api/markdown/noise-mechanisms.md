- ### Definition
  - Noise mechanisms are the algorithmic primitives in differential privacy that add calibrated random perturbation to query results or data so that the contribution of any single individual is statistically masked. The amount of noise is calibrated to the query's sensitivity and the desired privacy budget, balancing privacy protection against the accuracy of released statistics. The principal mechanisms are the Laplace, Gaussian, and exponential mechanisms, each suited to particular query types and privacy definitions.
  - Core related concepts: [[Differential Privacy]], [[Laplace Mechanism]], [[Gaussian Mechanism]], [[Privacy Budget]], [[Data Privacy]].

- ### Overview
  - Noise mechanisms are the operational heart of differential privacy. By perturbing outputs with random noise drawn from a carefully chosen distribution, they guarantee that an observer cannot tell with confidence whether any particular individual's record was present in the dataset. The calibration depends on sensitivity, how much one record can change the output, and on the privacy parameter epsilon, which bounds the allowed information leakage.

- ### Mechanisms
  - Laplace mechanism: adds noise from a Laplace distribution scaled to the L1 sensitivity, providing pure epsilon-differential privacy for numeric queries.
  - Gaussian mechanism: adds Gaussian noise scaled to the L2 sensitivity, providing approximate (epsilon, delta)-differential privacy and composing well across many queries.
  - Exponential mechanism: selects from a discrete set of outputs with probability weighted by a utility score, extending differential privacy to non-numeric outputs.
  - Calibration: noise magnitude grows with sensitivity and shrinks with the privacy budget, making the accuracy-privacy trade-off explicit.

- ### Applications
  - Privacy-preserving release of aggregate statistics from sensitive databases.
  - Differentially private machine-learning training that bounds memorisation of individual records.
  - Census and survey publication where individual confidentiality is legally mandated.
  - Telemetry collection at scale where individual contributions must remain indistinguishable.

- ### Relationships
  - subClassOf:: [[Differential Privacy]]
  - partOf:: [[Differential Privacy]]
  - hasPart:: [[Laplace Mechanism]]
  - hasPart:: [[Gaussian Mechanism]]
  - uses:: [[Laplace Mechanism]]
  - uses:: [[Gaussian Mechanism]]
  - dependsOn:: [[Privacy Budget]]
  - dependsOn:: [[Sensitivity]]
  - enables:: [[Data Privacy]]
  - enables:: [[Privacy Preserving Technology]]
  - supports:: [[Data Anonymization]]
  - requires:: [[Privacy Budget]]
  - implements:: [[Differential Privacy]]
  - relatedTo:: [[Epsilon Differential Privacy]]
  - relatedTo:: [[Noise Injection]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
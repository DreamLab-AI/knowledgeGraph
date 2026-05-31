- ### Definition
  - Medical image synthesis is the use of generative models to produce artificial medical images, such as scans, for training data augmentation, modality translation, or privacy-preserving sharing.

- ### Semantic Classification
  - owl-class:: machine-learning:MedicalImageSynthesis
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Image Synthesis]]
  - bridges-to:: [[Generative Adversarial Network]]
  - requires:: [[Generative Model]], [[Medical Imaging]]

- ### Content
  - Medical image synthesis generates images for modalities such as MRI, CT, and X-ray. One application translates between modalities, for example producing a synthetic CT image from an MRI scan to support planning without an additional acquisition.
  - Synthetic images can augment limited training datasets and can be shared in place of patient scans to reduce privacy exposure, although clinical validation is required before synthetic data influences diagnosis.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
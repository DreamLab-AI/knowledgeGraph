- ### Definition
  - Instant-NGP (Instant Neural Graphics Primitives) is a method that uses a multi-resolution hash encoding to train and evaluate neural graphics representations such as neural radiance fields far faster than earlier approaches.

- ### Semantic Classification
  - owl-class:: metaverse:TELE060instantngp
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neural Rendering]]
  - bridges-to:: [[NeRF]]
  - requires:: [[Neural Radiance Fields]], [[Differentiable Rendering]]
  - enables:: [[Novel View Synthesis]]

- ### Content
  - Instant-NGP (Instant Neural Graphics Primitives) is a technique introduced by NVIDIA that accelerates neural graphics primitives, including neural radiance fields, by replacing large coordinate networks with a small network combined with a trainable multi-resolution hash encoding of spatial features. This reduces training of a radiance field from hours to seconds or minutes on a single GPU.
  - The hash encoding stores feature vectors in compact hash tables indexed by position at several resolutions, letting a small multilayer perceptron interpret them. The approach is used for neural radiance fields, signed distance functions and image fitting, and it underpins fast capture-to-render pipelines for telepresence and 3D reconstruction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
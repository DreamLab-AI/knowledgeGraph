- ### Definition
  - The AI Grounded Domain covers the connection of model representations and outputs to verifiable external referents such as sensor data, documents and physical context. Its scope includes grounding language in perception, citation and provenance, and the alignment of generated claims with sources of truth. It is a sub-area of the Artificial Intelligence Domain concerned with factual and perceptual grounding. The boundary excludes ungrounded generative behaviour, which is treated under the Generative AI Domain.

- ### Semantic Classification
  - owl-class:: aigrd:AIGroundedDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[AI Safety Domain]], [[Generative AI Domain]], [[Knowledge Representation Domain]]
  - has-part:: [[Symbol Grounding]], [[Multimodal Grounding]], [[Provenance Tracking]], [[Source Attribution]], [[Sensor Fusion]]
  - requires:: [[Knowledge Representation Domain]], [[Information Retrieval Domain]], [[Computer Vision Domain]]
  - enables:: [[Verifiable Generation]], [[Hallucination Reduction]], [[Context-Aware Reasoning]]

- ### Content
  - The AI Grounded Domain concerns the linkage between a system's internal representations and the external world they purport to describe. Its scope includes symbol grounding that ties tokens to referents, multimodal grounding that aligns language with perception, and provenance mechanisms that trace outputs back to sources. The boundary separates grounded behaviour from free generation, so a model that cites and verifies belongs here while one that generates without reference does not.
  - Member concepts include Symbol Grounding, Multimodal Grounding, Provenance Tracking, Source Attribution and Sensor Fusion. These rely on the Knowledge Representation Domain for structured referents, the Information Retrieval Domain for source access and the Computer Vision Domain for perceptual anchors.
  - The domain bridges to the AI Safety Domain, since grounding reduces fabricated claims, to the Generative AI Domain where retrieval augmentation supplies evidence, and to knowledge representation for the symbolic targets of grounding. It enables verifiable generation, reduction of hallucination and reasoning that respects context.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
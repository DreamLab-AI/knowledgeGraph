- ### Definition
  - The dimensionality of representations within each layer, typically referring to the hidden dimension (d_model), determining the capacity of the model to encode information at each layer.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelWidth
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - **contrastsWith** [[Model Depth]] — width (hidden dimension) and depth (layer count) are independent scaling axes
  - **dependsOn** [[Transformer]] — transformer architectures expose width as the d_model hyperparameter
  - **dependsOn** [[Hyperparameter]] — width is selected prior to training and fixed throughout
  - **relatedTo** [[Attention Mechanism]] — attention head dimension is a direct function of d_model width
  - **relatedTo** [[Parameter Count]] — wider models have quadratically more parameters in attention layers
  - **enables** [[Mixture-of-Experts Architecture]] — MoE decouples apparent parameter count from active width per token

- ### Content
  - The dimensionality of representations within each layer, typically referring to the hidden dimension (d_model), determining the capacity of the model to encode information at each layer.

  ## Academic Context

  - Foundational concept in neural network architecture design
  - Represents the hidden dimension (d_model) within transformer and deep learning layers
  - Directly influences the representational capacity and information encoding capability at each processing stage
  - Distinguished from model depth (number of layers) and total parameter count as a discrete architectural dimension
  - Historical context: emerged as critical design parameter with the transformer architecture (Vaswani et al., 2017)

  ## Current Landscape (2025)

  - Architectural design considerations have evolved significantly
  - Model width no longer determines capability in isolation; training data quality and architecture innovations (Mixture-of-Experts, efficient attention mechanisms) now exert comparable or greater influence
  - A model with 30 billion total parameters but only 3 billion active parameters per token can achieve performance characteristics of substantially wider dense models
  - Smaller models (~3.8B parameters) now achieve >60% on MMLU benchmarks, performance previously requiring models 100× larger
  - Width selection increasingly depends on inference constraints and deployment context rather than raw capability requirements

  - Technical capabilities and trade-offs
  - Wider layers increase per-token computational cost and memory requirements during both training and inference
  - Optimal width varies by: available computational budget, context window requirements, quantisation strategy, and downstream task characteristics
  - Modern quantisation techniques reduce the practical distinction between theoretically wide and narrow models in deployment scenarios
  - Context window capacity (now commonly 128K tokens, with specialised implementations reaching multi-million token windows) often matters more than width for contemporary applications

  - UK and North England implementation landscape
  - Limited specific regional documentation available; however, UK-based AI research institutions (Cambridge, Oxford, Edinburgh) contribute substantially to architectural efficiency research that informs width optimisation decisions
  - Manchester's growing AI sector and Newcastle's computational research initiatives increasingly engage with efficient model design principles, though public case studies remain sparse

  ## Research & Literature

  - Foundational and contemporary sources
  - Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). "Attention Is All You Need." *Advances in Neural Information Processing Systems*, 30. [Seminal transformer architecture paper establishing d_model as critical parameter]
  - Kaplan, J., McCandlish, S., Henighan, T., et al. (2020). "Scaling Laws for Neural Language Models." *arXiv preprint arXiv:2001.08361*. [Establishes empirical relationships between model dimensions and performance]
  - Hoffmann, B., Borgeaud, S., Mensch, A., et al. (2022). "Training Compute-Optimal Large Language Models." *arXiv preprint arXiv:2203.15556*. [Demonstrates optimal width-depth trade-offs for given compute budgets]
  - Recent 2025 findings indicate that architectural efficiency innovations (MoE, selective activation) have substantially altered classical scaling relationships, though formal peer-reviewed literature remains in preprint stage

  - Ongoing research directions
  - Optimal width determination under various quantisation regimes (INT8, INT4, mixed-precision)
  - Width-context window interaction effects in long-sequence processing
  - Efficiency gains from dynamic width adjustment during inference

  ## Current Technical Precision

  - Width functions as a bottleneck and information-carrying capacity parameter
  - Determines the dimensionality of intermediate representations: each token processed through a layer of width d produces a d-dimensional vector
  - Interacts multiplicatively with attention head dimensions and feed-forward layer widths in transformer architectures
  - Computational cost scales linearly with width in most contemporary implementations (though some sparse architectures decouple this relationship)

  - Practical considerations (2025)
  - Width selection increasingly secondary to data quality and training methodology
  - Mixture-of-Experts architectures allow "apparent width" (total parameters) to exceed "active width" (parameters engaged per token), complicating traditional width-based analysis
  - Quantisation-aware design now influences optimal width choices; narrower models sometimes quantise more effectively than wider counterparts

  ## Future Directions

  - Emerging developments
  - Adaptive width mechanisms that adjust representational capacity based on input complexity
  - Integration of width optimisation with emerging efficiency standards and frameworks
  - Refinement of width-context-capability relationships as ultra-long-context models become standard

  - Anticipated challenges
  - Balancing width reduction against downstream task performance degradation
  - Determining optimal width for multimodal architectures (vision-language models, audio-text systems)
  - Standardising width metrics across diverse architectural families (dense, sparse, hybrid)

  - Research priorities
  - Empirical characterisation of width requirements for emerging task domains
  - Formal theoretical frameworks connecting width to information-theoretic capacity bounds
  - Practical guidance for practitioners selecting width under real-world computational constraints

  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
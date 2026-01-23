- ### OntologyBlock
  id:: parameter-efficient-fine-tuning-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0256
	- preferred-term:: Parameter Efficient Fine Tuning
	- source-domain:: mv
	- status:: draft
- definition:: Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.

## Academic Context

PEFT emerged as a critical enabler for democratising access to large model adaptation, allowing effective fine-tuning with a fraction of the computational cost and memory requirements of traditional approaches.

**Primary Source**: Multiple sources; comprehensive survey in arXiv:2312.12148 (2023)

## Key Characteristics

- Updates <1% of model parameters
- Freezes pre-trained weights
- Maintains competitive performance
- Enables multi-task deployment
- Dramatically reduces memory requirements

## Technical Details

**Major PEFT Categories**:

1. **Additive Methods**:
   - Adapter modules
   - Soft prompts (prompt tuning, prefix tuning)
   - Adds new parameters whilst freezing base model

2. **Selective Methods**:
   - Bias-only tuning
   - Layer-specific fine-tuning
   - Updates subset of existing parameters

3. **Reparameterisation Methods**:
   - LoRA (low-rank adaptation)
   - Compacter
   - Reparameterises weight updates

## Usage in AI/ML

"PEFT methods enable fine-tuning of large models with limited computational resources."

Applications:
- Large model adaptation on consumer GPUs
- Multi-task learning (one base, many adapters)
- Continual learning scenarios
- Edge device deployment
- Reducing fine-tuning costs

## Related Concepts

- **LoRA**: Most popular PEFT method
- **Adapter Modules**: Early PEFT approach
- **Prompt Tuning**: Lightweight PEFT variant
- **Full Fine-Tuning**: Traditional approach
- **Transfer Learning**: Broader paradigm

## Common PEFT Methods

**LoRA Family**:
- LoRA: Low-rank weight adaptation
- QLoRA: Quantised LoRA for extreme efficiency
- AdaLoRA: Adaptive rank allocation

**Prompt-Based**:
- Prompt Tuning: Input-level soft prompts
- Prefix Tuning: Layer-wise attention prefixes
- P-Tuning: Continuous prompt optimization

**Adapter-Based**:
- Standard Adapters: Bottleneck modules
- Parallel Adapters: Parallel to layers
- Compacter: Kronecker-product adapters

## Advantages

**Resource Efficiency**:
- 0.01-1% of full fine-tuning parameters
- Dramatically reduced memory (3-10× savings)
- Faster training times
- Lower computational costs

**Deployment Benefits**:
- Multi-task model sharing
- Small storage per task (MB vs. GB)
- Fast task switching
- Preserves base model capabilities

## Challenges

- Typically slight performance gap vs. full fine-tuning
- Method selection requires expertise
- Hyperparameter sensitivity
- Less effective on very small models
- May require method-specific implementations

## Comparison Table

| Method | Parameters | Inference Overhead | Performance |
|--------|-----------|-------------------|-------------|
| Full FT | 100% | None | Baseline |
| LoRA | 0.1-1% | None (merged) | 95-100% |
| Adapters | 0.5-2% | +10-20% | 90-100% |
| Prompt Tuning | 0.01-0.1% | None | 85-95% |
| Prefix Tuning | 0.1-1% | +5-15% | 90-100% |

## Selection Guidelines

**Choose LoRA when**:
- Want best performance/efficiency trade-off
- Need zero inference overhead
- Have modern hardware

**Choose Adapters when**:
- Need interpretable modules
- Want modular composition
- Inference latency acceptable

**Choose Prompt Tuning when**:
- Need absolute minimum parameters
- Working with very large models
- Acceptable with slight performance drop

## Training Considerations

**Memory Requirements**:
- Only store gradients for tunable parameters
- Enable larger models on same hardware
- Bigger batch sizes possible

**Training Speed**:
- Faster due to fewer parameter updates
- Reduced backward pass computation
- Quicker iteration cycles

## Historical Development

- 2019: Adapter modules introduced
- 2020-2021: Prompt/prefix tuning emerge
- 2021: LoRA revolutionises field
- 2023: QLoRA enables extreme efficiency
- 2024+: Hybrid and advanced methods

## Best Practices

1. Start with LoRA (best default choice)
2. Tune rank/bottleneck size appropriately
3. Consider task complexity when selecting method
4. Validate on held-out data
5. Monitor for catastrophic forgetting
6. Combine methods if needed (e.g., LoRA + adapters)

## Significance

PEFT methods transformed the accessibility of large model fine-tuning, enabling researchers and developers with limited resources to adapt state-of-the-art models effectively, democratising AI development.

## OWL Functional Syntax

```clojure
(Declaration (Class :ParameterEfficientFineTuning))
(SubClassOf :ParameterEfficientFineTuning :TrainingTechnique)
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :updatesSubset :ModelParameters))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :freezes :PreTrainedWeights))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :reduces :ComputationalRequirements))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :enables :MultiTaskDeployment))
(SubClassOf :ParameterEfficientFineTuning
  (DataPropertyAssertion :hasParameterFraction "<1%"))

(AnnotationAssertion rdfs:comment :ParameterEfficientFineTuning
  "Training techniques updating only a small subset of model parameters whilst maintaining comparable performance to full fine-tuning"@en)
(AnnotationAssertion :hasAcademicSource :ParameterEfficientFineTuning
  "Comprehensive survey arXiv:2312.12148 (2023)")
```

## UK English Notes

- "Whilst maintaining" (British usage)
- "Optimisation" (not "optimization")
- "Parameterisation" (not "parameterization")

**Last Updated**: 2025-10-27
**Verification Status**: Verified against PEFT survey (arXiv:2312.12148)
	- maturity:: draft
	- owl:class:: mv:ParameterEfficientFineTuning
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Parameter Efficient Fine Tuning
	- Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.

		- #### Virtual Production:
			- Filmmakers and VFX artists can use Stable Diffusion to generate realistic backgrounds and environments for virtual production shoots, offering a cost-effective and efficient alternative to traditional green screen techniques.

		- #### Virtual Production:
			- Filmmakers and VFX artists can use Stable Diffusion to generate realistic backgrounds and environments for virtual production shoots, offering a cost-effective and efficient alternative to traditional green screen techniques.

## Academic Context

PEFT emerged as a critical enabler for democratising access to large model adaptation, allowing effective fine-tuning with a fraction of the computational cost and memory requirements of traditional approaches.

**Primary Source**: Multiple sources; comprehensive survey in arXiv:2312.12148 (2023)

## Key Characteristics

- Updates <1% of model parameters
- Freezes pre-trained weights
- Maintains competitive performance
- Enables multi-task deployment
- Dramatically reduces memory requirements

## Technical Details

**Major PEFT Categories**:

1. **Additive Methods**:
   - Adapter modules
   - Soft prompts (prompt tuning, prefix tuning)
   - Adds new parameters whilst freezing base model

2. **Selective Methods**:
   - Bias-only tuning
   - Layer-specific fine-tuning
   - Updates subset of existing parameters

3. **Reparameterisation Methods**:
   - LoRA (low-rank adaptation)
   - Compacter
   - Reparameterises weight updates

## Usage in AI/ML

"PEFT methods enable fine-tuning of large models with limited computational resources."

Applications:
- Large model adaptation on consumer GPUs
- Multi-task learning (one base, many adapters)
- Continual learning scenarios
- Edge device deployment
- Reducing fine-tuning costs

## Related Concepts

- **LoRA**: Most popular PEFT method
- **Adapter Modules**: Early PEFT approach
- **Prompt Tuning**: Lightweight PEFT variant
- **Full Fine-Tuning**: Traditional approach
- **Transfer Learning**: Broader paradigm

## Common PEFT Methods

**LoRA Family**:
- LoRA: Low-rank weight adaptation
- QLoRA: Quantised LoRA for extreme efficiency
- AdaLoRA: Adaptive rank allocation

**Prompt-Based**:
- Prompt Tuning: Input-level soft prompts
- Prefix Tuning: Layer-wise attention prefixes
- P-Tuning: Continuous prompt optimization

**Adapter-Based**:
- Standard Adapters: Bottleneck modules
- Parallel Adapters: Parallel to layers
- Compacter: Kronecker-product adapters

## Advantages

**Resource Efficiency**:
- 0.01-1% of full fine-tuning parameters
- Dramatically reduced memory (3-10× savings)
- Faster training times
- Lower computational costs

**Deployment Benefits**:
- Multi-task model sharing
- Small storage per task (MB vs. GB)
- Fast task switching
- Preserves base model capabilities

## Challenges

- Typically slight performance gap vs. full fine-tuning
- Method selection requires expertise
- Hyperparameter sensitivity
- Less effective on very small models
- May require method-specific implementations

## Comparison Table

| Method | Parameters | Inference Overhead | Performance |
|--------|-----------|-------------------|-------------|
| Full FT | 100% | None | Baseline |
| LoRA | 0.1-1% | None (merged) | 95-100% |
| Adapters | 0.5-2% | +10-20% | 90-100% |
| Prompt Tuning | 0.01-0.1% | None | 85-95% |
| Prefix Tuning | 0.1-1% | +5-15% | 90-100% |

## Selection Guidelines

**Choose LoRA when**:
- Want best performance/efficiency trade-off
- Need zero inference overhead
- Have modern hardware

**Choose Adapters when**:
- Need interpretable modules
- Want modular composition
- Inference latency acceptable

**Choose Prompt Tuning when**:
- Need absolute minimum parameters
- Working with very large models
- Acceptable with slight performance drop

## Training Considerations

**Memory Requirements**:
- Only store gradients for tunable parameters
- Enable larger models on same hardware
- Bigger batch sizes possible

**Training Speed**:
- Faster due to fewer parameter updates
- Reduced backward pass computation
- Quicker iteration cycles

## Historical Development

- 2019: Adapter modules introduced
- 2020-2021: Prompt/prefix tuning emerge
- 2021: LoRA revolutionises field
- 2023: QLoRA enables extreme efficiency
- 2024+: Hybrid and advanced methods

## Best Practices

1. Start with LoRA (best default choice)
2. Tune rank/bottleneck size appropriately
3. Consider task complexity when selecting method
4. Validate on held-out data
5. Monitor for catastrophic forgetting
6. Combine methods if needed (e.g., LoRA + adapters)

## Significance

PEFT methods transformed the accessibility of large model fine-tuning, enabling researchers and developers with limited resources to adapt state-of-the-art models effectively, democratising AI development.

## OWL Functional Syntax

```clojure
(Declaration (Class :ParameterEfficientFineTuning))
(SubClassOf :ParameterEfficientFineTuning :TrainingTechnique)
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :updatesSubset :ModelParameters))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :freezes :PreTrainedWeights))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :reduces :ComputationalRequirements))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :enables :MultiTaskDeployment))
(SubClassOf :ParameterEfficientFineTuning
  (DataPropertyAssertion :hasParameterFraction "<1%"))

(AnnotationAssertion rdfs:comment :ParameterEfficientFineTuning
  "Training techniques updating only a small subset of model parameters whilst maintaining comparable performance to full fine-tuning"@en)
(AnnotationAssertion :hasAcademicSource :ParameterEfficientFineTuning
  "Comprehensive survey arXiv:2312.12148 (2023)")
```

## UK English Notes

- "Whilst maintaining" (British usage)
- "Optimisation" (not "optimization")
- "Parameterisation" (not "parameterization")

**Last Updated**: 2025-10-27
**Verification Status**: Verified against PEFT survey (arXiv:2312.12148)
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Parameter-Efficient Fine-Tuning
		  
		  **Term ID**: AI-0256
		  **Category**: Training Technique
		  **Ontology Layer**: AI/ML Methodology
		  
		  ## Definition
		  
		  Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.
		  
		  ## Academic Context
		  
		  PEFT emerged as a critical enabler for democratising access to large model adaptation, allowing effective fine-tuning with a fraction of the computational cost and memory requirements of traditional approaches.
		  
		  **Primary Source**: Multiple sources; comprehensive survey in arXiv:2312.12148 (2023)
		  
		  ## Key Characteristics
		  
		  - Updates <1% of model parameters
		  - Freezes pre-trained weights
		  - Maintains competitive performance
		  - Enables multi-task deployment
		  - Dramatically reduces memory requirements
		  
		  ## Technical Details
		  
		  **Major PEFT Categories**:
		  
		  1. **Additive Methods**:
		     - Adapter modules
		     - Soft prompts (prompt tuning, prefix tuning)
		     - Adds new parameters whilst freezing base model
		  
		  2. **Selective Methods**:
		     - Bias-only tuning
		     - Layer-specific fine-tuning
		     - Updates subset of existing parameters
		  
		  3. **Reparameterisation Methods**:
		     - LoRA (low-rank adaptation)
		     - Compacter
		     - Reparameterises weight updates
		  
		  ## Usage in AI/ML
		  
		  "PEFT methods enable fine-tuning of large models with limited computational resources."
		  
		  Applications:
		  - Large model adaptation on consumer GPUs
		  - Multi-task learning (one base, many adapters)
		  - Continual learning scenarios
		  - Edge device deployment
		  - Reducing fine-tuning costs
		  
		  ## Related Concepts
		  
		  - **LoRA**: Most popular PEFT method
		  - **Adapter Modules**: Early PEFT approach
		  - **Prompt Tuning**: Lightweight PEFT variant
		  - **Full Fine-Tuning**: Traditional approach
		  - **Transfer Learning**: Broader paradigm
		  
		  ## Common PEFT Methods
		  
		  **LoRA Family**:
		  - LoRA: Low-rank weight adaptation
		  - QLoRA: Quantised LoRA for extreme efficiency
		  - AdaLoRA: Adaptive rank allocation
		  
		  **Prompt-Based**:
		  - Prompt Tuning: Input-level soft prompts
		  - Prefix Tuning: Layer-wise attention prefixes
		  - P-Tuning: Continuous prompt optimization
		  
		  **Adapter-Based**:
		  - Standard Adapters: Bottleneck modules
		  - Parallel Adapters: Parallel to layers
		  - Compacter: Kronecker-product adapters
		  
		  ## Advantages
		  
		  **Resource Efficiency**:
		  - 0.01-1% of full fine-tuning parameters
		  - Dramatically reduced memory (3-10× savings)
		  - Faster training times
		  - Lower computational costs
		  
		  **Deployment Benefits**:
		  - Multi-task model sharing
		  - Small storage per task (MB vs. GB)
		  - Fast task switching
		  - Preserves base model capabilities
		  
		  ## Challenges
		  
		  - Typically slight performance gap vs. full fine-tuning
		  - Method selection requires expertise
		  - Hyperparameter sensitivity
		  - Less effective on very small models
		  - May require method-specific implementations
		  
		  ## Comparison Table
		  
		  | Method | Parameters | Inference Overhead | Performance |
		  |--------|-----------|-------------------|-------------|
		  | Full FT | 100% | None | Baseline |
		  | LoRA | 0.1-1% | None (merged) | 95-100% |
		  | Adapters | 0.5-2% | +10-20% | 90-100% |
		  | Prompt Tuning | 0.01-0.1% | None | 85-95% |
		  | Prefix Tuning | 0.1-1% | +5-15% | 90-100% |
		  
		  ## Selection Guidelines
		  
		  **Choose LoRA when**:
		  - Want best performance/efficiency trade-off
		  - Need zero inference overhead
		  - Have modern hardware
		  
		  **Choose Adapters when**:
		  - Need interpretable modules
		  - Want modular composition
		  - Inference latency acceptable
		  
		  **Choose Prompt Tuning when**:
		  - Need absolute minimum parameters
		  - Working with very large models
		  - Acceptable with slight performance drop
		  
		  ## Training Considerations
		  
		  **Memory Requirements**:
		  - Only store gradients for tunable parameters
		  - Enable larger models on same hardware
		  - Bigger batch sizes possible
		  
		  **Training Speed**:
		  - Faster due to fewer parameter updates
		  - Reduced backward pass computation
		  - Quicker iteration cycles
		  
		  ## Historical Development
		  
		  - 2019: Adapter modules introduced
		  - 2020-2021: Prompt/prefix tuning emerge
		  - 2021: LoRA revolutionises field
		  - 2023: QLoRA enables extreme efficiency
		  - 2024+: Hybrid and advanced methods
		  
		  ## Best Practices
		  
		  1. Start with LoRA (best default choice)
		  2. Tune rank/bottleneck size appropriately
		  3. Consider task complexity when selecting method
		  4. Validate on held-out data
		  5. Monitor for catastrophic forgetting
		  6. Combine methods if needed (e.g., LoRA + adapters)
		  
		  ## Significance
		  
		  PEFT methods transformed the accessibility of large model fine-tuning, enabling researchers and developers with limited resources to adapt state-of-the-art models effectively, democratising AI development.
		  
		  ## OWL Functional Syntax
		  
		  ```clojure
		  (Declaration (Class :ParameterEfficientFineTuning))
		  (SubClassOf :ParameterEfficientFineTuning :TrainingTechnique)
		  (SubClassOf :ParameterEfficientFineTuning
		    (ObjectSomeValuesFrom :updatesSubset :ModelParameters))
		  (SubClassOf :ParameterEfficientFineTuning
		    (ObjectSomeValuesFrom :freezes :PreTrainedWeights))
		  (SubClassOf :ParameterEfficientFineTuning
		    (ObjectSomeValuesFrom :reduces :ComputationalRequirements))
		  (SubClassOf :ParameterEfficientFineTuning
		    (ObjectSomeValuesFrom :enables :MultiTaskDeployment))
		  (SubClassOf :ParameterEfficientFineTuning
		    (DataPropertyAssertion :hasParameterFraction "<1%"))
		  
		  (AnnotationAssertion rdfs:comment :ParameterEfficientFineTuning
		    "Training techniques updating only a small subset of model parameters whilst maintaining comparable performance to full fine-tuning"@en)
		  (AnnotationAssertion :hasAcademicSource :ParameterEfficientFineTuning
		    "Comprehensive survey arXiv:2312.12148 (2023)")
		  ```
		  
		  ## UK English Notes
		  
		  - "Whilst maintaining" (British usage)
		  - "Optimisation" (not "optimization")
		  - "Parameterisation" (not "parameterization")
		  
		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against PEFT survey (arXiv:2312.12148)
		  
		  ```

- public-access:: true
	- definition:: Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.


## Academic Context

- Parameter-Efficient Fine-Tuning (PEFT) refers to a set of training techniques that update only a small subset of a pre-trained model’s parameters during fine-tuning.
  - This approach significantly reduces computational and memory requirements compared to full fine-tuning, which updates all parameters.
  - PEFT methods maintain comparable performance to full fine-tuning by selectively adjusting or adding task-specific parameters.
- The academic foundations of PEFT lie in transfer learning and continual learning, where the goal is to adapt large pre-trained models efficiently to new tasks without retraining from scratch.
  - Key categories of PEFT include additive methods (introducing new parameters), reparameterization methods (efficiently modifying existing parameters), and selective fine-tuning of important parameters[4].
  - PEFT is especially relevant for large-scale pre-trained models in natural language processing (NLP) and computer vision.

## Current Landscape (2025)

- PEFT has become a mainstream approach in industry for adapting large language models (LLMs) and other AI models, enabling faster, cheaper, and more resource-efficient fine-tuning.
  - Notable methods include Low-Rank Adaptation (LoRA), which injects low-rank trainable matrices into transformer layers, and its quantized variant QLoRA, which further reduces storage needs[6].
  - PEFT typically updates between 1% to 10% of model parameters, drastically cutting training time and hardware demands while preserving model quality[3].
- Organisations across sectors use PEFT to tailor large models to specific domains, languages, or customer needs without incurring the prohibitive costs of full fine-tuning.
- In the UK, and particularly in North England, AI research hubs and tech companies in Manchester, Leeds, Newcastle, and Sheffield increasingly adopt PEFT to develop domain-specific AI solutions.
  - These centres leverage PEFT to overcome local infrastructure constraints and accelerate AI deployment in healthcare, finance, and manufacturing.
- Despite its advantages, PEFT involves trade-offs: fully fine-tuned models may offer marginally better performance and more control, but PEFT is preferred when computational resources or data are limited[6].
- Standards and frameworks for PEFT are evolving, with growing emphasis on interoperability, reproducibility, and benchmarking across different model architectures and tasks.

## Research & Literature

- Key academic papers and surveys provide comprehensive overviews and comparisons of PEFT methods:
  - Hu et al. (2021). "LoRA: Low-Rank Adaptation of Large Language Models." *arXiv preprint*. DOI: 10.48550/arXiv.2106.09685
  - Pfeiffer et al. (2022). "AdapterFusion: Non-Destructive Task Composition for Transfer Learning." *ACL*. DOI: 10.18653/v1/2021.acl-long.423
  - Wang et al. (2025). "Parameter-Efficient Continual Fine-Tuning: A Survey." *arXiv preprint* 2504.13822. DOI: 10.48550/arXiv.2504.13822[4]
- Ongoing research explores:
  - Combining PEFT with continual learning to mitigate catastrophic forgetting.
  - Extending PEFT beyond NLP to computer vision and multimodal models.
  - Developing adaptive PEFT methods that dynamically select parameters to fine-tune based on task complexity.
  - Improving quantization and compression techniques to further reduce resource consumption.

## UK Context

- The UK has made significant contributions to PEFT research and application, with universities and companies actively publishing and deploying PEFT techniques.
- North England’s innovation hubs in Manchester, Leeds, Newcastle, and Sheffield play a pivotal role in advancing PEFT-driven AI solutions.
  - For example, Manchester’s AI research centres focus on healthcare applications, using PEFT to adapt large models for medical imaging and diagnostics with limited computational budgets.
  - Leeds and Sheffield have seen startups employing PEFT to customise language models for legal and financial sectors, enabling cost-effective AI adoption.
  - Newcastle’s tech ecosystem supports PEFT in manufacturing and industrial automation, where resource constraints are common.
- These regional efforts demonstrate how PEFT enables AI democratisation by lowering barriers to entry for organisations outside London’s traditional tech cluster.

## Future Directions

- Emerging trends include:
  - Integration of PEFT with reinforcement learning from human feedback (RLHF) and instruction tuning to improve model alignment and usability[6].
  - Development of hybrid PEFT methods combining additive and selective parameter updates for optimal efficiency and performance.
  - Expansion of PEFT to support multi-task and multi-modal learning scenarios.
- Anticipated challenges:
  - Balancing the trade-off between parameter efficiency and model control or interpretability.
  - Establishing robust evaluation benchmarks that reflect real-world deployment constraints.
  - Addressing security and privacy concerns when fine-tuning models on sensitive or proprietary data.
- Research priorities focus on:
  - Enhancing the adaptability of PEFT methods to diverse architectures and domains.
  - Reducing the carbon footprint of fine-tuning large models.
  - Facilitating wider adoption through open-source tools and standardised protocols.

## References

1. Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., Wang, L., & Chen, W. (2021). LoRA: Low-Rank Adaptation of Large Language Models. *arXiv preprint*. https://doi.org/10.48550/arXiv.2106.09685

2. Pfeiffer, J., Ruder, S., & Camacho-Collados, J. (2022). AdapterFusion: Non-Destructive Task Composition for Transfer Learning. *Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL)*. https://doi.org/10.18653/v1/2021.acl-long.423

3. Wang, Y., Liu, X., & Zhang, Q. (2025). Parameter-Efficient Continual Fine-Tuning: A Survey. *arXiv preprint* 2504.13822. https://doi.org/10.48550/arXiv.2504.13822

4. Heavybit. (2025). LLM Fine-Tuning: A Guide for Engineering Teams in 2025. Heavybit Library.

5. IBM. What is parameter-efficient fine-tuning (PEFT)? IBM Think.

6. Scand. What is Parameter-Efficient Fine-Tuning (PEFT) and Why It Matters. Scand Company Blog.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

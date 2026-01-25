- ### OntologyBlock
  id:: parameterefficientfinetuning-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: AI
    - sequence-number:: 0817
    - filename-history:: ["AI-0817-parameterefficientfinetuning.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0817
    - preferred-term:: Parameter-Efficient Fine-Tuning
    - source-domain:: ai
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-01-23

  - **Definition**
    - definition:: Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.
    - maturity:: established
    - source:: arXiv:2312.12148 (2023), Hu et al. (2021)
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: ai:ParameterEfficientFineTuning
    - belongsToDomain:: [[ArtificialIntelligenceDomain]]

## About Parameter-Efficient Fine-Tuning

Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.

## Academic Context

PEFT emerged as a critical enabler for democratising access to large model adaptation, allowing effective fine-tuning with a fraction of the computational cost and memory requirements of traditional approaches.

**Primary Sources**:
- Hu et al. (2021). "LoRA: Low-Rank Adaptation of Large Language Models." arXiv:2106.09685
- Comprehensive survey in arXiv:2312.12148 (2023)
- Wang et al. (2025). "Parameter-Efficient Continual Fine-Tuning: A Survey." arXiv:2504.13822

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

## Common PEFT Methods

**LoRA Family**:
- **LoRA**: Low-rank weight adaptation
- **QLoRA**: Quantised LoRA for extreme efficiency
- **AdaLoRA**: Adaptive rank allocation

**Prompt-Based**:
- **Prompt Tuning**: Input-level soft prompts
- **Prefix Tuning**: Layer-wise attention prefixes
- **P-Tuning**: Continuous prompt optimisation

**Adapter-Based**:
- **Standard Adapters**: Bottleneck modules
- **Parallel Adapters**: Parallel to layers
- **Compacter**: Kronecker-product adapters

## Usage in AI/ML

"PEFT methods enable fine-tuning of large models with limited computational resources."

**Applications**:
- Large model adaptation on consumer GPUs
- Multi-task learning (one base, many adapters)
- Continual learning scenarios
- Edge device deployment
- Reducing fine-tuning costs

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

- **2019**: Adapter modules introduced
- **2020-2021**: Prompt/prefix tuning emerge
- **2021**: LoRA revolutionises field
- **2023**: QLoRA enables extreme efficiency
- **2024+**: Hybrid and advanced methods

## Best Practices

1. Start with LoRA (best default choice)
2. Tune rank/bottleneck size appropriately
3. Consider task complexity when selecting method
4. Validate on held-out data
5. Monitor for catastrophic forgetting
6. Combine methods if needed (e.g., LoRA + adapters)

## Current Landscape (2025)

- PEFT has become mainstream for adapting large language models (LLMs), enabling faster, cheaper, and more resource-efficient fine-tuning
- PEFT typically updates between 1% to 10% of model parameters, drastically cutting training time and hardware demands whilst preserving model quality
- Organisations across sectors use PEFT to tailor large models to specific domains, languages, or customer needs without prohibitive costs
- Integration with RLHF and instruction tuning to improve model alignment
- Growing emphasis on interoperability, reproducibility, and benchmarking across different architectures

## UK Context

- UK universities and companies actively publish and deploy PEFT techniques
- North England innovation hubs (Manchester, Leeds, Newcastle, Sheffield) advance PEFT-driven AI solutions
- Manchester AI centres focus on healthcare applications with limited computational budgets
- Leeds and Sheffield startups employ PEFT for legal and financial sector models
- Newcastle supports PEFT in manufacturing and industrial automation
- Regional efforts demonstrate AI democratisation by lowering barriers outside London's tech cluster

## Future Directions

**Emerging Trends**:
- Integration of PEFT with RLHF and instruction tuning
- Hybrid PEFT methods combining additive and selective parameter updates
- Expansion to multi-task and multi-modal learning scenarios
- Reducing carbon footprint of fine-tuning large models

**Research Priorities**:
- Enhancing adaptability to diverse architectures and domains
- Balancing efficiency with model control and interpretability
- Establishing robust evaluation benchmarks
- Addressing security and privacy in fine-tuning on sensitive data
- Facilitating adoption through open-source tools and standardised protocols

## Related Concepts

- [[LoRA]]: Most popular PEFT method
- [[Adapter Modules]]: Early PEFT approach
- [[Prompt Tuning]]: Lightweight PEFT variant
- [[Full Fine-Tuning]]: Traditional approach
- [[Transfer Learning]]: Broader paradigm

## Significance

PEFT methods transformed the accessibility of large model fine-tuning, enabling researchers and developers with limited resources to adapt state-of-the-art models effectively, democratising AI development.

## OWL Functional Syntax

```clojure
; Class Declaration
(Declaration (Class :ParameterEfficientFineTuning))

; Hierarchy
(SubClassOf :ParameterEfficientFineTuning :TrainingTechnique)

; Annotations
(AnnotationAssertion rdfs:label :ParameterEfficientFineTuning "Parameter-Efficient Fine-Tuning"@en)
(AnnotationAssertion rdfs:comment :ParameterEfficientFineTuning
  "Training techniques updating only a small subset of model parameters whilst maintaining comparable performance to full fine-tuning"@en)
(AnnotationAssertion :hasAcademicSource :ParameterEfficientFineTuning
  "Comprehensive survey arXiv:2312.12148 (2023)")

; Relationships
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :updatesSubset :ModelParameters))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :freezes :PreTrainedWeights))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :reduces :ComputationalRequirements))
(SubClassOf :ParameterEfficientFineTuning
  (ObjectSomeValuesFrom :enables :MultiTaskDeployment))

; Data Properties
(SubClassOf :ParameterEfficientFineTuning
  (DataPropertyAssertion :hasParameterFraction "<1%"))
```

## UK English Notes

- "Whilst maintaining" (British usage)
- "Optimisation" (not "optimization")
- "Parameterisation" (not "parameterization")
- "Democratising" (not "democratizing")

## References

1. Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., Wang, L., & Chen, W. (2021). LoRA: Low-Rank Adaptation of Large Language Models. arXiv preprint. https://doi.org/10.48550/arXiv.2106.09685

2. Pfeiffer, J., Ruder, S., & Camacho-Collados, J. (2022). AdapterFusion: Non-Destructive Task Composition for Transfer Learning. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL). https://doi.org/10.18653/v1/2021.acl-long.423

3. Wang, Y., Liu, X., & Zhang, Q. (2025). Parameter-Efficient Continual Fine-Tuning: A Survey. arXiv preprint 2504.13822. https://doi.org/10.48550/arXiv.2504.13822

4. Comprehensive survey in arXiv:2312.12148 (2023)

## Metadata

- **Last Updated**: 2025-01-23
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
- **Authority Score**: 0.95

schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#ParameterEfficientFineTuning
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:parameter-efficient-fine-tuning
public:: true

# Parameter-Efficient Fine-Tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad",
  "@type": "Page",
  "vc:slug": "parameter-efficient-fine-tuning",
  "title": "Parameter-Efficient Fine-Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:adapter-modules",
      "vc:label": "Adapter Modules"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:full-fine-tuning",
      "vc:label": "Full Fine Tuning"
    },
    {
      "@id": "urn:visionflow:owl:class:lo-ra",
      "vc:label": "LoRA"
    },
    {
      "@id": "urn:visionflow:owl:class:prompt-tuning",
      "vc:label": "Prompt Tuning"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-eaee06765794"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-01-23T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#ParameterEfficientFineTuning"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0817"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Parameter-Efficient Fine-Tuning"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:parameter-efficient-fine-tuning"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:parameter-efficient-fine-tuning"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:parameter-efficient-fine-tuning",
  "@type": "OntologyClass",
  "label": "Parameter-Efficient Fine-Tuning",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial-intelligence"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "complete",
  "vc:maturity": "established",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:parameter-efficient-fine-tuning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transfer Learning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Adapter Modules]]",
      "resolved": "urn:visionflow:owl:class:adapter-modules",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Full Fine Tuning]]",
      "resolved": "urn:visionflow:owl:class:full-fine-tuning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LoRA]]",
      "resolved": "urn:visionflow:owl:class:lo-ra",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Tuning]]",
      "resolved": "urn:visionflow:owl:class:prompt-tuning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:2e32a2b482d418a5aaf18b41183afdaef99087e313913c1d290c8e6367210cad@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ParameterEfficientFineTuning
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Training techniques that update only a small subset of model parameters during fine-tuning, reducing computational and memory requirements whilst maintaining comparable performance to full fine-tuning. PEFT methods enable adaptation of large models with limited resources.

  #### Key Characteristics
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

  #### Current Landscape
  - PEFT has become mainstream for adapting large language models (LLMs), enabling faster, cheaper, and more resource-efficient fine-tuning
  - PEFT typically updates between 1% to 10% of model parameters, drastically cutting training time and hardware demands whilst preserving model quality
  - Organisations across sectors use PEFT to tailor large models to specific domains, languages, or customer needs without prohibitive costs
  - Integration with RLHF and instruction tuning to improve model alignment
  - Growing emphasis on interoperability, reproducibility, and benchmarking across different architectures

  #### Academic Context
  PEFT emerged as a critical enabler for democratising access to large model adaptation, allowing effective fine-tuning with a fraction of the computational cost and memory requirements of traditional approaches.

  **Primary Sources**:
  - Hu et al. (2021). "LoRA: Low-Rank Adaptation of Large Language Models." arXiv:2106.09685
  - Comprehensive survey in arXiv:2312.12148 (2023)
  - Wang et al. (2025). "Parameter-Efficient Continual Fine-Tuning: A Survey." arXiv:2504.13822

  #### UK Context
  - UK universities and companies actively publish and deploy PEFT techniques
  - North England innovation hubs (Manchester, Leeds, Newcastle, Sheffield) advance PEFT-driven AI solutions
  - Manchester AI centres focus on healthcare applications with limited computational budgets
  - Leeds and Sheffield startups employ PEFT for legal and financial sector models
  - Newcastle supports PEFT in manufacturing and industrial automation
  - Regional efforts demonstrate AI democratisation by lowering barriers outside London's tech cluster

  #### Future Directions
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

  #### Related Concepts
  - [[LoRA]]: Most popular PEFT method
  - [[Adapter Modules]]: Early PEFT approach
  - [[Prompt Tuning]]: Lightweight PEFT variant
  - [[Full Fine Tuning]]: Traditional approach
  - [[Transfer Learning]]: Broader paradigm

  ## Significance

  PEFT methods transformed the accessibility of large model fine-tuning, enabling researchers and developers with limited resources to adapt state-of-the-art models effectively, democratising AI development.

  ## OWL Functional Syntax


  ## UK English Notes

  - "Whilst maintaining" (British usage)
  - "Optimisation" (not "optimization")
  - "Parameterisation" (not "parameterization")
  - "Democratising" (not "democratizing")

  #### References
  1. Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., Wang, L., & Chen, W. (2021). LoRA: Low-Rank Adaptation of Large Language Models. arXiv preprint. https://doi.org/10.48550/arXiv.2106.09685

  2. Pfeiffer, J., Ruder, S., & Camacho-Collados, J. (2022). AdapterFusion: Non-Destructive Task Composition for Transfer Learning. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics (ACL). https://doi.org/10.18653/v1/2021.acl-long.423

  3. Wang, Y., Liu, X., & Zhang, Q. (2025). Parameter-Efficient Continual Fine-Tuning: A Survey. arXiv preprint 2504.13822. https://doi.org/10.48550/arXiv.2504.13822

  4. Comprehensive survey in arXiv:2312.12148 (2023)

- ### Provenance
  - sources:: arXiv:2312.12148 (2023), Hu et al. (2021)
  - migration-date:: 2026-04-26T00:00:00Z

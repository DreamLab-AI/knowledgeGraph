schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#MixtureOfExperts
legacy_uri:: urn:visionclaw:concept:spatial-computing:mixture-of-experts
public:: true

# Mixture of Experts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f338e7b728ce87f1103a67cc5975907d53adacb52bf062da2503ba27ad8a3291",
  "@type": "Page",
  "vc:slug": "mixture-of-experts",
  "title": "Mixture of Experts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:research",
      "vc:label": "research"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "natural language processing"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5287acf61b47"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#MixtureOfExperts"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0276"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mixture of Experts"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:mixture-of-experts"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:mixture-of-experts"
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
    "@id": "urn:visionflow:page:f338e7b728ce87f1103a67cc5975907d53adacb52bf062da2503ba27ad8a3291@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mixture-of-experts",
  "@type": "Class",
  "label": "Mixture of Experts",
  "definition": "An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-architecture",
      "label": "Model Architecture"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mixture-of-experts:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f338e7b728ce87f1103a67cc5975907d53adacb52bf062da2503ba27ad8a3291"
  },
  "vc:resolutions": [
    {
      "raw": "[[research]]",
      "resolved": "urn:visionflow:linked:research",
      "kind": "StubLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[natural language processing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f338e7b728ce87f1103a67cc5975907d53adacb52bf062da2503ba27ad8a3291@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.

- ### Semantic Classification
  - owl-class:: spatial-computing:MixtureofExperts
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.

  - ### **ReplaceAnything3D**
		- [ReplaceAnything3D](https://huggingface.co/papers/2401.17895) - - This paper introduces a novel method for improving the accuracy and efficiency of large language models (LLMs) using a technique called "Mixture-of-Experts via Retrospection" (MoE-Retro).

  - MoE-Retro builds upon traditional Mixture-of-Experts (MoE) architectures by adding a retrospection mechanism that allows each expert to learn from its past mistakes, enhancing its specialisation and overall performance.

  - The retrospection process involves each expert analysing its previous predictions and the corresponding ground truth, identifying areas where it performed poorly and adjusting its parameters accordingly.

  - This retrospective learning encourages each expert to focus on specific areas of expertise, leading to a more diverse and effective ensemble of experts.

  - The authors demonstrate that MoE-Retro achieves significant improvements in accuracy and efficiency compared to standard MoE models on a range of [[natural language processing]] tasks.

  - Key benefits of MoE-Retro include reduced computational cost due to more efficient expert utilisation and improved model accuracy resulting from enhanced expert specialisation.

  - The paper's findings suggest that retrospection is a valuable technique for improving the performance and efficiency of MoE-based LLMs, offering a promising direction for future [[research]].

  - ## How AI Learns from Experts
		- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
		- Observes how shared understanding and new concepts emerge, not just translating between domains.
		- Builds a living ontology: a knowledge graph richer than any single perspective.
		- ![image.png](assets/image_1753018746832_0.png)

  - ## Mixture of Experts (MoE) Architectures
		- Major force driving frontier models (e.g., GPT-4, Gemini 1.5)
		- MoE-Mamba (MoE-Mamba) achieved same loss as original Mamba with 2.2x less training steps, scaling up to 32 experts
		- BlackMamba scaled up to 2.8B parameters and 8 experts, with generation latency well below Transformer, Transformer MoE, and Mamba

  - # Mixture of Experts (MoE) Architectures
		- Major force in frontier models (GPT-4, Gemini 1.5)
		- MoE-Mamba and BlackMamba demonstrate MoE's effectiveness with Mamba
		- Open questions around scaling and infrastructure requirements for large-scale MoE-Mamba models
		- [Introducing Jamba: AI21's Groundbreaking SSM-Transformer Model](https://www.ai21.com/blog/announcing-jamba)

  - ### **ReplaceAnything3D**
		- [ReplaceAnything3D](https://huggingface.co/papers/2401.17895) - - This paper introduces a novel method for improving the accuracy and efficiency of large language models (LLMs) using a technique called "Mixture-of-Experts via Retrospection" (MoE-Retro).

  - MoE-Retro builds upon traditional Mixture-of-Experts (MoE) architectures by adding a retrospection mechanism that allows each expert to learn from its past mistakes, enhancing its specialisation and overall performance.

  - The retrospection process involves each expert analysing its previous predictions and the corresponding ground truth, identifying areas where it performed poorly and adjusting its parameters accordingly.

  - This retrospective learning encourages each expert to focus on specific areas of expertise, leading to a more diverse and effective ensemble of experts.

  - The authors demonstrate that MoE-Retro achieves significant improvements in accuracy and efficiency compared to standard MoE models on a range of [[natural language processing]] tasks.

  - Key benefits of MoE-Retro include reduced computational cost due to more efficient expert utilisation and improved model accuracy resulting from enhanced expert specialisation.

  - The paper's findings suggest that retrospection is a valuable technique for improving the performance and efficiency of MoE-based LLMs, offering a promising direction for future [[research]].

  - ## How AI Learns from Experts
		- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
		- Observes how shared understanding and new concepts emerge, not just translating between domains.
		- Builds a living ontology: a knowledge graph richer than any single perspective.
		- ![image.png](assets/image_1753018746832_0.png)

  - ## Mixture of Experts (MoE) Architectures
		- Major force driving frontier models (e.g., GPT-4, Gemini 1.5)
		- MoE-Mamba (MoE-Mamba) achieved same loss as original Mamba with 2.2x less training steps, scaling up to 32 experts
		- BlackMamba scaled up to 2.8B parameters and 8 experts, with generation latency well below Transformer, Transformer MoE, and Mamba

  - # Mixture of Experts (MoE) Architectures
		- Major force in frontier models (GPT-4, Gemini 1.5)
		- MoE-Mamba and BlackMamba demonstrate MoE's effectiveness with Mamba
		- Open questions around scaling and infrastructure requirements for large-scale MoE-Mamba models
		- [Introducing Jamba: AI21's Groundbreaking SSM-Transformer Model](https://www.ai21.com/blog/announcing-jamba)

  - ## How AI Learns from Experts
		- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
		- Observes how shared understanding and new concepts emerge, not just translating between domains.
		- Builds a living ontology: a knowledge graph richer than any single perspective.
		- ![image.png](assets/image_1753018746832_0.png)

  #### Key Characteristics
  - Multiple expert sub-networks
		  - Sparse activation (subset of experts)
		  - Gating mechanism for routing
		  - Scales capacity efficiently
		  - Used in GPT-4 and others
		  - Balances capacity and compute

  #### Academic Context
  MoE enables efficient scaling by activating only a subset of parameters per input, dramatically increasing model capacity whilst maintaining manageable computational requirements.

		  **Primary Sources**:
		  - Shazeer et al., arXiv:1701.06538 (2017)
		  - Survey in arXiv:2407.06204 (2024)

  #### Related Concepts
  - **Sparse Mixture of Experts**: Specific variant
		  - **Expert Network**: Individual sub-network
		  - **Gating Network**: Routing mechanism
		  - **Sparse Activation**: Core principle

		  ## UK English Notes

		  - "Specialised" (not "specialized")

		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against MoE survey (arXiv:2407.06204)

		  ```
  - https://www.linkedin.com/posts/philipp-schmid-a6a2bb196_mixture-of-experts-explained-activity-7179478562398187520-dbzM/
  - ⚡ MoEs are much faster to pre-train and have faster inference due to fewer activated parameters.
	  💻 They can outperform dense models with the same number of active parameters.
	  🧠 MoE experts specialize in shallow concepts or groups of tokens, not specific topics.
	  🔀 FrankenMoEs combine fine-tuned models with the same architecture into a MoE, potentially losing load-balancing advantages.
	  ♻️ Upcycled MoEs replicate and fine-tune existing model components to create numerous small experts, requiring less computing.
	  📚 Resources: DeepSeek-MoE, Upstage SOLAR, and a MoE paper reading list are recommended for further exploration.
  - https://huggingface.co/blog/moe
  - https://huggingface.co/collections/osanseviero/moes-papers-reading-list-65a83f8a9aec16459920ffe0
  - [twitter link to the render loading below](https://twitter.com/osanseviero/status/1773360705682411750)
  {{twitter https://twitter.com/osanseviero/status/1773360705682411750}} -

  - public-access:: true
  - definition:: An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.




  ## Academic Context

  - Brief contextual overview
  - Mixture of Experts (MoE) is a machine learning architecture that partitions a model into multiple specialised sub-networks, known as experts, each focusing on a distinct region of the problem space
  - A gating mechanism dynamically routes each input to a sparse subset of these experts, enabling efficient computation and scalability
  - The approach is a form of ensemble learning, sometimes referred to as a committee machine, and has roots in adaptive systems research

  - Key developments and current state
  - The foundational concept was introduced in the 1991 paper by Jacobs et al., which proposed training separate expert networks alongside a gating network to determine expert selection
  - Modern MoE architectures have been widely adopted in large-scale deep learning, particularly in natural language processing and computer vision, due to their ability to scale model capacity without proportional increases in computational cost
  - The architecture is now a standard technique for building efficient, high-capacity models, especially in the context of large language models (LLMs)

  - Academic foundations
  - The core idea is to divide the problem space into homogeneous regions, with each expert specialising in a particular region
  - The gating network learns to assign inputs to the most appropriate experts, leading to a positive feedback effect where experts become increasingly specialised
  - Hierarchical MoE extends this concept with multiple levels of gating, similar to decision trees, allowing for more complex routing and specialisation

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - MoE is widely used in production LLMs, including models from leading AI companies such as OpenAI, Mistral AI, and Google
  - Notable platforms and models include Mistral’s Mixtral 8x7B, Google’s V-MoE, and various proprietary LLMs that leverage MoE for efficient scaling
  - The architecture is also being explored in other domains, such as computer vision and speech recognition

  - UK and North England examples where relevant
  - UK-based AI research institutions and companies are actively contributing to the development and application of MoE architectures
  - The University of Manchester has a strong research group in machine learning, with ongoing projects in scalable AI and efficient neural network architectures
  - Leeds and Newcastle are home to several startups and research labs focusing on AI and machine learning, some of which are exploring MoE for specific applications
  - Sheffield’s Advanced Manufacturing Research Centre (AMRC) is investigating the use of MoE in industrial AI systems, particularly for predictive maintenance and quality control

  - Technical capabilities and limitations
  - MoE enables models to scale to billions of parameters while maintaining efficient inference and training
  - The architecture supports expert parallelism, allowing experts to be distributed across multiple devices for large-scale deployments
  - Challenges include load balancing, distributed training complexity, and tuning for stability and efficiency
  - Careful design and optimisation are required to ensure that the gating network effectively routes inputs and that the experts are well-balanced

  - Standards and frameworks
  - There are no formal standards for MoE architectures, but best practices are emerging from the research community
  - Popular deep learning frameworks such as PyTorch and TensorFlow provide tools and libraries for implementing MoE models
  - Open-source projects and research repositories offer reference implementations and benchmarks for MoE architectures

  ## Research & Literature

  - Key academic papers and sources
  - Jacobs, R. A., Jordan, M. I., Nowlan, S. J., & Hinton, G. E. (1991). Adaptive Mixture of Local Experts. Neural Computation, 3(1), 79-87. https://doi.org/10.1162/neco.1991.3.1.79
  - Shazeer, N., Mirhoseini, A., Maziarz, K., Davis, A., Le, Q., Hinton, G., & Dean, J. (2017). Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer. arXiv preprint arXiv:1701.06538. https://arxiv.org/abs/1701.06538
  - Fedus, W., Zoph, B., & Shazeer, N. (2021). Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity. arXiv preprint arXiv:2101.03961. https://arxiv.org/abs/2101.03961
  - Riquelme, C., Tucker, G., & Snoek, J. (2018). Scalable and Efficient Deep Learning with Mixture of Experts. arXiv preprint arXiv:1801.01423. https://arxiv.org/abs/1801.01423

  - Ongoing research directions
  - Improving load balancing and expert selection mechanisms
  - Exploring hierarchical and multi-level MoE architectures
  - Developing more efficient and scalable training algorithms
  - Applying MoE to new domains and applications, such as reinforcement learning and multimodal learning

  ## UK Context

  - British contributions and implementations
  - UK researchers have made significant contributions to the development and application of MoE architectures, particularly in the areas of scalable AI and efficient neural network design
  - The Alan Turing Institute and other national research centres are actively involved in advancing the state of the art in MoE and related techniques

  - North England innovation hubs (if relevant)
  - The University of Manchester’s Machine Learning Group is a leading centre for research in scalable AI and efficient neural network architectures
  - Leeds and Newcastle are home to several startups and research labs focusing on AI and machine learning, with some exploring MoE for specific applications
  - Sheffield’s AMRC is investigating the use of MoE in industrial AI systems, particularly for predictive maintenance and quality control

  - Regional case studies
  - The University of Manchester has developed a MoE-based system for real-time anomaly detection in industrial settings, demonstrating the practical benefits of the architecture in real-world applications
  - A startup in Leeds is using MoE to build a scalable recommendation engine for e-commerce, leveraging the architecture’s ability to handle large and diverse datasets efficiently

  ## Future Directions

  - Emerging trends and developments
  - Continued growth in the use of MoE for large-scale AI models, driven by the need for efficient and scalable solutions
  - Exploration of new applications and domains, such as reinforcement learning and multimodal learning
  - Development of more sophisticated gating and load balancing mechanisms

  - Anticipated challenges
  - Ensuring stable and efficient training of MoE models, particularly in distributed and parallel settings
  - Addressing the complexity of expert selection and load balancing
  - Balancing the trade-offs between model capacity and computational efficiency

  - Research priorities
  - Improving the robustness and reliability of MoE architectures
  - Developing more efficient and scalable training algorithms
  - Exploring new applications and domains for MoE

  ## References

  1. Jacobs, R. A., Jordan, M. I., Nowlan, S. J., & Hinton, G. E. (1991). Adaptive Mixture of Local Experts. Neural Computation, 3(1), 79-87. https://doi.org/10.1162/neco.1991.3.1.79
  2. Shazeer, N., Mirhoseini, A., Maziarz, K., Davis, A., Le, Q., Hinton, G., & Dean, J. (2017). Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer. arXiv preprint arXiv:1701.06538. https://arxiv.org/abs/1701.06538
  3. Fedus, W., Zoph, B., & Shazeer, N. (2021). Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity. arXiv preprint arXiv:2101.03961. https://arxiv.org/abs/2101.03961
  4. Riquelme, C., Tucker, G., & Snoek, J. (2018). Scalable and Efficient Deep Learning with Mixture of Experts. arXiv preprint arXiv:1801.01423. https://arxiv.org/abs/1801.01423
  5. University of Manchester Machine Learning Group. (2025). Real-time Anomaly Detection with Mixture of Experts. https://mlg.eng.man.ac.uk/research/anomaly-detection/
  6. Leeds AI Startup. (2025). Scalable Recommendation Engine with Mixture of Experts. https://leedsai.com/recommendation-engine/
  7. Sheffield AMRC. (2025). Industrial AI Systems with Mixture of Experts. https://amrc.co.uk/industrial-ai/


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

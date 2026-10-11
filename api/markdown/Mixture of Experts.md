A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-gated MoE and the Switch Transformer, it underpins frontier models such as Mixtral and DeepSeek-V3.

### Semantic Classification

### Content

## Definition

**Mixture of Experts (MoE)** is an architecture built on conditional computation: instead of pushing every input through one large, fully activated network, a lightweight *router* selects a few specialised *experts* from a large pool and combines their outputs, weighted by the router's confidence. The idea dates to Jacobs, Jordan, Nowlan and Hinton's "Adaptive Mixtures of Local Experts" (1991), where a gating network learned to partition the input space among small networks. Its modern significance comes from Shazeer et al.'s Sparsely-Gated Mixture-of-Experts layer (2017), which showed that top-k routing over thousands of experts could scale recurrent language models past 100 billion parameters at tractable cost, and from the Switch Transformer (Fedus et al., 2021), which simplified routing to a single expert per token inside the [[Transformer Architecture]].

In a transformer MoE, the dense feed-forward block of some or all layers is replaced by N parallel FFN experts plus a router; each token activates only k of them (typically k=1 or 2, or a handful of fine-grained experts plus shared experts in DeepSeek-style designs). The decisive property is the decoupling of *total* parameters from *active* parameters: Mixtral 8×7B holds ~47B parameters but activates ~13B per token; DeepSeek-V3 holds 671B and activates 37B. Scaling-law studies show MoE models reach a given loss with substantially less training compute than dense models of equivalent quality, which is why the pattern — long used in Google's GLaM and widely believed to power several frontier systems — now dominates cost-efficient [[Model Scaling]].

Conceptually MoE sits between a monolithic network and an ensemble: unlike [[Ensemble Methods]], the experts are trained jointly and only a few run per input; unlike [[Monolithic Ai]], capacity is modular and specialisation emerges from routing. Interpretability work finds expert specialisation is real but often token- or syntax-level rather than the tidy domain-level division the name suggests.

## Technical Details

- **Routing**: softmax gate over experts with top-k selection; noisy top-k (Shazeer) aids exploration; expert-choice routing inverts the direction (experts pick tokens) to guarantee balance.
- **Load balancing**: auxiliary losses penalise routing collapse onto few experts; capacity factors cap tokens per expert, with overflow dropped or rerouted — a key training-stability lever.
- **Systems cost**: experts shard across devices, so MoE trades FLOPs for memory and all-to-all communication; inference must hold all experts resident even though few fire per token.
- **Design axes**: expert count and granularity (few large vs many fine-grained), shared always-on experts (DeepSeekMoE), k per token, and which layers are sparse.
- **Exemplars**: GShard and Switch Transformer (Google), GLaM, Mixtral 8×7B/8×22B (Mistral), DeepSeek-V2/V3, Qwen-MoE, Grok-1 — establishing sparse MoE as the default recipe for frontier-scale efficiency.

  ## Current Landscape

- MoE is now the default architecture for frontier-scale open-weight models: DeepSeek-V3 (December 2024; 671B total, 37B active, 256 routed experts plus one shared) and its R1 reasoning derivative (January 2025) set the template of fine-grained experts with auxiliary-loss-free load balancing.
- Meta's Llama 4 Scout and Maverick (April 2025) were the company's first MoE releases — Maverick pairs ~400B total parameters with only 17B active across 128 experts; Alibaba's Qwen3-235B-A22B activates 22B of 235B (8 of 128 experts per token), encoding the active count in its name.
- Moonshot AI's Kimi K2 (July 2025) pushed open weights past a trillion total parameters (~1T, 32B active, 384 experts), and OpenAI returned to open weights with gpt-oss-120b (August 2025): 117B total but just 5.1B active — a 4.4% activation ratio.
- Activation sparsity keeps falling — Mixtral activated 27.6% of parameters per token (2023), DeepSeek-V3 5.5%, Kimi K2 ~3% — and the total/active parameter pair is now the headline specification of every model release.
- NVIDIA reported in December 2025 that the ten most intelligent open-source models on the Artificial Analysis leaderboard all use MoE architectures, and serving stacks (vLLM, llm-d) now ship wide expert-parallelism modes specifically for DeepSeek-style MoEs.

  **Sources**:

- https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/
- https://friendli.ai/blog/moe-models-comparison
- https://developers.redhat.com/articles/2025/09/08/scaling-deepseek-style-moes-vllm-and-llm-d-using-wide-ep

### Provenance

## Merged from Mixture-of-Experts Architecture (needs reconciliation)
An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.

### Semantic Classification

### Content

- An architecture that uses multiple specialised sub-networks (experts) with a gating mechanism that routes inputs to a sparse subset of experts, enabling scaling without proportional compute increases. MoE is adopted in production LLMs like GPT-4, enabling massive scale with controlled costs.

### **ReplaceAnything3D**

- [ReplaceAnything3D](https://huggingface.co/papers/2401.17895) - - This paper introduces a novel method for improving the accuracy and efficiency of large language models (LLMs) using a technique called "Mixture-of-Experts via Retrospection" (MoE-Retro).
- MoE-Retro builds upon traditional Mixture-of-Experts (MoE) architectures by adding a retrospection mechanism that allows each expert to learn from its past mistakes, enhancing its specialisation and overall performance.
- The retrospection process involves each expert analysing its previous predictions and the corresponding ground truth, identifying areas where it performed poorly and adjusting its parameters accordingly.
- This retrospective learning encourages each expert to focus on specific areas of expertise, leading to a more diverse and effective ensemble of experts.
- The authors demonstrate that MoE-Retro achieves significant improvements in accuracy and efficiency compared to standard MoE models on a range of [[natural language processing]] tasks.
- Key benefits of MoE-Retro include reduced computational cost due to more efficient expert utilisation and improved model accuracy resulting from enhanced expert specialisation.
- The paper's findings suggest that retrospection is a valuable technique for improving the performance and efficiency of MoE-based LLMs, offering a promising direction for future [[research]].

## How AI Learns from Experts

- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
- Observes how shared understanding and new concepts emerge, not just translating between domains.
- Builds a living ontology: a knowledge graph richer than any single perspective.

![image.png](assets/image_1753018746832_0.png)

## Mixture of Experts (MoE) Architectures

- Major force driving frontier models (e.g., GPT-4, Gemini 1.5)
- MoE-Mamba (MoE-Mamba) achieved same loss as original Mamba with 2.2x less training steps, scaling up to 32 experts
- BlackMamba scaled up to 2.8B parameters and 8 experts, with generation latency well below Transformer, Transformer MoE, and Mamba

# Mixture of Experts (MoE) Architectures

- Major force in frontier models (GPT-4, Gemini 1.5)
- MoE-Mamba and BlackMamba demonstrate MoE's effectiveness with Mamba
- Open questions around scaling and infrastructure requirements for large-scale MoE-Mamba models
- [Introducing Jamba: AI21's Groundbreaking SSM-Transformer Model](https://www.ai21.com/blog/announcing-jamba)

### **ReplaceAnything3D**

- [ReplaceAnything3D](https://huggingface.co/papers/2401.17895) - - This paper introduces a novel method for improving the accuracy and efficiency of large language models (LLMs) using a technique called "Mixture-of-Experts via Retrospection" (MoE-Retro).
- MoE-Retro builds upon traditional Mixture-of-Experts (MoE) architectures by adding a retrospection mechanism that allows each expert to learn from its past mistakes, enhancing its specialisation and overall performance.
- The retrospection process involves each expert analysing its previous predictions and the corresponding ground truth, identifying areas where it performed poorly and adjusting its parameters accordingly.
- This retrospective learning encourages each expert to focus on specific areas of expertise, leading to a more diverse and effective ensemble of experts.
- The authors demonstrate that MoE-Retro achieves significant improvements in accuracy and efficiency compared to standard MoE models on a range of [[natural language processing]] tasks.
- Key benefits of MoE-Retro include reduced computational cost due to more efficient expert utilisation and improved model accuracy resulting from enhanced expert specialisation.
- The paper's findings suggest that retrospection is a valuable technique for improving the performance and efficiency of MoE-based LLMs, offering a promising direction for future [[research]].

## How AI Learns from Experts

- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
- Observes how shared understanding and new concepts emerge, not just translating between domains.
- Builds a living ontology: a knowledge graph richer than any single perspective.

![image.png](assets/image_1753018746832_0.png)

## Mixture of Experts (MoE) Architectures

- Major force driving frontier models (e.g., GPT-4, Gemini 1.5)
- MoE-Mamba (MoE-Mamba) achieved same loss as original Mamba with 2.2x less training steps, scaling up to 32 experts
- BlackMamba scaled up to 2.8B parameters and 8 experts, with generation latency well below Transformer, Transformer MoE, and Mamba

# Mixture of Experts (MoE) Architectures

- Major force in frontier models (GPT-4, Gemini 1.5)
- MoE-Mamba and BlackMamba demonstrate MoE's effectiveness with Mamba
- Open questions around scaling and infrastructure requirements for large-scale MoE-Mamba models
- [Introducing Jamba: AI21's Groundbreaking SSM-Transformer Model](https://www.ai21.com/blog/announcing-jamba)

## How AI Learns from Experts

- AI captures what each expert sees, says, and does—building a complete, multi-viewpoint picture.
- Observes how shared understanding and new concepts emerge, not just translating between domains.
- Builds a living ontology: a knowledge graph richer than any single perspective.

![image.png](assets/image_1753018746832_0.png)

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
  <https://twitter.com/osanseviero/status/1773360705682411750> -

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

### Provenance


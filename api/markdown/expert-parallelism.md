- ### Definition
  - Expert parallelism is a specialised variant of [[Model Parallelism]] designed for [[Mixture of Experts]] architectures, in which the distinct expert sub-networks of a sparse transformer layer are placed on separate accelerators so that the total parameter count of the model can grow to hundreds of billions or even trillions without proportionally increasing the compute executed for any individual token. In a standard [[Mixture of Experts]] layer, a learned [[Routing Network]] — commonly called a gating function — scores each incoming token against all available experts and selects a small subset (typically top-1 or top-2) to process it; because the experts not selected for a given token contribute nothing to that forward pass, the model achieves conditional or [[Sparse Activation]] of its parameters. Expert parallelism operationalises this architecture in a [[Distributed Training]] setting by assigning each device responsibility for hosting a disjoint shard of the expert population: when a token's gating decision directs it to an expert residing on a different device, that token must be physically transmitted to the target device, processed by the expert there, and the result transmitted back. This inter-device token routing is performed by an [[All-to-All Communication]] collective — specifically two all-to-all operations per MoE layer, one for dispatch (sending tokens from their origin device to their expert devices) and one for combine (returning processed tokens to their origin devices). The dominant cost of expert parallelism therefore shifts from compute (which is kept constant by sparsity) to communication, making [[High-Speed Interconnect]] bandwidth the primary determinant of efficiency. Expert parallelism is almost universally combined with [[Data Parallelism]], [[Tensor Parallelism]], and [[Pipeline Parallelism]] in what has become known as 4D or 5D hybrid parallelism for training frontier models such as DeepSeek-V3, Mistral Large 3, and Kimi K2. Load balancing — ensuring that each expert receives approximately equal numbers of tokens across a training batch — is a critical stability concern because routing imbalance causes some devices to be compute-saturated while others sit idle, degrading throughput and potentially causing gradient instability.

- ### Semantic Classification
  - owl-class:: ai:ExpertParallelism
  - owl-role:: ExecutableProtocol | ComputationalParadigm
  - owl-inferred:: ai:SparseParallelismStrategy, ai:MoETrainingMethod, ai:DistributedComputingTechnique
  - belongs-to-domain:: [[Distributed Training]], [[Model Parallelism]], [[Machine Learning]]
  - implemented-in-layer:: [[ComputeLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Model Parallelism]], [[Distributed Training]], [[AI Infrastructure]]
  - has-part:: [[Routing Network]], [[All-to-All Communication]], [[Sparse Activation]], [[Capacity Factor]], [[Auxiliary Load Balancing Loss]], [[Token Dispatch Tensor]], [[Expert Combine Operation]]
  - requires:: [[GPU Cluster]], [[Load Balancing]], [[High-Speed Interconnect]], [[Collective Communication]], [[Routing Network]], [[NVIDIA NCCL]]
  - enables:: [[Large Language Models]], [[Foundation Model]], [[Trillion Parameter Model]], [[Sparse Language Model]], [[Conditional Computation]]
  - implements:: [[Mixture of Experts]], [[Sparse Activation]], [[Conditional Computation]], [[Token Routing]]
  - depends-on:: [[Model Parallelism]], [[All-to-All Communication]], [[Collective Communication]], [[Distributed Computing]], [[NVIDIA NCCL]]
  - supports:: [[Distributed Training]], [[Deep Learning]], [[Natural Language Processing]], [[Large Language Models]]
  - uses:: [[Sparse Activation]], [[Collective Communication]], [[DeepSpeed]], [[Megatron-Core]], [[PyTorch]], [[DeepEP]]
  - contrasts-with:: [[Tensor Parallelism]], [[Data Parallelism]], [[Pipeline Parallelism]], [[Dense Model Training]]
  - related-to:: [[Pipeline Parallelism]], [[Data Parallelism]], [[Tensor Parallelism]], [[ZeRO Redundancy Optimiser]], [[Gradient Checkpointing]], [[Mixed Precision Training]], [[Scaling Laws]], [[NVLink]]
  - standardized-by:: [[MLCommons]], [[NVIDIA NCCL]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:RoutingNetwork))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:AllToAllCommunication))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:SparseActivation))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:CapacityFactor))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:AuxiliaryLoadBalancingLoss))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:TokenDispatchTensor))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:hasPart ai:ExpertCombineOperation))
  ## Dependency Relationships
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:requires ai:GPUCluster))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:requires ai:HighSpeedInterconnect))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:requires ai:CollectiveCommunication))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:requires ai:LoadBalancing))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:dependsOn ai:ModelParallelism))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:dependsOn ai:AllToAllCommunication))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:dependsOn ai:DistributedComputing))
  ## Capability Relationships
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModel))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:enables ai:FoundationModel))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:enables ai:TrillionParameterModel))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:enables ai:SparseLanguageModel))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:supports ai:DistributedTraining))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:supports ai:DeepLearning))
  ## Implementation Relationships
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:implements ai:MixtureOfExperts))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:implements ai:SparseActivation))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:implements ai:ConditionalComputation))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:implements ai:TokenRouting))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:uses ai:DeepSpeed))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:uses ai:MegatronCore))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:uses ai:PyTorch))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:uses ai:NVIDIANCCL))
  ## Reduction Relationships
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:reducesTo ai:ModelParallelism))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:reducesTo ai:DistributedTraining))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:contrastsWith ai:TensorParallelism))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:contrastsWith ai:DenseModelTraining))
      SubClassOf(ai:ExpertParallelism
        ObjectSomeValuesFrom(ai:bridges ai:DistributedComputing))

  ## About

  Expert parallelism emerged from the intersection of two previously independent research threads: the [[Mixture of Experts]] paradigm for conditional computation in neural networks (Jacobs et al., 1991; Jordan & Jacobs, 1994) and the large-scale [[Distributed Training]] infrastructure developed for dense transformer models from 2018 onwards. The foundational insight enabling expert parallelism at scale was provided by Shazeer et al. (2017) in their seminal paper "Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer," which demonstrated that a gating mechanism selecting a sparse top-k subset of experts per token could be integrated into recurrent neural network stacks and trained stably via [[Backpropagation]] when combined with an auxiliary load-balancing loss. This paper identified the core tension that defines expert parallelism to this day: routing tokens sparsely across experts achieves the parameter-efficiency goal, but it creates a load-balancing problem in which the popularity distribution of experts under the learned gating function can be highly non-uniform, causing compute imbalance and degraded training stability.

  The transition from single-machine [[Mixture of Experts]] to expert parallelism across distributed accelerators was driven by the scale of modern language model pre-training. GShard (Lepikhin et al., Google, 2020) was the first system to demonstrate expert parallelism at scale, training a 600-billion-parameter MoE Transformer for neural machine translation on 2,048 TPU v4 cores. GShard introduced the capacity factor — a hyperparameter limiting how many tokens any single expert can process in one batch, with excess tokens dropped or passed through residual connections — and random secondary routing (in the top-2 configuration, the primary expert is always the argmax of the gating scores, but the secondary expert is sampled with probability proportional to its score rather than chosen deterministically) to soften routing imbalance. Switch Transformer (Fedus et al., Google, 2021) simplified the gating to top-1 routing and demonstrated that even a single-expert routing strategy could achieve stable training with strong performance, scaling to a 1.6-trillion-parameter model across 2,048 TPU cores and establishing expert parallelism as a mainstream distributed training strategy rather than a research curiosity.

  The defining characteristic of expert parallelism — that communication volume grows with expert count rather than with model depth — makes it qualitatively different from [[Tensor Parallelism]] and [[Pipeline Parallelism]]. In tensor parallelism, the communication per layer is fixed at two all-reduce operations regardless of model width. In expert parallelism, the all-to-all communication volume per MoE layer scales with the number of activated tokens times the expert hidden dimension, and the collective involves all-to-all routing that is fundamentally irregular and load-dependent in a way that all-reduce is not. The irregular, token-count-dependent nature of the all-to-all collective makes it significantly harder to overlap with computation than the structured all-reduce of data parallelism, and it creates performance sensitivity to routing imbalance that standard parallelism strategies do not share.

  ## Components and Architecture

  An expert-parallel MoE layer consists of several interacting components:

  **Gating / Routing Network:** A learned linear transformation from the input hidden state to a softmax distribution over E experts. The router outputs a probability vector of length E for each token; the top-k experts (most commonly k=1 or k=2) are selected. Recent architectures including DeepSeek-V3 employ a "no auxiliary-loss" load balancing approach using a complementary bias term on the routing logits, avoiding the quality degradation associated with explicit auxiliary loss penalties while maintaining load balance through adaptive bias updates.

  **Token Dispatch Tensor:** After routing decisions are made, a dispatch tensor encodes which tokens go to which experts. This is the primary input to the first all-to-all collective, which physically routes token activation vectors from their origin devices to the devices hosting their selected experts. The dispatch operation must handle variable-length expert loads gracefully — typically via the capacity factor, which caps the number of tokens any expert receives per batch, with overflow tokens either dropped or handled via a fallback routing.

  **Expert GEMM (General Matrix Multiplication):** Once tokens arrive at their expert device, they are processed by the expert's feed-forward network, which is structurally identical to a standard transformer MLP but with its parameters isolated to that device. Because the expert is not shared across devices in expert parallelism, the expert GEMM can use the full device memory bandwidth without any communication overhead during this compute phase.

  **Expert Combine Operation:** After expert processing, the second all-to-all collective routes the processed token activations back to their origin devices, where they are combined (weighted by the gating probabilities) to produce the final MoE layer output. In top-k routing with k>1, a token has multiple expert outputs that must be weighted and summed according to the gating probability scores before the residual addition.

  **Auxiliary Load Balancing Loss:** Because the learned gating function will naturally concentrate routing probability on a small number of preferred experts (routing collapse), auxiliary losses encourage load balance. The Switch Transformer auxiliary loss penalises the product of the fraction of tokens routed to each expert and the fraction of routing probability assigned to each expert, and is added to the main training loss with a small coefficient (typically 1e-2 to 1e-4). Excessive auxiliary loss coefficient degrades model quality; DeepSeek-MoE and DeepSeek-V3 replaced explicit auxiliary loss with an adaptive routing logit bias, achieving better model quality at equivalent load balance.

  **Capacity Factor and Token Dropping:** The capacity factor C sets the maximum number of tokens any expert may process in one forward pass, at C times the mean load (total_tokens / num_experts). Tokens routed to a full expert are either dropped (their representation passes through unchanged via the residual connection) or redirected to a secondary expert. Capacity factor tuning is a key efficiency lever: a value of 1.0 drops tokens at expert capacity; values of 1.25–2.0 waste compute on idle capacity buffers but prevent token dropping.

  ## Formal Algorithm: Expert Parallelism Forward Pass

  Given a mini-batch of T tokens, E experts distributed across D devices (E/D experts per device), and a top-k routing scheme with k=1:

  1. **Gate computation:** For each token t, compute router logit vector g_t ∈ R^E via the routing linear projection. Compute softmax probabilities p_t = softmax(g_t / τ) where τ is the temperature.
  2. **Expert selection:** For each token t, identify expert e(t) = argmax(p_t). Gating weight is w_t = p_{t,e(t)}.
  3. **Token dispatch (all-to-all #1):** Construct dispatch tensor. Execute all-to-all collective: each device sends its locally-held activations for tokens assigned to remote experts, and receives tokens from remote devices assigned to its local experts. Total communication: T × H bytes per device for H-dimensional hidden states, transmitted via NVLink for intra-node or InfiniBand for inter-node routing.
  4. **Expert computation:** Each device executes feed-forward computations for received tokens using its local expert sub-networks. Computation is proportional to received token count × expert FFN cost.
  5. **Expert combine (all-to-all #2):** Execute second all-to-all collective to return processed activations to origin devices. Each returned activation vector is multiplied by its gating weight w_t.
  6. **Residual addition:** Combine weighted expert outputs with the residual connection from before the MoE layer.
  7. **Auxiliary loss:** Add load-balance auxiliary loss L_aux to training loss. Update routing bias if using adaptive load balancing.

  ## Major Variants and Families

  **Top-1 Routing (Switch Transformer style):** Each token is routed to exactly one expert. Simplest communication pattern; best load balance when combined with auxiliary loss. Training instability observed at very large expert counts; mitigated by careful auxiliary loss tuning and initialisation.

  **Top-k Routing (k=2, GShard / Mixtral style):** Each token is routed to two experts, with weighted combination of outputs. Provides richer representational capacity per token at the cost of 2× communication volume. Mixtral 8×7B (Mistral AI, 2024) uses this scheme with 8 experts and top-2 routing, activating 2 of 8 experts per token.

  **Fine-Grained Expert Routing (DeepSeek-MoE):** DeepSeek-MoE (2024) introduced a large number of small experts (64–256 experts per layer) combined with top-K routing with K scaled proportionally to expert count, allowing finer-grained specialisation and more load balance headroom. DeepSeek-V3 employs 256 routed experts per MoE layer with 8 active per token, plus one shared expert always active, for a total of 671B parameters with 37B active per token.

  **Expert Choice Routing (Zhou et al., 2022):** Inverts the routing paradigm: instead of each token choosing its top-k experts, each expert chooses its top-C tokens from the batch. This guarantees perfect load balance by construction (each expert always processes exactly C tokens) but breaks causal masking for autoregressive generation and creates unequal per-token coverage.

  **Shared Expert Routing (DeepSeek-V3):** One or more experts are designated as shared experts that process every token in addition to the routed sparse experts. This provides a dense computation path that captures common patterns while the routed experts specialise, at the cost of increased per-token compute for the shared expert component.

  **Hybrid Expert Parallelism (NVIDIA Megatron-Core, 2026):** Megatron-Core supports a composite EP strategy combining intra-node NVLink expert parallelism (within a single server's 8 GPUs, using NVLink bandwidth) with inter-node InfiniBand expert parallelism (across nodes), assigning experts to a hierarchy of EP groups that match the interconnect topology.

  ## Use Cases

  **Pre-training Frontier Language Models:** Expert parallelism is now the dominant strategy for training the largest language models because it decouples parameter count from per-token compute. DeepSeek-V3 (671B total, 37B active per token) demonstrates that MoE with expert parallelism can match dense model quality at approximately 10× lower per-token compute cost. Mistral Large 3, Kimi K2, and the top-10 models on the Artificial Analysis leaderboard as of 2026 all employ MoE with expert parallelism.

  **Inference Scaling:** Expert parallelism is not limited to training; it also enables deployment of very large MoE models for inference. NVIDIA Blackwell NVL72 architecture, with its 57.6 TB/s total NVLink bandwidth, can host and serve Mixtral-class MoE models at 10× lower token cost than equivalent dense models, as reported by NVIDIA's 2025 blog. Disaggregated expert parallelism (DEP) separates prefill and decoding across different GPU pools with different expert parallelism strategies, optimising for latency in autoregressive decoding while maintaining throughput in prefill.

  **Specialised Domain Models:** Expert parallelism naturally supports specialised domain routing: different experts may implicitly specialise for code, mathematics, multilingual text, or domain-specific content without explicit supervision. Research indicates that MoE experts in well-trained models develop interpretable specialisation patterns, making expert parallelism attractive for multi-domain applications.

  **Continual Learning and Expert Expansion:** Expert parallelism enables a form of continual learning by adding new experts to a pre-trained MoE model without re-training existing experts, using the routing network to learn which inputs to direct to new vs. existing experts.

  ## Academic Context

  The intellectual lineage of expert parallelism traces through three distinct research traditions. The [[Mixture of Experts]] paradigm originates with Jacobs, Jordan, Nowlan & Hinton (1991), who introduced the ensemble learning idea of multiple specialised sub-networks with a soft-gating combination mechanism. Jordan & Jacobs (1994) formalised this as a hierarchical mixture of experts (HME) with a tree-structured gating network, providing a generative model interpretation via the Expectation-Maximisation algorithm. These early models were small-scale supervised learning architectures without any connection to distributed computing or language modelling at scale.

  The connection to large neural networks and conditional computation was articulated theoretically by Bengio et al. (2015) in "Conditional Computation in Neural Networks for Faster Models," which argued that sparse conditional computation could enable the training of much larger networks without proportionally increasing inference cost — the core efficiency argument that underpins expert parallelism. Shazeer et al. (2017) operationalised this for RNNs at token level, and demonstrated that with a noisy top-k routing mechanism and auxiliary load-balancing loss, MoE layers could be stably trained and outperformed dense baselines at equivalent parameter budget. This paper introduced the key training engineering elements — noisy top-k, capacity factor, auxiliary loss — that remain standard in 2026 implementations.

  The distributed systems aspect of expert parallelism was pioneered by GShard (Lepikhin et al., Google Brain, 2020), which demonstrated for the first time that all-to-all token routing across thousands of TPU cores could be implemented efficiently using XLA's automatic sharding and the GShard API. The Switch Transformer (Fedus et al., 2021) brought expert parallelism to the transformer architecture and demonstrated its benefits in a language modelling context, establishing top-1 routing as a viable simplification of the top-k approach. GLaM (Du et al., Google, NeurIPS 2021) trained a 1.2-trillion-parameter MoE language model and demonstrated improved sample efficiency relative to GPT-3 at equivalent training compute budget.

  The 2022–2024 period saw rapid industrialisation of expert parallelism. ST-MoE (Zoph et al., 2022) provided a systematic study of MoE training stability and the router z-loss for controlling gating confidence. Mixtral 8×7B (Mistral AI, 2024) was the first openly released frontier MoE LLM, demonstrating that top-2 routing with 8 experts could match or exceed Llama 2 70B at 2× lower active parameter count per token. DeepSeek-MoE (DeepSeek AI, 2024) pushed expert count to 64 fine-grained experts per layer, and DeepSeek-V3 (2024) to 256, demonstrating that very large expert populations with fine-grained routing could achieve state-of-the-art language model quality. Megatron-Core's Scalable MoE Training paper (2026) provides the most comprehensive publicly available treatment of production expert parallelism engineering, covering FP8 training support, hierarchical EP, and throughput benchmarking on GB200 NVL72.

  Key research groups include Google Brain / DeepMind (GShard, Switch Transformer, GLaM, ExpertChoice), Microsoft Research and NVIDIA (Megatron-Core, DeepSpeed-MoE), Mistral AI (Mixtral 8×7B, Mistral Large 3), and DeepSeek AI (DeepSeek-MoE, DeepSeek-V2, DeepSeek-V3). Academic groups at Carnegie Mellon University, MIT, the University of Edinburgh, and UCL contribute to MoE theory, routing algorithm design, and load-balancing research.

  ## Current Landscape (2026)

  As of mid-2026, expert parallelism has become the dominant strategy for frontier model pre-training, with nearly all top-10 benchmark models using MoE architectures. The NVIDIA Blackwell GB200 NVL72 architecture is particularly well-suited to expert parallelism at scale: its 57.6 TB/s total NVLink fabric connects 72 B200 GPUs in a single NVLink domain, enabling intra-rack expert parallelism with NVLink bandwidth for expert populations up to 72 GPUs in size before requiring inter-node InfiniBand routing. Megatron-Core achieves 1,233 TFLOPS/GPU for DeepSeek-V3-685B training on GB200 NVL72, demonstrating production-grade efficiency for large-scale expert parallelism.

  The NCCL EP library (NVIDIA, 2026) provides the first unified native expert parallelism communication API for the [[NVIDIA NCCL]] collective communication library, implementing ncclEpDispatch and ncclEpCombine primitives with Low-Latency mode (for inference decoding, using full all-to-all mesh connectivity with double-buffered communication) and High-Throughput mode (for training and inference prefill, using hierarchical NVLink-then-InfiniBand routing). DeepEP, released by DeepSeek AI as an open-source library, was an influential precursor exploiting NVIDIA Hopper GPU-specific intrinsics (NVLS, NVLink SHARP) for intra-node expert dispatch with substantially lower latency than general NCCL primitives. UCCL-EP (2025) extended similar capabilities to non-Hopper hardware and AMD ROCm, enabling portable expert parallelism communication.

  Inference-time expert parallelism has emerged as a distinct engineering discipline from training-time expert parallelism. vLLM's MoE playbook documents best practices for combining tensor parallelism, data parallelism, and expert parallelism in production MoE inference serving. Disaggregated Expert Parallelism (DEP) separates the expert populations serving prefill computation from those serving decoding computation, allowing different parallelism strategies to be applied to each phase to optimise for their distinct latency and throughput characteristics.

  Load-balancing research continues to be active: the Least-Loaded Expert Parallelism paper (2025) proposes dynamic expert assignment that matches tokens to currently least-loaded experts at inference time rather than relying solely on learned routing, reducing tail latency in production MoE serving. The FlowMoE scheduling framework (2025) provides a pipeline scheduling approach specifically for distributed MoE training that overlaps expert computation with all-to-all communication to hide the dispatch latency.

  ## UK Context

  The UK's engagement with expert parallelism is primarily through the Isambard-AI supercomputer at the University of Bristol (5,400 NVIDIA GH200 Grace Hopper Superchips, launched July 2025) and the AIRR programme administered by DSIT. While GH200 is based on the Hopper architecture, the NVLink-C2C CPU-GPU interconnect enables efficient intra-node expert parallelism for MoE model training and inference. UK academic users of Isambard-AI under the AIRR programme include groups from the University of Edinburgh School of Informatics (active in [[Mixture of Experts]] research for multilingual NLP), University College London (Centre for Artificial Intelligence, working on sparse model architectures for medical imaging), and Imperial College London Department of Computing (applying MoE-based [[Foundation Model]] fine-tuning for NHS clinical text).

  Graphcore, the Bristol-based AI hardware company, designed its Intelligence Processing Unit (IPU) with features particularly suited to sparse computation, including large in-processor SRAM enabling low-latency expert dispatch without the off-chip DRAM bandwidth constraints of GPU architectures. While Graphcore's commercial trajectory has been challenging, the IPU architecture represents a UK-developed hardware innovation relevant to expert parallelism. ARM Holdings' design of the Grace CPU (used in GH200 and the Isambard-AI system) places UK processor architecture expertise at the heart of the expert parallelism infrastructure supporting UK academic AI research.

  The Alan Turing Institute coordinates UK research on efficient large-scale AI training, with expert parallelism and sparse model architectures featuring in its strategic research agenda for 2025–2030. UK fintech and biomedical AI companies including BenevolentAI (London), Relation Therapeutics, and Wayve are deploying or training MoE-based models for drug discovery and autonomous vehicle applications, contributing to UK industrial expertise in expert parallelism at production scale.

  ## Future Directions (2026–2030)

  Several research and engineering directions will shape expert parallelism over the next four years. Adaptive expert population sizing — dynamically allocating GPUs to expert groups based on observed routing patterns during training — is an emerging research direction that could improve hardware utilisation over static expert assignment. Multi-granularity expert hierarchies (experts at different scales within the same model, from very coarse domain-level routing to fine-grained sub-token routing) may provide better performance than uniform expert size distributions.

  Expert parallelism and [[Federated Learning]] convergence is an emerging application: MoE models could enable privacy-preserving learning where different organisations contribute to expert populations without sharing raw data, with routing learning to direct queries towards appropriate institutional expertise. Expert pruning and knowledge distillation from large sparse MoE models to smaller dense models is an active research area, with methods such as MC-SMoE (2023) demonstrating that merged dense models can recover much of the MoE quality.

  Hardware evolution will continue to reshape expert parallelism trade-offs. Wafer-scale architectures (Cerebras WSE-3) reduce the all-to-all communication penalty for expert routing by placing experts within a single on-chip interconnect fabric. Optical interconnects for GPU clusters, expected in commercial deployments by 2028–2030, may reduce the bandwidth disparity between intra-node NVLink and inter-node InfiniBand, making large inter-node expert parallelism degrees more practical. Structured sparsity (2:4 sparsity native to NVIDIA Hopper and Blackwell) combined with expert sparsity opens the possibility of doubly-sparse models that exploit both per-expert activation sparsity and within-expert weight sparsity.

  ## Research and Literature

  1. Jacobs, R. A., Jordan, M. I., Nowlan, S. J., & Hinton, G. E. (1991). Adaptive mixtures of local experts. *Neural Computation*, 3(1), 79–87.
  2. Jordan, M. I., & Jacobs, R. A. (1994). Hierarchical mixtures of experts and the EM algorithm. *Neural Computation*, 6(2), 181–214.
  3. Bengio, E., Bacon, P. L., Pineau, J., & Precup, D. (2015). Conditional computation in neural networks for faster models. *arXiv:1511.06297*.
  4. Shazeer, N., Mirhoseini, A., Maziarz, K., et al. (2017). Outrageously large neural networks: The sparsely-gated mixture-of-experts layer. *ICLR 2017*. arXiv:1701.06538.
  5. Lepikhin, D., Lee, H., Xu, Y., et al. (2020). GShard: Scaling giant models with conditional computation and automatic sharding. *arXiv:2006.16668*.
  6. Fedus, W., Zoph, B., & Shazeer, N. (2021). Switch Transformers: Scaling to trillion parameter models with simple and efficient sparsity. *arXiv:2101.03961*.
  7. Du, N., Huang, Y., Dai, A. M., et al. (2021). GLaM: Efficient scaling of language models with mixture-of-experts. *NeurIPS 2021* / *arXiv:2112.06905*.
  8. Zhou, Y., Lei, T., Liu, H., et al. (2022). Mixture-of-experts with expert choice routing. *NeurIPS 2022*. arXiv:2202.09368.
  9. Zoph, B., Bello, I., Kumar, S., et al. (2022). ST-MoE: Designing stable and transferable sparse expert models. *arXiv:2202.08906*.
  10. Kim, Y., Oh, S., & Moon, I.-C. (2022). Scalable and efficient MoE training for multitask multilingual models. *EMNLP 2022*.
  11. Rajbhandari, S., Li, C., Yao, Z., et al. (2022). DeepSpeed-MoE: Advancing mixture-of-experts inference and training to power next-generation AI scale. *ICML 2022*. arXiv:2201.05596.
  12. Artetxe, M., Bhosale, S., Goyal, N., et al. (2021). Efficient large scale language modeling with mixtures of experts. *EMNLP 2021*. arXiv:2112.10684.
  13. Jiang, A. Q., Sablayrolles, A., Roux, A., et al. (2024). Mixtral of Experts. *arXiv:2401.04088*.
  14. Dai, D., Deng, C., Zhao, C., et al. (2024). DeepSeekMoE: Towards ultimate expert specialization in mixture-of-experts language models. *arXiv:2401.06066*.
  15. DeepSeek-AI. (2024). DeepSeek-V3 Technical Report. *arXiv:2412.19437*.
  16. Korthikanti, V., Casper, J., Lym, S., et al. (2022). Reducing activation recomputation in large transformer models. *MLSys 2022*.
  17. Gale, T., Narayanan, D., Young, C., & Zaharia, M. (2023). MegaBlocks: Efficient sparse training with mixture-of-experts. *MLSys 2023*.
  18. Clark, A., de Las Casas, D., Guy, A., et al. (2022). Unified scaling laws for routed language models. *ICML 2022*.
  19. Lepikhin, D., et al. (2022). Scaling giant models with conditional computation via GShard. *ICLR 2022*.
  20. NVIDIA. (2025). Mixture of Experts powers frontier AI models, runs 10× faster on Blackwell NVL72. NVIDIA Blog. https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/
  21. NVIDIA. (2026). Scalable Training of Mixture-of-Experts Models with Megatron Core. arXiv:2603.07685.
  22. NVIDIA. (2026). NCCL EP: Towards a Unified Expert Parallel Communication API for NCCL. arXiv:2603.13606.
  23. DeepSeek. (2024). DeepEP: An open-source efficient expert parallelism library for NVIDIA Hopper. GitHub Repository.
  24. Hwang, C., Cui, W., Xiong, Y., et al. (2023). Tutel: Adaptive mixture-of-experts at scale. *MLSys 2023*.
  25. DigitalOcean. (2025). Expert Parallelism: Scaling Mixture-of-Experts Models. https://www.digitalocean.com/community/tutorials/expert-parallelism-in-deep-learning
  26. FlowMoE. (2025). A scalable pipeline scheduling framework for distributed mixture-of-experts training. arXiv:2510.00207.
  27. UCCL-EP. (2025). Portable expert-parallel communication. arXiv:2512.19849.
  28. University of Bristol. (2025). Isambard-AI launches. https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html

- ### Provenance
  - sources:: Shazeer et al. (2017) arXiv:1701.06538; Lepikhin et al. (2020) arXiv:2006.16668; Fedus et al. (2021) arXiv:2101.03961; Jiang et al. (2024) arXiv:2401.04088; DeepSeek-AI (2024) arXiv:2412.19437; NVIDIA Megatron-Core MoE (2026) arXiv:2603.07685; NCCL EP arXiv:2603.13606; DigitalOcean Expert Parallelism tutorial https://www.digitalocean.com/community/tutorials/expert-parallelism-in-deep-learning; NVIDIA MoE Frontier Models https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/; Isambard-AI https://www.bristol.ac.uk/research/centres/bristol-supercomputing/articles/2025/isambard-ai-launches-july-2025.html
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
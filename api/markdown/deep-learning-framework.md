- ### Definition
  - A [[Deep Learning]] Framework is a software library or toolkit that provides the foundational abstractions, computational primitives, and tooling required to define, train, evaluate, and deploy [[Deep Learning]] models based on [[Neural Network]] architectures. Such frameworks expose multidimensional array (tensor) operations, [[Automatic Differentiation]] engines for computing gradients of the [[Loss Function]] with respect to all trainable parameters, and built-in [[Hardware Acceleration]] backends targeting [[GPU Compute]], TPUs, and specialised accelerators via interfaces such as [[CUDA]]. They construct and execute [[Computation Graph]] representations of [[Model Architecture]] specifications — either dynamically at runtime (define-by-run, as in [[PyTorch]]) or statically ahead of time (define-and-run, as in early [[TensorFlow]]) — and schedule the forward and backward passes that constitute [[Backpropagation]]-driven training. Higher-level components provided by frameworks include layer primitives (linear, convolutional, recurrent, attention), standardised [[Activation Function]] implementations, a library of optimisers implementing [[Stochastic Gradient Descent]] and adaptive variants (Adam, AdamW, Lion), regularisation utilities, data-loading pipelines, and distributed communication collectives enabling [[Distributed Training]] across multi-GPU and multi-node clusters. At the production boundary, frameworks expose export formats (TorchScript, SavedModel, ONNX, StableHLO) and serve as the upstream supply chain for inference runtimes, enabling [[Model Inference]] and [[Transfer Learning]] workflows. Contemporary frameworks such as [[JAX]] extend the paradigm with composable functional transforms (jit, grad, vmap, pmap) compiled via XLA, offering a functional programming model that separates numerical program specification from hardware execution strategy. Emerging frameworks such as [[MLX]] target Apple Silicon with unified memory models. All major frameworks are primarily accessed through [[Python]] interfaces, cementing Python's role as the lingua franca of modern [[Machine Learning]] research and engineering.

- ### Semantic Classification
  - owl-class:: deep-learning:DeepLearningFramework
  - owl-role:: ExecutableProtocol
  - owl-inferred:: ai:SoftwareLibrary, ai:ComputationalSubstrate
  - belongs-to-domain:: [[AI-GroundedDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Deep Learning Domain]], [[Machine Learning]]
  - has-part:: [[Automatic Differentiation]], [[Tensor Operation]], [[Computation Graph]], [[Loss Function]], [[Activation Function]], [[Model Architecture]]
  - requires:: [[Automatic Differentiation]], [[Hardware Acceleration]], [[CUDA]], [[Python]]
  - enables:: [[Backpropagation]], [[Neural Network]] training, [[Transfer Learning]], [[Distributed Training]], [[Model Inference]], [[Large Language Model]] development
  - implements:: [[Stochastic Gradient Descent]], [[Convolutional Neural Network]], [[Transformer]], [[Recurrent Neural Network]]
  - depends-on:: [[GPU Compute]], [[Gradient Descent]]
  - supports:: [[Distributed Training]], [[Mixed Precision Training]], [[Federated Learning]]
  - uses:: [[Python]], [[Computation Graph]]
  - contrasts-with:: [[Symbolic AI]]
  - related-to:: [[PyTorch]], [[TensorFlow]], [[JAX]], [[MLX]], [[Backpropagation]], [[Loss Function]], [[Activation Function]]
  - standardized-by:: [[IEEE (Institute of Electrical and Electronics Engineers)]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:AutomaticDifferentiation))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:TensorOperation))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:ComputationGraph))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:LossFunction))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:ActivationFunction))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:Optimiser))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:hasPart ai:ModelArchitecture))
  ## Dependency Relationships
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:requires ai:AutomaticDifferentiation))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:requires ai:HardwareAcceleration))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:requires ai:Python))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:dependsOn ai:GPUCompute))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:dependsOn ai:GradientDescent))
  ## Capability Relationships
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:Backpropagation))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:NeuralNetworkTraining))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:TransferLearning))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:DistributedTraining))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:ModelInference))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModelDevelopment))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:supports ai:MixedPrecisionTraining))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:supports ai:FederatedLearning))
  ## Implementation Relationships
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:implements ai:StochasticGradientDescent))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:implements ai:ConvolutionalNeuralNetwork))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:implements ai:Transformer))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:implements ai:RecurrentNeuralNetwork))
  ## Reduction Relationships
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:reducesTo ai:NumericalComputationLibrary))
      SubClassOf(ai:DeepLearningFramework
        ObjectSomeValuesFrom(ai:reducesTo ai:MachineLearningSoftware))

  ## About
  Deep learning frameworks constitute the foundational software infrastructure of modern artificial intelligence research and production engineering. At their core, they solve a dual challenge: expressing the mathematical structure of [[Neural Network]] architectures with sufficient abstraction that researchers can iterate rapidly, whilst generating hardware-efficient execution plans that exploit the massive parallelism available in modern [[GPU Compute]] and tensor processing units. The defining technical characteristic of a deep learning framework is its [[Automatic Differentiation]] engine, which tracks operations on tensors through a [[Computation Graph]] and computes exact analytical gradients by applying the chain rule in reverse — the computation known as [[Backpropagation]]. This automated gradient calculation made it practical to train networks with millions of parameters by [[Gradient Descent]], transforming what had been a laborious hand-derivation exercise into a routine engineering operation.

  The field reached a decisive inflection point with the release of Theano (2010, Université de Montréal), which first demonstrated that symbolic differentiation over tensor expressions could be compiled to GPU code. Torch (2002, later reimplemented as [[PyTorch]] in 2016 by Facebook AI Research) introduced the define-by-run dynamic graph paradigm in which the [[Computation Graph]] is constructed on-the-fly as Python code executes, making debugging with standard tools straightforward. Google's [[TensorFlow]] (2015) began with a static define-and-run model emphasising production deployment and compilation optimisation but added eager execution (TF 2.x, 2019) to match PyTorch's interactivity. [[JAX]] (Google Research, 2018) took a fundamentally different approach: rather than a neural network library, JAX is a functional transformation engine for NumPy-compatible code, offering composable transforms — jit for just-in-time compilation via XLA, grad for automatic differentiation, vmap for vectorisation over batches, and pmap for parallelisation across devices — that can be arbitrarily composed. This design makes JAX the preferred substrate for cutting-edge research requiring custom gradient behaviour, large-scale TPU training, and hardware-agnostic numerical experimentation. Apple's [[MLX]] (2023) brought a unified-memory, functional approach to Apple Silicon, reaching performance 2–3× faster than PyTorch MPS on identical hardware for LLM inference by 2025.

  Frameworks abstract over the full training lifecycle: data loading and augmentation pipelines, weight initialisation strategies, optimiser state management, [[Mixed Precision Training]] using IEEE float16 and bfloat16 formats to reduce memory pressure, gradient clipping, learning-rate schedulers, checkpoint saving, and distributed collective operations (all-reduce, all-gather) enabling [[Distributed Training]] across hundreds of GPUs. The ONNX (Open Neural Network Exchange) interchange format, supported by both [[PyTorch]] and [[TensorFlow]], and Google's StableHLO format allow trained models to be exported from research frameworks and deployed to inference runtimes (TensorRT, ONNX Runtime, OpenVINO, Core ML) optimised for production latency and throughput, including on edge hardware supporting [[Edge Inference]].

  ## Framework Families and Design Philosophies

  ### Define-by-Run (Dynamic Graph) Frameworks
  [[PyTorch]], released by Facebook AI Research (now Meta AI) in 2016, dominates research with over 55% of research publication adoption and 37.7% of AI job postings as of 2025–2026. PyTorch's imperative Python programming model, rich ecosystem (Hugging Face Transformers, PyTorch Lightning, torchvision, torchaudio), and TorchDynamo/torch.compile compiler stack for production performance have made it the default framework for foundation model research, including the training of GPT-4, Llama, Mistral, and DeepSeek families. The PyTorch Distributed library (DDP, FSDP, RPC) supports parallelism strategies including data parallelism, tensor parallelism, and pipeline parallelism across thousands of GPUs.

  ### Define-and-Run (Static Graph) Frameworks
  [[TensorFlow]] (Google, 2015) pioneered large-scale production ML deployment and remains the backbone of ML systems at Google, Uber, Airbnb, and thousands of enterprise deployments, holding approximately 32.9% of AI job listings in 2025. TensorFlow Extended (TFX) provides an end-to-end production ML pipeline. Keras, originally an independent high-level API, became the official TensorFlow frontend and was restructured as multi-backend Keras 3 in 2023, supporting TensorFlow, [[JAX]], and [[PyTorch]] backends.

  ### Functional Transform Frameworks
  [[JAX]] (Google Research, 2018) has gained significant momentum, especially among high-performance computing researchers and organisations focused on TPU training. Its four composable primitives — jit, grad, vmap, pmap — combined with XLA compilation provide an extraordinary performance ceiling. Google's internal model development, including Gemini and PaLM, uses JAX on TPU pods. The Flax and Equinox neural network libraries built on JAX provide PyTorch-like ergonomics over JAX's functional primitives. Google's Orbax checkpointing and Optax optimiser libraries complete the JAX ecosystem.

  ### Edge and On-Device Frameworks
  [[MLX]] (Apple, 2023) targets Apple Silicon's unified memory architecture, enabling LLM inference and fine-tuning on Mac, iPhone, and iPad with Metal 4 GPU Neural Accelerator support added at WWDC 2025. ONNX Runtime, TensorFlow Lite, and Core ML serve as cross-platform inference runtimes for edge deployment. MindSpore (Huawei) targets Ascend NPUs for Chinese market deployments.

  ## Architecture and Core Components

  ### Tensor Engine
  The tensor engine provides n-dimensional array operations (element-wise arithmetic, matrix multiplication, reduction operations, broadcasting, indexing, slicing) executed on host CPU or accelerator backends. Operations are dispatched through a backend abstraction layer to vendor-optimised kernels (cuDNN on NVIDIA GPUs, oneDNN on Intel CPUs, Metal Performance Shaders on Apple Silicon). Triton (OpenAI, 2021) provides a Python-embedded DSL for writing custom GPU kernels that compile to PTX/AMDGCN, enabling framework developers and researchers to write hardware-close kernels without raw CUDA C.

  ### Automatic Differentiation Engine
  The [[Automatic Differentiation]] engine records operations on tensors into a [[Computation Graph]] (tape-based in PyTorch autograd, purely functional in JAX). Reverse-mode differentiation (the [[Backpropagation]] algorithm) traverses this graph backward from the scalar loss value, accumulating gradients for each leaf variable via the chain rule. Forward-mode differentiation (jvp in JAX) is available for Jacobian-vector products. Higher-order derivatives are supported through nested differentiation.

  ### Optimiser Library
  The optimiser library implements parameter update rules including [[Stochastic Gradient Descent]] with momentum, RMSProp, Adam (Kingma & Ba, 2014), AdamW (Loshchilov & Hutter, 2017), and Lion (Chen et al., 2023). Optimisers maintain first- and second-moment estimates of gradients and apply [[Mixed Precision Training]] scaling to prevent underflow in float16 accumulations.

  ### Model Definition APIs
  High-level APIs (torch.nn.Module, tf.keras.Model, flax.linen.Module) provide composable layer building blocks: Linear, Conv2d, LSTM, MultiheadAttention, LayerNorm, Embedding. These APIs support parameter sharing, weight tying, and hierarchical module composition enabling definition of [[Convolutional Neural Network]], [[Transformer]], [[Recurrent Neural Network]], and hybrid architectures.

  ### Distributed Training Infrastructure
  [[Distributed Training]] backends implement collective communication (NCCL for NVIDIA GPUs, GLOO for CPU, MPI-compatible collectives) for data-parallel training via Distributed Data Parallel (DDP), fully-sharded data parallel (FSDP/ZeRO) for trillion-parameter model training, and pipeline parallelism. DeepSpeed (Microsoft) and Megatron-LM (NVIDIA) extend PyTorch with advanced sharding strategies for very large [[Large Language Model]] training.

  ## Use Cases

  ### Foundation Model Training
  Modern [[Large Language Model]] training (GPT-4, Llama 3, Gemini, Mistral, DeepSeek) is conducted exclusively in deep learning frameworks — primarily [[PyTorch]] for most open-source models and [[JAX]] for Google's internal models — across clusters of thousands of NVIDIA H100/H200 GPUs or Google TPU v5 pods. [[Distributed Training]] with FSDP or Megatron-LM shards model weights, optimiser states, and activations across devices to fit trillion-parameter models in aggregate GPU memory.

  ### Computer Vision Research
  [[Convolutional Neural Network]] architectures (ResNet, EfficientNet, ConvNeXt), Vision Transformers (ViT, Swin Transformer), and diffusion model architectures (U-Net, DiT) for image generation are specified and trained in [[PyTorch]] or [[JAX]]. torchvision and the Hugging Face datasets library provide standard benchmark datasets (ImageNet, COCO, LAION).

  ### Natural Language Processing
  Transformer-based architectures for [[Large Language Model]] pre-training, fine-tuning, and instruction tuning are primary workloads. The Hugging Face Transformers library, built atop [[PyTorch]] and [[TensorFlow]], provides pre-trained checkpoints and fine-tuning utilities for thousands of models.

  ### Scientific Machine Learning
  Physics-informed neural networks, molecular property prediction (graph neural networks in PyTorch Geometric), protein structure prediction (AlphaFold 2/3 in [[JAX]]), and differentiable simulation are active research domains leveraging framework automatic differentiation beyond standard supervised learning.

  ### [[Federated Learning]] and Privacy-Preserving ML
  Frameworks integrate with federated learning libraries (PySyft, Flower, TensorFlow Federated) that coordinate [[Distributed Training]] across decentralised data sources without raw data centralisation, relevant to NHS and financial data governance constraints.

  ## Academic Context

  Deep learning frameworks originated from numerical computing libraries. NumPy (Travis Oliphant, 2006) established the n-dimensional array programming model in Python. Theano (Bergstra et al., Université de Montréal, 2010) first demonstrated differentiable tensor computation compiled to GPU code. Torch (Collobert et al., 2002; LuaJIT rewrite 2011) provided an imperative tensor library in Lua. Caffe (Jia et al., Berkeley Vision Lab, 2014) introduced a declarative layer definition format widely used in [[Convolutional Neural Network]] research.

  The 2016–2018 period saw the decisive consolidation around [[TensorFlow]] and [[PyTorch]], driven by the scale of industry investment (Google and Meta respectively) and the explosive growth of deep learning applications. Paszke et al. (2019) described PyTorch's design philosophy — automatic differentiation as a first-class feature of a Pythonic imperative programming model — in a landmark NeurIPS paper. Abadi et al. (2016) described TensorFlow's dataflow graph execution model at OSDI. Bradbury et al. (2018) introduced JAX's functional transform approach.

  Key theoretical underpinnings of frameworks include: Werbos's (1974) thesis introducing backpropagation as dynamic programming on computation graphs; Rumelhart, Hinton & Williams (1986) on gradient learning in multi-layer networks; Baydin et al. (2018) on the taxonomy of automatic differentiation modes; and Goodfellow, Bengio & Courville (2016) "Deep Learning" as the canonical textbook reference.

  ## Current Landscape (2026)

  As of mid-2026, [[PyTorch]] commands over 55% of research publication adoption and leads in the generative AI ecosystem, model-hub volume (Hugging Face hosts over 1 million PyTorch-format checkpoints), and hiring momentum (37.7% of AI job listings). [[TensorFlow]] retains approximately 32.9% of job listings, anchored by enterprise production deployments. [[JAX]] has achieved serious momentum in high-performance research and at Google, which uses it for Gemini training on TPU pods.

  Worldwide AI infrastructure spending is projected to reach approximately $2.5 trillion in 2026 (Gartner), driving demand for framework engineering expertise. The framework landscape is expanding beyond the three dominant players: [[MLX]] from Apple serves the on-device research community with Metal 4 acceleration; MindSpore serves Huawei Ascend deployments; and OpenAI's Triton kernel language enables framework-adjacent custom GPU kernel development. The torch.compile path (TorchDynamo + TorchInductor) now provides near-XLA compilation efficiency within the [[PyTorch]] eager programming model, narrowing the performance gap with [[JAX]] for production workloads. Keras 3 (2023) unifies the high-level API surface across [[TensorFlow]], [[JAX]], and [[PyTorch]] backends, reducing vendor lock-in for high-level model definition code.

  ## UK Context

  The UK hosts major deep learning framework research and industrial adoption ecosystems. DeepMind (London, now Google DeepMind), which developed AlphaFold (2020, 2021, 2022), AlphaStar, and Gemini, has been a primary industrial consumer of [[JAX]] and [[TensorFlow]], driving JAX's development of large-scale TPU training infrastructure. The Alan Turing Institute (London) serves as the national centre for data science and AI, with affiliated university groups at Edinburgh, Cambridge, Oxford, UCL, Manchester, and Warwick conducting framework-level research including automatic differentiation theory, hardware-software co-design, and efficient training methods.

  University of Edinburgh's Bayes Centre and ELIAI group maintain strong [[JAX]] and [[PyTorch]] research programmes. UCL leads the UKRI national generative AI hub, combining research with Imperial College London, Cardiff, Cambridge, Manchester, Edinburgh, and Surrey, with framework engineering as a core competency. Imperial College London's Data Science Institute conducts research into framework-level optimisation and scientific ML. Cambridge's Computer Laboratory has contributed to automatic differentiation theory and program transformation methods foundational to [[JAX]]'s design.

  In Northern England, Manchester's £120 million AI research hub (opened 2024) is among the largest AI infrastructure investments in UK university history, with deep learning framework benchmarking and distributed computing research. Leeds Institute for Data Analytics applies [[PyTorch]] and [[TensorFlow]] to industrial ML problems in manufacturing, logistics, and healthcare. Sheffield's Advanced Manufacturing Research Centre uses [[PyTorch]]-based models for predictive maintenance. Newcastle's Digital Institute integrates deep learning frameworks in autonomous systems research.

  The NHS's £150 million AI framework agreement and the government's £10 billion NHS technology investment (Spending Review 2025) are driving widespread adoption of [[PyTorch]] and [[TensorFlow]]-based medical imaging AI, clinical decision support, and administrative automation systems across England, with 23% of UK businesses now using some form of AI (up from 9% in 2023). The UK government's Isambard-AI supercomputer at Bristol University (launched July 2025) and the planned sixfold expansion of Cambridge supercomputer capacity provide HPC infrastructure underpinning framework-scale model training.

  ## Future Directions (2026–2030)

  Several trajectories are shaping the evolution of deep learning frameworks. Compiler stacks (torch.compile, XLA, MLIR) will increasingly bridge the gap between high-level framework APIs and hardware-specific code generation, potentially enabling a single codebase to target NVIDIA, AMD, Intel, Apple, and Huawei accelerators. The disaggregation of the framework stack — separating tensor operations (ATen), automatic differentiation (autograd), and compilation (TorchInductor/XLA) — is enabling a more modular ecosystem where components can be mixed and matched.

  [[Federated Learning]] integration at the framework level will grow in response to data governance requirements (UK GDPR, NHS data governance), with frameworks providing native differential privacy and secure aggregation primitives. Hardware-software co-design will drive framework changes: transformer attention kernels (FlashAttention, FlashAttention-2/3, PagedAttention) already require framework-level integration to expose their memory-efficient CUDA implementations. Neuromorphic and photonic computing hardware will require new execution backends beyond the GPU/TPU duopoly.

  The shift from pre-training at scale to efficient fine-tuning (LoRA, QLoRA, GRPO) is reshaping framework priorities toward parameter-efficient training utilities. Edge deployment demand is driving mobile-first framework features: on-device training on smartphones via [[MLX]] on iOS, and Core ML/TensorFlow Lite optimisations for real-time inference. Quantum-classical hybrid computation, explored in PennyLane and Qiskit's PyTorch integration, may produce a new class of frameworks bridging classical deep learning and quantum circuit execution.

  ## Research and Literature

  1. Rumelhart, D. E., Hinton, G. E., & Williams, R. J. (1986). Learning representations by back-propagating errors. *Nature*, 323(6088), 533–536.
  2. Bergstra, J., Breuleux, O., Bastien, F., et al. (2010). Theano: A CPU and GPU math expression compiler. *Proceedings of the Python for Scientific Computing Conference (SciPy)*. Montreal, Canada.
  3. Collobert, R., Kavukcuoglu, K., & Farabet, C. (2011). Torch7: A MATLAB-like environment for machine learning. *BigLearn, NIPS Workshop*.
  4. Jia, Y., Shelhamer, E., Donahue, J., et al. (2014). Caffe: Convolutional architecture for fast feature embedding. *ACM MM*.
  5. Abadi, M., Barham, P., Chen, J., et al. (2016). TensorFlow: A system for large-scale machine learning. *12th USENIX Symposium on Operating Systems Design and Implementation (OSDI 16)*, 265–283.
  6. Paszke, A., Gross, S., Massa, F., et al. (2019). PyTorch: An imperative style, high-performance deep learning library. *Advances in Neural Information Processing Systems (NeurIPS)*, 32.
  7. Bradbury, J., Frostig, R., Hawkins, P., et al. (2018). JAX: Composable transformations of Python+NumPy programs. GitHub. http://github.com/google/jax
  8. Baydin, A. G., Pearlmutter, B. A., Radul, A. A., & Siskind, J. M. (2018). Automatic differentiation in machine learning: A survey. *Journal of Machine Learning Research*, 18(153), 1–43.
  9. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
  10. Kingma, D. P., & Ba, J. (2015). Adam: A method for stochastic optimization. *ICLR 2015*. arXiv:1412.6980.
  11. Loshchilov, I., & Hutter, F. (2019). Decoupled weight decay regularization. *ICLR 2019*.
  12. Shoeybi, M., Patwary, M., Puri, R., et al. (2019). Megatron-LM: Training multi-billion parameter language models using model parallelism. *arXiv:1909.08053*.
  13. Rajbhandari, S., Rasley, J., Ruwase, O., & He, Y. (2020). ZeRO: Memory optimizations toward training trillion parameter models. *SC20: International Conference for High Performance Computing*.
  14. Tillet, P., Kung, H. T., & Cox, D. (2019). Triton: An intermediate language and compiler for tiled neural network computations. *Proceedings of the 3rd ACM SIGPLAN International Workshop on Machine Learning and Programming Languages*.
  15. Dao, T., Fu, D. Y., Ermon, S., Rudra, A., & Ré, C. (2022). FlashAttention: Fast and memory-efficient exact attention with IO-awareness. *NeurIPS 2022*.
  16. Dao, T. (2023). FlashAttention-2: Faster attention with better parallelism and work partitioning. *ICLR 2024*.
  17. Chen, X., Liang, C., Huang, D., et al. (2024). Symbolic discovery of optimization algorithms. *ICML 2024* (Lion optimizer).
  18. Hu, E. J., Shen, Y., Wallis, P., et al. (2021). LoRA: Low-rank adaptation of large language models. *ICLR 2022*. arXiv:2106.09685.
  19. Werbos, P. J. (1974). *Beyond Regression: New Tools for Prediction and Analysis in the Behavioral Sciences*. Ph.D. thesis, Harvard University.
  20. Frostig, R., Johnson, M., Leary, C., et al. (2018). Compiling machine learning programs via high-level tracing. *SysML Conference*.
  21. LeCun, Y., Bengio, Y., & Hinton, G. E. (2015). Deep learning. *Nature*, 521(7553), 436–444.
  22. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *NeurIPS 2017*.
  23. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS 2012*.
  24. Gartner (2026). Worldwide AI spending forecast. Gartner Research.
  25. Apple Inc. (2025). Explore LLMs on Apple Silicon with MLX. *WWDC 2025 Session 298*.
  26. UK Government (2025). AI Opportunities Action Plan: One Year On. DSIT. https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/
  27. NHS England (2025). £150m AI framework agreement. *Computer Weekly*, 2025.

  ## Key Terminology

  - **Tensor**: N-dimensional array; the fundamental data structure for neural network computation
  - **Autograd / Automatic Differentiation**: Engine for computing gradients automatically by recording operations on a computation graph
  - **Computation Graph**: Directed acyclic graph representing arithmetic operations on tensors; nodes are operations, edges are data dependencies
  - **Eager Execution**: Computation executed immediately as Python statements are evaluated, enabling interactive debugging
  - **Static Graph**: Computation graph fully defined before execution, enabling global optimisation and compilation
  - **XLA (Accelerated Linear Algebra)**: Google's compiler for linear algebra, used by JAX and TensorFlow for hardware-specific code generation
  - **CUDA**: NVIDIA's parallel computing platform and API, providing GPU acceleration for deep learning frameworks
  - **FSDP (Fully Sharded Data Parallel)**: PyTorch distributed training strategy that shards model weights, optimiser states, and gradients across GPUs
  - **Mixed Precision Training**: Using float16/bfloat16 for forward pass and float32 for gradient accumulation to reduce memory and increase throughput
  - **Kernel**: A GPU function executing a specific tensor operation on a batch of data in parallel
  - **ONNX (Open Neural Network Exchange)**: Cross-framework model interchange format enabling portability between training and inference runtimes
  - **TorchScript**: PyTorch's intermediate representation enabling serialisation and deployment of models outside the Python runtime
  - **Triton**: OpenAI's Python DSL for writing GPU kernels, used within PyTorch 2.x's torch.compile compilation stack

- ### Provenance
  - sources:: https://marutitech.com/top-8-deep-learning-frameworks/, https://agntdev.com/deep-learning-frameworks-2026-pytorch-jax-comparison/, https://tensorrigs.com/blog/dl-frameworks/, https://www.gov.uk/government/publications/ai-opportunities-action-plan-one-year-on/, https://developer.apple.com/videos/play/wwdc2025/298/, https://dl.acm.org/doi/10.1145/3448250, https://www.nature.com/articles/nature14539
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
- ### Definition
  - [[Architecture]], in the context of [[Artificial Intelligence]] and [[Deep Learning]], refers to the structural blueprint of an [[AI Model]] or system — the specification of how computational units (neurons, attention heads, convolutional filters, state-space modules, expert sub-networks) are arranged into layers and modules, how information flows between them, and what mathematical operations each component performs. Architectural design is the highest-level decision in [[Model Training]] because it determines the hypothesis space the learner inhabits: a [[Convolutional Neural Network]] encodes spatial translation equivariance as a hard structural constraint; a [[Transformer Architecture]] encodes pairwise token interactions through [[Attention Mechanism]] without assuming locality; a [[Recurrent Neural Network]] encodes temporal order through hidden-state recurrence; a [[Graph Neural Network]] encodes relational structure through neighbourhood message-passing. These structural choices constitute the model's [[Inductive Bias]] — the set of assumptions it brings to a learning problem before seeing any data — and they determine which tasks the model can learn sample-efficiently versus which require vastly more data. Architecture co-determines computational cost (parameter count, FLOP budget at training and inference), hardware efficiency on [[GPU Compute]] or specialist accelerators, compatibility with [[Transfer Learning]] and fine-tuning workflows, and the quality of [[Embedding]] representations extracted for downstream tasks. The [[Encoder]]-[[Decoder]] split — where an encoder maps inputs to latent representations and a decoder synthesises outputs from those representations — is one of the most productive structural patterns in AI architecture design, underpinning both sequence-to-sequence [[Natural Language Processing]] systems and generative image architectures. Contemporary AI architecture research is defined by the tension between ever-larger [[Foundation Model]] backbones — whose breadth of competence emerges from scale — and efficient specialised architectures designed for constrained deployment on [[Edge Computing]] hardware. [[Neural Architecture Search]] (NAS) automates the exploration of architecture spaces that are too vast for manual design, and [[Model Distillation]] compresses large architectures into smaller student networks that retain most capability at a fraction of the computational cost.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Architecture
  - owl-role:: Concept | StructuralDesignPattern | ModelBlueprint
  - owl-inferred:: ai:NeuralNetworkArchitecture, ai:DeepLearningSystem, ai:ModelCapacityDeterminant
  - belongs-to-domain:: [[Artificial Intelligence]]
  - implemented-in-layer:: [[Deep Learning]]

- ### Relationships
  - is-subclass-of:: [[Neural Network Architecture]], [[Artificial Intelligence]]
  - has-part:: [[Attention Mechanism]], [[Encoder]], [[Decoder]], [[Activation Function]], [[Residual Connection]], [[Positional Encoding]], [[Embedding]], [[Batch Normalisation]], [[Dropout]]
  - requires:: [[Inductive Bias]], [[Backpropagation]], [[Loss Function]], [[Gradient Descent]], [[GPU Compute]], [[Hyperparameter Tuning]]
  - enables:: [[Deep Learning]], [[Model Training]], [[Transfer Learning]], [[Natural Language Processing]], [[Computer Vision]], [[Reinforcement Learning]], [[Generative AI]]
  - uses:: [[Edge Computing]], [[GPU Compute]], [[Batch Normalisation]], [[Dropout]], [[Feedforward Neural Network]]
  - implements:: [[Transformer Architecture]], [[Convolutional Neural Network]], [[Recurrent Neural Network]], [[Feedforward Neural Network]], [[Graph Neural Network]]
  - depends-on:: [[Backpropagation]], [[Gradient Descent]], [[Loss Function]]
  - supports:: [[Multimodal AI]], [[Model Deployment]], [[AI Safety]]
  - contrasts-with:: [[Neural Architecture Search]], [[Model Distillation]]
  - related-to:: [[Foundation Model]], [[Large Language Models]], [[Mixture of Experts]], [[Diffusion Model]], [[Self-Supervised Learning]], [[EU AI Act]], [[Responsible AI]], [[AI Model]]
  - standardized-by:: [[EU AI Act]]

- ### Content
  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:NeuralNetworkLayer))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:AttentionMechanism))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:Encoder))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:Decoder))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:ActivationFunction))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:ResidualConnection))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:PositionalEncoding))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:hasPart ai:Embedding))
  ```
  ## Dependency Relationships
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:InductiveBias))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:LossFunction))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:GradientDescent))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:HyperparameterTuning))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:requires ai:TrainingData))
  ```
  ## Capability Relationships
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:DeepLearning))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:ModelTraining))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:TransferLearning))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageProcessing))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:ComputerVision))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:ReinforcementLearning))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:enables ai:GenerativeAI))
  ```
  ## Implementation Relationships
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:TransformerArchitecture))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:ConvolutionalNeuralNetwork))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:RecurrentNeuralNetwork))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:GraphNeuralNetwork))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:MixtureOfExperts))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:implements ai:DiffusionModel))
  ```
  ## Reduction Relationships
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:reducesTo ai:FeedforwardNeuralNetwork))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:reducesTo ai:LinearModel))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:reducesTo ai:ParameterisedFunction))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:reducesTo ai:StatisticalHypothesisClass))
  ```
  ## Support Relationships
  ```
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:MultimodalAI))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:ModelDeployment))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:AISafety))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:ResponsibleAI))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:EdgeComputing))
  SubClassOf(ai:Architecture
    ObjectSomeValuesFrom(ai:supports ai:NeuralArchitectureSearch))
  ```

  ## Mathematical and Theoretical Foundations

    The concept of architecture is fundamentally a specification of a parametric function class — the set of all functions that the model can represent by varying its weights. A fully-connected [[Feedforward Neural Network]] with L layers, each of width W, with ReLU activations, defines a function class of piecewise-linear functions with up to (W^{d_in}·L!)^{d_out} distinct linear regions in input space, where d_in is the input dimensionality. This function class grows exponentially with depth, explaining why deep architectures generalise better from less data than shallow ones for complex tasks. The architectural decision of how deep and wide to make a network is therefore a decision about the richness of the hypothesis class — a higher-level analogue of choosing the polynomial degree in classical regression.

    The [[Inductive Bias]] encoded by different architectural families can be formalised through the lens of symmetry and equivariance. A [[Convolutional Neural Network]] is equivariant to translation: if the input image is shifted by k pixels, the feature maps at each layer shift by k pixels (before pooling reduces resolution). This equivariance is encoded in the shared-weight structure of convolutional filters, which apply the same transformation at every spatial location. [[Graph Neural Network]] architectures are equivariant to permutation of node indices — the function computed is the same regardless of how nodes are numbered — which is the correct [[Inductive Bias]] for molecule property prediction, where atom ordering is arbitrary. The [[Transformer Architecture]]'s [[Attention Mechanism]] has no built-in symmetry with respect to position — any token can attend to any other token equally — making it weakly biased and therefore requiring large datasets to learn spatial or temporal structure that architectures with stronger bias (CNNs, RNNs) extract cheaply. The [[Positional Encoding]] added to Transformer inputs is a post-hoc correction that partially reintroduces positional structure without encoding it architecturally.

    The computational complexity of architectural choices is a primary engineering constraint. Standard self-attention in the [[Transformer Architecture]] has O(N^2 · D) time and O(N^2) memory complexity in the sequence length N and model dimension D — quadratic in N. For a 128K-token context window, this requires approximately 128^2 × D computations per layer, making full attention computationally expensive. Sparse attention architectures (Longformer, BigBird) reduce this to O(N · w) where w is the local attention window width. Linear attention approximations (Performer, Linformer) approximate the full attention matrix with low-rank decompositions, achieving O(N · r · D) for rank-r approximation. State-space models (Mamba) achieve exactly O(N · D) through selective state accumulation, at the cost of losing random-access to the full input context that full attention provides. The architecture design space for efficient sequence modelling is therefore a Pareto frontier between computational efficiency and contextual expressivity.

    Information-theoretic perspectives on architecture design formalise the trade-off between model capacity and generalisation. The minimum description length (MDL) principle suggests that the optimal architecture is the one that maximises data compression — the joint description length of the model and the encoded data, where more expressive architectures require longer model descriptions but achieve shorter data descriptions. The connection between architectural design and the information bottleneck principle (Tishby & Schwartz-Ziv, 2017) proposes that deep networks progressively compress input information I(X; T_l) through successive layers while preserving label-relevant information I(T_l; Y) — an architectural principle that motivates encoder-decoder designs where the bottleneck layer T_L minimises I(X; T_L) subject to maintaining I(T_L; Y).

  ## About
    Architecture in the AI domain denotes the fundamental structural specification that precedes and constrains all other decisions in building a [[Deep Learning]] system. Before a single parameter is learned, the architect has already decided how many layers the model will have, what operations each layer performs, how layers are connected, whether outputs at one position can attend to inputs at all other positions (as in the [[Transformer Architecture]]), whether features are pooled over local patches (as in the [[Convolutional Neural Network]]), or whether state is propagated recurrently through time (as in the [[Recurrent Neural Network]]). These structural choices encode the model's [[Inductive Bias]] — the assumptions about the data structure that the model uses to generalise from finite training examples to unseen inputs. A CNN's local connectivity and weight sharing encode translation invariance and spatial locality; a Transformer's full pairwise attention encodes a prior that any token may be relevant to any other token regardless of distance, a stronger but more expensive prior than the locality assumed by the CNN.

    The concept of architecture is inseparable from the history of [[Deep Learning]] as a field. Foundational CNN architectures — LeNet (1989), AlexNet (2012), VGGNet (2014), GoogLeNet/Inception (2014), ResNet (2015) — each represented a structural innovation: deep stacked convolutions, parallel filter banks, and skip (residual) connections (the [[Residual Connection]]) that allowed training of networks with hundreds of layers by solving the vanishing gradient problem. The [[Transformer Architecture]] (Vaswani et al., 2017) was the most consequential architectural innovation of the past decade: replacing recurrence with multi-head [[Attention Mechanism]] allowed parallel sequence processing during training, enabling the first [[Large Language Models]] at massive scale. GPT, BERT, T5, and their successors all share the same fundamental Transformer block structure — alternating multi-head attention and feedforward sub-layers with residual connections and layer normalisation — differing only in whether they use a decoder-only (GPT), encoder-only (BERT), or encoder-decoder (T5) split. The rise of the [[Foundation Model]] — a single large architecture pretrained on broad data that is then fine-tuned for many downstream tasks via [[Transfer Learning]] — has made architectural design at the pretraining scale the most strategically important decision in modern AI development.

    The recent emergence of state-space model (SSM) architectures, particularly Mamba (Gu & Dao, 2023), represents the first serious challenge to the Transformer's supremacy for sequence modelling since 2017. Mamba achieves linear-time sequence processing through selective state-space dynamics rather than quadratic-attention, yielding approximately 5× higher inference throughput than equivalently sized Transformers at long sequence lengths while remaining competitive in quality on language benchmarks. Mamba-2 (2024, Dao et al.) introduced Structured State Space Duality, further improving training efficiency through hardware-aware parallelism. Hybrid architectures — interleaving SSM layers with sparse attention blocks — are increasingly competitive with pure-Transformer architectures in the 1B–70B parameter range relevant to frontier model development. [[Mixture of Experts]] (MoE) architectures, which route each input token to a sparse subset of expert feedforward sub-networks, allow dramatic effective parameter count increase with sub-proportional FLOP growth; Mixtral 8×7B (2023) and Deepseek-V3 (2024) demonstrated that MoE achieves dense-model quality at roughly 2–4× lower training and inference cost per token.

  ## Components / Architecture

    AI Architecture is not a single entity but a design space organised along several independent axes. The principal architectural components are:

    - **[[Encoder]]**: The sub-network responsible for mapping input tokens, pixels, or signals into a contextualised latent [[Embedding]] space. In [[Transformer Architecture]], the encoder consists of N identical blocks each containing a multi-head [[Attention Mechanism]] sub-layer and a position-wise [[Feedforward Neural Network]] sub-layer, each with residual connections and layer normalisation. Encoder-only models (BERT, RoBERTa) are optimal for classification and extraction tasks where full bidirectional context is available at inference.
    - **[[Decoder]]**: The sub-network responsible for auto-regressively generating output sequences from encoder representations or from previously generated tokens. Decoder-only Transformer models (GPT family, LLaMA, Claude) process inputs and generate outputs in a single stream; this architectural simplicity has proven highly effective for [[Large Language Models]] at scale.
    - **[[Attention Mechanism]]**: The core computational primitive of the Transformer — computing a weighted sum over value vectors using query-key similarity scores, with softmax normalisation. Multi-head attention applies multiple parallel attention operations over different learned linear projections of the query, key, and value spaces, enabling the model to simultaneously attend to different positional and semantic aspects.
    - **[[Residual Connection]]**: Skip connections that add the input of a sub-layer to its output before the next operation, first introduced in ResNet (He et al., 2015). Residual connections permit gradient flow through very deep networks by providing a direct path for gradient propagation via [[Backpropagation]], solving the vanishing gradient problem that had limited network depth to approximately 20 layers before 2015.
    - **[[Activation Function]]**: Non-linear element-wise transformations applied after linear operations that enable the network to learn non-linear functions. Historical choices (sigmoid, tanh) suffered from saturation; ReLU (2010) enabled deeper training; GELU (2016) and SwiGLU (2021) are now standard in [[Large Language Models]] and vision transformers.
    - **[[Batch Normalisation]]** / Layer Normalisation: Normalisation sub-layers that stabilise training by re-centring and rescaling activations, reducing sensitivity to initialisation and enabling higher learning rates. Batch normalisation normalises across the batch dimension; layer normalisation normalises across the feature dimension and is preferred in Transformer architectures.
    - **[[Dropout]]**: Regularisation technique that randomly zeroes activations during training, preventing co-adaptation of features and reducing overfitting. Applied in the feedforward and attention sub-layers of Transformer blocks.
    - **[[Positional Encoding]]**: Mechanism for injecting positional information into the position-agnostic [[Attention Mechanism]]'s query-key-value computation. Absolute sinusoidal encodings (Vaswani et al., 2017), learned absolute position embeddings (BERT), relative position encodings (Shaw et al.), and rotary position embeddings (RoPE, Su et al., 2021) represent a progression of increasing expressivity and length-generalisation capability.
    - **[[Embedding]]**: Learnable dense vector representations of discrete tokens, continuous-valued features, or positional indices that serve as the input and output interface between the architecture's continuous computational machinery and the discrete input/output spaces.

    **Major Architecture Families**:
    - **[[Feedforward Neural Network]]**: Baseline fully-connected layers with no recurrence or attention; efficient for structured tabular data.
    - **[[Convolutional Neural Network]]**: Dominant architecture for spatial [[Computer Vision]] tasks; translation-equivariant inductive bias encoded by shared convolutional filters and pooling.
    - **[[Recurrent Neural Network]] / LSTM / GRU**: Sequential architectures with hidden-state recurrence; historically dominant for NLP before Transformers; still used for streaming inference and time-series.
    - **[[Transformer Architecture]]**: Self-attention-based parallel sequence model; dominant architecture for [[Natural Language Processing]], code generation, [[Multimodal AI]], and increasingly [[Computer Vision]] via Vision Transformers (ViT).
    - **[[Graph Neural Network]]**: Message-passing architectures over graph-structured data; dominant for molecular property prediction, social network modelling, and recommendation systems.
    - **[[Diffusion Model]]**: Architecture pairing a noise-adding forward process with a learned denoising architecture (typically U-Net or Transformer) to generate high-fidelity images, audio, and video; the basis of Stable Diffusion and DALL-E 3.
    - **[[Mixture of Experts]]**: Conditional routing of token representations to specialised expert sub-networks, enabling effective parameter count far exceeding what is activated per forward pass — the basis of efficient [[Large Language Models]] scaling.
    - **State Space Models (Mamba)**: Selective SSM architectures offering linear-time sequence modelling as an efficient alternative to quadratic-attention Transformers.

  ## Use Cases / Major Families

    **[[Natural Language Processing]]**: The Transformer encoder-decoder and decoder-only variants underpin every frontier [[Large Language Models]] application — text generation, translation, summarisation, code synthesis, question answering, and [[Reinforcement Learning]] from human feedback (RLHF) fine-tuning. GPT-4, Claude 3 series, and Llama 3 all employ decoder-only Transformer architectures at scales of 7B to hundreds of billions of parameters.

    **[[Computer Vision]]**: CNNs remain competitive for resource-constrained inference; Vision Transformers (ViT) and their efficient variants (DeiT, EfficientViT, MobileViT) achieve superior accuracy at scale; [[Diffusion Model]] architectures (U-Net + Transformer) enable image synthesis. The Swin Transformer introduced hierarchical multi-scale attention, bringing the inductive biases useful for dense prediction tasks (object detection, semantic segmentation) into the ViT framework.

    **[[Multimodal AI]]**: Cross-modal architectures combine specialised [[Encoder]] backbones for each modality (vision, audio, text) with shared decoder architectures; CLIP paired a ViT image encoder with a Transformer text encoder trained by contrastive objectives; GPT-4V and Gemini Ultra extend decoder-only LLM architectures with image-patch tokenisation.

    **[[Generative AI]]**: Diffusion architectures for image/video/audio synthesis; autoregressive Transformer decoders for text and code; masked image model architectures (MAE) for self-supervised vision pretraining; flow-matching architectures (Stable Diffusion 3) as an emerging alternative to diffusion.

    **[[Reinforcement Learning]]**: Actor-critic architectures; world model architectures (Dreamer, IRIS) that jointly learn a latent-space dynamics model and policy; multi-agent coordination architectures.

    **[[Edge Computing]] deployment**: Mobile architectures (MobileNet, EfficientNet, SqueezeNet) with depth-wise separable convolutions; quantised ViT variants; encoder-decoder parameter-split designs achieving 47% lower first-token latency vs decoder-only architectures in sub-1B parameter models for resource-constrained devices.

  ## Academic Context

    The academic lineage of AI architecture spans from McCulloch and Pitts (1943) — the formal neuron — through Rosenblatt's Perceptron (1958), Rumelhart, Hinton & Williams' backpropagation paper (1986), LeCun's convolutional networks (1989), Hochreiter & Schmidhuber's LSTM (1997), and the deep learning renaissance triggered by Hinton, LeCun, and Bengio around 2006–2012. The Transformer (Vaswani et al., 2017, "Attention Is All You Need", 100,000+ citations) and the residual network (He et al., 2015) are the two most cited architecture papers in AI history.

    The UK has contributed foundational architecture research across multiple eras. The perceptron's theoretical foundations were partially developed at the National Physical Laboratory and Cambridge. The deep learning renaissance included significant contributions from Geoffrey Hinton at the University of Toronto (before Google Brain) whose original group included figures trained at Cambridge and Edinburgh. Contemporary UK architecture research includes work from the University of Edinburgh (School of Informatics, ranked #1 UK for NLP), Imperial College London's iBUG and machine learning groups, UCL's ELLIS unit (leading the UKRI-funded national generative AI hub in collaboration with Cambridge, Oxford, Manchester, Edinburgh, and Imperial), and the Oxford Visual Geometry Group responsible for VGGNet (Simonyan & Zisserman, 2014). UCL was home to key figures in attention mechanism development; the Graves LSTM and attention paper lineage traces through UCL. DeepMind (London) developed AlphaFold's novel protein-structure architecture — a hybrid of Evoformer attention blocks and structural module geometric layers — representing perhaps the most consequential domain-specific architectural innovation of the 2020s.

    The Edinburgh Informatics group has produced major contributions to efficient NLP architecture research, tokenisation-free language modelling (Byte-Pair Encoding originates from Edinburgh), and hybrid SSM-attention models. The Alan Turing Institute in London coordinates national AI architecture benchmarking and has produced influential surveys on efficient inference architecture for the UK public sector.

  ## Current Landscape (2026)

    By mid-2026, the dominant productive architectural paradigm is the large decoder-only Transformer trained at scale via [[Self-Supervised Learning]] (autoregressive or masked prediction) and aligned via RLHF or DPO. Models in the 70B–405B parameter range (LLaMA 3, Qwen 2.5, Mistral Large, Claude 3.5 Sonnet, GPT-4) define the frontier of [[Large Language Models]] capability. The architecture of these models is broadly stable — RoPE positional embeddings, grouped-query attention (GQA) for KV cache efficiency, SwiGLU activation functions, RMSNorm, extended context windows via sliding window attention or full attention over 128K+ token contexts.

    The major 2025–2026 architectural innovations are:
    1. **Hybrid SSM-Transformer**: Jamba (AI21 Labs, 2024) interleaves Mamba SSM layers with Transformer attention blocks and MoE routing, achieving GPT-4 quality at 52B parameters with substantially lower memory and inference cost. The 2025 Jamba-1.5 series extends to 398B total parameters.
    2. **[[Mixture of Experts]] scaling**: Deepseek-V3 (671B total, 37B activated, 2024) and Mixtral architectures confirm that sparse MoE achieves dense-quality performance at 3–4× lower training FLOP, making frontier-quality models economically viable for European academic and enterprise deployment without US cloud dependency.
    3. **Diffusion Transformer (DiT)**: The UNet backbone for image diffusion has been largely supplanted by Transformer-based architectures (DiT, Flux.1) that scale more cleanly with parameter count and enable better cross-modal conditioning for text-to-image and video generation.
    4. **Long-context architecture optimisations**: Sparse attention patterns, linear attention approximations, and state-space compression are being integrated into standard Transformer blocks to extend effective context windows without quadratic memory growth. In 2025, Claude 3.5 and Gemini 1.5 Pro demonstrated 1M-token context windows via architectural modifications.
    5. **Sub-1B efficient architectures**: The parameter-split encoder-decoder architecture (2/3 encoder, 1/3 decoder) achieves 47% lower first-token latency vs decoder-only for SLMs under 1B parameters, relevant for UK [[Edge Computing]] deployments in NHS diagnostics tooling and public-sector AI applications.

    UK government AI strategy (AI Opportunities Action Plan, January 2025) identified AI compute infrastructure — including architecture-optimised hardware — as a national strategic priority. NVIDIA's partnership with UCL to optimise UK national AI infrastructure and the creation of AI Growth Zones signal significant public investment in the architectural compute foundations of next-generation AI systems.

  ## UK Context

    The UK's academic contribution to AI architecture research is disproportionately large relative to national size. Imperial College London's Computing Department houses multiple architecture research groups: the iBUG group (face and body analysis architectures), the Computation, Logic, Language group (symbolic-neural hybrid architectures), and the Robot Intelligence Lab. UCL hosts the ELLIS unit, the Centre for Artificial Intelligence, and is the lead institution of the UKRI National Generative AI Hub — a collaborative research programme including Cambridge, Edinburgh, Oxford, Manchester, Surrey, and Imperial, with industry partners IBM, BT, Google DeepMind, and Cisco Systems.

    The University of Edinburgh's School of Informatics is ranked #1 in the UK for NLP and hosts the ILCC (Institute for Language, Cognition and Computation), which has contributed to Transformer architecture variants for low-resource languages, efficient tokenisation (BPE), and neural machine translation architectures deployed across UK public-sector translation services. Cambridge's Department of Engineering and Machine Learning Group contribute to Bayesian architectural priors, uncertainty quantification in deep architectures, and the theoretical foundations of [[Inductive Bias]] — work directly relevant to understanding why particular architectures generalise.

    Northern English universities have growing architecture research presence. The University of Manchester — home of the Baby Manchester computer and foundational computer architecture research — has an active machine learning group working on graph neural network architectures for drug discovery and materials science, directly relevant to the Northern England life sciences and advanced manufacturing cluster. Leeds' School of Computing contributes to vision architecture research for medical imaging (cardiac MRI segmentation using Swin Transformer architectures). Sheffield's NLP group applies efficient Transformer architecture variants to low-resource and dialectal language modelling.

    The Alan Turing Institute's work on efficient architecture for public sector AI is particularly relevant in the UK context: NHS AI Lab's diagnostic imaging tools require architectures that can operate on constrained NHS-grade hardware. The Turing Institute's national programme on "Frugal AI" — architectures that maximise capability per FLOP — is specifically addressing UK [[Edge Computing]] and on-device inference needs where large cloud-hosted [[Foundation Model]] architectures cannot be deployed due to data sovereignty, latency, or cost constraints.

  ## Future Directions (2026–2030)

    - **Post-Transformer dominance**: Hybrid SSM-Transformer and pure SSM architectures are projected to achieve competitive quality with lower training and inference cost for long-context tasks by 2027, potentially displacing quadratic-attention-only Transformers for sequence lengths above 32K.
    - **Architecture-for-efficiency**: The continued pressure from [[EU AI Act]] compute thresholds (10^25 FLOP for general-purpose AI model notification requirements) is driving academic and industrial investment in architectures that achieve frontier capability at sub-threshold compute — including parameter-efficient [[Mixture of Experts]], sparse activation, and [[Model Distillation]] techniques.
    - **[[Neural Architecture Search]] at scale**: Learned architecture search — using [[Reinforcement Learning]] or evolutionary methods to discover novel block configurations — is being applied to architecture families that are tractable to search (small LLM blocks, efficient ViT variants) and will accelerate discovery of non-obvious efficient configurations.
    - **Neuromorphic and analogue architectures**: UK startup ecosystem (Graphcore, Luminous Computing, Mythic) is developing novel hardware-architecture co-design where the computational graph itself is restructured around the dataflow constraints of emerging hardware — spiking neural network architectures for Graphcore's Intelligence Processing Units, optical compute-native matrix operation architectures.
    - **Interpretable-by-architecture design**: [[AI Safety]] and [[Responsible AI]] pressures are motivating architectures that are inherently more interpretable — sparse architectures where activation patterns are human-auditable, mechanistic interpretability methods that reverse-engineer computation circuits in existing Transformer architectures, and causal graphical model-inspired architectures.
    - **Agentic multi-model architectures**: Tool-use, multi-step reasoning, and autonomous [[AI Model]] deployment are driving compound architecture designs where multiple specialist models (a reasoning orchestrator, tool-use agent, verifier, memory retriever) interact through structured interfaces — architectures that extend beyond the single-model paradigm.
    - **Biological plausibility**: Predictive coding architectures (PC-Nets), Hebbian learning alternatives to [[Backpropagation]], and spiking neural network architectures with temporal coding are long-horizon research directions with potential benefits for energy efficiency and continual learning.

  ## Training Stability and Optimisation Constraints

    Architectural choices profoundly affect the trainability of a model — whether [[Gradient Descent]] via [[Backpropagation]] converges to a useful solution at all, and how efficiently it does so. The history of deep learning architecture is substantially a history of solving training stability problems: the [[Residual Connection]] (He et al., 2015) solved the vanishing gradient problem that prevented training of very deep CNNs; [[Batch Normalisation]] (Ioffe & Szegedy, 2015) stabilised training by preventing internal covariate shift, enabling higher learning rates and reducing sensitivity to weight initialisation; layer normalisation (Ba et al., 2016) adapted normalisation to the sequence-parallel structure of Transformers where batch statistics are less meaningful; [[Dropout]] (Srivastava et al., 2014) provided regularisation that prevented co-adaptation of features in over-parameterised networks; gradient clipping addresses the exploding gradient problem in [[Recurrent Neural Network]] training and in Transformer training with large learning rates. Each of these architectural or training regularisation choices was motivated by a specific failure mode of training stability, and each became a standard component of subsequent architectures because it solved a reproducible problem. The architectural toolkit of 2026 — residual connections, layer normalisation, RoPE positional embeddings, SwiGLU activations, grouped-query attention, and [[Dropout]] — represents the accumulated solutions to three decades of training stability problems.

    The relationship between architecture and [[Loss Function]] is bidirectional: loss function design must be compatible with the architecture's output structure (a [[Cross-Entropy Loss]] requires a softmax-normalised probability distribution output; a diffusion denoising loss requires the architecture to produce a continuous denoised prediction; ArcFace's angular margin loss requires L2-normalised embedding outputs). Conversely, architectural design must ensure the [[Gradient Descent]] gradients from the chosen [[Loss Function]] can propagate through all layers effectively — motivating [[Residual Connection]] for deep architectures and [[Batch Normalisation]] or layer normalisation for wide architectures where scale imbalances otherwise cause gradient magnitude explosions.

  ## Ontological Positioning Within the Knowledge Graph

    Within this ontology, Architecture occupies a pivotal structural position as the bridge between abstract learning principles and concrete computational implementations. It is a subclass of [[Neural Network Architecture]] (the narrower concept covering specifically artificial neural network designs) and is positioned above the specific architectural families — [[Transformer Architecture]], [[Convolutional Neural Network]], [[Recurrent Neural Network]], [[Graph Neural Network]], [[Diffusion Model]], [[Mixture of Experts]] — which are all subclasses of Architecture. This hierarchical position makes Architecture the natural landing point for any ontology traversal that needs to reason about AI model structure without committing to a specific paradigm.

    The Architecture node connects to [[AI Model]] as the structural blueprint that an [[AI Model]] instantiates with learned parameter values. The distinction is: Architecture specifies the function class (hypothesis space); [[AI Model]] = Architecture + learned weights. This maps to the philosophical distinction between type (Architecture) and token (specific trained model) in the ontology's type system.

    Architecture's relationship to [[Deep Learning]] is bidirectional: Architecture enables [[Deep Learning]] (by providing the structural scaffolding through which [[Backpropagation]] and [[Gradient Descent]] train deep hierarchical representations), and [[Deep Learning]] has in turn fundamentally shaped what kinds of architectures are feasible — the dominance of depth over breadth, the importance of [[Residual Connection]] for very deep networks, and the central role of [[Attention Mechanism]] in sequence modelling all emerged from the deep learning research programme.

    The relationship to [[Inductive Bias]] is particularly important for knowledge graph reasoning: given a query about what architecture is appropriate for a task, the ontology can infer the required inductive bias from the task's structural properties (translation-invariant spatial data → CNN inductive bias; arbitrary pairwise token interactions → Transformer; graph-structured data → GNN), then traverse to the architectural family that encodes that bias. This makes Architecture a key inference node for AI system design recommendation queries.

    Architecture connects to regulatory concepts through [[EU AI Act]] (Article 51 on general-purpose AI models requiring notification above compute thresholds), [[Responsible AI]] (architectural choices for interpretability, fairness, and safety), and [[AI Safety]] (architectural properties relevant to alignment — sparse architectures for mechanistic interpretability, debate architecture for scalable oversight, constitutional AI training pipelines). The [[Edge Computing]] relationship captures the deployment-time constraint that architectural choices must be compatible with target hardware — a ResNet-50 (25M params, 4.1 GFLOPs) may deploy on an ARM Cortex-A72, while a ViT-L (307M params, 61 GFLOPs) requires a modern NPU or server GPU.

  ## Efficiency, Scaling, and Hardware Co-Design

    The scaling properties of different architectural families are one of the most intensively studied topics in contemporary AI research. The Transformer architecture's scaling laws (Kaplan et al., OpenAI, 2020) showed that performance on language modelling improves as a power law in model size N, dataset size D, and compute budget C: L ≈ (N_c/N)^{α_N} + (D_c/D)^{α_D} where N_c and D_c are critical thresholds and α_N ≈ 0.076, α_D ≈ 0.095 for autoregressive language models. This implies that scaling model parameters while holding compute fixed tends to be more efficient than scaling data alone for large compute budgets, which drove the design of GPT-3 (175B params) and its successors. Chinchilla (Hoffmann et al., DeepMind, 2022) revised the scaling laws to show that the 2020 OpenAI models were significantly undertrained relative to the Chinchilla-optimal compute allocation — the optimal training strategy keeps N and D growing proportionally (roughly N ≈ 20·tokens for Chinchilla-optimal training), not scaling N while holding D fixed.

    These scaling relationships are not universal across architectural families. CNN architectures showed strong scaling behaviour up to models of approximately 500M parameters (EfficientNet-L2) but showed diminishing returns beyond this, partly due to the local receptive field constraint that limits long-range interaction modelling even in deep networks with large receptive fields. Transformer architectures have demonstrated consistent scaling to the 1T+ parameter range (in MoE configurations) without obvious saturation, which explains their dominance for frontier-scale AI applications. Mamba SSM architectures show competitive scaling with Transformers on language modelling but have been primarily explored in the 1B–70B parameter range as of 2025–2026; whether they maintain competitive scaling at 100B+ is an open research question.

    Hardware co-design has become an increasingly critical dimension of architectural decisions. The dominant training and inference hardware — NVIDIA H100 and H200 GPUs — are optimised for dense matrix operations (GEMM) with high tensor core utilisation. The Transformer's attention mechanism is bottlenecked by memory bandwidth (loading KV cache) rather than compute (GEMM FLOP throughput) for long sequences — this architectural bottleneck motivated Flash Attention (Dao et al., 2022) which rewrites the attention computation to maximise SRAM reuse and reduce HBM bandwidth pressure, and grouped-query attention (GQA) which reduces KV cache size by sharing key and value projections across query head groups. Mamba SSM architectures achieve high hardware utilisation through scan operations that are efficiently parallelisable on modern GPUs via the parallel scan algorithm, but historically underutilised tensor cores — Mamba-2's SSD framework addressed this by exposing the SSM computation as a structured matrix multiplication that maps to tensor core operations.

    The [[Edge Computing]] dimension is particularly important for UK AI deployment given the NHS's distributed computing infrastructure, public-sector data sovereignty requirements, and the cost sensitivity of local government and NHS Trust AI projects. Efficient [[Neural Network Architecture]] design for edge deployment requires co-optimising for latency (measured in milliseconds for real-time applications), memory footprint (SRAM/DRAM constraints on microcontrollers and edge SoCs), power consumption (battery-powered IoT and medical monitoring devices), and accuracy. The principal techniques are: weight quantisation (INT8 or INT4 reducing memory and compute by 2–4× with 1–3% accuracy loss), knowledge distillation ([[Model Distillation]], compressing a large teacher architecture into a small student architecture), pruning (removing low-magnitude weights or entire attention heads), and neural architecture search (NAS) for discovering architectures that are intrinsically efficient rather than requiring post-hoc compression. The UK's AI for Health initiative (NHS AI Lab) has partnered with ARM, Raspberry Pi Foundation, and UK semiconductor firms to develop [[Edge Computing]] AI architectures certified for Class IIa medical devices.

  ## Research & Literature

    - **[1]** Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., & Polosukhin, I. (2017).
      Attention Is All You Need.
      *Advances in Neural Information Processing Systems (NeurIPS) 2017*, Vol. 30.
      arXiv:1706.03762. 100,000+ citations; the foundational Transformer architecture paper.

    - **[2]** He, K., Zhang, X., Ren, S., & Sun, J. (2016).
      Deep Residual Learning for Image Recognition.
      *IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2016*, pp. 770–778.
      ResNet; introduces residual connections enabling very deep architectures (152+ layers).

    - **[3]** LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998).
      Gradient-Based Learning Applied to Document Recognition.
      *Proceedings of the IEEE 86*(11), pp. 2278–2324.
      LeNet-5; the foundational CNN architecture paper.

    - **[4]** Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012).
      ImageNet Classification with Deep Convolutional Neural Networks.
      *Advances in Neural Information Processing Systems (NeurIPS) 2012*, Vol. 25, pp. 1097–1105.
      AlexNet; sparked the modern deep learning era and CNN architecture research.

    - **[5]** Simonyan, K., & Zisserman, A. (2014).
      Very Deep Convolutional Networks for Large-Scale Image Recognition.
      *International Conference on Learning Representations (ICLR) 2015*.
      arXiv:1409.1556. VGGNet; Oxford VGG group; established depth as primary accuracy driver.

    - **[6]** Szegedy, C., Liu, W., Jia, Y., Sermanet, P., Reed, S., Anguelov, D., Erhan, D., Vanhoucke, V., & Rabinovich, A. (2015).
      Going Deeper with Convolutions.
      *CVPR 2015*, pp. 1–9.
      GoogLeNet / Inception v1; parallel filter bank architecture reducing parameter count.

    - **[7]** Hochreiter, S., & Schmidhuber, J. (1997).
      Long Short-Term Memory.
      *Neural Computation 9*(8), pp. 1735–1780.
      LSTM architecture; solved vanishing gradient problem in RNNs.

    - **[8]** Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019).
      BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.
      *Proceedings of NAACL-HLT 2019*, pp. 4171–4186.
      Encoder-only Transformer; bidirectional pretraining on masked language modelling.

    - **[9]** Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., et al. (2020).
      Language Models are Few-Shot Learners (GPT-3).
      *Advances in Neural Information Processing Systems (NeurIPS) 2020*, Vol. 33.
      Decoder-only Transformer at 175B parameters; defined the modern LLM architecture paradigm.

    - **[10]** Dosovitskiy, A., Beyer, L., Kolesnikov, A., Weissenborn, D., Zhai, X., Unterthiner, T., et al. (2021).
      An Image Is Worth 16×16 Words: Transformers for Image Recognition at Scale.
      *International Conference on Learning Representations (ICLR) 2021*.
      Vision Transformer (ViT); applying pure Transformer architecture to image recognition.

    - **[11]** Liu, Z., Lin, Y., Cao, Y., Hu, H., Wei, Y., Zhang, Z., Lin, S., & Guo, B. (2021).
      Swin Transformer: Hierarchical Vision Transformer Using Shifted Windows.
      *ICCV 2021*, pp. 10012–10022.
      Hierarchical shifted-window attention; O(N) complexity; dominant vision backbone 2021–2023.

    - **[12]** Gu, A., & Dao, T. (2023).
      Mamba: Linear-Time Sequence Modeling with Selective State Spaces.
      *arXiv 2312.00752*.
      SSM architecture; 5× inference throughput vs Transformer; linear O(N) sequence complexity.

    - **[13]** Dao, T., & Gu, A. (2024).
      Transformers are SSMs: Generalised Models and Efficient Algorithms through Structured State Space Duality.
      *International Conference on Machine Learning (ICML) 2024*.
      arXiv:2405.21060. Mamba-2; SSD framework; improved training efficiency.

    - **[14]** Lieber, O., Lenz, B., Bata, H., Cohen, G., Osin, J., Dalmedigos, I., et al. (2024).
      Jamba: A Hybrid Transformer-Mamba Language Model.
      *arXiv 2403.19887*. AI21 Labs.
      Hybrid SSM-Transformer architecture; first competitive hybrid LLM.

    - **[15]** Shazeer, N. (2020).
      GLU Variants Improve Transformer.
      *arXiv 2002.05202*.
      SwiGLU and other gated linear unit variants; now standard in frontier LLM architectures.

    - **[16]** Su, J., Murtadha, A., Pan, S., Wen, B., Liu, Y., & Sun, Y. (2024).
      RoFormer: Enhanced Transformer with Rotary Position Embedding.
      *Neurocomputing 568*, 127063.
      RoPE positional encoding; default position encoding in LLaMA, Mistral, Claude.

    - **[17]** Ainslie, J., Lee-Thorp, J., de Jong, M., Zemlyanskiy, Y., Lebrón, F., & Sanghai, S. (2023).
      GQA: Training Generalised Multi-Query Transformer Models from Multi-Head Checkpoints.
      *EMNLP 2023*.
      Grouped-query attention; reduces KV cache memory during inference; standard in LLaMA 3.

    - **[18]** Zoph, B., & Le, Q. V. (2017).
      Neural Architecture Search with Reinforcement Learning.
      *International Conference on Learning Representations (ICLR) 2017*.
      Seminal NAS paper; uses an RNN controller trained by RL to design CNN architectures.

    - **[19]** Real, E., Aggarwal, A., Huang, Y., & Le, Q. V. (2019).
      Regularised Evolution for Image Classifier Architecture Search.
      *AAAI 2019*, pp. 4780–4789.
      Evolutionary NAS; AmoebaNet architecture discovered by mutation-based search.

    - **[20]** Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., et al. (2021).
      Highly Accurate Protein Structure Prediction with AlphaFold.
      *Nature 596*(7873), pp. 583–589.
      AlphaFold2; Evoformer block — novel hybrid attention-geometry architecture for structure prediction.

    - **[21]** Ioffe, S., & Szegedy, C. (2015).
      Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift.
      *International Conference on Machine Learning (ICML) 2015*, pp. 448–456.
      Batch normalisation; enabling deeper and faster training; architectural component standard in CNNs.

    - **[22]** Ba, J. L., Kiros, J. R., & Hinton, G. E. (2016).
      Layer Normalization.
      *arXiv 1607.06450*.
      Layer normalisation; standard alternative to batch norm in Transformer architectures.

    - **[23]** Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022).
      High-Resolution Image Synthesis with Latent Diffusion Models.
      *CVPR 2022*, pp. 10684–10695.
      LDM / Stable Diffusion; U-Net decoder architecture for image generation.

    - **[24]** Peng, X., Yan, S., Yu, J., Zhao, X., & Zhang, Z. (2025).
      The Good, The Efficient and the Inductive Biases: Exploring Efficiency in Deep Learning Through the Use of Inductive Biases.
      *arXiv 2411.09827*.
      Survey of how architectural inductive biases determine efficiency-generalisation trade-offs.

    - **[25]** Tishby, N., & Schwartz-Ziv, R. (2017).
      Opening the Black Box of Deep Neural Networks via Information.
      *arXiv 1703.00810*.
      Information bottleneck interpretation of deep architectures.

    - **[26]** UK Government, Department for Science, Innovation and Technology (2025).
      AI Opportunities Action Plan.
      *GOV.UK, January 2025*.
      UK national AI strategy; compute infrastructure and architecture as strategic priorities.

    - **[27]** UCL ELLIS Unit (2026).
      UKRI National Generative AI Hub — Research Programme Overview.
      *UCL Engineering, 2026*. ucl-ellis.github.io.
      Generative model architecture research across UCL, Imperial, Cambridge, Edinburgh, Manchester.

    - **[28]** Chojecki, P. (2024).
      Going Beyond LLMs and Transformers: Emerging Architectures for Efficient AI.
      *Medium / Towards Data Science, 2024*.
      Industry survey of Mamba, MoE, and hybrid architecture trends for 2024–2025.

  ## Interpretability and Safety Dimensions of Architectural Choice

    Architectural choices have profound implications for model interpretability and [[AI Safety]] that go beyond raw performance metrics. The emerging field of mechanistic interpretability — pioneered by Anthropic and the EleutherAI research community — aims to reverse-engineer the specific computational algorithms implemented by Transformer architectures in specific circuits of attention heads and MLP layers. Key findings include: (1) "induction heads" — pairs of attention heads that together implement an in-context learning algorithm that copies patterns from earlier in the sequence — emerge reliably at the same stage of training across many different Transformer architectures and sizes; (2) "curve detectors" and "frequency detectors" in early Vision Transformer layers implement computations analogous to the Gabor filters in biological V1 cortex; (3) factual knowledge is stored in the MLP sub-layers of deep Transformer blocks rather than in attention layers, enabling surgical knowledge editing via targeted parameter updates. These mechanistic findings are architecture-specific: they apply to the Transformer's specific alternation of attention and MLP sub-layers, and may not transfer to Mamba SSM or CNN architectures that implement computation differently.

    Sparse architectural designs — both structured sparsity (sparse attention patterns like Longformer and BigBird, [[Mixture of Experts]] routing) and unstructured sparsity (weight pruning) — have a dual benefit for [[AI Safety]] and interpretability: sparse activations make it easier to attribute specific behaviour to specific components (if only 2 of 64 experts are active for a given token, the causal attribution is more localised than in a dense model) and sparse connectivity reduces the number of circuits that need to be analysed for dangerous behaviour. The safety case for sparse architectures in high-stakes AI deployment is increasingly being developed by the UK AI Security Institute (AISI), which has published analysis of how architectural properties affect the difficulty of interpretability-based safety evaluation.

    The debate between encoder-only, decoder-only, and encoder-decoder Transformer architectures for specific tasks has largely been resolved empirically by 2025: decoder-only architectures generalise better to instruction-following and open-ended generation tasks (the LLM paradigm); encoder-only architectures (BERT family) remain competitive for constrained classification and extraction tasks where the full bidirectional context is available at inference and latency-efficient single-pass inference is critical; encoder-decoder architectures (T5, mT5, FLAN-T5) are preferred for structured prediction tasks (translation, summarisation, question answering) where the output has a well-defined relationship to the input. The parameter-split insight (2/3 encoder, 1/3 decoder) for sub-1B parameter models — yielding 47% first-token latency reduction versus decoder-only — provides a principled architectural choice for resource-constrained [[Edge Computing]] deployments in public-sector and NHS applications.

  ## Evaluation, Benchmarking, and Architecture Comparison

    Comparing AI architectures rigorously requires standardised benchmarking across multiple axes simultaneously: task performance (accuracy, F1, BLEU, etc.), computational cost (FLOP per forward pass, parameters, KV cache size for Transformers), training efficiency (samples required to reach a given performance level), hardware utilisation (GPU/TPU/NPU efficiency), and deployment footprint (latency, memory, power on target hardware). No single architecture dominates all axes, which is why architectural choice is genuinely task- and deployment-context-dependent.

    For [[Natural Language Processing]] tasks, HELM (Holistic Evaluation of Language Models, Stanford) evaluates across 42 scenarios spanning question answering, summarisation, sentiment analysis, and more — providing a multi-dimensional view of Transformer architecture variants. BIG-bench (Srivastava et al., 2022) provides 204 tasks specifically designed to be difficult for current models, identifying capability gaps across Transformer scale levels. For [[Computer Vision]], the ImageNet benchmark was the original training and evaluation dataset for CNN architectures; Papers With Code's SOTA leaderboards track progress across architectures on CIFAR-10/100, COCO object detection, and ADE20K semantic segmentation. For [[Generative AI]], FID (Fréchet Inception Distance) for images and FID-vid for video measure the distributional similarity between generated and real data samples across architecture families.

    The computational efficiency dimension reveals stark differences between architecture families. On language modelling, a decoder-only Transformer (GPT-2 1.5B) achieves 21 perplexity on WikiText-103 using approximately 3×10^{18} training FLOPs. A Mamba SSM of comparable parameter count achieves 18 perplexity at the same compute budget, demonstrating the efficiency advantage of linear-time SSM sequence modelling for long-context tasks. On image classification (ImageNet top-1 accuracy at 1000 classes), ResNet-50 achieves 76.1% at 4.1 GFLOPs; ViT-B/16 achieves 81.8% at 17.6 GFLOPs; Swin-T achieves 81.3% at 4.5 GFLOPs — showing that the Swin Transformer's hierarchical windowed attention recovers most of the ViT's accuracy improvement at CNN-comparable cost. These multi-axis comparisons are what motivated the hybrid architectures of 2024–2025 that seek to combine the efficiency of CNNs and SSMs with the representational power of attention.

  ## Generative Architectures and the Diffusion Revolution

    The emergence of diffusion models as the dominant architecture for [[Generative AI]] represents one of the most significant architectural shifts of the 2020s. Prior to diffusion, the dominant generative architectures were Generative Adversarial Networks (GANs) — adversarial two-player games between a generator and discriminator network — and Variational Autoencoders (VAEs) — [[Encoder]]-[[Decoder]] architectures that learn a probabilistic latent space. GANs produced sharper images than VAEs but were notoriously difficult to train (mode collapse, training instability, hyperparameter sensitivity), and VAEs produced blurry but diverse samples. [[Diffusion Model]] architectures resolved this trade-off by framing generation as a learned denoising process: a forward process gradually adds Gaussian noise to clean data over T timesteps, and a neural network is trained to denoise the noisy data at each step. The key insight is that the denoising network — a U-Net in DDPM (Ho et al., 2020) or a Transformer-based DiT (Peebles & Xie, 2022) — is simply a deep supervised regressor trained to predict the noise (or clean signal) from noisy inputs, making it far easier to train than the adversarial GAN objective.

    The architectural evolution within diffusion models shows the general pattern of AI architecture development: early work used U-Net architectures (convolutional [[Encoder]]-[[Decoder]] with skip connections) because they were well-understood and produced good results on 256×256 images; scaling to higher resolutions required Transformer blocks within the U-Net to model long-range spatial correlations; eventually the pure DiT (Diffusion Transformer) replaced the U-Net decoder with a Transformer operating on image patch tokens, achieving better scaling behaviour and enabling text-conditioned synthesis via cross-[[Attention Mechanism]] to text embeddings (DALL-E 3, Stable Diffusion 3, Flux.1). The DiT architecture's clean design — purely Transformer blocks with adaptive layer normalisation conditioned on the diffusion timestep embedding and optionally on text embeddings — exemplifies how successful architectures tend towards simplicity and modularity as the field matures.

    [[Multimodal AI]] architectures have extended the Transformer paradigm to unified modelling of text, images, audio, and video. The dominant approach is to extend a pre-existing [[Large Language Models]] decoder-only Transformer with a vision [[Encoder]] (typically a ViT) whose output patch tokens are projected into the LLM's token embedding space and concatenated with text tokens. This architecture — sometimes called a Large Multimodal Model (LMM) — handles vision-language tasks (image captioning, visual question answering, chart understanding) by treating image patch tokens identically to text tokens within the LLM's self-attention. GPT-4V (OpenAI), Claude 3 (Anthropic), and Gemini (Google DeepMind) all use variants of this LMM architecture. The architectural limitation is that image tokens (256–1024 per image, depending on resolution) consume significant context window budget, motivating research into more efficient visual token compression architectures (dynamic resolution scaling, adaptive token pooling) that reduce image token count while preserving semantic richness.

  ## Relationship to Ontology Sibling Concepts

    Within the knowledge graph, Architecture should be distinguished from several closely related concepts that are frequently conflated:

    - **[[Neural Network Architecture]]** is the specific subclass of Architecture instantiated by artificial neural network models. Not all architectures relevant to AI are neural — symbolic AI architectures (production systems, theorem provers), Bayesian network architectures, and evolutionary computation architectures are all non-neural AI architectures. The current ontology's Architecture concept encompasses all of these but is most densely connected to the neural network family.
    - **[[AI Model]]** is an instance of an Architecture — a specific trained model with a concrete parameter vector. Architecture is the type; [[AI Model]] is the token. The same Architecture (e.g., GPT-2 decoder-only Transformer, 1.5B parameters, 48 layers, 1600 model dimension, 25 attention heads) can give rise to many different [[AI Model]] instances with different capabilities depending on the training data, loss function, and optimisation hyperparameters used.
    - **[[Transformer Architecture]]** is a specific architectural family that is the most important current subclass of Architecture in the ontology's coverage. The relationship is Architecture → has-subclass → Transformer Architecture (along with CNN, RNN, GNN, Diffusion, MoE, SSM families).
    - **[[Inductive Bias]]** is the set of assumptions encoded by an Architecture — the mathematical property of the Architecture that determines what it can learn efficiently. The Architecture-InductiveBias relationship is: Architecture implements InductiveBias (the architecture is the mechanism through which the bias is imposed). Different architectures implement different inductive biases: CNNs implement spatial locality and translation equivariance; Transformers implement global pairwise attention (weak inductive bias, strong data hunger); GNNs implement permutation equivariance over graph neighbourhoods.
    - **[[Model Training]]** is the process that takes an Architecture and produces an [[AI Model]] by optimising the [[Loss Function]] with [[Gradient Descent]] over training data. Architecture precedes and constrains [[Model Training]]; it is the fixed structure within which training optimises the variable parameters.

- ### Provenance
  - sources:: https://arxiv.org/abs/1706.03762
  - sources:: https://arxiv.org/abs/2312.00752
  - sources:: https://arxiv.org/abs/2405.21060
  - sources:: https://ucl-ellis.github.io/
  - sources:: https://www.imperial.ac.uk/computing/prospective-students/courses/pg/mai/
  - sources:: https://pchojecki.medium.com/going-beyond-llms-transformers-39f3291ba9d8
  - sources:: https://arxiv.org/abs/2411.09827
  - sources:: https://techhq.com/news/nvidia-backs-uk-plan-to-build-ai-factories-and-quantum-hubs/
  - sources:: https://gregrobison.medium.com/architectural-evolution-in-large-language-models-a-deep-dive-into-jambas-hybrid-transformer-mamba-c3efa8ca8cae
  - sources:: https://arxiv.org/pdf/2503.03528
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
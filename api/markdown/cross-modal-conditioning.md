- ### Definition
  - Cross-modal conditioning is a generative modelling technique in which a model that produces output in one sensory or representational modality is steered at inference and training time by a conditioning signal derived from a different modality. The mechanism is realised through [[Cross Attention]] layers within a [[Transformer Architecture]] or [[U-Net]] backbone, where queries are drawn from the output modality's [[Latent Space]] and the keys and values are projected from a [[Modality-Specific Encoder]] that encodes the conditioning input — for example, a [[CLIP]] text [[Embedding]] guiding an image denoising network, or a spectrogram representation driving a video diffusion backbone. [[Classifier-Free Guidance]] extends raw conditioning by jointly training with unconditional and conditioned objectives and interpolating their predictions at inference via a guidance scale, yielding controllable fidelity-diversity trade-offs across modality pairs. Cross-modal conditioning is the substrate for virtually all practical [[Text-to-Image]] systems including [[Stable Diffusion]], DALL-E 3, and Imagen, as well as for [[Video Generation]] pipelines such as Sora and Runway Gen-3, and [[Audio Synthesis]] systems such as AudioLDM and MusicGen. Beyond cross-attention, adapter-based variants — [[ControlNet]], [[IP-Adapter]], and [[Adapter Tuning]] families — inject spatial, stylistic, or structural conditioning signals into frozen backbones without full retraining, enabling efficient specialisation through [[LoRA]] or lightweight projection layers. The technique demands aligned or jointly trained [[Representation Learning]] and [[Contrastive Learning]] objectives (as epitomised by CLIP and ALIGN) to ensure that conditioning [[Embedding]] spaces are semantically commensurate with the target generation space. Cross-modal conditioning spans [[Natural Language Processing]], [[Computer Vision]], [[Audio Synthesis]], and emerging domains including [[Spatial Computing]] and [[Drug Discovery]], making it one of the most broadly enabling primitives in contemporary [[Generative AI]] and [[Multimodal Learning]].

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CrossModalConditioning
  - owl-role:: Technique | LearningParadigm
  - owl-inferred:: artificial-intelligence:MultimodalTechnique, artificial-intelligence:GenerativeModelling
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
  - implemented-in-layer:: [[Foundation Model]]

- ### Relationships
  - is-subclass-of:: [[Attention Mechanism]], [[Multimodal Learning]]
  - has-part:: [[Cross Attention]], [[Modality-Specific Encoder]], [[Classifier-Free Guidance]], [[Adapter Tuning]], [[ControlNet]], [[IP-Adapter]]
  - requires:: [[Embedding]], [[Representation Learning]], [[Contrastive Learning]], [[Latent Space]], [[CLIP]], [[Transformer Architecture]]
  - enables:: [[Text-to-Image]], [[Audio Synthesis]], [[Video Generation]], [[Image Generation]], [[Drug Discovery]], [[Medical Imaging]], [[Synthetic Data]], [[Spatial Computing]], [[Natural Language Processing]], [[Computer Vision]]
  - implements:: [[Multimodal Learning]], [[Generative AI]]
  - depends-on:: [[Attention Mechanism]], [[Transformer Architecture]], [[U-Net]], [[Neural Network]], [[Variational Autoencoder]]
  - supports:: [[Generative AI]], [[Spatial Computing]], [[Natural Language Processing]], [[Computer Vision]], [[Large Language Model]]
  - uses:: [[CLIP]], [[Variational Autoencoder]], [[LoRA]], [[Fine-Tuning]], [[Self Attention]], [[Stable Diffusion]]
  - contrasts-with:: [[Self Attention]]
  - related-to:: [[Diffusion Model]], [[Stable Diffusion]], [[IP-Adapter]], [[ControlNet]], [[Foundation Model]], [[Large Language Model]], [[Adapter Tuning]]
  - standardized-by:: [[ArtificialIntelligenceDomain]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:CrossAttention))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ModalitySpecificEncoder))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ClassifierFreeGuidance))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:AdapterTuning))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ControlNet))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:IPAdapter))

  ## Dependency Relationships
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:requires ai:Embedding))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:requires ai:RepresentationLearning))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:requires ai:ContrastiveLearning))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:requires ai:LatentSpace))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:AttentionMechanism))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:TransformerArchitecture))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:UNet))

  ## Capability Relationships
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:TextToImage))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:AudioSynthesis))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:VideoGeneration))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:ImageGeneration))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:DrugDiscovery))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:enables ai:SyntheticData))

  ## Implementation Relationships
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:implements ai:MultimodalLearning))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:implements ai:GenerativeAI))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:uses ai:CLIP))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:uses ai:VariationalAutoencoder))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:uses ai:LoRA))

  ## Reduction Relationships
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:reducesTo ai:CrossAttention))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:reducesTo ai:ClassifierFreeGuidance))
      SubClassOf(ai:CrossModalConditioning
        ObjectSomeValuesFrom(ai:reducesTo ai:EmbeddingAlignment))

  ## About

  Cross-modal conditioning is the mechanism by which generative models — particularly diffusion models and autoregressive transformers — accept controlling information from a modality that differs from the one they generate. The canonical example is text-conditioned image synthesis: a text prompt is encoded into a sequence of token embeddings by a language model or CLIP text encoder, and those embeddings are then injected into a visual backbone via [[Cross Attention]] at every residual block or transformer layer. Each image patch or spatial position can attend to the full sequence of text tokens, allowing fine-grained semantic alignment between textual intent and spatial output. The dual-stream formulation, in which both modalities carry their own normalisation and projection pathways (as in the DiT and SD3 architectures of 2024), extends this bidirectionally so that text and image latents mutually condition each other during generation.

  The theoretical underpinning is that conditioning is equivalent to specifying a conditional distribution p(x_output | c_condition) within the generative backbone. With [[Classifier-Free Guidance]], the model jointly learns the unconditional distribution p(x) and the conditioned distribution p(x | c) by randomly dropping conditioning signals during training. At inference, the score predictions from both paths are blended: score_guided = score_unconditional + w × (score_conditioned - score_unconditional), where w is the guidance scale. This allows continuous adjustment of adherence to the conditioning signal at the cost of diversity. High guidance scales improve prompt fidelity but can introduce over-saturation and mode collapse; dynamic guidance approaches introduced in 2024-2025 adaptively adjust w per semantic unit using cross-attention maps, achieving better fidelity without artefacts.

  Adapter-based conditioning variants have matured substantially since 2023. [[ControlNet]] (Zhang et al., 2023) introduces a trainable copy of the backbone encoder with zero-initialised convolutions so that spatial conditioning signals (depth maps, edge maps, human poses) can be injected without catastrophically interfering with the frozen generation backbone. [[IP-Adapter]] (Ye et al., 2023) routes image prompts through decoupled cross-attention heads alongside the text cross-attention, enabling style and content transfer from reference images. T2I-Adapter uses lightweight projection modules to incorporate structural conditions. Collectively, these adapter families realise cross-modal conditioning with parameter efficiency, keeping the frozen backbone's knowledge intact whilst introducing new conditioning channels through [[Fine-Tuning]] of only the adapter weights.

  ### Historical Development and Conceptual Lineage

  The intellectual lineage of cross-modal conditioning passes through several distinct traditions. The earliest incarnation is the attention-based neural machine translation of Bahdanau et al. (2015), which demonstrated that a decoder generating words in a target language could selectively attend to encoded representations of a source-language sentence — a direct precedent for all subsequent cross-modal attention. This attention mechanism was generalised into the multi-head scaled dot-product form by Vaswani et al. (2017) in the Transformer, establishing the general-purpose computational primitive that would ultimately enable cross-modal conditioning at scale.

  The second conceptual thread is multimodal representation alignment through contrastive learning. CLIP (Radford et al., 2021) established that image and text encoders trained jointly on 400 million image-text pairs via a contrastive objective produce embeddings that are geometrically aligned across modalities — a CLIP text embedding and the corresponding CLIP image embedding are closer in representation space than either is to embeddings of unrelated inputs. This geometric alignment is the prerequisite for using text embeddings as conditioning signals for image generation: without it, the text representation would carry no semantically relevant information for the visual backbone's cross-attention heads. ALIGN (Jia et al., 2021) demonstrated the same principle at 1.8 billion pairs, showing that data scale compounds the alignment quality. CLAP (Elizalde et al., 2022) extended the approach to audio-text alignment, enabling text-conditioned [[Audio Synthesis]].

  The third thread is the diffusion model framework itself. Ho et al. (2020) demonstrated denoising diffusion probabilistic models as competitive generative models; Nichol and Dhariwal (2021) improved the noise schedule and added cross-attention-based conditioning. Rombach et al. (2022) combined all three threads — the Transformer cross-attention mechanism, CLIP alignment, and latent diffusion — to produce the Latent Diffusion Model that became [[Stable Diffusion]]: the first widely accessible, high-quality text-to-image system built on cross-modal conditioning.

  The period 2022-2024 saw rapid systematic extension of this framework. Saharia et al. (2022) showed that using a frozen large language model (T5-XXL rather than CLIP) as the conditioning encoder substantially improved complex prompt comprehension, particularly for rare concepts and compositional reasoning. This finding established that the quality of the conditioning encoder — not just the conditioning injection mechanism — is a primary determinant of cross-modal conditioning effectiveness. The SDXL architecture (Podell et al., 2023) further demonstrated that multi-encoder conditioning (CLIP-L + CLIP-G, combined) outperforms single-encoder conditioning by exposing complementary aspects of text semantics to the cross-attention heads.

  ### Challenges and Open Problems

  Cross-modal conditioning faces several well-characterised challenges that remain active research areas. **Prompt faithfulness** — ensuring that all semantic content of a complex conditioning prompt is accurately reflected in the output — degrades for compositional prompts involving multiple objects, attributes, and spatial relationships. The "two dogs, one red, one blue" failure mode (where attributes are not correctly bound to their objects) is a canonical benchmark. Attention manipulation techniques (Prompt-to-Prompt, Attend-and-Excite) attempt to mitigate this by amplifying attention weights for tokens corresponding to under-expressed concepts, but compositional faithfulness at high complexity remains unsolved.

  **Conditioning scale calibration** presents a related challenge: the guidance scale w creates a fundamental fidelity-diversity trade-off, and the optimal value varies substantially across prompt types, subject matter, and output style. Adaptive guidance methods (2024) that compute per-region or per-token guidance weights address this partially but add inference-time complexity. **Modality interference** — where conditioning signals from multiple adapters (text + spatial map + style image) interact destructively rather than complementarily — is managed through adapter scale tuning but lacks a principled resolution.

  **Training data biases** propagate directly through conditioning: if the conditioning encoder was trained on biased data, its representations will encode those biases, and they will be expressed in the conditioned outputs. The CLIP text encoder reflects documented biases in internet image-text pairs, particularly around gender, ethnicity, and cultural representations. This has motivated research into de-biasing of conditioning embeddings and controlled evaluation of cross-modal conditioning fidelity across demographic axes.

  **Conditioning encoder copyright and licensing** has become practically significant: CLIP embeddings of a copyrighted artwork can be used to condition generation of similar-looking outputs, raising questions about whether conditioning on copyrighted content constitutes derivative work creation. This remains a legally unresolved question in multiple jurisdictions as of 2026, and has implications for the commercial deployment of cross-modal conditioning systems.

  ## Components / Architecture

  **Conditioning Encoder**
  - A [[Modality-Specific Encoder]] (CLIP ViT, CLIP text transformer, whisper audio encoder, depth network) encodes the raw conditioning signal into a dense sequence of [[Embedding]] vectors of fixed dimensionality.
  - Pre-trained encoders from large contrastive models ([[CLIP]], ALIGN, ImageBind) align modality-specific representations into shared or compatible spaces, enabling semantic coherence between heterogeneous conditioning signals.

  **Cross-Attention Injection**
  - [[Cross Attention]] layers are inserted at every resolution block of the [[U-Net]] or at every transformer block of the DiT backbone.
  - Keys (K) and Values (V) are computed from the conditioning embedding sequence; Queries (Q) are computed from spatial or sequence representations of the generation target.
  - Scaled dot-product attention weights determine which conditioning tokens each output position attends to, enabling spatially heterogeneous adherence to the conditioning signal.

  **Classifier-Free Guidance Module**
  - Jointly trains the model with conditioning dropped to a null vector at rate p_uncond (typically 10-20%).
  - At inference, blends unconditional and conditioned score predictions with guidance scale w (typically 3.5-12.0 for text-to-image).
  - Semantic-aware dynamic CFG (2024) segments the latent into semantic regions via attention maps and applies region-specific guidance weights.

  **Adapter Conditioning Pathways**
  - [[ControlNet]]: copies of frozen encoder blocks with zero convolutions receive spatial conditioning maps and add their residuals to the main backbone.
  - [[IP-Adapter]]: decoupled cross-attention heads — one for text, one for image — avoid interference between conditioning streams.
  - T2I-Adapter, [[Adapter Tuning]]: lightweight MLP or convolutional adapters that project external conditioning signals into the backbone's intermediate feature space.
  - [[LoRA]]-based conditioning adapters update low-rank residual weight matrices (r=4-64) to personalise the conditioning response at minimal parameter cost.

  **Latent Compression**
  - Modern systems operate in the [[Latent Space]] of a [[Variational Autoencoder]] (SD, SDXL, SD3), performing cross-modal conditioning in the compressed latent domain rather than in pixel space, reducing computational requirements by a factor of 4-16×.

  ## Formal Analysis

  ### Mathematical Formulation

  Let X denote the output modality random variable (e.g. an image) and C denote the conditioning modality random variable (e.g. a text sequence). Cross-modal conditioning implements the conditional distribution p_θ(X | C) where the conditioning information is injected via cross-attention. In the diffusion setting, the denoising network ε_θ(x_t, t, c) predicts the noise ε at timestep t given a noisy sample x_t and conditioning c.

  The **cross-attention** mechanism within a transformer block of the denoising network is computed as:

  ```
  Attention(Q, K, V) = softmax(QK^T / √d_k) V
  ```

  where:
  - Q = W_Q · h, queries projected from the output latent hidden state h (shape: [spatial_tokens × d_k])
  - K = W_K · c_embed, keys projected from the conditioning encoder output c_embed
  - V = W_V · c_embed, values projected from the conditioning encoder output
  - d_k is the key dimension (head dimension, typically 64-128)

  The conditioning encoder E_C maps raw conditioning input c ∈ C into the embedding sequence: c_embed = E_C(c) ∈ R^{L_c × d_model}, where L_c is the sequence length of the conditioning signal (e.g. 77 tokens for CLIP, up to 128 or 256 for T5-XXL in later models).

  Each spatial or sequence position in the output (queries) can attend to all conditioning tokens (keys/values), producing a spatially heterogeneous attention weighting that determines which conditioning tokens influence each output location. This is fundamentally different from [[Self Attention]], where Q, K, V all come from the same sequence, enabling only within-stream information integration.

  ### Classifier-Free Guidance as Conditional Score Estimation

  The score function of the conditional distribution is:

  ```
  ∇_x log p(x | c) = ∇_x log p(x) + ∇_x log p(c | x)
  ```

  Classifier-free guidance (CFG) estimates the guided score without an explicit classifier p(c | x):

  ```
  ε_guided = ε_θ(x_t, t, ∅) + w · [ε_θ(x_t, t, c) - ε_θ(x_t, t, ∅)]
  ```

  where ε_θ(x_t, t, ∅) is the unconditional noise prediction (conditioning dropped to null vector ∅), w is the guidance scale, and ε_θ(x_t, t, c) is the conditioned prediction. This formulation enables a single neural network to implement both p(x) and p(x | c) through shared parameters with stochastic conditioning dropout at training time.

  Dynamic, semantic-aware CFG (2024-2025) generalises this by computing guidance maps M_i for each semantic region i identified through cross-attention and self-attention map clustering:

  ```
  ε_guided(i) = ε_θ(x_t, t, ∅)(i) + w_i · [ε_θ(x_t, t, c)(i) - ε_θ(x_t, t, ∅)(i)]
  ```

  where w_i is a per-region guidance scale, achieving localised semantic adherence without over-saturation of non-salient regions.

  ### Multi-Modal Diffusion Transformer (MM-DiT) Architecture

  The MM-DiT architecture (SD3, SD3.5) extends single-stream cross-attention conditioning into a bidirectional dual-stream formulation. Both the image token stream h_img and the text token stream h_txt maintain independent normalisation, MLPs, and self-attention, but share a joint cross-attention block where:

  ```
  h_img_attn = CrossAttn(Q=W_Q^img · h_img, K=W_K · concat(h_img, h_txt), V=W_V · concat(h_img, h_txt))
  h_txt_attn = CrossAttn(Q=W_Q^txt · h_txt, K=W_K · concat(h_img, h_txt), V=W_V · concat(h_img, h_txt))
  ```

  This enables text representations to be influenced by image context and vice versa throughout the denoising process, producing substantially improved compositional accuracy and text rendering within generated images compared to unidirectional conditioning.

  ### Adapter Injection Mechanisms

  The [[ControlNet]] conditioning architecture operates via residual addition:

  ```
  h_out = h_frozen_backbone + ControlNet_block(h_frozen_backbone, c_spatial) · conditioning_scale
  ```

  where ControlNet_block is an initialised-zero trainable copy of the frozen backbone encoder block, taking both the backbone hidden state and the spatial conditioning signal c_spatial (e.g. depth map, edge map) as inputs. The zero initialisation ensures that at training onset, the backbone behaviour is unmodified (ControlNet residuals are exactly zero), preventing catastrophic forgetting.

  The [[IP-Adapter]] architecture introduces decoupled cross-attention:

  ```
  h_out = CrossAttn_text(Q, K_text, V_text) + λ · CrossAttn_image(Q, K_image, V_image)
  ```

  where K_text, V_text are projected from the text conditioning and K_image, V_image are projected from the image conditioning encoder output (typically a CLIP ViT-L image encoder). The λ parameter (IP-Adapter conditioning scale) controls the relative influence of image versus text conditioning, enabling continuous interpolation between pure text and pure image prompt guidance.

  ## Variant Taxonomy

  ### By Conditioning Modality Pair
  - **Text → Image**: Most mature family; CLIP, T5, ALIGN text encoders → [[U-Net]] or DiT image backbones. Examples: Stable Diffusion, DALL-E 3, Imagen 2, Ideogram 3.
  - **Image → Image** (style/content transfer): Reference image embeddings → target image generation. Examples: [[IP-Adapter]], Consistent Character, PhotoMaker.
  - **Spatial Map → Image** (structural conditioning): Depth, edge, pose, segmentation → generated image. Examples: [[ControlNet]], T2I-Adapter, UniControl.
  - **Text → Audio**: CLAP text embeddings → mel-spectrogram latent diffusion. Examples: AudioLDM 2, Stable Audio, MusicGen.
  - **Video → Audio** (Foley): Video frame embeddings → synchronised audio generation. Examples: FoleyCrafter, Ovi, AV-DiT.
  - **Audio → Video**: Audio spectrogram embeddings → video frame generation. Examples: DiffFoley (reversed), audio-conditioned video diffusion.
  - **Text → Video**: Text embeddings + optional structural conditioning → temporally coherent video. Examples: Sora (OpenAI), Runway Gen-3, Kling, Wan2.1.
  - **Cross-modal → 3D**: Text or image → point cloud / NeRF / 3D Gaussian Splatting. Examples: Point-E, Shap-E, TripoSR.
  - **Sequence → Molecular Structure**: Protein sequence / binding pocket geometry → protein structure / ligand. Examples: RFDiffusion, Chroma, DiffSBDD.

  ### By Conditioning Injection Mechanism
  - **Full fine-tuning conditioning**: All model weights updated for each new conditioning modality (expensive, maximum capacity).
  - **Cross-attention injection**: Conditioning encoder output injected as K, V into frozen or trainable cross-attention layers (canonical approach in LDM/DiT).
  - **Adapter-based conditioning**: Lightweight modules (ControlNet, IP-Adapter, T2I-Adapter) added to frozen backbone without full retraining.
  - **[[LoRA]] conditioning adapters**: Low-rank weight residuals (rank 4-128) trained for new conditioning domains, modifying K, V, Q weight matrices of existing attention layers.
  - **Prefix conditioning**: Conditioning tokens prepended to the target sequence and attended through self-attention (applicable in autoregressive models).
  - **Cross-modal in-context learning (2024)**: Conditioning provided as examples in the context window of a multimodal autoregressive model, without gradient-based adaptation.

  ## Use Cases / Major Families

  **Text-to-Image Generation**
  The dominant use case: [[Stable Diffusion]] 1.x / SDXL / SD3, DALL-E 3, Imagen 2, Midjourney, Ideogram. Text conditioning is delivered through CLIP or T5 text encoders. SD3 uses a dual-encoder architecture (CLIP-L and T5-XXL) whose outputs are concatenated and injected via the MM-DiT's joint cross-attention. This dual-encoder approach enables both the short-range semantic understanding of CLIP (strong for concept alignment) and the long-range compositional understanding of T5 (strong for complex prompt parsing) to be simultaneously active conditioning sources. Multi-modal guidance allows additional image or style references via [[IP-Adapter]] or reference image conditioning. Commercial deployments include advertising creative generation at scale (Canva, Adobe Express), game asset production (Roblox AI tools, Unity AI), fashion design (Zalando AI tools), and architecture visualisation (Midjourney for architectural renders).

  **Spatial and Structural Conditioning**
  [[ControlNet]] enables conditioning on depth maps, edge maps (Canny, MLSD), human pose skeletons (OpenPose), semantic segmentation masks, surface normals, scribble sketches, and tile pattern references. Multiple ControlNet models can be stacked with independent conditioning weights, enabling simultaneous control of composition, structure, and content. UniControl (2023) unifies all ControlNet conditioning types into a single model, enabling conditioning type switching at inference time. Spatial conditioning is instrumental in industrial design (conditioning on CAD wireframes), architecture visualisation (conditioning on floor plan or facade line drawings), character design (conditioning on pose references), and inpainting-conditioned restoration of historical images.

  **Audio-to-Video and Video-to-Audio**
  Systems such as AV-DiT (2024), FoleyCrafter (2024), and Ovi (2024) cross-condition audio and video diffusion models: video features are encoded and injected via cross-attention into audio denoising transformers and vice versa. The FoleyCrafter architecture uses a semantic adapter with parallel cross-attention layers for semantic audio-visual alignment, plus a temporal adapter for onset synchronisation. Ovi (2024) uses twin backbone cross-modal fusion where audio and video latents are jointly processed by two parallel but coupled diffusion backbones that exchange cross-attention at each denoising step. These architectures achieve significantly better audio-visual synchronisation (measured by onset alignment score) than previous pipelined approaches where audio and video were generated sequentially.

  **Text-to-Audio / Music Generation**
  AudioLDM 2, Stable Audio, and MusicGen-Diffusion condition [[Audio Synthesis]] on text descriptions via CLAP (Contrastive Language-Audio Pre-training) encoder embeddings injected through cross-attention into a mel-spectrogram latent diffusion backbone. Stable Audio (from Stability AI, 2024) additionally accepts audio duration and structural conditioning (intro/verse/chorus labels). Multi-modal music conditioning systems accept MIDI sequences, chord charts, or reference audio style clips as additional conditioning sources alongside text, enabling professional music production workflows.

  **Medical Imaging and Drug Discovery**
  Cross-modal conditioning of imaging modalities (PET-to-fMRI, CT-to-MRI) enables [[Medical Imaging]] synthesis for rare pathology augmentation, facilitating training of diagnostic classifiers on conditions where real patient data is scarce. The UKOMAIN-affiliated group at UCL WEISS uses cross-modal conditioning between tactile and visual modalities for surgical tool-tissue interaction modelling. Protein structure diffusion models (RFDiffusion, Chroma) accept amino acid sequence conditioning, binding pocket geometry conditioning, or both simultaneously, steering 3D structure generation toward functional protein conformations for [[Drug Discovery]]. DiffSBDD conditions ligand molecule diffusion on protein binding pocket structure, enabling targeted small-molecule design.

  **3-D and Spatial Computing**
  Point-E and Shap-E condition 3-D generation on text via CLIP, generating point clouds or 3D implicit representations from text prompts. Neural Radiance Field (NeRF) editing systems (Instruct-NeRF2NeRF) accept text conditioning for scene manipulation, editting 3D scenes by conditioning the editing process on textual instructions. Gaussian Splatting models (GaussianEditor, 2024) accept text conditioning for targeted scene editing. These capabilities bridge cross-modal conditioning into [[Spatial Computing]] workflows including XR environment generation, virtual production asset creation, and digital twin scene update from natural language instructions. [[Synthetic Data]] generation for training robotic perception systems frequently uses depth-conditioned or pose-conditioned [[ControlNet]] to produce annotated synthetic training images from 3D scene renderings.

  ## Benchmarks and Evaluation

  Evaluating cross-modal conditioning quality requires measuring both output quality (fidelity, photorealism, aesthetic appeal) and conditioning faithfulness (how well the output reflects the conditioning signal). Standard benchmarks and metrics include:

  **Image Quality Metrics**
  - **FID (Fréchet Inception Distance)**: Measures distributional similarity between generated and real image distributions using Inception-v3 features. Lower is better. SD-XL achieves FID ~3-5 on COCO; SD3 further reduces this.
  - **FID-30k**: Evaluated on 30,000 generated vs 30,000 real images; the standard setting for fair comparison.
  - **CLIP Score**: Measures cosine similarity between CLIP embeddings of the generated image and conditioning text. Higher indicates better text-image alignment. Typical values: 0.25-0.35 for state-of-the-art systems.
  - **PickScore / ImageReward**: Human preference prediction models trained on human ratings of generated images, better correlated with human judgement than FID or CLIP Score.

  **Conditioning Faithfulness Benchmarks**
  - **T2I-CompBench**: A comprehensive benchmark for text-to-image compositional evaluation, testing attribute binding, spatial relationships, and object counting. Current state-of-the-art models achieve 50-65% on binding tasks.
  - **TIFA (Text-Image Faithfulness using qA)**: Uses question-answering models to verify whether generated images contain the objects and attributes specified in prompts.
  - **DrawBench / PartiPrompts**: Curated sets of challenging prompts testing specific compositional and creative capabilities.

  **Audio Conditioning Metrics**
  - **FAD (Fréchet Audio Distance)**: Audio analogue of FID for audio generation quality.
  - **KL Divergence on PANNs features**: Measures distributional alignment of generated audio with reference distributions.
  - **CLAP score**: Cosine similarity between CLAP embeddings of generated audio and conditioning text.
  - **Video-audio synchronisation score**: For audio-visual cross-modal conditioning, measures onset alignment between video events and generated sounds.

  **Structural Conditioning Metrics**
  - **SSIM / L1 distance from control signal**: For [[ControlNet]]-style conditioning, measures how faithfully spatial structure from the conditioning map is preserved in the generated image.
  - **Pose estimation accuracy**: For human pose conditioning, re-estimates pose from the generated image and compares to the conditioning skeleton.

  **Multi-modal Alignment (2024-2025 frontier)**
  - AlignGen (2025) reports an average 11.65% improvement in tri-modal semantic alignment (text + image + audio) over baselines on combined evaluation suites.
  - The Unified Multimodal Understanding and Generation benchmark (2025, arXiv:2505.02567) provides a comprehensive evaluation across generation, understanding, and cross-modal retrieval tasks in a single evaluation suite.

  ## Academic Context

  Cross-modal conditioning emerged from the sequence-to-sequence attention literature. Bahdanau et al. (2015) introduced the first soft attention mechanism for neural machine translation, where decoder hidden states (queries) attended over encoder outputs (keys/values) from a different-language sequence — structurally equivalent to modern cross-modal attention. Vaswani et al. (2017) generalised this to the scaled dot-product multi-head attention used across encoder-decoder transformer blocks. The application to vision-language alignment was pioneered by Radford et al. (2021) with [[CLIP]], which trained a shared embedding space via contrastive learning over 400 million image-text pairs, enabling text embeddings to be geometrically meaningful conditioning signals in image generation.

  Ho and Salimans (2022) introduced [[Classifier-Free Guidance]], the critical technique that made cross-modal conditioning practically controllable without an external classifier. Rombach et al. (2022) demonstrated Latent Diffusion Models (LDMs) conditioned on CLIP text embeddings via cross-attention injected at every resolution of the [[U-Net]], establishing the architecture that became [[Stable Diffusion]]. Zhang et al. (2023) contributed [[ControlNet]], adding spatial conditioning adapters. Ye et al. (2023) contributed [[IP-Adapter]] for decoupled image-conditioning. Peebles and Xie (2023) replaced the U-Net with the Diffusion Transformer (DiT), maintaining cross-attention conditioning within a ViT backbone. Esser et al. (2024) introduced SD3 / SD3.5 with the Multi-Modal Diffusion Transformer (MM-DiT), extending bidirectional cross-attention to enable mutual conditioning between text and image latents, achieving a step-change in prompt adherence and compositional accuracy.

  Key academic venues for cross-modal conditioning research include the main ML conferences (NeurIPS, ICML, ICLR), computer vision conferences (CVPR, ICCV, ECCV), and dedicated workshops on multimodal learning including the Multimodal Learning and Understanding (MMLU) workshop at CVPR and the Cross-Modal Learning workshop series at ECCV. The field has seen dramatic publication velocity: in 2024 alone, arXiv received over 3,000 papers on text-to-image generation, conditioning mechanisms, and related multimodal generation topics. NeurIPS 2024 and ICLR 2025 both featured cross-modal conditioning as major paper clusters.

  The Alan Turing Institute's research programme on Foundation Models and their Responsible Deployment intersects with cross-modal conditioning through work on measuring conditioning faithfulness, identifying failure modes (compositional reasoning, attribute binding), and developing interpretability tools for cross-attention mechanisms. The programme also addresses the social and legal dimensions of conditioning on copyrighted or personal data. The Turing's UKOMAIN partnership (£1.8M EPSRC funding) provides national infrastructure for multimodal AI research, with UCL, Edinburgh, Manchester, Oxford, and Cambridge as principal nodes.

  UCL runs an accredited postgraduate programme in Multimodal Artificial Intelligence (module 23042) within its Faculty of Engineering, with specific research on cross-modal alignment for clinical and surgical AI at the Wellcome / EPSRC Centre for Interventional and Surgical Sciences (WEISS). The Imperial College London AI research group has contributed to cross-modal medical imaging synthesis. The University of Edinburgh School of Informatics hosts the Centre for Speech Technology Research (CSTR) which works on audio-text cross-modal alignment, and the CDT in Natural Language Processing which contributes to conditioning encoder quality for [[Large Language Model]]-based conditioning systems.

  ## Current Landscape (2026)

  Cross-modal conditioning is fully industrialised as of 2026. The dominant production architecture is the MM-DiT (Multi-Modal Diffusion Transformer) which uses bidirectional cross-attention between text, image, and increasingly video or audio latent streams, as exemplified by Stable Diffusion 3.5, DALL-E 3, Runway Gen-3, and Sora. Adapter-based conditioning ([[ControlNet]], [[IP-Adapter]], T2I-Adapter) remains the dominant paradigm for adding new conditioning modalities to frozen models without full retraining, with the Hugging Face PEFT and Diffusers libraries providing standardised implementations with dozens of pre-trained adapter weights available for immediate use across hundreds of conditioning scenarios.

  Multi-framework conditioning has emerged as the leading frontier: systems now simultaneously accept text, reference images, structural maps (depth, pose), style references, and audio as conditioning channels, with independent cross-attention heads or adapter banks for each conditioning modality. AlignGen (2025) demonstrated cross-modality prior alignment for personalised generation with quantitative improvements in semantic alignment of 11.65% over baselines in tri-modal settings. Dynamic semantic-aware CFG (2025) employs cross-attention and self-attention maps to segment the latent by semantic region and apply spatially varying guidance scales, improving local prompt adherence without global over-saturation. The shift to flow matching (replacing DDPM) in SD3 and subsequent architectures has reduced inference timesteps from 50-100 to 4-28 steps without sacrificing conditioning faithfulness, as the straighter probability paths of flow matching are compatible with the same cross-attention conditioning mechanisms.

  Open-source tooling (ComfyUI, Automatic1111, InvokeAI) has democratised access to cross-modal conditioning pipelines, enabling communities to combine conditioning adapters in complex workflows without deep ML expertise. The ComfyUI node-graph interface allows non-expert users to construct conditioning pipelines that simultaneously apply multiple ControlNet models, IP-Adapter style conditioning, text prompting, and regional conditioning through ConditioningCombine nodes — a practical manifestation of multi-framework conditioning accessibility. API services from Stability AI, OpenAI, Google DeepMind, and Midjourney expose cross-modal conditioning as first-class API parameters (conditioning strength, guidance scale, ControlNet weight). Commercial image generation API revenue exceeded $2.5 billion globally in 2025, with cross-modal conditioning at the technical core of virtually every product.

  Video generation represents the highest-complexity frontier for cross-modal conditioning as of 2026. Temporal coherence across generated frames requires that conditioning signals are consistent not just spatially but temporally — text prompts must condition all frames coherently whilst allowing natural motion, and audio conditioning must synchronise with visual events at sub-100ms resolution. OpenAI's Sora (released publicly in late 2024), Runway Gen-3, Kling, and Wan2.1 (released 2025) address this through 3D spatio-temporal attention blocks with cross-attention from text and optional audio conditioning. The quality gap between state-of-the-art video models and human cinematography has narrowed dramatically in 2025-2026, driven primarily by improvements in cross-modal conditioning mechanisms.

  Regulatory and ethical considerations have moved to the forefront of the cross-modal conditioning landscape. The C2PA (Coalition for Content Provenance and Authenticity) standard mandates that AI-generated media include cryptographic provenance manifests recording conditioning inputs (text prompt hashes, reference image checksums), model identifiers, and guidance parameters. Adobe has integrated C2PA Content Credentials into its Firefly API (built on conditioned diffusion models) since 2024, embedding manifest data in the image file at generation time. Google DeepMind's SynthID watermarking scheme embeds imperceptible conditioning-independent signals in generated images and audio, enabling detection of AI-generated content irrespective of post-processing. These provenance and watermarking mechanisms are becoming mandatory requirements in regulated contexts (journalism, legal proceedings, electoral communications) and are increasingly integrated into cross-modal conditioning production pipelines.

  ## UK Context

  The UK has a notable academic and industrial footprint in cross-modal conditioning research, positioned at the intersection of its traditional strengths in natural language processing, computer vision, and speech technology. UCL's Faculty of Engineering offers the UK's first dedicated postgraduate module in Multimodal Artificial Intelligence (module 23042) and hosts the Alan Turing Institute partnership programme in multimodal and cross-modal learning. UCL's Wellcome / EPSRC Centre for Interventional and Surgical Sciences (WEISS) conducts research on cross-modal conditioning for surgical guidance — conditioning image generation and scene understanding on tactile sensor data, fluoroscopic video, and instrument tracking signals, with direct application to robotic-assisted surgery. The UKOMAIN network, funded by EPSRC at £1.8 million, hosted its Fourth Workshop on Multimodal AI at UCL East Campus in June 2026, consolidating a national research community spanning Edinburgh, Manchester, Oxford, and Imperial College London with 180+ attendees from academia and industry.

  Imperial College London's AI research groups have contributed to cross-modal alignment in medical imaging — particularly PET-to-fMRI and CT-to-MRI synthesis using conditional diffusion models, relevant to NHS diagnostic workflows and the NHSX AI Lab programme. Imperial's Department of Computing has published on cross-modal conditioning for autonomous systems: conditioning visual generation models on LiDAR point clouds and radar signatures for synthetic training data generation for self-driving vehicle perception systems. The University of Edinburgh's School of Informatics works on speech-to-image and text-to-speech conditioning, leveraging the NLP heritage of the Edinburgh Natural Language Processing group (ENNLP) and the Centre for Speech Technology Research (CSTR). Edinburgh's CSTR has specifically contributed to audio-visual cross-modal conditioning quality through improvements in CLAP (Contrastive Language-Audio Pre-training) and audio encoder architecture research. The Alan Turing Institute maintains a research programme on Trustworthy and Reproducible AI that includes rigorous evaluation of cross-modal conditioning fidelity and bias, with published toolkits for auditing CLIP-based conditioning bias in [[Text-to-Image]] systems.

  The University of Cambridge's Machine Intelligence Laboratory contributes to cross-modal conditioning through research on protein-language cross-modal conditioning for [[Drug Discovery]] — building on its leadership in the AlphaFold ecosystem — and through work on vision-language grounding and compositional conditioning faithfulness. Cambridge's structured prediction group has researched the failure modes of cross-attention conditioning for compositional prompts and proposed structured attention priors that improve attribute binding.

  In Northern England, the University of Manchester's Machine Learning and Optimisation group applies cross-modal conditioning to industrial inspection and materials science, conditioning image generation on spectroscopic and diffraction data for materials characterisation workflows relevant to Manchester's advanced manufacturing sector. The University of Leeds hosts the AIMS (AI for Medical Sciences) CDT which uses cross-modal conditioning for [[Medical Imaging]] synthesis and [[Drug Discovery]] target identification, with industrial partnerships with AstraZeneca and Marks & Spencer (AI-conditioned fashion imagery). Newcastle University's Digital Economy group applies audio-visual cross-modal conditioning to accessibility technologies including lip-reading, audio description generation for visually impaired users, and sign language synthesis — conditioning video generation on text and skeletal motion data for British Sign Language (BSL) generation. Sheffield's Natural Language Processing group (NLP Sheffield) contributes to text conditioning quality through improved encoder architectures for domain-specific and low-resource languages, relevant to conditioning models on technical or clinical text.

  Key UK-based companies exploiting cross-modal conditioning commercially include Stability AI (founded in London in 2020, creators of [[Stable Diffusion]], the most widely deployed open-weight text-to-image system), Magic Pony Technology (acquired by X/Twitter for £500M+ in 2016, based on Imperial College research, contributing to early cross-modal generation work), Wayve (conditioning robotic driving policy networks on language descriptions of driving scenarios for end-to-end autonomous driving), and Synthesia (London-based, conditioning video avatar generation on text scripts and speaker conditioning signals for AI video production). The UK Creative Industries Council has identified AI-conditioned content generation as a strategic priority for the UK's creative economy, worth an estimated £116 billion annually.

  ## Future Directions (2026-2030)

  The immediate trajectory is towards unified any-to-any cross-modal conditioning: a single backbone model that can accept arbitrary combinations of text, image, audio, video, 3-D geometry, and structured data as conditioning inputs and produce arbitrary output modalities, without modality-specific adapter banks. Work on unified generative models (Gemini 2.0 Flash with native image generation, GPT-4o with DALL-E 3 integration, Lumina-mGPT, and Show-o) is converging on this goal through shared tokeniser vocabularies and joint autoregressive or diffusion training across modalities. The architectural question of whether fully unified any-to-any models will surpass specialised models in each individual modality pair, or whether there will be a persistent quality gap between specialist and generalist conditioning, is a central open question for the 2026-2028 period.

  Conditioning efficiency will improve through sparse cross-attention mechanisms (linear or subquadratic complexity) that avoid full pairwise token interactions between conditioning and target sequences, making very-long-context conditioning (multi-page documents, full video clips, hour-long audio) tractable on consumer hardware. Linear attention approximations (Hyena, Mamba, RWKV) and their hybrid variants that maintain selective dense attention for cross-modal interfaces whilst applying subquadratic attention within modalities are active research directions. Flash attention optimisations for cross-modal attention specifically are likely to enable 10-50× longer conditioning context windows by 2028. Flow matching (Lipman et al., 2022; Esser et al., 2024) is increasingly replacing DDPM diffusion as the generative substrate, offering straighter probability paths and fewer inference steps whilst preserving cross-modal conditioning through identical attention mechanisms; by 2027, flow matching or closely related approaches (Consistency Models, Rectified Flow) are likely to become the near-universal generative substrate for cross-modal conditioning.

  Interpretability of cross-modal conditioning — understanding which conditioning tokens influence which output regions and how guidance scale affects semantic decomposition — is an active research area with growing practical importance. Attention map visualisation tools (DAAM, DiffViz), concept erasure techniques (Concept Ablation, Erasing Concepts from Diffusion Models), and mechanistic interpretability methods applied to cross-attention heads are enabling auditors to trace how specific conditioning tokens shape specific output regions. This is motivated partly by safety concerns (preventing conditioning-based generation of harmful content), partly by creative control (enabling precise spatial editing by manipulating conditioning token attention), and partly by legal requirements (demonstrating that a model cannot generate specific copyrighted content regardless of conditioning). By 2028-2030, interpretability of cross-modal conditioning is likely to be a standard engineering requirement for enterprise deployments in regulated industries.

  Regulatory frameworks covering synthetic media provenance (C2PA, SynthID, Adobe Content Credentials, the EU AI Act's transparency obligations for AI-generated content) will increasingly mandate that conditioning inputs and guidance parameters are recorded in cryptographic provenance manifests attached to generated outputs. The UK's Online Safety Act 2023 requires labelling of AI-generated content, and enforcement is expected to reach content generation APIs by 2027. Cross-modal conditioning systems will need to integrate provenance recording as a mandatory component rather than an optional add-on, creating demand for standardised conditioning metadata schemas and signing protocols.

  Personalised cross-modal conditioning — where the conditioning encoder or the conditioning injection mechanism is fine-tuned to individual users' aesthetic preferences, domain knowledge, or proprietary style — is an emerging direction driven by both consumer (Midjourney's Style Personalisation feature) and enterprise (brand-consistent conditioned generation) use cases. By 2028, conditioning adapters trained on individual users' image libraries or writing styles are likely to be widely available as consumer subscription features, raising significant privacy and data governance questions about how conditioning personalisation data is stored, used, and deleted.

  ## Standards, Governance, and Responsible Deployment

  Cross-modal conditioning as a production technology is subject to an emerging but rapidly developing layer of standards, voluntary norms, and regulatory requirements that affect how systems built on it must be designed, operated, and documented.

  **Content provenance and authenticity standards**: The Coalition for Content Provenance and Authenticity (C2PA), co-founded by Adobe, Microsoft, Intel, ARM, BBC, and Truepic, has developed the C2PA Content Credentials specification — a cryptographic provenance manifest format that records the conditioning inputs (text prompt hash, reference image checksums, conditioning adapter identifiers), model provenance, and editing history of AI-generated media. Adobe's Firefly API mandates C2PA attachment at generation time. The C2PA Technical Specification v2.0 (2024) adds support for signing conditioning parameters as part of the manifest, creating a verifiable audit trail from conditioning input to generated output. The ISO/IEC JTC 1 SC 29 standardisation body is working on integrating C2PA concepts into formal media authenticity standards.

  **Watermarking**: Google DeepMind's SynthID embeds imperceptible, statistically robust watermarks into the pixel values, frequency domain, or (for audio) spectral characteristics of generated outputs, enabling detection of AI-generated content that is robust to moderate post-processing (compression, resizing, brightness adjustment). SynthID does not depend on the conditioning mechanism itself — it is applied post-generation — but is increasingly required in production deployments of cross-modal conditioning systems deployed in regulated contexts (journalism, electoral advertising, financial services research).

  **Model cards and bias documentation**: The Hugging Face Model Card standard (Mitchell et al., 2019) and the MLCommons Croissant standard (2024) define structured documentation formats for generative models that include training data description, known biases and failure modes, intended use, out-of-scope use, and evaluation results across demographic groups. For cross-modal conditioning systems, bias in the conditioning encoder (CLIP's documented biases around gender, ethnicity, and cultural representation) must be documented and mitigated, with evaluation results across demographic conditioning test sets (HolisticBias, DALL-EVAL) required for responsible deployment.

  **Regulatory compliance for AI-generated content**: The [[EU AI Act]] Article 50 mandates that systems generating synthetic audio, image, video, or text must clearly disclose that the content is AI-generated. Deep synthesis regulations in China (effective January 2023) require labelling of AI-generated content and restrict conditioning on real persons' likenesses without consent. The UK Online Safety Act 2023 Codes of Practice require platforms to label synthetic media produced by AI. Cross-modal conditioning systems deployed for consumer applications must integrate disclosure mechanisms as first-class design requirements.

  **Open weights licences**: The dominant open-weight text-to-image systems ([[Stable Diffusion]] 1.x, SDXL, SD3) are released under the CreativeML Open RAIL-M licence, which restricts specific harmful uses (generating non-consensual intimate imagery, impersonating specific individuals) whilst permitting commercial use and fine-tuning. Fine-tuned adapters ([[LoRA]] weights, [[ControlNet]] checkpoints) are typically released under MIT or Apache 2.0 licences. The licensing landscape for conditioning adapters is complex: a LoRA trained on copyrighted images may itself be considered a derivative work in some jurisdictions, creating legal risk for downstream users.

  ## Research & Literature

  1. Bahdanau, D., Cho, K., & Bengio, Y. (2015). Neural machine translation by jointly learning to align and translate. *ICLR 2015*. arXiv:1409.0473
  2. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. *NeurIPS 2017*. arXiv:1706.03762
  3. Radford, A., Kim, J. W., Hallacy, C., et al. (2021). Learning transferable visual models from natural language supervision (CLIP). *ICML 2021*. arXiv:2103.00020
  4. Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion probabilistic models. *NeurIPS 2020*. arXiv:2006.11239
  5. Ho, J., & Salimans, T. (2022). Classifier-free diffusion guidance. *NeurIPS 2022 Workshop*. arXiv:2207.12598
  6. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-resolution image synthesis with latent diffusion models. *CVPR 2022*. arXiv:2112.10752
  7. Zhang, L., Rao, A., & Agrawala, M. (2023). Adding conditional control to text-to-image diffusion models (ControlNet). *ICCV 2023*. arXiv:2302.05543
  8. Ye, H., Zhang, J., Liu, S., Han, X., & Yang, W. (2023). IP-Adapter: Text compatible image prompt adapter for text-to-image diffusion models. *arXiv:2308.06721*
  9. Peebles, W., & Xie, S. (2023). Scalable diffusion models with transformers (DiT). *ICCV 2023*. arXiv:2212.09748
  10. Esser, P., Kulal, S., Blattmann, A., et al. (2024). Scaling rectified flow transformers for high-resolution image synthesis (Stable Diffusion 3). *ICML 2024*. arXiv:2403.03206
  11. Mou, C., Wang, X., Xie, L., et al. (2024). T2I-Adapter: Learning adapters to dig out more controllable ability for text-to-image diffusion models. *AAAI 2024*. arXiv:2302.08453
  12. Song, Y., Sohl-Dickstein, J., Kingma, D. P., Kumar, A., Ermon, S., & Poole, B. (2021). Score-based generative modeling through stochastic differential equations. *ICLR 2021*. arXiv:2011.13456
  13. Liu, X., Zhan, F., Tang, J., et al. (2024). AlignGen: Boosting personalised image generation with cross-modality prior alignment. *arXiv:2505.21911*
  14. Low, C., et al. (2024). Ovi: Twin backbone cross-modal fusion for audio-video generation. *arXiv:2510.01284*
  15. Shih, M., et al. (2024). Multimodal video generation models with audio: Present and future. *ResearchGate:401388352*
  16. Saharia, C., Chan, W., Saxena, S., et al. (2022). Photorealistic text-to-image diffusion models with deep language understanding (Imagen). *NeurIPS 2022*. arXiv:2205.11487
  17. Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., & Chen, M. (2022). Hierarchical text-conditional image generation with CLIP latents (DALL-E 2). arXiv:2204.06125
  18. Liu, H., Chen, Z., Yuan, Y., et al. (2023). AudioLDM: Text-to-audio generation with latent diffusion models. *ICML 2023*. arXiv:2301.12503
  19. Blattmann, A., Dockhorn, T., Kulal, S., et al. (2023). Stable video diffusion. arXiv:2311.15127
  20. Chen, J., Yu, J., Ge, C., et al. (2023). PixArt-α: Fast training of diffusion transformer for photorealistic text-to-image synthesis. *ICLR 2024*. arXiv:2310.00426
  21. Lipman, Y., Chen, R. T. Q., Ben-Hamu, H., Nickel, M., & Le, M. (2022). Flow matching for generative modelling. *ICLR 2023*. arXiv:2210.02747
  22. Wang, C., Ye, M., Zhao, X., et al. (2024). FoleyCrafter: Bring silent videos to life with lifelike and synchronised sounds. arXiv:2407.01494
  23. Song, J., Meng, C., & Ermon, S. (2021). Denoising diffusion implicit models (DDIM). *ICLR 2021*. arXiv:2010.02502
  24. UK Open Multimodal AI Network (UKOMAIN). (2025). Fourth Workshop on Multimodal AI, UCL East Campus, June 2026. https://multimodalai.github.io/
  25. UCL Faculty of Engineering. (2024). Multimodal Artificial Intelligence (module 23042). https://www.ucl.ac.uk/engineering/multimodal-artificial-intelligence-23042
  26. Dhariwal, P., & Nichol, A. (2021). Diffusion models beat GANs on image synthesis. *NeurIPS 2021*. arXiv:2105.05233
  27. Song, X., et al. (2025). Dynamic classifier-free diffusion guidance via online feedback. *arXiv:2509.16131*

  ## Key Terminology

  - **Conditioning signal**: The input from the source modality (e.g. a text prompt, depth map, or reference audio) used to steer output generation in the target modality. The conditioning signal is always encoded into a dense vector representation before being injected into the generation backbone.
  - **Conditioning encoder**: The neural network (typically a pre-trained CLIP, T5, CLAP, or ViT encoder) that transforms raw conditioning inputs into the embedding sequence used as keys and values in cross-attention. The quality and alignment of the conditioning encoder is the primary determinant of conditioning faithfulness.
  - **Guidance scale (w)**: Hyperparameter controlling adherence to the conditioning signal in classifier-free guidance; higher values increase fidelity to the conditioning signal, lower values increase diversity and avoid artefacts. Typical values range from 1.0 (minimal conditioning) to 20.0 (very strong adherence), with 7.5 being a historical default for text-to-image systems. Dynamic CFG methods adjust w per semantic region rather than globally.
  - **Cross-attention injection**: Placement of cross-attention layers within a generation backbone to receive keys and values from the conditioning encoder's output. In U-Net architectures, cross-attention is typically injected at every resolution level. In DiT architectures, cross-attention is typically injected at every transformer block.
  - **Adapter**: A lightweight trainable module (typically 10-100M parameters) added to a frozen backbone to introduce new conditioning channels without full model retraining. The adapter paradigm allows new conditioning modalities to be added to an existing model in hours rather than weeks of training. Examples include [[ControlNet]], [[IP-Adapter]], T2I-Adapter, [[LoRA]] conditioning adapters.
  - **Null conditioning**: Empty or zero conditioning embedding (or a fixed "uncond" token) used during classifier-free guidance training to represent the unconditional case. The model is trained to handle both conditioned and null-conditioned inputs, learning the unconditional distribution p(x) in addition to the conditioned distribution p(x | c).
  - **Modality alignment**: The geometric property that conditioning and target modality embeddings occupy semantically comparable regions of their respective representation spaces, enabling cross-attention to meaningfully route information across modalities. Achieved through contrastive pre-training (CLIP, ALIGN, CLAP) on large paired datasets of conditioning-target pairs.
  - **Zero convolution**: ControlNet initialisation trick in which all adapter weight matrices are initialised to zero (via zero-initialised convolutional layers) at the start of training. This ensures that at epoch 0, the conditioning adapter contributes zero residuals to the frozen backbone, preventing catastrophic forgetting at training onset and enabling stable gradient flow through the adapter.
  - **Conditioning scale**: The hyperparameter (separate from guidance scale) controlling the weighting of a conditioning adapter's contribution, as in IP-Adapter's λ parameter or ControlNet's conditioning weight. Allows multiple conditioning channels to be independently weighted.
  - **Multi-modal latent space**: A shared representation space in which embeddings from multiple modalities are approximately aligned, enabling geometric operations (interpolation, addition) across modalities. CLIP's image-text shared space is the canonical example: CLIP image embeddings and CLIP text embeddings of corresponding concepts are close in the shared space.
  - **Cross-modal in-context learning**: A conditioning paradigm in which conditioning examples (image-text pairs, audio-text pairs) are provided as context tokens to a multi-modal autoregressive model, without gradient-based adaptation. The model generalises the conditioning pattern from the in-context examples to produce outputs aligned with the demonstrated conditioning relationship.
  - **Conditioning dropout**: The training technique of randomly replacing conditioning inputs with null conditioning at rate p_uncond (typically 10-20%), enabling classifier-free guidance by training the model to handle both conditioned and unconditioned inference in a single model.

- ### Provenance
  - sources:: Bahdanau et al. (2015) arXiv:1409.0473; Vaswani et al. (2017) arXiv:1706.03762; Radford et al. (2021) CLIP ICML; Ho & Salimans (2022) Classifier-Free Guidance arXiv:2207.12598; Rombach et al. (2022) LDM CVPR; Zhang et al. (2023) ControlNet ICCV arXiv:2302.05543; Ye et al. (2023) IP-Adapter arXiv:2308.06721; Esser et al. (2024) SD3 arXiv:2403.03206; UKOMAIN https://multimodalai.github.io/; UCL module https://www.ucl.ac.uk/engineering/multimodal-artificial-intelligence-23042; arxiv.org/html/2401.11631v1; arxiv.org/pdf/2505.21911; arxiv.org/html/2405.18304v1; arxiv.org/html/2505.02567v3
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
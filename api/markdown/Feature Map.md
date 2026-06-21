public:: true

# Feature Map

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:feature-map",
  "@type": "Page",
  "title": "Feature Map",
  "vc:slug": "feature-map",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:convolutional-neural-network",
      "vc:label": "Convolutional Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:filter-kernel",
      "vc:label": "Filter Kernel"
    },
    {
      "@id": "urn:visionflow:linked:receptive-field",
      "vc:label": "Receptive Field"
    },
    {
      "@id": "urn:visionflow:linked:convolution",
      "vc:label": "Convolution"
    },
    {
      "@id": "urn:visionflow:linked:activation-function",
      "vc:label": "Activation Function"
    },
    {
      "@id": "urn:visionflow:linked:feature-extraction",
      "vc:label": "Feature Extraction"
    },
    {
      "@id": "urn:visionflow:linked:pooling-layer",
      "vc:label": "Pooling Layer"
    },
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:image-recognition",
      "vc:label": "Image Recognition"
    },
    {
      "@id": "urn:visionflow:linked:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:linked:feature-pyramid-network",
      "vc:label": "Feature Pyramid Network"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "Transfer Learning"
    },
    {
      "@id": "urn:visionflow:linked:attention-mechanism",
      "vc:label": "Attention Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:semantic-segmentation",
      "vc:label": "Semantic Segmentation"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:tensor",
      "vc:label": "Tensor"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-map",
  "@type": "Class",
  "label": "Feature Map",
  "definition": "A feature map (or activation map) is the output produced when a convolutional filter is applied across an input in a convolutional neural network, encoding the spatial response of a learned feature. Each channel of a feature map highlights where a particular pattern, such as an edge or texture, occurs in the input. Stacks of feature maps form the intermediate representations that deeper layers compose into higher-level concepts.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.91,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:convolutional-neural-network",
      "label": "Convolutional Neural Network"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:filter-kernel",
        "label": "Filter Kernel"
      },
      {
        "@id": "urn:ngm:class:receptive-field",
        "label": "Receptive Field"
      },
      {
        "@id": "urn:ngm:class:channel",
        "label": "Channel"
      },
      {
        "@id": "urn:ngm:class:spatial-activation",
        "label": "Spatial Activation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:feature-pyramid-network",
        "label": "Feature Pyramid Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      },
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      },
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:feature-detection",
        "label": "Feature Detection"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:image-recognition",
        "label": "Image Recognition"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:semantic-segmentation",
        "label": "Semantic Segmentation"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pooling-layer",
        "label": "Pooling Layer"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      },
      {
        "@id": "urn:ngm:class:spatial-hierarchy",
        "label": "Spatial Hierarchy"
      },
      {
        "@id": "urn:ngm:class:feature-pyramid-network",
        "label": "Feature Pyramid Network"
      },
      {
        "@id": "urn:ngm:class:grad-cam",
        "label": "Grad-CAM"
      }
    ]
  },
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

- ### Definition
  - A [[Feature Map]] (also called an activation map) is the spatial tensor produced by applying a learned [[Filter Kernel]] across an input image or preceding feature map within a [[Convolutional Neural Network]], encoding where and how strongly a particular pattern or feature detector responds at each spatial location. Formally, given an input tensor X of shape H×W×C_in and a convolutional filter W of shape k×k×C_in×C_out, the output feature map Y of shape H'×W'×C_out is computed as Y[h,w,c] = σ(Σᵢ Σⱼ Σₛ X[h·s+i, w·s+j, s] · W[i,j,s,c] + b[c]), where σ is a non-linear [[Activation Function]] (typically [[ReLU]]), s is the convolution stride, and b[c] is a learned bias. Each of the C_out output channels corresponds to one convolutional filter and constitutes a distinct two-dimensional feature map whose values measure the similarity between the filter's learned pattern and each local spatial region — the [[Receptive Field]] — of the input. Early convolutional layers produce feature maps that respond to low-level visual primitives such as oriented edges, colour blobs, and textures; intermediate layers compose these into part-level patterns such as eyes, wheels, or characters; and the deepest layers before global pooling encode semantically rich, spatially coarse maps that correspond to object-level concepts. This hierarchical composition of feature maps across network depth — the spatial hierarchy — is the core computational mechanism by which [[Convolutional Neural Network]]s convert raw pixel arrays into semantically meaningful representations, supporting tasks from [[Image Recognition]] and [[Object Detection]] to [[Semantic Segmentation]] and [[Transfer Learning]]. The spatial structure of feature maps also makes them directly accessible to visualisation and attribution tools such as [[Grad-CAM]], which weights and spatially pools gradient signals over feature map channels to produce class-discriminative localisation heatmaps, bridging [[Feature Map]] analysis with the broader [[Explainable AI]] agenda.

- ### Semantic Classification
  - owl-class:: machine-learning:FeatureMap
  - owl-role:: Concept | IntermediateRepresentation | SpatialTensor
  - owl-inferred:: machine-learning:ActivationMap, machine-learning:ConvolutionalOutput, machine-learning:HierarchicalRepresentation
  - belongs-to-domain:: [[MachineLearningDomain]]
  - implemented-in-layer:: [[ModelLayer]]

- ### Relationships
  - is-subclass-of:: [[Convolutional Neural Network]], [[Deep Neural Network]]
  - has-part:: [[Filter Kernel]], [[Receptive Field]], [[Channel]], [[Spatial Activation]]
  - requires:: [[Convolution]], [[Filter Kernel]], [[Activation Function]], [[Backpropagation]]
  - enables:: [[Feature Extraction]], [[Feature Detection]], [[Transfer Learning]], [[Interpretability]], [[Grad-CAM]]
  - implements:: [[Convolution]], [[Spatial Hierarchy]], [[Weight Sharing]]
  - depends-on:: [[Backpropagation]], [[Deep Learning]], [[Loss Function]]
  - supports:: [[Image Recognition]], [[Object Detection]], [[Semantic Segmentation]], [[Attention Mechanism]], [[Feature Attribution]]
  - uses:: [[Convolution]], [[Activation Function]], [[Tensor]], [[ReLU]], [[Batch Normalisation]]
  - contrasts-with:: [[Pooling Layer]], [[Attention Mechanism]], [[Fully Connected Layer]]
  - related-to:: [[Tensor]], [[Spatial Hierarchy]], [[Feature Pyramid Network]], [[Grad-CAM]], [[Receptive Field]], [[Skip Connection]]
  - standardized-by:: [[ISO/IEC 22989:2022]], [[NIST AI 100-3]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:hasPart ml:FilterKernel))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:hasPart ml:ReceptiveField))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:hasPart ml:Channel))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:hasPart ml:SpatialActivation))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:partOf ml:ConvolutionalNeuralNetwork))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:partOf ml:FeaturePyramidNetwork))

  ## Dependency Relationships
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:requires ml:Convolution))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:requires ml:FilterKernel))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:requires ml:ActivationFunction))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:dependsOn ml:Backpropagation))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:dependsOn ml:DeepLearning))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:uses ml:Convolution))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:uses ml:Tensor))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:uses ml:ReLU))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:uses ml:BatchNormalisation))

  ## Capability Relationships
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:enables ml:FeatureExtraction))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:enables ml:FeatureDetection))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:enables ml:TransferLearning))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:enables ml:Interpretability))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:supports ml:ImageRecognition))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:supports ml:ObjectDetection))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:supports ml:SemanticSegmentation))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:supports ml:FeatureAttribution))

  ## Implementation Relationships
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:implements ml:Convolution))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:implements ml:SpatialHierarchy))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:implements ml:WeightSharing))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:implements ml:LocalConnectivity))

  ## Reduction Relationships
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:reducesTo ml:ScalarActivation))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:reducesTo ml:PooledRepresentation))
      SubClassOf(ml:FeatureMap
        ObjectSomeValuesFrom(ml:reducesTo ml:GlobalAveragePooling))

  ## About
    A feature map is the fundamental unit of intermediate representation in a [[Convolutional Neural Network]]. Unlike a fully connected layer, which treats every input element symmetrically, a convolutional layer exploits two structural inductive biases: spatial locality (nearby pixels share information) and translational equivariance (a feature detector should respond the same way regardless of where in the image a pattern appears). These biases are implemented through weight sharing — the same [[Filter Kernel]] is applied at every spatial position — and local [[Receptive Field]] connectivity. The result is a feature map: a two-dimensional grid of activations in which the value at position (h, w) encodes how strongly the kernel's learned pattern matched the local input neighbourhood centred at (h, w), after passing through a non-linear [[Activation Function]].

    The depth dimension of a convolutional layer's output — the C_out channels — consists of C_out distinct feature maps, one per filter. Each filter is initialised randomly and refined by [[Backpropagation]] to minimise the [[Loss Function]] on the training task. Early in training, filters are approximately random and produce noisy feature maps; as training progresses, filters self-organise into detectors for meaningful visual structures. Seminal visualisation work by Zeiler and Fergus (2014) using deconvolution and activation maximisation showed that filters in AlexNet's first layer learn Gabor-like edge and colour detectors, second-layer filters compose these into corner and junctions, and deeper filters encode increasingly complex object parts. This hierarchical progression — from low-level local features to high-level semantic concepts across successive feature maps — is now understood to be a general property of deep convolutional architectures trained on natural image statistics, reflecting the multi-scale structure of natural scenes.

    The spatial resolution of feature maps decreases as depth increases, governed by the stride parameter s of each convolutional layer and the downsampling performed by [[Pooling Layer]]s. A standard classification backbone such as ResNet-50 reduces a 224×224 input to a 7×7 feature map at the penultimate stage before global average pooling, trading spatial resolution for semantic depth. This resolution-semantics trade-off creates a fundamental tension in tasks requiring both spatial precision (e.g., [[Semantic Segmentation]], [[Object Detection]] of small objects) and semantic richness. The [[Feature Pyramid Network]] (FPN) architecture, introduced by Lin et al. (2017), resolves this tension by constructing a multi-scale pyramid of feature maps through a top-down pathway with lateral connections, combining high-resolution low-level maps with low-resolution high-level maps to produce prediction-ready representations at multiple scales simultaneously.

  ## Components / Architecture

    **Spatial Dimensions (H' × W')**
    - Height and width of the output feature map, determined by input dimensions, kernel size, padding, and stride: H' = ⌊(H + 2p − k) / s⌋ + 1
    - Larger feature maps preserve more spatial detail; smaller maps capture larger [[Receptive Field]]s

    **Channel Dimension (C_out)**
    - Number of distinct feature maps in a layer, equal to the number of [[Filter Kernel]]s (e.g., 64, 128, 256, 512 channels in VGG/ResNet stages)
    - Each channel is an independent feature detector; collectively they form a rich multi-channel representation

    **Filter Kernel (W)**
    - A k×k×C_in weight tensor (commonly k=3 in modern architectures; k=1 for pointwise convolutions in MobileNet and ShuffleNet)
    - Learned parameters updated via [[Backpropagation]]; convolved with the input at every spatial position

    **Activation Function (σ)**
    - Applied element-wise to the convolution output before the result is treated as the feature map
    - [[ReLU]] (Rectified Linear Unit): σ(x) = max(0, x); most common; introduces sparsity in feature maps
    - LeakyReLU, GELU, SiLU used in modern architectures (transformers, YOLO v8+)
    - Batch Normalisation typically precedes or follows the activation to stabilise training

    **Receptive Field**
    - The region of the input image that influences a single activation in the feature map
    - Grows with depth: a 3×3 kernel stack of N layers has a receptive field of (2N+1)×(2N+1) but effective receptive field (as measured empirically) is often considerably smaller
    - Dilated convolutions expand the receptive field without increasing parameters

    **Stride and Padding**
    - Stride s > 1 downsamples the feature map spatially, reducing computation and expanding effective receptive field
    - Padding p=k/2 (same padding) preserves spatial dimensions through a convolution

    **Pooling (spatial reduction)**
    - Max-pooling and average-pooling aggregate feature map activations over spatial windows, reducing H' and W' while increasing translational invariance
    - Global average pooling collapses the entire H'×W' feature map to a single scalar per channel, commonly used before the classification head

    **Batch Normalisation**
    - Normalises feature map activations across the batch dimension; reduces internal covariate shift; enables higher learning rates and stable deep network training

  ## Use Cases / Major Families

    **Image Classification Backbones**
    Feature maps form the backbone of all major image classification architectures. VGGNet stacks multiple 3×3 convolutional layers, doubling channel count and halving spatial dimensions at each stage to produce increasingly abstract feature maps. ResNet introduces skip connections that add input feature maps directly to output feature maps (residual learning), enabling training of networks over 100 layers deep. EfficientNet scales channel depth, spatial resolution, and network depth jointly, optimising the feature map configuration for computational budget.

    **Object Detection: Feature Pyramids**
    Single-scale feature maps miss objects at scales different from the training distribution. [[Feature Pyramid Network]] (Lin et al., 2017) addresses this by constructing a multi-scale pyramid: a bottom-up pathway (standard CNN forward pass generating feature maps at decreasing resolution), a top-down pathway (upsampling semantically rich deep feature maps), and lateral connections (element-wise addition of upsampled deep maps with spatially detailed shallow maps). The output is a set of feature maps at multiple scales, each combining semantic depth and spatial resolution. FPN underpins Mask R-CNN, RetinaNet, and YOLO v7-v12 detection architectures.

    **Semantic Segmentation: Dense Prediction**
    Segmentation models require feature maps that are spatially dense (full resolution) and semantically meaningful. Fully Convolutional Networks (FCN, Long et al., 2015) replaced classification heads with transposed convolutions to upsample feature maps to the input resolution, enabling pixel-wise classification. U-Net introduces skip connections between encoder feature maps and decoder feature maps to recover fine spatial detail. DeepLab uses dilated (atrous) convolutions to expand receptive fields without reducing feature map resolution.

    **Transfer Learning**
    Pretrained feature maps encode rich visual representations transferable to new tasks. Convolutional layers trained on ImageNet produce feature maps that generalise to medical imaging, satellite imagery, and industrial inspection with minimal fine-tuning. The pretrained backbone's feature maps are frozen or fine-tuned with a small learning rate while a new task-specific head is trained on top.

    **Hybrid CNN-Transformer Architectures (2025-2026)**
    Vision Transformers (ViT) process image patches and lack explicit spatial feature maps. Hybrid architectures (EfficientViT, Next-ViT, ConvNeXt v2) combine CNN feature map stages with transformer self-attention blocks. The CNN stages produce spatially structured feature maps that provide local inductive bias; the transformer stages apply global self-attention over the flattened feature maps. YOLOv12 (2025) introduced Area Attention within the YOLO architecture, creating the first hybrid CNN-Transformer YOLO model that integrates feature maps with attention maps.

    **Visualisation and Interpretability**
    Visualising feature maps is a primary technique for understanding CNN behaviour. Zeiler and Fergus (2014) used deconvolution to project feature map activations back to pixel space. Activation maximisation finds synthetic inputs that maximally activate specific feature map channels. [[Grad-CAM]] (Selvaraju et al., 2017) weights feature map channels by the global-average-pooled gradient of the target class score, producing a coarse class-discriminative localisation map. Feature map visualisation is closely integrated with [[Feature Attribution]] and the broader [[Explainable AI]] agenda.

    **Generative Models**
    In generative adversarial networks (GANs) and variational autoencoders (VAEs), both the generator/decoder and discriminator/encoder use feature maps as intermediate representations. StyleGAN uses feature maps at multiple resolutions to generate images with spatial style control. Diffusion models use U-Net architectures with skip-connected feature maps for denoising at multiple spatial scales.

  ## Academic Context

    The concept of feature maps emerged from the early convolutional network literature. LeCun et al.'s seminal LeNet-5 (1998) introduced the term and demonstrated that convolutional feature maps enable weight-shared local feature detection for handwritten digit recognition. The field lay relatively dormant until Krizhevsky, Sutskever, and Hinton demonstrated at ILSVRC 2012 (ImageNet challenge) that deep CNN feature maps pretrained on large-scale image data dramatically outperform hand-engineered features, catalysing the deep learning revolution. Zeiler and Fergus (ECCV 2014) provided the first systematic visualisation of CNN feature maps using deconvolution, revealing the hierarchical feature composition that underpins CNN generalisation.

    Subsequent architectural work refined feature map construction: VGGNet (Simonyan and Zisserman, 2014) demonstrated that deep stacks of 3×3 kernels could achieve competitive results with simple feature map configurations. ResNet (He et al., CVPR 2016) introduced residual connections that add input feature maps to output feature maps, solving the vanishing gradient problem in very deep networks and becoming the dominant backbone for a decade. Szegedy et al.'s Inception architectures used multi-scale parallel convolutions producing concatenated feature maps at multiple receptive field sizes simultaneously.

    The [[Feature Pyramid Network]] (Lin, Dollar, Girshick, He, Hariharan, Belongie, CVPR 2017) addressed the scale-variance problem by constructing pyramids of feature maps from a single CNN backbone, enabling simultaneous multi-scale detection. This architecture is now a standard component in virtually all production object detection systems. Attention mechanisms that operate on feature maps — spatial attention (CBAM, Woo et al., 2018) and channel attention (SE-Net, Hu et al., 2018) — adaptively reweight feature map channels and spatial positions, integrating global context into locally computed feature maps.

    The relationship between CNN feature maps and the [[Attention Mechanism]] of transformers has been an active research question since ViT (Dosovitskiy et al., 2020). Recent hybrid architectures demonstrate that CNN feature maps and transformer attention maps are complementary rather than competing representations, with feature maps encoding local pattern responses and attention maps encoding long-range relational context.

  ## Current Landscape (2026)

    As of mid-2026, feature maps remain the core intermediate representation in virtually all production computer vision systems, though the architectural context has evolved considerably:

    - **Hybrid CNN-Transformer dominance**: Pure ViT architectures have ceded ground to hybrid CNN-Transformer models in most practical applications. Architectures such as Next-ViT, EfficientViT, and YOLOv12 combine CNN feature map stages (for local inductive bias and computational efficiency) with transformer attention stages (for global context modelling). The 2026 ScienceDirect survey of hybrid CNN-Transformer models for industrial defect detection confirms this as the dominant industrial deployment pattern.
    - **Multi-scale feature maps standard**: [[Feature Pyramid Network]]-style multi-scale feature map hierarchies are now universally adopted in detection and segmentation systems. MambaFPN (2025) proposes replacing FPN's CNN stages with State Space Models for improved global context in feature pyramid construction.
    - **Feature map compression and efficiency**: Efficient architectures such as MobileNetV3 and EfficientNet-Lite use depthwise separable convolutions and channel reduction to produce compact feature maps with minimal parameter count, enabling deployment on edge devices. Neural architecture search (NAS) systematically optimises feature map dimensions, channel counts, and spatial resolutions for target hardware budgets.
    - **Feature maps in scientific domains**: CNN feature maps pretrained on ImageNet are widely reused in medical imaging (NHS AI Lab), satellite analysis (UK Centre for Earth Observation), and materials science. The agricultural domain uses feature map backbones from ResNet and EfficientNet for crop pest classification (ongoing work, 2025 arXiv survey).
    - **Visualisation and XAI integration**: Grad-CAM and its variants (Grad-CAM++, Score-CAM, LayerCAM) are the standard tools for explaining CNN decisions via feature map analysis. Integration with [[Feature Attribution]] toolkits (Captum, SHAP image explainers) provides unified pipelines for feature-map-based explanations in production systems.
    - **Foundation models and feature maps**: Large vision foundation models (DINO, SAM, DINOv2, Meta's Segment Anything Model 2) use Vision Transformer patch tokens rather than traditional CNN feature maps; however, their representations can be probed and interpreted using feature-map-analogous techniques. The co-existence of CNN feature map architectures and transformer patch token architectures defines the current research frontier.

  ## UK Context

    CNN feature map research and applications have a substantial UK presence across academia and industry:

    - **Oxford Visual Geometry Group (VGG)**: Simonyan and Zisserman's VGGNet (2014) defined the systematic use of deep 3×3 convolutional feature map stacks and remains among the most-cited computer vision papers. The Oxford VGG continues to produce influential work on CNN representations and feature map analysis.
    - **Cambridge Machine Learning Group**: Contributions to Bayesian deep learning and uncertainty quantification in CNN feature maps, including work on Monte Carlo Dropout applied to feature map activations for uncertainty estimation (Gal and Ghahramani, 2016).
    - **Edinburgh University**: The School of Informatics has active research on feature map interpretability and efficient CNN architectures; connections to the Alan Turing Institute's interpretability initiative.
    - **Imperial College London**: The Visual Information Processing group has contributed to feature pyramid research and semantic segmentation using dense feature maps. The Data Science Institute works on applying CNN feature maps to industrial and scientific domains.
    - **Alan Turing Institute**: Cross-institution data-science research on CNN feature map applications in healthcare, climate science, and cultural heritage imaging.
    - **NHS AI Lab**: Evaluation of diagnostic AI systems using CNN feature maps for radiology (chest X-ray, CT, MRI). The AI in Health and Care programme requires Grad-CAM feature-map-based explanations for clinical AI regulatory submission.
    - **Northern England industrial deployment**: The Advanced Manufacturing Research Centre (AMRC, Sheffield) uses CNN feature maps for quality-control visual inspection in aerospace manufacturing. The Newcastle-based Centre for Mobility and Transport applies feature map detection pipelines for road safety analysis and autonomous vehicle perception.
    - **ARM Holdings (Cambridge)**: ARM's neural processing unit IP targets efficient CNN feature map computation at the edge; ARM's hardware-aware neural architecture search tools optimise feature map dimensions for on-device inference, a key enabling technology for UK IoT and automotive AI markets.

  ## Future Directions (2026-2030)

    - **Unified CNN-Transformer representations**: Convergence of CNN feature maps and transformer attention maps into shared representational formalisms, enabling models that fluidly transition between local feature map processing and global attention without explicit architectural boundaries.
    - **Neuromorphic feature maps**: Spike-timing-based computation in neuromorphic hardware (Intel Loihi 3, BrainChip Akida) produces event-driven analogues of feature maps that are sparse, asynchronous, and extremely energy-efficient; relevant for edge AI applications in robotics and environmental sensing.
    - **4D and temporal feature maps**: Extension of 2D spatial feature maps to 3D volumetric (medical imaging, robotics) and 4D spatiotemporal (video understanding, autonomous driving) tensors, with efficient computation strategies including 3D separable convolutions and spatial-temporal attention.
    - **Continuous feature maps**: Implicit neural representations (INRs) parametrise feature maps as continuous functions of spatial coordinates rather than discrete grids, enabling resolution-independent reconstruction and processing; relevant for super-resolution, novel view synthesis, and scientific simulation.
    - **Feature map standardisation for XAI**: Standardised protocols for feature map visualisation and attribution-quality evaluation, enabling consistent benchmarking of CNN interpretability across architectures and domains; likely to be addressed in ISO/IEC JTC 1/SC 42 AI standards updates.
    - **Biological correspondence**: Computational neuroscience work comparing CNN feature maps with neural representations measured by fMRI and electrophysiology continues to refine understanding of biological plausibility, with potential implications for designing more sample-efficient architectures that better match the brain's hierarchical visual processing.

  ## Benchmarks and Evaluation

    Feature map quality is evaluated indirectly through the performance of downstream tasks that depend on the feature representations, and directly through visualisation and attribution tools.

    **Downstream task benchmarks**
    - *ImageNet ILSVRC*: Top-1 and Top-5 accuracy on 1,000-class classification; the dominant benchmark for evaluating backbone feature map quality. Key milestones: AlexNet (2012) 57.1% Top-1 → VGG-16 74.4% → ResNet-50 76.0% → EfficientNet-B7 84.4% → ConvNeXt-XL 87.8% → current ViT/hybrid models ~90%.
    - *COCO object detection (mAP)*: Mean average precision across object categories and IoU thresholds; FPN-based detectors with ResNet/EfficientNet feature map backbones dominate. Mask R-CNN (FPN + ResNet-101) achieves 38.2 AP box / 34.7 AP mask on COCO val2017.
    - *ADE20K semantic segmentation (mIoU)*: SegFormer and UperNet with CNN feature map backbones achieve ~55 mIoU; hybrid CNN-Transformer models reach ~58 mIoU.
    - *Transfer learning benchmark (VTAB)*: Evaluates the generality of pretrained feature maps across 19 classification tasks in three domains (natural, specialised, structured); measures how well feature maps transfer without task-specific pretraining.

    **Feature map intrinsic quality metrics**
    - *Centered Kernel Alignment (CKA)*: Measures representational similarity between feature maps of different models or layers; used to compare how similar two networks' feature maps are at corresponding depths.
    - *Feature map sparsity*: The fraction of feature map activations that are zero after ReLU; higher sparsity correlates with more selectivity (each feature map responds to fewer stimuli) and is associated with better generalisation in classification tasks.
    - *Activation maximisation diversity*: The degree to which different channels within a convolutional layer respond to distinct patterns; measured by pairwise cosine dissimilarity of maximally activating inputs.

    **Visualisation quality**
    - *Zeiler & Fergus deconvolution reconstruction quality*: Assesses whether feature map visualisations correspond to recognisable, spatially coherent patterns (subjective human evaluation).
    - *Grad-CAM pointing game accuracy*: Whether the class-discriminative heatmap derived from the penultimate convolutional layer's feature map correctly localises the discriminative object region within COCO bounding box annotations.

  ## Formal Detail

    **Convolution operation**: Given input feature map X ∈ ℝ^{H×W×Cᵢₙ} and filter W ∈ ℝ^{k×k×Cᵢₙ×Cₒᵤₜ}, output feature map Y ∈ ℝ^{H'×W'×Cₒᵤₜ} is:
      Y[h,w,c] = σ( Σᵢ₌₀^{k-1} Σⱼ₌₀^{k-1} Σₛ₌₀^{Cᵢₙ-1} X[hs+i, ws+j, s] · W[i,j,s,c] + b[c] )
    where σ is a non-linear activation function (e.g., ReLU), h,w index spatial positions, c indexes output channels, s is stride.

    **Output spatial dimensions**: H' = ⌊(H + 2p − k)/s⌋ + 1; W' = ⌊(W + 2p − k)/s⌋ + 1, where p is padding.

    **Parameter count per convolutional layer**: k × k × Cᵢₙ × Cₒᵤₜ + Cₒᵤₜ (weights + biases). For k=3, Cᵢₙ=256, Cₒᵤₜ=512: 3×3×256×512 + 512 = 1,179,136 parameters. The same layer as a fully connected layer (H'×W'×Cₒᵤₜ neurons each connected to H×W×Cᵢₙ inputs) would require H'×W'×Cₒᵤₜ × H×W×Cᵢₙ parameters — weight sharing reduces parameters by a factor of H×W.

    **Receptive field growth**: After N layers of 3×3 convolutions with stride 1, the theoretical receptive field is (2N+1)×(2N+1). With stride 2 downsampling every D layers, the receptive field at depth N is approximately 2^⌊N/D⌋ × (2(N mod D)+1).

  ## Research & Literature

    1. LeCun, Y., Bottou, L., Bengio, Y., & Haffner, P. (1998). Gradient-based learning applied to document recognition. *Proceedings of the IEEE*, 86(11), 2278–2324.
    2. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks. *NeurIPS 2012*, pp. 1097–1105.
    3. Zeiler, M. D., & Fergus, R. (2014). Visualizing and understanding convolutional networks. *ECCV 2014*, LNCS 8689, pp. 818–833.
    4. Simonyan, K., & Zisserman, A. (2014). Very deep convolutional networks for large-scale image recognition (VGGNet). *arXiv:1409.1556*; ICLR 2015.
    5. He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. *CVPR 2016*, pp. 770–778.
    6. Lin, T.-Y., Dollar, P., Girshick, R., He, K., Hariharan, B., & Belongie, S. (2017). Feature pyramid networks for object detection. *CVPR 2017*, pp. 2117–2125.
    7. Szegedy, C., Liu, W., Jia, Y., et al. (2015). Going deeper with convolutions (Inception/GoogLeNet). *CVPR 2015*, pp. 1–9.
    8. Long, J., Shelhamer, E., & Darrell, T. (2015). Fully convolutional networks for semantic segmentation. *CVPR 2015*, pp. 3431–3440.
    9. Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional networks for biomedical image segmentation. *MICCAI 2015*, pp. 234–241.
    10. Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., & Batra, D. (2017). Grad-CAM: Visual explanations from deep networks via gradient-based localisation. *ICCV 2017*, pp. 618–626.
    11. Hu, J., Shen, L., & Sun, G. (2018). Squeeze-and-excitation networks. *CVPR 2018*, pp. 7132–7141. (channel attention over feature maps)
    12. Woo, S., Park, J., Lee, J.-Y., & Kweon, I. S. (2018). CBAM: Convolutional block attention module. *ECCV 2018*, pp. 3–19. (spatial + channel attention on feature maps)
    13. Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al. (2020). An image is worth 16×16 words: Transformers for image recognition at scale (ViT). *ICLR 2021*.
    14. Gal, Y., & Ghahramani, Z. (2016). Dropout as a Bayesian approximation: Representing model uncertainty in deep learning. *ICML 2016*, PMLR 48:1050–1059.
    15. Howard, A. G., et al. (2017). MobileNets: Efficient convolutional neural networks for mobile vision applications. *arXiv:1704.04861*.
    16. Tan, M., & Le, Q. (2019). EfficientNet: Rethinking model scaling for convolutional neural networks. *ICML 2019*, PMLR 97:6105–6114.
    17. Chen, L.-C., Papandreou, G., Kokkinos, I., Murphy, K., & Yuille, A. L. (2017). DeepLab: Semantic image segmentation with deep convolutional nets, atrous convolution, and fully connected CRFs. *IEEE TPAMI*, 40(4), 834–848.
    18. Liu, Z., Mao, H., Wu, C.-Y., Feichtenhofer, C., Darrell, T., & Xie, S. (2022). A ConvNet for the 2020s (ConvNeXt). *CVPR 2022*, pp. 11976–11986.
    19. Li, Y., et al. (2022). Next-ViT: Next generation vision transformer for efficient deployment in realistic industrial scenarios. *arXiv:2207.05501*.
    20. Li, Z., et al. (2025). YOLOv12: Attention-centric real-time object detectors. *arXiv preprint* (hybrid CNN-Transformer YOLO with Area Attention).
    21. MambaFPN: A SSM-based feature pyramid network for object detection. (2025). *ScienceDirect*, Neural Networks, Elsevier.
    22. Hybrid CNN-Transformer models for industrial defect detection: A systematic review. (2026). *ScienceDirect*, Engineering Applications of Artificial Intelligence 2590-1230.
    23. Crop pest classification using deep learning techniques: A review. (2025). *arXiv:2507.01494*. (feature map backbone survey)
    24. Srinivas, A., Lin, T.-Y., Parmar, N., Shlens, J., Abbeel, P., & Vaswani, A. (2021). Bottleneck transformers for visual recognition. *CVPR 2021*. (hybrid CNN feature maps + attention)
    25. Touvron, H., Cord, M., Douze, M., Massa, F., Sablayrolles, A., & Jégou, H. (2021). Training data-efficient image transformers & distillation through attention. *ICML 2021*, PMLR 139:10347–10357.
    26. Chatfield, K., Simonyan, K., Vedaldi, A., & Zisserman, A. (2014). Return of the devil in the details: Delving deep into convolutional nets. *BMVC 2014*. (Oxford VGG; feature map depth analysis)
    27. Zhou, B., Khosla, A., Lapedriza, A., Oliva, A., & Torralba, A. (2016). Learning deep features for discriminative localisation. *CVPR 2016*, pp. 2921–2929. (CAM; forerunner to Grad-CAM on feature maps)
    28. Gu, A., Goel, K., & Ré, C. (2022). Efficiently modelling long sequences with structured state spaces (S4). *ICLR 2022*. (foundation for MambaFPN; state-space alternative to CNN feature maps for long-range dependencies)

  ## Key Terminology

    - **Feature map**: The 3D tensor (H'×W'×C_out) output of a convolutional layer; one 2D slice per filter channel constitutes a single feature map.
    - **Activation map**: Synonym for feature map; emphasises that the values represent post-activation (e.g., post-ReLU) magnitudes.
    - **Channel**: The third (depth) dimension of a feature map tensor; one channel per convolutional filter; each channel encodes a distinct feature detector.
    - **Filter kernel**: A learnable k×k×C_in weight tensor convolved spatially across the input to produce one channel of the output feature map.
    - **Receptive field**: The region of the input image that influences a single cell in a feature map; grows with network depth; critical for capturing context at the right scale.
    - **Stride**: The step size at which the filter moves across the input; stride > 1 downsamples the feature map spatially.
    - **Padding**: Zeros (or reflections) added around input borders to control output feature map size; same padding preserves spatial dimensions.
    - **Spatial hierarchy**: The progressive compositional structure in which low-level feature maps (edges, textures) are composed into high-level feature maps (objects, scenes) across convolutional depth.
    - **Feature pyramid**: A multi-scale stack of feature maps at different spatial resolutions, constructed by FPN to enable scale-invariant detection and segmentation.
    - **Weight sharing**: The convolutional property that the same filter kernel is applied at every spatial position, dramatically reducing the parameter count relative to a fully connected layer.
    - **Dilated (atrous) convolution**: A convolution with gaps (holes) in the filter, expanding the receptive field without reducing feature map resolution or increasing parameter count.
    - **Depthwise separable convolution**: Factorisation of a standard convolution into a depthwise convolution (one filter per input channel) and a pointwise 1×1 convolution, used in MobileNet to produce efficient feature maps.
    - **Skip connection**: An additive bypass that adds a feature map from an earlier layer to one from a later layer (ResNet residual connection; U-Net encoder-decoder skip), enabling gradient flow and feature reuse.

- ### Provenance
  - sources:: https://arxiv.org/abs/1612.03144, https://arxiv.org/abs/1409.1556, https://arxiv.org/abs/1512.03385, https://ieeexplore.ieee.org/document/726791, https://www.sciencedirect.com/science/article/pii/S2590123026004974, https://www.sciencedirect.com/science/article/abs/pii/S0893608026000079, https://arxiv.org/pdf/2507.01494, https://www.ultralytics.com/glossary/feature-maps, https://apxml.com/courses/deep-learning-fundamentals-keras/chapter-4-convolutional-neural-networks-cnns/understanding-feature-maps
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

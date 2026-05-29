public:: true

# Convolution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:convolution",
  "@type": "Page",
  "vc:slug": "convolution",
  "title": "Convolution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:convolution",
  "@type": "Class",
  "label": "Convolution",
  "definition": "Convolution is a mathematical operation that combines two functions by sliding one (the kernel or filter) over another (the input signal or image) and computing a weighted sum of overlapping values at each position, producing a third function that expresses how the shape of one modifies the other. In deep learning and signal processing it provides a translation-equivariant mechanism for local feature extraction with shared parameter weights.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"}],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"}],
    "uses": [{"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}],
    "relatedTo": [{"@id": "urn:ngm:class:image-processing", "label": "Image Processing"}],
    "supports": [{"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Convolution]] is a fundamental mathematical operation in [[Signal Processing]] and [[Image Processing]] defined as (f * g)(t) = ∫ f(τ)g(t − τ)dτ in continuous form, or the discrete summation equivalent. Applied with a learnable kernel, it provides translation-equivariant [[Feature Extraction]] from local neighbourhoods, making it the core primitive of the [[Convolutional Neural Network]] (CNN) architecture. Its use of shared kernel weights across spatial positions gives CNNs parameter efficiency and underpins the scalability of modern [[Deep Learning]] systems for vision, audio, and genomics tasks.

- ### Relationships
  - Convolution is a core operation within [[Signal Processing]] and is foundational to [[Image Processing]] tasks such as blurring, edge detection, and frequency filtering. It directly enables [[Convolutional Neural Network]] architectures by serving as their primary feature-extraction primitive, and supports the broader [[Deep Learning]] ecosystem wherever local structure and translation equivariance are desirable inductive biases. [[Feature Extraction]] using learned convolutional kernels is the mechanism through which hierarchical representations of inputs are constructed.

- ### Content
  - Convolution as a mathematical concept was formalised in the 18th and 19th centuries through the work of d'Alembert and Fourier; the Convolution Theorem—relating convolution in the time/spatial domain to pointwise multiplication in the frequency domain—was established by the mid-19th century. In signal processing engineering, convolutional filters were implemented in analogue circuits long before digital computing; digital finite impulse response (FIR) and infinite impulse response (IIR) filters are direct discrete implementations of the convolution operation, central to audio processing, radar, and communications systems since the 1950s.

  - In a two-dimensional discrete convolution applied to an image I with kernel K, the output feature map is computed as (I * K)[i, j] = Σ_m Σ_n I[i+m, j+n] · K[m, n]. Modern deep learning frameworks compute this using im2col transformations that express convolution as matrix multiplication, enabling GPU acceleration via cuBLAS or CUTLASS. Depthwise separable convolutions (used in MobileNet) factorise standard convolutions into a depthwise spatial filter and a pointwise 1×1 projection, reducing computation by a factor proportional to the kernel size. Dilated (atrous) convolutions expand receptive fields without increasing parameter count by inserting zeros between kernel elements.

  - The computational infrastructure for convolution spans cuDNN (NVIDIA's hand-tuned GPU convolution kernels), NNPACK (ARM's NEON-optimised mobile convolution library), and MLIR-based compiler backends (TVM, XLA) that auto-tune convolution algorithms for specific hardware. The Winograd minimal filtering algorithm reduces the arithmetic complexity of small convolutions by roughly 2.25× compared to direct computation, and is used by cuDNN for 3×3 kernels. The Cooley–Tukey FFT enables O(n log n) convolution via the Convolution Theorem and is preferred for large kernels.

  - In 2024–2025, the dominant position of convolution in vision architectures is being challenged but not displaced by attention mechanisms: Vision Transformers (ViTs) process image patches through self-attention rather than convolution, yet hybrid ConvNeXt and CaFormer architectures demonstrate that convolutional inductive biases remain highly competitive in terms of accuracy-per-FLOP. On edge devices, structured pruning of convolutional kernels and INT8/INT4 quantisation of kernel weights are enabling real-time inference on microcontrollers, and graph neural network convolutions are extending the paradigm from grid-structured data to arbitrary graph topologies.
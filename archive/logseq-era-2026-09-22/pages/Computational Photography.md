public:: true

# Computational Photography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28b1c598ddabee92696abc238f4a386a13fb9bbc463c4ce452c248c4b045fed7",
  "@type": "Page",
  "vc:slug": "computational-photography",
  "title": "Computational Photography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:camera", "vc:label": "Camera"},
    {"@id": "urn:visionflow:linked:computer-vision", "vc:label": "Computer Vision"},
    {"@id": "urn:visionflow:linked:image-processing", "vc:label": "Image Processing"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:signal-processing", "vc:label": "Signal Processing"},
    {"@id": "urn:visionflow:linked:hdr-imaging", "vc:label": "HDR Imaging"},
    {"@id": "urn:visionflow:linked:semantic-segmentation", "vc:label": "Semantic Segmentation"},
    {"@id": "urn:visionflow:linked:depth-estimation", "vc:label": "Depth Estimation"},
    {"@id": "urn:visionflow:linked:multi-frame-fusion", "vc:label": "Multi-Frame Fusion"},
    {"@id": "urn:visionflow:linked:image-noise-reduction", "vc:label": "Image Noise Reduction"},
    {"@id": "urn:visionflow:linked:optical-flow", "vc:label": "Optical Flow"},
    {"@id": "urn:visionflow:linked:light-field-camera", "vc:label": "Light Field Camera"},
    {"@id": "urn:visionflow:linked:image-sensor", "vc:label": "Image Sensor"},
    {"@id": "urn:visionflow:linked:neural-image-signal-processor", "vc:label": "Neural Image Signal Processor"},
    {"@id": "urn:visionflow:linked:generative-adversarial-network", "vc:label": "Generative Adversarial Network"},
    {"@id": "urn:visionflow:linked:super-resolution", "vc:label": "Super Resolution"},
    {"@id": "urn:visionflow:linked:panorama-stitching", "vc:label": "Panorama Stitching"},
    {"@id": "urn:visionflow:linked:bokeh-simulation", "vc:label": "Bokeh Simulation"},
    {"@id": "urn:visionflow:linked:night-mode-photography", "vc:label": "Night Mode Photography"},
    {"@id": "urn:visionflow:linked:smartphone", "vc:label": "Smartphone"},
    {"@id": "urn:visionflow:linked:gpu-compute", "vc:label": "GPU Compute"},
    {"@id": "urn:visionflow:linked:real-time-rendering", "vc:label": "Real-Time Rendering"},
    {"@id": "urn:visionflow:linked:image-segmentation", "vc:label": "Image Segmentation"},
    {"@id": "urn:visionflow:linked:3d-reconstruction", "vc:label": "3D Reconstruction"},
    {"@id": "urn:visionflow:linked:nerf", "vc:label": "NeRF"},
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:colour-science", "vc:label": "Colour Science"},
    {"@id": "urn:visionflow:linked:optics", "vc:label": "Optics"},
    {"@id": "urn:visionflow:linked:image-formation-model", "vc:label": "Image Formation Model"},
    {"@id": "urn:visionflow:linked:exposure-fusion", "vc:label": "Exposure Fusion"},
    {"@id": "urn:visionflow:linked:tone-mapping", "vc:label": "Tone Mapping"},
    {"@id": "urn:visionflow:linked:augmented-reality", "vc:label": "Augmented Reality"},
    {"@id": "urn:visionflow:linked:medical-imaging", "vc:label": "Medical Imaging"},
    {"@id": "urn:visionflow:linked:satellite-imagery", "vc:label": "Satellite Imagery"},
    {"@id": "urn:visionflow:linked:video-stabilisation", "vc:label": "Video Stabilisation"},
    {"@id": "urn:visionflow:linked:face-detection", "vc:label": "Face Detection"},
    {"@id": "urn:visionflow:linked:scene-understanding", "vc:label": "Scene Understanding"},
    {"@id": "urn:visionflow:linked:computational-imaging", "vc:label": "Computational Imaging"},
    {"@id": "urn:visionflow:linked:plenoptic-camera", "vc:label": "Plenoptic Camera"},
    {"@id": "urn:visionflow:linked:demosaicing", "vc:label": "Demosaicing"},
    {"@id": "urn:visionflow:linked:raw-image-pipeline", "vc:label": "Raw Image Pipeline"}
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Computational Photography"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computational-photography",
  "@type": "Class",
  "label": "Computational Photography",
  "definition": "A discipline that extends or supplants the optical and electromechanical capabilities of a camera system through digital computation, combining multiple sensor readings, learned priors, and algorithmic inference to produce images that no single physical exposure could yield. The field integrates optics, signal processing, machine learning, and human visual perception to reconstruct scene radiance, estimate scene geometry, and synthesise perceptually superior final images.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.90,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:image-processing",
      "label": "Image Processing"
    },
    {
      "@id": "urn:ngm:class:computational-imaging",
      "label": "Computational Imaging"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:multi-frame-fusion", "label": "Multi-Frame Fusion"},
      {"@id": "urn:ngm:class:hdr-imaging", "label": "HDR Imaging"},
      {"@id": "urn:ngm:class:neural-image-signal-processor", "label": "Neural Image Signal Processor"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:semantic-segmentation", "label": "Semantic Segmentation"},
      {"@id": "urn:ngm:class:super-resolution", "label": "Super Resolution"},
      {"@id": "urn:ngm:class:panorama-stitching", "label": "Panorama Stitching"},
      {"@id": "urn:ngm:class:bokeh-simulation", "label": "Bokeh Simulation"},
      {"@id": "urn:ngm:class:night-mode-photography", "label": "Night Mode Photography"},
      {"@id": "urn:ngm:class:exposure-fusion", "label": "Exposure Fusion"},
      {"@id": "urn:ngm:class:tone-mapping", "label": "Tone Mapping"},
      {"@id": "urn:ngm:class:demosaicing", "label": "Demosaicing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"},
      {"@id": "urn:ngm:class:image-sensor", "label": "Image Sensor"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:image-formation-model", "label": "Image Formation Model"},
      {"@id": "urn:ngm:class:raw-image-pipeline", "label": "Raw Image Pipeline"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:medical-imaging", "label": "Medical Imaging"},
      {"@id": "urn:ngm:class:satellite-imagery", "label": "Satellite Imagery"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"},
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"},
      {"@id": "urn:ngm:class:optical-flow", "label": "Optical Flow"},
      {"@id": "urn:ngm:class:colour-science", "label": "Colour Science"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:optics", "label": "Optics"},
      {"@id": "urn:ngm:class:traditional-film-photography", "label": "Traditional Film Photography"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:light-field-camera", "label": "Light Field Camera"},
      {"@id": "urn:ngm:class:plenoptic-camera", "label": "Plenoptic Camera"},
      {"@id": "urn:ngm:class:ne-rf", "label": "NeRF"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:scene-understanding", "label": "Scene Understanding"},
      {"@id": "urn:ngm:class:video-stabilisation", "label": "Video Stabilisation"},
      {"@id": "urn:ngm:class:face-detection", "label": "Face Detection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:smartphone", "label": "Smartphone"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:computational-photography:08154070a170",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:28b1c598ddabee92696abc238f4a386a13fb9bbc463c4ce452c248c4b045fed7"
  },
  "vc:resolutions": [
    {"raw": "[[Camera]]", "resolved": "urn:visionflow:linked:camera", "kind": "ResolvedLink"},
    {"raw": "[[Computer Vision]]", "resolved": "urn:visionflow:linked:computer-vision", "kind": "ResolvedLink"},
    {"raw": "[[Image Processing]]", "resolved": "urn:visionflow:linked:image-processing", "kind": "ResolvedLink"},
    {"raw": "[[Deep Learning]]", "resolved": "urn:visionflow:linked:deep-learning", "kind": "ResolvedLink"},
    {"raw": "[[Convolutional Neural Network]]", "resolved": "urn:visionflow:linked:convolutional-neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Signal Processing]]", "resolved": "urn:visionflow:linked:signal-processing", "kind": "ResolvedLink"},
    {"raw": "[[HDR Imaging]]", "resolved": "urn:visionflow:linked:hdr-imaging", "kind": "ResolvedLink"},
    {"raw": "[[Semantic Segmentation]]", "resolved": "urn:visionflow:linked:semantic-segmentation", "kind": "ResolvedLink"},
    {"raw": "[[Depth Estimation]]", "resolved": "urn:visionflow:linked:depth-estimation", "kind": "ResolvedLink"},
    {"raw": "[[Multi-Frame Fusion]]", "resolved": "urn:visionflow:linked:multi-frame-fusion", "kind": "ResolvedLink"},
    {"raw": "[[Image Noise Reduction]]", "resolved": "urn:visionflow:linked:image-noise-reduction", "kind": "ResolvedLink"},
    {"raw": "[[Optical Flow]]", "resolved": "urn:visionflow:linked:optical-flow", "kind": "ResolvedLink"},
    {"raw": "[[Light Field Camera]]", "resolved": "urn:visionflow:linked:light-field-camera", "kind": "ResolvedLink"},
    {"raw": "[[Image Sensor]]", "resolved": "urn:visionflow:linked:image-sensor", "kind": "ResolvedLink"},
    {"raw": "[[Neural Image Signal Processor]]", "resolved": "urn:visionflow:linked:neural-image-signal-processor", "kind": "ResolvedLink"},
    {"raw": "[[Generative Adversarial Network]]", "resolved": "urn:visionflow:linked:generative-adversarial-network", "kind": "ResolvedLink"},
    {"raw": "[[Super Resolution]]", "resolved": "urn:visionflow:linked:super-resolution", "kind": "ResolvedLink"},
    {"raw": "[[Panorama Stitching]]", "resolved": "urn:visionflow:linked:panorama-stitching", "kind": "ResolvedLink"},
    {"raw": "[[Bokeh Simulation]]", "resolved": "urn:visionflow:linked:bokeh-simulation", "kind": "ResolvedLink"},
    {"raw": "[[Night Mode Photography]]", "resolved": "urn:visionflow:linked:night-mode-photography", "kind": "ResolvedLink"},
    {"raw": "[[Smartphone]]", "resolved": "urn:visionflow:linked:smartphone", "kind": "ResolvedLink"},
    {"raw": "[[GPU Compute]]", "resolved": "urn:visionflow:linked:gpu-compute", "kind": "ResolvedLink"},
    {"raw": "[[Real-Time Rendering]]", "resolved": "urn:visionflow:linked:real-time-rendering", "kind": "ResolvedLink"},
    {"raw": "[[3D Reconstruction]]", "resolved": "urn:visionflow:linked:3d-reconstruction", "kind": "ResolvedLink"},
    {"raw": "[[NeRF]]", "resolved": "urn:visionflow:linked:nerf", "kind": "ResolvedLink"},
    {"raw": "[[Diffusion Model]]", "resolved": "urn:visionflow:linked:diffusion-model", "kind": "ResolvedLink"},
    {"raw": "[[Transformer Architecture]]", "resolved": "urn:visionflow:linked:transformer-architecture", "kind": "ResolvedLink"},
    {"raw": "[[Colour Science]]", "resolved": "urn:visionflow:linked:colour-science", "kind": "ResolvedLink"},
    {"raw": "[[Optics]]", "resolved": "urn:visionflow:linked:optics", "kind": "ResolvedLink"},
    {"raw": "[[Image Formation Model]]", "resolved": "urn:visionflow:linked:image-formation-model", "kind": "ResolvedLink"},
    {"raw": "[[Exposure Fusion]]", "resolved": "urn:visionflow:linked:exposure-fusion", "kind": "ResolvedLink"},
    {"raw": "[[Tone Mapping]]", "resolved": "urn:visionflow:linked:tone-mapping", "kind": "ResolvedLink"},
    {"raw": "[[Augmented Reality]]", "resolved": "urn:visionflow:linked:augmented-reality", "kind": "ResolvedLink"},
    {"raw": "[[Medical Imaging]]", "resolved": "urn:visionflow:linked:medical-imaging", "kind": "ResolvedLink"},
    {"raw": "[[Satellite Imagery]]", "resolved": "urn:visionflow:linked:satellite-imagery", "kind": "ResolvedLink"},
    {"raw": "[[Video Stabilisation]]", "resolved": "urn:visionflow:linked:video-stabilisation", "kind": "ResolvedLink"},
    {"raw": "[[Face Detection]]", "resolved": "urn:visionflow:linked:face-detection", "kind": "ResolvedLink"},
    {"raw": "[[Scene Understanding]]", "resolved": "urn:visionflow:linked:scene-understanding", "kind": "ResolvedLink"},
    {"raw": "[[Computational Imaging]]", "resolved": "urn:visionflow:linked:computational-imaging", "kind": "ResolvedLink"},
    {"raw": "[[Plenoptic Camera]]", "resolved": "urn:visionflow:linked:plenoptic-camera", "kind": "ResolvedLink"},
    {"raw": "[[Demosaicing]]", "resolved": "urn:visionflow:linked:demosaicing", "kind": "ResolvedLink"},
    {"raw": "[[Raw Image Pipeline]]", "resolved": "urn:visionflow:linked:raw-image-pipeline", "kind": "ResolvedLink"},
    {"raw": "[[Image Segmentation]]", "resolved": "urn:visionflow:linked:image-segmentation", "kind": "ResolvedLink"}
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:enrichment-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-06-21T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Computational photography is the discipline that extends or supplants the optical and electromechanical capabilities of a [[Camera]] system through digital computation, combining multiple [[Image Sensor]] readings, learned priors, and algorithmic inference to produce images that no single physical exposure could yield — deployed at scale in hundreds of millions of [[Smartphone]] devices (Apple iPhone, Google Pixel, Samsung Galaxy, Xiaomi, Huawei) where software sophistication compensates for the physical constraints of small-aperture miniaturised optics, and extending into automotive ADAS cameras, [[Medical Imaging]] systems, [[Satellite Imagery]] platforms, and industrial machine vision. Rooted in the convergence of [[Optics]], [[Signal Processing]], and [[Deep Learning]], the field replaces or augments each stage of the classical [[Raw Image Pipeline]] — from [[Demosaicing]] of the Bayer colour filter array through white balance, tone reproduction, noise suppression, and sharpening — with learned transformations implemented by [[Convolutional Neural Network]]s processing batches of raw sensor data at 30–120 frames per second on dedicated [[GPU Compute]] and neural processing unit (NPU) silicon, and, increasingly, [[Transformer Architecture]]-based [[Neural Network]]s that attend across spatial, temporal, and spectral dimensions simultaneously. Core techniques include [[Multi-Frame Fusion]] (HDR+, Night Sight, Burst HDR), in which 4–64 short exposures captured in 20–500 ms are aligned via [[Optical Flow]] dense motion estimation or feature-point homography and merged using Wiener filtering, learned fusion networks, or weighted Gaussian averaging to suppress photon shot noise by sqrt(N) and recover spatial detail from temporal dithering; [[HDR Imaging]] through [[Exposure Fusion]] and [[Tone Mapping]] operators (Mantiuk, Reinhard, or learned tone curves) that bring high dynamic range scene radiance spanning 12–20 stops of exposure into display-compatible SDR or HDR10/Dolby Vision gamuts; [[Bokeh Simulation]] that mimics large-aperture shallow depth-of-field effects using [[Depth Estimation]] maps from dual-pixel PDAF sensors, binocular stereo pair cameras, time-of-flight sensors, or monocular neural networks to perform learned foreground/background alpha matting and defocus disc convolution rendering; and [[Night Mode Photography]] that recovers colour and spatial detail from severely photon-starved captures at sub-lux illuminance levels through adaptive exposure bracketing (1/30s–2s), motion-tolerant alignment, and per-pixel learned denoising, achieving usable images in ambient illuminances below 0.1 lux that conventional single-exposure photography cannot render. [[Semantic Segmentation]] networks operating in the camera ISP enable spatially adaptive enhancement — brightening detected faces while separately boosting sky saturation and sharpening foliage texture — and [[Super Resolution]] networks synthesise fine spatial detail beyond the physical Nyquist limit of the [[Image Sensor]] pixel pitch by learning the prior distribution of natural image textures. The modern [[Neural Image Signal Processor]] (Neural ISP) replaces entirely the classical hand-crafted ISP chain with end-to-end learned pipelines trained on tens of millions of paired RAW/ground-truth frames, achieving state-of-the-art quality scores on standard benchmarks (PSNR, SSIM, LPIPS) across all lighting and scene conditions. At the frontier, [[NeRF]] and [[Diffusion Model]]-based methods push computational photography into fully synthesised novel-view imagery where the boundary between captured and generated content approaches invisibility — raising fundamental questions about photographic authenticity that regulators, journalism ethics bodies, and forensic scientists are actively addressing. [[Light Field Camera]] and [[Plenoptic Camera]] architectures sample the four-dimensional light field for post-capture refocus, synthetic aperture control, and dense [[Depth Estimation]] without active illumination. The field directly enables [[Computer Vision]], [[Augmented Reality]], [[Medical Imaging]], [[Satellite Imagery]], and [[3D Reconstruction]] by delivering higher-quality, geometry-aware scene representations from consumer-grade optics that would otherwise be inadequate for these demanding downstream tasks.

- ### Semantic Classification
  - owl-class:: computer-vision:ComputationalPhotography
  - owl-role:: Concept
  - owl-inferred:: computer-vision:MultiFrameImagingSystem, computer-vision:NeuralImagingPipeline, computer-vision:LightFieldCaptureDomain
  - belongs-to-domain:: [[Computer Vision]]
  - implemented-in-layer:: [[Image Processing]]

- ### Relationships
  - is-subclass-of:: [[Image Processing]], [[Computational Imaging]], [[Computer Vision]]
  - has-part:: [[Multi-Frame Fusion]], [[HDR Imaging]], [[Neural Image Signal Processor]], [[Depth Estimation]], [[Semantic Segmentation]], [[Super Resolution]], [[Panorama Stitching]], [[Bokeh Simulation]], [[Night Mode Photography]], [[Exposure Fusion]], [[Tone Mapping]], [[Demosaicing]], [[Image Noise Reduction]], [[Video Stabilisation]]
  - requires:: [[Camera]], [[Image Sensor]], [[GPU Compute]], [[Neural Network]], [[Image Formation Model]], [[Raw Image Pipeline]], [[Optics]], [[Signal Processing]]
  - enables:: [[Computer Vision]], [[3D Reconstruction]], [[Augmented Reality]], [[Medical Imaging]], [[Satellite Imagery]], [[Scene Understanding]], [[Face Detection]], [[Depth Estimation]]
  - implements:: [[Deep Learning]], [[Convolutional Neural Network]], [[Signal Processing]], [[Optical Flow]], [[Colour Science]], [[Generative Adversarial Network]]
  - depends-on:: [[Image Sensor]], [[GPU Compute]], [[Optics]], [[Convolutional Neural Network]], [[Deep Learning]]
  - supports:: [[Smartphone]], [[Real-Time Rendering]], [[Augmented Reality]], [[Medical Imaging]]
  - uses:: [[Generative Adversarial Network]], [[Diffusion Model]], [[Transformer Architecture]], [[Light Field Camera]], [[Plenoptic Camera]], [[Neural Network]], [[Super Resolution]], [[Optical Flow]]
  - contrasts-with:: [[Optics]], [[Image Processing]]
  - related-to:: [[NeRF]], [[Scene Understanding]], [[Video Stabilisation]], [[Face Detection]], [[Image Segmentation]], [[3D Reconstruction]], [[Computational Imaging]], [[Image Noise Reduction]]
  - standardized-by:: [[C2PA]]

- ### Content
  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:MultiFrameFusion))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:HDRImaging))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:NeuralImageSignalProcessor))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:DepthEstimation))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:SemanticSegmentation))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:SuperResolution))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:BokehSimulation))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:NightModePhotography))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:ToneMapping))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:Demosaicing))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:ImageNoiseReduction))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:VideoStabilisation))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:hasPart ai:ExposureFusion))
  ```
  ## Dependency Relationships
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:Camera))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:ImageSensor))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:NeuralNetwork))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:RawImagePipeline))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:requires ai:ImageFormationModel))
  ```
  ## Capability Relationships
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:ComputerVision))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:3DReconstruction))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:AugmentedReality))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:MedicalImaging))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:SatelliteImagery))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:SceneUnderstanding))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:enables ai:FaceDetection))
  ```
  ## Implementation Relationships
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:DeepLearning))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:ConvolutionalNeuralNetwork))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:SignalProcessing))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:OpticalFlow))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:ColourScience))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:GenerativeAdversarialNetwork))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:implements ai:TransformerArchitecture))
  ```
  ## Reduction Relationships
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:reducesTo ai:ImageProcessing))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:reducesTo ai:ComputationalImaging))
  ```
  ## Additional Axioms (Supports / Uses / ContrastsWith)
  ```
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:supports ai:Smartphone))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:supports ai:RealTimeRendering))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:uses ai:GenerativeAdversarialNetwork))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:uses ai:DiffusionModel))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:uses ai:TransformerArchitecture))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:uses ai:LightFieldCamera))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:contrastsWith ai:Optics))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:relatedTo ai:NeRF))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:relatedTo ai:SceneUnderstanding))
  SubClassOf(ai:ComputationalPhotography
    ObjectSomeValuesFrom(ai:relatedTo ai:VideoStabilisation))
  ```

  ## About

  Computational photography represents the convergence of physical imaging science with the full toolkit of modern [[Deep Learning]] and classical [[Signal Processing]]. The term was coined by Steve Mann in 1995 and re-defined with broader scope by Marc Levoy in his 2004 Stanford course and the 2005 IEEE International Symposium on Computational Photography. Where traditional imaging design asks "what lens and sensor configuration will capture a desired image?", computational photography reframes the question as "what [[Image Formation Model]] and reconstruction algorithm will produce the best result from the available light?" This shift decouples image quality from optics budget: a small-aperture [[Smartphone]] [[Camera]] can achieve dynamic range and resolution previously exclusive to studio equipment, through [[Multi-Frame Fusion]] of dozens of raw frames, [[Neural Network]]-based denoising, and [[Super Resolution]] upsampling. The economic consequences are profound: a smartphone costing under £500 now routinely produces images in low-light conditions that exceed what a £3,000 DSLR with a £1,000 fast prime lens could produce from a single exposure. This capability democratisation has compressed the professional imaging market while simultaneously creating a mass-market user base for computational photography that is orders of magnitude larger than the professional photography market ever was.

  The critical enabling infrastructure is the [[Neural Image Signal Processor]] (Neural ISP), an end-to-end learned replacement for the classical hand-crafted camera ISP chain. Classical ISPs perform fixed-point arithmetic on the raw Bayer mosaic, applying [[Demosaicing]], white balance, tone curves, and sharpening in a fixed sequence tuned by imaging scientists through laborious manual calibration against test charts and scene categories. Neural ISPs instead train on paired RAW/reference datasets — typically millions of RAW frames paired with reference exposures from high-end cameras with fast lenses in controlled conditions — to jointly optimise all these steps end-to-end, achieving superior performance on difficult scenes that defeat hand-tuned pipelines: underexposed interiors with mixed colour temperature illumination, fast-moving subjects in dim environments, high-frequency texture in scenes with extreme luminance range. Qualcomm's Snapdragon 8 Gen 3 ISP (2024) integrates dedicated neural processing units enabling real-time on-device inference for computational photography tasks at up to 4K resolution, processing at sustained 30fps with total power budgets under 2W. The competitive landscape among chipset vendors — Qualcomm, MediaTek, Samsung Exynos, and Apple's own silicon — is now substantially defined by the quality of each vendor's neural ISP implementation, making computational photography a key differentiator in a smartphone hardware market where sensor and optics improvements have reached diminishing returns.

  At the scene-understanding layer, [[Semantic Segmentation]] networks partition the frame into recognised objects — sky, skin, foliage, architecture, food, document — allowing the system to apply object-class-specific image enhancement tuned to the statistics and perceptual requirements of each object category. Human skin, for example, requires accurate hue preservation and gentle noise reduction that preserves pore-level texture; sky regions tolerate stronger noise reduction and benefit from saturation enhancement; foliage regions reward sharpening of high-frequency leaf detail. This spatially adaptive processing is executed in real-time on frames resolved at 12-50 megapixels, requiring inference speeds of 30-60ms per frame on the [[Neural Network]] accelerator. Google's Pixel 9 series (August 2024) introduced Zoom Enhance, which applies [[Super Resolution]] inference to telephoto crops, recovering detail that the 5× optical zoom lens's relatively small aperture (f/2.8) would not otherwise resolve; and improved Night Sight Panorama, which assembles wide-field night images from hundreds of aligned multi-frame captures across a physical panning sweep, effectively synthesising the angular resolution of a panoramic sensor from a single smartphone lens. Apple Night Mode on iPhone deploys adaptive exposure bracketing — selecting exposure durations from 1/30s to 1/4s depending on scene brightness — combined with a convolutional denoising network that runs on the Apple Neural Engine in 30–50 ms per captured burst, followed by multi-frame merging and spatial noise reduction. These deployments demonstrate that computational photography is no longer a research prototype technology: it is the dominant architecture for image capture in consumer devices shipping hundreds of millions of units annually, with more computational photography images captured per day than have ever been produced by film cameras across the entire history of photography.

  The global computational photography market was valued at approximately USD 15.2 billion in 2024 and is projected to reach USD 48.4 billion by 2032 (Fortune Business Insights, 2025), growing at a compound annual growth rate of approximately 15.5%. Growth is driven primarily by smartphone adoption across all price tiers — mid-range devices have adopted computational [[HDR Imaging]], [[Night Mode Photography]], and portrait [[Bokeh Simulation]] features previously exclusive to flagship devices — and is expanding into automotive ADAS perception, [[Medical Imaging]] reconstruction, [[Satellite Imagery]] analysis, and industrial inspection. The automotive segment is particularly significant: every Level 2+ ADAS system now includes multiple computational photography processing stages to handle the range of illumination, weather, and scene conditions encountered in real-world driving, and Level 4 autonomous vehicles require multiple camera ISPs running in parallel at very high frame rates with safety-certified deterministic performance.

  The historical development of the field falls into three recognisable phases. The first phase (1995–2010) was characterised by algorithmic breakthroughs in well-posed sub-problems: [[HDR Imaging]] (Debevec and Malik, 1997), light field rendering (Levoy and Hanrahan, 1996), [[Panorama Stitching]] (Brown and Lowe, 2007), and computational [[Bokeh Simulation]] (Bae and Durand, 2007). These algorithms operated on principled analytical models of the imaging process and were implemented in classical signal processing pipelines. The second phase (2010–2020) was characterised by the introduction of [[Deep Learning]] — initially for individual stages (learned [[Demosaicing]], learned [[Super Resolution]], learned [[Depth Estimation]]) and progressively expanding to full pipeline replacement. The seminal "Learning to See in the Dark" (Chen et al., 2018) demonstrated that a [[Convolutional Neural Network]] trained on paired RAW/clean datasets could outperform all hand-crafted pipelines on extreme low-light photography, marking the decisive shift to neural approaches. The third phase (2020–present) is characterised by system-level integration of neural pipelines into production hardware, the emergence of [[Diffusion Model]]-based generative restoration, and the frontier challenge of managing authenticity as synthetic content becomes indistinguishable from optically captured imagery.

  ## Components / Architecture

  A contemporary computational photography pipeline in a flagship smartphone camera system (circa 2024–2026) comprises several cooperating stages operating on a common data substrate of raw sensor captures:

  - **Optical acquisition layer** — the [[Camera]] with its [[Optics]] and [[Image Sensor]] (typically a Sony IMX or Samsung ISOCELL CMOS sensor, 50–200 MP effective resolution, 1/1.3"–1" optical format in flagship devices) captures raw photon counts across multiple exposures, multiple sub-apertures (dual-pixel PDAF dividing each photosite into two angular sub-pixels for phase detection), quad-Bayer or Tetracell arrangements that bin 4 photosites together in low light, or multiple physical lenses (0.6× ultra-wide, 1× main, 3.5–5× telephoto) each with their own ISP pipeline lane. Modern flagship systems capture 10–50 burst frames in 100–500 ms from the primary sensor simultaneously with auxiliary depth, ToF, or spectral sensor data.
  - **[[Raw Image Pipeline]]** — [[Demosaicing]] converts the Bayer colour filter array mosaic (RGGB, RYYB, or four-channel arrangements) to full-resolution RGB through either classical linear interpolation (bi-linear, AHD) or learned convolutional demosaicing networks that jointly suppress demosaicing artefacts and luminance noise; black-level subtraction, flat-field correction, optical vignetting compensation, and chromatic aberration removal are applied. In Neural ISP deployments (Qualcomm Snapdragon 8 Gen 3, Apple A18 Pro), this entire stage is replaced by an end-to-end learned network that processes raw Bayer data directly to RGB output.
  - **[[Multi-Frame Fusion]]** — burst frames captured across 20–200 ms are registered via [[Optical Flow]] dense correspondence estimation (EpicFlow, FlowNet, or device-specific learned flow models at 1–4 ms per pair) or feature-point RANSAC homography for scenes without independent motion, then merged using frequency-domain Wiener filtering, Gaussian pyramid merging, or learned attention-based fusion networks that identify and weight the sharpest, lowest-noise regions of each frame. Effective noise reduction is proportional to sqrt(N) frames for spatially stationary content, achieving 3–6 stops of effective dynamic range and noise floor improvement over a single exposure.
  - **[[HDR Imaging]]** — [[Exposure Fusion]] algorithms select and blend bracketed exposures (typically 2–4 EVs apart) to recover both shadow detail and highlight structure, applying spatially varying blend weights based on local contrast, saturation, and well-exposedness measures. Alternatively, single-capture HDR uses the dual-gain readout of modern sensors (ISO 50 base + ISO 400 highlights read simultaneously) with computational blending. [[Tone Mapping]] operators then compress the recovered HDR radiance into the display output gamut: classical operators (Reinhard, Mantiuk, Filmic) apply global or local tone curves; modern approaches use learned tone mappers trained to match human perceptual preferences across diverse content.
  - **[[Semantic Segmentation]] and spatial reasoning** — lightweight [[Convolutional Neural Network]]s (MobileNetV3, EfficientNet-lite, or device-specific architectures with 5–20M parameters) segment the scene into 20–80 semantic classes at 1/4 to 1/8 resolution in 2–8 ms; [[Depth Estimation]] from stereo baseline cameras (0.5–1 cm baseline in smartphone arrays), time-of-flight sensor (Sony DepthSense, STMicro FlightSense), or monocular neural estimation (DepthAnything, MiDAS) provides per-pixel distance maps at 1/4–1/2 resolution used for matting, bokeh simulation, and AR anchoring.
  - **Enhancement and synthesis stages** — [[Bokeh Simulation]] applies a learned foreground/background matting network operating on the [[Semantic Segmentation]] mask and [[Depth Estimation]] map to produce a soft alpha channel, then renders variable-radius defocus blur kernels (lens blur, disc blur, or learned spatially varying convolution) that simulate the optical bokeh produced by an f/1.2 equivalent aperture. [[Super Resolution]] networks (ESRGAN, RealESRGAN, or device-specific distillation models) upsample the fused image by 2–8× with learned texture synthesis, recovering spatial frequencies above the sensor's Nyquist limit from learned natural image statistics. [[Night Mode Photography]] stacks 4–16 further sub-exposures under motion-compensated alignment for a total capture duration of 1–8 seconds, followed by multi-scale noise reduction. [[Video Stabilisation]] applies electronic image stabilisation (EIS) by warping each frame to a smoothed rolling reference trajectory estimated from gyroscope inertial measurements, compensating for hand tremor at 10–30 Hz.
  - **Output formatting** — final [[Tone Mapping]] for SDR (BT.709, sRGB) or HDR (HLG, PQ/ST.2084) display gamuts, frequency-domain sharpening, JPEG/HEIF compression at target file size, and XMP metadata embedding including Content Authenticity Initiative (C2PA) provenance records of all applied computational operations.

  Frontier architectures in active research (2024–2026) replace individual pipeline stages with a unified [[Diffusion Model]] or [[Transformer Architecture]] denoising backbone that processes the full burst stack end-to-end as a spatiotemporal attention problem — treating each burst frame as a token in a temporal sequence and attending across all frames simultaneously to produce the maximum-likelihood clean image. Models in this class (Google MFIR, academic burst denoising transformers) achieve superior performance on complex motion and defocus scenarios but currently require 100–500ms inference on server-grade GPU hardware, limiting smartphone deployment to preview algorithms whilst heavier processing occurs on a paired cloud backend.

  ## Use Cases / Major Families

  - **Smartphone computational cameras** — the dominant deployment context, with all major OEMs (Apple, Google, Samsung, Xiaomi, Huawei) investing in proprietary neural ISPs and scene-specific pipelines. The smartphone segment held approximately 38.7% of the computational photography market in 2025.
  - **[[Night Mode Photography]]** — Google Night Sight and Apple Night Mode use [[Multi-Frame Fusion]] with motion-tolerant alignment to capture usable images at sub-lux illuminance levels that defeat traditional longer exposures due to subject motion.
  - **[[HDR Imaging]] in video** — logarithmic and HDR10/Dolby Vision capture modes apply real-time [[Tone Mapping]] and [[Exposure Fusion]] to maintain highlight detail in broadcast and consumer video workflows.
  - **[[3D Reconstruction]] and [[NeRF]]** — [[Plenoptic Camera]] and multi-view capture systems underpin [[Augmented Reality]] spatial anchoring and industrial metrology; Neural Radiance Fields reconstruct dense 3D scene representations from unstructured photograph collections.
  - **[[Medical Imaging]]** — computed tomography, fluorescence microscopy, and endoscopic imaging apply computational photography principles for reconstruction from incomplete measurements.
  - **[[Satellite Imagery]]** — multi-spectral fusion, pan-sharpening, and cloud-removal algorithms apply [[Multi-Frame Fusion]] and [[Semantic Segmentation]] to Earth observation data.
  - **Automotive perception** — camera ISP pipelines in ADAS systems apply [[Deep Learning]]-based [[Image Noise Reduction]] and [[Scene Understanding]] to handle adverse weather and night driving.
  - **[[Light Field Camera]] systems** — Raytrix and Lytro (defunct) [[Plenoptic Camera]] platforms capture angular information for post-capture refocus, synthetic aperture imaging, and metric [[Depth Estimation]].

  ## Academic Context

  Computational photography crystallised as a named discipline at the 2005 IEEE ICCP symposium co-organised by Marc Levoy (Stanford) and Ramesh Raskar (MIT Media Lab). Levoy's work on light field rendering (Levoy and Hanrahan, SIGGRAPH 1996) established the theoretical substrate of capturing the four-dimensional plenoptic function. Raskar and Tumblin's textbook "Computational Photography: Mastering New Techniques for Lenses, Lighting, and Sensors" (AK Peters, 2010) remains the authoritative field reference. Subsequent landmark contributions include:

  - HDR imaging algorithms (Debevec and Malik, SIGGRAPH 1997; Mertens et al., 2009 exposure fusion).
  - Multi-frame noise reduction theory (Hasinoff et al., "Burst Photography for HDR and Low-Light on Mobile Cameras", SIGGRAPH Asia 2016), which underpins Google Night Sight.
  - End-to-end Neural ISP learning (Chen et al., "Learning to See in the Dark", CVPR 2018; Ignatov et al., "Replacing Mobile Camera ISP with a Single Deep Learning Model", CVPR 2020).
  - Depth-from-defocus and [[Bokeh Simulation]] (Wadhwa et al., "Synthetic Shallow Depth of Field on a Light-Field Camera", TPAMI 2018; Wadhwa et al., "Synthetic Bokeh", ACM TOG 2021).
  - Monocular [[Depth Estimation]] advances (Ranftl et al., DPT, ICCV 2021; Depth Anything, CVPR 2024).
  - NeRF-family scene reconstruction (Mildenhall et al., NeRF, ECCV 2020; Barron et al., Mip-NeRF 360, CVPR 2022).
  - Learned [[Demosaicing]] (Kokkinos and Lefkimmiatis, 2019; Gharbi et al., Joint Demosaicing and Denoising, SIGGRAPH 2016).
  - Light field depth estimation from CNNs (Shin et al., 2018; Wang et al., IEEE TPAMI 2023).

  The ICCP annual conference remains the primary venue; CVPR, ICCV, ECCV, and SIGGRAPH/SIGGRAPH Asia also publish substantial computational photography work.

  The mathematical framework of computational photography is grounded in the image formation model, which relates scene radiance L(x, y, λ, t) — the four-dimensional function of spatial position, wavelength, and time — to measured pixel values through a cascade of optics, sensor, and electronic transformations. The optical point spread function (PSF) blurs scene radiance according to the lens aberration and diffraction characteristics; the sensor integrates photons across each photosite's area during the exposure interval, producing a noisy, quantised measurement corrupted by photon shot noise (Poisson-distributed), read noise (Gaussian-distributed), and fixed-pattern noise (spatially structured). [[Demosaicing]] must then interpolate the single-channel Bayer pattern measurement to a three-channel RGB estimate. Each computational photography technique operates on one or more of these degradation sources: [[Multi-Frame Fusion]] averages over shot noise across N frames to reduce noise by sqrt(N); [[Super Resolution]] inverts the optical blur and pixel integration operations to recover sub-pixel spatial information from spatial aliasing in the sensor grid; [[Depth Estimation]] inverts the defocus operator to recover the depth map that produced an observed blur pattern.

  The introduction of [[Convolutional Neural Network]]s into this pipeline, beginning with learned demosaicing (Gharbi et al., 2016) and expanding to full raw-to-output pipelines (Chen et al., 2018; Ignatov et al., 2020), replaced analytical inversions of the image formation model with data-driven approximations trained to minimise perceptual loss functions — SSIM, LPIPS, and learned discriminator losses from [[Generative Adversarial Network]]s. This shift has two consequences: first, neural pipelines can learn the statistics of natural scenes and human perceptual preferences that are difficult to express analytically; second, they are opaque, making their behaviour difficult to audit for authenticity and forensic integrity. This tension — between perceptual quality and verifiability — is one of the defining challenges of the field as it matures into a regulated domain.

  The most significant architectural transition currently underway is the replacement of modular learned pipelines with monolithic [[Transformer Architecture]]-based models that process full burst stacks as sequences, attending across spatial, temporal, and spectral dimensions simultaneously. Models such as Google's MFIR (Multi-Frame Image Restoration) and academic works exploring [[Diffusion Model]]-based inverse problems treat burst photography as a Bayesian posterior estimation problem, sampling from the posterior distribution of plausible clean images given the noisy burst — a formulation that unifies denoising, deblurring, [[Super Resolution]], and [[HDR Imaging]] under a single mathematical framework.

  ## Current Landscape (2026)

  The market is expanding rapidly across six fronts. First, **on-device neural ISPs**: Qualcomm Snapdragon 8 Gen 3 (2024) and Apple A18 Pro (2024) integrate NPU-accelerated computational photography inference achieving 4K real-time throughput. In May 2025, MediaTek launched the Dimensity 9400e with an 18-bit RAW ISP and AI-powered [[Semantic Segmentation]] for video; NPUs increased [[Convolutional Neural Network]] inference throughput by 33%, enabling native 4K cinematic effects. Demand for computational photography solutions in mobile devices grew 24% in 2025, driven by flagship launches across all price tiers where [[Multi-Frame Fusion]] HDR, AI-powered [[Image Noise Reduction]], and per-pixel [[Depth Estimation]] fusion became standard features. Second, **generative enhancement**: [[Diffusion Model]]-based image restoration (Real-ESRGAN, DiffBIR, ISPDiffuser using texture-aware diffusion and histogram-guided colour consistency — arXiv:2503.19283) are being integrated into camera post-processing pipelines, enabling resolution synthesis, object removal, and relighting beyond what optical data supports. The ISPDiffuser approach (March 2025) demonstrates that [[Diffusion Model]] networks trained end-to-end on RAW-to-sRGB pairs can model colour consistency across the full ISP pipeline while recovering fine texture detail from extreme noise floors. Third, **video [[Multi-Frame Fusion]]**: Google Pixel 9 (2024) and Samsung Galaxy S25 (2025) extend burst-mode night algorithms to video capture. Google's NeuralPipe HAL interface (Android 15 QPR2, 2026) exposes a new API allowing third-party camera apps to bypass the legacy ISP and feed raw Bayer data directly into the device NPU via custom TensorFlow Lite models — a paradigm shift that open-sources the neural ISP pipeline to developers. Fourth, **360-degree and immersive capture**: Meta Quest Pro and Apple Vision Pro spatial cameras apply computational photography for inside-out tracking and mixed-reality compositing. Fifth, **AIM 2025 Inverse Tone Mapping Challenge** (ECCV 2025 workshop; arXiv:2508.13479) benchmarks learned algorithms for converting SDR legacy content to HDR, addressing the content library gap as HDR displays proliferate. Sixth, **C2PA and content authenticity**: C2PA graduated to formal ISO standard (ISO/IEC 22144, C2PA 2.1) in 2025, reaching over 6,000 members and affiliates. Samsung Galaxy S25 (early 2025) became the first major smartphone to ship C2PA Content Credentials using the Qualcomm Snapdragon 8 Elite secure processing unit, though credentials are currently applied only to generative AI outputs rather than all captures. Google Pixel 10 (August 2025) achieved C2PA Assurance Level 2 with hardware-backed signing via the Tensor G5 chip and Titan M2 security module. Canon announced its Authenticity Imaging System based on C2PA, rolling out in May 2026 across Europe, the Middle East, and Africa. The C2PA ecosystem now covers Leica, Nikon, Canon, Fujifilm, and Panasonic professional cameras plus the Galaxy S25 and Pixel 10 smartphones, enabling photojournalism accreditation, legal evidence workflows, and scientific image provenance chains. The growing category of learned unpaired ISP training (Experts-Guided Unbalanced Optimal Transport for ISP learning from unpaired and/or paired data, arXiv:2512.05635) addresses the data scarcity problem for real-world ISP deployment across diverse sensor architectures without requiring matched RAW/reference pairs.

  The UK market benefits from Qualcomm's Cambridge engineering hub (formerly ARM Cambridge), which contributes to neural ISP architecture research, and from MediaTek's Bracknell R&D office supporting Dimensity chipset camera systems deployed in mid-range Android devices. The 2026 "year of AI transparency" trend is driving UK-based camera ethics discussions — the National Press Photographers Association and equivalent UK bodies are updating professional standards to address the boundary between optically captured and computationally synthesised image content.

  ## UK Context

  Imperial College London hosts the Realistic Graphics and Imaging group led by Professor Abhijeet Ghosh, whose research spans computational [[Optics]], appearance modelling, and multi-spectral imaging for graphics and vision. The group's work on polarisation-based appearance acquisition and computational illumination for photorealistic rendering of skin, cloth, and complex materials is directly relevant to the appearance-modelling dimension of computational photography. UCL's Department of Computer Science maintains active groups in [[Computer Vision]] and [[3D Reconstruction]] that contribute to computational photography methods, including work on semantic neural reconstruction and dense visual SLAM. The University of Edinburgh's Institute for Perception, Action and Behaviour publishes work on scene reconstruction, event-camera processing, and depth sensing, building on Edinburgh's longstanding strength in computer vision going back to the HIPR image processing resource of the 1990s. The University of Cambridge Computer Laboratory (now Department of Computer Science and Technology) has longstanding contributions to [[Image Processing]] and [[Bayesian Deep Learning]] methods applicable to image restoration, and Cambridge's machine intelligence laboratory produced foundational work on probabilistic graphical models for vision that underpins modern neural imaging approaches.

  Beyond academia, ARM's Cambridge headquarters produces the [[GPU Compute]] and NPU IP that powers virtually every mobile neural ISP deployment globally — the Cortex-A CPU, Mali GPU, and Ethos NPU architecture families are licensed by every major smartphone chipset vendor (Qualcomm, MediaTek, Samsung Exynos, Apple's own silicon). The design and verification of the next generation of NPU instructions for [[Convolutional Neural Network]] inference in computational photography workloads is conducted largely at ARM's Cambridge and Manchester offices. The Alan Turing Institute (London) coordinates computational photography-adjacent projects in scientific imaging under its Data-Centric Engineering programme, including work on microscopy image reconstruction and satellite image super-resolution. MediaTek's Bracknell R&D office and Qualcomm's Cambridge design centre contribute directly to chipset-level computational photography hardware. The UK government's Digital Catapult facilitates industry–academic collaboration in imaging AI, with programmes relevant to medical and satellite imaging domains.

  The UK satellite imaging sector is a particularly significant downstream beneficiary of computational photography advances. Surrey Satellite Technology (Guildford) and SSTL's corporate parent Airbus Defence and Space (UK operations in Stevenage and Portsmouth) operate constellations whose image quality improvements directly derive from computational photography algorithms — multi-frame pan-sharpening, atmospheric correction, and [[Super Resolution]] from temporal stacks of low-resolution captures. The Satellite Applications Catapult (Harwell) is driving commercialisation of AI-enhanced satellite image analysis, much of which depends on advanced [[Semantic Segmentation]] and [[Image Noise Reduction]] algorithms from the computational photography research base. In medical imaging, companies including Oxford Medical Imaging (now Perspectum, Oxford) and ixico (London) apply [[Deep Learning]]-based image reconstruction and enhancement in clinical radiology and neuroimaging products whose technical foundations align closely with computational photography's algorithmic toolkit.

  ## Authenticity, Forensics, and the Ethics of Computational Capture

  The progressive replacement of physical optical capture with computational synthesis has introduced a range of authenticity and forensic integrity challenges that are attracting both regulatory and technical attention. Traditional photographic evidence was considered reliable because the physical optics constrained what could appear in the image: a given lens, aperture, shutter speed, and sensor configuration could only produce a specific range of images from a given scene. Computational photography progressively undermines this constraint. [[Multi-Frame Fusion]] averages over many actual exposures, which is broadly trustworthy; but [[Generative AI]]-assisted restoration inpaints missing data from a learned model of natural images, introducing synthesised detail with no ground-truth physical basis. [[Bokeh Simulation]] renders out-of-focus regions that were never captured in focus — the computational system invents plausible texture rather than preserving uncertainty. [[Night Mode Photography]] produces colourful, detailed images from scenes where the unaided eye would see near-darkness — the image is accurate in a statistical sense (it represents the most probable clean image given the noisy captures) but does not correspond to any single physical exposure.

  These issues are not merely philosophical. The UK courts have begun to grapple with computational photography in the context of photographic evidence: the Law Commission's 2022 review of digital evidence considered how processing operations should be disclosed when smartphone photographs are produced as evidence, and the Crown Prosecution Service guidance on digital material acknowledges that modern smartphone photographs may reflect significant post-capture processing. Photojournalism's professional standards bodies — the World Press Photo Foundation and the National Press Photographers Association — have updated their ethics codes to address AI-enhanced photography, prohibiting AI-generated content from photojournalism submissions whilst permitting traditional darkroom-equivalent enhancements.

  The technical response to authenticity concerns includes work on cryptographic camera attestation — embedding hardware-signed metadata into the RAW data stream at the point of sensor read-out, creating a chain of custody that records which computational operations were applied and in what sequence. The Content Authenticity Initiative (CAI), co-founded by Adobe, Microsoft, and Twitter (now X), has developed the C2PA (Coalition for Content Provenance and Authenticity) standard, which is being integrated into smartphone camera metadata workflows and professional editing software. C2PA metadata records the operations applied in the [[Neural Image Signal Processor]] and any subsequent editing chain, providing a verifiable computational photography audit trail that can distinguish between sensor-derived content and AI-synthesised additions.

  ## Future Directions (2026–2030)

  Several converging trends will shape the field over the next four years. **Generative capture**: the boundary between photography and synthesis will blur further as foundation [[Diffusion Model]]s are integrated directly into camera firmware — Samsung's 2025 partnership with generative AI research teams, and Apple's integration of generative inpainting into Photos — producing images where individual regions may be synthesised from learned priors rather than optically measured, pressing regulators, journalism ethics boards, and forensic scientists to define authenticity standards for news, legal, and scientific images. The Content Authenticity Initiative C2PA standard, now integrated into Leica and Nikon professional cameras, will expand to smartphones and become a baseline expectation. **Always-on computational RAW**: cameras will increasingly store compressed computational intermediate representations (multi-frame burst stacks, depth maps, [[Semantic Segmentation]] masks) rather than traditional sensor RAW or JPEG, enabling fully deferred re-rendering of any image parameter — focus point, depth of field, exposure level, white balance, [[Tone Mapping]] curve — post-capture on more capable hardware, transforming photography from a capture decision into a render decision. **Neural light field video**: combining [[Plenoptic Camera]] multi-view capture with NeRF-family or Gaussian Splatting reconstruction, real-time 6-degrees-of-freedom (6DoF) video will enable VR/AR immersive experiences from prosumer multi-camera rigs at £5,000–£20,000 price points rather than the £500,000+ professional light field capture systems of 2022–2024. **Physics-informed neural ISPs** will jointly model sensor quantum efficiency curves, read noise spectra, optical aberration phase maps measured during device calibration, and atmospheric effects (haze, rain droplets on a lens) to produce perceptually optimal reconstructions in conditions (fog, heavy rain, dust, extreme darkness at 0.001 lux) where current data-driven approaches without explicit physics encoding fail unpredictably. **Spectral imaging democratisation**: as spectral filter arrays with 4–16 channels (hyperspectral imaging) approach consumer price points, computational photography algorithms will extend to spectral reconstruction — enabling colour-accurate material identification, food quality assessment, and medical skin condition monitoring from smartphone cameras. **Standardisation**: ISO TC 42 (Photography) and IEC TC 100 (Audio, Video and Multimedia Systems) working groups are developing metadata standards for recording which computational operations were applied to an image at each stage of the capture and processing chain, enabling downstream trust chains applicable to photojournalism accreditation, insurance claims photography, legal evidence, and scientific publication. The UK's National Physical Laboratory (NPL, Teddington) is contributing to the metrological foundations of computational imaging standards, particularly in defining how [[Tone Mapping]] and [[HDR Imaging]] outputs should be characterised against reference scene illuminances.

  ## Hardware and Sensor Architecture Trends

  The computational photography pipeline is co-designed with the sensor and silicon that implement it. Understanding the hardware landscape is essential to understanding why certain algorithmic approaches became dominant.

  **CMOS sensor evolution**: Modern flagship smartphone sensors (Sony IMX989, Samsung ISOCELL HP9, Omnivision OV50H) have reached 1-inch and 1/1.28-inch optical formats in smartphones, approximately 4× the photosite area of 2015-era sensors. Larger photosites capture more photons per unit time, improving the fundamental shot-noise-limited SNR without [[Multi-Frame Fusion]]. However, sensor size in a smartphone is limited by the total camera module height budget (typically 5–8 mm including optics), which has led to continued algorithmic investment rather than relying on sensor size alone. Quad-Bayer and Tetracell arrangements bin four 1.0 µm photosites together to form a single effective 2.0 µm photosite in low light (achieving SNR equivalent to a larger photosite) while reading them independently at full resolution in bright conditions for maximum spatial resolution — requiring the [[Raw Image Pipeline]] to handle the demosaicing adaptively based on scene luminance. Stacked CMOS sensor architectures separate the pixel layer from the readout electronics layer using 3D through-silicon vias (TSV), enabling the signal processing to occur in the electronics layer at full parallel bandwidth (Qualcomm's ISP processes 3.6 gigapixels per second in the Snapdragon 8 Gen 3, requiring the stacked sensor readout to keep pace). The addition of PDAF (phase detection autofocus) across the full image array — present in all flagship sensors since 2020 — means every photosite contributes to the parallax-based [[Depth Estimation]] computation, enabling dense per-pixel depth maps rather than sparse point depth measurements.

  **NPU and neural ISP silicon**: The dominant trend in camera silicon for 2024–2026 is the integration of dedicated Neural Processing Units (NPUs) operating directly on the raw image data stream from the sensor, before or alongside the classical ISP pipeline. The Apple A18 Pro Neural Engine achieves 35 TOPS (trillion operations per second), with the camera subsystem assigned approximately 15–20% of this budget for real-time [[Semantic Segmentation]], [[Depth Estimation]], and learned demosaicing. Qualcomm's Spectra 80 ISP in the Snapdragon 8 Gen 3 (2024) supports on-device [[Neural Network]] inference for all major ISP stages, processing 4K video at 60fps with simultaneous multi-frame [[Image Noise Reduction]] inference. The MediaTek Dimensity 9400e (May 2025) introduced an 18-bit RAW ISP pipeline that retains more of the sensor's full dynamic range through the processing chain before quantisation, reducing precision loss particularly in shadow regions where 12-bit quantisation is most harmful. Google's Pixel 10 Tensor G5 chip (August 2025) introduced NeuralPipe, a hardware-software co-design that exposes the NPU-based ISP as a programmable platform through the Android camera HAL, enabling third-party camera applications to deploy custom neural ISP models on the NPU — a democratisation of neural ISP that previously required proprietary silicon integration.

  **Multi-aperture camera arrays**: The physical constraint that a single aperture cannot simultaneously maximise light gathering (large aperture), depth of field (small aperture), and telephoto reach (long focal length) motivates multi-aperture systems with dedicated lenses for each use case. Flagship smartphones now routinely carry four camera modules: an ultra-wide (10–14 mm equivalent, f/2.2, used for environmental context), a wide primary camera (24–26 mm equivalent, f/1.6–1.8, used for most shots), a 3× telephoto (75–80 mm equivalent, f/2.8–3.0), and a 5× or 10× telephoto (120–250 mm equivalent, f/2.8–4.5). Each module has its own [[Image Sensor]], [[Optics]] train, and [[Raw Image Pipeline]] lane, with [[Multi-Frame Fusion]] and [[Depth Estimation]] operating across all modules simultaneously. The computational merging of multi-aperture data — using the ultra-wide as a context guide for HDR tone mapping, the dual-lens stereo baseline for metric [[Depth Estimation]], and per-lens point spread functions measured in factory calibration for per-lens optical aberration correction — is one of the most complex real-time computational photography problems deployed in consumer hardware.

  **ToF and structured light depth sensing**: Time-of-flight (ToF) sensors emit modulated infrared light and measure the phase delay of returned photons to compute per-pixel absolute depth, providing metric depth maps with ±1–2 cm accuracy at ranges up to 5 metres. Sony's IMX456 ToF sensor is integrated into flagship Android devices; Apple's LiDAR scanner in iPhone Pro uses a pulsed direct ToF principle with silicon photomultiplier (SiPM) detector for longer range (up to 5 m in ambient light) with ~5 cm accuracy. Structured light projectors (used in Face ID, True Depth camera) project a known pattern of infrared dots and infer depth from the observed deformation of the pattern. These active depth sensors provide ground-truth depth data that anchors the learned monocular [[Depth Estimation]] networks: the monocular network learns to estimate depth from texture, focus, and perspective cues that generalise across scenes, while the ToF sensor provides calibration data in regions where it has coverage. The integration of active and passive depth estimation is a current research frontier, with methods including joint RGB-D fusion networks trained on data from both sensor types.

  ## Emerging Research Directions

  Beyond the mainline smartphone and scientific imaging applications, several frontier research threads in computational photography warrant detailed attention. **Computational illumination**: by controlling structured light sources — LED matrices, programmable flashes, or laser projectors — synchronised with image capture, researchers at MIT, CMU, and Imperial College London have demonstrated recovery of subsurface scattering parameters, specular reflectance maps, and 3D normal fields from otherwise underdetermined scenes. These techniques, pioneered by Raskar's group (SIGGRAPH 2003 onwards), are now transitioning from laboratory prototypes to embedded devices as programmable LED flash arrays become cost-viable. **Event cameras and neuromorphic sensing**: silicon retinas that output asynchronous per-pixel brightness-change events rather than synchronous frames offer microsecond temporal resolution and a dynamic range exceeding 120 dB — far beyond conventional [[Image Sensor]]s. Research groups at ETH Zurich, TU Berlin, and Inivation (Zurich spin-out) are applying computational photography algorithms adapted for event-stream data to solve high-speed motion deblurring, video interpolation at 1000fps, and SLAM in extreme illumination conditions where conventional cameras fail. **Spectral imaging beyond RGB**: smartphone sensors are beginning to incorporate near-infrared (NIR) channels alongside RGB, and hyperspectral filter arrays are advancing toward low-cost deployment. NIR channels enable direct depth sensing through time-of-flight, vein-pattern authentication, and improved [[Image Noise Reduction]] in low light by using the NIR channel as a noise-free guide image for bilateral filtering of the RGB channels. **Lensless imaging**: cameras without lenses, using only a diffuser or mask and a computational reconstruction algorithm based on the known point spread function, offer ultra-thin form factors for wearable and implantable medical imaging. Groups at Berkeley, Edinburgh, and MIT have demonstrated lensless cameras achieving DSLR-comparable image quality from devices thinner than a credit card, with applications in endoscopy, surveillance, and light-field capture.

  The computational photography pipeline is also becoming a platform for privacy-preserving image analysis. By processing sensitive images entirely in the [[Neural Image Signal Processor]] and releasing only feature embeddings — never pixel data — to the application processor, systems can perform [[Face Detection]], [[Scene Understanding]], and biometric authentication without exposing raw personal imagery to software layers with broader data access. This architectural approach, pioneered in Apple's Neural Engine design, may become a regulatory requirement as privacy legislation in the EU (GDPR, AI Act) and UK (Data Protection Act 2018) extends to biometric processing in consumer devices.

  ## Formal Foundations: The Image Formation Model

  The theoretical backbone of computational photography is the **image formation model** — the physical and mathematical description of how scene radiance becomes a digital image. Formalising this chain precisely reveals which computational operations can, in principle, invert the measurement process to recover the underlying scene, and which introduce irrecoverable information loss that must be filled by learned priors.

  Scene radiance is described by a 5D plenoptic function L(x, y, λ, θ, φ) where (x, y) are spatial coordinates in the scene, λ is wavelength, and (θ, φ) are the angular directions of emitted or reflected light. A conventional camera spatially integrates this across each photosite's area (x, y) over the exposure interval [t, t+Δt], spectral integration over the colour filter transmittance curve Fc(λ), and projects the 5D light field onto the 2D sensor plane via the lens optical system described by its point spread function (PSF) P(x, y; d), which depends on scene depth d through defocus blur. The measured photon count at pixel (i, j) in colour channel c is therefore:

  N(i,j,c) = ∫∫∫ L(x, y, λ) · Fc(λ) · P(x-xᵢⱼ, y-yᵢⱼ; d(x,y)) · η(λ) dx dy dλ · Δt / hν(λ)

  where η(λ) is the sensor quantum efficiency and hν is the photon energy. To this ideal measurement, physical noise sources are added: photon shot noise N_shot ~ Poisson(N), read noise N_read ~ N(0, σ²ᵣ), dark current N_dark ~ Poisson(μ_d · Δt), and fixed-pattern noise N_FPN which is spatially correlated but temporally stable and calibratable. The raw digital value from the ADC is quantised to b bits (12-bit for typical smartphone RAW, 14-bit for flagship sensors), introducing quantisation noise with power (Δ/√12)² where Δ = FullScale/2^b is the quantisation step.

  Each stage of the computational photography pipeline corresponds to inverting or compensating for one or more terms in this formation model. **[[Demosaicing]]** addresses the single-channel sampling problem: the Bayer filter array provides only one colour channel per photosite, requiring interpolation (AHD, MLRI, learned demosaicing CNNs) to reconstruct the three-channel RGB image without chromatic aliasing artefacts. **[[Image Noise Reduction]]** targets shot noise suppression, either across N burst frames (SNR gain = sqrt(N) after alignment and averaging), across spatial neighbourhood pixels using guided bilateral filtering, or via neural network denoising trained on paired noisy/clean datasets. **[[Super Resolution]]** inverts the spatial integration and optical blur to recover spatial frequencies above the sensor's Nyquist limit f_Nyq = 1/(2·pixel_pitch) from the aliased, blurred sensor measurements, using either regularised optimisation (TV deblurring, Wiener deconvolution) or learned CNN/transformer networks that encode natural image texture priors. **[[Depth Estimation]]** inverts the defocus blur operator: since the blur disk radius r = |d - d_focus| · A / (2 · f_number) depends on depth displacement from the focal plane, measuring the spatial blur radius across the image provides a depth estimate — the depth-from-defocus principle. With dual-pixel PDAF sensors, the parallax between left and right sub-pixels provides a direct stereo depth signal without requiring multiple viewpoints. **[[HDR Imaging]]** through multi-exposure [[Exposure Fusion]] recovers the full dynamic range L_max/L_min of the scene (typically 10^5–10^7) from the camera's output dynamic range (typically 10^3–10^4 for a single exposure), by imaging at multiple exposure values and blending pixel values at the exposure where each region lies within the sensor's linear range.

  This formal analysis clarifies the epistemological status of each computational photography operation. Operations that invert the physical image formation model — denoising by averaging, deconvolution by registered image alignment and Wiener filtering, multi-frame [[Super Resolution]] from sub-pixel-shifted exposures — recover information that was present in the physical scene and captured, though degraded, by the sensor. Operations that synthesise information not present in the sensor measurements — [[Generative Adversarial Network]]-based texture hallucination in [[Super Resolution]], [[Diffusion Model]]-based inpainting, [[Bokeh Simulation]] of out-of-focus regions — are fundamentally different in epistemological character: they apply statistical priors about the distribution of natural images to impute content that was never directly observed. The former class of operations preserves photographic fidelity in the sense that they estimate the most probable clean scene given the noisy observations; the latter class produces perceptually plausible content conditioned on learned priors, which may not correspond to the actual scene content. This distinction is precisely the one at the heart of ongoing debates about C2PA content credentials, photojournalism ethics, and the legal admissibility of computationally enhanced photographs.

  The connection to [[Computer Vision]] and [[3D Reconstruction]] runs through the same physical model. Multi-view computational photography — capturing the scene from multiple calibrated viewpoints — allows recovering the full 3D scene structure via structure-from-motion and multi-view stereo algorithms, or via [[NeRF]]-family implicit scene representations, precisely because the image formation model provides a differentiable mapping from 3D scene radiance fields to 2D image observations. The computational photography pipeline thus acts as the front-end perception layer for any [[Computer Vision]], [[Augmented Reality]], or [[Medical Imaging]] system: higher-level scene understanding is only as good as the quality of the images that feed it, making computational photography enhancements directly beneficial to all downstream tasks.

  ## Key Terminology Glossary

  - **Bayer mosaic** — the standard colour filter array (CFA) pattern alternating red, green, and blue filters across the photosite grid of a CMOS sensor, requiring [[Demosaicing]] to reconstruct a full-colour image.
  - **Burst photography** — the capture of a rapid sequence of short-exposure frames (typically 4–30 frames in 30–300 ms) that are subsequently aligned and fused to reduce noise, increase dynamic range, or recover high-resolution detail unavailable from any single frame.
  - **Computational bokeh** — the simulation of the out-of-focus background blur characteristic of a wide-aperture lens, achieved computationally from [[Depth Estimation]] and layered alpha compositing rather than physical optics.
  - **Dual-pixel autofocus (DPAF)** — a technology in which each photosite is split into two sub-pixels sensitive to light from slightly different angles, providing a parallax signal used for both phase-detection autofocus and stereo [[Depth Estimation]].
  - **Exposure bracketing** — the capture of multiple frames at different exposure values (EVs) that are merged by [[Exposure Fusion]] or [[Tone Mapping]] algorithms to produce an [[HDR Imaging]] output spanning the full scene dynamic range.
  - **Image Signal Processor (ISP)** — the dedicated hardware block in a camera [[Smartphone]] system-on-chip that executes the [[Raw Image Pipeline]] transforms, progressively replaced in premium devices by the [[Neural Image Signal Processor]].
  - **Inverse tone mapping (ITM)** — the task of recovering or synthesising HDR scene radiance from an SDR input, relevant for upconverting legacy content to modern HDR displays; subject of the AIM 2025 challenge.
  - **Neural Radiance Field ([[NeRF]])** — a scene representation that encodes 3D radiance and opacity as a continuous function parameterised by a [[Neural Network]], enabling novel-view synthesis from multi-view photographs without explicit geometry reconstruction.
  - **Photon shot noise** — the fundamental quantum noise limit of photography, arising because photon arrival at a photosite follows a Poisson process; the signal-to-noise ratio of a shot-noise-limited measurement scales as sqrt(N) where N is the number of photons captured.
  - **[[Plenoptic Camera]]** — a camera that captures the full four-dimensional light field (two spatial dimensions and two angular dimensions) using a microlens array in front of the sensor, enabling post-capture refocus, synthetic aperture, and dense [[Depth Estimation]].
  - **[[Semantic Segmentation]]** — the dense per-pixel classification of an image into semantic object categories (sky, person, vehicle, vegetation), enabling spatially adaptive image enhancement tuned to each object class.
  - **[[Super Resolution]]** — the reconstruction of a high-resolution image from one or more low-resolution observations, inverting the downsampling and blurring operations of the [[Image Formation Model]] through learned or regularised optimisation.
  - **[[Tone Mapping]]** — the transformation of high dynamic range (HDR) scene radiance values into the limited dynamic range of a display or JPEG output whilst preserving perceived contrast and tonal relationships.

  ## Research & Literature

  1. Levoy, M. and Hanrahan, P. (1996). "Light Field Rendering." ACM SIGGRAPH, pp. 31–42.
  2. Debevec, P. E. and Malik, J. (1997). "Recovering High Dynamic Range Radiance Maps from Photographs." ACM SIGGRAPH, pp. 369–378.
  3. Raskar, R. and Tumblin, J. (2010). *Computational Photography: Mastering New Techniques for Lenses, Lighting, and Sensors*. AK Peters.
  4. Levoy, M. (2006). "Light Fields and Computational Imaging." *IEEE Computer*, 39(8), 46–55.
  5. Mertens, T., Kautz, J. and Van Reeth, F. (2009). "Exposure Fusion: A Simple and Practical Alternative to High Dynamic Range Photography." *Computer Graphics Forum*, 28(1), 161–171.
  6. Gharbi, M., et al. (2016). "Deep Joint Demosaicking and Denoising." ACM SIGGRAPH Asia. https://doi.org/10.1145/2980179.2982399
  7. Hasinoff, S. W., et al. (2016). "Burst Photography for High Dynamic Range and Low-Light Imaging on Mobile Cameras." ACM SIGGRAPH Asia. https://doi.org/10.1145/2980179.2980254
  8. Wadhwa, N., et al. (2018). "Synthetic Shallow Depth of Field on a Light-Field Camera." *IEEE TPAMI*, 40(4), 858–869.
  9. Mildenhall, B., et al. (2020). "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis." ECCV 2020. https://arxiv.org/abs/2003.08934
  10. Chen, C., et al. (2018). "Learning to See in the Dark." CVPR 2018. https://arxiv.org/abs/1805.01934
  11. Ignatov, A., et al. (2020). "Replacing Mobile Camera ISP with a Single Deep Learning Model." CVPR 2020. https://arxiv.org/abs/2002.05509
  12. Ranftl, R., et al. (2021). "Vision Transformers for Dense Prediction." ICCV 2021. https://arxiv.org/abs/2103.13413
  13. Wadhwa, N., et al. (2021). "Synthetic Defocus and Look-Ahead Autofocus for Casual Videography." ACM TOG, 40(4).
  14. Barron, J. T., et al. (2022). "Mip-NeRF 360: Unbounded Anti-Aliased Neural Radiance Fields." CVPR 2022. https://arxiv.org/abs/2111.12077
  15. Kokkinos, F. and Lefkimmiatis, S. (2019). "Iterative Joint Image Demosaicking and Denoising Using a Residual Denoising Network." *IEEE TIP*, 28(8), 4177–4188.
  16. Wang, Y., et al. (2023). "Disentangling Light Fields for Super-Resolution and Disparity Estimation." *IEEE TPAMI*, 45(1), 425–443.
  17. Suo, J., et al. (2023). "Computational Imaging and Artificial Intelligence: The Next Revolution of Mobile Vision." *Proceedings of the IEEE*, 111(7), 740–778.
  18. Chen, L., et al. (2024). "A Comprehensive Research on Light Field Imaging: Theory and Application." *IET Computer Vision*, 18(1).
  19. Yang, L., et al. (2024). "Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data." CVPR 2024. https://arxiv.org/abs/2401.10891
  20. Shin, C., et al. (2018). "Epinet: A Fully-Convolutional Neural Network Using Epipolar Geometry for Depth from Light Field Images." CVPR 2018.
  21. Raskar, R. and Tumblin, J. (2008). "Computational Photography." Course notes, ACM SIGGRAPH. https://web.media.mit.edu/~raskar/Adm/Book06Feb08/
  22. Xu, K., et al. (2025). "Learned Lightweight Smartphone ISP with Unpaired Data." arXiv:2505.10420. https://arxiv.org/abs/2505.10420
  23. AIM 2025 Challenge Organisers (2025). "AIM 2025 Challenge on Inverse Tone Mapping Report: Methods and Results." arXiv:2508.13479.
  24. Fortune Business Insights (2025). "Computational Photography Market Size, Share and Growth [2032]." https://www.fortunebusinessinsights.com/computational-photography-market-114204
  25. Ghosh, A. (2023). Research overview, Realistic Graphics and Imaging Group, Imperial College London. https://www.imperial.ac.uk/events/168332/computational-imaging-for-realistic-computer-graphics-and-beyond/
  26. Kitware (2024). "International Conference on Computational Photography (ICCP) 2024." https://www.kitware.com/international-conference-on-computational-photography-iccp-2024/
  27. Qualcomm Technologies (2024). "Snapdragon 8 Gen 3 Mobile Platform." Technical brief. https://www.qualcomm.com/products/mobile/snapdragon/smartphones/snapdragon-8-series-mobile-platforms/snapdragon-8-gen-3-mobile-platform
  28. AttestTrail (2026). "C2PA Cameras and Phones 2026: Nikon, Canon, Sony, Leica, Samsung, Pixel." https://attesttrail.com/blog/c2pa-cameras-support [C2PA hardware adoption status across camera and smartphone OEMs]

- ### Provenance
  - sources:: https://www.fortunebusinessinsights.com/computational-photography-market-114204, https://arxiv.org/abs/2505.10420, https://arxiv.org/abs/2401.10891, https://arxiv.org/abs/2003.08934, https://arxiv.org/abs/1805.01934, https://arxiv.org/abs/2002.05509, https://arxiv.org/abs/2103.13413, https://web.media.mit.edu/~raskar/Adm/Book06Feb08/, https://www.imperial.ac.uk/events/168332/computational-imaging-for-realistic-computer-graphics-and-beyond/, https://www.kitware.com/international-conference-on-computational-photography-iccp-2024/, https://arxiv.org/pdf/2503.19283, https://arxiv.org/pdf/2512.05635, https://attesttrail.com/blog/c2pa-cameras-support, https://www.softwareseni.com/c2pa-adoption-in-2026-hardware-platforms-and-verification-reality/, https://glyndewis.com/blog/mobile-photography-controversy, https://www.archyde.com/smartphone-cameras-entering-a-new-stage-of-development-whats-next/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

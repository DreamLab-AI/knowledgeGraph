public:: true

# ControlNet Conditioning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:control-net-conditioning",
  "@type": "Page",
  "vc:slug": "control-net-conditioning",
  "title": "ControlNet Conditioning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:stable-diffusion", "vc:label": "Stable Diffusion"},
    {"@id": "urn:visionflow:linked:latent-diffusion", "vc:label": "Latent Diffusion"},
    {"@id": "urn:visionflow:linked:u-net", "vc:label": "U-Net"},
    {"@id": "urn:visionflow:linked:zero-convolution", "vc:label": "Zero Convolution"},
    {"@id": "urn:visionflow:linked:classifier-free-guidance", "vc:label": "Classifier-Free Guidance"},
    {"@id": "urn:visionflow:linked:controlnet", "vc:label": "ControlNet"},
    {"@id": "urn:visionflow:linked:control-net-and-similar-spatial-conditioning-systems", "vc:label": "ControlNet and Similar Spatial Conditioning Systems"},
    {"@id": "urn:visionflow:linked:spatial-conditioning", "vc:label": "Spatial Conditioning"},
    {"@id": "urn:visionflow:linked:conditioning-signal", "vc:label": "Conditioning Signal"},
    {"@id": "urn:visionflow:linked:edge-detection", "vc:label": "Edge Detection"},
    {"@id": "urn:visionflow:linked:canny-edge-detection", "vc:label": "Canny Edge Detection"},
    {"@id": "urn:visionflow:linked:depth-estimation", "vc:label": "Depth Estimation"},
    {"@id": "urn:visionflow:linked:pose-estimation", "vc:label": "Pose Estimation"},
    {"@id": "urn:visionflow:linked:semantic-segmentation", "vc:label": "Semantic Segmentation"},
    {"@id": "urn:visionflow:linked:image-generation", "vc:label": "Image Generation"},
    {"@id": "urn:visionflow:linked:text-to-image", "vc:label": "Text-to-Image"},
    {"@id": "urn:visionflow:linked:conditional-image-generation", "vc:label": "Conditional Image Generation"},
    {"@id": "urn:visionflow:linked:generative-model", "vc:label": "Generative Model"},
    {"@id": "urn:visionflow:linked:fine-tuning", "vc:label": "Fine-Tuning"},
    {"@id": "urn:visionflow:linked:transfer-learning", "vc:label": "Transfer Learning"},
    {"@id": "urn:visionflow:linked:adapter-tuning", "vc:label": "Adapter Tuning"},
    {"@id": "urn:visionflow:linked:lora", "vc:label": "LoRA"},
    {"@id": "urn:visionflow:linked:ip-adapter", "vc:label": "IP-Adapter"},
    {"@id": "urn:visionflow:linked:textual-inversion", "vc:label": "Textual Inversion"},
    {"@id": "urn:visionflow:linked:t2i-adapter", "vc:label": "T2I-Adapter"},
    {"@id": "urn:visionflow:linked:comfyui-workflows", "vc:label": "ComfyUI Workflows"},
    {"@id": "urn:visionflow:linked:node-based-diffusion-pipeline-interface", "vc:label": "Node-Based Diffusion Pipeline Interface"},
    {"@id": "urn:visionflow:linked:fooocus", "vc:label": "Fooocus"},
    {"@id": "urn:visionflow:linked:automatic1111", "vc:label": "Automatic1111"},
    {"@id": "urn:visionflow:linked:hugging-face-diffusers", "vc:label": "Hugging Face Diffusers"},
    {"@id": "urn:visionflow:linked:openpose", "vc:label": "OpenPose"},
    {"@id": "urn:visionflow:linked:dwpose", "vc:label": "DWPose"},
    {"@id": "urn:visionflow:linked:midas-depth-estimation", "vc:label": "MiDaS Depth Estimation"},
    {"@id": "urn:visionflow:linked:computer-vision", "vc:label": "Computer Vision"},
    {"@id": "urn:visionflow:linked:convolutional-neural-network", "vc:label": "Convolutional Neural Network"},
    {"@id": "urn:visionflow:linked:neural-network-architecture", "vc:label": "Neural Network Architecture"},
    {"@id": "urn:visionflow:linked:backpropagation", "vc:label": "Backpropagation"},
    {"@id": "urn:visionflow:linked:image-synthesis", "vc:label": "Conditional Image Synthesis"},
    {"@id": "urn:visionflow:linked:video-generation", "vc:label": "Video Generation"},
    {"@id": "urn:visionflow:linked:animatediff", "vc:label": "AnimateDiff"},
    {"@id": "urn:visionflow:linked:inpainting", "vc:label": "Inpainting"},
    {"@id": "urn:visionflow:linked:image-to-image", "vc:label": "Image-to-Image"},
    {"@id": "urn:visionflow:linked:flux-1", "vc:label": "Flux.1"},
    {"@id": "urn:visionflow:linked:sdxl", "vc:label": "SDXL"},
    {"@id": "urn:visionflow:linked:generative-ai", "vc:label": "Generative AI"},
    {"@id": "urn:visionflow:linked:controlnet-plus-plus", "vc:label": "ControlNet++"},
    {"@id": "urn:visionflow:linked:controlnet-xs", "vc:label": "ControlNet-XS"},
    {"@id": "urn:visionflow:linked:skip-connection-injection", "vc:label": "Skip Connection Injection"},
    {"@id": "urn:visionflow:linked:architectural-visualisation", "vc:label": "Architectural Visualisation"},
    {"@id": "urn:visionflow:linked:pose-guided-image-generation", "vc:label": "Pose-Guided Image Generation"},
    {"@id": "urn:visionflow:linked:gpu-compute", "vc:label": "GPU Compute"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-net-conditioning",
  "@type": "Class",
  "label": "ControlNet Conditioning",
  "definition": "ControlNet conditioning is a technique that augments a pretrained diffusion model with an auxiliary network so generation can be steered by spatial control signals such as edge maps, depth, pose, or segmentation. The ControlNet branch copies the encoder of the base model and injects conditioning through zero-initialised connections, preserving the original weights while adding controllability. It gives image-generation pipelines precise structural control without retraining the base model.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
    {"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"},
    {"@id": "urn:ngm:class:adapter-tuning", "label": "Adapter Tuning"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:zero-convolution", "label": "Zero Convolution"},
      {"@id": "urn:ngm:class:u-net-encoder-copy", "label": "Trainable Encoder Copy"},
      {"@id": "urn:ngm:class:conditioning-signal", "label": "Conditioning Signal"},
      {"@id": "urn:ngm:class:skip-connection-injection", "label": "Skip Connection Injection"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Pretrained Diffusion Model"},
      {"@id": "urn:ngm:class:neural-network-architecture", "label": "Neural Network Architecture"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data Pairs"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:text-to-image", "label": "Text-to-Image"},
      {"@id": "urn:ngm:class:conditional-image-generation", "label": "Conditional Image Generation"},
      {"@id": "urn:ngm:class:pose-guided-image-generation", "label": "Pose-Guided Image Generation"},
      {"@id": "urn:ngm:class:video-generation", "label": "Video Generation"},
      {"@id": "urn:ngm:class:inpainting", "label": "Inpainting"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:adapter-tuning", "label": "Adapter Fine-tuning"},
      {"@id": "urn:ngm:class:spatial-conditioning", "label": "Spatial Conditioning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:u-net", "label": "U-Net"},
      {"@id": "urn:ngm:class:zero-convolution", "label": "Zero Convolution"},
      {"@id": "urn:ngm:class:classifier-free-guidance", "label": "Classifier-Free Guidance"},
      {"@id": "urn:ngm:class:openpose", "label": "OpenPose"},
      {"@id": "urn:ngm:class:dwpose", "label": "DWPose"},
      {"@id": "urn:ngm:class:midas", "label": "MiDaS Depth Estimation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:lora", "label": "LoRA"},
      {"@id": "urn:ngm:class:ip-adapter", "label": "IP-Adapter"},
      {"@id": "urn:ngm:class:textual-inversion", "label": "Textual Inversion"},
      {"@id": "urn:ngm:class:t2i-adapter", "label": "T2I-Adapter"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:control-net", "label": "ControlNet"},
      {"@id": "urn:ngm:class:control-net-and-similar-spatial-conditioning-systems", "label": "ControlNet and Similar Spatial Conditioning Systems"},
      {"@id": "urn:ngm:class:edge-detection", "label": "Edge Detection"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"},
      {"@id": "urn:ngm:class:semantic-segmentation", "label": "Semantic Segmentation"},
      {"@id": "urn:ngm:class:animatediff", "label": "AnimateDiff"},
      {"@id": "urn:ngm:class:flux-1", "label": "Flux.1"},
      {"@id": "urn:ngm:class:controlnet-plus-plus", "label": "ControlNet++"},
      {"@id": "urn:ngm:class:controlnet-xs", "label": "ControlNet-XS"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:comfyui-workflows", "label": "ComfyUI Workflows"},
      {"@id": "urn:ngm:class:automatic1111", "label": "Automatic1111"},
      {"@id": "urn:ngm:class:architectural-visualisation", "label": "Architectural Visualisation"},
      {"@id": "urn:ngm:class:image-to-image", "label": "Image-to-Image"},
      {"@id": "urn:ngm:class:fooocus", "label": "Fooocus"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:control-net", "label": "ControlNet"},
    {"@id": "urn:ngm:class:spatial-conditioning-mechanism", "label": "Spatial Conditioning Mechanism"}
  ],
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "EnrichmentEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:control-net-conditioning:b7d3e2f1a9c8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:control-net-conditioning"
  },
  "vc:resolutions": [
    {"raw": "[[Diffusion Model]]", "resolved": "urn:visionflow:linked:diffusion-model", "kind": "ResolvedLink"},
    {"raw": "[[Stable Diffusion]]", "resolved": "urn:visionflow:linked:stable-diffusion", "kind": "ResolvedLink"},
    {"raw": "[[Latent Diffusion]]", "resolved": "urn:visionflow:linked:latent-diffusion", "kind": "ResolvedLink"},
    {"raw": "[[U-Net]]", "resolved": "urn:visionflow:linked:u-net", "kind": "ResolvedLink"},
    {"raw": "[[Zero Convolution]]", "resolved": "urn:visionflow:linked:zero-convolution", "kind": "ResolvedLink"},
    {"raw": "[[Classifier-Free Guidance]]", "resolved": "urn:visionflow:linked:classifier-free-guidance", "kind": "ResolvedLink"},
    {"raw": "[[ControlNet]]", "resolved": "urn:visionflow:linked:controlnet", "kind": "ResolvedLink"},
    {"raw": "[[ControlNet and Similar Spatial Conditioning Systems]]", "resolved": "urn:visionflow:linked:control-net-and-similar-spatial-conditioning-systems", "kind": "ResolvedLink"},
    {"raw": "[[Spatial Conditioning]]", "resolved": "urn:visionflow:linked:spatial-conditioning", "kind": "StubLink"},
    {"raw": "[[Conditioning Signal]]", "resolved": "urn:visionflow:linked:conditioning-signal", "kind": "StubLink"},
    {"raw": "[[Edge Detection]]", "resolved": "urn:visionflow:linked:edge-detection", "kind": "ResolvedLink"},
    {"raw": "[[Canny Edge Detection]]", "resolved": "urn:visionflow:linked:canny-edge-detection", "kind": "StubLink"},
    {"raw": "[[Depth Estimation]]", "resolved": "urn:visionflow:linked:depth-estimation", "kind": "ResolvedLink"},
    {"raw": "[[Pose Estimation]]", "resolved": "urn:visionflow:linked:pose-estimation", "kind": "ResolvedLink"},
    {"raw": "[[Semantic Segmentation]]", "resolved": "urn:visionflow:linked:semantic-segmentation", "kind": "ResolvedLink"},
    {"raw": "[[Image Generation]]", "resolved": "urn:visionflow:linked:image-generation", "kind": "ResolvedLink"},
    {"raw": "[[Text-to-Image]]", "resolved": "urn:visionflow:linked:text-to-image", "kind": "ResolvedLink"},
    {"raw": "[[Conditional Image Generation]]", "resolved": "urn:visionflow:linked:conditional-image-generation", "kind": "StubLink"},
    {"raw": "[[Generative Model]]", "resolved": "urn:visionflow:linked:generative-model", "kind": "ResolvedLink"},
    {"raw": "[[Fine-Tuning]]", "resolved": "urn:visionflow:linked:fine-tuning", "kind": "ResolvedLink"},
    {"raw": "[[Transfer Learning]]", "resolved": "urn:visionflow:linked:transfer-learning", "kind": "ResolvedLink"},
    {"raw": "[[Adapter Tuning]]", "resolved": "urn:visionflow:linked:adapter-tuning", "kind": "StubLink"},
    {"raw": "[[LoRA]]", "resolved": "urn:visionflow:linked:lora", "kind": "ResolvedLink"},
    {"raw": "[[IP-Adapter]]", "resolved": "urn:visionflow:linked:ip-adapter", "kind": "ResolvedLink"},
    {"raw": "[[Textual Inversion]]", "resolved": "urn:visionflow:linked:textual-inversion", "kind": "ResolvedLink"},
    {"raw": "[[T2I-Adapter]]", "resolved": "urn:visionflow:linked:t2i-adapter", "kind": "StubLink"},
    {"raw": "[[ComfyUI Workflows]]", "resolved": "urn:visionflow:linked:comfyui-workflows", "kind": "ResolvedLink"},
    {"raw": "[[Node-Based Diffusion Pipeline Interface]]", "resolved": "urn:visionflow:linked:node-based-diffusion-pipeline-interface", "kind": "ResolvedLink"},
    {"raw": "[[Fooocus]]", "resolved": "urn:visionflow:linked:fooocus", "kind": "ResolvedLink"},
    {"raw": "[[Automatic1111]]", "resolved": "urn:visionflow:linked:automatic1111", "kind": "ResolvedLink"},
    {"raw": "[[Hugging Face Diffusers]]", "resolved": "urn:visionflow:linked:hugging-face-diffusers", "kind": "StubLink"},
    {"raw": "[[OpenPose]]", "resolved": "urn:visionflow:linked:openpose", "kind": "ResolvedLink"},
    {"raw": "[[DWPose]]", "resolved": "urn:visionflow:linked:dwpose", "kind": "StubLink"},
    {"raw": "[[MiDaS Depth Estimation]]", "resolved": "urn:visionflow:linked:midas-depth-estimation", "kind": "StubLink"},
    {"raw": "[[Computer Vision]]", "resolved": "urn:visionflow:linked:computer-vision", "kind": "ResolvedLink"},
    {"raw": "[[Convolutional Neural Network]]", "resolved": "urn:visionflow:linked:convolutional-neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network Architecture]]", "resolved": "urn:visionflow:linked:neural-network-architecture", "kind": "ResolvedLink"},
    {"raw": "[[Backpropagation]]", "resolved": "urn:visionflow:linked:backpropagation", "kind": "ResolvedLink"},
    {"raw": "[[Conditional Image Synthesis]]", "resolved": "urn:visionflow:linked:image-synthesis", "kind": "StubLink"},
    {"raw": "[[Video Generation]]", "resolved": "urn:visionflow:linked:video-generation", "kind": "ResolvedLink"},
    {"raw": "[[AnimateDiff]]", "resolved": "urn:visionflow:linked:animatediff", "kind": "StubLink"},
    {"raw": "[[Inpainting]]", "resolved": "urn:visionflow:linked:inpainting", "kind": "ResolvedLink"},
    {"raw": "[[Image-to-Image]]", "resolved": "urn:visionflow:linked:image-to-image", "kind": "ResolvedLink"},
    {"raw": "[[Flux.1]]", "resolved": "urn:visionflow:linked:flux-1", "kind": "ResolvedLink"},
    {"raw": "[[SDXL]]", "resolved": "urn:visionflow:linked:sdxl", "kind": "StubLink"},
    {"raw": "[[Generative AI]]", "resolved": "urn:visionflow:linked:generative-ai", "kind": "ResolvedLink"},
    {"raw": "[[ControlNet++]]", "resolved": "urn:visionflow:linked:controlnet-plus-plus", "kind": "StubLink"},
    {"raw": "[[ControlNet-XS]]", "resolved": "urn:visionflow:linked:controlnet-xs", "kind": "StubLink"},
    {"raw": "[[Skip Connection Injection]]", "resolved": "urn:visionflow:linked:skip-connection-injection", "kind": "StubLink"},
    {"raw": "[[Architectural Visualisation]]", "resolved": "urn:visionflow:linked:architectural-visualisation", "kind": "ResolvedLink"},
    {"raw": "[[Pose-Guided Image Generation]]", "resolved": "urn:visionflow:linked:pose-guided-image-generation", "kind": "StubLink"},
    {"raw": "[[GPU Compute]]", "resolved": "urn:visionflow:linked:gpu-compute", "kind": "StubLink"}
  ]
}
```

- ### Definition
  - ControlNet Conditioning is the process by which a pretrained [[Diffusion Model]] — most commonly a [[Latent Diffusion]] model such as [[Stable Diffusion]] — is augmented with a parallel auxiliary network, the [[ControlNet]], to accept spatially structured [[Conditioning Signal]]s as a second input stream alongside a text prompt, enabling pixel-level direction of the generative process through inputs such as [[Canny Edge Detection]] maps, [[Depth Estimation]] depth maps, [[Pose Estimation]] skeleton keypoints, [[Semantic Segmentation]] masks, surface normal maps, HED soft edges, line-art outlines, scribble sketches, and [[Inpainting]] masks. The architecture achieves this without any modification to the frozen base model by duplicating the [[U-Net]] encoder into a locked copy and a trainable copy, connecting them through [[Zero Convolution]] layers — 1×1 convolutions initialised to exactly zero weight and zero bias — that guarantee the trained branch injects zero signal at the start of [[Fine-Tuning]], so no gradient noise corrupts the pretrained backbone during the first steps. The [[Skip Connection Injection]] mechanism additively merges the trainable branch's intermediate activations into the frozen [[U-Net]] decoder at matching resolution levels, gradually coupling spatial information into generation as [[Backpropagation]] updates the zero-convolution weights away from zero. This graceful coupling mechanism confers strong resistance to catastrophic forgetting of the base model's distribution and text alignment, which makes ControlNet conditioning composable: multiple separately trained ControlNet branches (for instance, a [[Pose Estimation]] ControlNet and a [[Depth Estimation]] ControlNet used simultaneously) can be blended with per-branch weight coefficients at inference time. The conditioning mechanism is compatible with [[Classifier-Free Guidance]] because the spatial control is applied only to the conditional branch of the CFG score estimate, preserving the unconditioned branch. The approach is now a de facto standard [[Spatial Conditioning]] paradigm for open-source [[Generative AI]] workflows, implemented natively in [[Hugging Face Diffusers]], exposed as composable nodes in [[ComfyUI Workflows]] and the [[Node-Based Diffusion Pipeline Interface]], and accessible via the sd-webui-controlnet extension for [[Automatic1111]]; it has been extended to [[SDXL]], [[Flux.1]], and [[Stable Diffusion]] 3.5 base architectures, and underpins applications from digital art and [[Architectural Visualisation]] to [[Video Generation]] and medical image synthesis.

- ### Semantic Classification
  - owl-class:: ai:ControlNetConditioning
  - owl-role:: Concept | SpatialConditioningMechanism | GenerativeAITechnique
  - owl-inferred:: ai:AdapterTuningMethod, ai:DiffusionConditioningProtocol, ai:StructuralLayoutControl
  - belongs-to-domain:: [[Generative AI]]
  - implemented-in-layer:: [[Diffusion Model]]

- ### Relationships
  - is-subclass-of:: [[Generative Model]], [[Adapter Tuning]], [[Spatial Conditioning]]
  - has-part:: [[Zero Convolution]], [[Conditioning Signal]], [[Skip Connection Injection]], [[U-Net]]
  - requires:: [[Diffusion Model]], [[Neural Network Architecture]], [[GPU Compute]], [[Backpropagation]], [[Fine-Tuning]]
  - enables:: [[Image Generation]], [[Text-to-Image]], [[Conditional Image Generation]], [[Pose-Guided Image Generation]], [[Video Generation]], [[Inpainting]], [[Conditional Image Synthesis]]
  - implements:: [[Adapter Tuning]], [[Spatial Conditioning]], [[Transfer Learning]]
  - depends-on:: [[Latent Diffusion]], [[Stable Diffusion]], [[Convolutional Neural Network]], [[Classifier-Free Guidance]]
  - supports:: [[ComfyUI Workflows]], [[Automatic1111]], [[Fooocus]], [[Architectural Visualisation]], [[Image-to-Image]]
  - uses:: [[Diffusion Model]], [[Latent Diffusion]], [[U-Net]], [[Zero Convolution]], [[Classifier-Free Guidance]], [[OpenPose]], [[DWPose]], [[MiDaS Depth Estimation]], [[Canny Edge Detection]], [[Edge Detection]], [[Depth Estimation]], [[Pose Estimation]]
  - contrasts-with:: [[LoRA]], [[IP-Adapter]], [[Textual Inversion]], [[T2I-Adapter]]
  - related-to:: [[ControlNet]], [[ControlNet and Similar Spatial Conditioning Systems]], [[ControlNet++]], [[ControlNet-XS]], [[Semantic Segmentation]], [[AnimateDiff]], [[Flux.1]], [[SDXL]], [[Computer Vision]], [[Generative AI]], [[Hugging Face Diffusers]]
  - standardized-by:: [[Hugging Face Diffusers]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ZeroConvolution))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:TrainableEncoderCopy))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ConditioningSignal))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:SkipConnectionInjection))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ConditioningPreprocessor))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:LockedUNetEncoder))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:ConditioningWeight))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:hasPart ai:MultiConditionComposer))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:requires ai:PretrainedDiffusionModel))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:requires ai:NeuralNetworkArchitecture))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:requires ai:TrainingDataPairs))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:LatentDiffusion))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:ClassifierFreeGuidance))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:dependsOn ai:ConvolutionalNeuralNetwork))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:ImageGeneration))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:TextToImage))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:ConditionalImageGeneration))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:PoseGuidedImageGeneration))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:VideoGeneration))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:enables ai:Inpainting))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:supports ai:ArchitecturalVisualisation))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:supports ai:ComfyUIWorkflows))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:implements ai:AdapterTuning))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:implements ai:SpatialConditioning))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:implements ai:TransferLearning))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:uses ai:ZeroConvolution))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:uses ai:UNet))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:uses ai:OpenPose))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:uses ai:MiDaS))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:uses ai:ClassifierFreeGuidance))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:reducesTo ai:DiffusionModel))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:reducesTo ai:AdapterTuning))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:isSubclassOf ai:GenerativeModel))
      SubClassOf(ai:ControlNetConditioning
        ObjectSomeValuesFrom(ai:isSubclassOf ai:SpatialConditioningMechanism))
      ```

  - ## About
    - ControlNet Conditioning addresses a fundamental limitation of text-to-image [[Diffusion Model]]s: text prompts are semantically expressive but spatially imprecise. When a [[Generative AI]] system is asked to produce "a woman walking down a cobbled street in autumn light," no amount of prompt engineering reliably controls the exact body pose, depth layering, structural composition, or limb configuration of the result. ControlNet conditioning introduces a second, structured input — a spatial [[Conditioning Signal]] derived from [[Computer Vision]] preprocessing tools — that constrains the generative process at the pixel level. The conditioning signal could be a [[Canny Edge Detection]] binary edge map, a monocular [[Depth Estimation]] heat map (from MiDaS or ZoeDepth), a 2D skeleton keypoint diagram from [[Pose Estimation]] tools such as [[OpenPose]] or [[DWPose]], a [[Semantic Segmentation]] class mask, a surface normal map, a soft-edge HED map, a user-drawn scribble, or a binary [[Inpainting]] mask — each modality trained separately on paired (conditioning image, target image) datasets. The core innovation enabling this is the [[Zero Convolution]] bridge: rather than inserting the conditioning branch's activations directly into the frozen model (which would inject random noise at initialisation and destroy the pretrained distribution), the zero-initialised 1×1 convolutions begin by contributing exactly zero to every decoder layer. As [[Backpropagation]] drives training on the conditioning pairs, the zero-convolution weights diverge from zero in a controlled gradient-driven manner, smoothly coupling spatial information into generation without any discontinuous disruption to the base model's learned distribution. This property of graceful coupling distinguishes ControlNet from earlier approaches and explains its remarkable compatibility with diverse checkpoint variants fine-tuned from the same base model.

    - The conditioning mechanism integrates with [[Classifier-Free Guidance]] (CFG), the standard inference-time technique used in [[Stable Diffusion]] and related models to amplify the influence of the text conditioning signal. In CFG, the model computes two score estimates: a conditional score given the text prompt, and an unconditional score given an empty prompt; the final score is the conditional score plus a guidance scale multiplier times the difference. ControlNet conditioning is applied only to the conditional pass: the frozen base model's unconditional pass remains spatially unconditioned, while the ControlNet activations are injected into the conditional pass. This ensures that the spatial guidance acts in the same direction as text guidance and the CFG amplification mechanism remains coherent. Multiple ControlNet branches can be composed at inference time by linearly blending their respective intermediate activations into the frozen decoder, with independently tunable weight coefficients for each branch. This composability is practically significant: an artist can simultaneously apply a [[Pose Estimation]] ControlNet (to fix character body pose), a [[Depth Estimation]] ControlNet (to preserve scene depth layering), and a [[Canny Edge Detection]] ControlNet (to preserve structural outlines) in the same generation pass, with each constraint contributing proportionally to its assigned weight.

    - The broader ControlNet Conditioning paradigm has spawned a lineage of variants. [[ControlNet++]] (Li et al., 2024, ECCV) addresses alignment between the generated image and the conditioning map by adding pixel-level cycle consistency loss — computing the conditioning map back from the generated image and penalising the discrepancy — achieving gains of 11.1% mIoU, 13.4% SSIM, and 7.6% RMSE improvement over the original ControlNet across diverse modalities. [[ControlNet-XS]] (Zavadski et al., 2024, ECCV) reimagines the architecture to reduce parameter count and accelerate inference by approximately two times through enhanced communication bandwidth between the control branch and the generation backbone, sacrificing some precision for efficiency. UniControlNet (Zhao et al., 2023) unifies multiple conditioning modalities into a single adapter network rather than requiring separate per-modality checkpoints, enabling conditioning type selection at inference time without loading different model files.

  - ## Components / Architecture
    - **Locked U-Net encoder** — the frozen pretrained encoder of [[Stable Diffusion]] or another [[Latent Diffusion]] model. Weights never update during ControlNet training. Provides the generative backbone and text-semantic feature extraction.
    - **Trainable encoder copy** — an exact structural copy of the locked encoder whose weights are unconstrained. Receives the conditioning image (edge map, depth map, pose skeleton, etc.) as input and learns to extract spatially precise conditioning features through [[Fine-Tuning]] on paired datasets.
    - **[[Zero Convolution]] layers** — 1×1 [[Convolutional Neural Network]] layers with weight matrix and bias vector both initialised to zero. They bridge the trainable branch outputs to the locked decoder's skip connections. The zero initialisation guarantees that the conditioning signal has zero influence at training step 0, preventing destabilisation of the pretrained base.
    - **[[Skip Connection Injection]]** — the mechanism by which trainable encoder activations are additively combined with the frozen U-Net decoder's own skip connections at each matching resolution level (64×64, 32×32, 16×16, 8×8 in standard SD 1.5). The addition is element-wise; the locked model's skip connections are not removed, only augmented.
    - **Conditioning preprocessors** — external [[Computer Vision]] tools that transform raw images into the target conditioning modality: Canny edge detector, MiDaS / ZoeDepth for [[Depth Estimation]], [[OpenPose]] / [[DWPose]] for [[Pose Estimation]], HED / PIDI for soft edges, M-LSD for straight lines, Segment Anything Model for segmentation masks, Zoe for surface normals.
    - **Conditioning weight coefficient** — a scalar multiplier applied at inference to each ControlNet branch's activation contribution, enabling users to tune the balance between spatial fidelity and text-driven diversity. Setting weight to 0 disables spatial conditioning; setting it above 1.0 enforces conditioning more aggressively.
    - **Multi-ControlNet composition** — multiple ControlNet branches operating simultaneously on the same base model. Each branch independently computes activations from its conditioning signal, and the results are summed into the frozen decoder with per-branch weight coefficients.
    - **[[Classifier-Free Guidance]] integration** — the conditioning is applied to the conditional score estimate only; the unconditional (empty-prompt) pass uses only the frozen base model, preserving the CFG contrast mechanism.

  - ## Control Modalities
    - **Canny edges** — binarised edge maps from the Canny gradient detector. Constrains structural outlines; useful for line-art recolouring, architectural plans, and sketch-to-photorealistic generation.
    - **[[Depth Estimation]] (MiDaS, ZoeDepth)** — monocular depth heat maps. Controls 3D perspective, distance layering, and spatial arrangement of scene elements.
    - **[[Pose Estimation]] (OpenPose, DWPose)** — 2D keypoint body skeleton maps. Controls exact character body pose; the dominant modality for digital art, animation pipeline character generation, and virtual try-on.
    - **HED soft edges / PIDI** — holistically nested edge detection or pixel difference networks produce thicker, more artistic edge maps than Canny; preferred for illustration and concept art styles.
    - **[[Semantic Segmentation]] masks** — class-labelled per-pixel maps (ADE20K palette, etc.). Guide spatial layout and object placement at scene level.
    - **Scribbles** — informal user-drawn outlines; enables rapid compositional control without precise preprocessing tools.
    - **Surface normal maps** — per-pixel surface orientation vectors. Useful for relighting and 3D-consistent texture synthesis.
    - **Line-art and anime line-art** — fine-structured binary outlines for illustration generation maintaining exact drawn linework.
    - **[[Inpainting]] ControlNet** — binary masks that identify regions to regenerate while preserving the rest of the image geometry.
    - **Segment Anything (SAM) masks** — high-quality segmentation from SAM enables any user-selected region to serve as a conditioning mask.

  - ## Use Cases / Major Families
    - **Digital art and illustration**: Artists specify a body pose skeleton or rough sketch, then use ControlNet to generate detailed photorealistic or stylised renders precisely consistent with their spatial intent — overcoming the iterative trial-and-error of pure text prompting. Pose and edge conditioning are the most common workflows in the hobbyist and professional digital art communities using [[Automatic1111]] and [[ComfyUI Workflows]].
    - **[[Architectural Visualisation]]**: Depth or line-art conditioned ControlNets translate rough blueprints, perspective sketches, or 3D wireframes into photorealistic or conceptually styled architectural renders. Interior design studios use ControlNet to explore materials and lighting styles on a fixed spatial layout.
    - **Character animation and [[Video Generation]]**: [[Pose Estimation]] ControlNets drive temporally consistent character generation across video frames, integrated with motion modules like [[AnimateDiff]] (which provides temporal coherence) to produce animations conditioned on pose sequences extracted from reference video. AnimateDiff + ControlNet pipelines in [[ComfyUI Workflows]] are the standard tool for open-source AI character animation as of 2025.
    - **Virtual try-on and fashion**: Garment fitting applications overlay clothing onto target body pose skeletons extracted from reference images, maintaining garment texture while adapting to body geometry.
    - **Medical image synthesis**: Domain-specific ControlNets trained on CT and MRI datasets enable anatomy-conditioned synthesis for training data augmentation, preserving anatomical structural constraints in generated medical images.
    - **Game asset generation**: Concept artists use edge and depth conditioned generation to produce consistent 3D-perspective game environment and character renders from rough concept sketches, maintaining spatial coherence across an asset library.
    - **Cartographic stylisation**: Depth or segmentation conditioned generation transforms satellite imagery or map tiles into illustrated, thematic, or painterly map styles.
    - **Industrial and scientific visualisation**: Scientific visualisation workflows use ControlNet to translate schematic diagrams or simulation outputs into visually polished images for publications and presentations, conditioned on the spatial structure of the scientific content.

  - ## Academic Context
    - ControlNet conditioning originates from Zhang et al.'s paper "Adding Conditional Control to Text-to-Image Diffusion Models" (2023, ICCV), which introduced the [[Zero Convolution]] architecture and demonstrated the technique across fifteen conditioning modalities on [[Stable Diffusion]] v1.5. The paper became one of the most cited generative AI papers of 2023, driving immediate adoption across the open-source diffusion ecosystem and establishing the zero-convolution bridge as a canonical [[Adapter Tuning]] pattern for [[Diffusion Model]]s.
    - The [[Latent Diffusion]] foundation was established by Rombach et al. (2022, CVPR) in the Stable Diffusion paper, which introduced the [[Latent Diffusion]] paradigm of operating the diffusion process in the compressed latent space of a [[Variational Autoencoder]] rather than in pixel space, dramatically reducing compute requirements. Podell et al.'s SDXL (2023) extended this to larger model capacities and 1024×1024 generation, and ControlNet variants for SDXL followed shortly after.
    - Closely related work includes T2I-Adapter (Mou et al., 2024, AAAI), which provides lighter-weight spatial conditioning through smaller adapter modules without duplicating the full encoder, offering faster training but typically less precise spatial control than full ControlNet. IP-Adapter (Ye et al., 2023) provides cross-attention-based image-prompt conditioning for appearance reference rather than structural layout, and is complementary to ControlNet rather than competing: a pipeline can simultaneously use ControlNet for spatial structure and IP-Adapter for style/appearance. InstantID (Wang et al., 2024) extends the paradigm to identity-preserving portrait generation using face embedding injection alongside ControlNet-style architecture.
    - Research on [[ControlNet++]] (Li et al., 2024, ECCV) demonstrated that the original ControlNet's conditioning was often imprecise at the pixel level, with generated images that approximate but do not exactly reproduce the conditioning map. The cycle consistency feedback approach of ControlNet++ substantially improved conditioning fidelity metrics. [[ControlNet-XS]] (Zavadski et al., 2024, ECCV) analysed the information bottleneck in the original architecture and showed that enhanced bidirectional communication between the control and generation branches improves efficiency without sacrificing control quality.
    - The extension of ControlNet conditioning to [[Flux.1]] (Black Forest Labs, 2024) — a DiT-based (Diffusion Transformer) rather than U-Net-based architecture — required adapting the zero-convolution injection mechanism to the transformer attention architecture, a non-trivial transfer given the architectural differences. The InstantX Team released [[Flux.1]] ControlNet checkpoints for Canny, depth, and pose conditioning in 2024; performance is comparable to SDXL ControlNet in quality but with significantly higher VRAM requirements (12 GB or more) and slower inference speed (2–3x slower than SDXL).

  - ## Current Landscape (2026)
    - As of early 2026, ControlNet conditioning is an established capability across all major open-source diffusion model ecosystems. The [[Stable Diffusion]] v1.5 / SD 2.x ecosystem has the widest catalogue of community-trained ControlNet checkpoints across modalities, artistic styles, and domain-specific applications, hosted on the Hugging Face Hub. [[SDXL]] ControlNets provide higher-resolution control (1024×1024) with improved detail; [[Hugging Face Diffusers]] provides first-class API support for both SD 1.5 and SDXL ControlNet pipelines via `ControlNetModel` and `StableDiffusionControlNetPipeline` classes. Stability AI released ControlNet Depth, Canny, and Blur variants for Stable Diffusion 3.5 Large in 2024, competing with Black Forest Labs' Flux.1 Tools suite in high-quality spatial conditioning. InstantX and Shakker-Labs have released FLUX ControlNet-Union-Pro and ControlNet-Union-Pro-2.0 checkpoints that unify multiple conditioning modalities in a single model file, reducing the complexity of multi-ControlNet workflows for FLUX-based pipelines.
    - [[ComfyUI Workflows]] (the [[Node-Based Diffusion Pipeline Interface]]) has become the dominant tool for sophisticated ControlNet conditioning pipelines among advanced users, supporting arbitrary multi-ControlNet compositions, ControlNet + LoRA combinations, ControlNet + IP-Adapter combinations, and integration with video generation pipelines. [[Automatic1111]] via the sd-webui-controlnet extension (lllyasviel/sd-webui-controlnet, with 15,000+ GitHub stars as of 2025) remains the primary GUI interface for casual and professional digital artists. [[Fooocus]] provides a simplified ControlNet interface for users who find the full AUTOMATIC1111 or ComfyUI interface complex.
    - The integration of ControlNet conditioning with [[AnimateDiff]] for video generation represents the most active development frontier in community workflows. The combination uses AnimateDiff's temporal motion modules for frame-to-frame coherence while ControlNet enforces per-frame spatial constraints from pose or depth sequences extracted from reference video, enabling consistent character animation at quality approaching professional VFX standards.
    - In enterprise and professional contexts, Adobe Firefly, Stability AI's API, and Runway have incorporated conditioning mechanisms analogous to ControlNet into their commercial APIs, though typically with less granular user control than the open-source tools.

  - ## UK Context
    - In the United Kingdom, ControlNet conditioning is used across digital creative industries, visual effects, and academic [[Computer Vision]] research. The creative technology sector in London — including VFX studios in Soho and Clerkenwell, game development studios such as Rockstar North (Edinburgh), Rare (Twycross), and Creative Assembly (Horsham) — uses spatial conditioning tools in concept art, pre-visualisation, and asset generation pipelines. The UK's creative AI policy framework (DCMS AI and Creative Industries review, 2024) engages directly with generative tools including spatial conditioning models.
    - University of Edinburgh's School of Informatics, which houses the ILCC (Institute for Language, Cognition and Computation), has research programmes in [[Computer Vision]] and [[Generative AI]] that engage with diffusion model conditioning. Heriot-Watt University's Edinburgh Centre for Robotics conducts research in visually grounded robotic systems where spatial conditioning principles intersect with [[Pose Estimation]] and scene understanding. University College London's Computational Media Lab and Centre for Digital Innovation are active in generative visual tools, including conditioning mechanisms for controllable image synthesis. Imperial College London's Digital Media Group and Visual Information Processing group conduct research on [[Semantic Segmentation]] and visual understanding that provides conditioning map inputs.
    - The Hartree Centre (Daresbury, Cheshire) and the Alan Turing Institute provide access to [[GPU Compute]] for academic research on diffusion models; Northern English universities (Leeds, Manchester, Sheffield) have applied ControlNet conditioning in interdisciplinary projects combining textile design (Sheffield Hallam Digital Futures), fashion tech (Leeds Arts University), and architectural concept design (Manchester School of Architecture).
    - The UK's Film and TV industry — particularly the BBC, Channel 4, and independent animation studios in Bristol and Manchester — is exploring ControlNet conditioning for scene concept visualisation, storyboard elaboration, and animatic production, benefiting from BAFTA-partnered AI in creative production workshops organised in 2024-2025.

  - ## Future Directions (2026-2030)
    - **Diffusion Transformer (DiT) native conditioning**: As DiT-based architectures ([[Flux.1]], SD 3.x, Sora) displace U-Net architectures, zero-convolution conditioning mechanisms will evolve to operate on transformer attention blocks rather than convolutional skip connections, requiring rethinking of the injection architecture. Research on Ctrl-X (2024) has explored training-free spatial control for DiT models.
    - **Training-free conditioning**: Methods such as Ctrl-X (Ge et al., 2024) achieve spatial conditioning from reference images without fine-tuning any ControlNet weights, using attention manipulation within the frozen model. If these approaches mature, the need to train per-modality ControlNet checkpoints diminishes, enabling rapid deployment of novel conditioning types.
    - **Unified multi-modal conditioning**: UniControlNet and subsequent work points toward a single adapter that handles arbitrary conditioning modalities dynamically specified at inference, eliminating the current proliferation of per-modality checkpoint files.
    - **Temporal ControlNet for video generation**: Current AnimateDiff + ControlNet pipelines process conditioning maps frame-by-frame; future architectures will incorporate temporal conditioning consistency into the ControlNet mechanism itself, enabling smoother conditioning transitions across time and better integration with emerging video diffusion models.
    - **Reinforcement learning for conditioning**: Lee et al. (2025, WACVW) explored using RL feedback to improve conditioning adherence beyond what is achievable with supervised fine-tuning alone, pointing toward RL-from-human-feedback approaches analogous to RLHF in language model alignment applied to spatial conditioning fidelity.
    - **3D-native spatial conditioning**: Extensions of ControlNet conditioning to 3D generation models (e.g., conditioning on point clouds, 3D bounding boxes, or multi-view depth) will enable spatially precise 3D asset generation for game, architecture, and industrial design workflows.

  - ## Research & Literature
    - 1. Zhang, L., Rao, A., & Agrawala, M. (2023). Adding conditional control to text-to-image diffusion models. In *Proceedings of ICCV 2023*, 3836–3847. arXiv:2302.05543. https://arxiv.org/abs/2302.05543
    - 2. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-resolution image synthesis with latent diffusion models. In *Proceedings of CVPR 2022*, 10684–10695. arXiv:2112.10752.
    - 3. Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion probabilistic models. *Advances in NeurIPS*, 33, 6840–6851. arXiv:2006.11239.
    - 4. Song, Y., et al. (2021). Score-based generative modeling through stochastic differential equations. In *Proceedings of ICLR 2021*. arXiv:2011.13456.
    - 5. Podell, D., et al. (2023). SDXL: Improving latent diffusion models for high-resolution image synthesis. arXiv:2307.01952. https://arxiv.org/abs/2307.01952
    - 6. Mou, C., Wang, X., Xie, L., Wu, Y., Zhang, J., Qi, Z., & Shan, Y. (2024). T2I-Adapter: Learning adapters to dig out more controllable ability for text-to-image diffusion models. In *Proceedings of AAAI 2024*. arXiv:2302.08453.
    - 7. Ye, H., Zhang, J., Liu, S., Han, X., & Yang, W. (2023). IP-Adapter: Text compatible image prompt adapter for text-to-image diffusion models. arXiv:2308.06721. https://arxiv.org/abs/2308.06721
    - 8. Li, M., et al. (2024). ControlNet++: Improving conditional controls with efficient consistency feedback. In *Proceedings of ECCV 2024*. arXiv:2404.07987. https://arxiv.org/abs/2404.07987
    - 9. Zavadski, D., et al. (2024). ControlNet-XS: Rethinking the control of text-to-image diffusion models as feedback-control systems. In *Proceedings of ECCV 2024*. arXiv:2312.06573.
    - 10. Wang, Q., et al. (2024). InstantID: Zero-shot identity-preserving generation in seconds. arXiv:2401.07519. https://arxiv.org/abs/2401.07519
    - 11. Zhao, S., et al. (2023). UniControlNet: All-in-one control to text-to-image diffusion models. In *Advances in NeurIPS 2023*. arXiv:2305.16322.
    - 12. Cao, Z., et al. (2017). Realtime multi-person 2D pose estimation using part affinity fields. In *Proceedings of CVPR 2017*. (OpenPose foundation paper.)
    - 13. Yang, T., et al. (2023). Effective whole-body pose estimation with two-stages distillation. In *Proceedings of ICCV 2023 Workshop*. (DWPose paper.) arXiv:2307.15880.
    - 14. Ranftl, R., et al. (2020). Towards robust monocular depth estimation: Mixing datasets for zero-shot cross-dataset transfer. *IEEE TPAMI*, 44(3), 1623–1637. (MiDaS.)
    - 15. Ho, J., & Salimans, T. (2022). Classifier-free diffusion guidance. arXiv:2207.12598. https://arxiv.org/abs/2207.12598
    - 16. Hu, E. J., et al. (2021). LoRA: Low-rank adaptation of large language models. In *Proceedings of ICLR 2022*. arXiv:2106.09685.
    - 17. Guo, Y., et al. (2023). AnimateDiff: Animate your personalized text-to-image diffusion models without specific tuning. arXiv:2307.04725. https://arxiv.org/abs/2307.04725
    - 18. Ma, X., et al. (2024). Unified diffusion-based rigidity and reconstruction pipeline for dense video optical flow estimation. (ControlVideo temporal consistency. arXiv:2312.06400.)
    - 19. Xia, M., et al. (2023). Diffusion-based scene graph to image generation with masked contrastive pre-training. (Soft edge reference, PIDI context.) arXiv:2211.11138.
    - 20. Mokady, R., et al. (2023). Null-text inversion for editing real images using guided diffusion models. In *Proceedings of CVPR 2023*. arXiv:2211.09794.
    - 21. Ge, S., et al. (2024). Ctrl-X: Controlling structure and appearance for text-to-image generation without guidance. arXiv:2406.07540.
    - 22. Lee, J., et al. (2025). Reinforcement learning for ControlNet conditioning fidelity. *WACV Workshop on Generative Models for Computer Vision*.
    - 23. Chen, Z., et al. (2025). SmartSpatial: Enhancing the 3D spatial arrangement capabilities of stable diffusion models. In *Proceedings of IJCAI 2025*. arXiv:2501.04934.
    - 24. Peng, S., et al. (2023). Animate anyone: Consistent and controllable image-to-video synthesis for character animation. arXiv:2311.17117.
    - 25. Black Forest Labs. (2024). FLUX.1 model series — technical report. https://blackforestlabs.ai/announcing-black-forest-labs/
    - 26. InstantX Team. (2024). FLUX ControlNet — Hugging Face model documentation. https://huggingface.co/docs/diffusers/api/pipelines/controlnet_flux
    - 27. Stability AI. (2024). Stable Diffusion 3.5 Large ControlNets announcement. https://stability.ai/

- ### Provenance
  - sources:: https://arxiv.org/abs/2302.05543; https://arxiv.org/abs/2404.07987; https://arxiv.org/abs/2308.06721; https://huggingface.co/docs/diffusers/api/pipelines/controlnet_flux; https://dl.acm.org/doi/10.1007/978-3-031-72667-5_8; https://arxiv.org/abs/2307.01952; https://arxiv.org/abs/2401.07519; https://stability.ai/; https://arxiv.org/pdf/2502.06805
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

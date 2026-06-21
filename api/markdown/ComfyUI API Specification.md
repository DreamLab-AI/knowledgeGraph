public:: true

# ComfyUI API Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:comfy-ui-api-specification",
  "@type": "Page",
  "vc:slug": "comfy-ui-api-specification",
  "title": "ComfyUI API Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:generative-ai", "vc:label": "Generative AI"},
    {"@id": "urn:visionflow:linked:comfy-ui-workflows", "vc:label": "ComfyUI Workflows"},
    {"@id": "urn:visionflow:linked:comfy-ui-client", "vc:label": "ComfyUI Client"},
    {"@id": "urn:visionflow:linked:comfy-ui-manager", "vc:label": "ComfyUI Manager"},
    {"@id": "urn:visionflow:linked:comfy-ui", "vc:label": "ComfyUI"},
    {"@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow"},
    {"@id": "urn:visionflow:linked:content-creation-pipeline", "vc:label": "Content Creation Pipeline"},
    {"@id": "urn:visionflow:linked:rest-api", "vc:label": "REST API"},
    {"@id": "urn:visionflow:linked:web-socket-protocol", "vc:label": "WebSocket Protocol"},
    {"@id": "urn:visionflow:linked:json-serialisation", "vc:label": "JSON Serialisation"},
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:stable-diffusion", "vc:label": "Stable Diffusion"},
    {"@id": "urn:visionflow:linked:text-to-image-generation", "vc:label": "Text-to-Image Generation"},
    {"@id": "urn:visionflow:linked:image-to-image-generation", "vc:label": "Image-to-Image Generation"},
    {"@id": "urn:visionflow:linked:video-generation", "vc:label": "Video Generation"},
    {"@id": "urn:visionflow:linked:control-net", "vc:label": "ControlNet"},
    {"@id": "urn:visionflow:linked:lo-ra", "vc:label": "LoRA"},
    {"@id": "urn:visionflow:linked:directed-acyclic-graph-execution", "vc:label": "Directed Acyclic Graph Execution"},
    {"@id": "urn:visionflow:linked:workflow-execution-engine", "vc:label": "Workflow Execution Engine"},
    {"@id": "urn:visionflow:linked:workflow-json-format", "vc:label": "Workflow JSON Format"},
    {"@id": "urn:visionflow:linked:gpu-compute", "vc:label": "GPU Compute"},
    {"@id": "urn:visionflow:linked:py-torch", "vc:label": "PyTorch"},
    {"@id": "urn:visionflow:linked:python-runtime", "vc:label": "Python Runtime"},
    {"@id": "urn:visionflow:linked:aiohttp", "vc:label": "aiohttp"},
    {"@id": "urn:visionflow:linked:inference-orchestration-system", "vc:label": "Inference Orchestration System"},
    {"@id": "urn:visionflow:linked:latent-diffusion-pipeline", "vc:label": "Latent Diffusion Pipeline"},
    {"@id": "urn:visionflow:linked:ksampler", "vc:label": "KSampler"},
    {"@id": "urn:visionflow:linked:checkpoint-loader", "vc:label": "CheckpointLoader"},
    {"@id": "urn:visionflow:linked:vae", "vc:label": "VAE"},
    {"@id": "urn:visionflow:linked:clip", "vc:label": "CLIP"},
    {"@id": "urn:visionflow:linked:ip-adapter", "vc:label": "IP-Adapter"},
    {"@id": "urn:visionflow:linked:sdxl", "vc:label": "SDXL"},
    {"@id": "urn:visionflow:linked:flux-1", "vc:label": "Flux.1"},
    {"@id": "urn:visionflow:linked:animate-diff", "vc:label": "AnimateDiff"},
    {"@id": "urn:visionflow:linked:image-generation", "vc:label": "Image Generation"},
    {"@id": "urn:visionflow:linked:inpainting", "vc:label": "Inpainting"},
    {"@id": "urn:visionflow:linked:model-checkpoint", "vc:label": "Model Checkpoint"},
    {"@id": "urn:visionflow:linked:invoke-ai", "vc:label": "InvokeAI"},
    {"@id": "urn:visionflow:linked:automatic1111-web-ui", "vc:label": "AUTOMATIC1111 WebUI"},
    {"@id": "urn:visionflow:linked:hugging-face-hub", "vc:label": "Hugging Face Hub"},
    {"@id": "urn:visionflow:linked:batch-image-processing", "vc:label": "Batch Image Processing"},
    {"@id": "urn:visionflow:linked:node-based-visual-programming", "vc:label": "Node-Based Visual Programming"},
    {"@id": "urn:visionflow:linked:latent-tensor", "vc:label": "Latent Tensor"},
    {"@id": "urn:visionflow:linked:workflow-serialisation", "vc:label": "Workflow Serialisation"},
    {"@id": "urn:visionflow:linked:comfy-org-git-hub-organisation", "vc:label": "Comfy-Org GitHub Organisation"},
    {"@id": "urn:visionflow:linked:workflow-node", "vc:label": "Workflow Node"},
    {"@id": "urn:visionflow:linked:node-link", "vc:label": "Node Link"},
    {"@id": "urn:visionflow:linked:png-metadata-embedding", "vc:label": "PNG Metadata Embedding"},
    {"@id": "urn:visionflow:linked:comfyanonymous-2023-comfy-ui", "vc:label": "comfyanonymous 2023 ComfyUI"},
    {"@id": "urn:visionflow:linked:tech-crunch-2026-comfy-ui-500-m-valuation", "vc:label": "TechCrunch 2026 ComfyUI $500M Valuation"},
    {"@id": "urn:visionflow:linked:salad-technologies-2024-comfyui-api", "vc:label": "Salad Technologies 2024 comfyui-api"},
    {"@id": "urn:visionflow:linked:view-comfy-2025-production-api-guide", "vc:label": "ViewComfy 2025 Production API Guide"},
    {"@id": "urn:visionflow:linked:bento-ml-2025-comfy-pack", "vc:label": "BentoML 2025 comfy-pack"},
    {"@id": "urn:visionflow:linked:comfy-org-2024-workflow-json-spec", "vc:label": "Comfy-Org 2024 Workflow JSON Spec"},
    {"@id": "urn:visionflow:linked:comfy-org-2025-workflow-templates", "vc:label": "Comfy-Org 2025 Workflow Templates"},
    {"@id": "urn:visionflow:linked:run-pod-2024-serverless-comfyui", "vc:label": "RunPod 2024 Serverless ComfyUI"},
    {"@id": "urn:visionflow:linked:openart-workflow-registry", "vc:label": "OpenArt Workflow Registry"},
    {"@id": "urn:visionflow:linked:civitai-workflow-sharing", "vc:label": "Civitai Workflow Sharing"},
    {"@id": "urn:visionflow:linked:comfy-ui-for-fashion-and-brands", "vc:label": "ComfyUI for Fashion and Brands"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-api-specification",
  "@type": "Class",
  "label": "ComfyUI API Specification",
  "definition": "The programmatic interface specification for ComfyUI, a node-based generative AI workflow engine, defining JSON-serialised graph representations (prompt API), WebSocket-based progress streaming, queue management endpoints, and model loading conventions that allow headless or remote execution of image and video generation pipelines.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-workflows", "label": "ComfyUI Workflows"},
    {"@id": "urn:ngm:class:rest-api", "label": "REST API"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:prompt-endpoint", "label": "Prompt Endpoint"},
      {"@id": "urn:ngm:class:web-socket-protocol", "label": "WebSocket Protocol"},
      {"@id": "urn:ngm:class:queue-management-api", "label": "Queue Management API"},
      {"@id": "urn:ngm:class:object-info-endpoint", "label": "Object Info Endpoint"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-client", "label": "ComfyUI Client"},
      {"@id": "urn:ngm:class:json-serialisation", "label": "JSON Serialisation"},
      {"@id": "urn:ngm:class:aiohttp", "label": "aiohttp"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-creation-pipeline", "label": "Content Creation Pipeline"},
      {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-for-fashion-and-brands", "label": "ComfyUI for Fashion and Brands"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:batch-image-processing", "label": "Batch Image Processing"},
      {"@id": "urn:ngm:class:inference-orchestration-system", "label": "Inference Orchestration System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:comfy-ui", "label": "ComfyUI"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:python-runtime", "label": "Python Runtime"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:directed-acyclic-graph-execution", "label": "Directed Acyclic Graph Execution"},
      {"@id": "urn:ngm:class:workflow-json-format", "label": "Workflow JSON Format"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:node-based-diffusion-pipeline-interface-manager", "label": "ComfyUI Manager"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:invoke-ai", "label": "InvokeAI"},
      {"@id": "urn:ngm:class:automatic1111-web-ui", "label": "AUTOMATIC1111 WebUI"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:invoke-ai", "label": "InvokeAI"},
      {"@id": "urn:ngm:class:automatic1111-web-ui", "label": "AUTOMATIC1111 WebUI"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:comfy-org-git-hub-organisation", "label": "Comfy-Org GitHub Organisation"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:comfy-ui-api-specification:e4a9b2c1d37f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:comfy-ui-api-specification"
  },
  "vc:resolutions": [
    {"raw": "[[Generative AI]]", "resolved": "urn:visionflow:linked:generative-ai", "kind": "StubLink"},
    {"raw": "[[ComfyUI Workflows]]", "resolved": "urn:visionflow:linked:comfy-ui-workflows", "kind": "StubLink"},
    {"raw": "[[ComfyUI Client]]", "resolved": "urn:visionflow:linked:comfy-ui-client", "kind": "StubLink"},
    {"raw": "[[ComfyUI Manager]]", "resolved": "urn:visionflow:linked:comfy-ui-manager", "kind": "StubLink"},
    {"raw": "[[ComfyUI]]", "resolved": "urn:visionflow:linked:comfy-ui", "kind": "StubLink"},
    {"raw": "[[Agentic Workflow]]", "resolved": "urn:visionflow:linked:agentic-workflow", "kind": "StubLink"},
    {"raw": "[[Content Creation Pipeline]]", "resolved": "urn:visionflow:linked:content-creation-pipeline", "kind": "StubLink"},
    {"raw": "[[REST API]]", "resolved": "urn:visionflow:linked:rest-api", "kind": "StubLink"},
    {"raw": "[[WebSocket Protocol]]", "resolved": "urn:visionflow:linked:web-socket-protocol", "kind": "StubLink"},
    {"raw": "[[JSON Serialisation]]", "resolved": "urn:visionflow:linked:json-serialisation", "kind": "StubLink"},
    {"raw": "[[Diffusion Model]]", "resolved": "urn:visionflow:linked:diffusion-model", "kind": "StubLink"},
    {"raw": "[[Stable Diffusion]]", "resolved": "urn:visionflow:linked:stable-diffusion", "kind": "StubLink"},
    {"raw": "[[Text-to-Image Generation]]", "resolved": "urn:visionflow:linked:text-to-image-generation", "kind": "StubLink"},
    {"raw": "[[Image-to-Image Generation]]", "resolved": "urn:visionflow:linked:image-to-image-generation", "kind": "StubLink"},
    {"raw": "[[Video Generation]]", "resolved": "urn:visionflow:linked:video-generation", "kind": "StubLink"},
    {"raw": "[[ControlNet]]", "resolved": "urn:visionflow:linked:control-net", "kind": "StubLink"},
    {"raw": "[[LoRA]]", "resolved": "urn:visionflow:linked:lo-ra", "kind": "StubLink"},
    {"raw": "[[Directed Acyclic Graph Execution]]", "resolved": "urn:visionflow:linked:directed-acyclic-graph-execution", "kind": "StubLink"},
    {"raw": "[[Workflow Execution Engine]]", "resolved": "urn:visionflow:linked:workflow-execution-engine", "kind": "StubLink"},
    {"raw": "[[Workflow JSON Format]]", "resolved": "urn:visionflow:linked:workflow-json-format", "kind": "StubLink"},
    {"raw": "[[GPU Compute]]", "resolved": "urn:visionflow:linked:gpu-compute", "kind": "StubLink"},
    {"raw": "[[PyTorch]]", "resolved": "urn:visionflow:linked:py-torch", "kind": "StubLink"},
    {"raw": "[[Python Runtime]]", "resolved": "urn:visionflow:linked:python-runtime", "kind": "StubLink"},
    {"raw": "[[aiohttp]]", "resolved": "urn:visionflow:linked:aiohttp", "kind": "StubLink"},
    {"raw": "[[Inference Orchestration System]]", "resolved": "urn:visionflow:linked:inference-orchestration-system", "kind": "StubLink"},
    {"raw": "[[Latent Diffusion Pipeline]]", "resolved": "urn:visionflow:linked:latent-diffusion-pipeline", "kind": "StubLink"},
    {"raw": "[[KSampler]]", "resolved": "urn:visionflow:linked:ksampler", "kind": "StubLink"},
    {"raw": "[[CheckpointLoader]]", "resolved": "urn:visionflow:linked:checkpoint-loader", "kind": "StubLink"},
    {"raw": "[[VAE]]", "resolved": "urn:visionflow:linked:vae", "kind": "StubLink"},
    {"raw": "[[CLIP]]", "resolved": "urn:visionflow:linked:clip", "kind": "StubLink"},
    {"raw": "[[IP-Adapter]]", "resolved": "urn:visionflow:linked:ip-adapter", "kind": "StubLink"},
    {"raw": "[[SDXL]]", "resolved": "urn:visionflow:linked:sdxl", "kind": "StubLink"},
    {"raw": "[[Flux.1]]", "resolved": "urn:visionflow:linked:flux-1", "kind": "StubLink"},
    {"raw": "[[AnimateDiff]]", "resolved": "urn:visionflow:linked:animate-diff", "kind": "StubLink"},
    {"raw": "[[Image Generation]]", "resolved": "urn:visionflow:linked:image-generation", "kind": "StubLink"},
    {"raw": "[[Inpainting]]", "resolved": "urn:visionflow:linked:inpainting", "kind": "StubLink"},
    {"raw": "[[Model Checkpoint]]", "resolved": "urn:visionflow:linked:model-checkpoint", "kind": "StubLink"},
    {"raw": "[[InvokeAI]]", "resolved": "urn:visionflow:linked:invoke-ai", "kind": "StubLink"},
    {"raw": "[[AUTOMATIC1111 WebUI]]", "resolved": "urn:visionflow:linked:automatic1111-web-ui", "kind": "StubLink"},
    {"raw": "[[Hugging Face Hub]]", "resolved": "urn:visionflow:linked:hugging-face-hub", "kind": "StubLink"},
    {"raw": "[[Batch Image Processing]]", "resolved": "urn:visionflow:linked:batch-image-processing", "kind": "StubLink"},
    {"raw": "[[Node-Based Visual Programming]]", "resolved": "urn:visionflow:linked:node-based-visual-programming", "kind": "StubLink"},
    {"raw": "[[Latent Tensor]]", "resolved": "urn:visionflow:linked:latent-tensor", "kind": "StubLink"},
    {"raw": "[[Workflow Serialisation]]", "resolved": "urn:visionflow:linked:workflow-serialisation", "kind": "StubLink"},
    {"raw": "[[Comfy-Org GitHub Organisation]]", "resolved": "urn:visionflow:linked:comfy-org-git-hub-organisation", "kind": "StubLink"},
    {"raw": "[[Workflow Node]]", "resolved": "urn:visionflow:linked:workflow-node", "kind": "StubLink"},
    {"raw": "[[Node Link]]", "resolved": "urn:visionflow:linked:node-link", "kind": "StubLink"},
    {"raw": "[[PNG Metadata Embedding]]", "resolved": "urn:visionflow:linked:png-metadata-embedding", "kind": "StubLink"},
    {"raw": "[[comfyanonymous 2023 ComfyUI]]", "resolved": "urn:visionflow:linked:comfyanonymous-2023-comfy-ui", "kind": "StubLink"},
    {"raw": "[[TechCrunch 2026 ComfyUI $500M Valuation]]", "resolved": "urn:visionflow:linked:tech-crunch-2026-comfy-ui-500-m-valuation", "kind": "StubLink"},
    {"raw": "[[Salad Technologies 2024 comfyui-api]]", "resolved": "urn:visionflow:linked:salad-technologies-2024-comfyui-api", "kind": "StubLink"},
    {"raw": "[[ViewComfy 2025 Production API Guide]]", "resolved": "urn:visionflow:linked:view-comfy-2025-production-api-guide", "kind": "StubLink"},
    {"raw": "[[BentoML 2025 comfy-pack]]", "resolved": "urn:visionflow:linked:bento-ml-2025-comfy-pack", "kind": "StubLink"},
    {"raw": "[[Comfy-Org 2024 Workflow JSON Spec]]", "resolved": "urn:visionflow:linked:comfy-org-2024-workflow-json-spec", "kind": "StubLink"},
    {"raw": "[[RunPod 2024 Serverless ComfyUI]]", "resolved": "urn:visionflow:linked:run-pod-2024-serverless-comfyui", "kind": "StubLink"},
    {"raw": "[[OpenArt Workflow Registry]]", "resolved": "urn:visionflow:linked:openart-workflow-registry", "kind": "StubLink"},
    {"raw": "[[Civitai Workflow Sharing]]", "resolved": "urn:visionflow:linked:civitai-workflow-sharing", "kind": "StubLink"},
    {"raw": "[[ComfyUI for Fashion and Brands]]", "resolved": "urn:visionflow:linked:comfy-ui-for-fashion-and-brands", "kind": "StubLink"}
  ]
}
```

- ### Definition
  - The ComfyUI API Specification defines the programmatic contract by which external processes interact with a running [[ComfyUI]] server instance to submit, monitor, and retrieve [[Generative AI]] generation jobs entirely without the browser-based graphical canvas. Released informally with the [[comfyanonymous 2023 ComfyUI]] project launch in January 2023, the specification centres on a dual-protocol architecture: an HTTP [[REST API]] layer built on the [[aiohttp]] async web framework, operating by default on port 8188, and a persistent [[WebSocket Protocol]] channel at the `/ws` path that delivers real-time execution events. The canonical submission artefact is a "prompt API format" JSON object — a flat dictionary of string-keyed [[Workflow Node]] objects each containing a `class_type` string, an `inputs` dictionary, and connection references expressed as `[node_id, output_index]` tuples — submitted via HTTP POST to `/prompt`. This [[JSON Serialisation]] of the [[Directed Acyclic Graph Execution]] model allows the entire [[ComfyUI Workflows]] graph, including [[CheckpointLoader]], [[CLIP]], [[VAE]], [[KSampler]], [[ControlNet]], [[LoRA]], and [[IP-Adapter]] nodes, to be transmitted and executed headlessly, enabling [[Batch Image Processing]], cloud-scale [[Inference Orchestration System]] deployment, and integration as a tool target within [[Agentic Workflow]] frameworks such as LangChain and AutoGen. The `/object_info` introspection endpoint publishes a live catalogue of all installed node types and their typed input schemas, enabling dynamic client-side graph construction and missing-node detection. The `/history` endpoint retrieves completed job outputs keyed by `prompt_id`, closing the request-response cycle without requiring persistent connections. Together these affordances make the specification an informal [[Workflow JSON Format]] interchange standard, adopted by cloud providers including [[RunPod 2024 Serverless ComfyUI]], Vast.ai, and SaladCloud, and referenced by [[ViewComfy 2025 Production API Guide]], [[BentoML 2025 comfy-pack]], and the [[Comfy-Org 2024 Workflow JSON Spec]] as the authoritative definition of programmatic [[ComfyUI Workflows]] execution — enabling applications spanning [[Text-to-Image Generation]], [[Image-to-Image Generation]], [[Video Generation]], [[Inpainting]], and multi-modal creative [[Content Creation Pipeline]] orchestration at enterprise scale including confirmed customers Netflix, Apple, and Ubisoft.

- ### Semantic Classification
  - owl-class:: ai:ComfyUIAPISpecification
  - owl-role:: ExecutableProtocol | InterfaceSpecification | WorkflowOrchestration
  - owl-inferred:: ai:InferenceOrchestrationProtocol, ai:HeadlessDiffusionInterface, ai:GenerativeAIPipelineAPI
  - belongs-to-domain:: [[Generative AI]]
  - implemented-in-layer:: [[Inference Orchestration System]]

- ### Relationships
  - is-subclass-of:: [[ComfyUI Workflows]], [[REST API]], [[Workflow Automation]], [[Inference Orchestration System]]
  - has-part:: [[WebSocket Protocol]], [[Workflow JSON Format]], [[Workflow Node]], [[Node Link]], [[Directed Acyclic Graph Execution]], [[Queue Management API]], [[History Endpoint]], [[File Upload Endpoint]], [[Object Info Endpoint]]
  - requires:: [[ComfyUI]], [[GPU Compute]], [[Python Runtime]], [[aiohttp]], [[PyTorch]], [[Diffusion Model]], [[Model Checkpoint]]
  - enables:: [[Content Creation Pipeline]], [[Agentic Workflow]], [[Batch Image Processing]], [[Inference Orchestration System]], [[ComfyUI for Fashion and Brands]], [[Image Generation]], [[Text-to-Image Generation]], [[Image-to-Image Generation]], [[Video Generation]], [[Inpainting]], [[Digital Asset Workflow]], [[Workflow Serialisation]]
  - implements:: [[Directed Acyclic Graph Execution]], [[Workflow JSON Format]], [[Workflow Serialisation]], [[REST API]], [[WebSocket Protocol]], [[Node-Based Visual Programming]]
  - depends-on:: [[ComfyUI]], [[Diffusion Model]], [[Stable Diffusion]], [[Model Checkpoint]], [[Latent Diffusion Pipeline]]
  - supports:: [[ControlNet]], [[LoRA]], [[IP-Adapter]], [[SDXL]], [[Flux.1]], [[AnimateDiff]], [[VAE]], [[CLIP]], [[KSampler]], [[CheckpointLoader]], [[Latent Diffusion Pipeline]], [[Latent Tensor]], [[Generative AI]]
  - uses:: [[JSON Serialisation]], [[WebSocket Protocol]], [[REST API]], [[aiohttp]], [[PNG Metadata Embedding]], [[PyTorch]], [[Python Runtime]]
  - contrasts-with:: [[InvokeAI]], [[AUTOMATIC1111 WebUI]]
  - related-to:: [[ComfyUI Manager]], [[ComfyUI Client]], [[Agentic Workflow]], [[Hugging Face Hub]], [[OpenArt Workflow Registry]], [[Civitai Workflow Sharing]], [[Node-Based Visual Programming]], [[Machine Learning]], [[Generative AI]], [[Open Source Software]], [[Content Production Workflow]], [[Comfy-Org 2024 Workflow JSON Spec]]
  - standardized-by:: [[Comfy-Org GitHub Organisation]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:PromptEndpoint))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:WebSocketProtocol))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:QueueManagementAPI))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:ObjectInfoEndpoint))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:HistoryEndpoint))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:FileUploadEndpoint))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:WorkflowJSONFormat))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:hasPart ai:DirectedAcyclicGraphExecution))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:ComfyUI))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:GPUCompute))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:PythonRuntime))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:aiohttp))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:PyTorch))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:requires ai:ModelCheckpoint))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:ContentCreationPipeline))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:AgenticWorkflow))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:BatchImageProcessing))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:InferenceOrchestrationSystem))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:TextToImageGeneration))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:VideoGeneration))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:enables ai:Inpainting))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:implements ai:DirectedAcyclicGraphExecution))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:implements ai:WorkflowJSONFormat))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:implements ai:WorkflowSerialisation))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:implements ai:RESTAPIPattern))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:implements ai:WebSocketProtocol))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:reducesTo ai:ComfyUIWorkflows))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:reducesTo ai:HeadlessDiffusionExecution))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:reducesTo ai:JSONGraphRepresentation))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:reducesTo ai:PromptAPIFormat))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:reducesTo ai:WorkflowSerialisation))
    ```
  - ## Additional Axioms — Support Relationships
    ```
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:ControlNet))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:LoRA))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:IPAdapter))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:SDXL))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:Flux1))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:supports ai:AnimateDiff))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:contrastsWith ai:InvokeAI))
    SubClassOf(ai:ComfyUIAPISpecification
      ObjectSomeValuesFrom(ai:contrastsWith ai:AUTOMATIC1111WebUI))
    ```

  - ## About
    The ComfyUI API Specification emerged organically from the [[ComfyUI]] project, which [[comfyanonymous 2023 ComfyUI]] first published in January 2023 as an open-source node-graph interface for [[Stable Diffusion]] inference. Unlike the simple REST APIs offered by [[AUTOMATIC1111 WebUI]] or the more opinionated pipeline model of [[InvokeAI]], [[ComfyUI]] exposed the entire computation graph — [[CheckpointLoader]], [[CLIP]] text encoder, [[KSampler]], [[VAE]] decoder, post-processors — as a [[JSON Serialisation|JSON-serialisable]] [[Directed Acyclic Graph Execution|DAG]]. Developers discovered that the same graph format submitted through the browser canvas could be sent directly to the `/prompt` HTTP endpoint, establishing the foundation of the specification. The dual-protocol design — [[REST API]] for discrete request-response operations and [[WebSocket Protocol]] for streaming execution events — has become the defining architectural characteristic, enabling everything from simple synchronous single-image generation to long-running [[Video Generation]] pipelines with mid-execution preview frames.

    The specification's influence extends well beyond its origin as an implementation detail. By 2025, the [[Comfy-Org GitHub Organisation]] had formalised the [[Comfy-Org 2024 Workflow JSON Spec]], and the API surface had expanded to roughly twenty native endpoints organised into four categories: workflow execution (`/prompt`, `/queue`, `/history`, `/interrupt`), file operations (`/upload/image`, `/upload/mask`, `/view`), system introspection (`/object_info`, `/system_stats`, `/embeddings`, `/extensions`, `/models/{type}`), and resource management (`/free`). The `/object_info` endpoint in particular functions as a machine-readable registry of all installed [[Workflow Node]] types with their typed input schemas, enabling dynamic client construction and powering both the [[ComfyUI Manager]] missing-node detection system and third-party tools that generate workflow JSON programmatically. Enterprise adoption accelerated dramatically in 2025–2026 following the addition of authentication tokens — [[ComfyUI]] API keys issued through the `comfy.org` account system — which addressed the default unauthenticated exposure that made early deployments unsuitable for multi-tenant cloud environments.

    The specification's position in the [[Generative AI]] tooling ecosystem is distinctive: it is neither a formal standard body output nor a proprietary vendor API, but rather an emergent community contract stabilised by the breadth of its adoption. The [[ComfyUI Workflows]] format and the API that exposes it have become the closest thing the open-source diffusion community has to a workflow interchange standard. Workflows distributed on [[OpenArt Workflow Registry]] and [[Civitai Workflow Sharing]] platforms are JSON files in this format; [[PNG Metadata Embedding]] places the workflow JSON inside image file headers for trivial reimport; and the [[ComfyUI Manager]] uses the `class_type` vocabulary from the same schema for its missing-node detection algorithm. This interlocking set of conventions creates strong network effects: any tooling that learns to read and write ComfyUI prompt API JSON gains immediate access to a corpus of thousands of community-published workflows spanning every modality — [[Text-to-Image Generation]], [[Image-to-Image Generation]], [[Inpainting]], [[Video Generation]], depth-conditioned generation via [[ControlNet]], and style-injected generation via [[IP-Adapter]]. The absence of a formal specification document did not prevent this ecosystem from forming; rather, the API's simplicity — a flat dictionary of typed nodes, connection tuples, and an introspection endpoint — made the informal contract clear enough to implement against without documentation.

    Security considerations entered the picture once the default-unauthenticated API began attracting malicious attention at scale. The [[Latent Diffusion Pipeline]] and [[GPU Compute]] resources required for [[Image Generation]] and [[Video Generation]] are expensive, and unauthenticated ComfyUI instances exposed to the internet become targets for cryptomining proxy botnet campaigns (documented by Censys in 2025). CVE-2025-67303 exposed [[ComfyUI Manager]] configuration data through the unprotected `/user/default/` path (fixed in Manager v3.38 and ComfyUI v0.3.76). CVE-2025-6107 allowed remote manipulation of Python object attributes through the `/comfy/utils.py` `set_attr` function. These disclosures accelerated the authentication roadmap: comfy.org API keys for the cloud-hosted model, and a security policy published in the `Comfy-Org/ComfyUI` repository, both emerged in response. The production deployment guidance now universally recommends placing ComfyUI behind a reverse proxy that enforces authentication, with the official [[ComfyUI Client]] and cloud wrappers (RunPod, Vast.ai, SaladCloud) all implementing authentication at the proxy layer while the core API remains unauthenticated for local development use.

  - ## Components / Architecture

    The specification defines four principal transport and data-format layers:

    - **Prompt Submission** — HTTP POST to `/prompt` with a JSON body containing `client_id` (UUID string for WebSocket routing), `prompt` (the workflow DAG as a flat node dictionary), and optional `extra_data` for metadata passthrough. The response yields a `prompt_id` string used to poll `/history` or correlate WebSocket events.
    - **WebSocket Event Stream** — persistent connection to `/ws?clientId=<uuid>` receiving typed JSON messages: `execution_start`, `executing` (with current node_id), `progress` (step/total integers for sampler progress), `executed` (with node output data), `execution_error`, and `b64_json` preview image frames mid-denoising. The `client_id` parameter ensures events for a submitted prompt are routed only to the submitting client.
    - **Queue and History Management** — GET `/queue` returns pending and running prompts; DELETE `/queue` cancels all; POST `/interrupt` cancels the currently executing prompt; GET `/history/{prompt_id}` returns completed outputs with file paths, base64 data, or both, depending on server configuration.
    - **Node Introspection** — GET `/object_info` returns the complete node registry as a JSON object mapping `class_type` strings to input schema definitions, enabling headless clients to validate workflow graphs before submission and UI generators to construct typed input widgets without hard-coded node knowledge.
    - **File Operations** — POST `/upload/image` accepts multipart form data to stage input images before workflow submission; GET `/view` retrieves generated output images by filename and subfolder path; GET `/view_metadata/{folder_name}` retrieves model metadata files.

  - ## Diffusion Model Integration — Node Types and API Surface

    The API specification's practical richness comes from the [[Workflow Node]] ecosystem it exposes. Understanding the canonical node types that appear in ComfyUI workflows — and therefore in the prompt API JSON submitted to `/prompt` — is essential for understanding what the specification enables. The following coverage maps the principal node families accessible through the specification:

    **Model Loading Nodes** — [[CheckpointLoader]] (`CheckpointLoaderSimple`, `CheckpointLoader`) load [[Stable Diffusion]] and successor model checkpoints from the `models/checkpoints/` directory, outputting MODEL (the UNet), CLIP (the text encoder), and VAE (the variational autoencoder) tokens. `LoraLoader` applies [[LoRA]] fine-tuning weights from `models/loras/` to both MODEL and CLIP in a single node. `VAELoader` loads a separate VAE from `models/vae/` for workflows requiring a specific VAE decoder. `CLIPLoader` loads a standalone CLIP model for multi-clip architectures like [[SDXL]] which uses a dual CLIP configuration.

    **Conditioning Nodes** — `CLIPTextEncode` accepts a text string and a CLIP token, producing a CONDITIONING tensor (the text embedding used to guide diffusion). `ConditioningCombine`, `ConditioningConcat`, and `ConditioningSetTimestepRange` manipulate conditioning tensors for compositional prompt techniques. `ControlNetApply` and `ControlNetApplyAdvanced` apply [[ControlNet]] spatial conditioning, accepting a CONDITIONING, an IMAGE (the control map), and a CONTROL_NET model, producing a conditioned CONDITIONING tensor. `IPAdapterApply` integrates [[IP-Adapter]] reference image conditioning, injecting the visual embedding of a reference image into the attention layers of the UNet model.

    **Sampling Nodes** — [[KSampler]] is the universal sampler, parameterised by model, positive/negative conditioning, latent image, seed, steps, CFG scale, sampler name, scheduler, and denoise strength. `KSamplerAdvanced` adds control over the start/end step range for partial denoising workflows. `SamplerCustom` accepts explicit noise and sampler objects for maximum flexibility. The sampler node executes the core [[Latent Diffusion Pipeline|latent diffusion denoising loop]], iteratively applying the model to progressively denoise the [[Latent Tensor]] from noise toward the target image distribution conditioned by the provided CONDITIONING tensors.

    **Latent Image Nodes** — `EmptyLatentImage` creates a blank noise latent of specified dimensions (width/height/batch_size); `VAEEncode` encodes an existing IMAGE into [[Latent Tensor|latent space]] for [[Image-to-Image Generation]] or [[Inpainting]] starting points; `VAEDecode` decodes a latent tensor to an IMAGE for output or further processing; `LatentUpscale` and `LatentUpscaleBy` scale latent tensors before higher-resolution sampling (the latent upscale refinement technique for [[SDXL]] and high-resolution generation).

    **Image Output Nodes** — `SaveImage` writes IMAGE tensors to disk in the ComfyUI `output/` directory and triggers the `executed` WebSocket event; `PreviewImage` sends images to the browser canvas without saving to disk; `ImageSave` (custom node variant) extends SaveImage with configurable formats, quality settings, and metadata embedding.

    **Post-Processing Nodes** — `ImageScale` and `ImageScaleBy` resize images using PIL interpolation modes; `ImageUpscaleWithModel` applies an [[ESRGAN Upscaling|ESRGAN]] or similar upscaling model for AI super-resolution. Custom nodes extend this surface with face restoration (GFPGAN, CodeFormer), video output (AnimateDiff frame assembly), 3D generation, audio synthesis, and LLM API calls, all accessible through the same flat-dictionary node format in the prompt API JSON.

    The `/object_info` endpoint returns the input schema for every one of these node types, keyed by `class_type`. Each schema entry includes `input` (a dict mapping input slot names to their type constraints and default values), `output` (a list of output type strings), `output_name` (human-readable output labels), `category` (UI category string), `description` (human-readable node documentation string), and `is_output_node` (boolean indicating whether this node type produces storable outputs). This schema is the machine-readable interface contract that enables both automated workflow construction and client-side validation.

  - ## Use Cases / Major Families

    **Headless Cloud Execution** — The most common production pattern: a backend service constructs or retrieves a pre-built workflow JSON, substitutes dynamic parameters (prompt text, seed, input image paths), submits via POST `/prompt`, and polls `/history` or listens on `/ws` for completion. Cloud providers [[RunPod 2024 Serverless ComfyUI]], Vast.ai, and SaladCloud all expose this pattern at scale. [[Salad Technologies 2024 comfyui-api]] wraps it in a thin proxy that handles queue depth, output storage, and horizontal scaling across GPU nodes, returning generated images directly in the HTTP response body.

    **Agentic Tool Integration** — LLM orchestration frameworks treat ComfyUI as a structured tool call: the agent maps a natural language generation request to a workflow template, fills in parameters, submits to the API, and awaits the image output to continue a reasoning chain. ComfyUI-Autogen nodes expose agent primitives directly within the [[Workflow Node]] graph, blurring the line between orchestrator and executor. [[GenAgent]] (Guo et al., 2024) demonstrated automated workflow construction using LLM agents that call `/object_info` to discover available nodes and build valid DAGs programmatically.

    **CI/CD Pipeline Integration** — Studios and agencies version-control workflow JSON files alongside source assets, with CI pipelines that re-execute workflows on model updates, compare output hashes, and flag regressions. This pattern, analogous to visual regression testing in front-end engineering, depends entirely on the determinism of the prompt API given fixed seeds and model versions.

    **Educational and Community Sharing** — [[OpenArt Workflow Registry]] and [[Civitai Workflow Sharing]] distribute workflows as JSON blobs that users import into the ComfyUI canvas; [[PNG Metadata Embedding]] encodes the full workflow inside generated image files for drag-and-drop reimport. The programmatic API underpins both distribution channels, since the same JSON format serves both the visual canvas and headless execution.

    **Enterprise Production Pipelines** — Confirmed customers Netflix, Apple, and Ubisoft use [[ComfyUI]] APIs embedded within larger production workflows for concept art generation, texture synthesis, storyboard iteration, and video frame processing. The [[ViewComfy 2025 Production API Guide]] documents engineering patterns — authentication, rate limiting, output CDN integration — for these deployments.

  - ## Relationship to the Broader Generative AI Orchestration Landscape

    The ComfyUI API Specification occupies a specific niche in the broader [[Generative AI]] orchestration landscape that is worth mapping precisely. At the model-serving layer, frameworks like Hugging Face `diffusers` expose [[Diffusion Model]] architectures as [[Python]] objects without any HTTP interface; ComfyUI wraps these models in a [[REST API]] that transforms them into network services. At the workflow orchestration layer, LangChain and LangGraph orchestrate sequences of LLM calls and tool invocations; ComfyUI's [[Directed Acyclic Graph Execution|DAG]] model is the equivalent but for image and video generation pipelines with heterogeneous node types. At the deployment layer, BentoML and Ray Serve containerise ML models behind HTTP APIs; the ComfyUI API predates these frameworks in the diffusion context and takes a lighter-weight opinionated approach (the entire pipeline graph in a single JSON object) that trades Ray's distributed parallelism for ComfyUI's node composability.

    The [[AUTOMATIC1111 WebUI]] offers a contrast: it exposes a simpler REST API with individual endpoints for specific generation modes (`/sdapi/v1/txt2img`, `/sdapi/v1/img2img`, `/sdapi/v1/extra-single-image` etc.) that encode pipeline decisions in the server, not the client. ComfyUI's approach — externalising the entire pipeline graph to the client — is more powerful but requires clients to understand the node graph model. [[InvokeAI]]'s API sits between these positions, offering a structured workflow API with typed nodes but with more schema validation and less rawness than ComfyUI's flat dictionary format. The ComfyUI format's advantage is its direct correspondence to the visual canvas, meaning the same JSON a user exports from the ComfyUI web interface is immediately submittable to the `/prompt` endpoint without transformation — a property neither AUTOMATIC1111 nor InvokeAI share.

    Dataflow programming languages provide the theoretical framework for understanding ComfyUI's graph model. The [[Directed Acyclic Graph Execution|DAG]] execution model in which typed data tokens flow from producer nodes to consumer nodes through typed edges is formalised in the Kahn Process Networks model (Kahn, 1974) and implemented in production systems including Apache Airflow (task dependency graphs), Apache Spark (RDD transformations), and LabVIEW's graphical dataflow programming language. ComfyUI's node graph is a dataflow program in this tradition: [[CheckpointLoader]] nodes produce MODEL, CLIP, and VAE tokens; [[KSampler]] nodes consume MODEL, CONDITIONING, and LATENT tokens and produce LATENT tokens; [[VAE]] decoder nodes consume LATENT and VAE tokens and produce IMAGE tokens. The typed edge system — enforced visually in the canvas by colour-coded connector types and enforced programmatically by the `/object_info` schema — is the ComfyUI API's primary correctness mechanism.

  - ## Academic Context

    The ComfyUI API specification does not emerge from a formal academic lineage but is deeply grounded in the distributed systems literature on dataflow graph execution. Foundational models underlying it include [[Directed Acyclic Graph Execution]] patterns from the workflow scheduling literature (Dean and Ghemawat, 2004 MapReduce; Zaharia et al., 2012 Spark) and the diffusion model research that drives the workloads it orchestrates: Rombach et al. 2022 on [[Latent Diffusion Pipeline|latent diffusion models]] (the architectural basis for [[Stable Diffusion]]), Ho et al. 2020 on DDPM denoising, and Karras et al. 2022 on EDM samplers exposed via [[KSampler]] nodes. The [[IP-Adapter]] integration (Ye et al., 2023) and [[ControlNet]] conditioning (Zhang et al., 2023) both became first-class API citizens within months of their publication, demonstrating the specification's rapid absorption of academic advances. The GenAgent work (Guo et al., 2024, arXiv:2409.01392) specifically studied ComfyUI's `/object_info` endpoint as the machine-readable node catalogue enabling LLM-driven workflow construction, establishing the specification as an object of study in the agentic AI literature. Security research has catalogued CVE-2025-67303 (information disclosure via unauthenticated `/object_info` exposure in ComfyUI-Manager prior to 3.38), CVE-2025-6107 (remote attribute manipulation in `/comfy/utils.py`), and cryptomining botnet campaigns (Censys, 2025) targeting unauthenticated ComfyUI instances, motivating the 2025 addition of authentication token infrastructure.

    The connection to [[Agentic Workflow]] research is particularly active. The emerging field of agentic AI — LLM-based systems that use tools to accomplish multi-step tasks — has identified visual content generation as a key tool capability, and ComfyUI's programmatic API is the most accessible, most composable, and most capable option in the open-source space for image and video generation tool calls. Systems like MetaGPT, AutoGen, CrewAI, and LangGraph have all produced ComfyUI integration packages in 2024-2025, establishing the API as a de facto standard for agentic image generation tooling. The GenAgent paper's demonstration of fully automated workflow construction — where an LLM reads `/object_info`, plans a workflow as Python code, converts it to prompt API format JSON, submits it, and evaluates the result — represents the frontier of this integration: the ComfyUI API as a programmatically discoverable and composable creative intelligence tool, not merely a remote execution endpoint.

  - ## Current Landscape (2026)

    Comfy Org, the company formalising the ComfyUI ecosystem, raised $30 million in April 2026 at a $500 million post-money valuation, led by Craft Ventures with participation from Pace Capital, Chemistry, and TruArrow, with Netflix, Apple, and Ubisoft as confirmed enterprise customers (TechCrunch, [[TechCrunch 2026 ComfyUI $500M Valuation]]). This followed a $16.2 million seed round in Q4 2024 led by Pace Capital, bringing total capital raised to approximately $47.5 million in eighteen months. The April 2026 round was explicitly positioned around scaling the API and enterprise managed runtime — Comfy Cloud — rather than the open-source base, signalling that the programmatic API is the primary commercial surface of the platform.

    The API specification has been codified as the [[Comfy-Org 2024 Workflow JSON Spec]], with versioned endpoints, authentication tokens via `comfy.org` account API keys (added May 2025 for Partner Node access, expanded in 2025-2026 for all cloud-hosted deployments), and structured error responses addressing enterprise deployment requirements. The [[Comfy-Org GitHub Organisation]] now maintains the canonical ComfyUI repository at `github.com/Comfy-Org/ComfyUI`, having absorbed [[ComfyUI Manager]] into the `Comfy-Org` namespace in March 2025. The repository's `SECURITY.md` now documents responsible disclosure procedures, reflecting the post-CVE maturation of the security posture.

    The cloud deployment ecosystem for the API has expanded substantially. The [[BentoML 2025 comfy-pack]] library provides a managed containerised ComfyUI runtime that wraps the prompt API in a BentoML service definition, enabling deployment to any BentoML-compatible serving infrastructure with built-in model management, autoscaling, and observability. RunComfy (dedicated ComfyUI cloud), Mystic AI (managed ComfyUI API), and ViewComfy (workflow-as-API platform) all build on the specification, offering varying levels of abstraction from the raw prompt API. At least fifteen third-party [[Python]] and TypeScript client libraries implement the specification as of 2026. SaladTechnologies' `comfyui-api` proxy has been deployed across multiple enterprise customers for cost-efficient GPU spot instance execution with automatic retry on instance preemption.

    Model architecture expansion has validated the specification's durability. The [[Flux.1]] architecture from Black Forest Labs (August 2024) — a 12B parameter rectified flow transformer that surpassed [[Stable Diffusion]]-based models on most benchmarks — was integrated into ComfyUI within days of release and is accessible via the unchanged `/prompt` API with a new set of `class_type` node names. Wan2.1 (Wan Team, 2025), the leading open-source text-to-video model, was similarly integrated within weeks of release. [[SDXL]] Turbo, SD3, FLUX.1-Schnell (the distilled inference-efficient variant), and Stable Video Diffusion all followed the same pattern: new model architectures become new node types registered in the ComfyUI node registry and immediately accessible via the existing API contract. This model-agnostic extensibility — the API never needed to be versioned for these additions — is the strongest evidence for the specification's architectural soundness.

    The security landscape has stabilised but requires ongoing attention. The May 2025 Censys report documented active cryptomining botnet campaigns against unauthenticated ComfyUI instances exposed to the public internet, with attack tooling specifically targeting the `/object_info` endpoint for reconnaissance (enumerating installed nodes to identify exploitable custom node vulnerabilities) and `/prompt` for unauthorised job submission consuming the victim's GPU resources. The 2025 CVE disclosures ([[CVE-2025-67303]], CVE-2025-6107, CVE-2025-69223) drove the authentication roadmap, and production deployment guidance now universally mandates authentication at the reverse proxy layer. The official ComfyUI documentation's "Security" section was substantially expanded in 2025-2026 to document these requirements.

  - ## UK Context

    The UK creative industries sector — spanning advertising, games, broadcast, and VFX — has been an early adopter of [[ComfyUI]] and the programmatic API. Framestore (London, with offices in Montreal and Los Angeles), Double Negative (DNEG, headquartered in London with facilities in Manchester, Mumbai, and Vancouver), and Milk VFX (London and Cardiff) have all publicly reported experimentation with AI-assisted concept art, texture synthesis, and compositing pipeline automation using node-based [[Diffusion Model]] generation tools. The UK games industry — anchored by Rockstar North (Edinburgh), Rebellion (Oxford), and Codemasters (Leamington Spa) — has been an active adopter of ComfyUI for concept art generation and texture creation workflows, integrating the programmatic API into game asset pipelines where [[Batch Image Processing]] at volume is the primary use case.

    UK-based cloud GPU providers including Vast.ai (founded in London, marketplace for spot GPU instances) and Coreweave's UK availability zone (London data centre) have hosted production-scale ComfyUI API deployments, with UK creative studios representing a significant fraction of Vast.ai's GPU demand. The UK government's Compute Task Force (2023) and the subsequent AI Opportunities Action Plan (2025) both identified GPU compute access as a strategic priority; the availability of these resources has accelerated UK creative industry adoption of [[Generative AI]] workflows including ComfyUI API-based [[Content Creation Pipeline|content creation pipelines]].

    Academic engagement with the specification is indirect but substantial. The UCL-led national [[Generative AI]] hub (UKRI-funded, 2024), combining Imperial College London, Cambridge, Oxford, Edinburgh, Manchester, Cardiff, and Surrey, does not directly study the ComfyUI specification but its member labs produce the [[Diffusion Model]] architectures that flow into the ecosystem via the API's extensible node model. The University of Edinburgh's LFCS (Laboratory for Foundations of Computer Science) has longstanding expertise in type theory and dataflow programming that is directly applicable to ComfyUI's typed node graph model. Imperial College London's Dyson Robotics Lab uses [[Stable Diffusion]] variants via programmatic APIs for synthetic data generation in robot training pipelines, a production use case that resembles ComfyUI headless API invocation. The Creative Industries Clusters Programme (UKRI-AHRC, 2018-2025) funded twelve regional clusters — including Screen Arts in Bristol, XR Stories in York, and CoSTAR in the East Midlands — where ComfyUI API integration has been part of AI augmentation toolkits for small production companies.

    The regulatory context in the UK is relevant to API-level deployments. The UK AI Safety Institute (established October 2023, Bletchley Park) has not specifically addressed diffusion model APIs, but the broader AI governance framework — including the Copyright, Designs and Patents Act implications for AI-generated content and the ICO's guidance on AI-generated personal data — affects how UK studios can use ComfyUI API deployments for commercial content generation. Studios using the API to process images of real people (for face restoration, style transfer, or deepfake-adjacent workflows) face particular scrutiny under UK GDPR as implemented in the Data Protection Act 2018, and the ComfyUI API's lack of built-in access logging means studios must implement their own audit trails at the proxy layer.

  - ## Future Directions (2026–2030)

    Several trajectories are clear from the 2026 technology landscape. First, authentication and multi-tenancy: the 2025 addition of API keys will evolve toward OAuth 2.0 integration, role-based queue prioritisation, and per-user GPU quota enforcement, making the specification viable for SaaS products built atop ComfyUI backends. This evolution mirrors the trajectory of the Stripe and Twilio APIs, which began as simple unauthenticated endpoints before accreting enterprise authentication, audit logging, and rate limiting over successive years. ComfyUI's enterprise customer base — Netflix, Apple, Ubisoft — will drive similar requirements, and the Comfy-Org engineering team's 2026 funding gives them the capacity to implement them.

    Second, streaming outputs: the [[WebSocket Protocol]] channel will expand beyond sampler step previews to deliver partial image tiles mid-denoising (analogous to JPEG progressive rendering), [[Video Generation]] frame streams with per-frame delivery as frames complete rather than waiting for the full clip, and 3D render depth previews from TripoSR and analogous nodes. This streaming model will require new message types in the WebSocket event protocol and versioning of the event schema — a gap currently managed by clients simply ignoring unknown event types.

    Third, workflow versioning: the [[Comfy-Org 2024 Workflow JSON Spec]] is expected to gain a formal semver scheme and backwards-compatibility guarantees, enabling CI/CD pipelines to pin workflow format versions independently of node package versions. The current practice of treating workflow JSON as informally versioned is sustainable for community use but creates enterprise deployment risk when core ComfyUI or node updates silently change node input schemas. Formal versioning and schema validation against the `/object_info` catalogue will fill this gap.

    Fourth, multi-node federation: cloud orchestrators are already prototyping the routing of individual [[Directed Acyclic Graph Execution|DAG]] nodes across heterogeneous GPU pools — [[CLIP]] text encoding on CPU-accessible instances, high-VRAM sampling on A100 or Blackwell B200 nodes, upscaling on cost-optimised lower-VRAM instances. This distributed execution model requires the API to support execution planning hints: node-level GPU memory requirements, expected execution time, and output tensor shapes are all discoverable from `/object_info` schemas and could inform scheduling decisions. BentoML's distributed execution framework and the emerging Comfy-Org Blackwell GPU support are the current leading indicators of this trajectory.

    Fifth, agentic integration standards: as LLM orchestration frameworks standardise tool-calling schemas — OpenAI function calling, Anthropic tool use, MCP (Model Context Protocol) — a formally typed ComfyUI tool definition will emerge, allowing [[Agentic Workflow]] systems to call ComfyUI via the prompt API as a first-class tool without bespoke wrapper code for each framework. The [[GenAgent]] research (2024) demonstrated the feasibility of LLM-driven workflow construction using the current API; standardised tool interfaces will democratise this capability to any agent framework developer. The Comfy-Org 2025 API key system for partner nodes is an early step toward this model, enabling LLM-mediated access to cloud-hosted model inference through ComfyUI Partner Nodes.

    Sixth, model-agnostic durability: the specification's track record of absorbing new model architectures — from SD 1.5 through SDXL, [[Flux.1]], and Wan2.1 — without protocol changes demonstrates that the flat-node-dictionary graph model is sufficiently general to represent any differentiable computation pipeline. This suggests the specification will remain relevant well beyond the current diffusion model era, potentially serving as the workflow interchange format for next-generation multimodal architectures that synthesise across image, video, audio, 3D, and language modalities in unified pipeline graphs.

  - ## Workflow JSON Structure — Technical Detail

    Understanding the prompt API format at the byte level is essential for writing compliant clients. A minimal text-to-image workflow JSON in prompt API format contains the following node types wired in sequence:

    - **Node `"1"` (CheckpointLoaderSimple)** — inputs: `{"ckpt_name": "v1-5-pruned-emaonly.ckpt"}`. Outputs: MODEL, CLIP, VAE — referenced by downstream nodes as `["1", 0]`, `["1", 1]`, `["1", 2]` respectively.
    - **Node `"2"` (CLIPTextEncode)** — inputs: `{"text": "positive prompt", "clip": ["1", 1]}`. Outputs: CONDITIONING `["2", 0]`.
    - **Node `"3"` (CLIPTextEncode)** — inputs: `{"text": "negative prompt", "clip": ["1", 1]}`. Outputs: CONDITIONING `["3", 0]`.
    - **Node `"4"` (EmptyLatentImage)** — inputs: `{"width": 512, "height": 512, "batch_size": 1}`. Outputs: LATENT `["4", 0]`.
    - **Node `"5"` ([[KSampler]])** — inputs: `{"model": ["1", 0], "positive": ["2", 0], "negative": ["3", 0], "latent_image": ["4", 0], "seed": 42, "steps": 20, "cfg": 7.0, "sampler_name": "euler", "scheduler": "normal", "denoise": 1.0}`. Outputs: LATENT `["5", 0]`.
    - **Node `"6"` (VAEDecode)** — inputs: `{"samples": ["5", 0], "vae": ["1", 2]}`. Outputs: IMAGE `["6", 0]`.
    - **Node `"7"` (SaveImage)** — inputs: `{"images": ["6", 0], "filename_prefix": "ComfyUI"}`. Terminal node; triggers file write and triggers the `executed` WebSocket event with the saved filename.

    The connection reference format `["node_id", output_slot_index]` is the compact encoding that distinguishes prompt API format from the canvas-native "Workflow JSON" (which uses `{id, slot_index}` objects with explicit type annotation). Clients must use prompt API format, not canvas JSON, for the `/prompt` endpoint — a source of confusion documented in all major integration guides.

  - ## Protocol Deep Dive — WebSocket Event Types

    The [[WebSocket Protocol]] channel at `/ws?clientId=<uuid>` is the real-time nervous system of programmatic ComfyUI integration. Understanding the event taxonomy is essential for building robust clients. Events are JSON objects with a `type` string field and a `data` payload field:

    - **`execution_start`** — emitted when the server begins processing a queued prompt. Data contains `prompt_id` (the UUID from the POST `/prompt` response) and `timestamp`. A well-behaved client uses this to start a timeout timer; if no `execution_cached` or `executed` follows within a configurable period, the client should inspect `/queue` for stall diagnosis.
    - **`execution_cached`** — emitted for nodes whose outputs have been cached from a previous execution with identical inputs. ComfyUI implements an output cache keyed by node inputs, meaning repeated submissions with the same parameters re-use prior outputs without re-running the node. Data contains `nodes` (list of cached node IDs). Critical for understanding why execution appears to skip nodes.
    - **`executing`** — emitted each time a new node begins execution. Data contains `node` (the node ID string, or `null` when a prompt completes). The null sentinel is important: many client implementations use it as the primary completion signal rather than `executed`, since `executed` is emitted only for terminal save-image nodes. Tracking the sequence of `executing` events allows reconstruction of the execution order and timing for performance profiling.
    - **`progress`** — emitted by sampler nodes ([[KSampler]] and variants) for each denoising step. Data contains `value` (current step integer) and `max` (total steps integer). The ratio `value/max` provides the progress percentage displayed by UI clients. For long [[Video Generation]] workflows with hundreds of frames, progress events span multiple sampler invocations.
    - **`executed`** — emitted when a terminal output node (SaveImage, PreviewImage, or custom output nodes) completes. Data contains `node` (the terminal node ID) and `output` (a dict mapping output type strings to lists of output references). For image outputs, `output` contains `{"images": [{"filename": "...", "subfolder": "...", "type": "output"}]}`. The `/view?filename=<f>&subfolder=<s>&type=output` endpoint retrieves the image bytes. Critically, `executed` is only emitted for nodes that produce storable output; intermediate nodes (samplers, VAEs) emit only `executing`, not `executed`.
    - **`execution_error`** — emitted when a node raises an unhandled Python exception. Data contains `node_id`, `node_type`, `exception_type`, `exception_message`, and `traceback` (list of traceback strings). This event is the primary diagnostic mechanism for workflow debugging; integrations that do not handle `execution_error` will stall indefinitely if a node fails.
    - **`b64_json` (preview images)** — a non-standard supplementary event emitted during KSampler execution when the `--preview-method` server flag is enabled. Data contains a base64-encoded JPEG of the current partially-denoised latent, decoded and displayed by browser clients as a real-time generation preview. Headless API clients typically ignore this event type to avoid the decoding overhead.

    The multiplexing of all these event types over a single persistent WebSocket connection, keyed by `client_id`, means that a single Python asyncio event loop can manage many concurrent workflow executions by maintaining a mapping from `prompt_id` to per-job asyncio futures, resolving each future when the `executing` null sentinel or `execution_error` arrives.

  - ## Interoperability and Client Ecosystem

    The broad adoption of the specification has generated a substantial third-party client ecosystem. Python clients include `comfy-api-simplified` (thin wrapper around the REST/WS pattern), `websocket-client`-based reference implementations from the official ComfyUI docs, and `comfyui-python-client` (typed dataclass wrappers for node schemas). TypeScript clients include `comfy-ui-client` (npm) and Comfy-Org's own `@comfyorg/comfyui-workflow-types` package which exports TypeScript interfaces auto-generated from the `/object_info` schema. At the orchestration layer, `ComfyUI-Autogen` exposes ComfyUI nodes as AutoGen agent tools; `strand1/ComfyUI-Autogen` implements multi-agent group chats with image generation tool calls. The `comfy-deploy` project provides a Vercel-style deployment wrapper that exposes a simplified image generation API backed by ComfyUI, hiding the graph complexity from application developers. BentoML's `comfy-pack` (2025) goes further, containerising a ComfyUI workflow as a self-contained BentoML service with a clean REST endpoint, snapshot-pinned environment, and built-in autoscaling — the closest equivalent to a managed PaaS offering the specification has inspired.

    The `SaladTechnologies/comfyui-api` proxy wraps the raw ComfyUI API with synchronous request semantics (blocking until completion), output storage to S3-compatible object stores, and horizontal scaling across Salad's GPU spot instance pool. This proxy pattern — thin stateless gateway in front of horizontally-scaled ComfyUI workers — has become the canonical cloud deployment architecture, with RunPod, Vast.ai, and Mystic AI all implementing variants of the same model.

  - ## Key Terminology

    - **Prompt API Format** — the flat-dictionary [[JSON Serialisation]] of a [[ComfyUI Workflows]] DAG, keyed by string node IDs, as opposed to the richer "Workflow JSON" used internally by the canvas editor which embeds node positions and UI metadata.
    - **client_id** — a UUID string passed in the POST `/prompt` body and the `?clientId=` WebSocket query parameter to associate a WebSocket session with submitted prompts, ensuring execution events route to the correct client.
    - **prompt_id** — the UUID returned by POST `/prompt`, used as a key to GET `/history/{prompt_id}` and to filter WebSocket `executing` events.
    - **object_info** — the `/object_info` introspection endpoint response; a JSON object mapping each installed [[Workflow Node]] `class_type` to its typed `input` schema, enabling dynamic graph construction and validation.
    - **KSampler** — the core [[Workflow Node]] executing the denoising diffusion loop, parameterised by sampler algorithm (euler, dpm++, etc.), scheduler, step count, CFG scale, and denoising strength; a node always present in text-to-image workflows.
    - **Headless execution** — running a ComfyUI generation pipeline via the HTTP/WebSocket API without a browser canvas session, typically from a backend service, CLI script, or orchestration framework.
    - **connection reference** — the `[node_id, output_slot_index]` tuple syntax in prompt API format JSON that encodes dataflow edges between [[Workflow Node]] objects, replacing the symbolic named-output references used in other workflow languages.
    - **extra_data** — the optional field in the POST `/prompt` JSON body accepting additional metadata (job tags, user IDs, callback URLs) that passes through to history records and WebSocket events, used by proxy layers for routing and observability.
    - **queue depth** — the number of prompts in the ComfyUI execution queue; GET `/queue` returns `queue_running` (currently executing) and `queue_pending` (awaiting execution) lists, used by load balancers to route to less-loaded workers.
    - **aiohttp** — the Python async HTTP framework on which the ComfyUI API server is built (port 8188 default), inheriting its connection limits, SSL/TLS configuration, and middleware architecture for authentication injection.
    - **CFG scale** — classifier-free guidance scale, a floating-point parameter passed to [[KSampler]] controlling the degree to which the positive conditioning steers the denoising process relative to the unconditional prediction; typical values range from 1.0 (minimal guidance, more creative but less prompt-adherent) to 15.0 (strong guidance, more literal prompt adherence but potentially over-saturated); submitted as the `cfg` input value in the KSampler node's input dictionary.
    - **denoise strength** — the `denoise` float parameter (0.0–1.0) on [[KSampler]] controlling the proportion of denoising steps applied; at 1.0, generation starts from pure noise (text-to-image); at values below 1.0, generation starts from a partially noised input latent ([[Image-to-Image Generation]] and [[Inpainting]] patterns); submitted in the prompt API JSON as the `denoise` field on the KSampler node.
    - **save image subfolder** — the `subfolder` path component returned in [[KSampler|SaveImage]] output references within `/history` responses, used as the second argument to the `/view?filename=<f>&subfolder=<s>&type=output` endpoint for retrieving generated images; omitted for root-level output files.
    - **sampling scheduler** — the noise schedule controlling how the noise level decreases across denoising steps; options exposed via `/object_info` for [[KSampler]] include `normal`, `karras`, `exponential`, `sgm_uniform`, `simple`, `ddim_uniform`, and `beta`; different schedulers interact with different sampler algorithms to produce different image characteristics; submitted as the `scheduler` string in the KSampler node inputs.
    - **batch_size** — the integer input to `EmptyLatentImage` and related nodes controlling how many images are generated simultaneously in a single [[KSampler]] forward pass; supported values depend on available [[GPU Compute|GPU VRAM]]; batch execution is more efficient than sequential single-image prompts for high-throughput [[Batch Image Processing]] use cases.
    - **REST API port** — ComfyUI's [[aiohttp]] server binds to `0.0.0.0:8188` by default, exposing all endpoints on all network interfaces without authentication; the `--listen` and `--port` command-line arguments allow binding to specific interfaces or alternative ports; production deployments universally restrict this binding to `127.0.0.1` (localhost only) and place a reverse proxy (nginx, Caddy) at the public port for authentication and TLS termination.

  - ## Deployment Patterns Reference

    The specification supports several deployment patterns documented in community guides and production engineering references:

    **Pattern 1: Synchronous Pull** — the simplest headless pattern. Submit POST `/prompt`, receive `prompt_id`. Poll GET `/history/{prompt_id}` until the response contains output data (non-null `outputs` field). Download outputs via GET `/view`. Suitable for low-concurrency workflows where simplicity outweighs efficiency. Python reference implementations in the official ComfyUI documentation and the 9elements.com blog post (2024) cover this pattern in detail.

    **Pattern 2: WebSocket Push** — the production-recommended pattern. Open a persistent WebSocket connection to `/ws?clientId=<uuid>` before submitting prompts. Submit POST `/prompt` with the same `client_id` as the WebSocket UUID. Listen for `executing` null sentinel or `execution_error` on the WebSocket to detect completion or failure, then retrieve results from GET `/history/{prompt_id}`. Eliminates polling overhead and enables real-time progress monitoring. The SaladTechnologies comfyui-api proxy, ViewComfy SDK, and Runflow client library all implement this pattern.

    **Pattern 3: Webhook Callback** — the async cloud pattern. A wrapping service (e.g., SaladTechnologies comfyui-api, custom middleware) accepts the workflow submission with a callback URL parameter, manages the internal WebSocket connection to ComfyUI, and POSTs the completed output to the callback URL when execution finishes. The client submits one request and receives results asynchronously via webhook, suitable for serverless and event-driven architectures where maintaining a persistent WebSocket connection is undesirable.

    **Pattern 4: Queue Batching** — for maximum GPU utilisation in [[Batch Image Processing]] workloads, submit multiple POST `/prompt` requests in rapid succession to fill the ComfyUI queue (GET `/queue` to monitor depth). ComfyUI processes queued prompts sequentially, and the KSampler's `batch_size` parameter can further parallelise within each prompt. Cloud deployments combine queue batching with horizontal scaling: multiple ComfyUI worker instances each running their own queue, with a load balancer routing submissions based on queue depth reported by each worker's GET `/queue` response.

  - ## Error Handling and Resilience Patterns

    Production integrations with the ComfyUI API must handle a range of failure modes that the specification surfaces through its event and response model. Understanding these failure modes and their handling patterns is essential for robust integrations:

    **Queue overflow** — ComfyUI's execution queue has no configurable depth limit; POST `/prompt` always succeeds with a `prompt_id` even when the queue is deep. High-throughput clients must implement their own depth monitoring by polling GET `/queue` and applying back-pressure (rate limiting submissions) when `queue_pending` length exceeds a threshold appropriate for the workflow's expected execution time. Cloud providers like RunPod and SaladTechnologies implement this depth monitoring in their worker orchestration layers.

    **Execution error recovery** — the `execution_error` WebSocket event delivers a Python traceback but does not automatically retry or provide any recovery path. Clients must detect this event, extract the `exception_message` and `node_id` fields for diagnostic logging, and decide whether to retry the prompt (with a modified seed if the error was non-deterministic, or with a different workflow if the error indicates a permanent node failure). Common sources of `execution_error` include: out-of-memory GPU errors (VRAM exceeded by a large model or large batch), missing model files (workflows referencing models not present in `models/` directories), and bugs in custom node implementations that raise unhandled Python exceptions.

    **WebSocket disconnection** — network interruptions can terminate the WebSocket connection during long-running [[Video Generation]] or multi-stage processing workflows. Resilient clients reconnect to `/ws?clientId=<uuid>` with the same `client_id` and resume listening; ComfyUI caches execution results in memory for the duration of the server session, so reconnection before the prompt completes allows the client to receive the completion event for a still-running prompt. Clients that reconnect after prompt completion can retrieve results via GET `/history/{prompt_id}`, which persists completed outputs for the duration of the server session (cleared on restart or via POST `/history/clear`).

    **Model loading latency** — the first [[KSampler]] execution after a model is loaded into VRAM triggers the model loading step, which can take 10-30 seconds for large models on slower storage. Subsequent prompts using the same model skip loading. Cloud deployments address this with "warm pool" strategies: keeping ComfyUI instances with target models pre-loaded between requests, at the cost of idle GPU VRAM reservation. The GET `/system_stats` endpoint reports currently loaded models, enabling load balancers to route to instances where the required model is already in VRAM.

  - ## Comparison with Alternative APIs

    The landscape of programmatic [[Diffusion Model]] APIs in 2026 includes several alternatives to the ComfyUI specification, each with distinct design philosophies:

    The **[[AUTOMATIC1111 WebUI]] Stable Diffusion API** exposes mode-specific endpoints: POST `/sdapi/v1/txt2img` for text-to-image, POST `/sdapi/v1/img2img` for image-to-image, POST `/sdapi/v1/extra-single-image` for upscaling. Each endpoint accepts a flat parameter object encoding all generation settings. This design encapsulates pipeline decisions in the server, simplifying client code at the expense of flexibility: adding a new capability (e.g., combining [[ControlNet]] with [[IP-Adapter]] with [[LoRA]] stacking) requires either a specialised endpoint or abusing generic fields, whereas in ComfyUI's graph model it requires only wiring additional nodes. The [[AUTOMATIC1111 WebUI]] API has broader familiarity among early [[Stable Diffusion]] developers but is increasingly superseded by ComfyUI for complex workflow requirements.

    The **[[InvokeAI]] API** takes an intermediate position: it exposes a node-graph execution model with typed nodes but wraps it in a more opinionated REST API with stronger schema validation, queue management via SSE (Server-Sent Events rather than [[WebSocket Protocol]]), and a formal OpenAPI specification. InvokeAI's node vocabulary is smaller and more curated than ComfyUI's, trading the breadth of the ComfyUI [[Custom Node Registry]] ecosystem for a more stable, documented API surface. InvokeAI is positioned toward enterprise and professional users who prioritise API stability over ecosystem breadth.

    The **Stability AI REST API** (and equivalents from Replicate, Leonardo.AI, Scenario.gg) exposes hosted inference behind simple JSON endpoints with no graph model at all: the pipeline is fixed server-side, and clients specify only content parameters (prompt, negative prompt, dimensions, seed, steps). These hosted APIs are maximally accessible but minimally composable; they represent the opposite end of the flexibility-simplicity spectrum from ComfyUI. ComfyUI's prompt API bridges this spectrum by exposing a full graph model while remaining accessible via simple HTTP JSON submission.

    The **Diffusers `DiffusionPipeline.from_pretrained()` Python API** exposes [[Diffusion Model]] inference as a [[Python]] object hierarchy rather than an HTTP service. ComfyUI wraps the Diffusers library (or its own parallel PyTorch implementations of the same models) in the HTTP/WebSocket API, converting Python method calls to network-accessible node invocations. The Diffusers API is more compositional at the Python level but requires in-process Python execution; ComfyUI's API enables language-agnostic and remote invocation.

  - ## Formal Analysis — DAG Execution Protocol
    The ComfyUI API Specification is formally an implementation of the typed [[Directed Acyclic Graph Execution]] pattern over a [[JSON Serialisation]] interchange format. The prompt API format encodes a DAG as an adjacency dictionary: each node object specifies its `class_type` (a string key into the node registry exposed at `/object_info`), its `inputs` (a mixed dictionary of either literal values or `[source_node_id, output_slot_index]` connection references), and optional positional metadata. The DAG is implicitly defined by the connection references: any node ID appearing in an `inputs` field is an ancestor of the referring node, and the transitive closure of this ancestor relation must be acyclic for a valid prompt — a constraint the ComfyUI scheduler enforces with a topological sort before execution begins. Cycles that would produce infinite loops — impossible in the flat-node model — are the primary semantic constraint the DAG schema enforces. The `/object_info` endpoint functions as the type system: each node type's input schema specifies which data types are acceptable at each input slot, and clients can validate that every connection reference connects a source output of the correct type to a destination input expecting that type, providing client-side correctness checking before round-tripping to the server.

    The [[WebSocket Protocol]] execution event sequence constitutes a formal observable: `execution_start` → zero or more (`execution_cached` | (`executing` → zero or more `progress`) | `b64_json`) → (`executed` | `execution_error`) → `executing`(null). The null-valued `executing` event is the canonical end-of-prompt sentinel; the `executed` event is a side-effect notification for terminal output nodes and is absent for purely internal computation nodes. Well-typed clients distinguish these two signals: `executed` delivers output file references; `executing`(null) terminates the execution loop. This two-signal design supports the common case where multiple terminal nodes (e.g., a SaveImage node and a PreviewImage node in the same workflow) each emit `executed` events; the final `executing`(null) marks the definitive end. The `/history/{prompt_id}` endpoint provides an idempotent retrieval path for clients that process outputs after rather than during execution, enabling stateless pull-based integration patterns alongside the stateful WebSocket push pattern.

  - ## Research & Literature

    1. comfyanonymous (2023). *ComfyUI: A powerful and modular stable diffusion GUI and backend*. GitHub. https://github.com/comfyanonymous/ComfyUI
    2. Comfy-Org (2024). *ComfyUI API Workflow JSON Specification*. https://docs.comfy.org/development/comfyui-server/comms_routes
    3. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). *High-resolution image synthesis with latent diffusion models*. CVPR 2022.
    4. Ho, J., Jain, A., & Abbeel, P. (2020). *Denoising diffusion probabilistic models*. NeurIPS 2020.
    5. Karras, T., Laine, S., Aila, T., et al. (2022). *Elucidating the design space of diffusion-based generative models*. NeurIPS 2022.
    6. Song, J., Meng, C., & Ermon, S. (2021). *Denoising diffusion implicit models*. ICLR 2021.
    7. Zhang, L., Rao, A., & Agrawala, M. (2023). *Adding conditional control to text-to-image diffusion models*. ICCV 2023.
    8. Ye, H., Zhang, J., Liu, S., Han, X., & Wei, Y. (2023). *IP-Adapter: Text compatible image prompt adapter for text-to-image diffusion models*. arXiv:2308.06721.
    9. Hu, E.J., Shen, Y., Wallis, P., et al. (2022). *LoRA: Low-rank adaptation of large language models*. ICLR 2022.
    10. Podell, D., English, Z., Lacey, K., et al. (2023). *SDXL: Improving latent diffusion models for high-resolution image synthesis*. arXiv:2307.01952.
    11. Guo, X., Wu, Q., Liu, J., et al. (2024). *GenAgent: Build collaborative AI systems with automated workflow generation — case studies on ComfyUI*. arXiv:2409.01392.
    12. SaladTechnologies (2024). *comfyui-api: A simple API server to make ComfyUI easy to scale horizontally*. GitHub. https://github.com/SaladTechnologies/comfyui-api
    13. ViewComfy (2025). *Building a production-ready ComfyUI API: A complete guide*. https://www.viewcomfy.com/blog/building-a-production-ready-comfyui-api
    14. BentoML (2025). *ComfyUI: Deploy workflows as APIs*. https://docs.bentoml.com/en/latest/examples/comfyui.html
    15. RunPod (2024). *Deploy ComfyUI as a serverless API endpoint*. https://www.runpod.io/blog/deploy-comfyui-as-a-serverless-api-endpoint
    16. Censys (2025). *Hackers are attempting to turn ComfyUI servers into a cryptomining proxy botnet*. https://censys.com/blog/comfyui-servers-cryptomining-proxy-botnet/
    17. NVD (2025). *CVE-2025-67303: ComfyUI-Manager information disclosure*. https://nvd.nist.gov/vuln/detail/CVE-2025-67303
    18. NVD (2025). *CVE-2025-6107: ComfyUI remote object attribute manipulation*. https://cert.kenet.or.ke/cve-2025-6107-comfyanonymous-comfyui-remote-object-attribute-manipulation-vulnerability
    19. TechCrunch (2026). *ComfyUI hits $500M valuation as creators seek more control over AI-generated media*. https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/
    20. Comfy-Org Blog (2026). *ComfyUI raises $30M to scale open-source AI for creative production*. https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
    21. Runflow (2026). *ComfyUI API: The complete developer's guide*. https://www.runflow.io/blog/comfyui-api-developer-guide
    22. Runflow (2026). *ComfyUI API endpoints: The complete 2026 reference*. https://www.runflow.io/blog/comfyui-api-endpoints
    23. Wireflow (2026). *Best ComfyUI cloud API tools in 2026*. https://www.wireflow.ai/blog/best-comfyui-cloud-api-tools-in-2026
    24. 9elements (2024). *Hosting a ComfyUI workflow via API*. https://9elements.com/blog/hosting-a-comfyui-workflow-via-api/
    25. Comfy-Org Blog (2025). *Partner nodes: Login via ComfyUI API key*. https://blog.comfy.org/p/api-nodes-login-via-comfyui-api-key
    26. Mystic AI (2025). *Run ComfyUI as an API*. https://docs.mystic.ai/docs/run-comfyui-as-an-api
    27. Guo et al. (2023). *AnimateDiff: Animate your personalized text-to-image diffusion models without specific tuning*. arXiv:2307.04725.
    28. Black Forest Labs (2024). *Flux.1: High-performance text-to-image generation*. https://blackforestlabs.ai

- ### Provenance
  - sources:: https://docs.comfy.org/development/comfyui-server/comms_routes; https://github.com/Comfy-Org/ComfyUI; https://techcrunch.com/2026/04/24/comfyui-hits-500m-valuation-as-creators-seek-more-control-over-ai-generated-media/; https://www.viewcomfy.com/blog/building-a-production-ready-comfyui-api; https://github.com/SaladTechnologies/comfyui-api; https://www.runpod.io/blog/deploy-comfyui-as-a-serverless-api-endpoint; https://nvd.nist.gov/vuln/detail/CVE-2025-67303; arXiv:2409.01392
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

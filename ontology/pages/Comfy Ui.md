public:: true

# Comfy Ui

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:comfy-ui",
  "@type": "Page",
  "title": "Comfy Ui",
  "vc:slug": "comfy-ui",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:generative-ai", "vc:label": "Generative AI"},
    {"@id": "urn:visionflow:linked:diffusion-model", "vc:label": "Diffusion Model"},
    {"@id": "urn:visionflow:linked:stable-diffusion", "vc:label": "Stable Diffusion"},
    {"@id": "urn:visionflow:linked:latent-diffusion", "vc:label": "Latent Diffusion"},
    {"@id": "urn:visionflow:linked:node-graph", "vc:label": "Node Graph"},
    {"@id": "urn:visionflow:linked:workflow-automation", "vc:label": "Workflow Automation"},
    {"@id": "urn:visionflow:linked:image-generation", "vc:label": "Image Generation"},
    {"@id": "urn:visionflow:linked:image-synthesis", "vc:label": "Image Synthesis"},
    {"@id": "urn:visionflow:linked:prompt-engineering", "vc:label": "Prompt Engineering"},
    {"@id": "urn:visionflow:linked:controlnet", "vc:label": "ControlNet"},
    {"@id": "urn:visionflow:linked:open-source-software", "vc:label": "Open Source Software"},
    {"@id": "urn:visionflow:linked:generative-model", "vc:label": "Generative Model"},
    {"@id": "urn:visionflow:linked:inpainting", "vc:label": "Inpainting"},
    {"@id": "urn:visionflow:linked:checkpoint-model", "vc:label": "Checkpoint Model"},
    {"@id": "urn:visionflow:linked:user-interface", "vc:label": "User Interface"},
    {"@id": "urn:visionflow:linked:lora-fine-tuning", "vc:label": "LoRA Fine-Tuning"},
    {"@id": "urn:visionflow:linked:vae", "vc:label": "VAE"},
    {"@id": "urn:visionflow:linked:clip", "vc:label": "CLIP"},
    {"@id": "urn:visionflow:linked:text-to-image", "vc:label": "Text to Image"},
    {"@id": "urn:visionflow:linked:image-to-image", "vc:label": "Image to Image"},
    {"@id": "urn:visionflow:linked:video-generation", "vc:label": "Video Generation"},
    {"@id": "urn:visionflow:linked:deep-generative-model", "vc:label": "Deep Generative Model"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:python", "vc:label": "Python"},
    {"@id": "urn:visionflow:linked:gpu-compute", "vc:label": "GPU Compute"},
    {"@id": "urn:visionflow:linked:api", "vc:label": "API"},
    {"@id": "urn:visionflow:linked:comfyui-workflows", "vc:label": "ComfyUI Workflows"},
    {"@id": "urn:visionflow:linked:comfyui-manager", "vc:label": "ComfyUI Manager"},
    {"@id": "urn:visionflow:linked:comfyui-api-specification", "vc:label": "ComfyUI API Specification"},
    {"@id": "urn:visionflow:linked:controlnet-conditioning", "vc:label": "ControlNet Conditioning"},
    {"@id": "urn:visionflow:linked:score-based-generative-model", "vc:label": "Score-Based Generative Model"},
    {"@id": "urn:visionflow:linked:upscaling", "vc:label": "Upscaling"},
    {"@id": "urn:visionflow:linked:batch-image-processing", "vc:label": "Batch Image Processing"},
    {"@id": "urn:visionflow:linked:generative-adversarial-network", "vc:label": "Generative Adversarial Network"},
    {"@id": "urn:visionflow:linked:machine-learning", "vc:label": "Machine Learning"},
    {"@id": "urn:visionflow:linked:outpainting", "vc:label": "Outpainting"},
    {"@id": "urn:visionflow:linked:content-production-workflow", "vc:label": "Content Production Workflow"},
    {"@id": "urn:visionflow:linked:digital-asset-workflow", "vc:label": "Digital Asset Workflow"},
    {"@id": "urn:visionflow:linked:noise-schedule", "vc:label": "Noise Schedule"},
    {"@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "Agentic Workflow"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:comfy-ui",
  "@type": "Class",
  "label": "Comfy Ui",
  "definition": "ComfyUI is an open-source, node-graph based interface for building and executing generative-AI image and video pipelines, most commonly around diffusion models such as Stable Diffusion. Users assemble workflows by wiring together nodes for model loading, sampling, conditioning and post-processing, giving fine-grained control over the generation graph. Its modular design supports extensions, custom nodes and reproducible, shareable workflows.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:generative-ai",
      "label": "Generative AI"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:comfyui-workflows", "label": "ComfyUI Workflows"},
      {"@id": "urn:ngm:class:comfyui-manager", "label": "ComfyUI Manager"},
      {"@id": "urn:ngm:class:comfyui-api-specification", "label": "ComfyUI API Specification"},
      {"@id": "urn:ngm:class:node-graph", "label": "Node Graph"},
      {"@id": "urn:ngm:class:checkpoint-model", "label": "Checkpoint Model"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:python", "label": "Python"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:stable-diffusion", "label": "Stable Diffusion"},
      {"@id": "urn:ngm:class:latent-diffusion", "label": "Latent Diffusion"},
      {"@id": "urn:ngm:class:node-graph", "label": "Node Graph"},
      {"@id": "urn:ngm:class:clip", "label": "CLIP"},
      {"@id": "urn:ngm:class:vae", "label": "VAE"},
      {"@id": "urn:ngm:class:lora-fine-tuning", "label": "LoRA Fine-Tuning"},
      {"@id": "urn:ngm:class:noise-schedule", "label": "Noise Schedule"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:image-synthesis", "label": "Image Synthesis"},
      {"@id": "urn:ngm:class:video-generation", "label": "Video Generation"},
      {"@id": "urn:ngm:class:inpainting", "label": "Inpainting"},
      {"@id": "urn:ngm:class:outpainting", "label": "Outpainting"},
      {"@id": "urn:ngm:class:batch-image-processing", "label": "Batch Image Processing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:controlnet", "label": "ControlNet"},
      {"@id": "urn:ngm:class:controlnet-conditioning", "label": "ControlNet Conditioning"},
      {"@id": "urn:ngm:class:upscaling", "label": "Upscaling"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"},
      {"@id": "urn:ngm:class:content-production-workflow", "label": "Content Production Workflow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"},
      {"@id": "urn:ngm:class:deep-generative-model", "label": "Deep Generative Model"},
      {"@id": "urn:ngm:class:score-based-generative-model", "label": "Score-Based Generative Model"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"},
      {"@id": "urn:ngm:class:digital-asset-workflow", "label": "Digital Asset Workflow"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "EnrichmentWave6"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:link-resolution:comfy-ui",
  "@type": "LinkResolutionsAnnotation",
  "resolves": [
    {"wikilink": "Generative AI", "@id": "urn:ngm:class:generative-ai"},
    {"wikilink": "Diffusion Model", "@id": "urn:ngm:class:diffusion-model"},
    {"wikilink": "Stable Diffusion", "@id": "urn:ngm:class:stable-diffusion"},
    {"wikilink": "Latent Diffusion", "@id": "urn:ngm:class:latent-diffusion"},
    {"wikilink": "Node Graph", "@id": "urn:ngm:class:node-graph"},
    {"wikilink": "Workflow Automation", "@id": "urn:ngm:class:workflow-automation"},
    {"wikilink": "Image Generation", "@id": "urn:ngm:class:image-generation"},
    {"wikilink": "Image Synthesis", "@id": "urn:ngm:class:image-synthesis"},
    {"wikilink": "Prompt Engineering", "@id": "urn:ngm:class:prompt-engineering"},
    {"wikilink": "ControlNet", "@id": "urn:ngm:class:control-net"},
    {"wikilink": "Open Source Software", "@id": "urn:ngm:class:open-source-software"},
    {"wikilink": "Generative Model", "@id": "urn:ngm:class:generative-model"},
    {"wikilink": "Inpainting", "@id": "urn:ngm:class:inpainting"},
    {"wikilink": "Checkpoint Model", "@id": "urn:ngm:class:checkpoint-model"},
    {"wikilink": "User Interface", "@id": "urn:ngm:class:user-interface"},
    {"wikilink": "LoRA Fine-Tuning", "@id": "urn:ngm:class:lora-fine-tuning"},
    {"wikilink": "VAE", "@id": "urn:ngm:class:vae"},
    {"wikilink": "CLIP", "@id": "urn:ngm:class:clip"},
    {"wikilink": "Text to Image", "@id": "urn:ngm:class:text-to-image"},
    {"wikilink": "Image to Image", "@id": "urn:ngm:class:image-to-image"},
    {"wikilink": "Video Generation", "@id": "urn:ngm:class:video-generation"},
    {"wikilink": "Deep Generative Model", "@id": "urn:ngm:class:deep-generative-model"},
    {"wikilink": "Neural Network", "@id": "urn:ngm:class:neural-network"},
    {"wikilink": "Python", "@id": "urn:ngm:class:python"},
    {"wikilink": "GPU Compute", "@id": "urn:ngm:class:gpu-compute"},
    {"wikilink": "API", "@id": "urn:ngm:class:api"},
    {"wikilink": "ComfyUI Workflows", "@id": "urn:ngm:class:comfyui-workflows"},
    {"wikilink": "ComfyUI Manager", "@id": "urn:ngm:class:comfyui-manager"},
    {"wikilink": "ComfyUI API Specification", "@id": "urn:ngm:class:comfyui-api-specification"},
    {"wikilink": "ControlNet Conditioning", "@id": "urn:ngm:class:controlnet-conditioning"},
    {"wikilink": "Score-Based Generative Model", "@id": "urn:ngm:class:score-based-generative-model"},
    {"wikilink": "Upscaling", "@id": "urn:ngm:class:upscaling"},
    {"wikilink": "Batch Image Processing", "@id": "urn:ngm:class:batch-image-processing"},
    {"wikilink": "Generative Adversarial Network", "@id": "urn:ngm:class:generative-adversarial-network"},
    {"wikilink": "Machine Learning", "@id": "urn:ngm:class:machine-learning"},
    {"wikilink": "Outpainting", "@id": "urn:ngm:class:outpainting"},
    {"wikilink": "Content Production Workflow", "@id": "urn:ngm:class:content-production-workflow"},
    {"wikilink": "Digital Asset Workflow", "@id": "urn:ngm:class:digital-asset-workflow"},
    {"wikilink": "Noise Schedule", "@id": "urn:ngm:class:noise-schedule"},
    {"wikilink": "Agentic Workflow", "@id": "urn:ngm:class:agentic-workflow"}
  ]
}
```

- ### Technical Specification
  - ComfyUI operates as a Python FastAPI server (backend) paired with a LiteGraph.js node canvas (frontend), communicating over a local WebSocket and REST API that is identical for both interactive and programmatic use. The server's execution engine performs topological sort on the workflow DAG to determine computation order, executes nodes in dependency order (exploiting PyTorch's lazy evaluation for efficient GPU memory management), and streams execution events to all connected WebSocket clients in real time. Custom nodes are Python classes loaded at startup from the `custom_nodes/` directory, registered via `NODE_CLASS_MAPPINGS`; each defines `INPUT_TYPES` (input schema with type annotations and default values), `RETURN_TYPES` (output data type tuple), `RETURN_NAMES` (optional output port labels), `FUNCTION` (method to call during execution), and `CATEGORY` (menu location). The workflow JSON schema uses integer node IDs as keys, each with `class_type` (registered node type name), `inputs` (dictionary mapping input names to either literal values or `[source_node_id, output_index]` connection references), and `_meta` metadata. This schema is the canonical interoperability format: the Comfy-Org 2024 Workflow JSON Specification formalises it for cross-platform portability and the [[ComfyUI API Specification]] documents the API contract for third-party clients.

- ### Definition
  - ComfyUI is an [[Open Source Software]] [[Node Graph]]-based graphical interface, execution engine, and [[API]] server for composing, executing, and automating [[Generative AI]] image and video pipelines, built on top of [[Diffusion Model]] architectures, most prominently [[Latent Diffusion]] models such as [[Stable Diffusion]], FLUX.1, and FLUX.2. Created by comfyanonymous in January 2023 and transferred to the Comfy-Org GitHub organisation, ComfyUI represents the shift from black-box [[Text to Image]] generation interfaces to explicit, inspectable, and fully composable generation graphs in which each processing stage — [[Checkpoint Model]] loading, [[CLIP]] text encoding, [[Noise Schedule]] configuration, latent sampling, [[VAE]] decoding, and post-processing — is wired together as a directed acyclic graph of typed nodes. This architecture gives advanced users and production pipelines fine-grained control unavailable in monolithic interfaces, enabling deterministic reproducibility through [[ComfyUI Workflows]] serialised as JSON documents that encode the full graph topology, node parameters, and model references. The extensibility mechanism — [[ComfyUI Manager]] and a community ecosystem of over 60,000 custom nodes as of 2025 — has allowed the platform to expand from static [[Image Generation]] to encompass [[Video Generation]], 3D generation, [[Upscaling]], [[ControlNet Conditioning]], audio synthesis, and [[Agentic Workflow]] execution. ComfyUI's [[ComfyUI API Specification]] exposes a WebSocket and REST interface identical to the UI's own communication with the backend, making it a production-grade [[Workflow Automation]] backend directly integrable into enterprise [[Content Production Workflow]] and [[Digital Asset Workflow]] systems. By 2025 ComfyUI had reached four million users, 150,000 daily downloads, and raised $30 million at a $500 million valuation, establishing itself as the de facto open-source engine for controlled generative visual AI, distinct from [[Generative Adversarial Network]] approaches and complementary to the [[Score-Based Generative Model]] theoretical framework underlying all diffusion architectures.

- ### Semantic Classification
  - owl-class:: ai:ComfyUi
  - owl-role:: Concept | ExecutableProtocol | WorkflowEngine | GenerativeAITool
  - owl-inferred:: ai:DiffusionPipeline, ai:NodeBasedWorkflowSystem, ai:OpenSourceGenerativeAIFramework
  - belongs-to-domain:: [[Generative AI]]
  - implemented-in-layer:: [[User Interface]]

- ### Relationships
  - is-subclass-of:: [[Generative AI]], [[Open Source Software]], [[Workflow Automation]], [[Node-Based Visual Programming]]
  - has-part:: [[ComfyUI Workflows]], [[ComfyUI Manager]], [[ComfyUI API Specification]], [[Node Graph]], [[Checkpoint Model]], [[KSampler]], [[WebSocket Protocol]], [[REST API]], [[Python Runtime]]
  - requires:: [[Diffusion Model]], [[GPU Compute]], [[Python]], [[PyTorch]], [[aiohttp]]
  - enables:: [[Image Generation]], [[Image Synthesis]], [[Video Generation]], [[Inpainting]], [[Outpainting]], [[Batch Image Processing]], [[Text to Image]], [[Image to Image]], [[Agentic Workflow]], [[Content Creation Pipeline]], [[Digital Asset Workflow]]
  - implements:: [[Workflow Automation]], [[Content Production Workflow]], [[Directed Acyclic Graph Execution]], [[Workflow JSON Format]], [[Workflow Serialisation]]
  - depends-on:: [[Latent Diffusion]], [[Stable Diffusion]], [[CLIP]], [[VAE]], [[Noise Schedule]], [[Diffusion Model]], [[Latent Diffusion Pipeline]]
  - supports:: [[Prompt Engineering]], [[ControlNet]], [[ControlNet Conditioning]], [[Upscaling]], [[LoRA Fine-Tuning]], [[IP-Adapter]], [[SDXL]], [[Flux.1]], [[AnimateDiff]], [[Latent Tensor]]
  - uses:: [[Stable Diffusion]], [[Latent Diffusion]], [[Node Graph]], [[CLIP]], [[VAE]], [[LoRA Fine-Tuning]], [[Noise Schedule]], [[JSON Serialisation]], [[WebSocket Protocol]], [[PyTorch]]
  - contrasts-with:: [[Generative Adversarial Network]], [[AUTOMATIC1111 WebUI]], [[InvokeAI]]
  - related-to:: [[Generative Model]], [[Deep Generative Model]], [[Score-Based Generative Model]], [[Agentic Workflow]], [[Digital Asset Workflow]], [[Image to Image]], [[Hugging Face Hub]], [[Machine Learning]], [[Neural Network]], [[Inference Orchestration System]]
  - standardized-by:: [[ComfyUI API Specification]], [[Comfy-Org GitHub Organisation]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:NodeGraph))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:ComfyUIWorkflows))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:ComfyUIManager))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:ComfyUIApiSpecification))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:CheckpointModel))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:SamplerNode))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:ConditioningNode))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:hasPart ai:PythonBackend))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:requires ai:DiffusionModel))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:requires ai:GpuCompute))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:requires ai:Python))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:dependsOn ai:LatentDiffusion))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:dependsOn ai:CLIP))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:dependsOn ai:VAE))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:dependsOn ai:NoiseSchedule))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:enables ai:ImageGeneration))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:enables ai:VideoGeneration))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:enables ai:Inpainting))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:enables ai:Outpainting))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:enables ai:BatchImageProcessing))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:ControlNetConditioning))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:LoRAFineTuning))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:PromptEngineering))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:WorkflowAutomation))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:ContentProductionWorkflow))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:NodeBasedProgramming))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:ApiServer))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:reducesTo ai:DiffusionPipeline))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:reducesTo ai:WorkflowGraph))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:reducesTo ai:GenerativeModel))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:reducesTo ai:ImageSynthesisPipeline))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:contrastsWith ai:GenerativeAdversarialNetwork))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:contrastsWith ai:AUTOMATIC1111WebUI))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:relatedTo ai:AgenticWorkflow))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:relatedTo ai:DigitalAssetWorkflow))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:Upscaling))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:IPAdapter))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:supports ai:Flux1))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:DirectedAcyclicGraphExecution))
      SubClassOf(ai:ComfyUi
        ObjectSomeValuesFrom(ai:implements ai:WorkflowJSONFormat))
      ```
  - ## About
    - ComfyUI was created by a developer operating under the pseudonym comfyanonymous and first published to GitHub in January 2023, emerging at a moment when the [[Stable Diffusion]] model family had just been released openly and the community was exploring how to harness it beyond the AUTOMATIC1111 WebUI's form-based interface. The core design philosophy distinguishes ComfyUI from every other [[Generative AI]] image tool: instead of presenting a simplified form with sliders and a single "generate" button, it exposes the complete [[Diffusion Model]] inference computation graph as a visual, interactive directed acyclic graph in which every processing stage — [[Checkpoint Model]] loading, [[CLIP]] text conditioning, [[Latent Diffusion]] space sampling, [[VAE]] decoding, and any post-processing step — is represented as a typed node with explicit input and output ports. Users wire these nodes together by drawing connections between ports, constructing a bespoke pipeline that can be arbitrarily complex. This approach was inspired by the node-graph paradigms of visual effects software such as Nuke and Blender's compositor, and of visual programming environments such as Pure Data and MAX/MSP, applied to the domain of deep generative model inference.
    - The immediate practical consequence of this design is that ComfyUI workflows are maximally reproducible and maximally inspectable. Every parameter of every node — the CFG guidance scale, the sampler algorithm, the denoising strength, the [[LoRA Fine-Tuning]] adapter weights and their blend ratios — is an explicit field in the workflow JSON document, not hidden in a preset or a template. Two users sharing a workflow JSON file on CivitAI or Hugging Face can reproduce exactly the same output given the same model weights and random seed. This reproducibility is the foundation of ComfyUI's use in professional production environments: a [[Content Production Workflow]] can be version-controlled, audited, and reliably replayed across team members and across time. In contrast, monolithic tools that hide their internal pipelines make this kind of systematic, repeatable production difficult to guarantee.
    - The platform's extensibility rests on two interlocking mechanisms. First, [[ComfyUI Manager]] — created by community developer ltdrdata and installed as a special bootstrap custom node — provides a full in-UI package manager that connects to a community-maintained index of custom node repositories. Users can search, install, update, enable, and disable custom nodes from within the ComfyUI interface without leaving it. As of 2025, the ecosystem comprised over 60,000 community-built nodes covering the full range of generative AI capabilities: [[ControlNet Conditioning]] adapters, face restoration and detailing (ADetailer), [[Video Generation]] (AnimateDiff, WAN 2.1, HunyuanVideo), 3D generation (Zero123++), audio synthesis (AudioLDM 2), image segmentation (Segment Anything), upscaling (ESRGAN, Real-ESRGAN), motion capture integration for animation, and [[Agentic Workflow]] triggers that allow ComfyUI pipelines to be orchestrated by external agents. Second, the [[ComfyUI API Specification]] — a WebSocket and REST API that is identical to the API the browser frontend uses to communicate with the [[Python]] backend — allows any external system to submit [[ComfyUI Workflows]] as JSON payloads, monitor execution progress via WebSocket events, and retrieve generated outputs via HTTP endpoints. This API-first architecture makes ComfyUI a headless [[Workflow Automation]] engine: studios, agencies, and SaaS platforms run ComfyUI instances behind HTTP load balancers, submitting thousands of generation requests per day through the same API a human user would invoke interactively. Comfy-Org's managed cloud platform (comfy.org, launched 2024) extends this with serverless autoscaling and per-node GPU billing.
    - The architectural evolution in 2024–2025 introduced a formal three-layer separation that reflects ComfyUI's maturation from community project to production platform. The [[Python]] backend layer handles all [[Machine Learning]] computation: model loading and caching, VRAM management across multiple [[Checkpoint Model]]s and adapters, execution graph topological sort, node function dispatch, and [[GPU Compute]] scheduling via PyTorch. The API layer is a FastAPI WebSocket and REST server: `/prompt` accepts workflow JSON, `/queue` reports queue depth, `/history` retrieves past executions, and `/ws` streams real-time execution events. The frontend layer is a LiteGraph.js node canvas combined with Vue 3 / TypeScript components for sidebars, galleries, and the new App View. This separation enabled the 2025 introduction of App View — a simplified mode that presents a [[ComfyUI Workflows]] as a fill-in-the-blanks form, hiding the node graph from non-expert users while retaining it for power users — and the Subgraph feature, which packages complex node combinations into single reusable composite nodes that appear as simple black-box nodes in other workflows, dramatically improving workflow modularity and enabling sharing of complex pipelines as opaque but reusable components.
  - ## Components / Architecture
    - **Python Backend** is a FastAPI-based asynchronous server that manages the execution queue, performs topological sort of the workflow graph, dispatches node functions, and caches loaded models in [[GPU Compute]] VRAM to avoid repeated disk I/O. Custom nodes are [[Python]] classes registered at server startup by populating the global `NODE_CLASS_MAPPINGS` dictionary (mapping node type name to class) and optionally `NODE_DISPLAY_NAME_MAPPINGS` (human-readable names). Each custom node class must define: `INPUT_TYPES` (a class method returning a dictionary of required and optional input slot specifications with types and default values), `RETURN_TYPES` (a tuple of output data type names), `FUNCTION` (the name of the method to call during execution), and optionally `CATEGORY` (location in the Add Node menu). This simple contract makes writing a new custom node accessible to any [[Python]] developer familiar with PyTorch, and has enabled the explosive growth of the custom node ecosystem. The execution engine performs lazy evaluation: nodes are only computed when their outputs are needed, and intermediate tensors are kept in VRAM when possible to avoid redundant decode–encode round-trips.
    - **WebSocket and REST API** constitutes the [[ComfyUI API Specification]]. The primary workflow submission endpoint (`POST /prompt`) accepts a JSON body with a `prompt` field containing the full workflow graph (nodes keyed by ID, each with class type, inputs, and position metadata) and optionally a `client_id` for WebSocket message routing. The `/queue` endpoint reports current queue depth and running jobs; `/history/{prompt_id}` retrieves the full execution log, node outputs, and any error traces for a past job. The `/ws` WebSocket endpoint streams execution events in real time: `execution_start`, `executing` (current node ID), `progress` (within-node iteration progress for samplers), `executed` (node completed, with output data), `execution_error`, and `execution_interrupted`. Image outputs are retrievable as binary data via `/view?filename=…`. This API is thoroughly documented at docs.comfy.org and is the same API the browser frontend uses, ensuring parity between interactive and programmatic usage. Libraries such as comfy-api-client (Python) and comfyui-client (TypeScript/JavaScript) provide high-level wrappers.
    - **[[Node Graph]] Canvas** uses LiteGraph.js, a lightweight JavaScript graph editor library, to render and manage the visual workflow DAG in the browser. Each node is represented as a rectangle with input sockets on the left, output sockets on the right, and parameter widgets (sliders, dropdowns, text boxes) embedded in the node body. Connections are drawn as bezier curves between output and input sockets, colour-coded by data type (conditioning signals, latent tensors, images, models, masks, floats, integers, strings are each rendered in a distinct colour). The Vue 3 frontend layer adds the sidebar (model browser, workflow queue, execution history) and the App View form that abstracts the node graph into a simplified interface for non-expert users. The new Subgraph feature (2025) allows selected nodes to be collapsed into a single composite node with a custom interface, enabling workflow libraries of reusable components.
    - **Model Management** is handled by dedicated loader nodes. The `CheckpointLoaderSimple` and `CheckpointLoader` nodes load a [[Checkpoint Model]] — a `.safetensors` file bundling UNet, CLIP text encoder(s), and [[VAE]] — from the `models/checkpoints/` directory, exposing the model, CLIP, and VAE as separate output pins. Standalone VAE, CLIP, and [[LoRA Fine-Tuning]] adapter weights have their own loader nodes (`VAELoader`, `CLIPLoader`, `LoraLoader`). The `LoraLoader` node patches both the UNet and CLIP encoder with the low-rank adapter weights at a specified strength, enabling stacking of multiple LoRA adapters with individual weights. [[ComfyUI Manager]] integrates with Hugging Face Hub and CivitAI model registries to support one-click model downloads to the correct directories from within the UI.
    - **[[Noise Schedule]] and Sampling** are the core of the [[Diffusion Model]] inference computation. The `KSampler` and `KSamplerAdvanced` nodes implement the full family of discrete and continuous [[Noise Schedule]] samplers: DDPM, DDIM (Song et al., 2020), DPM++ 2M, DPM++ SDE, Euler, Euler Ancestral, LMS, Heun, and others through the k-diffusion library integration. Users select the sampler name, scheduler (discrete cosine, Karras, exponential), the number of denoising steps, and the CFG guidance scale. The `KSamplerAdvanced` node additionally exposes the start and end step fractions, enabling partial denoising as in img2img or inpainting workflows. For [[Latent Diffusion]] models, the `EmptyLatentImage` node initialises a zero-noise latent of specified dimensions; for img2img, the `VAEEncode` node encodes an input image into latent space using the [[VAE]].
    - **[[ControlNet Conditioning]]** is implemented via the `ControlNetLoader` node (loading a [[ControlNet]] adapter weight file) and the `ControlNetApply` / `ControlNetApplyAdvanced` nodes that accept a control image (edge map, depth map, pose skeleton, segmentation mask, surface normal, line-art, or scribble) and a conditioning signal, and produce a modified conditioning that guides the denoiser spatially. Multiple ControlNets can be applied sequentially with independent strength values. Preprocessing of control images (Canny edge detection, MiDaS depth estimation, OpenPose keypoint extraction) is typically done in separate nodes provided by custom extensions such as comfyui_controlnet_aux. [[ControlNet]] conditioning can be combined freely with [[LoRA Fine-Tuning]] adapters and [[Prompt Engineering]] positive/negative conditioning in the same workflow graph.
    - **[[Video Generation]] nodes** were added to the ComfyUI core in 2024–2025 as video [[Diffusion Model]]s matured. WAN 2.1 (Alibaba, 2025) is natively supported with built-in workflow templates accessible from the Workflow Templates menu, supporting text-to-video and image-to-video generation at 480p and 720p resolutions with separate model files for each task. HunyuanVideo 1.5 (Tencent, 2025) is supported via nodes for 720p temporal-consistent video generation. AnimateDiff nodes insert learned temporal attention into any SD1.5-base image model to produce 8–32 frame animated sequences. NVIDIA RTX Video Super Resolution nodes (enabled on RTX 40 and 50 Series GPUs via TensorRT) provide real-time 4K upscaling of generated video frames as a post-processing node.
  - ## Use Cases / Major Families
    - **Advanced [[Text to Image]] generation** is the foundational use case for which ComfyUI was designed. The explicit node graph enables combinations of conditioning, sampling, and post-processing that are architecturally impossible in monolithic tools: stacking multiple [[LoRA Fine-Tuning]] adapters with individual strength blends to merge styles; applying different [[ControlNet Conditioning]] signals at different denoising steps to guide large-scale structure while freeing fine detail; using a regional conditioning node to apply different prompts to different spatial regions; running a high-res fix (generate at half resolution, upscale, then re-denoise at full resolution with a low strength) automatically within a single workflow. The FLUX.1 and FLUX.2 model families (Black Forest Labs) introduced Diffusion Transformer architectures with flow matching that complicates the standard K-sampler approach; ComfyUI adapted within days of each model release to support the new architectures, reflecting its role as the primary integration platform for new open-weight generative model releases.
    - **[[Image to Image]] and [[Inpainting]]** workflows encode an input image into latent space using the [[VAE]] encoder, add noise up to a specified strength fraction of the full [[Noise Schedule]], and then denoise from that point, causing the output to resemble the input at the chosen strength level. This enables style transfer, face swapping, background replacement, and incremental refinement. [[Inpainting]] extends this by supplying a binary mask that designates regions to regenerate while leaving unmasked regions unchanged; specialised inpainting-aware [[Checkpoint Model]]s (trained with masked-region conditioning) produce more coherent results in the masked area. [[Outpainting]] (extending an image beyond its original boundaries) uses a shifted canvas and a mask covering the extended region, and the tiled VAE extension enables processing of very large canvases by splitting them into overlapping tiles. These workflows are essential for product photography retouching, game asset generation with controlled placement, and film VFX pre-visualisation.
    - **Spatial [[ControlNet Conditioning]]** for precise structure control allows artists to guide the gross structure of generated images with reference maps derived from existing images, 3D models, or sketches. Common control modalities include: Canny edge maps (preserving sharp outlines), MiDaS or ZoeDepth depth maps (preserving 3D structure and depth ordering), OpenPose human body skeletons (precise character pose control for fashion and character art), Segment Anything masks (region-of-interest conditioning), surface normal maps (object surface orientation for product lighting), line-art and scribble inputs (hand-drawn structure guidance). Multiple [[ControlNet]] adapters can be active simultaneously, each with its own strength and applied-step range, enabling for example a depth-controlled background combined with a pose-controlled foreground character. This capability is heavily used in architectural visualisation, fashion e-commerce, game concept art, and advertising photography.
    - **[[Video Generation]]** has become a primary use case since 2024 as open-weight video diffusion models matured. WAN 2.1 (Alibaba, 2025) generates temporally consistent video clips of 1–5 seconds from a text prompt or a reference image at 480p or 720p; its ComfyUI workflow template, available from the Workflow Templates menu, includes pre-configured nodes for model loading, frame-count specification, and resolution selection. HunyuanVideo 1.5 (Tencent, 2025) generates higher-fidelity 720p video with improved motion quality. AnimateDiff modules inject temporal attention layers trained on video data into any SD1.5 image model, enabling smooth frame-to-frame animated sequences up to 32 frames. For all these models, ComfyUI's node graph enables post-processing pipelines — frame interpolation via FILM, upscaling via Real-ESRGAN, colour grading via custom LUT nodes — applied automatically after generation, producing broadcast-ready output from a single workflow execution.
    - **[[Batch Image Processing]] and production automation** leverage the queue and API to scale generation beyond interactive use. Studios submit hundreds or thousands of workflow executions per day through the REST API, varying input prompts, seeds, and conditioning images programmatically to produce diverse assets from a single master workflow. Silverside AI used this pipeline for the SVEDKA brand's 2026 Super Bowl commercial, reported as the first primarily AI-generated Super Bowl advertisement, demonstrating that ComfyUI at production scale can meet broadcast quality standards. Black Math uses ComfyUI to build modular creative pipelines connecting motion, texture, and generative tools, enabling "scalable design systems" for brand clients. The determinism of the workflow JSON format means the same creative pipeline can be run by different team members, on different hardware, at different times, always producing reproducible results given the same inputs and seed.
    - **Cloud and enterprise deployment** uses ComfyUI as a headless inference server. BentoML's comfy-pack tool (2025) packages a ComfyUI workflow and its model dependencies into a deployable BentoML service that autoscales on GPU cloud infrastructure. Comfy-Org's native cloud platform (comfy.org) offers managed serverless ComfyUI execution with per-node billing. Third-party hosting platforms including RunPod, Vast.ai, and Runflow provide one-click ComfyUI deployment on rented GPU instances. Enterprise deployments typically front ComfyUI with an authentication and job-management layer, integrate with internal [[Digital Asset Workflow]] management systems via webhook callbacks on workflow completion, and use the `/history` API to retrieve and archive generated assets.
    - **Research and rapid prototyping** leverage the custom node API as a Python research interface. A novel sampler — implementing a new SDE solver, a new noise schedule, a new guidance mechanism — can be tested by writing a single Python class with the required node interface and placing it in the custom_nodes directory; it appears in the node menu at the next server restart. This has made ComfyUI the de facto prototyping environment for diffusion model research: groups publish ComfyUI workflow files alongside papers to enable readers to reproduce experiments interactively. The explicit graph structure also makes ComfyUI useful for educational purposes, as students can inspect exactly what happens at each stage of the diffusion pipeline rather than treating generation as a black box.
  - ## Academic Context
    - ComfyUI's technical foundation rests on a stack of fundamental machine learning research papers spanning 2020–2024. The core generative mechanism is the Denoising Diffusion Probabilistic Model (DDPM) framework introduced by Ho, Jain, and Abbeel (NeurIPS 2020), which defined the forward diffusion (progressive noising) and reverse denoising processes that all subsequent diffusion-based image generators use. The [[Score-Based Generative Model]] framework of Song, Sohl-Dickstein, Kingma, Kumar, Ermon, and Poole (ICLR 2021) provided the continuous-time stochastic differential equation interpretation that unifies DDPM, score matching, and DDIM under a single theoretical umbrella, and enabled the development of efficient ODE-based samplers. Denoising Diffusion Implicit Models (DDIM; Song, Meng, and Ermon, 2020) accelerated generation by allowing fewer denoising steps without retraining, and k-diffusion library samplers (DPM++, Euler, Euler Ancestral, Heun) further extended the range of high-quality samplers available to the community — all of which are exposed as KSampler options in ComfyUI.
    - The [[Latent Diffusion]] architecture (Rombach, Blattmann, Lorenz, Esser, and Ommer, CVPR 2022) was the pivotal paper enabling practical high-resolution generation: by training the denoiser in the compressed latent space of a [[VAE]] rather than pixel space, compute requirements dropped by two orders of magnitude, making high-resolution generation feasible on consumer GPUs. This paper directly underlies [[Stable Diffusion]] and all subsequent [[Stable Diffusion]]-family models supported by ComfyUI. Classifier-free guidance (Ho and Salimans, NeurIPS Workshop 2021) introduced the mechanism by which positive and negative [[Prompt Engineering]] prompts are combined during sampling to increase adherence to the desired prompt — directly corresponding to the CFG scale parameter on every KSampler node. The [[CLIP]] model (Radford et al., 2021, OpenAI) serves as the text encoder that converts [[Prompt Engineering]] text into conditioning embeddings; the CLIPTextEncode node in ComfyUI wraps this model.
    - [[ControlNet]] (Zhang, Rao, and Agrawala, ICCV 2023) introduced the spatial conditioning architecture that extends diffusion models with structural guidance from reference images such as edge maps, depth maps, and pose skeletons. The architecture duplicates the U-Net encoder into a locked copy (preserving the pre-trained backbone) and a trainable copy connected through zero-convolution layers (initialised to zero weight and bias to prevent noise injection during early training), enabling fine-tuning on small paired datasets while maintaining the generative quality of the base model. ComfyUI's ControlNetApply and ControlNetApplyAdvanced nodes implement this architecture and are among the most widely used nodes in production workflows.
    - The FLUX.1 and FLUX.2 model families (Black Forest Labs, 2024–2026) departed from the U-Net backbone used by [[Stable Diffusion]] in favour of a Diffusion Transformer (DiT; Peebles and Xie, ICCV 2023) architecture combined with rectified flow matching, a continuous normalising flow formulation that straightens the generation trajectory to require fewer sampling steps. FLUX.1 [dev] (12B parameters, non-commercial licence) and FLUX.1 [schnell] (distilled 4-step version, Apache 2.0) were released in August 2024; FLUX.2 [klein] (4B parameters, Apache 2.0, ~13 GB VRAM, sub-second on RTX 50 Series) launched January 2026. ComfyUI supported all FLUX releases within days, maintaining its position as the community's primary integration platform for new open-weight model releases. LoRA fine-tuning for FLUX models requires the FLUX-specific LoRA loader node that accounts for the transformer rather than U-Net architecture.
    - Academic use of ComfyUI as a research prototyping and reproducibility platform has grown significantly. Papers on novel samplers, conditioning mechanisms, architecture variants, and diffusion model analysis increasingly publish ComfyUI workflow JSON files as supplementary material, allowing readers to reproduce experiments interactively without writing pipeline code. ComfyUI represents a novel practitioner-led software engineering paradigm in which [[Open Source Software]] node graphs serve simultaneously as user interface, research protocol, and production specification — a convergence that accelerates the transfer of academic innovations into practical deployment by making new techniques immediately accessible without requiring users to modify low-level code.
  - ## Current Landscape (2026)
    - The 2026 ComfyUI ecosystem is characterised by rapid commercial maturation alongside sustained open-source community growth. **Funding and organisational structure**: Comfy-Org closed a $30 million Series A funding round at a $500 million valuation in 2025, bringing total capital raised to $48 million. The organisation has transitioned from a solo developer project managed by comfyanonymous to a structured company with a commercial cloud platform (comfy.org), a formal SDK and extension API (the Vue 3 frontend extension system, cloud API nodes, and the Subgraph specification), and a revenue model based on managed cloud compute while keeping the core engine fully open-source. The GitHub repository (github.com/Comfy-Org/ComfyUI) has been transferred from the original comfyanonymous account to the Comfy-Org organisation.
    - **Community scale** is exceptional for a two-year-old open-source project: approximately 4 million users, 150,000 daily downloads, over 60,000 community-built custom nodes in the [[ComfyUI Manager]] index, and an active ecosystem of shared [[ComfyUI Workflows]] on CivitAI, Hugging Face, and comfy.org/workflows. The CivitAI platform — a dedicated community hub for [[Stable Diffusion]] and compatible model sharing — hosts tens of thousands of [[Checkpoint Model]]s, [[LoRA Fine-Tuning]] adapters, embeddings, and ComfyUI workflow files, creating a thriving creative economy around the platform.
    - **FLUX.2 integration** is the major model-side development of 2026. FLUX.2 [klein], released by Black Forest Labs in January 2026, is a 4-billion parameter Diffusion Transformer model distributed under an Apache 2.0 licence, requiring approximately 13 GB VRAM, generating images in under one second on NVIDIA RTX 50 Series GPUs, and supporting text-to-image, instruction-based image editing, and multi-reference prompting from multiple input images. ComfyUI provided day-zero support with dedicated CheckpointLoader variants for the FLUX.2 architecture, allowing immediate drop-in use with existing [[PromptEngineering]] and [[ControlNet Conditioning]] workflows adjusted for the transformer architecture.
    - **[[Video Generation]] milestone** in 2025–2026 elevates ComfyUI from an image generation tool to a comprehensive visual media pipeline. WAN 2.1 (Alibaba DAMO Academy, March 2025) is natively integrated as built-in workflow templates for both text-to-video and image-to-video at 480p and 720p resolutions. HunyuanVideo 1.5 (Tencent, 2025) adds 720p generation with superior temporal consistency, supporting longer clips with smooth motion. At Game Developers Conference 2025, NVIDIA and ComfyUI co-presented local real-time AI video generation workflows targeting game developers for concept exploration and in-engine asset generation. NVIDIA RTX Video Super Resolution (4K upscaling via LTX-2 or Real-ESRGAN nodes, accelerated by TensorRT on RTX 40/50 Series) is available as a post-processing step.
    - **Performance improvements** from 2024 to 2026 have dramatically lowered the [[GPU Compute]] cost of running ComfyUI workflows. NVFP4 format (NVIDIA, 2025/2026), supported on RTX 50 Series GPUs via ComfyUI's PyTorch backend, delivers 2.5× speed improvement and 60% VRAM reduction compared to FP16 for compatible FLUX and SD models. FP8 quantisation, supported on RTX 40 Series GPUs, delivers 1.7× speed and 40% VRAM reduction. Overall performance on RTX GPUs improved by approximately 40% between September 2024 and June 2026 through solver optimisations, attention kernel improvements (FlashAttention 3 on Ampere and later), and model loading speed-ups.
    - **Security considerations** have become significant as ComfyUI is deployed in enterprise environments. Snyk Labs (2024) documented that malicious custom nodes can execute arbitrary [[Python]] code at installation time, as ComfyUI's extensibility mechanism gives custom nodes full access to the [[Python]] runtime and file system. [[ComfyUI Manager]] introduced a community trust scoring system (distinguishing nodes in the official index, community-verified, and unverified), model hash verification (to detect tampered model weights), and an optional sandboxed execution mode that runs custom nodes in a restricted subprocess; enterprise deployments should additionally apply network isolation, allowlisting of approved custom node repositories, and regular security audits of installed extensions.
    - **Competitive landscape**: AUTOMATIC1111 Stable Diffusion WebUI (AUTOMATIC1111, A1111) remains widely used for simpler text-to-image workflows with a more approachable form-based interface, but lacks ComfyUI's pipeline composability and API. InvokeAI targets creative professionals with an artist-oriented interface combining a canvas editor with node-graph backend, positioned between A1111's simplicity and ComfyUI's power. Fooocus abstracts parameters further into a Midjourney-like experience for casual users. ComfyUI holds the unchallenged position for power users, production automation, and any use case requiring fine-grained pipeline control, API integration, or custom node development.
  - ## UK Context
    - ComfyUI does not originate in the UK, but it has achieved strong and growing adoption across UK digital creative industries, games development, VFX production, broadcast media, and academic research. The UK creative technology sector is a significant locus of practical AI image and video generation work, and ComfyUI's combination of power-user control, [[Open Source Software]] accessibility, and production-grade [[API]] has made it the preferred platform for technically sophisticated UK creative practitioners.
    - The UK games industry — concentrated in London, Guildford, Leamington Spa, Brighton, Dundee, and Manchester — has been an early adopter of AI-assisted content generation tools. Several studios have reported developing internal [[ComfyUI Workflows]] libraries for concept art generation, character design exploration, environment texture generation, and promotional asset production. The BAFTA Games division and TIGA (The Independent Game Developers' Association) have both included AI creative tools — including ComfyUI — in industry surveys and educational resources targeting studios of all sizes. Abertay University's game design programme in Dundee, which feeds graduates into Rockstar North (Edinburgh) and Outplay Entertainment (Dundee), has incorporated ComfyUI into its AI-for-games curriculum alongside prompt engineering and model fine-tuning. Teesside University's Games Academy in Middlesbrough includes ComfyUI for AI-assisted concept art generation in its game art modules, training the next generation of artists to work alongside generative tools rather than against them.
    - UK's Creative Industries Cluster Programme (UKRI-funded) includes multiple clusters with AI-for-creative-production workstreams where [[Diffusion Model]] pipeline tooling is central. The StoryFutures Academy (Royal Holloway, University of London) and the Creative Industries Policy and Evidence Centre (PEC) at Nesta have both published research on generative AI in UK creative industries, noting ComfyUI's role in enabling "practitioner-led AI" — where creative professionals control the tools rather than being dependent on black-box services.
    - **London VFX corridor**: London's concentration of VFX studios — Framestore, Double Negative (DNEG), Milk VFX, Jellyfish Pictures, and others — provides fertile ground for ComfyUI adoption in concept visualisation, pre-visualisation, and increasingly in background and environment [[Image Generation]] for film and television production. The UK's VFX industry has engaged closely with Generative AI ethics questions, particularly around artist rights, and ComfyUI's transparency (explicit workflows, model provenance tracking) and local execution model (no cloud dependency, no data leaving the studio) have made it more acceptable to union and guild members than black-box cloud services.
    - **Northern England**: Manchester's MediaCityUK complex — housing BBC, ITV, dock10 studios, and a cluster of digital agencies — has piloted AI-assisted content tools in post-production pipelines. Leeds-based digital agencies and the Channel 4 innovation unit (Leeds) have explored ComfyUI for broadcast graphic generation and promotional content. Sheffield's Showroom Workstation creative hub and S1 Artspace have hosted community workshops on ComfyUI for local artists and independent filmmakers, extending access to generative AI tools beyond studio contexts into the independent creative sector. Newcastle's Northumbria University School of Design has included generative AI tools in its Digital Design practice curriculum, and the Baltic Centre for Contemporary Art (Gateshead) has supported artist residencies exploring AI image generation.
    - **Academic UK research context**: UCL's Computational Media and Arts Lab has published work on controllable and interpretable AI image generation tools; King's College London's Digital Humanities department has explored AI image generation workflows for cultural heritage visualisation, where [[ControlNet Conditioning]] from historical photographs enables controlled stylistic synthesis of historical environments. The Royal College of Art's Innovation Design Engineering programme has used ComfyUI for experimental textile pattern generation and fashion concept prototyping. Imperial College London's Human-Centred Computing research group has examined [[Node Graph]] interfaces as a cognitive tool for expert-level control over complex AI systems, studying how visual programming affects practitioners' mental models of the underlying [[Machine Learning]] processes. The Alan Turing Institute's data-centric AI programme has supported work on reproducibility and provenance in AI-assisted creative production that aligns closely with ComfyUI's workflow-serialisation design philosophy.
  - ## Future Directions (2026–2030)
    - The next five years will likely see ComfyUI evolve from a powerful specialist tool into a more general visual computing platform for AI-assisted media production, driven by multimodal model expansion, agentic integration, accessibility improvements, and governance requirements.
    - **Native multi-modal [[ComfyUI Workflows]]**: the node graph paradigm translates naturally to other generative modalities beyond images and video. Audio generation ([[Diffusion Model]]-based models such as AudioLDM 2 and Stable Audio) is already supported by community nodes; 3D asset generation (Zero123++, Shap-E, recent DiT-based 3D models) is an active development area. The convergence of these modalities into unified workflows — generate a product shot image, extract 3D geometry, synthesise ambient audio, composite into video — requires ComfyUI to manage heterogeneous data types (audio tensors, 3D meshes, video buffers) alongside image latents, which is the primary near-term engineering challenge. Comfy-Org's extension of the type system and node contract to cover these new data types is expected to land in 2026–2027.
    - **[[Agentic Workflow]] integration**: ComfyUI's REST API makes it a natural tool-call target for AI agent orchestration frameworks (LangChain, AutoGen, OpenAI Assistants, Claude Tool Use). Community custom nodes already exist that allow LLM agents to dynamically generate, modify, and submit [[ComfyUI Workflows]] based on high-level creative briefs, with the LLM deciding which nodes to use, what parameters to set, and how to wire the graph. Self-correcting generation loops — where a vision-language model evaluates generated outputs and triggers regeneration with modified [[Prompt Engineering]] or conditioning if quality criteria are not met — are a promising near-term use case. Human-in-the-loop approval gates, implemented as pause-and-notify nodes that halt execution and send Slack or email notifications for human review before proceeding, are already used in production pipelines.
    - **Serverless and edge deployment**: progressive reduction in [[GPU Compute]] requirements through NVFP4 quantisation, GGUF format support, and INT4/INT8 model compression is moving the compute threshold for ComfyUI from dedicated GPU servers toward consumer laptops (M3/M4 MacBooks with unified memory), gaming PCs (RTX 3060 / RX 7600), and eventually towards NPU-accelerated mobile devices. Comfy-Org has acknowledged mobile client development as a roadmap item; browser-based execution of small models via WebGPU and WebAssembly is a longer-term possibility. Edge deployment would enable on-device [[Image Generation]] for privacy-sensitive applications (medical imaging, personal photography) that currently cannot use cloud APIs.
    - **Standardised workflow interoperability**: Comfy-Org's Workflow JSON Specification (2024) is a first step toward cross-platform portability, documenting the schema for ComfyUI workflow files in a way that could enable execution on InvokeAI, cloud APIs, and other frameworks. Full interoperability would require agreement on node type naming conventions and data type schemas across the ecosystem — a significant coordination challenge given the fragmented custom node landscape. The C2PA (Coalition for Content Provenance and Authenticity) standard for content provenance metadata is being integrated into Comfy-Org's roadmap to provide cryptographic attestation of which model generated which output, addressing broadcast and advertising industry governance requirements.
    - **[[Diffusion Model]] policy and control applications beyond media**: the [[Diffusion Model]] architecture's ability to generate complex, structured outputs has been applied to robot action generation (Diffusion Policy; Chi et al., 2023), molecule design, and protein structure generation. ComfyUI's node-graph paradigm is being explored in research contexts as a visual programming interface for robot behaviour specification, where nodes represent perception, reasoning, and motor command stages rather than image processing stages, extending the ComfyUI metaphor well beyond its image generation origins.
    - **Content governance and regulation compliance**: as ComfyUI is adopted in regulated creative industries (broadcast advertising, financial services marketing, political content), requirements for content watermarking, model attribution, and responsible use policy enforcement will intensify. The UK's Online Safety Act and emerging EU AI Act provisions around synthetic media require that AI-generated content be labelled; Comfy-Org has indicated development of built-in C2PA provenance node support that would embed cryptographically signed content credentials in every generated image. Model safety filtering (blocking known CSAM-related prompts, complying with OFCOM guidance) and access control (restricting which [[Checkpoint Model]]s can be used in enterprise deployments) are parallel tracks of platform governance development.
  - ## Key Terminology
    - **Node**: a processing unit in the ComfyUI [[Node Graph]] with typed input ports (on the left, connecting to outputs of upstream nodes or to widget parameter inputs) and typed output ports (on the right, feeding into downstream nodes). Each node corresponds to a [[Python]] class registered in the global `NODE_CLASS_MAPPINGS` dictionary, with `INPUT_TYPES` defining input schema and `RETURN_TYPES` defining output data types. The node execution function is called by the scheduler when all its inputs are available.
    - **[[ComfyUI Workflows]]**: a serialised JSON document encoding the full directed graph of nodes, connections, parameter widget values, and node positional layout metadata. The workflow JSON is the fundamental unit of portability in ComfyUI: sharing a workflow file enables exact reproduction of a generation pipeline on any compatible ComfyUI installation with the same models. The [[ComfyUI API Specification]] accepts workflow JSON via the `/prompt` endpoint.
    - **[[Checkpoint Model]]**: a combined weight file (typically in `.safetensors` format for safety, occasionally `.ckpt` for older models) bundling the UNet (or Diffusion Transformer for FLUX), [[CLIP]] text encoder(s), and [[VAE]] for a given model family (SD 1.5, SDXL, FLUX.1, FLUX.2). Loaded by the `CheckpointLoaderSimple` or `CheckpointLoader` node, which outputs separate model, CLIP, and VAE pins. Sourced from Hugging Face Hub or CivitAI.
    - **[[LoRA Fine-Tuning]]**: Low-Rank Adaptation adapter — a small set of weight matrices that modify the base [[Checkpoint Model]]'s behaviour to specialise it towards a specific style, character, concept, or domain. Loaded by the `LoraLoader` node, which accepts the base model and CLIP, applies the LoRA matrices at a configurable strength (0.0 to 1.0+), and outputs the patched model and CLIP. Multiple LoRA adapters can be stacked by chaining LoraLoader nodes, with each adding its influence at its specified strength.
    - **KSampler**: the primary [[Noise Schedule]] denoiser node in ComfyUI, implementing the discrete step reverse diffusion sampling process. Accepts: model (the UNet/DiT), positive conditioning (positive [[Prompt Engineering]] [[CLIP]] embedding), negative conditioning (negative prompt [[CLIP]] embedding), latent image (the starting noise tensor), sampler name (DDIM, DPM++, Euler, Euler Ancestral, Heun, etc.), scheduler (discrete, Karras, exponential), steps (number of denoising iterations), cfg (classifier-free guidance scale), seed (for reproducibility), and denoise (fraction of full noise schedule, for img2img). Outputs a denoised latent tensor.
    - **CFG (Classifier-Free Guidance) scale**: the guidance scale parameter on the KSampler controlling the strength of conditioning adherence. At CFG = 1.0, the model samples without guidance (unconditional). At CFG = 7.5 (a common default), the model strongly follows the positive [[Prompt Engineering]] prompt while suppressing patterns correlated with the negative prompt. Higher CFG values (12–20) increase prompt adherence but reduce diversity and introduce saturation artefacts; FLUX models typically operate at lower CFG values (1.0–3.5) due to their flow-matching architecture.
    - **[[VAE]] (Variational Autoencoder)**: in the [[Latent Diffusion]] context, the VAE compresses pixel-space images into compact latent representations (typically 8× spatial downsampling) for efficient diffusion, and decodes latents back to pixels after denoising. The VAEEncode node converts an input image to latent space for [[Image to Image]] or [[Inpainting]] workflows; the VAEDecode node converts the KSampler output latent back to an image tensor for display or saving. Some [[Checkpoint Model]]s bundle a VAE, but standalone VAEs (often EMA-averaged for better quality) can be loaded separately.
    - **[[ComfyUI Manager]]**: community-built package manager custom node (author: ltdrdata) that provides an in-UI interface for discovering, installing, updating, enabling, and disabling custom node repositories from the community index. Also provides model downloading via integration with Hugging Face Hub and CivitAI APIs, missing node detection (identifying nodes required by a loaded workflow that are not installed), and a security trust scoring system distinguishing curated, community-verified, and unverified custom node repositories.
    - **Subgraph**: a composite node introduced in 2025 that packages a group of connected nodes into a single encapsulated node with a custom interface. Within a Subgraph, the internal node graph is hidden from the outer workflow; only explicitly exposed inputs and outputs appear as ports. Subgraphs enable sharing and reuse of complex pipeline components as single black-box nodes, improving workflow modularity in large [[Content Production Workflow]] libraries.
    - **Conditioning**: the typed data representing the guidance signal for the denoiser, produced by CLIPTextEncode nodes (text conditioning) or ControlNetApply nodes (spatial conditioning). Conditioning is separate from the model itself, enabling mixing and blending of multiple conditioning signals (positive/negative prompts, [[ControlNet]] structure maps, IP-Adapter style embeddings) before being passed to the KSampler.
    - **Latent space**: the compressed representation space in which the [[Diffusion Model]] performs its denoising computation in [[Latent Diffusion]] architectures. Images are encoded into latent space by the [[VAE]] encoder, noised and denoised by the UNet or Diffusion Transformer, and decoded back to pixel space by the VAE decoder. The latent space dimensionality (e.g., 4 × 64 × 64 for SD 1.5 with 512×512 input images, or 16 × 128 × 128 for SD3 with 1024×1024 input) directly affects [[GPU Compute]] memory and compute requirements.
  - ## ComfyUI in the Context of Generative AI Tooling
    - ComfyUI occupies a distinctive position in the [[Generative AI]] tooling landscape by being simultaneously the most technically capable and the most extensible open-source tool for [[Diffusion Model]] inference, while also being among the most demanding for new users. Its design philosophy — explicit graph, explicit parameters, explicit connections — is the antithesis of the "one prompt, one button" paradigm of consumer AI image generators such as Midjourney or DALL-E 3. This makes ComfyUI the tool of choice for practitioners who need to understand, control, and reproduce every aspect of the generation process, but creates a steep learning curve for casual users. The 2025 App View feature represents an attempt to bridge this gap: a workflow author designs the full node graph, then publishes it as a simplified form that exposes only the user-facing parameters (prompt, image dimensions, output format), hiding the underlying graph complexity behind a clean UI. This "app in a workflow" paradigm could dramatically broaden ComfyUI's user base while preserving the underlying technical sophistication that power users rely on.
    - The relationship between ComfyUI and [[Stable Diffusion]] has been formative: ComfyUI was the first tool to fully support SDXL, SDXL-Turbo, SD3, and all subsequent major [[Latent Diffusion]] model releases, typically within days of public release. This rapid integration has made ComfyUI the de facto testing ground for new models in the community, and model developers from stability.ai, Black Forest Labs, Tencent, Alibaba, and independent researchers routinely release ComfyUI example workflows alongside their model weights. The result is a virtuous cycle: new models attract users to ComfyUI, users build and share workflows, which attract more users and more custom node developers, further expanding the platform's capabilities.
    - The transition from [[Stable Diffusion]]'s U-Net architecture to Diffusion Transformer (DiT) models for the FLUX family and from denoising score matching to flow matching as the training objective has required significant adaptation in ComfyUI's core sampler infrastructure. Flow matching models use a different noise schedule (linear interpolation between data and noise rather than variance-preserving diffusion) and typically require fewer sampling steps (4–8 for FLUX.1 [schnell] vs 20–50 for SD 1.5). ComfyUI's abstraction of samplers as interchangeable node components made this transition smoother than for tools with hardcoded sampling logic: adding FLUX sampler support required implementing the flow-matching schedule in the k-diffusion sampler wrapper, a modular change that did not affect other models. This architectural flexibility is a key competitive advantage over monolithic tools.
    - From the perspective of AI research and [[Machine Learning]] practice, ComfyUI's node graph serves as a form of visual domain-specific language for [[Deep Generative Model]] inference pipelines. Each node is a pure function (inputs → outputs) with no hidden state beyond the VRAM-cached model weights; the graph is an explicit data-flow specification that can be statically analysed, automatically parallelised, and translated to other execution backends. This makes ComfyUI workflows a candidate for automated compilation to optimised inference kernels (TensorRT, torch.compile with graph capture), workflow-level caching (returning cached outputs for repeated sub-graph executions), and hardware-heterogeneous execution (routing some nodes to CPU, some to GPU, some to remote cloud APIs).

  - ## Formal Analysis — Dataflow Graph Semantics
    - ComfyUI's node graph is formally a [[Directed Acyclic Graph Execution|typed DAG dataflow program]]. Each [[Workflow Node]] is a pure function mapping typed input tokens to typed output tokens; typed edges encode the data dependencies between nodes. The seven principal data types in the type system — MODEL (UNet or Diffusion Transformer weight handle), CLIP (text encoder handle), VAE (variational autoencoder handle), CONDITIONING (text or spatial conditioning tensor), LATENT (latent tensor batch), IMAGE (pixel tensor batch), MASK (binary mask tensor) — form a typed algebra in which the type of every edge constrains which source and destination node types can be legally connected. This type system is enforced visually by the LiteGraph.js canvas (colour-coded ports) and programmatically by the `/object_info` introspection endpoint which publishes the input type schema for every installed [[Workflow Node]] `class_type`.
    - The execution semantics correspond to Kahn Process Networks (Kahn, 1974): the topological sort of the workflow DAG determines a valid execution order in which every node is executed only after all its input-producing nodes have completed. The ComfyUI scheduler performs this topological sort at prompt submission time and executes nodes in the resulting linear order within a single Python thread (GPU async allows overlapping execution for CUDA kernels). The output cache — keyed by (class_type, input hash) — provides memoisation: nodes with identical inputs to a previous execution reuse cached outputs, enabling efficient iterative experimentation where the user varies only a single parameter (e.g., the seed or CFG scale) and all other upstream nodes reuse cached outputs without re-execution. This caching behaviour, surfaced as `execution_cached` WebSocket events, is the primary mechanism that makes interactive iteration on a complex multi-stage [[ComfyUI Workflows]] pipeline feel responsive despite the multi-second GPU execution time of each node.
    - The Subgraph abstraction (2025) extends the flat DAG model to a hierarchical DAG-of-DAGs: a Subgraph is itself a typed node with externally visible input and output ports, encapsulating an inner workflow DAG. The inner DAG is opaque to the outer workflow except through its exposed ports, enabling compositional encapsulation analogous to function abstraction in lambda calculi. Multiple Subgraph instantiations of the same template in a workflow execute independently, enabling parallelism at the subgraph level that complements the intra-node GPU parallelism provided by [[GPU Compute|PyTorch CUDA kernels]].

  - ## Major Variants and Ecosystem Forks
    - **AUTOMATIC1111 Stable Diffusion WebUI (A1111)** — the predecessor that ComfyUI was designed to complement rather than replace. A1111 uses a form-based interface with sliders and presets, hiding the [[Diffusion Model]] pipeline behind a simplified UI. It lacks ComfyUI's composability and [[ComfyUI API Specification|programmatic API]] equivalence, but remains widely used for its lower barrier to entry and its large library of extensions. The [[AUTOMATIC1111 WebUI]] Stable Diffusion API is a mode-specific REST API (unlike ComfyUI's graph-level API) and is the primary contrast case for understanding ComfyUI's design philosophy of externalising the pipeline graph.
    - **InvokeAI** — a node-graph-based alternative that shares ComfyUI's typed DAG model but targets creative professionals with a more polished UX, a formal OpenAPI specification, stronger schema validation, and a canvas editor for non-destructive image editing. [[InvokeAI]] positions itself between A1111's simplicity and ComfyUI's power, trading the breadth of ComfyUI's [[ComfyUI Manager]] custom node ecosystem for greater API stability and enterprise support. Its SSE-based streaming model contrasts with ComfyUI's [[WebSocket Protocol]] approach.
    - **Fooocus** — a Midjourney-inspired abstraction layer over [[Stable Diffusion]] XL that hides all technical parameters behind a minimalist two-prompt interface and automatic style selection. Fooocus does not expose a node graph or programmable [[REST API]]; it maximises accessibility at the expense of control. It demonstrates the opposite end of the design space from ComfyUI: if ComfyUI is a visual programming environment for generative pipelines, Fooocus is a creative assistant that makes all pipeline decisions autonomously.
    - **ComfyUI-Extended / ComfyUI Portable** — the official Windows portable installation (comfyanonymous and Comfy-Org releases) packages ComfyUI with Python and dependencies in a standalone directory that requires no Python installation, lowering the barrier for Windows users. ComfyUI Desktop (2025) goes further, packaging ComfyUI as a native desktop application with auto-update, one-click model downloads, and built-in [[ComfyUI Manager]] integration, targeting non-technical creative users who previously found command-line installation prohibitive.
    - **ComfyDeploy / ViewComfy / RunComfy** — managed cloud platforms that expose a simplified API (single-endpoint REST) backed by ComfyUI worker pools running on cloud GPU infrastructure, abstracting away queue management, model storage, and [[GPU Compute]] provisioning. These platforms consume the [[ComfyUI API Specification]] internally while exposing a simplified surface to their own customers, demonstrating ComfyUI's role as an infrastructure layer beneath higher-level platforms.

  - ## Research & Literature
    - 1. Ho, J., Jain, A., & Abbeel, P. (2020). Denoising Diffusion Probabilistic Models. *NeurIPS 2020*. arXiv:2006.11239
    - 2. Song, Y., Sohl-Dickstein, J., Kingma, D. P., Kumar, A., Ermon, S., & Poole, B. (2021). Score-based generative modeling through stochastic differential equations. *ICLR 2021*. arXiv:2011.13456
    - 3. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-resolution image synthesis with latent diffusion models. *CVPR 2022*. arXiv:2112.10752
    - 4. Ho, J., & Salimans, T. (2022). Classifier-free diffusion guidance. *NeurIPS Workshop 2021*. arXiv:2207.12598
    - 5. Zhang, L., Rao, A., & Agrawala, M. (2023). Adding conditional control to text-to-image diffusion models (ControlNet). *ICCV 2023*. arXiv:2302.05543
    - 6. Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., ... & Sutskever, I. (2021). Learning transferable visual models from natural language supervision (CLIP). *ICML 2021*. arXiv:2103.00020
    - 7. Blattmann, A., Dockhorn, T., Kulal, S., Mendelevitch, D., Kilian, M., Lorenz, D., ... & Rombach, R. (2023). Stable Video Diffusion. arXiv:2311.15127
    - 8. Peebles, W., & Xie, S. (2023). Scalable diffusion models with transformers (DiT). *ICCV 2023*. arXiv:2212.09748
    - 9. Black Forest Labs (2024). FLUX.1: Technical Report. https://blackforestlabs.ai/announcing-black-forest-labs/
    - 10. Black Forest Labs (2026). FLUX.2 [klein] model card. https://huggingface.co/black-forest-labs/FLUX.2-klein
    - 11. Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., ... & Chen, W. (2022). LoRA: Low-rank adaptation of large language models. *ICLR 2022*. arXiv:2106.09685
    - 12. comfyanonymous (2023). ComfyUI: The most powerful and modular diffusion model GUI and backend. GitHub. https://github.com/comfy-org/ComfyUI
    - 13. Comfy-Org (2024). ComfyUI API Specification. https://docs.comfy.org
    - 14. Comfy-Org (2025). ComfyUI raises $30M to scale open-source AI for creative production. https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open
    - 15. Comfy-Org (2025). Made with ComfyUI 2025: From open source to the world stage. https://blog.comfy.org/p/made-with-comfyui-2025-from-open
    - 16. Comfy-Org (2025). Updates for WAN 2.1 and Hunyuan image to video ComfyUI workflows. https://blog.comfy.org/p/updates-for-wan-21-and-hunyuan-image
    - 17. NVIDIA (2025). NVIDIA and ComfyUI streamline local AI video generation for game developers at GDC. https://blogs.nvidia.com/blog/rtx-ai-garage-flux-ltx-video-comfyui-gdc/
    - 18. NVIDIA (2026). FLUX.2 image generation models now released, optimised for NVIDIA RTX GPUs. https://blogs.nvidia.com/blog/rtx-ai-garage-flux-2-comfyui/
    - 19. NVIDIA (2026). NVIDIA RTX accelerates 4K AI video generation on PC with LTX-2 and ComfyUI upgrades. https://blogs.nvidia.com/blog/rtx-ai-garage-ces-2026-open-models-video-generation/
    - 20. Snyk Labs (2024). Hacking ComfyUI through custom nodes. https://labs.snyk.io/resources/hacking-comfyui-through-custom-nodes/
    - 21. Sacra (2025). ComfyUI: valuation, funding and news. https://sacra.com/c/comfyui/
    - 22. Song, J., Meng, C., & Ermon, S. (2020). Denoising Diffusion Implicit Models (DDIM). *ICLR 2021*. arXiv:2010.02502
    - 23. Nichol, A., & Dhariwal, P. (2021). Improved denoising diffusion probabilistic models. *ICML 2021*. arXiv:2102.09672
    - 24. Dhariwal, P., & Nichol, A. (2021). Diffusion models beat GANs on image synthesis. *NeurIPS 2021*. arXiv:2105.05233
    - 25. Chi, C., Feng, S., Du, Y., Xu, Z., Cousineau, E., Burchfiel, B., & Song, S. (2023). Diffusion Policy: Visuomotor policy learning via action diffusion. *RSS 2023*. arXiv:2303.04137
    - 26. Podell, D., English, Z., Lacey, K., Blattmann, A., Dockhorn, T., Müller, J., ... & Rombach, R. (2024). SDXL: Improving latent diffusion models for high-resolution image synthesis. *ICLR 2024*. arXiv:2307.01952
    - 27. Gal, R., Alaluf, Y., Atzmon, Y., Patashnik, O., Bermano, A. H., Chechik, G., & Cohen-Or, D. (2023). An image is worth one word: Personalizing text-to-image generation using textual inversion. *ICLR 2023*. arXiv:2208.01618
    - 28. ContentAuthenticity.org / C2PA (2024). Coalition for Content Provenance and Authenticity: Technical Specification v2.0. https://c2pa.org/specifications/specifications/2.0/specs/C2PA_Specification.html

- ### Provenance
  - sources:: https://github.com/comfy-org/ComfyUI, https://docs.comfy.org, https://blog.comfy.org/p/comfyui-raises-30m-to-scale-open, https://blogs.nvidia.com/blog/rtx-ai-garage-flux-2-comfyui/, https://blogs.nvidia.com/blog/rtx-ai-garage-ces-2026-open-models-video-generation/, https://vestig.oragenai.com/topics/comfyui-news/post_20251129_080141.html, https://sacra.com/c/comfyui/, https://labs.snyk.io/resources/hacking-comfyui-through-custom-nodes/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

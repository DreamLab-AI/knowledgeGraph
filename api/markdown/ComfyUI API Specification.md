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
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:comfy-ui-api-specification",
  "@type": "Class",
  "label": "ComfyUI API Specification",
  "definition": "The programmatic interface specification for ComfyUI, a node-based generative AI workflow engine, defining JSON-serialised graph representations (prompt API), WebSocket-based progress streaming, queue management endpoints, and model loading conventions that allow headless or remote execution of image and video generation pipelines.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:comfy-ui-workflows", "label": "ComfyUI Workflows"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:comfy-ui-client", "label": "ComfyUI Client"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-creation-pipeline", "label": "Content Creation Pipeline"},
      {"@id": "urn:ngm:class:comfy-ui-for-fashion-and-brands", "label": "ComfyUI for Fashion and Brands"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:comfy-ui-manager", "label": "ComfyUI Manager"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The ComfyUI API Specification defines how external programmes interact with a running ComfyUI server to submit, monitor, and retrieve generative AI jobs without using the browser-based graphical interface. The core artefact is a JSON workflow graph in "prompt API format" — a flat dictionary of node objects with inputs, class types, and connection references — submitted via HTTP POST to `/prompt`. A WebSocket connection to `/ws` delivers real-time progress events, enabling programmatic orchestration of complex [[Generative AI]] pipelines spanning text-to-image, image-to-video, LoRA loading, and ControlNet conditioning.

- ### Relationships
  - The API Specification sits atop [[ComfyUI Workflows]], serialising their graph structure for headless execution. [[ComfyUI Client]] libraries (Python, JavaScript) implement the specification client-side. The API enables programmatic [[Content Creation Pipeline]] automation and powers vertical applications such as [[ComfyUI for Fashion and Brands]]. It integrates with [[ComfyUI Manager]] for custom node discovery. The specification's model is increasingly used in [[Agentic Workflow]] systems that treat ComfyUI as a tool-call target.

- ### Content
  - ComfyUI was released by comfyanonymous in January 2023 as an open-source, node-based interface for Stable Diffusion, providing a graph-based workflow editor that exposed the full sampling pipeline as composable nodes. Unlike simple prompt-in, image-out APIs, ComfyUI represented the entire computation graph — including samplers, VAEs, CLIP encoders, and upscalers — as a JSON-serialisable dataflow graph. Developers quickly discovered the `/prompt` HTTP endpoint and began building programmatic clients.

  - The API operates over two transports: HTTP REST for submitting prompts, cancelling queued jobs, loading model metadata, and fetching completed image blobs; and WebSocket for live execution events (node progress, preview images, error messages). The prompt JSON uses string-keyed node IDs with typed `inputs` dictionaries; connections between nodes are expressed as `[node_id, output_index]` tuples rather than by name, making the format compact but requiring client-side graph introspection. The `/object_info` endpoint publishes available node types and their input schemas, enabling dynamic UI generation.

  - The ecosystem around the specification includes Python clients (comfy-api-simplified, ComfyUI-to-Python), TypeScript SDKs, and integration libraries for LangChain and AutoGen that expose ComfyUI as an agentic image-generation tool. Significant custom node collections — ComfyUI-IPAdapter-Plus, WAS Node Suite, ComfyUI-AnimateDiff-Evolved — extend the API surface by registering new node classes discoverable via `/object_info`.

  - In 2024–2025, the ComfyUI team introduced an official backend refactor (ComfyUI-Core) with improved API versioning, authentication tokens, and structured error responses, addressing adoption barriers in enterprise deployments. Cloud providers including RunPod, Vast.ai, and dedicated ComfyUI hosting services expose the API at scale, and the specification has become an informal standard for diffusion model workflow interchange, with tools offering import/export between ComfyUI format and other orchestration systems.
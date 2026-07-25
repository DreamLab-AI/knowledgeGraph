public:: true

# WebGPU

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:webgpu", "@type":"Page", "title":"WebGPU", "vc:slug":"webgpu", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:webgpu",
  "@type":"Class",
  "label":"WebGPU",
  "definition":"WebGPU is a modern web standard and API that exposes the capabilities of contemporary graphics processing units to web applications for both rendering and general-purpose computation. It provides a low-overhead, explicit interface modelled on native APIs such as Vulkan, Metal and Direct3D 12, succeeding WebGL. WebGPU enables high-performance graphics, compute shaders, and GPU-accelerated machine learning directly in the browser.",
  "domain":"spatial-computing",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:graphics-api","label":"Graphics API"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:compute-shader","label":"Compute Shader"},{"@id":"urn:ngm:class:wgsl","label":"WGSL"}],
    "requires":[{"@id":"urn:ngm:class:gpu","label":"GPU"}],
    "enables":[{"@id":"urn:ngm:class:gpu-computing","label":"GPU Computing"},{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"}],
    "dependsOn":[{"@id":"urn:ngm:class:gpu","label":"GPU"}],
    "uses":[{"@id":"urn:ngm:class:wgsl","label":"WGSL"},{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"}],
    "supports":[{"@id":"urn:ngm:class:gpu-acceleration","label":"GPU Acceleration"},{"@id":"urn:ngm:class:parallel-computing","label":"Parallel Computing"}],
    "implements":[{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"}],
    "standardizedBy":[{"@id":"urn:ngm:class:khronos-group","label":"Khronos Group"}],
    "contrastsWith":[{"@id":"urn:ngm:class:vulkan","label":"Vulkan"}],
    "relatedTo":[{"@id":"urn:ngm:class:cuda","label":"CUDA"},{"@id":"urn:ngm:class:compute-shader","label":"Compute Shader"}],
    "bridgesTo":[{"@id":"urn:ngm:class:vulkan","label":"Vulkan"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- WebGPU is a modern web [[Graphics API]] that exposes contemporary [[GPU]] capabilities for both rendering and general-purpose [[Parallel Computing]] in the browser.
- It is the successor to WebGL, modelled on explicit native APIs such as [[Vulkan]], and shading is expressed in [[WGSL]].
- ### Overview
- WebGPU gives web applications low-overhead, explicit control over the GPU, mapping onto whichever native backend the platform provides — Vulkan, Metal or Direct3D 12.
- Beyond drawing, it exposes first-class [[Compute Shader]] support, allowing web code to run general-purpose [[GPU Computing]] workloads such as simulations and neural-network inference.
- Its design borrows the command-buffer, pipeline and binding-group model of modern native APIs, trading the convenience of older APIs for predictable, high performance.
- This makes WebGPU a bridge between the browser sandbox and the kind of [[GPU Acceleration]] previously confined to native applications.
- ### Key aspects
- Explicit pipelines: applications build [[Rendering Pipeline]] and compute pipeline objects up front for efficient repeated dispatch.
- Compute support: [[Compute Shader]] stages enable data-parallel work independent of graphics.
- WGSL shading: the WebGPU Shading Language ([[WGSL]]) defines portable shader programs.
- Portability: a single API targets multiple native backends, supporting cross-platform [[GPU Acceleration]].
- ### Mechanisms
- Command encoders record work that is submitted in batches to the [[GPU]] queue.
- Bind groups associate buffers and textures with shader resources in the [[Rendering Pipeline]].
- Compute dispatches map data-parallel workloads onto GPU threads for [[Parallel Computing]].
- The standard is developed in the open and standardised in cooperation with the [[Khronos Group]] ecosystem and web platform bodies.
- ### Applications
- High-fidelity [[Real-Time Rendering]] and 3D scenes in the browser.
- In-browser machine-learning inference using [[GPU Computing]].
- Scientific visualisation and simulation that need [[GPU Acceleration]] without native installs.
- Spatial-computing and WebXR experiences requiring efficient graphics.
- ### Relationships
- hasPart:: [[Compute Shader]]
- hasPart:: [[WGSL]]
- requires:: [[GPU]]
- enables:: [[GPU Computing]]
- enables:: [[Real-Time Rendering]]
- dependsOn:: [[GPU]]
- uses:: [[WGSL]]
- uses:: [[Rendering Pipeline]]
- supports:: [[GPU Acceleration]]
- supports:: [[Parallel Computing]]
- implements:: [[Rendering Pipeline]]
- standardizedBy:: [[Khronos Group]]
- contrastsWith:: [[Vulkan]]
- relatedTo:: [[CUDA]]
- relatedTo:: [[Compute Shader]]
- bridgesTo:: [[Vulkan]]
- ### Provenance
- updated:: 2026-06-15
- inferenceRule:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh

public:: true

# WebGL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9c0641ffb79c0a0aa28f27a4650757e288878d12409bb3aca1c4eebd64b6150",
  "@type": "Page",
  "vc:slug": "web-gl",
  "title": "WebGL",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:graphics-api",
      "vc:label": "Graphics API"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "WebGL"
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
  "@id": "urn:ngm:class:web-gl",
  "@type": "Class",
  "label": "WebGL",
  "definition": "WebGL (Web Graphics Library) is a royalty-free JavaScript API that exposes a subset of OpenGL ES 2.0 and 3.0 to web browsers, enabling hardware-accelerated 2D and 3D rendering directly inside an HTML canvas element without requiring browser plug-ins. It communicates directly with the GPU through the browser's graphics pipeline, exposing programmable vertex and fragment shaders written in GLSL ES. Standardised by the Khronos Group and supported natively in all major browsers, WebGL underpins interactive visualisations, browser-based games, scientific data rendering, and WebXR spatial computing experiences. Its successor API, WebGPU, offers a more modern GPU abstraction while WebGL remains the dominant, battle-tested standard for cross-platform GPU-accelerated web graphics.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphics-api",
      "label": "Graphics API"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:glsl",
        "label": "GLSL ES"
      },
      {
        "@id": "urn:ngm:class:java-script",
        "label": "JavaScript"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      },
      {
        "@id": "urn:ngm:class:data-visualisation",
        "label": "Data Visualisation"
      },
      {
        "@id": "urn:ngm:class:scientific-visualisation",
        "label": "Scientific Visualisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:opengl-es",
        "label": "OpenGL ES"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:opengl-es",
        "label": "OpenGL ES"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shader-programming",
        "label": "Shader Programming"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:web-gpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:direct3d",
        "label": "Direct3D"
      },
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:three-js",
        "label": "Three.js"
      },
      {
        "@id": "urn:ngm:class:babylon-js",
        "label": "Babylon.js"
      },
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:web-assembly",
        "label": "WebAssembly"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:web-graphics-library",
      "label": "Web Graphics Library"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:web-gl:57f7cff16f31",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9c0641ffb79c0a0aa28f27a4650757e288878d12409bb3aca1c4eebd64b6150"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:linked:graphics-api",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - WebGL (Web Graphics Library) is a royalty-free JavaScript API standardised by the [[Khronos Group]] that exposes a subset of [[OpenGL ES]] to web browsers, enabling hardware-accelerated [[Real-Time Rendering]] directly inside an [[HTML Canvas]] element without browser plug-ins. It provides programmable [[Shader Programming]] via [[GLSL ES]] and direct access to [[GPU]] resources, making complex interactive [[Computer Graphics]] achievable in any standards-compliant browser. As the web's primary [[Graphics API]] for accelerated rendering, WebGL underpins entire ecosystems of 3D frameworks, games, scientific tools, and [[WebXR]] spatial experiences.

- ### Overview
  - WebGL was first released in 2011 and rapidly became the de-facto standard for GPU-accelerated graphics in the browser, eliminating the need for third-party plug-ins such as Adobe Flash or Java Applets.
  - The API maps closely to [[OpenGL ES]] 2.0 (WebGL 1.0) and [[OpenGL ES]] 3.0 (WebGL 2.0, released 2017), giving developers familiar semantics while running inside a sandboxed browser context.
  - Rendering commands are issued through a WebGL context obtained from an [[HTML Canvas]] element; the browser translates these into native GPU calls via platform graphics APIs ([[Direct3D]] on Windows, [[Metal]] on macOS/iOS, [[OpenGL]] or [[Vulkan]] on Linux/Android).
  - Because WebGL operates within the browser security model, it includes restrictions to prevent GPU-side side-channel attacks, GPU memory leaks, and cross-origin information disclosure.
  - The [[Khronos Group]] maintains the specification with input from browser vendors including Google, Mozilla, Apple, and Microsoft.
  - [[WebGPU]], the next-generation API, addresses WebGL's limitations (no compute shaders in WebGL 1, limited multithreading) but WebGL retains near-universal browser support and a large existing ecosystem.

- ### Key Components
  - #### Rendering Context
    - Obtained via `canvas.getContext('webgl')` or `canvas.getContext('webgl2')`.
    - Encapsulates all GPU state including bound buffers, textures, framebuffers, and active shader programs.
    - Supports both on-screen and offscreen rendering (via `OffscreenCanvas` for [[WebWorkers]]).
  - #### Shader Programs
    - WebGL uses two programmable pipeline stages: vertex shaders and fragment shaders, both written in [[GLSL ES]].
    - Vertex shaders transform 3D geometry coordinates into clip space; fragment shaders compute the colour of each rasterised pixel.
    - Shader source is compiled at runtime by the GPU driver, making cross-platform compatibility critical.
  - #### Buffer Objects
    - Geometry data (positions, normals, UV coordinates) is uploaded to the [[GPU]] via [[Vertex Buffer Object]] (VBO) and Element Buffer Objects (EBO/IBO).
    - [[WebAssembly]] modules frequently feed geometry data directly into WebGL buffers for high-throughput rendering pipelines.
  - #### Textures
    - [[Texture Mapping]] supports 2D textures, cubemaps, 3D textures (WebGL 2), and array textures.
    - Texture data sourced from `<img>`, `<video>`, `ImageBitmap`, or typed arrays.
  - #### Framebuffers and Renderbuffers
    - Off-screen rendering targets enable post-processing effects, shadow maps, environment reflections, and [[Deferred Rendering]] pipelines.
  - #### Extensions
    - WebGL's extension mechanism allows browsers to expose optional GPU features (e.g. `EXT_color_buffer_float`, `OES_texture_float`, `WEBGL_draw_buffers`) when the hardware supports them.
    - Critical for [[Machine Learning in Browser]] frameworks that exploit GPU float32 textures for neural-network inference.
  - #### WebGL 2 Additions
    - Instanced drawing, multiple render targets (MRT), transform feedback, uniform buffer objects, and [[Occlusion Culling]] queries — features that close the gap with desktop [[OpenGL ES]] 3.0.

- ### Applications / Use Cases
  - #### Interactive 3D Web Applications
    - Product configurators, architectural walkthroughs, virtual showrooms — all leveraging [[Three.js]] or [[Babylon.js]] atop WebGL for accessible 3D without app installs.
  - #### Browser-Based Games
    - [[Browser-Based Games]] use WebGL for sprite batching, particle systems, and full 3D environments; engines such as Unity and Unreal Engine 5 export WebGL targets.
  - #### Scientific and Data Visualisation
    - [[Data Visualisation]] tools (deck.gl, Luma.gl, Plotly) render millions of data points at interactive frame-rates by issuing GPU draw calls via WebGL.
    - [[Scientific Visualisation]] of molecular structures, fluid simulations, and geospatial datasets exploits WebGL's fragment shader flexibility.
  - #### WebXR and Spatial Computing
    - [[WebXR]] Device API relies entirely on WebGL to render stereoscopic frames for VR headsets and AR overlays at the required frame rates (72–120 Hz).
    - WebGL thus forms the rendering foundation for web-delivered [[Augmented Reality]] and [[Virtual Reality]] experiences.
  - #### Machine Learning Inference in the Browser
    - Frameworks such as TensorFlow.js exploit WebGL to run neural-network inference on the GPU by encoding tensor operations as GLSL fragment shaders, enabling client-side [[Machine Learning in Browser]] without server round-trips.
  - #### Digital Twins and Geospatial
    - [[Digital Twin]] platforms (Cesium, Mapbox GL) render planet-scale geospatial scenes with streaming geometry using WebGL's depth buffer and frustum culling.
  - #### CAD and Medical Imaging
    - In-browser CAD viewers and DICOM volume renderers use WebGL [[Rasterisation]] and [[Texture Mapping]] to display 3D scan data without native app deployment.

- ### Relationships
  - subClassOf:: [[Graphics API]]
  - requires:: [[GPU]]
  - requires:: [[HTML Canvas]]
  - requires:: [[GLSL ES]]
  - requires:: [[JavaScript]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[Browser-Based Games]]
  - enables:: [[WebXR]]
  - enables:: [[Data Visualisation]]
  - enables:: [[Scientific Visualisation]]
  - dependsOn:: [[OpenGL ES]]
  - dependsOn:: [[Browser Graphics Pipeline]]
  - implements:: [[OpenGL ES]]
  - uses:: [[Shader Programming]]
  - uses:: [[Vertex Buffer Object]]
  - uses:: [[Texture Mapping]]
  - uses:: [[Rasterisation]]
  - standardizedBy:: [[Khronos Group]]
  - contrastsWith:: [[WebGPU]]
  - contrastsWith:: [[Canvas 2D]]
  - contrastsWith:: [[Direct3D]]
  - contrastsWith:: [[Vulkan]]
  - bridges-to:: [[Machine Learning in Browser]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Three.js]]
  - relatedTo:: [[Babylon.js]]
  - relatedTo:: [[Computer Graphics]]
  - relatedTo:: [[WebAssembly]]

- ### Standards & Context
  - The WebGL 1.0 specification was finalised by the [[Khronos Group]] in 2011, based on [[OpenGL ES]] 2.0.
  - WebGL 2.0 was published in 2017, based on [[OpenGL ES]] 3.0, and is now supported in all major browsers.
  - The specification is maintained at https://www.khronos.org/webgl/ with conformance test suites (CTS) that browser vendors must pass to claim compliance.
  - Security review is ongoing: the spec mandates specific behaviours (e.g. clearing GPU memory before allocation) to prevent cross-origin data leaks.
  - [[WebGPU]] is the Khronos/W3C successor, shipping in Chrome and Firefox behind flags, but WebGL remains the baseline for production cross-platform GPU access.
  - Related W3C standards: [[HTML Canvas]] (WHATWG), [[WebXR]] Device API (W3C Immersive Web WG), [[WebAssembly]] (W3C).
  - The ANGLE (Almost Native Graphics Layer Engine) project by Google translates WebGL calls to [[Direct3D]], [[Metal]], or [[Vulkan]] on platforms where native OpenGL drivers are unreliable, ensuring consistent behaviour.

- ### Ecosystem & Libraries
  - [[Three.js]] — the dominant high-level 3D library, abstracting WebGL into scene graphs, materials, lights, and cameras.
  - [[Babylon.js]] — a full-featured game and rendering engine built on WebGL with physics integration and PBR materials.
  - deck.gl — GPU-powered [[Data Visualisation]] layers for large geospatial datasets.
  - Luma.gl — low-level WebGL utility layer underpinning deck.gl.
  - Cesium — 3D globe and map platform for [[Digital Twin]] and geospatial applications.
  - TWGL (Tiny WebGL) — a minimal wrapper that reduces WebGL boilerplate without abstracting the API.
  - TensorFlow.js — uses WebGL as a compute substrate for [[Machine Learning in Browser]] inference.
  - Emscripten + [[WebAssembly]] — compiles C/C++ game engines and renderers to WebGL targets.

- ### Provenance
  - sources:: Khronos Group WebGL Specification; MDN Web Docs; W3C WebXR Device API; TensorFlow.js documentation
  - updated:: 2026-06-13

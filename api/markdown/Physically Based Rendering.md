public:: true
alias:: Physically-Based Rendering

# Physically Based Rendering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f05bc1e5bd9db89212c7b11ea4f4e4ef6fbe469cbea71bcecb8127d1284bfc1",
  "@type": "Page",
  "vc:slug": "physically-based-rendering",
  "title": "Physically Based Rendering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9186"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Physically Based Rendering"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:physically-based-rendering",
  "@type": "Class",
  "label": "Physically Based Rendering",
  "definition": "Physically Based Rendering (PBR) is a rendering methodology that simulates the interaction of light with materials using first-principles optics — energy conservation, the microfacet BRDF model, Fresnel reflectance equations, and radiometric correctness — to produce consistent, predictable visual output across arbitrary lighting environments. Surface materials are parameterised through a compact, artist-friendly set of maps (albedo, metalness, roughness, normal, ambient occlusion) that together drive evaluation of the Cook-Torrance or similar BRDF at each pixel. PBR has become the dominant material workflow in real-time engines (Unreal Engine, Unity) and offline path tracers alike, and is codified in the glTF 2.0 metallic-roughness material model, ensuring cross-renderer portability. Its physical correctness makes it the foundation for photorealistic digital twins, metaverse environments, and cinematic VFX pipelines.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-technique",
      "label": "Rendering Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:brdf",
        "label": "BRDF"
      },
      {
        "@id": "urn:ngm:class:normal-map",
        "label": "Normal Map"
      },
      {
        "@id": "urn:ngm:class:environment-mapping",
        "label": "Environment Map"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:photorealism",
        "label": "Photorealism"
      },
      {
        "@id": "urn:ngm:class:3-d-asset",
        "label": "3D Asset"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gltf-standard",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:gltf-standard",
        "label": "glTF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:phong-shading",
        "label": "Phong Shading"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:path-tracing",
        "label": "Path Tracing"
      },
      {
        "@id": "urn:ngm:class:global-illumination",
        "label": "Global Illumination"
      },
      {
        "@id": "urn:ngm:class:subsurface-scattering",
        "label": "Subsurface Scattering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:neural-radiance-field",
        "label": "Neural Radiance Field"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pbr-rendering",
      "label": "PBR Rendering"
    },
    {
      "@id": "urn:ngm:class:physically-plausible-rendering",
      "label": "Physically Plausible Rendering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:physically-based-rendering:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2f05bc1e5bd9db89212c7b11ea4f4e4ef6fbe469cbea71bcecb8127d1284bfc1"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Physically Based Rendering (PBR) is a [[Rendering Technique]] that simulates the physical behaviour of light interacting with surfaces by adhering to first-principles optics: energy conservation, [[Radiometry]], [[Fresnel Equation|Fresnel reflectance]], and the [[BRDF|bidirectional reflectance distribution function]]. Parameterised material maps (albedo, metalness, roughness, normal, ambient occlusion) drive evaluation of the [[Cook-Torrance Model]] at each pixel, producing materials that respond consistently and predictably to any [[Image-Based Lighting]] environment. PBR underpins modern [[Real-Time Rendering]] in game engines, [[Digital Twin]] platforms, and cinematic VFX pipelines, and is formally codified in the [[glTF]] 2.0 metallic-roughness material specification maintained by the [[Khronos Group]].

- ### Overview
  - PBR emerged from the convergence of [[Radiometry|radiometric]] light-transport theory and practical real-time [[GPU]] capabilities in the early 2010s, catalysed by Disney's 2012 "Principled" BRDF and Epic Games' adoption in Unreal Engine 4.
  - Prior workflows such as [[Phong Shading]] and ad-hoc specular models produced materials that looked correct only under a single fixed lighting condition — a severe limitation for [[Metaverse]] and [[Spatial Computing]] applications where lighting varies continuously.
  - PBR solves this by ensuring that every material interaction is physically plausible: surfaces cannot reflect more light than they receive (energy conservation), and the amount of specular reflection varies with view angle according to the [[Fresnel Equation]] (the Schlick approximation is standard in real-time).
  - The model is decomposed into a diffuse (Lambertian) lobe and a specular lobe described by a microfacet [[BRDF]] — typically Cook-Torrance — with the GGX normal distribution function (NDF) and Smith geometry term.
  - [[Image-Based Lighting]] (IBL) via pre-filtered [[Environment Map|environment maps]] and split-sum approximation makes full PBR tractable at real-time frame rates without offline [[Path Tracing]].
  - The workflow is authoring-friendly: artists need only a small number of maps with physically meaningful units, and assets behave correctly in any conformant renderer — a prerequisite for cross-platform [[3D Asset]] portability.

- ### Key Components
  - #### Material Parameter Maps
    - **Albedo / Base Colour** — diffuse surface reflectance with no lighting; values constrained to physically plausible ranges (sRGB ≤ 0.04 for dielectrics).
    - **Metalness** — binary or blended flag that switches between conductor (full specular colour tint) and dielectric (achromatic specular) response.
    - **Roughness** — controls microsurface spread via the GGX [[Microfacet Model]] NDF; higher roughness → wider, softer specular highlight.
    - **Normal Map** — encodes surface orientation perturbations to simulate fine geometric detail at low polygon cost, feeding into [[Texture Mapping]] pipelines.
    - **Ambient Occlusion** — pre-baked local occlusion to attenuate indirect [[Global Illumination]] in screen-space or baked approaches.
    - **Emission** — self-illuminated surfaces that bypass the lighting model entirely.
  - #### BRDF Core
    - The Cook-Torrance specular BRDF combines three terms: the normal distribution function D (GGX/Trowbridge-Reitz), the geometry shadowing-masking function G (Smith), and the [[Fresnel Equation]] F (Schlick).
    - The diffuse term uses the Lambertian model, optionally replaced by the Burley/Disney diffuse for greater accuracy.
    - [[BRDF]] evaluation is performed per-fragment in the [[Shader]] during the lighting pass of the [[Rendering Pipeline]].
  - #### Image-Based Lighting (IBL)
    - [[Image-Based Lighting]] captures real or synthetic lighting from a high-dynamic-range [[HDRI]] panorama.
    - The specular component is split into pre-filtered environment map convolution (per roughness level) and a BRDF integration look-up texture (LUT) — the split-sum approximation introduced by Epic Games.
    - The diffuse irradiance component is projected into spherical harmonics or stored in a low-resolution cubemap.
  - #### Real-Time Approximations
    - Screen-Space Ambient Occlusion (SSAO) and Screen-Space Reflections (SSR) supplement the PBR model without requiring full [[Path Tracing]].
    - Deferred shading pipelines store G-buffer textures (albedo, normal, roughness, metalness) for PBR evaluation in a screen-space lighting pass.
    - [[Ray Tracing]] hardware (RTX) enables hybrid pipelines where PBR is augmented with real-time traced reflections, shadows, and [[Global Illumination]].
  - #### Offline / Reference Path Tracing
    - [[Path Tracing]] uses [[Monte Carlo Integration]] to integrate the rendering equation over the hemisphere at each surface point, fully evaluating the [[BRDF]] for every light bounce.
    - Spectral path tracers extend PBR to wavelength-dependent reflectance, improving metallic and interference effects.
    - [[Subsurface Scattering]] (SSS) extends PBR for translucent materials (skin, wax, marble) by solving a diffusion equation or using dipole/multi-pole approximations.

- ### Applications / Use Cases
  - #### Game Engines
    - Unreal Engine's physically based material system (Metallic-Roughness workflow) has been the industry standard since UE4 (2014).
    - Unity's High Definition Render Pipeline (HDRP) implements a full PBR deferred shading path with layered materials and area lights.
    - Both engines export and import [[glTF]] 2.0 assets, enabling cross-platform [[3D Asset]] interoperability for [[Metaverse]] content pipelines.
  - #### Digital Twins & Industrial Visualisation
    - [[Digital Twin]] platforms require accurate material appearance for predictive maintenance visualisation, factory layout, and training simulations.
    - PBR's physical correctness means engineering materials (brushed aluminium, painted steel, carbon fibre) reproduce accurately without per-environment tweaking.
    - Platforms such as NVIDIA Omniverse and Siemens Xcelerator leverage PBR with [[Ray Tracing]] for photorealistic industrial digital twins.
  - #### Metaverse & Spatial Computing
    - [[Spatial Computing]] environments (AR/VR headsets, WebXR browsers) depend on PBR for perceptual coherence between real-world lighting and virtual objects.
    - The [[glTF]] KHR_materials_* extensions (clearcoat, transmission, volume, sheen, iridescence) extend the base PBR model for advanced material phenomena in [[Metaverse]] contexts.
    - WebGPU enables PBR pipelines in web browsers, underpinning next-generation [[Real-Time Rendering]] for open [[Metaverse]] clients.
  - #### VFX & Film
    - Pixar's RenderMan, Arnold, V-Ray, and Cycles all implement physically based light transport; their material models are unified under the MaterialX standard.
    - Academy Software Foundation's OpenPBR initiative (2024) defines a superset material model compatible with all major offline renderers, converging on a common PBR vocabulary.
  - #### Neural / AI-Augmented Rendering
    - [[Neural Radiance Field]] (NeRF) methods can decompose scenes into PBR-compatible materials (intrinsic decomposition), bridging neural reconstruction and conventional [[Rendering Pipeline|rendering pipelines]].
    - Generative AI texture synthesis models produce albedo, roughness, and normal maps directly, accelerating PBR asset creation workflows.
    - Differentiable rendering treats PBR parameters as differentiable variables, enabling gradient-based material estimation from images — a key technique in inverse rendering and [[Machine Learning]]-driven asset capture.

- ### Relationships
  - hasPart:: [[BRDF]]
  - hasPart:: [[Microfacet Model]]
  - hasPart:: [[Image-Based Lighting]]
  - hasPart:: [[Normal Map]]
  - hasPart:: [[Environment Map]]
  - requires:: [[Shader]]
  - requires:: [[Rendering Pipeline]]
  - requires:: [[GPU]]
  - requires:: [[Texture Mapping]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[Digital Twin]]
  - enables:: [[Photorealism]]
  - enables:: [[3D Asset]]
  - dependsOn:: [[Energy Conservation]]
  - dependsOn:: [[Radiometry]]
  - implements:: [[Cook-Torrance Model]]
  - implements:: [[Fresnel Equation]]
  - uses:: [[glTF]]
  - uses:: [[HDRI]]
  - uses:: [[Monte Carlo Integration]]
  - standardizedBy:: [[Khronos Group]]
  - contrastsWith:: [[Phong Shading]]
  - contrastsWith:: [[Rasterisation]]
  - relatedTo:: [[Ray Tracing]]
  - relatedTo:: [[Path Tracing]]
  - relatedTo:: [[Global Illumination]]
  - relatedTo:: [[Subsurface Scattering]]
  - bridges-to:: [[Neural Radiance Field]]
  - bridges-to:: [[Metaverse]]

- ### Standards & Context
  - **glTF 2.0 (Khronos Group)** — defines the metallic-roughness PBR material model as the core interchange format for real-time 3D assets; maintained by the [[Khronos Group]].
  - **KHR_materials_* extensions** — extend base glTF PBR with clearcoat, sheen, transmission, volume, iridescence, and unlit materials.
  - **OpenPBR (Academy Software Foundation / ASWF)** — a superset PBR material model aimed at unifying offline renderer material descriptions across Arnold, V-Ray, RenderMan, and Cycles.
  - **MaterialX** — an open standard (Linux Foundation / ASWF) for transferring rich material and shader definitions between [[Rendering Pipeline|rendering pipelines]], built around PBR semantics.
  - **USD (Universal Scene Description)** — Pixar/Apple's scene interchange format includes a PBR preview surface schema (UsdPreviewSurface) compatible with [[glTF]] and OpenPBR workflows.
  - **WebGPU / WGSL** — W3C standard enabling GPU-accelerated PBR shading in web browsers without plugins, foundational for open [[Metaverse]] clients.
  - **ACES (Academy Colour Encoding System)** — colour management standard commonly paired with PBR workflows to ensure consistent tone mapping from HDR render output to display.
  - The term "physically based" was popularised by Disney's 2012 SIGGRAPH course "Physically-Based Shading at Disney" (Burley), which remains the most widely cited reference for the Principled BRDF used in both real-time and offline contexts.

- ### Provenance
  - sources:: Disney SIGGRAPH 2012 "Physically-Based Shading at Disney"; Epic Games UE4 PBR documentation; Khronos glTF 2.0 specification; OpenPBR / ASWF; NVIDIA Turing RTX architecture papers; Academy Software Foundation MaterialX spec.
  - updated:: 2026-06-13

public:: true

# relighting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb",
  "@type": "Page",
  "vc:slug": "relighting",
  "title": "relighting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:global-lighting",
      "vc:label": "Global lighting"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-video",
      "vc:label": "AI Video"
    },
    {
      "@id": "urn:visionflow:owl:class:apple",
      "vc:label": "Apple"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:relighting",
      "vc:label": "relighting"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "relighting"
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
  "@id": "urn:ngm:class:relighting",
  "@type": "Class",
  "label": "relighting",
  "definition": "Relighting is a computer graphics and generative AI technique that computationally alters the illumination of an existing image or video, repositioning or replacing light sources to produce a different lighting environment without re-capturing the scene. Modern approaches use neural rendering models trained on diverse lighting conditions, enabling portrait relighting, object relighting, and scene relighting from a single input image. Open-source workflows in tools such as ComfyUI implement IC-Light and similar diffusion-based pipelines that rival or exceed proprietary solutions.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:physically-based-rendering", "label": "Physically Based Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-video", "label": "AI Video"},
      {"@id": "urn:ngm:class:inpainting", "label": "Inpainting"},
      {"@id": "urn:ngm:class:control-net", "label": "ControlNet"},
      {"@id": "urn:ngm:class:differentiable-rendering", "label": "Differentiable Rendering"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:comfy-ui-workflows", "label": "ComfyUI Workflows"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:relighting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5163e231edf5d5258c8dd8052504ef6191e022a0d17f397db601e936ac83e9fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Global lighting | Image Based Lighting]]",
      "resolved": "urn:visionflow:linked:global-lighting",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Video]]",
      "resolved": "urn:visionflow:owl:class:ai-video",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Apple]]",
      "resolved": "urn:visionflow:owl:class:apple",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComfyUI]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[relighting]]",
      "resolved": "urn:visionflow:owl:class:relighting",
      "kind": "ResolvedLink"
    }
  ],
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
  - Relighting is a computer graphics and generative AI technique that computationally repositions or replaces light sources in an existing image or video without re-capturing the scene. Neural methods, including diffusion-based pipelines like IC-Light, learn to decompose a scene into intrinsic components (albedo, normals, shading) and then synthesise a relit version conditioned on a new lighting environment. Open-source implementations in ComfyUI now match or exceed commercial tools such as Magnific Relight, enabling portrait, object, and full-scene relighting for film, XR, and generative media workflows.

- ### Semantic Classification
  - owl-class:: infrastructure:Relighting
  - owl-role:: Concept

- ### Relationships
  - Relies on neural rendering and diffusion models to estimate scene geometry and synthesise new illumination conditions.

- ### Content
  - [[Global lighting | Image Based Lighting]] [[ComfyUI]] [lllyasviel/IC-Light: More relighting! (github.com)](https://github.com/lllyasviel/IC-Light)
  - Relighting [Relight Better than Magnific - Relighting v5 (better UX) | ComfyUI Workflow (openart.ai)](https://openart.ai/workflows/risunobushi/relight-better-than-magnific---relighting-v5-better-ux/nSqO2P2ZmDQGwohEbgl3)
  - [Magnific AI Relight is Worse than Open Source - YouTube](https://www.youtube.com/watch?v=GsJaqesboTo) [[relighting]]
  - https://zju3dv.github.io/IntrinsicAnything/ relighting model
  - [[Apple]] [facial relighting](https://machinelearning.apple.com/research/neural-3d-relightable)
  - [Apple facial relighting](https://machinelearning.apple.com/research/neural-3d-relightable)
  - Relighting [[AI Video]] [[2402.18848] SwitchLight: Co-design of Physics-driven Architecture and Pre-training Framework for Human Portrait Relighting (arxiv.org)](https://arxiv.org/abs/2402.18848)
  - [Beeble AI Lighting for Filmmakers](https://www.beeble.ai/)
  - Relighting [Relight Better than Magnific - Relighting v5 (better UX) | ComfyUI Workflow (openart.ai)](https://openart.ai/workflows/risunobushi/relight-better-than-magnific---relighting-v5-better-ux/nSqO2P2ZmDQGwohEbgl3)
  - [Magnific AI Relight is Worse than Open Source - YouTube](https://www.youtube.com/watch?v=GsJaqesboTo) [[relighting]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

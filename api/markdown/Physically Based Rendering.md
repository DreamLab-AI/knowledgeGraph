public:: true

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
  "definition": "Physically Based Rendering (PBR) is a rendering methodology that simulates the physical behaviour of light interacting with materials by adhering to real-world optical principles such as energy conservation, microfacet theory, and the reflectance equation. PBR uses parameterised material models — typically albedo, metallic, roughness, and normal maps — to produce consistent, predictable visual results across varied lighting conditions. It is the standard material workflow for real-time 3D engines used in games, metaverse platforms, and digital twin visualisation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:3-d-asset", "label": "3D Asset"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"},
      {"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}
    ]
  },
  "quality": 0.35,
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
  - Physically Based Rendering (PBR) is a rendering methodology that simulates the physical behaviour of light interacting with materials by adhering to real-world optical principles such as energy conservation, microfacet theory, and the reflectance equation. PBR uses parameterised material models — typically albedo, metallic, roughness, and normal maps — to produce consistent, predictable visual results across varied lighting conditions. It is the standard material workflow for real-time 3D engines used in games, metaverse platforms, and digital twin visualisation.

- ### Semantic Classification
  - owl-class:: infrastructure:PhysicallyBasedRendering
  - owl-role:: Concept

- ### Relationships
  - requires [[Shader]]
  - requires [[Rendering Pipeline]]
  - enables [[Real-Time Rendering]]
  - enables [[3D Asset]]
  - relatedTo [[Ray Tracing]]
  - relatedTo [[Rendering Technique]]

- ### Content

  ## Overview

  Physically Based Rendering (PBR) is a rendering methodology that simulates the physical behaviour of light interacting with surfaces using principles derived from geometric optics and radiometry. The core PBR workflow parameterises surface materials through a small, physically meaningful set of maps — albedo (base colour), metallic (conductor vs. dielectric), roughness (surface micro-geometry), and normal (surface orientation perturbation) — which together drive bidirectional reflectance distribution function (BRDF) evaluation at each pixel. This approach produces materials that respond consistently and predictably to changes in lighting, enabling artists to design assets under one lighting condition and be confident they will appear correct in any environment. PBR has become the standard material workflow in game engines (Unreal Engine, Unity), metaverse platforms, and digital twin visualisation tools, and is embedded in the glTF 2.0 standard's material model, ensuring PBR assets are portable across conformant renderers.

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

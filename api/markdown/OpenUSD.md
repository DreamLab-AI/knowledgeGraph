public:: true

# openusd
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c4ea0e096531dc1295b5be0a0beeb773708fb2edf2d941d9c69a887f44a2fbd",
  "@type": "Page",
  "vc:slug": "open-usd",
  "title": "openusd",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-usd",
  "@type": "Class",
  "label": "OpenUSD",
  "definition": "OpenUSD (Universal Scene Description) is an open-source framework and file format developed by Pixar Animation Studios for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across digital content creation tools and real-time rendering pipelines. USD encodes a hierarchical scene graph with support for layered composition, non-destructive overrides, and time-sampled animation, enabling multiple departments or tools to contribute to a shared scene without overwriting each other's work. OpenUSD has been adopted as the foundation for Apple's RealityKit (.usdz), NVIDIA's Omniverse platform, and the emerging ISO/IEC 22886 standard for 3D scene exchange.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:3-d-content-pipeline", "label": "3D Content Pipeline"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:3-d-asset", "label": "3D Asset"},
      {"@id": "urn:ngm:class:3-d-asset-standard", "label": "3D Asset Standard"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:gltf-standard", "label": "Gltf Standard"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - OpenUSD (Universal Scene Description) is an open-source framework and file format developed by Pixar Animation Studios for composing, simulating, collaborating on, and exchanging richly structured 3D scenes across digital content creation tools and real-time rendering pipelines. USD encodes a hierarchical scene graph with support for layered composition, non-destructive overrides, and time-sampled animation, enabling multiple departments or tools to contribute to a shared scene without overwriting each other's work. OpenUSD has been adopted as the foundation for Apple's RealityKit (.usdz), NVIDIA's Omniverse platform, and the emerging ISO/IEC 22886 standard for 3D scene exchange.

- ### Semantic Classification
  - owl-class:: open-usd:OpenUSD
  - owl-role:: Concept

- ### Relationships
  - enables [[3D Content Pipeline]]
  - enables [[Digital Twin]]
  - relatedTo [[3D Asset]]
  - relatedTo [[3D Asset Standard]]
  - relatedTo [[Rendering Pipeline]]
  - contrastsWith [[Gltf Standard]]

- ### Content
  - USD's core innovation is its composition engine, which combines multiple layers of scene description through a set of composition arcs—references, payloads, inherits, specialises, and variants—to produce a resolved scene graph at runtime. Layers are additive and override-based: a stronger (higher-priority) layer's opinions supersede weaker layers' for any given attribute, whilst attributes with no opinion in the stronger layer fall through to the weaker layer. This makes USD well suited to large-scale pipeline workflows where assets, environments, lighting, and animation rigs are maintained by different teams in separate files.
  - USD's type system supports geometry (meshes, curves, points), materials (MDL, MaterialX), cameras, lights, volumes, and skeletal animation. Schema plugins extend the type system: UsdPhysics defines physics simulation properties for NVIDIA PhysX; UsdSkel handles skeletal rigs; UsdLux standardises lighting models. Files use one of three container formats: human-readable ASCII (.usda), binary (.usdc, "crate"), or package (.usdz, a zip archive of .usd and texture files) designed for AR distribution on mobile devices.
  - The OpenUSD Alliance (AOUSD), formed in 2023, coordinates industry adoption across DCC tools (Autodesk Maya, Houdini, Cinema 4D), game engines (Unreal Engine, Unity), and real-time simulation platforms. NVIDIA Omniverse is built entirely on USD as its scene interchange protocol, enabling multi-user collaborative editing and physics simulation for Digital Twin applications in manufacturing, logistics, and autonomous vehicle training. Apple mandates USDZ for AR Quick Look on iOS and visionOS, making USD the principal 3D content format for spatial computing on Apple hardware. Its expressiveness and scalability contrast with glTF, which optimises for compact, real-time-ready assets rather than production-pipeline composability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

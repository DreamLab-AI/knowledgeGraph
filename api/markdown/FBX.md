FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines. Developed by Kaydara and now owned by Autodesk, it stores scene graphs, mesh data, skinning weights, keyframed animation tracks, cameras, and lights, making it the dominant interchange format across 3D production and real-time engine pipelines.

### Semantic Classification

### Content

- FBX stores a scene graph of nodes carrying transforms, mesh data, skinning weights and keyframed animation tracks. It is widely supported as an exchange path between modelling packages and runtime engines, though its binary specification is controlled by a single vendor rather than an open standards body.
- In metaverse and XR production FBX commonly serves as the bridge from authoring tools into Unity and Unreal, after which assets are often re-exported to open formats such as glTF for runtime delivery. Its handling of skeletal rigs makes it a frequent choice for character and avatar pipelines.

### Current Landscape (2026)

- The industry has shifted decisively towards sunsetting FBX: the Metaverse Standards Forum's 3D Asset Interoperability Working Group launched a formal FBX Migration Project, presented at the SIGGRAPH 2025 BOF (Vancouver, August 2025), and confirmed that many stakeholders, including Autodesk itself, wish to deprecate FBX for critical workflows once USD and glTF can absorb its capabilities.
- OpenUSD reached a major milestone with the AOUSD Core Specification 1.0 established in December 2025, positioning OpenUSD as the standardised interchange layer; the 2026 roadmap adds Core Spec 1.1 (animation, large-scale scenes), a Physics Rigid Body spec, and an ISO submission strategy.
- Autodesk's FBX SDK remains a free but proprietary C++ toolkit, and the working group is pushing for its valuable transform and coordinate-system functions to be made openly available as an alternative to the closed libraries, given that these still underpin many toolchains.
- Game-engine tooling is actively migrating away from the FBX path: Unreal Engine (as of 5.5) is moving FBX and USD import from the legacy framework to the newer Interchange framework, with Epic describing FBX as widely used but "not really in development anymore".
- Unity deprecated its old usd-unity-sdk package on 15 November 2024 and introduced new com.unity.importer.usd / com.unity.exporter.usd / com.unity.usd.core bundles; AOUSD also announced Unity, ByteDance, Huawei and Physicl as new General Members on 21 July 2026.
- Format roles have crystallised in production practice: FBX remains favoured for compact editable rigged characters and animation exchange between DCCs and engines, while glTF owns runtime/web delivery and USD owns composed, non-destructive large-scale scene assembly.
- The key open challenge as of 2026 is capability gaps: FBX features (notably certain vertex-attribute, skinning and coordinate-transform semantics) still cannot be fully satisfied by USD or glTF, so a clean, lossless migration off FBX remains unresolved and is the focus of ongoing gap-analysis and extension work.

### References

- 1. Metaverse Standards Forum (2025). State of 3D Asset Interoperability using USD and glTF (SIGGRAPH Vancouver BOF, incl. FBX Migration Project). https://metaverse-standards.org/wp-content/uploads/glTF-USD-BOF-SIGGRAPH-Vancouver-Aug25-FINAL.pdf
- 2. Metaverse Standards Forum (2025). 3D Asset Interoperability Working Group — Animation and FBX. https://metaverse-standards.org/domain-groups/introduction-to-3d-asset-interoperability-working-group/
- 3. Alliance for OpenUSD (2026). AOUSD Drives Global 3D Data Interoperability with New Core Specification Milestones and Members. https://aousd.org/news/alliance-for-openusd-drives-global-3d-data-interoperability-and-agentic-ai-workflows-with-new-core-specification-milestones-and-members/
- 4. Epic Games / Unreal Fest Stockholm (2025). The State of Model Importing Processes in Unreal Engine (FBX, glTF, USD, Interchange). https://www.youtube.com/watch?v=8CyEgBRdB3Q
- 5. nagii / note (2026). Understanding the 'Common Language' of 3D Pipelines (OpenUSD Core Spec 1.0, Unity USD packages, FBX/glTF/USD roles). https://note.com/moral_fox3169/n/na4770fd0d80e?hl=en

### Provenance


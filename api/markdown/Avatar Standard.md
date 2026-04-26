iri:: http://narrativegoldmine.com/spatial-computing#AvatarStandard
uri:: urn:visionclaw:concept:spatial-computing:avatar-standard
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:avatar-standard
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Avatar Standard
content-hash:: sha256-12-9e0b2eb1b872
legacy-term-id:: MV-9791
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true
bridges-to:: [[DID Nostr Identity]]

- ### Definition
  - Avatar Standard refers to technical specifications defining file formats, data structures, rigging conventions, and metadata schemas for 3D humanoid avatars, particularly the VRM format built on glTF 2.0 that enables cross-platform avatar interoperability in metaverse environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:AvatarStandard
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Format Compliance]], [[Skeleton Configuration]], [[Metadata Specification]]
  - enables:: [[Avatar Interoperability]], [[Platform-Independent Identities]], [[Standardized Rigging]]

- ### Content

  ### Technical Details
  Key standards include:
  - **VRM 1.0**: glTF2.0-based format with humanoid-specific extensions for expressions, gaze control, and standardized rigging
  - **Scale and Orientation**: 1.00 = 1m, Y-up, -Z forward, Unity Humanoid compliant T-stance
  - **Single File Packaging**: All data including textures and materials in one file
  - **Licensing Metadata**: Title, author, modification/redistribution rules (Creative Commons), and usage permissions

  ### Standardization Progress (2024)
  Khronos Group and VRM Consortium collaboration (October 2024) advancing VRM as official glTF extensions. Successful ratification would elevate global recognition and encourage broader platform support.

  ### Industry Adoption
  VRM established as de facto standard in Japan since 2018, supporting VirtualCast, VRoid Studio, and cluster platforms. Decentraland enabled VRM exports (July 2023) for use in OnCyber, Hyperfy, and Monaverse.

  ### Avatar Translation Framework
  Metaverse Standards Forum working group developing common baseline format for mesh, material, skeleton, animation, physics, and metadata translation across platforms.

- ### Provenance
  - sources:: [[VRM 1.0]], [[glTF 2.0]], [[Khronos Group]], [[VRM Consortium]], [[Metaverse Standards Forum]]
  - migration-date:: 2026-04-26T00:00:00Z

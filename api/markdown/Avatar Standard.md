id:: avatar-standard-ontology

- ### OntologyBlock
  id:: Avatar Standard
  - ontology:: true
  - public-access:: true
  - term-id:: MV-9791
  - preferred-term:: Avatar Standard
  - source-domain:: mv
  - owl:class:: mv:AvatarStandard
  - status:: active
  - definition:: Avatar Standard refers to technical specifications defining file formats, data structures, rigging conventions, and metadata schemas for 3D humanoid avatars, particularly the VRM format built on glTF 2.0 that enables cross-platform avatar interoperability in metaverse environments.
  - is-subclass-of:: [[Technical Standard]]
  - enables:: [[Avatar Interoperability]], [[Platform-Independent Identities]], [[Standardized Rigging]]
  - requires:: [[Format Compliance]], [[Skeleton Configuration]], [[Metadata Specification]]

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

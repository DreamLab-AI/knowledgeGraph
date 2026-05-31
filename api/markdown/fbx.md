- ### Definition
  - FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines.

- ### Semantic Classification
  - owl-class:: metaverse:FBX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[glTF]], [[Universal Scene Description]]
  - requires:: [[Computer Graphics]]
  - enables:: [[Skeletal Animation]], [[Game Engine]]

- ### Content
  - FBX stores a scene graph of nodes carrying transforms, mesh data, skinning weights and keyframed animation tracks. It is widely supported as an exchange path between modelling packages and runtime engines, though its binary specification is controlled by a single vendor rather than an open standards body.
  - In metaverse and XR production FBX commonly serves as the bridge from authoring tools into Unity and Unreal, after which assets are often re-exported to open formats such as glTF for runtime delivery. Its handling of skeletal rigs makes it a frequent choice for character and avatar pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
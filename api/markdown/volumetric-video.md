- ### Definition
  - Volumetric video captures a subject from many viewpoints to reconstruct a moving three-dimensional representation that can be viewed from any angle, rather than a fixed two-dimensional image sequence.

- ### Semantic Classification
  - owl-class:: metaverse:VolumetricVideo
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Point Cloud]], [[Performance Capture]]
  - requires:: [[Photogrammetry]]
  - enables:: [[Volume Rendering]]

- ### Content
  - Volumetric video uses arrays of cameras and depth sensors to reconstruct per-frame geometry and appearance, producing meshes or point clouds that play back as a free-viewpoint recording. Storage and bandwidth are demanding because each frame carries spatial data.
  - It supplies realistic captured humans and objects for XR and metaverse scenes, complementing performance capture of synthetic characters. The output feeds point cloud and volume rendering pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
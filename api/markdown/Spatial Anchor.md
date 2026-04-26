iri:: http://narrativegoldmine.com/spatial-computing#SpatialAnchor
uri:: urn:visionclaw:concept:spatial-computing:spatial-anchor
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:spatial-anchor
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Spatial Anchor
content-hash:: sha256-12-14d4ee6bcc0c
legacy-term-id:: 20246
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - Coordinate reference that binds a virtual object's pose to a stable location in physical space, enabling persistent AR placement and physical-virtual registration.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAnchor
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]]

- ### Relationships
  - has-part:: [[Coordinate System]], [[Pose Data]], [[Visual Marker]], [[GPS Reference]], [[Tracking Features]]
  - is-part-of:: [[AR Scene Graph]], [[Spatial Computing System]]
  - requires:: [[Tracking System]], [[Coordinate Transformation]], [[Persistence Layer]]
  - enables:: [[Persistent AR Placement]], [[Shared AR Experiences]], [[Physical-Virtual Registration]]
  - depends-on:: [[Visual Odometry]], [[SLAM]], [[World Coordinate Frame]]

- ### Content
  Spatial Anchor — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE P2048-3]]
  - migration-date:: 2026-04-26T00:00:00Z

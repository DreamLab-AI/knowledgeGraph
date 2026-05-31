- ### Definition
  - Linear refers to relationships, mappings or systems whose output is proportional to and additive in their input, a property exploited heavily in graphics colour spaces and numerical methods.

- ### Semantic Classification
  - owl-class:: metaverse:Linear
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Real-Time Rendering]]
  - requires:: [[Linear Algebra]]
  - enables:: [[Graphics Pipeline]]

- ### Content
  - Linearity means a function satisfies additivity and scaling, so transformations compose predictably. Linear transforms expressed as matrices underpin vertex processing, projection and skinning in real-time graphics.
  - Physically based rendering performs lighting maths in a linear colour space before applying a non-linear transfer curve for display. Working in linear light keeps additive operations such as blending and filtering correct, after which a gamma encoding is applied for output.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
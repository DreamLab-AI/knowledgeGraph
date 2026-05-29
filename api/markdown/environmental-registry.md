- ### Definition
  - A catalogued, authoritative store of descriptors for physical or virtual environments, recording their spatial bounds, safety parameters, hazard zones, and compliance status. XR systems query the environmental registry during session initialisation to validate that the current space meets operational and safety requirements before permitting immersive interactions.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalRegistry
  - owl-role:: concept

- ### Relationships
  - Has Part [[Spatial Anchor]]
  - Has Part [[Room Scale]]
  - Supports [[Environmental Verification]]
  - Supports [[XR Runtime Environment]]
  - Uses [[Database Query]]
  - Uses [[Data Management]]
  - Related To [[Calibration Tools]]

- ### Content

  ## Overview

  Environmental registries act as the spatial counterpart to identity registries — each registered environment carries a canonical descriptor including boundary geometry, permissible interaction modes, and safety classification. When an XR session starts, the runtime queries the registry to match the detected space and enforce appropriate guardian boundaries and content restrictions.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
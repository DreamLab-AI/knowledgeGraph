- ### Definition
  - Low-level software that directly manages hardware resources and provides foundational services upon which application software operates. In XR and spatial computing contexts, system software encompasses device drivers, operating system kernels, firmware, and hardware abstraction layers that expose display, tracking, and input peripherals to higher-level runtimes.

- ### Semantic Classification
  - owl-class:: spatial-computing:SystemSoftware
  - owl-role:: concept

- ### Relationships
  - Has Part [[Operating System]]
  - Has Part [[Hardware Abstraction]]
  - Part Of [[Technology Stack]]
  - Enables [[XR Runtime Environment]]
  - Enables [[Rendering Pipeline]]
  - Supports [[Middleware]]

- ### Content

  ## Overview

  System software forms the lowest addressable layer of the XR technology stack. Drivers translate raw hardware signals from IMUs, cameras, and displays into normalised data streams consumed by XR runtimes. The operating system kernel schedules processes, manages memory, and enforces security boundaries, whilst firmware provides immutable device configuration at the silicon level.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
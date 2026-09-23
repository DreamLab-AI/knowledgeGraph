---
okf_version: "0.2"
type: Class
title: Digital Twin Interop Protocol
resource: urn:ngm:class:digital-twin-interop-protocol
domain: spatial-computing
description: A standardised API and communication framework enabling the exchange of state, simulation data, and behaviour models between heterogeneous digital twin systems, defining data formats, query interfaces, and synchronisation semantics so twins built on different platforms can interoperate and compose into federated simulations.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-standards-and-interop
hasPart:
  - urn:ngm:class:api-specification
  - urn:ngm:class:data-exchange-format
  - urn:ngm:class:query-interface
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:state-synchronisation
  - urn:ngm:class:authentication-layer
requires:
  - urn:ngm:class:data-serialization
  - urn:ngm:class:identity-management
  - urn:ngm:class:network-protocol
  - urn:ngm:class:schema-registry
enables:
  - urn:ngm:class:cross-platform-digital-twins
  - urn:ngm:class:federated-simulation
  - urn:ngm:class:twin-composition
  - urn:ngm:class:real-time-state-sync
dependsOn:
  - urn:ngm:class:rest-api
  - urn:ngm:class:web-socket
  - urn:ngm:class:graph-ql
  - urn:ngm:class:mqtt
  - urn:ngm:class:opc-ua
implements:
  - urn:ngm:class:spatial-computing
partOf:
  - urn:ngm:class:digital-twin-framework
  - urn:ngm:class:interoperability-architecture
---

# Digital Twin Interop Protocol

A standardised API and communication framework enabling the exchange of state, simulation data, and behaviour models between heterogeneous digital twin systems, defining data formats, query interfaces, and synchronisation semantics so twins built on different platforms can interoperate and compose into federated simulations.

---
okf_version: "0.2"
type: Class
title: Power Grid
resource: urn:ngm:class:power-grid
domain: infrastructure
description: A power grid is the interconnected network of generation, transmission and distribution infrastructure that delivers electrical power from producers to consumers. It balances supply and demand in real time across high-voltage transmission lines, substations and lower-voltage distribution networks. Modern grids increasingly integrate renewable generation and digital controls to maintain stability a
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:power-infrastructure
  - urn:ngm:class:grid-infrastructure
hasPart:
  - urn:ngm:class:power-supply
  - urn:ngm:class:power-systems
requires:
  - urn:ngm:class:power-management
  - urn:ngm:class:power-distribution-unit
enables:
  - urn:ngm:class:renewable-energy-integration
dependsOn:
  - urn:ngm:class:electrical-power
  - urn:ngm:class:transmission-network
bridgesTo:
  - urn:ngm:class:renewable-energy
uses:
  - urn:ngm:class:power-electronics
supports:
  - urn:ngm:class:data-centre
  - urn:ngm:class:energy-management
relatedTo:
  - urn:ngm:class:smart-grid
  - urn:ngm:class:grid-infrastructure
---

# Power Grid

A power grid is the interconnected network of generation, transmission and distribution infrastructure that delivers electrical power from producers to consumers. It balances supply and demand in real time across high-voltage transmission lines, substations and lower-voltage distribution networks. Modern grids increasingly integrate renewable generation and digital controls to maintain stability and reliability.

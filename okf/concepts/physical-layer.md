---
okf_version: "0.2"
type: Class
title: Physical Layer
resource: urn:ngm:class:physical-layer
domain: infrastructure
description: The Physical Layer (OSI Layer 1) is the foundational stratum of the Open Systems Interconnection reference model defined in ISO/IEC 7498-1 and ITU-T X.200, responsible for raw transmission and reception of unstructured bit streams over a physical communication medium.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:hardware-layer
  - urn:ngm:class:osi-model
  - urn:ngm:class:network-architecture
  - urn:ngm:class:telecommunications
  - urn:ngm:class:signal-processing
  - urn:ngm:class:communications-engineering
hasPart:
  - urn:ngm:class:bluetooth-le
  - urn:ngm:class:clock-recovery
  - urn:ngm:class:connector-standards
  - urn:ngm:class:forward-error-correction
  - urn:ngm:class:network-interface-card
  - urn:ngm:class:optical-fibre
  - urn:ngm:class:wireless-radio
  - urn:ngm:class:zigbee
  - urn:ngm:class:lo-ra
  - urn:ngm:class:ethernet-phy
  - urn:ngm:class:serdes
  - urn:ngm:class:modulation
  - urn:ngm:class:transceiver
  - urn:ngm:class:lo-ra
  - urn:ngm:class:photonic-integrated-circuit
  - urn:ngm:class:co-packaged-optics
  - urn:ngm:class:cable-plant
  - urn:ngm:class:line-coding
requires:
  - urn:ngm:class:clock-recovery
  - urn:ngm:class:connector-standards
  - urn:ngm:class:forward-error-correction
  - urn:ngm:class:signal-encoding
  - urn:ngm:class:power-budget
  - urn:ngm:class:physical-medium
  - urn:ngm:class:signal-integrity
  - urn:ngm:class:channel-equalisation
enables:
  - urn:ngm:class:5-g
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:ethernet
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:optical-transport-network
  - urn:ngm:class:wi-fi
  - urn:ngm:class:network-layer
  - urn:ngm:class:5-g
  - urn:ngm:class:hyperscale-data-centre
dependsOn:
  - urn:ngm:class:semiconductor-fabrication
  - urn:ngm:class:asic
  - urn:ngm:class:signal-integrity
  - urn:ngm:class:photonics
  - urn:ngm:class:rf-engineering
  - urn:ngm:class:information-theory
  - urn:ngm:class:electromagnetic-compatibility
  - urn:ngm:class:channel-coding-theory
implements:
  - urn:ngm:class:ieee-802-15-4
  - urn:ngm:class:ieee-802-3
  - urn:ngm:class:lo-ra-wan
  - urn:ngm:class:ieee-802-11be
  - urn:ngm:class:itu-t-g-694-1
  - urn:ngm:class:oif-common-electrical-interface
  - urn:ngm:class:3gpp-nr
  - urn:ngm:class:lo-ra-wan
  - urn:ngm:class:bluetooth-core-specification
contrastsWith:
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:network-layer
  - urn:ngm:class:transport-layer
  - urn:ngm:class:software-defined-networking
  - urn:ngm:class:application-layer
uses:
  - urn:ngm:class:ldpc-codes
  - urn:ngm:class:mimo-antenna
  - urn:ngm:class:ofdm
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:pam-4-modulation
  - urn:ngm:class:nrz-signalling
  - urn:ngm:class:qam
  - urn:ngm:class:dsp
  - urn:ngm:class:chirp-spread-spectrum
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:quantum-key-distribution
  - urn:ngm:class:smart-cities
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:edge-computing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:financial-trading-networks
standardizedBy:
  - urn:ngm:class:3-gpp
  - urn:ngm:class:bluetooth-sig
  - urn:ngm:class:etsi
  - urn:ngm:class:iso-iec-jtc-1
  - urn:ngm:class:lo-ra-alliance
  - urn:ngm:class:ieee-802-3-task-force
  - urn:ngm:class:ieee-802-11-working-group
  - urn:ngm:class:itu-t-sg15
  - urn:ngm:class:oif
relatedTo:
  - urn:ngm:class:channel-coding
  - urn:ngm:class:mimo-antenna
  - urn:ngm:class:network-interface-card
  - urn:ngm:class:optical-transport-network
  - urn:ngm:class:radio-access-network
  - urn:ngm:class:switch-fabric
  - urn:ngm:class:propagation-loss
  - urn:ngm:class:dispersion-compensation
---

# Physical Layer

The Physical Layer (OSI Layer 1) is the foundational stratum of the Open Systems Interconnection reference model defined in ISO/IEC 7498-1 and ITU-T X.200, responsible for raw transmission and reception of unstructured bit streams over a physical communication medium.

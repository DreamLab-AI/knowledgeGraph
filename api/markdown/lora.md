- ### Definition
  - LoRa is a long-range, low-power radio technology defined as a [[Network Protocol]] physical layer using [[Chirp Spread Spectrum]] over [[Radio Frequency]] bands to underpin a [[Low-Power Wide-Area Network]] for the [[Internet of Things]].

- ### Overview
  - LoRa, short for long range, is a physical-layer modulation scheme that transmits small payloads across many kilometres while drawing very little power. It operates on unlicensed sub-gigahertz spectrum, varying by region, and tolerates weak signals well below the noise floor.
  - It deliberately sacrifices throughput for range and battery life, making it well suited to dispersed sensors that send infrequent, compact messages. The LoRaWAN protocol stacks media access and networking above the LoRa physical layer.

- ### Mechanisms
  - Chirp spread spectrum encodes data as frequency sweeps that are robust to interference and multipath.
  - A configurable spreading factor trades data rate against range and receiver sensitivity.
  - Adaptive data-rate schemes optimise airtime and energy per device across a network.
  - Star-of-stars topologies route device messages through gateways to a central network server.

- ### Applications
  - Smart metering for utilities such as water, gas and electricity.
  - Agricultural and environmental sensor networks across large areas.
  - Asset tracking and logistics where infrequent location updates suffice.
  - Smart-city infrastructure monitoring including parking and waste.

- ### Relationships
  - subClassOf:: [[Network Protocol]]
  - hasPart:: [[Chirp Spread Spectrum]]
  - uses:: [[Spread Spectrum]]
  - uses:: [[Radio Frequency]]
  - supports:: [[LoRaWAN]]
  - supports:: [[IoT Device]]
  - enables:: [[Low-Power Wide-Area Network]]
  - enables:: [[Energy Efficiency]]
  - relatedTo:: [[Internet of Things]]
  - relatedTo:: [[Sensor Network]]
  - dependsOn:: [[Unlicensed Spectrum]]
  - contrastsWith:: [[Cellular Network]]
  - contrastsWith:: [[Wi-Fi]]
  - bridgesTo:: [[Edge Computing]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
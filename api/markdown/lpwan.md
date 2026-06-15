- ### Definition
  - [[Lpwan]] (Low-Power Wide-Area Network) is a category of [[wireless protocol]] technologies optimised for long-range, low-bandwidth, low-power [[IoT Device]] connectivity.
  - Key variants include [[LoRaWAN]] (unlicensed spectrum), Sigfox, [[NB-IoT]], and LTE-M (licensed cellular spectrum).
  - LPWAN enables battery-operated endpoints to transmit small telemetry payloads over distances from 2 km (urban) to 40 km (rural line-of-sight).

- ### Overview
  - LPWAN emerged as a solution to the gap between short-range personal area networks (e.g. Zigbee, Bluetooth) and high-power cellular networks.
  - The unlicensed LPWAN variants (LoRa, Sigfox) operate in ISM bands and are community/commercially deployed; licensed variants (NB-IoT, LTE-M) use cellular spectrum managed by mobile operators.
  - Duty-cycle restrictions in unlicensed bands limit throughput but enable coexistence.

- ### Key aspects
  - Data rates: typically 0.3 kbps to 50 kbps, far lower than Wi-Fi or cellular.
  - Range: 2–15 km urban, up to 50 km rural for LoRa gateways.
  - Battery life: years to decades depending on transmission frequency.
  - Star-of-stars or star topology (not mesh) for most variants.
  - Deep building penetration due to sub-GHz frequencies.

- ### Mechanisms
  - Chirp Spread Spectrum (CSS) modulation in LoRa for interference resilience.
  - Narrowband (200 kHz) transmission in NB-IoT using LTE cellular infrastructure.
  - Downlink acknowledgements and adaptive data rate optimise power use.
  - End-to-end AES-128 encryption in LoRaWAN network and application layers.

- ### Applications
  - Smart metering for electricity, gas, and water utilities.
  - Agricultural soil moisture, weather, and livestock tracking sensors.
  - Smart city infrastructure: parking sensors, waste bin fill-level, street lighting.
  - Cold-chain logistics and asset tracking.
  - Predictive maintenance sensors in industrial plant.

- ### Relationships
  - relatedTo:: [[Zigbee]]
  - relatedTo:: [[Z Wave]]
  - relatedTo:: [[Wireless Protocol]]
  - uses:: [[Encryption]]
  - enables:: [[IoT Device]]
  - enables:: [[Industrial IoT]]
  - enables:: [[Asset Tracking]]
  - contrastsWith:: [[Bluetooth Low Energy]]
  - hasPart:: [[LoRaWAN]]
  - supports:: [[Sensor Network]]
  - supports:: [[Edge Computing]]

- ### Provenance
  - updated:: 2026-06-15
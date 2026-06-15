- ### Definition
  - [[Satellite Communication]] uses orbiting spacecraft as relay nodes to transmit signals between [[Ground Station]] terminals across global distances.
  - Operates across multiple orbital regimes — geostationary ([[Geostationary Orbit]]), medium Earth orbit (MEO), and [[Low Earth Orbit]] — each offering different latency and coverage characteristics.
  - Depends on [[Spectrum Allocation]] for uplink and downlink frequency bands coordinated through international frameworks such as the [[ITU]].

- ### Overview
  - Satellite communication emerged in the 1960s and has grown into a critical global infrastructure supporting broadcasting, telephony, internet backhaul, navigation, and Earth observation. GEO satellites provide continental coverage from a fixed position but impose roughly 480–600 ms round-trip latency; LEO constellations (e.g., Starlink, OneWeb) offer low-latency broadband but require large numbers of satellites and complex handover systems.
  - Modern systems increasingly use high-throughput satellites (HTS) with frequency reuse across spot beams, dramatically increasing capacity per satellite. Integration with terrestrial networks via non-terrestrial network (NTN) standards is extending satellite connectivity to smartphones and IoT devices.

- ### Key aspects
  - **Orbital regime selection** — GEO favours broadcast and backhaul; LEO/MEO favour broadband and navigation.
  - **Link budget design** — antenna gain, transmit power, atmospheric losses, and noise figure determine achievable data rates.
  - **Spectrum coordination** — adjacent satellite system interference requires careful frequency planning and ITU filing procedures.
  - **Latency characteristics** — GEO latency precludes real-time interactive applications; LEO latency is comparable to long-distance fibre.

- ### Applications
  - Maritime and aviation in-flight connectivity beyond terrestrial mobile coverage.
  - Disaster-recovery communications when terrestrial networks are destroyed.
  - Direct broadcast satellite (DBS) television distribution.
  - Backhaul for remote cellular base stations and offshore platforms.

- ### Mechanisms
  - **Frequency division** — C-band, Ku-band, Ka-band, and V-band offer different rain-fade characteristics and regulatory environments.
  - **Modulation and coding** — DVB-S2X and adaptive coding modulation (ACM) optimise link efficiency under varying conditions.
  - **On-board processing** — digital regenerative payloads demodulate and re-encode signals, reducing noise accumulation.

- ### Relationships
  - enables:: [[Gps Navigation]]
  - enables:: [[Remote Sensing]]
  - enables:: [[Global Connectivity]]
  - enables:: [[Broadcasting]]
  - uses:: [[Spectrum Allocation]]
  - uses:: [[Frequency Band]]
  - uses:: [[Orbital Mechanics]]
  - hasPart:: [[Ground Station]]
  - hasPart:: [[Transponder]]
  - hasPart:: [[Satellite Link]]
  - requires:: [[Spectrum Allocation]]
  - requires:: [[Launch Vehicle]]
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Standards]]
  - supports:: [[Telecommunications]]
  - supports:: [[Disaster Response]]
  - contrastsWith:: [[Fibre Optic Network]]
  - relatedTo:: [[Low Earth Orbit]]
  - relatedTo:: [[Geostationary Orbit]]

- ### Provenance
  - updated:: 2026-06-15
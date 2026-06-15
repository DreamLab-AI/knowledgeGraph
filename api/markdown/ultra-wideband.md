- ### Definition
  - [[Ultra Wideband]] is a radio technology transmitting short pulses across a very wide spectrum, enabling centimetre-level ranging through precise time-of-flight measurement.
  - Its immunity to multipath fading differentiates it from narrowband [[Wireless Communication]] technologies such as Bluetooth or Wi-Fi for indoor positioning.
  - Standardised under IEEE 802.15.4z, UWB underpins secure ranging in smartphones, keyless car entry, and [[Spatial Computing]] anchor infrastructure.

- ### Overview
  - UWB systems modulate data onto very short nanosecond-duration pulses spread across bandwidths exceeding 500 MHz, giving high temporal resolution for time-of-arrival (ToA) and time-difference-of-arrival (TDoA) measurements.
  - Apple integrated UWB (U1 chip) into iPhones from 2019, enabling Precision Finding in AirTag and peer-to-peer device handoff.
  - In industrial settings, UWB anchors provide sub-30 cm accuracy for asset tracking, robotics navigation, and worker safety geofencing.
  - The technology coexists with other spectrum users because its power spectral density remains below regulatory noise floors (FCC Part 15).

- ### Key Aspects
  - Two-way ranging (TWR) and time-difference-of-arrival (TDoA) are the dominant positioning architectures.
  - Scrambled Timestamp Sequence (STS) mode (IEEE 802.15.4z) adds cryptographic protection to ranging messages, preventing spoofing attacks.
  - UWB's broad bandwidth inherently provides channel impulse response measurement useful for [[Signal Processing]] and multipath analysis.
  - Chip implementations integrate UWB with Bluetooth for hybrid ranging-plus-data workflows.

- ### Mechanisms
  - Pulse shaping using [[Fourier Transform]]-based spectral design ensures energy stays within the allocated band.
  - Leading-edge detection algorithms identify the first-arriving path (not the strongest) to compute accurate ranging despite multipath.
  - Kalman filter fusion combines UWB range measurements with inertial data to produce smooth position tracks, reducing [[Euclidean Distance]] error.
  - Anchor networks triangulate tag positions using least-squares multilateration from multiple range observations.

- ### Applications
  - Precise indoor positioning for augmented reality experiences requiring sub-metre [[Spatial Computing]] registration.
  - Secure [[Access Control]] through proximity-based device authentication (e.g., digital car keys).
  - Industrial safety zones that trigger alerts when workers approach hazardous machinery.
  - Supply-chain asset tracking in warehouses and manufacturing floors where GPS is unavailable.

- ### Relationships
  - subClassOf:: [[Wireless Communication]]
  - relatedTo:: [[Signal Processing]]
  - relatedTo:: [[Infrastructure]]
  - hasPart:: [[Fourier Transform]]
  - hasPart:: [[Euclidean Distance]]
  - uses:: [[Numerical Methods]]
  - uses:: [[Statistical Analysis]]
  - enables:: [[Security]]
  - enables:: [[Access Control]]
  - requires:: [[Encryption]]
  - bridgesTo:: [[Spatial Computing]]
  - standardizedBy:: [[Standards]]

- ### Provenance
  - updated:: 2026-06-15
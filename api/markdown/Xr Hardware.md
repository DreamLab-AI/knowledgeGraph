iri:: http://narrativegoldmine.com/spatial-computing#XRHardware
uri:: urn:visionclaw:concept:spatial-computing:xr-hardware
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:xr-hardware
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: XR Hardware
content-hash:: sha256-12-e5d5ca0e905f
legacy-term-id:: MV-10170
status:: active
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - The physical computing infrastructure and peripheral devices required for extended reality experiences, including head-mounted displays, processing units, tracking systems, input controllers, haptic feedback devices, and supporting equipment for virtual, augmented, and mixed reality applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:XrHardware
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Computing Hardware]]

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
	    - XR Device is-subclass-of XR Hardware
	    - XR Headset is-subclass-of XR Hardware
		- related-to:: [[VR Controllers]]
  - ## Overview
  - XR hardware encompasses the physical equipment powering immersive experiences, from standalone headsets to tethered PC-VR systems. The global wearable technology market including XR reached USD 84.2 billion in 2024. Head-mounted displays show the fastest 19.51% CAGR through 2030. Hardware advances include micro-OLED displays, pancake lenses, and integrated spatial computing chips.
  - ## Technical Details
  - ### Display Technologies
		- **Micro-OLED**: High pixel density, used in Vision Pro
		- **LCD Panels**: Cost-effective for consumer headsets
		- **Pancake Lenses**: Slimmer form factor, reduced artifacts
		- **Fresnel Lenses**: Traditional VR optics design
  - ### Processing Hardware
		- **Standalone SoCs**: Snapdragon XR2 Gen 2 for Quest devices
		- **Custom Chips**: Apple M2+R1 for Vision Pro
		- **PC Graphics Cards**: NVIDIA RTX, AMD Radeon for tethered VR
		- **Edge Processors**: For enterprise AR glasses
  - ### Tracking Systems
		- **Inside-Out Tracking**: Camera-based, no external sensors
		- **Outside-In Tracking**: Base stations for room-scale VR
		- **Eye Tracking**: Gaze-based interaction and foveated rendering
		- **Hand Tracking**: Camera-based gesture recognition
  - ## Applications
  - Consumer VR headset development
  - Enterprise AR solution deployment
  - Metaverse platform hardware requirements
  - XR peripheral manufacturing
  - Research and development prototyping

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

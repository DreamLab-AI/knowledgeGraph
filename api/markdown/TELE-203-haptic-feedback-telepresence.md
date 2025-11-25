- ### OntologyBlock
  id:: haptic-telepresence-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-0203
	- preferred-term:: Haptic Feedback Telepresence
	- source-domain:: tc
	- owl:class:: tc:HapticFeedbackTelepresence
	- status:: active
	- public-access:: true
	- definition:: "The integration of haptic (tactile and kinesthetic) feedback devices into telepresence systems, enabling remote operators to feel forces, textures, and vibrations from distant environments through force-feedback gloves, exoskeletons, or handheld controllers, creating bidirectional touch sensation for immersive remote interaction with physical or virtual objects."
	- maturity:: developing
	- owl:physicality:: PhysicalEntity
	- owl:role:: Object

## Definition

**Haptic Feedback Telepresence** extends telepresence beyond visual and auditory modalities to include touch sensation, enabling operators to feel forces exerted by remote robots [[TELE-201-teleoperation-systems]] or virtual objects [[TELE-020-virtual-reality-telepresence]]. Force feedback devices replicate resistance, weight, texture, and vibration, creating bidirectional coupling where operator inputs control remote/virtual objects whilst receiving tactile sensations from those objects, enhancing manipulation precision, immersion, and task performance.

## Types of Haptic Feedback

- **Kinesthetic**: Joint torques, resistance (e.g., feeling object weight)
- **Tactile**: Surface texture, vibration (e.g., fabric roughness)
- **Thermal**: Temperature sensations (heating/cooling actuators)

## Devices

- **Force Feedback Gloves**: CyberGlove, HaptX, SenseGlove (10+ DOF force feedback)
- **Exoskeletons**: Full-arm force reflection for teleoperation
- **Haptic Controllers**: Vibration motors, ultrasonic mid-air haptics

## Applications

- **Surgical Telepresence**: Surgeons feel tissue stiffness during robotic surgery
- **VR Collaboration**: Users feel virtual handshakes, object textures
- **Industrial Telerobotics**: Operators sense resistance when manipulating heavy objects remotely

## Related Concepts

- [[TELE-001-telepresence]]
- [[TELE-200-robotic-telepresence]]
- [[TELE-201-teleoperation-systems]]

## Metadata

- **Term-ID**: TELE-203
- **Last Updated**: 2025-11-16
- **Maturity**: Developing
- **Authority Score**: 0.83

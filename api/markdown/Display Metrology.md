- ### OntologyBlock
  id:: displaymetrology-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20156
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- preferred-term:: Display Metrology
	- definition:: Standardized measurement equipment and instruments for assessing visual performance parameters of XR displays, including colorimeters, photometers, and specialized testing hardware.
	- maturity:: mature
	- source:: [[ETSI GR ARF 010]]
	- owl:class:: mv:DisplayMetrology
	- owl:physicality:: PhysicalEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:PhysicalObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]]
	- implementedInLayer:: [[NetworkLayer]]
	- #### Relationships
	  id:: displaymetrology-relationships
		- has-part:: [[Colorimeter]], [[Photometer]], [[Contrast Ratio Meter]], [[Resolution Test Chart]], [[Luminance Meter]]
		- is-part-of:: [[XR Testing Infrastructure]]
		- requires:: [[Calibration Standards]], [[Measurement Protocols]], [[Environmental Control]]
		- enables:: [[Display Calibration]], [[Visual Quality Assessment]], [[Performance Validation]], [[Compliance Testing]]
		- depends-on:: [[ISO 9241-303]], [[IEEE P2733 Standards]]
	- #### OWL Axioms
	  id:: displaymetrology-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:DisplayMetrology))

		  # Classification along two primary dimensions
		  SubClassOf(mv:DisplayMetrology mv:PhysicalEntity)
		  SubClassOf(mv:DisplayMetrology mv:Object)

		  # Measurement instrument constraints
		  SubClassOf(mv:DisplayMetrology
		    ObjectSomeValuesFrom(mv:measures mv:DisplayPerformanceParameter)
		  )

		  SubClassOf(mv:DisplayMetrology
		    ObjectSomeValuesFrom(mv:conformsTo mv:MeasurementStandard)
		  )

		  # Domain classification
		  SubClassOf(mv:DisplayMetrology
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:InteractionDomain)
		  )

		  # Layer classification
		  SubClassOf(mv:DisplayMetrology
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:NetworkLayer)
		  )

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)

  # Property characteristics
  AsymmetricObjectProperty(dt:requires)

  # Property characteristics
  AsymmetricObjectProperty(dt:enables)

  # Property characteristics
  AsymmetricObjectProperty(dt:dependson)
```
- ## About Display Metrology
  id:: displaymetrology-about
	- Display Metrology encompasses the physical measurement equipment and standardized procedures used to quantitatively assess the visual performance characteristics of XR displays. This includes specialized hardware instruments for measuring color accuracy, luminance, contrast, resolution, refresh rates, and other critical display parameters that impact immersive experience quality.
	- ### Key Characteristics
	  id:: displaymetrology-characteristics
		- Physical measurement instruments including colorimeters, photometers, and contrast analyzers
		- Calibrated to international standards (ISO 9241-303, IEEE P2733)
		- Provides objective, quantifiable metrics for display performance
		- Essential for quality assurance in XR hardware development and deployment
	- ### Technical Components
	  id:: displaymetrology-components
		- [[Colorimeter]] - Measures color accuracy and chromaticity coordinates
		- [[Photometer]] - Measures luminance and illuminance levels
		- [[Contrast Ratio Meter]] - Assesses dynamic range and black levels
		- [[Resolution Test Chart]] - Evaluates spatial resolution and pixel density
		- [[Luminance Meter]] - Measures brightness uniformity and distribution
		- [[Spectroradiometer]] - Analyzes spectral power distribution
	- ### Functional Capabilities
	  id:: displaymetrology-capabilities
		- **Color Accuracy Measurement**: Quantifies color gamut coverage and deltaE values
		- **Luminance Assessment**: Measures brightness levels and uniformity across display surface
		- **Contrast Analysis**: Evaluates dynamic range and contrast ratios in various lighting conditions
		- **Temporal Performance**: Measures refresh rates, persistence, and motion blur characteristics
		- **Compliance Validation**: Verifies conformance to industry standards and specifications
	- ### Use Cases
	  id:: displaymetrology-use-cases
		- VR headset display calibration and quality control in manufacturing
		- AR device optical performance validation for enterprise deployments
		- LED wall calibration for virtual production volumes
		- Research and development of next-generation display technologies
		- Regulatory compliance testing for consumer XR products
		- Display aging and degradation monitoring in deployed systems
	- ### Standards & References
	  id:: displaymetrology-standards
		- [[ETSI GR ARF 010]] - Metaverse framework including display testing
		- [[ISO 9241-303]] - Visual display requirements and testing
		- [[IEEE P2733]] - Standard for clinical validation of XR devices
		- [[CIE Technical Reports]] - Colorimetry and photometry standards
		- [[VESA DisplayHDR]] - High dynamic range display specifications
	- ### Related Concepts
	  id:: displaymetrology-related
		- [[XR Display System]] - What this equipment measures
		- [[Visual Quality Assessment]] - Process enabled by these instruments
		- [[Display Calibration]] - Process requiring metrology equipment
		- [[PhysicalObject]] - Ontology classification parent class
# Display Metrology Ontology Entry – Revised

## Academic Context

- Display metrology represents the scientific discipline of measuring and quantifying the visual output characteristics of electronic displays[6]
  - Defined formally by the International Bureau of Weights and Measures (BIPM) as the science of measurement, embracing both experimental and theoretical determinations across any field of science and technology[6]
  - Encompasses measurement of primary display outputs: brightness, colour, contrast, and other visual qualities through rigorous scientific methodology[6]
  - Distinguishes between two complementary measurement approaches: Spectral Power Distribution (SPD) for absolute electromagnetic output, and Spectral Sensitivity for human perceptual response accounting for the three cone types in the human eye[6]

## Current Landscape (2025)

- Standards and measurement frameworks
  - The Information Display Measurements Standard (IDMS) v1.3 was released in May 2025 by the International Committee for Display Metrology (ICDM), part of the Society for Information Display (SID)[1][2]
  - IDMS v1.3 comprises over 900 pages of display measurement methods and tutorials, representing the culmination of collaborative effort by display metrologists, engineers, physicists, and vision scientists across dozens of organisations[1][2]
  - The standard encompasses approximately 140 display measurements covering every area of displays, intended for multiple user types from manufacturers to consumers[1][7]
  - ICDM explicitly does not set compliance values; this responsibility falls to other standards organisations[1][7]
  - Notable additions in v1.3 include extensive material on camera setup and imaging light devices with moiré reduction techniques, concentric ring imaging for Michelson contrast measurement on near-eye displays, temperature stabilisation protocols for HDR displays, and updated colour metrology content including uniform colour spaces and colour difference equations[2]
  - New computational resources include code supporting gamut ring analysis for reflective displays and bidirectional scatter distribution function analysis[2]

- Technical capabilities and measurement approaches
  - Display metrology quantifies visual performance through standardised instrumentation including spectrophotometers, photometers, and imaging systems[6]
  - Modern measurement frameworks accommodate diverse display technologies from traditional LCD and OLED to emerging near-eye and reflective display systems[1][2]
  - Measurement protocols address both objective physical characteristics and human perceptual response, recognising that visual perception involves complex cone sensitivity across the electromagnetic spectrum[6]

- UK and North England context
  - The search results do not identify specific display metrology research centres or implementations within North England or the broader UK context; however, the ICDM's international composition suggests potential participation from British institutions and manufacturers in standards development

## Research & Literature

- Key standards and publications
  - Society for Information Display (2012, updated 2021, 2023, 2025). *Information Display Measurements Standard (IDMS)* v1.03, v1.1, v1.2, v1.3. International Committee for Display Metrology. Available through SID Standards portal.[1][2]
  - Kymissis, J. (2025). Statement on IDMS v1.3 release. Society for Information Display. [Referenced in SID announcement][2]

- Foundational measurement science
  - Bureau International des Poids et Mesures (BIPM). *Metrology: The Science of Measurement*. Formal definition and framework for measurement science across all disciplines.[6]
  - Radiant Vision Systems. (2025). *Display Metrology: The Science of Quality Measurement*. Technical overview of spectral power distribution and spectral sensitivity in display measurement.[6]

- Emerging research directions
  - Digitisation of metrology data: BIPM's Forum on Metrology and Digitalization (2025) emphasises the integration of AI, automation, and digital infrastructures with measurement science, requiring adherence to FAIR principles (Findability, Accessibility, Interoperability, Reusability) for measurement data[5]
  - Diffractive component characterisation: Recent work (2025) addresses measurement and characterisation of diffractive components in display reflection, indicating expansion into optical phenomena previously less systematically addressed[4]

## Future Directions

- Emerging technical frontiers
  - Expansion of measurement protocols for advanced display technologies, particularly near-eye displays and reflective display systems requiring novel measurement geometries[2]
  - Integration of artificial intelligence and machine-readable measurement data formats to enable cross-border comparability and seamless integration into digital regulatory frameworks[5]
  - Development of standardised approaches to temperature-dependent display characterisation, particularly for HDR and high-performance displays[2]

- Research priorities
  - Harmonisation of digital measurement data formats across international standards bodies to prevent ecosystem fragmentation[5]
  - Refinement of optical measurement techniques for emerging display technologies that challenge conventional measurement assumptions
  - Continued evolution of human visual response modelling to account for advances in display technology and viewing conditions

## Notes on Revision

The original definition conflated display metrology (the science of measurement) with measurement instrumentation. The revised entry clarifies that display metrology is a disciplinary approach encompassing standardised methods, frameworks, and scientific principles—of which instruments are merely tools. The current definition was overly narrow and equipment-focused, whereas display metrology encompasses theoretical foundations, standardisation efforts, and evolving measurement methodologies. The 2025 release of IDMS v1.3 represents a significant development warranting inclusion, though time-sensitive announcements regarding release dates have been contextualised appropriately. UK-specific context remains limited in available literature; this reflects genuine gaps in the search results rather than oversight.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

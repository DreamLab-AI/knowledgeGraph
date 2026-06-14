public:: true

# Display Technology
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:display-technology",
  "@type": "Page",
  "vc:slug": "display-technology",
  "title": "Display Technology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:display-technology",
  "@type": "Class",
  "label": "Display Technology",
  "definition": "Display Technology encompasses the hardware substrates, optical systems, and electronic driving circuits used to present visual information to human observers across form factors ranging from flat panels and projection systems to head-mounted microdisplays and retinal projectors. Core substrate families include LCD with quantum dot backlights, OLED, microLED, and laser scanning systems, each offering distinct trade-offs in brightness, contrast ratio, colour gamut, refresh rate, and power consumption. For spatial computing and extended reality applications, display technology must additionally address field of view, vergence-accommodation conflict, waveguide efficiency, and eye-box uniformity. Advances in microdisplay resolution, diffractive waveguide engineering, and foveated rendering pipelines are critical enablers of lightweight, socially acceptable XR headsets and the broader convergence of physical and digital environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:display-hardware", "label": "Display Hardware"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:microdisplay", "label": "Microdisplay"},
      {"@id": "urn:ngm:class:waveguide-optics", "label": "Waveguide Optics"},
      {"@id": "urn:ngm:class:display-driver-ic", "label": "Display Driver IC"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:foveated-rendering", "label": "Foveated Rendering"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:optical-calibration-target", "label": "Optical Calibration Target"},
      {"@id": "urn:ngm:class:colour-management", "label": "Colour Management"},
      {"@id": "urn:ngm:class:display-metrology", "label": "Display Metrology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:photorealistic-rendering", "label": "Photorealistic Rendering"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"},
      {"@id": "urn:ngm:class:light-field-display", "label": "Light Field Display"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:xr-device", "label": "XR Device"},
      {"@id": "urn:ngm:class:ar-display-device", "label": "AR Display Device"},
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:semiconductor-manufacturing", "label": "Semiconductor Manufacturing"},
      {"@id": "urn:ngm:class:photonics", "label": "Photonics"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:display-industry-standards", "label": "Display Industry Standards"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:audio-technology", "label": "Audio Technology"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:retinal-display", "label": "Retinal Display"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:visual-display-technology", "label": "Visual Display Technology"},
    {"@id": "urn:ngm:class:display-systems", "label": "Display Systems"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Display Technology]] encompasses the hardware substrates, optical elements, and electronic driving circuits used to present visual information to human observers across form factors ranging from flat consumer panels to [[Waveguide Optics]]-based [[AR Display Device]] glasses. It is a foundational enabler of [[Spatial Computing]], [[Augmented Reality]], [[Virtual Reality]], and [[Mixed Reality]], and its performance characteristics — field of view, refresh rate, contrast ratio, colour gamut, and power budget — directly constrain the fidelity of immersive experiences. The discipline spans from [[Semiconductor Manufacturing]] and [[Photonics]] at the materials level to [[Colour Management]] and [[Display Metrology]] at the calibration and measurement layer.

- ### Overview
  - Display technology sits at the intersection of optics, electronics, and materials science. A display system converts electronic signal into visible light in a spatially controlled pattern that the human visual system interprets as imagery. The fidelity of this conversion — governed by resolution, luminance, contrast, and temporal response — determines perceived image quality. For spatial computing applications, additional optical properties such as eye-box size, see-through transmittance, and depth-cue accuracy become critical design constraints.
  - The domain has historically been driven by consumer television and smartphone markets, which demanded ever-higher resolution, lower power, and thinner form factors. The emergence of [[Spatial Computing]] and [[XR Device]] platforms has introduced a distinct set of engineering requirements centred on compactness, waveguide compatibility, and perceptual comfort during extended wear.
  - Modern display research is dominated by four technology curves: improving [[Microdisplay]] density for headset applications; maturing microLED transfer and bonding for high-brightness wearables; advancing [[Waveguide Optics]] efficiency and colour uniformity; and exploring computational and [[Light Field Display]] approaches to resolve [[Vergence-Accommodation Conflict]].

- ### Key Components
  - **Emissive Substrates**
    - OLED (organic light-emitting diode): per-pixel emission, deep blacks, high contrast; used in smartphone and headset panels including Apple Vision Pro. Longevity limited by blue organic degradation.
    - MicroLED: inorganic emitters offering OLED contrast with superior brightness and lifetime; manufacturing gated on mass transfer yield at sub-10-micron pixel pitch.
    - LCD with quantum dot backlight: dominant in large-format consumer panels; cost-competitive but inherently backlit, limiting contrast.
    - Laser scanning / LBS (laser beam scanning): used in [[Microdisplay]] projectors for AR glasses; highly efficient, always-in-focus, but requires fast MEMS mirror actuation.
  - **[[Microdisplay]] Technologies**
    - LCoS (liquid crystal on silicon): reflective SLM approach; used in enterprise AR projectors.
    - DLP (digital light processing): Texas Instruments DMD chip; high brightness for projection.
    - OLEDoS (OLED on silicon): Sony and eMagin architectures used in VR headsets.
    - LEDoS (LED on silicon): emerging microLED-on-CMOS architecture targeting next-generation headsets.
  - **[[Waveguide Optics]]**
    - Diffractive waveguides: use surface-relief gratings to couple and distribute light; adopted by [[Microsoft HoloLens]] and many OEM designs; efficiency trade-offs with colour uniformity and rainbow artefacts.
    - Holographic waveguides: volume holographic gratings with broader angular bandwidth; pursued by WaveOptics (acquired by Snap) and others.
    - Geometric/reflective waveguides: total internal reflection with partial mirrors; Lumus architecture offering high efficiency and natural colour.
    - Pancake optics: folded optical path using beam-splitting polarisers; used in Meta Quest 3 for compact VR form factor.
  - **[[Display Driver IC]]**
    - Dedicated ASICs that convert video signal to per-pixel voltage/current waveforms at microsecond timing precision. For high-refresh-rate headsets (90–120 Hz), driver ICs impose a significant power and thermal budget constraint.
  - **Backlights and Illumination**
    - Mini-LED backlighting with local dimming enables high dynamic range in LCD systems; quantum dot colour conversion films extend colour gamut toward BT.2020.

- ### Applications and Use Cases
  - **Consumer Electronics**: Smartphones, tablets, and televisions represent the highest-volume deployment. OLED and LCD-QD compete across price tiers; microLED targets premium large-format home cinema.
  - **Extended Reality Headsets**: [[XR Device]] platforms including [[Meta Quest]], [[Apple Vision Pro]], and enterprise AR headsets depend on display technology for the primary visual interface. Display specifications directly determine user comfort, perceived resolution, and field of view.
  - **[[Augmented Reality]] Glasses**: Social-form-factor AR glasses require see-through waveguide displays with sufficient outdoor brightness (>10,000 nit from the projector) and a wide enough eye-box for reliable pupil coverage.
  - **Automotive HUDs**: Head-up displays project navigation and safety information onto the windscreen using LCD or LBS projectors with combiner optics; transitioning toward full AR overlay with [[Waveguide Optics]].
  - **Medical and Industrial Visualisation**: High-accuracy displays for surgical guidance, digital pathology, and remote inspection require calibrated colour and luminance with [[Display Metrology]] traceability to standards bodies.
  - **Professional Cinema and Simulation**: High-frame-rate, wide-colour-gamut displays for content creation and training simulators; laser projection dominates large-venue installations.
  - **[[Spatial Computing]] Workspaces**: Displays enabling persistent virtual desktop and three-dimensional information layouts anchored to physical environments; depends on low latency and high angular resolution.

- ### Relationships
  - hasPart:: [[Microdisplay]]
  - hasPart:: [[Waveguide Optics]]
  - hasPart:: [[Display Driver IC]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Mixed Reality]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Foveated Rendering]]
  - enables:: [[Spatial Computing]]
  - requires:: [[Optical Calibration Target]]
  - requires:: [[Colour Management]]
  - requires:: [[Display Metrology]]
  - uses:: [[Photorealistic Rendering]]
  - uses:: [[Eye Tracking]]
  - uses:: [[Light Field Display]]
  - supports:: [[XR Device]]
  - supports:: [[AR Display Device]]
  - supports:: [[Human Computer Interaction]]
  - dependsOn:: [[Semiconductor Manufacturing]]
  - dependsOn:: [[Photonics]]
  - standardizedBy:: [[Display Industry Standards]]
  - contrastsWith:: [[Audio Technology]]
  - contrastsWith:: [[Haptic Feedback]]
  - bridges-to:: [[Computer Vision]]
  - bridges-to:: [[Neural Rendering]]
  - relatedTo:: [[Extended Reality]]
  - relatedTo:: [[Retinal Display]]

- ### Standards and Context
  - **VESA** (Video Electronics Standards Association): defines DisplayPort, HDMI alternatives, and display performance standards including DisplayHDR tiers.
  - **ICDM** (International Committee for Display Metrology): publishes the Information Display Measurements Standard (IDMS), the authoritative metrology reference for display characterisation.
  - **SID** (Society for Information Display): primary professional body; publishes the Journal of the SID and hosts DisplayWeek, the principal industry conference.
  - **IEC 62977**: series of international standards for electronic displays published by the International Electrotechnical Commission.
  - **Khronos OpenXR**: though primarily an API standard, OpenXR defines display-layer compositing contracts that display technology must satisfy for XR runtimes.
  - **ITU-R BT.2020**: defines the ultra-high-definition colour space that next-generation displays target; microLED and laser display can achieve near-BT.2020 primary coverage.
  - **HDR Standards**: HDR10, Dolby Vision, and HLG define electro-optical transfer functions and metadata that displays must implement to render high dynamic range content correctly.

- ### Technical Challenges and Research Directions
  - **Vergence-Accommodation Conflict (VAC)**: stereoscopic displays create a perceptual mismatch between vergence depth cues and accommodation focal distance, causing eye fatigue. [[Light Field Display]] and varifocal display research aim to resolve VAC but face cost and complexity barriers.
  - **Brightness for outdoor AR**: waveguide efficiency losses mean projector luminance must exceed 100,000 nit for some architectures to achieve usable outdoor brightness at the eye; microLED is the primary candidate substrate.
  - **Eye-box uniformity**: the region in space from which the user can see the full image must be large enough to accommodate head movement and interpupillary distance variation; geometric waveguides offer advantages here.
  - **[[Neural Rendering]] integration**: learned image synthesis and super-resolution pipelines can compensate for display resolution limits in real time, with [[Eye Tracking]] providing gaze-contingent quality allocation via [[Foveated Rendering]].
  - **Sustainability**: display manufacturing involves rare earth phosphors, indium tin oxide, and energy-intensive fab processes; lifecycle impact is an emerging consideration in product design.

- ### Provenance
  - sources:: Society for Information Display (SID) DisplayWeek proceedings; ICDM Information Display Measurements Standard (IDMS); Khronos OpenXR specification; VESA DisplayHDR standard; ITU-R BT.2020
  - updated:: 2026-06-13

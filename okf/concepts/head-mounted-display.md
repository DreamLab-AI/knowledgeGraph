---
okf_version: "0.2"
type: Class
title: Head-Mounted Display
resource: urn:ngm:class:head-mounted-display
domain: spatial-computing
description: A head-mounted display (HMD) is a wearable optoelectronic device worn on the head that positions one or more display panels or optical projectors in front of the user's eyes, delivering immersive visual content for virtual reality, augmented reality, or mixed reality applications. HMDs incorporate dedicated optics — ranging from Fresnel lenses and pancake optics to diffractive waveguides — to focu
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:xr-headset
hasPart:
  - urn:ngm:class:optical-systems
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:passthrough-camera
  - urn:ngm:class:optical-systems
requires:
  - urn:ngm:class:display-technology
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:rendering-pipeline
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:immersive-collaboration
  - urn:ngm:class:spatial-audio
dependsOn:
  - urn:ngm:class:gpu
  - urn:ngm:class:wireless-connectivity
contrastsWith:
  - urn:ngm:class:virtual-environment
  - urn:ngm:class:flat-panel-display
  - urn:ngm:class:virtual-environment
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:ai-inference
  - urn:ngm:class:metaverse
uses:
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:inside-out-tracking
  - urn:ngm:class:eye-tracking
standardizedBy:
  - urn:ngm:class:open-xr
  - urn:ngm:class:web-xr
partOf:
  - urn:ngm:class:extended-reality-xr
  - urn:ngm:class:spatial-computing
---

# Head-Mounted Display

A head-mounted display (HMD) is a wearable optoelectronic device worn on the head that positions one or more display panels or optical projectors in front of the user's eyes, delivering immersive visual content for virtual reality, augmented reality, or mixed reality applications. HMDs incorporate dedicated optics — ranging from Fresnel lenses and pancake optics to diffractive waveguides — to focus near-focal-plane displays at a perceptually comfortable vergence distance, alongside inertial and visual tracking systems that measure head orientation and six-degrees-of-freedom position in real time. The design space spans sealed VR systems that fully occlude the real world, optical see-through AR waveguide systems that superimpose digital graphics onto the physical environment, and video-passthrough mixed reality headsets that combine high-fidelity camera streams with real-time scene reconstruction. HMDs serve as the primary platform through which users perceive and interact with spatial computing environments.

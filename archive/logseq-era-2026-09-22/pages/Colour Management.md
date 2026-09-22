public:: true

# Colour Management

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:colour-management", "@type":"Page", "title":"Colour Management", "vc:slug":"colour-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:colour-management",
  "@type":"Class",
  "label":"Colour Management",
  "definition":"Colour management is the controlled conversion of colour representations between the characteristics of different devices and media so that colours appear consistent across capture, display and output. It relies on device profiles that describe how a given device reproduces colour and a profile connection space to translate between them. In spatial computing and real-time rendering, colour management ensures perceptually accurate imagery across cameras, displays and headsets.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:display-calibration","label":"Display Calibration"}],
    "enables":[{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"},{"@id":"urn:ngm:class:physically-based-rendering","label":"Physically Based Rendering"}],
    "uses":[{"@id":"urn:ngm:class:shader","label":"Shader"}],
    "supports":[{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"},{"@id":"urn:ngm:class:virtual-production","label":"Virtual Production"}],
    "hasPart":[{"@id":"urn:ngm:class:display-calibration","label":"Display Calibration"}],
    "dependsOn":[{"@id":"urn:ngm:class:display-technology","label":"Display Technology"}],
    "relatedTo":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"},{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"},{"@id":"urn:ngm:class:design-software","label":"Design Software"}],
    "contrastsWith":[{"@id":"urn:ngm:class:rendering","label":"Rendering"}],
    "bridgesTo":[{"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Colour management is the controlled conversion of colour between the characteristics of different devices and media so colours appear consistent from capture to [[Display Technology]] to output.
- It relies on device profiles and a profile connection space to translate colour values faithfully.
- It depends on accurate [[Display Calibration]] to characterise each device.
- In real-time and spatial pipelines it underpins perceptually accurate imagery across cameras, screens and headsets.
- ### Overview
- Every imaging device, whether a camera sensor, monitor, projector or head-mounted display, reproduces colour differently because of its primaries, gamut and transfer characteristics.
- Colour management addresses this by encoding each device's behaviour in an ICC profile and converting between profiles through a device-independent connection space such as CIE XYZ or CIE Lab.
- Rendering intents, including perceptual, relative colorimetric, saturation and absolute colorimetric, govern how out-of-gamut colours are handled during conversion.
- In film, virtual production and game engines, colour management is often handled through scene-referred workflows such as ACES, separating linear scene data from display-referred output transforms.
- ### Key aspects
- Device characterisation and ICC profiling.
- Profile connection space and colorimetric conversion.
- Colour gamut and out-of-gamut handling.
- Transfer functions, including gamma and HDR electro-optical transfer functions.
- Scene-referred versus display-referred workflows.
- ### Mechanisms
- Measurement of device response with colorimeters and spectrophotometers.
- Construction of look-up tables and matrices to map colour spaces.
- Application of rendering intents during conversion.
- Integration into shader and rendering pipelines for real-time output.
- ### Applications
- Consistent colour across design software, print and screen.
- Accurate display reproduction in AR and VR headsets.
- Colour grading and look development in virtual production.
- Physically based rendering where energy-conserving colour is essential.
- ### Relationships
- requires:: [[Display Calibration]]
- enables:: [[Rendering Pipeline]]
- enables:: [[Physically Based Rendering]]
- uses:: [[Shader]]
- supports:: [[Real-Time Rendering]]
- supports:: [[Virtual Production]]
- hasPart:: [[Display Calibration]]
- dependsOn:: [[Display Technology]]
- relatedTo:: [[Texture Mapping]]
- relatedTo:: [[Computer Graphics]]
- relatedTo:: [[Design Software]]
- contrastsWith:: [[Rendering]]
- bridgesTo:: [[Augmented Reality]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation

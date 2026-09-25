Colour management is the controlled conversion of colour representations between the characteristics of different devices and media so that colours appear consistent across capture, display and output. It relies on device profiles that describe how a given device reproduces colour and a profile connection space to translate between them. In spatial computing and real-time rendering, colour management ensures perceptually accurate imagery across cameras, displays and headsets.

- Colour management is the controlled conversion of colour between the characteristics of different devices and media so colours appear consistent from capture to [[Display Technology]] to output.
- It relies on device profiles and a profile connection space to translate colour values faithfully.
- It depends on accurate [[Display Calibration]] to characterise each device.
- In real-time and spatial pipelines it underpins perceptually accurate imagery across cameras, screens and headsets.

### Overview

- Every imaging device, whether a camera sensor, monitor, projector or head-mounted display, reproduces colour differently because of its primaries, gamut and transfer characteristics.
- Colour management addresses this by encoding each device's behaviour in an ICC profile and converting between profiles through a device-independent connection space such as CIE XYZ or CIE Lab.
- Rendering intents, including perceptual, relative colorimetric, saturation and absolute colorimetric, govern how out-of-gamut colours are handled during conversion.
- In film, virtual production and game engines, colour management is often handled through scene-referred workflows such as ACES, separating linear scene data from display-referred output transforms.

### Key aspects

- Device characterisation and ICC profiling.
- Profile connection space and colorimetric conversion.
- Colour gamut and out-of-gamut handling.
- Transfer functions, including gamma and HDR electro-optical transfer functions.
- Scene-referred versus display-referred workflows.

### Mechanisms

- Measurement of device response with colorimeters and spectrophotometers.
- Construction of look-up tables and matrices to map colour spaces.
- Application of rendering intents during conversion.
- Integration into shader and rendering pipelines for real-time output.

### Applications

- Consistent colour across design software, print and screen.
- Accurate display reproduction in AR and VR headsets.
- Colour grading and look development in virtual production.
- Physically based rendering where energy-conserving colour is essential.

### Provenance


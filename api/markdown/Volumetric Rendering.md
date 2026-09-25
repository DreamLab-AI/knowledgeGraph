Volumetric rendering is the process of producing images of three-dimensional density fields where light is absorbed, emitted, and scattered as it travels through a participating medium. Rather than rendering surfaces, it integrates radiance along rays passing through a volume, capturing effects such as smoke, clouds, fog, and translucent materials. The technique underlies medical visualisation, visual effects, and neural scene representations that store the world as a continuous volumetric function.

### Overview

- Unlike surface rendering, volumetric rendering treats the scene as a participating medium with density and colour at every point.
- The rendering equation is evaluated by stepping along each ray, accumulating colour and transmittance through the volume.
- It captures soft, semi-transparent phenomena such as smoke, fog, clouds, fire, and tissue that surfaces cannot represent.
- Modern neural methods reframe scene reconstruction as learning a continuous volumetric function rendered with the same integral.

### Mechanisms

- Ray marching: sampling the volume at discrete steps along each viewing ray.
- Transfer functions: mapping density values to colour and opacity for visualisation.
- Light transport: modelling absorption, in-scattering, and emission within the medium.
- Acceleration structures: voxel grids and empty-space skipping to bound the cost of marching.
- GPU parallelism: per-ray work distributed across many cores for interactive rates.

### Applications

- Visualising volumetric medical data such as CT and MRI scans.
- Rendering atmospheric and fluid effects in film and game visual effects.
- Reconstructing and re-rendering real scenes via neural radiance fields.
- Scientific and engineering visualisation of three-dimensional simulation output.

### Provenance


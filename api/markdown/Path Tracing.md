Path tracing is a physically based rendering algorithm that estimates the rendering equation by stochastically sampling complete light-transport paths from the camera through a scene to light sources. It uses Monte Carlo integration over recursive ray bounces to compute unbiased estimates of global illumination, including soft shadows, indirect lighting, and caustics. Image noise decreases as the square root of the number of samples, making convergence and denoising central practical concerns.

- Path tracing solves the rendering equation by tracing stochastic light paths and accumulating their contributions via [[Monte Carlo Integration]]. It is a form of [[Physically Based Rendering]] built atop [[Ray Tracing]] that naturally reproduces [[Global Illumination]].

### Overview

- Each pixel is estimated by averaging many random paths that bounce through the scene, capturing how light scatters off surfaces and volumes.
- Because the estimator is unbiased, the rendered image converges to the physically correct result as sample count grows, at the cost of stochastic noise at low sample counts.
- The algorithm unifies many lighting effects, such as soft shadows, colour bleeding, and reflections, that require separate special-case passes in [[Rasterisation]].

### Mechanisms

- Rays are cast from the camera; at each surface hit, a new direction is sampled according to the surface reflectance distribution.
- [[Importance Sampling]] biases sampling toward directions and lights that contribute most, reducing variance for the same sample budget.
- Russian roulette terminates low-energy paths probabilistically to keep estimates unbiased while bounding recursion depth.
- Denoising and temporal accumulation reconstruct clean frames from sparse samples, which is what enables interactive [[Real-Time Rendering]] on modern [[GPU]] hardware.

### Applications

- Offline film and visual-effects rendering where physical accuracy dominates.
- Architectural and product visualisation requiring believable indirect light.
- Real-time engines using hardware ray-tracing cores with aggressive denoising.
- Reference rendering used to validate faster approximate techniques in [[Computer Graphics]].

### Provenance


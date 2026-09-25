A noise schedule is the function that determines how much Gaussian noise is added at each step of a diffusion model's forward process and, correspondingly, removed during sampling. It governs the variance trajectory from clean data to pure noise and strongly affects sample quality, training stability, and the number of steps required. Common forms include linear, cosine, and learned schedules.

### Content

- The schedule sets the signal-to-noise ratio at each timestep; cosine schedules tend to spend more capacity on the perceptually important mid-noise region than linear ones. Choice of schedule interacts with the sampler and step count, so reduced-step samplers often re-parameterise or learn the schedule to preserve quality while accelerating generation.


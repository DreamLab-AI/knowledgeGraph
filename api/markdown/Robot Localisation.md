Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.

### Content

- Filters recursively predict pose from motion and correct it from observations, maintaining a probability distribution that captures uncertainty. Particle filters represent this belief with weighted samples, supporting global localisation and recovery from kidnapping.


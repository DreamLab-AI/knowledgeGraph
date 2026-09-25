The study and application of interpersonal and human-robot spatial relationships — including intimate, personal, social, and public distance zones — to design robotic systems that behave in spatially appropriate ways. Proxemics-aware robots adjust their approach trajectories, velocities, and stopping distances in response to detected human zones, improving perceived safety, comfort, and social acceptability in shared environments.

### Semantic Classification

### Content

Proxemics as a discipline was established by anthropologist Edward T. Hall in the 1960s, who categorised the space around individuals into four zones: intimate (0–45 cm), personal (45 cm–1.2 m), social (1.2–3.6 m), and public (beyond 3.6 m). These boundaries vary across cultures, contexts, and individual preferences, making them probabilistic guidelines rather than hard constraints for robot designers.

In social robotics and service robot deployments, proxemics informs both the planning of approach paths (how a robot navigates to a person) and the management of shared workspace (how a robot positions itself relative to bystanders). Robots that violate proxemic norms — by entering the intimate zone unexpectedly or maintaining uncomfortably close parallel paths — are rated as less trustworthy and less competent in user studies, regardless of their task performance. Integrating proxemics into motion planners typically involves adding socially-aware cost terms to trajectory optimisation, often derived from Gaussian potential fields centred on detected human positions.

### Provenance


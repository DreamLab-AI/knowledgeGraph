Keyframe animation is a technique in which an animator specifies an object's properties at a set of significant frames, called keyframes, and the system interpolates the in-between frames automatically. Property values such as position, rotation, and scale are stored on timed curves whose interpolation and easing control the motion between keys. It is a foundational method for authoring deterministic, repeatable motion in computer graphics and real-time engines.

- Keyframe animation defines motion by setting property values at chosen frames and interpolating the rest. It is a core method of [[Animation]] in [[Computer Graphics]], relying on [[Interpolation]] to fill the frames between keys.
- It gives animators precise, repeatable control over how objects change over time.

### Overview

- An animator places keyframes at the moments where a property reaches a meaningful value, leaving the system to generate the transitions.
- Each animated property is stored as a curve of time-value pairs; the curve's shape and easing determine the feel of the motion.
- Because the result is deterministic, the same timeline plays back identically every time.

### Key aspects

- Keys: explicit property values pinned to specific times.
- Interpolation: the method used to compute in-between values via [[Interpolation]].
- Easing: curve shaping that accelerates or decelerates motion for natural feel.
- Channels: separate curves for position, rotation, scale, and other properties.

### Mechanisms

- Linear interpolation produces constant-rate transitions between keys.
- Spline and Bezier curves yield smooth, controllable acceleration.
- Curve editors let animators reshape tangents and easing per channel.
- Animation clips can be blended and layered for complex behaviour.

### Applications

- Authoring character and object motion in games and XR scenes.
- Driving [[Skeletal Animation]] by keying bone transforms.
- Camera moves, UI transitions, and cinematic sequences.
- Interchange of animated assets through formats such as [[USD]].

### Provenance


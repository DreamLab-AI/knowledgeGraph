A blend tree is a structure within an animation system that smoothly blends multiple animation clips according to one or more continuous parameters, producing a single output pose. It is commonly used for locomotion, where clips such as idle, walk and run are interpolated by speed and direction to avoid abrupt transitions. Blend trees are typically composed within an animation controller alongside state machines that govern when each tree is active.

- A blend tree blends multiple [[Animation]] clips by continuous parameters into one output pose, typically for [[Locomotion]]. It sits within an [[Animation Controller]] and uses [[Skeletal Animation]] driven by an engine such as [[Unity]] or [[Unreal Engine]].

### Overview

- Switching between discrete animation clips produces visible popping; blend trees solve this by interpolating between clips along parameters such as speed and direction.
- A common case is a one-dimensional locomotion tree blending idle, walk and run by movement speed; two-dimensional trees add directional blending for strafing.
- Blend trees are usually nested inside an animation controller's state machine, which selects which tree drives the character at a given moment.

### Key aspects

- Parameter-driven interpolation between multiple clips.
- One- and two-dimensional blending for speed and direction.
- Composition within an animation controller and state machine.
- Real-time evaluation each frame for responsive characters.

### Applications

- Smooth character locomotion in games and virtual environments.
- Directional movement, strafing and turning blends.
- Combining captured and authored clips for natural motion.

### Provenance


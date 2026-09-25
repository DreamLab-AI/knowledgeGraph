An animation state machine is a graph of discrete animation states and the transitions between them, used in real-time engines to drive a character or object's motion based on game logic, input and parameters. Each state references a clip or blend tree, and transitions carry conditions, blend durations and interruption rules that govern how one motion flows into another. It separates high-level behaviour authoring from low-level pose evaluation, making locomotion and action systems tractable to build and tune.

### Overview

- Animation state machines let designers author character behaviour as a readable graph rather than as imperative code. A state such as "Idle", "Walk" or "Jump" plays an associated motion, and transitions fire when parameters like speed or a jump trigger cross thresholds.
- During each frame the machine evaluates the active state, advances any in-progress transition, and produces a final pose by blending the contributing clips.
- The pattern is a standard feature of major engines, where it sits above the pose-evaluation layer and below gameplay logic that sets the driving parameters.

### Key aspects

- States: each maps to a clip or a parameterised [[Blend Tree]] that selects motion by continuous inputs.
- Transitions: directed edges carrying boolean or threshold conditions, blend durations and interruption settings.
- Parameters: floats, bools and triggers exposed to gameplay code that drive transition conditions.
- Layers and masks: parallel sub-machines applied to bone subsets, for example an upper-body aim over a lower-body locomotion.
- Determinism: behaviour is reproducible given identical parameter histories, aiding debugging and networking.

### Mechanisms

- On each update the machine resolves the current state, computes transition progress, and asks contributing nodes for poses.
- Crossfade blending interpolates between source and destination poses over the transition duration.
- A [[Blend Tree]] within a state mixes clips by continuous parameters such as movement direction or speed.
- The result feeds the [[Skeletal Animation]] system, which applies the blended pose to the skeleton.

### Applications

- Player and NPC locomotion in games built on a [[Game Engine]].
- Avatar motion in virtual and augmented reality experiences.
- Cinematic and gameplay action sequencing in [[Unreal Engine]] and comparable tools.
- Procedural creature and crowd behaviour driven by gameplay parameters.

### Provenance


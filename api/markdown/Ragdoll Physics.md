Ragdoll physics is a procedural animation technique that simulates the limp, physically reactive motion of an articulated character body using a system of rigid bodies connected by constrained joints. Instead of playing pre-authored animation, the character's limbs respond dynamically to gravity, collisions and impulses via a physics engine. It is widely used in games and interactive media to produce believable falls, impacts and death animations.

- Ragdoll physics models a character's body as a chain of rigid bodies joined by constrained joints, letting [[Rigid Body Dynamics]] and [[Collision Detection]] drive its motion rather than playing back authored clips. It is a specialised form of [[Physics-Based Animation]] producing limp, reactive movement.
- When active, the character behaves like a jointed doll under [[Physics Simulation]], reacting realistically to gravity, impacts and impulses, which contrasts with the deterministic playback of [[Skeletal Animation]] and [[Motion Capture]].

### Overview

- The character skeleton is mapped to physics primitives: each bone becomes a rigid body and each articulation a joint constraint with angular limits.
- A physics engine integrates forces and resolves collisions every frame, so the body collapses and tumbles in a physically plausible way.
- Modern systems blend ragdoll with animation, activating physics on impact and reasserting authored or [[Inverse Kinematics]] control as the character recovers.
- Joint limits, mass distribution and damping are tuned so the motion looks like a real body rather than a chaotic mass of parts.

### Mechanisms

- Body construction: skeletal bones are wrapped in collision shapes with assigned mass and inertia.
- Joint constraints: hinges, ball-and-socket and cone-twist joints limit relative motion to anatomical ranges.
- Integration: the engine advances the dynamics and resolves contacts using [[Collision Detection]].
- Blending: weighted mixing between [[Procedural Animation]] physics and authored animation enables active ragdoll.

### Applications

- Death, knock-down and impact animations in games.
- Stunt and fall simulation for interactive characters.
- Active ragdoll for responsive, physically grounded movement.
- Hybrid systems combining authored animation with reactive physics.

### Provenance


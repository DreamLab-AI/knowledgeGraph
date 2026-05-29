- ### Definition
  - A data structure encoding surface interaction properties — friction coefficients, coefficient of restitution, density, and drag — that govern object behaviour within a physics simulation engine. Physics materials are distinct from visual rendering materials and are consumed by simulation solvers to produce physically plausible contact responses for metaverse avatars, props, and environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:PhysicsMaterial
  - owl-role:: Concept

- ### Relationships
  - uses: [[Physics Simulation]], [[Rigid Body Dynamics]]
  - supports: [[Collision Detection]], [[Physically Based Rendering]]
  - partOf: [[Metaverse]]

- ### Content

  #### Key Characteristics
  - **Surface Interaction**: Defines contact behavior between objects
  - **Parameterized Properties**: Numeric values controlling physics response
  - **Material Pairing**: Combined properties determine interactions
  - **Simulation-Specific**: Interpreted by physics engine
  - **Distinct from Visual**: Separate from rendering materials

  ## Core Properties

  ### Friction Coefficients

  #### Static Friction (μₛ)
  - Resistance to initiating motion
  - Higher values = harder to start sliding
  - Typical range: 0.0 (ice) to 1.5+ (rubber on concrete)
  - Zero friction = frictionless surface

  #### Dynamic Friction (μₖ)
  - Resistance during sliding motion
  - Usually less than static friction
  - Controls sliding speed and deceleration
  - Typical range: 0.0 to 1.2

  #### Friction Combine Mode
  - How to combine two materials' friction values
  - **Average**: (μ₁ + μ₂) / 2
  - **Minimum**: min(μ₁, μ₂)
  - **Maximum**: max(μ₁, μ₂)
  - **Multiply**: μ₁ × μ₂

  ### Restitution (Bounciness)

  #### Coefficient of Restitution (e)
  - Energy retained after collision
  - Range: 0.0 (no bounce) to 1.0 (perfect bounce)
  - Real materials: typically 0.1 to 0.95
  - Values > 1.0 add energy (non-physical but useful)

  #### Restitution Combine Mode
  - Average, min, max, or multiply
  - Affects collision "bounciness"
  - Important for consistent behavior

  ### Density

  #### Mass per Volume (ρ)
  - Determines object mass if auto-calculated
  - Measured in kg/m³ or g/cm³
  - Typical values:
  - Wood: 500-700 kg/m³
  - Metal: 2700-8000 kg/m³
  - Rubber: 900-1200 kg/m³
  - Water: 1000 kg/m³

  #### Affects
  - Gravitational force (weight)
  - Momentum and collision response
  - Floating/sinking in fluids

  ### Drag & Damping

  #### Linear Drag
  - Resistance to linear motion through medium
  - Air resistance coefficient
  - Higher values slow objects faster

  #### Angular Drag
  - Resistance to rotational motion
  - Spinning objects slow down over time

  ## Advanced Properties

  ### Surface Softness
  - Deformation under pressure
  - Contact area calculation
  - Affects collision detection precision

  ### Sound Properties
  - Impact sound selection
  - Volume based on collision force
  - Frequency based on material type

  ### Thermal Properties
  - Heat conduction (for advanced sims)
  - Specific heat capacity
  - Thermal expansion

  ### Electrical Properties
  - Conductivity
  - Dielectric constant
  - Useful for specialized simulations

  ## Material Combination

  ### Pairwise Interaction
  When two materials collide, combined properties determine behavior:

  ```
  Combined Friction = CombineMode(friction₁, friction₂)
  Combined Restitution = CombineMode(restitution₁, restitution₂)
  ```

  ### Common Presets

  | Material   | Static μₛ | Dynamic μₖ | Restitution | Density (kg/m³) |
  |------------|-----------|------------|-------------|-----------------|
  | Ice        | 0.05      | 0.03       | 0.1         | 917             |
  | Wood       | 0.6       | 0.4        | 0.2         | 600             |
  | Metal      | 0.7       | 0.5        | 0.3         | 7850            |
  | Rubber     | 1.2       | 1.0        | 0.8         | 1100            |
  | Concrete   | 0.8       | 0.6        | 0.1         | 2400            |
  | Glass      | 0.5       | 0.4        | 0.7         | 2500            |
  | Cloth      | 0.4       | 0.3        | 0.0         | 200             |

  ## Implementation in Physics Engines

  ### Unity PhysicsMaterial
  ```csharp
  PhysicMaterial myMaterial = new PhysicMaterial();
  myMaterial.dynamicFriction = 0.6f;
  myMaterial.staticFriction = 0.7f;
  myMaterial.bounciness = 0.3f;
  myMaterial.frictionCombine = PhysicMaterialCombine.Average;
  myMaterial.bounceCombine = PhysicMaterialCombine.Maximum;
  ```

  ### Unreal Engine Physical Material
  ```cpp
  UPhysicalMaterial* MyPhysMat = NewObject<UPhysicalMaterial>();
  MyPhysMat->Friction = 0.6f;
  MyPhysMat->Restitution = 0.3f;
  MyPhysMat->Density = 1000.0f; // kg/m³
  MyPhysMat->FrictionCombineMode = EFrictionCombineMode::Average;
  ```

  ### PhysX Material
  ```cpp
  PxMaterial* material = physics->createMaterial(0.5f, 0.5f, 0.1f);
  // Parameters: staticFriction, dynamicFriction, restitution
  ```

  ## Definition

  Data structure and parameters defining the physical interaction properties of surfaces and objects within a physics simulation, governing friction, restitution, density, drag, and collision response behavior critical for realistic metaverse interactions.

  #### Related Concepts
  - [[Collision Detection]]
  - [[Rigid Body Dynamics]]
  - [[Physically-Based Rendering]]
  - [[Physics Simulation]]
  - [[Material System]]

  ## Applications

  ### Metaverse Interactions
  - Avatar walking on varied terrain (grass, ice, wood)
  - Object manipulation (picking up, throwing)
  - Vehicle handling (tires on different surfaces)
  - Climbing and parkour mechanics

  ### Game Mechanics
  - Puzzle design (sliding ice blocks)
  - Platforming (bouncy mushrooms)
  - Sports simulation (ball physics)
  - Combat (weapon impacts)

  ### Training Simulations
  - Realistic tool interaction
  - Material handling training
  - Safety scenario rehearsal
  - Heavy machinery operation

  ### Virtual Production
  - Physical plausibility for pre-visualization
  - Stunt planning and rehearsal
  - Prop interaction planning

  ## Design Considerations

  ### Realism vs. Fun
  - Real-world values may not be enjoyable
  - Exaggerate for clarity and feel
  - Consistency more important than accuracy

  ### Performance
  - Physics materials add computation
  - Limit complex interactions for performance
  - Use simplified models for distant objects

  ### Authoring Workflow
  - Pair visual materials with physics materials
  - Provide sensible defaults
  - Allow per-instance overrides
  - Preset library for common materials

  ## Challenges

  ### Material Authoring
  - Expertise required for realistic values
  - Iterative tuning for desired feel
  - Testing across diverse scenarios

  ### Interoperability
  - No universal standard for physics materials
  - Manual mapping between engines
  - USD PhysicsMaterial schema (emerging standard)

  ### Simulation Stability
  - Extreme values cause instability
  - Very high/low friction can break solver
  - Restitution > 1.0 adds energy (divergence risk)

  ## Best Practices

  - Start with realistic reference values
  - Tune iteratively through playtesting
  - Maintain material library with presets
  - Document material choices and rationale
  - Use combine modes consistently across project
  - Test material pairings explicitly
  - Consider performance implications

  #### References
  - NVIDIA PhysX Documentation: *Materials and Surfaces*
  - Hecker, C. (1997). "Physics, Part 3: Collision Response"
  - Erin Catto (2005-2023). *Box2D Documentation*
  - Millington, I. & Funge, J. (2009). *Artificial Intelligence for Games*, 2nd ed.

  ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
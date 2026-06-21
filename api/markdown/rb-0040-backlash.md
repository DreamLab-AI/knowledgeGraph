- ### Definition
  - **Backlash** (RB-0040) is the lost angular or linear motion in a robot joint's mechanical transmission when the direction of motion reverses, caused by clearance gaps between gear teeth or drive components. It directly degrades accuracy and repeatability, and introduces nonlinearity that complicates feedback control design. Harmonic drives and cycloidal reducers are widely used in collaborative robots specifically because they have near-zero backlash.

- ### Semantic Classification
  - owl-class:: robotics:rb0040backlash
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0039 stiffness, rb 0038 compliance, rb 0026 robot joint, rb 0043 torque, rb 0047 feedback control
  - contrastsWith:: rb 0034 repeatability, rb 0035 accuracy

- ### Content
  - ### Primary Definition
  **Backlash** (RB-0040) is quantified as the total lost motion measured at the output of a transmission when the input reverses by an amount sufficient to take up all clearances. In robot joint design, backlash is a key performance parameter: a joint with 0.01° of backlash will have that as a hard lower bound on positional error, regardless of encoder resolution or control algorithm quality.

  Backlash causes stick-slip behaviour and limit cycling in position-controlled systems. Modern collaborative robots commonly use strain wave (harmonic) gears which achieve arcminute-level backlash, at the cost of lower peak torque and reduced resistance to shock loads compared to conventional planetary gearboxes.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
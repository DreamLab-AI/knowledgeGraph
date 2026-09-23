
Backlash in robotics is the lost motion in a mechanical transmission — the angular or linear displacement of the output element when the input reverses direction without producing corresponding output movement, caused by clearance gaps between mating gear teeth or other drive components. Backlash degrades positional accuracy and repeatability, introduces nonlinearity into the control loop, and can cause oscillation or chattering in feedback control systems. Minimising backlash is critical for precision robot joints, and it is typically reduced through the use of preloaded gear pairs, harmonic drives, or cycloidal transmissions.

- ### Semantic Classification

- ### Content
  - ### Primary Definition
  **Backlash** (RB-0040) is quantified as the total lost motion measured at the output of a transmission when the input reverses by an amount sufficient to take up all clearances. In robot joint design, backlash is a key performance parameter: a joint with 0.01° of backlash will have that as a hard lower bound on positional error, regardless of encoder resolution or control algorithm quality.

  Backlash causes stick-slip behaviour and limit cycling in position-controlled systems. Modern collaborative robots commonly use strain wave (harmonic) gears which achieve arcminute-level backlash, at the cost of lower peak torque and reduced resistance to shock loads compared to conventional planetary gearboxes.

- ### Provenance


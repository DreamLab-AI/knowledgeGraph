- ### Definition
  A Hydraulic Motor is an actuation device that converts pressurised hydraulic fluid flow into continuous rotational mechanical torque, functioning as the rotary counterpart to the hydraulic cylinder. It is distinguished by extremely high power-to-weight ratio and the ability to sustain high torques at low rotational speeds without gearbox inefficiencies, making it the preferred actuator for heavy robotic joints, industrial manipulators, and mobile machinery operating in harsh environments. Common design types include gear motors, vane motors, and axial-piston motors.

- ### Semantic Classification
  - owl-class:: robotics:HydraulicMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Hydraulic Actuator]]
  - hasPart:: [[Actuator]]
  - requires:: [[Hydraulic Cylinder]], [[Servo Control]]
  - uses:: [[Torque Control]], [[Robot Actuator]]
  - contrastsWith:: [[Electric Motor]], [[Pneumatic Motor]], [[Servo Motor]], [[Electric Actuator]]
  - relatedTo:: [[Mechanical Component]], [[Force Torque Sensor]], [[Robotics Systems]]

- ### Content

  ### Definition

  A Hydraulic Motor converts pressurised hydraulic fluid into continuous rotational torque by exploiting Pascal's principle: pressure applied uniformly to an enclosed fluid is transmitted undiminished throughout. Unlike the hydraulic cylinder which produces linear reciprocating motion, the hydraulic motor produces continuous shaft rotation suitable for driving wheels, joints, and conveyor systems. The motor is part of a wider hydraulic actuation system that includes a pump, reservoir, control valves, and feedback sensors.

  ### Relationships

  Hydraulic Motors are a specialised type of Hydraulic Actuator and incorporate an Actuator as their core component. They require Hydraulic Cylinders in the same system for linear actuation tasks, and Servo Control to regulate output speed and position with precision. Torque Control algorithms operate on Robot Actuator outputs to achieve compliant interaction with the environment. Hydraulic Motors contrast with Electric Motors (lighter, cleaner, more precise at low torque), Pneumatic Motors (compressible-fluid, lower power density), and Servo Motors (high-precision electric drives used in most modern collaborative robots).

  ### Content

  Gear-type hydraulic motors use meshing gears to displace fluid from inlet to outlet, producing torque from the pressure differential. They are simple, low-cost, and tolerant of contamination but have lower efficiency at partial loads. Vane motors use spring-loaded vanes that maintain contact with the motor housing under centrifugal and hydraulic pressure, offering smoother operation at medium speeds. Axial-piston motors — the highest-performance class — use a rotating barrel of pistons oriented parallel to the shaft axis, achieving efficiencies above 90% across a wide speed range and are preferred for precision robotic joint drives.

  In robotics contexts, hydraulic motors are most commonly found in heavy-duty mobile robots (excavator-type platforms, forestry robots, military UGVs) and large industrial manipulators where the force-to-weight advantage outweighs the complexity of the hydraulic circuit. The Boston Dynamics Atlas humanoid robot used hydraulic actuation for its high-force joint drives before transitioning to electric actuation in later generations, illustrating the trade-off between hydraulic power density and electric actuation cleanliness and controllability. Force Torque Sensors mounted at the output shaft provide haptic feedback enabling compliant control despite the inherent nonlinearity of hydraulic systems.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
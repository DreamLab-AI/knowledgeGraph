iri:: http://narrativegoldmine.com/robotics#ProprioceptiveSensor
uri:: urn:visionclaw:concept:robotics:proprioceptive-sensor
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:proprioceptive-sensor
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: Proprioceptive Sensor
content-hash:: sha256-12-a8848261f47e
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - ProprioceptiveSensor is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: robotics:ProprioceptiveSensor
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  term-id: RB-9024
  domain: rb
  # ProprioceptiveSensor
  A Proprioceptive Sensor measures the robot's internal state including joint positions, velocities, accelerations, forces, and torques, providing essential feedback for control and state estimation. These sensors enable closed-loop control, dynamic compensation, and self-monitoring without relying on external environmental observations.
  The category includes encoders and resolvers measuring joint angles, tachometers sensing rotational velocity, accelerometers and gyroscopes detecting linear and angular accelerations, torque sensors measuring joint torques, and current sensors inferring motor torque. Inertial measurement units (IMUs) combining accelerometers and gyroscopes provide six-degree-of-freedom motion sensing essential for balance control and navigation.
  Applications span servo control loops using position feedback for accurate trajectory tracking, dynamic control compensating for inertia and gravity based on joint torque measurements, collision detection identifying unexpected forces through torque monitoring, and odometry estimating robot displacement from wheel encoder integration. High-quality proprioceptive sensing enables precise manipulation, stable locomotion, and safe operation.
  Modern sensor technologies offer increasing resolution and bandwidth: optical encoders with millions of counts per revolution, MEMS IMUs providing 1kHz+ update rates, and integrated motor controllers with built-in current and position sensing. Contemporary research addresses sensor fusion combining complementary proprioceptive measurements, calibration procedures improving accuracy through data-driven parameter identification, and fault detection identifying sensor failures through redundancy and analytical models. Recent developments include soft proprioceptive sensors for compliant robots, neuromorphic sensors with event-based output, and self-calibrating sensors adapting to changing characteristics over robot lifespan.
  - Siciliano, B., & Khatib, O. (2016). Springer Handbook of Robotics (2nd ed.). Springer
  - Webster, J.G. (Ed.). (2010). Wiley Encyclopedia of Electrical and Electronics Engineering. Wiley
  - Siegwart, R., Nourbakhsh, I.R., & Scaramuzza, D. (2011). Introduction to Autonomous Mobile Robots (2nd ed.). MIT Press
  - Haddadin, S., et al. (2017). "Robot collisions: A survey on detection, isolation, and identification." IEEE Transactions on Robotics, 33(6), 1292-1312

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

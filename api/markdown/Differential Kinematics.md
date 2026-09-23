
Differential kinematics maps velocities between Robot Joint space and task-space (Cartesian) coordinates using the Jacobian matrix, enabling velocity-level analysis and control of robot manipulators.

- ### Semantic Classification

- ### Content
  The Jacobian matrix J encodes how small changes in joint angles produce corresponding changes in end-effector position and orientation. Mathematically, the differential relationship is expressed as: v_e = J * ω_j, where v_e denotes end-effector Cartesian velocity, ω_j denotes joint angular velocities, and J is the Jacobian. The Jacobian's rank, column space, and singular values characterise robot dexterity and ability to achieve arbitrary end-effector velocities.

  Singularities occur where the Jacobian loses rank, causing infinite joint velocities to be required for finite end-effector velocities. Near singularities, the robot exhibits reduced control authority in certain directions and amplified joint accelerations. [[Singularity Avoidance]] becomes critical for smooth trajectory tracking, and damped least-squares methods approximate inverse Jacobians whilst maintaining numerical stability near singularities. The Jacobian transpose relationship v = J^T * f directly relates end-effector forces to joint torques, essential for [[Force Control]] and [[Impedance Control]].

  Applications of differential kinematics span velocity-level trajectory tracking where computed velocities feed into [[PID]] joint controllers, real-time singularity detection during runtime, redundant robot control exploiting null-space movements, and deformable robot mechanics where the Jacobian captures elastic deformations. Modern approaches incorporate differential kinematics within [[Model Predictive Control]] frameworks to compute optimal joint trajectories satisfying velocity and acceleration limits, and in [[Learning-Based Control]] where neural networks implicitly learn Jacobian-like mappings from data.

- ### Provenance


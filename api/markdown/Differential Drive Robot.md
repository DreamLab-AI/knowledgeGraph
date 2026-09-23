
Differential drive robot uses two independently controlled wheels on opposite sides to enable both forward/backward locomotion and in-place rotation, forming the most widely deployed Mobile Robot architecture.

- ### Semantic Classification

- ### Content
  Differential drive kinematics operate through a simple principle: equal wheel speeds produce straight-line motion, whilst unequal speeds produce curved trajectories with the instantaneous centre of rotation located perpendicular to the axle. Setting opposite wheel velocities achieves in-place rotation without forward translation. This mechanical simplicity enables robots like the Pioneer, TurtleBot, and ROS reference platforms to achieve complex manoeuvres using straightforward control algorithms.

  The popularity of differential drive stems from its reliability, low cost, and predictable non-linear dynamics enabling accurate [[Odometry]]-based [[Localisation]]. However, differential drives are non-holonomic systems: the robot cannot move sideways despite having two degrees of freedom available, meaning it cannot simply drive to arbitrary positions in arbitrary orientations but must follow feasible paths respecting kinematic constraints. This restriction necessitates [[Motion Planning]] algorithms like [[Dubins Curves]] and [[Reeds-Shepp Paths]] that respect non-holonomy.

  Modern differential drive systems incorporate odometry fusion with [[Inertial Measurement Units]] and [[Visual Odometry]] for improved localisation, [[Skid Control]] to handle slip on compliant terrain, and adaptive control algorithms that estimate wheel friction and adjust motor commands accordingly. Multi-wheeled variants extend the architecture—four-wheel differential drives using paired motors, or three-wheeled configurations balancing stability and footprint. Integration with computer vision enables visually-guided navigation, whilst combinations with robotic arms create mobile manipulation platforms for [[Warehouse Automation]] and [[Service Robotics]].

- ### Provenance


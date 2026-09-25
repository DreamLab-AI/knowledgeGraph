A reference frame is a coordinate system, anchored to a chosen origin and orientation, against which positions, velocities, and orientations are measured. In robotics each link, sensor, and the world itself has its own frame, and motion is described by transformations between them. Correct frame definitions are essential for sensor fusion, kinematics, and consistent spatial reasoning.

### Content

- Typical frames include the world (inertial) frame, base frame, end-effector frame, and per-sensor frames, organised into a transform tree. Software such as the ROS tf system maintains time-stamped relationships between frames so that data captured in one frame can be reasoned about in another.


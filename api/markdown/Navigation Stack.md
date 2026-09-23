
A navigation stack is the integrated software subsystem of a mobile robot responsible for taking it from a current pose to a goal pose while avoiding obstacles. It composes mapping, localisation, global path planning, and local trajectory control into a coordinated pipeline. The stack consumes sensor data and a map, and emits velocity commands that drive the robot's actuators.

- ### Content
  - Typical stacks separate a global planner that computes a route over a static map from a local planner or controller that reacts to live sensor data and dynamic obstacles. Behaviour trees or state machines coordinate recovery actions when the robot becomes stuck, and costmaps fuse occupancy and proximity data to keep planned motions safe.


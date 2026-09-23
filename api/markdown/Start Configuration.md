
A start configuration is the initial pose of a robot or articulated system, expressed as a point in its configuration space, from which a motion or path planner must compute a feasible route to a goal configuration. It encodes the complete set of joint values or positional parameters that fully describe the system's state at the beginning of a planned motion. Together with the goal configuration, it bounds the planning query.

- ### Content
  - It anchors one end of every planning query within [[Robotics Navigation and Planning]], defining the system's full state before motion begins. Sampling-based and search-based planners expand from the start configuration through free space toward the goal, and [[Trajectory Generation]] then time-parameterises the resulting geometric path into a dynamically feasible motion that respects velocity and acceleration limits.


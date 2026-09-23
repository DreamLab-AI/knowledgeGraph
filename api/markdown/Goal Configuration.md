
A goal configuration is the desired target state of a robot or articulated system, expressed in its configuration space as a set of joint angles or a pose. Motion planners search for a collision-free path from the start configuration to this goal. Specifying it precisely is a prerequisite for path planning and trajectory generation.

- ### Content
  - Configurations are expressed in joint space for manipulators or as pose plus orientation for mobile platforms, and may be derived from a task-space goal via inverse kinematics. A planner treats the goal as the terminal node, finding a continuous, collision-free path through free configuration space. Goals can be single points, regions, or sets of acceptable poses when multiple solutions satisfy the task.


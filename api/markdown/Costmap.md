
A costmap is a grid-based spatial data structure used in robot navigation that assigns a traversal cost to each cell of the environment, encoding obstacles, inflation zones, and free space. Local and global costmaps fuse sensor data and static maps so that planners can compute collision-free, low-cost paths. It is a core component of navigation stacks such as Nav2, where it underpins both global path planning and local trajectory control.

- ### Content
  - Costmaps are typically composed of layered plugins (static, obstacle, inflation) that combine map priors with live sensor readings. Inflation layers expand obstacle costs outward to keep the robot footprint clear, while global and local costmaps operate at different update rates and spatial extents for planning versus reactive control.


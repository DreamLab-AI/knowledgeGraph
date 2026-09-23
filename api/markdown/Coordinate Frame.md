
A coordinate frame is a reference system defined by an origin and a set of axes against which positions, orientations, and motions are measured. In robotics and perception, multiple frames (world, base, sensor, tool) are related by rigid-body transforms so that data from different sources can be expressed consistently. Correct frame management is essential for sensor fusion, motion planning, and collision checking.

- ### Content
  - Frames are linked by homogeneous transforms forming a tree (for example via ROS tf), letting a system convert measurements between sensor, robot, and world references. Errors in frame definitions or transform chains produce systematic offsets that corrupt mapping, planning, and manipulation.


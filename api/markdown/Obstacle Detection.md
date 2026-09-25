Obstacle Detection is the robotics perception task of identifying and localising physical objects in a robot's surroundings that may impede or endanger its motion. It fuses data from sensors such as lidar, cameras, radar and ultrasonic rangefinders to build a representation of free and occupied space. Reliable obstacle detection is a prerequisite for safe autonomous navigation, collision avoidance and motion planning.

### Overview

- Obstacle detection transforms raw sensor streams into an actionable model of where the robot can and cannot move. Range sensors yield point clouds and depth maps that are segmented into ground plane, static structure and dynamic agents, while cameras supply semantic context. The resulting occupancy representation feeds the planning and control stack that keeps the robot safe.

### Mechanisms

- Sensor sourcing: lidar point clouds, stereo or monocular depth, radar returns and ultrasonic ranging.
- Ground-plane segmentation: separating traversable surface from obstacles above it.
- Occupancy modelling: building occupancy grids or voxel maps marking free, occupied and unknown space.
- Dynamic object tracking: estimating velocity of moving agents to predict near-future collision risk.
- Sensor fusion: combining complementary modalities to overcome individual sensor failure modes and noise.

### Applications

- Collision avoidance for mobile robots and autonomous vehicles.
- Safe path and motion planning in cluttered or dynamic environments.
- Industrial cobots maintaining safe separation from human workers.
- Drone flight in GPS-denied or obstacle-rich settings.

### Provenance


SLAM Toolbox is an open-source ROS package for 2D simultaneous localisation and mapping using laser scan matching and pose-graph optimisation. It supports online mapping, lifelong mapping with map serialisation and continuation, and localisation against pre-built maps, making it a default mapping stack for indoor mobile robots. It is widely deployed on ground robots running the ROS navigation stack.

### Content

- It performs scan matching to construct a pose graph that is optimised to produce consistent occupancy maps, and its lifelong-mapping mode lets robots serialise, reload, and extend maps across sessions. Integration with the ROS Navigation2 stack makes it a standard choice for autonomous indoor navigation.


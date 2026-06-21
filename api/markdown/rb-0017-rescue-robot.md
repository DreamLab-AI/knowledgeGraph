- ### Definition
  - A rescue robot is a specialised mobile robot deployed in emergency scenarios—collapsed structures, fires, chemical spills, and nuclear incidents—where sending human responders entails unacceptable risk. These systems must combine robust locomotion on unstructured terrain, reliable communications over intermittent links, multi-modal sensing for victim detection (thermal imaging, audio, CO2), and sufficient autonomy to navigate when teleoperation bandwidth is constrained.

- ### Semantic Classification
  - owl-class:: robotics:rb0017rescuerobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Rescue robots are a subclass of mobile robots and share significant technology with inspection robots (RB-0018). Their perception stack typically includes SLAM for mapping unknown environments, depth cameras (RB-0077), and LiDAR (RB-0069) for 3D situational awareness. Obstacle avoidance is safety-critical in debris-filled environments. Swarm approaches are increasingly applied: multiple smaller rescue robots cooperate to cover larger search areas more quickly than a single large platform.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
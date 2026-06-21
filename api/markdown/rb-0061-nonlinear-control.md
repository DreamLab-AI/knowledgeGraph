- ### Definition
  - Nonlinear control is the branch of control theory that deals with systems whose governing equations are inherently nonlinear. Robotic manipulators and mobile platforms are quintessentially nonlinear: their dynamics feature inertia matrices that depend on configuration, velocity-dependent Coriolis and centripetal terms, and gravity loading. PID controllers, which assume linear plant behaviour, typically provide adequate performance only near a single operating point; nonlinear methods extend stable control across the entire workspace.

- ### Semantic Classification
  - owl-class:: robotics:rb0061nonlinearcontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Key nonlinear control strategies applied in robotics include: computed-torque control (RB-0064), which cancels robot nonlinearities to yield a decoupled linear system; sliding-mode control (RB-0063), which enforces trajectories on a sliding surface robust to disturbances; and model predictive control (RB-0062), which optimises over a receding horizon. All require accurate dynamic models (RB-0022). Adaptive variants (Adaptive Control) update model parameters online, while feedback linearisation connects nonlinear control to classical feedback theory (RB-0047).

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
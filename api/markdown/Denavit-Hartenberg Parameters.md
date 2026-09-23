
Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.

- ### Content
  - Using the DH convention, the pose of the end-effector is computed by multiplying the per-joint homogeneous transforms in sequence. The convention's appeal is uniformity and minimal parameters, though singular configurations and the classic-versus-modified DH variants require care to avoid sign and frame errors.


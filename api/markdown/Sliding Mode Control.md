Sliding mode control is a nonlinear, robust control method that drives a system's state onto a designed sliding surface and constrains it there using high-frequency switching of the control input. Once on the surface, the closed-loop dynamics become insensitive to matched disturbances and parameter uncertainty, giving strong robustness. It is a control-theory technique widely applied to robotic actuators and power electronics, though it can induce chattering.

### Content

- The design chooses a sliding surface defining desired error dynamics, then a discontinuous control law that enforces a reaching condition toward it. The main practical drawback is chattering from the switching action, mitigated by boundary-layer smoothing or higher-order sliding-mode schemes such as super-twisting.


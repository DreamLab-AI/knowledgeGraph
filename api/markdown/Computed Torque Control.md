
Computed torque control is a model-based robot control method that uses the inverse dynamics of the manipulator to cancel nonlinear coupling and gravity terms, linearising the closed-loop behaviour. The controller computes the joint torques required to achieve a desired acceleration, then adds a linear feedback term to correct tracking error. It enables high-accuracy trajectory following at the cost of requiring an accurate dynamic model.

- ### Content
  - The method splits the control law into a model-based feedforward term that cancels Coriolis, centrifugal, and gravity effects, and a feedback term (typically PD) acting on the linearised error dynamics. Tracking accuracy depends directly on the fidelity of the identified dynamic parameters.


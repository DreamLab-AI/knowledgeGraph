Feedforward control is a control strategy in which the controller acts on a reference command or a measured disturbance before it affects the output, rather than reacting to output error after the fact. Because it does not rely on output measurement, pure feedforward cannot correct for unmodelled effects and is therefore usually paired with feedback. It is widely used in motion and process control to improve command tracking and pre-empt known disturbances.

### Content

- A feedforward controller inverts a model of the plant to produce the command needed to follow a desired trajectory, contributing the bulk of the control effort while feedback trims residual error. Because it is open-loop with respect to the output, its accuracy depends entirely on model fidelity and disturbance measurability, so practical systems combine feedforward and feedback to gain both responsiveness and robustness.


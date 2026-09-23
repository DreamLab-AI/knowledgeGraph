
Feedforward compensation is a control technique that uses a model of the system or known disturbances to compute corrective control action in advance, rather than waiting for an error to appear at the output. By anticipating required effort, for example to overcome inertia, friction, or measurable load disturbances, it improves tracking and disturbance rejection beyond what feedback alone provides. It is typically combined with feedback control to handle modelling errors and unmeasured disturbances.

- ### Content
  - In motion control, feedforward terms inject anticipated torque or force based on commanded acceleration, velocity, and known load, so the feedback loop only corrects residual errors. This division reduces tracking lag and improves bandwidth, but its benefit is bounded by model accuracy: imperfect plant models leave residual error that feedback must still absorb.


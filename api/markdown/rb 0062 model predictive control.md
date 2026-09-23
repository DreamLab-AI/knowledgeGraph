
Model Predictive Control (MPC) is an advanced optimal control strategy that uses an explicit mathematical model of the plant to predict future system behaviour over a finite receding horizon, then solves an optimisation problem at each control step to determine the input sequence that minimises a cost function subject to state and input constraints. Only the first element of the computed sequence is applied before the optimisation is repeated. In robotics, MPC enables constraint-aware trajectory tracking, force regulation, and whole-body motion planning that classical PID controllers cannot achieve.

In collaborative robotics, MPC is used to enforce safety constraints directly within the control loop — for example, limiting end-effector speed near humans — and to optimally transition between tasks. Computationally expensive convex and nonlinear MPC variants have become practical with modern embedded processors, enabling real-time 1 kHz control on manipulators with many degrees of freedom.

- ### Semantic Classification

- ### Content

- ### Provenance


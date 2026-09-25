A motor controller is an electronic device that regulates the speed, torque, direction, and position of an electric motor by modulating the power delivered to it, typically via pulse-width modulation and closed-loop feedback. In robotics it interprets high-level velocity or position commands and drives motors accordingly, often integrating current sensing and encoder feedback. It is a core actuation component bridging control software and mechanical motion.

### Content

- Controllers commonly drive brushless DC or stepper motors using PWM and field-oriented control, closing loops on encoder and current feedback for precise motion. They expose interfaces such as CAN, EtherCAT, or PWM to the robot's control stack and enforce limits to protect the motor and mechanism.


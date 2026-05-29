- ### Definition
  A VTOL aerial robot with four fixed-pitch rotors arranged symmetrically around a central frame, controlling attitude and thrust by differentially varying rotor speeds. Mechanically simple, highly manoeuvrable, and statically stable in hover — the dominant platform for consumer UAVs, autonomous aerial research, and inspection.

- ### Relationships
  A quadcopter **has part** a PID Controller (for attitude stabilisation), an IMU and Inertial Measurement Unit (for attitude sensing). It **uses** Sensor Fusion to combine IMU, barometer, and GPS/visual odometry data and Embedded Systems as its flight computer substrate. It **enables** Autonomous Navigation (including GPS-denied flight) and Swarm Robotics coordination. It is **related to** Computer Vision (for obstacle avoidance and landing), SLAM (for mapping without GPS), Aerial Robot (its parent category), and Lidar (for 3D mapping payloads).

- ### Content

  The quadcopter's mechanical elegance lies in its simplicity: four brushless motors each drive a fixed-pitch propeller. Roll and pitch are achieved by increasing thrust on one side and decreasing it on the opposite side; yaw is controlled by exploiting the reaction torque difference between clockwise and counter-clockwise rotating propellers (typically arranged alternately). This eliminates the mechanical complexity of variable-pitch rotors, reducing cost and maintenance burden.

  The flight controller — typically running firmware such as ArduPilot, PX4, or Betaflight — executes PID control loops at hundreds of hertz, maintaining attitude stability using IMU feedback. The inner loop stabilises angular velocity (gyroscope); the outer loop controls attitude angle (accelerometer/gyroscope fusion). Position hold integrates GPS, barometer, and optical flow.

  Autonomous quadcopter operation requires sensor fusion pipelines that merge heterogeneous sensor streams into a consistent state estimate. SLAM algorithms enable operation in GPS-denied environments by simultaneously building maps and localising within them using lidar or visual sensors. Computer vision enables obstacle detection, target following, and precision landing.

  Research applications include swarm robotics (coordinated multi-vehicle flight), search and rescue payload delivery, infrastructure inspection (bridges, wind turbines), and agricultural monitoring. Commercial applications span photography, survey mapping, and last-mile delivery. Regulatory frameworks (notably FAA Part 107 in the US and CAA rules in the UK) govern operational altitude, BVLOS restrictions, and remote ID requirements.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
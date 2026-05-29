- ### Definition
  - Sensor Technology encompasses the diverse hardware devices and fusion algorithms that capture physical-world data for use in robotics, spatial computing, and XR systems. This includes inertial measurement units, LiDAR scanners, depth cameras, eye-tracking, haptic sensors, and biometric devices, combined with fusion techniques such as visual-inertial odometry and Kalman filtering to produce accurate, robust state estimates for autonomous systems and immersive experiences.

- ### Semantic Classification
  - owl-class:: robotics:SensorTechnology
  - owl-role:: Concept

- ### Relationships
  - **hasPart**: IMU, LiDAR, Camera, Eye Tracking, Haptic Feedback — these are the principal sensor modalities comprising Sensor Technology.
  - **enables**: SLAM — sensor data is the raw input SLAM algorithms require; Sensor Fusion — multiple sensor streams are fused into coherent estimates; Perception System — sensors are the transducer layer feeding perception.
  - **uses**: Depth Sensing — structured light and time-of-flight depth sensing is a core modality within the sensor technology stack.

- ### Content
  # SensorTechnology
  SensorTechnology encompasses the diverse hardware devices capturing physical data for translation into virtual interactions, including Inertial Measurement Units (IMUs) combining accelerometers, gyroscopes, and magnetometers for orientation tracking at 1000Hz update rates, depth sensors using structured light (Kinect), time-of-flight (HoloLens), or stereo cameras for 3D environment reconstruction, eye tracking cameras with infrared illumination measuring gaze direction, pupil dilation, and blink patterns enabling foveated rendering and interaction paradigms, haptic sensors providing tactile feedback through vibration motors, force sensors, or ultrasonic arrays creating mid-air haptic sensations, and biometric sensors monitoring heart rate, galvanic skin response, and muscle activity for adaptive experiences. Advanced sensor fusion algorithms combine multiple sensor modalities improving accuracy and robustness: visual-inertial odometry merges camera and IMU data for tracking, Sensor Fusion Kalman filters optimally combine noisy measurements, and simultaneous localization and mapping (SLAM) builds environmental maps while tracking within them. Emerging technologies include EMG (electromyography) reading muscle electrical activity for subtle gesture control, EEG (electroencephalography) measuring brain activity for brain-computer interfaces, and environmental sensors detecting temperature, humidity, and air quality for blended physical-virtual experiences.
  - https://www.bosch-sensortec.com/ - Bosch Sensortec IMU and sensor solutions
  - https://www.ultraleap.com/ - Ultraleap hand tracking and haptics
  - https://www.tobii.com/ - Tobii eye tracking technology
  - https://www.intel.com/content/www/us/en/products/details/processors/movidius-myriad.html - Intel Movidius vision processing

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
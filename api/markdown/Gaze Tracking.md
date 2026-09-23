
Gaze tracking is the measurement of where a person is looking by estimating the direction and point of regard of the eyes, typically using cameras and infrared illumination to locate pupil and corneal reflections. In spatial computing it provides a hands-free input modality and a signal for attention, enabling interfaces that respond to where the user looks. Gaze tracking is foundational to foveated rendering, intent inference, and accessible interaction in head-mounted displays and immersive systems.

- ### Overview
  - By locating the pupil centre and corneal reflections under controlled illumination, gaze trackers compute the line of sight and intersect it with the display or scene to yield a gaze point. This turns the eyes into a fast, low-effort pointing device.
  - Beyond pointing, gaze is a rich attention signal. Systems can infer interest, intent, and cognitive state, enabling interfaces that pre-load content the user is about to engage and accessibility modes for users who cannot use their hands.
- ### Mechanisms
  - Infrared illumination produces stable corneal glints for robust eye localisation.
  - Pupil-corneal reflection geometry maps eye images to gaze direction.
  - Per-user calibration corrects for individual eye anatomy and headset fit.
  - Machine-learning estimators improve accuracy and tolerance to slippage and lighting.
- ### Applications
  - [[Foveated Rendering]] concentrating GPU effort where the user is looking.
  - Gaze-and-dwell or gaze-and-pinch selection in [[Immersive Interface]] designs.
  - [[Accessibility]] input for users with limited mobility.
  - Attention analytics and intent prediction in [[Virtual Reality]] experiences.
- ### Provenance



Analogue-to-digital conversion is the process of transforming a continuous physical signal, such as voltage from a sensor, into a discrete sequence of numerical values that a digital system can store and process. It proceeds by sampling the signal at regular intervals and quantising each sample to a finite set of levels, with the sampling rate and bit depth determining how faithfully the original is represented. In robotics and embedded systems it is the essential bridge between the analogue physical world and digital control and perception pipelines.

- ### Overview
  - Conversion turns continuous physical quantities into machine-readable numbers.
  - Sampling captures signal values at fixed time intervals.
  - Quantisation maps each sample onto a finite scale of levels.
  - Together with conditioning it forms the front end of a data-acquisition chain.
- ### Key aspects
  - Sampling rate must satisfy the Nyquist criterion to avoid aliasing.
  - Bit depth determines resolution and quantisation noise.
  - Anti-alias filtering precedes sampling in conditioning.
  - Converter architectures trade speed against accuracy.
  - Reference voltages set the measurable input range.
- ### Applications
  - Reading sensor voltages in robotic control loops.
  - Digitising audio and vibration for monitoring.
  - Acquiring physiological signals in instrumentation.
  - Interfacing analogue transducers with embedded processors.
- ### Provenance


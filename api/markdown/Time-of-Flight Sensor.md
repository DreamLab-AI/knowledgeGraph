
A time-of-flight (ToF) sensor measures distance by emitting a light signal, typically infrared, and timing how long it takes to reflect back from a surface, yielding a per-pixel depth map. Because it directly measures travel time, it produces depth in real time without the baseline geometry needed by stereo cameras. ToF sensors are widely used for hand and gesture tracking, scene reconstruction, and mixed-reality depth sensing.

- ### Content
  - ToF sensors emit modulated or pulsed infrared light and compute distance from the measured round-trip delay or phase shift across an array of pixels, giving a dense depth image at video rates. Compared with structured-light and stereo approaches, they are compact, work in low light, and require less compute, though they trade off resolution and can struggle with reflective or absorptive surfaces. They are common in mobile depth cameras, headset sensing for hand and environment tracking, and short-range robotic perception.


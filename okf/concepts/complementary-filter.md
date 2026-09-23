---
okf_version: "0.2"
type: Class
title: Complementary Filter
resource: urn:ngm:class:complementary-filter
domain: robotics
description: A complementary filter is a lightweight sensor fusion technique that combines two signals with complementary error characteristics, typically a low-noise but slow-drifting measurement such as an accelerometer and a fast but drift-prone measurement such as a gyroscope, into a single accurate estimate. It applies a low-pass filter to one signal and a high-pass filter to the other before summing them
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sensor-fusion
---

# Complementary Filter

A complementary filter is a lightweight sensor fusion technique that combines two signals with complementary error characteristics, typically a low-noise but slow-drifting measurement such as an accelerometer and a fast but drift-prone measurement such as a gyroscope, into a single accurate estimate. It applies a low-pass filter to one signal and a high-pass filter to the other before summing them, avoiding the computational cost of a full Kalman filter. Complementary filters are widely used in inertial measurement units for real-time orientation estimation in robotics and spatial-computing applications.

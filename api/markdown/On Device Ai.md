
On-device AI is the execution of machine-learning inference, and increasingly some training, directly on an end-user device such as a phone, wearable or embedded sensor, rather than sending data to remote servers. Keeping computation local reduces latency, removes network dependence and improves privacy because raw data need not leave the device. It relies on model compression, quantisation and hardware acceleration to fit capable models within tight power, memory and compute budgets, and it is a cornerstone of edge AI and privacy-preserving machine learning.

- On-device AI runs machine-learning [[Inference]] locally on phones, wearables and sensors instead of in the cloud. As a form of [[Edge AI]] within [[Edge Computing]], it trades remote scale for low [[Latency]], offline operation and stronger [[Data Privacy]].
- ### Overview
- Moving computation to the device removes the round trip to a server, so results arrive immediately and work even without connectivity. Because raw inputs such as images, audio and location stay on the device, on-device AI is a natural substrate for [[Privacy-Preserving Machine Learning]].
- The challenge is fitting capable models into constrained power and memory budgets, which is solved with [[Model Compression]], quantisation, [[Model Optimization]] and dedicated [[Hardware Acceleration]]. It pairs naturally with [[Federated Learning]], where many devices train collaboratively without centralising data.
- ### Key aspects
- Local inference with minimal or no dependence on the network.
- Model shrinking through compression, pruning and quantisation.
- Exploitation of on-device accelerators and [[Embedded Systems]].
- Privacy by design: sensitive data never leaves the device.
- Energy and thermal budgeting for sustained operation.
- ### Applications
- Voice assistants and keyboard prediction on [[Mobile Computing]] devices.
- Real-time vision on cameras, wearables and AR headsets.
- [[TinyML]] workloads on microcontrollers and sensors.
- On-device personalisation feeding [[Federated Learning]].
- ### Provenance


Real-time inference is the execution of a trained machine-learning model to produce predictions within strict, low-latency time bounds suitable for interactive or streaming applications. It demands optimised serving infrastructure, efficient model formats, and often hardware acceleration to meet sub-second or millisecond response targets. Real-time inference enables responsive AI features such as recommendations, fraud scoring, and perception in autonomous systems.

- Real-time inference runs a trained model to produce predictions within strict [[Low Latency]] bounds, often using [[GPU Acceleration]] and an optimised [[Inference Engine]].
- It is a latency-constrained mode of [[Model Serving]] that depends on prior [[Model Deployment]] and powers responsive AI features.

### Overview

- Where batch inference tolerates minutes or hours, real-time inference must return results inside an interactive budget — typically milliseconds to a second.
- Meeting that budget requires careful engineering: compact model formats such as [[ONNX]], aggressive [[Model Optimization]], and frequently hardware acceleration.
- Serving systems keep models warm in memory, batch requests opportunistically, and route to accelerators to sustain throughput at low latency.
- The same techniques extend to the edge, where [[On-Device Inference]] and [[Edge AI]] bring predictions close to the data source.

### Key aspects

- Latency budget: predictable, bounded response times defined by [[Low Latency]] requirements.
- Optimised models: quantised and compiled artefacts produced through [[Model Optimization]].
- Acceleration: leveraging [[GPU Acceleration]] and specialised hardware via an [[Inference Engine]].
- Serving infrastructure: warm models and request routing within [[Model Serving]].

### Mechanisms

- Models are exported to portable formats like [[ONNX]] for efficient runtime execution.
- An [[Inference Engine]] compiles and schedules the model graph onto available hardware.
- Streaming pipelines feed events for scoring, enabling [[Stream Processing]] and [[Real-Time Analytics]].
- Edge deployment pushes inference onto devices for [[On-Device Inference]] and [[Edge AI]].

### Applications

- Recommendation, search ranking and personalisation under interactive latency.
- Fraud and risk scoring within transaction flows via [[Stream Processing]].
- Perception and control loops in robotics and autonomous systems.
- Live analytics dashboards driven by [[Real-Time Analytics]].

### Provenance



A Feature Pyramid Network (FPN) is a convolutional neural-network architecture that builds a multi-scale feature hierarchy with strong semantics at all levels by combining a bottom-up pathway with a top-down pathway and lateral connections. This design lets detectors and segmenters recognise objects across a wide range of sizes using features that are simultaneously high-resolution and semantically rich. FPN is a standard backbone component in modern object-detection and instance-segmentation pipelines.

- ### Content
  - FPN augments a standard CNN backbone with a top-down pathway that upsamples deep semantic features and merges them through lateral connections with shallower, spatially precise features, producing a pyramid of prediction-ready maps. This markedly improves small-object detection and segmentation while adding modest computational cost, which is why FPN underpins detectors such as RetinaNet and Mask R-CNN.



Anchor-based detection is an object detection approach that predicts bounding boxes and class scores relative to a fixed set of predefined reference boxes, called anchors, tiled densely across the image at multiple scales and aspect ratios. The network learns offsets that adjust each anchor to fit a nearby object rather than predicting box coordinates directly, which stabilises training and improves recall for objects of varying size. Faster R-CNN, SSD and the early YOLO versions are canonical anchor-based detectors, later contrasted with anchor-free alternatives.

- ### Provenance


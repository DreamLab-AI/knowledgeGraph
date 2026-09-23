
Heatmap regression is a computer-vision technique for keypoint localisation in which a network predicts a 2D probability map per landmark rather than directly regressing coordinates. The peak of each predicted heatmap indicates the most likely location, and Gaussian-blurred ground-truth targets make training spatially smooth and robust. It is the dominant approach for human pose estimation and facial landmark detection.

- ### Content
  - Encoding each landmark as a Gaussian peak preserves spatial structure and tolerates annotation noise better than direct coordinate regression. Decoding the sub-pixel argmax of each map yields the final keypoints, and the approach scales naturally to multiple landmarks and multi-person scenes via grouping post-processing.


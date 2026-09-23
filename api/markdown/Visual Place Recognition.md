
Visual place recognition (VPR) is the task of identifying whether a currently observed scene corresponds to a previously visited location by matching image content against a database of geotagged or topologically indexed images. It underpins loop closure in SLAM and global re-localisation for autonomous systems, relying on appearance- and condition-invariant descriptors. Robustness to viewpoint, illumination, and seasonal change is the central research challenge.

- ### Content
  - Modern VPR pipelines extract compact global descriptors (e.g. NetVLAD, learned aggregation of CNN features) and perform nearest-neighbour retrieval, optionally followed by geometric verification. Performance is measured by recall@N under appearance change, making invariance to lighting, weather, and viewpoint the key trade-off against retrieval speed and memory footprint.


RANSAC (Random Sample Consensus) is an iterative, robust estimation algorithm that fits a model to data containing a large fraction of outliers. It repeatedly draws a minimal random sample, fits a candidate model, and counts the inliers that agree within a tolerance, retaining the model with the largest consensus set. RANSAC is foundational in computer vision for estimating geometric relationships such as homographies, fundamental matrices, and camera poses from noisy feature correspondences.

### Overview

- Many vision problems involve correspondences that are noisy and contain many false matches.
- Least-squares fitting is corrupted by such outliers, so a robust scheme is required.
- RANSAC repeatedly hypothesises a model from a random minimal sample and verifies it against all data.
- The hypothesis with the most inliers is kept and optionally refined using only those inliers.

### Mechanisms

- Draw a minimal sample (for example four point pairs for a homography).
- Fit a candidate model to the sample.
- Score the model by counting inliers within a residual threshold.
- Iterate enough times, governed by [[Probability Theory]], to find a clean sample with high probability, then refit on inliers.

### Key aspects

- Robustness: tolerates outlier fractions well above fifty per cent.
- Threshold sensitivity: the inlier tolerance materially affects results.
- Iteration count: derived from the expected inlier ratio and desired confidence.
- Variants: MLESAC, PROSAC, LO-RANSAC, and USAC improve speed or accuracy.

### Applications

- Estimating homographies for image stitching and rectification.
- Fundamental and essential matrix estimation for [[Epipolar Geometry]].
- Camera [[Pose Estimation]] and [[Camera Calibration]].
- Robust front-ends for [[SLAM]], [[Visual Odometry]], and [[Structure from Motion]].

### Provenance


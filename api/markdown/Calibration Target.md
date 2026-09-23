
A physical or displayed reference pattern with precisely known geometric, photometric, or colorimetric properties used to determine camera intrinsic and extrinsic parameters, enabling accurate lens distortion correction, spatial measurement, and color reproduction in imaging systems.

- ### Semantic Classification

- ### Content

  - ## Technical Details
  - **Common Pattern Types**:
		- **Checkerboard (Chessboard)**: Most common; corners provide invariant reference points
		- **Circle Grid**: Robust against noise/blur; suitable for high-accuracy applications
		- **ChArUco Board**: Hybrid combining checkerboard with ArUco fiducial markers for error correction
		- **Asymmetric Patterns**: Enhanced pose estimation and orientation detection
  - **Material Requirements**:
		- Matte surface (avoid specular highlights)
		- Absolute flatness (no bending or folding)
		- Precision printing (laser preferred over inkjet)
		- Ceramic targets for ultimate accuracy (low thermal expansion)
  - **Best Practices**:
		- Diffuse lighting without shadows
		- Rigid mounting to flat surface
		- Multiple viewing angles during capture
		- Professional manufacturing for production use
  - ## Applications
  - OpenCV camera calibration
  - MATLAB Computer Vision Toolbox
  - Photogrammetry and 3D scanning
  - Augmented reality system setup
  - Machine vision quality inspection

- ### Current Landscape (2026)
  - The 2024-2026 research frontier has shifted decisively towards targetless (target-free) extrinsic calibration, in which learned correspondences replace physical boards: MDPCalib (2024) fuses visual/LiDAR odometry with deep point correspondences needing no initial guess, while MIAS-LCEC repurposes the MobileSAM vision model for cross-modal mask matching.
  - Rendering-based methods matured through 2025, with TLC-Calib (arXiv 2504.04597) using a differentiable 3D Gaussian Splatting scene representation and a photometric loss to jointly optimise sensor poses, and DF-Calib (arXiv 2504.01416) recasting LiDAR-camera calibration as an intra-modality depth-flow problem.
  - CalibRefine (2025) added Vision-Transformer cross-attention for online, iterative post-refinement, and at ICCV 2025 MamV2XCalib became the first V2X infrastructure-camera calibration method to use a Mamba state-space model, exploiting passing vehicle-side LiDAR with no dedicated reference object.
  - Commercially, Tangram Vision's MetriCal is the standout production toolchain: v15.0.0 (23 October 2025) added camera-free LiDAR-LiDAR calibration, following the July 2025 addition of Local Navigation System (odometry) alignment as a fourth modality alongside cameras, LiDAR and IMU.
  - MetriCal moved to self-serve credit-based licensing on 19 November 2025 (3 base credits per calibration, from $249 for 15 credits) and now sells physical AprilGrid, Markerboard and LiDAR circle targets directly through an online store.
  - Physical fiducial targets remain the metrological workhorse where absolute accuracy matters: AprilTag (notably the 36h11 family), Kalibr-style AprilGrids and ChArUco boards still anchor intrinsic and rig calibration, with 2025 target-based tools such as FAST-Calib (circular-hole ArUco) and Gentilini et al.'s multi-LiDAR ChArUco pipeline (July 2025).
  - Open challenges as of 2026 centre on the sparsity of LiDAR point clouds versus dense imagery, sensitivity to initialisation in optimisation-based targetless methods, and robust online recalibration under vibration and inter-sensor timing jitter without ground-truth matrices.

- ### References
  - 1. Tangram Vision (2025). MetriCal Releases + Changelogs (v15.0.0, 23 Oct 2025 — LiDAR-LiDAR calibration). https://docs.tangramvision.com/metrical/15.0/changelog/
  - 2. Minor, B. / Tangram Vision (2025). Pay for What You Calibrate: Credit-Based Licensing for MetriCal. https://www.tangramvision.com/blog/pay-for-what-you-calibrate-tangram-vision-introduces-credit-based-licensing
  - 3. Zhu, Y., Wang, Z. and Wang, Y. (2025). MamV2XCalib: V2X-based Target-less Infrastructure Camera Calibration with State Space Model. ICCV 2025. https://openaccess.thecvf.com/content/ICCV2025/html/Zhu_MamV2XCalib_V2X-based_Target-less_Infrastructure_Camera_Calibration_with_State_Space_Model_ICCV_2025_paper.html
  - 4. CalibRefine authors (2025). CalibRefine: Deep Learning-Based Online Automatic Targetless LiDAR-Camera Calibration with Iterative and Attention-Driven Post-Refinement. https://huggingface.co/papers/2502.17648
  - 5. TLC-Calib authors (2025). Targetless LiDAR-Camera Calibration with Anchored 3D Gaussians. arXiv:2504.04597. https://arxiv.org/html/2504.04597v1
  - 6. Han, S. et al. (2025). DF-Calib: Targetless LiDAR-Camera Calibration via Depth Flow. arXiv:2504.01416. https://ar5iv.labs.arxiv.org/html/2504.01416

- ### Provenance


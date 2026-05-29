public:: true

# OpenCV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-cv",
  "@type": "Page",
  "vc:slug": "open-cv",
  "title": "OpenCV",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-cv",
  "@type": "Class",
  "label": "OpenCV",
  "definition": "OpenCV (Open Source Computer Vision Library) is a BSD-licensed open-source library providing over 2,500 optimised algorithms for real-time computer vision, image processing, and machine learning, originally developed by Intel and now maintained by the OpenCV Foundation. It supports C++, Python, Java, and JavaScript bindings and runs on Linux, Windows, macOS, iOS, and Android. The library encompasses classical algorithms for feature detection, camera calibration, stereo vision, optical flow, and object tracking, as well as deep learning inference through the DNN module, which supports models from TensorFlow, PyTorch, and ONNX. OpenCV is the de facto standard toolkit for robotics perception pipelines, augmented reality applications, and embedded vision systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision-system", "label": "Computer Vision System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:image-processing-software", "label": "Image Processing Software"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:object-detection-and-tracking", "label": "Object Detection and Tracking"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:image-segmentation", "label": "Image Segmentation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[OpenCV]] is the industry-standard open-source [[Computer Vision]] library providing optimised algorithms for [[Image Processing Software]], [[Camera Calibration]], [[Feature Extraction]], and deep learning inference, forming the backbone of [[Perception System]] pipelines in robotics, [[Augmented Reality]], and embedded vision applications.
- ### Relationships
  - OpenCV is the primary implementation vehicle for [[Computer Vision]] algorithms in production systems and research prototypes alike. It supports [[Camera Calibration]] and stereo disparity computation that feed [[Depth Estimation]] pipelines, and provides the classical feature detectors (SIFT, ORB, AKAZE) used in [[Feature Extraction]] workflows. Its [[Object Detection and Tracking]] modules underpin robotics [[Perception System]] stacks. The DNN module enables inference of neural networks trained with deep learning frameworks, connecting OpenCV to modern [[Image Segmentation]] and [[Object Detection]] workflows. [[Augmented Reality]] SDKs commonly use OpenCV for marker detection and pose estimation, and lidar point cloud processing pipelines integrate OpenCV for 2D projection and image-based registration.
- ### Content
  - OpenCV was initiated by Gary Bradski at Intel Research in 1999, first released publicly in 2000, and transferred to the OpenCV Foundation in 2012. Its core is written in optimised C++ with intrinsic SIMD operations for x86 and ARM, enabling real-time performance on commodity hardware. The Python bindings (cv2) have made OpenCV the entry point for computer vision in the data science community, with NumPy array interoperability allowing seamless integration with scientific Python workflows.

  - The library is organised into functional modules: core (matrix operations and basic data structures), imgproc (filtering, morphology, geometric transforms), highgui (display and I/O), calib3d (camera calibration, stereo, 3D reconstruction), features2d (keypoint detectors and descriptors), objdetect (Haar cascades, HOG detectors), video (optical flow, background subtraction), and dnn (deep neural network inference). The modular design enables selective deployment on resource-constrained embedded platforms.

  - OpenCV's DNN module supports a growing range of model formats including ONNX, TensorFlow frozen graphs, Caffe models, and Darknet weights. It provides hardware-accelerated backends through OpenCL, CUDA (via the opencv_contrib CUDA modules), and Vulkan, enabling GPU-accelerated inference without requiring a full deep learning framework at runtime. This makes OpenCV the preferred deployment path for embedded [[Perception System]] applications where TensorRT or ONNX Runtime may be unavailable.

  - The opencv_contrib repository extends the core library with experimental and specialised modules including ArUco marker detection (critical for [[Augmented Reality]] calibration), SLAM utilities, structured light, and quality assessment metrics. The library's ecosystem includes OpenCV.js for browser-based vision, OpenCV for Android and iOS enabling mobile [[Augmented Reality]], and integration with ROS (Robot Operating System) through cv_bridge, making it indispensable in robotics research and industrial automation.

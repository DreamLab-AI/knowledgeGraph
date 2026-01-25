- ### OntologyBlock
  id:: object-detection-and-tracking-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0353
	- preferred-term:: Object Detection and Tracking
	- source-domain:: mv
	- status:: draft
- definition:: Object Detection and Tracking combines spatial object localisation with temporal tracking to identify, classify, and follow objects across video frames or sensor streams. This capability is essential for autonomous systems to understand dynamic environments, predict object motion, and make safe navigation decisions. Modern systems employ deep learning detectors (YOLO, Faster R-CNN) combined with tracking algorithms (Kalman filters, SORT, DeepSORT).


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :ObjectDetectionAndTracking))

;; Annotations
(AnnotationAssertion rdfs:label :ObjectDetectionAndTracking "Object Detection and Tracking"@en)
(AnnotationAssertion rdfs:comment :ObjectDetectionAndTracking "Object Detection and Tracking combines spatial object localisation with temporal tracking to identify, classify, and follow objects across video frames or sensor streams. This capability is essential for autonomous systems to understand dynamic environments, predict object motion, and make safe navigation decisions. Modern systems employ deep learning detectors (YOLO, Faster R-CNN) combined with tracking algorithms (Kalman filters, SORT, DeepSORT)."@en)

;; Semantic Relationships
(SubClassOf :ObjectDetectionAndTracking
  (ObjectSomeValuesFrom :relatedTo :ComputerVision))
(SubClassOf :ObjectDetectionAndTracking
  (ObjectSomeValuesFrom :relatedTo :PerceptionSystem))
(SubClassOf :ObjectDetectionAndTracking
  (ObjectSomeValuesFrom :relatedTo :ObjectDetection))

;; Data Properties
(AnnotationAssertion dcterms:identifier :ObjectDetectionAndTracking "AI-0353"^^xsd:string)
(DataPropertyAssertion :isAITechnology :ObjectDetectionAndTracking "true"^^xsd:boolean)
```

## Core Characteristics

- **Real-Time Detection**: Frame-rate object identification
- **Multi-Object Tracking**: Simultaneous tracking of multiple entities
- **Temporal Consistency**: Maintenance of object identities across frames
- **Occlusion Handling**: Tracking through partial or full occlusions
- **Motion Prediction**: Trajectory forecasting for collision avoidance

## Relationships

- **Component Of**: Perception System
- **Related**: Computer Vision, Deep Learning, Kalman Filtering
- **Algorithms**: YOLO, Faster R-CNN, SORT, DeepSORT, Kalman Filter

## Key Literature

1. Bewley, A., et al. (2016). "Simple online and realtime tracking." *ICIP*, 3464-3468.

2. Wojke, N., Bewley, A., & Paulus, D. (2017). "Simple online and realtime tracking with a deep association metric." *ICIP*, 3645-3649.

## See Also

- [[Object Detection]]
- [[Computer Vision]]
- [[Perception System]]

## Metadata

- **Domain**: Computer Vision, Autonomous Systems
- **Maturity**: Production deployment
	- maturity:: draft
	- owl:class:: mv:ObjectDetectionandTracking
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: object-detection-and-tracking-relationships
- ## About Object Detection and Tracking
	- Object Detection and Tracking combines spatial object localisation with temporal tracking to identify, classify, and follow objects across video frames or sensor streams. This capability is essential for autonomous systems to understand dynamic environments, predict object motion, and make safe navigation decisions. Modern systems employ deep learning detectors (YOLO, Faster R-CNN) combined with tracking algorithms (Kalman filters, SORT, DeepSORT).

public:: true

- #Public page automatically published
- [Products.Blog DeepDataSpace | The Go-To Choice for CV Data Visualization, Annotation, and Model Analysis](https://deepdataspace.com/blog/T-Rex)
- [Segment anything from Meta](https://segment-anything.com/)
	- [Automate Your Artistic Vision: Batch Inpainting Magic with DINO in Comfy! (youtube.com)](https://www.youtube.com/watch?v=TFfKE3Jyy-w)
- [facebookresearch/detectron2: Detectron2 is a platform for object detection, segmentation and other visual recognition tasks. (github.com)](https://github.com/facebookresearch/detectron2)
- [roboflow/supervision: We write your reusable computer vision tools. 💜 (github.com)](https://github.com/roboflow/supervision)
- [The paper introduces SAM-PT, an extension of the Segment Anything Model (SAM) that combines tracking and segmentation in dynamic videos. SAM-PT uses sparse point selection and propagation techniques to generate masks, achieving strong zero-shot performance on popular video object segmentation benchmarks. Unlike traditional object-centric mask propagation strategies, SAM-PT utilizes point propagation to capture local structure information that is independent of object semantics. The paper also demonstrates the effectiveness of point-based tracking through evaluation on the Unidentified Video Objects (UVO) benchmark. To improve tracking accuracy, SAM-PT employs K-Medoids clustering for point initialization and tracks both positive and negative points to distinguish the target object. Additionally, multiple mask decoding passes and a point re-initialization strategy are used for mask refinement. The paper includes interactive video segmentation demos and showcases the results of SAM-PT on the DAVIS 2017 dataset, highlighting successful cases as well as failure cases. The effectiveness of SAM-PT is further demonstrated on avatar segmentation. The code and models for SAM-PT are available on GitHub. The paper concludes with a citation for reference.](http://www.vis.xyz/pub/sam-pt)
- Segment and identify
- [CodingMantras/yolov8-streamlit-detection-tracking: YOLOv8 object detection algorithm and Streamlit framework for Real-Time Object Detection and tracking in video streams. (github.com)](https://github.com/CodingMantras/yolov8-streamlit-detection-tracking)
- [YOLO detect anything](https://deci.ai/blog/yolo-nas-foundation-model-object-detection/)
- [yolo segment medium post](https://medium.com/@kleve.2406/how-to-segment-with-yolov8-f33b1c63b6c6)
- [Trainable segment anything (useful for museum collections?)](https://huggingface.co/docs/transformers/main/model_doc/sam)
- [Segment Anything, which can "cut out" any object in any image or video with a single click. The model is designed and trained to be promptable, so it can transfer zero-shot to new image distributions and tasks.](https://www.linkedin.com/posts/eric-vyacheslav-156273169_big-news-meta-just-released-segment-anything-activity-7049409700370554880-tStk?utm_source=share&utm_medium=member_android)
- [This repository contains code for the Painter and SegGPT models from the BAAI Vision Foundation. These models are designed for in-context visual learning, and can be used to segment images and generate descriptions of them.](http://github.com/baaivision/Painter)
- [segmentation colours](https://docs.google.com/spreadsheets/d/1se8YEtb2detS7OuPE86fXGyD269pMycAWe2mtKUj2W8/edit#gid=0)
- [The text presents SegGPT, a generalist model for segmenting everything in context. The model is trained to unify various segmentation tasks into a generalist in-context learning framework, and is evaluated on a broad range of tasks, including few-shot semantic segmentation, video object segmentation, semantic segmentation, and panoptic segmentation. Results show strong capabilities in segmenting in-domain and out-of-domain targets, either qualitatively or quantitatively.](https://buff.ly/3KD0Zns)
- Video-LLaMA is a project aimed at enhancing large language models (LLMs) with audio and visual understanding capabilities. It is built on top of BLIP-2 and MiniGPT-4 and consists of two core components: Vision-Language (VL) Branch and Audio-Language (AL) Branch. The VL Branch uses a two-layer video Q-Former and a frame embedding layer to compute video representations and is trained on the Webvid-2M video caption dataset with a video-to-text generation task, in addition to image-text pairs from LLaVA. The AL Branch, on the other hand, uses a two-layer audio Q-Former and an audio segment embedding layer to compute audio representations and is trained on video/image instrucaption data to connect the output of ImageBind to language decoder. The project provides pre-trained and fine-tuned checkpoints and users need to obtain them before using the repository. The repository also includes an example output and instructions on how to run the demo locally and how to perform the training. The project has been released under the BSD-3-Clause license. https://github.com/DAMO-NLP-SG/Video-LLaMA
- https://sam2.metademolab.com/ [[Segmentation and Identification]]
	- https://go.fb.me/edcjv9
- [[Segmentation and Identification]] [[WebDev and Consumer Tooling]] [Segment Anything WebGPU - a Hugging Face Space by Xenova](https://huggingface.co/spaces/Xenova/segment-anything-webgpu)
- [ZhengPeng7/BiRefNet: [arXiv'24] Bilateral Reference for High-Resolution Dichotomous Image Segmentation (github.com)](https://github.com/ZhengPeng7/BiRefNet) [[Segmentation and Identification]]
- [[Product Design]] [[Segmentation and Identification]] [[Image Generation]]
- [Motion Inversion for Video Customization (wileewang.github.io)](https://wileewang.github.io/MotionInversion/) [[AI Video]] [[Segmentation and Identification]] [[Product Design]]
- [Amshaker/MAVOS: Efficient Video Object Segmentation via Modulated Cross-Attention Memory (github.com)](https://github.com/Amshaker/MAVOS) [[Segmentation and Identification]]
- [[Segmentation and Identification]] [SC VD 103 (youtube.com)](https://www.youtube.com/watch?v=js7AYKkZvFI) simple background removal
- Yolo guide [[Segmentation and Identification]] [[Human tracking and SLAM capture]] [Blog – YOLO Unraveled: A Clear Guide (opencv.ai)](https://www.opencv.ai/blog/yolo-unraveled-a-clear-guide?utm_source=reddit&utm_medium=article&utm_campaign=yolo)
- Efficient [[Segmentation and Identification]] for [[Hardware and Edge]] [Paper page - TinySAM: Pushing the Envelope for Efficient Segment Anything Model (huggingface.co)](https://huggingface.co/papers/2312.13789)
-
-
- [Incredibly stable depth estimation from adobe](https://github.com/RaymondWang987/NVDS)
- [Holistic segment unknowns](https://holisticseg.github.io/)
- [Beyond bounding boxes](https://faromero.substack.com/p/video-analysis-beyond-bounding-boxes)
- [Video to dataset (LAION)](https://laion.ai/blog/video2dataset/)

public:: true

- #Public page automatically published
- [Products.Blog DeepDataSpace | The Go-To Choice for CV Data Visualization, Annotation, and Model Analysis](https://deepdataspace.com/blog/T-Rex)
- [Segment anything from Meta](https://segment-anything.com/)
	- [Automate Your Artistic Vision: Batch Inpainting Magic with DINO in Comfy! (youtube.com)](https://www.youtube.com/watch?v=TFfKE3Jyy-w)
- [facebookresearch/detectron2: Detectron2 is a platform for object detection, segmentation and other visual recognition tasks. (github.com)](https://github.com/facebookresearch/detectron2)
- [roboflow/supervision: We write your reusable computer vision tools. 💜 (github.com)](https://github.com/roboflow/supervision)
- [The paper introduces SAM-PT, an extension of the Segment Anything Model (SAM) that combines tracking and segmentation in dynamic videos. SAM-PT uses sparse point selection and propagation techniques to generate masks, achieving strong zero-shot performance on popular video object segmentation benchmarks. Unlike traditional object-centric mask propagation strategies, SAM-PT utilizes point propagation to capture local structure information that is independent of object semantics. The paper also demonstrates the effectiveness of point-based tracking through evaluation on the Unidentified Video Objects (UVO) benchmark. To improve tracking accuracy, SAM-PT employs K-Medoids clustering for point initialization and tracks both positive and negative points to distinguish the target object. Additionally, multiple mask decoding passes and a point re-initialization strategy are used for mask refinement. The paper includes interactive video segmentation demos and showcases the results of SAM-PT on the DAVIS 2017 dataset, highlighting successful cases as well as failure cases. The effectiveness of SAM-PT is further demonstrated on avatar segmentation. The code and models for SAM-PT are available on GitHub. The paper concludes with a citation for reference.](http://www.vis.xyz/pub/sam-pt)
- Segment and identify
- [CodingMantras/yolov8-streamlit-detection-tracking: YOLOv8 object detection algorithm and Streamlit framework for Real-Time Object Detection and tracking in video streams. (github.com)](https://github.com/CodingMantras/yolov8-streamlit-detection-tracking)
- [YOLO detect anything](https://deci.ai/blog/yolo-nas-foundation-model-object-detection/)
- [yolo segment medium post](https://medium.com/@kleve.2406/how-to-segment-with-yolov8-f33b1c63b6c6)
- [Trainable segment anything (useful for museum collections?)](https://huggingface.co/docs/transformers/main/model_doc/sam)
- [Segment Anything, which can "cut out" any object in any image or video with a single click. The model is designed and trained to be promptable, so it can transfer zero-shot to new image distributions and tasks.](https://www.linkedin.com/posts/eric-vyacheslav-156273169_big-news-meta-just-released-segment-anything-activity-7049409700370554880-tStk?utm_source=share&utm_medium=member_android)
- [This repository contains code for the Painter and SegGPT models from the BAAI Vision Foundation. These models are designed for in-context visual learning, and can be used to segment images and generate descriptions of them.](http://github.com/baaivision/Painter)
- [segmentation colours](https://docs.google.com/spreadsheets/d/1se8YEtb2detS7OuPE86fXGyD269pMycAWe2mtKUj2W8/edit#gid=0)
- [The text presents SegGPT, a generalist model for segmenting everything in context. The model is trained to unify various segmentation tasks into a generalist in-context learning framework, and is evaluated on a broad range of tasks, including few-shot semantic segmentation, video object segmentation, semantic segmentation, and panoptic segmentation. Results show strong capabilities in segmenting in-domain and out-of-domain targets, either qualitatively or quantitatively.](https://buff.ly/3KD0Zns)
- Video-LLaMA is a project aimed at enhancing large language models (LLMs) with audio and visual understanding capabilities. It is built on top of BLIP-2 and MiniGPT-4 and consists of two core components: Vision-Language (VL) Branch and Audio-Language (AL) Branch. The VL Branch uses a two-layer video Q-Former and a frame embedding layer to compute video representations and is trained on the Webvid-2M video caption dataset with a video-to-text generation task, in addition to image-text pairs from LLaVA. The AL Branch, on the other hand, uses a two-layer audio Q-Former and an audio segment embedding layer to compute audio representations and is trained on video/image instrucaption data to connect the output of ImageBind to language decoder. The project provides pre-trained and fine-tuned checkpoints and users need to obtain them before using the repository. The repository also includes an example output and instructions on how to run the demo locally and how to perform the training. The project has been released under the BSD-3-Clause license. https://github.com/DAMO-NLP-SG/Video-LLaMA
- https://sam2.metademolab.com/ [[Segmentation and Identification]]
	- https://go.fb.me/edcjv9
- [[Segmentation and Identification]] [[WebDev and Consumer Tooling]] [Segment Anything WebGPU - a Hugging Face Space by Xenova](https://huggingface.co/spaces/Xenova/segment-anything-webgpu)
- [ZhengPeng7/BiRefNet: [arXiv'24] Bilateral Reference for High-Resolution Dichotomous Image Segmentation (github.com)](https://github.com/ZhengPeng7/BiRefNet) [[Segmentation and Identification]]
- [[Product Design]] [[Segmentation and Identification]] [[Image Generation]]
- [Motion Inversion for Video Customization (wileewang.github.io)](https://wileewang.github.io/MotionInversion/) [[AI Video]] [[Segmentation and Identification]] [[Product Design]]
- [Amshaker/MAVOS: Efficient Video Object Segmentation via Modulated Cross-Attention Memory (github.com)](https://github.com/Amshaker/MAVOS) [[Segmentation and Identification]]
- [[Segmentation and Identification]] [SC VD 103 (youtube.com)](https://www.youtube.com/watch?v=js7AYKkZvFI) simple background removal
- Yolo guide [[Segmentation and Identification]] [[Human tracking and SLAM capture]] [Blog – YOLO Unraveled: A Clear Guide (opencv.ai)](https://www.opencv.ai/blog/yolo-unraveled-a-clear-guide?utm_source=reddit&utm_medium=article&utm_campaign=yolo)
- Efficient [[Segmentation and Identification]] for [[Hardware and Edge]] [Paper page - TinySAM: Pushing the Envelope for Efficient Segment Anything Model (huggingface.co)](https://huggingface.co/papers/2312.13789)
-
-
- [Incredibly stable depth estimation from adobe](https://github.com/RaymondWang987/NVDS)
- [Holistic segment unknowns](https://holisticseg.github.io/)
- [Beyond bounding boxes](https://faromero.substack.com/p/video-analysis-beyond-bounding-boxes)
- [Video to dataset (LAION)](https://laion.ai/blog/video2dataset/)

## Core Characteristics

- **Real-Time Detection**: Frame-rate object identification
- **Multi-Object Tracking**: Simultaneous tracking of multiple entities
- **Temporal Consistency**: Maintenance of object identities across frames
- **Occlusion Handling**: Tracking through partial or full occlusions
- **Motion Prediction**: Trajectory forecasting for collision avoidance

## Relationships

- **Component Of**: Perception System
- **Related**: Computer Vision, Deep Learning, Kalman Filtering
- **Algorithms**: YOLO, Faster R-CNN, SORT, DeepSORT, Kalman Filter

## Key Literature

1. Bewley, A., et al. (2016). "Simple online and realtime tracking." *ICIP*, 3464-3468.

2. Wojke, N., Bewley, A., & Paulus, D. (2017). "Simple online and realtime tracking with a deep association metric." *ICIP*, 3645-3649.

## See Also

- [[Object Detection]]
- [[Computer Vision]]
- [[Perception System]]

## Metadata

- **Domain**: Computer Vision, Autonomous Systems
- **Maturity**: Production deployment
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Object Detection and Tracking
		  
		  **Term ID**: AI-0353
		  **Category**: Domain Applications → Autonomous Systems
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Object Detection and Tracking combines spatial object localisation with temporal tracking to identify, classify, and follow objects across video frames or sensor streams. This capability is essential for autonomous systems to understand dynamic environments, predict object motion, and make safe navigation decisions. Modern systems employ deep learning detectors (YOLO, Faster R-CNN) combined with tracking algorithms (Kalman filters, SORT, DeepSORT).
		  
		  ## Core Characteristics
		  
		  - **Real-Time Detection**: Frame-rate object identification
		  - **Multi-Object Tracking**: Simultaneous tracking of multiple entities
		  - **Temporal Consistency**: Maintenance of object identities across frames
		  - **Occlusion Handling**: Tracking through partial or full occlusions
		  - **Motion Prediction**: Trajectory forecasting for collision avoidance
		  
		  ## Relationships
		  
		  - **Component Of**: Perception System
		  - **Related**: Computer Vision, Deep Learning, Kalman Filtering
		  - **Algorithms**: YOLO, Faster R-CNN, SORT, DeepSORT, Kalman Filter
		  
		  ## Key Literature
		  
		  1. Bewley, A., et al. (2016). "Simple online and realtime tracking." *ICIP*, 3464-3468.
		  
		  2. Wojke, N., Bewley, A., & Paulus, D. (2017). "Simple online and realtime tracking with a deep association metric." *ICIP*, 3645-3649.
		  
		  ## See Also
		  
		  - [[Object Detection]]
		  - [[Computer Vision]]
		  - [[Perception System]]
		  
		  ## Metadata
		  
		  - **Domain**: Computer Vision, Autonomous Systems
		  - **Maturity**: Production deployment
		  
		  ```

- public-access:: true
	- definition:: Object Detection and Tracking combines spatial object localisation with temporal tracking to identify, classify, and follow objects across video frames or sensor streams. This capability is essential for autonomous systems to understand dynamic environments, predict object motion, and make safe navigation decisions. Modern systems employ deep learning detectors (YOLO, Faster R-CNN) combined with tracking algorithms (Kalman filters, SORT, DeepSORT).



## Academic Context

- Brief contextual overview
  - Object Detection and Tracking is a core computer vision task that integrates spatial localisation with temporal association to identify, classify, and follow objects across video sequences or sensor streams
  - The field has evolved from classical feature-based methods to deep learning-driven architectures, enabling robust performance in dynamic environments

- Key developments and current state
  - Modern approaches combine deep learning detectors (e.g., YOLO, Faster R-CNN, CenterNet) with advanced tracking algorithms (e.g., SORT, DeepSORT, FairMOT)
  - The emergence of end-to-end detection-by-tracking frameworks (e.g., MI-DETR, QueryMeldNet) has improved accuracy, especially for small and occluded objects
  - Transformer-based models and dynamic query mechanisms are now central to state-of-the-art performance

- Academic foundations
  - Theoretical underpinnings include probabilistic filtering (Kalman filters), data association (Hungarian algorithm), and deep feature learning
  - Research continues to address challenges in occlusion, scale variation, and real-time inference

## Current Landscape (2025)

- Industry adoption and implementations
  - Widely deployed in autonomous vehicles, surveillance, robotics, and industrial automation
  - Leading platforms include Datature, Encord, and Roboflow, supporting both open-source and proprietary tracking pipelines
  - UK organisations such as Oxbotica (Oxford), FiveAI (London), and Wayve (Cambridge) are integrating advanced detection and tracking for autonomous mobility

- Notable organisations and platforms
  - Roboflow: Open-source tracking tools and datasets
  - Encord: Annotation and tracking software for enterprise applications
  - Datature: End-to-end computer vision workflows

- UK and North England examples where relevant
  - Manchester’s AI City initiative leverages object detection for smart city surveillance and traffic management
  - Leeds-based companies are applying tracking in retail analytics and crowd monitoring
  - Newcastle and Sheffield universities collaborate with local industry on robotics and autonomous systems, using detection and tracking for navigation and safety

- Technical capabilities and limitations
  - State-of-the-art models achieve high accuracy and real-time performance, but challenges remain with occlusion, rapid motion, and scale variation
  - Modular architectures (tracking-by-detection) allow flexibility, while integrated approaches (detection-by-tracking) offer superior performance at the cost of complexity

- Standards and frameworks
  - Common benchmarks include MOTChallenge, BDD100K, and COCO
  - Open-source frameworks such as PyTorch, TensorFlow, and Detectron2 are widely used for research and deployment

## Research & Literature

- Key academic papers and sources
  - Carion, N., Massa, F., Synnaeve, G., Usunier, N., Kirillov, A., & Zagoruyko, S. (2020). End-to-End Object Detection with Transformers. *ECCV*. https://doi.org/10.1007/978-3-030-58452-8_13
  - Wang, Q., Zhang, L., Bertinetto, L., Hu, W., & Torr, P. H. S. (2019). Fast Online Object Tracking and Segmentation: A Unifying Approach. *CVPR*. https://doi.org/10.1109/CVPR.2019.00140
  - Zhang, Y., Sun, J., Liu, W., & Ye, Q. (2020). FairMOT: On the Fairness of Detection and Re-Identification in Multi-Object Tracking. *ECCV*. https://doi.org/10.1007/978-3-030-58545-7_12
  - Zhu, X., et al. (2025). MI-DETR: An Object Detection Model with Multi-time Inquiries Mechanism. *CVPR 2025*. https://openaccess.thecvf.com/content/CVPR2025/html/Zhu_MI-DETR_An_Object_Detection_Model_with_Multi-time_Inquiries_Mechanism_CVPR_2025_paper.html
  - Liu, Z., et al. (2025). QueryMeldNet: Scaling up Image Segmentation across Data and Tasks. *CVPR 2025*. https://openaccess.thecvf.com/content/CVPR2025/html/Liu_QueryMeldNet_Scaling_up_Image_Segmentation_across_Data_and_Tasks_CVPR_2025_paper.html

- Ongoing research directions
  - Improving robustness to occlusion and scale variation
  - Developing energy-efficient models for edge deployment
  - Exploring multimodal and 3D tracking for robotics and AR/VR

## UK Context

- British contributions and implementations
  - UK universities and research institutes are at the forefront of object detection and tracking, with strong ties to industry
  - The Alan Turing Institute supports collaborative research in computer vision and autonomous systems

- North England innovation hubs (if relevant)
  - Manchester’s AI City and Leeds Digital Hub foster innovation in smart city applications
  - Newcastle and Sheffield universities lead in robotics and autonomous systems, with regional partnerships in manufacturing and healthcare

- Regional case studies
  - Manchester’s smart traffic management system uses object detection to optimise flow and reduce congestion
  - Leeds’ retail analytics platforms employ tracking for customer behaviour analysis
  - Newcastle’s robotics labs develop tracking solutions for industrial automation and safety

## Future Directions

- Emerging trends and developments
  - Increased adoption of transformer-based and multimodal models
  - Growth in edge computing and real-time inference for mobile and embedded systems
  - Integration with AR/VR and robotics for immersive and autonomous applications

- Anticipated challenges
  - Ensuring robustness in diverse and dynamic environments
  - Addressing privacy and ethical concerns in surveillance applications
  - Balancing accuracy, speed, and energy efficiency

- Research priorities
  - Developing open-world and zero-shot detection and tracking models
  - Enhancing generalisation across domains and datasets
  - Exploring brain-inspired and neuromorphic architectures for efficiency

## References

1. Carion, N., Massa, F., Synnaeve, G., Usunier, N., Kirillov, A., & Zagoruyko, S. (2020). End-to-End Object Detection with Transformers. *ECCV*. https://doi.org/10.1007/978-3-030-58452-8_13
2. Wang, Q., Zhang, L., Bertinetto, L., Hu, W., & Torr, P. H. S. (2019). Fast Online Object Tracking and Segmentation: A Unifying Approach. *CVPR*. https://doi.org/10.1109/CVPR.2019.00140
3. Zhang, Y., Sun, J., Liu, W., & Ye, Q. (2020). FairMOT: On the Fairness of Detection and Re-Identification in Multi-Object Tracking. *ECCV*. https://doi.org/10.1007/978-3-030-58545-7_12
4. Zhu, X., et al. (2025). MI-DETR: An Object Detection Model with Multi-time Inquiries Mechanism. *CVPR 2025*. https://openaccess.thecvf.com/content/CVPR2025/html/Zhu_MI-DETR_An_Object_Detection_Model_with_Multi-time_Inquiries_Mechanism_CVPR_2025_paper.html
5. Liu, Z., et al. (2025). QueryMeldNet: Scaling up Image Segmentation across Data and Tasks. *CVPR 2025*. https://openaccess.thecvf.com/content/CVPR2025/html/Liu_QueryMeldNet_Scaling_up_Image_Segmentation_across_Data_and_Tasks_CVPR_2025_paper.html
6. Datature. (2025). A Comprehensive Guide to Object Tracking Algorithms in 2025. https://datature.com/blog/a-comprehensive-guide-to-object-tracking-algorithms-in-2025
7. Encord. (2025). Top 10 Video Object Tracking Algorithms in 2025. https://encord.com/blog/video-object-tracking-algorithms/
8. Roboflow. (2025). Top 7 Open Source Object Tracking Tools. https://blog.roboflow.com/top-object-tracking-software/
9. Hitech BPO. (2025). 9 Best Object Detection Models of 2025. https://www.hitechbpo.com/blog/top-object-detection-models.php
10. Labellerr. (2025). CVPR 2025: Breakthroughs in Object Detection & Segmentation. https://www.labellerr.com/blog/cvpr-2025-part-1/
11. Lumenalta. (2025). What is computer vision in 2025? https://lumenalta.com/insights/what-is-computer-vision-in-2025


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

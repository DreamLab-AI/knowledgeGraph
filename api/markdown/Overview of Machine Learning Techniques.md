- ### OntologyBlock
  id:: overview-of-machine-learning-techniques-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ai
	- term-id:: AI-8046
	- preferred-term:: Overview of Machine Learning Techniques
	- status:: active
	- public-access:: true
	- definition:: Machine learning (ML) is a subset of artificial intelligence that enables systems to learn from data, identify patterns, and make decisions with minimal human intervention. The three major categories are supervised learning (labeled data for classification/regression), unsupervised learning (pattern discovery in unlabeled data), and reinforcement learning (agent-environment interaction with reward-based learning).
	- maturity:: complete
	- owl:class:: ai:OverviewOfMachineLearningTechniques
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[Artificial Intelligence]]

## Core Learning Paradigms

### Supervised Learning
Learning with labeled data where each input has a corresponding output.
- **Classification**: Spam detection, image recognition, medical diagnosis
- **Regression**: Price prediction, demand forecasting, risk assessment
- **Algorithms**: Linear/Logistic Regression, SVM, Decision Trees, Random Forest, Neural Networks

### Unsupervised Learning
Pattern discovery in data without predefined labels.
- **Clustering**: Customer segmentation, anomaly detection, document grouping
- **Dimensionality Reduction**: PCA, t-SNE, autoencoders
- **Association**: Market basket analysis, recommendation patterns
- **Algorithms**: K-Means, Hierarchical Clustering, DBSCAN, Autoencoders

### Reinforcement Learning
Agent learns through interaction, receiving rewards/penalties.
- **Applications**: Game playing, robotics, autonomous systems, resource optimization
- **Algorithms**: Q-Learning, SARSA, Deep Q-Networks (DQN), Policy Gradient, Actor-Critic

### Additional Approaches
- **Semi-supervised Learning**: Combines labeled and unlabeled data
- **Self-supervised Learning**: Creates supervision from data structure (e.g., masked language modeling)
- **Transfer Learning**: Applies knowledge from one domain to another
- **Deep Learning**: Neural networks with multiple layers (used across all paradigms)

- ### Custom models
	- AI/ML is the high interest rate credit card of product development
	- The likely emerging trend for [[Large language models]] is small models optimised for your data, with API collaboration and support from a big foundational model.
	- Think [[Mistral]], replacing one of the experts with YOUR expert
	- This is kinda true for image and video too, in that you can blend workflows between powerful online systems and more nuanced personal models. (imagebashing).
	- ### How to train models?
		- Smaller data and workflows:
			- Do it yourself with suitable cloud hardware. This applies to all Gen AI.
			- [[LoRA DoRA etc]] are very accessible. Basically nudge the existing models for your requirements.
			- Low legal peril.
		- Medium scale problems:
			- Own the skills you need for your data / product problem.
			- There's a lot of guidance from the major players like Microsoft


### Relationships
- is-subclass-of:: [[Artificial Intelligence]]
- related-to:: [[Deep Learning]], [[NaturalLanguageProcessing]], [[Computer Vision]]
- enables:: [[Pattern Recognition]], [[Prediction]], [[Automation]], [[Decision Support]]
- uses:: [[Neural Networks]], [[Statistical Methods]], [[Optimization Algorithms]]

### Resources
[Develop Generative AI solutions with Azure OpenAI Service - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/paths/develop-ai-solutions-azure-openai/) - Get in a private consultant like me and onboard the skills for your product / data problem - This is the same model a the hub and spokes needed for larger models - Large / complex product and data challenges: - The industry is set up around the necessary datacentres. These are centres of excellence, commercial labs, Universities, etc. - Engage commercial data team who get you up to speed and train your model on their hardware. - Salford Uni will doubtless have a strategy with Azure. - [Deep Learning & Artificial Intelligence SCAN Business | SCAN UK](https://www.scan.co.uk/business/deep-learning) - [Europe’s largest private AI lab | Silo AI](https://www.silo.ai/) - [Advanced Solutions Lab Google Cloud](https://cloud.google.com/asl/) - Hartree? - ### Roll out in the cloud. - Play with [Runpod](https://www.runpod.io/). There's some great [YouTube tutorials](https://www.youtube.com/watch?v=WjiX3lCnwUI) - I use a [Lambda Labs H100](https://lambdalabs.com/). - Unless you really know what you're doing, or you have a LOT of data, I wouldn't buy GPUs and attempt the inferencing side yourself - ## In Politics. - [An AI Bot Is (Sort of) Running for Mayor in Wyoming | WIRED](https://www.wired.com/story/ai-bot-running-for-mayor-wyoming/) - [There’s an AI Candidate Running for Parliament in the UK | WIRED](https://www.wired.com/story/ai-candidate-running-for-parliament-uk/) - [[Politics, Law, Privacy]]

### Notes
*Instructional content moved from class definition*

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Segmentation and Identification

public:: true

- #Public page automatically published
- [Products.Blog DeepDataSpace | The Go-To Choice for CV Data Visualization, Annotation, and Model Analysis](https://deepdataspace.com/blog/T-Rex)
- [Segment anything from Meta](https://segment-anything.com/)
	- [Automate Your Artistic Vision: Batch Inpainting Magic with DINO in Comfy! (youtube.com)](https://www.youtube.com/watch?v=TFfKE3Jyy-w)
- [facebookresearch/detectron2: Detectron2 is a platform for object detection, segmentation and other visual recognition tasks. (github.com)](https://github.com/facebookresearch/detectron2)
- [roboflow/supervision: We write your reusable computer vision tools. 💜 (github.com)](https://github.com/roboflow/supervision)
- [The paper introduces SAM-PT, an extension of the Segment Anything Model (SAM) that combines tracking and segmentation in dynamic videos. SAM-PT uses sparse point selection and propagation techniques to generate masks, achieving strong zero-shot performance on popular video object segmentation benchmarks. Unlike traditional object-centric mask propagation strategies, SAM-PT utilises point propagation to capture local structure information that is independent of object semantics. The paper also demonstrates the effectiveness of point-based tracking through evaluation on the Unidentified Video Objects (UVO) benchmark. To improve tracking accuracy, SAM-PT employs K-Medoids clustering for point initialization and tracks both positive and negative points to distinguish the target object. Additionally, multiple mask decoding passes and a point re-initialization strategy are used for mask refinement. The paper includes interactive video segmentation demos and showcases the results of SAM-PT on the DAVIS 2017 dataset, highlighting successful cases as well as failure cases. The effectiveness of SAM-PT is further demonstrated on avatar segmentation. The code and models for SAM-PT are available on GitHub. The paper concludes with a citation for reference.](http://www.vis.xyz/pub/sam-pt)
- Segment and identify
- [CodingMantras/yolov8-streamlit-detection-tracking: YOLOv8 object detection algorithm and Streamlit framework for Real-Time Object Detection and tracking in video streams. (github.com)](https://github.com/CodingMantras/yolov8-streamlit-detection-tracking)
- [YOLO detect anything](https://deci.ai/blog/yolo-nas-foundation-model-object-detection/)
- [yolo segment medium post](https://medium.com/@kleve.2406/how-to-segment-with-yolov8-f33b1c63b6c6)
- [Trainable segment anything (useful for museum collections?)](https://huggingface.co/docs/transformers/main/model_doc/sam)
- [Segment Anything, which can "cut out" any object in any image or video with a single click. The model is designed and trained to be promptable, so it can transfer zero-shot to new image distributions and tasks.](https://www.linkedin.com/posts/eric-vyacheslav-156273169_big-news-meta-just-released-segment-anything-activity-7049409700370554880-tStk?utm_source=share&utm_medium=member_android)
- [This repository contains code for the Painter and SegGPT models from the BAAI Vision Foundation. These models are designed for in-context visual learning, and can be used to segment images and generate descriptions of them.](http://github.com/baaivision/Painter)
- [segmentation colours](https://docs.google.com/spreadsheets/d/1se8YEtb2detS7OuPE86fXGyD269pMycAWe2mtKUj2W8/edit#gid=0)
- [The text presents SegGPT, a generalist model for segmenting everything in context. The model is trained to unify various segmentation tasks into a generalist in-context learning framework, and is evaluated on a broad range of tasks, including few-shot semantic segmentation, video object segmentation, semantic segmentation, and panoptic segmentation. Results show strong capabilities in segmenting in-domain and out-of-domain targets, either qualitatively or quantitatively.](https://buff.ly/3KD0Zns)
- Video-LLaMA is a project aimed at enhancing large language models (LLMs) with audio and visual understanding capabilities. It is built on top of BLIP-2 and MiniGPT-4 and consists of two core components: Vision-Language (VL) Branch and Audio-Language (AL) Branch. The VL Branch uses a two-layer video Q-Former and a frame embedding layer to compute video representations and is trained on the Webvid-2M video caption dataset with a video-to-text generation task, in addition to image-text pairs from LLaVA. The AL Branch, on the other hand, uses a two-layer audio Q-Former and an audio segment embedding layer to compute audio representations and is trained on video/image instrucaption data to connect the output of ImageBind to language decoder. The project provides pre-trained and fine-tuned checkpoints and users need to obtain them before using the repository. The repository also includes an example output and instructions on how to run the demo locally and how to perform the training. The project has been released under the BSD-3-Clause licence. https://github.com/DAMO-NLP-SG/Video-LLaMA
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

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from research
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
- **Sources**: [GeeksforGeeks](https://www.geeksforgeeks.org/machine-learning/supervised-vs-reinforcement-vs-unsupervised/), [Pecan AI](https://www.pecan.ai/blog/3-types-of-machine-learning/), [DigitalOcean](https://www.digitalocean.com/resources/articles/types-of-machine-learning)
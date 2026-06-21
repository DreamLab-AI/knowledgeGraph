- ### Definition
  - The Facial Action Coding System (FACS) is the internationally recognised, anatomically grounded taxonomy for objectively describing, encoding, and measuring all visually distinguishable facial movements. Developed by Swedish anatomist Carl-Herman Hjortsjö in his 1969 work "Man's Face and Mimic Language" and subsequently systematised and published by psychologists Paul Ekman and Wallace V. Friesen at the University of California San Francisco in 1978, FACS decomposes facial expression into discrete atomic units called Action Units (AUs), each corresponding to the contraction or relaxation of one or more specific underlying facial muscles or muscle groups. A complete FACS annotation encodes not only which AUs are present but also their intensity on a six-point scale (A through F, or equivalently 1–5 with 0 for absence), and their temporal onset, apex, and offset within a sequence. Because FACS is anchored in musculature rather than in interpretive emotional labels, it achieves observer independence: two trained FACS coders examining the same face produce the same AU code regardless of cultural background or theoretical orientation, making it the gold-standard measurement framework for cross-cultural, cross-discipline research at the intersection of [[Affective Computing]], [[Emotion Recognition]], [[Computer Vision]], [[Face Recognition]], [[Human-Computer Interaction]], clinical pain assessment, and character animation. Automated FACS coding — replacing slow, expensive human expert coders (who require several months of training and work at approximately real-time speed) with [[Deep Learning]] systems capable of processing thousands of frames per second — has been one of the central research challenges of affective computing since the early 2000s and remains an active frontier as of 2026, with open benchmarks such as DISFA, BP4D, and AFF-Wild2 driving progress and tools like OpenFace 3.0 providing open-source baselines achieving F1 ≈ 0.60–0.62 on standard benchmarks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FacialActionCodingSystem
  - owl-role:: Concept
  - owl-inferred:: artificial-intelligence:FacialBehaviourFramework, artificial-intelligence:EmotionMeasurementScheme
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Affective Computing]], [[Computer Vision]]
  - has-part:: [[Action Unit]], [[AU Intensity Coding]], [[AU Occurrence Detection]], [[Facial Landmark Detection]], [[FACS Annotated Dataset]]
  - requires:: [[Face Recognition]], [[Facial Landmark Detection]], [[Feature Extraction]], [[Annotated Dataset]]
  - enables:: [[Emotion Recognition]], [[Empathetic AI]], [[Pain Assessment]], [[Avatar Animation]], [[Mental Health Monitoring]], [[Affective Computing]]
  - supports:: [[Human-Computer Interaction]], [[Social Robotics]], [[Driver Monitoring System]], [[Intelligent Tutoring System]]
  - implements:: [[Convolutional Neural Network]], [[Deep Learning]], [[Action Recognition]]
  - depends-on:: [[Face Recognition]], [[Annotated Dataset]]
  - contrasts-with:: [[Categorical Emotion Model]], [[Dimensional Emotion Model]]
  - related-to:: [[Emotion Recognition]], [[Empathetic AI]], [[Computer Vision]], [[Multimodal AI]], [[Transfer Learning]], [[Cognitive Science]], [[Facial Action Coding System]], [[Deepfake Detection]], [[Motion Tracking]]
  - standardized-by:: [[Ekman Friesen 1978 FACS Manual]], [[EMFACS]], [[FACS Plus]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:ActionUnit))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:AuIntensityCoding))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:AuOccurrenceDetection))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:FacialLandmarkDetection))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:FACSAnnotatedDataset))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:TemporalSequenceModel))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:hasPart ai:AuCombinationRules))

  ## Dependency Relationships
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:FaceRecognition))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:FacialLandmarkDetection))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:FeatureExtraction))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:AnnotatedDataset))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:DeepLearning))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:requires ai:ImageProcessing))

  ## Capability Relationships
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:EmotionRecognition))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:EmpatheticAI))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:PainAssessment))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:AvatarAnimation))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:MentalHealthMonitoring))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:AffectiveComputing))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:enables ai:DriverMonitoringSystem))

  ## Implementation Relationships
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:implements ai:ConvolutionalNeuralNetwork))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:implements ai:DeepLearning))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:implements ai:ActionRecognition))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:implements ai:MultiLabelClassification))

  ## Reduction Relationships
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:reducesTo ai:FacialLandmarkDetection))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:reducesTo ai:PatternRecognition))
      SubClassOf(ai:FacialActionCodingSystem
        ObjectSomeValuesFrom(ai:reducesTo ai:MultiLabelClassification))

  ## About
    The Facial Action Coding System occupies a unique position at the intersection of empirical psychology and computational perception: it is simultaneously a scientific measurement instrument developed for behavioural research and the primary structured label scheme used to train and evaluate [[Deep Learning]]-based [[Emotion Recognition]] systems. Its anatomical grounding in specific muscles — the orbicularis oculi (AU6, cheek raiser; AU7, lid tightener; AU46, wink), the corrugator supercilii (AU4, brow lowerer), the frontalis pars medialis (AU1, inner brow raiser), the frontalis pars lateralis (AU2, outer brow raiser), the zygomaticus major (AU12, lip corner puller), the levator labii (AU10, upper lip raiser), the depressor anguli oris (AU15, lip corner depressor), the mentalis (AU17, chin raiser), and the orbicularis oris (AU20, lip stretcher; AU25/26, lips parted/jaw drop) — provides interpretability that black-box emotion classifiers lack.

    The original 1978 Ekman-Friesen manual defined approximately 46 Action Units plus additional Action Descriptors for head movements and eye movements (AUs 51–70 in some versions). Subsequent extensions include EMFACS (Emotionally relevant subset of ~17 AUs most associated with discrete emotion categories), MiniMACS, and FACS Plus for clinical pain coding. The PSPI (Prkachin and Solomon Pain Intensity) score, widely used in automated pain assessment, is computed directly from AU4 + max(AU6, AU7) + max(AU9, AU10) + AU43/45, illustrating how downstream clinical measures inherit FACS structure.

    The relationship of FACS to emotion theory is complex and contested. Ekman's Neuro-Cultural Model asserts that a small set of basic emotions — happiness, sadness, anger, fear, disgust, surprise, and contempt — have pan-cultural facial signatures expressible as stereotyped AU combinations (e.g., happiness: AU6+AU12; surprise: AU1+AU2+AU5+AU26; disgust: AU9+AU15+AU16). This claim of universal basic emotions drove much early affective computing research but has been substantially challenged by Lisa Feldman Barrett and colleagues, who argue that emotional expression is highly context-dependent and variable, making FACS-to-emotion mappings statistically unreliable in practice. This scientific dispute has direct implications for the deployment of automated FACS-based emotion inference systems in high-stakes contexts — hiring, mental health screening, criminal justice — where the ICO (UK), EU AI Act, and bodies such as the Algorithmic Justice League have raised strong objections.

    Automated FACS coding reformulates the problem as multi-label binary classification (AU occurrence: present/absent per frame) and regression (AU intensity: 0–5 per frame) over image or video sequences. This framing is more tractable than end-to-end emotion classification because AU labels are observable, musculature-grounded, and theoretically independent of cultural context, unlike emotion category labels which require inference. Training data is expensive because human FACS coders must be certified (the process takes several months), limiting publicly available annotated datasets to tens of thousands of subjects compared to the millions of images available for [[Face Recognition]].

  ## Components / Architecture
    The automated FACS coding pipeline consists of the following components:

    - **Face Detection and Alignment**: An anchor-free detector (RetinaFace, SCRFD) localises face crops; geometric normalisation aligns 68-point or 478-point landmark positions to a canonical template. High-quality alignment is critical because AU activations involve millimetre-scale displacements of specific facial regions.

    - **Facial Landmark Detection**: A dense set of 2D or 3D landmark positions (68-point DLIB model, MediaPipe 478-point model, 3D Morphable Model (3DMM) fitting) provides the spatial scaffolding on which muscle-region features are computed. 3DMM fitting additionally disentangles expression parameters from head pose, identity, and illumination — enabling AU synthesis and AU-conditioned face generation for data augmentation.

    - **Region-Based Feature Extraction**: Rather than global pooling over the whole face, FACS-specific architectures extract local appearance features from anatomically motivated sub-regions corresponding to each AU: the brow region (AUs 1, 2, 4), peri-orbital region (AUs 5, 6, 7, 46), nasal region (AUs 9, 10), mouth region (AUs 12, 15, 17, 20, 23, 24, 25, 26, 28), and jaw/chin. Attention mechanisms (spatial, channel) are commonly applied within each region to focus on relevant muscle activations. The [[Convolutional Neural Network]] backbone (ResNet, EfficientNet, ViT) processes each region or the full image.

    - **Multi-Label Classification / Regression Head**: A sigmoid output layer produces independent occurrence probabilities per AU for multi-label classification; a separate regression branch outputs per-AU intensity. Because AU co-occurrences are highly correlated (e.g., AU1 and AU2 frequently co-occur in surprise; AU6 and AU12 in genuine Duchenne smiles), graph neural network layers or conditional random field (CRF) decoders are used to capture inter-AU dependencies.

    - **Temporal Modelling**: Video-based FACS coding requires tracking AU dynamics over time. LSTM or Transformer temporal encoders process per-frame feature sequences; CRF decoders enforce temporal consistency across onset-apex-offset segments. The AUGlasses system (2024) extends FACS-based facial reconstruction to wearable IMU sensors embedded in smart glasses, enabling continuous covert AU monitoring.

    - **OpenFace 3.0**: The leading open-source automated FACS toolkit as of 2025, developed at Carnegie Mellon University. Implements facial landmark detection (CLNF/deep networks), head pose estimation, eye gaze estimation, and AU occurrence/intensity prediction. Achieves F1 ≈ 0.60 on DISFA (spontaneous, 27 AUs), F1 ≈ 0.62 on BP4D (posed expressions, 12 AUs). Deployed widely in research labs as a baseline and annotation acceleration tool.

    - **Py-Feat**: Python-based facial expression analysis toolbox providing access to multiple AU detectors (OpenFace, LibreFace, MTCNN-based), emotion classifiers, and AU visualisation, with scikit-learn–compatible API.

  ## Use Cases / Major Families
    **Clinical Assessment and Mental Health Monitoring**: FACS is used to derive objective behavioural biomarkers for depression (reduced AU12/AU6 frequency, reduced facial dynamism), anxiety, PTSD (hyperarousal via microexpression analysis — fleeting AU activations lasting 200ms to 500ms), autism spectrum disorder (atypical AU timing and co-occurrence patterns), and chronic pain (PSPI scoring from AU4+6+7+9+10+43/45). The Fourth International Workshop on Automated Assessment of Pain (AAP 2024), held in Glasgow, UK at the ACII 2024 conference, focused on FACS-based pain recognition from video in clinical settings. Around 40% of adults with chronic pain also experience depression and anxiety, and automated FACS tools offer scalable screening where therapist time is unavailable.

    **Affective Computing and Adaptive Interfaces**: [[Empathetic AI]] dialogue systems query FACS-based affect detectors to modulate response tone, pacing, and empathy cues. [[Intelligent Tutoring System]] platforms (e.g., Affective AutoTutor) detect student frustration (AU4+AU23) or boredom (reduced AU12, decreased gaze fixation) and adjust pedagogical strategy. [[Driver Monitoring System]] platforms detect drowsiness (slow AU45/blink rate, ptosis of AU43) and distraction.

    **Character Animation and Visual Effects**: Disney and Pixar employ FACS-inspired blendshape rigging, decomposing character facial rigs into AU-analogous controls. The film "Inside Out" used AU combinations to drive emotionally coherent character dynamics. Game engine facial rigging (Unreal Engine MetaHuman, Apple ARKit ARFaceAnchor blend shapes) map 52 blend shape weights that approximate FACS AUs, enabling real-time face-driven avatar control via iPhone TrueDepth camera. The ARKit blend shape set includes inner-brow raise, outer-brow raise, brow-lower-right/left, cheek-puff, eye-blink, jaw-open, and mouth-funnel — all direct mappings to canonical FACS AUs.

    **Behavioural Research and Psychology**: Human FACS coding remains the gold standard for behavioural coding of naturalistic social interaction in video studies. Research in deception detection, pain communication, intergroup dynamics, and infant development relies on FACS as the objective behavioural measure, with automated tools used to pre-screen frames and reduce the human expert coding burden.

    **Human-Robot Interaction and Social Robotics**: [[Social Robotics]] platforms (Pepper, NAO, Sophia) use FACS-based affect recognition to detect user emotional state and generate appropriate facial expressions on robot faces, using FACS AUs as the common representation bridging perception and expression generation.

  ## Academic Context
    FACS originated in cross-disciplinary collaboration between anatomy and psychology. Carl-Herman Hjortsjö's 1969 atlas of facial muscles and expressions provided the anatomical foundation; Ekman and Friesen's 1978 FACS manual operationalised it as a reliable coding system for behavioural science. Ekman's earlier cross-cultural universality studies (1969–1972), conducted in Papua New Guinea and the United States, provided the theoretical motivation: if facial expressions of basic emotions are universal, an objective coding system anchored in musculature should be culturally invariant.

    Key academic milestones in automated FACS coding include: Mase (1991) first attempted automated AU detection; Cohen et al. (2003) at CMU used HMMs for AU sequence modelling; Zhu et al. (2015) and Li et al. (2017) introduced deep CNN approaches; Shao et al. (2021) applied graph attention networks to capture AU-pair dependencies; Luo et al. (2022) and Nguyen et al. (2022) used transformer self-attention over spatial face regions; contrastive learning approaches appeared in 2024 (arXiv 2403.03400) addressing person-independent AU representation.

    Key benchmarks: **DISFA** (Denver Intensity of Spontaneous Facial Actions) — 27 action units, 12 subjects, spontaneous expressions; **BP4D** (BIWI 3D/4D Pain and Depression Database) — 41 subjects, 12 AUs, posed expressions; **AFF-Wild2** (Affective Behavior Analysis in-the-Wild 2) — 563 videos, 558,000+ frames, 8 AUs, in-the-wild; **FERA** (Facial Expression Recognition and Analysis challenge series, 2011–2017) under IEEE FG. **EMBC 2024** and **ACII 2024** (Glasgow) featured FACS-related workshops.

    Research centres with significant FACS/automated affect analysis output include: Carnegie Mellon University (CMU-CSSD, OpenFace development); INRIA Perception team (France); University of Oulu (Mäkinen group, spontaneous expression); University of Amsterdam; Imperial College London (Andrew Davison group on dense face tracking); Queen Mary University of London (Ioannis Patras group, AFF-Wild2 dataset); and the University of Edinburgh (Sethu Vijayakumar group on social robotics).

  ## Current Landscape (2026)
    By mid-2026, automated FACS analysis has reached sufficient maturity for research deployment but faces several barriers to clinical and commercial production use:

    1. **Performance plateau**: Open-source systems (OpenFace 3.0, Py-Feat) achieve F1 ≈ 0.60–0.65 on standard benchmarks, far below the reliability thresholds required for clinical diagnosis. The gap between lab-controlled performance and in-the-wild performance (partial occlusion, head pose, lighting variation, spontaneous vs. posed expressions) remains large. AFF-Wild2's in-the-wild challenge consistently demonstrates 5–10 percentage point degradation vs. controlled benchmarks.

    2. **Data scarcity**: FACS-annotated video datasets are orders of magnitude smaller than general image datasets (thousands of subjects vs. millions) due to the cost of expert coding. Synthetic data generation using diffusion models conditioned on 3DMM parameters is being actively explored to address this, with 2024–2025 papers showing promise in pre-training AU detectors on synthetic AU-labelled faces.

    3. **Validity and regulatory pressure**: Scientific debate about the validity of FACS-to-emotion inference (Barrett et al., 2019 "Emotional expressions reconsidered") has hardened regulatory attitudes. The EU AI Act classifies emotion recognition at workplace and educational institutions as high-risk AI requiring conformity assessment. The ICO published guidance in 2023 cautioning against automated affect inference in hiring contexts. The US FTC and EEOC have scrutinised AI-based affect assessment in hiring tools.

    4. **Wearable and multimodal extensions**: The 2024 AUGlasses paper (arXiv 2405.13289) demonstrated continuous AU estimation from low-power IMU sensors in smart glasses, achieving real-time estimation without a camera — a significant privacy and wearability advance for clinical monitoring of Parkinson's tremor, depression, and pain. This aligns with the broader movement toward unobtrusive, always-on affective sensing.

    5. **Foundation model integration**: Vision-Language Models (GPT-4V, Gemini Vision) have been shown to produce AU descriptions from facial images in zero-shot prompting, though at lower precision than specialised detectors; the 2025 "Foundation of Affective Computing and Interaction" survey (arXiv 2506.15497) reviews this landscape comprehensively.

  ## UK Context
    The UK has notable academic strength in automated facial behaviour analysis. **Queen Mary University of London** hosts Ioannis Patras's group, responsible for the AFF-Wild2 dataset and the Affective Behaviour Analysis In-the-Wild (ABAW) challenge series, which has run annually at CVPR and ECCV since 2020 and is the leading international benchmark competition for AU detection, expression recognition, and valence-arousal estimation from in-the-wild video. The 2024 ABAW6 challenge at CVPR 2024 drew submissions from over 60 institutions worldwide.

    **Imperial College London** contributes through Andrew Davison's Dyson Robotics Lab, which has developed dense 3D face tracking capabilities relevant to FACS landmark precision. **University of Edinburgh** contributes through the Centre for Speech Technology Research and the social robotics and human-robot interaction research clusters. **University of Cambridge** (Computer Laboratory, Machine Intelligence group) has published on multimodal affective computing and behavioural analysis from audio-visual data.

    **University of Manchester** has an active face perception and expression recognition research programme, historically strong on the biological and psychological theory of expression. The **ACII 2024** conference (Affective Computing and Intelligent Interaction) was held in **Glasgow**, making Scotland the host city for the premier affective computing conference that year, with the Workshop on Automated Assessment of Pain featuring directly FACS-grounded computational work.

    Northern England: **Sheffield Hallam University** and **Leeds Beckett University** have applied research in affective computing for health and wellbeing. **Newcastle University** (Digital Civics group) has explored automated affect sensing in public and assistive technology contexts. **York University** (Psychology department) has contributed to basic science of AU-to-emotion mappings.

    On the clinical and industry side, UK health technology companies including **Cogito** (US-originated but active in UK NHS partnership pilots), **Realeyes** (London-based attention and emotion analytics for advertising), and **Affectiva** (Imaad Akhundzada, Smart Eye acquisition) have deployed FACS-based emotion measurement in commercial contexts, though all face heightened ICO scrutiny under the UK GDPR special-category biometric data provisions.

  ## Future Directions (2026-2030)
    - **Biomechanically faithful 3D AU modelling**: Physics-informed 3D morphable models that simulate actual muscle contraction mechanics rather than linear blend shapes, enabling more accurate AU synthesis for training data and more interpretable decomposition of observed deformations into AU components.
    - **Cross-cultural and individual-specific AU calibration**: FACS assumes universality; next-generation systems will learn individual baselines and cultural variation in AU expression patterns, reducing systematic bias against non-Western, ageing, or atypically expressing populations.
    - **Multimodal AU fusion**: Combining visual AU detection with EMG signals, thermal infrared (which directly measures superficial muscle temperature changes), and acoustic prosody (vocal correlates of facial muscle tension) to achieve more robust affect sensing under occlusion or low-light conditions.
    - **Privacy-preserving FACS inference**: On-device processing of facial behaviour using neuromorphic or edge AI chips (Apple Neural Engine, Qualcomm NPU) so that raw facial video never leaves the device; only AU occurrence vectors or derived affect summaries are transmitted, addressing ICO special-category biometric data obligations.
    - **Clinical validation at scale**: Prospective clinical trials validating automated FACS pain (PSPI) and depression screening tools against gold-standard clinical assessments, a prerequisite for NHS or NICE approval of FACS-based diagnostic aids.
    - **FACS in spatial computing**: Integration of AU-based avatar animation with Apple Vision Pro persona system, Meta Codec Avatars, and Microsoft Mesh, using real-time FACS-like tracking to drive photorealistic avatar facial dynamics in XR telepresence.
    - **Regulatory standardisation**: Development of ISO or BSI standards for AU detection system accuracy, bias, and transparency reporting, analogous to NIST FRVT for face recognition, to provide a conformity-assessment pathway under the EU AI Act for high-risk emotion AI applications.

  ## Research & Literature
    1. Ekman, P., & Friesen, W.V. (1978). *Facial Action Coding System: A Technique for the Measurement of Facial Movement*. Consulting Psychologists Press, Palo Alto.
    2. Hjortsjö, C.H. (1969). *Man's Face and Mimic Language*. Studentlitteratur, Lund.
    3. Ekman, P. (1972). Universal and Cultural Differences in Facial Expressions of Emotions. In J.K. Cole (Ed.), *Nebraska Symposium on Motivation*, Vol. 19.
    4. Ekman, P., Friesen, W.V., & Hager, J.C. (2002). *Facial Action Coding System: The Manual*. A Human Face.
    5. Prkachin, K.M., & Solomon, P.E. (2008). The Structure, Reliability and Validity of Pain Expression in Chronic Low Back Pain Patients. *Pain*, 138(2), 317–324. [PSPI score]
    6. Lucey, P., Cohn, J.F., Kanade, T., Saragih, J., Ambadar, Z., & Matthews, I. (2010). The Extended Cohn-Kanade Dataset (CK+): A Complete Dataset for Action Unit and Emotion-Specified Expression. *CVPRW 2010*.
    7. Mavadati, S.M., Mahoor, M.H., Bartlett, K., Trinh, P., & Cohn, J.F. (2013). DISFA: A Spontaneous Facial Action Intensity Database. *IEEE Trans. Affective Computing*, 4(2), 151–160.
    8. Zhang, X., Yin, L., Cohn, J.F., Canavan, S., Reale, M., Horowitz, A., ... & Girard, J. (2014). BP4D-Spontaneous: A High-Resolution Spontaneous 3D Dynamic Facial Expression Database. *Image and Vision Computing*, 32(10), 692–706.
    9. Kollias, D., & Zafeiriou, S. (2019). Expression, Affect, Action Unit Recognition: Aff-Wild2, Multi-Task Learning and ArcFace. *arXiv:1910.04855*. [AFF-Wild2 dataset]
    10. Baltrusaitis, T., Zadeh, A., Lim, Y.C., & Morency, L.P. (2018). OpenFace 2.0: Facial Behavior Analysis Toolkit. *IEEE FG 2018*.
    11. Corneanu, C.A., Simón, M.O., Cohn, J.F., & Guerrero, S.E. (2016). Survey on RGB, 3D, Thermal, and Multimodal Approaches for Facial Expression Recognition. *IEEE Trans. PAMI*, 38(8), 1548–1568.
    12. Li, Y., Zeng, J., Shan, S., & Chen, X. (2019). Semantic Relationship Guided Representation Learning for Facial Action Unit Recognition. *CVPR 2019*.
    13. Shao, Z., Liu, Z., Cai, J., Wu, Y., & Ma, L. (2021). Jaa-Net: Joint Facial Action Unit Detection and Face Alignment via Adaptive Attention. *International Journal of Computer Vision*, 129(2), 321–340.
    14. Nguyen, D., Huynh, X.P., Kim, J.I., & Oh, T.H. (2022). Rethinking the Learning Paradigm for Facial Action Unit Recognition. *CVPR 2022*.
    15. Wang, Z., Ji, S., Wang, M., Zhou, S., Yin, B., & Li, G. (2024). Contrastive Learning of Person-independent Representations for Facial Action Unit Detection. *arXiv:2403.03400*.
    16. Zhao, K., & Lüttin, U. (2024). AUGlasses: Continuous Action Unit-based Facial Reconstruction with Low-power IMUs on Smart Glasses. *arXiv:2405.13289*.
    17. Barrett, L.F., Adolphs, R., Marsella, S., Martinez, A.M., & Pollak, S.D. (2019). Emotional Expressions Reconsidered: Challenges to Inferring Emotion from Human Facial Movements. *Psychological Science in the Public Interest*, 20(1), 1–68.
    18. Cohn, J.F., & De la Torre, F. (2015). Automated Face Analysis for Affective Computing. In R. Calvo, S. D'Mello, J. Gratch, & A. Kappas (Eds.), *Oxford Handbook of Affective Computing*.
    19. Tian, Y.L., Kanade, T., & Cohn, J.F. (2001). Recognizing Action Units for Facial Expression Analysis. *IEEE Trans. PAMI*, 23(2), 97–115.
    20. Liu, Y., Song, S., & Qing, L. (2024). Stress Recognition Identifying Relevant Facial Action Units through Explainable Artificial Intelligence and Machine Learning. *Computer Methods and Programs in Biomedicine*, 245, 108507.
    21. Zhi, R., Flierl, M., Ruan, Q., & Kleijn, W.B. (2011). Graph-Preserving Sparse Nonneg. Matrix Factorization with Application to Facial Expression Recognition. *IEEE Trans. Systems Man Cybernetics B*, 41(1), 38–52.
    22. Kollias, D., Tzirakis, P., Nicolaou, M.A., Papaioannou, A., Zhao, G., Schuller, B., ... & Zafeiriou, S. (2019). Deep Affect Prediction in-the-Wild: Aff-Wild Database and Challenge, Deep Architectures, and Beyond. *International Journal of Computer Vision*, 127(6–7), 907–929.
    23. Ahmed, F., El Adel, I., & Hamrouni, K. (2025). Foundation of Affective Computing and Interaction. *arXiv:2506.15497*.
    24. Information Commissioner's Office (ICO). (2023). Guidance on AI and Data Protection: Emotion Recognition. UK ICO. https://ico.org.uk/
    25. EU AI Act (Regulation 2024/1689), Recital 44 and Article 6, Annex III. (2024). High-risk AI systems including emotion recognition at work and education. *Official Journal of the European Union*.
    26. Baltrušaitis, T., Robinson, P., & Morency, L.P. (2016). OpenFace: An Open Source Facial Behaviour Analysis Toolkit. *IEEE WACV 2016*.
    27. ACII 2024 AAP Workshop. (2024). Fourth International Workshop on Automated Assessment of Pain. 12th International Conference on Affective Computing and Intelligent Interaction, Glasgow, UK, September 15–18, 2024.
    28. Kollias, D. (2023). ABAW: Learning from Synthetic Data & Multi-Task Learning Challenges. *IEEE CVPR Workshops 2023*. [ABAW6 challenge]

- ### Provenance
  - sources:: Ekman & Friesen 1978 FACS Manual; Hjortsjö 1969; OpenFace 2.0 (IEEE FG 2018); AFF-Wild2 (Kollias 2019); DISFA (Mavadati 2013); BP4D (Zhang 2014); AUGlasses arXiv 2405.13289; Barrett et al. 2019 Psychological Science in the Public Interest; EU AI Act 2024/1689; ICO Guidance on Emotion Recognition 2023; ACII 2024 Glasgow conference; Foundation of Affective Computing arXiv 2506.15497; Py-Feat documentation; arXiv 2403.03400 contrastive AU learning
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
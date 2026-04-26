iri:: http://narrativegoldmine.com/artificial-intelligence#Automl
uri:: urn:visionclaw:concept:artificial-intelligence:automl
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:automl
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: AutoML
content-hash:: sha256-12-1d5f9b3e7a2c
status:: complete
maturity:: established
quality-score:: 0.60
authority-score:: 0.72
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - Automated Machine Learning (AutoML) is the discipline and associated tooling that automates the end-to-end pipeline of applying machine learning to real-world problems — encompassing automated data pre-processing, feature engineering, algorithm selection, [[Neural Architecture Search]] (NAS), hyperparameter optimisation (HPO), and ensemble construction — enabling practitioners without deep ML expertise to produce competitive models whilst simultaneously accelerating expert workflows, with modern systems such as Google AutoML, Auto-Sklearn, and NAS-based tools (DARTS, EffNet) achieving state-of-the-art performance on standard benchmarks through efficient search strategies including Bayesian optimisation, evolutionary algorithms, and differentiable architecture search.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutoML
  - owl-role:: Process
  - owl-inferred:: ai:MLAutomationFramework
  - belongs-to-domain:: [[AI Domain]]
  - implemented-in-layer:: [[ModelLayer]], [[TrainingLayer]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning Pipeline]], [[Automated Optimisation System]]
  - has-part:: [[Neural Architecture Search]], [[Hyperparameter Optimisation]], [[Feature Engineering Automation]], [[Algorithm Selection]], [[Meta-Learning]], [[Pipeline Optimisation]]
  - is-part-of:: [[AI Development Lifecycle]], [[MLOps Platform]]
  - requires:: [[Training Dataset]], [[Computational Budget]], [[Evaluation Metric]], [[Search Space Definition]]
  - enables:: [[Democratised ML Development]], [[Rapid Model Iteration]], [[Resource-Efficient Training]], [[Reproducible Experiments]]
  - implements:: [[Bayesian Optimisation]], [[Evolutionary Neural Architecture Search]], [[DARTS Differentiable NAS]]
  - bridges-to:: [[LangChain]] (domain: ai), [[Gazebo Simulator]] (domain: rb), [[WebAssembly]] (domain: ngm)
  - depends-on:: [[PyTorch]], [[TensorFlow]], [[Optuna HPO Framework]], [[Ray Tune]]

- ### Content

  AutoML emerged as a research field around 2013–2015 in response to the observation that the most laborious and expertise-intensive parts of applied machine learning — choosing the right algorithm, tuning its hyperparameters, engineering informative features — were also the most systematic and therefore potentially automatable. The seminal Auto-WEKA paper (2013) framed the combined algorithm selection and hyperparameter optimisation problem (CASH) as a structured optimisation problem amenable to Bayesian methods. This framing has since expanded dramatically: modern AutoML systems tackle the full pipeline from raw tabular or image data to a deployable model, with Neural Architecture Search adding the model design step to the automation scope.

  #### Key Characteristics

  - **Pipeline-Level Automation**: Modern AutoML systems (Auto-Sklearn 2.0, H2O AutoML, TPOT) treat the entire ML pipeline — imputation, scaling, feature selection, algorithm, hyperparameters — as a joint search problem, finding compositions that optimise a held-out validation metric.
  - **Neural Architecture Search (NAS)**: NAS algorithms automatically design deep neural network topologies. Weight-sharing NAS (DARTS, SNAS) trains a supernet from which subnets are sampled, amortising the cost of evaluating thousands of architectures. Hardware-aware NAS (MNasNet, EfficientNet) jointly optimises accuracy and latency on target hardware.
  - **Hyperparameter Optimisation (HPO)**: Bayesian optimisation (using Gaussian Processes or TPE) models the objective function and proposes hyperparameter configurations that balance exploration and exploitation, requiring far fewer evaluations than random or grid search. Hyperband and ASHA add early stopping of underperforming trials for further efficiency.
  - **Meta-Learning**: AutoML systems use meta-features of a dataset (number of rows, feature types, class imbalance ratio) and historical performance data across prior tasks to warm-start the search, avoiding cold-start inefficiency on new problems.
  - **Multi-Fidelity Strategies**: Rather than training every candidate to convergence, multi-fidelity methods (Hyperband, BOHB) evaluate candidates on small data subsets or for fewer epochs, discarding poor performers early and investing compute in promising configurations.

  #### How It Works

  A typical AutoML invocation takes three inputs: a dataset (tabular CSV, image folder, or raw text), a target metric (accuracy, AUC-ROC, F1, latency), and a compute budget (wall-clock time or trial count). The AutoML engine performs the following steps:

  1. **Data Characterisation**: Compute meta-features (dimensionality, missing value rates, class distribution) and select a portfolio of pipeline templates likely to perform well based on meta-learning from prior tasks.
  2. **Search Space Definition**: Enumerate the pipeline components (imputers, scalers, classifiers, NAS cell types) and their hyperparameter ranges.
  3. **Search**: Iteratively sample configurations from the search space using the chosen strategy (Bayesian optimisation, evolutionary search, or DARTS gradient updates for NAS). Train each configuration (possibly at reduced fidelity) and record the validation metric.
  4. **Ensemble Construction**: Rather than returning the single best model, most AutoML systems build a post-hoc ensemble (via stacking or weighted averaging) of the top-k configurations, consistently improving generalisation.
  5. **Model Export**: The winning pipeline is serialised (ONNX, Pickle, TF SavedModel) and accompanied by a training report documenting the search trajectory.

  #### Current Landscape

  The AutoML landscape in 2025–2026 is characterised by the convergence of classical tabular AutoML (Auto-Sklearn, H2O, LightAutoML) and large model fine-tuning automation. Google's Vertex AI AutoML and Azure ML AutoML now offer one-click model training from labelled datasets, abstracting infrastructure provisioning as well as algorithm search. For NAS, the field has matured from academic benchmarks to production deployments: Google's EfficientNet family (NAS-derived) powers image classification across Google Photos and on Pixel device NPUs. The integration of AutoML with [[LangChain]] and [[Model Context Protocol]] agents enables an emerging paradigm of "agentic ML": an orchestrating LLM decides which AutoML job to launch based on data quality and business requirements, monitors the search, and incorporates the resulting model as an MCP tool for downstream tasks.

  #### Cross-Domain Applications

  In the [[Robotics Domain]], AutoML optimises perception models (object detectors, depth estimators) deployed on [[Robot Operating System]] nodes, with hardware-aware NAS targeting the ARM Cortex or NVIDIA Jetson constraints of mobile robots. In the [[NGM Domain]], [[WebAssembly]]-compiled ONNX models produced by AutoML are deployed as [[VisionClaw Agentic Container]] agent skills running in Wasm sandboxes. In the [[Metaverse Domain]], AutoML is used to train avatar animation quality predictors and scene complexity estimators that feed the [[OpenXR]] compositor's adaptive rendering pipeline.

  #### Standards and References

  - Feurer, M., et al. (2015). "Efficient and Robust Automated Machine Learning." *NeurIPS 2015*.
  - Zoph, B., & Le, Q. V. (2017). "Neural Architecture Search with Reinforcement Learning." *ICLR 2017*.
  - Liu, H., et al. (2019). "DARTS: Differentiable Architecture Search." *ICLR 2019*.
  - He, X., et al. (2021). "AutoML: A Survey of the State-of-the-Art." *Knowledge-Based Systems*, 212.
  - Lindauer, M., et al. (2022). "SMAC3: A Versatile Bayesian Optimisation Package for Hyperparameter Optimisation." *JMLR*, 23(54).

- ### Provenance
  - sources:: [[NeurIPS 2015 Auto-Sklearn Paper]], [[DARTS ICLR 2019]], [[AutoML Survey Knowledge-Based Systems 2021]], [[Google Vertex AI AutoML]], [[H2O AutoML Documentation]]
  - migration-date:: 2026-04-26T00:00:00Z

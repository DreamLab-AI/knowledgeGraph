public:: true

# Feature Importance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:87f720bd87ae88def56c76139724201930610c0bc1dd3f4196f490d866c7b841",
  "@type": "Page",
  "vc:slug": "feature-importance",
  "title": "Feature Importance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:feature-attribution",
      "vc:label": "Feature Attribution"
    },
    {
      "@id": "urn:visionflow:linked:feature-selection",
      "vc:label": "Feature Selection"
    },
    {
      "@id": "urn:visionflow:linked:modeling",
      "vc:label": "modeling"
    },
    {
      "@id": "urn:visionflow:linked:partial-dependence-plot",
      "vc:label": "Partial Dependence Plot"
    },
    {
      "@id": "urn:visionflow:linked:permutation-importance",
      "vc:label": "Permutation Importance"
    },
    {
      "@id": "urn:visionflow:linked:shap",
      "vc:label": "SHAP"
    },
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "user experience"
    },
    {
      "@id": "urn:visionflow:owl:class:dimensionality-reduction",
      "vc:label": "Dimensionality Reduction"
    },
    {
      "@id": "urn:visionflow:owl:class:global-explanation",
      "vc:label": "Global Explanation"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:model-interpretability",
      "vc:label": "Model Interpretability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0303"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Feature Importance"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-importance",
  "@type": "Class",
  "label": "Feature Importance",
  "definition": "Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs. Methods include permutation importance, SHAP (SHapley Additive exPlanations) values, and tree-based Gini impurity scores, each providing global or local views of feature influence that support model debugging, data selection, and regulatory explainability requirements.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:explainability",
    "label": "Explainability"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:model-interpretability", "label": "Model Interpretability"},
      {"@id": "urn:ngm:class:global-explanation", "label": "Global Explanation"},
      {"@id": "urn:ngm:class:feature-selection", "label": "Feature Selection"},
      {"@id": "urn:ngm:class:model-debugging", "label": "Model Debugging"},
      {"@id": "urn:ngm:class:bias-detection", "label": "Bias Detection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:dimensionality-reduction", "label": "Dimensionality Reduction"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:random-forest", "label": "Random Forest"},
      {"@id": "urn:ngm:class:gradient-boosting", "label": "Gradient Boosting"},
      {"@id": "urn:ngm:class:shapley-values", "label": "Shapley Values"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:permutation-importance", "label": "Permutation Importance"},
      {"@id": "urn:ngm:class:feature-attribution", "label": "Feature Attribution"},
      {"@id": "urn:ngm:class:partial-dependence-plot", "label": "Partial Dependence Plot"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:trained-model", "label": "Trained Model"},
      {"@id": "urn:ngm:class:validation-dataset", "label": "Validation Dataset"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:causal-inference", "label": "Causal Inference"},
      {"@id": "urn:ngm:class:local-explanation", "label": "Local Explanation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-evaluation", "label": "Model Evaluation"},
      {"@id": "urn:ngm:class:overfitting", "label": "Overfitting"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:variable-importance", "label": "Variable Importance"},
    {"@id": "urn:ngm:class:predictor-importance", "label": "Predictor Importance"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:feature-importance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:87f720bd87ae88def56c76139724201930610c0bc1dd3f4196f490d866c7b841"
  },
  "vc:resolutions": [
    {
      "raw": "[[Feature Attribution]]",
      "resolved": "urn:visionflow:linked:feature-attribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feature Selection]]",
      "resolved": "urn:visionflow:linked:feature-selection",
      "kind": "StubLink"
    },
    {
      "raw": "[[modeling]]",
      "resolved": "urn:visionflow:linked:modeling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Partial Dependence Plot]]",
      "resolved": "urn:visionflow:linked:partial-dependence-plot",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permutation Importance]]",
      "resolved": "urn:visionflow:linked:permutation-importance",
      "kind": "StubLink"
    },
    {
      "raw": "[[SHAP]]",
      "resolved": "urn:visionflow:linked:shap",
      "kind": "StubLink"
    },
    {
      "raw": "[[user experience]]",
      "resolved": "urn:visionflow:linked:user-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dimensionality Reduction]]",
      "resolved": "urn:visionflow:owl:class:dimensionality-reduction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Global Explanation]]",
      "resolved": "urn:visionflow:owl:class:global-explanation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Interpretability]]",
      "resolved": "urn:visionflow:owl:class:model-interpretability",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs.

- ### Semantic Classification
  - owl-class:: spatial-computing:FeatureImportance
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **enables** [[Model Interpretability]] — feature importance scores explain which inputs drive predictions
  - **enables** [[Global Explanation]] — aggregated feature importance provides global model explanations
  - **uses** [[Dimensionality Reduction]] — feature importance informs which dimensions to retain or remove
  - **uses** [[Machine Learning Discipline]] — importance scores are computed from trained machine learning models
  - **supports** [[AI Governance]] — feature importance evidence supports governance audits and fairness assessments
  - **supports** [[Transparency]] — publishing feature importance increases AI system transparency

- ### Content
  - Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs.

			- ## Features

  - ### Virunga National Park: Overview
  - **Location and Importance**: Virunga National Park is located in eastern Congo, known for its endangered mountain gorillas and rich biodiversity.
  - **Challenges**: The park faces numerous challenges, including militia activity, deforestation, and a lack of consistent government support.

		- ##### Sound Design
		- It also highlights the importance of using spatial audio to enhance theimmersive experience of an app, which includes attaching sound toobjects and creating soundscapes.

		- ##### Transitions
		- It highlights the importance of clear, intuitive methods for enteringand exiting immersive experiences. It suggests using easily recognizablesymbols, such as arrows for expanding or collapsing views.

		- ###  Msty
			- **Description:** Native macOS application with extensive feature sets.
			- **Features:**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Link:** [Msty App](https://msty.app)

			- ### 3.2 **Llama.cpp**
			- **Strengths:**
				- Minimalist server UI with OpenAI-compatible API.
				- Excellent for developers due to fast updates.
			- **Limitations:** Limited feature set compared to Oobabooga and Open WebUI.
			- **Link:** [Llama.cpp GitHub](https://github.com/llama-cpp)

  - ## Elicit's Approach and Features

			- ## Features

  - ### Virunga National Park: Overview
  - **Location and Importance**: Virunga National Park is located in eastern Congo, known for its endangered mountain gorillas and rich biodiversity.
  - **Challenges**: The park faces numerous challenges, including militia activity, deforestation, and a lack of consistent government support.

		- ##### Sound Design
		- It also highlights the importance of using spatial audio to enhance theimmersive experience of an app, which includes attaching sound toobjects and creating soundscapes.

		- ##### Transitions
		- It highlights the importance of clear, intuitive methods for enteringand exiting immersive experiences. It suggests using easily recognizablesymbols, such as arrows for expanding or collapsing views.

		- ###  Msty
			- **Description:** Native macOS application with extensive feature sets.
			- **Features:**
				- Integrates advanced tools like text-to-speech (TTS).
				- Highly optimised for macOS environments.
			- **Link:** [Msty App](https://msty.app)

			- ### 3.2 **Llama.cpp**
			- **Strengths:**
				- Minimalist server UI with OpenAI-compatible API.
				- Excellent for developers due to fast updates.
			- **Limitations:** Limited feature set compared to Oobabooga and Open WebUI.
			- **Link:** [Llama.cpp GitHub](https://github.com/llama-cpp)

  - ## Elicit's Approach and Features

			- ## Features

  - # Marco presentation
  - ![20240507 - Manchester Hackathon.pdf](assets/20240507_-_Manchester_Hackathon_1715878110413_0.pdf)
			- [stavsap/comfyui-ollama (github.com)](https://github.com/stavsap/comfyui-ollama)
		- DONE Backup the working docker
		- DONE sort the vpn and port forwarding
		- DONE Check the security
		- DONE Install the rest of the feature set
		- DONE Sort the models and Loras
		- DONE Fire up 3 instances
			- DONE TripoSR (no point, feature dropped)
		- DONE [yisol/IDM-VTON: IDM-VTON : Improving Diffusion Models for Authentic Virtual Try-on in the Wild (github.com)](https://github.com/yisol/IDM-VTON)
		  CLOCK: [2024-05-06 Mon 09:23:58]--[2024-05-06 Mon 09:23:58] =>  00:00:00
		  CLOCK: [2024-05-06 Mon 09:23:59]--[2024-05-06 Mon 09:24:00] =>  00:00:01
		  :END:
		  :LOGBOOK:
		  CLOCK: [2024-05-06 Mon 09:25:33]--[2024-05-06 Mon 12:16:24] =>  02:50:51
		  :END:
			- DONE backup first
			  :LOGBOOK:
			  CLOCK: [2024-05-06 Mon 10:23:31]--[2024-05-06 Mon 10:23:31] =>  00:00:00
			  :END:
		- DONE Confirm the TV in time?
		- DONE Fix the windows laptop for delegates
		- DONE Talk to Marco
		- DONE Make a presentation for the day (logseq based for me)
		  :LOGBOOK:
			- Launch the OpenVPN Connect client and import the `vpn.ovpn` file.
			- On the day of the event, you will receive a username and password. Use these credentials to connect to the VPN.

			- ### 3.2 **Llama.cpp**
			- **Strengths:**
				- Minimalist server UI with OpenAI-compatible API.
				- Excellent for developers due to fast updates.
			- **Limitations:** Limited feature set compared to Oobabooga and Open WebUI.

			  ---

  - ## Elicit's Approach and Features

  - ### **AGG: Amortized Generative 3D Gaussians**

  - It offers advanced features such as anti-aliasing, sub-pixel accuracy, and gradient meshes.

  - AGG can be used for various applications, including image processing, font rendering, and [[user experience]] interface design.
  - It can handle meshes of arbitrary genus (with holes or handles), offering flexibility in the type of geometry it can process.

  - Instant Meshes allows for controlling various aspects of the remeshing process, such as target edge length and alignment to feature lines.

  - The tool supports importing and exporting meshes in common 3D file formats like OBJ and PLY.

  - It uses a command-line interface, enabling batch processing and integration into automated workflows.


  -   It allows users to programme the data plane of their service mesh using WebAssembly (Wasm) filters, offering flexibility in customising network traffic processing.

  -   Vmesh aims to simplify the process of creating and managing service meshes, particularly by reducing the complexity associated with traditional sidecar proxies.

  -   The system provides tools to observe and analyse network traffic flowing through the mesh, providing insights into the performance and behaviour of services.

  -   Users can apply granular policies to control access between services, ensuring a strong security posture and preventing unauthorised communication.

  -   Vmesh integrates with existing Kubernetes environments and leverages Cilium's eBPF-based networking for performance and efficiency.

		- [Thin Plate Spline Motion Model](https://replicate.com/yoyo-nb/thin-plate-spline-motion-model) - *   This model animates a still image by warping it according to the motion of a driving video.
  -   It uses a thin-plate spline motion model to learn [[modeling]] patterns from the driving video.
  -   The system uses keypoint detection to identify facial landmarks or other features in both the source image and the driving video.
  -   The thin-plate spline transformation warps the source image so that its keypoints move in accordance with the motion depicted in the driving video.
  -   Users can input a static image and a video to generate an animated version of the image following the driving video's movements.
  -   The process involves feature extraction, motion estimation, and image rendering to create the final animated output.
  -   The tool promotes better understanding of software development processes and architecture decisions.
  -   Customisation of colours and metrics is possible, enabling the tool to adapt to different codebases and analysis goals.

  - # Marco presentation
		- DONE Backup the working docker
		- DONE Install the rest of the feature set
		- DONE Sort the models and Loras
		  CLOCK: [2024-05-06 Mon 09:23:58]--[2024-05-06 Mon 09:23:58] =>  00:00:00
		  CLOCK: [2024-05-06 Mon 09:23:59]--[2024-05-06 Mon 09:24:00] =>  00:00:01
		  CLOCK: [2024-05-06 Mon 09:25:33]--[2024-05-06 Mon 12:16:24] =>  02:50:51
		  :END:
			  CLOCK: [2024-05-06 Mon 10:23:31]--[2024-05-06 Mon 10:23:31] =>  00:00:00
			  :END:

  - ### Humane Ai Pin
		- **Description**: A behavior modification wearable that uses mild electric shock to help break bad habits. (weird)
		- **Features**:
			- Delivers a mild shock to discourage bad habits
			- Tracks sleep, steps, and hand motions
			- Programmable via an app
			- Community challenges and support
		- **Features**:
			- Focus on breathing exercises and meditation
		- **AI Aspect**: Uses AI to customize breathing exercises and track progress.
		- Hardware: [https://www.espressif.com/en/news/ESP32-S3-BOX-3](https://www.espressif.com/en/news/ESP32-S3-BOX-3)
		- [https://github.com/ollama/ollama/blob/main/docs/openai.md](https://github.com/ollama/ollama/blob/main/docs/openai.md)
		- Actually you can do full two way conversations! Here's a PR someone has in progress to officially add it to esphome - [https://github.com/esphome/firmware/pull/173](https://github.com/esphome/firmware/pull/173)
  - [AI in a Box (crowdsupply.com)](https://www.crowdsupply.com/useful-sensors/ai-in-a-box)
		- Android Auto's capability to summarize messages and suggest relevant replies, powered by on-device AI, for safer driving experiences.
		- Note Assist for generating AI-powered summaries of notes taken within Samsung Notes, improving organization and retrieval of information.
		- Transcript Assist uses on-device AI for transcribing and summarizing voice recordings, identifying different speakers and translating content.
		- Edit Suggestion feature that uses on-device AI to suggest photo edits, enhancing the photography experience without the need for server processing.
		- [Google android etc](https://developers.google.com/learn/topics/on-device-ml)
		- [Intel meteor lake?](https://www.pocket-lint.com/what-is-meteor-lake-and-how-will-intel-leverage-ai-in-future/)
  - [AI HoloBox: ChatGPT-Powered Holographic Desktop Companion by AI HoloBox — Kickstarter](https://www.kickstarter.com/projects/752925986/ai-holobox-chatgpt-powered-holographic-desktop-companion?)
  - **I don't personally think any of these wearables and gadgets "break through" vs watches, but I can see the next generation of watching inferring a LOT more and containing MUCH more functionality. People will wear watches. Sometimes.**

  ## Related Terms

  - **Broader**: [[Global Explanation]], [[Model Interpretability]]
  - **Narrower**: [[Permutation Importance]], [[SHAP]], [[Feature Attribution]]
  - **Related**: [[Feature Selection]], [[Dimensionality Reduction]]

  ## Formal Specification

  ### Core Concept

  Given model `f: X → Y` with features `X = {x₁, x₂, ..., xₚ}`, feature importance `I(j)` quantifies:

  ```
  I(j) = Influence of feature j on f's predictions
  ```

  **Properties**:
  - Non-negative: `I(j) ≥ 0`
  - Normalised (optional): `Σ I(j) = 1`
  - Ranked: Features ordered by `I(j)`

  ### Types of Importance

  **Global Importance**: Across all predictions
  ```
  I_global(j) = E_X[Impact of feature j on f(X)]
  ```

  **Local Importance**: For specific instance `x`
  ```
  I_local(j, x) = Impact of feature j on f(x)
  ```

  ## Methods

  ### Intrinsic Feature Importance

  #### Linear Model Coefficients

  **Linear Regression**:
  ```
  y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ
  ```

  **Importance**:
  ```
  I(j) = |βⱼ| × σⱼ
  ```
  Where `σⱼ` is standard deviation of feature `j` (for comparable scales).

  **Interpretation**: Absolute standardised coefficient magnitude.

  **Advantages**:
  - Direct from model parameters
  - Computationally free
  - Clear interpretation

  **Limitations**:
  - Assumes linearity
  - Sensitive to multicollinearity
  - Not applicable to non-linear models

  #### Tree-Based Importance

  **Decision Trees**:
  ```
  I(j) = Σ (samples at node) × (impurity decrease) for all nodes splitting on feature j
       / (total samples × total impurity decrease)
  ```

  **Impurity Measures**:
  - **Gini impurity**: `1 - Σ pᵢ²`
  - **Entropy**: `-Σ pᵢ log(pᵢ)`
  - **Variance** (regression): `Var(y)`

  **Random Forest/Gradient Boosting**:
  ```
  I(j) = Average importance of feature j across all trees
  ```

  **Advantages**:
  - Built into tree algorithms
  - Fast computation
  - Handles non-linearity and interactions

  **Limitations**:
  - **Bias towards high-cardinality features**: More split opportunities
  - **Correlated features**: Importance split between them
  - **Unreliable for extrapolation**: Training data dependent

  ### Model-Agnostic Feature Importance

  #### Permutation Importance

  **Algorithm** (Breiman, 2001):

  1. Compute baseline performance: `S_orig = Score(f, X, y)`
  2. For each feature `j`:
   a. Permute feature: `X_perm = X with column j shuffled`
   b. Recompute performance: `S_perm = Score(f, X_perm, y)`
   c. Importance: `I(j) = S_orig - E[S_perm]` (averaged over repeats)

  **Properties**:
  - Model-agnostic
  - Reflects true predictive importance
  - Accounts for feature interactions

  **Advantages**:
  - Unbiased (compared to tree importance)
  - Works with any model
  - Intuitive interpretation

  **Limitations**:
  - Requires access to validation data
  - Computationally expensive (many predictions)
  - Assumes feature independence (can create unrealistic data)

  #### Drop-Column Importance

  **Algorithm**:

  1. Train model on all features: `f_all(X) → y`
  2. For each feature `j`:
   a. Train model without feature `j`: `f_{-j}(X_{-j}) → y`
   b. Importance: `I(j) = Score(f_all) - Score(f_{-j})`

  **Interpretation**: Performance decrease when feature removed.

  **Advantages**:
  - Directly measures feature necessity
  - No unrealistic data generation

  **Limitations**:
  - Requires retraining `p` models
  - Computationally prohibitive for complex models
  - May underestimate importance if redundant features exist

  #### SHAP Feature Importance

  **Definition** (Lundberg & Lee, 2017):

  ```
  I(j) = (1/n) Σ |φⱼ(xᵢ)|
             i=1
  ```

  Where `φⱼ(xᵢ)` is SHAP value for feature `j` at instance `i`.

  **Interpretation**: Average absolute contribution of feature `j`.

  **Advantages**:
  - Consistent with local explanations
  - Theoretically grounded (Shapley values)
  - Handles feature interactions via interaction values

  **Variants**:
  - **Mean absolute SHAP**: `(1/n) Σ |φⱼ(xᵢ)|` (default)
  - **Mean SHAP**: `(1/n) Σ φⱼ(xᵢ)` (shows direction)
  - **SHAP interaction importance**: Sum of interaction effects

  **Limitations**:
  - Computationally expensive (especially Kernel SHAP)
  - Baseline dependence
  - Interpretation complexity for interactions

  ## Visualisations

  ### Bar Charts

  **Structure**:
  - Features on y-axis
  - Importance on x-axis
  - Sorted by magnitude

  **Variants**:
  - **Standard**: Single bar per feature
  - **Grouped**: Multiple models compared
  - **Stacked**: Positive/negative contributions

  **Example** (matplotlib):
  ```python
  import matplotlib.pyplot as plt

  features = ['age', 'income', 'education', 'location']
  importances = [0.4, 0.3, 0.2, 0.1]

  plt.barh(features, importances)
  plt.xlabel('Feature Importance')
  plt.title('Permutation Importance')
  ```

  ### SHAP Summary Plots

  **Structure**:
  - Features on y-axis (sorted by importance)
  - SHAP values on x-axis
  - Each dot is an instance
  - Color indicates feature value (high/low)

  **Interpretation**:
  - **Position**: SHAP value (impact)
  - **Color**: Feature value
  - **Density**: Distribution of impacts

  **Example**:
  ```python
  import shap

  shap.summary_plot(shap_values, X_test)
  ```

  ### Feature Importance with Confidence Intervals

  **Permutation Importance Variance**:

  Multiple permutations yield distribution:
  ```
  I(j) ~ N(μⱼ, σⱼ²)
  ```

  **Visualisation**:
  - Bar chart with error bars
  - Box plots showing distribution
  - Violin plots for full distribution

  **Example** (scikit-learn):
  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(model, X_val, y_val, n_repeats=30)

  importances_mean = result.importances_mean
  importances_std = result.importances_std

  plt.barh(features, importances_mean, xerr=importances_std)
  ```

  ## Application Domains

  ### Feature Selection

  **Use Case**: Identify and retain only important features.

  **Approach**:
  1. Compute feature importance
  2. Threshold or select top-K features
  3. Retrain model on reduced feature set
  4. Evaluate performance

  **Benefits**:
  - Reduced overfitting
  - Faster training/inference
  - Improved interpretability

  **Example**:
  ```python
  from sklearn.feature_selection import SelectFromModel

  # Using tree-based importance
  selector = SelectFromModel(RandomForestClassifier(), threshold='median')
  X_selected = selector.fit_transform(X_train, y_train)
  ```

  ### Model Debugging

  **Use Cases**:
  - **Data leakage detection**: Unexpected high importance
  - **Sanity checks**: Aligns with domain knowledge?
  - **Bias detection**: Protected attributes driving predictions?

  **Example**:
  Feature importance reveals `customer_id` has high importance → data leakage likely.

  ### Domain Insight

  **Scientific Applications**:
  - Hypothesis generation (which variables matter?)
  - Mechanism understanding (how do variables influence outcome?)
  - Prioritisation (which factors to intervene on?)

  **Example** (Healthcare):
  Feature importance shows "blood pressure" more important than "BMI" for heart disease prediction → clinical validation and insight.

  ### Regulatory Compliance

  **Finance**:
  - Fair lending: Ensure protected attributes not driving decisions
  - Model risk management: Understand key risk factors

  **Example**:
  Feature importance analysis shows `race` has near-zero importance → compliance with fair lending laws.

  ## Implementation Approaches

  ### Scikit-learn Tree Importance

  ```python
  from sklearn.ensemble import RandomForestClassifier

  model = RandomForestClassifier().fit(X_train, y_train)

  importances = model.feature_importances_
  indices = np.argsort(importances)[::-1]

  for i in range(X_train.shape[1]):
    print(f"{features[indices[i]]}: {importances[indices[i]]:.4f}")
  ```

  ### Scikit-learn Permutation Importance

  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
  )

  for i, (mean, std) in enumerate(zip(result.importances_mean, result.importances_std)):
    print(f"{features[i]}: {mean:.4f} ± {std:.4f}")
  ```

  ### SHAP Feature Importance

  ```python
  import shap

  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)

  # Global feature importance
  shap.summary_plot(shap_values, X_test, plot_type="bar")

  # Or manually compute
  feature_importance = np.abs(shap_values).mean(axis=0)
  ```

  ### Custom Importance Function

  ```python
  def custom_feature_importance(model, X, y, metric, n_repeats=10):
    """
    Model-agnostic permutation importance with custom metric.
    """
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_perm = X.copy()
            X_perm[col] = np.random.permutation(X_perm[col])
            score = metric(y, model.predict(X_perm))
            scores.append(baseline_score - score)

        importances[col] = {
            'mean': np.mean(scores),
            'std': np.std(scores)
        }

    return importances
  ```

  ## Evaluation & Validation

  ### Consistency Checks

  **Across Methods**:
  Compare rankings from different importance methods:
  ```python
  from scipy.stats import spearmanr

  correlation = spearmanr(
    tree_importance_ranking,
    permutation_importance_ranking
  )
  ```

  **Across Subsets**:
  Importance should be stable across data subsets:
  ```python
  from sklearn.model_selection import KFold

  importances_per_fold = []
  for train_idx, val_idx in KFold(n_splits=5).split(X):
    # Compute importance on fold
    importances_per_fold.append(compute_importance(X[val_idx], y[val_idx]))

  # Check variance
  importance_std = np.std(importances_per_fold, axis=0)
  ```

  ### Domain Validation

  **Expert Review**:
  - Do important features align with domain knowledge?
  - Are there unexpected importances?
  - Are known important features captured?

  **Hypothesis Testing**:
  - Is `I(j)` significantly greater than zero?
  - Permutation test or bootstrap confidence intervals

  **Example**:
  ```python
  # Permutation test for significance
  null_distribution = []
  for _ in range(1000):
    y_permuted = np.random.permutation(y)
    null_importance = compute_importance(X, y_permuted)
    null_distribution.append(null_importance)

  p_value = (null_distribution >= observed_importance).mean()
  ```

  ### Robustness Analysis

  **Stability to Noise**:
  Add random features and verify low importance:
  ```python
  X_with_noise = X.copy()
  X_with_noise['random'] = np.random.randn(len(X))

  importances = compute_importance(X_with_noise, y)
  assert importances['random'] < threshold  # Near zero
  ```

  **Sensitivity to Outliers**:
  Recompute importance with outliers removed.

  ## Challenges & Limitations

  ### Methodological Challenges

  **Correlated Features**:
  - Tree importance: Split between correlated features
  - Permutation: Unrealistic combinations if features correlated
  - Solution: Conditional importance, clustered permutation

  **Feature Interactions**:
  - Standard importance: Doesn't capture interactions
  - Solution: SHAP interaction values, H-statistic

  **Causality**:
  - Importance ≠ causal effect
  - Observational data limitations
  - Solution: Causal inference methods, interventional importance

  ### Computational Challenges

  **Scalability**:
  - Permutation: `O(p × r × n)` predictions
  - SHAP: Exponential (exact), polynomial (approximate)
  - Drop-column: Requires `p` model retrains

  **Real-time Constraints**:
  - Production systems: Pre-compute importance
  - Online learning: Incremental importance updates

  ### Interpretation Challenges

  **Audience Dependence**:
  - Technical vs. lay users
  - Absolute vs. relative importance
  - Positive vs. negative effects

  **Multicollinearity**:
  - Inflated coefficient variance (linear models)
  - Shared importance (tree models)
  - Solution: Regularisation, feature engineering

  ## Research Directions

  ### Emerging Areas

  **Causal Feature Importance**:
  - Interventional importance: `I(j) = E[Y | do(X_j)] - E[Y]`
  - Counterfactual reasoning
  - Structural causal models

  **Conditional Importance**:
  - Importance given realistic feature combinations
  - Conditional permutation schemes
  - Addressing feature dependence

  **Temporal Feature Importance**:
  - Time-varying importance (online learning)
  - Concept drift detection
  - Dynamic feature selection

  **Multi-task Feature Importance**:
  - Shared importance across tasks
  - Task-specific importance decomposition

  ### Industry Innovation

  **Microsoft InterpretML**:
  - Unified importance API
  - EBM feature importance (additive effects)

  **Google Cloud Explainable AI**:
  - Feature attribution aggregation
  - Integrated with Vertex AI

  **H2O.ai Driverless AI**:
  - Automated feature importance
  - Ensemble importance across models

  ## Best Practices

  ### Method Selection

  **Decision Tree**:
  1. **Model type**: Trees → intrinsic; Neural nets → permutation/SHAP
  2. **Computational budget**: Limited → tree intrinsic; Ample → SHAP
  3. **Feature correlation**: High → SHAP/conditional; Low → permutation
  4. **Causality**: Important → causal methods; Prediction → standard

  ### Implementation Guidelines

  **Pre-analysis**:
  - Check for correlated features (VIF, correlation matrix)
  - Validate data quality (missing values, outliers)
  - Establish domain priors (expected important features)

  **Analysis**:
  - Use multiple methods (robustness check)
  - Include confidence intervals (permutation variance)
  - Validate against domain knowledge
  - Test for statistical significance

  **Post-analysis**:
  - Document methodology and parameters
  - Visualise with clear labels
  - Highlight top-K features
  - Disclose limitations

  ### Visualisation Guidelines

  **Clarity**:
  - Sort by importance (descending)
  - Limit to top-K features (avoid clutter)
  - Include error bars (uncertainty)
  - Use color judiciously (positive/negative)

  **Context**:
  - Show feature scales (if relevant)
  - Include baseline (zero importance line)
  - Annotate unexpected results
  - Provide interpretation guide

  ## Related Terms

  - **Broader**: [[Global Explanation]], [[Model Interpretability]]
  - **Narrower**: [[Permutation Importance]], [[SHAP]], [[Feature Attribution]]
  - **Related**: [[Feature Selection]], [[Dimensionality Reduction]]

  ## Formal Specification

  ### Core Concept

  Given model `f: X → Y` with features `X = {x₁, x₂, ..., xₚ}`, feature importance `I(j)` quantifies:

  ```
  I(j) = Influence of feature j on f's predictions
  ```

  **Properties**:
  - Non-negative: `I(j) ≥ 0`
  - Normalised (optional): `Σ I(j) = 1`
  - Ranked: Features ordered by `I(j)`

  ### Types of Importance

  **Global Importance**: Across all predictions
  ```
  I_global(j) = E_X[Impact of feature j on f(X)]
  ```

  **Local Importance**: For specific instance `x`
  ```
  I_local(j, x) = Impact of feature j on f(x)
  ```

  ## Methods

  ### Intrinsic Feature Importance

  #### Linear Model Coefficients

  **Linear Regression**:
  ```
  y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ
  ```

  **Importance**:
  ```
  I(j) = |βⱼ| × σⱼ
  ```
  Where `σⱼ` is standard deviation of feature `j` (for comparable scales).

  **Interpretation**: Absolute standardised coefficient magnitude.

  **Advantages**:
  - Direct from model parameters
  - Computationally free
  - Clear interpretation

  **Limitations**:
  - Assumes linearity
  - Sensitive to multicollinearity
  - Not applicable to non-linear models

  #### Tree-Based Importance

  **Decision Trees**:
  ```
  I(j) = Σ (samples at node) × (impurity decrease) for all nodes splitting on feature j
       / (total samples × total impurity decrease)
  ```

  **Impurity Measures**:
  - **Gini impurity**: `1 - Σ pᵢ²`
  - **Entropy**: `-Σ pᵢ log(pᵢ)`
  - **Variance** (regression): `Var(y)`

  **Random Forest/Gradient Boosting**:
  ```
  I(j) = Average importance of feature j across all trees
  ```

  **Advantages**:
  - Built into tree algorithms
  - Fast computation
  - Handles non-linearity and interactions

  **Limitations**:
  - **Bias towards high-cardinality features**: More split opportunities
  - **Correlated features**: Importance split between them
  - **Unreliable for extrapolation**: Training data dependent

  ### Model-Agnostic Feature Importance

  #### Permutation Importance

  **Algorithm** (Breiman, 2001):

  1. Compute baseline performance: `S_orig = Score(f, X, y)`
  2. For each feature `j`:
   a. Permute feature: `X_perm = X with column j shuffled`
   b. Recompute performance: `S_perm = Score(f, X_perm, y)`
   c. Importance: `I(j) = S_orig - E[S_perm]` (averaged over repeats)

  **Properties**:
  - Model-agnostic
  - Reflects true predictive importance
  - Accounts for feature interactions

  **Advantages**:
  - Unbiased (compared to tree importance)
  - Works with any model
  - Intuitive interpretation

  **Limitations**:
  - Requires access to validation data
  - Computationally expensive (many predictions)
  - Assumes feature independence (can create unrealistic data)

  #### Drop-Column Importance

  **Algorithm**:

  1. Train model on all features: `f_all(X) → y`
  2. For each feature `j`:
   a. Train model without feature `j`: `f_{-j}(X_{-j}) → y`
   b. Importance: `I(j) = Score(f_all) - Score(f_{-j})`

  **Interpretation**: Performance decrease when feature removed.

  **Advantages**:
  - Directly measures feature necessity
  - No unrealistic data generation

  **Limitations**:
  - Requires retraining `p` models
  - Computationally prohibitive for complex models
  - May underestimate importance if redundant features exist

  #### SHAP Feature Importance

  **Definition** (Lundberg & Lee, 2017):

  ```
  I(j) = (1/n) Σ |φⱼ(xᵢ)|
             i=1
  ```

  Where `φⱼ(xᵢ)` is SHAP value for feature `j` at instance `i`.

  **Interpretation**: Average absolute contribution of feature `j`.

  **Advantages**:
  - Consistent with local explanations
  - Theoretically grounded (Shapley values)
  - Handles feature interactions via interaction values

  **Variants**:
  - **Mean absolute SHAP**: `(1/n) Σ |φⱼ(xᵢ)|` (default)
  - **Mean SHAP**: `(1/n) Σ φⱼ(xᵢ)` (shows direction)
  - **SHAP interaction importance**: Sum of interaction effects

  **Limitations**:
  - Computationally expensive (especially Kernel SHAP)
  - Baseline dependence
  - Interpretation complexity for interactions

  ## Visualisations

  ### Bar Charts

  **Structure**:
  - Features on y-axis
  - Importance on x-axis
  - Sorted by magnitude

  **Variants**:
  - **Standard**: Single bar per feature
  - **Grouped**: Multiple models compared
  - **Stacked**: Positive/negative contributions

  **Example** (matplotlib):
  ```python
  import matplotlib.pyplot as plt

  features = ['age', 'income', 'education', 'location']
  importances = [0.4, 0.3, 0.2, 0.1]

  plt.barh(features, importances)
  plt.xlabel('Feature Importance')
  plt.title('Permutation Importance')
  ```

  ### SHAP Summary Plots

  **Structure**:
  - Features on y-axis (sorted by importance)
  - SHAP values on x-axis
  - Each dot is an instance
  - Color indicates feature value (high/low)

  **Interpretation**:
  - **Position**: SHAP value (impact)
  - **Color**: Feature value
  - **Density**: Distribution of impacts

  **Example**:
  ```python
  import shap

  shap.summary_plot(shap_values, X_test)
  ```

  ### Feature Importance with Confidence Intervals

  **Permutation Importance Variance**:

  Multiple permutations yield distribution:
  ```
  I(j) ~ N(μⱼ, σⱼ²)
  ```

  **Visualisation**:
  - Bar chart with error bars
  - Box plots showing distribution
  - Violin plots for full distribution

  **Example** (scikit-learn):
  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(model, X_val, y_val, n_repeats=30)

  importances_mean = result.importances_mean
  importances_std = result.importances_std

  plt.barh(features, importances_mean, xerr=importances_std)
  ```

  ## Application Domains

  ### Feature Selection

  **Use Case**: Identify and retain only important features.

  **Approach**:
  1. Compute feature importance
  2. Threshold or select top-K features
  3. Retrain model on reduced feature set
  4. Evaluate performance

  **Benefits**:
  - Reduced overfitting
  - Faster training/inference
  - Improved interpretability

  **Example**:
  ```python
  from sklearn.feature_selection import SelectFromModel

  # Using tree-based importance
  selector = SelectFromModel(RandomForestClassifier(), threshold='median')
  X_selected = selector.fit_transform(X_train, y_train)
  ```

  ### Model Debugging

  **Use Cases**:
  - **Data leakage detection**: Unexpected high importance
  - **Sanity checks**: Aligns with domain knowledge?
  - **Bias detection**: Protected attributes driving predictions?

  **Example**:
  Feature importance reveals `customer_id` has high importance → data leakage likely.

  ### Domain Insight

  **Scientific Applications**:
  - Hypothesis generation (which variables matter?)
  - Mechanism understanding (how do variables influence outcome?)
  - Prioritisation (which factors to intervene on?)

  **Example** (Healthcare):
  Feature importance shows "blood pressure" more important than "BMI" for heart disease prediction → clinical validation and insight.

  ### Regulatory Compliance

  **Finance**:
  - Fair lending: Ensure protected attributes not driving decisions
  - Model risk management: Understand key risk factors

  **Example**:
  Feature importance analysis shows `race` has near-zero importance → compliance with fair lending laws.

  ## Implementation Approaches

  ### Scikit-learn Tree Importance

  ```python
  from sklearn.ensemble import RandomForestClassifier

  model = RandomForestClassifier().fit(X_train, y_train)

  importances = model.feature_importances_
  indices = np.argsort(importances)[::-1]

  for i in range(X_train.shape[1]):
    print(f"{features[indices[i]]}: {importances[indices[i]]:.4f}")
  ```

  ### Scikit-learn Permutation Importance

  ```python
  from sklearn.inspection import permutation_importance

  result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
  )

  for i, (mean, std) in enumerate(zip(result.importances_mean, result.importances_std)):
    print(f"{features[i]}: {mean:.4f} ± {std:.4f}")
  ```

  ### SHAP Feature Importance

  ```python
  import shap

  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)

  # Global feature importance
  shap.summary_plot(shap_values, X_test, plot_type="bar")

  # Or manually compute
  feature_importance = np.abs(shap_values).mean(axis=0)
  ```

  ### Custom Importance Function

  ```python
  def custom_feature_importance(model, X, y, metric, n_repeats=10):
    """
    Model-agnostic permutation importance with custom metric.
    """
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_perm = X.copy()
            X_perm[col] = np.random.permutation(X_perm[col])
            score = metric(y, model.predict(X_perm))
            scores.append(baseline_score - score)

        importances[col] = {
            'mean': np.mean(scores),
            'std': np.std(scores)
        }

    return importances
  ```

  ## Evaluation & Validation

  ### Consistency Checks

  **Across Methods**:
  Compare rankings from different importance methods:
  ```python
  from scipy.stats import spearmanr

  correlation = spearmanr(
    tree_importance_ranking,
    permutation_importance_ranking
  )
  ```

  **Across Subsets**:
  Importance should be stable across data subsets:
  ```python
  from sklearn.model_selection import KFold

  importances_per_fold = []
  for train_idx, val_idx in KFold(n_splits=5).split(X):
    # Compute importance on fold
    importances_per_fold.append(compute_importance(X[val_idx], y[val_idx]))

  # Check variance
  importance_std = np.std(importances_per_fold, axis=0)
  ```

  ### Domain Validation

  **Expert Review**:
  - Do important features align with domain knowledge?
  - Are there unexpected importances?
  - Are known important features captured?

  **Hypothesis Testing**:
  - Is `I(j)` significantly greater than zero?
  - Permutation test or bootstrap confidence intervals

  **Example**:
  ```python
  # Permutation test for significance
  null_distribution = []
  for _ in range(1000):
    y_permuted = np.random.permutation(y)
    null_importance = compute_importance(X, y_permuted)
    null_distribution.append(null_importance)

  p_value = (null_distribution >= observed_importance).mean()
  ```

  ### Robustness Analysis

  **Stability to Noise**:
  Add random features and verify low importance:
  ```python
  X_with_noise = X.copy()
  X_with_noise['random'] = np.random.randn(len(X))

  importances = compute_importance(X_with_noise, y)
  assert importances['random'] < threshold  # Near zero
  ```

  **Sensitivity to Outliers**:
  Recompute importance with outliers removed.

  ## Challenges & Limitations

  ### Methodological Challenges

  **Correlated Features**:
  - Tree importance: Split between correlated features
  - Permutation: Unrealistic combinations if features correlated
  - Solution: Conditional importance, clustered permutation

  **Feature Interactions**:
  - Standard importance: Doesn't capture interactions
  - Solution: SHAP interaction values, H-statistic

  **Causality**:
  - Importance ≠ causal effect
  - Observational data limitations
  - Solution: Causal inference methods, interventional importance

  ### Computational Challenges

  **Scalability**:
  - Permutation: `O(p × r × n)` predictions
  - SHAP: Exponential (exact), polynomial (approximate)
  - Drop-column: Requires `p` model retrains

  **Real-time Constraints**:
  - Production systems: Pre-compute importance
  - Online learning: Incremental importance updates

  ### Interpretation Challenges

  **Audience Dependence**:
  - Technical vs. lay users
  - Absolute vs. relative importance
  - Positive vs. negative effects

  **Multicollinearity**:
  - Inflated coefficient variance (linear models)
  - Shared importance (tree models)
  - Solution: Regularisation, feature engineering

  ## Research Directions

  ### Emerging Areas

  **Causal Feature Importance**:
  - Interventional importance: `I(j) = E[Y | do(X_j)] - E[Y]`
  - Counterfactual reasoning
  - Structural causal models

  **Conditional Importance**:
  - Importance given realistic feature combinations
  - Conditional permutation schemes
  - Addressing feature dependence

  **Temporal Feature Importance**:
  - Time-varying importance (online learning)
  - Concept drift detection
  - Dynamic feature selection

  **Multi-task Feature Importance**:
  - Shared importance across tasks
  - Task-specific importance decomposition

  ### Industry Innovation

  **Microsoft InterpretML**:
  - Unified importance API
  - EBM feature importance (additive effects)

  **Google Cloud Explainable AI**:
  - Feature attribution aggregation
  - Integrated with Vertex AI

  **H2O.ai Driverless AI**:
  - Automated feature importance
  - Ensemble importance across models

  ## Best Practices

  ### Method Selection

  **Decision Tree**:
  1. **Model type**: Trees → intrinsic; Neural nets → permutation/SHAP
  2. **Computational budget**: Limited → tree intrinsic; Ample → SHAP
  3. **Feature correlation**: High → SHAP/conditional; Low → permutation
  4. **Causality**: Important → causal methods; Prediction → standard

  ### Implementation Guidelines

  **Pre-analysis**:
  - Check for correlated features (VIF, correlation matrix)
  - Validate data quality (missing values, outliers)
  - Establish domain priors (expected important features)

  **Analysis**:
  - Use multiple methods (robustness check)
  - Include confidence intervals (permutation variance)
  - Validate against domain knowledge
  - Test for statistical significance

  **Post-analysis**:
  - Document methodology and parameters
  - Visualise with clear labels
  - Highlight top-K features
  - Disclose limitations

  ### Visualisation Guidelines

  **Clarity**:
  - Sort by importance (descending)
  - Limit to top-K features (avoid clutter)
  - Include error bars (uncertainty)
  - Use color judiciously (positive/negative)

  **Context**:
  - Show feature scales (if relevant)
  - Include baseline (zero importance line)
  - Annotate unexpected results
  - Provide interpretation guide

  #### References
  ### Academic Literature

  - Breiman, L. (2001). "Random forests." *Machine Learning*, 45(1), 5-32
  - Lundberg, S. M., & Lee, S. I. (2017). "A unified approach to interpreting model predictions." *NeurIPS*
  - Strobl, C., et al. (2007). "Bias in random forest variable importance measures." *BMC Bioinformatics*, 8(1), 25
  - Fisher, A., Rudin, C., & Dominici, F. (2019). "All models are wrong, but many are useful: Learning a variable's importance by studying an entire class of prediction models simultaneously." *Journal of Machine Learning Research*, 20(177), 1-81

  ### Standards

  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*

  ### Tools & Frameworks

  - Scikit-learn. (2023). *Inspection module: permutation_importance*
  - Lundberg, S. M. (2023). *SHAP library*
  - Molnar, C. (2022). *Interpretable Machine Learning: Feature Importance*

  ## See Also

  - [[Permutation Importance]]
  - [[SHAP]]
  - [[Feature Attribution]]
  - [[Global Explanation]]
  - [[Feature Selection]]
  - [[Partial Dependence Plot]]
  - ### Original Content
		- ```
  # Feature Importance

		  **Term ID**: AI-0303
		  **Category**: XAI Methods
		  **Status**: Established
		  **Last Updated**: 2025-10-27

		  ## Definition

		  Quantitative measures indicating the relative contribution or influence of individual input features on a machine learning model's predictions, enabling identification of the most critical variables driving model outputs.

		  ## Related Terms

		  - **Broader**: [[Global Explanation]], [[Model Interpretability]]
		  - **Narrower**: [[Permutation Importance]], [[SHAP]], [[Feature Attribution]]
		  - **Related**: [[Feature Selection]], [[Dimensionality Reduction]]

		  ## Formal Specification

		  ### Core Concept

		  Given model `f: X → Y` with features `X = {x₁, x₂, ..., xₚ}`, feature importance `I(j)` quantifies:

		  ```
		  I(j) = Influence of feature j on f's predictions
		  ```

		  **Properties**:
		  - Non-negative: `I(j) ≥ 0`
		  - Normalised (optional): `Σ I(j) = 1`
		  - Ranked: Features ordered by `I(j)`

		  ### Types of Importance

		  **Global Importance**: Across all predictions
		  ```
		  I_global(j) = E_X[Impact of feature j on f(X)]
		  ```

		  **Local Importance**: For specific instance `x`
		  ```
		  I_local(j, x) = Impact of feature j on f(x)
		  ```

		  ## Methods

		  ### Intrinsic Feature Importance

		  #### Linear Model Coefficients

		  **Linear Regression**:
		  ```
		  y = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ
		  ```

		  **Importance**:
		  ```
		  I(j) = |βⱼ| × σⱼ
		  ```
		  Where `σⱼ` is standard deviation of feature `j` (for comparable scales).

		  **Interpretation**: Absolute standardised coefficient magnitude.

		  **Advantages**:
		  - Direct from model parameters
		  - Computationally free
		  - Clear interpretation

		  **Limitations**:
		  - Assumes linearity
		  - Sensitive to multicollinearity
		  - Not applicable to non-linear models

		  #### Tree-Based Importance

		  **Decision Trees**:
		  ```
		  I(j) = Σ (samples at node) × (impurity decrease) for all nodes splitting on feature j
		         / (total samples × total impurity decrease)
		  ```

		  **Impurity Measures**:
		  - **Gini impurity**: `1 - Σ pᵢ²`
		  - **Entropy**: `-Σ pᵢ log(pᵢ)`
		  - **Variance** (regression): `Var(y)`

		  **Random Forest/Gradient Boosting**:
		  ```
		  I(j) = Average importance of feature j across all trees
		  ```

		  **Advantages**:
		  - Built into tree algorithms
		  - Fast computation
		  - Handles non-linearity and interactions

		  **Limitations**:
		  - **Bias towards high-cardinality features**: More split opportunities
		  - **Correlated features**: Importance split between them
		  - **Unreliable for extrapolation**: Training data dependent

		  ### Model-Agnostic Feature Importance

		  #### Permutation Importance

		  **Algorithm** (Breiman, 2001):

		  1. Compute baseline performance: `S_orig = Score(f, X, y)`
		  2. For each feature `j`:
		     a. Permute feature: `X_perm = X with column j shuffled`
		     b. Recompute performance: `S_perm = Score(f, X_perm, y)`
		     c. Importance: `I(j) = S_orig - E[S_perm]` (averaged over repeats)

		  **Properties**:
		  - Model-agnostic
		  - Reflects true predictive importance
		  - Accounts for feature interactions

		  **Advantages**:
		  - Unbiased (compared to tree importance)
		  - Works with any model
		  - Intuitive interpretation

		  **Limitations**:
		  - Requires access to validation data
		  - Computationally expensive (many predictions)
		  - Assumes feature independence (can create unrealistic data)

		  #### Drop-Column Importance

		  **Algorithm**:

		  1. Train model on all features: `f_all(X) → y`
		  2. For each feature `j`:
		     a. Train model without feature `j`: `f_{-j}(X_{-j}) → y`
		     b. Importance: `I(j) = Score(f_all) - Score(f_{-j})`

		  **Interpretation**: Performance decrease when feature removed.

		  **Advantages**:
		  - Directly measures feature necessity
		  - No unrealistic data generation

		  **Limitations**:
		  - Requires retraining `p` models
		  - Computationally prohibitive for complex models
		  - May underestimate importance if redundant features exist

		  #### SHAP Feature Importance

		  **Definition** (Lundberg & Lee, 2017):

		  ```
		  I(j) = (1/n) Σ |φⱼ(xᵢ)|
		               i=1
		  ```

		  Where `φⱼ(xᵢ)` is SHAP value for feature `j` at instance `i`.

		  **Interpretation**: Average absolute contribution of feature `j`.

		  **Advantages**:
		  - Consistent with local explanations
		  - Theoretically grounded (Shapley values)
		  - Handles feature interactions via interaction values

		  **Variants**:
		  - **Mean absolute SHAP**: `(1/n) Σ |φⱼ(xᵢ)|` (default)
		  - **Mean SHAP**: `(1/n) Σ φⱼ(xᵢ)` (shows direction)
		  - **SHAP interaction importance**: Sum of interaction effects

		  **Limitations**:
		  - Computationally expensive (especially Kernel SHAP)
		  - Baseline dependence
		  - Interpretation complexity for interactions

		  ## Visualisations

		  ### Bar Charts

		  **Structure**:
		  - Features on y-axis
		  - Importance on x-axis
		  - Sorted by magnitude

		  **Variants**:
		  - **Standard**: Single bar per feature
		  - **Grouped**: Multiple models compared
		  - **Stacked**: Positive/negative contributions

		  **Example** (matplotlib):
		  ```python
		  import matplotlib.pyplot as plt

		  features = ['age', 'income', 'education', 'location']
		  importances = [0.4, 0.3, 0.2, 0.1]

		  plt.barh(features, importances)
		  plt.xlabel('Feature Importance')
		  plt.title('Permutation Importance')
		  ```

		  ### SHAP Summary Plots

		  **Structure**:
		  - Features on y-axis (sorted by importance)
		  - SHAP values on x-axis
		  - Each dot is an instance
		  - Color indicates feature value (high/low)

		  **Interpretation**:
		  - **Position**: SHAP value (impact)
		  - **Color**: Feature value
		  - **Density**: Distribution of impacts

		  **Example**:
		  ```python
		  import shap

		  shap.summary_plot(shap_values, X_test)
		  ```

		  ### Feature Importance with Confidence Intervals

		  **Permutation Importance Variance**:

		  Multiple permutations yield distribution:
		  ```
		  I(j) ~ N(μⱼ, σⱼ²)
		  ```

		  **Visualisation**:
		  - Bar chart with error bars
		  - Box plots showing distribution
		  - Violin plots for full distribution

		  **Example** (scikit-learn):
		  ```python
		  from sklearn.inspection import permutation_importance

		  result = permutation_importance(model, X_val, y_val, n_repeats=30)

		  importances_mean = result.importances_mean
		  importances_std = result.importances_std

		  plt.barh(features, importances_mean, xerr=importances_std)
		  ```

		  ## Application Domains

		  ### Feature Selection

		  **Use Case**: Identify and retain only important features.

		  **Approach**:
		  1. Compute feature importance
		  2. Threshold or select top-K features
		  3. Retrain model on reduced feature set
		  4. Evaluate performance

		  **Benefits**:
		  - Reduced overfitting
		  - Faster training/inference
		  - Improved interpretability

		  **Example**:
		  ```python
		  from sklearn.feature_selection import SelectFromModel

		  # Using tree-based importance
		  selector = SelectFromModel(RandomForestClassifier(), threshold='median')
		  X_selected = selector.fit_transform(X_train, y_train)
		  ```

		  ### Model Debugging

		  **Use Cases**:
		  - **Data leakage detection**: Unexpected high importance
		  - **Sanity checks**: Aligns with domain knowledge?
		  - **Bias detection**: Protected attributes driving predictions?

		  **Example**:
		  Feature importance reveals `customer_id` has high importance → data leakage likely.

		  ### Domain Insight

		  **Scientific Applications**:
		  - Hypothesis generation (which variables matter?)
		  - Mechanism understanding (how do variables influence outcome?)
		  - Prioritisation (which factors to intervene on?)

		  **Example** (Healthcare):
		  Feature importance shows "blood pressure" more important than "BMI" for heart disease prediction → clinical validation and insight.

		  ### Regulatory Compliance

		  **Finance**:
		  - Fair lending: Ensure protected attributes not driving decisions
		  - Model risk management: Understand key risk factors

		  **Example**:
		  Feature importance analysis shows `race` has near-zero importance → compliance with fair lending laws.

		  ## Implementation Approaches

		  ### Scikit-learn Tree Importance

		  ```python
		  from sklearn.ensemble import RandomForestClassifier

		  model = RandomForestClassifier().fit(X_train, y_train)

		  importances = model.feature_importances_
		  indices = np.argsort(importances)[::-1]

		  for i in range(X_train.shape[1]):
		      print(f"{features[indices[i]]}: {importances[indices[i]]:.4f}")
		  ```

		  ### Scikit-learn Permutation Importance

		  ```python
		  from sklearn.inspection import permutation_importance

		  result = permutation_importance(
		      estimator=model,
		      X=X_val,
		      y=y_val,
		      n_repeats=10,
		      random_state=42,
		      scoring='accuracy'
		  )

		  for i, (mean, std) in enumerate(zip(result.importances_mean, result.importances_std)):
		      print(f"{features[i]}: {mean:.4f} ± {std:.4f}")
		  ```

		  ### SHAP Feature Importance

		  ```python
		  import shap

		  explainer = shap.TreeExplainer(model)
		  shap_values = explainer.shap_values(X_test)

		  # Global feature importance
		  shap.summary_plot(shap_values, X_test, plot_type="bar")

		  # Or manually compute
		  feature_importance = np.abs(shap_values).mean(axis=0)
		  ```

		  ### Custom Importance Function

		  ```python
		  def custom_feature_importance(model, X, y, metric, n_repeats=10):
		      """
		      Model-agnostic permutation importance with custom metric.
		      """
		      baseline_score = metric(y, model.predict(X))
		      importances = {}

		      for col in X.columns:
		          scores = []
		          for _ in range(n_repeats):
		              X_perm = X.copy()
		              X_perm[col] = np.random.permutation(X_perm[col])
		              score = metric(y, model.predict(X_perm))
		              scores.append(baseline_score - score)

		          importances[col] = {
		              'mean': np.mean(scores),
		              'std': np.std(scores)
		          }

		      return importances
		  ```

		  ## Evaluation & Validation

		  ### Consistency Checks

		  **Across Methods**:
		  Compare rankings from different importance methods:
		  ```python
		  from scipy.stats import spearmanr

		  correlation = spearmanr(
		      tree_importance_ranking,
		      permutation_importance_ranking
		  )
		  ```

		  **Across Subsets**:
		  Importance should be stable across data subsets:
		  ```python
		  from sklearn.model_selection import KFold

		  importances_per_fold = []
		  for train_idx, val_idx in KFold(n_splits=5).split(X):
		      # Compute importance on fold
		      importances_per_fold.append(compute_importance(X[val_idx], y[val_idx]))

		  # Check variance
		  importance_std = np.std(importances_per_fold, axis=0)
		  ```

		  ### Domain Validation

		  **Expert Review**:
		  - Do important features align with domain knowledge?
		  - Are there unexpected importances?
		  - Are known important features captured?

		  **Hypothesis Testing**:
		  - Is `I(j)` significantly greater than zero?
		  - Permutation test or bootstrap confidence intervals

		  **Example**:
		  ```python
		  # Permutation test for significance
		  null_distribution = []
		  for _ in range(1000):
		      y_permuted = np.random.permutation(y)
		      null_importance = compute_importance(X, y_permuted)
		      null_distribution.append(null_importance)

		  p_value = (null_distribution >= observed_importance).mean()
		  ```

		  ### Robustness Analysis

		  **Stability to Noise**:
		  Add random features and verify low importance:
		  ```python
		  X_with_noise = X.copy()
		  X_with_noise['random'] = np.random.randn(len(X))

		  importances = compute_importance(X_with_noise, y)
		  assert importances['random'] < threshold  # Near zero
		  ```

		  **Sensitivity to Outliers**:
		  Recompute importance with outliers removed.

		  ## Challenges & Limitations

		  ### Methodological Challenges

		  **Correlated Features**:
		  - Tree importance: Split between correlated features
		  - Permutation: Unrealistic combinations if features correlated
		  - Solution: Conditional importance, clustered permutation

		  **Feature Interactions**:
		  - Standard importance: Doesn't capture interactions
		  - Solution: SHAP interaction values, H-statistic

		  **Causality**:
		  - Importance ≠ causal effect
		  - Observational data limitations
		  - Solution: Causal inference methods, interventional importance

		  ### Computational Challenges

		  **Scalability**:
		  - Permutation: `O(p × r × n)` predictions
		  - SHAP: Exponential (exact), polynomial (approximate)
		  - Drop-column: Requires `p` model retrains

		  **Real-time Constraints**:
		  - Production systems: Pre-compute importance
		  - Online learning: Incremental importance updates

		  ### Interpretation Challenges

		  **Audience Dependence**:
		  - Technical vs. lay users
		  - Absolute vs. relative importance
		  - Positive vs. negative effects

		  **Multicollinearity**:
		  - Inflated coefficient variance (linear models)
		  - Shared importance (tree models)
		  - Solution: Regularisation, feature engineering

		  ## Research Directions

		  ### Emerging Areas

		  **Causal Feature Importance**:
		  - Interventional importance: `I(j) = E[Y | do(X_j)] - E[Y]`
		  - Counterfactual reasoning
		  - Structural causal models

		  **Conditional Importance**:
		  - Importance given realistic feature combinations
		  - Conditional permutation schemes
		  - Addressing feature dependence

		  **Temporal Feature Importance**:
		  - Time-varying importance (online learning)
		  - Concept drift detection
		  - Dynamic feature selection

		  **Multi-task Feature Importance**:
		  - Shared importance across tasks
		  - Task-specific importance decomposition

		  ### Industry Innovation

		  **Microsoft InterpretML**:
		  - Unified importance API
		  - EBM feature importance (additive effects)

		  **Google Cloud Explainable AI**:
		  - Feature attribution aggregation
		  - Integrated with Vertex AI

		  **H2O.ai Driverless AI**:
		  - Automated feature importance
		  - Ensemble importance across models

		  ## Best Practices

		  ### Method Selection

		  **Decision Tree**:
		  1. **Model type**: Trees → intrinsic; Neural nets → permutation/SHAP
		  2. **Computational budget**: Limited → tree intrinsic; Ample → SHAP
		  3. **Feature correlation**: High → SHAP/conditional; Low → permutation
		  4. **Causality**: Important → causal methods; Prediction → standard

		  ### Implementation Guidelines

		  **Pre-analysis**:
		  - Check for correlated features (VIF, correlation matrix)
		  - Validate data quality (missing values, outliers)
		  - Establish domain priors (expected important features)

		  **Analysis**:
		  - Use multiple methods (robustness check)
		  - Include confidence intervals (permutation variance)
		  - Validate against domain knowledge
		  - Test for statistical significance

		  **Post-analysis**:
		  - Document methodology and parameters
		  - Visualise with clear labels
		  - Highlight top-K features
		  - Disclose limitations

		  ### Visualisation Guidelines

		  **Clarity**:
		  - Sort by importance (descending)
		  - Limit to top-K features (avoid clutter)
		  - Include error bars (uncertainty)
		  - Use color judiciously (positive/negative)

		  **Context**:
		  - Show feature scales (if relevant)
		  - Include baseline (zero importance line)
		  - Annotate unexpected results
		  - Provide interpretation guide

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

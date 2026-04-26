iri:: http://narrativegoldmine.com/infrastructure#ModelOptimisationAndPerformance
uri:: urn:visionclaw:concept:infrastructure:model-optimisation-and-performance
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:model-optimisation-and-performance
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Model Optimisation and Performance
content-hash:: sha256-12-b310e669a78b
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Model Optimisation and Performance is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ModelOptimisationAndPerformance
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - #Public page
	 - automatically published
  - ![image.png](../assets/image_1707150720702_0.png)
		- Quantization refers to the process of reducing the precision of the numbers that represent the weights and activations of a machine learning model without significantly reducing its accuracy.
		- It is a critical technique for deploying models on resource-constrained devices like mobile phones, embedded systems, and IoT devices.
		- [Quantization (huggingface.co)](https://huggingface.co/docs/transformers/main/quantization)
		- **Memory Efficiency**: Reduces the model size, enabling it to fit in the limited memory of small devices.
		- **Computational Efficiency**: Lower precision operations are faster and consume less power.
		- **Bandwidth Reduction**: Smaller models require less data to be transferred when downloaded or updated.
	 - **Description**: Involves reducing the number of non-zero elements in the model's weights, effectively compressing the model.
	 - **Techniques**:
				- Weight Pruning: Removing weights that have little impact on the output.
				- Structured Pruning: Removing entire channels or filters that are not contributing significantly to the model's performance.
	 - **References**:
				- [The Lottery Ticket Hypothesis](https://arxiv.org/abs/1803.03635)
	 - **Description**: This strategy involves truncating the least significant bits from the weights' binary representation.
	 - **Approach**:
				- Fixed-Point Quantization: Converts floating-point numbers to fixed-point format, removing the least significant bits.
				- Dynamic Quantization: Adjusts the quantization parameters dynamically based on the distribution of the parameters.
	 - **Benefits**:
				- Reduces the precision of weights with minimal impact on accuracy.
				- Simplifies the hardware implementation of mathematical operations.
	 - **References**:
				- [Post-Training Quantization](https://www.tensorflow.org/lite/performance/post_training_quantization)
	 - **Uniform Quantization**:
				- Applies the same quantization step size across all values.
				- Easier to implement but might not be optimal for all distributions of model parameters.
	 - **Non-Uniform Quantization**:
				- Adapts the quantization step size according to the distribution of the parameters.
				- Can achieve better accuracy for the same level of compression.
	 - **References**:
				- [Mixed Precision Training](https://arxiv.org/abs/1710.03740)
		- **TensorFlow Lite**: Provides tools for post-training quantization and quantization-aware training.
	 - [TensorFlow Lite Guide](https://www.tensorflow.org/lite)
		- **PyTorch Quantization**: Supports dynamic quantization, static quantization, and quantization-aware training.
	 - [PyTorch Quantization](https://pytorch.org/docs/stable/quantization.html)
		- **ONNX Runtime**: Offers support for quantized models, enabling optimized inference on different hardware.
	 - [ONNX Runtime Quantization](https://onnxruntime.ai/docs/performance/quantization.html)
		- **Accuracy Trade-offs**: Finding the right balance between model size reduction and accuracy preservation.
		- **Hardware Compatibility**: Ensuring quantized models are compatible with the target hardware's instruction set.
		- **Quantization Granularity**: Deciding between per-layer, per-channel, or per-tensor quantization for optimal performance.
  - **Quantized Neural Networks (QNNs)**
  - **Goal:** Reduce model size without sacrificing accuracy.
  - **Concept:** Lower precision representation of weights and activations (e.g., from 32-bit floats to 8-bit integers).
  - **Quantization:**
		- Rounding of weights and activations to lower precision representation.
		- **Example:**
		  ```
  - **Binary Quantization:**
		- Extremely aggressive quantization to binary values (1 or -1).
		- **Example:**
		  ```
  - **Ternary Quantization:**
		- Weights quantized to -1, 0, or 1.
		- Offers better information retention than binary quantization.
  - **Quantization-Aware Training (QAT):**
		- Integrate quantization effects into the training process for smoother transitions and less accuracy loss.
		  **Quantization Schemes**
  - **Fixed-Point:** Quantization into fixed bit-width representations.
  - **Logarithmic:** Leverages logarithmic scale for wider dynamic range.
  - **Quantized Inference**
  - Running inference using the quantized model.
  - Often requires integer math operations, leading to computational efficiency gains.
  - **Dequantization:** Process of converting quantized output back to a familiar floating-point representation.
		- **Smaller model sizes:** Ideal for memory-constrained devices.
		- **Faster inference:** Lower precision often leads to faster computations.
		- **Reduced power consumption:** Benefits embedded systems and mobile devices.
		- Mobile and edge devices
		- Real-time applications
		- Resource-constrained environments
  - 𝐇𝐲𝐩𝐞𝐫𝐩𝐚𝐫𝐚𝐦𝐞𝐭𝐞𝐫 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧: 𝟏𝟎 𝐓𝐨𝐩 𝐏𝐲𝐭𝐡𝐨𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬 𝐟𝐨𝐫 𝐒𝐞𝐜𝐫𝐞𝐭 𝐈𝐧𝐠𝐫𝐞𝐝𝐢𝐞𝐧𝐭 𝐢𝐧 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐒𝐮𝐜𝐜𝐞𝐬𝐬
  - Hyperparameter optimization plays a crucial role in determining the performance of a machine learning model. They are one the 3 components of training.
  - 𝟛 ℂ𝕠𝕞𝕡𝕠𝕟𝕖𝕟𝕥𝕤 𝕠𝕗 𝕄𝕠𝕕𝕖𝕝:
  - 1️⃣ Training data: Training data is what the algorithm leverages (think: instructions to build a model) to identify patterns
  - 2️⃣ Parameters: Algorithm 'learns' by adjusting parameters, such as weights, based on training data to make accurate predictions, which are saved as part of the final model.
  - 3️⃣ Hyperparameters: Hyperparameters are variables that regulate the process of training and are constant during the training process.
  - 𝔻𝕚𝕗𝕗𝕖𝕣𝕖𝕟𝕥 𝕋𝕪𝕡𝕖𝕤 𝕠𝕗 𝕊𝕖𝕒𝕣𝕔𝕙:
  - 🔎Grid Search : Training models with every possible combination of the provided hyperparameter values a time-consuming process.
  - 🔎Random Search: Training models with randomly samples hyperparameter values from the defined distributions, a more effective search.
  - 🔎 Having Grid Search: Training models with all values, and then repeatedly "halving" the search space by only considering the parameter values that performed the best in the previous round.
  - 🔎 Bayesian Search: Starting with an initial guess of values, using performance of the model to the values. It's like how a detective might start with a list of suspects, then use new information to narrow down the list.
  - I found these 𝟏𝟎 𝐩𝐲𝐭𝐡𝐨𝐧 𝐥𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬 𝐟𝐨𝐫 𝐇𝐲𝐩𝐞𝐫𝐩𝐚𝐫𝐚𝐦𝐞𝐭𝐞𝐫 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧:
  - 📚 Optuna
  - You can tune estimators of almost any ML, DL package/framework, including Sklearn, PyTorch, TensorFlow, Keras, XGBoost, LightGBM, CatBoost, etc with a real-time Web Dashboard called optuna-dashboard.
  - 📚Hyperopt
  - Optimizing using Bayesian optimization, including conditional dimensions.
  - 📚 Scikit-learn
  - different searches such as GridSearchCV or HalvingGridSearchCV.
  - 📚 Auto-Sklearn
  - AutoML and a drop-in replacement for a scikit-learn estimator.
  - 📚 Hyperactive
  - Very easy to learn but extremly versatile providing intelligent optimization.
  - 📚 Optunity
  - Provides distinct approaches such plethora of score functions.
  - 📚 HyperparameterHunter
  - Automatic save/learn from Experiments for persistent optimization
  - 📚 MLJAR
  - AutoML creating Markdown reports from ML pipeline
  - 📚 KerasTuner
  - with Bayesian Optimization, Hyperband, and Random Search algorithms built-in
  - 📚 Talos
  - Hyperparameter Optimization for TensorFlow, Keras and PyTorch
  - Extra:
  - 📚 Sweeps
  - 📚 Scikit-optimize
  - 📚 PyCaret
  - ![No alternative text description for this image](https://media.licdn.com/dms/image/D4E22AQHw_nWSZpbsyQ/feedshare-shrink_800/0/1711708970372?e=1714608000&v=beta&t=ZQCj26yY9vyZLbOegFQ97DYGWAmZno_65zrwVm31X5g)
  - [The Truth is in There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction
	 - Microsoft Research](https://www.microsoft.com/en-us/research/publication/the-truth-is-in-there-improving-reasoning-in-language-models-with-layer-selective-rank-reduction/)
  - [pratyushasharma/laser: The Truth Is In There: Improving Reasoning in Language Models with Layer-Selective Rank Reduction (github.com)](https://github.com/pratyushasharma/laser)
  - [huggingface/optimum-nvidia (github.com)](https://github.com/huggingface/optimum-nvidia)
  - [[width=0.06]./figs/logo EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty (arxiv.org)](https://arxiv.org/pdf/2401.15077.pdf)
  - [run-ai/llmperf (github.com)](https://github.com/run-ai/llmperf) Tensor vs serving frameworks
  - [[Bitnet and the rise of the 1bit model]]
  - [The Dawn of 1-Bit Large Language Models (substack.com)](https://emsime.substack.com/p/the-dawn-of-1-bit-large-language)
  - [[2402.17764] The Era of 1-bit LLMs: All Large Language Models are in 1.58 Bits (arxiv.org)](https://arxiv.org/abs/2402.17764)
  - [Advancing AI for humanity | Foundation of AI (thegenerality.com)](https://thegenerality.com/agi/)

  - ## Quantization in Machine Learning Models
  - ### Introduction
  - ### Benefits of Quantization
  - ### Strategies for Quantization
		- #### Sparsification
		- #### Removal of Least Significant Bits (LSB)
		- #### Uniform and Non-Uniform Quantization
  - ### Tools and Frameworks for Quantization
  - ### Challenges and Considerations
  - ### Key Techniques
  - #### [Overview of GGUF quantization methods : LocalLLaMA (reddit.com)](https://www.reddit.com/r/LocalLLaMA/comments/1ba55rj/overview_of_gguf_quantization_methods/)
		  ```
		  Quantized Weight = Round(Original Weight / Scale)
		  ```
		  Binary Weight = Sign(Original Weight)
  - ### Benefits of QNNs
  - ## Hyperparameter Tuning ([LinkedIn Thread](https://www.linkedin.com/posts/maryammiradi_machinelearning-ai-datascience-activity-7179427786799861760-WFtN/))

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

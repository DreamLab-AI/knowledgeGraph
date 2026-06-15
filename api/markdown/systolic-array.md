- ### Definition
  - A [[Systolic Array]] is a parallel [[Hardware Accelerator]] architecture where a grid of processing elements rhythmically passes data and partial results through the array without central coordination.
  - It excels at matrix multiplication and convolution — the core operations of [[Deep Learning]] — delivering high throughput with minimal memory bandwidth.
  - Google's [[Tensor Processing Unit]] employs a systolic array at its computational core, enabling efficient [[Neural Network Inference]] at datacenter scale.

- ### Overview
  - Coined by H.T. Kung and Charles Leiserson in 1978, the systolic array concept drew inspiration from the heart's rhythmic pumping of blood.
  - The architecture eliminates von Neumann bottlenecks by keeping data moving between neighbouring PEs rather than fetching from shared memory.
  - Each processing element performs a multiply-accumulate (MAC) operation, perfectly suited to dot product computation in neural network layers.

- ### Key Aspects
  - **Regularity**: All PEs are identical, simplifying design and manufacturing.
  - **Pipelining**: Data flows through the array while being transformed at each step.
  - **Locality**: Nearest-neighbour communication only; no long-range memory bus contention.
  - **Throughput**: Scales linearly with number of PEs for suitable workloads.

- ### Mechanisms
  - Input matrices are fed into the edges of the array; partial sums accumulate as data flows through.
  - Weights may be stationary (weight-stationary dataflow) or cycled through while inputs are held, depending on the variant.
  - Pipeline depth determines latency; array width and height determine throughput.

- ### Applications
  - [[Tensor Processing Unit]] (TPU) matrix multiply units in Google Cloud.
  - Custom AI ASICs for mobile inference.
  - Signal processing in radar and sonar systems.
  - FPGA implementations for low-latency model serving.

- ### Relationships
  - hasPart:: [[Processing Element]]
  - enables:: [[Matrix Multiplication]]
  - enables:: [[Deep Learning]]
  - enables:: [[Neural Network Inference]]
  - uses:: [[Data Flow Architecture]]
  - uses:: [[Hardware Accelerator]]
  - dependsOn:: [[Silicon Chip]]
  - relatedTo:: [[GPU]]
  - relatedTo:: [[Field Programmable Gate Array]]
  - relatedTo:: [[Tensor Processing Unit]]
  - contrastsWith:: [[Von Neumann Architecture]]
  - supports:: [[Machine Learning]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
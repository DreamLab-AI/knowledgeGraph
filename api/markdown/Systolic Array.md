
A Systolic Array is a specialised parallel computing architecture composed of a homogeneous network of processing elements (PEs) that rhythmically compute and pass data through the array in a pipelined fashion, analogous to the rhythmic pumping of the heart. Each PE performs a fixed local computation and passes results to neighbours without centralised control or global memory access. This architecture is highly efficient for matrix multiplication and convolution operations, making it the dominant microarchitecture in modern AI accelerators such as Google's Tensor Processing Units.

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

- ### Provenance


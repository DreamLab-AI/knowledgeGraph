
An application-specific integrated circuit (ASIC) is a chip designed and fabricated to perform a single, fixed function with maximum efficiency rather than to run general-purpose programs. In blockchain, ASICs are built to compute a particular proof-of-work hash function at far higher speed and energy efficiency than general processors, making them dominant in mining for hashes such as SHA-256. Because the silicon is customised for one task, ASICs offer superior performance per watt but cannot be repurposed for other workloads.

- ### Overview
	- General processors trade efficiency for programmability; an ASIC instead bakes a single algorithm directly into silicon.
	- For proof-of-work mining, where the same hash is computed billions of times per second, this specialisation yields enormous gains in speed and energy efficiency.
	- The shift from CPUs to GPUs to FPGAs and finally to ASICs has repeatedly reshaped mining economics, concentrating capability among those who can deploy purpose-built hardware.
	- Because an ASIC cannot be reprogrammed, it becomes obsolete if the target algorithm changes, tying its value to a specific network.
- ### Key aspects
	- Fixed-function design: the circuit is optimised for one algorithm only.
	- Performance per watt: superior energy efficiency compared with general-purpose hardware.
	- Non-reconfigurability: the silicon cannot be repurposed once fabricated.
	- High design cost: custom fabrication requires substantial up-front investment.
	- Centralisation pressure: ASIC dominance can concentrate mining among well-capitalised operators.
- ### Mechanisms
	- The target hash function is implemented directly as dedicated logic gates rather than executed as software.
	- Massive parallel hashing pipelines maximise throughput for the proof-of-work search.
	- Power and thermal design are tuned around the single workload to minimise energy per hash.
- ### Applications
	- Mining [[Bitcoin]] and other [[SHA-256]] proof-of-work networks.
	- Securing networks by contributing hash power to a [[Consensus Mechanism]].
	- Competing for [[Block Reward]] issuance in [[Mining]] operations.
	- Serving as specialised [[Hardware Acceleration]] for fixed cryptographic workloads.
- ### Provenance


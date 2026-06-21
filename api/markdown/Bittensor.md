public:: true

# Bittensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fbd9c2ba2144b4cc4206ef3b6b48ed0ba0f7a8227b9e380ea8da23d51960105c",
  "@type": "Page",
  "vc:slug": "bittensor",
  "title": "Bittensor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:token-economics",
      "vc:label": "Token Economics"
    },
    {
      "@id": "urn:visionflow:linked:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:linked:peer-to-peer-network",
      "vc:label": "Peer-to-Peer Network"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bittensor"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bittensor",
  "@type": "Class",
  "label": "Bittensor",
  "definition": "A decentralised network that uses blockchain-based incentives to coordinate and reward the contribution of machine learning models and compute by independent participants.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bittensor:a714e8511902",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fbd9c2ba2144b4cc4206ef3b6b48ed0ba0f7a8227b9e380ea8da23d51960105c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Economics]]",
      "resolved": "urn:visionflow:linked:token-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:linked:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Peer-to-Peer Network]]",
      "resolved": "urn:visionflow:linked:peer-to-peer-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Bittensor is a decentralised protocol and [[Peer-to-Peer Network]] for coordinating, evaluating, and rewarding the contribution of [[Machine Learning]] models and computational resources by independent operators across the internet, using [[Blockchain]] infrastructure and [[Token Economics]] to eliminate the need for any central AI provider or coordinator. Founded in 2019 by Jacob Steeves (a former Google software engineer) and Ala Shaabana (PhD, McMaster University, formerly of the University of Toronto), the Opentensor Foundation published a whitepaper in 2020 and launched the Bittensor mainnet in January 2021. The core thesis, directly inspired by Bitcoin's proof-of-work incentive structure, is that attaching financial rewards to the sharing and improvement of machine intelligence — rather than to ledger security — can bootstrap a self-sustaining, censorship-resistant ecosystem for [[Artificial Intelligence]] production. Participants called miners produce AI outputs in response to queries; participants called validators assess the quality of those outputs relative to peers; assessments are aggregated on-chain and converted into emission shares of the native TAO token, creating a continuous market for intelligence. The network is subdivided into specialised task environments called subnets, each defining its own input-output format, quality evaluation mechanism, and since February 2025 its own subnet-specific Alpha token and liquidity pool through the Dynamic TAO (dTAO) upgrade. As of March 2026 Bittensor operates 128 active subnets covering tasks ranging from text generation, code synthesis, and image generation to financial prediction, protein structure analysis, and permissionless [[Large Language Models]] pre-training. The March 2026 completion of Covenant-72B — a 72-billion-parameter language model trained permissionlessly across Subnet 3 by over 70 independent contributors using commodity internet hardware, trained on 1.1 trillion tokens and scoring 67.1 on the MMLU benchmark — demonstrated that decentralised coordination through economic incentives can produce frontier-competitive AI outputs without the billion-dollar data-centre infrastructure of centralised AI labs.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Bittensor
  - owl-role:: Concept | DecentralisedSystem | IncentiveProtocol | AIMarketplace
  - owl-inferred:: artificial-intelligence:DecentralisedAIPlatform, blockchain:TokenIncentiveSystem, distributed-computing:FederatedComputeNetwork
  - belongs-to-domain:: [[Artificial Intelligence]]
  - implemented-in-layer:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]], [[Decentralised System]], [[Peer-to-Peer Network]]
  - has-part:: [[Subnet]], [[Validator]], [[Miner]], [[Consensus Mechanism]], [[Smart Contract]], [[Token Economics]], [[Incentive Mechanism]], [[Alpha Token]]
  - requires:: [[Blockchain]], [[Token Economics]], [[Distributed Computing]], [[Proof of Intelligence]], [[Cryptographic Hash Function]]
  - enables:: [[Distributed Computing]], [[Federated Learning]], [[Large Language Models]], [[Decentralised Finance]], [[Machine Learning]], [[Permissionless AI Training]]
  - implements:: [[Incentive Mechanism]], [[Peer-to-Peer Network]], [[Token Economics]], [[Consensus Mechanism]]
  - depends-on:: [[Blockchain]], [[Peer-to-Peer Network]], [[Cryptographic Hash Function]], [[Distributed Consensus]], [[Token Economics]]
  - supports:: [[Machine Learning]], [[Artificial Intelligence]], [[Open Source AI]], [[Decentralised Finance]]
  - uses:: [[Proof of Intelligence]], [[Yuma Consensus]], [[Substrate]], [[Smart Contract]], [[Digital Asset]]
  - contrasts-with:: [[Centralised AI]], [[Cloud Computing]], [[Federated Learning]], [[OpenAI]], [[Hugging Face]]
  - related-to:: [[Token Economics]], [[Blockchain]], [[Decentralised Finance]], [[Ethereum]], [[Cryptocurrency]], [[AI Agent System]]
  - standardized-by:: [[Opentensor Foundation]]

- ### Content

  ## Compositional Relationships (Components)
  ```
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:Subnet))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:Validator))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:Miner))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:ConsensusMechanism))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:SmartContract))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:AlphaToken))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:IncentiveMechanism))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:hasPart ai:LiquidityPool))
  ```

  ## Dependency Relationships
  ```
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:Blockchain))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:TokenEconomics))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:DistributedComputing))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:CryptographicHashFunction))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:PeerToPeerNetwork))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:requires ai:DistributedConsensus))
  ```

  ## Capability Relationships
  ```
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:enables ai:DistributedComputing))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:enables ai:PermissionlessAITraining))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:enables ai:DecentralisedAIMarketplace))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:enables ai:LargeLanguageModelTraining))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:enables ai:OpenSourceAI))
  ```

  ## Implementation Relationships
  ```
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:implements ai:IncentiveMechanism))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:implements ai:YumaConsensus))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:implements ai:TokenEconomics))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:implements ai:SubnetArchitecture))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:implements ai:PeerToPeerNetwork))
  ```

  ## Reduction Relationships
  ```
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:reducesTo ai:ArtificialIntelligence))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:reducesTo ai:Blockchain))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:reducesTo ai:TokenEconomics))
  SubClassOf(ai:Bittensor
    ObjectSomeValuesFrom(ai:reducesTo ai:DistributedComputing))
  ```

  ## About

  - **Founding vision**: Bittensor represents the most ambitious attempt to date to apply cryptocurrency incentive theory to the production and valuation of machine intelligence.
  - **Intellectual lineage**: Inherits from Bitcoin's insight that financial incentives can coordinate anonymous participants toward a common goal — in Bitcoin's case, securing a ledger; in Bittensor's case, improving the collective quality of AI outputs.
  - **Structural problem in AI**: Jacob Steeves (former Google engineer, 2016-2018) recognised that most valuable model capability was locked inside a handful of large companies, inaccessible to researchers, small enterprises, or developers in jurisdictions without hyperscaler data-centre access.
  - **Core thesis of the whitepaper (2020)**: If AI model outputs can be reliably scored against each other — if one model can determine whether another model's answer is better — then scores can be accumulated on a distributed ledger and converted into token emissions, creating an economy of intelligence analogous to cryptocurrency's economy of computational proof-of-work.
  - **Founders**:
    - Jacob Robert Steeves: BSc Mathematics and Computer Science, Simon Fraser University; Software Engineer at Google, 2016-2018; co-conceived Bittensor in 2019.
    - Ala Shaabana: PhD Computer Science, McMaster University; Assistant Professor, University of Toronto, 2020-2021; co-founded Bittensor with Steeves.
    - Opentensor Foundation: the non-profit foundation established by Steeves and Shaabana to develop and maintain the Bittensor protocol.
  - **Timeline**:
    - 2019: Bittensor founded.
    - 2020: Whitepaper published: "Bittensor: A Peer-to-Peer Intelligence Market."
    - January 2021: Mainnet launch with initial single-network architecture (~1,000 nodes).
    - 2023: Subnet architecture introduced; network decomposed into task-specific marketplaces.
    - February 2025: Dynamic TAO (dTAO) upgrade deployed on mainnet (13 February 2025).
    - December 2025: First TAO halving; daily emissions reduced from 7,200 to 3,600 TAO.
    - January 2026: Grayscale Bittensor Trust (GTAO) listed on NYSE.
    - March 2026: Covenant-72B training completed on Subnet 3; combined subnet market cap exceeds $1.5B.

  - **Proof of Intelligence scoring mechanism**:
    - Miners receive task prompts from their subnet and produce AI outputs (text, images, structured data, model predictions).
    - Validators independently query multiple miners, score their outputs using a local reference model or domain-specific benchmark, and broadcast score vectors to the chain.
    - Yuma Consensus aggregates validator score matrices into a trust-weighted consensus ranking resistant to a minority of colluding validators.
    - TAO emissions distributed proportionally to miners' consensus rank within each subnet; validators earning emissions in proportion to their stake weight.
    - Incentive alignment: improving model output quality directly increases token income; colluding validators are progressively down-weighted as their scoring diverges from the honest majority.

  - **Three phases of network evolution**:
    - Phase 1 (2021-2023): Single global intelligence network, ~1,000 nodes, largely unknown outside cryptocurrency research community.
    - Phase 2 (2023 — early 2025): Subnet architecture decomposes monolithic network into task-specific marketplaces; grows to 64 subnets; serious ML practitioners deploy production models for text generation (Subnet 1), image synthesis, code generation, and time-series forecasting.
    - Phase 3 (February 2025 — present): Dynamic TAO (dTAO) replaces governance-based emission allocation with market-based price discovery; each subnet has its own Alpha token and AMM pool; network grows to 128 active subnets; Covenant-72B demonstrates frontier-scale permissionless training.

  - **Dynamic TAO (dTAO) upgrade — mechanism**:
    - Each subnet receives its own Alpha token and a TAO/Alpha constant-product AMM pool.
    - Stakers deposit TAO into a subnet pool and receive Alpha tokens in return; pool depth determines subnet's share of global daily emission.
    - Market signal: the more TAO flowing into a subnet's pool, the larger that subnet's emission allocation.
    - Replaced: the previous system where a council of 64 validators voted on subnet emission weights — a governance mechanism vulnerable to cartel formation and misaligned voting incentives.
    - Effect: transformed subnet funding from a governance decision into a continuous prediction market, where stakers profit by correctly identifying high-value subnets before the market reprices.

  - **Anti-gaming properties**:
    - Sybil resistance: miners pay a registration cost (burned TAO) to join a subnet, making mass-registration attacks economically costly.
    - Validator collusion resistance: Yuma Consensus detects validators whose score matrices deviate from the emerging consensus and reduces their stake weight and future emissions proportionally.
    - Quality Goodharting risk (identified in academic literature): validators may teach miners to optimise for the evaluation proxy rather than the true task quality, particularly in subnets with simple automated scoring metrics — an ongoing design challenge.

  ## Components / Architecture

  - **Subtensor Blockchain**:
    - Built on Parity's Polkadot Substrate SDK; not Ethereum-compatible.
    - Nominated proof-of-stake consensus; high throughput needed for frequent per-neuron score submissions.
    - Records: neuron registrations, stake allocations, validator score matrices, emission distributions, and Alpha token AMM pool states.
    - On-chain governance of protocol parameters (emission schedules, registration costs, consensus hyperparameters).
  - **Subnets**:
    - Each subnet: independently governed task environment with its own miners, validators, incentive mechanism, evaluation criteria, and (post-dTAO) Alpha token and AMM pool.
    - Subnet creation: register by burning TAO; define task format (input/output spec), design automated evaluation mechanism, optionally implement custom consensus logic.
    - As of March 2026: 128 active subnets covering text generation, image synthesis, code generation, deepfake detection, financial prediction, protein folding, decentralised storage, speech-to-text, and permissionless LLM pre-training.
    - Projected: expansion to 256 subnets by late 2026.
  - **Miners (Neurons)**:
    - Register within a subnet by paying a burned-TAO registration fee (Sybil resistance).
    - Receive queries from validators; produce AI outputs (LLM responses, images, predictions, model weights depending on subnet).
    - Performance continuously scored by validators; low-performing miners pruned after falling below the deregistration threshold (metagraph rank cutoff).
    - Run on any hardware with internet connectivity: commodity GPU servers, consumer RTX cards, or cloud spot instances.
  - **Validators (Neurons)**:
    - Must hold stake (TAO delegated to them by token holders) to participate in scoring.
    - Query multiple miners per epoch, score outputs using local reference models or automated metrics, broadcast score matrices on-chain.
    - Economically incentivised to score accurately: Yuma Consensus detects and down-weights divergent validators, reducing their emissions.
    - Stake delegation: token holders without the compute to run a validator can delegate stake to existing validators, earning a fraction of their emissions.
  - **Yuma Consensus**:
    - Byzantine-fault-tolerant aggregation of all validators' score matrices for miners within a subnet.
    - Computes trust-weighted averages; identifies validators whose scoring patterns diverge from emerging consensus and reduces their weight.
    - Named after Yuma, Arizona (Opentensor Foundation engineering lore).
    - Provides robustness against minority collusion (dishonest validators awarding scores based on kickbacks or self-serving routing) without a trusted central coordinator.
  - **Dynamic TAO (dTAO) and Alpha Tokens**:
    - Each subnet has its own Alpha token and a TAO/Alpha constant-product AMM pool.
    - Staker deposits TAO → receives Alpha tokens (price set by pool depth); withdrawal reverses the swap.
    - Pool TAO depth determines subnet's proportional share of global daily emission schedule.
    - Staker incentive: identify high-value subnets early, before Alpha token price rises with incoming TAO flow.
    - Creates subnet funding as a continuous prediction market analogous to a token-curated registry.
  - **TAO Token**:
    - Hard supply cap: 21 million TAO (mirrors Bitcoin).
    - Fair-launch model: no pre-mine, no ICO.
    - Emission schedule: halving approximately every 4 years; first halving December 2025 (7,200 → 3,600 TAO/day).
    - Uses: staking (validators), subnet registration (burned), governance voting, reserve asset in all Alpha AMM pools.
    - Delegated staking: token holders delegate TAO to validators in exchange for a share of validator emissions.
  - **Bittensor Python SDK (bittensor)**:
    - Open-source Python library for interacting with the Subtensor blockchain.
    - Wallet management, neuron registration, query-response handling, score submission, stake management.
    - Primary developer interface for subnet builders and validator/miner operators.
    - Maintained by the Opentensor Foundation on GitHub.
  - **Commune / Mosaic fork ecosystem**:
    - Commune (comx) and Mosaic are community forks of the Bittensor protocol attempting alternative subnet governance models.
    - Not Bittensor-canonical but indicative of the interest in the protocol's incentive design pattern.

  ## Key Terminology

  - **Alpha token**: Subnet-specific token introduced in the dTAO upgrade; each subnet has its own Alpha token and TAO/Alpha AMM pool; Alpha token price reflects the market's collective assessment of that subnet's emission share.
  - **Deregistration / pruning**: Process by which low-performing miners (below rank cutoff in the metagraph) are removed from a subnet to free slot capacity for higher-performing registrants.
  - **Emission weight**: A subnet's proportional share of the global daily TAO emission, determined post-dTAO by the TAO depth in that subnet's Alpha token AMM pool.
  - **Metagraph**: The on-chain data structure recording all registered neurons (miners and validators), their stake weights, consensus ranks, emissions allocations, and IP:port endpoint addresses for a given subnet.
  - **Neuron**: A registered participant in a Bittensor subnet, either a miner (produces AI outputs) or a validator (scores outputs); each neuron has a hotkey and coldkey wallet pair.
  - **Nominator/Delegator**: A TAO token holder who delegates stake to a validator neuron, earning a proportional share of that validator's emissions as a delegation reward.
  - **Opentensor Foundation**: The Canadian non-profit organisation founded by Jacob Steeves and Ala Shaabana that develops and maintains the Bittensor protocol, the Subtensor blockchain, and the bittensor Python SDK.
  - **Proof of Intelligence**: Bittensor's core consensus primitive; miners produce AI outputs in response to validator queries; validators score outputs; Yuma Consensus aggregates scores into emissions-determining rankings.
  - **Subnet**: A specialised, independently governed task environment within the Bittensor network, defining an input-output task, an evaluation mechanism, and (post-dTAO) its own Alpha token.
  - **Subtensor**: The Substrate-based blockchain underlying the Bittensor network; analogous to Bitcoin's blockchain but tracking AI output quality scores rather than monetary transactions.
  - **TAO**: The native utility token of the Bittensor network; hard-capped at 21 million; used for staking, subnet registration fees, governance, and as AMM pool reserve asset.
  - **Templar / Covenant-72B**: Subnet 3's distributed pre-training protocol and its flagship output — a 72B-parameter LLM trained permissionlessly across 70+ commodity GPU contributors using DiLoCo-style distributed optimisation, achieving 67.1 MMLU (competitive with Llama 2 70B).
  - **Yuma Consensus**: Bittensor's Byzantine-fault-tolerant score aggregation algorithm; computes trust-weighted averages of validator score matrices; detects and down-weights divergent validators.

  ## Components / Architecture

  Bittensor's architecture comprises several interacting layers:

  - **Subtensor Blockchain**: A Substrate-based blockchain (built with Parity's Polkadot SDK) serves as Bittensor's ledger layer, recording neuron registrations, stake allocations, validator scores, emission distributions, and subnet token AMM pools. It provides consensus via nominated proof-of-stake and processes on-chain governance of protocol parameters. The choice of Substrate rather than an Ethereum-compatible chain enables high transaction throughput necessary for frequent score submissions from thousands of active neurons.
  - **Subnets**: Each subnet is an independently governed task environment defined by an incentive mechanism specification. A subnet creator registers a new subnet by burning TAO, defines the task format (what miners receive as input, what they return as output), designs or selects an automated evaluation mechanism for validator use, and optionally writes custom consensus or scoring logic. As of March 2026, 128 subnets are active, covering text generation, image synthesis, code generation, deepfake detection, financial prediction, protein folding, decentralised storage, speech-to-text, and permissionless LLM pre-training.
  - **Miners**: Neurons that register within a subnet and produce AI outputs in response to validator queries. Miners pay a registration cost (burned TAO) to join a subnet, which limits Sybil attacks. Their performance is continuously benchmarked, and those scoring consistently low are pruned by the network to make room for higher-performing registrants.
  - **Validators**: Neurons that hold stake, query miners, assess output quality against a reference standard or model, and broadcast scores to the chain. Validators are economically incentivised to score accurately because the Yuma Consensus algorithm detects and down-weights validators whose scores deviate persistently from the honest consensus, reducing their future emissions.
  - **Yuma Consensus**: Bittensor's Byzantine-fault-tolerant aggregation algorithm named after Yuma, Arizona. It computes a trust-weighted average of all validator score matrices, identifying and discounting validators whose scoring patterns diverge from the consensus, providing robustness against minority collusion without a trusted third party.
  - **Dynamic TAO (dTAO) and Alpha Tokens**: Each subnet has its own Alpha token and a TAO/Alpha AMM pool. When a staker deposits TAO into a subnet pool, they receive Alpha tokens; the TAO depth in the pool determines the subnet's emission weight in the global schedule. This makes subnet funding a continuous prediction market: stakers profit if the subnet they back produces more emissions than the market-implied share, and lose if it underperforms.
  - **TAO Token**: The native utility token with a hard supply cap of 21 million, deliberately mirroring Bitcoin's supply schedule. The first halving occurred in December 2025, reducing daily emissions from approximately 7,200 TAO to 3,600 TAO. TAO is used for staking (to become a validator or delegator), subnet registration fees, governance voting, and as the reserve asset in all Alpha token AMM pools.
  - **Bittensor Python SDK (bittensor)**: The open-source Python library through which miners and validators interact with the subtensor chain, manage wallets, register neurons, receive queries, and submit scores. It is the primary developer interface for subnet builders.

  ## Use Cases / Major Families

  **1. Subnet 1 — Text Generation / Decentralised LLM API**
  - Original and highest-query-volume subnet; decentralised access to large language models.
  - Validators query LLM-serving miners (open-weight models: Llama 3, Mistral, Qwen, DeepSeek), score response quality using automated metrics and reference-model evaluation.
  - Functions as a decentralised LLM API marketplace where query routing is incentive-driven and miners compete on quality to maximise emissions.
  - Structural advantages vs centralised providers: censorship resistance, no single point of failure, no vendor lock-in, competitive pricing driven by miner competition.
  - Cortext (SN18): higher-tier subnet routing to premium models; uses multi-step evaluation including human feedback-style scoring.

  **2. Subnet 3 — Templar / Distributed LLM Pre-Training (Covenant-72B)**
  - Most technically significant Bittensor achievement as of 2026.
  - DiLoCo-style distributed optimisation: miners train independently on local data shards, periodically synchronise gradients via compressed outer updates (bi-level inner-outer optimisation scheme).
  - Trustless setting: participants are anonymous, may join or leave at any epoch boundary without coordination permission.
  - Result (March 10, 2026): Covenant-72B — 72B parameters, 1.1 trillion tokens, 70+ contributors on commodity internet-connected GPU hardware.
  - MMLU benchmark: 67.1 — competitive with Meta's Llama 2 70B produced by a well-funded centralised AI lab.
  - Demonstrated: economic coordination over the internet can produce frontier-competitive AI at scales previously requiring centralised GPU cluster control worth hundreds of millions of dollars.
  - arxiv paper: "Covenant-72B: Pre-Training a 72B LLM with Trustless Peers Over-the-Internet" (2603.08163).

  **3. Subnet 8 — Financial Prediction (Predict)**
  - Miners produce time-series predictions for financial instruments (equities, crypto, derivatives, economic indicators).
  - Validators score miners against realised outcomes with appropriate lag; ranking directly reflects historical forecasting accuracy.
  - Design: decentralised prediction market where economic signals from stakers reward miners who build genuinely predictive models.
  - Aims to surface proprietary quantitative alpha previously accessible only to well-capitalised hedge funds.

  **4. Subnet 19 — Image Generation (Vision)**
  - Validators submit text prompts; miners return generated images using open-weight diffusion models (Stable Diffusion, FLUX, Kolors).
  - Scoring: automated aesthetic quality metrics (CLIP scores, FID against reference distributions), NSFW filtering, prompt adherence.
  - Decentralised alternative to centralised image generation APIs (Midjourney, DALL-E, Stability AI); any operator can add GPU capacity and earn emissions.

  **5. Subnet 21 — Decentralised Storage (FileTAO)**
  - Miners store encrypted data chunks redundantly across independent storage nodes.
  - Validators issue cryptographic proofs-of-retrievability challenges; miners must return correct data chunks within a time limit.
  - Emissions reward reliable long-term data availability; miners who fail challenges lose rank and are eventually pruned.
  - Decentralised alternative to centralised cloud object storage (S3, Azure Blob) with on-chain verifiable storage guarantees.

  **6. Subnet 25 — Scientific Computing / Protein Structure**
  - Miners run protein structure prediction tasks using AlphaFold 2 variants, ESMFold, and energy minimisation tools (Rosetta, OpenMM).
  - Validators score predicted structures against experimental structures in PDB using TM-score and GDT_TS metrics.
  - Extends Bittensor's incentive model into [[Bioinformatics]]; rewards spare GPU capacity contributing to scientific computing tasks without a centralised allocation authority like BOINC or Folding@Home.
  - Potential future integration with genomics, molecular docking, and materials science simulation tasks.

  **7. Decentralised AI Inference Marketplace (General Model)**
  - Bittensor's broader ambition: replace API calls to centralised AI providers (OpenAI, Anthropic, Google) with a decentralised marketplace where any model, from any provider, competes for quality on any task.
  - Economic model: requesters pay in TAO (or Alpha tokens) for inference; miners earn emissions proportional to quality rank; validators earn for accurate scoring; stakers earn for backing high-performing subnets.
  - 128 active subnets as of March 2026 collectively cover: text, code, image, video, speech, scientific simulation, prediction, storage, and compute allocation.

  **8. Institutional Investment Products**
  - Grayscale Bittensor Trust (GTAO): listed NYSE January 2026; S-1 filed with SEC for spot ETF conversion.
  - Safello Bittensor Staked TAO ETP: listed SIX Swiss Exchange 2025.
  - $43M+ real AI usage revenue generated in Q1 2026 from subnet query fees.
  - Institutional staking: 19% of total stake; $691M staked by institutional entities including Yuma.

  ## Academic Context

  - **Bitcoin incentive design (Nakamoto, 2008)**: The core intellectual foundation; demonstrates that financially incentivised distributed systems can achieve Byzantine-fault-tolerant consensus without trusted coordinators. Bittensor generalises from hash-rate-based proof-of-work to quality-of-ML-output proof of intelligence.
  - **Byzantine fault tolerance (Lamport, Shostak & Pease, 1982)**: Formal foundation for the fault tolerance guarantees required by both the Subtensor blockchain and the Yuma Consensus algorithm; defines the conditions under which a distributed system can reach consensus with up to f < n/3 dishonest participants.
  - **Mechanism design and peer assessment**: Myerson's revenue equivalence theorem and the Dasgupta-Maskin dominant-strategy mechanism framework underpin the theoretical incentive-compatibility properties claimed for Yuma Consensus under honest-majority assumptions; the peer-evaluation design is related to peer prediction and information elicitation without verification (Witkowski & Parkes, 2012).
  - **Federated learning precursors (McMahan et al., 2017)**: Communication-Efficient Learning of Deep Networks from Decentralized Data introduced FedAvg; Bittensor's distributed training subnets implement an economically incentivised variant where gradient synchronisation is mediated by token rewards rather than coordinated by a central parameter server.
  - **DiLoCo (Douillard et al., 2023)**: Distributed Low-Communication Training of Language Models demonstrated that LLMs can be trained across data-centre-separated compute nodes with infrequent gradient synchronisation using bi-level outer-inner optimisation, maintaining efficiency comparable to synchronous data-parallel training. Covenant-72B (2026) extends DiLoCo to a fully trustless permissionless setting where participants are anonymous and may join or leave at any epoch boundary.
  - **Covenant-72B paper (Templar Research, 2026)**: "Covenant-72B: Pre-Training a 72B LLM with Trustless Peers Over-the-Internet" (arXiv 2603.08163); presents the protocol design, security analysis, and benchmark results for the first frontier-scale permissionless LLM pre-training run.
  - **Automated Market Makers (Angeris & Chitra, 2020)**: The dTAO subnet Alpha token pools implement constant-product AMM mechanics derived from Uniswap v2; the theoretical properties (price manipulation resistance, liquidity provision incentives) analysed by Angeris & Chitra apply directly to Bittensor's subnet emission allocation mechanism.
  - **Risk analysis (arXiv 2603.29751, 2026)**: "Common Risk Factors in Decentralized AI Subnets" identifies systematic risks in Bittensor-style networks: (1) incentive gaming (miners optimising for scoring proxy rather than true task quality), (2) validator collusion (coordinated dishonest scoring to extract emissions), (3) quality Goodharting (evaluation metric gamification), and (4) subnet specialisation races driving homogenisation. Analogises these to factor risks in quantitative finance.
  - **Substrate / Polkadot (Parity Technologies, 2021)**: Bittensor's Subtensor blockchain is built on the Substrate SDK, the same modular blockchain framework used by Polkadot parachains. This choice enables potential future interoperability with the Polkadot ecosystem's 100+ parachains.
  - **Key researchers**: Jacob Steeves and Ala Shaabana (founders, Opentensor Foundation); Opentensor Foundation engineering team (Const Zheng and others) responsible for Substrate integration, dTAO AMM model design, and Yuma Consensus implementation.

  ## Current Landscape (2026)

  - **Network scale (March 2026)**:
    - 128 active subnets covering AI tasks from text generation to protein folding.
    - 100,000+ on-chain accounts; millions of processed token transactions.
    - Projected to expand to 256 subnets by late 2026.
  - **TAO token economics (post-halving)**:
    - First halving: December 2025; daily emissions reduced from ~7,200 to ~3,600 TAO.
    - Hard supply cap: 21 million TAO (mirrors Bitcoin schedule).
    - Combined ecosystem subnet Alpha token market cap: approximately $1.5 billion (March 2026), driven partly by NVIDIA CEO Jensen Huang's public endorsement.
    - Total TAO market cap: approximately $2.7 billion (June 2026 estimates).
  - **Institutional adoption**:
    - Grayscale Bittensor Trust (GTAO): listed NYSE January 2026; S-1 filed for spot ETF conversion pending SEC approval.
    - Safello Bittensor Staked TAO ETP: listed SIX Swiss Exchange 2025; first regulated staked-TAO investment product in Europe.
    - Institutional staking: 19% of total stake; $691M staked by entities including Yuma and Grayscale.
    - Network generated $43M+ real AI usage revenue in Q1 2026.
  - **Covenant-72B milestone (March 2026)**:
    - 72B-parameter LLM trained permissionlessly on Subnet 3 (Templar) by 70+ anonymous contributors.
    - 1.1 trillion tokens of training data; commodity internet-connected GPU hardware only.
    - MMLU benchmark: 67.1 — competitive with Meta's Llama 2 70B (a centralised, billion-dollar AI lab product).
    - Largest permissionless decentralised LLM pre-training run in history.
  - **Competitive ecosystem**:
    - Direct competitors: io.net (decentralised GPU cluster marketplace), Render Network (GPU rendering and AI compute), Akash Network (decentralised cloud compute).
    - Key distinguisher from competitors: Bittensor has an integrated ML-quality evaluation and economic incentive layer; competitors are compute rental markets without quality-scoring mechanisms.
    - Unlike federated learning frameworks (Flower, PySyft): Bittensor uses financial incentives rather than privacy-motivated coordination and has no central parameter server.
  - **Regulatory status (June 2026)**:
    - UK FCA classifies TAO as an unregulated cryptoasset; operators may participate as miners or validators without financial services authorisation, though selling TAO as an investment may require FCA registration.
    - US SEC has not provided formal guidance on TAO classification; Grayscale's GTAO ETF conversion S-1 indicates SEC review is ongoing.
    - EU MiCA (effective December 2024): TAO likely classified as a utility token or cryptoasset; specific compliance obligations for subnet operators and exchanges in EU jurisdiction remain under analysis.
  - **Open source development**:
    - All Bittensor protocol code is open-source on GitHub under the MIT licence.
    - Opentensor Foundation coordinates core protocol development; community developers contribute subnet incentive mechanisms, validator tooling, and miner optimisation software.
    - Bittensor Improvement Proposals (BIPs) are the protocol governance mechanism for proposing and ratifying changes to the Subtensor blockchain parameters.


  ## UK Context

  Bittensor does not originate in the UK and has no primary UK institutional affiliation; the Opentensor Foundation is based in Canada, and the project is globally distributed. However, several UK-relevant dynamics are observable:

  **Regulatory context**: The UK Financial Conduct Authority (FCA) classifies TAO as an unregulated cryptoasset, and the UK's evolving cryptoasset regulatory framework (which draws on but diverges from the EU MiCA regulation) creates a relatively permissive environment for participation as a validator or miner. The UK AI Opportunities Action Plan (January 2025) signalled government ambition to position Britain as an AI hub, which aligns philosophically with open AI infrastructure goals though the plan does not specifically address decentralised AI protocols.

  **Academic interest**: UK researchers in AI safety, AI governance, and decentralised systems have begun to engage with Bittensor as a case study for incentive design in multi-agent AI systems. The Oxford Internet Institute and Imperial College London's Centre for Cryptocurrency Research and Engineering (IC3) have studied blockchain-based AI coordination mechanisms that share structural features with Bittensor's subnet model.

  **Operator and developer activity**: Multiple UK-based cryptocurrency firms and AI startups have registered subnets or deployed validators on the network, attracted by the UK's technical talent pool and the regulatory clarity following the FCA's May 2024 cryptoasset registration decisions. Northern England university HPC clusters (Leeds, Manchester, Sheffield) have been explored as commodity compute providers to subnet miners given their spare capacity outside peak academic usage hours.

  **Investment ecosystem**: UK venture capital firms active in the intersection of AI and Web3 — including Founders Fund London, Draper Esprit, and several family office allocators — have taken positions in TAO as part of broader decentralised AI theses, and Grayscale's GTAO trust is accessible to UK professional investors.

  ## Future Directions (2026-2030)

  - **Expansion to 256 subnets**: The network's governance has approved roadmap items to double the active subnet count, which will expand the range of AI tasks incentivised and increase competitive pressure that drives model quality improvements within each task vertical.
  - **Cross-subnet composability**: Proposed protocol upgrades will allow subnet outputs to be consumed as inputs by other subnets, enabling multi-step AI pipelines where, for example, a retrieval subnet feeds context into a generation subnet, and the quality evaluation propagates through the composition.
  - **On-chain model provenance and watermarking**: Integration with cryptographic model-fingerprinting schemes (inspired by IMATAG and similar watermarking research) will allow Bittensor to attach verifiable provenance to model outputs, addressing AI attribution regulatory requirements emerging under the EU AI Act and proposed UK AI labelling frameworks.
  - **Federated privacy-preserving subnets**: Subnets incorporating differential privacy and secure multi-party computation are under development, targeting use cases such as medical AI, financial data analysis, and enterprise data-sensitive workloads that require verifiable privacy guarantees in addition to the network's existing economic integrity guarantees.
  - **Integration with Polkadot parachain ecosystem**: Substrate compatibility with the Polkadot relay chain could enable Bittensor subnets to interoperate with Polkadot's 100+ parachains, unlocking cross-chain DeFi liquidity, decentralised identity, and supply-chain provenance applications that combine AI inference with blockchain verifiability.
  - **Frontier-scale multi-subnet training**: The success of Covenant-72B is expected to motivate more ambitious collaborative training runs targeting 200B+ parameter models, exploiting improvements in the DiLoCo outer-optimisation protocol and more sophisticated gradient compression techniques being developed within the Templar subnet community.

  ## Research & Literature

  1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. *Bitcoin.org whitepaper*.
  2. Steeves, J. & Shaabana, A. (2020). Bittensor: A Peer-to-Peer Intelligence Market. *Opentensor Foundation whitepaper*. https://bittensor.com/whitepaper
  3. Angeris, G. & Chitra, T. (2020). Improved Price Oracles: Constant Function Market Makers. *Proceedings of the 2nd ACM Conference on Advances in Financial Technologies*.
  4. Dasgupta, P. & Maskin, E. (2000). Efficient Auctions. *Quarterly Journal of Economics*, 115(2), 341-388.
  5. Myerson, R.B. (1981). Optimal Auction Design. *Mathematics of Operations Research*, 6(1), 58-73.
  6. Lamport, L., Shostak, R. & Pease, M. (1982). The Byzantine Generals Problem. *ACM Transactions on Programming Languages and Systems*, 4(3), 382-401.
  7. McMahan, B. et al. (2017). Communication-Efficient Learning of Deep Networks from Decentralized Data. *Proceedings of the 20th International Conference on Artificial Intelligence and Statistics (AISTATS)*.
  8. Douillard, A. et al. (2023). DiLoCo: Distributed Low-Communication Training of Language Models. *arXiv*, 2311.08105.
  9. Lin, Y. et al. (2020). Don't Decay the Learning Rate, Increase the Batch Size. *International Conference on Learning Representations (ICLR)*.
  10. Goodfellow, I., Bengio, Y. & Courville, A. (2016). *Deep Learning*. MIT Press.
  11. Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. *Ethereum Yellow Paper*.
  12. Parity Technologies (2021). Substrate: A Framework for Building Blockchains. *Polkadot documentation*.
  13. Raffel, C. et al. (2020). Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. *Journal of Machine Learning Research*, 21, 1-67.
  14. Hendrycks, D. et al. (2020). Measuring Massive Multitask Language Understanding (MMLU). *arXiv*, 2009.03300.
  15. Meta AI (2023). Llama 2: Open Foundation and Fine-Tuned Chat Models. *arXiv*, 2307.09288.
  16. Templar Research (2026). Covenant-72B: Pre-Training a 72B LLM with Trustless Peers Over-the-Internet. *arXiv*, 2603.08163.
  17. CoinGecko Research (2025). Top 5 Bittensor Subnets: A Deep Dive into the dTAO Ecosystem. *CoinGecko Learn*, https://www.coingecko.com/learn/top-bittensor-subnets-dtao
  18. OAK Research (2025). Bittensor (TAO) and Dynamic TAO (dTAO): an upgrade that changes everything? *OAK Research Analyses*, https://oakresearch.io/en/analyses/fundamentals/bittensor-tao-dynamic-tao-dtao-upgrade-changes-everything
  19. Grayscale Research (2025). Bittensor on the Eve of the First Halving. *Grayscale Research Reports*, https://research.grayscale.com/reports/bittensor-on-the-eve-of-the-first-halving
  20. CryptoTimes (2026). Bittensor (TAO) 2026 Guide: Decentralized AI Marketplace, Tokenomics, Subnets & How It Works. https://www.cryptotimes.io/learn/bittensor-tao-guide/
  21. CoinDesk (2026). Bittensor ecosystem tokens' value hits $1.5 billion as TAO rockets 90% in March. *CoinDesk*, https://www.coindesk.com/tech/2026/03/25/bittensor-ecosystem-tokens-value-hit-usd1-5-billion-as-jensen-huang-endorsement-supports-tao-rally
  22. Cryptonews (2025). Bittensor Subnets Explained: Decentralized AI, Subnet Tokens, and the Role of TAO. *CryptoNews*, https://cryptonews.net/news/altcoins/32669842/
  23. IBS Validator (2025). IBS Insight — Bittensor (TAO). *Medium*, https://ibsvalidator.medium.com/ibs-insight-bittensor-tao-24209f44cfb2
  24. Phemex Research (2026). Bittensor Covenant-72B Explained: Why Decentralized AI Training Matters for TAO. https://phemex.com/blogs/bittensor-covenant-72b-decentralized-ai-tao
  25. arXiv Research (2026). Common Risk Factors in Decentralized AI Subnets. *arXiv*, 2603.29751.
  26. Yellow.com Research (2026). Bittensor Built A $2.7B Decentralized AI Market Nobody Noticed. https://yellow.com/research/bittensor-decentralized-ai-market-2-7-billion
  27. Itokenly (2025). Bittensor Explained: Decentralized AI Network and TAO Crypto. https://itokenly.com/articles/bittensor-explained-decentralized-ai-network-tao-crypto

- ### Provenance
  - sources:: https://www.cryptotimes.io/learn/bittensor-tao-guide/, https://www.coingecko.com/learn/top-bittensor-subnets-dtao, https://www.coindesk.com/tech/2026/03/25/bittensor-ecosystem-tokens-value-hit-usd1-5-billion-as-jensen-huang-endorsement-supports-tao-rally, https://arxiv.org/pdf/2603.08163, https://research.grayscale.com/reports/bittensor-on-the-eve-of-the-first-halving, https://bittensor.com/whitepaper, https://www.ainvest.com/news/bittensor-tao-gains-institutional-adoption-decentralized-ai-framework-expands-2604/, https://arxiv.org/pdf/2603.29751
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

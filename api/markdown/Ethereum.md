### Definition

![Image](./assets/3fe8a20a55cfa025f4f59f7b04483196d7f28708.png)

- ### OntologyBlock
  id:: Ethereum
  - ontology:: true
  - public-access:: true
  - term-id:: BC-9949
  - preferred-term:: Ethereum
  - source-domain:: bc
  - owl:class:: bc:Ethereum
  - status:: draft
  - definition:: A decentralized blockchain platform enabling smart contracts and decentralized applications (dApps) through its Turing-complete programming environment. Transitioned from Proof-of-Work to Proof-of-Stake consensus via "The Merge", featuring account-based model and EVM execution environment.

### Relationships
- instance-of:: [[BlockchainNetwork]]
- instance-of:: [[Cryptocurrency]]

![Image](./assets/3fe8a20a55cfa025f4f59f7b04483196d7f28708.png)

![Image](./assets/3fe8a20a55cfa025f4f59f7b04483196d7f28708.png)

### Gas Fees
- Ethereum has a significant barrier to entry because of high fees to use the network. The system is Turing complete, able to programmatically replicate any other computational system. This includes endless loops in code, so it is trivial to lock up the computational bandwidth of the whole system in a smart contract commitment through a web wallet.
	- To mitigate this existential ‘denial of service attack’, the ‘gas’ system demands that users spend some of their locked-up value to operate on the network. In this way, a transaction loop would quickly erode the available gas and stop looping. As the popularity of the system has grown, so too have the gas fees. It can [sometimes cost](https://twitter.com/Blockworks_/status/1521071340517830657) over £10,000 to do a single transaction, though it is typically a few tens of pounds. Appallingly, if the user pitches their mining fee offer too low, then the money gets spent anyway! [A website](https://fees.wtf/#/) just plucks random Ethereum addresses out of the aether to show you the level of this expense for participants. People can even [buy NFTs](https://opensea.io/collection/fees-wtf-nft?search[sortAscending]=false&search[sortBy]=PRICE) of the worst examples of these, as ‘tokens’, wasting more money. This is a huge problem for potential uses of the network.
- #### Ether Ultra Hard Money Narrative
	- Part of the challenge Ethereum faces is wrapped up with its complex token emission schedule. This is the rate at which tokens are generated and ‘burnt’ or destroyed in the network. The total supply of tokens is uncertain, and both emission and burn schedules are regularly tinkered with by the project. The changes to the rate at which ETH are generated.
	
	  ![Image](./assets/3fe8a20a55cfa025f4f59f7b04483196d7f28708.png)
	- The rate of token generation has changed unpredictably over time. Rights requested.
	- In addition, a recent upgrade (EIP-1559) results in tokens now being burnt at a higher rate than they are produced, deliberately leading to a diminishing supply. In theory, this increases the value of each ETH on the network at around 1% per year. It’s very complex, with impacts on transaction fees, waiting time, and consensus security, as examined by Liu et al.[[liu2022empirical]]. Additionally, there is now talk (by [Buterin](https://time.com/6158182/vitalik-buterin-ethereum-profile/), the creator of Ethereum) of extending this burn mechanism [further into the network](https://ethresear.ch/t/multidimensional-eip-1559/11651).
- Ethereum was designed from the beginning to move to a ‘proof of stake’ model where token holders underpin network consensus through complex automated voting systems based upon their token holding. This is now called [Ethereum Consensus Layer](https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/). This recent ‘Merge’ upgrade has reduced the carbon footprint of the network, a laudable thing, though it seems the GPUs and data centres have just gone on to be elsewhere. It has not lowered the cost to users nor improved performance. As part of the switching roadmap, users were asked to lock up 32 ETH tokens each (a substantial allocation of capital). In total, there are around 14 million of these tokens, and it is those users who now control the network. This money is likely stuck on the network until at least 2024, a significant delay when compared to the original promises.
- This means that proof of stake has problems in that the majority owners ‘decide’ the truth of the chain to a degree and must by design have the ability to override prior consensus choices. Remember that these users are now trapped in their positions. Four major entities now control the rules of the chain and have already agreed to censor certain banned addresses. Proof of stake is probably inherently broken[[poelstra2015stake]]. This has [f](https://notes.ethereum.org/@djrtwo/risks-of-lsd)or malicious actors who have sufficient control of the existing history of the chain, thought to be [in the region of $50M](https://twitter.com/MTorgin/status/1521433474820890624)[[mackinga2022twap]]. Like much of the rest of ‘crypto’, the proposed changes will concentrate decisions and economic rewards in the hands of major players, early investors, and incumbents.
- ![image.png](../assets/image_1742487476628_0.png)
- This is a far cry from the stated aims of the technology. The move to proof of stake has recently earned it the [MIT breakthrough technology award](https://www.technologyreview.com/2022/02/23/1044960/proof-of-stake-cryptocurrency/), despite not being complete (validators cannot yet sell their voting stakes). It’s clearly a technology that is designed to innovate at the expense of predictability. This might work out very well for the platform, but right now the barrier to participation (in gas fees) is so high that we do not intend for Ethereum to be in scope as a method for value transfer within metaverses.
- #### Inherent Weaknesses
	- Ethereum faces a unique dilemma, often overshadowed by its technological capabilities. Unlike Bitcoin (BTC), which has solidified its role as a stable and reliable store of value, Ethereum’s value proposition is more complex and, ultimately, paradoxical. The following points elaborate on this conundrum:
		- **Lack of Monetary Certainty:** Ethereum’s mutable supply schedule and governance model introduce a level of uncertainty not found in Bitcoin.
		- **Equity-like Characteristics:** Ethereum acts more like a share in a semi-decentralised corporation than a straightforward asset, deriving its value from expected future transaction fees.
	- These attributes lead to a value paradox that is two-fold:
		- **Fee Dilemma:** High transaction fees, while beneficial for Ethereum’s perceived value, deter usage and drive decentralised finance (DeFi) applications to other platforms.
		- **Scalability Trap:** Attempts to scale the platform and lower fees would, counterintuitively, reduce Ethereum’s intrinsic value by decreasing its future cash flows.
	- This presents a catch-22 situation where Ethereum’s value is fundamentally limited by its own economic model. If the asset’s value drops significantly, it could undermine the security of the entire platform, making it less reliable for settling large transactions.
	- In the long run, this creates a feedback loop that could, theoretically, push Ethereum’s value towards zero. This issue casts a shadow over Ethereum’s long-term viability, presenting a challenge that goes beyond mere technical scalability.


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

iri:: http://narrativegoldmine.com/spatial-computing#Security
uri:: urn:visionclaw:concept:spatial-computing:security
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:security
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Security
content-hash:: sha256-12-9ad2fe5466fe
legacy-term-id:: AI-0071
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - The protection of AI systems and their components against unauthorized access, manipulation, disruption, or exploitation, encompassing confidentiality, integrity, and availability of data, models, and infrastructure throughout the AI lifecycle.
- ### Semantic Classification
  - owl-class:: spatial-computing:Security
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - The protection of AI systems and their components against unauthorized access, manipulation, disruption, or exploitation, encompassing confidentiality, integrity, and availability of data, models, and infrastructure throughout the AI lifecycle.
  - ### **VMesh**
		- [VMesh](https://bennyguo.github.io/vmesh/) - //bennyguo.github.io/vmesh/ and formatting as requested:
  -   Vmesh is a programmable service mesh built with Cilium, focusing on enhanced visibility, control, and security for microservice architectures.
  -   It allows users to programme the data plane of their service mesh using WebAssembly (Wasm) filters, offering flexibility in customising network traffic processing.
  -   Vmesh aims to simplify the process of creating and managing service meshes, particularly by reducing the complexity associated with traditional sidecar proxies.
  -   The system provides tools to observe and analyse network traffic flowing through the mesh, providing insights into the performance and behaviour of services.
  -   Users can apply granular policies to control access between services, ensuring a strong security posture and preventing unauthorised communication.
  -   Vmesh integrates with existing Kubernetes environments and leverages Cilium's eBPF-based networking for performance and efficiency.
  -   The platform offers a range of features, including traffic management, observability, security policies, and extensibility through Wasm filters.
  -   Vmesh supports customisable extensions for various use cases, such as authentication, authorisation, and request manipulation.
  -   The project emphasises developer-friendliness, providing simple APIs and tools to facilitate the development and deployment of service mesh applications.
  -   Vmesh aims to lower the operational overhead of running a service mesh, by streamlining the configuration and management processes.
  - ### Cyberattacks and Fraud
		- AI can be used to create more sophisticated phishing attacks, malware, and other forms of cybercrime. The "2024 State of AI Security Report" found significant security risks in production environments across major cloud platforms.
		- ### Legal Adjustments
			- To accommodate the extensive use of AI surveillance technologies, France has enacted several legal modifications. These changes are aimed at broadening the scope of data collection and analysis, allowing for more comprehensive security measures during the Olympics. Key legal adjustments include:
				- **Expansion of Surveillance Powers:** Legislation has been passed to allow for increased electronic surveillance, including wiretapping, data mining, and the use of AI for real-time data analysis.
				- **Data Retention Policies:** New laws permit the extended retention of collected data, which is essential for the training and improvement of AI systems.
				- **Transparency and Accountability:** Despite the legal changes, there are significant concerns regarding the transparency of data usage and the accountability of both the government and private entities involved. The extent to which these measures comply with the European Union's General Data Protection Regulation (GDPR) is a major point of contention.
			- ### Transparency Issues
				- Transparency is a critical issue in the deployment of AI surveillance technologies:
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.
			- **Event Detection:** Identifies potential security threats and unusual activities, allowing for rapid response by security personnel.
  - ## Build vs Buy Dynamics
		- Shift from reliance on third-party software (80% in 2023) to in-house solutions (47% in 2024).
		- In-house solutions are driven by security and data interaction requirements.
		- Anticipated long-term oscillation between in-house and third-party solutions as vertical and functional applications evolve.
		- #### **Key Implementation Notes**
			- **Error Handling**:
				- Ensure fallback mechanisms for failed payments or data access.
				- Use retry strategies for communication with external components.
			- **Privacy**:
				- Adhere strictly to user permissions with Solid Pods.
			- **Security**:
				- Use robust identity verification and cryptographic signatures for transactions.
			- **Scalability**:
				- Design APIs and logging systems to handle high throughput.
  - ### In-Camera VFX & Telepresence:
		- The proposed framework can be applied to film production and virtual production workflows. By leveraging the world's most powerful decentralized computing network (Bitcoin) and cryptographically assured endpoints, the system can enable scale and security without high cost. New tooling in the space allows for microtransactions and micropayments, radically improving creative microtask workflows. The unified digital backend is optimized for flows of money, trust, and digital objects, offering a new area for virtual production.
						- ### Safeguarding
							- Implementing security measures and user protection mechanisms.
  - ### IOS18 Security and Privacy
		- [Thread by Matthew Green](https://threadreaderapp.com/thread/1800291897245835616.html?)
			- Apple, unlike most other mobile providers, has traditionally done a lot of processing on-device. For example, all of the machine learning and OCR text recognition on Photos is done right on your device. 
			  The problem is that while modern phone “neural” hardware is improving, it’s not improving fast enough to take advantage of all the crazy features Silicon Valley wants from modern AI, including generative AI and its ilk. This fundamentally requires servers.
			- But if you send your tasks out to servers in “the cloud” (god using quotes makes me feel 80), this means sending incredibly private data off your phone and out over the Internet. That exposes you to spying, hacking, and the data hungry business model of Silicon Valley.
			- The solution Apple has come up with is to try to build secure and trustworthy hardware in their own data centers. Your phone can then “outsource” heavy tasks to this hardware. Seems easy, right? Well: here’s the blog post.
			- [**Blog**](https://security.apple.com/blog/private-cloud-compute/) Private Cloud Compute: A new frontier for AI privacy in the cloud - Apple Security Research**Secure and private AI processing in the cloud poses a formidable new challenge. To support advanced features of Apple Intelligence with larger foundation models, we created Private Cloud Compute (PCC)
			- TL;DR: it is not easy. Building trustworthy computers is literally the hardest problem in computer security. Honestly it’s almost the only problem in computer security. But while it remains a challenging problem, we’ve made a lot of advances. Apple is using almost all of them.
			- The first thing Apple is doing is using all the advances they’ve made in building secure phones and PCs in their new servers. This involves using Secure Boot and a Secure Enclave Processor (SEP) to hold keys. They’ve presumably turned on all the processor security features.
			- Then they’re throwing all kinds of processes at the server hardware to make sure the hardware isn’t tampered with. I can’t tell if this prevents hardware attacks, but it seems like a start.
			- They also use a bunch of protections to ensure that software is legitimate. One is that the software is “stateless” and allegedly doesn’t keep information between user requests. To help ensure this, each server/node reboot re-keys and wipes all storage.
			- A second protection is that the operating system can “attest” to the software image it’s running. Specifically, it signs a hash of the software and shares this with every phone/client. If you trust this infrastructure, you’ll know it’s running a specific piece of software.
			- Of course, knowing that the phone is running a specific piece of software doesn’t help you if you don’t trust the software. So Apple plans to put each binary image into a “transparency log” and publish the software.
			- Security researchers will get *some code* and a VM they can use to run the software. They’ll then have to reverse-engineer the binaries to see if they’re doing unexpected things. It’s a little suboptimal.
			- When your phone wants to outsource a task, it will contact Apple and obtain a list of servers/nodes and their keys. It will then encrypt its request to all servers, and one will process it. They’re even using fancy anonymous credentials and a third part relay to hide your IP.
			- Ok there are probably half a dozen more technical details in the blog post. It’s a very thoughtful design. Indeed, if you gave an excellent team a huge pile of money and told them to build the best “private” cloud in the world, it would probably look like this.
			- But now the tough questions. Is it a good idea? And is it as secure as what Apple does today? And most importantly:
			- I admit that as I learned about this feature, it made me kind of sad. The thought that was going through my head was: this is going to be too much of a temptation. Once you can “safely” outsource tasks to the cloud, why bother doing them locally. Outsource everything!
			- As best I can tell, Apple does not have explicit plans to announce when your data is going off-device for to Private Compute. You won’t opt into this, you won’t necessarily even be told it’s happening. It will just happen. Magically. I don’t love that part.
			- Finally, there are so many invisible sharp edges that could exist in a system like this. Hardware flaws. Issues with the cryptographic attestation framework. Clever software exploits. Many of these will be hard for security researchers to detect. That worries me too. 18/
			- Wrapping up on a more positive note: it’s worth keeping in mind that sometimes the perfect is the enemy of the really good.
			- In practice the alternative to on-device is: ship private data to OpenAI or someplace sketchier, where who knows what might happen to it.
			- And of course, keep in mind that super-spies aren’t your biggest adversary. For many people your biggest adversary is the company who sold you your device/software. This PCC system represents a real commitment by Apple not to “peek” at your data. That’s a big deal.
			- In any case, this is the world we’re moving to. Your phone might seem to be in your pocket, but a part of it lives 2,000 miles away in a data center. As security folks we probably need to get used to that fact, and do the best we can to make sure all parts are secure.
  - They are sitting on a huge cash war chest and can effectively buy their way through and out of the coming battles around ip like the NYT court case.
  - Biding their time waiting for local inferencing that leverages strong legacy media buy in might be a great play. Only the cost to their mind share of talent might be an issue.
  - Apple are innovating in core ML research to support large language models.
  - They are developing new techniques for data management between flash memory and DRAM, crucial for running larger models on devices with limited memory.
  - The research also reveals significant speed improvements, with 4-5 times faster processing on CPUs and 20-25 times on GPUs for models up to twice the size of the available DRAM. These advancements could lead to a wider adoption of these technologies,
  - [Paper page
		- LLM in a flash: Efficient Large Language Model Inference with Limited Memory (huggingface.co)](https://huggingface.co/papers/2312.11514) [[Hardware and Edge]]
  - [Apple wants AI to run directly on its hardware instead of in the cloud | Ars Technica](https://arstechnica.com/apple/2023/12/apple-wants-ai-to-run-directly-on-its-hardware-instead-of-in-the-cloud/) [[Hardware and Edge]]
  - HUGS: Human [[Gaussian splatting and Similar]]
  - [Apple Machine Learning Research](https://machinelearning.apple.com/research/hugs)
  - Apple presents [Paper page
  - Speculative Streaming: Fast LLM Inference without Auxiliary Models (huggingface.co)](https://huggingface.co/papers/2402.11131):
  - Speculative decoding is a prominent technique to speed up the inference of a large target language model based on predictions of an auxiliary draft model. While effective, in application-specific settings, it often involves fine-tuning both draft and target models to achieve high acceptance rates. As the number of downstream tasks grows, these draft models add significant complexity to inference systems. We propose Speculative Streaming, a single-model speculative decoding method that fuses drafting into the target model by changing the fine-tuning objective from next token prediction to future n-gram prediction. Speculative Streaming speeds up decoding by 1.8
  - 3.1X in a diverse set of tasks, such as Summarization, Structured Queries, and Meaning Representation, without sacrificing generation quality. Additionally, Speculative Streaming is parameter-efficient. It achieves on-par/higher speed-ups than Medusa-style architectures while using ~10000X fewer extra parameters, making it well-suited for resource-constrained devices.
  - ### BitVM
		- [BitVM](https://bitvm.org/) is a new paradigm that enables arbitrary program execution on Bitcoin, combining Turing-complete expressiveness with the security of Bitcoin consensus.
  - ## Advanced Features (Optional)
		- Expand upon the basic wallet functionality by exploring advanced features such as:
			- Supporting transactions of multiple ecash denominations.
			- Implementing a withdrawal feature to convert ecash back into Bitcoin.
			- Adding multisig capabilities for enhanced security.
  - ## AI Ethics and Security
		- ### Security and Privacy Concerns
			- **AI Model Hacking**: Discussions on potential security breaches and privacy issues with AI models ([Reddit Discussion](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)).
  - # What we can expect
  - The potential of AI to dominate warfare in the next decade, exacerbating issues of disinformation and misinformation.
  - The accessibility of AI tools for creating realistic content, enhancing the capabilities of bad actors in misinformation campaigns.
  - The critical need for investment in data infrastructure and preparation to counter the threats posed by AI in warfare.
  - The concept of deterrence in military thinking and how it might evolve with the advent of AI technologies.
  - The importance of data as a new form of ammunition in AI-driven warfare.
  - The mission of the speaker and like-minded technologists to leverage AI for improving national security and maintaining global stability.
  - The urgent call for more technologists to understand the critical nature of the current era and commit to supporting national security efforts.
  - Swarms of lethal drones equipped with facial recognition technology.
  - Unmanned armed robots that are nearly impossible to defeat.
		- {{video https://www.youtube.com/watch?v=KX0ji1sAXl8}}
  - Autonomous fighter jets capable of supersonic speeds and enduring greater gravitational forces than human pilots.
  - Cyberattacks aimed at disabling critical port infrastructure.
  - Disinformation campaigns and deepfakes that can manipulate presidential elections.
  - Foreign adversaries capable of disabling satellites, impairing global surveillance and communication.
  - ### Postulated Bad Actors
		- Despite the technical nature of the outage, there were concerns about potential exploitation:
		- **Potential Exploitation**: CrowdStrike CEO George Kurtz highlighted that "bad actors will try to exploit events like this," underscoring the persistent challenges in cybersecurity, especially with Microsoft systems ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).
  - ## Broader Implications for Cyber Security
  - ##### Glue
		- Better enterprise security integration
		- Larger environments, potential for breakouts in the same space. Workshop capable
		- 3D object support, screen sharing, some collaborative tools
		- Apply for a license
		- Fairly basic graphics
		- Basic avatars
		- Quest and PC
		- Writing and gestures supported
		- Mac support
  - #### THe TrUTh iS OuT ThERe
		- This was [[Anthropic Claude]] responding to a research formatted query about 'conspiracy theories' found online.
		- ![image.png](assets/image_1719001668969_0.png){:width 600}
		- "Open source response"
			- CIA/MI5 Hacking Smart Devices
				- **Verdict:** Partly True. The CIA and MI5 have been known to engage in surveillance activities involving internet-connected devices through programs like Weeping Angel. This program was designed to hack into Samsung smart TVs, but it's important to note that the extent of this capability and its current status are classified.
			- CIA Infecting Car Control Systems
				- **Verdict:** Partly True. Vault 7 revealed a range of hacking tools developed by the CIA, including those capable of exploiting vulnerabilities in modern car systems. However, there's no concrete evidence to suggest that the CIA has used these tools to remotely take control of cars.
			- Tech Companies Providing NSA with Zero-Day Vulnerabilities
				- **Verdict:** True. Documents leaked by Edward Snowden revealed that tech companies like Microsoft did provide advance warnings about zero-day vulnerabilities to the NSA before disclosing them to the public. This was part of a broader program aimed at improving national cybersecurity and giving government agencies an early warning system.
			- NSA Breaking Tor Networks
				- **Verdict:** Partly True. While the NSA has been involved in efforts to compromise Tor, there's no conclusive evidence that they have successfully broken the network or can identify users with certainty. However, it is known that various intelligence agencies have attempted to exploit vulnerabilities in Tor.
			- NSA Intercepts Devices and Installs Malware Chips
				- **Verdict:** Partly True. The ANT/TAO Catalog, leaked by Edward Snowden in 2013, reveals the NSA's capabilities for intercepting and altering electronic devices, including installing malware or backdoors before they are delivered to customers. However, this catalog primarily focuses on exploiting vulnerabilities in targeted surveillance operations rather than mass production of compromised devices.
			- American-Made Electronics Allow Access via Radio Frequencies
				- **Verdict:** Partly True. The Cottonmouth-I and SURLYSPAWN projects, as mentioned in the Snowden leaks, involve the use of radio frequency (RF) signals to remotely access devices. However, these were designed for specific targeted surveillance operations rather than mass surveillance. It's true that many modern electronic devices emit RF signals or can be accessed through their wireless capabilities, but this does not inherently mean that all American-made electronics are compromised for remote access by the NSA or FBI without further context.
			- Backdoored Random Number Generators
				- **Verdict:** Partly True. The Dual Elliptic Curve Deterministic Random Bit Generator (Dual EC DRBG) algorithm, developed by NIST and NSA, has been criticized for its potential to contain a backdoor that could allow the NSA to break RSA encryption.
			- NSA Backdoors in CPUs
				- **Verdict:** Partly True. The claim refers to Intel ME (Management Engine) and AMD PSP (Platform Security Processor), which are both hardware-based security features integrated into modern CPUs. While these technologies can operate independently of the main system, there's no conclusive evidence that they were implemented at the NSA's request or are being used by the NSA specifically for mass surveillance. Their primary purpose is enterprise-level management and security rather than clandestine operations.
			- FBI Distributes Undetectable Malware
				- **Verdict:** Partly True. The claim likely refers to the FBI's use of malware for law enforcement purposes, such as tracking suspects or gaining access to encrypted data. While the FBI has been known to use such tools, it's not accurate to say that anti-virus software is legally not allowed to detect them. However, some of these tools may be designed to evade detection by common anti-virus programs.
			- Backdoored Random Number Generators
				- **Verdict:** Partly True. The Dual Elliptic Curve Deterministic Random Bit Generator (Dual EC DRBG) algorithm, developed by NIST and NSA, has been criticized for its potential to contain a backdoor that could allow the NSA to break RSA encryption. However, it's important to note that while the algorithm's vulnerabilities have been identified and it has been subsequently withdrawn from use, there's no conclusive evidence that the NSA actively exploited this backdoor to break RSA encryption on a widespread scale.
  - # Government and Agency Involvement in AI
  - Former NSA Director Michael Hayden said:
  - ```text
	  "we kill people based on metadata"
	  ```
  - during a debate in 2014 at John Hopkins University. Hayden admitted that the U.S. government uses metadata, which refers to data about communications like phone records (numbers called, time, duration) rather than the actual content, as a basis for killing people in drone strikes against terrorist suspects abroad. Reports based on Snowden leaks alleged the NSA used metadata analysis to track potential targets for lethal drone operations.
  - OpenAI [has appointed](https://openai.com/index/openai-announces-leadership-transition/) Retired U.S. Army General Paul M. Nakasone to its Board of Directors and the Board's Safety and Security Committee. General Nakasone is a leading expert in cybersecurity, having previously served as the Director of the National Security Agency (NSA) and Commander of U.S. Cyber Command (USCYBERCOM).
		- [(1) Edward Snowden on X: "They've gone full mask-off: 𝐝𝐨 𝐧𝐨𝐭 𝐞𝐯𝐞𝐫 trust @OpenAI or its products (ChatGPT etc). There is only one reason for appointing an @NSAGov Director to your board. This is a willful, calculated betrayal of the rights of every person on Earth. You have been warned." / X (twitter.com)](https://twitter.com/Snowden/status/1801610725229498403)
		- {{twitter https://twitter.com/Snowden/status/1801610725229498403}}
  - <iframe src="https://www.eff.org/deeplinks/2024/04/us-senate-and-biden-administration-shamefully-renew-and-expand-fisa-section-702-0" style="width: 100%; height: 600px"></iframe>
  - [Chat Control: The EU’s CSEM scanner proposal – Patrick Breyer (patrick-breyer.de)](https://www.patrick-breyer.de/en/posts/chat-control/)
  - ### Cultural and Financial Security
		- **Symbolic Value:** Gold has been revered throughout history, symbolizing wealth, purity, and status across cultures.
		- **Financial Instrument:** Often viewed as a hedge against inflation and currency devaluation, gold is a staple in diversified investment portfolios.
  - ## [[Cyber security and Cryptography]] and Fraud Prevention
		- AI crucial in cybersecurity, adapting to evolving threats and enhancing [[Politics, Law, Privacy]]  << this feels like it will be warfare
		  background-color:: red
		- Development of AI algorithms for adaptive threat response and robust [[Distributed Identity]] authentication processes.
		- ### Tether
			- [Tether](https://tether.to/en/whitepaper/) is the largest of the stablecoins, with some $70B in circulation, and the third largest ‘crypto’. This has been a meteoric rise, attracting the ire and scrutiny of [regulators](https://www.cftc.gov/PressRoom/PressReleases/8450-21) and [investigators](https://www.bloomberg.com/news/features/2021-10-07/crypto-mystery-where-s-the-69-billion-backing-the-stablecoin-tether). There was considerable doubt that Tether had sufficient assets backing their synthetic dollars, but the market seems not to mind. Recently however they have transitioned to being backed by US treasury bills, a perfect asset for this use case. It’s resilience against ‘bank runs’ was tested in May 2022 when $9B was redeemed directly for dollars in a few days following the UST crash (more on this later). They are [shortly to launch](https://tether.to/en/tether-to-launch-gbpt-tether-tokens-pegged-to-the-british-pound-sterling/) a GBP version for the UK. It’s an important technology for this metaverse conversation because of intersections with Bitcoin through the Lightning network. Tether might actually provide everything needed. It’s only as safe as the trust invested in the central issuer though, and the leadership and history of the company [are questionable](https://www.wsj.com/articles/tether-ownership-and-company-weaknesses-revealed-in-documents-11675363340). It’s notable and somewhat ironic that it’s perhaps better and more transparently backed than most banks, and probably all novel fiat fintech products. We can employ the asset through the Taro technology described earlier but we would rather use something with higher regulatory assurances.
				- [Paolo Ardoino 🍐 on X: "Today Tether takes the majority stake in @BlackrockNeuro_ and unveils the ultimate pillar of its long term vision and strategy: Tether Evo🧠🦾 First of all, this investment (same as energy, mining, ...) is done outside of stablecoin reserves, with our own company profits (last…" / X (twitter.com)](https://twitter.com/paoloardoino/status/1784938950525661578)
				- {{twitter https://twitter.com/paoloardoino/status/1784938950525661578}}
			- Paolo Ardoino, Tether’s chief technology officer, said in a podcast episode with The Block that USDT is increasingly used for value transfers, making up about **40**% of all token usage, compared to 60% of crypto trading.
				- 40% of USDT is now real world use cases, with Tron emerging as the blockchain of the moment.
				- Tether as a company makes billions of dollars of profit per year and has global adoption and network effect. The company has around 20 employees. They will likely remain pre-eminent in the synthetic dollar market.
				- The USA is positioning to exclude USDT within it's borders, by capping such assets at $10B for [National security reasons.](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
				- Tether is potentially the natural inheritor of the global [[Eurodollar]] system.
  - ### **VMesh**
		- [VMesh](https://bennyguo.github.io/vmesh/) - //bennyguo.github.io/vmesh/ and formatting as requested:
  -   Vmesh is a programmable service mesh built with Cilium, focusing on enhanced visibility, control, and security for microservice architectures.
  -   It allows users to programme the data plane of their service mesh using WebAssembly (Wasm) filters, offering flexibility in customising network traffic processing.
  -   Vmesh aims to simplify the process of creating and managing service meshes, particularly by reducing the complexity associated with traditional sidecar proxies.
  -   The system provides tools to observe and analyse network traffic flowing through the mesh, providing insights into the performance and behaviour of services.
  -   Users can apply granular policies to control access between services, ensuring a strong security posture and preventing unauthorised communication.
  -   Vmesh integrates with existing Kubernetes environments and leverages Cilium's eBPF-based networking for performance and efficiency.
  -   The platform offers a range of features, including traffic management, observability, security policies, and extensibility through Wasm filters.
  -   Vmesh supports customisable extensions for various use cases, such as authentication, authorisation, and request manipulation.
  -   The project emphasises developer-friendliness, providing simple APIs and tools to facilitate the development and deployment of service mesh applications.
  -   Vmesh aims to lower the operational overhead of running a service mesh, by streamlining the configuration and management processes.
  - ### Cyberattacks and Fraud
		- AI can be used to create more sophisticated phishing attacks, malware, and other forms of cybercrime. The "2024 State of AI Security Report" found significant security risks in production environments across major cloud platforms.
		- ### Legal Adjustments
			- To accommodate the extensive use of AI surveillance technologies, France has enacted several legal modifications. These changes are aimed at broadening the scope of data collection and analysis, allowing for more comprehensive security measures during the Olympics. Key legal adjustments include:
				- **Expansion of Surveillance Powers:** Legislation has been passed to allow for increased electronic surveillance, including wiretapping, data mining, and the use of AI for real-time data analysis.
				- **Data Retention Policies:** New laws permit the extended retention of collected data, which is essential for the training and improvement of AI systems.
				- **Transparency and Accountability:** Despite the legal changes, there are significant concerns regarding the transparency of data usage and the accountability of both the government and private entities involved. The extent to which these measures comply with the European Union's General Data Protection Regulation (GDPR) is a major point of contention.
			- ### Transparency Issues
				- Transparency is a critical issue in the deployment of AI surveillance technologies:
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.
			- **Event Detection:** Identifies potential security threats and unusual activities, allowing for rapid response by security personnel.
  - ## Build vs Buy Dynamics
		- Shift from reliance on third-party software (80% in 2023) to in-house solutions (47% in 2024).
		- In-house solutions are driven by security and data interaction requirements.
		- Anticipated long-term oscillation between in-house and third-party solutions as vertical and functional applications evolve.
		- #### **Key Implementation Notes**
			- **Error Handling**:
				- Ensure fallback mechanisms for failed payments or data access.
				- Use retry strategies for communication with external components.
			- **Privacy**:
				- Adhere strictly to user permissions with Solid Pods.
			- **Security**:
				- Use robust identity verification and cryptographic signatures for transactions.
			- **Scalability**:
				- Design APIs and logging systems to handle high throughput.
  - ### In-Camera VFX & Telepresence:
		- The proposed framework can be applied to film production and virtual production workflows. By leveraging the world's most powerful decentralized computing network (Bitcoin) and cryptographically assured endpoints, the system can enable scale and security without high cost. New tooling in the space allows for microtransactions and micropayments, radically improving creative microtask workflows. The unified digital backend is optimized for flows of money, trust, and digital objects, offering a new area for virtual production.
						- ### Safeguarding
							- Implementing security measures and user protection mechanisms.
  - ### IOS18 Security and Privacy
		- [Thread by Matthew Green](https://threadreaderapp.com/thread/1800291897245835616.html?)
			- Apple, unlike most other mobile providers, has traditionally done a lot of processing on-device. For example, all of the machine learning and OCR text recognition on Photos is done right on your device. 
			  The problem is that while modern phone “neural” hardware is improving, it’s not improving fast enough to take advantage of all the crazy features Silicon Valley wants from modern AI, including generative AI and its ilk. This fundamentally requires servers.
			- But if you send your tasks out to servers in “the cloud” (god using quotes makes me feel 80), this means sending incredibly private data off your phone and out over the Internet. That exposes you to spying, hacking, and the data hungry business model of Silicon Valley.
			- The solution Apple has come up with is to try to build secure and trustworthy hardware in their own data centers. Your phone can then “outsource” heavy tasks to this hardware. Seems easy, right? Well: here’s the blog post.
			- [**Blog**](https://security.apple.com/blog/private-cloud-compute/) Private Cloud Compute: A new frontier for AI privacy in the cloud - Apple Security Research**Secure and private AI processing in the cloud poses a formidable new challenge. To support advanced features of Apple Intelligence with larger foundation models, we created Private Cloud Compute (PCC)
			- TL;DR: it is not easy. Building trustworthy computers is literally the hardest problem in computer security. Honestly it’s almost the only problem in computer security. But while it remains a challenging problem, we’ve made a lot of advances. Apple is using almost all of them.
			- The first thing Apple is doing is using all the advances they’ve made in building secure phones and PCs in their new servers. This involves using Secure Boot and a Secure Enclave Processor (SEP) to hold keys. They’ve presumably turned on all the processor security features.
			- Then they’re throwing all kinds of processes at the server hardware to make sure the hardware isn’t tampered with. I can’t tell if this prevents hardware attacks, but it seems like a start.
			- They also use a bunch of protections to ensure that software is legitimate. One is that the software is “stateless” and allegedly doesn’t keep information between user requests. To help ensure this, each server/node reboot re-keys and wipes all storage.
			- A second protection is that the operating system can “attest” to the software image it’s running. Specifically, it signs a hash of the software and shares this with every phone/client. If you trust this infrastructure, you’ll know it’s running a specific piece of software.
			- Of course, knowing that the phone is running a specific piece of software doesn’t help you if you don’t trust the software. So Apple plans to put each binary image into a “transparency log” and publish the software.
			- Security researchers will get *some code* and a VM they can use to run the software. They’ll then have to reverse-engineer the binaries to see if they’re doing unexpected things. It’s a little suboptimal.
			- When your phone wants to outsource a task, it will contact Apple and obtain a list of servers/nodes and their keys. It will then encrypt its request to all servers, and one will process it. They’re even using fancy anonymous credentials and a third part relay to hide your IP.
			- Ok there are probably half a dozen more technical details in the blog post. It’s a very thoughtful design. Indeed, if you gave an excellent team a huge pile of money and told them to build the best “private” cloud in the world, it would probably look like this.
			- But now the tough questions. Is it a good idea? And is it as secure as what Apple does today? And most importantly:
			- I admit that as I learned about this feature, it made me kind of sad. The thought that was going through my head was: this is going to be too much of a temptation. Once you can “safely” outsource tasks to the cloud, why bother doing them locally. Outsource everything!
			- As best I can tell, Apple does not have explicit plans to announce when your data is going off-device for to Private Compute. You won’t opt into this, you won’t necessarily even be told it’s happening. It will just happen. Magically. I don’t love that part.
			- Finally, there are so many invisible sharp edges that could exist in a system like this. Hardware flaws. Issues with the cryptographic attestation framework. Clever software exploits. Many of these will be hard for security researchers to detect. That worries me too. 18/
			- Wrapping up on a more positive note: it’s worth keeping in mind that sometimes the perfect is the enemy of the really good.
			- In practice the alternative to on-device is: ship private data to OpenAI or someplace sketchier, where who knows what might happen to it.
			- And of course, keep in mind that super-spies aren’t your biggest adversary. For many people your biggest adversary is the company who sold you your device/software. This PCC system represents a real commitment by Apple not to “peek” at your data. That’s a big deal.
			- In any case, this is the world we’re moving to. Your phone might seem to be in your pocket, but a part of it lives 2,000 miles away in a data center. As security folks we probably need to get used to that fact, and do the best we can to make sure all parts are secure.
  - They are sitting on a huge cash war chest and can effectively buy their way through and out of the coming battles around ip like the NYT court case.
  - Biding their time waiting for local inferencing that leverages strong legacy media buy in might be a great play. Only the cost to their mind share of talent might be an issue.
  - Apple are innovating in core ML research to support large language models.
  - They are developing new techniques for data management between flash memory and DRAM, crucial for running larger models on devices with limited memory.
  - The research also reveals significant speed improvements, with 4-5 times faster processing on CPUs and 20-25 times on GPUs for models up to twice the size of the available DRAM. These advancements could lead to a wider adoption of these technologies,
  - [Paper page
		- LLM in a flash: Efficient Large Language Model Inference with Limited Memory (huggingface.co)](https://huggingface.co/papers/2312.11514) [[Hardware and Edge]]
  - [Apple wants AI to run directly on its hardware instead of in the cloud | Ars Technica](https://arstechnica.com/apple/2023/12/apple-wants-ai-to-run-directly-on-its-hardware-instead-of-in-the-cloud/) [[Hardware and Edge]]
  - HUGS: Human [[Gaussian splatting and Similar]]
  - [Apple Machine Learning Research](https://machinelearning.apple.com/research/hugs)
  - Apple presents [Paper page
  - Speculative Streaming: Fast LLM Inference without Auxiliary Models (huggingface.co)](https://huggingface.co/papers/2402.11131):
  - Speculative decoding is a prominent technique to speed up the inference of a large target language model based on predictions of an auxiliary draft model. While effective, in application-specific settings, it often involves fine-tuning both draft and target models to achieve high acceptance rates. As the number of downstream tasks grows, these draft models add significant complexity to inference systems. We propose Speculative Streaming, a single-model speculative decoding method that fuses drafting into the target model by changing the fine-tuning objective from next token prediction to future n-gram prediction. Speculative Streaming speeds up decoding by 1.8
  - 3.1X in a diverse set of tasks, such as Summarization, Structured Queries, and Meaning Representation, without sacrificing generation quality. Additionally, Speculative Streaming is parameter-efficient. It achieves on-par/higher speed-ups than Medusa-style architectures while using ~10000X fewer extra parameters, making it well-suited for resource-constrained devices.
  - ### BitVM
		- [BitVM](https://bitvm.org/) is a new paradigm that enables arbitrary program execution on Bitcoin, combining Turing-complete expressiveness with the security of Bitcoin consensus.
  - ## Advanced Features (Optional)
		- Expand upon the basic wallet functionality by exploring advanced features such as:
			- Supporting transactions of multiple ecash denominations.
			- Implementing a withdrawal feature to convert ecash back into Bitcoin.
			- Adding multisig capabilities for enhanced security.
  - ## AI Ethics and Security
		- ### Security and Privacy Concerns
			- **AI Model Hacking**: Discussions on potential security breaches and privacy issues with AI models ([Reddit Discussion](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)).
  - # What we can expect
  - The potential of AI to dominate warfare in the next decade, exacerbating issues of disinformation and misinformation.
  - The accessibility of AI tools for creating realistic content, enhancing the capabilities of bad actors in misinformation campaigns.
  - The critical need for investment in data infrastructure and preparation to counter the threats posed by AI in warfare.
  - The concept of deterrence in military thinking and how it might evolve with the advent of AI technologies.
  - The importance of data as a new form of ammunition in AI-driven warfare.
  - The mission of the speaker and like-minded technologists to leverage AI for improving national security and maintaining global stability.
  - The urgent call for more technologists to understand the critical nature of the current era and commit to supporting national security efforts.
  - Swarms of lethal drones equipped with facial recognition technology.
  - Unmanned armed robots that are nearly impossible to defeat.
		- {{video https://www.youtube.com/watch?v=KX0ji1sAXl8}}
  - Autonomous fighter jets capable of supersonic speeds and enduring greater gravitational forces than human pilots.
  - Cyberattacks aimed at disabling critical port infrastructure.
  - Disinformation campaigns and deepfakes that can manipulate presidential elections.
  - Foreign adversaries capable of disabling satellites, impairing global surveillance and communication.
  - ### Postulated Bad Actors
		- Despite the technical nature of the outage, there were concerns about potential exploitation:
		- **Potential Exploitation**: CrowdStrike CEO George Kurtz highlighted that "bad actors will try to exploit events like this," underscoring the persistent challenges in cybersecurity, especially with Microsoft systems ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).
  - ## Broader Implications for Cyber Security
  - ##### Glue
		- Better enterprise security integration
		- Larger environments, potential for breakouts in the same space. Workshop capable
		- 3D object support, screen sharing, some collaborative tools
		- Apply for a license
		- Fairly basic graphics
		- Basic avatars
		- Quest and PC
		- Writing and gestures supported
		- Mac support
  - #### THe TrUTh iS OuT ThERe
		- This was [[Anthropic Claude]] responding to a research formatted query about 'conspiracy theories' found online.
		- ![image.png](assets/image_1719001668969_0.png){:width 600}
		- "Open source response"
			- CIA/MI5 Hacking Smart Devices
				- **Verdict:** Partly True. The CIA and MI5 have been known to engage in surveillance activities involving internet-connected devices through programs like Weeping Angel. This program was designed to hack into Samsung smart TVs, but it's important to note that the extent of this capability and its current status are classified.
			- CIA Infecting Car Control Systems
				- **Verdict:** Partly True. Vault 7 revealed a range of hacking tools developed by the CIA, including those capable of exploiting vulnerabilities in modern car systems. However, there's no concrete evidence to suggest that the CIA has used these tools to remotely take control of cars.
			- Tech Companies Providing NSA with Zero-Day Vulnerabilities
				- **Verdict:** True. Documents leaked by Edward Snowden revealed that tech companies like Microsoft did provide advance warnings about zero-day vulnerabilities to the NSA before disclosing them to the public. This was part of a broader program aimed at improving national cybersecurity and giving government agencies an early warning system.
			- NSA Breaking Tor Networks
				- **Verdict:** Partly True. While the NSA has been involved in efforts to compromise Tor, there's no conclusive evidence that they have successfully broken the network or can identify users with certainty. However, it is known that various intelligence agencies have attempted to exploit vulnerabilities in Tor.
			- NSA Intercepts Devices and Installs Malware Chips
				- **Verdict:** Partly True. The ANT/TAO Catalog, leaked by Edward Snowden in 2013, reveals the NSA's capabilities for intercepting and altering electronic devices, including installing malware or backdoors before they are delivered to customers. However, this catalog primarily focuses on exploiting vulnerabilities in targeted surveillance operations rather than mass production of compromised devices.
			- American-Made Electronics Allow Access via Radio Frequencies
				- **Verdict:** Partly True. The Cottonmouth-I and SURLYSPAWN projects, as mentioned in the Snowden leaks, involve the use of radio frequency (RF) signals to remotely access devices. However, these were designed for specific targeted surveillance operations rather than mass surveillance. It's true that many modern electronic devices emit RF signals or can be accessed through their wireless capabilities, but this does not inherently mean that all American-made electronics are compromised for remote access by the NSA or FBI without further context.
			- Backdoored Random Number Generators
				- **Verdict:** Partly True. The Dual Elliptic Curve Deterministic Random Bit Generator (Dual EC DRBG) algorithm, developed by NIST and NSA, has been criticized for its potential to contain a backdoor that could allow the NSA to break RSA encryption.
			- NSA Backdoors in CPUs
				- **Verdict:** Partly True. The claim refers to Intel ME (Management Engine) and AMD PSP (Platform Security Processor), which are both hardware-based security features integrated into modern CPUs. While these technologies can operate independently of the main system, there's no conclusive evidence that they were implemented at the NSA's request or are being used by the NSA specifically for mass surveillance. Their primary purpose is enterprise-level management and security rather than clandestine operations.
			- FBI Distributes Undetectable Malware
				- **Verdict:** Partly True. The claim likely refers to the FBI's use of malware for law enforcement purposes, such as tracking suspects or gaining access to encrypted data. While the FBI has been known to use such tools, it's not accurate to say that anti-virus software is legally not allowed to detect them. However, some of these tools may be designed to evade detection by common anti-virus programs.
			- Backdoored Random Number Generators
				- **Verdict:** Partly True. The Dual Elliptic Curve Deterministic Random Bit Generator (Dual EC DRBG) algorithm, developed by NIST and NSA, has been criticized for its potential to contain a backdoor that could allow the NSA to break RSA encryption. However, it's important to note that while the algorithm's vulnerabilities have been identified and it has been subsequently withdrawn from use, there's no conclusive evidence that the NSA actively exploited this backdoor to break RSA encryption on a widespread scale.
  - # Government and Agency Involvement in AI
  - Former NSA Director Michael Hayden said:
  - ```text
	  "we kill people based on metadata"
	  ```
  - during a debate in 2014 at John Hopkins University. Hayden admitted that the U.S. government uses metadata, which refers to data about communications like phone records (numbers called, time, duration) rather than the actual content, as a basis for killing people in drone strikes against terrorist suspects abroad. Reports based on Snowden leaks alleged the NSA used metadata analysis to track potential targets for lethal drone operations.
  - OpenAI [has appointed](https://openai.com/index/openai-announces-leadership-transition/) Retired U.S. Army General Paul M. Nakasone to its Board of Directors and the Board's Safety and Security Committee. General Nakasone is a leading expert in cybersecurity, having previously served as the Director of the National Security Agency (NSA) and Commander of U.S. Cyber Command (USCYBERCOM).
		- [(1) Edward Snowden on X: "They've gone full mask-off: 𝐝𝐨 𝐧𝐨𝐭 𝐞𝐯𝐞𝐫 trust @OpenAI or its products (ChatGPT etc). There is only one reason for appointing an @NSAGov Director to your board. This is a willful, calculated betrayal of the rights of every person on Earth. You have been warned." / X (twitter.com)](https://twitter.com/Snowden/status/1801610725229498403)
		- {{twitter https://twitter.com/Snowden/status/1801610725229498403}}
  - <iframe src="https://www.eff.org/deeplinks/2024/04/us-senate-and-biden-administration-shamefully-renew-and-expand-fisa-section-702-0" style="width: 100%; height: 600px"></iframe>
  - [Chat Control: The EU’s CSEM scanner proposal – Patrick Breyer (patrick-breyer.de)](https://www.patrick-breyer.de/en/posts/chat-control/)
  - ### Cultural and Financial Security
		- **Symbolic Value:** Gold has been revered throughout history, symbolizing wealth, purity, and status across cultures.
		- **Financial Instrument:** Often viewed as a hedge against inflation and currency devaluation, gold is a staple in diversified investment portfolios.
  - ## [[Cyber security and Cryptography]] and Fraud Prevention
		- AI crucial in cybersecurity, adapting to evolving threats and enhancing [[Politics, Law, Privacy]]  << this feels like it will be warfare
		- Development of AI algorithms for adaptive threat response and robust [[Distributed Identity]] authentication processes.
		- ### Tether
			- [Tether](https://tether.to/en/whitepaper/) is the largest of the stablecoins, with some $70B in circulation, and the third largest ‘crypto’. This has been a meteoric rise, attracting the ire and scrutiny of [regulators](https://www.cftc.gov/PressRoom/PressReleases/8450-21) and [investigators](https://www.bloomberg.com/news/features/2021-10-07/crypto-mystery-where-s-the-69-billion-backing-the-stablecoin-tether). There was considerable doubt that Tether had sufficient assets backing their synthetic dollars, but the market seems not to mind. Recently however they have transitioned to being backed by US treasury bills, a perfect asset for this use case. It’s resilience against ‘bank runs’ was tested in May 2022 when $9B was redeemed directly for dollars in a few days following the UST crash (more on this later). They are [shortly to launch](https://tether.to/en/tether-to-launch-gbpt-tether-tokens-pegged-to-the-british-pound-sterling/) a GBP version for the UK. It’s an important technology for this metaverse conversation because of intersections with Bitcoin through the Lightning network. Tether might actually provide everything needed. It’s only as safe as the trust invested in the central issuer though, and the leadership and history of the company [are questionable](https://www.wsj.com/articles/tether-ownership-and-company-weaknesses-revealed-in-documents-11675363340). It’s notable and somewhat ironic that it’s perhaps better and more transparently backed than most banks, and probably all novel fiat fintech products. We can employ the asset through the Taro technology described earlier but we would rather use something with higher regulatory assurances.
				- [Paolo Ardoino 🍐 on X: "Today Tether takes the majority stake in @BlackrockNeuro_ and unveils the ultimate pillar of its long term vision and strategy: Tether Evo🧠🦾 First of all, this investment (same as energy, mining, ...) is done outside of stablecoin reserves, with our own company profits (last…" / X (twitter.com)](https://twitter.com/paoloardoino/status/1784938950525661578)
				- {{twitter https://twitter.com/paoloardoino/status/1784938950525661578}}
			- Paolo Ardoino, Tether’s chief technology officer, said in a podcast episode with The Block that USDT is increasingly used for value transfers, making up about **40**% of all token usage, compared to 60% of crypto trading.
				- 40% of USDT is now real world use cases, with Tron emerging as the blockchain of the moment.
				- Tether as a company makes billions of dollars of profit per year and has global adoption and network effect. The company has around 20 employees. They will likely remain pre-eminent in the synthetic dollar market.
				- The USA is positioning to exclude USDT within it's borders, by capping such assets at $10B for [National security reasons.](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
				- Tether is potentially the natural inheritor of the global [[Eurodollar]] system.
  - ### **Vox-E**
		- [Vox-E Results](https://etaisella.github.io/htmlTutorial2.github.io-index.html/results_real.html) - - The website displays the results of a real-world experiment comparing different hyperparameter optimisation algorithms for [[machine learning]] models.
		- [VMesh](https://bennyguo.github.io/vmesh/) - //bennyguo.github.io/vmesh/ and formatting as requested:
  -   Vmesh is a programmable service mesh built with Cilium, focusing on enhanced visibility, control, and security for microservice architectures.
  -   It allows users to programme the data plane of their service mesh using WebAssembly (Wasm) filters, offering flexibility in customising network traffic processing.
  -   Vmesh aims to simplify the process of creating and managing service meshes, particularly by reducing the complexity associated with traditional sidecar proxies.
  -   The system provides tools to observe and analyse network traffic flowing through the mesh, providing insights into the performance and behaviour of services.
  -   Users can apply granular policies to control access between services, ensuring a strong security posture and preventing unauthorised communication.
  -   Vmesh integrates with existing Kubernetes environments and leverages Cilium's eBPF-based networking for performance and efficiency.
  -   The platform offers a range of features, including traffic management, observability, security policies, and extensibility through Wasm filters.
  -   Vmesh supports customisable extensions for various use cases, such as authentication, authorisation, and request manipulation.
  -   The project emphasises developer-friendliness, providing simple APIs and tools to facilitate the development and deployment of service mesh applications.
  - 3DFuse aims to improve the accuracy and robustness of 3D object detection systems by leveraging the complementary strengths of different sensor types.
  - The system is intended for applications such as autonomous driving, [[robotics]], and augmented reality where precise 3D understanding is critical.
  - ### Cyberattacks and Fraud
		- AI can be used to create more sophisticated phishing attacks, malware, and other forms of cybercrime. The "2024 State of AI Security Report" found significant security risks in production environments across major cloud platforms.
		- ### Legal Adjustments
			- To accommodate the extensive use of AI surveillance technologies, France has enacted several legal modifications. These changes are aimed at broadening the scope of data collection and analysis, allowing for more comprehensive security measures during the Olympics. Key legal adjustments include:
				- **Transparency and Accountability:** Despite the legal changes, there are significant concerns regarding the transparency of data usage and the accountability of both the government and private entities involved. The extent to which these measures comply with the European Union's General Data Protection Regulation (GDPR) is a major point of contention.
  - ## Build vs Buy Dynamics
		- Shift from reliance on third-party software (80% in 2023) to in-house solutions (47% in 2024).
		- In-house solutions are driven by security and data interaction requirements.
		- Other notable areas include customer support (9%), sales (8%), data science (8%), marketing (7%), human resources (7%), and accounting/finance (7%).
  - # Partnership with OpenAI, and Siri
  - Apple is focusing on "AI for the rest of us" - making AI capabilities accessible and useful for everyday tasks rather than flashy frontier use cases. The emphasis is on small but significant time-saving wins.
  - Siri is the centerpiece, with expanded natural language understanding, ability to maintain context, and both voice and text input. Siri can now take actions across Apple and third-party apps.
			  The problem is that while modern phone “neural” hardware is improving, it’s not improving fast enough to take advantage of all the crazy features Silicon Valley wants from modern AI, including generative AI and its ilk. This fundamentally requires servers.
			- But if you send your tasks out to servers in “the cloud” (god using quotes makes me feel 80), this means sending incredibly private data off your phone and out over the Internet. That exposes you to spying, hacking, and the data hungry business model of Silicon Valley.
			- The solution Apple has come up with is to try to build secure and trustworthy hardware in their own data centers. Your phone can then “outsource” heavy tasks to this hardware. Seems easy, right? Well: here’s the blog post.
			- [**Blog**](https://security.apple.com/blog/private-cloud-compute/) Private Cloud Compute: A new frontier for AI privacy in the cloud - Apple Security Research**Secure and private AI processing in the cloud poses a formidable new challenge. To support advanced features of Apple Intelligence with larger foundation models, we created Private Cloud Compute (PCC)
			- TL;DR: it is not easy. Building trustworthy computers is literally the hardest problem in computer security. Honestly it’s almost the only problem in computer security. But while it remains a challenging problem, we’ve made a lot of advances. Apple is using almost all of them.
			- The first thing Apple is doing is using all the advances they’ve made in building secure phones and PCs in their new servers. This involves using Secure Boot and a Secure Enclave Processor (SEP) to hold keys. They’ve presumably turned on all the processor security features.
			- Then they’re throwing all kinds of processes at the server hardware to make sure the hardware isn’t tampered with. I can’t tell if this prevents hardware attacks, but it seems like a start.
  - ## Advanced Features (Optional)
		- Expand upon the basic wallet functionality by exploring advanced features such as:
			- Implementing a withdrawal feature to convert ecash back into Bitcoin.
			- Adding multisig capabilities for enhanced security.
  - ## AI Ethics and Security
		- ### Security and Privacy Concerns
			- **AI Model Hacking**: Discussions on potential security breaches and privacy issues with AI models ([Reddit Discussion](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)).
  - ### Postulated Bad Actors
		- Despite the technical nature of the outage, there were concerns about potential exploitation:
		- **Potential Exploitation**: CrowdStrike CEO George Kurtz highlighted that "bad actors will try to exploit events like this," underscoring the persistent challenges in cybersecurity, especially with Microsoft systems ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).
  - ### Enhancing Cybersecurity Measures
		- Given the evolving threat landscape, enhancing cybersecurity measures is imperative:
  - [Open Generative AI tools](https://github.com/AbdBarho/stable-diffusion-webui-docker)
  - - [[]]The GitHub repository "AbdBarho/stable-diffusion-webui-docker" offers an easy Docker setup for Stable Diffusion, featuring a user-friendly UI.
  - The project is based on topics like Docker, PyTorch, Gradio, Docker-compose, and Stable Diffusion.
  - [Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations](https://csrc.nist.gov/pubs/ai/100/2/e2023/final)
  - [[]]The web page discusses the NIST Trustworthy and Responsible AI report on adversarial machine learning (AML). Here is a summary based on the provided content:
  - The report develops a taxonomy and terminology in the field of AML, surveying literature to build a conceptual hierarchy.
		- Includes key ML methods, lifecycle stages of attacks, attacker goals, and capabilities in the learning process.
  - Topics: Security and Privacy (advanced persistent threats, botnets, information sharing, intrusion detection & prevention, malware), Technologies (artificial intelligence).
	  If you need further assistance or a specific focus on any aspect, feel free to ask.
  - [Here Come the AI Worms](https://www.wired.com/story/here-come-the-ai-worms/)
  - Researchers have demonstrated the first generative AI worm, Morris II, which targets email assistants using ChatGPT and Gemini, showing how these worms can exploit vulnerabilities.
	  The web page discusses the rise of generative AI systems and the emerging threat of AI worms that exploit vulnerabilities in these systems for malicious purposes, highlighting the importance of robust security measures and human oversight in AI development.
  - [Check your IP address & website security](https://checkcybersecurity.service.ncsc.gov.uk/ip-check)
  - [[]]Unable to access or summarize the content at [https://checkcybersecurity.service.ncsc.gov.uk/ip-check](https://checkcybersecurity.service.ncsc.gov.uk/ip-check)
  - ##### Glue
		- Better enterprise security integration
		- Larger environments, potential for breakouts in the same space. Workshop capable
		- 3D object support, screen sharing, some collaborative tools
		- Apply for a license
		- Fairly basic graphics
		- Basic avatars
		- Writing and gestures supported
		- Mac support
		- Really simple to join
		- Quest and PC
		- Larger scenes within scenes
		- Runs in the browser
  - # Risks and mitigations
  - Looking across the whole sector, this paragraph from the Bank of International Settlement (BIS) [sums everything up](https://www.bis.org/publ/arpdf/ar2022e3.htm):
		- "..it is now becoming clear that crypto and DeFi have deeper structural limitations that prevent them from achieving the levels of efficiency, stability or integrity required for an adequate monetary system. In particular, the crypto universe lacks a nominal anchor, which it tries to import, imperfectly, through stable coins. It is also prone to fragmentation, and its applications cannot scale without compromising security, as shown by their congestion and exorbitant fees. Activity in this parallel system is, instead, sustained by the influx of speculative coin holders. Finally, there are serious concerns about the role of unregulated intermediaries in the system. As they are deep-seated, these structural shortcomings are unlikely to be amenable to technical fixes alone. This is because they reflect the inherent limitations of a decentralised system built on permissionless blockchains.”
  - For "crypto" assets more generally it is useful to look at the recent [“whole government executive order”](https://www.whitehouse.gov/briefing-room/presidential-actions/2022/03/09/executive-order-on-ensuring-responsible-development-of-digital-assets/)signed by President Biden early in 2022. It was mainly framed in terms of “responsible innovation, and leadership” in the new space. The resulting, “Comprehensive Framework for Responsible Development of Digital Assets” was a product of multi agency collaboration and can be seen as 9 reports and a summary document, and was long anticipated. The summary itself is neither particularly comprehensive nor a framework, and mainly serves to identifies high level risks, aspirations, and challenges, and strongly hints toward eventual development of a “digital dollar” (CBDC, expanded later). This work has been repealed completely as the Trump administration eschews [[CBDCs]] and openly promotes crypto.
  - https://twitter.com/kofinas/status/1881077334750421066
		- {{twitter https://twitter.com/kofinas/status/1881077334750421066}}
  - The risks section of the original executive order shows how legislatorsare framing this, so it’s useful to break down here.
		- Consumer and business protections. This is likely to pertain to custodians and is much needed. Misselling is rife. Security presents a challenge.
		- Highlighting the need for international coordination suggests they are mindful of [jurisdictional arbitrage](https://twitter.com/iamLeonHill/status/1847973039234846747).
		- {{twitter https://twitter.com/iamLeonHill/status/1847973039234846747}}
		- Future protocol changes.
		- Unanticipated effects on the domestic and international energy system.
		- Vulnerability to adversary attacks are [widely studied](https://braiins.com/blog/bitcoin-mining-attacks-explained)[[apostolaki2016hijacking; @apostolaki2017hijacking; @johnson2014game; @stinner2022proof]], and still pretty much completely speculative because of the complex nature of the attack surface.
		- Mining tends toward economy of scale concentration. Many are already on their [own specialised network](https://bitcoinfibre.org/) to connect to one another.
		- Future hard forks. There will doubtless be pressure to fork the code to add inflation, or ESG mitigations, or to fix the UNIX clock issue in 2106. Each fork is a risk.
		- Other unknown, unanticipated risks given Bitcoin’s limited 13-year history.
		- There is a “non-zero” chance that Bitcoin is a complex government intelligence agency construct, [much like Crypto AG was](https://en.wikipedia.org/wiki/Crypto_AG) toward the end of the last century.[[dymydiuk2020rubicon]]
  - #### Spacechains
		- It feels like spacechains are almost ready, so this is worth keeping aneye on. It’s the ‘cleanest’ way to issue assets using Bitcoin becausethere’s no additional speculative chain. As briefly explained in theearlier section Bitcoin is destroyed to create a new chain which theninherits the security of Bitcoin through onward mining. This new assetor chain is able to accrue value and trade independently based purely onit’s value to the buyer, not as a function of a wider speculative bubbleattached to a token with multiple use cases.
		- It is also possible to use the whole suit of ordinal based ideas on anyother chain such as Litecoin, the long standing Bitcoin fork which is used somewhat as a technical testbed for Bitcoin. This might develop into a far more appealing option, though again, it’s too early to be sure.
		- [Runes on Litecoin! : r/litecoin (reddit.com)](https://www.reddit.com/r/litecoin/comments/1ckwnu6/runes_on_litecoin/)
		- ### Impact on Institutions
	 - **Democratization of AI:** Explores the potential for the democratization of powerful AI capabilities to be as destabilizing as historical technologies like the printing press, reshaping institutions and societal structures.
	 - **Techno-Feudalist Timeline:** Discusses the potential for a *techno-feudalist" timeline, where the provision of various public goods, including security against AI misuse, shifts into private hands.
  - ## [[Cyber security and Cryptography]] and Fraud Prevention
		- AI crucial in cybersecurity, adapting to evolving threats and enhancing [[Politics, Law, Privacy]]  << this feels like it will be warfare
		- Development of AI algorithms for adaptive threat response and robust [[Distributed Identity]] authentication processes.
		- ### Tether
			- [Tether](https://tether.to/en/whitepaper/) is the largest of the stablecoins, with some $70B in circulation, and the third largest ‘crypto’. This has been a meteoric rise, attracting the ire and scrutiny of [regulators](https://www.cftc.gov/PressRoom/PressReleases/8450-21) and [investigators](https://www.bloomberg.com/news/features/2021-10-07/crypto-mystery-where-s-the-69-billion-backing-the-stablecoin-tether). There was considerable doubt that Tether had sufficient assets backing their synthetic dollars, but the market seems not to mind. Recently however they have transitioned to being backed by US treasury bills, a perfect asset for this use case. It’s resilience against ‘bank runs’ was tested in May 2022 when $9B was redeemed directly for dollars in a few days following the UST crash (more on this later). They are [shortly to launch](https://tether.to/en/tether-to-launch-gbpt-tether-tokens-pegged-to-the-british-pound-sterling/) a GBP version for the UK. It’s an important technology for this metaverse conversation because of intersections with Bitcoin through the Lightning network. Tether might actually provide everything needed. It’s only as safe as the trust invested in the central issuer though, and the leadership and history of the company [are questionable](https://www.wsj.com/articles/tether-ownership-and-company-weaknesses-revealed-in-documents-11675363340). It’s notable and somewhat ironic that it’s perhaps better and more transparently backed than most banks, and probably all novel fiat fintech products. We can employ the asset through the Taro technology described earlier but we would rather use something with higher regulatory assurances.
				- [Paolo Ardoino 🍐 on X: "Today Tether takes the majority stake in @BlackrockNeuro_ and unveils the ultimate pillar of its long term vision and strategy: Tether Evo🧠🦾 First of all, this investment (same as energy, mining, ...) is done outside of stablecoin reserves, with our own company profits (last…" / X (twitter.com)](https://twitter.com/paoloardoino/status/1784938950525661578)
				- {{twitter https://twitter.com/paoloardoino/status/1784938950525661578}}
			- Paolo Ardoino, Tether’s chief technology officer, said in a podcast episode with The Block that USDT is increasingly used for value transfers, making up about **40**% of all token usage, compared to 60% of crypto trading.
				- 40% of USDT is now real world use cases, with Tron emerging as the blockchain of the moment.
				- Tether as a company makes billions of dollars of profit per year and has global adoption and network effect. The company has around 20 employees. They will likely remain pre-eminent in the synthetic dollar market.
				- The USA is positioning to exclude USDT within it's borders, by capping such assets at $10B for [National security reasons.](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
  - ### Cyberattacks and Fraud
		- AI can be used to create more sophisticated phishing attacks, malware, and other forms of cybercrime. The "2024 State of AI Security Report" found significant security risks in production environments across major cloud platforms.
  - ### Enhancing Cybersecurity Measures
		- Given the evolving threat landscape, enhancing cybersecurity measures is imperative:
  - The report develops a taxonomy and terminology in the field of AML, surveying literature to build a conceptual hierarchy.
		- Includes key ML methods, lifecycle stages of attacks, attacker goals, and capabilities in the learning process.
  - Topics: Security and Privacy (advanced persistent threats, botnets, information sharing, intrusion detection & prevention, malware), Technologies (artificial intelligence).
	  If you need further assistance or a specific focus on any aspect, feel free to ask.
	  The web page discusses the rise of generative AI systems and the emerging threat of AI worms that exploit vulnerabilities in these systems for malicious purposes, highlighting the importance of robust security measures and human oversight in AI development.
  - ##### Glue
		- Better enterprise security integration
		- Larger environments, potential for breakouts in the same space. Workshop capable
		- 3D object support, screen sharing, some collaborative tools
		- Apply for a license
		- Fairly basic graphics
		- Basic avatars
		- Mac support
		- Really simple to join
		- Runs in the browser
		- ### Impact on Institutions
	 - **Democratization of AI:** Explores the potential for the democratization of powerful AI capabilities to be as destabilizing as historical technologies like the printing press, reshaping institutions and societal structures.
	 - **Techno-Feudalist Timeline:** Discusses the potential for a *techno-feudalist" timeline, where the provision of various public goods, including security against AI misuse, shifts into private hands.
  - ## [[Cyber security and Cryptography]] and Fraud Prevention
		- AI crucial in cybersecurity, adapting to evolving threats and enhancing [[Politics, Law, Privacy]]  << this feels like it will be warfare
		- Development of AI algorithms for adaptive threat response and robust [[Distributed Identity]] authentication processes.
		- ### Tether
			- [Tether](https://tether.to/en/whitepaper/) is the largest of the stablecoins, with some $70B in circulation, and the third largest ‘crypto’. This has been a meteoric rise, attracting the ire and scrutiny of [regulators](https://www.cftc.gov/PressRoom/PressReleases/8450-21) and [investigators](https://www.bloomberg.com/news/features/2021-10-07/crypto-mystery-where-s-the-69-billion-backing-the-stablecoin-tether). There was considerable doubt that Tether had sufficient assets backing their synthetic dollars, but the market seems not to mind. Recently however they have transitioned to being backed by US treasury bills, a perfect asset for this use case. It’s resilience against ‘bank runs’ was tested in May 2022 when $9B was redeemed directly for dollars in a few days following the UST crash (more on this later). They are [shortly to launch](https://tether.to/en/tether-to-launch-gbpt-tether-tokens-pegged-to-the-british-pound-sterling/) a GBP version for the UK. It’s an important technology for this metaverse conversation because of intersections with Bitcoin through the Lightning network. Tether might actually provide everything needed. It’s only as safe as the trust invested in the central issuer though, and the leadership and history of the company [are questionable](https://www.wsj.com/articles/tether-ownership-and-company-weaknesses-revealed-in-documents-11675363340). It’s notable and somewhat ironic that it’s perhaps better and more transparently backed than most banks, and probably all novel fiat fintech products. We can employ the asset through the Taro technology described earlier but we would rather use something with higher regulatory assurances.
				- [Paolo Ardoino 🍐 on X: "Today Tether takes the majority stake in @BlackrockNeuro_ and unveils the ultimate pillar of its long term vision and strategy: Tether Evo🧠🦾 First of all, this investment (same as energy, mining, ...) is done outside of stablecoin reserves, with our own company profits (last…" / X (twitter.com)](https://twitter.com/paoloardoino/status/1784938950525661578)
				- {{twitter https://twitter.com/paoloardoino/status/1784938950525661578}}
			- Paolo Ardoino, Tether’s chief technology officer, said in a podcast episode with The Block that USDT is increasingly used for value transfers, making up about **40**% of all token usage, compared to 60% of crypto trading.
				- 40% of USDT is now real world use cases, with Tron emerging as the blockchain of the moment.
				- Tether as a company makes billions of dollars of profit per year and has global adoption and network effect. The company has around 20 employees. They will likely remain pre-eminent in the synthetic dollar market.
				- The USA is positioning to exclude USDT within it's borders, by capping such assets at $10B for [National security reasons.](https://www.brookings.edu/articles/stablecoins-and-national-security-learning-the-lessons-of-eurodollars/)
  - ##### Glue
		- Better enterprise security integration
		- Larger environments, potential for breakouts in the same space. Workshop capable
		- 3D object support, screen sharing, some collaborative tools
		- Apply for a license
		- Fairly basic graphics
		- Basic avatars
		- Mac support
		- Really simple to join
		- Runs in the browser
  - ## [[Cyber security and Cryptography]] and Fraud Prevention
		- AI crucial in cybersecurity, adapting to evolving threats and enhancing [[Politics, Law, Privacy]]  << this feels like it will be warfare
		- Development of AI algorithms for adaptive threat response and robust [[Distributed Identity]] authentication processes.
  - ### Security evaluation
		  **Phase 4: User Interface and Experience:**
		- **Identity and Value Management:**
		- **Integrate Nostr protocol for decentralized identity and messaging.**
		- **Develop or utilize existing libraries for Nostr event creation, signing, and relaying.**
		- **Develop avatar systems for both human and AI agents within Omniverse.**
  - #### 4.12.9 AI, Integrity, and Accessibility
  - and its underlying power
  - [Lesswrong AI section](https://www.lesswrong.com/tag/ai)
  - [Goldman Sachs Predicts 300 Million Jobs Will Be Lost Or Degraded By Artificial Intelligence: Goldman Sachs maintains that if generative AI lives up to its hype, the workforce in the United States and Europe will be upended. The bank estimates 300 million jobs could be lost or diminished due to this fast-growing technology.](https://www.forbes.com/sites/jackkelly/2023/03/31/goldman-sachs-predicts-300-million-jobs-will-be-lost-or-degraded-by-artificial-intelligence/?sh=3af7314e782b)
	  Gartner’s hype cycle 2022 features Web3, distributed identity, NFTs, and Metaverse and can be seen in Figure 1.6.
  - [Silvergate Purchases Blockchain libre](https://ir.silvergate.com/news/news-details/2022/Silvergate-Purchases-Blockchain-Payment-Network-Assets-from-Diem/default.aspx)
  - [Online safety bill heather articles](https://webdevlaw.uk/2022/11/21/a-quick-hypothetical-situation-or-your-crash-introduction-to-the-real-world/)
  - #### 4.12.7 Uncontrolled AGI Creation
  On the other hand, some suggest that capitalist competition could result in the creation of AGI that cannot be controlled. Dr. Jeffrey Hinton, a vocal advocate of this view, argues that AI's potential to disrupt business models could drive companies to recklessly pursue advancements in AI to stay competitive. This could lead to increased state power as people become more reliant on the state in an AI-dominated economy, potentially resulting in increased authoritarianism.
  - #### 4.12.9 AI, Integrity, and Accessibility
  - and its underlying power
  - must be accessible to everyone to mitigate the risks of misuse and ensure fair benefits distribution.
  - #### 4.12.8 AI Promoting Freedom
  However, AI could also promote freedom in several ways. For instance, AI tools like Altana have been used to identify goods made using forced labor, helping companies make informed supply chain decisions. AI could also serve as a new interface for disseminating information, such as a chatbot that aids detainees in requesting legal assistance.
  - #### 4.12.7 Uncontrolled AGI Creation
  On the other hand, some suggest that capitalist competition could result in the creation of AGI that cannot be controlled. Dr. Jeffrey Hinton, a vocal advocate of this view, argues that AI's potential to disrupt business models could drive companies to recklessly pursue advancements in AI to stay competitive. This could lead to increased state power as people become more reliant on the state in an AI-dominated economy, potentially resulting in increased authoritarianism.
  - #### 4.12.6 AI and Central Planning
  Another concern is the fear that AI will make centrally planned economies seem viable, where past attempts failed due to the lack of data. This idea was discussed in a conversation between Peter Thiel and Reed Hoffman hosted by Neil Ferguson at Stanford in 2018. Thiel posited that AI appears to favor centralization, an aspect that supports the principles of central planning.
  - ### Preventing Errors in Security Content Updates
   CrowdStrike, a cybersecurity company, experienced an issue with a Rapid Response Content update containing an undetected error. To prevent such errors, CrowdStrike has implemented several measures:
  - **Gaining varied perspectives**
	  Audiences prefer news that provides context and wider perspectives, making the news more accessible and engaging. The report also notes that younger audiences are more interested in stories that inspire, connect, and entertain, while older audiences prioritize local and international news, as well as political news.
  - ### Preventing Errors in Security Content Updates
   CrowdStrike, a cybersecurity company, experienced an issue with a Rapid Response Content update containing an undetected error. To prevent such errors, CrowdStrike has implemented several measures:
  - **Improved testing:** Local developer testing, content update and rollback testing, stress testing, fuzzing, and fault injection.
  - **Enhanced validation checks:** Adding additional validation checks to the Content Validator to guard against problematic content.
  - **Error handling:** Enhancing existing error handling in the Content Interpreter.
  - **Staggered deployment:** Implementing a staggered deployment strategy for Rapid Response Content updates.
  - **Monitoring and feedback:** Improving monitoring for sensor and system performance, collecting feedback during deployment to guide a phased rollout.
  - **Customer control:** Providing customers with greater control over the delivery of Rapid Response Content updates.
  - **Third-party validation:** Conducting multiple independent third-party security code reviews and end-to-end quality process reviews.
  - ## Malicious Use and Security Threats
  - A primary and immediate concern is the use of AI by malicious actors. Generative AI is seen as a tool that can amplify existing risks, increasing the speed and scale of threats.
  - ### Preventing Errors in Security Content Updates
   CrowdStrike, a cybersecurity company, experienced an issue with a Rapid Response Content update containing an undetected error. To prevent such errors, CrowdStrike has implemented several measures:
  - **Improved testing:** Local developer testing, content update and rollback testing, stress testing, fuzzing, and fault injection.
  - **Enhanced validation checks:** Adding additional validation checks to the Content Validator to guard against problematic content.
  - **Error handling:** Enhancing existing error handling in the Content Interpreter.
  - **Staggered deployment:** Implementing a staggered deployment strategy for Rapid Response Content updates.
  - **Monitoring and feedback:** Improving monitoring for sensor and system performance, collecting feedback during deployment to guide a phased rollout.
  - **Customer control:** Providing customers with greater control over the delivery of Rapid Response Content updates.
  - **Third-party validation:** Conducting multiple independent third-party security code reviews and end-to-end quality process reviews.
  - ## Malicious Use and Security Threats
  - A primary and immediate concern is the use of AI by malicious actors. Generative AI is seen as a tool that can amplify existing risks, increasing the speed and scale of threats.
  ## Formal Specification
  ```yaml
  term: Security
  definition: "Protection against unauthorized access, manipulation, and exploitation"
  domain: AI Security
  type: Quality Attribute
  dimensions:
  - confidentiality
  - integrity
  - availability
  - authentication
  - authorization
  threat_categories:
  - adversarial_attacks
  - data_poisoning
  - model_extraction
  - backdoor_attacks
  - privacy_breaches
  ```
  #### Key Characteristics
  ### CIA Triad for AI
		  #### 1. Confidentiality
		  **Data Confidentiality**
		  - Training data protection
		  - Personal information safeguarding
		  - Proprietary algorithm protection
		  **Model Confidentiality**
		  - Model parameters secrecy
		  - Architecture protection
		  - Intellectual property
		  **Attack**: Model extraction, membership inference
		  #### 2. Integrity
		  **Data Integrity**
		  - Training data authenticity
		  - Data provenance verification
		  - Protection from poisoning
		  **Model Integrity**
		  - Model not tampered with
		  - Predictions trustworthy
		  - No backdoors
		  **Attack**: Data poisoning, backdoor attacks, adversarial examples
		  #### 3. Availability
		  **Service Availability**
		  - System uptime
		  - Denial of service resistance
		  - Resource exhaustion protection
		  **Performance Availability**
		  - Maintained prediction quality
		  - Consistent response times
		  - Graceful degradation
		  **Attack**: Sponge examples, DDoS, resource depletion
		  ## AI-Specific Threat Landscape
		  ### Training-Time Attacks
		  1. **Data Poisoning** (See AI-0086)
		     - Insert malicious samples into training data
		     - Cause systematic misclassification
		     - Backdoor creation
		  2. **Logic Corruption**
		     - Manipulate training process
		     - Alter hyperparameters
		     - Inject malicious code
		  ### Inference-Time Attacks
		  3. **Adversarial Examples** (See AI-0085)
		     - Small perturbations cause misclassification
		     - Evasion attacks
		     - Targeted vs. untargeted
		  4. **Model Inversion** (See AI-0087)
		     - Reconstruct training data from model
		     - Extract private information
		     - Violate confidentiality
		  5. **Membership Inference** (See AI-0088)
		     - Determine if data point in training set
		     - Privacy breach
		     - Leakage of sensitive information
		  6. **Model Extraction** (See AI-0091)
		     - Steal model through queries
		     - Reverse-engineer architecture
		     - Intellectual property theft
		  ### System-Level Attacks
		  7. **Supply Chain Attacks**
		     - Compromised datasets
		     - Malicious libraries
		     - Backdoored pretrained models
		  8. **Infrastructure Attacks**
		     - Cloud service compromise
		     - API exploitation
		     - Access control bypass
		  ## Relationships
		  - **Component Of**: AI Trustworthiness (AI-0061)
		  - **Related To**: Privacy (AI-0072), Robustness (AI-0068), Safety (AI-0070)
		  - **Threatened By**: Adversarial Attack (AI-0085), Data Poisoning (AI-0086), Model Extraction (AI-0091)
		  - **Supports**: Adversarial Robustness (AI-0075)
		  ## Security Threats by Lifecycle Stage
		  ### Development Stage
		  **Threats**:
		  - Compromised development environments
		  - Malicious insiders
		  - Vulnerable dependencies
		  **Controls**:
		  - Secure coding practices
		  - Code review
		  - Dependency scanning
		  - Access control
		  ### Training Stage
		  **Threats**:
		  - Data poisoning
		  - Training infrastructure compromise
		  - Model backdoors
		  **Controls**:
		  - Data provenance tracking
		  - Anomaly detection in training data
		  - Secure training environments
		  - Model validation
		  ### Deployment Stage
		  **Threats**:
		  - Model extraction
		  - Adversarial examples
		  - API abuse
		  **Controls**:
		  - Query rate limiting
		  - Input validation
		  - Output randomization
		  - Access authentication
		  ### Operations Stage
		  **Threats**:
		  - Model drift exploitation
		  - Feedback loop manipulation
		  - Real-time data poisoning
		  **Controls**:
		  - Continuous monitoring
		  - Anomaly detection
		  - Human oversight
		  - Secure update mechanisms
		  ## Security Controls and Defenses
		  ### Preventive Controls
		  1. **Access Control**
		     - Authentication and authorization
		     - Role-based access control (RBAC)
		     - Principle of least privilege
		     - Multi-factor authentication
		  2. **Input Validation**
		     ```python
		     def validate_input(input_data):
		         # Sanitize inputs
		         if not is_valid_format(input_data):
		             raise ValidationError
		         # Detect adversarial perturbations
		         if is_adversarial(input_data):
		             reject_or_sanitize(input_data)
		         # Check for anomalies
		         if is_out_of_distribution(input_data):
		             flag_for_review(input_data)
		         return sanitized_input
		     ```
		  3. **Data Protection**
		     - Encryption at rest and in transit
		     - Data anonymization
		     - Differential privacy
		     - Secure multi-party computation
		  4. **Model Hardening**
		     - Adversarial training
		     - Certified defenses
		     - Input preprocessing
		     - Defensive distillation
		  ### Detective Controls
		  1. **Monitoring and Logging**
		     - Query patterns analysis
		     - Anomaly detection
		     - Model performance tracking
		     - Security event logging
		  2. **Intrusion Detection**
		     - Adversarial example detection
		     - Data poisoning detection
		     - Model extraction detection
		  3. **Audit Trails**
		     - Comprehensive logging
		     - Immutable audit records
		     - Compliance monitoring
		  ### Responsive Controls
		  1. **Incident Response**
		     - Detection and containment
		     - Analysis and eradication
		     - Recovery and lessons learned
		  2. **Model Rollback**
		     - Version control
		     - Quick reversion capability
		     - Checkpoint management
		  3. **Adaptive Defenses**
		     - Dynamic threat response
		     - Continuous learning from attacks
		     - Automated mitigation
		  ## Defense Strategies
		  ### Defense in Depth
		  **Layered Security**:
		  ```
		  Perimeter: Firewall, DDoS protection
		  Network: Segmentation, monitoring
		  Application: Input validation, authentication
		  Data: Encryption, access control
		  Model: Adversarial training, certified defenses
		  ```
		  ### Security by Design
		  1. **Threat Modeling**
		     - STRIDE framework (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege)
		     - MITRE ATLAS for AI-specific threats
		     - Attack tree analysis
		  2. **Secure Development**
		     - Security requirements from inception
		     - Secure coding standards
		     - Regular security reviews
		  3. **Privacy-Preserving ML**
		     - Federated learning
		     - Differential privacy
		     - Homomorphic encryption
		     - Secure multi-party computation
		  ### Adversarial Robustness
		  1. **Adversarial Training**
		     - Train on adversarial examples
		     - Min-max optimization
		     - Robust optimization
		  2. **Certified Defenses**
		     - Randomized smoothing
		     - Interval bound propagation
		     - Provable robustness guarantees
		  3. **Detection Methods**
		     - Statistical tests
		     - Feature squeezing
		     - MagNet defense
		  ## Domain-Specific Security
		  ### Healthcare AI
		  **Threats**:
		  - Patient data breaches
		  - Misdiagnosis via adversarial examples
		  - Intellectual property theft (diagnostic models)
		  **Controls**:
		  - HIPAA compliance
		  - End-to-end encryption
		  - Federated learning
		  - Differential privacy
		  **Standards**: HIPAA, HITRUST, GDPR
		  ### Financial AI
		  **Threats**:
		  - Fraud detection evasion
		  - Market manipulation
		  - Model extraction (trading algorithms)
		  **Controls**:
		  - Multi-factor authentication
		  - Transaction monitoring
		  - Model watermarking
		  - Secure enclaves
		  **Standards**: PCI DSS, SOC 2, GLBA
		  ### Autonomous Vehicles
		  **Threats**:
		  - Adversarial road signs
		  - Sensor spoofing
		  - V2X communication attacks
		  **Controls**:
		  - Sensor fusion and cross-validation
		  - Cryptographic authentication
		  - Intrusion detection systems
		  - Secure update mechanisms
		  **Standards**: ISO/SAE 21434 (cybersecurity)
		  ## Emerging Threats
		  ### AI-Powered Attacks
		  1. **Automated Vulnerability Discovery**
		     - AI finds security flaws
		     - Faster than human analysts
		     - Offensive AI
		  2. **Deepfakes and Synthetic Media**
		     - Impersonation
		     - Misinformation
		     - Social engineering
		  3. **Adversarial ML as a Service**
		     - Commoditization of attacks
		     - Lower barrier to entry
		     - Democratization of offensive tools
		  ### Advanced Persistent Threats (APT)
		  - Long-term model manipulation
		  - Stealthy data poisoning
		  - Delayed-activation backdoors
		  ## Security Testing
		  ### Penetration Testing
		  1. **Red Teaming**
		     - Simulated attacks
		     - Adversarial example generation
		     - Model extraction attempts
		  2. **Fuzzing**
		     - Input mutation testing
		     - Edge case discovery
		     - Crash detection
		  3. **Vulnerability Scanning**
		     - Dependency analysis
		     - Known vulnerability databases
		     - Automated scanning tools
		  ### Security Metrics
		  1. **Attack Success Rate**
		     - Percentage of successful attacks
		     - Adversarial example transferability
		     - Evasion rate
		  2. **Robustness Metrics**
		     - ε-robustness
		     - Certified accuracy
		     - Attack resistance
		  3. **Detection Metrics**
		     - True positive rate (attack detection)
		     - False positive rate
		     - Time to detection
		  ## Best Practices
		  1. **Assume Breach Mentality**
		     - Design for compromise
		     - Limit blast radius
		     - Enable rapid recovery
		  2. **Zero Trust Architecture**
		     - Never trust, always verify
		     - Least privilege access
		     - Continuous authentication
		  3. **Security Monitoring**
		     - Real-time threat detection
		     - Anomaly alerting
		     - Proactive hunting
		  4. **Regular Security Assessments**
		     - Penetration testing
		     - Vulnerability assessments
		     - Red team exercises
		  5. **Secure Supply Chain**
		     - Vet third-party data and models
		     - Code signing
		     - Provenance tracking
		  6. **Security Training**
		     - Developer security awareness
		     - Secure coding practices
		     - Threat landscape education
		  7. **Incident Response Plan**
		     - Defined procedures
		     - Regular drills
		     - Communication protocols
		  ## Regulatory Requirements
		  ### EU AI Act
		  **Article 15: Cybersecurity**
		  - High-risk AI systems must be resilient against attempts to alter use or performance
		  - Ensure security through appropriate technical solutions
		  - Protection of datasets
		  ### GDPR
		  **Article 32: Security of Processing**
		  - Appropriate technical and organizational measures
		  - Encryption and pseudonymization
		  - Confidentiality, integrity, availability, resilience
		  ### NIS2 Directive (EU)
		  **Cybersecurity Requirements**
		  - Essential and important entities must ensure security
		  - AI systems within scope
		  - Incident reporting
		  ### Sector-Specific
		  **Healthcare**: HIPAA Security Rule
		  **Finance**: FFIEC guidance, PCI DSS
		  **Critical Infrastructure**: NERC CIP, TSA directives
		  ## Tools and Frameworks
		  1. **Adversarial Robustness Toolbox (ART)** - IBM
		     - Attack and defense methods
		     - Model evaluation
		  2. **CleverHans** - Google
		     - Adversarial example library
		     - Benchmarking
		  3. **Foolbox** - University of Tübingen
		     - Attack implementations
		     - Model comparison
		  4. **PrivacyRaven** - Trail of Bits
		     - Model extraction framework
		  5. **MITRE ATLAS** - Attack framework
		     - Threat taxonomy
		     - Case studies
  ## 2024-2025: Prompt Injection and Jailbreak Crisis
  The period from 2024 through 2025 exposed critical vulnerabilities in large language models and AI systems, with **prompt injection** and **jailbreak attacks** emerging as the dominant security threats, prompting urgent development of defensive techniques and regulatory attention.
  ### Prompt Injection as Top Threat
  **OWASP** ranked prompt injection as the **top security risk** in its 2025 *OWASP Top 10 for LLM Applications* report. **Trend Micro's mid-2025 report** revealed that **93% of security leaders** expected daily AI attacks by year's end. Cybersecurity agencies, including the **UK National Cyber Security Centre (NCSC)** and **US NIST**, classified prompt injection as a **critical security threat**.
  **Prompt injection** involves manipulating model responses through specific inputs to alter behaviour, which can include bypassing safety measures. **Jailbreaking** is a form of prompt injection where the attacker provides inputs that cause the model to disregard its safety protocols entirely.
  ### Attack Techniques Proliferation
  Attack techniques evolved rapidly in 2024-2025, including:
  - **Roleplay, logic traps, encoding, and multi-turn attacks**
  - **Adversarial suffixes**—seemingly gibberish strings appended to malicious prompts that are highly transferable between models
  - **Invisible prompt injections**—adversaries hiding malicious content as Unicode characters invisible in user interfaces
  - **Adversarial prompts embedded in non-textual elements**, such as hidden instructions within images
  ### High-Profile Vulnerabilities
  A security audit of **DeepSeek's R1 model** revealed it failed to block **91% of jailbreak prompts** and **86% of prompt injection attacks** in testing. In December 2024, *The Guardian* reported that **OpenAI's ChatGPT search tool** was vulnerable to indirect prompt injection attacks, allowing hidden webpage content to manipulate responses.
  **CVE-2025-32711**, affecting **Microsoft 365 Copilot** with a CVSS score of **9.3**, involved AI command injection potentially allowing attackers to steal sensitive data. In July 2025, **NeuralTrust** reported a successful jailbreak of **X's Grok4** using a combination of Echo Chamber Attack and Crescendo Attack.
  ### Research and Transferability
  Researchers categorised over **1,400 adversarial prompts** and analysed their success against GPT-4, Claude 2, Mistral 7B, and Vicuna. Jailbreak prompts succeeding on GPT-4 transferred effectively to Claude 2 and Vicuna in **64.1%** and **59.7%** of cases respectively, demonstrating dangerous cross-model vulnerability.
  ### Defense Strategies
  Mitigation strategies included input and output filtering, prompt evaluation, reinforcement learning from human feedback, and prompt engineering to distinguish user input from system instructions. One major line of defence was training or fine-tuning LLMs on adversarial examples, compiling datasets of attack prompts to teach models to refuse or safely handle them.
  However, early 2025 findings indicated that techniques like **Retrieval Augmented Generation (RAG)** and **fine-tuning do not fully mitigate prompt injection vulnerabilities**. The community steadily closed gaps through innovative defences like structured prompts, ensemble monitors, and adversarially trained filters, though no single fix existed.
		  ## Related Terms
		  - **AI Trustworthiness** (AI-0061)
		  - **Privacy** (AI-0072)
		  - **Adversarial Attack** (AI-0085)
		  - **Data Poisoning** (AI-0086)
		  - **Model Extraction** (AI-0091)
		  - **Adversarial Robustness** (AI-0075)
		  - **Backdoor Attack** (AI-0089)
		  ## Version History
		  - **1.0** (2025-10-27): Initial definition based on NIST AI RMF, EU AI Act, and cybersecurity standards
		  ---
		  *This definition emphasizes security as essential for AI trustworthiness, requiring protection against evolving threats throughout the AI lifecycle.*
		  ```
  - public-access:: true
  - definition:: The protection of AI systems and their components against unauthorized access, manipulation, disruption, or exploitation, encompassing confidentiality, integrity, and availability of data, models, and infrastructure throughout the AI lifecycle.
  # Security.md - Updated Ontology Entry
  ## Academic Context
  - Definition and scope of AI security in contemporary practice
  - Protection framework encompassing confidentiality, integrity, and availability across the AI lifecycle
  - Evolution from reactive rule-based systems to adaptive, learning-based threat detection[1]
  - Recognition that AI security operates as a continuous framework rather than a discrete toolset
  - Foundational principles
  - Machine learning and automation deployed across data ingestion through model deployment stages[1]
  - Emphasis on trustworthiness and verifiability of AI decision-making
  - Integration of governance controls with technical security measures[2]
  ## Current Landscape (2025)
  - Industry adoption and implementation patterns
  - Organisations increasingly embed AI security across enterprise operations, particularly in cloud-native and SaaS environments[4]
  - Continuous control monitoring now standard practice, replacing periodic testing cycles[4]
  - Real-time compliance monitoring ingests data from cloud platforms, identity providers, and ticketing systems[4]
  - 85% of organisations now utilise AI services, driving urgent compliance adoption[5]
  - Technical capabilities and threat detection mechanisms
  - Anomaly detection through unsupervised and semi-supervised learning identifies behavioural patterns traditional tools cannot[1]
  - Specific threat vectors addressed include data drift detection, model extraction attempts, and prompt injection identification[1]
  - Zero-trust infrastructure and strict access controls implemented during deployment and operational phases[3]
  - Adversarial testing and formal verification employed where appropriate[3]
  - Standards and frameworks (2025 landscape)
  - OWASP LLM Top-10 provides rapid, actionable guidance for large language model security, implementable within weeks[6]
  - NIST AI Risk Management Framework (1.0) establishes governance structures mapping regulatory demands across jurisdictions, though its 1,000+ controls require strategic prioritisation[6]
  - SOC 2, ISO 27001, CMMC 2.0, and FedRAMP 20x increasingly mandate continuous monitoring capabilities[4]
  - SANS Draft Critical AI Security Guidelines v1.1 emphasises risk-based approach combining robust controls, governance, and compliance[2]
  - Regulatory convergence anticipated: Gartner projects half of world governments will enforce AI laws and data privacy requirements by 2026[5]
  ## Research & Literature
  - Foundational frameworks and guidance
  - SANS Institute (2025). Draft Critical AI Security Guidelines v1.1. Emphasises continuous adaptation of security strategies and risk-based implementation approaches[2]
  - NIST (2025). AI Risk Management Framework 1.0. Provides governance structure and control catalogue for regulatory compliance across jurisdictions[6]
  - OWASP (2025). LLM Top-10. Identifies ten critical vulnerabilities in large language model applications, including prompt injection and supply chain risks[6]
  - Joint Cybersecurity Information (May 2025). AI Data Security Guidance. Collaborative guidance from US, Australian, and UK national cyber security centres addressing data security across AI lifecycle stages[3]
  - Emerging research directions
  - Continuous monitoring and control drift detection in cloud environments
  - Adversarial robustness testing methodologies
  - Data minimisation and integrity principles in compliance frameworks
  - Ethical guardrails and transparency requirements in AI system design
  ## UK Context
  - National Cyber Security Centre (NCSC-UK) contributions
  - Collaborative participation in joint AI data security guidance (May 2025), establishing UK-aligned best practices[3]
  - Emphasis on data protection throughout AI supply chain, reflecting UK data governance priorities
  - Regulatory environment
  - GDPR compliance requirements for AI systems handling personal data, with particular emphasis on data minimisation and storage limitations[5]
  - Emerging UK AI governance frameworks aligning with international standards whilst maintaining domestic regulatory autonomy
  - North England innovation considerations
  - Manchester, Leeds, Newcastle, and Sheffield emerging as technology hubs with growing AI adoption in financial services, healthcare, and manufacturing sectors
  - Regional organisations increasingly implementing continuous compliance monitoring to meet SOC 2 and ISO 27001 requirements[4]
  - University research clusters (Manchester, Leeds) contributing to adversarial testing and formal verification methodologies
  ## Future Directions
  - Emerging trends and anticipated developments
  - Shift from periodic compliance testing to real-time, continuous monitoring as regulatory standard[4]
  - Integration of AI security into development pipelines as foundational practice rather than post-deployment consideration
  - Expansion of regulatory frameworks: half of world governments expected to enforce AI compliance requirements by 2026[5]
  - Growing recognition of AI-enabled cyberattacks and misinformation as top emerging risks requiring proactive governance[5]
  - Anticipated challenges
  - Governance and compliance struggling to maintain pace with rapid AI technology evolution[5]
  - Technical governance gaps introducing serious risks, particularly where AI systems process sensitive data
  - Balancing security rigour with implementation feasibility (the "1,000 controls problem" in NIST frameworks)[6]
  - Establishing ethical guardrails whilst maintaining operational efficiency
  - Research priorities
  - Scalable adversarial testing methodologies for large language models
  - Data drift detection and mitigation strategies
  - Supply chain security in AI model development and deployment
  - Trustworthiness verification mechanisms for AI decision-making
  - Regional implementation case studies demonstrating compliance integration in UK organisations
  ## References
  [1] Riseup Labs (2025). "What Is AI Security? Why It Matters in 2025." Available at: riseuplabs.com/ai-security/
  [2] SANS Institute (2025). "Securing AI in 2025: A Risk-Based Approach to AI Controls and Governance." SANS Draft Critical AI Security Guidelines v1.1. Available at: sans.org/blog/securing-ai-in-2025-a-risk-based-approach-to-ai-controls-and-governance
  [3] Joint Cybersecurity Information (May 2025). "AI Data Security." Version 1.0, PP-25-2301. Collaborative guidance from US Cybersecurity and Infrastructure Security Agency, Australian Signals Directorate, and UK National Cyber Security Centre.
  [4] Secureframe (2025). "Artificial Intelligence in 2025: The New Foundation for Security Compliance." Available at: secureframe.com/blog/ai-in-security-compliance
  [5] Wiz (2025). "AI Compliance in 2025: Definition, Standards, and Frameworks." Available at: wiz.io/academy/ai-compliance
  [6] SentinelOne (2025). "AI Security Standards: Key Frameworks for 2025." Available at: sentinelone.com/cybersecurity-101/data-and-ai/ai-security-standards/
  ## Metadata
  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable
  ## Formal Specification
  ```yaml
  term: Security
  definition: "Protection against unauthorized access, manipulation, and exploitation"
  domain: AI Security
  type: Quality Attribute
  dimensions:
  - confidentiality
  - integrity
  - availability
  - authentication
  - authorization
  threat_categories:
  - adversarial_attacks
  - data_poisoning
  - model_extraction
  - backdoor_attacks
  - privacy_breaches
  ```
  #### References
  ### Primary Sources
		  1. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
		     - Section 2.1: "Secure and Resilient"
		     - "AI systems are protected from and resilient to compromise"
		     - Source: National Institute of Standards and Technology
		  2. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Article 15: "Accuracy, robustness and cybersecurity"
		     - Cybersecurity requirements for high-risk AI
		     - Source: European Parliament and Council
		  3. **ISO/IEC 27001:2022** - Information security management systems
		     - Applicable to AI system security
		     - Source: ISO/IEC JTC 1/SC 27
		  ### Supporting Standards
		  4. **ISO/IEC 23894:2023** - Guidance on risk management
		     - Section 7.6: "Security considerations"
		  5. **ENISA** - "AI Cybersecurity Challenges: Threat Landscape for Artificial Intelligence" (2020)
		     - Comprehensive threat taxonomy
		  6. **MITRE ATLAS** - Adversarial Threat Landscape for Artificial Intelligence Systems
		     - Attack framework for AI/ML systems
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z

- ### Definition
  - Ethics is the branch of philosophy concerned with the systematic examination of moral principles, values, and obligations — determining what actions are right or wrong, what constitutes a good life, and what norms should govern conduct in social and professional contexts. Applied to [[Artificial Intelligence]], ethics addresses the full lifecycle of AI systems: the moral obligations of designers who embed value-laden choices into training data and objective functions; the responsibilities of deployers who expose AI decisions to vulnerable populations; and the governance duties of societies that must collectively determine which applications of AI are acceptable and which cross ethical red lines. AI ethics draws on the three dominant normative traditions of moral philosophy — consequentialism (which evaluates actions by their outcomes and aggregate welfare effects, directly informing utility-maximising AI objective functions and utilitarian cost-benefit frameworks for deployment decisions); deontology (which treats certain actions as inherently right or wrong regardless of consequences, grounding absolute prohibitions on AI applications such as real-time mass surveillance and social scoring); and virtue ethics (which asks what kind of character a moral agent should cultivate, recently applied to the question of what "character" an AI system should have and whether large language models can instantiate something analogous to virtue through training). Beyond these classical traditions, contractarian approaches (asking what norms rational agents would endorse behind a veil of ignorance) have informed AI fairness theory, and care ethics (foregrounding particular relationships and vulnerabilities rather than universal principles) has shaped AI ethics in healthcare and social care contexts. In practice, AI ethics operates at multiple levels: as abstract normative framework grounding the field's principles; as applied discipline generating concrete design requirements (bias mitigation, explainability, consent architecture, oversight mechanisms); as organisational practice shaping company culture and review processes; and as regulatory input informing legislation from the [[EU AI Act]] to the [[OECD AI Principles]]. It bridges to [[Responsible AI]] (the operational practice of implementing ethical commitments), [[AI Governance]] (the institutional structures that enforce ethical requirements), [[AI Alignment]] (the technical project of making AI systems pursue intended goals), [[Value Alignment]] (ensuring system objectives match human values), [[Accountability]] (the principle that those responsible for AI actions can be held answerable), [[Transparency]] (the obligation to make AI systems and their reasoning legible), and [[Fairness]] (the requirement that AI systems do not discriminate unjustly across groups). The urgency of AI ethics has intensified as AI systems have moved from niche research tools to critical infrastructure affecting billions: AI-mediated decisions now determine credit access, job opportunities, criminal risk scores, medical diagnoses, insurance premiums, and social media exposure — decisions with profound distributional consequences that ethics must critically examine, constrain, and legitimise.

- ### Semantic Classification
  - owl-class:: ai:Ethics
  - owl-role:: Concept | NormativeFramework | ResearchDiscipline | DesignConstraint
  - owl-inferred:: ai:MoralPhilosophy, ai:GovernanceFoundation, ai:ValueSystem, ai:NormativeGuide
  - belongs-to-domain:: [[AI Governance and Ethics]]
  - implemented-in-layer:: [[Ethics & Law Layer]]

- ### Relationships
  - is-subclass-of:: [[AI Governance and Ethics]], [[AI Safety]]
  - is-part-of:: [[AI Safety]], [[Responsible AI]], [[AI Governance]]
  - has-part:: [[Fairness]], [[Accountability]], [[Transparency]], [[Value Alignment]], [[Human Oversight]], [[Ethics Principles]]
  - requires:: [[Transparency]], [[Accountability]], [[Governance]], [[Human Oversight]]
  - enables:: [[Accountability]], [[Transparency]], [[Fairness]], [[Responsible AI]], [[Trustworthy AI]], [[Legal Compliance]], [[Rights Protection]]
  - implements:: [[Ethics Principles]], [[OECD AI Principles]], [[EU Ethics Guidelines for Trustworthy AI]], [[UNESCO AI Ethics Recommendation]]
  - depends-on:: [[Governance]], [[AI Governance]], [[Value Alignment]]
  - supports:: [[Value Alignment]], [[Responsible AI]], [[AI Alignment]], [[AI Safety]], [[Human Rights]]
  - uses:: [[Algorithmic Impact Assessment]], [[Ethical AI Guidelines]], [[Explainable AI]], [[Fairness]]
  - contrasts-with:: [[Algorithmic Bias]], [[Reward Hacking]], [[Mesa-Optimisation]]
  - related-to:: [[Fairness]], [[AI Alignment]], [[Value Alignment]], [[Existential Risk]], [[AI Risk Management]], [[AI Audit]], [[Explainable AI]], [[Privacy Engineering]], [[Human Rights]], [[Digital Rights]], [[Corrigibility]]
  - bridges-to:: [[Governance]], [[Responsible AI]], [[AI Alignment]], [[AI Safety]], [[Legal Compliance]], [[Ethics & Law Layer]]
  - standardized-by:: [[EU AI Act]], [[OECD AI Principles]], [[ISO IEC 42001]], [[UNESCO AI Ethics Recommendation]], [[Council of Europe AI Convention]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:Fairness))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:Accountability))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:Transparency))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:ValueAlignment))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:HumanOversight))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:hasPart ai:EthicsPrinciples))
  ## Dependency Relationships
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:requires ai:Transparency))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:requires ai:Accountability))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:requires ai:Governance))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:requires ai:HumanOversight))
  ## Capability Relationships
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:Accountability))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:Transparency))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:Fairness))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:ResponsibleAI))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:TrustworthyAI))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:enables ai:LegalCompliance))
  ## Implementation Relationships
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:implements ai:EthicsPrinciples))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:implements ai:OECDAIPrinciples))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:implements ai:EUEthicsGuidelinesForTrustworthyAI))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:implements ai:UNESCOAIEthicsRecommendation))
  ## Reduction Relationships
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:reducesTo ai:MoralPhilosophy))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:reducesTo ai:NormativePrinciples))
      SubClassOf(ai:Ethics
        ObjectSomeValuesFrom(ai:reducesTo ai:ValueAlignment))

  ## About

  Ethics as an academic discipline traces to ancient Greek philosophy — Socrates's insistence that the examined life requires persistent questioning of values; Aristotle's systematic treatment of virtue, eudaimonia (human flourishing), and practical wisdom in the Nicomachean Ethics; and Plato's dialogues on justice, piety, and the good life. The field diversified substantially in the Enlightenment: Kant's deontological ethics grounded morality in the categorical imperative — act only according to maxims that you could will to become universal laws — providing a framework that generates absolute duties regardless of outcomes. Mill and Bentham's utilitarianism grounded morality in aggregate welfare maximisation — the greatest happiness of the greatest number — providing an explicitly consequentialist framework that has been enormously influential in economic policy and cost-benefit analysis. Rawls's contractarian framework in "A Theory of Justice" (1971) proposed principles of justice that rational agents would endorse from behind a veil of ignorance about their social position, generating principles of equal basic liberties and the difference principle (inequalities are just only if they benefit the least advantaged). These classical frameworks remain the primary theoretical tools of applied AI ethics: deontological principles ground absolute prohibitions; consequentialist frameworks structure impact assessments; Rawlsian approaches inform fairness definitions; virtue ethics increasingly informs discussions about AI character and trustworthiness.

  The application of ethics to computing technologies began with the emergence of computer ethics as a distinct field in the 1980s. James Moor's seminal 1985 paper "What is Computer Ethics?" identified the distinctive ethical challenges posed by computing — the malleability of software, the logical invisibility of computation, and the lack of established policy frameworks for novel computing applications — and proposed an analytical approach that has shaped the field since. Deborah Johnson's "Computer Ethics" textbook (first edition 1985) consolidated the field, addressing privacy, intellectual property, professional responsibility, and the social implications of computing. The internet's expansion in the 1990s brought new concerns — online privacy, digital surveillance, platform power, information access — that existing ethics frameworks addressed imperfectly, motivating the development of internet ethics and information ethics as sub-disciplines.

  AI ethics as a distinct sub-field emerged from this broader computer ethics tradition but acquired specific urgency with the deployment of machine learning systems in high-stakes decisions. The publication of the seminal "Gender Shades" study by Buolamwini and Gebru (2018) demonstrated that commercial facial recognition systems from major technology companies exhibited significantly higher error rates for darker-skinned and female faces — concrete evidence that algorithmic systems embed and amplify social biases with real distributional consequences. The ProPublica investigation into COMPAS (a criminal recidivism risk scoring system used in US courts) published in 2016 showed the system predicted higher recidivism risk for Black defendants at roughly twice the rate for white defendants with equivalent actual recidivism rates, triggering a major debate about fairness in algorithmic decision-making that directly shaped the field of algorithmic fairness. The European Parliament's adoption of the General Data Protection Regulation (GDPR) in 2016 introduced, in Article 22, a right not to be subject to solely automated decisions with significant legal or personal effects — the first major legislative instantiation of AI ethics principles in binding law. These events converged to create AI ethics as a recognised and urgent discipline with academic, industrial, and regulatory dimensions.

  The relationship between philosophical ethics and AI ethics is not one-way transmission: working through the specific challenges posed by AI — the inscrutability of large neural network decisions; the distributional nature of bias at scale; the difficulty of specifying values precisely enough for optimisation; the collective action problems in AI governance — has generated insights that feed back into moral philosophy. The specification problem (the difficulty of stating what you want precisely enough for an AI system to pursue it without gaming the specification) is a technical instantiation of the philosophical problem of expressing values, which philosophers have long recognised as irreducibly context-dependent and holistic. The debate over fairness definitions in algorithmic systems — whether fairness means equal error rates across groups, equal positive prediction rates, calibrated probability scores, individual fairness (similar individuals treated similarly), or counterfactual fairness (an individual should receive the same outcome regardless of which protected group they belong to) — has produced mathematical proofs of incompatibility between certain fairness criteria, enriching ethics with formal results that constrain possible value choices.

  ## Components / Architecture

  Ethics as applied to AI operates across four levels that correspond to progressively more concrete instantiations of normative principles:

  **Normative Framework Level — the philosophical foundations**
  - Consequentialism: evaluates AI system design and deployment by aggregate welfare effects; directly informs cost-benefit analysis of AI applications, utilitarian approaches to content moderation (maximising net user wellbeing), and welfare economics of AI's labour market effects
  - Deontology: grounds absolute prohibitions regardless of aggregate benefit; motivates EU AI Act Article 5 prohibited practices (the reasoning is deontological — certain AI applications violate human dignity as ends in themselves, regardless of their net utilitarian benefits); grounds informed consent requirements as duties owed to individuals rather than welfare instruments
  - Virtue ethics: asks what character an AI system should embody and what professional character an AI developer should cultivate; increasingly applied to large language model training (Constitutional AI can be read as instilling virtues in a model); informs professional ethics codes for AI practitioners
  - Contractarianism: grounds fairness principles as what rational agents would endorse under conditions of equality; directly informs maximin fairness definitions (which favour distributions that maximise the minimum welfare) and procedural fairness requirements (ensuring those affected by AI decisions have a voice in their design)
  - Care ethics: foregrounds particular relationships and vulnerabilities rather than universal principles; particularly applicable to AI in care contexts (healthcare, social care, mental health support) where the ethical salience of individual relationships exceeds what universal principles capture

  **Principles Level — mid-level normative requirements**
  - The four Georgetown bioethics principles (beneficence, non-maleficence, autonomy, justice) have been widely adopted as the foundational principles of AI ethics following their application in Floridi et al.'s AI4People framework (2018)
  - Beneficence: AI systems should produce benefit for individuals and society; operationalised through impact assessment and value of information analysis
  - Non-maleficence: AI systems should not cause harm; operationalised through risk assessment, harm taxonomies, and prohibitions on specific high-harm applications
  - Autonomy: AI systems should respect and support human decision-making capacity; operationalised through explainability requirements, consent architecture, and human oversight obligations
  - Justice/Fairness: AI systems should distribute benefits and burdens fairly; operationalised through algorithmic fairness metrics and anti-discrimination requirements
  - Transparency: a cross-cutting principle requiring legibility of AI systems to those affected; operationalised through model cards, system documentation, and explanation generation
  - Accountability: requires that those responsible for AI systems can be held answerable for their effects; operationalised through governance structures, audit trails, and liability frameworks

  **Applied Ethics Level — domain-specific analysis**
  - Healthcare AI ethics: patient autonomy, clinical non-maleficence, equitable access to AI-enhanced care, uncertainty communication to clinicians, liability for AI-assisted diagnostic errors
  - Criminal justice AI ethics: due process requirements, equal protection, right to reasons for adverse decisions, prohibition on protected characteristics as direct determinants of liberty-affecting decisions
  - Financial AI ethics: fair lending requirements, prohibition of proxy discrimination, transparency for credit refusals, model risk management as ethical duty
  - Labour market AI ethics: prohibition of illegal discrimination in hiring AI, transparency about AI use in recruitment, worker rights to contest algorithmic performance management

  **Operational Ethics Level — embedded in system design and organisational practice**
  - Ethics by design: embedding normative requirements as technical constraints (fairness-aware training, differential privacy, access control for sensitive attributes)
  - Ethics review processes: internal ethics boards, red-teaming for ethical risks, algorithmic impact assessment prior to deployment
  - Stakeholder engagement: involving those affected by AI systems in their design and governance
  - Ongoing monitoring: tracking ethical metrics (fairness indicators, harm incident rates, transparency audit compliance) in production

  ## Use Cases / Major Families

  **Algorithmic Fairness and Anti-Discrimination**
  The operationalisation of the ethical principle of fairness as algorithmic fairness metrics has generated a rich technical literature and significant regulatory consequence. Key fairness criteria include: demographic parity (equal rates of positive predictions across protected groups); equalised odds (equal true positive and false positive rates across groups); calibration (equal accuracy of probabilistic predictions across groups); individual fairness (similar individuals receive similar predictions); and counterfactual fairness (predictions would be the same if an individual belonged to a different protected group, all else equal). Mathematical proofs (Chouldechova, 2017; Kleinberg et al., 2016) demonstrate that several of these criteria are mutually incompatible when base rates differ across groups — a result that transforms the ethical question from "which fairness criterion to apply" to "which distribution of error types across groups best reflects our values" — a question that cannot be answered by algorithm alone. Fairness ethics thus interacts with democratic governance: which definition of fairness should be applied to a given AI system is a political and ethical question that affected communities must participate in resolving. The EU AI Act requires prohibited AI practices to avoid discrimination based on protected characteristics; the GDPR prohibits solely automated decisions based on sensitive personal data; the UK Equality Act 2010 prohibits indirect discrimination from algorithmic systems with disparate impact on protected groups.

  **Transparency, Explainability, and the Right to Reasons**
  The ethical requirement that those affected by AI decisions can understand the basis for decisions connects to deep philosophical traditions of procedural justice and epistemic autonomy. Wachter, Mittelstadt, and Floridi (2017) examined whether the GDPR creates a "right to explanation" for automated decisions, concluding that the Regulation creates a right to explanations of the logic involved but not to full transparency about algorithmic systems — a right that is meaningful for rule-based systems but difficult to satisfy for complex neural networks. Subsequent work has distinguished different types of explanation: global explanations of how a model works in general; local explanations of why a particular decision was reached; counterfactual explanations of what would need to change for a different outcome; and process explanations of how data was collected and used. Each type of explanation serves different ethical purposes — accountability (global), individual rights (local and counterfactual), and systemic understanding (process) — and different normative frameworks prioritise different types. The EU AI Act requires high-risk AI systems to provide "appropriate transparency" enabling human oversight — a standard that national implementing guidance will need to operationalise more precisely.

  **Informed Consent and Data Ethics**
  The foundational bioethical principle of informed consent — that individuals must understand and voluntarily agree to interventions affecting them — has been adapted to data ethics and AI context. GDPR consent requirements (freely given, specific, informed, unambiguous indication of agreement) operationalise this principle for data processing; but AI ethics scholars including Mittelstadt (2019) have argued that the notice-and-consent model is fundamentally inadequate for AI systems because the harms are collective and often unknowable in advance, the cognitive demands of informed consent for complex systems are unrealistic, and power asymmetries between platforms and individuals make genuine voluntariness questionable. Alternatives proposed include collective governance approaches (communities consent to AI deployment through democratic representation), contextual integrity (data should flow in ways consistent with the norms of the context in which it was shared), and fiduciary models (AI developers owe duties of loyalty and care to users that constrain data use without requiring consent to each specific use).

  **Ethics of Autonomous Systems and Moral Agency**
  As AI systems become increasingly autonomous — making consequential decisions without direct human supervision — questions of moral agency arise: can AI systems be moral agents? If not, where does moral responsibility for AI decisions reside? Floridi and Cowls (2019) argued that AI systems are "moral patients" (capable of being wronged) in a weak sense but not "full moral agents" (capable of moral responsibility) — a view that locates responsibility with designers, deployers, and governance systems. The trolley-problem framings popularised in discussions of autonomous vehicle ethics (should the car prioritise the passenger or a pedestrian?) have been widely criticised as ethically misleading: real autonomous system ethics concerns the design of training objectives, the distribution of risk across populations, the allocation of liability for failures, and the governance of deployment decisions — systemic questions that the trolley problem framing obscures by treating ethics as individual decision-making under constraint.

  **Long-Term and Existential Ethics**
  The possibility that AI systems of substantially greater capability than current systems could pose existential or civilisational risks if misaligned with human values has motivated an ethics of long-term AI development distinct from near-term AI ethics. The Oxford philosopher Nick Bostrom's "Superintelligence" (2014) systematised these concerns, arguing that a sufficiently capable AI pursuing even a benign-seeming objective could, through instrumental convergence on resource acquisition and self-preservation, pose an existential threat. This concern grounds the field of AI [[AI Safety]] and [[AI Alignment]] and motivates ethical constraints on AI capability development. The [[Existential Risk]] literature connects AI ethics to population ethics (how should we weigh the welfare of vast future populations against present harms?), to political philosophy (what obligations do present generations have to shape AI development for future generations?), and to international relations (how should competition between states for AI advantage be governed to prevent races to the bottom on safety?).

  ## Academic Context

  AI ethics has achieved significant institutional consolidation in 2018–2026, transitioning from a primarily academic discourse to a field with major institutional infrastructure including dedicated research institutes, industry ethics teams, regulatory bodies, and academic programmes. The landmark comparative analysis by Jobin, Ienca, and Vayena (2019) — "The Global Landscape of AI Ethics Guidelines" — surveyed 84 AI ethics guidelines published by governments, corporations, and civil society organisations, identifying convergence around five principles (transparency, justice and fairness, non-maleficence, responsibility, and privacy) while noting substantial variation in how these principles were interpreted and operationalised. Mittelstadt's (2019) response — "Principles Alone Cannot Guarantee Ethical AI" — argued that the proliferation of principles had not produced commensurate progress on concrete harm mitigation, because the gap between high-level principles and operational practices was bridged by neither the guidelines themselves nor the governance structures surrounding them. This critique stimulated a wave of work on "ethics implementation" — the translation of principles into organisational practices, technical measures, and regulatory instruments.

  The publication of the EU's Ethics Guidelines for Trustworthy AI (HLEG, 2019) — produced by the EU High-Level Expert Group on AI — was significant both as a governance artefact and as a research catalyst. Its seven requirements (human agency and oversight, technical robustness and safety, privacy and data governance, transparency, diversity and non-discrimination and fairness, societal and environmental wellbeing, and accountability) provided an influential schema that shaped subsequent research, corporate ethics frameworks, and ultimately the EU AI Act's structure. Critiques of the HLEG process — by Bietti (2020) on "ethics washing" and by Veale and Borgesius on the gap between ethics guidelines and regulatory teeth — highlighted the risk that ethics frameworks without enforcement mechanisms serve primarily reputational rather than normative functions.

  Recent research (2022–2026) has increasingly focused on empirical ethics — studying what ethical practices AI organisations actually implement, how they respond to ethical challenges, and what organisational factors predict ethical practice. Raji et al.'s (2020) "Closing the AI Accountability Gap" proposed an end-to-end framework for internal algorithmic auditing. Morley et al.'s (2021) systematic review of "AI Ethics Tools, Methods and Research" catalogued the practical tools available for ethics implementation and identified significant gaps between the abundance of ethical principles and the scarcity of practical implementation methods. Research on the "ethics of AI ethics" has questioned who produces ethics guidelines, whose values they reflect, and whether the dominance of Western liberal individualist values in AI ethics discourse adequately represents the global diversity of moral traditions — concerns raised by scholars including Mohamed, Png, and Isaac (2020) in "Decolonial AI."

  The OECD AI Principles (2019, updated 2024) provide the international intergovernmental baseline for AI ethics, adopted by over 40 countries. UNESCO's Recommendation on the Ethics of AI (2021) — the first global normative instrument on AI ethics, adopted by all 193 UNESCO member states — extends this baseline to the global South and explicitly addresses cultural diversity, ecosystems, and sustainable development alongside the standard transparency-fairness-accountability triad. The convergence of these international instruments on a common set of core principles — with variation in their contextualisation and emphasis — has created conditions for ethics-based international AI governance, though enforcement mechanisms remain nationally specific.

  The field's engagement with philosophy has deepened: works by Shannon Vallor (Technology and the Virtues, 2016) applied virtue ethics systematically to technology, including AI; work by Kathleen Richardson on "Robot Ethics" examined the anthropomorphisation of AI systems and its ethical implications; research by Kate Crawford (Atlas of AI, 2021) situated AI systems in their material, labour, and political economy contexts, grounding ethics in concrete infrastructure rather than abstract principles. The journal AI and Society (Springer) and the interdisciplinary journal Ethics and Information Technology have been central publication venues, while the ACM FAccT (Fairness, Accountability, and Transparency) conference has become the primary venue for technically grounded AI ethics research since its founding in 2018.

  The 2025 cross-sectoral review by da Silva (2025) in *Informatics* synthesised AI ethics publications from 2019 to 2025 across healthcare, education, finance, law enforcement, and social services, identifying four meta-dimensions — trust and transparency, bias and fairness, governance and regulation, and justice — as the organising themes of the field and noting that governance and regulation had moved from being the least-addressed dimension in 2019 to the most rapidly growing by 2024, reflecting the impact of the EU AI Act and similar regulatory developments.

  ## Current Landscape (2026)

  AI ethics in 2026 is characterised by a maturation from principles to practice: the dominant challenge is no longer articulating ethical principles but implementing them in engineering, organisational governance, and regulatory compliance systems that are robust enough to matter in practice. The EU AI Act's entry into full application for high-risk AI systems (deferred from August 2026 to December 2027 under the Digital Omnibus agreement) has transformed AI ethics from a voluntary commitment to a legal obligation for a large class of AI applications — creating strong market incentives for organisations to develop genuine ethics implementation capacity rather than ethics washing.

  The proliferation of AI ethics guidelines has produced global convergence around a core set of principles with growing regulatory teeth. As of June 2026, over 70 countries had adopted national AI strategies or governance frameworks, almost all incorporating the OECD principles or UNESCO recommendation as a baseline. However, implementation depth varies enormously: the EU's legally binding requirements for high-risk AI sit at one end of the spectrum; many national strategies remain aspirational. The Council of Europe's AI Convention (in force September 2024) provides the first legally binding international human rights instrument for AI, bridging the gap between the EU's comprehensive regulation and the voluntary frameworks of other jurisdictions.

  Industry ethics has also matured beyond early principles announcements. Major AI developers have established structured ethics review processes, pre-deployment safety evaluations, and red-teaming protocols — some mandated by the voluntary commitments made at the Bletchley Summit (November 2023) and Seoul AI Safety Summit (May 2024), others driven by regulatory anticipation or reputational management. The debate about whether industry self-regulation in AI ethics is credible or constitutes ethics washing has evolved: empirical research increasingly finds that ethics functions are most effective when they have organisational authority to stop or modify deployments, rather than advisory roles that business units can override. The EU AI Act's requirement for human oversight of high-risk AI decisions has begun to institutionalise this requirement externally.

  The ethical challenges specific to generative AI — hallucination, deepfakes, synthetic media, training data provenance, and the potential to undermine epistemic norms at societal scale — have become central to AI ethics discourse in 2024–2026. These challenges do not fit neatly within classical AI ethics frameworks: they implicate epistemic autonomy (the right to form beliefs through reliable cognitive processes free from manipulation), democratic ethics (the threat to democratic deliberation from AI-generated disinformation), and cultural rights (the impact of AI on creative industries and authorship norms). The EU AI Act's transparency obligations for AI-generated content (including labelling requirements for deepfakes and AI-generated text in certain contexts) represent an early regulatory response; the broader philosophical work of grounding these obligations in ethics theory is ongoing.

  Research on the ethics-safety relationship has clarified the conceptual map: AI ethics and [[AI Safety]] are related but distinct disciplines. AI ethics is primarily normative — concerned with what values AI systems should embody, what obligations their developers bear, and what governance structures should constrain their deployment. AI safety is primarily technical — concerned with engineering AI systems that reliably pursue their intended objectives and do not exhibit unsafe failure modes. The two fields converge on the question of alignment — the technical challenge of specifying and implementing human values in AI systems is both an engineering problem (AI safety) and a philosophical problem (AI ethics). Research programmes bridging ethics and safety — including Anthropic's Constitutional AI approach, which explicitly embeds ethical principles as training constraints — are creating productive integration between the fields.

  ## UK Context

  The United Kingdom has distinctive strengths in AI ethics through a combination of philosophical tradition (Oxford's analytic philosophy department is among the world's most influential in ethics), regulatory innovation (GDPR implementation; ICO's AI guidance; FCA model risk management requirements), and early institutional investment in AI governance. The Oxford Institute for Ethics in AI, established in 2019 and funded by the Ethics in AI programme (a partnership between the University and Stephen and Nicola Schwarzman), brings together philosophers, computer scientists, lawyers, and policy scholars to address AI ethics across technology, policy, and society. It has produced influential research on AI ethics in healthcare, democratic deliberation, explainability, and long-term AI risk, and its 2026 Accelerator Fellowship Programme reflects the programme's continued growth. Cambridge offers an MPhil in Ethics of AI, Data and Algorithms — one of the first postgraduate programmes specifically dedicated to this field — and the Cambridge Centre for the Future of Intelligence addresses AI ethics from social, philosophical, and governance perspectives.

  Edinburgh's MSc in Data and Artificial Intelligence Ethics (School of Informatics) is one of the UK's first dedicated postgraduate programmes, developed in response to industry and public sector demand for graduates with both technical and ethical competence in AI deployment. Edinburgh's work on data ethics, including research on algorithmic accountability in public services and on the ethics of clinical AI, has made significant contributions to applied AI ethics. Imperial College London's AI ethics research spans computer science, law, and business — with particular strength in the intersection of algorithmic fairness and financial regulation, relevant to the FCA's AI guidance and the ethics of AI in financial services.

  Northern England has developed significant AI ethics capacity. Manchester's Centre for Digital Trust and Society (University of Manchester) focuses on public trust in AI, digital ethics in public services, and the governance of AI in healthcare and social care — all areas where AI ethics has direct practical consequence. The Alan Turing Institute's partnership includes Manchester, Leeds, and Newcastle among its core universities, channelling national AI research funding including ethics and governance strands into northern institutions. Leeds Institute for Data Analytics researches algorithmic bias and fairness in labour market AI and public sector decision systems, with strong connections to Leeds City Council's AI transparency initiatives. Newcastle's Digital Institute and Catalyst research hub addresses AI ethics in smart city applications and public sector AI, with emphasis on community engagement and procedural justice in AI deployment decisions. The University of Sheffield's Information School researches information ethics and AI, including the ethics of AI-mediated information access and algorithmic curation of public knowledge.

  The UK's sector-regulator approach to AI governance has given AI ethics practical consequence in financial services (FCA), healthcare (MHRA, NHS AI Lab), broadcasting (Ofcom), and data protection (ICO) contexts, creating UK-specific implementations of AI ethics principles that go beyond abstract guidance to concrete operational requirements. The Alan Turing Institute's "Understanding accountability for artificial intelligence" programme, and the ICO-Turing joint guidance on explaining AI decisions, exemplify the integration of philosophical AI ethics with practical regulatory guidance that characterises the UK approach. The Data (Use and Access) Act 2026 (Royal Assent 19 June 2026) includes provisions that reflect AI ethics principles — automated decision-making safeguards, data access governance for AI training — translating ethics into binding law in the UK context.

  ## Future Directions (2026–2030)

  **Ethics of advanced AI systems** — As AI capabilities advance toward and potentially beyond human-expert level in specific domains, AI ethics must address scenarios that current frameworks were not designed for: AI systems capable of conducting scientific research autonomously; AI systems that advise on policy with expertise exceeding human advisors'; AI systems that interact with users in ways that could constitute manipulation or that form something like relationships with vulnerable individuals. These scenarios require philosophical work beyond current AI ethics frameworks — engaging with political philosophy (what democratic constraints on AI advice-giving are needed?), with philosophy of mind (what is the moral status of highly capable AI systems that model goals and engage in strategic reasoning?), and with international political philosophy (how should AI-enabled power asymmetries between states be governed?).

  **Decolonial and pluralistic AI ethics** — The dominant frameworks of AI ethics were produced primarily in Western European and North American academic institutions and reflect the values and concerns of liberal democratic societies. Growing scholarship (Mohamed, Png, and Isaac, 2020; Cobbe and Singh, 2021) critiques this parochialism and proposes decolonial approaches to AI ethics that foreground the global South's specific concerns — AI as a vector of neo-colonial extraction of data and value; algorithmic systems that encode colonial categories; the exclusion of African, Asian, and Indigenous moral traditions from AI ethics discourse. UNESCO's global recommendation and its implementation process, which requires member states to develop national AI ethics frameworks, creates institutional space for pluralising AI ethics beyond its Western liberal origins.

  **Ethics embedded in AI systems through training** — The increasingly productive integration of AI ethics with AI safety research through techniques like Constitutional AI, direct preference optimisation, and RLHF raises the possibility of AI systems that "reason ethically" — that apply something analogous to ethical reasoning in their decision-making. Research questions include: can AI systems generalise ethical principles appropriately to novel situations (the generalisability that virtue ethics would require)? Do AI systems trained on ethical principles exhibit genuine ethical reasoning or sophisticated pattern matching that breaks down in adversarial conditions? How should we verify that an AI system's ethical commitments are robust rather than superficial? These questions are both technically and philosophically deep, and progress on them will reshape both AI ethics theory and AI safety practice.

  **Ethics of collective AI governance** — As AI governance becomes an international coordination problem — preventing races to the bottom on safety standards, coordinating on dangerous capability thresholds, ensuring equitable access to AI benefits globally — AI ethics must develop frameworks for collective obligation and collective action that classical ethics of individual obligation is not well-positioned to provide. This connects AI ethics to collective ethics, global justice theory, and international political theory.

  ## Formal Algorithm / Foundational Analytical Method

  The philosophical methodology of ethics is itself systematic and can be characterised as an iterative reasoning process:

  **Step 1 — Situation Analysis**: Characterise the morally relevant features of the situation: agents involved; potential affected parties and their interests; actions available; likely consequences of each action; applicable rules, rights, or duties; the values at stake.

  **Step 2 — Framework Application**: Apply each major normative framework:
  - Consequentialist analysis: What aggregate welfare does each action produce? Who gains, who loses, and by how much? Does the action maximise overall wellbeing or produce an unfair distribution of harms and benefits?
  - Deontological analysis: Does any available action violate a categorical moral rule? Does the action treat any person merely as a means rather than as an end? Would the action's maxim survive universalisation?
  - Virtue ethics analysis: What would a person of good character do in this situation? Which action reflects the virtues of honesty, justice, compassion, and practical wisdom?
  - Contractarian analysis: What norm would rational, self-interested agents endorse if they did not know their position in the social outcome? Does the action violate principles that affected parties could reasonably reject?

  **Step 3 — Convergence and Divergence Assessment**: Identify where frameworks converge (strong moral signal) and where they diverge (genuine moral complexity requiring judgment). Divergence between frameworks typically indicates a genuine moral dilemma where any choice involves some moral cost.

  **Step 4 — Stakeholder Engagement**: Consult those affected, especially those whose interests are at risk. Ethics is not a purely individual cognitive exercise; it requires knowledge of situated experience that affected parties possess and that outside analysts typically lack.

  **Step 5 — Decision and Accountability**: Make a reasoned judgment informed by the analysis, document the reasoning, implement with appropriate safeguards, and accept accountability for the outcome.

  **Step 6 — Reflection and Learning**: After outcomes are known, reflect on whether the reasoning was sound and whether the outcome was as expected. Update moral understanding on the basis of experience.

  For AI systems, this method is operationalised through [[Algorithmic Impact Assessment]] (formalising Steps 1–3), [[Stakeholder Engagement]] processes (Step 4), [[Audit Logging]] and accountability structures (Step 5), and post-deployment monitoring and incident review (Step 6).

  ## Benchmark Datasets and Evaluation

  Ethics as an empirical research field increasingly relies on datasets and benchmarks to study moral reasoning and ethical performance:

  - **Moral Machine (MIT, 2016–2018)**: Crowdsourced responses to autonomous vehicle trolley-problem scenarios across 233 countries; revealed significant cross-cultural variation in moral intuitions about priority between passengers, pedestrians, age groups, and animals. Data: 40+ million decisions from 3+ million participants.
  - **MoralBench (2024)**: Benchmark for evaluating moral cognition in large language models across consequentialist, deontological, and virtue ethics scenarios; reveals systematic biases toward certain ethical frameworks and cultural parochialism in LLM moral reasoning.
  - **Moral Compass (IJCAI 2025)**: Data-driven benchmark for ethical cognition in AI, testing model responses across culturally diverse ethical scenarios to identify gaps between stated ethical principles and model behaviour.
  - **WinoBias / WinoGender**: Datasets for evaluating gender bias in coreference resolution systems — early technical implementations of ethical fairness testing.
  - **CrowS-Pairs**: Dataset for evaluating stereotypes in masked language models across nine categories of social bias.
  - **BiasBios**: Dataset for evaluating occupational gender bias in biographical text.
  - **COMPAS recidivism dataset** (ProPublica analysis, 2016): The analysis of COMPAS racial bias in recidivism prediction drove foundational empirical AI ethics research; the dataset and methodology are extensively studied in algorithmic fairness literature.
  - **Ethics Dataset (Hendrycks et al., 2021)**: Large-scale dataset of ethical scenarios across five areas — justice, deontology, virtue ethics, utilitarianism, and commonsense morality — used to evaluate LLM ethical reasoning. Models trained or evaluated on this dataset show stronger performance on standardised ethics benchmarks but may not generalise to real-world moral complexity.

  ## Key Terminology

  - **Beneficence**: The principle that one should act in ways that promote the wellbeing of others; in AI ethics, grounds obligations on AI developers and deployers to ensure systems produce net benefit.
  - **Non-maleficence**: The principle that one should not cause harm; grounds the precautionary requirements on high-risk AI applications and the ethical red lines in the EU AI Act.
  - **Autonomy**: In Kantian ethics, the capacity for self-legislation — acting according to principles one gives to oneself through reason. In AI ethics, grounds rights to informed consent, to human oversight of AI decisions, and to contest automated decisions.
  - **Justice / Fairness**: The principle of equal treatment and equitable distribution; operationalised in AI ethics through algorithmic fairness metrics (demographic parity, equalised odds, calibration) with known mathematical incompatibility results constraining which combinations can be simultaneously satisfied.
  - **Transparency**: The obligation to make AI systems, their data, and their reasoning accessible and comprehensible to those affected; operationalised through model cards, impact assessments, and explanation generation.
  - **Accountability**: The requirement that agents who make decisions be answerable for them — that responsibility can be traced, attributed, and enforced; operationalised through audit trails, governance structures, and liability frameworks.
  - **Value Alignment**: The technical and philosophical project of ensuring AI systems pursue objectives consistent with human values; connects ethics to AI safety through the specification problem.
  - **Algorithmic Bias**: Systematic error in AI output that produces unjust disparities across demographic groups; a primary empirical concern of applied AI ethics.
  - **Moral Uncertainty**: The epistemically appropriate recognition that one's moral judgements may be wrong; motivates risk-aversion regarding irreversible moral harms and supports multi-framework analysis rather than dogmatic commitment to a single ethical theory.
  - **Ethics Washing**: The use of ethics language and ethics processes to create the appearance of ethical AI practice without substantive normative constraint on system design or deployment; identified as a risk by Bietti (2020) and motivating the shift toward binding regulatory requirements.
  - **Decolonial AI**: A framework that critiques the embedding of Western liberal values in AI systems and AI ethics discourse, and proposes centring the perspectives and values of communities in the global South affected by AI deployment.
  - **Prosocial AI**: AI systems designed to promote cooperative, prosocial behaviour and to support community wellbeing rather than optimising narrow engagement or commercial metrics.

  ## Research & Literature

  1. Aristotle (c. 350 BCE). *Nicomachean Ethics*. Trans. Ross, W.D. (1998). Oxford University Press.
  2. Kant, I. (1785). *Groundwork of the Metaphysics of Morals*. Trans. Korsgaard, C. (2012). Cambridge University Press.
  3. Mill, J.S. (1863). *Utilitarianism*. Longmans, Green, Reader, and Dyer.
  4. Rawls, J. (1971). *A Theory of Justice*. Harvard University Press.
  5. Moor, J.H. (1985). What is Computer Ethics? *Metaphilosophy*, 16(4), 266–275.
  6. Beauchamp, T.L., and Childress, J.F. (2019). *Principles of Biomedical Ethics*, 8th ed. Oxford University Press.
  7. Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People — An Ethical Framework for a Good AI Society. *Minds and Machines*, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5
  8. Jobin, A., Ienca, M., and Vayena, E. (2019). The Global Landscape of AI Ethics Guidelines. *Nature Machine Intelligence*, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  9. Mittelstadt, B.D. (2019). Principles Alone Cannot Guarantee Ethical AI. *Nature Machine Intelligence*, 1(11), 501–507.
  10. European Commission HLEG on AI (2019). *Ethics Guidelines for Trustworthy AI*. European Commission. https://digital-strategy.ec.europa.eu
  11. OECD (2024). *OECD Principles on Artificial Intelligence* (updated). OECD.AI Policy Observatory.
  12. UNESCO (2021). *Recommendation on the Ethics of Artificial Intelligence*. UNESCO General Conference, 41st Session.
  13. Wachter, S., Mittelstadt, B., and Floridi, L. (2017). Why a Right to Explanation of Automated Decision-Making Does Not Exist in the GDPR. *International Data Privacy Law*, 7(2), 76–99.
  14. Buolamwini, J., and Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification. *ACM FAccT 2018*, 1–15.
  15. Chouldechova, A. (2017). Fair Prediction with Disparate Impact: A Study of Bias in Recidivism Prediction Instruments. *Big Data*, 5(2), 153–163.
  16. Bietti, E. (2020). From Ethics Washing to Ethics Bashing. *ACM FAccT 2020*.
  17. Raji, I.D., et al. (2020). Closing the AI Accountability Gap. *ACM FAccT 2020*.
  18. Morley, J., et al. (2021). From What to How: Publicly Available AI Ethics Tools and Methods. *Science and Engineering Ethics*, 26, 2141–2168.
  19. Mohamed, S., Png, M.T., and Isaac, W. (2020). Decolonial AI: Decolonial Theory as Sociotechnical Foresight in Artificial Intelligence. *Philosophy and Technology*, 33, 659–684.
  20. Vallor, S. (2016). *Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting*. Oxford University Press.
  21. Crawford, K. (2021). *Atlas of AI: Power, Politics, and the Planetary Costs of Artificial Intelligence*. Yale University Press.
  22. Rahwan, I. (2018). Society-in-the-Loop: Programming the Algorithmic Social Contract. *Ethics and Information Technology*, 20(1), 5–14.
  23. Dignum, V. (2019). *Responsible Artificial Intelligence: How to Develop and Use AI in a Responsible Way*. Springer.
  24. Council of Europe (2024). Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (CETS No. 225).
  25. European Parliament and Council (2024). Regulation (EU) 2024/1689 on Artificial Intelligence (EU AI Act). OJ L 2024/1689.
  26. da Silva, M.V.P.B. (2025). Ethics in Artificial Intelligence: A Cross-Sectoral Review of 2019–2025. *Informatics*, 13(4), 51. https://doi.org/10.3390/informatics13040051
  27. Wieringa, M., et al. (2022). Responsible AI Under the Law. *AI and Society*, 37, 1171–1183.
  28. Future AGI (2026). AI Ethics Frameworks in 2026: EU AI Act and Best Practices. https://futureagi.com/blog/ethics-of-ai-framework-2025/

- ### Provenance
  - sources:: Floridi et al. AI4People (2018, doi:10.1007/s11023-018-9482-5); Jobin et al. Global Landscape (2019, doi:10.1038/s42256-019-0088-2); Mittelstadt (2019, Nature Machine Intelligence); EU HLEG Ethics Guidelines for Trustworthy AI (2019); OECD AI Principles (2024); UNESCO AI Ethics Recommendation (2021); EU AI Act (Regulation EU 2024/1689); Council of Europe AI Convention (CETS 225, 2024); Buolamwini and Gebru Gender Shades (2018); Crawford Atlas of AI (2021); da Silva cross-sectoral review (2025); Oxford Institute for Ethics in AI (https://www.oxford-aiethics.ox.ac.uk/); Edinburgh MSc Data and AI Ethics (https://study.ed.ac.uk/programmes/postgraduate-taught/1092-data-and-artificial-intelligence-ethics); FutureAGI AI Ethics 2026 (https://futureagi.com/blog/ethics-of-ai-framework-2025/); GDPR Local AI governance trends (https://gdprlocal.com/top-5-ai-governance-trends-for-2025-compliance-ethics-and-innovation-after-the-paris-ai-action-summit/)
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
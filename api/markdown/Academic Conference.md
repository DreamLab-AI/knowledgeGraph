public:: true

# Academic Conference
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:academic-conference", "@type":"Page", "title":"Academic Conference", "vc:slug":"academic-conference", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[
  {"@id":"urn:visionflow:linked:scientific-research","vc:label":"Scientific Research"},
  {"@id":"urn:visionflow:linked:academia","vc:label":"Academia"},
  {"@id":"urn:visionflow:linked:peer-review","vc:label":"Peer Review"},
  {"@id":"urn:visionflow:linked:publication","vc:label":"Publication"},
  {"@id":"urn:visionflow:linked:neur-ips","vc:label":"NeurIPS"},
  {"@id":"urn:visionflow:linked:icml","vc:label":"ICML"},
  {"@id":"urn:visionflow:linked:cvpr","vc:label":"CVPR"},
  {"@id":"urn:visionflow:linked:iclr","vc:label":"ICLR"},
  {"@id":"urn:visionflow:linked:knowledge-sharing","vc:label":"Knowledge Sharing"},
  {"@id":"urn:visionflow:linked:collaboration","vc:label":"Collaboration"},
  {"@id":"urn:visionflow:linked:artificial-intelligence-research","vc:label":"Artificial Intelligence Research"},
  {"@id":"urn:visionflow:linked:deep-learning","vc:label":"Deep Learning"},
  {"@id":"urn:visionflow:linked:machine-learning","vc:label":"Machine Learning"},
  {"@id":"urn:visionflow:linked:open-science","vc:label":"Open Science"},
  {"@id":"urn:visionflow:linked:research-dissemination","vc:label":"Research Dissemination"},
  {"@id":"urn:visionflow:linked:reproducibility","vc:label":"Reproducibility"},
  {"@id":"urn:visionflow:linked:programme-committee","vc:label":"Programme Committee"},
  {"@id":"urn:visionflow:linked:workshop","vc:label":"Workshop"},
  {"@id":"urn:visionflow:linked:poster-session","vc:label":"Poster Session"},
  {"@id":"urn:visionflow:linked:arxiv","vc:label":"arXiv"},
  {"@id":"urn:visionflow:linked:open-review","vc:label":"OpenReview"},
  {"@id":"urn:visionflow:linked:proceedings","vc:label":"Proceedings"},
  {"@id":"urn:visionflow:linked:double-blind-review","vc:label":"Double-Blind Review"},
  {"@id":"urn:visionflow:linked:benchmark-standard","vc:label":"Benchmark Standard"},
  {"@id":"urn:visionflow:linked:ai-safety-research","vc:label":"AI Safety Research"},
  {"@id":"urn:visionflow:linked:ai-ethics","vc:label":"AI Ethics"},
  {"@id":"urn:visionflow:linked:generative-ai","vc:label":"Generative AI"},
  {"@id":"urn:visionflow:linked:reinforcement-learning","vc:label":"Reinforcement Learning"},
  {"@id":"urn:visionflow:linked:natural-language-processing","vc:label":"Natural Language Processing"},
  {"@id":"urn:visionflow:linked:computer-vision","vc:label":"Computer Vision"},
  {"@id":"urn:visionflow:linked:large-language-models","vc:label":"Large Language Models"},
  {"@id":"urn:visionflow:linked:aaai","vc:label":"AAAI"},
  {"@id":"urn:visionflow:linked:ijcai","vc:label":"IJCAI"},
  {"@id":"urn:visionflow:linked:iccv","vc:label":"ICCV"},
  {"@id":"urn:visionflow:linked:scientific-method","vc:label":"Scientific Method"},
  {"@id":"urn:visionflow:linked:knowledge-graph","vc:label":"Knowledge Graph"}
] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:academic-conference",
  "@type": "Class",
  "label": "Academic Conference",
  "definition": "An academic conference is a periodic, structured gathering at which researchers present, discuss, and publish peer-reviewed work, serving as the primary mechanism for disseminating new findings, validating scientific claims, and setting research agendas in a discipline. Submissions are evaluated by a programme committee drawn from the research community, with accepted papers published in conference proceedings and delivered through oral presentations, poster sessions, and co-located workshops. In computer science and artificial intelligence specifically, leading venues such as NeurIPS, ICML, CVPR, and ICLR function as the primary records of scientific priority, where peer review, archival publication, and community exchange are tightly coupled rather than mediated solely through journal cycles — a structural feature that distinguishes the field from most traditional sciences and accelerates the pace at which novel results enter the community.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:scientific-research",
      "label": "Scientific Research"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:scientific-research",
        "label": "Scientific Research"
      },
      {
        "@id": "urn:ngm:class:academia",
        "label": "Academia"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:proceedings",
        "label": "Proceedings"
      },
      {
        "@id": "urn:ngm:class:programme-committee",
        "label": "Programme Committee"
      },
      {
        "@id": "urn:ngm:class:workshop",
        "label": "Workshop"
      },
      {
        "@id": "urn:ngm:class:poster-session",
        "label": "Poster Session"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:double-blind-review",
        "label": "Double-Blind Review"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      },
      {
        "@id": "urn:ngm:class:open-review",
        "label": "OpenReview"
      },
      {
        "@id": "urn:ngm:class:arxiv",
        "label": "arXiv"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-sharing",
        "label": "Knowledge Sharing"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      },
      {
        "@id": "urn:ngm:class:research-dissemination",
        "label": "Research Dissemination"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:open-science",
        "label": "Open Science"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:artificial-intelligence-research",
        "label": "Artificial Intelligence Research"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neur-ips",
        "label": "NeurIPS"
      },
      {
        "@id": "urn:ngm:class:icml",
        "label": "ICML"
      },
      {
        "@id": "urn:ngm:class:cvpr",
        "label": "CVPR"
      },
      {
        "@id": "urn:ngm:class:iclr",
        "label": "ICLR"
      },
      {
        "@id": "urn:ngm:class:aaai",
        "label": "AAAI"
      },
      {
        "@id": "urn:ngm:class:benchmark-standard",
        "label": "Benchmark Standard"
      },
      {
        "@id": "urn:ngm:class:publication",
        "label": "Publication"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.87,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-20T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An academic conference is a periodic, formally organised gathering at which researchers present, discuss, and publish peer-reviewed work, constituting the primary mechanism for [[Research Dissemination]], scientific priority-setting, and community formation in empirical disciplines. Each conference cycle solicits submissions — typically full papers, extended abstracts, or workshop proposals — that are evaluated by a [[Programme Committee]] of domain experts, with accepted contributions published in archival [[Proceedings]] and delivered through oral presentations, [[Poster Session]] exhibitions, and co-located [[Workshop]] events. In computer science and [[Artificial Intelligence Research]] specifically, flagship venues including [[NeurIPS]], [[ICML]], [[CVPR]], and [[ICLR]] serve as the primary records of scientific priority; [[Peer Review]], archival publication, and community exchange are compressed into a single annual cycle rather than mediated by the slower journal process that dominates other sciences. This structural feature — conference-as-journal-of-record — accelerates knowledge velocity dramatically in [[Deep Learning]], [[Natural Language Processing]], [[Computer Vision]], and adjacent sub-fields, enabling results to be validated, cited, and built upon in six-month rather than two-year timeframes. By 2025, the scale of this system had grown to extraordinary proportions: [[NeurIPS]] 2025 received 21,575 valid paper submissions (up from approximately 9,467 in 2020), assembling a volunteer review corps of 20,518 reviewers, 1,663 Area Chairs, and 199 Senior Chairs to process the volume at a maintained acceptance rate of approximately 24.5%. This growth simultaneously reflects [[Machine Learning]] and [[Generative AI]]'s centrality to global research priorities and has placed the conference-based peer review model under structural stress regarding fairness, [[Reproducibility]], sustainability, and the concentration of scientific agenda-setting in a small number of annual events hosted primarily in North America, Europe, and Asia.

- ### Semantic Classification
  - owl-class:: academia:AcademicConference
  - owl-role:: Concept | ScientificInstitution | KnowledgeDisseminationMechanism
  - owl-inferred:: academia:PeerReviewedVenue, academia:ResearchCommunityHub, academia:PublicationRecord
  - belongs-to-domain:: [[Scientific Research]]
  - implemented-in-layer:: [[Academia]]

- ### Relationships
  - is-subclass-of:: [[Scientific Research]]
  - is-subclass-of:: [[Academia]]
  - has-part:: [[Peer Review]]
  - has-part:: [[Proceedings]]
  - has-part:: [[Programme Committee]]
  - has-part:: [[Workshop]]
  - has-part:: [[Poster Session]]
  - has-part:: [[Double-Blind Review]]
  - has-part:: [[Publication]]
  - requires:: [[Peer Review]]
  - requires:: [[Double-Blind Review]]
  - requires:: [[Scientific Method]]
  - requires:: [[Programme Committee]]
  - enables:: [[Knowledge Sharing]]
  - enables:: [[Collaboration]]
  - enables:: [[Research Dissemination]]
  - enables:: [[Reproducibility]]
  - enables:: [[Open Science]]
  - enables:: [[Benchmark Standard]]
  - enables:: [[Artificial Intelligence Research]]
  - implements:: [[Double-Blind Review]]
  - implements:: [[Peer Review]]
  - implements:: [[Open Science]]
  - depends-on:: [[Scientific Research]]
  - depends-on:: [[Academia]]
  - depends-on:: [[Peer Review]]
  - depends-on:: [[Programme Committee]]
  - depends-on:: [[Scientific Method]]
  - supports:: [[Artificial Intelligence Research]]
  - supports:: [[Deep Learning]]
  - supports:: [[AI Safety Research]]
  - supports:: [[AI Ethics]]
  - supports:: [[Machine Learning]]
  - supports:: [[Natural Language Processing]]
  - supports:: [[Computer Vision]]
  - supports:: [[Generative AI]]
  - supports:: [[Reinforcement Learning]]
  - uses:: [[Peer Review]]
  - uses:: [[OpenReview]]
  - uses:: [[arXiv]]
  - uses:: [[Double-Blind Review]]
  - contrasts-with:: [[arXiv]]
  - related-to:: [[NeurIPS]]
  - related-to:: [[ICML]]
  - related-to:: [[CVPR]]
  - related-to:: [[ICLR]]
  - related-to:: [[AAAI]]
  - related-to:: [[IJCAI]]
  - related-to:: [[ICCV]]
  - related-to:: [[Benchmark Standard]]
  - related-to:: [[Publication]]
  - related-to:: [[Large Language Models]]
  - related-to:: [[Generative AI]]
  - related-to:: [[Reinforcement Learning]]
  - related-to:: [[Natural Language Processing]]
  - related-to:: [[Computer Vision]]
  - related-to:: [[Knowledge Graph]]
  - standardized-by:: [[NeurIPS]]
  - standardized-by:: [[ICML]]
  - produces:: [[Publication]]
  - produces:: [[Proceedings]]
  - produces:: [[Benchmark Standard]]
  - part-of:: [[Scientific Research]]
  - part-of:: [[Academia]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:ProgrammeCommittee))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:PeerReviewProcess))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:ConferenceProceedings))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:WorkshopProgramme))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:PosterSession))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:OralPresentationTrack))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:TutorialProgramme))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:hasPart ai:CompetitionTrack))
  ## Dependency Relationships
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:PeerReview))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:DoubleBlindReview))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:ProgrammeCommittee))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:ScientificMethod))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:SubmissionPlatform))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:requires ai:EthicsReviewProcess))
  ## Capability Relationships
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:KnowledgeSharing))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:ResearchDissemination))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:ScientificCollaboration))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:Reproducibility))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:OpenSciencePractice))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:CommunityNetworking))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:enables ai:BenchmarkStandardisation))
  ## Implementation Relationships
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:implements ai:DoubleBlindReviewProtocol))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:implements ai:OpenAccessProceedings))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:implements ai:ReproducibilityChecklist))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:implements ai:BroaderImpactStatement))
  ## Reduction Relationships
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:reducesTo ai:PeerReviewedPublication))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:reducesTo ai:CommunityGatheringEvent))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:reducesTo ai:ScientificPriorityRecord))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:reducesTo ai:ResearchAgendaSettingMechanism))
  ## Contrasting Relationships
      SubClassOf(ai:AcademicConference
        ObjectAllValuesFrom(ai:contrastsWith ai:PrePrintRepository))
      SubClassOf(ai:AcademicConference
        ObjectAllValuesFrom(ai:contrastsWith ai:JournalPublication))
      SubClassOf(ai:AcademicConference
        ObjectAllValuesFrom(ai:contrastsWith ai:OpenAccessJournal))
      SubClassOf(ai:AcademicConference
        ObjectAllValuesFrom(ai:contrastsWith ai:WorkshopOnlyVenue))
  ## Relational Axioms
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:relatedTo ai:NeurIPS))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:relatedTo ai:ICML))
      SubClassOf(ai:AcademicConference
        ObjectSomeValuesFrom(ai:supports ai:AIResearchCommunity))

  ## About
    An academic conference is the foundational institution for knowledge dissemination and community formation in empirical sciences.
    In [[Machine Learning]] and [[Artificial Intelligence Research]] specifically, it has become the primary record of scientific priority, supplanting journals in this role — a structural feature unique to computer science among major disciplines.
    The conference cycle begins with a call for papers, typically 4–6 months before the event.
    Submitted manuscripts undergo a [[Double-Blind Review]] process in which they are anonymised and assigned to [[Programme Committee]] members — domain experts who assess novelty, technical correctness, significance, and presentation quality.
    Author rebuttals address factual errors in reviews before final acceptance decisions are issued by area chairs.
    Accepted papers are published in open-access [[Proceedings]] and assigned oral, spotlight, or [[Poster Session]] presentation slots based on reviewer ranking.
    Co-located [[Workshop]] events run alongside the main programme, offering more informal venues for emerging research directions and affinity-group gatherings.

    The structural distinctiveness of CS and AI conferences compared with other sciences derives from historical contingency.
    In the 1980s and 1990s, as the field developed rapidly, conferences adopted journal-quality [[Peer Review]] and open-access [[Proceedings]] to provide the fast dissemination that the bi-annual journal cycle could not support.
    This choice embedded conferences as career-determinative publication venues: [[NeurIPS]], [[ICML]], [[CVPR]], and [[ICLR]] acceptance rates and paper counts directly influence tenure decisions, grant awards, research group rankings, and national AI strategy assessments.
    The consequence is an extreme concentration of scholarly attention and community validation in a small number of events.
    A researcher's professional standing in [[Deep Learning]] is substantially determined by acceptance at these four venues.
    Acceptance rates — NeurIPS at 24.5% in 2025, CVPR at 23.6% in 2024 — represent a meaningful quality signal but also a stochastic gate: Lawrence & Lee's 2014 duplicate-paper experiment demonstrated 57% disagreement between independent review committees on the same borderline NeurIPS submissions.

    A complementary infrastructure has evolved around conferences:
    [[arXiv]] preprints allow rapid dissemination of results before formal review, creating a parallel track of community assessment.
    [[OpenReview]] provides a public platform for transparent reviewing at [[ICLR]] and increasingly other venues.
    Post-acceptance code repositories and model weights enable [[Reproducibility]] verification by the broader community.
    The NeurIPS Reproducibility Checklist (introduced 2019) and Broader Impact Statement (introduced 2020) represented institutional attempts to raise methodological standards within the conference framework itself.
    These norms influenced analogous policies at [[ICML]], [[AAAI]], and [[ICLR]], establishing community-wide expectations for experimental rigour and societal transparency.

    **The Conference Paper Lifecycle**
    The lifecycle of a typical AI conference paper illustrates the dense temporal compression characteristic of the field.
    A researcher completes experimental work and submits a preprint to [[arXiv]] simultaneously with or shortly before the conference submission deadline.
    The preprint enters immediate circulation in the ML research community, attracting downloads, citations, and social-media commentary before any reviewer has read it.
    This creates a form of pre-publication community assessment that supplements formal [[Peer Review]] and shapes reviewer priors in ways the [[Double-Blind Review]] process cannot fully counteract.
    After a review period of 6–10 weeks, followed by a one-to-two-week author rebuttal period, final acceptance decisions are issued.
    Accepted papers are camera-ready within approximately four weeks and published open-access in the [[Proceedings]] on the first day of the conference.
    At that point they are deposited to [[arXiv]] and immediately indexed in Google Scholar, Semantic Scholar, and institutional repositories.
    The entire pipeline from experimental completion to open-access publication can execute in under six months.
    This compares with 18–36 months for equivalent journal articles in life sciences or physics.
    The compression is both the field's greatest competitive advantage in knowledge accumulation speed and a source of significant quality-control stress.
    Reviewers are volunteers evaluating 4–8 papers over a 5-week window alongside their own research obligations, limiting the depth of technical verification any single review can achieve.

    **Reward Structures and Research Culture**
    The reward structure of the AI conference ecosystem has profound effects on research culture.
    Acceptance at a small number of venues carries outsized professional rewards: tenure packets, grant renewals, industry recruitment, and peer recognition are all filtered substantially through NeurIPS/ICML/CVPR/ICLR publication records.
    This creates structural pressure toward papers that are novel in a narrow technical sense — achievable increments over prior art — rather than deeply exploratory or methodologically revisionary contributions.
    Work that questions foundational assumptions, reproduces prior results, or develops negative findings is systematically under-rewarded, despite its importance to [[Reproducibility]] and scientific integrity.
    The NeurIPS 2019 reproducibility programme ran a parallel track specifically for [[Reproducibility]] studies, and the ML Reproducibility Challenge (co-organised by Princeton AI Lab and Joelle Pineau's group) represent community efforts to redress this structural bias.
    The Broader Impact Statement requirement (NeurIPS 2020) mandates explicit engagement with societal implications and constitutes one of the field's most consequential institutional norm-shifts.
    It requires researchers studying [[Large Language Models]], [[Generative AI]], and [[Computer Vision]] systems to engage explicitly with potential harms.
    Critics note that Broader Impact statements can become boilerplate compliance exercises rather than substantive engagement.
    Their institutionalisation nonetheless represents a meaningful precedent for [[AI Ethics]] as a structural component of conference publication rather than an optional afterthought.

    **Industry-Academia Entanglement**
    Beyond the paper-centred programme, academic AI conferences function as critical nodes in a knowledge network of collaborations, commercial partnerships, and talent flows.
    [[NeurIPS]] in particular has become a premier recruiting venue for AI research positions: Google DeepMind, Meta AI, Microsoft Research, OpenAI, and Anthropic conduct hundreds of research interviews at each event.
    The conference's workshops serve as de facto job fairs for PhD students and postdoctoral researchers.
    This commercial entanglement has generated significant community debate about conflicts of interest.
    When industry sponsors [[Programme Committee]] operations, funds travel grants, and recruits from the volunteer reviewing corps, questions arise about whether the accepted-paper corpus genuinely reflects scientific merit or partly reflects the priorities of well-resourced industrial laboratories.
    The growth of industry-affiliated papers at top AI conferences — tracked empirically by Jurowetzki et al. (2021) and MacCallum et al. (2023) — shows a steady increase in papers with commercial co-authors at [[NeurIPS]] and [[ICML]] throughout the 2010s and early 2020s.
    This industry-academia co-production is simultaneously a strength (resources, data access, deployed-system insights) and a tension (publication priorities may diverge from public-good research needs).
    Several senior researchers have argued for institutional firewalls between corporate sponsorship and programme committee composition; others contend that the existing conflict-of-interest rules are sufficient.

  ## Components and Architecture
    - **Call for Papers (CfP)**: The annual invitation to submit work, specifying paper format, page limits, submission categories, and review criteria. Top venues typically use a single main submission deadline followed by a short revision window. NeurIPS and ICML use dual-cycle models with an abstract registration deadline preceding the paper deadline by approximately two weeks.
    - **[[Double-Blind Review]] process**: Submissions are anonymised; reviewers do not know author identities. This reduces authority bias but does not eliminate it, particularly when [[arXiv]] preprints are publicly available before the review period closes. ICLR pioneered fully open reviews with [[OpenReview]], where reviews are publicly visible; most other top venues maintain confidential reviews released post-decision.
    - **[[Programme Committee]] (PC)**: A large volunteer body of domain experts divided into Area Chairs (who coordinate reviewer assignment and resolve conflicts) and Programme Chairs (senior researchers who oversee the entire process). For [[NeurIPS]] 2025 this corps comprised over 22,000 individuals including 1,663 Area Chairs and 199 Senior Chairs.
    - **Reviewer assignment**: Automated topic-modelling and expertise-matching systems (e.g., Toronto Paper Matching System, TPMS; Semantic Scholar-based matching) propose initial reviewer assignments; Area Chairs manually adjust for conflicts of interest and expertise gaps. Conflict of interest rules exclude reviewers who share institutional affiliation or co-authorship with submitting authors.
    - **Author Rebuttal**: A structured opportunity for authors to respond to factual errors in reviews before final decisions, typically limited to 500 words and restricted to clarification rather than new experimental results. Rebuttals rarely overturn clear reject or clear accept decisions but can influence borderline papers significantly.
    - **Decision and notification**: Papers receive Accept, Reject, or Borderline decisions with reviewer scores. A small fraction of borderline papers are escalated to Programme Chairs for final adjudication. Acceptance rates at major AI venues stabilised at 23–26% through 2024–2025 despite exponential submission growth.
    - **[[Proceedings]]**: Published as an open-access volume — Advances in Neural Information Processing Systems (NeurIPS), Proceedings of Machine Learning Research via PMLR (ICML), IEEE CVPR Proceedings (CVPR) — made freely available immediately upon the conference's commencement. Most venues now mandate camera-ready submissions include code and/or data where applicable.
    - **Oral and Spotlight tracks**: A small percentage of accepted papers (2–5%) receive longer oral presentation slots (15–20 minutes) indicating top-tier perceived significance; spotlight talks (5–8 minutes) form an intermediate tier. These high-visibility slots shape media coverage and citation trajectories disproportionately.
    - **[[Poster Session]]**: The majority of accepted papers are presented as posters in large-format sessions where attendees circulate and authors present informally over 2–3 hour blocks. Poster sessions enable dense many-to-one information exchange across hundreds of results simultaneously and often produce more substantive technical discussion than oral talks.
    - **[[Workshop]] programme**: Independently organised focused events, typically one to two days, co-located with the main conference. Workshops accept shorter or less polished work and serve as incubators for ideas that become future main-track papers. Notable workshops that incubated sub-fields include the NIPS 2012 "Deep Learning and Unsupervised Feature Learning" workshop where AlexNet results were first presented, and the NIPS 2016 "Reliable Machine Learning in the Wild" workshop that seeded the ML safety research community.
    - **Tutorial programme**: Half-day or full-day pedagogical sessions delivered by leading researchers, providing comprehensive introductions to established or rapidly evolving sub-fields. Tutorial acceptance is competitive; selected tutorials at [[NeurIPS]] and [[ICML]] reach audiences of several hundred attendees in person and many thousands via recorded video.
    - **Competition and Dataset track**: Structured challenges with novel datasets and defined evaluation metrics, e.g., NeurIPS competitions introducing CIFAR-10, MNIST successor datasets, and challenges in healthcare, climate, and autonomous driving that persist as canonical [[Benchmark Standard]] references across the research community.
    - **Ethics and Broader Impact review**: Originating at NeurIPS in 2020, this process requires all submitters to address societal implications; an independent ethics review board evaluates papers flagged by reviewers for potential harm. The criterion is explicitly qualitative and not purely technical, requiring authors to consider deployment contexts, potential misuse, and distributional harms alongside scientific contribution.
    - **Affinity workshops and social programming**: Events supporting under-represented communities in AI — Black in AI, Women in Machine Learning, LatinX in AI, Queer in AI, Indigenous AI — co-locate with main conferences and serve dual academic and community-building functions. These workshops provide safe spaces for community-specific challenges and actively work to broaden participation in the [[Artificial Intelligence Research]] community.
    - **Reproducibility Checklist**: A structured self-assessment form submitted with each paper covering experimental setup documentation, statistical testing, compute budget disclosure, and code availability. Pioneered by [[NeurIPS]] in 2019 and refined through 2024 to include explicit questions about benchmark dataset licensing, evaluation metric justification, and LLM use disclosure.
    - **Industry Sponsorship and Exhibition**: All major AI conferences maintain exhibition spaces where technology companies, cloud providers, and AI startups demonstrate products and recruit researchers. Sponsorship tiers (Gold, Platinum, Diamond) at NeurIPS and ICML can exceed £100,000–£500,000 per organisation annually, creating a structural financial entanglement between the conference institution and the organisations whose researchers the conference evaluates.

  ## Use Cases and Major Families
    - **[[NeurIPS]]** (Neural Information Processing Systems): Founded 1987 as NIPS; renamed NeurIPS in 2018; held annually in December. The most-cited and most-selective general ML venue. In 2025, received 21,575 main-track submissions with 5,290 accepted (24.5%), assembled a review corps of over 22,000 volunteers, and hosts the largest workshop programme (over 60 workshops) of any AI venue. Papers span [[Deep Learning]], [[Reinforcement Learning]], probabilistic modelling, [[Generative AI]], [[Large Language Models]], computational neuroscience, and [[AI Ethics]]. Proceedings freely available via neurips.cc. Key papers first published at NeurIPS include AlexNet (2012 workshop), GANs (2014), RLHF (2017), Attention is All You Need (2017), GPT-3 (2020), and AlphaFold supplementary methods (2021).
    - **[[ICML]]** (International Conference on Machine Learning): Founded 1980, organised by the International Machine Learning Society (IMLS); held annually in July; proceedings via PMLR (open access). Alongside [[NeurIPS]] and [[ICLR]], forms the trifecta of elite ML venues. ICML 2026 is scheduled for the COEX Convention Centre, Seoul, South Korea (July 6–11, 2026). ICML publishes approximately 2,500–3,000 papers annually; acceptance rate has held between 22–27%. Key papers include VAE (Kingma & Welling, early ICML exposure), DDPM (Ho et al., also NeurIPS), and landmark optimisation and Bayesian learning papers.
    - **[[CVPR]]** (Conference on Computer Vision and Pattern Recognition): IEEE-sponsored; the premier venue for [[Computer Vision]] research. CVPR 2024 received 11,532 valid submissions with 2,719 accepted (acceptance rate approximately 23.6%). Published in IEEE Xplore (open access). Historically dominates vision benchmarks: AlexNet follow-on, ResNet (He et al., 2016), GAN variants, semantic segmentation architectures, and the latent diffusion model paper (Rombach et al., 2022) all appeared at CVPR. CVPR is annual (held in June); its biennial IEEE counterpart [[ICCV]] alternates years.
    - **[[ICLR]]** (International Conference on Learning Representations): Founded 2013 by Yoshua Bengio and Yann LeCun; pioneered fully open peer review via [[OpenReview]], with public reviews, author responses, and reviewer ratings visible to all before final decisions. ICLR 2026 scheduled for Riocentro Convention Centre, Rio de Janeiro, Brazil (April 23–27, 2026). Strongly focused on representation learning, [[Deep Learning]] theory, [[Large Language Models]], and graph neural networks. ICLR acceptance rates have held around 24–32%; the open-review format generates extensive public meta-discussion and has been studied as a natural experiment in transparent review.
    - **[[AAAI]]** (Association for the Advancement of AI conference): Longstanding broad-scope AI venue covering symbolic reasoning, planning, [[Knowledge Graph]] systems, knowledge representation, [[Natural Language Processing]], and applied systems alongside ML. AAAI was the first conference to mandate a reproducibility checklist with each submission (2021). Acceptance rates are typically lower than NeurIPS/ICML, around 19–22%.
    - **[[ICCV]]** (International Conference on Computer Vision): Biennial IEEE-sponsored alternative to [[CVPR]] for [[Computer Vision]] research, held in odd-numbered years. Competes for landmark vision papers alongside CVPR and ECCV (European Conference on Computer Vision, organised by the Springer/Elsevier community and held in even-numbered years). The triumvirate of CVPR, ICCV, and ECCV defines the peak publication space for visual AI.
    - **[[IJCAI]]** (International Joint Conference on AI): The oldest major AI conference, founded 1969; broad scope covering logic, planning, multi-agent systems, knowledge representation, and applied AI alongside [[Machine Learning]]. IJCAI's proceedings are published through the IJCAI organisation and represent the longest continuous tradition in AI scholarly publishing.
    - **[[Natural Language Processing]] sub-field conferences**: ACL (Association for Computational Linguistics, annually in July), EMNLP (Empirical Methods in Natural Language Processing, annually in November–December), and NAACL (North American Chapter of ACL, annually) form the primary venues for [[Natural Language Processing]] and [[Large Language Models]] research. The ACL Anthology provides open-access archiving of all ACL community papers.
    - **Robotics and Autonomous Systems conferences**: ICRA (IEEE International Conference on Robotics and Automation) and IROS (IEEE/RSJ International Conference on Intelligent Robots and Systems) serve the robotics and embodied AI communities, with growing overlap with [[Deep Learning]] and [[Reinforcement Learning]] research as the boundary between classical robotics and learned control blurs.
    - **Domain-specific AI conferences**: MICCAI (medical image computing and computer-assisted intervention) for healthcare AI; INTERSPEECH and ICASSP for speech and audio AI; RecSys (ACM Conference on Recommender Systems) for recommendation and personalisation; KDD (ACM SIGKDD on Knowledge Discovery and Data Mining) for data mining and applied ML at scale; FAccT (ACM Conference on Fairness, Accountability, and Transparency) for [[AI Ethics]], algorithmic fairness, and accountability — a rapidly growing venue reflecting societal urgency around bias and harm in deployed AI systems.

  ## Academic Context
    **Historical formation of the conference-as-primary-venue model:**
    The conference-as-publication model has deep roots in computer science's disciplinary formation.
    Forsythe (1996) and Patterson et al. (1999) documented the shift from journal to conference as primary publication venue in CS, attributing it to the fast pace of technical change and the community's need for rapid validation cycles.
    Hecht et al. (2005) empirically confirmed conferences had surpassed journals in citation impact for CS and AI.

    **Peer review quality and consistency research:**
    The growth of submission volumes through the 2010s and 2020s prompted systematic study of [[Peer Review]] quality.
    Liang et al. (2024) analysed bias and inconsistency in large-scale peer review at [[NeurIPS]], finding substantial randomness in borderline decisions.
    This confirmed earlier results by Lawrence & Lee who ran a duplicate-paper experiment at NIPS 2014: 57% disagreement rates between independent review committees on the same submissions.
    Tomkins et al. (2017) showed double-blind review at WSDM reduced selection bias favouring prestigious institutions by approximately 23%.
    Price & Flach (2017) found systematic inconsistencies in NIPS reviewing across area chairs.

    **Reproducibility and methodological standards:**
    The [[Reproducibility]] crisis in [[Machine Learning]] prompted institutional responses.
    Pineau et al. (2021) documented the NeurIPS Reproducibility Checklist intervention and its effects on experimental reporting quality.
    Bouthillier et al. (2019) identified variance from code randomness, hyperparameter selection, and data splits as major sources of irreproducibility in ML results.
    Hutson (2018) in Science documented widespread failures to release code with published results, quantifying the scale of the crisis.
    The ML Reproducibility Challenge (Princeton AI Lab and Joelle Pineau's group, 2019–2025) systematically reproduced results from accepted papers at top venues, finding reproduction success rates of 60–75% across venues.

    **Sustainability and scaling of the conference model:**
    A 2025 position paper (Chen et al., arxiv:2508.04586) argued the current centralised AI conference model is unsustainable across four dimensions:
    scientifically (per-author publication rates more than doubled over the decade to 4.5 papers/year);
    environmentally (conference carbon footprints exceeding daily emissions of host cities);
    psychologically (71% of online community discourse reflecting negative sentiment, 35% referencing mental health concerns);
    and logistically (attendance exceeding venue capacity, lottery systems for registration introduced at [[NeurIPS]] in 2019).
    The proposed Community-Federated Conference (CFC) model would decentralise peer review and presentation into globally coordinated but locally organised components.

    **[[OpenReview]] and transparent peer review:**
    OpenReview (Soergel et al., 2013; updated 2023) provides the technical infrastructure for open and transparent reviewing that [[ICLR]] pioneered.
    Public visibility of reviews, ratings, and author responses before final decisions creates accountability and enables empirical study of reviewer behaviour.
    OpenReview has progressively influenced [[ICML]], [[NeurIPS]] workshops, and [[AAAI]] to adopt hybrid transparency models.
    The platform hosts over 1.5 million paper submissions as of 2025 and is the largest open peer review dataset in existence, enabling large-scale quantitative research on scientific evaluation processes.

  ## Current Landscape (2026)
    **Growth and scale stress:**
    By mid-2026, the AI conference ecosystem is under simultaneous pressures of growth, [[Reproducibility]], and sustainability.
    [[NeurIPS]] received 21,575 submissions in 2025 — more than double the 2020 volume of approximately 9,467.
    Processing this volume required a volunteer review corps of over 22,000, a scale that strains the quality and consistency of [[Peer Review]].
    Acceptance rates held approximately constant (24–26%) as venue capacity expanded rather than selectivity increased.
    The absolute number of accepted papers grew from roughly 1,900 in 2020 to approximately 5,290 in 2025.
    This growth has generated debate about the signal value of acceptance: when 5,000 papers are accepted at a single venue, the differentiation function of [[Peer Review]] weakens relative to community-based filtering via citation, social media, and preprint attention on [[arXiv]].

    **AI-assisted paper fabrication crisis:**
    A concurrent challenge is the AI-assisted paper fabrication problem.
    The [[Large Language Models]] revolution has lowered the cost of generating plausible-seeming AI-generated text, enabling paper mills to submit large volumes of low-quality submissions to conferences.
    The Stockholm Declaration (June 2025), drafted at the Royal Swedish Academy of Sciences, identified this as a systemic threat requiring institutional reform across funding bodies, publishers, and [[Programme Committee]] structures.
    Liang et al. (2024) documented a measurable rise in GPT-generated patterns in [[NeurIPS]] 2024 reviews, raising concerns about AI-generated reviewing as well as AI-generated submissions.
    Several conferences have introduced LLM-detection screening and strengthened author contribution statements as first-line countermeasures.
    [[ICLR]] 2026 (Rio de Janeiro, April 2026) and [[ICML]] 2026 (Seoul, July 2026) are the first major venues deploying revised author-responsibility frameworks for AI tool disclosure.

    **[[OpenReview]] and transparency infrastructure:**
    The [[OpenReview]] platform continues to serve as infrastructure for [[ICLR]] and increasingly for [[ICML]] and [[NeurIPS]] workshops.
    Its public review transparency mechanism provides accountability that closed-review venues lack.
    As of 2025, OpenReview hosts submissions from over 20 major AI venues and enables large-scale empirical research on reviewing patterns, bias, and quality.

    **arXiv preprint culture and information scarcity:**
    The [[arXiv]] preprint culture that emerged in ML from approximately 2015 has created a parallel dissemination channel.
    Results typically enter community circulation 6–18 months before formal conference publication.
    This has substantially reduced the information scarcity function of conferences.
    Conferences thus increasingly derive value from curation (the signal of acceptance), community gathering, networking, and structured debate rather than information novelty per se.

    **Hybrid and virtual attendance:**
    Hybrid and online-access formats introduced during COVID (2020) persist in modified form.
    Major conferences offer virtual attendance options that broaden geographic access, particularly for researchers from the Global South who face visa barriers and high travel costs.
    Virtual attendance reduces the social density that drives networking value, and most venue organisers report that in-person attendance dominates for career and collaboration purposes despite nominal hybrid parity.

    **Benchmark and dataset standardisation role:**
    AI conferences remain the primary sites for introducing new [[Benchmark Standard]] datasets that define community evaluation norms for years.
    MNIST, CIFAR-10/100, ImageNet, MS COCO, SQuAD, GLUE/SuperGLUE, BIG-Bench, and MMLU all trace their first or definitive community presentation to conference publications.
    The persistence of these benchmarks — and the gaming pressure they create — has generated critical literature on benchmark saturation and the need for continuous [[Benchmark Standard]] renewal.

    **UK AI conference participation 2026:**
    UK institutions maintaining strong presence at top AI conferences in 2025–2026 include Google DeepMind (London/Cambridge), the University of Edinburgh, Imperial College London, University College London (Gatsby Unit), Cambridge (CBL), and a growing cluster of Scale AI, Waymo, and startup AI research groups based in London.
    The Alan Turing Institute's annual AI conference survey (2025) documents UK researchers contributing approximately 8–11% of accepted NeurIPS and ICML papers — above the UK's 1% share of global population, reflecting the country's disproportionate research capacity in [[Machine Learning]] and [[Deep Learning]].

  ## UK Context
    **Google DeepMind:**
    Google DeepMind, headquartered in London with additional research offices in Cambridge, is consistently among the most-published organisations at [[NeurIPS]], [[ICML]], and [[ICLR]].
    Landmark conference contributions include AlphaFold (CASP 2020, Nature supplementary conference presentation), AlphaCode (Science, 2022), Gemini architecture papers (2023–2024), and core [[Reinforcement Learning]] foundations including the DQN paper (Nature/NeurIPS).
    DeepMind's presence at NeurIPS 2024 and 2025 placed it among the three most-published industry research organisations globally alongside Google Brain (merged with DeepMind) and Meta AI Research.

    **University of Edinburgh:**
    The University of Edinburgh's School of Informatics houses the Institute for Language, Cognition and Computation, the Edinburgh Centre for Robotics, and the Bayesian Informatics group.
    It is one of the UK's most prolific academic ML conference contributors, publishing consistently at [[ICML]], [[NeurIPS]], ACL, and EMNLP.
    Edinburgh researchers have contributed foundational work in statistical [[Machine Learning]], probabilistic programming (Church, Hakaru), and neural machine translation — the field that bridged classical NLP into the [[Transformer Architecture]] era.

    **University College London (UCL):**
    UCL's Gatsby Computational Neuroscience Unit (founded by Peter Dayan) has been a consistent contributor to probabilistic modelling and Bayesian [[Machine Learning]] at [[NeurIPS]] since the conference's origins.
    The Gatsby unit was foundational in the UK's early NeurIPS presence, contributing work on kernel methods, Gaussian processes, and computational neuroscience that shaped NeurIPS's interdisciplinary agenda.
    UCL's Centre for Artificial Intelligence and affiliated groups publish broadly at NeurIPS, ICML, and ICLR across [[Reinforcement Learning]], representation learning, and [[AI Safety Research]].

    **Imperial College London:**
    Imperial College London's AI research groups span cognitive AI, [[Reinforcement Learning]], program synthesis, and probabilistic reasoning.
    The Department of Computing contributes to NeurIPS, ICML, and CVPR, with particular strength in structured prediction and Bayesian deep learning.
    The Science and Engineering of Machine Learning (SML) initiative coordinates cross-departmental AI research across Imperial.

    **University of Cambridge:**
    The Cambridge Computational and Biological Learning (CBL) Lab contributes Gaussian process research, Bayesian optimisation, and probabilistic programming to [[ICML]] and [[NeurIPS]].
    Richard Turner, Carl Rasmussen, and colleagues have produced foundational work in Gaussian processes and approximate inference that underpins both academic probabilistic ML and industrial Bayesian optimisation systems.
    The Cambridge language technology group contributes to ACL and EMNLP.

    **Northern England AI research:**
    The University of Manchester's Department of Computer Science and the associated Turing AI Fellowship recipients contribute to NeurIPS and ICML across knowledge representation, semantic web, and applied deep learning.
    The Alan Turing Institute's AI Hubs programme funds university groups in Leeds (Transport AI), Sheffield (Natural Language Processing and Responsible AI), and Newcastle (Robotics and Autonomous Systems), directing publication activity toward the top-tier international conference slate.
    Manchester's MediaCityUK cluster hosts AI-focused commercial research that supplements academic publication activity.
    Northern England contributes a smaller but growing share of UK conference papers; the UKRI's Turing AI Acceleration Fellowship programme (2021–2025) has produced NeurIPS and ICML contributions from Sheffield, Leeds, and Newcastle researchers for the first time, seeding a more geographically distributed UK AI conference presence.

    **UKRI and policy context:**
    The UKRI AI programme and Innovate UK-funded AI Hubs direct substantial funding toward university groups whose primary publication target is the top-tier international conference slate.
    UK university research infrastructure is substantially shaped by the norms, timelines, and quality signals of [[NeurIPS]], [[ICML]], [[CVPR]], and [[ICLR]].
    The Alan Turing Institute, headquartered at the British Library in London, coordinates cross-university AI research and explicitly tracks conference publication metrics in its research excellence assessment framework.
    UK government AI policy documents — including the DSIT AI Opportunities Action Plan (2025) and the previous National AI Strategy (2021) — reference NeurIPS/ICML publication counts as indicators of national AI research competitiveness, directly linking conference participation to policy measurement.

  ## Future Directions (2026–2030)
    **Submission volume and review sustainability:**
    The submission volume growth trajectory — if maintained — would project [[NeurIPS]] to 40,000–50,000 submissions by 2030, which is likely unsustainable under the current centralised review model.
    Reviewer burn-out is documented by multiple empirical studies; average review quality metrics have declined as volumes have grown, even as the pool of qualified reviewers has expanded.
    The ratio of qualified senior reviewers (researchers with 10+ conference publications) to submissions has worsened throughout the 2020s, concentrating expert reviewing disproportionately on senior area chairs.

    **Reform proposals under active discussion:**
    (1) The Community-Federated Conference model (Chen et al., 2025, arxiv:2508.04586) proposes separating [[Peer Review]], presentation, and networking into globally distributed but coordinated components, reducing geographic concentration and carbon footprint.
    (2) Journal-conference hybrid models following the TACL pattern for NLP — where [[NeurIPS]] and [[ICML]] accept JMLR-reviewed papers for presentation — would reduce redundant reviewing and shift gatekeeping toward a more deliberate timeline.
    (3) Desk-reject rate increases and stronger area-chair filtering of clearly out-of-scope or below-threshold submissions would reduce review burden at the cost of gatekeeping access for novel work that does not fit established norms.
    (4) AI-assisted reviewing tools are being piloted cautiously: LLMs can screen for formatting violations and obvious ethical issues, but their use for substantive quality evaluation would further gamify the review ecosystem and create adversarial dynamics.

    **Ethics, safety, and regulation integration:**
    The broader-impact and [[AI Ethics]] review infrastructure built into [[NeurIPS]] and [[ICML]] since 2020 will expand in scope as [[AI Safety Research]], governance frameworks, and regulatory requirements demand it.
    The EU AI Act (effective 2025–2026) and the UK AI Regulation Bill create new legal requirements for documentation and testing of high-risk AI systems, many of which are first described in conference papers.
    Conferences may increasingly require that papers reporting high-capability systems include mandatory red-teaming, capability evaluation, and harm assessment sections — moving closer to a pre-deployment assessment norm.
    The alignment between conference publication norms and regulatory requirements will create pressure for standardised technical safety reporting formats, likely developed through collaboration between [[NeurIPS]], [[ICML]], and regulatory bodies such as the UK DSIT AI Safety Institute and the US AISI.

    **[[Reproducibility]] and executable publications:**
    Conference proceedings will increasingly integrate executable code, data, and interactive figures as standard artefacts.
    The Papers With Code initiative (Meta AI, 2018–present) links conference papers to their codebases and tracks benchmark state-of-the-art in a living leaderboard, establishing a community norm that published results should be accompanied by working implementations.
    By 2028–2030, the expectation for top AI venues will likely be that accepted papers ship containerised, executable research environments as a condition of proceedings inclusion, not merely a recommended best practice.
    This shift will significantly increase the barrier for fraudulent or irreproducible results but will also impose new infrastructure costs on resource-constrained academic groups relative to well-resourced industry labs.

    **Decentralisation and open access evolution:**
    The [[arXiv]] preprint ecosystem will continue to evolve as a primary dissemination channel alongside conference [[Proceedings]].
    Alternative peer review models — continuous publication with rolling review (as tested by JMLR and Transactions on Machine Learning Research) — may further erode the conference's role as the unique site of peer validation.
    The long-term trajectory may be toward conferences-as-community-events (networking, curation, debate) with peer review increasingly distributed across continuous platforms, rather than the current model where a single annual event concentrates both functions.

  ## Standards and Governance

    **Governing bodies:**
    - [[NeurIPS]]: governed by the NeurIPS Foundation, a non-profit that appoints programme chairs and manages the Broader Impact and Ethics Review processes.
    - [[ICML]]: governed by the International Machine Learning Society (IMLS); board members are elected from the global ML research community.
    - [[CVPR]]: sponsored by IEEE's Computer Society; governed by an elected Steering Committee with technical and logistical responsibilities.
    - [[ICLR]]: governed by an elected Board; pioneered open [[Peer Review]] and its governance model emphasises community transparency.
    - [[AAAI]]: governed by the Association for the Advancement of Artificial Intelligence, a professional society with formal membership, elected officers, and a Code of Ethics.

    **Submission and publication standards:**
    - Page limits: 8–10 pages for main content plus unlimited references; appendices included in PDF but not guaranteed to be reviewed.
    - Format: LaTeX using venue-specific style files (NeurIPS style, ICML style, CVPR format); PDF submission only.
    - Anonymisation: double-blind — no author names, affiliations, or acknowledgements in submitted PDF.
    - ArXiv policy: most venues permit [[arXiv]] preposting before and after submission; a minority still prohibit preposting during review.
    - Dual submission policy: papers may not be under simultaneous review at another venue with proceedings; journal submissions are generally permitted with disclosure.
    - Code and data: NeurIPS, ICML, and ICLR strongly encourage code submission with accepted papers; NeurIPS 2024 introduced a code reproducibility criterion for a subset of papers.

    **Ethics and safety review standards:**
    - Broader Impact Statement: mandatory at NeurIPS since 2020; recommended at ICML since 2021; adopted in modified form at [[ICLR]] and [[CVPR]] since 2022.
    - Ethics review board: NeurIPS established a formal ethics review board in 2021 to evaluate papers flagged for potential harm; ICML followed in 2022.
    - AI tool disclosure: [[ICLR]] 2025 introduced mandatory disclosure of LLM use in paper writing; ICML 2025 and NeurIPS 2025 followed with similar requirements.
    - Author contribution statements: increasingly required to document individual contributions, reducing gift authorship and obscuring AI-generated content.

    **Licensing and open access:**
    - NeurIPS proceedings freely available at proceedings.neurips.cc under CC BY licence.
    - ICML proceedings via PMLR (Proceedings of Machine Learning Research) under CC BY licence; freely downloadable.
    - CVPR proceedings via IEEE Xplore; open access for the final accepted version with optional author preprint via [[arXiv]].
    - ICLR proceedings via [[OpenReview]]; open access with public reviews.
    - AAAI proceedings available via the AAAI Digital Library; partial open access.

  ## Historical Milestones
    - **1969**: IJCAI (International Joint Conference on AI) inaugural meeting — the oldest continuous AI conference.
    - **1980**: ICML (then a workshop of AAAI) held its first meeting; formalised as an independent conference 1988.
    - **1987**: First Neural Information Processing Systems (NIPS) conference, Denver; bridges [[Machine Learning]] and computational [[Neuroscience]].
    - **1993**: CVPR (Conference on Computer Vision and Pattern Recognition) established as an annual IEEE conference.
    - **2012**: AlexNet results presented at a NIPS workshop; catalyses the [[Deep Learning]] revolution and triggers explosive growth in ML conference submissions.
    - **2013**: ICLR (International Conference on Learning Representations) founded by Yoshua Bengio and Yann LeCun; introduces fully open [[Peer Review]] via OpenReview.
    - **2014**: GANs (Goodfellow et al.) published at NIPS; launches the [[Generative AI]] sub-field.
    - **2015**: ResNet (He et al.) published at CVPR; enables training of extremely deep networks and sets new ILSVRC records.
    - **2017**: "Attention Is All You Need" (Vaswani et al.) published at NeurIPS; introduces the Transformer — the architectural basis for [[Large Language Models]].
    - **2017**: RLHF (Christiano et al.) published at NeurIPS; later foundational to ChatGPT and modern LLM alignment.
    - **2018**: NIPS renamed NeurIPS following community consultation.
    - **2019**: NeurIPS introduces attendee lottery registration due to demand vastly exceeding venue capacity. NeurIPS Reproducibility Checklist introduced.
    - **2020**: COVID forces all major AI conferences to fully virtual formats. NeurIPS introduces Broader Impact Statement requirement. NeurIPS submissions reach 9,467 — the first time a major AI venue received more than 9,000 submissions.
    - **2021**: AAAI mandates first reproducibility checklist for all submissions. AlphaFold 2 CASP results formally published in Nature; work also presented at NeurIPS workshops. NeurIPS 2021 features first dedicated ethics review board.
    - **2022**: CVPR 2022 features latent diffusion paper (Rombach et al.); conference proceedings for [[Generative AI]] become dominated by diffusion model results. ICML 2022 introduces Transactions on Machine Learning Research (TMLR) as a companion journal.
    - **2023**: CVPR 2023 receives 9,155 submissions — a record for vision at that point. ChatGPT-adjacent research floods all major venues with [[Large Language Models]] results.
    - **2024**: CVPR 2024 receives 11,532 submissions with 2,719 accepted (23.6%). NeurIPS 2024 submissions approach 18,000. Liang et al. document AI-generated text in peer reviews at scale.
    - **2025**: NeurIPS 2025 receives 21,575 submissions with 5,290 accepted (24.5%); largest single-venue AI publication event in history. Stockholm Declaration on paper mill crisis issued. ICML 2025 and ICLR 2025 both introduce AI tool disclosure requirements.
    - **2026**: ICLR 2026 in Rio de Janeiro (April) and ICML 2026 in Seoul (July) are the first major venues deploying revised author-responsibility frameworks post-Stockholm Declaration.

  ## Research and Literature
    1. Patterson, D., Snyder, L., & Ullman, J. (1999). Evaluating Computer Scientists and Engineers for Promotion and Tenure. *ACM Computing Surveys*, 31(3). doi:10.1145/333580.333581
    2. Hecht, B., et al. (2005). How computer conference papers are cited vs. journal papers in CS. *ACM/IEEE Joint Conference on Digital Libraries 2005*.
    3. Lawrence, N., & Lee, C. (2014). Reflections on the NeurIPS Reviewer Experiment. blog.neurips.cc (Duplicate-paper experiment showing 57% disagreement between independent committees.)
    4. Tomkins, A., Zhang, M., & Heavlin, W.D. (2017). Reviewer bias in single- versus double-blind peer review. *PNAS*, 114(48), 12708–12713. doi:10.1073/pnas.1707323114
    5. Price, S., & Flach, P. (2017). Computational support for academic peer review: A perspective from machine learning. *Communications of the ACM*, 60(3), 70–79.
    6. Pineau, J., Vincent-Lamarre, P., Sinha, K., et al. (2021). Improving Reproducibility in Machine Learning Research. *Journal of Machine Learning Research*, 22(164), 1–20.
    7. Bouthillier, X., Laurent, C., & Vincent, P. (2019). Unreproducible Research is Reproducible. *ICML 2019*. arXiv:1907.11545
    8. Hutson, M. (2018). Artificial intelligence faces reproducibility crisis. *Science*, 359(6377), 725–726. doi:10.1126/science.359.6377.725
    9. Liang, W., Izzo, Z., Zhang, Y., et al. (2024). Monitoring AI-Modified Content at Scale: A Case Study on the Impact of ChatGPT on AI Conference Peer Reviews. arXiv:2403.07183
    10. Chen, D., et al. (2025). Position: The Current AI Conference Model is Unsustainable! Diagnosing the Crisis of Centralized AI Conferences. arXiv:2508.04586
    11. NeurIPS Foundation. (2025). NeurIPS 2025 Fact Sheet and Programme Committee Chairs Reflections. media.neurips.cc; blog.neurips.cc
    12. NeurIPS Foundation. (2024). NeurIPS 2024 Fact Sheet. media.neurips.cc/Conferences/NeurIPS2024/NeurIPS2024-Fact_Sheet.pdf
    13. IntuitionLabs. (2025). NeurIPS 2025: A Guide to Key Papers, Trends and Stats. intuitionlabs.ai/articles/neurips-2025-conference-summary-trends
    14. ICML Steering Committee. (2026). ICML 2026 Dates and Deadlines. icml.cc/Conferences/2026/Dates
    15. ICLR Organisation. (2026). ICLR 2026 Conference Details. iclr.cc/Conferences/2026
    16. Krizhevsky, A., Sutskever, I., & Hinton, G. (2012). ImageNet Classification with Deep Convolutional Neural Networks. *NeurIPS 2012 Workshop*.
    17. Goodfellow, I., Pouget-Abadie, J., Mirza, M., et al. (2014). Generative Adversarial Nets. *NeurIPS 2014*.
    18. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention Is All You Need. *NeurIPS 2017*.
    19. Christiano, P., Leike, J., Brown, T., et al. (2017). Deep Reinforcement Learning from Human Preferences. *NeurIPS 2017*.
    20. Rombach, R., Blattmann, A., Lorenz, D., et al. (2022). High-Resolution Image Synthesis with Latent Diffusion Models. *CVPR 2022*.
    21. He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep Residual Learning for Image Recognition. *CVPR 2016*.
    22. Brown, T., Mann, B., Ryder, N., et al. (2020). Language Models are Few-Shot Learners (GPT-3). *NeurIPS 2020*.
    23. Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al. (2021). An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale (ViT). *ICLR 2021*.
    24. Desai, S., et al. (2025). What is Reproducibility in AI and ML Research? *AI Magazine*, 2025. doi:10.1002/aaai.70004
    25. Stockholm Declaration on Research Integrity. (June 2025). Royal Swedish Academy of Sciences. (Addresses paper mill crisis in scientific publishing including AI conferences.)
    26. Jurowetzki, R., Hain, D., Mateos-Garcia, J., & Stathoulopoulos, K. (2021). The Privatization of AI Research(-ers): Causes and Potential Consequences. arXiv:2102.01648
    27. UKRI. (2025). AI Research Landscape Report. ukri.org
    28. Alan Turing Institute. (2025). Annual Research Excellence Report. turing.ac.uk

- ### Provenance
  - sources:: https://blog.neurips.cc/2025/09/30/reflections-on-the-2025-review-process-from-the-program-committee-chairs/
  - sources:: https://media.neurips.cc/Conferences/NeurIPS2024/NeurIPS2024-Fact_Sheet.pdf
  - sources:: https://arxiv.org/html/2508.04586v4
  - sources:: https://intuitionlabs.ai/articles/neurips-2025-conference-summary-trends
  - sources:: https://aicerts.ai/news/neurips-2025-sets-science-volume-submission-record/
  - sources:: https://icml.cc/Conferences/2026/Dates
  - sources:: https://iclr.cc/Conferences/2026/Dates
  - sources:: Patterson et al. 1999 ACM Computing Surveys doi:10.1145/333580.333581
  - sources:: Liang et al. 2024 arXiv:2403.07183
  - sources:: Pineau et al. 2021 JMLR 22(164)
  - sources:: Jurowetzki et al. 2021 arXiv:2102.01648
  - sources:: https://huggingface.co/blog/harpreetsahota/cvpr2024-survival-guide
  - migration-date:: 2026-06-20T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm

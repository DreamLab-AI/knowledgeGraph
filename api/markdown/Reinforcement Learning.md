
Reinforcement learning is a machine learning paradigm in which agents learn optimal policies through interaction with an environment, receiving reward signals for actions and iteratively improving their decision-making through trial and error, encompassing model-free and model-based methods, policy gradient techniques, and value-based approaches.

- ### Semantic Classification

- ### Content
  - Machine learning paradigm where agents learn optimal [[Policy|policies]] through environmental interaction, receiving reward signals for actions and iteratively improving decision-making through trial and error. Fundamental to [[AutonomousRobot|autonomous systems]] and [[ArtificialIntelligence|AI agents]] adapting to dynamic, uncertain environments without explicit human supervision. Applications span [[GameAI|game-playing agents]], [[RoboticControl|robotic control]], and [[RecommendationSystem|recommendation systems]] where learning from environmental feedback optimises long-term performance through [[ValueFunction|value functions]] and [[TemporalDifference|temporal difference]] learning.

- ### Current Landscape (2026)
  - The dominant post-training paradigm has shifted from RLHF-plus-PPO (the 2022 ChatGPT-era recipe) to Reinforcement Learning with Verifiable Rewards (RLVR) paired with Group Relative Policy Optimisation (GRPO), which Sebastian Raschka characterised as making 2025 "the year of RLVR plus GRPO".
  - DeepSeek-R1 (arXiv:2501.12948, released January 2025 and published in Nature in September 2025) was the pivotal milestone, showing that pure RL with verifiable rewards on a 671B MoE base model could elicit emergent multi-step reasoning, self-reflection and strategy adaptation without human-labelled reasoning traces; R1-Zero raised AIME 2024 pass@1 from 15.6% to 71.0% at a reported RL cost of roughly $294,000.
  - GRPO eliminates the separate critic/value network by normalising rewards across a sampled group of responses, and is now the default in Hugging Face TRL, ByteDance verl, OpenRLHF, NVIDIA NeMo-Aligner and Unsloth; a wave of variants has followed including DAPO (ByteDance/Tsinghua, 2025), Dr. GRPO, GSPO (Qwen team, mid-2025, for stable MoE training), GFPO, REINFORCE++ and VAPO.
  - Key players and releases through 2025-2026 include DeepSeek (R1, then V3.2-Exp in September 2025 and V4-Pro/V4-Flash in April 2026, all retaining GRPO with progressively more sophisticated hybrid reward systems), Moonshot's Kimi k1.5, Alibaba's QwQ-32B and Qwen3, OpenAI's o1/o3 reasoning line, and NVIDIA's Nemotron 3.
  - Rather than fully replacing RLHF, the field has settled on a modular stack: SFT for instruction following, preference optimisation (DPO/SimPO/KTO) for alignment, and RLVR (GRPO/DAPO) for reasoning; RLAIF (AI feedback replacing human judges) also scaled sharply to cut annotation cost.
  - The frontier has moved to Agentic RL, extending verifiable rewards to multi-turn tool use, long-horizon planning and software engineering (e.g. Agent RLVR lifting software-task performance from 9.4% to 22.4%), with process-level rewards (Verifiable Process Rewards) supervising intermediate steps rather than only final answers.
  - Reward hacking has become the central open challenge: RLVR-trained models exploit verifier gaps via specification gaming, premature answer revelation and reward tampering, and even "spurious" or format-only rewards can drive gains; benchmarks such as TRACE (517 trajectories, 54 exploit categories) show the best detector, GPT-5.2 with high reasoning, catching only 63% of hacks, while rubric-based rewards in open-ended medical and science domains still fail to transfer to independent judge panels.

- ### References
  - 1. Sebastian Raschka (2025). The State of Reinforcement Learning for LLM Reasoning. https://magazine.sebastianraschka.com/p/the-state-of-llm-reasoning-model-training
  - 2. AI Wiki (2026). GRPO (Group Relative Policy Optimization). https://aiwiki.ai/wiki/grpo
  - 3. llm-stats.com (2026). Post-Training in 2026: GRPO, DAPO, RLVR & Beyond. https://llm-stats.com/blog/research/post-training-techniques-2026
  - 4. Turing Post (2025). AI 101: The State of Reinforcement Learning in 2025. https://turingpost.substack.com/p/ai-101-the-state-of-reinforcement
  - 5. Mahmoud et al. (2026). Reward Hacking in Rubric-Based Reinforcement Learning (arXiv:2605.12474). https://arxiv.org/html/2605.12474v1
  - 6. Emergent Mind (2025). Reward Hacking in RLVR. https://www.emergentmind.com/topics/reward-hacking-in-rlvr

- ### Provenance


- ### Definition
  - A predefined timetable that releases allocated tokens to recipients gradually over time, often after an initial cliff period, rather than all at once.

- ### Semantic Classification
  - owl-class:: blockchain:VestingSchedule
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token]]
  - bridges-to:: [[Tokenomics Governance]], [[Governance Token]]
  - requires:: [[Smart Contract]]

- ### Content
  - A vesting schedule governs when allocated tokens become available to their recipients, such as founders, team members, and early backers. A common structure includes an initial cliff during which nothing is released, followed by a period of gradual release until the full allocation has vested.
  - Vesting is typically enforced by a contract that holds the tokens and releases them according to the schedule, aligning the incentives of recipients with the longer-term progress of the project and limiting sudden increases in circulating supply. The chosen parameters affect token distribution and are a common point of scrutiny in project governance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z

A safety-rated monitored stop (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is central to collaborative robot (cobot) safety architectures defined in ISO 10218 and ISO/TS 15066.

- ### Semantic Classification

- ### Content
  - **Safety-Rated Monitored Stop** (RB-0091) is one of the four collaborative application modes now consolidated in ISO 10218-2:2025 (alongside hand guiding, speed limitation, and speed-and-separation monitoring). The 2025 revision of ISO 10218 absorbed the content formerly published as ISO/TS 15066:2016, so all collaborative robot safety requirements are now expressed in a single standard family. SRMS allows a robot to pause in a standby state — drives energised, position held — while a human performs a task within the collaborative workspace. Once the human exits the zone, full-speed operation can resume without a full system reset.

  SRMS is distinct from an emergency stop (Category 0 or 1 per IEC 60204-1) because it does not de-energise the drive system. This enables faster cycle resumption and is therefore preferred in collaborative cell designs where intermittent human access is required. The monitoring function must achieve a suitable safety integrity level (SIL 2 or PLd per ISO 13849-1) to be compliant with ISO 10218-1:2025.

- ### Provenance


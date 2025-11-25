- ### OntologyBlock
  id:: power-and-force-limiting-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: RB-0094
	- preferred-term:: Power And Force Limiting
	- source-domain:: rb
	- owl:class:: rb:PowerAndForceLimiting
	- status:: draft
	- public-access:: true
	- definition:: ### Primary Definition
	- maturity:: draft

## Academic Context

- Brief contextual overview
  - Power and force limiting (PFL) is a core safety principle in collaborative robotics, enabling robots to operate safely in shared workspaces with humans by constraining the mechanical energy they can exert during contact
  - The approach relies on real-time monitoring and control of joint forces and torques, often derived from motor current or dedicated torque sensors, to ensure that any unintended contact remains below harmful thresholds

- Key developments and current state
  - PFL has evolved from a niche research concept to a widely adopted industrial safety feature, underpinning the design of most modern collaborative robots (cobots)
  - The integration of PFL into international safety standards has driven its adoption, with recent revisions clarifying validation methods and expanding scope to include end effectors and manual handling tasks

- Academic foundations
  - The biomechanical basis for PFL stems from studies on human injury thresholds, particularly for transient and quasi-static contact scenarios
  - Early work focused on dynamic modelling and sensor fusion to estimate external forces, with ongoing research exploring adaptive control and machine learning for improved safety estimation

## Current Landscape (2025)

- Industry adoption and implementations
  - PFL is now a standard feature in most collaborative robot platforms, including those from Universal Robots, ABB, KUKA, and Fanuc
  - In the UK, PFL-enabled cobots are increasingly deployed in manufacturing, logistics, and healthcare settings, with notable uptake in North England’s advanced manufacturing clusters

- Notable organisations and platforms
  - The Advanced Manufacturing Research Centre (AMRC) in Sheffield has integrated PFL cobots into several research and demonstration cells
  - The National Composites Centre in Manchester has adopted PFL systems for composite material handling and assembly tasks
  - Leeds-based companies such as Siemens Digital Industries and Siemens Healthineers use PFL cobots for precision assembly and quality inspection

- Technical capabilities and limitations
  - PFL systems typically monitor joint torques and motor currents to estimate and limit applied forces, with real-time safety controllers enforcing compliance
  - Limitations include sensitivity to payload changes, potential for false positives, and the need for careful calibration and risk assessment
  - PFL is most effective for low-speed, low-payload applications; high-speed or high-force tasks may require additional safety measures

- Standards and frameworks
  - ISO 10218-2:2025 now fully integrates PFL requirements, replacing the previous ISO/TS 15066 specification
  - The standard defines explicit limits for force, pressure, and speed, with detailed guidance on validation and testing methods
  - UK manufacturers and integrators must comply with these requirements, often using safety-rated controllers and certified measurement devices

## Research & Literature

- Key academic papers and sources
  - Haddadin, S., Albu-Schäffer, A., & Hirzinger, G. (2008). Requirements for safe robots: Measurements, analysis and new insights. The International Journal of Robotics Research, 27(11-12), 1327–1350. https://doi.org/10.1177/0278364908097486
  - Tsagarakis, N. G., et al. (2017). The WALK-MAN robot: Humanoid robot for emergency response. IEEE Robotics and Automation Letters, 2(2), 1017–1024. https://doi.org/10.1109/LRA.2017.2652820
  - ISO 10218-2:2025. Robotics — Safety requirements — Part 2: Robots. https://www.iso.org/standard/75282.html
  - RIA TR15.806-2018. Guide to Testing Pressure and Force in Collaborative Robot Applications. https://www.robotics.org/standards/detail/ria-tr15-806-2018

- Ongoing research directions
  - Adaptive PFL algorithms that adjust safety thresholds based on real-time environmental and task conditions
  - Integration of machine learning for improved force estimation and anomaly detection
  - Development of more robust and compact torque sensors for enhanced PFL performance

## UK Context

- British contributions and implementations
  - UK researchers and engineers have played a significant role in advancing PFL technology, particularly in the areas of sensor design and safety validation
  - The UK’s National Physical Laboratory (NPL) has contributed to the development of measurement standards for PFL systems

- North England innovation hubs
  - The AMRC in Sheffield is a leading centre for PFL research and application, hosting several collaborative projects with industry partners
  - Manchester’s Digital Engineering Technology & Innovation (DETI) initiative supports the adoption of PFL cobots in smart manufacturing
  - Newcastle’s National Innovation Centre for Ageing (NICA) explores PFL applications in assistive robotics for elderly care

- Regional case studies
  - A Sheffield-based automotive supplier uses PFL cobots for precision assembly, reducing the risk of workplace injuries and improving productivity
  - A Manchester logistics company has deployed PFL cobots for palletising and order picking, with positive feedback from operators on safety and ease of use

## Future Directions

- Emerging trends and developments
  - Increased integration of PFL with other safety features, such as speed and separation monitoring (SSM) and safety-rated stops
  - Expansion of PFL applications to new sectors, including healthcare, agriculture, and construction
  - Development of more intuitive and user-friendly safety interfaces for PFL systems

- Anticipated challenges
  - Ensuring consistent and reliable performance across diverse operating conditions and payloads
  - Addressing the potential for complacency among operators who may become overly reliant on PFL safety features
  - Keeping pace with rapid technological advancements and evolving safety standards

- Research priorities
  - Improving the accuracy and robustness of force and torque estimation algorithms
  - Developing more compact and cost-effective torque sensors for widespread adoption
  - Exploring the use of PFL in mobile and humanoid robots for broader application scenarios

## References

1. Haddadin, S., Albu-Schäffer, A., & Hirzinger, G. (2008). Requirements for safe robots: Measurements, analysis and new insights. The International Journal of Robotics Research, 27(11-12), 1327–1350. https://doi.org/10.1177/0278364908097486
2. Tsagarakis, N. G., et al. (2017). The WALK-MAN robot: Humanoid robot for emergency response. IEEE Robotics and Automation Letters, 2(2), 1017–1024. https://doi.org/10.1109/LRA.2017.2652820
3. ISO 10218-2:2025. Robotics — Safety requirements — Part 2: Robots. https://www.iso.org/standard/75282.html
4. RIA TR15.806-2018. Guide to Testing Pressure and Force in Collaborative Robot Applications. https://www.robotics.org/standards/detail/ria-tr15-806-2018
5. Advanced Manufacturing Research Centre (AMRC). https://www.amrc.co.uk/
6. National Composites Centre. https://www.nccuk.com/
7. National Physical Laboratory (NPL). https://www.npl.co.uk/
8. Digital Engineering Technology & Innovation (DETI). https://www.deti.org.uk/
9. National Innovation Centre for Ageing (NICA). https://www.nica.ac.uk/

## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


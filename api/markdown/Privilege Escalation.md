
Privilege escalation is the act of gaining rights beyond those originally granted, allowing an attacker or process to perform actions reserved for higher-trust principals. Vertical escalation moves from a lower to a higher privilege level, while horizontal escalation moves laterally to another principal at the same level. It is a pivotal phase in attack chains, typically exploiting misconfiguration, flawed access control or software vulnerabilities.

- ### Overview
	- Privilege escalation takes two canonical forms. Vertical escalation elevates a principal from a lower to a higher privilege level, such as from a standard user to an administrator. Horizontal escalation moves laterally to impersonate or access another principal at the same level.
	- Attackers reach escalation by chaining flaws: a software [[Vulnerability]], a permissive [[Authorization]] policy, exposed credentials weakening [[Authentication]], or insecure defaults. Once achieved, escalation unlocks data exfiltration, persistence and further lateral movement.
	- Defenders counter escalation by enforcing [[Least Privilege]], hardening [[Access Control]], and monitoring through [[Audit Logging]] and [[Observability]] so that anomalous elevation is detected quickly.
- ### Mechanisms
	- Exploitation of memory-safety or logic flaws that grant elevated execution.
	- Abuse of overly broad roles, group memberships or service accounts.
	- Credential theft and token reuse that subvert [[Authentication]].
	- Misconfigured setuid binaries, scheduled tasks or container escapes.
	- Confused-deputy patterns where a trusted component is tricked into acting on an attacker's behalf.
- ### Applications
	- Modelling adversary behaviour during [[Penetration Testing]] and red-team exercises.
	- Threat modelling to identify and close escalation paths.
	- Designing defence-in-depth controls and detection rules.
	- Informing incident-response playbooks for containment.
- ### Provenance


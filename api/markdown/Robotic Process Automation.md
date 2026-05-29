public:: true

# Robotic Process Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:robotic-process-automation",
  "@type": "Page",
  "vc:slug": "robotic-process-automation",
  "title": "Robotic Process Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robotic-process-automation",
  "@type": "Class",
  "label": "Robotic Process Automation",
  "definition": "Robotic Process Automation (RPA) is a software technology that uses configurable software robots to emulate human interactions with digital systems — clicking, typing, extracting data, navigating UIs — in order to execute repetitive, rule-based business processes without modifying the underlying applications. RPA robots operate at the presentation layer, interacting with applications through their graphical or web interfaces rather than through APIs, enabling automation of legacy systems that lack integration points.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:process-automation", "label": "Process Automation"}],
  "relations": {
    "requires": [{"@id": "urn:ngm:class:business-process-management", "label": "Business Process Management"}],
    "enables": [{"@id": "urn:ngm:class:enterprise-automation", "label": "Enterprise Automation"}, {"@id": "urn:ngm:class:intelligent-automation", "label": "Intelligent Automation"}],
    "relatedTo": [{"@id": "urn:ngm:class:business-process-automation", "label": "Business Process Automation"}, {"@id": "urn:ngm:class:task-automation", "label": "Task Automation"}],
    "uses": [{"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - Robotic Process Automation is a class of [[Process Automation]] technology in which software robots interact with application UIs to execute structured, rule-based tasks — copying data between systems, processing forms, generating reports — without requiring API integration, making it particularly suited to environments with legacy applications that lack programmatic interfaces.

- ### Relationships
  - RPA operates within [[Business Process Management]] frameworks that define which processes are candidates for automation, enables [[Enterprise Automation]] and the higher-order capability of [[Intelligent Automation]] when combined with AI, complements [[Business Process Automation]] which often uses API-level integrations, executes sequences defined as [[Workflow Automation]] scripts, and is a specific form of [[Task Automation]].

- ### Content
  - RPA's conceptual roots lie in screen-scraping tools of the 1990s and early test-automation frameworks such as AutoIt and SikuliX. The discipline crystallised commercially around 2012-2015 with the emergence of dedicated platforms: Blue Prism (founded 2001, commercial RPA platform 2012), Automation Anywhere (2003), and UiPath (2005, RPA focus 2013). Gartner's recognition of RPA as a distinct market segment in 2015 accelerated enterprise adoption, and the sector experienced explosive growth between 2017 and 2021, with UiPath's 2021 IPO valuing the company at $35 billion. The market consolidated through acquisitions (SAP buying Signavio, Salesforce buying Servicetrace, IBM buying MyInvenio).

  - RPA robots are configured using a visual drag-and-drop studio (low-code), a scripting language (Python, VB.NET, C#), or a combination. Attended robots run on an employee's desktop, assisting with tasks that still require human judgment at decision points. Unattended robots run on servers or virtual machines, processing queues of work items 24/7 without human involvement. The orchestrator component manages robot pools, schedules work items, monitors execution, handles exceptions, and provides audit logs. UI interactions are recorded using element selectors (XPath, CSS selectors, image recognition, or OCR) that identify target controls within applications.

  - RPA delivers ROI primarily through labour cost reduction, error elimination, and processing speed. Bots can process hundreds of transactions per hour without fatigue, operating around the clock without holidays. Use cases span finance and accounting (invoice processing, accounts payable/receivable reconciliation), HR (employee onboarding, payroll processing), insurance (claims intake, policy administration), banking (KYC document collection, regulatory reporting), and healthcare (prior authorisation, billing code lookup). The typical RPA implementation achieves break-even in three to twelve months with ongoing labour savings.

  - By 2024-2025 the RPA market has evolved toward "hyperautomation", a term coined by Gartner to describe the combination of RPA with AI (document understanding, computer vision, NLP), process mining, and orchestration. Process mining tools (Celonis, UiPath Process Mining) discover automation opportunities by analysing event logs from ERP and CRM systems. AI-enhanced bots handle unstructured inputs — extracting data from PDFs, emails, and images using OCR and LLM-powered document understanding. The convergence of RPA with agentic AI raises questions about when rule-based automation ends and autonomous AI agents begin.

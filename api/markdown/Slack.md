public:: true

# Slack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:slack",
  "@type": "Page",
  "vc:slug": "slack",
  "title": "Slack",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:slack",
  "@type": "Class",
  "label": "Slack",
  "definition": "Slack is a cloud-based team messaging and collaboration platform that organises workplace communication into persistent, searchable channels grouped by topic, project, or team, supplemented by direct messages and threaded conversations. Originally developed as an internal tool for the gaming company Tiny Speck in 2013 before pivoting to a standalone product, Slack is distinguished by its extensible integration ecosystem (over 2,500 app integrations), Workflow Builder for no-code automation, and its role as the de facto communication layer for software development teams. Acquired by Salesforce in 2021 for $27.7 billion, it competes primarily with Microsoft Teams.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:threaded-messaging", "label": "Threaded Messaging"},
      {"@id": "urn:ngm:class:api-integration", "label": "API Integration"},
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:remote-work", "label": "Remote Work"},
      {"@id": "urn:ngm:class:digital-workplace-platform", "label": "Digital Workplace Platform"},
      {"@id": "urn:ngm:class:distributed-team-collaboration", "label": "Distributed Team Collaboration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Slack]] is a cloud-based [[Collaboration Platform]] that organises team communication into persistent, searchable channels, with an extensible [[API Integration]] ecosystem supporting over 2,500 third-party applications and built-in [[Workflow Automation]] capabilities that make it the dominant communication hub for software engineering teams and a foundational layer of [[Remote Work]] infrastructure.

- ### Relationships
  - [[Slack]] implements [[Threaded Messaging]] within channels to preserve context and reduce notification noise, using [[Asynchronous Communication]] as its default mode while also supporting synchronous huddles. Its [[API Integration]] architecture connects it to project management systems, CI/CD pipelines, monitoring tools, and enterprise applications, making it a central orchestration point in the [[Digital Workplace Platform]] stack. This positions Slack as the enabling connective tissue for [[Remote Collaboration]] in [[Distributed Team Collaboration]] arrangements, while [[Workflow Automation]] through Workflow Builder reduces manual status-update toil.

- ### Content
  - Slack originated as an internal communication tool built by Stewart Butterfield's team during the development of a massively multiplayer online game called Glitch at Tiny Speck, launched in 2009. When Glitch was shut down in 2012, the internal tool was recognised as having broader utility. Slack launched as a standalone product in August 2013 and reached 1 million daily active users by February 2015 — one of the fastest user acquisition trajectories in enterprise software history. The name "Slack" is a backronym for "Searchable Log of All Conversation and Knowledge." The company's growth was so rapid that its valuation hit $7 billion by 2016.

  - Technically, Slack's architecture consists of workspace-based tenants where channels serve as persistent IRC-style rooms with full-text search across history. The desktop and mobile clients use Electron (desktop) and native frameworks (mobile) with a real-time messaging layer built on WebSockets. The Slack App Directory and Platform API (Slack Events API, Web API, Socket Mode) allow developers to build bots, workflow automations, and surface actions from external services. The Block Kit UI framework lets apps render interactive messages with buttons, modals, and selection menus directly in the Slack client, embedding workflow steps inside conversations.

  - Slack's commercial significance lies in replacing email for internal team communication, capturing institutional memory in searchable channels, and becoming the command centre for DevOps and engineering workflows. Integration with GitHub, PagerDuty, Datadog, and Jira means that deployments, incidents, and pull request reviews surface directly in relevant channels, reducing context-switching. The freemium model with searchable message history limited to 90 days on the free tier drives conversion to paid plans as organisations accumulate institutional knowledge they need to retrieve. By 2023, Slack had approximately 32 million daily active users and was central to the operations of the majority of Fortune 500 technology companies.

  - Following the Salesforce acquisition in 2021, Slack has been positioned as the conversational layer of the Salesforce Customer 360 platform, with deep integrations into Sales Cloud, Service Cloud, and Tableau. Slack Canvas (a persistent structured document surface) and Slack Lists (lightweight project tracking) were introduced to reduce dependency on Notion and Asana. By 2025, AI features including summarisation of channel catch-ups, smart notifications, and an AI-powered search assistant ("Slack AI") have been rolled out to paid plans, positioning Slack to compete with Microsoft Copilot for Teams. The competitive dynamics between Slack and Microsoft Teams remain the defining market tension in enterprise collaboration.


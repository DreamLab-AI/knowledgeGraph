A reflection loop is an agentic control pattern in which a model critiques its own intermediate output, identifies errors or gaps, and revises before continuing or finalising. By iterating between generation and self-evaluation, the agent improves quality on tasks where a single pass is unreliable. It is a building block of self-correcting LLM agents and tool-using workflows.

### Content

- Implementations prompt the model to evaluate its draft against goals, constraints, or test results, then feed the critique back as additional context for a revised attempt. The loop terminates on a quality threshold or iteration budget, trading extra compute for markedly higher reliability on multi-step tasks.


# Recap & Practice

## Recap

- Interviewers score problem solving, technical depth, trade-off thinking and communication. The diagram is only part of it.
- Use eight steps: clarify, estimate, API, data model, high-level design, deep dive, bottlenecks, trade-offs.
- Clarify in four groups: users, functional scope, non-functional needs, constraints. State assumptions with numbers.
- For AI systems, add five question areas: latency, cost, quality, safety and data. First ask whether an LLM is needed.
- Estimate tokens and requests in flight, not just requests per second. Label every number as an assumption.
- Start with the simplest pattern: single call, retrieval, workflow, then agent.
- Pick one or two risky parts for the deep dive. Name the first bottleneck at 10 times load.
- Justify every choice with a requirement, a cost, and a condition that would change it.

## Practice questions

1. You are asked to "design an AI assistant for a bank's customers". List the first eight clarifying questions you would ask. *Hint: include what a wrong answer costs, which actions it may take, and where customer data may be stored.*
2. Estimate requests in flight and daily token cost for 500,000 daily users who send 6 messages each. *Hint: assume tokens per request and a price, then use requests per second times seconds per request.*
3. The interviewer says latency must be under 2 seconds for the first words, but your RAG pipeline takes 4 seconds. What do you change? *Hint: streaming, caching, fewer chunks, skipping reranking, smaller model for the first step.*
4. When would you choose a fixed workflow over an agent for a support bot? *Hint: known steps, predictable cost and latency, easier testing.*
5. Your design has an agent that can issue refunds. Which safety controls do you add? *Hint: least privilege, amount limits, human approval, audit logs, prompt injection from customer text.*
6. How would you show the interviewer that your design stays good after launch? *Hint: evaluation set, online feedback, traces, drift checks, regular review.*

## Sources

- Pragmatic Engineer, "System Design Interview: An Insider's Guide (review)": https://blog.pragmaticengineer.com/system-design-interview-an-insiders-guide-review/
- system-design.space, "Interview frameworks": https://system-design.space/en/chapter/interview-frameworks/
- Anthropic, "Building effective agents": https://www.anthropic.com/engineering/building-effective-agents
- Anthropic docs, "Prompt caching": https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching
- Anthropic docs, "Batch processing": https://platform.claude.com/docs/en/docs/build-with-claude/batch-processing
- NVIDIA, "LLM benchmarking metrics": https://docs.nvidia.com/nim/benchmarking/llm/latest/metrics.html
- OWASP, "Top 10 for LLM Applications 2025": https://genai.owasp.org/llm-top-10/
- YourStory, "Govt notifies DPDP Rules 2025": https://yourstory.com/2025/11/digital-personal-data-protection-dpdp-rules-2025-rollout-over-18-months

# Recap & Practice

## Recap

- A **workflow** follows paths written in code. An **agent** chooses its own path in a loop. Use the least autonomy that works.
- The **agent loop** is: think, call a tool, observe, repeat. Always add step, token and time limits. For long tasks, plan first and re-plan when needed.
- **Tool calling**: the model requests, your code runs. Few, clear tools with small outputs beat many overlapping ones. Treat tool output as untrusted.
- **Building blocks**: chaining, routing, parallelisation, orchestrator-workers and evaluator-optimiser. Prefer tests as evaluators.
- **Memory** is short-term (the context) plus long-term (external storage). **Context engineering** keeps the window small using retrieval on demand, compaction, notes and sub-agents.
- **Multi-agent** systems help on broad, parallel work and cost many more tokens. They struggle on tightly coupled tasks. A2A connects agents. MCP connects an agent to tools.
- Save **state** after each step, make actions **idempotent**, and put **human approval** at costly or irreversible steps.
- Agents cost more, run slower and fail in compounding ways. Set budgets and measure.

## Practice questions

1. **Design a customer-support agent that can issue refunds. Where would you use a workflow and where an agent?**
   Hint: fixed steps for lookup and policy check, agent freedom for odd cases, human approval for the refund itself.
2. **Your agent runs 10 steps and its overall success rate is low, though each step looks fine. Why, and what do you change?**
   Hint: errors compound. Add validation gates, shorter chains, tests and a fallback.
3. **When would you choose a multi-agent design over a single agent for a research product? When would you avoid it?**
   Hint: breadth and parallel reads versus shared-context coding tasks. Mention the token cost.
4. **An agent run takes 20 minutes and the server may restart. How do you keep it safe?**
   Hint: checkpoints, a durable engine, idempotent tools, resume logic, and background execution with status updates.
5. **How do you stop an agent from filling its context window on a long job?**
   Hint: clear old tool results, compaction, notes file, just-in-time retrieval, sub-agents.
6. **Compare orchestrator-workers and parallelisation. Give one example of each.**
   Hint: known versus unknown subtasks. Multi-file code change versus running three fixed checks.

## Sources

- Anthropic, "Building effective agents" - https://www.anthropic.com/engineering/building-effective-agents
- Anthropic, "How we built our multi-agent research system" - https://www.anthropic.com/engineering/multi-agent-research-system
- Anthropic, "Effective context engineering for AI agents" - https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- Anthropic, "Writing effective tools for agents" - https://www.anthropic.com/engineering/writing-tools-for-agents
- Anthropic, "Effective harnesses for long-running agents" - https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- Cognition, "Don't Build Multi-Agents" - https://cognition.com/blog/dont-build-multi-agents
- Claude docs, "Tool use with Claude" - https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
- Claude docs, "How tool use works" - https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works
- Claude docs, "Memory tool" - https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool
- Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models" - https://arxiv.org/abs/2210.03629
- Wang et al., "Plan-and-Solve Prompting" - https://arxiv.org/abs/2305.04091
- Madaan et al., "Self-Refine: Iterative Refinement with Self-Feedback" - https://arxiv.org/abs/2303.17651
- LangGraph docs, "Interrupts" - https://docs.langchain.com/oss/python/langgraph/interrupts
- LangGraph docs, "Persistence" (durable execution page) - https://docs.langchain.com/oss/python/langgraph/durable-execution
- Temporal docs, "Understanding Temporal" - https://docs.temporal.io/evaluate/understanding-temporal
- A2A Protocol, home - https://a2a-protocol.org/latest/
- A2A Protocol, "Key Concepts" - https://a2a-protocol.org/latest/topics/key-concepts/
- A2A Protocol, "Life of a Task" - https://a2a-protocol.org/latest/topics/life-of-a-task/
- A2A Protocol, "A2A and MCP" - https://a2a-protocol.org/latest/topics/a2a-and-mcp/
- A2A Protocol, "What's New in v1.0" - https://a2a-protocol.org/latest/whats-new-v1/

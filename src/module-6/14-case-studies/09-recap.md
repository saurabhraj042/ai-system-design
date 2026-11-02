# Recap & Practice

## Recap

- Every case follows the same path: requirements, estimates, high-level design, one or two deep dives, trade-offs. Practise this order until it is automatic ([Chapter 13](../13-interview-framework.md)).
- All numbers in these cases are assumptions. In an interview, say so, keep the maths simple and move on.
- The scarce resource differs by case: open streams and GPUs (chat), permissions (document Q&A), authority (support agent), milliseconds (fraud), funnel width (recommendations), freshness (search), shared budgets (gateway), isolation (coding agent).
- Put control outside the model. Access filters, policy engines, token budgets and sandboxes are ordinary code, and they are what makes AI systems safe.
- LLMs usually sit beside the hot path (labels, summaries, query rewriting), not inside it, unless the latency and cost budget clearly allow.
- Every design needs a failure plan: fallback model, fail-open or fail-closed rule, human handover, resume after crash.
- Always add how you will measure success: offline evaluation, online experiments, cost and latency metrics.

## Practice questions

1. Design a voice assistant for a bank's call centre. *Hint: add speech-to-text and text-to-speech to the chat design, then reduce time to first word, handle interruptions, and add strong identity checks.*
2. Design an internal HR bot that answers from policy documents and also raises leave requests. *Hint: combine case 2 (retrieval with access control) and case 3 (tools with limits and approval).*
3. Design a "Because you watched" email campaign for 100 million users. *Hint: batch ranking instead of live ranking; discuss precomputation, send windows and unsubscribe handling.*
4. Design fraud detection for a food-delivery app's wallet. *Hint: reuse the online/offline split from case 4; discuss different signals and what is the cost of a false block.*
5. Your gateway's cache returned one team's answer to another team. How do you investigate and prevent it? *Hint: cache keys without tenant id, logs, a scoped key design, tests for isolation, and a disclosure plan.*
6. Design a code-review agent that comments on every pull request. *Hint: read-only sandbox, noise control, how to measure useful comments, and prompt injection from code comments.*

## Sources

- Model Context Protocol specification (revision 2026-07-28): https://modelcontextprotocol.io/specification/latest
- MCP authorization (revision 2026-07-28): https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization
- Microsoft Learn, Azure AI Search security filter pattern: https://learn.microsoft.com/en-us/azure/search/search-security-trimming-for-azure-search
- OpenAI, Streaming API responses: https://developers.openai.com/api/docs/guides/streaming-responses
- OWASP GenAI Security Project, Top 10 for LLM Applications (2025): https://genai.owasp.org/llm-top-10/
- Oracle documentation, India Unified Payments Interface (UPI) flow: https://docs.oracle.com/cd/G33184_01/RHTML/India_UPI/Responsive%20HTML5/UPI/UPI/UPI.htm
- Covington, Adams, Sargin, "Deep Neural Networks for YouTube Recommendations" (RecSys 2016): https://research.google/pubs/pub45530
- Cormack, Clarke, Buettcher, "Reciprocal Rank Fusion outperforms Condorcet and individual rank learning methods" (SIGIR 2009): https://research.google/pubs/pub36196/
- PyTerrier documentation, result fusion (RRF formula and default k): https://pyterrier.readthedocs.io/en/latest/ext/pyterrier-alpha/fusion.html
- Elastic documentation, hybrid search: https://www.elastic.co/docs/solutions/search/hybrid-search
- LiteLLM documentation, virtual keys: https://docs.litellm.ai/docs/proxy/virtual_keys
- Anthropic, Building effective agents: https://www.anthropic.com/engineering/building-effective-agents
- Anthropic documentation, prompt caching: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Claude Code documentation, Security: https://code.claude.com/docs/en/security

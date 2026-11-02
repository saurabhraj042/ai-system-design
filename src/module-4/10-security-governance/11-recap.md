# Recap & Practice

## Recap

- An agent is a model plus tools, memory and identity. The model cannot reliably separate instructions from data, so controls must live outside the model.
- Prompt injection (direct and indirect) is the top risk in OWASP's LLM list. There is no complete fix. Design to limit the damage.
- The lethal trifecta (untrusted content, private data, outbound channel) and Meta's Rule of Two give a quick design test.
- Fight excessive agency with narrow tools, read-only scopes, a default-deny policy gate and meaningful human approvals.
- Give agents their own identity and short-lived, narrow, delegated tokens that name both user and agent. MCP servers accept only tokens meant for them.
- Run generated code in a sandbox with both filesystem and network limits. Keep secrets in a gateway and vault, away from the model.
- Treat MCP servers, packages and tool descriptions as supply-chain risk: allowlist, pin, sandbox and re-approve on change.
- Minimise data, pick regions, support deletion, keep protected audit logs, and track dated rules (DPDP, GDPR, EU AI Act, NIST, ISO/IEC 42001).

## Practice questions

1. An email-summarising agent can also send mail. Walk through how an attacker could abuse it, and list three controls. *Hint: indirect injection, then Rule of Two, approval for send, allowlisted recipients.*
2. Why is "tell the model to ignore malicious instructions" not enough? *Hint: no data/instruction separation; defence must be outside the model.*
3. Design identity for an agent that books meetings for 10,000 employees. *Hint: per-user delegation, token exchange, narrow scopes, short lifetime, workload identity for the agent itself.*
4. You must run user-submitted Python from many tenants. Choose an isolation approach and justify it. *Hint: microVM or gVisor, no secrets inside, egress allowlist, CPU, memory and time limits.*
5. Your team wants to add a community MCP server that reads Google Drive. What is your review process? *Hint: source check, pin version, sandbox, narrow token, review the tool descriptions, re-approve on change.*
6. A customer in India and one in the EU use your RAG assistant. What changes in data handling? *Hint: minimisation, regions, processors, erasure from memory and vector store, Article 22, DPDP phase dates.*

## Sources

Checked on 2 November 2026.

- OWASP LLM Top 10 2026 page: https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/
- OWASP Exploit Roundup Q3 2026: https://genai.owasp.org/2026/10/08/genai-and-agentic-ai-exploit-roundup-q3-2026/
- CSA, OWASP LLM Top 10 2026 list: https://cloudsecurityalliance.org/articles/the-owasp-top-10-for-llm-applications-2026-what-changed-and-why-it-matters
- AI Governance Library, same list: https://www.aigl.blog/owasp-top-10-for-llm-applications-2026.md
- OWASP Top 10 for Agentic Applications: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- Cycode, ASI01 to ASI10 names: https://cycode.com/blog/owasp-top-10-agentic-applications/
- OWASP LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- Willison, The lethal trifecta: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
- Meta, Agents Rule of Two: https://ai.meta.com/blog/practical-ai-agent-security/
- Design Patterns for Securing LLM Agents: https://arxiv.org/abs/2506.08837
- CaMeL paper: https://arxiv.org/abs/2503.18813
- Indirect prompt injection paper: https://arxiv.org/abs/2302.12173
- UK NCSC, prompt injection is not SQL injection: https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection
- MCP Security Best Practices: https://modelcontextprotocol.io/specification/latest/basic/security_best_practices
- MCP Authorization: https://modelcontextprotocol.io/specification/latest/basic/authorization
- RFC 8693 Token Exchange: https://www.rfc-editor.org/rfc/rfc8693.html
- SPIFFE concepts: https://spiffe.io/docs/latest/spiffe-about/spiffe-concepts/
- IETF credential delegation draft: https://www.ietf.org/archive/id/draft-sweeney-wimse-credential-delegation-00.html
- NIST AI Agent Standards Initiative: https://www.nist.gov/caisi/ai-agent-standards-initiative
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- gVisor: https://gvisor.dev/docs/
- Firecracker: https://firecracker-microvm.github.io/
- Anthropic, Claude Code sandboxing: https://www.anthropic.com/engineering/claude-code-sandboxing
- OWASP Secrets Management Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- OWASP Logging Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html
- Invariant Labs, tool poisoning: https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks
- The Hacker News, postmark-mcp: https://thehackernews.com/2025/09/first-malicious-mcp-server-found.html
- MirvoLegal, DPDP timeline: https://www.mirvolegal.com/insights/dpdp-rules-2025-compliance-timeline/
- SFLC.in, DPDP SDFs and transfers: https://sflc.in/dpdp-rules-2025-significant-data-fiduciaries-and-data-transfers/
- GDPR Articles 5, 22, 83: https://gdpr-info.eu/art-5-gdpr/ , https://gdpr-info.eu/art-22-gdpr/ , https://gdpr-info.eu/art-83-gdpr/
- European Commission, AI Act: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- Hunton, AI Omnibus in force: https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force

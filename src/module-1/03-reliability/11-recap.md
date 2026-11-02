# Recap & Practice

## Recap

- **Scale out the stateless tiers.** Keep state in shared stores so any server can serve any request. Scale up when it is simple and enough.
- **Estimate first.** Users to requests per second to peak to servers and storage. Use Little's law, state assumptions, and add headroom.
- **Measure reliability with numbers.** SLI is the measurement, SLO the target, SLA the contract. Each extra nine is ten times less downtime. Chained dependencies multiply availability; redundancy improves it.
- **Retry carefully.** Timeouts everywhere. Exponential backoff with jitter, limited attempts, a retry budget, and retries at one layer only.
- **Make repeats safe.** Idempotency keys let a retry return the saved result instead of repeating the action.
- **Contain failures.** Circuit breakers fail fast. Bulkheads keep damage local. Bound queues, shed load early, and tell clients to back off.
- **Agree with a majority.** Raft elects one leader per term and commits entries on a majority. Use odd cluster sizes.
- **Plan for disaster.** Choose RTO and RPO, pick a DR strategy, remember replication is not backup, and test failover.
- **Autoscale and plan capacity.** Scale out fast, in slowly, with warm-up. Forecast and load test, because autoscaling reacts late.

## Practice questions

1. Your API serves 50 million requests a day. Estimate average and peak RPS and the number of servers. State every assumption.
   *Hint: divide by about 86,400, apply a peak factor, use Little's law with an assumed latency, and keep spare capacity.*
2. Your service depends on three other services, each promising 99.95%. What is the best availability you can promise? How can you improve it?
   *Hint: multiply for a chain; add independent redundancy or soft dependencies with fallbacks.*
3. A payment API timed out on the client, and the client retried. How do you make sure the customer is charged once?
   *Hint: client-generated idempotency key, atomic check-and-save on the server, replay the stored response.*
4. A downstream service becomes slow, and soon your whole service is slow too. Explain what is happening and name three fixes.
   *Hint: cascading failure through exhausted threads and connections; timeouts, circuit breaker, bulkhead, load shedding.*
5. Design a failover plan for a service in one region with an RTO of 15 minutes and an RPO of 1 minute. Which DR strategy fits, and what are the risks?
   *Hint: warm standby or active/active with async replication; data loss from replication lag, quotas, untested failover, corrupted data replicated.*
6. Your LLM chat feature gets many 429 errors during a marketing campaign. What do you change?
   *Hint: honour retry-after, backoff with jitter and a retry budget, queue and prioritise, ramp traffic gradually, separate quotas for batch and live traffic, plan capacity before the campaign.*

## Sources

- Google SRE Book, "Service Level Objectives": https://sre.google/sre-book/service-level-objectives/
- Google SRE Workbook, "Alerting on SLOs": https://sre.google/workbook/alerting-on-slos/
- Google SRE Book, "Addressing Cascading Failures": https://sre.google/sre-book/addressing-cascading-failures/
- Google SRE Book, "Introduction" (capacity planning, provisioning): https://sre.google/sre-book/introduction/
- AWS Builders' Library, "Timeouts, retries, and backoff with jitter": https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/
- AWS Builders' Library, "Using load shedding to avoid overload": https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/
- AWS Architecture Blog, "Exponential Backoff And Jitter": https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/
- AWS Well-Architected Reliability Pillar, "Availability": https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/availability.html
- AWS Whitepaper, "Disaster recovery options in the cloud": https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
- AWS, "Target tracking scaling policies for Amazon EC2 Auto Scaling": https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html
- Martin Fowler, "Circuit Breaker": https://martinfowler.com/bliki/CircuitBreaker.html
- Microsoft Azure Architecture Center, "Bulkhead pattern": https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead
- Stripe API docs, "Idempotent requests": https://docs.stripe.com/api/idempotent_requests
- Raft consensus website: https://raft.github.io/
- Wikipedia, "Raft (algorithm)": https://en.wikipedia.org/wiki/Raft_(algorithm)
- Wikipedia, "Scalability": https://en.wikipedia.org/wiki/Scalability
- Wikipedia, "Little's law": https://en.wikipedia.org/wiki/Little%27s_law
- The Twelve-Factor App, "Processes": https://12factor.net/processes
- Kubernetes docs, "Horizontal Pod Autoscaling": https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/
- Interactive "Latency Numbers Every Programmer Should Know": https://colin-scott.github.io/personal_website/research/interactive_latency.html
- Claude API docs, "Rate limits": https://platform.claude.com/docs/en/api/rate-limits
- Claude API docs, "Errors": https://platform.claude.com/docs/en/api/errors

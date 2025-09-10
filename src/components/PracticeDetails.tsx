import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const practiceAreas = [
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: {
      overview: "Coverage spans registration, portfolio management, transactional exploitation, and enforcement before courts and IP offices, including trademarks, copyrights, patents, designs, domain names, trade secrets, plant varieties, and geographical indications. Work includes clearance, filings/prosecution, oppositions/cancellations, licensing/assignments, brand protection online/offline, customs recordal, and civil/criminal enforcement.",
      points: [
        "Trademarks/designs prosecution, oppositions, rectifications, Madrid Protocol coordination.",
        "Patent filings, FER responses, amendments, patentability/FTO opinions with technical counsel.",
        "IP transactions: licensing, franchise, R&D collaborations, joint development, IP holding structures.",
        "Enforcement: injunctions, passing off, customs seizures, anti‑counterfeiting, marketplace takedowns.",
        "Trade secret frameworks, employee IP assignment, and know‑how protection in contracts."
      ]
    }
  },
  {
    id: "corporate-law",
    title: "Corporate Law",
    content: {
      overview: "UnifiedHorizon advises on entity structuring, mergers and acquisitions, joint ventures, private equity and venture capital investments, strategic alliances, and corporate reorganizations aligned with Indian company law and foreign exchange norms. Typical work covers transaction documentation, board processes, shareholder rights, legal due diligence, regulatory notifications/approvals, and post‑closing integration across Companies Act, FEMA/FDI policy, competition filings, employment transition, data protection, and sector licensing.",
      points: [
        "M&A and JV structuring, share/asset deals, business transfers, slump sales, minority protections, and earn‑outs.",
        "PE/VC investments, shareholder agreements, investment rights, exits, and secondary transfers.",
        "Governance frameworks, board/committee charters, related‑party transactions, ESG disclosures, investigations.",
        "Corporate restructuring, capital reductions, buy‑backs, inter‑company mergers/demergers, re‑domiciliation support.",
        "Commercial contracts portfolio: distribution, supply, licensing, franchising, technology transfer, outsourcing."
      ]
    }
  },
  {
    id: "commercial-law",
    title: "Commercial Law",
    content: {
      overview: "The team supports master services, procurement and logistics, manufacturing and tolling, agency and franchise, e‑commerce and platform terms, and financing‑linked commercial covenants. Engagements include contract design and negotiation, standard terms playbooks, verticals compliance, indemnity/limitation regimes tailored to Indian law, and step‑in/termination mechanisms, with overlays for consumer protection, privacy, and financial regulations.",
      points: [
        "Sales and supply chains, warehousing, last‑mile logistics, SLAs, and credit terms.",
        "Distribution, dealership, franchise, and agency models with competition‑safe discounting/exclusivity.",
        "Technology and IP licensing, SaaS subscriptions, DPAs, escrow/source code arrangements.",
        "Advertising, consumer law, and product compliance for retail and digital channels.",
        "Trade compliance touchpoints in customs and indirect tax‑sensitive flows."
      ]
    }
  },
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    content: {
      overview: "Representation before Supreme Court of India, High Courts, District Courts, and specialized tribunals for original suits, writs, appeals, and execution. Scope includes contractual disputes, tort claims, declaratory and injunctive relief, real estate/property disputes, shareholder actions, and civil recovery adjacent to white‑collar matters.",
      points: [
        "Commercial suits and summary proceedings for unpaid invoices, supply disruptions, damages, specific performance.",
        "Shareholder disputes including control, information rights, oppression/mismanagement petitions.",
        "Real estate title, possession, development disputes, landlord–tenant, and interference injunctions.",
        "Writs on administrative/regulatory actions affecting licenses and tenders.",
        "Recognition and execution of domestic decrees and foreign judgments under CPC."
      ]
    }
  },
  {
    id: "arbitration---adr",
    title: "Arbitration & ADR",
    content: {
      overview: "Institutional and ad hoc arbitrations with Indian and foreign seats, including emergency and interim measures, and award challenge/enforcement before Indian courts. Work covers clause drafting, pre‑arbitration strategy, tribunal constitution, pleadings, evidence/expert management, and mediation‑led settlements.",
      points: [
        "SIAC, ICC, LCIA, and domestic rules; ad hoc under the Indian Arbitration Act.",
        "Emergency/interim relief, evidence protocols, cross‑examination planning, tribunal conferencing.",
        "Award challenge and enforcement, asset tracing for execution in India."
      ]
    }
  },
  {
    id: "banking--finance---ibc-interface",
    title: "Banking, Finance & IBC Interface",
    content: {
      overview: "Support for financing documentation (borrower/lender), security creation, regulatory touchpoints, and restructuring under Indian frameworks; IBC processes for creditor strategy, resolution plans, and litigation before NCLT/NCLAT.",
      points: [
        "Loan/security documentation, intercreditor/subordination, guarantees, perfection/filings.",
        "Distressed debt, pre‑pack and CIRP strategy, plan documentation, challenge/approval hearings.",
        "Director liability and wrongful trading risk reviews linked to financing/restructuring decisions."
      ]
    }
  },
  {
    id: "technology--data---platforms",
    title: "Technology, Data & Platforms",
    content: {
      overview: "Technology transactions, software/platform terms, data processing/privacy alignment, and sector overlays for financial, health, and consumer applications; integrated with IP and commercial contracting and cross‑border collaboration.",
      points: [
        "SaaS/cloud contracts, SLAs, support/maintenance, escrow and source code access.",
        "Data governance, transfer assessments, consent/notice frameworks, incident responses.",
        "Fintech, healthtech, marketplace compliance in Indian regimes."
      ]
    }
  },
  {
    id: "competition---antitrust",
    title: "Competition & Antitrust",
    content: {
      overview: "Advice on merger control notifications, gun‑jumping mitigation, JV coordination, verticals/pricing policies, dawn raid preparedness, and cartel/abuse investigations before the CCI and appellate forums.",
      points: [
        "Combinations analysis, Form I/II filings, remedy/commitment design.",
        "Vertical restraints, discount structures, MFN/exclusivity assessment, distribution design.",
        "Investigations, leniency strategy, and competition audits with document/communications protocols."
      ]
    }
  }
];

export const PracticeDetails = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-4">Detailed Practice Areas</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive scope and approach across our key practice areas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {practiceAreas.map((practice) => (
            <AccordionItem
              key={practice.id}
              value={practice.id}
              id={`practice-${practice.id}`}
              className="border border-border rounded-lg bg-card shadow-subtle"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline focus-ring rounded-t-lg">
                <h3 className="heading-sm text-left text-charcoal">{practice.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-foreground">
                  <p className="leading-relaxed">{practice.content.overview}</p>
                  <ul className="space-y-2">
                    {practice.content.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 mr-3"></span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
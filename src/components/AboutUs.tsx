export const AboutUs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-4">About Us</h2>
        </div>

        <div className="space-y-8">
          <div className="prose prose-lg mx-auto text-foreground">
            <p className="leading-relaxed text-center">
              UnifiedHorizon was established with a simple mandate: to develop planning, documentation, and execution of legal work in India, blending technical sophistication with reliable delivery for globally active companies. The methodology in the firm is practice-centred and team-driven, aligning strategies for transactions and disputes with sectoral norms and ground realities.
            </p>
            <p className="leading-relaxed text-center mt-6">
              Our group has experience in both domestic and international issues, acting in concert with overseas lawyers on multijurisdictional instructions and synchronizing to international document protocols and schedules. Coverage includes corporate transactions, commercial contracts, intellectual property, civil litigation, arbitration and alternative dispute resolution, competition and antitrust, banking and finance with IBC interfaces, and technology, data, and platform laws.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="heading-md text-charcoal text-center mb-8">Our Values</h3>
            <div className="prose prose-lg mx-auto text-foreground">
              <p className="leading-relaxed text-center">
                We operate to clear professional standards: integrity in advice, independence in judgment, and respect for client confidentiality. UnifiedHorizon is committed to a workplace that is inclusive and merit‑based, encouraging diversity in work styles, career paths, and individual experiences. The varied backgrounds and skills of the team strengthen our ability to anticipate risk, adapt to change, and remain forward‑looking as an organisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
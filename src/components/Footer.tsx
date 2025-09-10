export const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="heading-sm text-white mb-4">UnifiedHorizon</h3>
            <p className="text-white/80 leading-relaxed">
              UnifiedHorizon is an Indian law firm presenting capabilities through factual, 
              practice-area descriptions consistent with professional norms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>[Address Placeholder]</p>
              <p>New Delhi, India</p>
              <p className="mt-3">
                <a 
                  href="mailto:contact@unifiedhorizon.in" 
                  className="hover:text-white transition-colors focus-ring rounded px-1 py-1"
                >
                  contact@unifiedhorizon.in
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              <a 
                href="#privacy" 
                className="block text-white/80 hover:text-white transition-colors focus-ring rounded px-1 py-1"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="block text-white/80 hover:text-white transition-colors focus-ring rounded px-1 py-1"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 space-y-4">
          <p className="text-white/60 text-sm italic">
            This page avoids advertising language in line with Indian legal practice norms.
          </p>
          <p className="text-white/60 text-sm">
            © 2024 UnifiedHorizon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
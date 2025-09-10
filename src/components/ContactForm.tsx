import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    matterType: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please acknowledge the consent checkbox to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Consultation Request Submitted",
        description: "We will review your request and respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        matterType: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 focus-ring"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 focus-ring"
          placeholder="your.email@company.com"
        />
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="mt-1 focus-ring"
          placeholder="Your organization"
        />
      </div>

      <div>
        <Label htmlFor="matterType">Matter Type</Label>
        <Select
          value={formData.matterType}
          onValueChange={(value) => setFormData({ ...formData, matterType: value })}
        >
          <SelectTrigger className="mt-1 focus-ring">
            <SelectValue placeholder="Select practice area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corporate">Corporate Law</SelectItem>
            <SelectItem value="commercial">Commercial Law</SelectItem>
            <SelectItem value="ip">Intellectual Property</SelectItem>
            <SelectItem value="litigation">Civil Litigation</SelectItem>
            <SelectItem value="arbitration">Arbitration & ADR</SelectItem>
            <SelectItem value="competition">Competition & Antitrust</SelectItem>
            <SelectItem value="banking">Banking, Finance & IBC</SelectItem>
            <SelectItem value="technology">Technology, Data & Platforms</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 min-h-[100px] focus-ring"
          placeholder="Brief description of your legal requirements"
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formData.consent}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, consent: checked as boolean })
          }
          className="mt-1"
        />
        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
          I acknowledge that this inquiry is for informational purposes and does not create an attorney-client relationship. 
          Information shared will be handled in accordance with professional confidentiality standards.
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full focus-ring"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};
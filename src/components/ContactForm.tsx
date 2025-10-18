import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    contactEmail: '',
    website: '',
    helpNeeded: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct mailto link with form data
      const subject = encodeURIComponent(`BGB Help Request from ${formData.businessName}`);
      const body = encodeURIComponent(
        `Business Name: ${formData.businessName}\n` +
        `Contact Person: ${formData.contactPerson}\n` +
        `Email: ${formData.contactEmail}\n` +
        `Website: ${formData.website || 'N/A'}\n\n` +
        `What they need help with:\n${formData.helpNeeded}`
      );
      
      // Open mailto link
      window.location.href = `mailto:agjsuarez@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitted(true);
      toast.success(t('successMessage'));
      
      // Reset form
      setFormData({
        businessName: '',
        contactPerson: '',
        contactEmail: '',
        website: '',
        helpNeeded: '',
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 px-4 sm:px-6 bg-background scroll-fade-in">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
          {t('formTitle')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="group">
            <Input
              required
              type="text"
              placeholder={t('businessName')}
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full transition-all duration-300 focus:scale-[1.01]"
            />
          </div>

          <div className="group">
            <Input
              required
              type="text"
              placeholder={t('contactPerson')}
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="w-full transition-all duration-300 focus:scale-[1.01]"
            />
          </div>

          <div className="group">
            <Input
              required
              type="email"
              placeholder={t('contactEmail')}
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full transition-all duration-300 focus:scale-[1.01]"
            />
          </div>

          <div className="group">
            <Input
              type="url"
              placeholder={t('website')}
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full transition-all duration-300 focus:scale-[1.01]"
            />
          </div>

          <div className="group">
            <Textarea
              required
              placeholder={t('helpNeeded')}
              value={formData.helpNeeded}
              onChange={(e) => setFormData({ ...formData, helpNeeded: e.target.value })}
              className="w-full min-h-32 transition-all duration-300 focus:scale-[1.01]"
            />
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            {t('gdprNote')}
          </p>

          <Button 
            type="submit" 
            className="w-full text-base sm:text-lg py-5 sm:py-6 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? '...' : t('submitButton')}
          </Button>

          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            {t('formNote')}
          </p>
        </form>
      </div>
    </section>
  );
};

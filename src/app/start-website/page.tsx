"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FormData {
  // Step 1: About You
  businessName: string;
  yourName: string;
  email: string;

  // Step 2: Existing Website
  hasWebsite: boolean | null;
  websiteUrl: string;
  websiteImprovement: string;
  socialProfiles: string;
  businessDescription: string;
  otherWebsitesLike: string;

  // Step 3: What You Need
  pages: {
    home: boolean;
    about: boolean;
    services: boolean;
    contact: boolean;
    other: boolean;
  };
  otherPagesDescription: string;

  // Step 4: Final Details
  phone: string;
  launchDate: string;
  additionalNotes: string;
}

export default function StartWebsitePage() {
  const [wizardStarted, setWizardStarted] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    yourName: "",
    email: "",
    hasWebsite: null,
    websiteUrl: "",
    websiteImprovement: "",
    socialProfiles: "",
    businessDescription: "",
    otherWebsitesLike: "",
    pages: {
      home: false,
      about: false,
      services: false,
      contact: false,
      other: false,
    },
    otherPagesDescription: "",
    phone: "",
    launchDate: "",
    additionalNotes: "",
  });



  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = async () => {
    // Validate current step before proceeding
    if (!validateStep(currentStep)) {
      return;
    }

    // Clear any previous validation errors
    setValidationErrors({});

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - handle form submission
      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Submission error:", error);
        // Handle error - you could show an error message here
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear validation error for this field when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const updatePageSelection = (page: keyof FormData['pages'], checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      pages: {
        ...prev.pages,
        [page]: checked
      }
    }));

    // Clear pages validation error when user selects any page
    if (validationErrors.pages) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.pages;
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    switch (step) {
      case 0: // Step 1: About You
        if (!formData.businessName.trim()) {
          errors.businessName = "Business name is required";
        }
        if (!formData.yourName.trim()) {
          errors.yourName = "Your name is required";
        }
        if (!formData.email.trim()) {
          errors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = "Please enter a valid email address";
        }
        break;

      case 1: // Step 2: Existing Website
        if (formData.hasWebsite === null) {
          errors.hasWebsite = "Please select whether you have an existing website";
        }
        if (formData.hasWebsite === true && !formData.websiteUrl.trim()) {
          errors.websiteUrl = "Please provide your website URL";
        }
        if (formData.hasWebsite === false && !formData.businessDescription.trim()) {
          errors.businessDescription = "Please provide a brief description of your business";
        }
        break;

      case 2: // Step 3: What You Need
        const hasSelectedPage = Object.values(formData.pages).some(page => page);
        if (!hasSelectedPage) {
          errors.pages = "Please select at least one page for your website";
        }
        if (formData.pages.other && !formData.otherPagesDescription.trim()) {
          errors.otherPagesDescription = "Please specify what other pages you need";
        }
        break;

      case 3: // Step 4: Final Details
        // All fields in step 4 are optional, so no validation needed
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="min-h-screen bg-[#0e0e0f] text-white">
      {/* Hero / Intro Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#222226] to-[#293148] text-center pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/uploads/Vid_small.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#222226]/40 to-[#293148]/40" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute w-20 h-20 border-2 border-[#00FFF7]/20 rounded-full animate-float-1 floating-shape" style={{top: '10%', left: '10%'}} />
          <div className="absolute w-16 h-16 bg-[#00FFF7]/10 rounded-lg animate-float-2 rotate-45 floating-shape" style={{top: '20%', right: '15%'}} />
          <div className="absolute w-12 h-12 border-2 border-[#00FFF7]/30 rounded-lg animate-float-3 floating-shape" style={{bottom: '30%', left: '20%'}} />
          <div className="absolute w-24 h-24 border border-[#00FFF7]/15 rounded-full animate-float-4 floating-shape" style={{top: '60%', right: '10%'}} />
          <div className="absolute w-8 h-8 bg-[#00FFF7]/20 rounded-full animate-float-5 floating-shape" style={{top: '40%', left: '5%'}} />
          <div className="absolute w-14 h-14 border-2 border-[#00FFF7]/25 rotate-45 animate-float-6 floating-shape" style={{bottom: '20%', right: '25%'}} />
          <div className="absolute w-10 h-10 bg-[#00FFF7]/15 rounded-lg animate-float-1 floating-shape" style={{top: '80%', left: '60%'}} />
          <div className="absolute w-18 h-18 border border-[#00FFF7]/20 rounded-full animate-float-2 floating-shape" style={{top: '15%', left: '70%'}} />
          <div className="absolute w-6 h-6 bg-[#00FFF7]/30 rounded-full animate-float-3 floating-shape" style={{bottom: '60%', right: '5%'}} />
          <div className="absolute w-22 h-22 border-2 border-[#00FFF7]/10 rounded-lg rotate-12 animate-float-4 floating-shape" style={{top: '50%', left: '80%'}} />

          {/* Additional smaller particles */}
          <div className="absolute w-3 h-3 bg-[#00FFF7]/40 rounded-full animate-float-5 floating-shape" style={{top: '25%', left: '40%'}} />
          <div className="absolute w-4 h-4 border border-[#00FFF7]/25 rounded-full animate-float-6 floating-shape" style={{bottom: '40%', left: '70%'}} />
          <div className="absolute w-5 h-5 bg-[#00FFF7]/20 rounded-lg animate-float-1 floating-shape" style={{top: '70%', right: '40%'}} />
          <div className="absolute w-2 h-2 bg-[#00FFF7]/50 rounded-full animate-float-2 floating-shape" style={{top: '35%', right: '60%'}} />
          <div className="absolute w-7 h-7 border border-[#00FFF7]/30 rounded-lg rotate-45 animate-float-3 floating-shape" style={{bottom: '70%', left: '45%'}} />
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Start Your Website{" "}
            <span className="text-[#00FFF7]">Today</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Help us gather everything we need to build your perfect site.
          </p>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#0e0e0f]" />
          </svg>
        </div>
      </section>

      {/* Wizard Container */}
      {wizardStarted && !isSubmitted && (
        <section className="relative pt-16 pb-16 lg:pb-24">
          <div className="max-w-5xl mx-auto px-4">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      step <= currentStep + 1
                        ? 'bg-[#00FFF7] text-black'
                        : 'bg-[#23242b] text-gray-400 border border-[#3a3b44]'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        step < currentStep + 1 ? 'bg-[#00FFF7]' : 'bg-[#23242b]'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Step {currentStep + 1} of 4: {
                    ['About You', 'Existing Website', 'What You Need', 'Final Details'][currentStep]
                  }
                </p>
              </div>
            </div>

            {/* Wizard Panel */}
            <div className="bg-[#16171e] border border-[#2b2b35] rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 mb-8">
              {/* Wizard Steps Container */}
              <div id="wizard-steps" className="min-h-[400px]">
                {/* Step 1: About You */}
                {currentStep === 0 && (
                  <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#00FFF7]">About You</h3>
                      <p className="text-gray-300">Let's start with the basics</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => updateFormData('businessName', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                            validationErrors.businessName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                          }`}
                          placeholder="Enter your business name"
                        />
                        {validationErrors.businessName && (
                          <p className="mt-1 text-sm text-red-400">{validationErrors.businessName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.yourName}
                          onChange={(e) => updateFormData('yourName', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                            validationErrors.yourName
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {validationErrors.yourName && (
                          <p className="mt-1 text-sm text-red-400">{validationErrors.yourName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                            validationErrors.email
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                          }`}
                          placeholder="Enter your email address"
                        />
                        {validationErrors.email && (
                          <p className="mt-1 text-sm text-red-400">{validationErrors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Existing Website */}
                {currentStep === 1 && (
                  <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#00FFF7]">Existing Website</h3>
                      <p className="text-gray-300">Tell us about your current online presence</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-4">
                          Do you already have a website? *
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="hasWebsite"
                              checked={formData.hasWebsite === true}
                              onChange={() => updateFormData('hasWebsite', true)}
                              className="w-4 h-4 text-[#00FFF7] bg-[#23242b] border border-[#3a3b44] focus:ring-[#00FFF7] focus:ring-2"
                            />
                            <span className="ml-2 text-white">Yes</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input
                              type="radio"
                              name="hasWebsite"
                              checked={formData.hasWebsite === false}
                              onChange={() => updateFormData('hasWebsite', false)}
                              className="w-4 h-4 text-[#00FFF7] bg-[#23242b] border border-[#3a3b44] focus:ring-[#00FFF7] focus:ring-2"
                            />
                            <span className="ml-2 text-white">No</span>
                          </label>
                        </div>
                        {validationErrors.hasWebsite && (
                          <p className="mt-2 text-sm text-red-400">{validationErrors.hasWebsite}</p>
                        )}
                      </div>

                      {formData.hasWebsite === true && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Website URL
                            </label>
                            <input
                              type="url"
                              value={formData.websiteUrl}
                              onChange={(e) => updateFormData('websiteUrl', e.target.value)}
                              className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                                validationErrors.websiteUrl
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                              }`}
                              placeholder="https://your-website.com"
                            />
                            {validationErrors.websiteUrl && (
                              <p className="mt-1 text-sm text-red-400">{validationErrors.websiteUrl}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              What works well—and what could be improved?
                            </label>
                            <input
                              type="text"
                              value={formData.websiteImprovement}
                              onChange={(e) => updateFormData('websiteImprovement', e.target.value)}
                              className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                              placeholder="Tell us what you like and what needs improvement"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Other websites I like
                            </label>
                            <input
                              type="text"
                              value={formData.otherWebsitesLike}
                              onChange={(e) => updateFormData('otherWebsitesLike', e.target.value)}
                              className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                              placeholder="Share URLs of websites you admire for design or functionality"
                            />
                          </div>
                        </>
                      )}

                      {formData.hasWebsite === false && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Brief description of your business
                            </label>
                            <textarea
                              value={formData.businessDescription}
                              onChange={(e) => updateFormData('businessDescription', e.target.value)}
                              rows={3}
                              className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                                validationErrors.businessDescription
                                  ? 'border-red-500 focus:ring-red-500'
                                  : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                              }`}
                              placeholder="Tell us what your business does, your target audience, and what makes you unique"
                            />
                            {validationErrors.businessDescription && (
                              <p className="mt-1 text-sm text-red-400">{validationErrors.businessDescription}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Please share any social media profiles or other online presence
                            </label>
                            <input
                              type="text"
                              value={formData.socialProfiles}
                              onChange={(e) => updateFormData('socialProfiles', e.target.value)}
                              className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                              placeholder="Facebook, LinkedIn, Instagram profiles, etc."
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Other websites I like
                            </label>
                            <input
                              type="text"
                              value={formData.otherWebsitesLike}
                              onChange={(e) => updateFormData('otherWebsitesLike', e.target.value)}
                              className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                              placeholder="Share URLs of websites you admire for design or functionality"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: What You Need */}
                {currentStep === 2 && (
                  <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#00FFF7]">What You Need</h3>
                      <p className="text-gray-300">Select the pages you want for your website</p>
                    </div>

                    <div className="space-y-4">
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Which pages do you want? (Select all that apply) *
                      </label>

                      <div className="space-y-3">
                        {[
                          { key: 'home', label: 'Home' },
                          { key: 'about', label: 'About Us' },
                          { key: 'services', label: 'Services' },
                          { key: 'contact', label: 'Contact' },
                          { key: 'other', label: 'Other' }
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center cursor-pointer p-3 bg-[#23242b] rounded-lg border border-[#3a3b44] hover:border-[#00FFF7]/50 transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.pages[key as keyof FormData['pages']]}
                              onChange={(e) => updatePageSelection(key as keyof FormData['pages'], e.target.checked)}
                              className="w-5 h-5 text-[#00FFF7] bg-[#23242b] border border-[#3a3b44] rounded focus:ring-[#00FFF7] focus:ring-2"
                            />
                            <span className="ml-3 text-white text-lg">{label}</span>
                          </label>
                        ))}
                      </div>

                      {validationErrors.pages && (
                        <p className="text-sm text-red-400">{validationErrors.pages}</p>
                      )}

                      {formData.pages.other && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Please specify what other pages you need *
                          </label>
                          <textarea
                            value={formData.otherPagesDescription}
                            onChange={(e) => updateFormData('otherPagesDescription', e.target.value)}
                            rows={3}
                            className={`w-full px-4 py-3 bg-[#23242b] border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                              validationErrors.otherPagesDescription
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-[#3a3b44] focus:ring-[#00FFF7]'
                            }`}
                            placeholder="Describe the additional pages you need (e.g., Portfolio, Blog, FAQ, Testimonials, etc.)"
                          />
                          {validationErrors.otherPagesDescription && (
                            <p className="mt-1 text-sm text-red-400">{validationErrors.otherPagesDescription}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 3 && (
                  <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-4 text-[#00FFF7]">Final Details</h3>
                      <p className="text-gray-300">Just a few more details to get started</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Ideal Launch Date
                        </label>
                        <input
                          type="date"
                          value={formData.launchDate}
                          onChange={(e) => updateFormData('launchDate', e.target.value)}
                          className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Anything else we should know?
                        </label>
                        <textarea
                          value={formData.additionalNotes}
                          onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 bg-[#23242b] border border-[#3a3b44] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFF7] focus:border-transparent resize-none"
                          placeholder="Any special requirements, features, design preferences, functionality needs, or other ideas you have in mind. The more details you provide, the better we can help you!"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4">
              <Button
                onClick={handleBack}
                disabled={currentStep === 0}
                variant="outline"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  currentStep === 0
                    ? "border-gray-600 text-gray-400 cursor-not-allowed bg-transparent"
                    : "border-[#3a3b44] text-gray-300 hover:text-white hover:border-gray-300 bg-transparent"
                }`}
              >
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#00FFF7] text-black rounded-lg hover:bg-[#00E5DE] font-semibold transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  currentStep === 3 ? "Start My Website" : "Next"
                )}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Thank You Page */}
      {isSubmitted && (
        <section className="relative py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-[#00FFF7] to-[#00E5DE] rounded-2xl p-12 mb-12">
              <div className="mb-6">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#00FFF7]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-black mb-4">Thank You!</h2>
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                We've received your information and our team will be in touch within 24 hours to discuss your website project. Get ready to transform your online presence!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">What's Next?</h3>
                <p className="text-gray-300 text-sm">
                  Our team will review your requirements and prepare a customized proposal with timeline and pricing.
                </p>
              </div>
              <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Quick Turnaround</h3>
                <p className="text-gray-300 text-sm">
                  With our AI-powered workflow, we'll have your website designed and developed faster than traditional agencies.
                </p>
              </div>
              <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FFF7]">Ongoing Support</h3>
                <p className="text-gray-300 text-sm">
                  After launch, we provide ongoing support, hosting, and optimization to ensure your site performs perfectly.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Information Section */}
      <section className="relative py-16 border-t border-[#23242b]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Quick Setup</h3>
              <p className="text-gray-300">
                Get your website up and running in just a few simple steps with our guided process.
              </p>
            </div>

            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Custom Design</h3>
              <p className="text-gray-300">
                Tell us about your vision and we'll create a unique design that perfectly fits your brand.
              </p>
            </div>

            <div className="bg-[#16171e] rounded-xl border border-[#2b2b35] p-8">
              <div className="w-16 h-16 bg-[#00FFF7]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#00FFF7] rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00FFF7]">Expert Support</h3>
              <p className="text-gray-300">
                Our team of experts will guide you through every step of the website creation process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

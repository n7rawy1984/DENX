import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { OrderForm } from "@/components/OrderForm";
import { EmailJSSetup } from "@/components/EmailJSSetup";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [showSetup, setShowSetup] = useState(false);
  const { t } = useLanguage();

  if (showSetup) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{t('setup.emailjs')}</h1>
            <div className="flex gap-2">
              <LanguageToggle />
              <Button 
                variant="outline" 
                onClick={() => setShowSetup(false)}
              >
                {t('setup.backToLanding')}
              </Button>
            </div>
          </div>
          <EmailJSSetup />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Language Toggle & Setup Buttons */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 transform-none">
        <LanguageToggle />
        {/* <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowSetup(true)}
          className="shadow-lg"
        >
          <Settings className="w-4 h-4 mr-2" />
          {t('setup.emailjs')}
        </Button> */}
      </div>

      {/* Hero Section */}
      <Hero />
      
      {/* Product & Order Section */}
      <section id="order-section" className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('main.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('main.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start justify-center max-w-4xl mx-auto">
            <div className="flex justify-center">
              <ProductShowcase />
            </div>
            <div className="flex justify-center">
              <OrderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <p className="text-sm mt-2">
            {t('footer.features')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

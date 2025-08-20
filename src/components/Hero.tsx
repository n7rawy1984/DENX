import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order-section');
    orderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white text-sm ml-2 font-medium">{t('hero.reviews')}</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-3xl font-bold text-white mb-6 leading-tight">
          {t('hero.title.never')}
          <span className="block bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
            {t('hero.title.stranded')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="space-y-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4 text-white/100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-bg">{t('hero.warranty')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-bg">{t('hero.freeShipping')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-bg">{t('hero.cashOnDelivery')}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToOrder}
            variant="hero"
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            {t('hero.orderNow')}
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Button>
          
          <div className="text-white/100 text-lg">
            {t('hero.limitedOffer')}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Battery, Flashlight, Shield, Wind } from "lucide-react";

import denxDevice from "@/assets/denx-device.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProductShowcase = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Battery className="w-5 h-5" />,
      title: t('product.feature.charger.title'),
      description: t('product.feature.charger.desc')
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t('product.feature.jumpstarter.title'),
      description: t('product.feature.jumpstarter.desc')
    },
    {
      icon: <Flashlight className="w-5 h-5" />,
      title: t('product.feature.flashlight.title'),
      description: t('product.feature.flashlight.desc')
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('product.feature.powerbank.title'),
      description: t('product.feature.powerbank.desc')
    },
{
  icon: <Wind className="w-5 h-5" />,
  title: t('product.feature.airpump.title'),
  description: t('product.feature.airpump.desc')
}

  ];

  return (
    <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-xl">
      <CardContent className="p-16 space-y-8">
        <div className="relative">
          <img
            src={denxDevice}
            alt={t('product.title')}
            className="w-full h-64 object-cover rounded-lg"
          />
          <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
            {t('product.warranty')}
          </Badge>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-foreground">
            {t('product.title')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('product.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <div className="text-primary mt-0.5">
                {feature.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-4 bg-gradient-primary rounded-lg">
          <div className="text-white">
            <div className="text-2xl font-bold">{t('product.price')}</div>
            <div className="text-sm opacity-90">{t('product.freeShippingIncluded')}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-success" />
            {t('product.codAvailable')}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-success" />
            {t('product.fastDelivery')}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-success" />
            {t('product.manufacturerWarranty')}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
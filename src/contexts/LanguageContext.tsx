import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    'hero.title.never': 'Never Get',
    'hero.title.stranded': 'Stranded Again',
    'hero.subtitle': 'The ultimate 5-in-1 emergency solution: Battery charger, jump starter, flashlight, power bank, and air pump all in one compact device.',
    'hero.warranty': '1 Year Warranty',
    'hero.freeShipping': 'Free Shipping',
    'hero.cashOnDelivery': 'Cash on Delivery',
    'hero.orderNow': 'Order Now - 210 AED',
    'hero.limitedOffer': 'Limited time offer • Fast delivery',
    'hero.reviews': '5/5 Reviews',

    // Product Section
    'product.title': 'DENX Car Battery Charger & Jump Starter',
    'product.subtitle': '5-in-1 Emergency Solution for Your Vehicle',
    'product.price': '210 AED',
    'product.freeShippingIncluded': 'Free Shipping Included',
    'product.feature.charger.title': 'Car Battery Charger',
    'product.feature.charger.desc': 'Advanced charging technology for all battery types',
    'product.feature.jumpstarter.title': 'Jump Starter',
    'product.feature.jumpstarter.desc': 'Emergency power to start your vehicle instantly',
    'product.feature.flashlight.title': 'LED Flashlight',
    'product.feature.flashlight.desc': 'Bright emergency flashlight with multiple modes',
    'product.feature.powerbank.title': 'Power Bank',
    'product.feature.powerbank.desc': 'Portable charging for phones and devices',
    'product.feature.airpump.title': 'Air Pump',
'product.feature.airpump.desc': 'Built-in air pump for car tires and inflatables',

    'product.warranty': '1 Year Warranty',
    'product.codAvailable': 'Cash on Delivery Available',
    'product.fastDelivery': 'Fast Delivery',
    'product.manufacturerWarranty': '1 Year Manufacturer Warranty',

    // Order Form
    'order.title': 'Order Details',
    'order.fullName': 'Full Name',
    'order.fullName.placeholder': 'Enter your full name',
    'order.email': 'Email Address',
    'order.email.placeholder': 'your@email.com',
    'order.phone': 'Phone Number',
    'order.phone.placeholder': '+971 50 123 4567',
    'order.city': 'City',
    'order.city.placeholder': 'Select your city',
    'order.address': 'Complete Address',
    'order.address.placeholder': 'Street, building, apartment details...',
    'order.notes': 'Additional Notes (Optional)',
    'order.notes.placeholder': 'Any special instructions or requests...',
    'order.submit': 'Submit Order',
    'order.submitting': 'Submitting Order...',
    'order.success.title': 'Order Submitted Successfully!',
    'order.success.desc': "We'll contact you shortly to confirm your order.",
    'order.error.title': 'Order Submission Failed',
    'order.error.desc': 'Please try again or contact us directly.',

    // Cities
    'city.abudhabi': 'Abu Dhabi',
    'city.dubai': 'Dubai',
    'city.sharjah': 'Sharjah',
    'city.ajman': 'Ajman',
    'city.fujairah': 'Fujairah',
    'city.rak': 'Ras Al Khaimah',
    'city.uaq': 'Umm Al Quwain',

    // Main Section
    'main.title': 'Get Your DENX Device Today',
    'main.subtitle': 'Fill out the form below and we\'ll contact you to confirm your order. Fast delivery and cash on delivery available.',

    // Footer
    'footer.copyright': '© 2025 DENX Store. All rights reserved.',
    'footer.features': 'Secure ordering • Fast delivery • 1 Year warranty',

    // Setup
    'setup.emailjs': 'EmailJS Setup',
    'setup.backToLanding': 'Back to Landing Page',

    // Language
    'language.english': 'English',
    'language.arabic': 'العربية',

    // Validation
    'validation.name.min': 'Name must be at least 2 characters',
    'validation.email.invalid': 'Please enter a valid email',
    'validation.phone.min': 'Please enter a valid phone number',
    'validation.address.min': 'Please enter a complete address',
    'validation.city.required': 'Please select a city',
  },
  ar: {
    // Hero Section
    'hero.title.never': 'لن تتعطل',
    'hero.title.stranded': 'مرة أخرى',
    'hero.subtitle': 'الحل الطارئ الأمثل 5 في 1: شاحن بطارية، مشغل سيارة، كشاف، باور بانك, ومضخة هواء في جهاز واحد مدمج.',
    'hero.warranty': 'ضمان لمدة سنة كاملة',
    'hero.freeShipping': 'شحن مجاني',
    'hero.cashOnDelivery': 'الدفع عند الاستلام',
    'hero.orderNow': 'اطلب الآن - 210 درهم',
    'hero.limitedOffer': 'عرض لفترة محدودة • توصيل سريع',
    'hero.reviews': '5/5 تقييمات',

    // Product Section
    'product.title': 'المنقذ DENX شاحن بطارية السيارة ومشغل الطوارئ',
    'product.subtitle': 'حل الطوارئ 5 في 1 لسيارتك',
    'product.price': '210 درهم',
    'product.freeShippingIncluded': 'شحن مجاني متضمن',
    'product.feature.charger.title': 'شاحن بطارية السيارة',
    'product.feature.charger.desc': 'تقنية شحن متقدمة لجميع أنواع البطاريات',
    'product.feature.jumpstarter.title': 'مشغل طوارئ',
    'product.feature.jumpstarter.desc': 'طاقة طوارئ لتشغيل سيارتك فورياً',
    'product.feature.flashlight.title': 'كشاف LED',
    'product.feature.flashlight.desc': 'كشاف طوارئ ساطع بأوضاع متعددة',
    'product.feature.powerbank.title': 'باور بانك',
    'product.feature.powerbank.desc': 'شحن محمول للهواتف والأجهزة',
    'product.feature.airpump.title': 'مضخة الهواء',
'product.feature.airpump.desc': 'مضخة هواء مدمجة لإطارات السيارة والمنتجات القابلة للنفخ',

    'product.warranty': 'ضمان لمدة سنة كاملة',
    'product.codAvailable': 'الدفع عند الاستلام متاح',
    'product.fastDelivery': 'توصيل سريع',
    'product.manufacturerWarranty': 'ضمان الشركة المصنعة سنة واحدة',

    // Order Form
    'order.title': 'تفاصيل الطلب',
    'order.fullName': 'الاسم الكامل',
    'order.fullName.placeholder': 'أدخل اسمك الكامل',
    'order.email': 'البريد الإلكتروني',
    'order.email.placeholder': 'your@email.com',
    'order.phone': 'رقم الهاتف',
    'order.phone.placeholder': '+971 50 123 4567',
    'order.city': 'المدينة',
    'order.city.placeholder': 'اختر مدينتك',
    'order.address': 'العنوان الكامل',
    'order.address.placeholder': 'الشارع، المبنى، تفاصيل الشقة...',
    'order.notes': 'ملاحظات إضافية (اختيارية)',
    'order.notes.placeholder': 'أي تعليمات خاصة أو طلبات...',
    'order.submit': 'تأكيد الطلب',
    'order.submitting': 'جاري إرسال الطلب...',
    'order.success.title': 'تم إرسال الطلب بنجاح!',
    'order.success.desc': 'سنتواصل معك قريباً لتأكيد طلبك.',
    'order.error.title': 'فشل في إرسال الطلب',
    'order.error.desc': 'يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.',

    // Cities
    'city.abudhabi': 'أبو ظبي',
    'city.dubai': 'دبي',
    'city.sharjah': 'الشارقة',
    'city.ajman': 'عجمان',
    'city.fujairah': 'الفجيرة',
    'city.rak': 'رأس الخيمة',
    'city.uaq': 'أم القيوين',

    // Main Section
    'main.title': 'احصل على جهاز DENX اليوم',
    'main.subtitle': 'املأ النموذج أدناه وسنتواصل معك لتأكيد طلبك. توصيل سريع والدفع عند الاستلام متاح.',

    // Footer
    'footer.copyright': '© 2025 متجر DENX. جميع الحقوق محفوظة.',
    'footer.features': 'طلب آمن • توصيل سريع • ضمان لمدة سنة كاملة',

    // Setup
    'setup.emailjs': 'إعداد EmailJS',
    'setup.backToLanding': 'العودة للصفحة الرئيسية',

    // Language
    'language.english': 'English',
    'language.arabic': 'العربية',

    // Validation
    'validation.name.min': 'يجب أن يكون الاسم على الأقل حرفين',
    'validation.email.invalid': 'يرجى إدخال بريد إلكتروني صحيح',
    'validation.phone.min': 'يرجى إدخال رقم هاتف صحيح',
    'validation.address.min': 'يرجى إدخال عنوان كامل',
    'validation.city.required': 'يرجى اختيار المدينة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
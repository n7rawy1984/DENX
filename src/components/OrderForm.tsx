import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Phone, Mail, MapPin, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, language } = useLanguage();

  // مفاتيح EmailJS (من env وعندك fallback بالقيم اللي بعتها)
  const SERVICE_ID =
    (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || "service_0t5zams";
  const TEMPLATE_ID =
    (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || "template_iugigmp";
  const PUBLIC_KEY =
    (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || "9oDf7K1CgEjHTTxZS";
  const TO_EMAIL =
    (import.meta as any).env?.VITE_EMAILJS_TO_EMAIL || "your@email.com";

  const orderSchema = z.object({
    name: z.string().min(2, t("validation.name.min")),
    phone: z.string().min(10, t("validation.phone.min")),
    address: z.string().min(5, t("validation.address.min")),
    city: z.string().min(2, t("validation.city.required")),
    notes: z.string().optional(),
  });

  type OrderForm = z.infer<typeof orderSchema>;

  const cities = [
    { value: "abudhabi", label: t("city.abudhabi") },
    { value: "dubai", label: t("city.dubai") },
    { value: "sharjah", label: t("city.sharjah") },
    { value: "ajman", label: t("city.ajman") },
    { value: "fujairah", label: t("city.fujairah") },
    { value: "rak", label: t("city.rak") },
    { value: "uaq", label: t("city.uaq") },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
  });

  // سجل حقل المدينة في RHF (لإن Select مش input عادي)
  useEffect(() => {
    register("city", { required: true });
  }, [register]);

  const selectedCity = watch("city");

  const onSubmit = async (data: OrderForm) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: TO_EMAIL,
        customer_name: data.name,
        customer_phone: data.phone,
        customer_address: data.address,
        customer_city: data.city, // value ثابتة (abudhabi/dubai…)
        customer_notes: data.notes || "No additional notes",
        product_name: t("product.title"),
        product_price: t("product.price"),
        order_date: new Date().toLocaleDateString(),
        language: language,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      toast({
        title: t("order.success.title"),
        description: t("order.success.desc"),
        variant: "default",
      });

      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: t("order.error.title"),
        description: t("order.error.desc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent">
          {t("order.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {t("order.fullName")}
            </Label>
            <Input
              id="name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

       

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {t("order.phone")}
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t("order.city")}
            </Label>

            <Select
              value={selectedCity || ""}
              onValueChange={(value) =>
                setValue("city", value, { shouldValidate: true })
              }
            >
              <SelectTrigger className={errors.city ? "border-destructive" : ""}>
                <SelectValue placeholder={t("order.city.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.city && (
              <p className="text-sm text-destructive">{errors.city.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">{t("order.address")}</Label>
            <Textarea
              id="address"
              {...register("address")}
              className={errors.address ? "border-destructive" : ""}
              rows={3}
            />
            {errors.address && (
              <p className="text-sm text-destructive">{errors.address.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">{t("order.notes")}</Label>
            <Textarea
              id="notes"
              {...register("notes")}
              rows={2}
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t("order.submitting")}
              </>
            ) : (
              t("order.submit")
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

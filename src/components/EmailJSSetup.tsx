import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info, CheckCircle } from "lucide-react";

export const EmailJSSetup = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            EmailJS Setup Instructions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertDescription>
              To enable the order form to send emails, you need to set up EmailJS. Follow these steps:
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Create EmailJS Account</h3>
                <p className="text-muted-foreground mb-2">
                  Go to EmailJS and create a free account.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">
                    Visit EmailJS <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">Create Email Service</h3>
                <p className="text-muted-foreground">
                  Add an email service (Gmail, Outlook, etc.) in your EmailJS dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">Create Email Template</h3>
                <p className="text-muted-foreground mb-3">
                  Create a template with these variables:
                </p>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                  <div>Customer Name: {`{{customer_name}}`}</div>
                  <div>Email: {`{{customer_email}}`}</div>
                  <div>Phone: {`{{customer_phone}}`}</div>
                  <div>Address: {`{{customer_address}}`}</div>
                  <div>City: {`{{customer_city}}`}</div>
                  <div>Notes: {`{{customer_notes}}`}</div>
                  <div>Product: {`{{product_name}}`}</div>
                  <div>Price: {`{{product_price}}`}</div>
                  <div>Date: {`{{order_date}}`}</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-2">Update OrderForm.tsx</h3>
                <p className="text-muted-foreground mb-3">
                  Replace these values in <code className="bg-muted px-2 py-1 rounded">src/components/OrderForm.tsx</code>:
                </p>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm space-y-1">
                  <div>YOUR_SERVICE_ID → your EmailJS service ID</div>
                  <div>YOUR_TEMPLATE_ID → your EmailJS template ID</div>
                  <div>YOUR_PUBLIC_KEY → your EmailJS public key</div>
                  <div>your-email@example.com → your email address</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-success mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">Test Your Form</h3>
                <p className="text-muted-foreground">
                  Once configured, test the order form to ensure emails are being sent correctly.
                </p>
              </div>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <strong>Tip:</strong> EmailJS offers 200 free emails per month. For higher volumes, 
              consider upgrading to a paid plan.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};
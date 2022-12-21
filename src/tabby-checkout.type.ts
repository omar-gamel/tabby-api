export interface TabbyCheckoutTpye {
  payment: {
    amount: string;
    currency: string; // Enum: "AED" "SAR" "KWD" "BHD" "EGP" -> Default: "AED"
    description?: string;
    buyer: {
      phone: string;
      email: string;
      name: string;
      dob?: string; // Customer's date of birth; format is YYYY-MM-DD
    };
    shipping_address: {
      city: string;
      address: string;
      zip: string;
    };
    order: {
      tax_amount?: string; // Default: '0.00'
      shipping_amount?: string; // Default: '0.00'
      discount_amount?: string; // Default: '0.00'
      updated_at?: string;
      reference_id: string; // Merchant-assigned order or cart ID
      items?: [
        {
          title: string;
          description?: string;
          quantity: number; // Default: 1
          unit_price: string; // Default: '0.00' Price per unit of the product
          discount_amount?: string; // Default: '0.00'
          reference_id?: string; // Merchant’s product identifier
          image_url?: string;
          product_url?: string;
          gender?: string; // Enum: "Male" "Female" "Kids" "Other"
          category: string;
          color?: string;
          product_material?: string;
          size_type?: string;
          size?: string;
          brand?: string;
        }
      ];
    };
    buyer_history: {
      registered_since: string;
      loyalty_level: number; // Default: 0
      wishlist_count?: number;
      is_social_networks_connected?: boolean;
      is_phone_number_verified?: boolean;
      is_email_verified?: boolean;
    };
    order_history: [
      {
        purchased_at: string;
        amount: string; // Default: '100.00'
        payment_method?: string; // Enum: "card" "cod"
        status: string; // Enum: "new" "processing" "complete" "refunded" "canceled" "unknown"
        buyer?: {
          phone: string;
          email: string;
          name: string;
          dob: string;
        };
        shipping_address?: {
          city: string;
          address: string;
          zip: string;
        };
        items?: [
          {
            title?: string;
            description?: string;
            quantity?: number;
            unit_price?: string;
            discount_amount?: string;
            reference_id?: string;
            image_url?: string;
            product_url?: string;
            ordered: number; // Default: 0
            captured: number; // Default: 0
            shipped: number; // Default: 0
            refunded: number; // Default: 0
            gender?: string;
            category: string;
            color?: string;
            product_material?: string;
            size_type?: string;
            size?: string;
            brand?: string;
          }
        ];
      }
    ];
    meta?: {
      order_id: any;
      customer: any;
    };
    attachment?: {
      body: any;
      content_type: string; // Default: "application/vnd.tabby.v1+json"
    };
  };
  lang: string; // Enum: "ar" "en"
  merchant_code: string; // Please contact your integration manager to get the codes'amanda_center';
  merchant_urls?: {
    success?: string;
    cancel?: string;
    failure?: string;
  };
  create_token?: boolean; // Pass true if you want to get token at the and of checkout session
  token?: string;
  // If you already have token, you can pass it there to get better UX for customer.
  // This field will be read only when authorization was made using secret_key.
  // In the response, this field will be filled with token value, that you can use for Tokenized Payments
}

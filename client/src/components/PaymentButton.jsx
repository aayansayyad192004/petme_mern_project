import React, { useEffect, useRef } from 'react';

const PaymentButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the script's src to the Razorpay checkout URL
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    
    // Add the data-payment_button_id attribute to the script
    script.setAttribute('data-payment_button_id', 'pl_OK94Ln7VC3G57L');
    
    // Ensure the script loads asynchronously
    script.async = true;
    
    // Append the script to the form
    if (formRef.current) {
      formRef.current.appendChild(script);
    }
    
    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (formRef.current) {
        formRef.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <form ref={formRef}></form> {/* The form will contain the Razorpay button */}
    </div>
  );
};

export default PaymentButton;

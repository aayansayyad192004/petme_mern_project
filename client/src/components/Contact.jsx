import React, { useEffect, useState } from 'react';

import PaymentButton from './PaymentButton'

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleMessageSend = () => {
    window.location.href = `mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`;
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span> for{' '}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <div className="flex gap-4">
            <button
              onClick={handleMessageSend}
              className="bg-red-950 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
            >
              Send Message
            </button>
            <PaymentButton amount={listing.price} description={listing.name} listingId={listing.id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

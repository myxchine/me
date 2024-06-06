"use client";

import { useState, useEffect } from "react";
import getSession from "@/components/checkout/getSession";
import { addOrder } from "@/server/utils";
import Header from "@/components/checkout/Header";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    if (sessionId) {
      console.log(sessionId);

      (async function fetchSession() {
        try {
          const session = await getSession(sessionId);
          console.log(session);

          const order = await addOrder(session);
          console.log(order);
        } catch (error) {
          console.error("Error fetching session:", error);
        }
      })();

      fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        })
        .catch((error) => {
          console.error("Error fetching session:", error);
        });
    }
  }, []);

  if (status === "complete") {
    localStorage.removeItem("cart"); // Clear the cart
    return (
      <section id="success">
        <Header />
        <div className="p-4 pt-12">
          <h1 className="text-3xl font-bold pb-8">Thank you for your order!</h1>
          A confirmation email will be sent to {customerEmail}.
          <p className="pt-4">
            If you have any questions, please email{" "}
            <a href="mailto:michael@duality.agency">michael@duality.agency</a>.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

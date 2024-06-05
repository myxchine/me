"use client";

import { useState, useEffect } from "react";
import getSession from "@/components/checkout/getSession";
import { addOrder } from "@/server/utils";

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
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
}

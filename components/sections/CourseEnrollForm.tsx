"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  bankPaymentDetails,
  coursePricing,
  formatNaira,
  brand,
  host,
} from "@/lib/site";
import { Bank, ShieldCheck, Tick, WhatsApp } from "../icons";

type EnrollDetails = {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
};

type FormProps = {
  whatsappNumber: string;
};

const initial: EnrollDetails = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "Lagos",
};

export default function CourseEnrollForm({ whatsappNumber }: FormProps) {
  const [form, setForm] = useState<EnrollDetails>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [link, setLink] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const set = <K extends keyof EnrollDetails>(key: K, value: EnrollDetails[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const whatsappMessage = useMemo(() => {
    return [
      `*New Enrollment: ${brand.courseName}*`,
      "----------------------------------",
      `👤 Name: ${form.name}`,
      `📱 WhatsApp: ${form.phone}`,
      `📧 Email: ${form.email}`,
      `📍 Location: ${form.city ? `${form.city}, ` : ""}${form.state}`,
      `💰 Amount: ${formatNaira(coursePricing.actionTakersPrice)} (40% OFF discount applied)`,
      `🏦 Payment Mode: Direct Bank Transfer`,
      "----------------------------------",
      `Hello ${host.name}, I have just completed the transfer of ${formatNaira(coursePricing.actionTakersPrice)} for the course and bonuses.`,
      "I am attaching my payment receipt/proof screenshot here.",
      "Please verify and admit me into the WhatsApp Group Community!",
    ].join("\n");
  }, [form]);

  function handleCopyAccount() {
    navigator.clipboard.writeText(bankPaymentDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    setLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setLink("");
  }

  return (
    <section className="enroll-section" id="enroll">
      <div className="wrap wrap--tight">
        <div className="enroll-card">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3>Enrollment &amp; Instant Payment</h3>
              <p className="enroll-card__sub">
                Complete your details below, make the transfer, and send proof on WhatsApp to receive immediate admission into the VIP group community.
              </p>

              {/* Bank Transfer Details Box */}
              <div className="bank-transfer-box">
                <div className="bank-transfer-box__title">
                  <Bank size={18} />
                  <span>Official Transfer Account Details</span>
                </div>

                <div className="bank-details-grid">
                  <div className="bank-detail-item">
                    <span className="bank-detail-label">Bank Name:</span>
                    <span className="bank-detail-val">{bankPaymentDetails.bankName}</span>
                  </div>

                  <div className="bank-detail-item">
                    <span className="bank-detail-label">Account Number:</span>
                    <span className="bank-detail-val" style={{ display: "inline-flex", alignItems: "center" }}>
                      {bankPaymentDetails.accountNumber}
                      <button
                        type="button"
                        onClick={handleCopyAccount}
                        className="copy-btn"
                        title="Copy account number"
                      >
                        {copied ? "Copied! ✓" : "Copy"}
                      </button>
                    </span>
                  </div>

                  <div className="bank-detail-item" style={{ gridColumn: "1 / -1" }}>
                    <span className="bank-detail-label">Account Name:</span>
                    <span className="bank-detail-val">{bankPaymentDetails.accountName}</span>
                  </div>

                  <div className="bank-detail-item" style={{ gridColumn: "1 / -1" }}>
                    <span className="bank-detail-label">Amount Payable:</span>
                    <span className="bank-detail-val" style={{ color: "var(--brand-700)", fontSize: "1.1rem" }}>
                      {formatNaira(coursePricing.actionTakersPrice)}{" "}
                      <span style={{ fontSize: "0.8rem", color: "var(--muted)", textDecoration: "line-through" }}>
                        {formatNaira(coursePricing.regularPrice)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Chinedu Eze"
                  className="form-input"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  WhatsApp Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. 08012345678"
                  className="form-input"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                <p className="form-hint">
                  Your VIP community invite link will be sent to this WhatsApp number.
                </p>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. chinedu@gmail.com"
                  className="form-input"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <p className="form-hint">
                  Course updates and receipts are delivered to your email.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="city">
                    City / Town *
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    placeholder="e.g. Ikeja, Abeokuta"
                    className="form-input"
                    value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="state">
                    State *
                  </label>
                  <input
                    id="state"
                    type="text"
                    required
                    placeholder="e.g. Lagos"
                    className="form-input"
                    value={form.state}
                    onChange={(e) => set("state", e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--whatsapp btn--lg btn--full"
                style={{ marginTop: "1rem" }}
              >
                <WhatsApp size={20} />
                <span>I Have Paid — Send Proof &amp; Join Group</span>
              </button>

              <div style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", color: "var(--muted-light)" }}>
                <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                Instructor verifies payment proof directly before granting group admission.
              </div>
            </form>
          ) : (
            <div className="confirm-box">
              <div className="confirm-icon-wrap">
                <Tick size={36} />
              </div>

              <h3>Enrollment Details Submitted!</h3>
              <p>
                Thank you, <strong>{form.name}</strong>! Your registration has been captured.
              </p>

              <div className="confirm-steps-card">
                <h4>Next Step to Access the WhatsApp Community Group:</h4>
                <ol>
                  <li>
                    Click the green button below to open WhatsApp chat with <strong>{host.name}</strong>.
                  </li>
                  <li>
                    Attach a screenshot or receipt of your <strong>{formatNaira(coursePricing.actionTakersPrice)}</strong> bank transfer.
                  </li>
                  <li>
                    Once your payment is verified, you will immediately receive your invite link to join the VIP WhatsApp Group Community!
                  </li>
                </ol>
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--lg btn--full"
                style={{ marginBottom: "1rem" }}
              >
                <WhatsApp size={22} />
                <span>Open WhatsApp &amp; Send Payment Receipt</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="btn btn--outline btn--full"
                style={{ fontSize: "0.9rem" }}
              >
                Need to edit your details?
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

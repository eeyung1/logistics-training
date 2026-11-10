import { formatNaira, coursePricing, host } from "@/lib/site";

export default function CourseFaq() {
  const faqs = [
    {
      q: "How do I access the WhatsApp group community after paying?",
      a: `Once you complete your transfer of ${formatNaira(coursePricing.actionTakersPrice)}, simply submit the enrollment form. It immediately opens a pre-filled WhatsApp message to ${host.name}. Send your payment screenshot, and once verified, you will be sent your direct access link to the exclusive WhatsApp group community.`,
    },
    {
      q: "Do I really not need to own a motorbike, car, or dispatch license?",
      a: "No! Delivery coordination is an asset-light brokerage model. You partner with individuals who already have bikes and vehicles. You act as the brain and coordinator—matching vendor delivery orders to riders and earning ₦1,000–₦2,000 on every shipment.",
    },
    {
      q: "Can I do this part-time or alongside a 9-to-5 job or university?",
      a: "Yes. Coordination is managed entirely over WhatsApp and Google Sheets from your smartphone. You can schedule dispatches in the morning, during breaks, or handle after-work evening fulfillment without physically riding anywhere.",
    },
    {
      q: "How does the '1 Month Free Daily Leads' bonus work?",
      a: "You get plugged directly into Solution Virtues Logistics' active vendor dispatch request channels for 30 consecutive days. This allows you to immediately begin dispatching and earning profit while building your own long-term vendor roster.",
    },
    {
      q: "How does the Affiliate Hack work to get my course fee 100% refunded?",
      a: "Inside the members' community, you get your personal referral link. When you refer just 2 friends, colleagues, or vendors who enroll in the training, you receive a full 100% refund of your ₦30,000 fee—making your entire education completely free!",
    },
    {
      q: "What if I run into issues or don't know how to handle a difficult vendor?",
      a: "That's why the WhatsApp Community exists. You get direct support from Chinedu Aniakor and fellow practicing coordinators to review your rates, vet riders, and troubleshoot any live delivery situations.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="wrap wrap--narrow">
        <div className="section-head">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>Everything You Need To Know</h2>
          <p>
            Common questions about the coordination model, payment verification, and community access:
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details key={faq.q} className="faq-item" open={i === 0}>
              <summary className="faq-summary">{faq.q}</summary>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

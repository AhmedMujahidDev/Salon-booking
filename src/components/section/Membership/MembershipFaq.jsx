import Header from "@/components/common/Header"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"

const faqData = [
    {
        question: "What benefits do I get with a salon membership?",
        answer: "With a salon membership, you get exclusive discounts, priority bookings, special offers, and other member-only benefits.",
    },
    {
        question: "How does the membership program work?",
        answer: "Members enjoy exclusive discounts on services, priority booking, special birthday rewards, and access to member-only packages.",
    },
    {
        question: "Can I use my membership for all salon services?",
        answer: "Membership benefits may apply to selected salon services depending on your membership plan.",
    },
    {
        question: "Do members get priority booking?",
        answer: "Yes, members receive priority booking সুবিধা and early access to available appointment slots.",
    },
    {
        question: "Is the membership transferable?",
        answer: "Memberships are generally non-transferable and can only be used by the registered member.",
    },
    {
        question: "Can I cancel or upgrade my membership plan?",
        answer: "Yes, depending on the membership policy, you may be able to cancel or upgrade your plan.",
    },
    {
        question: "Do memberships include special discounts?",
        answer: "Yes, members receive exclusive discounts and special offers on selected salon services.",
    },
    {
        question: "How long is the membership valid?",
        answer: "The validity of your membership depends on the membership plan you choose.",
    },
]

const MembershipFaq = () => {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <Header
                    heading="Membership FAQs"
                    detail="Learn more about how our membership works, the benefits you receive, and how it helps
                            you enjoy premium salon services with added convenience."
                    dark={false} />

                <div className=" mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* Left Side - First 4 FAQs */}
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.slice(0, 4).map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`left-${index}`}
                                className="mb-4 rounded-md border px-5 transition-all duration-300 data-open:bg-black data-open:text-white cursor-pointer"
                            >
                                <AccordionTrigger className="py-6 text-lg font-bold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>

                                <AccordionContent className="pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Right Side - Last 4 FAQs */}
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.slice(4, 8).map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`right-${index}`}
                                className="mb-4 rounded-md border px-5 transition-all duration-300 data-open:bg-black data-open:text-white cursor-pointer"
                            >
                                <AccordionTrigger className="py-6 text-lg font-bold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>

                                <AccordionContent className="pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default MembershipFaq
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { trackWhatsAppClick } from '../../lib/pixel';

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah saya bisa update konten website sendiri?",
      answer: "Tentu saja! Kami memberikan panduan cara mengelola konten (gambar, teks, harga produk) sehingga Anda bisa melakukannya secara mandiri tanpa harus tergantung pada kami."
    },
    {
      question: "Berapa lama proses pengerjaannya?",
      answer: "Waktu pengerjaan bervariasi mulai dari 3 hingga 14 hari kerja, tergantung kompleksitas fitur yang Anda minta. Landing page sederhana biasanya selesai dalam 3-5 hari."
    },
    {
      question: "Apakah sudah termasuk Domain dan Hosting?",
      answer: "Ya, semua paket kami sudah termasuk biaya sewa domain (.com/.id) dan cloud hosting untuk tahun pertama. Anda terima beres dan website siap pakai."
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Kami menggunakan sistem Down Payment (DP) sebesar 50% untuk mulai pengerjaan, dan pelunasan 50% sisanya dilakukan setelah website selesai dan Anda puas dengan hasilnya."
    },
    {
      question: "Apakah websitenya aman dari serangan hacker?",
      answer: "Kami menerapkan standar keamanan dasar termasuk SSL (HTTPS) gratis dan optimasi koding untuk meminimalisir celah keamanan pada website Anda."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paling Sering Ditanyakan</h2>
          <p className="text-slate-600">
            Masih punya keraguan? Berikut adalah jawaban untuk beberapa pertanyaan umum.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 p-8 bg-primary rounded-2xl text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Masih ada pertanyaan lain?</h3>
          <p className="mb-8 text-lg">Jangan ragu untuk tanya langsung lewat WhatsApp. Tim kami siap membantu!</p>
          <a
            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Halo%20palugada.tech%2C%20ada%20yang%20ingin%20saya%20tanyakan%20lagi.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('faq_section')}
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-white text-primary font-bold hover:bg-slate-100 transition-colors"
          >
            Hubungi Lewat WA Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

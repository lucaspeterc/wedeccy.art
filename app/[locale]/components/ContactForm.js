"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function ContactForm({ artist, locale }) {
  const { t } = useTranslation('contactform', { locale }); // Pass the locale here
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value,
      email: e.target["email"].value,
      phoneNumber: e.target["phone-number"].value,
      message: e.target["message"].value,
    };
  
    if (!formData.email || !formData.message) {
      setFormStatus(t('contact:form_incomplete'));
      return;
    }
  
    try {
      const response = await fetch("/api/email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormStatus(t('contact:form_success'));
      } else {
        setFormStatus(t('contact:form_error'));
      }
    } catch (error) {
      console.error("Failed to send email", error);
      setFormStatus(t('contact:form_error'));
    }
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('contact:form1')}</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          {t('contact:form2')}
        </p>
      </div>
      <form id="contact-form" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form3')}
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form4')}
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form5')}
            </label>
            <div className="relative mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              {t('contact:form6')}
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-sm border-0 px-3.5 py-2 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 shadow-[8px_8px_0px] shadow-yellow-600"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white"
          >
            {t('contact:form7')}
          </button>
          {formStatus && <p className="mt-4 text-white">{formStatus}</p>}
        </div>
      </form>
    </div>
  );
}

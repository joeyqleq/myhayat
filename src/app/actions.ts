"use server";

export async function submitContactForm(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer here.
  // For now, we simulate the email sending process.
  console.log("Mocking email send to info@myhayat.app", rawFormData);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Your message has been sent successfully!",
  };
}

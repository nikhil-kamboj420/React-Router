import { Form } from "react-router-dom";

export const contactFormData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    const showData = Object.entries(data);
    alert(showData.map(([key, value]) => `${key}: ${value}`).join("\n"));
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const Contact = () => {
  return (
    <>
      <div className="flex gap-2.5">
        <div className="flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-3xl shadow-2xl contact-container">
            <h1 className="text-6xl font-bold text-gray-800">contact us</h1>
            <p className="text-3xl text-gray-600">
              Get in touch with us. We are always here to help you.
            </p>

            <Form action="/contact" method="POST">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-3xl font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  id="fullName"
                  placeholder="Enter Full Name"
                  className="block w-full border border-gray-300 rounded-2xl shadow-2xl focus:ring-red-500 focus:border-red-500 sm:text-3xl"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-3xl font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Abc@Thapa.Com"
                  className="block w-full border border-gray-300 rounded-2xl shadow-2xl focus:ring-red-500 focus:border-red-500 sm:text-3xl"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-3xl font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="We Are Always Here To Help You."
                  rows="12"
                  className="block w-full border max-h-[20vh] border-gray-300 rounded-2xl shadow-2xl focus:ring-red-500 focus:border-red-500 sm:text-3xl"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-700 rounded-2xl shadow-2xl focus:ring-4 focus:ring-red-500 focus:outline-none"
              >
                Send Message
              </button>
            </Form>
          </div>
        </div>
        <div className="max-w-[50vw]">
          <img src="/images/contact.png" alt="contact image" />
        </div>
      </div>
    </>
  );
};

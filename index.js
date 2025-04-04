import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center text-3xl font-bold text-blue-600">
        Current and Pipe Solution
      </header>
      <p className="text-center text-lg text-gray-700 mt-2">
        Trusted Electrical and Plumbing Services
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">About Us</h2>
        <p>
          We have years of experience in the electrical and plumbing fields. We offer safe and reliable services for homes, offices, and industries.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Home electrical wiring and setup</li>
          <li>Plumbing leak repairs and water line work</li>
          <li>Electrical appliance installations</li>
          <li>General maintenance and emergency services</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Work Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image src="/images/work1.jpg" width={400} height={300} alt="Work 1" className="rounded-lg shadow-md" />
          <Image src="/images/work2.jpg" width={400} height={300} alt="Work 2" className="rounded-lg shadow-md" />
          <Image src="/images/work3.jpg" width={400} height={300} alt="Work 3" className="rounded-lg shadow-md" />
          <Image src="/images/work4.jpg" width={400} height={300} alt="Work 4" className="rounded-lg shadow-md" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact</h2>
        <p>Name: <strong>M. Prabhu</strong></p>
        <p>Location: <strong>Idappadi</strong> - <a href="https://maps.google.com/?q=Idappadi" className="text-blue-600">View on Map</a></p>
        <p>Phone: <a href="tel:+916382828774" className="text-blue-600">+91 63828 28774</a></p>
        <p>WhatsApp: <a href="https://wa.me/916382828774" className="text-green-600">Chat on WhatsApp</a></p>
        <p>Email: <a href="mailto:electprabhu035@gmail.com" className="text-blue-600">electprabhu035@gmail.com</a></p>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Current and Pipe Solution. All rights reserved.
      </footer>
    </div>
  );
}
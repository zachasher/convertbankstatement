import React from 'react';

function privacypolicy() {
  return (
    <div className="text-black">
      <h1 className="text-5xl font-bold pb-4">Privacy Policy</h1>
      <p className='pb-4 font-bold'>Last Updated 07-12-2023</p>
      <ol>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>1. Introduction</h3>
          <p>
            Welcome to convertbankstatement.io. We are dedicated to protecting
            your privacy and ensuring that your personal information is handled
            in a secure and responsible manner. This Privacy Policy outlines how
            we collect, use, disclose, and safeguard your information when you
            use our tool for converting bank statements to CSV or Excel files.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-4'>2. Information Collection</h3>
          <ol className='pl-4'>
            <li className='pb-4'>
              <h3 className='text-2xl font-medium pb-2'>2.1 Personal Information</h3>
              <p>
                We collect personal information that you voluntarily provide to
                us when you use our service. This information may include your
                email address and any other details you choose to provide. In
                order to facilitate our service, we temporarily store the bank
                statements you wish to convert.
              </p>
            </li>
            <li>
              <h3 className='text-2xl font-medium pb-2'>2.2 Non-Personal Information</h3>
              <p>
                We may collect non-personal information such as usage data or
                device information to improve our services and user experience.
                Any collection of non-personal information will be conducted in
                accordance with this Privacy Policy and applicable laws.
              </p>
            </li>
          </ol>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>3. Information Use</h3>
          <p className="pb-2">We use the information collected to:</p>
          <ul className="pl-4">
            <li className="list-disc pb-2">Provide and maintain our service</li>
            <li className="list-disc pb-2">
              Communicate with you regarding your account and our services
            </li>
            <li className="list-disc pb-2">Improve our service offerings</li>
          </ul>
          <p>
            We do not share your personal information with third parties, except
            as required by law.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>4. Cookies and Tracking Technologies</h3>
          <p>
            We may use cookies and similar tracking technologies to enhance your
            experience on our website. You can manage cookies through your
            browser settings. Disabling cookies may affect the functionality of
            our service.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>5. Data Secucity</h3>
          <p>
            We take the security of your personal information seriously and
            implement appropriate measures to protect it. In the unlikely event
            of a data breach, we will notify affected users and take necessary
            steps to mitigate any potential harm.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>6. User Rights and Choices</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. To exercise these rights, please contact us at
            info@convertbankstatement.io
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>7. Data Retention</h3>
          <p>
            We retain your personal information for as long as necessary to
            provide our service. Bank statements are deleted from our system
            after 24 hours to ensure your data privacy.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>8. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any significant changes by updating the "Last Updated" date
            at the top of this Privacy Policy.
          </p>
        </li>
        <li className='pb-4'>
          <h3 className='text-2xl font-medium pb-2'>9. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at info@convertbankstatement.io
          </p>
        </li>
      </ol>
    </div>
  );
}

export default privacypolicy;
